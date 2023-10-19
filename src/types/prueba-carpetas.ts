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
  llaveProceso: null | string;
  numero: number;
  cc: number | null;
  idProcesos: number[] | null;
  category: Category;
  tipoProceso: TipoProceso;
  deudor: Deudor;
  demanda: Demanda;
}

export type Category =
  | 'Bancolombia'
  | 'Reintegra'
  | 'Terminados'
  | 'Insolvencia'
  | 'LiosJuridicos';

export interface Demanda {
  capitalAdeudado: number | null;
  departamento: Departamento | null;
  entregaGarantiasAbogado: Date | null;
  tipoProceso: TipoProceso;
  mandamientoPago: Date | null;
  etapaProcesal: null | string;
  fechaPresentacion: null | string;
  municipio: null | string;
  obligacion: Array<number | string>;
  radicado: null | string;
  vencimientoPagare: Array<null | string>;
  expediente: null | string;
  juzgados: Juzgado[] | null;
}

export type Departamento =
  | 'CUNDINAMARCA'
  | 'TOLIMA'
  | 'BOYACÁ';

export interface Juzgado {
  id: number;
  tipo: string;
  url: string;
}

export type TipoProceso =
  | 'PRENDARIO'
  | 'SINGULAR'
  | 'HIPOTECARIO'
  | 'HIPOTECARO'
  | 'HMM PISO 1'
  | '  SINGULAR'
  | 'SINGULAR ACUMULADO CON HIPOTECARIO'
  | 'SINGULAR ACUM HIPOTECARIO'
  | 'PRENDARO'
  | ' HIPOTECARIO'
  | 'HIPOTECARIA'
  | 'SINGULAR ACUMULADO CON HIPOTECARIO CAJA SOCIAL'
  | 'SOACHA';

export interface Deudor {
  tel: Tel;
  primerNombre: string;
  segundoNombre: null | string;
  primerApellido: string;
  segundoApellido: null | string;
  cedula: number | null;
  direccion: null | string;
  email: null | string;
}

export interface Tel {
  fijo: number | null;
  celular: number | null;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toIntCarpeta(
    json: string
  ): IntCarpeta {
    return cast(
      JSON.parse(
        json
      ),
      r(
        'IntCarpeta'
      )
    );
  }

  public static intCarpetaToJson(
    value: IntCarpeta
  ): string {
    return JSON.stringify(
      uncast(
        value, r(
          'IntCarpeta'
        )
      ),
      null,
      2
    );
  }

  public static toDemanda(
    json: string
  ): Demanda {
    return cast(
      JSON.parse(
        json
      ), r(
        'Demanda'
      )
    );
  }

  public static demandaToJson(
    value: Demanda
  ): string {
    return JSON.stringify(
      uncast(
        value, r(
          'Demanda'
        )
      ),
      null,
      2
    );
  }

  public static toJuzgado(
    json: string
  ): Juzgado {
    return cast(
      JSON.parse(
        json
      ), r(
        'Juzgado'
      )
    );
  }

  public static juzgadoToJson(
    value: Juzgado
  ): string {
    return JSON.stringify(
      uncast(
        value, r(
          'Juzgado'
        )
      ),
      null,
      2
    );
  }

  public static toDeudor(
    json: string
  ): Deudor {
    return cast(
      JSON.parse(
        json
      ), r(
        'Deudor'
      )
    );
  }

  public static deudorToJson(
    value: Deudor
  ): string {
    return JSON.stringify(
      uncast(
        value, r(
          'Deudor'
        )
      ),
      null,
      2
    );
  }

  public static toTel(
    json: string
  ): Tel {
    return cast(
      JSON.parse(
        json
      ), r(
        'Tel'
      )
    );
  }

  public static telToJson(
    value: Tel
  ): string {
    return JSON.stringify(
      uncast(
        value, r(
          'Tel'
        )
      ),
      null,
      2
    );
  }
}

function invalidValue(
  typ,
  val,
  key,
  parent = ''
): never {
  const prettyTyp = prettyTypeName(
    typ
  );

  const parentText = parent
    ? ` on ${ parent }`
    : '';

  const keyText = key
    ? ` for key "${ key }"`
    : '';
  throw Error(
    `Invalid value${ keyText }${ parentText }. Expected ${ prettyTyp } but got ${ JSON.stringify(
      val
    ) }`
  );
}

function prettyTypeName(
  typ
): string {
  if ( Array.isArray(
    typ
  ) ) {
    if (
      typ.length === 2
      && typ[ 0 ] === undefined
    ) {
      return `an optional ${ prettyTypeName(
        typ[ 1 ]
      ) }`;
    }

    return `one of [${ typ
          .map(
            (
              a
            ) => {
              return prettyTypeName(
                a
              );
            }
          )
          .join(
            ', '
          ) }]`;
  } else if (
    typeof typ === 'object'
    && typ.literal !== undefined
  ) {
    return typ.literal;
  }

  return typeof typ;
}

function jsonToJSProps(
  typ: unknown
) {
  if ( typ.jsonToJS === undefined ) {
    const map = {};
    typ.props.forEach(
      (
        p
      ) => {
        return ( map[ p.json ] = {
          key: p.js,
          typ: p.typ
        } );
      }
    );
    typ.jsonToJS = map;
  }

  return typ.jsonToJS;
}

function jsToJSONProps(
  typ
) {
  if ( typ.jsToJSON === undefined ) {
    const map = {};
    typ.props.forEach(
      (
        p
      ) => {
        return ( map[ p.js ] = {
          key: p.json,
          typ: p.typ
        } );
      }
    );
    typ.jsToJSON = map;
  }

  return typ.jsToJSON;
}

function transform(
  val,
  typ,
  getProps,
  key = '',
  parent = ''
) {
  function transformPrimitive(
    typ: string,
    val
  ) {
    if ( typeof typ === typeof val ) {
      return val;
    }

    return invalidValue(
      typ, val, key, parent
    );
  }

  function transformUnion(
    typs[],
    val
  ) {
    // val must validate against one typ in typs
    const l = typs.length;

    for ( let i = 0; i < l; i++ ) {
      const typ = typs[ i ];

      try {
        return transform(
          val, typ, getProps
        );
      } catch ( _ ) {}
    }

    return invalidValue(
      typs, val, key, parent
    );
  }

  function transformEnum(
    cases: string[],
    val
  ) {
    if ( cases.indexOf(
      val
    ) !== -1 ) {
      return val;
    }

    return invalidValue(
      cases.map(
        (
          a
        ) => {
          return l(
            a
          );
        }
      ),
      val,
      key,
      parent
    );
  }

  function transformArray(
    typ,
    val
  ) {
    // val must be an array with no invalid elements
    if ( !Array.isArray(
      val
    ) ) {
      return invalidValue(
        l(
          'array'
        ),
        val,
        key,
        parent
      );
    }

    return val.map(
      (
        el
      ) => {
        return transform(
          el, typ, getProps
        );
      }
    );
  }

  function transformDate(
    val
  ) {
    if ( val === null ) {
      return null;
    }

    const d = new Date(
      val
    );

    if ( isNaN(
      d.valueOf()
    ) ) {
      return invalidValue(
        l(
          'Date'
        ),
        val,
        key,
        parent
      );
    }

    return d;
  }

  function transformObject(
    props: { [k: string] },
    additional,
    val
  ) {
    if (
      val === null
      || typeof val !== 'object'
      || Array.isArray(
        val
      )
    ) {
      return invalidValue(
        l(
          ref || 'object'
        ),
        val,
        key,
        parent
      );
    }

    const result = {};
    Object.getOwnPropertyNames(
      props
    )
          .forEach(
            (
              key
            ) => {
              const prop = props[ key ];

              const v
          = Object.prototype.hasOwnProperty.call(
            val,
            key
          )
            ? val[ key ]
            : undefined;
              result[ prop.key ] = transform(
                v,
                prop.typ,
                getProps,
                key,
                ref
              );
            }
          );
    Object.getOwnPropertyNames(
      val
    )
          .forEach(
            (
              key
            ) => {
              if (
                !Object.prototype.hasOwnProperty.call(
                  props,
                  key
                )
              ) {
                result[ key ] = transform(
                  val[ key ],
                  additional,
                  getProps,
                  key,
                  ref
                );
              }
            }
          );
    return result;
  }

  if ( typ === 'any' ) {
    return val;
  }

  if ( typ === null ) {
    if ( val === null ) {
      return val;
    }

    return invalidValue(
      typ, val, key, parent
    );
  }

  if ( typ === false ) {
    return invalidValue(
      typ, val, key, parent
    );
  }

  let ref = undefined;

  while (
    typeof typ === 'object'
    && typ.ref !== undefined
  ) {
    ref = typ.ref;
    typ = typeMap[ typ.ref ];
  }

  if ( Array.isArray(
    typ
  ) ) {
    return transformEnum(
      typ, val
    );
  }

  if ( typeof typ === 'object' ) {
    return typ.hasOwnProperty(
      'unionMembers'
    )
      ? transformUnion(
        typ.unionMembers, val
      )
      : typ.hasOwnProperty(
        'arrayItems'
      )
        ? transformArray(
          typ.arrayItems, val
        )
        : typ.hasOwnProperty(
          'props'
        )
          ? transformObject(
            getProps(
              typ
            ),
            typ.additional,
            val
          )
          : invalidValue(
            typ, val, key, parent
          );
  }

  // Numbers can be parsed by Date but shouldn't be.
  if ( typ === Date && typeof val !== 'number' ) {
    return transformDate(
      val
    );
  }

  return transformPrimitive(
    typ, val
  );
}

function cast<T>(
  val, typ
): T {
  return transform(
    val, typ, jsonToJSProps
  );
}

function uncast<T>(
  val: T, typ
) {
  return transform(
    val, typ, jsToJSONProps
  );
}

function l(
  typ
) {
  return {
    literal: typ
  };
}

function a(
  typ
) {
  return {
    arrayItems: typ
  };
}

function u(
  ...typs[]
) {
  return {
    unionMembers: typs
  };
}

function o(
  props[], additional
) {
  return {
    props,
    additional
  };
}

function m(
  additional
) {
  return {
    props: [],
    additional
  };
}

function r(
  name: string
) {
  return {
    ref: name
  };
}

const typeMap = {
  IntCarpeta: o(
    [
      {
        json: '_id',
        js  : '_id',
        typ : ''
      },
      {
        json: 'llaveProceso',
        js  : 'llaveProceso',
        typ : u(
          null, ''
        )
      },
      {
        json: 'numero',
        js  : 'numero',
        typ : 0
      },
      {
        json: 'cc',
        js  : 'cc',
        typ : u(
          0, null
        )
      },
      {
        json: 'idProcesos',
        js  : 'idProcesos',
        typ : u(
          a(
            0
          ), null
        )
      },
      {
        json: 'category',
        js  : 'category',
        typ : r(
          'Category'
        )
      },
      {
        json: 'tipoProceso',
        js  : 'tipoProceso',
        typ : r(
          'TipoProceso'
        )
      },
      {
        json: 'deudor',
        js  : 'deudor',
        typ : r(
          'Deudor'
        )
      },
      {
        json: 'demanda',
        js  : 'demanda',
        typ : r(
          'Demanda'
        )
      }
    ],
    false
  ),
  Demanda: o(
    [
      {
        json: 'capitalAdeudado',
        js  : 'capitalAdeudado',
        typ : u(
          3.14, null
        )
      },
      {
        json: 'departamento',
        js  : 'departamento',
        typ : u(
          r(
            'Departamento'
          ), null
        )
      },
      {
        json: 'entregaGarantiasAbogado',
        js  : 'entregaGarantiasAbogado',
        typ : u(
          Date, null
        )
      },
      {
        json: 'tipoProceso',
        js  : 'tipoProceso',
        typ : r(
          'TipoProceso'
        )
      },
      {
        json: 'mandamientoPago',
        js  : 'mandamientoPago',
        typ : u(
          Date, null
        )
      },
      {
        json: 'etapaProcesal',
        js  : 'etapaProcesal',
        typ : u(
          null, ''
        )
      },
      {
        json: 'fechaPresentacion',
        js  : 'fechaPresentacion',
        typ : u(
          null, ''
        )
      },
      {
        json: 'municipio',
        js  : 'municipio',
        typ : u(
          null, ''
        )
      },
      {
        json: 'obligacion',
        js  : 'obligacion',
        typ : a(
          u(
            3.14, ''
          )
        )
      },
      {
        json: 'radicado',
        js  : 'radicado',
        typ : u(
          null, ''
        )
      },
      {
        json: 'vencimientoPagare',
        js  : 'vencimientoPagare',
        typ : a(
          u(
            null, ''
          )
        )
      },
      {
        json: 'expediente',
        js  : 'expediente',
        typ : u(
          null, ''
        )
      },
      {
        json: 'juzgados',
        js  : 'juzgados',
        typ : u(
          a(
            r(
              'Juzgado'
            )
          ), null
        )
      }
    ],
    false
  ),
  Juzgado: o(
    [
      {
        json: 'id',
        js  : 'id',
        typ : 0
      },
      {
        json: 'tipo',
        js  : 'tipo',
        typ : ''
      },
      {
        json: 'url',
        js  : 'url',
        typ : ''
      }
    ],
    false
  ),
  Deudor: o(
    [
      {
        json: 'tel',
        js  : 'tel',
        typ : r(
          'Tel'
        )
      },
      {
        json: 'primerNombre',
        js  : 'primerNombre',
        typ : ''
      },
      {
        json: 'segundoNombre',
        js  : 'segundoNombre',
        typ : u(
          null, ''
        )
      },
      {
        json: 'primerApellido',
        js  : 'primerApellido',
        typ : ''
      },
      {
        json: 'segundoApellido',
        js  : 'segundoApellido',
        typ : u(
          null, ''
        )
      },
      {
        json: 'cedula',
        js  : 'cedula',
        typ : u(
          0, null
        )
      },
      {
        json: 'direccion',
        js  : 'direccion',
        typ : u(
          null, ''
        )
      },
      {
        json: 'email',
        js  : 'email',
        typ : u(
          null, ''
        )
      }
    ],
    false
  ),
  Tel: o(
    [
      {
        json: 'fijo',
        js  : 'fijo',
        typ : u(
          0, null
        )
      },
      {
        json: 'celular',
        js  : 'celular',
        typ : u(
          0, null
        )
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
  Departamento: [
    'BOYACÁ',
    'CUNDINAMARCA',
    'TOLIMA'
  ],
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
    ' HIPOTECARIO',
    '  SINGULAR'
  ]
};
