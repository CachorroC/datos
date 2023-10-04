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
  constructor(
    {
      llaveProceso,
      category,
      deudor,
      demanda,
      numero
    }: CarpetaRaw, RequestProcesos? : intProceso[]
  ) {
    const stringLlaveProceso
      = typeof llaveProceso === 'string';

    if ( stringLlaveProceso ) {
      this.llaveProceso = llaveProceso;
    } else {
      this.llaveProceso = llaveProceso?.toString();
    }

    this.category = category;
    this.numero = numero;
    this.tipoProceso = demanda.tipoProceso as TipoProceso;

    this.deudor = new Deudor(
      deudor
    );
    this.demanda = new Demanda(
      demanda,
      RequestProcesos,
      llaveProceso
    );
    this.cc = Number(
      deudor.cedula
    );

    if ( RequestProcesos ) {
      const idProcesosSet = new Set<number>();

      for ( const proceso of RequestProcesos ) {
        if ( proceso.esPrivado ) {
          continue;
        }

        idProcesosSet.add(
          proceso.idProceso
        );

      }

      this.idProcesos = Array.from(
        idProcesosSet
      );
    }
  }
  numero: number;
  cc?: number ;
  llaveProceso?: string ;
  idProcesos?: number[] ;
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
      ? this.deudor.primerApellido + ' ' + this.deudor.segundoApellido
      : this.deudor.primerApellido;

    const rawName = nombres + apellidos;

    return rawName;
  }

}
