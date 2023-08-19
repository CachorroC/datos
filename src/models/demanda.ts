
import { DemandaRaw, DepartamentoRaw, IntCarpeta, Juzgado } from '../types/carpetas';
import {  IntDepartamentos } from '../types/rama-judicial';
import  Carpetas  from '../data/carpetas';
import fetchProceso, { sleep } from '../procesos';
import { Despachos } from '../despachos';
import { Deudor } from './deudor';
import * as fs from 'fs/promises';
import { intProceso } from '../types/procesos';
import { insertNewCarpetas } from '..';

const Departamentos: IntDepartamentos = {
  data  : false,
  result: [
    {
      idCatalogoDetalle         : 31,
      descripcion               : 'AMAZONAS',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '91',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 2,
      descripcion               : 'ANTIOQUIA',
      valor                     : 'gruizh@deaj.ramajudicial.gov.co',
      codigo                    : '05',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 27,
      descripcion               : 'ARAUCA',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '81',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 4,
      descripcion               : 'ATLANTICO',
      valor                     : ' ',
      codigo                    : '08',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 5,
      descripcion               : 'BOGOTA',
      valor                     : 'gruizh@deaj.ramajudicial.gov.co',
      codigo                    : '11',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 6,
      descripcion               : 'BOLIVAR',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '13',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 7,
      descripcion               : 'BOYACA',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '15',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 8,
      descripcion               : 'CALDAS',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '17',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 9,
      descripcion               : 'CAQUETA',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '18',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 28,
      descripcion               : 'CASANARE',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '85',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 10,
      descripcion               : 'CAUCA',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '19',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 11,
      descripcion               : 'CESAR',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '20',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 14,
      descripcion               : 'CHOCO',
      valor                     : 'gruizh@deaj.ramajudicial.gov.co',
      codigo                    : '27',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 12,
      descripcion               : 'CORDOBA',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '23',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 13,
      descripcion               : 'CUNDINAMARCA',
      valor                     : ' ',
      codigo                    : '25',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 32,
      descripcion               : 'GUAINIA',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '94',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 33,
      descripcion               : 'GUAVIARE',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '95',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 15,
      descripcion               : 'HUILA',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '41',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 16,
      descripcion               : 'LA GUAJIRA',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '44',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 17,
      descripcion               : 'MAGDALENA',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '47',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 18,
      descripcion               : 'META',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '50',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 20,
      descripcion               : 'N. DE SANTANDER',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '54',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 19,
      descripcion               : 'NARI\u00D1O',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '52',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 29,
      descripcion               : 'PUTUMAYO',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '86',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 21,
      descripcion               : 'QUINDIO',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '63',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 22,
      descripcion               : 'RISARALDA',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '66',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 30,
      descripcion               : 'SAN ANDRES',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '88',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 23,
      descripcion               : 'SANTANDER',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '68',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 24,
      descripcion               : 'SUCRE',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '70',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 25,
      descripcion               : 'TOLIMA',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '73',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 26,
      descripcion               : 'VALLE DEL CAUCA',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '76',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 34,
      descripcion               : 'VAUPES',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '97',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    },
    {
      idCatalogoDetalle         : 35,
      descripcion               : 'VICHADA',
      valor                     : 'framosg@deaj.ramajudicial.gov.co',
      codigo                    : '99',
      idCatalogoDetallePadre    : 1,
      valor1                    : null,
      departamento              : null,
      ciudad                    : null,
      idDepartamento            : 0,
      idCiudad                  : 0,
      errorxmail                : null,
      lEmail                    : null,
      registro                  : false,
      idError                   : 0,
      textError                 : null,
      especialidad              : null,
      paraEspecialidad          : null,
      confirmarCorreoElectronico: null
    }
  ]
};

export function newJuzgado(
  procesos: intProceso[]
) {
  const juzgados = new Map<number, Juzgado>();


  for ( const proceso of procesos ) {
    const indexOf = procesos.indexOf(
      proceso
    );

    const matchedDespacho = Despachos.find(
      (
        despacho
      ) => {
        const nDesp = despacho.nombre.toLowerCase()
              .normalize(
                'NFD'
              )
              .replace(
                /\p{Diacritic}/gu, ''
              )
              .trim();

        const pDesp = proceso.despacho.toLowerCase()
              .normalize(
                'NFD'
              )
              .replace(
                /\p{Diacritic}/gu, ''
              )
              .trim();


        const indexOfDesp = nDesp.indexOf(
          pDesp
        );

        if ( indexOfDesp >= 0 ) {
          console.log(
            `procesos despacho is in despachos ${ indexOfDesp }`
          );
        }

        return nDesp === pDesp;
      }
    );

    const nameN = matchedDespacho
      ? matchedDespacho.nombre
      : proceso.despacho;

    const matchedId = nameN.match(
      /\d+/g
    );

    const newId = Number(
      matchedId?.toString()
    );

    const newJuzgado: Juzgado = {
      id  : newId ?? 0,
      tipo: matchedDespacho
        ? matchedDespacho.nombre
        : proceso.despacho,
      url: matchedDespacho
        ? `https://www.ramajudicial.gov.co${ matchedDespacho.url }`
        : `https://www.ramajudicial.gov.co${ proceso.despacho.replaceAll(
          ' ', '-'
        )
              .toLowerCase() }`
    };
    juzgados.set(
      indexOf,
      newJuzgado
    );
  }

  return Array.from(
    juzgados.values()
  );

}

function setDepartamento (
  departamento: DepartamentoRaw
) {
  const deptos = Departamentos.result;

  const filterDeptos = deptos.find(
    (
      dpt
    ) => {
      const stringDepto = dpt.descripcion;

      return stringDepto.toLowerCase() === departamento.toLowerCase();
    }
  );

  if ( filterDeptos ) {
    return {
      idCatalogoDetalle     : filterDeptos.idCatalogoDetalle,
      idCatalogoDetallePadre: filterDeptos.idCatalogoDetallePadre,
      descripcion           : filterDeptos.descripcion,
      codigo                : filterDeptos.codigo

    };
  }

  return null;
}

export class Demanda  {
  departamento: { idCatalogoDetalle: number; idCatalogoDetallePadre: number; descripcion: string; codigo: string; } | null;


  constructor(
    {
      capitalAdeudado, departamento, entregagarantiasAbogado, etapaProcesal, fechaPresentacion, municipio, obligacion, radicado, vencimientoPagare
    }: DemandaRaw
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
  capitalAdeudado: number;
  entregagarantiasAbogado: Date;
  etapaProcesal?: string ;
  fechaPresentacion?: Date ;
  municipio: string;
  obligacion: { [ key: string ]: string | number; };
  radicado: string;
  vencimientoPagare?: Date ;
  expediente?: string ;
}




async function createCarpetasDemanda () {
  const newCarpetas = new Set<IntCarpeta>();

  for ( const carpeta of Carpetas ) {
    const index = Carpetas.indexOf(
      carpeta
    );

    const awaitTime = 1000;

    const now = new Date()
          .getTime();

    const masTarde = now + awaitTime;

    const outputTime = new Date(
      masTarde
    )
          .toLocaleDateString(
            'es-CO', {
              hour  : 'numeric',
              minute: 'numeric',
              hour12: true
            }
          );
    console.log(
      `estará listo a las ${ outputTime }`
    );

    await sleep(
      awaitTime
    );
    console.log(
      `carpetas has a length of ${ Carpetas.length } and you are in carpeta number ${ carpeta.numero }`
    );

    const RequestProcesos = await fetchProceso(
      {
        llaveProceso: carpeta.llaveProceso.toString()
      }
    );

    const newDemanda = new Demanda(
      carpeta.demanda
    );

    const newDeudor = new Deudor(
      carpeta.deudor
    );
    console.log(
      newDeudor.tel.celular
    );

    if ( RequestProcesos.length > 0 ) {
      for ( const proceso of RequestProcesos ) {
        const indexOf = RequestProcesos.indexOf(
          proceso
        );

        const juzgados = newJuzgado(
          RequestProcesos
        );

        const newCarpeta:IntCarpeta = {
          demanda: {
            ...newDemanda,
            expediente: carpeta.llaveProceso.toString(),
            juzgados  : juzgados
          },
          category    : carpeta.category,
          deudor      : newDeudor,
          numero      : carpeta.numero,
          llaveProceso: carpeta.llaveProceso.toString(),
          tipoProceso : carpeta.tipoProceso,
          idProceso   : proceso.idProceso
        };
        fs.writeFile(
          `carpetas/${ newCarpeta.numero }.${ indexOf }.json`, JSON.stringify(
            newCarpeta
          )
        );
        newCarpetas.add(
          newCarpeta
        );

        continue;
      }
    } else if ( RequestProcesos.length === 0 ) {

      const juzgados: Juzgado[] = [];

      const newCarpeta:IntCarpeta = {
        demanda: {
          ...newDemanda,
          expediente: carpeta.llaveProceso.toString(),
          juzgados  : juzgados
        },
        category    : carpeta.category,
        deudor      : newDeudor,
        numero      : carpeta.numero,
        llaveProceso: carpeta.llaveProceso.toString(),
        tipoProceso : carpeta.tipoProceso,
        idProceso   : 1
      };
      fs.writeFile(
        `carpetas/${ newCarpeta.numero }.json`, JSON.stringify(
          newCarpeta
        )
      );
      newCarpetas.add(
        newCarpeta
      );

    }


  }

  const newCarpetasArray = Array.from(
    newCarpetas
  );

  const insertCarpetas = await insertNewCarpetas(
    newCarpetasArray
  );
  console.log(
    insertCarpetas
  );

  return newCarpetasArray;
}

console.log(
  createCarpetasDemanda()
        .then(
          (
            ff
          ) => {

            fs.writeFile(
              'newCarpetasFinal.json', JSON.stringify(
                ff
              )
            );

            return console.log(
              ff
            );
          },
          (
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
        )
);