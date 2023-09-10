'use strict';

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

const carpetas_1 = __importDefault(
  require(
    './carpetas' 
  )
);

const llaves = carpetas_1.default.map(
  (
    carpeta 
  ) => {
    return carpeta.llaveProceso.toString();
  }
);

async function fetchProcesosRaw() {
  try {
    const procesosMap = new Map();

    for (
      let index = 0;
      index < llaves.length;
      index++
    ) {
      const llaveProceso = llaves[ index ];

      const Request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=false`
      );

      if ( !Request.ok ) {
        console.log(
          Request.statusText 
        );

        continue;
      }

      const Response = await Request.json();

      const procesos = Response.procesos;
      procesosMap.set(
        llaveProceso, procesos 
      );

      continue;
    }

    return Array.from(
      procesosMap.values() 
    );
  } catch ( error ) {
    console.log(
      error 
    );

    return error;
  }
}
fetchProcesosRaw();
