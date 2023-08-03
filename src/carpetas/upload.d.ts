import { IntCarpeta } from '#@/types/carpetas';

export declare const carpetasCollection: () => Promise<
  import( 'mongodb' ).Collection<IntCarpeta>
>;

export declare function insertAll(
  carpetas: IntCarpeta[]
): Promise<
  import( 'mongodb' ).InsertManyResult<IntCarpeta>
>;
