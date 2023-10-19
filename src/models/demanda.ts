import { DemandaRaw,
         IntDemanda,
         IntDemandaPrueba,
         Juzgado,
         TipoProceso,
         TipoProcesoRaw } from '../types/carpetas';
import { Despachos } from '../despachos';
import { intProceso } from '../types/procesos';

function vencimientoPagareFixer(
  rawVencimientoPagare?: string | number
): Date[] {
  const stringer = `${ rawVencimientoPagare ?? '' }`;

  const pagaresDateSet = new Set<Date>();

  const matcherPagare = stringer.split(
    '//'
  );
  console.log(
    `hay ${ matcherPagare?.length } pagarés en este proceso`
  );

  for ( const pagare of matcherPagare ) {
    const newPagareString = pagare
          .trim()
          .replace(
            '/', '-'
          );

    const stringDate = new Date(
      newPagareString
    );

    console.log(
      `la nueva fecha del pagaré arrojó: ${ stringDate.toDateString() }`
    );

    if ( stringDate === null ) {
      continue;
    }

    console.log(
      `la nueva fecha del pagaré es: ${ stringDate.toDateString() }`
    );
    pagaresDateSet.add(
      stringDate
    );
  }

  return Array.from(
    pagaresDateSet
  );
}

function capitalBuilder(
  capitalAdeudado: string | number
) {
  let moneyBuilder;

  if ( typeof capitalAdeudado === 'number' ) {
    moneyBuilder = capitalAdeudado.toString();
  } else {
    moneyBuilder = capitalAdeudado;
  }

  const copTaker = moneyBuilder.replace(
    /\sCOP/gi,
    ''
  );

  const dotTaker = copTaker.replace(
    '.', ''
  );
  console.log(
    dotTaker
  );

  return Number(
    dotTaker
  );
}

export function juzgadosByProceso(
  procesos: intProceso[]
) {
  if ( procesos.length === 0 ) {
    return [];
  }

  const juzgados = new Set<Juzgado>();

  for ( const proceso of procesos ) {
    const newJ = new NewJuzgado(
      proceso
    );
    juzgados.add(
      newJ
    );
  }

  return Array.from(
    juzgados
  );
}

class NewJuzgado implements Juzgado {
  constructor(
    proceso: intProceso
  ) {
    const matchedDespacho = Despachos.find(
      (
        despacho
      ) => {
        const nDesp = despacho.nombre
              .toLowerCase()
              .normalize(
                'NFD'
              )
              .replace(
                /\p{Diacritic}/gu, ''
              )
              .trim();

        const pDesp = proceso.despacho
              .toLowerCase()
              .normalize(
                'NFD'
              )
              .replace(
                /\p{Diacritic}/gu, ''
              )
              .trim();

        const indexOfDesp = nDesp.indexOf(
          pDesp
        );

        if ( indexOfDesp >= 0 ) {
          console.log(
            `procesos despacho is in despachos ${
              indexOfDesp + 1
            }`
          );
        }

        return nDesp === pDesp;
      }
    );

    const nameN = matchedDespacho
      ? matchedDespacho.nombre
      : proceso.despacho;

    const matchedId = nameN.match(
      /\d+/g
    );

    this.id = Number(
      matchedId?.toString()
    );
    ( this.tipo = matchedDespacho
      ? matchedDespacho.nombre
      : proceso.despacho ),
    ( this.url = matchedDespacho
      ? `https://www.ramajudicial.gov.co${ matchedDespacho.url }`
      : `https://www.ramajudicial.gov.co${ proceso.despacho
            .replaceAll(
              ' ', '-'
            )
            .toLowerCase() }` );
  }
  id: number;
  tipo: string;
  url: string;
}

export class Demanda implements IntDemanda {
  constructor(
    {
      capitalAdeudado,
      entregaGarantiasAbogado,
      etapaProcesal,
      departamento,
      fechaPresentacion,
      mandamientoPago,
      municipio,
      obligacion,
      radicado,
      vencimientoPagare
    }: DemandaRaw,
    llaveProceso?: string,
    RequestProcesos?: intProceso[]
  ) {
    const obligacionesSet = new Set<
      string | number
    >();

    const juzgadosSet: Juzgado[] = [];

    if ( obligacion ) {
      const {
        A, B
      } = obligacion;

      if ( A ) {
        obligacionesSet.add(
          A
        );
      }

      if ( B ) {
        obligacionesSet.add(
          B
        );
      }
    }

    if ( RequestProcesos ) {
      for ( const proceso of RequestProcesos ) {
        const newJ = new NewJuzgado(
          proceso
        );
        juzgadosSet.push(
          newJ
        );
      }
    }

    this.expediente = llaveProceso
      ? llaveProceso
      : null;

    this.capitalAdeudado = capitalBuilder(
      capitalAdeudado
        ? capitalAdeudado
        : 0
    );
    this.entregaGarantiasAbogado
      = entregaGarantiasAbogado
        ? new Date(
          entregaGarantiasAbogado
        )
        : null;
    this.etapaProcesal = etapaProcesal
      ? `${ etapaProcesal }`
      : null;
    this.fechaPresentacion = fechaPresentacion
      ? new Date(
        fechaPresentacion
      )
      : null;
    this.municipio = municipio
      ? municipio
      : null;
    this.mandamientoPago = mandamientoPago
      ? new Date(
        mandamientoPago
      )
      : null;

    this.obligacion = Array.from(
      obligacionesSet
    );
    this.juzgados = juzgadosSet;
    this.radicado = radicado
      ? `${ radicado }`
      : null;
    this.vencimientoPagare
      = vencimientoPagareFixer(
        vencimientoPagare
      );
    this.departamento = departamento
      ? departamento
      : null;
  }
  capitalAdeudado: number | null;
  departamento: string | null;
  entregaGarantiasAbogado: Date | null;
  tipoProceso: TipoProcesoRaw = 'SINGULAR';
  mandamientoPago: Date | null;
  etapaProcesal: string | null;
  fechaPresentacion: Date | null;
  municipio: string | null;
  obligacion: ( number | string )[];
  radicado: string | null;
  vencimientoPagare: Date[];
  expediente: string | null;
  juzgados: Juzgado[];
}

export class DemandaPrueba
implements IntDemandaPrueba {
  constructor(
    {
      capitalAdeudado,
      entregaGarantiasAbogado,
      etapaProcesal,
      departamento,
      fechaPresentacion,
      mandamientoPago,
      municipio,
      obligacion,
      radicado,
      vencimientoPagare
    }: DemandaRaw,
    llaveProceso?: string,
    RequestProcesos?: intProceso[]
  ) {
    const juzgadosSet: Juzgado[] = [];

    const obligacionesSet = new Set<
      string | number
    >();

    if ( obligacion ) {
      const {
        A, B
      } = obligacion;

      if ( A ) {
        obligacionesSet.add(
          A
        );
      }

      if ( B ) {
        obligacionesSet.add(
          B
        );
      }
    }

    if ( RequestProcesos ) {
      for ( const proceso of RequestProcesos ) {
        const newJ = new NewJuzgado(
          proceso
        );
        juzgadosSet.push(
          newJ
        );
      }
    }

    this.expediente = llaveProceso
      ? llaveProceso
      : null;

    this.capitalAdeudado = capitalBuilder(
      capitalAdeudado
        ? capitalAdeudado
        : 0
    );
    this.entregaGarantiasAbogado
      = entregaGarantiasAbogado
        ? new Date(
          entregaGarantiasAbogado
        )
        : null;
    this.etapaProcesal = etapaProcesal
      ? `${ etapaProcesal }`
      : null;
    this.fechaPresentacion = fechaPresentacion
      ? new Date(
        fechaPresentacion
      )
      : null;
    this.juzgados = juzgadosSet;
    this.municipio = municipio
      ? municipio
      : null;
    this.mandamientoPago = mandamientoPago
      ? new Date(
        mandamientoPago
      )
      : null;

    this.obligacion = Array.from(
      obligacionesSet
    );
    this.radicado = radicado
      ? `${ radicado }`
      : null;
    this.vencimientoPagare
      = vencimientoPagareFixer(
        vencimientoPagare
      );
    this.departamento = departamento
      ? departamento
      : null;
  }
  capitalAdeudado: number | null;
  departamento: string | null;
  entregaGarantiasAbogado: Date | null;
  tipoProceso: TipoProceso = 'SINGULAR';
  mandamientoPago: Date | null;
  etapaProcesal: string | null;
  fechaPresentacion: Date | null;
  municipio: string | null;
  obligacion: ( number | string )[];
  radicado: string | null;
  vencimientoPagare: Date[];
  expediente: string | null;
  juzgados: Juzgado[];
}
