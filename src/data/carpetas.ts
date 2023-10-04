import { IntCarpeta } from '../types/carpetas';
import * as fs from 'fs/promises';


async function Carpetas (){
  try {

    const archivoCarpetas = await fs.readFile(
      './carpetas.json', 'utf-8'
    );
    return ( JSON.parse(
      archivoCarpetas
    ) ) as IntCarpeta[];
  } catch ( error ) {
    console.log(
      error
    );
    return [];
  }
}

export default Carpetas;
