"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deudor = exports.Tel = void 0;
class Tel {
    fijo;
    celular;
    constructor(telefono) {
        const celularStringArray = telefono.match(/\d{10}/g);
        const fijoStringArray = telefono.match(/\d{7}\s/g);
        const celularNumber = celularStringArray?.map((f) => {
            return Number(f);
        });
        const fijoNumber = fijoStringArray?.map((f) => {
            return Number(f);
        });
        this.fijo = fijoNumber && fijoNumber[0];
        this.celular
            = celularNumber && celularNumber[0];
    }
}
exports.Tel = Tel;
class Deudor {
    constructor({ cedula, direccion, email, nombre, telefono }) {
        this.cedula = Number(cedula);
        this.direccion = direccion?.toString();
        this.email = email?.toLocaleString();
        this.tel = new Tel(typeof telefono === 'number'
            ? telefono.toString()
            : telefono);
        const nameStringArray = nombre.split(' ');
        const nameArrayLength = nameStringArray.length;
        switch (nameArrayLength) {
            case 4:
                this.primerNombre
                    = nameStringArray[0].replace(' ', '');
                this.segundoNombre
                    = nameStringArray[1].replace(' ', '');
                this.primerApellido
                    = nameStringArray[2].replace(' ', '');
                this.segundoApellido
                    = nameStringArray[3].replace(' ', '');
                break;
            case 2:
                this.primerNombre
                    = nameStringArray[0].replace(' ', '');
                this.primerApellido
                    = nameStringArray[1].replace(' ', '');
                break;
            case 1:
                this.primerNombre
                    = nameStringArray[0].replace(' ', '');
                this.primerApellido = 'sin especificar';
                break;
            case 3:
                this.primerNombre
                    = nameStringArray[0].replace(' ', '');
                this.primerApellido
                    = nameStringArray[1].replace(' ', '');
                this.segundoApellido
                    = nameStringArray[2].replace(' ', '');
                break;
            case 5:
                this.primerNombre
                    = nameStringArray[0].replace(' ', '');
                this.segundoNombre
                    = nameStringArray[1].replace(' ', '');
                this.primerApellido
                    = nameStringArray[2].replace(' ', '');
                this.segundoApellido = `${nameStringArray[3].replace(' ', '')} ${nameStringArray[4].replace(' ', '')}`;
                break;
            case 6:
                this.primerNombre
                    = nameStringArray[0].replace(' ', '');
                this.segundoNombre = `${nameStringArray[1].replace(' ', '')} ${nameStringArray[2].replace(' ', '')}`;
                this.primerApellido = `${nameStringArray[3].replace(' ', '')} ${nameStringArray[4].replace(' ', '')}`;
                this.segundoApellido
                    = nameStringArray[5].replace(' ', '');
                break;
            default:
                this.primerNombre
                    = nameStringArray[0].replace(' ', '');
                this.segundoNombre
                    = nameStringArray[1].replace(' ', '');
                this.primerApellido
                    = nameStringArray[2].replace(' ', '');
                this.segundoApellido
                    = nameStringArray[3].replace(' ', '');
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
