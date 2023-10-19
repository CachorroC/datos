import { DeudorRaw,
         IntDeudor,
         IntDeudorPrueba,
         IntTel,
         IntTelPrueba } from '../types/carpetas';

export class Tel implements IntTel {
  fijo?: number;
  celular?: number;
  constructor(
    telefono: string 
  ) {
    const celularStringArray
      = telefono.match(
        /\d{10}/g 
      );

    const fijoStringArray
      = telefono.match(
        /\d{7}\s/g 
      );

    const celularNumber = celularStringArray?.map(
      (
        f 
      ) => {
        return Number(
          f 
        );
      }
    );

    const fijoNumber = fijoStringArray?.map(
      (
        f 
      ) => {
        return Number(
          f 
        );
      }
    );

    this.fijo = fijoNumber && fijoNumber[ 0 ];
    this.celular
      = celularNumber && celularNumber[ 0 ];
  }
}

export class TelPrueba implements IntTelPrueba {
  fijo: number | null;
  celular: number | null;
  constructor(
    telefono: string 
  ) {
    const celularStringArray
      = telefono.match(
        /\d{10}/g 
      );

    const fijoStringArray
      = telefono.match(
        /\d{7}\s/g 
      );

    const celularNumber = celularStringArray?.map(
      (
        f 
      ) => {
        return Number(
          f 
        );
      }
    );

    const fijoNumber = fijoStringArray?.map(
      (
        f 
      ) => {
        return Number(
          f 
        );
      }
    );

    this.fijo = fijoNumber
      ? fijoNumber[ 0 ]
      : null;
    this.celular = celularNumber
      ? celularNumber[ 0 ]
      : null;
  }
}

export class Deudor implements IntDeudor {
  constructor(
    {
      cedula,
      direccion,
      email,
      nombre,
      telefono = ''
    }: DeudorRaw 
  ) {
    const stringCedula
      = typeof cedula === 'string';
    this.cedula = stringCedula
      ? Number(
        cedula 
      )
      : cedula;
    this.direccion = direccion?.toString();
    this.email = email?.toString();
    this.tel = new Tel(
      typeof telefono === 'number'
        ? telefono.toString()
        : telefono
    );

    const nameStringArray = nombre.split(
      ' ' 
    );

    const nameArrayLength
      = nameStringArray.length;

    switch ( nameArrayLength ) {
            case 4:
              this.primerNombre = nameStringArray[ 0 ];
              this.segundoNombre = nameStringArray[ 1 ];
              this.primerApellido = nameStringArray[ 2 ];
              this.segundoApellido = nameStringArray[ 3 ];

              break;

            case 2:
              this.primerNombre = nameStringArray[ 0 ];

              this.primerApellido = nameStringArray[ 1 ];

              break;

            case 1:
              this.primerNombre = nameStringArray[ 0 ];
              this.primerApellido = 'sin especificar';

              break;

            case 3:
              this.primerNombre = nameStringArray[ 0 ];
              this.primerApellido = nameStringArray[ 1 ];
              this.segundoApellido = nameStringArray[ 2 ];

              break;

            case 5:
              this.primerNombre = nameStringArray[ 0 ];
              this.segundoNombre = nameStringArray[ 1 ];
              this.primerApellido = nameStringArray[ 2 ];
              this.segundoApellido = `${ nameStringArray[ 3 ].replace(
                ' ',
                ''
              ) } ${ nameStringArray[ 4 ].replace(
                ' ',
                ''
              ) }`;

              break;

            case 6:
              this.primerNombre = nameStringArray[ 0 ];
              this.segundoNombre = `${ nameStringArray[ 1 ].replace(
                ' ',
                ''
              ) } ${ nameStringArray[ 2 ].replace(
                ' ',
                ''
              ) }`;
              this.primerApellido = `${ nameStringArray[ 3 ].replace(
                ' ',
                ''
              ) } ${ nameStringArray[ 4 ].replace(
                ' ',
                ''
              ) }`;
              this.segundoApellido = nameStringArray[ 5 ];

              break;

            default:
              this.primerNombre = nameStringArray[ 0 ];
              this.segundoNombre = nameStringArray[ 1 ];
              this.primerApellido = nameStringArray[ 2 ];
              this.segundoApellido = nameStringArray[ 3 ];

              break;
    }
  }
  tel: IntTel;
  primerNombre: string;
  segundoNombre?: string;
  primerApellido: string;
  segundoApellido?: string;
  cedula: number;
  direccion?: string;
  email?: string;
}

export class DeudorPrueba
implements IntDeudorPrueba {
  constructor(
    {
      cedula,
      direccion,
      email,
      nombre,
      telefono = ''
    }: DeudorRaw 
  ) {
    const stringCedula
      = typeof cedula === 'string';
    this.cedula = stringCedula
      ? Number(
        cedula 
      )
      : cedula;
    this.direccion = direccion
      ? direccion.toString()
      : null;
    this.email = email
      ? email.toString()
      : null;
    this.tel = new TelPrueba(
      typeof telefono === 'number'
        ? telefono.toString()
        : telefono
    );

    const nameStringArray = nombre.split(
      ' ' 
    );

    const nameArrayLength
      = nameStringArray.length;

    switch ( nameArrayLength ) {
            case 4:
              this.primerNombre = nameStringArray[ 0 ];
              this.segundoNombre = nameStringArray[ 1 ];
              this.primerApellido = nameStringArray[ 2 ];
              this.segundoApellido = nameStringArray[ 3 ];

              break;

            case 2:
              this.primerNombre = nameStringArray[ 0 ];

              this.primerApellido = nameStringArray[ 1 ];
              this.segundoApellido = null;
              this.segundoNombre = null;

              break;

            case 1:
              this.primerNombre = nameStringArray[ 0 ];
              this.primerApellido = 'sin especificar';
              this.segundoApellido = null;
              this.segundoNombre = null;

              break;

            case 3:
              this.primerNombre = nameStringArray[ 0 ];
              this.primerApellido = nameStringArray[ 1 ];
              this.segundoApellido = nameStringArray[ 2 ];
              this.segundoNombre = null;

              break;

            case 5:
              this.primerNombre = nameStringArray[ 0 ];
              this.segundoNombre = nameStringArray[ 1 ];
              this.primerApellido = nameStringArray[ 2 ];
              this.segundoApellido = `${ nameStringArray[ 3 ].replace(
                ' ',
                ''
              ) } ${ nameStringArray[ 4 ].replace(
                ' ',
                ''
              ) }`;

              break;

            case 6:
              this.primerNombre = nameStringArray[ 0 ];
              this.segundoNombre = `${ nameStringArray[ 1 ].replace(
                ' ',
                ''
              ) } ${ nameStringArray[ 2 ].replace(
                ' ',
                ''
              ) }`;
              this.primerApellido = `${ nameStringArray[ 3 ].replace(
                ' ',
                ''
              ) } ${ nameStringArray[ 4 ].replace(
                ' ',
                ''
              ) }`;
              this.segundoApellido = nameStringArray[ 5 ];

              break;

            default:
              this.primerNombre = nameStringArray[ 0 ];
              this.segundoNombre = nameStringArray[ 1 ];
              this.primerApellido = nameStringArray[ 2 ];
              this.segundoApellido = nameStringArray[ 3 ];

              break;
    }
  }
  tel: IntTelPrueba;
  primerNombre: string;
  segundoNombre: string | null;
  primerApellido: string;
  segundoApellido: string | null;
  cedula: number;
  direccion: string | null;
  email: string | null;
}
