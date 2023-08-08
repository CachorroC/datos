import { MongoClient } from 'mongodb';
import { IntCarpeta } from '../types/carpetas';

const uri
  = 'mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority';

export const carpetasCollection = async () => {
  const client = new MongoClient( uri );

  if ( !client ) {
    throw new Error( 'no hay cliente mongólico' );
  }
  const db = client.db( 'RyS' );

  const carpetas
    = db.collection<IntCarpeta>( 'Carpetas' );

  return carpetas;
};

export async function updt( {
  carpeta
}: {
  carpeta: IntCarpeta;
} ) {
  const collection = await carpetasCollection();

  const result
    = await collection.findOneAndUpdate(
      {
        numero: carpeta.numero,
        id    : carpeta.id
      },
      {
        $set: carpeta
      },
      {
        upsert        : true,
        returnDocument: 'after'
      }
    );

  return result.value;
}
