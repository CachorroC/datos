import { DemandaRaw,
         IntDemanda,
         Juzgado,
         Obligacion,
         TipoProcesoRaw } from '../types/carpetas';
import { Despachos } from '../despachos';
import { intProceso } from '../types/procesos';

function vencimientoPagareFixer(
  rawVencimientoPagare: string | number
) {
  const stringer = `${ rawVencimientoPagare }`;

  const matcherPagare = stringer.split(
    '//'
  );
  console.log(
    matcherPagare?.length
  );

  if ( !matcherPagare ) {
    return null;
  }


  return matcherPagare.map(
    (
      pagare
    ) => {
      console.log(
        pagare
      );

      return new Date(
        pagare
      );
    }
  );
}

function capitalBuilder(
  capitalAdeudado: string | number
) {
  if ( typeof capitalAdeudado === 'number' ) {
    return capitalAdeudado;
  }

  const copTaker = capitalAdeudado.replace(
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
    RequestProcesos?: intProceso[],
  ) {
    this.expediente = llaveProceso
      ? llaveProceso
      : null;

    this.capitalAdeudado = capitalBuilder(
      capitalAdeudado
        ? capitalAdeudado
        : 0
    );
    this.entregaGarantiasAbogado = entregaGarantiasAbogado
      ? new Date(
        entregaGarantiasAbogado
      )
      : null;
    this.etapaProcesal
      = etapaProcesal
        ? `${ etapaProcesal }`
        : null;
    this.fechaPresentacion = fechaPresentacion
      ? new Date(
        fechaPresentacion
      )
      : null;
    this.juzgados = RequestProcesos
      ? juzgadosByProceso(
        RequestProcesos
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

    this.obligacion = obligacion
      ? obligacion
      : null;
    this.radicado = radicado
      ? `${ radicado }`
      : null;
    this.vencimientoPagare
      = vencimientoPagare
        ? vencimientoPagareFixer(
          vencimientoPagare
        )
        : null;
    this.departamento
      = departamento
        ? departamento
        : null;
  }
  capitalAdeudado: number | null;
  departamento: string | null;
  entregaGarantiasAbogado?: Date | null | undefined;
  tipoProceso: TipoProcesoRaw = 'SINGULAR';
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
