'use strict';
var __createBinding
  = ( this && this.__createBinding )
  || ( Object.create
    ? function (
      o, m, k, k2 
    ) {
      if ( k2 === undefined ) {
        k2 = k;
      }

      var desc
          = Object.getOwnPropertyDescriptor(
            m, k 
          );

      if (
        !desc
          || ( 'get' in desc
            ? !m.__esModule
            : desc.writable || desc.configurable )
      ) {
        desc = {
          enumerable: true,
          get       : function () {
            return m[ k ];
          }
        };
      }

      Object.defineProperty(
        o, k2, desc 
      );
    }
    : function (
      o, m, k, k2 
    ) {
      if ( k2 === undefined ) {
        k2 = k;
      }

      o[ k2 ] = m[ k ];
    } );
var __setModuleDefault
  = ( this && this.__setModuleDefault )
  || ( Object.create
    ? function (
      o, v 
    ) {
      Object.defineProperty(
        o, 'default', {
          enumerable: true,
          value     : v
        } 
      );
    }
    : function (
      o, v 
    ) {
      o[ 'default' ] = v;
    } );

var __importStar
  = ( this && this.__importStar )
  || function (
    mod 
  ) {
    if ( mod && mod.__esModule ) {
      return mod;
    }

    var result = {};

    if ( mod != null ) {
      for ( var k in mod ) {
        if (
          k !== 'default'
          && Object.prototype.hasOwnProperty.call(
            mod,
            k
          )
        ) {
          __createBinding(
            result, mod, k 
          );
        }
      }
    }

    __setModuleDefault(
      result, mod 
    );
    return result;
  };

Object.defineProperty(
  exports, '__esModule', {
    value: true
  } 
);
exports.IntCarpetaElementSchema
  = exports.DemandaSchema
  = exports.DepartamentoSchema
  = exports.JuzgadoSchema
  = exports.DeudorSchema
  = exports.TelSchema
  = exports.UltimaActuacionSchema
  = exports.CodReglaSchema
  = exports.TipoProcesoSchema
  = exports.DescripcionSchema
  = exports.CategorySchema
    = void 0;

const z = __importStar(
  require(
    'zod' 
  ) 
);
exports.CategorySchema = z.enum(
  [
    'Bancolombia',
    'Insolvencia',
    'LiosJuridicos',
    'Reintegra',
    'Terminados'
  ] 
);
exports.DescripcionSchema = z.enum(
  [
    'CUNDINAMARCA',
    'TOLIMA'
  ] 
);
exports.TipoProcesoSchema = z.enum(
  [
    'HIPOTECARIA',
    'HIPOTECARIO',
    'HIPOTECARO',
    'HMM PISO 1',
    'PRENDARIO',
    'PRENDARO',
    'HIPOTECARIO ',
    'SINGULAR',
    'SINGULAR ACUM HIPOTECARIO',
    'SINGULAR ACUMULADO CON HIPOTECARIO',
    'SINGULAR ACUMULADO CON HIPOTECARIO CAJA SOCIAL',
    'SOACHA',
    '11001400308320170071700',
    '25473418900120170092400',
    ' HIPOTECARIO',
    '  SINGULAR'
  ] 
);
exports.CodReglaSchema = z.enum(
  [
    '00                              '
  ] 
);
exports.UltimaActuacionSchema = z.object(
  {
    idRegActuacion: z.number(),
    llaveProceso  : z.string(),
    consActuacion : z.number(),
    fechaActuacion: z.coerce.date(),
    actuacion     : z.string(),
    anotacion     : z.union(
      [
        z.null(),
        z.string()
      ] 
    ),
    fechaInicial: z.union(
      [
        z.coerce.date(),
        z.null()
      ] 
    ),
    fechaFinal: z.union(
      [
        z.coerce.date(),
        z.null()
      ] 
    ),
    fechaRegistro: z.coerce.date(),
    codRegla     : exports.CodReglaSchema,
    conDocumentos: z.boolean(),
    cant         : z.number()
  } 
);
exports.TelSchema = z.object(
  {
    fijo: z.union(
      [
        z.coerce.number(),
        z.null()
      ] 
    ),
    celular: z.union(
      [
        z.coerce.number(),
        z.null()
      ] 
    )
  } 
);
exports.DeudorSchema = z.object(
  {
    tel          : exports.TelSchema,
    primerNombre : z.coerce.string(),
    segundoNombre: z.union(
      [
        z.null(),
        z.coerce.string()
      ] 
    ),
    primerApellido : z.coerce.string(),
    segundoApellido: z.union(
      [
        z.null(),
        z.coerce.string()
      ] 
    ),
    cedula: z.union(
      [
        z.coerce.number(),
        z.null()
      ] 
    ),
    direccion: z.coerce.string(),
    email    : z.coerce.string()
  } 
);
exports.JuzgadoSchema = z.object(
  {
    id  : z.coerce.number(),
    tipo: z.coerce.string(),
    url : z.coerce.string()
  } 
);
exports.DepartamentoSchema = z.object(
  {
    idCatalogoDetalle     : z.number(),
    idCatalogoDetallePadre: z.number(),
    descripcion           : exports.DescripcionSchema,
    codigo                : z.string()
  } 
);
exports.DemandaSchema = z.object(
  {
    departamento: z.union(
      [
        exports.DepartamentoSchema,
        z.null()
      ] 
    ),
    capitalAdeudado        : z.coerce.number(),
    entregagarantiasAbogado: z.coerce.date(),
    etapaProcesal          : z.union(
      [
        z.null(),
        z.string()
      ] 
    ),
    fechaPresentacion: z.coerce.date(),
    municipio        : z.string(),
    obligacion       : z.record(
      z.coerce.string(),
      z.union(
        [
          z.number(),
          z.string()
        ] 
      )
    ),
    radicado         : z.string(),
    vencimientoPagare: z.coerce.date(),
    expediente       : z.string(),
    juzgados         : z.array(
      exports.JuzgadoSchema 
    )
  } 
);
exports.IntCarpetaElementSchema = z.object(
  {
    _id         : z.coerce.string(),
    demanda     : exports.DemandaSchema,
    category    : exports.CategorySchema,
    categoryTag : z.coerce.number(),
    deudor      : exports.DeudorSchema,
    numero      : z.coerce.number(),
    llaveProceso: z.coerce.string(),
    tipoProceso : exports.TipoProcesoSchema,
    idProceso   : z
          .union(
            [
              z.coerce.number(),
              z.null()
            ] 
          )
          .optional(),
    fecha: z
          .union(
            [
              z.coerce.date(),
              z.null()
            ] 
          )
          .optional(),
    lastModified: z
          .union(
            [
              z.coerce.date(),
              z.null()
            ] 
          )
          .optional(),
    ultimaActuacion: z
          .union(
            [
              exports.UltimaActuacionSchema,
              z.null()
            ] 
          )
          .optional()
  } 
);
