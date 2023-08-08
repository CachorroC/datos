// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpetaRaw = Convert.toIntCarpetaRaw(json);

import { ObjectId } from 'mongodb';

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
    juzgado:                 Juzgado[];
    obligacion?:             ( number | string )[];
    radicado?:               number | string;
    vencimientoPagare:       string | null;
}

export type Departamento = 'CUNDINAMARCA' | 'BOYACÁ' | 'TOLIMA';

export interface Juzgado {
    id:   number;
    tipo: string;
    url?: string;
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

export interface Tel {
    celular: number | null;
    fijo:    number | null;
}

export type Grupo = 'Reintegra' | 'Insolvencia' | 'Bancolombia' | 'LiosJuridicos';

export type TipoProceso = 'PRENDARIO' | 'SINGULAR' | 'HIPOTECARIO' | 'HMM PISO 1';

// Converts JSON strings to/from your types
export class Convert {
  public static toIntCarpetaRaw( json: string ): IntCarpetaRaw[] {
    return JSON.parse( json );
  }

  public static intCarpetaRawToJson( value: IntCarpetaRaw[] ): string {
    return JSON.stringify( value );
  }
}


export interface IntCarpetaFresh {

  numero: number;
  id: number;
  deudor: freshDeudor;
  demanda?: freshDemanda;
  capitalAdeudado: number;
  tipoProceso: TipoProceso;
  llaveProceso?: string;
  grupo: Grupo;
  idProceso?: number[];
  fecha?: Date;
}

export interface freshDemanda {
  vencimientoPagare: Date | null;
  obligacion: Array<number | null | string>;
  entregaGarantiasAbogado: Date | null;
  departamento: Departamento | null;
  ciudad: string | null;
  juzgado: {
    origen: {
      id: number;
      tipo: string;
      url?: string;
    };
    ejecucion?: {
      id: number;
      tipo: string;
      url?: string;
    };
  };
  radicado: string | null | number;
  etapaProcesal: string | null;
}




export interface freshDeudor {
  cedula: number;
  tel: Tel;
  direccion?: string;
  primerNombre: string;
  segundoNombre?: string;
  primerApellido: string;
  segundoApellido?: string;
  email?: string;
}
