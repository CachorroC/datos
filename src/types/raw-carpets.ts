// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpetaRaw = Convert.toIntCarpetaRaw(json);

export interface IntCarpetaRaw {
    _id:             string;
    numero:          number;
    id:              number | string;
    deudor:          Deudor;
    demanda:         Demanda;
    capitalAdeudado: number;
    tipoProceso?:    TipoProceso;
    llaveProceso?:   string;
    grupo:           Grupo;
    idProceso?:      number[];
    fecha?:          Date;
    idProcesos?:     number[];
}

export interface Demanda {
    vencimientoPagare?:       string;
    obligacion:               Array<number | null | string>;
    entregaGarantiasAbogado?: string;
    departamento?:            Departamento;
    ciudad?:                  string;
    juzgado:                  Juzgado;
    radicado?:                number | string;
    etapaProcesal?:           string;
    despachoActivo?:          DespachoActivo;
    obligacion2?:             number | string;
}

export type Departamento = 'CUNDINAMARCA' | 'BOYACÁ' | 'TOLIMA';

export interface DespachoActivo {
    id:   number | string;
    tipo: string;
    url?: string;
}

export interface Juzgado {
    origen:     DespachoActivo;
    ejecucion?: DespachoActivo;
}

export interface Deudor {
    cedula:           number | string;
    nombreCompleto:   string;
    tel:              Tel;
    direccion?:       string;
    primerNombre:     string;
    segundoNombre?:   string;
    primerApellido:   string;
    segundoApellido?: string;
    email?:           number | string;
}

export interface Tel {
    fijo?:    number | string;
    celular?: number | string;
}

export type Grupo = 'Reintegra' | 'Insolvencia' | 'Bancolombia' | 'LiosJuridicos';

export type TipoProceso = 'PRENDARIO' | 'SINGULAR' | 'HIPOTECARIO' | 'HMM PISO 1';

// Converts JSON strings to/from your types
export class Convert {
  public static toIntCarpetaRaw(
    json: string
  ): IntCarpetaRaw {
    return JSON.parse(
      json
    );
  }

  public static intCarpetaRawToJson(
    value: IntCarpetaRaw
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
