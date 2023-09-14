'use strict';
Object.defineProperty(
  exports, '__esModule', {
    value: true
  } 
);
exports.getDespachos = exports.getDepartamentos
  = void 0;

async function getDepartamentos() {
  try {
    const Request = await fetch(
      'https://procesojudicial.ramajudicial.gov.co/demandaenlinea/Demanda/Departamento'
    );

    if ( !Request.ok ) {
      throw new Error(
        'no pudimos obtener la lista de departamentos disponibles'
      );
    }

    const Respose = await Request.json();

    return Respose;
  } catch ( error ) {
    console.log(
      error 
    );

    return null;
  }
}
exports.getDepartamentos = getDepartamentos;

async function getDespachos() {
  try {
    const Request = await fetch(
      'https://www.ramajudicial.gov.co/directorioPortal-portlet/api/jsonws/servicioapidirectorio/get-despacho-distritos.18'
    );

    if ( !Request.ok ) {
      return [];
    }

    const Response = await Request.json();

    return Response;
  } catch ( error ) {
    console.log(
      `error en el despacho: ${ error }` 
    );

    return [];
  }
}
exports.getDespachos = getDespachos;
