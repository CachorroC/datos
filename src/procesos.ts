import { intConsultaNumeroRadicacion } from './types/procesos';

export function sleep(
  ms: number
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

export default async function fetchProceso(
  {
    llaveProceso
  }: {
  llaveProceso: string;
}
) {

  if (
    llaveProceso.length < 23
    || llaveProceso === 'sin especificar'
  ) {
    return [];
  }

  try
  {

    const req = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=false`
    );

    if ( !req.ok ) {
      console.log(
        req.headers
      );

      return [];
    }

    const res
      = ( await req.json() ) as intConsultaNumeroRadicacion;

    const procesos = res.procesos;

    return procesos;
  } catch ( error ) {
    console.log(
      error
    );

    return [];
  }
}
