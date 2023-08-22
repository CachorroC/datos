/* eslint-disable @typescript-eslint/no-explicit-any */
// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpeta = Convert.toIntCarpeta(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface IntCarpeta {
  _id: string;
  demanda: Demanda;
  category: Category;
  deudor: Deudor;
  numero: number;
  llaveProceso: string;
  tipoProceso: TipoProceso;
  idProceso: number;
  fecha?: Date | string;
}

export type Category =
  | 'Terminados'
  | 'LiosJuridicos'
  | 'Bancolombia'
  | 'Reintegra'
  | 'Insolvencia';

export interface Demanda {
  departamento: Departamento | null;
  capitalAdeudado: number | null;
  entregagarantiasAbogado: Date | string;
  etapaProcesal: null | string;
  fechaPresentacion: string | Date;
  municipio: string;
  obligacion: { [key: string]: Obligacion };
  radicado: string;
  vencimientoPagare: string | Date;
  expediente: string;
  juzgados: Juzgado[];
}

export interface Departamento {
  idCatalogoDetalle: number;
  idCatalogoDetallePadre: number;
  descripcion: Descripcion;
  codigo: string;
}

export type Descripcion =
  | 'CUNDINAMARCA'
  | 'TOLIMA';

export interface Juzgado {
  id: number;
  tipo: string;
  url: string;
}

export type Obligacion = number | string;

export interface Deudor {
  tel: Tel;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  cedula: number | null;
  direccion: string;
  email: string;
}

export interface Tel {
  fijo: number[] | null;
  celular: number[] | null;
}

export type TipoProceso =
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
  | 'SOACHA';

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toIntCarpetas(
    json: string
  ): IntCarpeta[] {
    return cast(
      JSON.parse(json),
      a(r('IntCarpeta'))
    );
  }

  public static intCarpetasToJson(
    value: IntCarpeta[]
  ): string {
    return JSON.stringify(
      uncast(value, a(r('IntCarpeta'))),
      null,
      2
    );
  }
}

function invalidValue(
  typ: any,
  val: any,
  key: any,
  parent: any = ''
): never {
  const prettyTyp = prettyTypeName(typ);

  const parentText = parent
    ? ` on ${parent}`
    : '';

  const keyText = key ? ` for key "${key}"` : '';

  throw Error(
    `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(
      val
    )}`
  );
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (
      typ.length === 2 &&
      typ[0] === undefined
    ) {
      return `an optional ${prettyTypeName(
        typ[1]
      )}`;
    }

    return `one of [${typ
      .map((a) => {
        return prettyTypeName(a);
      })
      .join(', ')}]`;
  } else if (
    typeof typ === 'object' &&
    typ.literal !== undefined
  ) {
    return typ.literal;
  }

  return typeof typ;
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => {
      return (map[p.json] = {
        key: p.js,
        typ: p.typ
      });
    });
    typ.jsonToJS = map;
  }

  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => {
      return (map[p.js] = {
        key: p.json,
        typ: p.typ
      });
    });
    typ.jsToJSON = map;
  }

  return typ.jsToJSON;
}

function transform(
  val: any,
  typ: any,
  getProps: any,
  key: any = '',
  parent: any = ''
): any {
  function transformPrimitive(
    typ: string,
    val: any
  ): any {
    if (typeof typ === typeof val) {
      return val;
    }

    return invalidValue(typ, val, key, parent);
  }

  function transformUnion(
    typs: any[],
    val: any
  ): any {
    // val must validate against one typ in typs
    const l = typs.length;

    for (let i = 0; i < l; i++) {
      const typ = typs[i];

      try {
        return transform(val, typ, getProps);
      } catch (_) {
        /* empty */
      }
    }

    return invalidValue(typs, val, key, parent);
  }

  function transformEnum(
    cases: string[],
    val: any
  ): any {
    if (cases.indexOf(val) !== -1) {
      return val;
    }

    return invalidValue(
      cases.map((a) => {
        return l(a);
      }),
      val,
      key,
      parent
    );
  }

  function transformArray(
    typ: any,
    val: any
  ): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) {
      return invalidValue(
        l('array'),
        val,
        key,
        parent
      );
    }

    return val.map((el) => {
      return transform(el, typ, getProps);
    });
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }

    const d = new Date(val);

    if (isNaN(d.valueOf())) {
      return invalidValue(
        l('Date'),
        val,
        key,
        parent
      );
    }

    return d;
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (
      val === null ||
      typeof val !== 'object' ||
      Array.isArray(val)
    ) {
      return invalidValue(
        l(ref || 'object'),
        val,
        key,
        parent
      );
    }

    const result: any = {};
    Object.getOwnPropertyNames(props).forEach(
      (key) => {
        const prop = props[key];

        const v =
          Object.prototype.hasOwnProperty.call(
            val,
            key
          )
            ? val[key]
            : undefined;
        result[prop.key] = transform(
          v,
          prop.typ,
          getProps,
          key,
          ref
        );
      }
    );
    Object.getOwnPropertyNames(val).forEach(
      (key) => {
        if (
          !Object.prototype.hasOwnProperty.call(
            props,
            key
          )
        ) {
          result[key] = val[key];
        }
      }
    );

    return result;
  }

  if (typ === 'any') {
    return val;
  }

  if (typ === null) {
    if (val === null) {
      return val;
    }

    return invalidValue(typ, val, key, parent);
  }

  if (typ === false) {
    return invalidValue(typ, val, key, parent);
  }
  let ref: any = undefined;

  while (
    typeof typ === 'object' &&
    typ.ref !== undefined
  ) {
    ref = typ.ref;
    typ = typeMap[typ.ref];
  }

  if (Array.isArray(typ)) {
    return transformEnum(typ, val);
  }

  if (typeof typ === 'object') {
    return Object.prototype.hasOwnProperty.call(
      typ,
      'unionMembers'
    )
      ? transformUnion(typ.unionMembers, val)
      : Object.prototype.hasOwnProperty.call(
          typ,
          'arrayItems'
        )
      ? transformArray(typ.arrayItems, val)
      : Object.prototype.hasOwnProperty.call(
          typ,
          'props'
        )
      ? transformObject(
          getProps(typ),
          typ.additional,
          val
        )
      : invalidValue(typ, val, key, parent);
  }

  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') {
    return transformDate(val);
  }

  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
  return {
    literal: typ
  };
}

function a(typ: any) {
  return {
    arrayItems: typ
  };
}

function u(...typs: any[]) {
  return {
    unionMembers: typs
  };
}

function o(props: any[], additional: any) {
  return {
    props,
    additional
  };
}

function m(additional: any) {
  return {
    props: [],
    additional
  };
}

function r(name: string) {
  return {
    ref: name
  };
}

const typeMap: any = {
  IntCarpeta: o(
    [
      {
        json: '_id',
        js: '_id',
        typ: ''
      },
      {
        json: 'demanda',
        js: 'demanda',
        typ: r('Demanda')
      },
      {
        json: 'category',
        js: 'category',
        typ: r('Category')
      },
      {
        json: 'deudor',
        js: 'deudor',
        typ: r('Deudor')
      },
      {
        json: 'numero',
        js: 'numero',
        typ: 0
      },
      {
        json: 'llaveProceso',
        js: 'llaveProceso',
        typ: ''
      },
      {
        json: 'tipoProceso',
        js: 'tipoProceso',
        typ: r('TipoProceso')
      },
      {
        json: 'idProceso',
        js: 'idProceso',
        typ: 0
      },
      {
        json: 'fecha',
        js: 'fecha',
        typ: u(undefined, Date)
      }
    ],
    false
  ),
  Demanda: o(
    [
      {
        json: 'departamento',
        js: 'departamento',
        typ: u(r('Departamento'), null)
      },
      {
        json: 'capitalAdeudado',
        js: 'capitalAdeudado',
        typ: u(3.14, null)
      },
      {
        json: 'entregagarantiasAbogado',
        js: 'entregagarantiasAbogado',
        typ: Date
      },
      {
        json: 'etapaProcesal',
        js: 'etapaProcesal',
        typ: u(null, '')
      },
      {
        json: 'fechaPresentacion',
        js: 'fechaPresentacion',
        typ: ''
      },
      {
        json: 'municipio',
        js: 'municipio',
        typ: ''
      },
      {
        json: 'obligacion',
        js: 'obligacion',
        typ: m(u(3.14, ''))
      },
      {
        json: 'radicado',
        js: 'radicado',
        typ: ''
      },
      {
        json: 'vencimientoPagare',
        js: 'vencimientoPagare',
        typ: ''
      },
      {
        json: 'expediente',
        js: 'expediente',
        typ: ''
      },
      {
        json: 'juzgados',
        js: 'juzgados',
        typ: a(r('Juzgado'))
      }
    ],
    false
  ),
  Departamento: o(
    [
      {
        json: 'idCatalogoDetalle',
        js: 'idCatalogoDetalle',
        typ: 0
      },
      {
        json: 'idCatalogoDetallePadre',
        js: 'idCatalogoDetallePadre',
        typ: 0
      },
      {
        json: 'descripcion',
        js: 'descripcion',
        typ: r('Descripcion')
      },
      {
        json: 'codigo',
        js: 'codigo',
        typ: ''
      }
    ],
    false
  ),
  Juzgado: o(
    [
      {
        json: 'id',
        js: 'id',
        typ: 0
      },
      {
        json: 'tipo',
        js: 'tipo',
        typ: ''
      },
      {
        json: 'url',
        js: 'url',
        typ: ''
      }
    ],
    false
  ),
  Deudor: o(
    [
      {
        json: 'tel',
        js: 'tel',
        typ: r('Tel')
      },
      {
        json: 'primerNombre',
        js: 'primerNombre',
        typ: ''
      },
      {
        json: 'segundoNombre',
        js: 'segundoNombre',
        typ: ''
      },
      {
        json: 'primerApellido',
        js: 'primerApellido',
        typ: ''
      },
      {
        json: 'segundoApellido',
        js: 'segundoApellido',
        typ: ''
      },
      {
        json: 'cedula',
        js: 'cedula',
        typ: u(0, null)
      },
      {
        json: 'direccion',
        js: 'direccion',
        typ: ''
      },
      {
        json: 'email',
        js: 'email',
        typ: ''
      }
    ],
    false
  ),
  Tel: o(
    [
      {
        json: 'fijo',
        js: 'fijo',
        typ: u(a(0), null)
      },
      {
        json: 'celular',
        js: 'celular',
        typ: u(a(0), null)
      }
    ],
    false
  ),
  Category: [
    'Bancolombia',
    'Insolvencia',
    'LiosJuridicos',
    'Reintegra',
    'Terminados'
  ],
  Descripcion: ['CUNDINAMARCA', 'TOLIMA'],
  TipoProceso: [
    'HIPOTECARIA',
    'HIPOTECARIO',
    'HIPOTECARO',
    'HMM PISO 1',
    'PRENDARIO',
    'PRENDARO',
    'SINGULAR',
    'SINGULAR ACUM HIPOTECARIO',
    'SINGULAR ACUMULADO CON HIPOTECARIO',
    'SINGULAR ACUMULADO CON HIPOTECARIO CAJA SOCIAL',
    'SOACHA',
    '11001400308320170071700',
    '25473418900120170092400',
    ' HIPOTECARIO',
    '  SINGULAR'
  ]
};