import {
  DemandaRaw,
  DepartamentoRaw,
  IntCarpeta,
  IntDemanda,
  Juzgado
} from '../types/carpetas';
import fetchProceso, { sleep } from '../procesos';
import { Despachos } from '../despachos';
import { Deudor } from './deudor';
import * as fs from 'fs/promises';
import { intProceso } from '../types/procesos';
import { insertNewCarpetas } from '..';
import Carpetas from '../data/carpetas-raw';
import Departamentos from '../data/departamentos';
import { categories } from './carpeta';

function vencimientoPagareFixer(
  rawVencimientoPagare: string | number
) {
  const matcherPagare = rawVencimientoPagare
    .toString()
    .match(/\d{1,4}(\/|-)\d{1,2}(\/|-)\d{1,4}/g);
  console.log(matcherPagare?.length);

  if (!matcherPagare) {
    return null;
  }

  const newDates = matcherPagare.map((pagare) => {
    console.log(pagare);

    return new Date(pagare);
  });

  return newDates;
}

function capitalBuilder(
  capitalAdeudado: string | number
) {
  if (typeof capitalAdeudado === 'number') {
    return capitalAdeudado;
  }

  const copTaker = capitalAdeudado.replace(
    /\sCOP/gi,
    ''
  );

  const dotTaker = copTaker.replace('.', '');
  console.log(dotTaker);

  return Number(dotTaker);
}

export function juzgadosByProceso(
  procesos: intProceso[]
) {
  const juzgados = new Set<Juzgado>();

  for (const proceso of procesos) {
    const newJ = new NewJuzgado(proceso);
    juzgados.add(newJ);
  }

  return Array.from(juzgados);
}

function setDepartamento(
  departamento: DepartamentoRaw
) {
  const deptos = Departamentos.result;

  const filterDeptos = deptos.find((dpt) => {
    const stringDepto = dpt.descripcion;

    return (
      stringDepto.toLowerCase() ===
      departamento.toLowerCase()
    );
  });

  if (filterDeptos) {
    return filterDeptos.descripcion;
  }

  return null;
}
class NewJuzgado implements Juzgado {
  constructor(proceso: intProceso) {
    const matchedDespacho = Despachos.find(
      (despacho) => {
        const nDesp = despacho.nombre
          .toLowerCase()
          .normalize('NFD')
          .replace(/\p{Diacritic}/gu, '')
          .trim();

        const pDesp = proceso.despacho
          .toLowerCase()
          .normalize('NFD')
          .replace(/\p{Diacritic}/gu, '')
          .trim();

        const indexOfDesp = nDesp.indexOf(pDesp);

        if (indexOfDesp >= 0) {
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

    const matchedId = nameN.match(/\d+/g);

    this.id = Number(matchedId?.toString());
    (this.tipo = matchedDespacho
      ? matchedDespacho.nombre
      : proceso.despacho),
      (this.url = matchedDespacho
        ? `https://www.ramajudicial.gov.co${matchedDespacho.url}`
        : `https://www.ramajudicial.gov.co${proceso.despacho
            .replaceAll(' ', '-')
            .toLowerCase()}`);
  }
  id: number;
  tipo: string;
  url: string;
}

export class Demanda implements IntDemanda {
  expediente?: string;
  constructor(
    {
      capitalAdeudado,
      entregaGarantiasAbogado,
      etapaProcesal,
      departamento,
      fechaPresentacion,
      municipio,
      obligacion,
      radicado,
      vencimientoPagare
    }: DemandaRaw,
    juzgados: Juzgado[],
    llaveProceso?: string | number
  ) {
    if (llaveProceso) {
      const stringTypeofLlaveProceso =
        typeof llaveProceso === 'string';

      if (stringTypeofLlaveProceso) {
        this.expediente = llaveProceso;
      } else {
        this.expediente = llaveProceso.toString();
      }
    }
    this.capitalAdeudado = capitalBuilder(
      capitalAdeudado
    );
    this.entregaGarantiasAbogado = new Date(
      entregaGarantiasAbogado
    );
    this.etapaProcesal =
      etapaProcesal?.toString();
    this.fechaPresentacion = new Date(
      fechaPresentacion ?? ''
    );
    this.juzgados = juzgados;
    this.municipio = municipio;

    this.obligacion = obligacion;
    this.radicado = radicado.toString();
    this.vencimientoPagare =
      vencimientoPagareFixer(vencimientoPagare);
    this.departamento =
      setDepartamento(departamento);
  }
  departamento: string | null;
  juzgados: Juzgado[];
  capitalAdeudado: number;
  entregaGarantiasAbogado: Date;
  etapaProcesal?: string;
  fechaPresentacion?: Date;
  municipio: string;
  obligacion: { [key: string]: string | number };
  radicado: string;
  vencimientoPagare: Date[] | null;
}

async function createCarpetasDemanda() {
  const procesosMap = new Map<
    number,
    intProceso
  >();

  const newCarpetas = new Set<IntCarpeta>();

  for (const carpeta of Carpetas) {
    const awaitTime = 200;

    const now = new Date().getTime();

    const masTarde = now + awaitTime;

    const outputTime = new Date(
      masTarde
    ).toLocaleDateString('es-CO', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    console.log(
      `estará listo a las ${outputTime}`
    );

    await sleep(awaitTime);
    console.log(
      `carpetas has a length of ${Carpetas.length} and you are in carpeta number ${carpeta.numero}`
    );

    const RequestProcesos = await fetchProceso({
      llaveProceso:
        carpeta.llaveProceso.toString()
    });

    const newDeudor = new Deudor(carpeta.deudor);
    console.log(newDeudor.tel.celular);

    const newDemanda = new Demanda(
      carpeta.demanda,
      [],
      carpeta.llaveProceso
    );

    if (RequestProcesos.length > 0) {
      for (const proceso of RequestProcesos) {
        if (proceso.esPrivado) {
          continue;
        }

        procesosMap.set(
          proceso.idProceso,
          proceso
        );

        const indexOf =
          RequestProcesos.indexOf(proceso);

        const juzgados = juzgadosByProceso(
          RequestProcesos
        );

        const newDemanda = new Demanda(
          carpeta.demanda,
          juzgados,
          carpeta.llaveProceso
        );

        const newCarpeta: IntCarpeta = {
          category: carpeta.category,
          deudor: newDeudor,
          numero: carpeta.numero,
          tipoProceso: carpeta.tipoProceso,
          idProceso: proceso.idProceso,
          llaveProceso:
            carpeta.llaveProceso.toString(),
          categoryTag: categories.indexOf(
            carpeta.category
          ),
          demanda: {
            ...newDemanda,
            expediente:
              carpeta.llaveProceso.toString()
          }
        };
        fs.writeFile(
          `carpetas/${newCarpeta.numero}.${indexOf}.json`,
          JSON.stringify(newCarpeta)
        );
        newCarpetas.add(newCarpeta);
      }
    } else if (RequestProcesos.length === 0) {
      const newCarpeta = {
        demanda: {
          ...newDemanda,
          expediente:
            carpeta.llaveProceso.toString(),
          departamento:
            carpeta.demanda.departamento
        },
        category: carpeta.category,
        categoryTag: categories.indexOf(
          carpeta.category
        ),
        deudor: newDeudor,
        numero: carpeta.numero,
        llaveProceso:
          carpeta.llaveProceso.toString(),
        tipoProceso: carpeta.tipoProceso
      };
      fs.writeFile(
        `carpetas/${newCarpeta.numero}.carpeta.json`,
        JSON.stringify(newCarpeta)
      );
      newCarpetas.add(newCarpeta);
    }
  }

  const newProcesosArray = Array.from(
    procesosMap.values()
  );

  fs.writeFile(
    'procesosData.json',
    JSON.stringify(newProcesosArray)
  );

  const newCarpetasArray =
    Array.from(newCarpetas);

  const insertCarpetas = await insertNewCarpetas(
    newCarpetasArray
  );
  console.log(insertCarpetas);

  return newCarpetasArray;
}

console.log(
  createCarpetasDemanda()
    .then(
      (ff) => {
        fs.writeFile(
          'newCarpetasFinal.json',
          JSON.stringify(ff)
        );

        return console.log(ff);
      },
      (rr) => {
        return console.log(rr);
      }
    )
    .catch((err) => {
      return console.log(JSON.stringify(err));
    })
);
