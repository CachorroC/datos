import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority';

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

  const carpetas = db.collection(
    'Carpetas' 
  );

  return carpetas;
};

export async function deleteTerminados() {
  const collection = await carpetasCollection();

  const deleteTerminadoCarpetas = await collection.deleteMany(
    { grupo: 'Terminados' } 
  );

  return deleteTerminadoCarpetas;
}
deleteTerminados()
      .then(
        (
          ff 
        ) => {
          console.log(
            ff 
          );
        }, (
          rr 
        ) => {
          console.log(
            rr 
          );
        } 
      );
console.log(
  deleteTerminados() 
);
