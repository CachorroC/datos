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
const procesos_1 = __importDefault(require("./procesos"));
const despachos_1 = __importDefault(require("./despachos"));
const mongodb_1 = __importDefault(require("./lib/mongodb"));
async function transformRawtoCarpeta({ carpetaRaw, index }) {
    const altNumber = carpetaRaw.numero === 0
        ? carpetaRaw.id
        : carpetaRaw.numero;
    const mkdirDir = altNumber ?? index * 1000;
    fs.mkdir(`./carpetas/${mkdirDir}`, { recursive: true });
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
        }
    }
    const RequestProcesos = await (0, procesos_1.default)({
        llaveProceso: carpetaRaw.llaveProceso
            ?? 'sin especificar',
        index: index,
        id: mkdirDir
    });
    for (const proceso of RequestProcesos) {
        idProcesosSet.add(proceso.idProceso);
        rawDemanda.juzgado.forEach((juz, index, arr) => {
            if (arr.length === index + 1) {
                const newDespacho = (0, despachos_1.default)({
                    id: juz.id ?? 0,
                    tipo: proceso.despacho ?? juz.tipo,
                    url: juz.url
                        ? juz.url
                        : proceso.despacho ?? 'sin especificar'
                });
                return juzgadosMap.set(index, newDespacho);
            }
            const newDespacho = (0, despachos_1.default)({
                id: juz.id ?? 0,
                tipo: juz.tipo,
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
    fs.writeFile(`./carpetas/${mkdirDir}/${index}.json`, JSON.stringify(newCarpeta));
    return newCarpeta;
}
exports.transformRawtoCarpeta = transformRawtoCarpeta;
async function mapCarpetas({ carpetas }) {
    const newCarpetasMap = [];
    for (const carpeta of carpetas) {
        const indexOf = carpetas.indexOf(carpeta);
        const newCarpeta = await transformRawtoCarpeta({
            carpetaRaw: carpeta,
            index: indexOf
        });
        newCarpetasMap.push(newCarpeta);
        fs.writeFile('insideForOfcarpetas.json', JSON.stringify(newCarpetasMap));
    }
    fs.writeFile('carpetas.json', JSON.stringify(newCarpetasMap));
    if (carpetas.length === newCarpetasMap.length) {
        const updateCarp = await (0, mongodb_1.default)({ carpetas: newCarpetasMap });
        console.log(` se actuaclizaron ${updateCarp}`);
    }
    return newCarpetasMap;
}
exports.default = mapCarpetas;
mapCarpetas({ carpetas: carpetas_1.default });
