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

export default  async function updateCarpetas(
  {
    carpetas
  }: {
  carpetas: IntCarpeta[];
}
) {
  const collection = await carpetasCollection();
  const newCarps = new Map();

  for ( const carpeta of carpetas ) {
    const nCarp = {
      ...carpeta,
      _id: carpeta.id
    };
    newCarps.set(
      nCarp.id, nCarp
    );

  }

  const arrayCarpetasNew = Array.from(
    newCarps.values()
  );

  const result
    = await collection.insertMany(
      carpetas
    );

  return result;
}
