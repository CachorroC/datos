'use strict';
Object.defineProperty(
  exports, '__esModule', {
    value: true 
  } 
);
exports.idProcesos = exports.carpetasCollection = void 0;

const mongodb_1 = require(
  'mongodb' 
);

const uri = 'mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority';

const carpetasCollection = async () => {
  const client = new mongodb_1.MongoClient(
    uri 
  );

  if ( !client ) {
    throw new Error(
      'no hay cliente mongólico' 
    );
  }

  const db = client.db(
    'RyS' 
  );

  const carpetas = db.collection(
    'Carpetas' 
  );

  return carpetas;
};
exports.carpetasCollection = carpetasCollection;
exports.idProcesos = Carpetas.map(
  (
    carpeta 
  ) => {
    return carpeta.idProceso;
  } 
);
