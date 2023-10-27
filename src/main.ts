import { insertNewCarpetas } from '.';
import Carpetas from './data/carpetas-raw';
import { categoryAssignment } from './models/categories';
import { CarpetaPrueba } from './models/carpeta';
import fetchProceso, { sleep } from './procesos';
import { IntCarpetaPrueba } from './types/carpetas';
import { intProceso } from './types/procesos';
import * as fs from 'fs/promises';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createCarpetasDemanda() {
  const procesosMap = new Map<
    number,
    intProceso
  >();

  const newCarpetas = new Set<IntCarpetaPrueba>();

  const incomingCarpetas = Carpetas.sort(
    (
      a, b 
    ) => {
      const x = a.numero;

      const y = b.numero;

      if ( x < y ) {
        return -1;
      }

      if ( x > y ) {
        return 1;
      }

      return 0;
    }
  );

  for ( const rawCarpeta of incomingCarpetas ) {
    const indexOfCarpeta
      = incomingCarpetas.indexOf(
        rawCarpeta 
      );

    const carpeta
      = categoryAssignment(
        rawCarpeta 
      );

    const awaitTime = 500;
    console.time(
      'idk' 
    );
    await sleep(
      awaitTime 
    );
    console.log(
      `carpetas has a length of ${ incomingCarpetas.length } and you are in carpeta number ${ carpeta.numero } of index: ${ indexOfCarpeta }`
    );

    const RequestProcesos = await fetchProceso(
      carpeta.llaveProceso
    );
    console.timeEnd(
      'idk' 
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

      const idkInserter
        = await prisma.carpeta.upsert(
          {
            where: {
              id: newCarpeta.numero
            },
            update: {
              nombre      : newCarpeta.nombre,
              llaveProceso: newCarpeta.llaveProceso,
              numero      : newCarpeta.numero,
              category    : newCarpeta.category,
              idProcesos  : newCarpeta.idProcesos,
              cc          : newCarpeta.cc
            },
            create: {
              nombre      : newCarpeta.nombre,
              llaveProceso: newCarpeta.llaveProceso,
              numero      : newCarpeta.numero,
              category    : newCarpeta.category,
              idProcesos  : newCarpeta.idProcesos,
              cc          : newCarpeta.cc
            }
          } 
        );
      console.log(
        idkInserter 
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

    const idkInserter
      = await prisma.carpeta.upsert(
        {
          where: {
            id: newCarpeta.numero
          },
          update: {
            nombre      : newCarpeta.nombre,
            llaveProceso: newCarpeta.llaveProceso,
            numero      : newCarpeta.numero,
            category    : newCarpeta.category,
            idProcesos  : newCarpeta.idProcesos,
            cc          : newCarpeta.cc
          },
          create: {
            nombre      : newCarpeta.nombre,
            llaveProceso: newCarpeta.llaveProceso,
            numero      : newCarpeta.numero,
            category    : newCarpeta.category,
            idProcesos  : newCarpeta.idProcesos,
            cc          : newCarpeta.cc
          }
        } 
      );
    console.log(
      idkInserter 
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

  if ( !insertCarpetas ) {
    throw new Error(
      'no se insertaron las carpetas en mongodb'
    );
  }

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
