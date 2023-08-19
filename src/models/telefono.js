export class Tel {
  fijo;
  celular;
  constructor(
    telefono 
  ) {
    const telefonoStringRaw = telefono?.toString();

    const celularStringArray = telefonoStringRaw?.match(
      /\d{10}/g 
    );

    const fijoStringArray = telefonoStringRaw?.match(
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
