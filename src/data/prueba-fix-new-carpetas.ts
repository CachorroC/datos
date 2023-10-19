import { Convert } from '../types/prueba-carpetas';

export async function fetchCarpetas() {
  try {
    const request = await fetch(
      'https://app.rsasesorjuridico.com/api/Carpetas'
    );
    console.log(
      request.status 
    );
    console.log(
      request.headers 
    );

    if ( !request.ok ) {
      throw new Error(
        `No pudimos acceder al enddpoint api/Carpetas. por favor revisa qué ocurre ${ request.status }, ${ request.statusText }`
      );
    }

    const json = await request.text();

    const carpetas = Convert.toIntCarpetas(
      json 
    );

    return carpetas;
  } catch ( e ) {
    {
      if ( e instanceof Error ) {
        console.log(
          ` error en la conexion network del fetchProceso ${ e.name } : ${ e.message }`
        );
      }

      console.log(
        `${ e }` 
      );

      return null;
    }
  }
}

fetchCarpetas()
      .then(
        (
          ff 
        ) => {
          return console.log(
            ff 
          );
        } 
      );
