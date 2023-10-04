import { Category,
         IntCarpeta,
         CarpetaRaw,
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

      numero
    }: CarpetaRaw
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
    this.tipoProceso = demanda.tipoProceso;
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

  llaveProceso?: string;
}
