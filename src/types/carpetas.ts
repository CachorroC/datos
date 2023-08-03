// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpeta = Convert.toIntCarpeta(json);

export interface IntCarpeta {
  numero: number;
  id: string;
  deudor: Deudor;
  capitalAdeudado: number;
  llaveProceso?: string;
  grupo: Grupo;
  demanda: Demanda;
  tipoProceso?: TipoProceso;
}

export interface Demanda {
  obligacion: Array<number | null | string>;
  juzgado: Juzgado;
  despachoActivo: DespachoActivo;
  vencimientoPagare?: string;
  obligacion2?: number | string;
  entregaGarantiasAbogado?: string;
  departamento?: Departamento;
  ciudad?: string;
  radicado?: number | string;
  etapaProcesal?: string;
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
  origen: DespachoActivo;
  ejecucion: DespachoActivo;
}

export interface Deudor {
  cedula: number | string;
  nombreCompleto: string;
  primerNombre: string;
  segundoNombre?: string;
  primerApellido: string;
  segundoApellido?: string;
  tel: Tel;
  email?: number | string;
  direccion?: string;
}

export interface Tel {
  fijo: string;
  celular: string;
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
  public static toIntCarpeta(
    json: string
  ): IntCarpeta {
    return JSON.parse(
      json 
    );
  }

  public static intCarpetaToJson(
    value: IntCarpeta
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toDemanda(
    json: string 
  ): Demanda {
    return JSON.parse(
      json 
    );
  }

  public static demandaToJson(
    value: Demanda
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toDespachoActivo(
    json: string
  ): DespachoActivo {
    return JSON.parse(
      json 
    );
  }

  public static despachoActivoToJson(
    value: DespachoActivo
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toJuzgado(
    json: string 
  ): Juzgado {
    return JSON.parse(
      json 
    );
  }

  public static juzgadoToJson(
    value: Juzgado
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toDeudor(
    json: string 
  ): Deudor {
    return JSON.parse(
      json 
    );
  }

  public static deudorToJson(
    value: Deudor
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toTel(
    json: string 
  ): Tel {
    return JSON.parse(
      json 
    );
  }

  public static telToJson(
    value: Tel 
  ): string {
    return JSON.stringify(
      value 
    );
  }
}
