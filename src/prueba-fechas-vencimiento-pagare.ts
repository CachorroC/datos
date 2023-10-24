import Carpetas from './data/carpetas-raw';
import * as fs from 'fs/promises';

export const vencimientosPagare = Carpetas.map(
  (
    carpeta 
  ) => {
    return carpeta.demanda.vencimientoPagare;
  }
);

function CarpetasPruebaVencimientoPagare() {
  const pagaresMap = new Map<
    string | number,
    Date[]
  >();
  console.log(
    JSON.stringify(
      vencimientosPagare, null, 2 
    )
  );
  fs.writeFile(
    './src/vencimientosPagare.json',
    JSON.stringify(
      vencimientosPagare, null, 2 
    )
  );

  for ( const pagareRaw of vencimientosPagare ) {
    console.log(
      pagareRaw 
    );

    if ( !pagareRaw ) {
      continue;
    }

    let stringPagare;

    if ( typeof pagareRaw === 'number' ) {
      stringPagare = pagareRaw.toString();
    } else {
      stringPagare = pagareRaw;
    }

    const pagaresDateSet = new Set<Date>();

    const matcherPagare
      = stringPagare.split(
        '//' 
      );
    console.log(
      `hay ${ matcherPagare?.length } pagarés en este proceso`
    );

    for ( const pagare of matcherPagare ) {
      const newPagareString = pagare
            .trim()
            .replace(
              '/', '-' 
            );

      /*
      const regexMatchStringYear = newPagareString.match(
        /\d{4}/g
      );

      const regexMatchStringMonth = newPagareString.match(
        /-\d{1,2}-/g
      );
      console.log(
        regexMatchStringYear
      );

      const monthConGuiones = regexMatchStringMonth
        ? regexMatchStringMonth[ 0 ]
        : '-01-';

      const month = monthConGuiones.replaceAll(
        '-', ''
      );

      const year = regexMatchStringYear
        ? regexMatchStringYear[ 0 ]
        : '2015';

 */
      const stringDate = new Date(
        newPagareString
      );

      /*  console.log(
      `la nueva fecha del pagaré arrojó: ${ stringDate.toDateString() }`
    ); */

      if ( stringDate === null ) {
        continue;
      }

      pagaresDateSet.add(
        stringDate 
      );
    }

    if ( pagaresDateSet.size === 0 ) {
      continue;
    }

    pagaresMap.set(
      stringPagare,
      Array.from(
        pagaresDateSet 
      )
    );
    continue;
  }

  return Array.from(
    pagaresMap.values() 
  );
}

console.log(
  CarpetasPruebaVencimientoPagare() 
);
