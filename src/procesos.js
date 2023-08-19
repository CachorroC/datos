import * as fs from 'fs/promises';

export function sleep(
  ms 
) {
  return new Promise(
    (
      resolve 
    ) => {
      console.log(
        ms 
      );

      return setTimeout(
        resolve, ms 
      );
    } 
  );
}

export default async function fetchProceso(
  {
    llaveProceso, index, id 
  } 
) {
  const awaitTime = index * 10;
  await sleep(
    awaitTime 
  );
  console.log(
    `el largo de la llave es ${ llaveProceso.length }` 
  );
  console.log(
    `llave es sin especificar ${ llaveProceso === 'sin especificar' }` 
  );

  if ( llaveProceso.length < 23
        || llaveProceso === 'sin especificar' ) {
    return [];
  }

  try {
    const req = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=false` 
    );

    if ( !req.ok ) {
      fs.writeFile(
        `./carpetas/${ id }/notOkprocesos.json`, JSON.stringify(
          req 
        ) 
      );

      return [];
    }

    const res = ( await req.json() );
    fs.writeFile(
      `./carpetas/${ id }/procesos.json`, JSON.stringify(
        res 
      ) 
    );

    const procesos = res.procesos;

    return procesos;
  } catch ( error ) {
    fs.writeFile(
      `./carpetas/${ id }/networkError.json`, JSON.stringify(
        error 
      ) 
    );

    return [];
  }
}
