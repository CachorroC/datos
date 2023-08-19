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
const delete_1 = require("./carpetas/delete");
const carpetas_1 = __importDefault(require("./data/carpetas"));
const despachos_1 = __importDefault(require("./despachos"));
const procesos_1 = __importDefault(require("./procesos"));
async function transformRawtoCarpeta({ carpetaRaw, index }) {
    const carpetasPeridProceso = new Map();
    const altNumber = carpetaRaw.numero === 0
        ? carpetaRaw.id
        : carpetaRaw.numero;
    const mkdirDir = altNumber ?? index * 1000;
    fs.mkdir(`./carpetas/${mkdirDir}`, { recursive: true });
    const juzgadosMap = new Map();
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
    const newDemanda = {
        ...rawDemanda,
        juzgado: Array.from(juzgadosMap.values()),
        obligacion: rawDemanda.obligacion,
        ciudad: rawDemanda.ciudad,
        departamento: rawDemanda.departamento,
        etapaProcesal: rawDemanda.etapaProcesal,
        radicado: rawDemanda.radicado,
        entregaGarantiasAbogado: new Date(rawDemanda.entregaGarantiasAbogado ?? ' '),
        vencimientoPagare: new Date(rawDemanda.vencimientoPagare ?? ' ')
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
    if (RequestProcesos.length > 0) {
        for (const proceso of RequestProcesos) {
            rawDemanda.juzgado.forEach((juz, index, arr) => {
                if (arr.length === index + 1) {
                    const newDespacho = (0, despachos_1.default)({
                        id: juz.id ?? 0,
                        tipo: proceso.despacho ?? juz.tipo,
                        url: juz.url
                            ? juz.url
                            : proceso.despacho
                                ?? 'sin especificar'
                    });
                    return juzgadosMap.set(index, newDespacho);
                }
                const newDespacho = (0, despachos_1.default)({
                    id: juz.id ?? 0,
                    tipo: juz.tipo,
                    url: juz.url
                        ? juz.url
                        : proceso.despacho
                            ?? 'sin especificar'
                });
                return juzgadosMap.set(index, newDespacho);
            });
            const newCarpeta = {
                capitalAdeudado: carpetaRaw.capitalAdeudado,
                demanda: newDemanda,
                deudor: newDeudor,
                grupo: carpetaRaw.grupo,
                numero: carpetaRaw.numero,
                llaveProceso: carpetaRaw.llaveProceso,
                idProceso: proceso.idProceso,
                tipoProceso: carpetaRaw.tipoProceso,
                id: Number(carpetaRaw.id ?? '0')
            };
            fs.writeFile(`./carpetas/${mkdirDir}/${proceso.idProceso}.json`, JSON.stringify(newCarpeta));
            const collection = await (0, delete_1.carpetasCollection)();
            const findNinsert = await collection.findOneAndUpdate({
                idProceso: proceso.idProceso,
                llaveProceso: newCarpeta.llaveProceso
            }, { $set: newCarpeta }, {
                upsert: true,
                returnDocument: 'after'
            });
            console.log(`${findNinsert.ok} para la insertada de carpetas collection con idProceso.`);
            carpetasPeridProceso.set(proceso.idProceso, findNinsert.value ?? newCarpeta);
            continue;
        }
    }
    if (RequestProcesos.length === 0) {
        const newCarpeta = {
            capitalAdeudado: carpetaRaw.capitalAdeudado,
            demanda: newDemanda,
            deudor: newDeudor,
            grupo: carpetaRaw.grupo,
            id: Number(carpetaRaw.id ?? '0'),
            numero: carpetaRaw.numero,
            llaveProceso: carpetaRaw.llaveProceso,
            idProceso: 0,
            tipoProceso: carpetaRaw.tipoProceso
        };
        fs.writeFile(`./carpetas/${mkdirDir}/${newCarpeta.numero}.json`, JSON.stringify(newCarpeta));
        const collection = await (0, delete_1.carpetasCollection)();
        const findNinsert = await collection.findOneAndUpdate({
            numero: newCarpeta.numero,
            idProceso: newCarpeta.idProceso,
            llaveProceso: newCarpeta.llaveProceso
        }, { $set: newCarpeta }, {
            upsert: true,
            returnDocument: 'after'
        });
        console.log(`${findNinsert.ok} para la update de carpetasCollection sin idProceso`);
        carpetasPeridProceso.set(newCarpeta.numero, findNinsert.value ?? newCarpeta);
    }
    return Array.from(carpetasPeridProceso.values());
}
exports.transformRawtoCarpeta = transformRawtoCarpeta;
async function mapCarpetas({ carpetas }) {
    const newCarpetasMap = [];
    for (const carpeta of carpetas) {
        const indexOf = carpetas.indexOf(carpeta);
        const newCarpetas = await transformRawtoCarpeta({
            carpetaRaw: carpeta,
            index: indexOf
        });
        newCarpetas.forEach((newcarpeta) => {
            newCarpetasMap.push(newcarpeta);
        });
        fs.writeFile('insideForOfcarpetas.json', JSON.stringify(newCarpetasMap));
    }
    fs.writeFile('carpetas.json', JSON.stringify(newCarpetasMap));
}
exports.default = mapCarpetas;
mapCarpetas({ carpetas: carpetas_1.default })
    .then((ff) => {
    return console.log(ff);
}, (rr) => {
    return console.log(rr);
});
