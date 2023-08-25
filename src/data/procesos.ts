import { sleep } from '../procesos';
import { intConsultaNumeroRadicacion } from '../types/procesos';

export interface fetchP {
  llaveProceso: string;
  _id: string;
  res: intConsultaNumeroRadicacion | null;
}

export default async function fetchProcesos(
  llaveProceso: string,
  index: number = 1,
  _id: string = 'unknown'
) {
  const awaitTime = index * 1000;
  console.time(index.toString());
  await sleep(awaitTime);
  console.timeEnd(index.toString());

  try {
    if (
      llaveProceso.length < 23 ||
      llaveProceso === 'sin especificar'
    ) {
      throw new Error(
        `la llaveProceso es menor de 23: ${llaveProceso}`
      );
    }

    const req = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${llaveProceso}&SoloActivos=false`
    );

    if (!req.ok) {
      throw new Error(
        `la peticion de procesos salió erronea, registra: ${req.status}: ${req.statusText}`
      );
    }

    const res =
      (await req.json()) as intConsultaNumeroRadicacion;

    const response: fetchP = {
      llaveProceso: llaveProceso,
      _id: _id,
      res: res
    };

    return response;
  } catch (e) {
    if (e instanceof Error) {
      console.log(
        ` error en la conexion network del fetchProceso ${e.name} : ${e.message}`
      );
    }
    console.log(`${e}`);

    const response: fetchP = {
      llaveProceso: llaveProceso,
      _id: _id,
      res: null
    };

    return response;
  }
}
