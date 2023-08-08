import * as fs from 'fs/promises';
import { Demanda,
         Deudor,
         IntCarpeta,
         IntCarpetaRaw,
         Juzgado,
         Tel } from './types/carpetas';
import Carpetas from './data/carpetas';
import fetchProceso from './procesos';
import transformDespacho from './despachos';
import updateCarpeta from './lib/mongodb';

export async function transformRawtoCarpeta(
  {
    carpetaRaw,
    index
  }: {
  carpetaRaw: IntCarpetaRaw;
  index: number;
}
): Promise<IntCarpeta> {
  const altNumber
    = carpetaRaw.numero === 0
      ? carpetaRaw.id
      : carpetaRaw.numero;
  const mkdirDir = altNumber ?? index * 1000;
  fs.mkdir(
    `./carpetas/${ mkdirDir }`, { recursive: true }
  );

  const juzgadosMap: Map<number, Juzgado>
    = new Map();
  const idProcesosSet = new Set<number>();
  const rawDeudor = carpetaRaw.deudor;
  const rawDemanda = carpetaRaw.demanda;

  if ( rawDemanda.juzgado.length > 0 ) {
    for ( const juz of rawDemanda.juzgado ) {
      const indexOf
        = rawDemanda.juzgado.indexOf(
          juz
        );
      juzgadosMap.set(
        indexOf, {
          ...juz,
          url: juz.url
            ? juz.url
            : 'sin especificar'
        }
      );
      console.log(
        Array.from(
          juzgadosMap.values()
        )
      );
    }
  }

  const RequestProcesos = await fetchProceso(

    {
      llaveProceso:
      carpetaRaw.llaveProceso
      ?? 'sin especificar',
      index: index,
      id   : mkdirDir
    }
  );
  console.log(
    RequestProcesos
  );

  for ( const proceso of RequestProcesos ) {
    idProcesosSet.add(
      proceso.idProceso
    );
    rawDemanda.juzgado.forEach(
      (
        juz, index, arr
      ) => {
        if ( arr.length === index + 1 ) {
          const newDespacho = transformDespacho(
            {
              id  : juz.id ?? 0,
              tipo: proceso.despacho ?? juz.tipo,
              url : juz.url
                ? juz.url
                : proceso.despacho ?? 'sin especificar'
            }
          );

          return juzgadosMap.set(
            index, newDespacho
          );
        }


        const newDespacho = transformDespacho(
          {
            id  : juz.id ?? 0,
            tipo: juz.tipo,
            url : juz.url
              ? juz.url
              : proceso.despacho ?? 'sin especificar'
          }
        );

        return juzgadosMap.set(
          index, newDespacho
        );
      }
    );
  }

  const newDemanda: Demanda = {
    ...rawDemanda,
    juzgado: Array.from(
      juzgadosMap.values()
    ),
    obligacion             : rawDemanda.obligacion,
    ciudad                 : rawDemanda.ciudad,
    departamento           : rawDemanda.departamento,
    entregaGarantiasAbogado: new Date(
      rawDemanda.entregaGarantiasAbogado ?? ''
    ),
    etapaProcesal    : rawDemanda.etapaProcesal,
    radicado         : rawDemanda.radicado,
    vencimientoPagare: new Date(
      rawDemanda.vencimientoPagare ?? ''
    )
  };

  const newTel: Tel = {
    celular: Number(
      rawDeudor.tel.celular ?? '0'
    ),
    fijo: Number(
      rawDeudor.tel.fijo ?? '0'
    )
  };

  const newDeudor: Deudor = {
    cedula: Number(
      rawDeudor.cedula
    ),
    primerNombre   : rawDeudor.primerNombre,
    segundoNombre  : rawDeudor.segundoNombre,
    primerApellido : rawDeudor.primerApellido,
    segundoApellido: rawDeudor.segundoApellido,
    tel            : newTel,
    email          : rawDeudor.email?.toString(),
    direccion      : rawDeudor.direccion
  };
  console.log(
    newDeudor
  );

  const newCarpeta: IntCarpeta = {
    capitalAdeudado: carpetaRaw.capitalAdeudado,
    demanda        : newDemanda,
    deudor         : newDeudor,
    grupo          : carpetaRaw.grupo,
    id             : Number(
      carpetaRaw.id ?? '0'
    ),
    numero      : carpetaRaw.numero,
    llaveProceso: carpetaRaw.llaveProceso,
    idProcesos  : Array.from(
      idProcesosSet
    ),
    tipoProceso: carpetaRaw.tipoProceso
  };
  console.log(
    `elk numerp de la carpeta es ${ newCarpeta.numero }`
  );
  fs.writeFile(
    `./carpetas/${
      mkdirDir
    }/${ index }.json`,
    JSON.stringify(
      newCarpeta
    )
  );

  const updateCarp = await updateCarpeta(
    { carpeta: newCarpeta }
  );

  if ( updateCarp ) {
    return updateCarp;
  }

  return newCarpeta;
}

export default async function mapCarpetas(
  {
    carpetas
  }: {
  carpetas: IntCarpetaRaw[];
}
) {
  const newCarpetasMap = [];

  for ( const carpeta of carpetas ) {
    const indexOf = carpetas.indexOf(
      carpeta
    );

    const newCarpeta
      = await transformRawtoCarpeta(
        {
          carpetaRaw: carpeta,
          index     : indexOf
        }
      );

    newCarpetasMap.push(
      newCarpeta
    );
    console.log(
      newCarpeta.numero
    );
    fs.writeFile(
      'insideForOfcarpetas.json',
      JSON.stringify(
        newCarpetasMap
      )
    );
  }

  fs.writeFile(
    'carpetas.json',
    JSON.stringify(
      newCarpetasMap
    )
  );
  console.log(
    `carpetas length is ${ carpetas.length }`
  );
  console.log(
    `arrayMap length is ${ newCarpetasMap.length }`
  );

  return newCarpetasMap;
}

mapCarpetas(
  { carpetas: Carpetas }
);
