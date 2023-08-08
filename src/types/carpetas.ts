
export interface intConsultaNumeroRadicacion {
  tipoConsulta: string;
  procesos: intProceso[];
  parametros: intParametros;
  paginacion: intPaginacion;
}

export interface intPaginacion {
  cantidadRegistros: number;
  registrosPagina: number;
  cantidadPaginas: number;
  pagina: number;
  paginas: null;
}

export interface intParametros {
  numero: string;
  nombre: null;
  tipoPersona: null;
  idSujeto: null;
  ponente: null;
  claseProceso: null;
  codificacionDespacho: null;
  soloActivos: boolean;
}

export interface intProceso {
  idProceso: number;
  idConexion: number;
  llaveProceso: string;
  fechaProceso?: string | null;
  fechaUltimaActuacion?: string | null;
  despacho: string;
  departamento: string;
  sujetosProcesales: string;
  esPrivado: boolean;
  cantFilas: number;
}

// To parse this data:
//
//   import { Convert } from "./file";
//


export interface IntCarpetaRaw {

    capitalAdeudado: number;
    demanda:         rawDemanda;
    deudor:          rawDeudor;
    fecha?:          string;
    grupo:           Grupo;
    id:              number | null;
    idProceso?:      number;
    llaveProceso?:   string;
    numero:          number;
    tipoProceso?:    TipoProceso;
    fechas?:         string[];
    nombre?:         string;
    idProcesos?:     Array<number[] | number>;
}


export interface rawDemanda {
    ciudad?:                 string;
    departamento?:           Departamento;
    entregaGarantiasAbogado: string | null;
    etapaProcesal?:          string;
    juzgado:                 rawJuzgado[];
    obligacion?:             ( number | string )[];
    radicado?:               number | string;
    vencimientoPagare:       string | null;
}


export interface rawDeudor {
    cedula:           number | string;
    direccion?:       string;
    primerApellido:   string;
    primerNombre:     string;
    segundoApellido?: string;
    segundoNombre?:   string;
    tel:              Tel;
    email?:           number | string;
}
//   const intCarpeta = Convert.toIntCarpeta(json);

export interface IntCarpeta {
  capitalAdeudado: number;
  demanda: Demanda;
  deudor: Deudor;
  grupo: Grupo;
  id: number;
  idProcesos?: number[];

  llaveProceso?: string;
  numero: number;
  tipoProceso?: TipoProceso;
}

export interface Demanda {
  ciudad?: string;
  departamento?: Departamento;
  entregaGarantiasAbogado: Date;
  etapaProcesal?: string;
  juzgado: Juzgado[];
  obligacion?: ( number | string )[];
  radicado?: number | string;
  vencimientoPagare?: Date;
}

export type Departamento =
  | 'CUNDINAMARCA'
  | 'TOLIMA'
  | 'BOYACÁ';

export interface DespachoActivo {
  tipo: Tipo;
  id: number | string;
  url?: string;
}

export type Tipo =
  | 'unknown'
  | 'Civil Municipal de Ejecucion'
  | 'Civil Municipal'
  | ' CCTO EJ'
  | ' CIVIL CTO'
  | ' PM'
  | ' C CTO E'
  | 'Pequeñas Causas y Competencias Multiples'
  | 'Civil Municipal/ Civil Municipal'
  | ' CCTOEJ'
  | 'Civil Municipal // Civil Municipal'
  | ' CCTO/ CCTOE'
  | 'Civil Municipal //  PCCivil Municipal'
  | 'Civil Municipal DESG / Civil Municipal'
  | '  Pequeñas Causas y Competencias Multiples'
  | 'SINGULAR'
  | ' Pequeñas Causas y Competencias Multiples'
  | ' Pequeñas Causas y Competencias Multiples/ Civil Municipal'
  | 'Civil Municipal / PCC'
  | ' CCTO'
  | 'Civil Municipal/Civil Municipal'
  | ' CC'
  | 'Civil Municipal/Civil Municipal de Ejecucion'
  | ' Civil Municipal';

export interface Juzgado {
    id:   number;
    tipo: string;
    url: string;
}

export interface rawJuzgado {
    id:   number;
    tipo: string;
    url?: string;
}

export interface Deudor {
  cedula: number;
  primerNombre: string;
  segundoNombre?: string;
  primerApellido: string;
  segundoApellido?: string;
  tel: Tel;
  email?:  string;
  direccion?: string;
}

export interface Tel {
  fijo: number
  celular: number;
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

// Converts JSON strings to/from your types
export class Convert {
  public static toIntCarpeta( json: string ): IntCarpeta {
    return JSON.parse( json );
  }

  public static intCarpetaToJson( value: IntCarpeta ): string {
    return JSON.stringify( value );
  }

  public static toDemanda( json: string ): Demanda {
    return JSON.parse( json );
  }

  public static demandaToJson( value: Demanda ): string {
    return JSON.stringify( value );
  }

  public static toDespachoActivo( json: string ): DespachoActivo {
    return JSON.parse( json );
  }

  public static despachoActivoToJson( value: DespachoActivo ): string {
    return JSON.stringify( value );
  }

  public static toJuzgado( json: string ): Juzgado {
    return JSON.parse( json );
  }

  public static juzgadoToJson( value: Juzgado ): string {
    return JSON.stringify( value );
  }

  public static toDeudor( json: string ): Deudor {
    return JSON.parse( json );
  }

  public static deudorToJson( value: Deudor ): string {
    return JSON.stringify( value );
  }

  public static toTel( json: string ): Tel {
    return JSON.parse( json );
  }

  public static telToJson( value: Tel ): string {
    return JSON.stringify( value );
  }
}
