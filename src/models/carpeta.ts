import {
  Category,
  IntCarpeta,
  CarpetaRaw,
  IntDemanda,
  IntDeudor,
  TipoProceso,
  IntCarpetaPrueba,
  IntDemandaPrueba,
  IntDeudorPrueba
} from '../types/carpetas';
import { intProceso } from '../types/procesos';
import {
  Demanda,
  DemandaPrueba
} from './demanda';
import { Deudor, DeudorPrueba } from './deudor';

export const categories = [
  'nn',
  'Bancolombia',
  'Reintegra',
  'LiosJuridicos',
  'Insolvencia',
  'Terminados'
];

export class Carpeta implements IntCarpeta {
  _llaveProceso: string | null;

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
    this._llaveProceso = llaveProceso
      ? llaveProceso
      : null;
    this.category = category;
    this.numero = numero;
    this.tipoProceso =
      demanda.tipoProceso as TipoProceso;
    this.deudor = new Deudor(deudor);
    this.cc = Number(deudor.cedula);

    if (RequestProcesos) {
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

  category: Category;
  tipoProceso: TipoProceso;

  deudor: IntDeudor;
  demanda: IntDemanda;
  get nombre() {
    const nombres =
      this.deudor.primerNombre +
      (this.deudor.segundoNombre
        ? ' ' + this.deudor.segundoNombre
        : ' ');

    const apellidos = this.deudor.segundoApellido
      ? this.deudor.primerApellido +
        ' ' +
        this.deudor.segundoApellido
      : this.deudor.primerApellido;

    const rawName = nombres + apellidos;

    return rawName;
  }

  set llaveProceso(llave: string) {
    const fixedllave = llave.trim();

    const llaveLength = fixedllave.length;

    if (llaveLength < 23) {
      throw new Error(
        'la llaveProceso para esta clase es menor a 23 caracteres'
      );
    }

    this._llaveProceso = fixedllave;
  }
  get llaveProceso() {
    return (
      this._llaveProceso ?? 'Sin especificar'
    );
  }
}

export class CarpetaPrueba
  implements IntCarpetaPrueba
{
  _llaveProceso: string | null;

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
    this._llaveProceso = llaveProceso
      ? llaveProceso
      : null;
    this.category = category;
    this.numero = numero;
    this.tipoProceso =
      demanda.tipoProceso as TipoProceso;
    this.deudor = new DeudorPrueba(deudor);
    this.cc = Number(deudor.cedula);

    if (RequestProcesos) {
      this.idProcesos = RequestProcesos.map(
        (proceso) => {
          return proceso.idProceso;
        }
      );

      this.demanda = new DemandaPrueba(
        demanda,
        llaveProceso,
        RequestProcesos
      );
    } else {
      this.idProcesos = null;
      this.demanda = new DemandaPrueba(
        demanda,
        llaveProceso
      );
    }
  }
  numero: number;
  cc: number;
  idProcesos: number[] | null;
  category: Category;
  tipoProceso: TipoProceso;
  deudor: IntDeudorPrueba;
  demanda: IntDemandaPrueba;
  get nombre() {
    const nombres =
      this.deudor.primerNombre +
      (this.deudor.segundoNombre
        ? ' ' + this.deudor.segundoNombre
        : ' ');

    const apellidos = this.deudor.segundoApellido
      ? this.deudor.primerApellido +
        ' ' +
        this.deudor.segundoApellido
      : this.deudor.primerApellido;

    const rawName = nombres + apellidos;

    return rawName;
  }

  set llaveProceso(llave: string) {
    const fixedllave = llave.trim();

    const llaveLength = fixedllave.length;

    if (llaveLength < 23) {
      throw new Error(
        'la llaveProceso para esta clase es menor a 23 caracteres'
      );
    }

    this._llaveProceso = fixedllave;
  }
  get llaveProceso() {
    return (
      this._llaveProceso ?? 'Sin especificar'
    );
  }
}
