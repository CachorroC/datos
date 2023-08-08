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
exports.transformRawtoCarpeta = void 0;
const fs = __importStar(require("fs/promises"));
const carpetas_1 = __importDefault(require("./data/carpetas"));
const procesos_1 = __importStar(require("./procesos"));
const despachos_1 = __importDefault(require("./despachos"));
async function transformRawtoCarpeta({ carpetaRaw, index }) {
    const altNumber = carpetaRaw.numero === 0
        ? index
        : carpetaRaw.numero;
    const mkdirDir = carpetaRaw.id ?? altNumber;
    fs.mkdir(`./carpetas/${mkdirDir}`, {
        recursive: true
    });
    const juzgadosMap = new Map();
    const idProcesosSet = new Set();
    const rawDeudor = carpetaRaw.deudor;
    const rawDemanda = carpetaRaw.demanda;
    if (rawDemanda.juzgado.length > 0) {
        for (const juz of rawDemanda.juzgado) {
            const indexOf = rawDemanda.juzgado.indexOf(juz);
            juzgadosMap.set(indexOf, {
                ...juz,
                url: juz.url
                    ? juz.url
                    : 'sin especificar'
            });
            console.log(juzgadosMap.values());
        }
    }
    const RequestProcesos = await (0, procesos_1.default)({
        llaveProceso: carpetaRaw.llaveProceso
            ?? 'sin especificar',
        index: index,
        id: mkdirDir
    });
    console.log(RequestProcesos);
    for (const proceso of RequestProcesos) {
        idProcesosSet.add(proceso.idProceso);
        rawDemanda.juzgado.forEach((juz, index) => {
            const newDespacho = (0, despachos_1.default)({
                id: juz.id ?? 0,
                tipo: proceso.despacho ?? juz.tipo,
                url: juz.url
                    ? juz.url
                    : proceso.despacho ?? 'sin especificar'
            });
            return juzgadosMap.set(index, newDespacho);
        });
    }
    const newDemanda = {
        ...rawDemanda,
        juzgado: Array.from(juzgadosMap.values()),
        obligacion: rawDemanda.obligacion,
        ciudad: rawDemanda.ciudad,
        departamento: rawDemanda.departamento,
        entregaGarantiasAbogado: new Date(rawDemanda.entregaGarantiasAbogado ?? ''),
        etapaProcesal: rawDemanda.etapaProcesal,
        radicado: rawDemanda.radicado,
        vencimientoPagare: new Date(rawDemanda.vencimientoPagare ?? '')
    };
    const newTel = {
        celular: Number(rawDeudor.tel.celular ?? '0'),
        fijo: Number(rawDeudor.tel.fijo ?? '0')
    };
    const newDeudor = {
        cedula: Number(rawDeudor.cedula),
        primerNombre: rawDeudor.primerNombre,
        segundoNombre: rawDeudor.segundoNombre,
        primerApellido: rawDeudor.primerApellido,
        segundoApellido: rawDeudor.segundoApellido,
        tel: newTel,
        email: rawDeudor.email?.toString(),
        direccion: rawDeudor.direccion
    };
    console.log(newDeudor);
    const newCarpeta = {
        capitalAdeudado: carpetaRaw.capitalAdeudado,
        demanda: newDemanda,
        deudor: newDeudor,
        grupo: carpetaRaw.grupo,
        id: Number(carpetaRaw.id ?? '0'),
        numero: carpetaRaw.numero,
        llaveProceso: carpetaRaw.llaveProceso,
        idProcesos: Array.from(idProcesosSet),
        tipoProceso: carpetaRaw.tipoProceso
    };
    fs.writeFile(`./carpetas/${carpetaRaw.id ?? carpetaRaw.numero}/carpeta.json`, JSON.stringify(newCarpeta));
    return newCarpeta;
}
exports.transformRawtoCarpeta = transformRawtoCarpeta;
async function mapCarpetas({ carpetas }) {
    const newCarpetasMap = new Map();
    for (const carpeta of carpetas) {
        const indexOf = carpetas.indexOf(carpeta);
        const newCarpeta = await transformRawtoCarpeta({
            carpetaRaw: carpeta,
            index: indexOf
        });
        newCarpetasMap.set(carpeta.numero, newCarpeta);
        console.log(newCarpeta.numero);
        fs.writeFile('insideForOfcarpetas.json', JSON.stringify(Array.from(newCarpetasMap.values())));
    }
    fs.writeFile('carpetas.json', JSON.stringify(Array.from(newCarpetasMap.values())));
    await (0, procesos_1.sleep)(600 * 1000);
    console.log(`carpetas length is ${carpetas.length}`);
    console.log(`arrayMap length is ${newCarpetasMap.size}`);
    return Array.from(newCarpetasMap.values());
}
exports.default = mapCarpetas;
mapCarpetas({
    carpetas: carpetas_1.default
})
    .then((ff) => {
    fs.writeFile('fullfiled.json', JSON.stringify(ff));
    return ff;
}, (rr) => {
    fs.writeFile('rejected.json', JSON.stringify(rr));
    return rr;
})
    .catch((error) => {
    fs.writeFile('error.json', JSON.stringify(error));
    console.log(error);
});
