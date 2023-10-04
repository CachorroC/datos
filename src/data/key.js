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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarpetasFetcher = exports.fetchActuaciones = void 0;
const fix_1 = require("../lib/fix");
const fs = __importStar(require("fs/promises"));
async function fetchActuaciones(idProceso, index) {
    try {
        await (0, fix_1.sleep)(index);
        const request = await fetch(`https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${idProceso}`);
        if (!request.ok) {
            const json = (await request.json());
            throw new Error(` status: ${request.status}, text: ${request.statusText}, json: ${JSON.stringify(json)}`);
        }
        const json = (await request.json());
        return json;
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(`${idProceso}: error en la fetchActuaciones => ${error.name} : ${error.message}`);
            return null;
        }
        console.log(`${idProceso}: : error en la  fetchActuaciones  =>  ${error}`);
        return null;
    }
}
exports.fetchActuaciones = fetchActuaciones;
async function CarpetasFetcher() {
    const carpetasActuacionesMap = new Map();
    const archivoCarpetas = await fs.readFile('./carpetas.json', 'utf-8');
    console.log(archivoCarpetas);
    const Carpetas = (JSON.parse(archivoCarpetas));
    for (const carpeta of Carpetas) {
        const indexOfCarpeta = Carpetas.indexOf(carpeta);
        console.log(indexOfCarpeta);
        if (!carpeta.idProcesos) {
            continue;
        }
        for (const idProceso of carpeta.idProcesos) {
            const actuaciones = await fetchActuaciones(idProceso, indexOfCarpeta);
            if (!actuaciones) {
                continue;
            }
            carpetasActuacionesMap.set(idProceso, actuaciones);
        }
        continue;
    }
    const ReturnerArray = Array.from(carpetasActuacionesMap.values());
    fs.writeFile('./Actuaciones.json', JSON.stringify(ReturnerArray));
    return ReturnerArray;
}
exports.CarpetasFetcher = CarpetasFetcher;
CarpetasFetcher();
