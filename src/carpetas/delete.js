'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.deleteTerminados =
  exports.carpetasCollection = void 0;
const mongodb_1 = require('mongodb');
const uri =
  'mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority';
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
async function deleteTerminados() {
  const collection = await (0,
  exports.carpetasCollection)();
  const deleteTerminadoCarpetas =
    await collection.deleteMany({
      grupo: 'Terminados'
    });
  return deleteTerminadoCarpetas;
}
exports.deleteTerminados = deleteTerminados;
deleteTerminados().then(
  (ff) => {
    console.log(ff);
  },
  (rr) => {
    console.log(rr);
  }
);
console.log(deleteTerminados());
