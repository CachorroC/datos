import { ErrorActuacion } from '../types/carpetas';

export async function fetchActuaciones(
  idProceso: number
) {
  try {
    const request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`
    );

    if ( !request.ok ) {
      const errorJson
        = ( await request.json() ) as ErrorActuacion;

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
        `${ idProceso }: error en la fetchActuaciones => ${ error.name } : ${ error.message }`
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
