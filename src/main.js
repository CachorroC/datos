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
exports.createCarpetasDemanda = void 0;
const _1 = require(".");
const carpetas_raw_1 = __importDefault(require("./data/carpetas-raw"));
const categories_1 = require("./models/categories");
const carpeta_1 = require("./models/carpeta");
const procesos_1 = __importStar(require("./procesos"));
const fs = __importStar(require("fs/promises"));
async function createCarpetasDemanda() {
    const procesosMap = new Map();
    const newCarpetas = new Set();
    for (const rawCarpeta of carpetas_raw_1.default) {
        const indexOfCarpeta = carpetas_raw_1.default.indexOf(rawCarpeta);
        const carpeta = (0, categories_1.categoryAssignment)(rawCarpeta);
        const awaitTime = 500;
        await (0, procesos_1.sleep)(awaitTime);
        console.log(`carpetas has a length of ${carpetas_raw_1.default.length} and you are in carpeta number ${indexOfCarpeta}`);
        const RequestProcesos = await (0, procesos_1.default)(carpeta.llaveProceso);
        if (RequestProcesos) {
            const newCarpeta = new carpeta_1.Carpeta(carpeta, RequestProcesos);
            newCarpetas.add(newCarpeta);
            fs.writeFile(`carpetas/${newCarpeta.numero}.json`, JSON.stringify(newCarpeta));
            continue;
        }
        const newCarpeta = new carpeta_1.Carpeta(carpeta);
        newCarpetas.add(newCarpeta);
        fs.writeFile(`carpetas/${newCarpeta.numero}.json`, JSON.stringify(newCarpeta));
        continue;
    }
    const newProcesosArray = Array.from(procesosMap.values());
    fs.writeFile('procesosData.json', JSON.stringify(newProcesosArray));
    const newCarpetasArray = Array.from(newCarpetas);
    const insertCarpetas = await (0, _1.insertNewCarpetas)(newCarpetasArray);
    console.log(insertCarpetas);
    return newCarpetasArray;
}
exports.createCarpetasDemanda = createCarpetasDemanda;
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
