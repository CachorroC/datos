"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNameString = exports.fixName = exports.trimmer = exports.fixFechas = exports.unfixFechas = exports.fixMoney = exports.sleep = void 0;
function sleep(ms) {
    return new Promise((resolve) => {
        console.log(JSON.stringify(new Date().getTime()));
        return setTimeout(resolve, ms);
    });
}
exports.sleep = sleep;
function fixMoney({ valor }) {
    const precioEnCop = valor.toLocaleString('es-CO', {
        currency: 'COP',
        style: 'currency'
    });
    return precioEnCop;
}
exports.fixMoney = fixMoney;
function unfixFechas({ fecha }) {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-CO');
}
exports.unfixFechas = unfixFechas;
function fixFechas(fecha) {
    if (fecha === null) {
        return 'no hay fechas: null';
    }
    if (fecha === undefined) {
        return 'no se ha definido el contenido';
    }
    const date = new Date(fecha);
    const months = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre'
    ];
    const month = months[date.getMonth()];
    const dia = date.getDate();
    const ano = date.getFullYear();
    return dia + ' de ' + month + ' de ' + ano;
}
exports.fixFechas = fixFechas;
function trimmer(nombreCompleto) {
    const trimDemandado = nombreCompleto.replace(/^\s+|\s+$/gm, '');
    console.log(trimDemandado);
    const splitDemandado = trimDemandado.split(' ');
    const splitDemandadotoUnify = splitDemandado.map((nombreOapellido, index) => {
        if (index >= 5) {
            return '';
        }
        if (nombreOapellido === '|') {
            return '';
        }
        if (nombreOapellido.includes('s.a.s')) {
            return '';
        }
        if (nombreOapellido.includes('sas')) {
            return '';
        }
        if (nombreOapellido.includes('(emplazado)')) {
            return '';
        }
        return nombreOapellido.replace(/^./, (str) => {
            return str.toUpperCase();
        });
    });
    const unifyDemandado = splitDemandadotoUnify.join(' ');
    return unifyDemandado;
}
exports.trimmer = trimmer;
function fixName(nombreCompleto) {
    const mySubString = 'Demandado';
    const count = nombreCompleto.split(mySubString).length - 1;
    if (count === 1) {
        return trimmer(nombreCompleto);
    }
    return nombreCompleto;
}
exports.fixName = fixName;
const toNameString = ({ nameRaw }) => {
    const str = nameRaw.toLowerCase();
    const arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i]
            = arr[i].charAt(0).toUpperCase()
                + arr[i].slice(1);
    }
    const str2 = arr.join(' ');
    return str2;
};
exports.toNameString = toNameString;
