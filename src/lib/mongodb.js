"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carpetasCollection = void 0;
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
async function updateCarpetas({ carpetas }) {
    const collection = await (0, exports.carpetasCollection)();
    const carpetasMap = carpetas.map((carpeta) => {
        const nCarp = {
            ...carpeta,
            _id: carpeta.id
        };
        return nCarp;
    });
    const result = await collection.insertMany(carpetasMap, { ordered: true });
    console.log(`se remplazaron ${result.acknowledged} en ${JSON.stringify(result.insertedIds)} con ${result.insertedCount} importados`);
    return result.insertedCount;
}
exports.default = updateCarpetas;
