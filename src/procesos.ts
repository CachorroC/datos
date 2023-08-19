import { intConsultaNumeroRadicacion } from './types/procesos';

export function sleep(
  ms: number
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
    llaveProceso
  }: {
  llaveProceso: string;
}
) {

  console.log(
    `el largo de la llave es ${ llaveProceso.length }`
  );

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
      return [];
    }

    const res
      = ( await req.json() ) as intConsultaNumeroRadicacion;

    const procesos = res.procesos;

    return procesos;
  } catch ( error ) {

    return [];
  }
}
