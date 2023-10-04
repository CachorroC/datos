'use strict';
Object.defineProperty(
  exports, '__esModule', {
    value: true
  } 
);
exports.fetchCarpetas = void 0;

const prueba_carpetas_1 = require(
  '../types/prueba-carpetas' 
);

async function fetchCarpetas() {
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

    const carpetas
      = prueba_carpetas_1.Convert.toIntCarpetas(
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

exports.fetchCarpetas = fetchCarpetas;
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
