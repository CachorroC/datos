
import { sleep } from '../lib/fix';
import { IntCarpeta } from '../types/carpetas';
import { intConsultaActuaciones } from '../types/procesos';
import * as fs from 'fs/promises';


interface ErrorActuacion {
  StatusCode: number;
  Message: string;
  data?: intConsultaActuaciones;
}

export async function fetchActuaciones(
  idProceso: number
) {
  try {
    const request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`
    );

    if ( !request.ok ) {
      const errorJson = ( await request.json() ) as ErrorActuacion;

      return errorJson;
    }

    const data = await request.json();

    const json: ErrorActuacion = {
      StatusCode: request.status,
      Message   : request.statusText,
      data      : data
    };
    return json;
  } catch ( error ) {
    if ( error instanceof Error ) {
      console.log(
        `${ idProceso }: error en la fetchActuaciones => ${ error.name } : ${ error.message }`,
      );

      return {
        StatusCode: 404,
        Message   : error.message
      };
    }

    console.log(
      `${ idProceso }: : error en la  fetchActuaciones  =>  ${ error }`
    );

    return {
      StatusCode: 500,
      Message   : JSON.stringify(
        error
      )
    };
  }
}


export async function CarpetasFetcher () {
  const carpetasActuacionesMap = new Map<number, ErrorActuacion>();

  const archivoCarpetas = await fs.readFile(
    './carpetas.json', 'utf-8'
  );

  const Carpetas = ( JSON.parse(
    archivoCarpetas
  ) ) as IntCarpeta[];

  console.log(
    Carpetas
  );

  for ( const carpeta of Carpetas ) {
    const indexOfCarpeta = Carpetas.indexOf(
      carpeta
    );

    await sleep(
      200
    );
    console.log(
      indexOfCarpeta
    );

    if ( !carpeta.idProcesos || carpeta.idProcesos.length === 0 ) {
      console.log(
        'la carpeta no tiene idProcesos'
      );
      continue;
    }

    for ( const idProceso of carpeta.idProcesos ) {
      const actuaciones = await fetchActuaciones(
        idProceso
      );
      console.log(
        actuaciones
      );
      carpetasActuacionesMap.set(
        idProceso, actuaciones
      );
    }

    continue;
  }

  const ReturnerArray = Array.from(
    carpetasActuacionesMap.values()
  );
  fs.writeFile(
    './Actuaciones.json', JSON.stringify(
      ReturnerArray
    )
  );
  return ReturnerArray;
}


CarpetasFetcher();