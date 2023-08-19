import { Departamentos } from '../data/rama-judicial';
import { Carpetas } from '../data/carpetas';
import fetchProceso from '../procesos';
import { Despachos } from '../despachos';
import { Deudor } from './deudor';

export async function newJuzgado(
  llaveProceso, index, mkdirDir 
) {
  const RequestProcesos = await fetchProceso(
    {
      llaveProceso: llaveProceso,
      index       : index,
      id          : Number(
        mkdirDir 
      )
    } 
  );

  const juzgados = new Set();

  for ( const proceso of RequestProcesos ) {
    const matchedDespacho = Despachos.filter(
      (
        despacho 
      ) => {
        return despacho.nombre.trim() === proceso.despacho.trim();
      } 
    );

    const matchedId = matchedDespacho[ 0 ].nombre.match(
      /\d+/g 
    );

    const newId = Number(
      matchedId?.toString() 
    );

    const newJuzgado = {
      id  : newId,
      tipo: matchedDespacho[ 0 ].nombre,
      url : `https://www.ramajudicial.gov.co${ matchedDespacho[ 0 ].url }`
    };
    juzgados.add(
      newJuzgado 
    );
  }

  return Array.from(
    juzgados 
  );
}

function setDepartamento(
  departamento 
) {
  const deptos = Departamentos.result;

  const filterDeptos = deptos.find(
    (
      dpt 
    ) => {
      const stringDepto = dpt.descripcion;

      const matcher = stringDepto.match(
        departamento 
      );

      return stringDepto.toLowerCase() === departamento.toLowerCase();
    } 
  );

  if ( filterDeptos ) {
    return filterDeptos;
  }

  return null;
}

export class Demanda {
  constructor(
    {
      capitalAdeudado, departamento, entregagarantiasAbogado, etapaProcesal, fechaPresentacion, municipio, obligacion, radicado, vencimientoPagare 
    } 
  ) {
    this.capitalAdeudado = Number(
      capitalAdeudado 
    );
    this.entregagarantiasAbogado = new Date(
      entregagarantiasAbogado 
    );
    this.etapaProcesal = etapaProcesal?.toString();
    this.fechaPresentacion = new Date(
      fechaPresentacion ?? '' 
    );
    this.municipio = municipio;
    this.obligacion = obligacion;
    this.radicado = radicado.toString();
    this.vencimientoPagare = new Date(
      vencimientoPagare 
    );
    this.departamento = setDepartamento(
      departamento 
    );
  }
  departamento;
  capitalAdeudado;
  entregagarantiasAbogado;
  etapaProcesal;
  fechaPresentacion;
  municipio;
  obligacion;
  radicado;
  vencimientoPagare;
  expediente;
}

async function createCarpetasDemanda() {
  const newCarpetas = new Set();

  for ( const carpeta of Carpetas ) {
    const index = Carpetas.indexOf(
      carpeta 
    );
    console.log(
      `carpetas has a length of ${ Carpetas.length } and you are in carpeta number ${ index }` 
    );

    const newDemanda = new Demanda(
      carpeta.demanda 
    );

    const newDeudor = new Deudor(
      carpeta.deudor 
    );

    const juzgados = await newJuzgado(
      carpeta.llaveProceso.toString(), index, carpeta.deudor.cedula 
    );
    console.log(
      newDemanda 
    );

    const newCarpeta = {
      demanda: {
        ...newDemanda,
        juzgados: juzgados
      },
      category    : carpeta.category,
      deudor      : newDeudor,
      numero      : carpeta.numero,
      llaveProceso: carpeta.llaveProceso.toString(),
      tipoProceso : carpeta.tipoProceso
    };
    newCarpetas.add(
      newCarpeta 
    );
  }

  return Array.from(
    newCarpetas 
  );
}
createCarpetasDemanda()
      .then(
        (
          ff 
        ) => {
          return console.log(
            ff 
          );
        }, (
          rr 
        ) => {
          return console.log(
            rr 
          );
        } 
      )
      .catch(
        (
          err 
        ) => {
          return console.log(
            JSON.stringify(
              err 
            ) 
          );
        } 
      );
console.log(
  createCarpetasDemanda() 
);
