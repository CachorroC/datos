// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpetaRaw = Convert.toIntCarpetaRaw(json);

export interface IntCarpetaRaw {
  llaveProceso: number | string;
  category: Category;
  demanda: DemandaRaw;
  deudor: DeudorRaw;
  numero: number;
  tipoProceso: TipoProcesoRaw;
}

export interface IntCarpeta {
  llaveProceso?: string;
  category: Category;
  categoryTag: number;
  demanda: IntDemanda;
  deudor: IntDeudor;
  numero: number;
  tipoProceso: TipoProcesoRaw;
  idProceso?: number;
}

export type Category =
  | 'Terminados'
  | 'LiosJuridicos'
  | 'Bancolombia'
  | 'Reintegra'
  | 'Insolvencia';

export interface DemandaRaw {
  capitalAdeudado: number | string;
  departamento: DepartamentoRaw;
  entregaGarantiasAbogado: number | string;
  etapaProcesal?: number | string;
  fechaPresentacion?: number | string;
  municipio: string;
  obligacion: { [key: string]: number | string };
  radicado: number | string;
  vencimientoPagare: number | string;
}

export type DepartamentoRaw =
  | 'CUNDINAMARCA'
  | 'CUNDINNAMARCA'
  | 'CUNDINAMARCA '
  | '18/01/2018'
  | 'SINGULAR'
  | 'HIPOTECARIO'
  | 'TOLIMA'
  | 'CUN DINAMARCA'
  | 'CUNDINNAMARCA '
  | 'BOYACÁ'
  | 'CUNDINAMRCA'
  | 'CNDINAMARCA';

export interface DeudorRaw {
  cedula: number | string;
  direccion: number | string;
  email: number | string;
  nombre: string;
  telefono: number | string;
}

export interface IntDeudor {
  cedula: number;
  direccion?: string;
  email?: string;
  primerNombre: string;
  segundoNombre?: string;
  primerApellido: string;
  segundoApellido?: string;
  tel: IntTel;
}

export interface IntTel {
  fijo?: number;
  celular?: number;
}

export interface IntDemanda {
  capitalAdeudado: number | string;
  departamento: {
    idCatalogoDetalle: number;
    idCatalogoDetallePadre: number;
    descripcion: string;
    codigo: string;
  } | null;
  entregaGarantiasAbogado: Date;
  etapaProcesal?: string;
  fechaPresentacion?: Date;
  municipio: string;
  obligacion: { [key: string]: number | string };
  radicado: string;
  vencimientoPagare?: Date;
  expediente?: string;
  juzgados: Juzgado[];
}

export interface Juzgado {
  id: number;
  tipo: string;
  url: string;
}

export type TipoProcesoRaw =
  | 'HIPOTECARIO'

  | 'PRENDARIO'
  | 'SINGULAR'
  | 'SINGULAR ACUMULADO CON HIPOTECARIO'
  | 'SINGULAR ACUM HIPOTECARIO'
  | '11001400308320170071700'
  | '25473418900120170092400'
  | 'PRENDARO'
  | ' HIPOTECARIO'
  | 'HMM PISO 1'
  | '  SINGULAR'
  | 'HIPOTECARIA'
  | 'HIPOTECARO'
  | 'SINGULAR ACUMULADO CON HIPOTECARIO CAJA SOCIAL'
  | 'SOACHA'
  |'ACUMULADO'
  | 'HIPOTECARIO ';

export type TipoProceso =
  | 'HIPOTECARIO'
  | 'PRENDARIO'
  | 'SINGULAR'
  | 'ACUMULADO';
