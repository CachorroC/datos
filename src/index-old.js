'use strict';
var __createBinding = ( this && this.__createBinding ) || ( Object.create
  ? ( function(
      o, m, k, k2 
    ) {
      if ( k2 === undefined ) {
        k2 = k;
      }
      var desc = Object.getOwnPropertyDescriptor(
        m, k 
      );

      if ( !desc || ( 'get' in desc
        ? !m.__esModule
        : desc.writable || desc.configurable ) ) {
        desc = {
          enumerable: true,
          get       : function() {
            return m[ k ]; 
          } 
        };
      }
      Object.defineProperty(
        o, k2, desc 
      );
    } )
  : ( function(
      o, m, k, k2 
    ) {
      if ( k2 === undefined ) {
        k2 = k;
      }
      o[ k2 ] = m[ k ];
    } ) );
var __setModuleDefault = ( this && this.__setModuleDefault ) || ( Object.create
  ? ( function(
      o, v 
    ) {
      Object.defineProperty(
        o, 'default', {
          enumerable: true,
          value     : v 
        } 
      );
    } )
  : function(
    o, v 
  ) {
    o[ 'default' ] = v;
  } );
var __importStar = ( this && this.__importStar ) || function (
  mod 
) {
  if ( mod && mod.__esModule ) {
    return mod;
  }
  var result = {};

  if ( mod != null ) {
    for ( var k in mod ) {
      if ( k !== 'default' && Object.prototype.hasOwnProperty.call(
        mod, k 
      ) ) {
        __createBinding(
          result, mod, k 
        );
      }
    }
  }
  __setModuleDefault(
    result, mod 
  );

  return result;
};
Object.defineProperty(
  exports, '__esModule', {
    value: true 
  } 
);
exports.trimmer = exports.juzgadoFixer = exports.telFixer = void 0;

const rawCarpetas_1 = require(
  '#@/carpetas/rawCarpetas' 
);

const fs = __importStar(
  require(
    'fs/promises' 
  ) 
);
function telFixer(
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
exports.telFixer = telFixer;
function juzgadoFixer(
  juzgado 
) {
  const juzgadoMap = new Map();

  const id = juzgado.tipo.match(
    /\d/g 
  );

  if ( id ) {
    juzgadoMap.set(
      'id', id.toLocaleString() 
    );
  }
  console.log(
    juzgadoMap 
  );

  return {
    ...juzgado,
    id: Array.from(
      juzgadoMap.values() 
    )
  };
}
exports.juzgadoFixer = juzgadoFixer;
function trimmer(
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
exports.trimmer = trimmer;

const newMapCarpetas = rawCarpetas_1.carpetas.map(
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
