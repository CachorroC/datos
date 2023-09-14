import { Category,
         IntCarpeta,
         IntCarpetaRaw,
         IntDemanda,
         IntDeudor,
         TipoProcesoRaw } from '../types/carpetas';
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
      tipoProceso,
      numero
    }: IntCarpetaRaw 
  ) {
    const stringLlaveProceso
      = typeof llaveProceso === 'string';

    if ( stringLlaveProceso ) {
      this.llaveProceso = llaveProceso;
    } else {
      this.llaveProceso = llaveProceso.toString();
    }
    this.category = category;
    this.numero = numero;
    this.tipoProceso = tipoProceso;
    this.categoryTag
      = categories.indexOf(
        category 
      );
    this.deudor = new Deudor(
      deudor 
    );
    this.demanda = new Demanda(
      demanda,
      [],
      llaveProceso
    );
  }

  category: Category;
  categoryTag: number;
  demanda: IntDemanda;
  deudor: IntDeudor;
  numero: number;
  tipoProceso: TipoProcesoRaw;

  set llaveProceso(
    x: string 
  ) {
    this.llaveProceso = x;
  }
  get llaveProceso() {
    return this.llaveProceso;
  }
}
