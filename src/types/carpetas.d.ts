export interface IntCarpeta {
    numero: number;
    id: string;
    deudor: Deudor;
    capitalAdeudado: number;
    llaveProceso?: string;
    grupo: Grupo;
    demanda: Demanda;
    tipoProceso?: TipoProceso;
}
export interface Demanda {
    obligacion: Array<number | null | string>;
    juzgado: Juzgado;
    despachoActivo: DespachoActivo;
    vencimientoPagare?: string;
    obligacion2?: number | string;
    entregaGarantiasAbogado?: string;
    departamento?: Departamento;
    ciudad?: string;
    radicado?: number | string;
    etapaProcesal?: string;
}
export type Departamento = 'CUNDINAMARCA' | 'TOLIMA' | 'BOYACÁ';
export interface DespachoActivo {
    tipo: Tipo;
    id: number | string;
    url?: string;
}
export type Tipo = 'unknown' | 'Civil Municipal de Ejecucion' | 'Civil Municipal' | ' CCTO EJ' | ' CIVIL CTO' | ' PM' | ' C CTO E' | 'Pequeñas Causas y Competencias Multiples' | 'Civil Municipal/ Civil Municipal' | ' CCTOEJ' | 'Civil Municipal // Civil Municipal' | ' CCTO/ CCTOE' | 'Civil Municipal //  PCCivil Municipal' | 'Civil Municipal DESG / Civil Municipal' | '  Pequeñas Causas y Competencias Multiples' | 'SINGULAR' | ' Pequeñas Causas y Competencias Multiples' | ' Pequeñas Causas y Competencias Multiples/ Civil Municipal' | 'Civil Municipal / PCC' | ' CCTO' | 'Civil Municipal/Civil Municipal' | ' CC' | 'Civil Municipal/Civil Municipal de Ejecucion' | ' Civil Municipal';
export interface Juzgado {
    origen: DespachoActivo;
    ejecucion: DespachoActivo;
}
export interface Deudor {
    cedula: number | string;
    nombreCompleto: string;
    primerNombre: string;
    segundoNombre?: string;
    primerApellido: string;
    segundoApellido?: string;
    tel: Tel;
    email?: number | string;
    direccion?: string;
}
export interface Tel {
    fijo: string;
    celular: string;
}
export type Grupo = 'Terminados' | 'LiosJuridicos' | 'Bancolombia' | 'Reintegra' | 'Insolvencia';
export type TipoProceso = 'PRENDARIO' | 'HIPOTECARIO' | 'SINGULAR' | 'HMM PISO 1';
export declare class Convert {
    static toIntCarpeta(json: string): IntCarpeta;
    static intCarpetaToJson(value: IntCarpeta): string;
    static toDemanda(json: string): Demanda;
    static demandaToJson(value: Demanda): string;
    static toDespachoActivo(json: string): DespachoActivo;
    static despachoActivoToJson(value: DespachoActivo): string;
    static toJuzgado(json: string): Juzgado;
    static juzgadoToJson(value: Juzgado): string;
    static toDeudor(json: string): Deudor;
    static deudorToJson(value: Deudor): string;
    static toTel(json: string): Tel;
    static telToJson(value: Tel): string;
}
