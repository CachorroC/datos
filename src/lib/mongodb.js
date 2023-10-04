'use strict';
Object.defineProperty(
  exports, '__esModule', {
    value: true
  } 
);
exports.updateCarpetas
  = exports.carpetasCollection = void 0;

const mongodb_1 = require(
  'mongodb' 
);

const uri
  = 'mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority';

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

async function updateCarpetas(
  {
    carpetas 
  } 
) {
  const collection = await ( 0,
  exports.carpetasCollection )();

  const newCarps = new Map();

  for ( const carpeta of carpetas ) {
    newCarps.set(
      carpeta.numero, carpeta 
    );
  }

  const result
    = await collection.insertMany(
      carpetas 
    );
  return result;
}

exports.updateCarpetas = updateCarpetas;
