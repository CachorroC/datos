"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demanda = exports.newJuzgado = void 0;
const procesos_1 = __importStar(require("../procesos"));
const despachos_1 = require("../despachos");
const deudor_1 = require("./deudor");
const fs = __importStar(require("fs/promises"));
const __1 = require("..");
const carpetas_raw_1 = __importDefault(require("../data/carpetas-raw"));
const departamentos_1 = __importDefault(require("../data/departamentos"));
function vencimientoPagareFixer(rawVencimientoPagare) {
    const matcherPagare = rawVencimientoPagare
        .toString()
        .match(/\d{1,4}(\/|-)\d{1,2}(\/|-)\d{1,4}/g);
    console.log(matcherPagare?.length);
    if (!matcherPagare) {
        return null;
    }
    const newDates = matcherPagare.map((pagare) => {
        console.log(pagare);
        return new Date(pagare);
    });
    return newDates;
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
function newJuzgado(procesos) {
    const juzgados = new Map();
    for (const proceso of procesos) {
        const indexOf = procesos.indexOf(proceso);
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
        const newId = Number(matchedId?.toString());
        const newJuzgado = {
            id: newId ?? 0,
            tipo: matchedDespacho
                ? matchedDespacho.nombre
                : proceso.despacho,
            url: matchedDespacho
                ? `https://www.ramajudicial.gov.co${matchedDespacho.url}`
                : `https://www.ramajudicial.gov.co${proceso.despacho
                    .replaceAll(' ', '-')
                    .toLowerCase()}`
        };
        juzgados.set(indexOf, newJuzgado);
    }
    return Array.from(juzgados.values());
}
exports.newJuzgado = newJuzgado;
function setDepartamento(departamento) {
    const deptos = departamentos_1.default.result;
    const filterDeptos = deptos.find((dpt) => {
        const stringDepto = dpt.descripcion;
        return (stringDepto.toLowerCase()
            === departamento.toLowerCase());
    });
    if (filterDeptos) {
        return filterDeptos.descripcion;
    }
    return null;
}
class Demanda {
    constructor({ capitalAdeudado, entregaGarantiasAbogado, etapaProcesal, departamento, fechaPresentacion, municipio, obligacion, radicado, vencimientoPagare }) {
        this.capitalAdeudado = capitalBuilder(capitalAdeudado);
        this.entregaGarantiasAbogado = new Date(entregaGarantiasAbogado);
        this.etapaProcesal
            = etapaProcesal?.toString();
        this.fechaPresentacion = new Date(fechaPresentacion ?? '');
        this.municipio = municipio;
        this.obligacion = obligacion;
        this.radicado = radicado.toString();
        this.vencimientoPagare
            = vencimientoPagareFixer(vencimientoPagare);
        this.departamento
            = setDepartamento(departamento);
    }
    departamento;
    juzgados = [];
    capitalAdeudado;
    entregaGarantiasAbogado;
    etapaProcesal;
    fechaPresentacion;
    municipio;
    obligacion;
    radicado;
    vencimientoPagare;
    expediente;
}
exports.Demanda = Demanda;
async function createCarpetasDemanda() {
    const procesosMap = new Map();
    const newCarpetas = new Set();
    for (const carpeta of carpetas_raw_1.default) {
        const awaitTime = 200;
        const now = new Date()
            .getTime();
        const masTarde = now + awaitTime;
        const outputTime = new Date(masTarde)
            .toLocaleDateString('es-CO', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
        console.log(`estará listo a las ${outputTime}`);
        await (0, procesos_1.sleep)(awaitTime);
        console.log(`carpetas has a length of ${carpetas_raw_1.default.length} and you are in carpeta number ${carpeta.numero}`);
        const RequestProcesos = await (0, procesos_1.default)({
            llaveProceso: carpeta.llaveProceso.toString()
        });
        const newDemanda = new Demanda(carpeta.demanda);
        const newDeudor = new deudor_1.Deudor(carpeta.deudor);
        console.log(newDeudor.tel.celular);
        const categories = [
            'nn',
            'Bancolombia',
            'Reintegra',
            'LiosJuridicos',
            'Insolvencia',
            'Terminados'
        ];
        if (RequestProcesos.length > 0) {
            for (const proceso of RequestProcesos) {
                if (proceso.esPrivado) {
                    continue;
                }
                procesosMap.set(proceso.idProceso, proceso);
                const indexOf = RequestProcesos.indexOf(proceso);
                const juzgados = newJuzgado(RequestProcesos);
                const newCarpeta = {
                    category: carpeta.category,
                    deudor: newDeudor,
                    numero: carpeta.numero,
                    tipoProceso: carpeta.tipoProceso,
                    idProceso: proceso.idProceso,
                    llaveProceso: carpeta.llaveProceso.toString(),
                    categoryTag: categories.indexOf(carpeta.category),
                    demanda: {
                        ...newDemanda,
                        expediente: carpeta.llaveProceso.toString(),
                        juzgados: juzgados
                    }
                };
                fs.writeFile(`carpetas/${newCarpeta.numero}.${indexOf}.json`, JSON.stringify(newCarpeta));
                newCarpetas.add(newCarpeta);
            }
        }
        else if (RequestProcesos.length === 0) {
            const newCarpeta = {
                demanda: {
                    ...newDemanda,
                    expediente: carpeta.llaveProceso.toString(),
                    departamento: carpeta.demanda.departamento
                },
                category: carpeta.category,
                categoryTag: categories.indexOf(carpeta.category),
                deudor: newDeudor,
                numero: carpeta.numero,
                llaveProceso: carpeta.llaveProceso.toString(),
                tipoProceso: carpeta.tipoProceso
            };
            fs.writeFile(`carpetas/${newCarpeta.numero}.json`, JSON.stringify(newCarpeta));
            newCarpetas.add(newCarpeta);
        }
    }
    const newProcesosArray = Array.from(procesosMap.values());
    fs.writeFile('procesosData.json', JSON.stringify(newProcesosArray));
    const newCarpetasArray = Array.from(newCarpetas);
    const insertCarpetas = await (0, __1.insertNewCarpetas)(newCarpetasArray);
    console.log(insertCarpetas);
    return newCarpetasArray;
}
console.log(createCarpetasDemanda()
    .then((ff) => {
    fs.writeFile('newCarpetasFinal.json', JSON.stringify(ff));
    return console.log(ff);
}, (rr) => {
    return console.log(rr);
})
    .catch((err) => {
    return console.log(JSON.stringify(err));
}));
