import { MongoClient } from 'mongodb';
import { IntCarpetaPrueba } from './types/carpetas';

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
    = db.collection<IntCarpetaPrueba>(
      'Carpetas' 
    );

  return carpetas;
};

export async function insertNewCarpetas(
  carpetas: IntCarpetaPrueba[]
) {
  const nCarps = JSON.stringify(
    carpetas 
  );

  const collection = await carpetasCollection();

  const insertManyCarpetas
    = await collection.insertMany(
      JSON.parse(
        nCarps 
      )
    );
  console.log(
    insertManyCarpetas.insertedCount 
  );

  return insertManyCarpetas.acknowledged;
}
