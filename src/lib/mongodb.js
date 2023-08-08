"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updt = exports.carpetasCollection = void 0;
const mongodb_1 = require("mongodb");
const uri = 'mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority';
const carpetasCollection = async () => {
    const client = new mongodb_1.MongoClient(uri);
    if (!client) {
        throw new Error('no hay cliente mongólico');
    }
    const db = client.db('RyS');
    const carpetas = db.collection('Carpetas');
    return carpetas;
};
exports.carpetasCollection = carpetasCollection;
async function updt({ carpeta }) {
    const collection = await (0, exports.carpetasCollection)();
    const result = await collection.findOneAndUpdate({
        numero: carpeta.numero,
        id: carpeta.id
    }, {
        $set: carpeta
    }, {
        upsert: true,
        returnDocument: 'after'
    });
    return result.value;
}
exports.updt = updt;
