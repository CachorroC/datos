import { carpetas } from '#@/carpetas/rawCarpetas';
import * as fs from 'fs/promises';

export function telFixer(
  tel 
) {
  const fijo = new Map();
  const celular = new Map();

  const hasFijo = tel.includes(
    'F' 
  );

  if ( hasFijo ) {
    const indexOfFijo = tel.indexOf(
      'F' 
    );

    const fijoRaw = tel.slice(
      indexOfFijo, 10 
    )
            .replace(
              'F ', '' 
            );
    fijo.set(
      'fijo', fijoRaw 
    );
  }

  const hasCel = tel.includes(
    'CEL' 
  );

  if ( hasCel ) {
    const indexOfCel = tel.indexOf(
      'CEL' 
    );

    const celularRaw = tel.slice(
      indexOfCel 
    )
            .replace(
              'CEL ', '' 
            );
    celular.set(
      'celular', celularRaw 
    );
  }

  return {
    fijo: Array.from(
      fijo.values() 
    )
            .toLocaleString(),
    celular: Array.from(
      celular.values() 
    )
            .toLocaleString()
  };
}

export function juzgadoFixer(
  juzgado 
) {
  const id = juzgado.tipo.replace(
    /\D/g, '' 
  );

  const tipo = juzgado.tipo.replace(
    /\d/g, '' 
  );

  return {
    ...juzgado,
    id  : id,
    tipo: tipo
  };
}

export function trimmer(
  nombreCompleto 
) {
  const trimDemandado = nombreCompleto.replace(
    /^\s+|\s+$/gm, '' 
  );
  console.log(
    trimDemandado 
  );

  const splitDemandado = trimDemandado.split(
    ' ' 
  );
  const splitDemandadoLength = splitDemandado.length;
  switch ( splitDemandadoLength ) {
    case 1:
      return {
        primerNombre: splitDemandado[ 0 ]
      };
    case 2:
      return {
        primerNombre  : splitDemandado[ 0 ],
        primerApellido: splitDemandado[ 1 ]
      };
    case 3:
      return {
        primerNombre   : splitDemandado[ 0 ],
        primerApellido : splitDemandado[ 1 ],
        segundoApellido: splitDemandado[ 2 ]
      };
    case 4:
      return {
        primerNombre   : splitDemandado[ 0 ],
        segundoNombre  : splitDemandado[ 1 ],
        primerApellido : splitDemandado[ 2 ],
        segundoApellido: splitDemandado[ 3 ]
      };
    case 5:
      return {
        primerNombre   : splitDemandado[ 0 ],
        segundoNombre  : splitDemandado[ 1 ],
        primerApellido : splitDemandado[ 2 ],
        segundoApellido: `${ splitDemandado[ 3 ] } ${ splitDemandado[ 4 ] } `
      };
    default:
      return {
        primerNombre   : splitDemandado[ 0 ],
        segundoNombre  : `${ splitDemandado[ 1 ] } ${ splitDemandado[ 2 ] } `,
        primerApellido : splitDemandado[ 3 ],
        segundoApellido: `${ splitDemandado[ 4 ] } ${ splitDemandado[ 5 ] } `
      };
  }
}

const newMapCarpetas = carpetas.map(
  (
    carpeta 
  ) => {
    if ( carpeta.deudor.tel ) {
      telFixer(
        carpeta.deudor.tel.toString() 
      );
    }
    const juzgados = carpeta.demanda?.juzgado?.ejecucion ?? carpeta.demanda?.juzgado?.origen;
    console.log(
      juzgados 
    );

    const trimmedName = trimmer(
      carpeta.deudor.nombreCompleto 
    );

    const {
      nombreCompleto, ...newDeudor 
    } = carpeta.deudor;

    const newCarpeta = {
      ...carpeta,
      demanda: {
        ...carpeta.demanda,
        juzgados: {
          origen: juzgadoFixer(
            carpeta.demanda?.juzgado?.origen ?? {
              tipo: 'unknown',
              id  : 0,
              url : 'https://app.rsasesorjuridico.com'
            } 
          ),
          ejecucion: juzgadoFixer(
            carpeta.demanda?.juzgado?.ejecucion ?? {
              tipo: 'unknown',
              id  : 0,
              url : 'https://app.rsasesorjuridico.com'
            } 
          )
        },
        despachoActivo: juzgadoFixer(
          juzgados ?? {
            tipo: 'unknown',
            id  : 0,
            url : 'https://app.rsasesorjuridico.com'
          } 
        )
      },
      deudor: {
        ...newDeudor,
        ...trimmedName,
        tel: telFixer(
          carpeta.deudor.tel?.toString() ?? 'nada' 
        )
      }
    };

    return newCarpeta;
  } 
);
console.log(
  newMapCarpetas 
);
fs.writeFile(
  'nuevosNombresMap.json', JSON.stringify(
    newMapCarpetas 
  ) 
);
