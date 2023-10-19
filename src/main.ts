import { insertNewCarpetas } from '.';
import Carpetas from './data/carpetas-raw';
import { categoryAssignment } from './models/categories';
import { CarpetaPrueba } from './models/carpeta';
import fetchProceso, { sleep } from './procesos';
import { IntCarpetaPrueba } from './types/carpetas';
import { intProceso } from './types/procesos';
import * as fs from 'fs/promises';

export async function createCarpetasDemanda() {
  const procesosMap = new Map<
    number,
    intProceso
  >();

  const newCarpetas = new Set<IntCarpetaPrueba>();

  for ( const rawCarpeta of Carpetas ) {
    const indexOfCarpeta
      = Carpetas.indexOf(
        rawCarpeta
      );

    const carpeta
      = categoryAssignment(
        rawCarpeta
      );
    /*
    if ( carpeta.category === 'Terminados' ) {
      continue;
    } */

    const awaitTime = 500;

    await sleep(
      awaitTime
    );
    console.log(
      `carpetas has a length of ${ Carpetas.length } and you are in carpeta number ${ indexOfCarpeta }`
    );

    const RequestProcesos = await fetchProceso(
      carpeta.llaveProceso
    );

    if ( RequestProcesos ) {
      const newCarpeta = new CarpetaPrueba(
        carpeta,
        RequestProcesos
      );
      newCarpetas.add(
        newCarpeta
      );
      fs.writeFile(
        `carpetas/${ newCarpeta.numero }.json`,
        JSON.stringify(
          newCarpeta
        )
      );
      continue;
    }

    const newCarpeta = new CarpetaPrueba(
      carpeta
    );
    newCarpetas.add(
      newCarpeta
    );
    fs.writeFile(
      `carpetas/${ newCarpeta.numero }.json`,
      JSON.stringify(
        newCarpeta
      )
    );
    continue;
  }

  const newProcesosArray = Array.from(
    procesosMap.values()
  );

  fs.writeFile(
    'procesosData.json',
    JSON.stringify(
      newProcesosArray
    )
  );

  const newCarpetasArray
    = Array.from(
      newCarpetas
    );

  const insertCarpetas = await insertNewCarpetas(
    newCarpetasArray
  );
  console.log(
    insertCarpetas
  );

  return newCarpetasArray;
}

console.log(
  createCarpetasDemanda()
        .then(
          (
            ff
          ) => {
            fs.writeFile(
              'newCarpetasFinal.json',
              JSON.stringify(
                ff
              )
            );

            return console.log(
              ff
            );
          },
          (
            rr
          ) => {
            return console.log(
              rr
            );
          }
        )
        .catch(
          (
            err
          ) => {
            return console.log(
              JSON.stringify(
                err
              )
            );
          }
        )
        .finally(
          () => {
            return;
          }
        )
);
