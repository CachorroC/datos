// To parse this data:
//
//   import { Convert } from "./file";
//
//   const despacho = Convert.toDespacho(json);
// Converts JSON strings to/from your types
export class despachosConvert {
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

// Converts JSON strings to/from your types
export class Convert {
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
