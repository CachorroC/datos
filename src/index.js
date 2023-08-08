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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformRawtoCarpeta = void 0;
const fs = __importStar(require("fs/promises"));
const carpetas_1 = __importDefault(require("./data/carpetas"));
const procesos_1 = __importStar(require("./procesos"));
function transformRawtoCarpeta({ carpetaRaw, index }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return __awaiter(this, void 0, void 0, function* () {
        const altNumber = carpetaRaw.numero === 0
            ? index
            : carpetaRaw.numero;
        const mkdirDir = (_a = carpetaRaw.id) !== null && _a !== void 0 ? _a : altNumber;
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
                juzgadosMap.set(indexOf, Object.assign(Object.assign({}, juz), { url: juz.url ? juz.url : 'sin especificar' }));
                console.log(juzgadosMap.values());
            }
        }
        const RequestProcesos = yield (0, procesos_1.default)({
            llaveProceso: (_b = carpetaRaw.llaveProceso) !== null && _b !== void 0 ? _b : 'sin especificar',
            index: index,
            id: mkdirDir
        });
        console.log(RequestProcesos);
        for (const proceso of RequestProcesos) {
            idProcesosSet.add(proceso.idProceso);
            rawDemanda.juzgado.forEach((juz, index) => {
                var _a, _b, _c;
                return juzgadosMap.set(index, {
                    id: (_a = juz.id) !== null && _a !== void 0 ? _a : 0,
                    tipo: (_b = juz.tipo) !== null && _b !== void 0 ? _b : 'sin especificar',
                    url: juz.url
                        ? juz.url
                        : (_c = proceso.despacho) !== null && _c !== void 0 ? _c : 'sin especificar'
                });
            });
        }
        const newDemanda = Object.assign(Object.assign({}, rawDemanda), { juzgado: Array.from(juzgadosMap.values()), obligacion: rawDemanda.obligacion, ciudad: rawDemanda.ciudad, departamento: rawDemanda.departamento, entregaGarantiasAbogado: new Date((_c = rawDemanda.entregaGarantiasAbogado) !== null && _c !== void 0 ? _c : ''), etapaProcesal: rawDemanda.etapaProcesal, radicado: rawDemanda.radicado, vencimientoPagare: new Date((_d = rawDemanda.vencimientoPagare) !== null && _d !== void 0 ? _d : '') });
        const newTel = {
            celular: Number((_e = rawDeudor.tel.celular) !== null && _e !== void 0 ? _e : '0'),
            fijo: Number((_f = rawDeudor.tel.fijo) !== null && _f !== void 0 ? _f : '0')
        };
        const newDeudor = {
            cedula: Number(rawDeudor.cedula),
            primerNombre: rawDeudor.primerNombre,
            segundoNombre: rawDeudor.segundoNombre,
            primerApellido: rawDeudor.primerApellido,
            segundoApellido: rawDeudor.segundoApellido,
            tel: newTel,
            email: (_g = rawDeudor.email) === null || _g === void 0 ? void 0 : _g.toString(),
            direccion: rawDeudor.direccion
        };
        console.log(newDeudor);
        const newCarpeta = {
            capitalAdeudado: carpetaRaw.capitalAdeudado,
            demanda: newDemanda,
            deudor: newDeudor,
            grupo: carpetaRaw.grupo,
            id: Number((_h = carpetaRaw.id) !== null && _h !== void 0 ? _h : '0'),
            numero: carpetaRaw.numero,
            llaveProceso: carpetaRaw.llaveProceso,
            idProcesos: Array.from(idProcesosSet),
            tipoProceso: carpetaRaw.tipoProceso
        };
        fs.writeFile(`./carpetas/${(_j = carpetaRaw.id) !== null && _j !== void 0 ? _j : carpetaRaw.numero}/carpeta.json`, JSON.stringify(newCarpeta));
        return newCarpeta;
    });
}
exports.transformRawtoCarpeta = transformRawtoCarpeta;
function mapCarpetas({ carpetas }) {
    return __awaiter(this, void 0, void 0, function* () {
        const newCarpetasMap = new Map();
        for (const carpeta of carpetas) {
            const indexOf = carpetas.indexOf(carpeta);
            const newCarpeta = yield transformRawtoCarpeta({
                carpetaRaw: carpeta,
                index: indexOf
            });
            newCarpetasMap.set(carpeta.numero, newCarpeta);
            console.log(newCarpeta.numero);
            fs.writeFile('insideForOfcarpetas.json', JSON.stringify(Array.from(newCarpetasMap.values())));
        }
        fs.writeFile('carpetas.json', JSON.stringify(Array.from(newCarpetasMap.values())));
        yield (0, procesos_1.sleep)(600 * 1000);
        console.log(`carpetas length is ${carpetas.length}`);
        console.log(`arrayMap length is ${newCarpetasMap.size}`);
        return Array.from(newCarpetasMap.values());
    });
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
