import * as fs from 'fs/promises';
import { Demanda,
         Deudor,
         IntCarpeta,
         IntCarpetaRaw,
         Juzgado,
         Tel } from './types/carpetas';
import Carpetas from './data/carpetas';
import fetchProceso, { sleep } from './procesos';
import transformDespacho from './despachos';

export async function transformRawtoCarpeta( {
  carpetaRaw,
  index
}: {
  carpetaRaw: IntCarpetaRaw;
  index: number;
} ): Promise<IntCarpeta> {
  const altNumber
    = carpetaRaw.numero === 0
      ? index
      : carpetaRaw.numero;
  const mkdirDir = carpetaRaw.id ?? altNumber;
  fs.mkdir(
    `./carpetas/${ mkdirDir }`, {
      recursive: true
    }
  );

  const juzgadosMap: Map<number, Juzgado>
    = new Map();
  const idProcesosSet = new Set<number>();
  const rawDeudor = carpetaRaw.deudor;
  const rawDemanda = carpetaRaw.demanda;

  if ( rawDemanda.juzgado.length > 0 ) {
    for ( const juz of rawDemanda.juzgado ) {
      const indexOf
        = rawDemanda.juzgado.indexOf( juz );
      juzgadosMap.set(
        indexOf, {
          ...juz,
          url: juz.url
            ? juz.url
            : 'sin especificar'
        }
      );
      console.log( juzgadosMap.values() );
    }
  }

  const RequestProcesos = await fetchProceso( {
    llaveProceso:
      carpetaRaw.llaveProceso
      ?? 'sin especificar',
    index: index,
    id   : mkdirDir
  } );
  console.log( RequestProcesos );
  for ( const proceso of RequestProcesos ) {
    idProcesosSet.add( proceso.idProceso );
    rawDemanda.juzgado.forEach( (
      juz, index
    ) => {
      const newDespacho = transformDespacho( {
        id  : juz.id ?? 0,
        tipo: proceso.despacho ?? juz.tipo,
        url : juz.url
          ? juz.url
          : proceso.despacho ?? 'sin especificar'
      } );

      return juzgadosMap.set(
        index, newDespacho
      );
    } );
  }

  const newDemanda: Demanda = {
    ...rawDemanda,
    juzgado                : Array.from( juzgadosMap.values() ),
    obligacion             : rawDemanda.obligacion,
    ciudad                 : rawDemanda.ciudad,
    departamento           : rawDemanda.departamento,
    entregaGarantiasAbogado: new Date( rawDemanda.entregaGarantiasAbogado ?? '' ),
    etapaProcesal          : rawDemanda.etapaProcesal,
    radicado               : rawDemanda.radicado,
    vencimientoPagare      : new Date( rawDemanda.vencimientoPagare ?? '' )
  };

  const newTel: Tel = {
    celular: Number( rawDeudor.tel.celular ?? '0' ),
    fijo   : Number( rawDeudor.tel.fijo ?? '0' )
  };

  const newDeudor: Deudor = {
    cedula         : Number( rawDeudor.cedula ),
    primerNombre   : rawDeudor.primerNombre,
    segundoNombre  : rawDeudor.segundoNombre,
    primerApellido : rawDeudor.primerApellido,
    segundoApellido: rawDeudor.segundoApellido,
    tel            : newTel,
    email          : rawDeudor.email?.toString(),
    direccion      : rawDeudor.direccion
  };
  console.log( newDeudor );

  const newCarpeta: IntCarpeta = {
    capitalAdeudado: carpetaRaw.capitalAdeudado,
    demanda        : newDemanda,
    deudor         : newDeudor,
    grupo          : carpetaRaw.grupo,
    id             : Number( carpetaRaw.id ?? '0' ),
    numero         : carpetaRaw.numero,
    llaveProceso   : carpetaRaw.llaveProceso,
    idProcesos     : Array.from( idProcesosSet ),
    tipoProceso    : carpetaRaw.tipoProceso
  };

  fs.writeFile(
    `./carpetas/${
      carpetaRaw.id ?? carpetaRaw.numero
    }/carpeta.json`,
    JSON.stringify( newCarpeta )
  );

  return newCarpeta;
}

export default async function mapCarpetas( {
  carpetas
}: {
  carpetas: IntCarpetaRaw[];
} ) {
  const newCarpetasMap = new Map();

  for ( const carpeta of carpetas ) {
    const indexOf = carpetas.indexOf( carpeta );

    const newCarpeta
      = await transformRawtoCarpeta( {
        carpetaRaw: carpeta,
        index     : indexOf
      } );

    newCarpetasMap.set(
      carpeta.numero,
      newCarpeta
    );
    console.log( newCarpeta.numero );
    fs.writeFile(
      'insideForOfcarpetas.json',
      JSON.stringify( Array.from( newCarpetasMap.values() ) )
    );
  }

  fs.writeFile(
    'carpetas.json',
    JSON.stringify( Array.from( newCarpetasMap.values() ) )
  );
  await sleep( 600 * 1000 );
  console.log( `carpetas length is ${ carpetas.length }` );
  console.log( `arrayMap length is ${ newCarpetasMap.size }` );

  return Array.from( newCarpetasMap.values() );
}
mapCarpetas( {
  carpetas: Carpetas
} )
        .then(
          ( ff ) => {
            fs.writeFile(
              'fullfiled.json',
              JSON.stringify( ff )
            );

            return ff;
          },
          ( rr ) => {
            fs.writeFile(
              'rejected.json',
              JSON.stringify( rr )
            );

            return rr;
          }
        )
        .catch( ( error ) => {
          fs.writeFile(
            'error.json',
            JSON.stringify( error )
          );

          console.log( error );
        } );
