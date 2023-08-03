import { Ejecucion } from '#@/types/raw-carpets';
import { IntCarpetaRaw } from '#@/types/raw-carpets';

export declare const carpetas: IntCarpetaRaw[];

export declare function telFixer( tel: string ): {
  fijo: string;
  celular: string;
};

export declare function juzgadoFixer(
  juzgado: Ejecucion
):
  | {
      id: number;
      tipo: string;
      url?: string | undefined;
    }
  | {
      id: string;
      tipo: string;
      url?: string | undefined;
    };

export declare function trimmer(
  nombreCompleto: string
):
  | {
      primerNombre: string;
      primerApellido?: undefined;
      segundoApellido?: undefined;
      segundoNombre?: undefined;
    }
  | {
      primerNombre: string;
      primerApellido: string;
      segundoApellido?: undefined;
      segundoNombre?: undefined;
    }
  | {
      primerNombre: string;
      primerApellido: string;
      segundoApellido: string;
      segundoNombre?: undefined;
    }
  | {
      primerNombre: string;
      segundoNombre: string;
      primerApellido: string;
      segundoApellido: string;
    };
