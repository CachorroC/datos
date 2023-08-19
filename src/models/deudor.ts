import { IntDeudor,
         IntTel } from '../types/carpetas';
import { Carpetas } from '../data/carpetas';
import * as fs from 'fs/promises';
import { MongoClient } from 'mongodb';

const uri
  = 'mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority';

export const deudoresCollection = async () => {
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
    = db.collection<IntDeudor>(
      'Deudores' 
    );

  return carpetas;
};

export class Tel implements IntTel {
  fijo: number;
  celular: number;
  constructor(
    telefono: unknown 
  ) {
    const telefonoStringRaw
      = telefono?.toString();

    const celularStringArray
      = telefonoStringRaw?.match(
        /\d{10}/g 
      );

    const fijoStringArray
      = telefonoStringRaw?.match(
        /\d{7}\s/g 
      );

    const fijoString = fijoStringArray
      ? fijoStringArray[ 0 ]
      : '0';

    const celularString = celularStringArray
      ? celularStringArray[ 0 ]
      : '0';

    const celularNumber = Number(
      celularString 
    );

    const fijoNumber = Number(
      fijoString 
    );

    this.fijo = fijoNumber;
    this.celular = celularNumber;
  }
}

export class Deudor implements IntDeudor {
  constructor(
    {
      cedula,
      direccion,
      email,
      nombre,
      telefono
    }: {
    cedula: number | string;
    direccion?: number | string;
    email?: number | string;
    nombre: string;
    telefono: string | number;
  } 
  ) {
    this.cedula = Number(
      cedula 
    );
    this.direccion = direccion?.toString();
    this.email = email?.toLocaleString();
    this.tel = new Tel(
      telefono 
    );

    const nameStringArray = nombre.split(
      ' ' 
    );

    const nameArrayLength
      = nameStringArray.length;

    switch ( nameArrayLength ) {
      case 1:
        this.primerNombre = nameStringArray[ 0 ];
        this.segundoNombre = '';
        this.primerApellido = '';
        this.segundoApellido = '';

        break;
      case 2:
        this.primerNombre = nameStringArray[ 0 ];
        this.segundoNombre = '';
        this.primerApellido = nameStringArray[ 1 ];
        this.segundoApellido = '';

        break;
      case 3:
        this.primerNombre = nameStringArray[ 0 ];
        this.segundoNombre = nameStringArray[ 1 ];
        this.primerApellido = nameStringArray[ 1 ];
        this.segundoApellido = nameStringArray[ 2 ];

        break;
      case 4:
        this.primerNombre = nameStringArray[ 0 ];
        this.segundoNombre = nameStringArray[ 1 ];
        this.primerApellido = nameStringArray[ 2 ];
        this.segundoApellido = nameStringArray[ 3 ];

        break;
      case 5:
        this.primerNombre = `${ nameStringArray[ 0 ] } ${ nameStringArray[ 1 ] }`;
        this.segundoNombre = nameStringArray[ 2 ];
        this.primerApellido = nameStringArray[ 3 ];
        this.segundoApellido = nameStringArray[ 4 ];

        break;
      case 6:
        this.primerNombre = `${ nameStringArray[ 0 ] } ${ nameStringArray[ 1 ] }`;
        this.segundoNombre = nameStringArray[ 2 ];
        this.primerApellido = `${ nameStringArray[ 3 ] } ${ nameStringArray[ 4 ] }`;
        this.segundoApellido = nameStringArray[ 5 ];

        break;

      default:
        this.primerNombre = `${ nameStringArray[ 0 ] } ${ nameStringArray[ 1 ] }`;
        this.segundoNombre = nameStringArray[ 2 ];
        this.primerApellido = nameStringArray[ 3 ];
        this.segundoApellido = nameStringArray[ 4 ];

        break;
    }
  }
  tel: IntTel;
  primerNombre: string;
  segundoNombre?: string | undefined;
  primerApellido: string;
  segundoApellido?: string | undefined;
  cedula: number;
  direccion?: string | undefined;
  email?: string | undefined;
}

export const Deudores = Carpetas.map(
  (
    carpeta 
  ) => {
    const newDeudor = new Deudor(
      carpeta.deudor 
    );

    console.log(
      newDeudor 
    );

    return newDeudor;
  }
);

fs.writeFile(
  'newDeudores.json',
  JSON.stringify(
    Deudores 
  )
);

console.log(
  Deudores 
);

async function insertDeudores(
  deudores: Deudor[]
) {
  const collection = await deudoresCollection();

  const insertM = await collection.insertMany(
    deudores
  );

  console.log(
    insertM.insertedCount 
  );

  return insertM.acknowledged;
}

console.log(
  insertDeudores(
    Deudores 
  )
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
        )
        .catch(
          (
            err 
          ) => {
            return console.log(
              JSON.stringify(
                err 
              ) 
            );
          } 
        )
);
