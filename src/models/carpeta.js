'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Carpeta = exports.categories = void 0;
const demanda_1 = require('./demanda');
const deudor_1 = require('./deudor');
exports.categories = [
  'nn',
  'Bancolombia',
  'Reintegra',
  'LiosJuridicos',
  'Insolvencia',
  'Terminados'
];
class Carpeta {
  constructor({
    llaveProceso,
    category,
    deudor,
    demanda,
    tipoProceso,
    numero
  }) {
    const stringLlaveProceso =
      typeof llaveProceso === 'string';
    if (stringLlaveProceso) {
      this.llaveProceso = llaveProceso;
    } else {
      this.llaveProceso = llaveProceso.toString();
    }
    this.category = category;
    this.numero = numero;
    this.tipoProceso = tipoProceso;
    this.categoryTag =
      exports.categories.indexOf(category);
    this.deudor = new deudor_1.Deudor(deudor);
    this.demanda = new demanda_1.Demanda(
      demanda,
      [],
      llaveProceso
    );
  }
  category;
  categoryTag;
  demanda;
  deudor;
  numero;
  tipoProceso;
  set llaveProceso(x) {
    this.llaveProceso = x;
  }
  get llaveProceso() {
    return this.llaveProceso;
  }
}
exports.Carpeta = Carpeta;
