import { sleep } from '../procesos';
import Carpetas from './carpetas';
import fetchProcesos, { fetchP } from './procesos';
import * as fs from 'fs/promises';

export const idProcesos = Carpetas.map(
  (
    carpeta
  ) => {
    return {
      idProceso: carpeta.idProceso,
      _id      : carpeta._id
    };
  }
);

export const llavesProceso =   Carpetas.map(
  (
    carpeta
  ) => {
    return {
      llaveProceso: carpeta.llaveProceso,
      _id         : carpeta._id
    };
  }
);


export async function getProcesosbyLLaveProceso () {
  const procesosMap: Map<number, fetchP> = new Map();

  const llavesLength = llavesProceso.length;
  console.log(
    `hay ${ llavesLength } llaves`
  );

  for ( const llave of llavesProceso ) {
    const {
      llaveProceso, _id
    } = llave;

    const indexOf = llavesProceso.indexOf(
      llave
    );
    console.log(
      indexOf
    );
    console.time(
      indexOf.toString()
    );
    await sleep(
      1000
    );
    console.timeEnd(
      indexOf.toString()
    );

    const procesos= await fetchProcesos(
      llaveProceso, _id
    );
    procesosMap.set(
      indexOf, procesos
    );

    continue;
  }

  const procesosArray = Array.from(
    procesosMap.values()
  );
  fs.writeFile(
    'procesosbyid.json', JSON.stringify(
      procesosArray
    )
  );

  return procesosArray;
}

getProcesosbyLLaveProceso();