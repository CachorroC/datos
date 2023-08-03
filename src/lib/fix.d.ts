export declare function sleep(ms: number): Promise<unknown>;
export declare function fixMoney({ valor }: {
    valor: number;
}): string;
export declare function unfixFechas({ fecha }: {
    fecha: string;
}): string;
export declare function fixFechas(fecha: Date | string | null | undefined): string;
export declare function trimmer(nombreCompleto: string): string;
export declare function fixName(nombreCompleto: string): string;
export declare const toNameString: ({ nameRaw }: {
    nameRaw: string;
}) => string;
