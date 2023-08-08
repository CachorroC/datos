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
import updateCarpetas from './lib/mongodb';

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
  fs.writeFile(
    `./carpetas/${
      mkdirDir
    }/${ index }.json`,
    JSON.stringify(
      newCarpeta
    )
  );


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

  if ( carpetas.length === newCarpetasMap.length ) {

    const updateCarp = await updateCarpetas(
      { carpetas: newCarpetasMap }
    );
    console.log(
      ` se actuaclizaron ${ updateCarp }`
    );
  }

  return newCarpetasMap;
}

mapCarpetas(
  { carpetas: Carpetas }
);
