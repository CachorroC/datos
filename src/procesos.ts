import { intConsultaNumeroRadicacion } from './types/procesos';

export function sleep(ms: number) {
  return new Promise((resolve) => {
    const now = new Date().getTime();

    const masTarde = now + ms;

    const outputTime = new Date(
      masTarde
    ).toLocaleDateString('es-CO', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    console.log(
      `salió del timeout y empezo el fetch a las   ${outputTime}`
    );

    return setTimeout(resolve, ms);
  });
}

export default async function fetchProceso(
  llaveProceso?: string
) {
  try {
    if (!llaveProceso) {
      throw new Error('no hay llaveProceso');
    }

    if (llaveProceso.length > 23) {
      throw new Error(
        `llaveProceso más de 23 digitos: ${llaveProceso}`
      );
    }

    const req = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${llaveProceso}&SoloActivos=false`
    );

    if (!req.ok) {
      throw new Error(
        `request not ok ${llaveProceso}, status: ${req.status}`
      );
    }

    const res =
      (await req.json()) as intConsultaNumeroRadicacion;

    const { procesos } = res;

    return procesos;
  } catch (error) {
    console.log(error);

    return null;
  }
}
