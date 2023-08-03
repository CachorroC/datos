import { Ejecucion } from '#@/types/raw-carpets.js';
export declare function telFixer(tel: string): {
    fijo: string;
    celular: string;
};
export declare function juzgadoFixer(juzgado: Ejecucion): {
    id: any[];
    tipo: string;
    url?: string | undefined;
};
export declare function trimmer(nombreCompleto: string): {
    primerNombre: string;
    primerApellido?: undefined;
    segundoApellido?: undefined;
    segundoNombre?: undefined;
} | {
    primerNombre: string;
    primerApellido: string;
    segundoApellido?: undefined;
    segundoNombre?: undefined;
} | {
    primerNombre: string;
    primerApellido: string;
    segundoApellido: string;
    segundoNombre?: undefined;
} | {
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
};
