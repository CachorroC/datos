export interface IntCarpetaRaw {
  numero: number;
  id: string;
  deudor: Deudor;
  capitalAdeudado: number;
  llaveProceso?: string;
  grupo: Grupo;
  demanda?: Demanda;
  tipoProceso?: TipoProceso;
}

export interface Demanda {
  vencimientoPagare?: string;
  obligacion?: number | string;
  obligacion2?: number | string;
  entregaGarantiasAbogado?: string;
  departamento?: Departamento;
  ciudad?: string;
  juzgado?: Juzgado;
  radicado?: number | string;
  etapaProcesal?: string;
}

export type Departamento =
  | 'CUNDINAMARCA'
  | 'TOLIMA'
  | 'BOYACÁ';

export interface Juzgado {
  origen: Ejecucion;
  ejecucion?: Ejecucion;
}

export interface Ejecucion {
  id?: number;
  tipo: string;
  url?: string;
}

export interface Deudor {
  cedula: number | string;
  nombreCompleto: string;
  tel?: number | string;
  email?: number | string;
  direccion?: string;
}

export type Grupo =
  | 'Terminados'
  | 'LiosJuridicos'
  | 'Bancolombia'
  | 'Reintegra'
  | 'Insolvencia';

export type TipoProceso =
  | 'PRENDARIO'
  | 'HIPOTECARIO'
  | 'SINGULAR'
  | 'HMM PISO 1';

export declare class Convert {
  static toIntCarpetaRaw(
    json: string
  ): IntCarpetaRaw;
  static intCarpetaRawToJson(
    value: IntCarpetaRaw
  ): string;
  static toDemanda( json: string ): Demanda;
  static demandaToJson( value: Demanda ): string;
  static toJuzgado( json: string ): Juzgado;
  static juzgadoToJson( value: Juzgado ): string;
  static toEjecucion( json: string ): Ejecucion;
  static ejecucionToJson(
    value: Ejecucion
  ): string;
  static toDeudor( json: string ): Deudor;
  static deudorToJson( value: Deudor ): string;
}
