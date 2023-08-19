"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
function sleep(ms) {
    return new Promise((resolve) => {
        console.log(ms);
        return setTimeout(resolve, ms);
    });
}
exports.sleep = sleep;
async function fetchProceso({ llaveProceso }) {
    console.log(`el largo de la llave es ${llaveProceso.length}`);
    if (llaveProceso.length < 23
        || llaveProceso === 'sin especificar') {
        return [];
    }
    try {
        const req = await fetch(`https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${llaveProceso}&SoloActivos=false`);
        if (!req.ok) {
            return [];
        }
        const res = (await req.json());
        const procesos = res.procesos;
        return procesos;
    }
    catch (error) {
        return [];
    }
}
exports.default = fetchProceso;
