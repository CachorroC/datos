import { IntCarpeta } from '../types/carpetas';
import * as fs from 'fs/promises';

export default async function Carpetas() {
  try {
    const archivoCarpetas = await fs.readFile(
      './carpetas.json',
      'utf-8'
    );

    const parsed = (await JSON.parse(
      archivoCarpetas
    )) as IntCarpeta[];
    return parsed;
  } catch (error) {
    console.log(error);
    return [];
  }
}
