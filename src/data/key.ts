import Carpetas from './carpetas';
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

export const llavesProceso = Carpetas.map(
  (
    carpeta
  ) => {
    return {
      llaveProceso: carpeta.llaveProceso,
      _id         : carpeta._id
    };
  }
);

export async function getProcesosbyLLaveProceso() {
  const procesosMap =    new Map();

  const llavesLength = idProcesos.length;
  console.log(
    `hay ${ llavesLength } llaves`
  );

  const errores: unknown[] = [];

  const noerrores: unknown[] = [];

  for ( const proceso of idProcesos ) {
    const {
      idProceso
    } = proceso;

    const indexOf = idProcesos.indexOf(
      proceso
    );

    try {
      const request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`
      );

      if ( !request.ok ) {
        fs.writeFile(
          `carpetas/${ indexOf }notok.json`, JSON.stringify(
            request.statusText + request.status
          )
        );
        errores.push(
          request
        );

        throw new Error(
          `index: ${ indexOf }
            status: ${ request.status }
            statustext: ${ request.statusText }`
        );

      }

      const json = await request.json();
      fs.writeFile(
        `carpetas/${ indexOf }.json`, JSON.stringify(
          json
        )
      );
      noerrores.push(
        json
      );


    } catch ( error ) {
      fs.writeFile(
        `carpetas/${ indexOf }error.json`, JSON.stringify(
          error
        )
      );
      errores.push(
        error
      );

      if ( error instanceof Error ) {
        console.log(
          `${ idProceso }: error en la conexion network del fetchActuaciones => ${ error.name } : ${ error.message }`
        );

      }
      console.log(
        `${ idProceso }: : error en la conexion network del fetchActuaciones  =>  ${ error }`
      );


    }
  }
  console.log(
    errores
  );
  fs.writeFile(
    'errores.json', JSON.stringify(
      errores
    )
  );
  console.log(
    noerrores
  );
  fs.writeFile(
    'noerrores.json', JSON.stringify(
      noerrores
    )
  );

  const procesosArray = Array.from(
    procesosMap.values()
  );
  fs.writeFile(
    'procesosArray.json', JSON.stringify(
      procesosArray
    )
  );

  return procesosArray;
}

getProcesosbyLLaveProceso();
