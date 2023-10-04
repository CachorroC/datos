import { MongoClient } from 'mongodb';
import { IntCarpeta } from '../types/carpetas';

const uri
  = 'mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority';

export const carpetasCollection = async () => {
  const client = new MongoClient(
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

  const carpetas
    = db.collection<IntCarpeta>(
      'Carpetas' 
    );

  return carpetas;
};

export async function updateCarpetas(
  {
    carpetas
  }: {
  carpetas: IntCarpeta[];
} 
) {
  const collection = await carpetasCollection();

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
