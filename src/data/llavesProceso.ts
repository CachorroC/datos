import { intConsultaNumeroRadicacion } from '../types/procesos';
import Carpetas from './carpetas';

async function fetchProcesosRaw() {
  try {
    const carps = await Carpetas();

    const llaves = carps.map((carpeta) => {
      return carpeta.llaveProceso;
    });

    const procesosMap = new Map();

    for (
      let index = 0;
      index < llaves.length;
      index++
    ) {
      const llaveProceso = llaves[index];

      const Request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${llaveProceso}&SoloActivos=false`
      );

      if (!Request.ok) {
        console.log(Request.statusText);

        continue;
      }

      const Response =
        (await Request.json()) as intConsultaNumeroRadicacion;

      const procesos = Response.procesos;
      procesosMap.set(llaveProceso, procesos);

      continue;
    }

    return Array.from(procesosMap.values());
  } catch (error) {
    console.log(error);

    return error;
  }
}

fetchProcesosRaw();
