import { fetchActuaciones } from '../lib/actuaciones';
import { sleep } from '../lib/fix';
import {
  ErrorActuacion,
  IntCarpeta
} from '../types/carpetas';
import * as fs from 'fs/promises';

export async function CarpetasFetcher() {
  const carpetasActuacionesMap = new Map<
    number,
    ErrorActuacion
  >();

  const archivoCarpetas = await fs.readFile(
    './carpetas.json',
    'utf-8'
  );

  const Carpetas = JSON.parse(
    archivoCarpetas
  ) as IntCarpeta[];

  console.log(Carpetas);

  for (const carpeta of Carpetas) {
    const indexOfCarpeta =
      Carpetas.indexOf(carpeta);

    await sleep(200);
    console.log(indexOfCarpeta);

    if (
      !carpeta.idProcesos ||
      carpeta.idProcesos.length === 0
    ) {
      console.log(
        'la carpeta no tiene idProcesos'
      );
      continue;
    }

    for (const idProceso of carpeta.idProcesos) {
      const actuaciones =
        await fetchActuaciones(idProceso);
      console.log(actuaciones);
      carpetasActuacionesMap.set(
        idProceso,
        actuaciones
      );
    }

    continue;
  }

  const ReturnerArray = Array.from(
    carpetasActuacionesMap.values()
  );
  fs.writeFile(
    './Actuaciones.json',
    JSON.stringify(ReturnerArray)
  );
  return ReturnerArray;
}

CarpetasFetcher();
