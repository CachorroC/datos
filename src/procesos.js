'use strict';
Object.defineProperty(
  exports, '__esModule', {
    value: true
  } 
);
exports.sleep = void 0;

function sleep(
  ms 
) {
  return new Promise(
    (
      resolve 
    ) => {
      const now = new Date()
            .getTime();

      const masTarde = now + ms;

      const outputTime = new Date(
        masTarde
      )
            .toLocaleDateString(
              'es-CO', {
                hour  : 'numeric',
                minute: 'numeric',
                hour12: true
              } 
            );
      console.log(
        `salió del timeout y empezo el fetch a las   ${ outputTime }`
      );

      return setTimeout(
        resolve, ms 
      );
    } 
  );
}
exports.sleep = sleep;

async function fetchProceso(
  {
    llaveProceso 
  } 
) {
  if (
    llaveProceso.length < 23
    || llaveProceso === 'sin especificar'
  ) {
    return [];
  }

  try {
    const req = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=false`
    );

    if ( !req.ok ) {
      console.log(
        req.headers 
      );

      return [];
    }

    const res = await req.json();

    const procesos = res.procesos;

    return procesos;
  } catch ( error ) {
    console.log(
      error 
    );

    return [];
  }
}
exports.default = fetchProceso;
