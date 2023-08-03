'use strict';
var __importDefault = ( this && this.__importDefault ) || function (
  mod 
) {
  return ( mod && mod.__esModule )
    ? mod
    : {
        'default': mod 
      };
};
Object.defineProperty(
  exports, '__esModule', {
    value: true 
  } 
);
exports.carpetasCollection = void 0;

const mongodb_1 = __importDefault(
  require(
    '../lib/mongodb' 
  ) 
);

const carpetasCollection = async () => {
  const client = await mongodb_1.default;

  if ( !client ) {
    throw new Error(
      'no hay cliente mongólico' 
    );
  }

  const db = client.db(
    'RyS' 
  );

  const carpetas = db.collection(
    'Carpetas' 
  );

  return carpetas;
};
exports.carpetasCollection = carpetasCollection;
