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

  const carpetasMap = carpetas.map(
    (
      carpeta
    ) => {
      const nCarp = {
        ...carpeta,
        _id: carpeta.id
      };

      return nCarp;
    }
  );

  const result
    = await collection.insertMany(
      carpetasMap, { ordered: true }
    );
  console.log(
    `se remplazaron ${ result.acknowledged } en ${ JSON.stringify(
      result.insertedIds
    ) } con ${ result.insertedCount } importados`
  );

  return result.insertedCount;
}
