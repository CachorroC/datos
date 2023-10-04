"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demanda = exports.juzgadosByProceso = void 0;
const despachos_1 = require("../despachos");
function vencimientoPagareFixer(rawVencimientoPagare) {
    const stringer = `${rawVencimientoPagare}`;
    const matcherPagare = stringer.split('//');
    console.log(matcherPagare?.length);
    if (!matcherPagare) {
        return null;
    }
    return matcherPagare.map((pagare) => {
        console.log(pagare);
        return new Date(pagare);
    });
}
function capitalBuilder(capitalAdeudado) {
    if (typeof capitalAdeudado === 'number') {
        return capitalAdeudado;
    }
    const copTaker = capitalAdeudado.replace(/\sCOP/gi, '');
    const dotTaker = copTaker.replace('.', '');
    console.log(dotTaker);
    return Number(dotTaker);
}
function juzgadosByProceso(procesos) {
    if (procesos.length === 0) {
        return [];
    }
    const juzgados = new Set();
    for (const proceso of procesos) {
        const newJ = new NewJuzgado(proceso);
        juzgados.add(newJ);
    }
    return Array.from(juzgados);
}
exports.juzgadosByProceso = juzgadosByProceso;
class NewJuzgado {
    constructor(proceso) {
        const matchedDespacho = despachos_1.Despachos.find((despacho) => {
            const nDesp = despacho.nombre
                .toLowerCase()
                .normalize('NFD')
                .replace(/\p{Diacritic}/gu, '')
                .trim();
            const pDesp = proceso.despacho
                .toLowerCase()
                .normalize('NFD')
                .replace(/\p{Diacritic}/gu, '')
                .trim();
            const indexOfDesp = nDesp.indexOf(pDesp);
            if (indexOfDesp >= 0) {
                console.log(`procesos despacho is in despachos ${indexOfDesp + 1}`);
            }
            return nDesp === pDesp;
        });
        const nameN = matchedDespacho
            ? matchedDespacho.nombre
            : proceso.despacho;
        const matchedId = nameN.match(/\d+/g);
        this.id = Number(matchedId?.toString());
        (this.tipo = matchedDespacho
            ? matchedDespacho.nombre
            : proceso.despacho),
            (this.url = matchedDespacho
                ? `https://www.ramajudicial.gov.co${matchedDespacho.url}`
                : `https://www.ramajudicial.gov.co${proceso.despacho
                    .replaceAll(' ', '-')
                    .toLowerCase()}`);
    }
    id;
    tipo;
    url;
}
class Demanda {
    constructor({ capitalAdeudado, entregaGarantiasAbogado, etapaProcesal, departamento, fechaPresentacion, mandamientoPago, municipio, obligacion, radicado, vencimientoPagare }, llaveProceso, RequestProcesos) {
        this.expediente = llaveProceso
            ? llaveProceso
            : null;
        this.capitalAdeudado = capitalBuilder(capitalAdeudado
            ? capitalAdeudado
            : 0);
        this.entregaGarantiasAbogado = entregaGarantiasAbogado
            ? new Date(entregaGarantiasAbogado)
            : null;
        this.etapaProcesal
            = etapaProcesal
                ? `${etapaProcesal}`
                : null;
        this.fechaPresentacion = fechaPresentacion
            ? new Date(fechaPresentacion)
            : null;
        this.juzgados = RequestProcesos
            ? juzgadosByProceso(RequestProcesos)
            : null;
        this.municipio = municipio
            ? municipio
            : null;
        this.mandamientoPago = mandamientoPago
            ? new Date(mandamientoPago)
            : null;
        this.obligacion = obligacion
            ? obligacion
            : null;
        this.radicado = radicado
            ? `${radicado}`
            : null;
        this.vencimientoPagare
            = vencimientoPagare
                ? vencimientoPagareFixer(vencimientoPagare)
                : null;
        this.departamento
            = departamento
                ? departamento
                : null;
    }
    capitalAdeudado;
    departamento;
    entregaGarantiasAbogado;
    tipoProceso = 'SINGULAR';
    mandamientoPago;
    etapaProcesal;
    fechaPresentacion;
    municipio;
    obligacion;
    radicado;
    vencimientoPagare;
    expediente;
    juzgados;
}
exports.Demanda = Demanda;
