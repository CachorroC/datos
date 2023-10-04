"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCapitales = exports.updateString = void 0;
const __1 = require("..");
async function updateString(capital, _id) {
    const collection = await (0, __1.carpetasCollection)();
    const CopTaker = capital.replace(/,\d\d\sCOP/gi, '');
    const dotTaker = CopTaker.replace('.', '');
    const newCapitalAdeudado = Number(dotTaker);
    const updater = await collection.updateOne({
        _id: _id
    }, {
        $set: {
            'demanda.capitalAdeudado': newCapitalAdeudado
        }
    });
    if (updater.modifiedCount > 0
        || updater.upsertedCount > 0) {
        console.log(updater.modifiedCount);
    }
}
exports.updateString = updateString;
async function updateCapitales() {
    const collection = await (0, __1.carpetasCollection)();
    const Carpetas = await collection
        .find({})
        .sort({
        numero: 1
    })
        .toArray();
    for (const carpeta of Carpetas) {
        const capitalInicial = carpeta.demanda.capitalAdeudado;
        if (typeof capitalInicial === 'number') {
            continue;
        }
        if (typeof capitalInicial === 'string') {
            updateString(capitalInicial, carpeta._id);
            continue;
        }
    }
}
exports.updateCapitales = updateCapitales;
updateCapitales()
    .then((ff) => {
    return console.log(ff);
}, (rr) => {
    return console.log(rr);
});
