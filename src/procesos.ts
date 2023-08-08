import { sleep } from 'lib/fix';
import { intConsultaNumeroRadicacion } from 'types/procesos';


export default async function fetchProceso( {
  llaveProceso, index
}: { llaveProceso: string;  index: number} ) {
  const awaitTime = index * 1000;
  await sleep( awaitTime );

  if ( llaveProceso.length < 23 ) {
    console.log( `esta llaveProceso es menos de 23: ${ llaveProceso }` );

    return [];
  }

  try {
    const req = await fetch( `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=false` );

    if ( !req.ok ) {
      return [];
    }
    const res = ( await req.json() ) as intConsultaNumeroRadicacion;
    const procesos = res.procesos;

    return procesos;
  } catch ( error ) {
    console.log( error );

    return [];
  }
}
