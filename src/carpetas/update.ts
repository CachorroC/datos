import { ObjectId } from 'mongodb';
import { carpetasCollection } from '..';

export async function updateString(
  capital: string,
  _id: ObjectId
) {
  const collection = await carpetasCollection();

  const CopTaker = capital.replace(
    /,\d\d\sCOP/gi,
    ''
  );

  const dotTaker = CopTaker.replace(
    '.', '' 
  );

  const newCapitalAdeudado = Number(
    dotTaker 
  );

  const updater = await collection.updateOne(
    {
      _id: _id
    },
    {
      $set: {
        'demanda.capitalAdeudado':
          newCapitalAdeudado
      }
    }
  );

  if (
    updater.modifiedCount > 0
    || updater.upsertedCount > 0
  ) {
    console.log(
      updater.modifiedCount 
    );
  }
}

export async function updateCapitales() {
  const collection = await carpetasCollection();

  const Carpetas = await collection
        .find(
          {} 
        )
        .sort(
          {
            numero: 1
          } 
        )
        .toArray();

  for ( const carpeta of Carpetas ) {
    const capitalInicial
      = carpeta.demanda.capitalAdeudado;

    if ( typeof capitalInicial === 'number' ) {
      continue;
    }

    if ( typeof capitalInicial === 'string' ) {
      updateString(
        capitalInicial, carpeta._id 
      );

      continue;
    }
  }
}

updateCapitales()
      .then(
        (
          ff 
        ) => {
          return console.log(
            ff 
          );
        },
        (
          rr 
        ) => {
          return console.log(
            rr 
          );
        }
      );
