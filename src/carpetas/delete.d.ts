import { IntCarpeta } from '../types/carpetas';

export declare const carpetasCollection: () => Promise<import( 'mongodb' ).Collection<IntCarpeta>>;

export declare function deleteTerminados(): Promise<import( 'mongodb' ).DeleteResult>;
