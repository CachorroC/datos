"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carpeta = exports.categories = void 0;
const demanda_1 = require("./demanda");
const deudor_1 = require("./deudor");
exports.categories = [
    'nn',
    'Bancolombia',
    'Reintegra',
    'LiosJuridicos',
    'Insolvencia',
    'Terminados'
];
class Carpeta {
    constructor({ llaveProceso, category, deudor, demanda, numero }, RequestProcesos) {
        const stringLlaveProceso = typeof llaveProceso === 'string';
        if (stringLlaveProceso) {
            this.llaveProceso = llaveProceso;
        }
        else {
            this.llaveProceso = llaveProceso?.toString();
        }
        this.category = category;
        this.numero = numero;
        this.tipoProceso = demanda.tipoProceso;
        this.deudor = new deudor_1.Deudor(deudor);
        this.demanda = new demanda_1.Demanda(demanda, RequestProcesos, llaveProceso);
        this.cc = Number(deudor.cedula);
        if (RequestProcesos) {
            const idProcesosSet = new Set();
            for (const proceso of RequestProcesos) {
                if (proceso.esPrivado) {
                    continue;
                }
                idProcesosSet.add(proceso.idProceso);
            }
            this.idProcesos = Array.from(idProcesosSet);
        }
    }
    numero;
    cc;
    llaveProceso;
    idProcesos;
    category;
    tipoProceso;
    deudor;
    demanda;
    get nombre() {
        const nombres = this.deudor.primerNombre
            + (this.deudor.segundoNombre
                ? ' ' + this.deudor.segundoNombre
                : ' ');
        const apellidos = this.deudor.segundoApellido
            ? this.deudor.primerApellido + ' ' + this.deudor.segundoApellido
            : this.deudor.primerApellido;
        const rawName = nombres + apellidos;
        return rawName;
    }
}
exports.Carpeta = Carpeta;
