"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deudor = exports.Tel = void 0;
class Tel {
    fijo;
    celular;
    constructor(telefono) {
        const telefonoStringRaw = telefono?.toString();
        const celularStringArray = telefonoStringRaw?.match(/\d{10}/g);
        const fijoStringArray = telefonoStringRaw?.match(/\d{7}\s/g);
        const celularNumber = celularStringArray?.map((f) => {
            return Number(f);
        });
        const fijoNumber = fijoStringArray?.map((f) => {
            return Number(f);
        });
        this.fijo = fijoNumber;
        this.celular = celularNumber;
    }
}
exports.Tel = Tel;
class Deudor {
    constructor({ cedula, direccion, email, nombre, telefono }) {
        this.cedula = Number(cedula);
        this.direccion = direccion?.toString();
        this.email = email?.toLocaleString();
        this.tel = new Tel(telefono);
        const nameStringArray = nombre.split(' ');
        const nameArrayLength = nameStringArray.length;
        switch (nameArrayLength) {
            case 4:
                this.primerNombre = nameStringArray[0];
                this.segundoNombre = nameStringArray[1];
                this.primerApellido = nameStringArray[2];
                this.segundoApellido = nameStringArray[3];
                break;
            case 2:
                this.primerNombre = nameStringArray[0];
                this.segundoNombre = '';
                this.primerApellido = nameStringArray[1];
                this.segundoApellido = '';
                break;
            case 1:
                this.primerNombre = nameStringArray[0];
                this.segundoNombre = '';
                this.primerApellido = '';
                this.segundoApellido = '';
                break;
            case 3:
                this.primerNombre = nameStringArray[0];
                this.segundoNombre = nameStringArray[1];
                this.primerApellido = nameStringArray[1];
                this.segundoApellido = nameStringArray[2];
                break;
            case 5:
                this.primerNombre = `${nameStringArray[0]} ${nameStringArray[1]}`;
                this.segundoNombre = nameStringArray[2];
                this.primerApellido = nameStringArray[3];
                this.segundoApellido = nameStringArray[4];
                break;
            case 6:
                this.primerNombre = `${nameStringArray[0]} ${nameStringArray[1]}`;
                this.segundoNombre = nameStringArray[2];
                this.primerApellido = `${nameStringArray[3]} ${nameStringArray[4]}`;
                this.segundoApellido = nameStringArray[5];
                break;
            default:
                this.primerNombre = nameStringArray[0];
                this.segundoNombre = nameStringArray[1];
                this.primerApellido = nameStringArray[2];
                this.segundoApellido = nameStringArray[3];
                break;
        }
    }
    tel;
    primerNombre;
    segundoNombre;
    primerApellido;
    segundoApellido;
    cedula;
    direccion;
    email;
}
exports.Deudor = Deudor;
