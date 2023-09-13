'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc =
          Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc
            ? !m.__esModule
            : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            }
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', {
          enumerable: true,
          value: v
        });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (
          k !== 'default' &&
          Object.prototype.hasOwnProperty.call(
            mod,
            k
          )
        )
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule
      ? mod
      : { default: mod };
  };
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getProcesosbyLLaveProceso =
  exports.llavesProceso =
  exports.idProcesos =
    void 0;
const carpetas_1 = __importDefault(
  require('./carpetas')
);
const fs = __importStar(require('fs/promises'));
exports.idProcesos = carpetas_1.default.map(
  (carpeta) => {
    return {
      idProceso: carpeta.idProceso,
      _id: carpeta._id
    };
  }
);
exports.llavesProceso = carpetas_1.default.map(
  (carpeta) => {
    return {
      llaveProceso: carpeta.llaveProceso,
      _id: carpeta._id
    };
  }
);
async function getProcesosbyLLaveProceso() {
  const procesosMap = new Map();
  const llavesLength = exports.idProcesos.length;
  console.log(`hay ${llavesLength} llaves`);
  const errores = [];
  const noerrores = [];
  for (const proceso of exports.idProcesos) {
    const { idProceso } = proceso;
    const indexOf =
      exports.idProcesos.indexOf(proceso);
    try {
      const request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${idProceso}`
      );
      console.log(request.headers);
      fs.writeFile(
        `carpetas/${indexOf}headers.json`,
        JSON.stringify(request.headers)
      );
      const json = await request.json();
      fs.writeFile(
        `carpetas/${indexOf}json.json`,
        JSON.stringify(json)
      );
      noerrores.push(json);
    } catch (error) {
      errores.push(error);
      if (error instanceof Error) {
        fs.writeFile(
          `carpetas/${indexOf}nameError.json`,
          JSON.stringify(error.name)
        );
        fs.writeFile(
          `carpetas/${indexOf}messageError.json`,
          JSON.stringify(error.message)
        );
        console.log(
          `${idProceso}: error en la conexion network del fetchActuaciones => ${error.name} : ${error.message}`
        );
      }
      fs.writeFile(
        `carpetas/${indexOf}error.json`,
        `${JSON.stringify(error)}`
      );
      console.log(
        `${idProceso}: : error en la conexion network del fetchActuaciones  =>  ${error}`
      );
    }
  }
  console.log(errores);
  fs.writeFile(
    'errores.json',
    JSON.stringify(errores)
  );
  console.log(noerrores);
  fs.writeFile(
    'noerrores.json',
    JSON.stringify(noerrores)
  );
  const procesosArray = Array.from(
    procesosMap.values()
  );
  fs.writeFile(
    'procesosArray.json',
    JSON.stringify(procesosArray)
  );
  return procesosArray;
}
exports.getProcesosbyLLaveProceso =
  getProcesosbyLLaveProceso;
getProcesosbyLLaveProceso();
