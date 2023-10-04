// To parse this data:
//
//   import { Convert } from "./file
//
//   const CarpetaRaw = Convert.toCarpetaRaw(json);

export interface TrulyCruda {
  llaveProceso?: string;
  demanda: DemandaRaw;
  deudor: DeudorRaw;
  numero: number;
}

export interface CarpetaRaw extends TrulyCruda {
  category: Category;
}

export interface IntCarpeta {
  numero: number;
  cc?: number;
  llaveProceso?: string;
  idProcesos?: number[];
  category: Category;
  tipoProceso: TipoProceso;
  nombre: string;
  deudor: IntDeudor;
  demanda: IntDemanda;
}

export interface flatCarpeta {
  llaveProceso?: string;
  idProcesos?: number[];
  category: Category;
  categoryTag: number;
  deudor: IntDeudor;
  numero: number;
  tipoProceso: TipoProcesoRaw;

  capitalAdeudado: number;
  departamento: string | null;
  entregaGarantiasAbogado: Date;
  mandamientoPago: Date;
  etapaProcesal?: string;
  fechaPresentacion?: Date;
  municipio: string;
  obligacion: Obligacion;
  radicado: string;
  vencimientoPagare: Date[];
  juzgados: Juzgado[];
}

export type Obligacion = {
  A?: string | number;
  B?: string | number;
};

export type Category =
  | 'Terminados'
  | 'LiosJuridicos'
  | 'Bancolombia'
  | 'Reintegra'
  | 'Insolvencia'
  | 'sin Especificar'
  | 'todos';

export interface DemandaRaw {
  capitalAdeudado?: number | string;
  departamento?: DepartamentoRaw;
  entregaGarantiasAbogado?: number | string;
  tipoProceso: TipoProcesoRaw;
  mandamientoPago?: string;
  etapaProcesal?: number | string;
  fechaPresentacion?: number | string;
  municipio?: string;
  obligacion?: {
    A?: number | string;
    B?: number | string;
  };
  radicado?: number | string;
  vencimientoPagare?: number | string;
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
  | 'CNDINAMARCA'
  | '';

export interface DeudorRaw {
  cedula: number | string;
  direccion?: number | string;
  email?: number | string;
  nombre: string;
  telefono?: number | string;
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
  capitalAdeudado: number | null;
  departamento: string | null;
  entregaGarantiasAbogado?: Date | null;
  tipoProceso: TipoProcesoRaw;
  mandamientoPago: Date | null;
  etapaProcesal: string | null;
  fechaPresentacion: Date | null;
  municipio: string | null;
  obligacion: Obligacion | null;
  radicado: string | null;
  vencimientoPagare: Date[] | null;
  expediente: string | null;
  juzgados: Juzgado[] | null;
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
  | 'ACUMULADO'
  | 'HIPOTECARIO ';

export type TipoProceso =
  | 'HIPOTECARIO'
  | 'PRENDARIO'
  | 'SINGULAR'
  | 'ACUMULADO';
