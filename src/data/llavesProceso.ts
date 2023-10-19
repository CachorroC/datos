import { intConsultaNumeroRadicacion } from '../types/procesos';
import Carpetas from './carpetas';
import * as fs from 'fs/promises';

function sleep(
  ms: number 
) {
  return new Promise(
    (
      resolve 
    ) => {
      console.log(
        JSON.stringify(
          new Date()
                .getTime() 
        )
      );

      return setTimeout(
        resolve, ms 
      );
    } 
  );
}

export async function fetchProcesosRaw() {
  const looseArrayProcesos = [];

  try {
    const carps = await Carpetas();

    const llaves = carps.map(
      (
        carpeta 
      ) => {
        return carpeta.llaveProceso;
      } 
    );

    const procesosMap = new Map();

    for ( const llave of llaves ) {
      await sleep(
        100 
      );

      if ( !llave ) {
        continue;
      }

      const request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llave }&SoloActivos=false`
      );

      if ( !request.ok ) {
        const json = await request.json();
        console.log(
          request.statusText 
        );

        looseArrayProcesos.push(
          json 
        );

        continue;
      }

      const json
        = ( await request.json() ) as intConsultaNumeroRadicacion;

      const {
        procesos 
      } = json;
      looseArrayProcesos.push(
        {
          StatusCode: request.status,
          Message   : request.statusText,
          procesos  : procesos
        } 
      );
      procesosMap.set(
        llave, json 
      );

      continue;
    }

    const procesosMapArray = Array.from(
      procesosMap.values()
    );
    fs.writeFile(
      'procesosRaw.json',
      JSON.stringify(
        looseArrayProcesos, null, 2 
      )
    );

    return procesosMapArray;
  } catch ( error ) {
    console.log(
      error 
    );

    return error;
  }
}

console.log(
  fetchProcesosRaw() 
);
