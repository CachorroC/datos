'use strict';
Object.defineProperty(
  exports, '__esModule', {
    value: true
  } 
);
exports.Carpeta = exports.categories = void 0;

const demanda_1 = require(
  './demanda' 
);

const deudor_1 = require(
  './deudor' 
);
exports.categories = [
  'nn',
  'Bancolombia',
  'Reintegra',
  'LiosJuridicos',
  'Insolvencia',
  'Terminados'
];

class Carpeta {
  idProcesos;
  constructor(
    {
      llaveProceso,
      category,
      deudor,
      demanda,
      numero
    },
    RequestProcesos
  ) {
    this.llaveProceso = llaveProceso;
    this.category = category;
    this.numero = numero;
    this.tipoProceso = demanda.tipoProceso;
    this.deudor = new deudor_1.Deudor(
      deudor 
    );
    this.cc = Number(
      deudor.cedula 
    );

    if ( RequestProcesos ) {
      this.idProcesos = RequestProcesos.map(
        (
          proceso 
        ) => {
          return proceso.idProceso;
        }
      );
      this.demanda = new demanda_1.Demanda(
        demanda,
        llaveProceso,
        RequestProcesos
      );
    } else {
      this.demanda = new demanda_1.Demanda(
        demanda,
        llaveProceso
      );
    }
  }
  numero;
  cc;
  llaveProceso;
  category;
  tipoProceso;
  deudor;
  demanda;
  get nombre() {
    const nombres
      = this.deudor.primerNombre
      + ( this.deudor.segundoNombre
        ? ' ' + this.deudor.segundoNombre
        : ' ' );

    const apellidos = this.deudor.segundoApellido
      ? this.deudor.primerApellido
        + ' '
        + this.deudor.segundoApellido
      : this.deudor.primerApellido;

    const rawName = nombres + apellidos;
    return rawName;
  }
}
exports.Carpeta = Carpeta;
