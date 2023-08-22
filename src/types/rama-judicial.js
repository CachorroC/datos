'use strict';
// To parse this data:
//
//   import { Convert } from "./file";
//
//   const despacho = Convert.toDespacho(json);
Object.defineProperty(
  exports, '__esModule', {
    value: true 
  } 
);
exports.Convert = exports.despachosConvert = void 0;
// Converts JSON strings to/from your types
class despachosConvert {
  static toDespacho(
    json 
  ) {
    return JSON.parse(
      json 
    );
  }
  static despachoToJson(
    value 
  ) {
    return JSON.stringify(
      value 
    );
  }
}
exports.despachosConvert = despachosConvert;
// Converts JSON strings to/from your types
class Convert {
  static toIntDepartamentos(
    json 
  ) {
    return JSON.parse(
      json 
    );
  }
  static intDepartamentosToJson(
    value 
  ) {
    return JSON.stringify(
      value 
    );
  }
  static toResult(
    json 
  ) {
    return JSON.parse(
      json 
    );
  }
  static resultToJson(
    value 
  ) {
    return JSON.stringify(
      value 
    );
  }
}
exports.Convert = Convert;
