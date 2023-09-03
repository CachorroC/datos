'use strict';
var __createBinding
  = ( this && this.__createBinding )
  || ( Object.create
    ? function (
      o, m, k, k2 
    ) {
      if ( k2 === undefined ) {
        k2 = k;
      }
      var desc
          = Object.getOwnPropertyDescriptor(
            m, k 
          );

      if (
        !desc
          || ( 'get' in desc
            ? !m.__esModule
            : desc.writable || desc.configurable )
      ) {
        desc = {
          enumerable: true,
          get       : function () {
            return m[ k ];
          }
        };
      }
      Object.defineProperty(
        o, k2, desc 
      );
    }
    : function (
      o, m, k, k2 
    ) {
      if ( k2 === undefined ) {
        k2 = k;
      }
      o[ k2 ] = m[ k ];
    } );
var __setModuleDefault
  = ( this && this.__setModuleDefault )
  || ( Object.create
    ? function (
      o, v 
    ) {
      Object.defineProperty(
        o, 'default', {
          enumerable: true,
          value     : v
        } 
      );
    }
    : function (
      o, v 
    ) {
      o[ 'default' ] = v;
    } );

var __importStar
  = ( this && this.__importStar )
  || function (
    mod 
  ) {
    if ( mod && mod.__esModule ) {
      return mod;
    }
    var result = {};

    if ( mod != null ) {
      for ( var k in mod ) {
        if (
          k !== 'default'
          && Object.prototype.hasOwnProperty.call(
            mod,
            k
          )
        ) {
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

var __importDefault
  = ( this && this.__importDefault )
  || function (
    mod 
  ) {
    return mod && mod.__esModule
      ? mod
      : {
          default: mod 
        };
  };
Object.defineProperty(
  exports, '__esModule', {
    value: true
  } 
);
exports.getProcesosbyLLaveProceso
  = exports.llavesProceso
  = exports.idProcesos
    = void 0;

const carpetas_1 = __importDefault(
  require(
    './carpetas' 
  )
);

const procesos_1 = __importDefault(
  require(
    './procesos' 
  )
);

const fs = __importStar(
  require(
    'fs/promises' 
  ) 
);
exports.idProcesos = carpetas_1.default.map(
  (
    carpeta 
  ) => {
    return {
      idProceso: carpeta.idProceso,
      _id      : carpeta._id
    };
  }
);
exports.llavesProceso = carpetas_1.default.map(
  (
    carpeta 
  ) => {
    return {
      llaveProceso: carpeta.llaveProceso,
      _id         : carpeta._id
    };
  }
);

async function getProcesosbyLLaveProceso() {
  const procesosMap = new Map();

  const llavesLength
    = exports.llavesProceso.length;
  console.log(
    `hay ${ llavesLength } llaves` 
  );

  /*
    for ( const llave of llavesProceso ) {
  
      const indexOf = llavesProceso.indexOf(
        llave
      );
      console.log(
        indexOf
      );
         console.time(
        indexOf.toString()
      );
      await sleep(
        1000
      );
      console.timeEnd(
        indexOf.toString()
      );
  
      const procesos= await fetchProcesos(
        llave.llaveProceso, indexOf, llave._id
      );
      procesosMap.set(
        indexOf, procesos
      );
  
      continue;
    }
  
    const procesosArray = Array.from(
      procesosMap.values()
    );
    */
  const procesosArray = exports.llavesProceso.map(
    async (
      llave, index 
    ) => {
      const procesos = await ( 0,
      procesos_1.default )(
        llave.llaveProceso,
        index,
        llave._id
      );

      return procesos;
    }
  );
  fs.writeFile(
    'procesosbyidsleepInfetch.json',
    JSON.stringify(
      procesosArray 
    )
  );

  return procesosArray;
}
exports.getProcesosbyLLaveProceso
  = getProcesosbyLLaveProceso;
getProcesosbyLLaveProceso();
