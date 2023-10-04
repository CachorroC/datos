import { Category,
         IntCarpeta,
         CarpetaRaw,
         IntDemanda,
         IntDeudor,
         TipoProceso } from '../types/carpetas';
import { intProceso } from '../types/procesos';
import { Demanda } from './demanda';
import { Deudor } from './deudor';

export const categories = [
  'nn',
  'Bancolombia',
  'Reintegra',
  'LiosJuridicos',
  'Insolvencia',
  'Terminados'
];

export class Carpeta implements IntCarpeta {
  idProcesos?: number[];
  constructor(
    {
      llaveProceso,
      category,
      deudor,
      demanda,
      numero
    }: CarpetaRaw,
    RequestProcesos?: intProceso[]
  ) {
    this.llaveProceso = llaveProceso;
    this.category = category;
    this.numero = numero;
    this.tipoProceso
      = demanda.tipoProceso as TipoProceso;
    this.deudor = new Deudor(
      deudor 
    );
    this.cc = Number(
      deudor.cedula 
    );

    if ( RequestProcesos ) {
      this.idProcesos = RequestProcesos.map(
        (
          proceso 
        ) => {
          return proceso.idProceso;
        }
      );
      this.demanda = new Demanda(
        demanda,
        llaveProceso,
        RequestProcesos
      );
    } else {
      this.demanda = new Demanda(
        demanda,
        llaveProceso
      );
    }
  }
  numero: number;
  cc?: number;
  llaveProceso?: string;

  category: Category;
  tipoProceso: TipoProceso;

  deudor: IntDeudor;
  demanda: IntDemanda;
  get nombre() {
    const nombres
      = this.deudor.primerNombre
      + ( this.deudor.segundoNombre
        ? ' ' + this.deudor.segundoNombre
        : ' ' );

    const apellidos = this.deudor.segundoApellido
      ? this.deudor.primerApellido
        + ' '
        + this.deudor.segundoApellido
      : this.deudor.primerApellido;

    const rawName = nombres + apellidos;

    return rawName;
  }
}
