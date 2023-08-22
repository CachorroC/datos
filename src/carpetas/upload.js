'use strict';
Object.defineProperty(
  exports, '__esModule', {
    value: true 
  } 
);
exports.carpetasCollection = void 0;

const mongodb_1 = require(
  'mongodb' 
);

const carpetas = [
  {
    _id            : '64cc10e7ea30d79334547819',
    capitalAdeudado: 29690679,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-11T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 85,
          tipo: 'Civil Municipal'
        },
        {
          id  : 11,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        2453698
      ],
      radicado         : '2017 - 00849',
      vencimientoPagare: '2020-04-26T00:00:00.000Z'
    },
    deudor: {
      cedula         : 80073174,
      direccion      : 'CALLE 160 No. 58-75 TORRE 6 APTO 503 BOGOTA /// YOPAL CASANARE',
      primerApellido : 'GARCES',
      primerNombre   : 'JOSE',
      segundoApellido: 'ARDILA',
      segundoNombre  : 'EDWIN',
      tel            : {
        celular: 0,
        fijo   : 7978419
      }
    },
    fecha    : '2023-06-15T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 80073174,
    idProceso: [
      51935790
    ],
    llaveProceso: '11001400308520170084900',
    numero      : 22,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d79334547823',
    capitalAdeudado: 54812000,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-05-30T00:00:00.000Z',
      etapaProcesal          : 'EJECUCION',
      juzgado                : [
        {
          id  : 43,
          tipo: 'Civil Municipal'
        },
        {
          id  : 18,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        4280019446,
        '5406915580101610 4513077620518209//20990166568'
      ],
      radicado         : '2018- 00384',
      vencimientoPagare: '2028-08-01T00:00:00.000Z'
    },
    deudor: {
      cedula         : 1022940572,
      direccion      : 'CALLE 36 B SUR No. 11-25 APTO 1307 BOGOTA',
      email          : 'jhonannicky@hotmail.com',
      primerApellido : '',
      primerNombre   : 'JONATHAN',
      segundoApellido: 'BERNAL PARRA ',
      segundoNombre  : 'ANDRES',
      tel            : {
        celular: 3134775602,
        fijo   : 0
      }
    },
    fecha    : '2023-04-27T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 1022940572,
    idProceso: [
      114256610
    ],
    llaveProceso: '11001400304320180038400',
    numero      : 32,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547826',
    capitalAdeudado: 26464177,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-19T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 26,
          tipo: 'Civil Municipal'
        },
        {
          id  : 3,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        5303722385820750,
        'AUTOPRESTAMO'
      ],
      radicado         : '2017-00511',
      vencimientoPagare: '2016-09-16T00:00:00.000Z'
    },
    deudor: {
      cedula         : 7226201,
      direccion      : 'CARRERA 33 No. 1 H-86 DUITAMA (BOYACÁ)',
      email          : 'luiscagv@yahoo.com',
      primerApellido : 'GUTIERREZ',
      primerNombre   : 'LUIS',
      segundoApellido: 'VELANDIA',
      segundoNombre  : 'CARLOS',
      tel            : {
        celular: 3106199094,
        fijo   : 0
      }
    },
    fecha    : '2023-04-13T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 7226201,
    idProceso: [
      50477000
    ],
    llaveProceso: '11001400302620170051100',
    numero      : 35,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d7933454782d',
    capitalAdeudado: 12956286,
    demanda        : {
      ciudad                 : 'ANAPOIMA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-19T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 1,
          tipo: 'Promiscuo Municipal'
        }
      ],
      obligacion: [
        3840082880
      ],
      radicado         : '2017 - 00108',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 1072421639,
      direccion      : 'BARRIO SANTA ANA FC LA CAMPIÑA ANAPOIMA',
      email          : 'jdanielmoreno87@hotmail.com',
      primerApellido : 'MORENO',
      primerNombre   : 'JUAN',
      segundoApellido: 'CIFUENTES',
      segundoNombre  : 'DANIEL',
      tel            : {
        celular: 3126139284,
        fijo   : 0
      }
    },
    grupo    : 'Reintegra',
    id       : 1072421639,
    idProceso: [
      0
    ],
    llaveProceso: '25035408900120170010800',
    numero      : 42,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547831',
    capitalAdeudado: 12537973,
    demanda        : {
      ciudad                 : 'CHOCONTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-19T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 1,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        53037139326557900,
        4099839496308260
      ],
      radicado         : '2017-00106',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 11251297,
      direccion      : 'Carrera 2B No.14-04 BARRIO VILLA ALEJANDRA CHOCONTA',
      email          : 'alvaro.r@live.com',
      primerApellido : 'RODRIGUEZ',
      primerNombre   : 'ALVARO',
      segundoApellido: 'ALONSO',
      tel            : {
        celular: 3166182970,
        fijo   : 0
      }
    },
    grupo    : 'Reintegra',
    id       : 11251297,
    idProceso: [
      86212261
    ],
    llaveProceso: '25183400300120170010600',
    numero      : 46,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d79334547832',
    capitalAdeudado: 21530598,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12T00:00:00.000Z',
      etapaProcesal          : 'EJECUCION',
      juzgado                : [
        {
          id  : 6,
          tipo: 'Civil Municipal'
        },
        {
          id  : 13,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        '377816034633036//45130802058774831',
        53003720132046710
      ],
      radicado         : '2017-00302',
      vencimientoPagare: '2019-09-22T00:00:00.000Z'
    },
    deudor: {
      cedula         : 52129551,
      direccion      : 'CALLE 61 J No. 17D - 55 Sur',
      primerApellido : 'GUZMAN',
      primerNombre   : 'ANA',
      segundoApellido: 'GOMEZ',
      segundoNombre  : 'RITA',
      tel            : {
        celular: 32291500487,
        fijo   : 0
      }
    },
    fecha    : '2023-06-26T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 52129551,
    idProceso: [
      50521190
    ],
    llaveProceso: '11001400300620170030200',
    numero      : 47,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d7933454783d',
    capitalAdeudado: 96125453,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-08T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 42,
          tipo: 'Civil Municipal'
        },
        {
          id  : 10,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        '5820083643//377816164971529',
        '4513080225477441//5303720124048311'
      ],
      radicado         : '2017-00760',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 14273737,
      direccion      : 'CALLE 23 D No.107-32 BOGOTA',
      email          : 'lejopaerez@hotmail.com',
      primerApellido : 'PAEREZ',
      primerNombre   : 'JOSÉ',
      segundoApellido: 'PERDOMO',
      segundoNombre  : 'URIEL',
      tel            : {
        celular: 3228293322,
        fijo   : 4183276
      }
    },
    fecha    : '2023-06-23T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 14273737,
    idProceso: [
      50517060
    ],
    llaveProceso: '11001400304220170076000',
    numero      : 58,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547843',
    capitalAdeudado: 32926699,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12T00:00:00.000Z',
      juzgado                : [
        {
          id  : 29,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        125348220
      ],
      radicado         : '2017 - 00557',
      vencimientoPagare: '2017-10-22T00:00:00.000Z'
    },
    deudor: {
      cedula         : 79891952,
      direccion      : 'CARRERA 13 A No. 150-25 INT 3 APTO 203',
      email          : 'rafael.cadena@signsas.com',
      primerApellido : 'CADENA',
      primerNombre   : 'RAFAEL',
      segundoApellido: 'PARGA',
      segundoNombre  : 'ERNESTO',
      tel            : {
        celular: 3157900006,
        fijo   : 3157900
      }
    },
    fecha    : '2018-02-22T05:00:00.000Z',
    grupo    : 'Insolvencia',
    id       : 79891952,
    idProceso: [
      50517510
    ],
    llaveProceso: '11001400302920170055700',
    numero      : 64,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d79334547857',
    capitalAdeudado: 12128189,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 39,
          tipo: 'Civil Municipal'
        },
        {
          id  : 14,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        377815178176828,
        53037234659826290
      ],
      radicado         : '2017-00800',
      vencimientoPagare: '2019-11-05T00:00:00.000Z'
    },
    deudor: {
      cedula         : 79108747,
      direccion      : 'CARRERA 17 A No. 175-82 INTERIOR 1 PTO 601',
      email          : 'edgarH62@hotmail.com',
      primerApellido : 'HERNANDEZ',
      primerNombre   : 'EDGAR',
      segundoApellido: 'RUBIO',
      tel            : {
        celular: 3118802970,
        fijo   : 8054434
      }
    },
    grupo    : 'Reintegra',
    id       : 79108747,
    idProceso: [
      0
    ],
    llaveProceso: '11001400303920170080000',
    numero      : 84,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d7933454785d',
    capitalAdeudado: 26515333,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '1899-12-30T00:00:00.000Z',
      etapaProcesal          : 'EJECUCION',
      juzgado                : [
        {
          id  : 34,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-34-civil-municipal-de-bogota'
        },
        {
          id  : 12,
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-12-de-ejecucion-civil-municipal-de-bogota'
        }
      ],
      obligacion: [
        12330030
      ],
      radicado         : '2017 - 00836',
      vencimientoPagare: '2020-06-09T00:00:00.000Z'
    },
    deudor: {
      cedula         : 1032432802,
      direccion      : 'CARRERA 95 # 138 - 58',
      email          : 'orduzcrit2@hotmail.com',
      primerApellido : 'ORDUZ',
      primerNombre   : 'LUIS',
      segundoApellido: 'FARFAN',
      segundoNombre  : 'ESNEIDER',
      tel            : {
        celular: 0,
        fijo   : 4712921
      }
    },
    fecha    : '2023-07-24T05:00:00.000Z',
    grupo    : 'Bancolombia',
    id       : 1032432802,
    idProceso: [
      50521480,
      81728891
    ],
    idProcesos: [
      50521480
    ],
    llaveProceso: '11001400303420170083600',
    numero      : 90,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d7933454786a',
    capitalAdeudado: 43921469,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 826,
          tipo: 'Civil Municipal/Civil Municipal'
        },
        {
          id  : 18,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        '1800088189//377813488630162',
        '4513071987853655//5303715363121332'
      ],
      radicado         : '2017-00680',
      vencimientoPagare: '2019-05-13T00:00:00.000Z'
    },
    deudor: {
      cedula         : 16831314,
      direccion      : 'CARRERA 74 No. 25 G-69',
      email          : 'kikearango@hotmail.com',
      primerApellido : 'ARANGO',
      primerNombre   : 'EDUARDO',
      segundoApellido: 'CHACON',
      segundoNombre  : 'ENRIQUE',
      tel            : {
        celular: 3216066052,
        fijo   : 0
      }
    },
    fecha    : '2023-05-11T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 16831314,
    idProceso: [
      51619370,
      81869501
    ],
    idProcesos: [
      51619370
    ],
    llaveProceso: '11001400308220170068000',
    numero      : 103,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d7933454786d',
    capitalAdeudado: 16497281,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 59,
          tipo: 'Civil Municipal'
        },
        {
          id  : 15,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        12515504
      ],
      radicado         : '2017 - 00483',
      vencimientoPagare: '2018-08-28T00:00:00.000Z'
    },
    deudor: {
      cedula         : 501492,
      direccion      : 'CALLE 134 No. 58-58',
      email          : 'danielher84@gmail.com',
      primerApellido : 'HERNANDEZ',
      primerNombre   : 'DANIEL',
      segundoApellido: 'GONZALEZ',
      tel            : {
        celular: 0,
        fijo   : 2716567
      }
    },
    fecha    : '2023-02-27T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 501492,
    idProceso: [
      50514310
    ],
    llaveProceso: '11001400305920170048300',
    numero      : 106,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d7933454786f',
    capitalAdeudado: 211610991,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 25,
          tipo: 'Civil del Circuito'
        },
        {
          id  : 2,
          tipo: ' C CTO E'
        }
      ],
      obligacion: [
        12455661,
        '12657330//12748966'
      ],
      radicado         : '2017 - 00736',
      vencimientoPagare: '2020-06-07T00:00:00.000Z'
    },
    deudor: {
      cedula         : 79558732,
      direccion      : 'TRANVERSAL 15A # 31-09 SUR',
      email          : 'miguelangelhuertasv@hotmail.com',
      primerApellido : 'HUERTAS',
      primerNombre   : 'MIGUEL',
      segundoApellido: 'VALENCIA',
      segundoNombre  : 'ANGEL',
      tel            : {
        celular: 0,
        fijo   : 2723136
      }
    },
    fecha    : '2023-06-30T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 79558732,
    idProceso: [
      28937944
    ],
    llaveProceso: '11001310302520170073600',
    numero      : 108,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d7933454789d',
    capitalAdeudado: 29366625,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-23T00:00:00.000Z',
      juzgado                : [
        {
          id  : 36,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        5670083032,
        '377813199287708 // 4513075700372455 // 123470'
      ],
      radicado         : '2017 - 00841',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 79840930,
      direccion      : 'CARRERA 79 BIS A # 73 - 92 SUR APTO 304 INT 3',
      email          : 'gabriel.eml@hotmail.com',
      primerApellido : 'MEJIA',
      primerNombre   : 'GABRIEL',
      segundoApellido: 'LADINO',
      segundoNombre  : 'EDUARDO',
      tel            : {
        celular: 0,
        fijo   : 0
      }
    },
    fecha    : '2023-07-10T05:00:00.000Z',
    grupo    : 'LiosJuridicos',
    id       : 79840930,
    idProceso: [
      50688820
    ],
    llaveProceso: '11001400303620170084100',
    numero      : 154,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    _id            : '64cc10e7ea30d793345478a8',
    capitalAdeudado: 44742148,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-07-19T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 76,
          tipo: 'Civil Municipal'
        },
        {
          id  : 4,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        2310089458,
        '4513088545588847// AUDIO PRESTAMO'
      ],
      radicado         : '2017 - 00635',
      vencimientoPagare: '2019-08-18T00:00:00.000Z'
    },
    deudor: {
      cedula        : 86057132,
      direccion     : 'Carrera 40 D No. 1H-28',
      email         : 'imagenfmr@yahoo.com',
      primerApellido: 'MENESES',
      primerNombre  : 'FREDY',
      tel           : {
        celular: 3125312823,
        fijo   : 4088069
      }
    },
    fecha    : '2023-05-31T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 86057132,
    idProceso: [
      51497380
    ],
    llaveProceso: '11001400307620170063500',
    numero      : 165,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345478b1',
    capitalAdeudado: 14795921,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 25,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-25-civil-municipal-de-bogota'
        },
        {
          id  : 18,
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-18-de-ejecucion-civil-municipal-de-bogota'
        }
      ],
      obligacion: [
        136962
      ],
      radicado         : '2017 - 00903',
      vencimientoPagare: '2026-03-10T00:00:00.000Z'
    },
    deudor: {
      cedula         : 52189873,
      direccion      : 'CALLE 74G # 80 - 58 SUR',
      email          : 'darnelly-74@hotmail.com',
      primerApellido : 'HERNANDEZ',
      primerNombre   : 'DARNELLY',
      segundoApellido: 'MARTINEZ',
      tel            : {
        celular: 3144189224,
        fijo   : 4530972
      }
    },
    fecha    : '2023-07-25T05:00:00.000Z',
    grupo    : 'Bancolombia',
    id       : 52189873,
    idProceso: [
      112048180
    ],
    llaveProceso: '11001400302520170090300',
    numero      : 174,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    _id            : '64cc10e7ea30d793345478b6',
    capitalAdeudado: 12687427,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 11,
          tipo: 'Civil Municipal'
        },
        {
          id  : 2,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        5670085162
      ],
      radicado         : '2017 - 01084',
      vencimientoPagare: '2019-11-02T00:00:00.000Z'
    },
    deudor: {
      cedula         : 12254068,
      direccion      : 'CARRERA 30 No.68 J-08 SUR',
      email          : 'guillermogonzalez_tagua@hotmail.com',
      primerApellido : 'GONZALEZ',
      primerNombre   : 'GUILLERMO',
      segundoApellido: 'TAGUA',
      tel            : {
        celular: 3218180993,
        fijo   : 5642974
      }
    },
    fecha    : '2023-07-26T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 12254068,
    idProceso: [
      50760030
    ],
    llaveProceso: '11001400301120170108400',
    numero      : 179,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345478ba',
    capitalAdeudado: 25833335,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 1,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-01-civil-municipal-de-bogota'
        },
        {
          id  : 17,
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-17-de-ejecucion-civil-municipal-de-bogota'
        }
      ],
      obligacion: [
        2150091504
      ],
      radicado         : '2017 - 01001',
      vencimientoPagare: '2019-11-03T00:00:00.000Z'
    },
    deudor: {
      cedula         : 11185630,
      direccion      : 'CARRERA 81C # 2B - 80 PISO 2',
      email          : 'grupocomerciallasabana@hotmail.com',
      primerApellido : 'JIMENEZ',
      primerNombre   : 'WILSON',
      segundoApellido: 'MENDIETA',
      segundoNombre  : 'ALFONSO',
      tel            : {
        celular: 0,
        fijo   : 5714329
      }
    },
    fecha    : '2023-07-17T05:00:00.000Z',
    grupo    : 'Bancolombia',
    id       : 11185630,
    idProceso: [
      50621670
    ],
    llaveProceso: '11001400300120170100100',
    numero      : 183,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345478bb',
    capitalAdeudado: 22277206,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01T00:00:00.000Z',
      etapaProcesal          : 'DESIGNACIÓN CURADOR AD LITEM',
      juzgado                : [
        {
          id  : 25,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        8470081213
      ],
      radicado         : '2017 - 00807',
      vencimientoPagare: '2021-12-15T00:00:00.000Z'
    },
    deudor: {
      cedula         : 17650971,
      direccion      : 'CARRERA 86 # 69 H - 40',
      primerApellido : 'TOVAR',
      primerNombre   : 'JUAN',
      segundoApellido: 'TOLEDO',
      segundoNombre  : 'CARLOS',
      tel            : {
        celular: 0,
        fijo   : 83107389
      }
    },
    fecha    : '2023-06-21T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 17650971,
    idProceso: [
      50623380,
      0
    ],
    idProcesos: [
      50623380
    ],
    llaveProceso: '11001400302520170080700',
    numero      : 184,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345478cc',
    capitalAdeudado: 27602952,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-23T00:00:00.000Z',
      juzgado                : [
        {
          id  : 7940,
          tipo: 'Civil Municipal/ Civil Municipal'
        }
      ],
      obligacion: [
        377816483778266,
        4513080485378479
      ],
      radicado         : '2017 - 01142',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 51733931,
      direccion      : 'CALLE 127D # 21 - 80 APTO 105',
      email          : 'sebantialbeltransprieto@hotmail.com',
      primerApellido : 'ROCIO',
      primerNombre   : 'PIEDAD',
      segundoApellido: 'PRIETO VARGAS ',
      segundoNombre  : 'MARITZA OLGA ',
      tel            : {
        celular: 3108711046,
        fijo   : 6256456
      }
    },
    fecha    : '2023-06-05T05:00:00.000Z',
    grupo    : 'Insolvencia',
    id       : 51733931,
    idProceso: [
      128433271
    ],
    llaveProceso: '11001400307920170114200',
    numero      : 201,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345478cf',
    capitalAdeudado: 41990538,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-28T00:00:00.000Z',
      etapaProcesal          : 'EJECUCION',
      juzgado                : [
        {
          id  : 45,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        12743098
      ],
      radicado         : '2017 - 01063',
      vencimientoPagare: '2020-08-23T00:00:00.000Z'
    },
    deudor: {
      cedula         : 46679232,
      direccion      : 'CARRERA 34 # 9 - 60',
      email          : 'carito220@hotmail.es',
      primerApellido : 'ESPERANZA',
      primerNombre   : 'FLOR',
      segundoApellido: 'GUTIERREZ',
      tel            : {
        celular: 0,
        fijo   : 5754502
      }
    },
    fecha    : '2023-03-07T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 46679232,
    idProceso: [
      110120573
    ],
    llaveProceso: '11001400304520170106300',
    numero      : 204,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d793345478d0',
    capitalAdeudado: 14068639,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN SOLICITAR LIQUIDACIÓN A REINTEGRA',
      juzgado                : [
        {
          id  : 12,
          tipo: 'Civil Municipal'
        },
        {
          id  : 15,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        430103841
      ],
      radicado         : '2017 - 00971',
      vencimientoPagare: '2021-09-09T00:00:00.000Z'
    },
    deudor: {
      cedula         : 51856244,
      direccion      : 'CARRERA 2A BIS A ESTE # 89A  SUR',
      primerApellido : 'CARMEN',
      primerNombre   : 'NELIDA',
      segundoApellido: 'RIVERA MESA ',
      segundoNombre  : 'DEL',
      tel            : {
        celular: 3143313269,
        fijo   : 7616370
      }
    },
    fecha    : '2022-03-17T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 51856244,
    idProceso: [
      50669130
    ],
    llaveProceso: '11001400301220170097100',
    numero      : 205,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345478d3',
    capitalAdeudado: 27819415,
    demanda        : {
      ciudad                 : 'SOACHA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 2,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        12725973
      ],
      radicado         : '2017 - 00265',
      vencimientoPagare: '2020-08-15T00:00:00.000Z'
    },
    deudor: {
      cedula         : 80357801,
      direccion      : 'CALLE 34 # 1A - 40 CASA 247',
      email          : 'jeovanyrojas@outlook.com',
      primerApellido : 'ROJAS',
      primerNombre   : 'JEOVANY',
      segundoApellido: 'CRUZ',
      tel            : {
        celular: 0,
        fijo   : 0
      }
    },
    grupo    : 'Reintegra',
    id       : 80357801,
    idProceso: [
      86374941
    ],
    llaveProceso: '25754400300220170026500',
    numero      : 208,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d793345478d4',
    capitalAdeudado: 54090336,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 64,
          tipo: 'Civil Municipal'
        },
        {
          id  : 7,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        2170085697,
        '377813567054276 // 451377194627824 // 5303710806169667 // 5306726083237084 // AUDIOPRESTAMO'
      ],
      radicado         : '2017 - 01191',
      vencimientoPagare: '2020-08-31T00:00:00.000Z'
    },
    deudor: {
      cedula         : 79852094,
      direccion      : 'CARRERA 68M # 37D - 47 SUR',
      email          : 'cesa861@hotmail.com',
      primerApellido : 'UMAÑA',
      primerNombre   : 'CESAR',
      segundoApellido: 'CAÑON',
      segundoNombre  : 'ALFONSO',
      tel            : {
        celular: 3212406004,
        fijo   : 31006108
      }
    },
    fecha    : '2023-07-14T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 79852094,
    idProceso: [
      50672820
    ],
    llaveProceso: '11001400306420170119100',
    numero      : 209,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345478e2',
    capitalAdeudado: 43653352,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-23T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 55,
          tipo: 'Civil Municipal'
        },
        {
          id  : 15,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        11903330957,
        '377816208286710 // 4513083951499464 // 5176407001878614 // 5303720129694960 // AUDIOPRESTAMO'
      ],
      radicado         : '2017 - 00860',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 17174720,
      direccion      : 'CALLE 159 # 15 - 45',
      email          : 'gerardomoncada70@hotmail.com',
      primerApellido : 'MONCADA',
      primerNombre   : 'GERARDO',
      segundoApellido: 'VEGA',
      segundoNombre  : 'ANTONIO',
      tel            : {
        celular: 3153330306,
        fijo   : 3349755
      }
    },
    fecha    : '2023-08-03T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 17174720,
    idProceso: [
      86524020
    ],
    llaveProceso: '11001400305520170086000',
    numero      : 223,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345478ec',
    capitalAdeudado: 30506109,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-29T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 28,
          tipo: 'Civil Municipal'
        },
        {
          id  : 16,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        4099838997529750,
        '5303712728390736 // 12141636'
      ],
      radicado         : '2017 - 00849',
      vencimientoPagare: '2020-08-24T00:00:00.000Z'
    },
    deudor: {
      cedula         : 11313124,
      direccion      : 'CALLE 145 # 46 - 13 APTO 202 INT 5',
      email          : 'jotorres@perosnalsoft.com.co',
      primerApellido : 'TORRES',
      primerNombre   : 'JOSE',
      segundoApellido: 'TAMAYO',
      segundoNombre  : 'LUIS',
      tel            : {
        celular: 3138216786,
        fijo   : 3138216
      }
    },
    fecha    : '2022-06-16T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 11313124,
    idProceso: [
      50685700
    ],
    llaveProceso: '11001400302820170084900',
    numero      : 233,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d793345478ee',
    capitalAdeudado: 27603821,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-06T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 8,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-008-civil-municipal-de-bogota'
        },
        {
          id  : 6,
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-06-de-ejecucion-civil-municipal-de-bogota'
        }
      ],
      obligacion: [
        148931
      ],
      radicado         : '2017 - 01134',
      vencimientoPagare: '2017-02-14T00:00:00.000Z'
    },
    deudor: {
      cedula         : 79853115,
      direccion      : 'DIAGONAL 56 BIS 84 A 10 SUR TR 1',
      email          : 'fanor.diaz@gmail.com',
      primerApellido : 'DIAZ',
      primerNombre   : 'FANOR',
      segundoApellido: 'AGUDELO',
      tel            : {
        celular: 3212406193,
        fijo   : 8060271
      }
    },
    fecha    : '2023-07-27T05:00:00.000Z',
    grupo    : 'Bancolombia',
    id       : 79853115,
    idProceso: [
      50716620
    ],
    llaveProceso: '11001400300820170113400',
    numero      : 235,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    _id            : '64cc10e7ea30d793345478f2',
    capitalAdeudado: 1788247698,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-13T00:00:00.000Z',
      juzgado                : [
        {
          id  : 45,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        20990135265
      ],
      radicado         : '2017 - 01164',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 53131901,
      direccion      : 'CARRERA 88C  63 SUR 67 TORRE 5 APARTAMENTO 1',
      primerApellido : 'RIVEROS',
      primerNombre   : 'NIDIA',
      segundoApellido: 'ARAQUE',
      segundoNombre  : 'JACQUELINE',
      tel            : {
        celular: 0,
        fijo   : 0
      }
    },
    fecha    : '2023-06-20T05:00:00.000Z',
    grupo    : 'LiosJuridicos',
    id       : 53131901,
    idProceso: [
      9877803
    ],
    llaveProceso: '11001400304520170116400',
    numero      : 239,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    _id            : '64cc10e7ea30d793345478f6',
    capitalAdeudado: 46109381,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-25T00:00:00.000Z',
      etapaProcesal          : 'EN EJECUCIÓN LIQUIDACIÓN CREDITO SOLICITADA A COVINOC',
      juzgado                : [
        {
          id  : 6925,
          tipo: 'Civil Municipal // Civil Municipal'
        }
      ],
      obligacion: [
        12577419
      ],
      radicado         : '2017 - 00845',
      vencimientoPagare: '2020-08-11T00:00:00.000Z'
    },
    deudor: {
      cedula         : 300388244,
      direccion      : 'CALLE 15 # 15 - 45',
      primerApellido : 'CASTAÑEDA',
      primerNombre   : 'MARIA',
      segundoApellido: 'PERUGACHI',
      segundoNombre  : 'OLGA',
      tel            : {
        celular: null,
        fijo   : 1111111
      }
    },
    fecha    : '2023-07-17T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 300388244,
    idProceso: [
      50675410
    ],
    llaveProceso: '11001400306920170084500',
    numero      : 243,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d793345478fc',
    capitalAdeudado: 44933312,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-23T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 16,
          tipo: 'Civil Municipal'
        },
        {
          id  : 18,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        377813517259835,
        '377814405234039 // 45130727777594186 // 5491572487025564 // AUDIOPRESTAMO'
      ],
      radicado         : '2017 - 00875',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 19069228,
      direccion      : 'CARRERA 15 # 188 - 39',
      email          : 'jorgemar24@gmail.com',
      primerApellido : 'MARTINEZ',
      primerNombre   : 'JORGE',
      segundoApellido: 'BENDEK',
      segundoNombre  : 'ALBERTO',
      tel            : {
        celular: 3134749213,
        fijo   : 6701643
      }
    },
    fecha    : '2023-05-16T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 19069228,
    idProceso: [
      50687430
    ],
    llaveProceso: '11001400301620170087500',
    numero      : 249,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d7933454791a',
    capitalAdeudado: 14404721,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-25T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 8,
          tipo: 'Civil Municipal'
        },
        {
          id  : 1,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        2330087057
      ],
      radicado         : '2017 - 01058',
      vencimientoPagare: '2020-12-07T00:00:00.000Z'
    },
    deudor: {
      cedula         : 1069745324,
      direccion      : 'CALLE 14A SUR # 11M - 18 CASA 22',
      primerApellido : 'GUTIERREZ',
      primerNombre   : 'ANDRES',
      segundoApellido: 'TRUJILLO',
      segundoNombre  : 'FELIPE',
      tel            : {
        celular: 3115964170,
        fijo   : 0
      }
    },
    fecha    : '2022-07-21T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 1069745324,
    idProceso: [
      112758450
    ],
    llaveProceso: '11001400300820170105800',
    numero      : 279,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d7933454791b',
    capitalAdeudado: 11796195,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-11T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 9,
          tipo: 'Civil Municipal'
        },
        {
          id  : 18,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        8920084662
      ],
      radicado         : '2017 - 01279',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 19447966,
      direccion      : 'CR 12B 24-37 SUR',
      email          : 'jhernandosanchez@yahoo.es',
      primerApellido : 'SANCHEZ',
      primerNombre   : 'JOSE',
      segundoApellido: 'VALBUENA',
      segundoNombre  : 'HERNANDO',
      tel            : {
        celular: 3125826241,
        fijo   : 4789274
      }
    },
    fecha    : '2022-01-26T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 19447966,
    idProceso: [
      50875780
    ],
    llaveProceso: '11001400300920170127900',
    numero      : 280,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d7933454791d',
    capitalAdeudado: 66362959,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 15,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-015-civil-municipal-de-bogota'
        },
        {
          id  : 11,
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-11-de-ejecucion-civil-municipal-de-bogota'
        }
      ],
      obligacion: [
        174366
      ],
      radicado         : '2017 - 01394',
      vencimientoPagare: '2024-05-05T05:00:00.000Z'
    },
    deudor: {
      cedula         : 19255260,
      direccion      : 'CALLE 2 C No 62 - 20',
      email          : 'maifren_13@yahoo.es',
      primerApellido : 'AVILA',
      primerNombre   : 'MATIAS',
      segundoApellido: 'AGUILAR',
      segundoNombre  : 'HUMBERTO',
      tel            : {
        celular: 3125024008,
        fijo   : 4170527
      }
    },
    fecha    : '2021-11-08T05:00:00.000Z',
    grupo    : 'Bancolombia',
    id       : 19255260,
    idProceso: [
      50777890
    ],
    llaveProceso: '11001400301520170139400',
    numero      : 282,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    _id            : '64cc10e7ea30d79334547921',
    capitalAdeudado: 94533343,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-11T00:00:00.000Z',
      etapaProcesal          : 'CURADOR AD LITEM',
      juzgado                : [
        {
          id  : 17,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        12711612
      ],
      radicado         : '2017 - 01195',
      vencimientoPagare: '2020-09-06T00:00:00.000Z'
    },
    deudor: {
      cedula         : 80259791,
      direccion      : 'DIAGONAL 48 J No 5C- 34 SUR',
      email          : 'gerencia.seguridadgf@gmail.com',
      primerApellido : 'HEREDIA',
      primerNombre   : 'ALIRIO',
      segundoApellido: 'BUITRAGO',
      tel            : {
        celular: 0,
        fijo   : 2796621
      }
    },
    fecha    : '2023-07-10T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 80259791,
    idProceso: [
      50721470,
      127748331
    ],
    idProcesos: [
      50721470
    ],
    llaveProceso: '11001400301720170119500',
    numero      : 286,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d79334547922',
    capitalAdeudado: 44309785,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-04T00:00:00.000Z',
      juzgado                : [
        {
          id  : 1650,
          tipo: 'Desgloce'
        }
      ],
      obligacion: [
        12592504
      ],
      radicado         : '2017 - 00157',
      vencimientoPagare: '2020-09-29T00:00:00.000Z'
    },
    deudor: {
      cedula         : 79861754,
      direccion      : 'CALLE 72 A No  74 A - 77',
      email          : 'carlosgrugec@hotmail.com',
      primerApellido : 'RUGE',
      primerNombre   : 'CARLOS',
      segundoApellido: 'CASTAÑEDA',
      segundoNombre  : 'GERMAN',
      tel            : {
        celular: 3104865508,
        fijo   : 6087374
      }
    },
    fecha    : '2022-08-11T05:00:00.000Z',
    grupo    : 'Insolvencia',
    id       : 79861754,
    idProceso: [
      50242270
    ],
    llaveProceso: '11001400301620170015700',
    numero      : 287,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d79334547924',
    capitalAdeudado: 14645611,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-11T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 18,
          tipo: 'Civil Municipal'
        },
        {
          id  : 16,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        5306940432740470
      ],
      radicado         : '2017 - 01522',
      vencimientoPagare: '2020-03-22T00:00:00.000Z'
    },
    deudor: {
      cedula         : 12229243,
      direccion      : 'AVENIDA 1 DE MAYO No 29-06',
      email          : 'serdiajo@gmail.com',
      primerApellido : 'TORO',
      primerNombre   : 'JOSE',
      segundoApellido: 'VARGAS',
      segundoNombre  : 'AHINSONJOBER',
      tel            : {
        celular: 0,
        fijo   : 4651401
      }
    },
    fecha    : '2022-09-16T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 12229243,
    idProceso: [
      50711570
    ],
    llaveProceso: '11001400301820170152200',
    numero      : 289,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d7933454792a',
    capitalAdeudado: 25845669,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-18T00:00:00.000Z',
      etapaProcesal          : 'PENDIENTE SENTENCIA Y OFICIOS',
      juzgado                : [
        {
          id  : 51,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        12389160
      ],
      radicado         : '2017 - 01113',
      vencimientoPagare: '2020-09-12T00:00:00.000Z'
    },
    deudor: {
      cedula         : 36536419,
      direccion      : 'CALLE 124 No  20-76 APARTAMENTO 503',
      primerApellido : 'FERNANDEZ',
      primerNombre   : 'RITA',
      segundoApellido: 'IBAÑEZ',
      segundoNombre  : 'CECILIA',
      tel            : {
        celular: 0,
        fijo   : 2131020
      }
    },
    fecha    : '2023-07-19T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 36536419,
    idProceso: [
      110568033
    ],
    llaveProceso: '11001400305120170111300',
    numero      : 295,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d7933454792c',
    capitalAdeudado: 28485816,
    demanda        : {
      ciudad                 : 'UMBITA',
      departamento           : 'BOYACÁ',
      entregaGarantiasAbogado: null,
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 1,
          tipo: 'Promiscuo Municipal'
        }
      ],
      obligacion: [
        5450082766,
        5450083252
      ],
      radicado         : '2017 - 00095',
      vencimientoPagare: '2019-10-07T05:00:00.000Z'
    },
    deudor: {
      cedula         : 6006685,
      direccion      : 'CALLE 5 A No 6 - 23 UMBITA',
      primerApellido : 'MARTINEZ',
      primerNombre   : 'MIGUEL',
      segundoApellido: 'HUERTAS',
      segundoNombre  : 'ANGEL',
      tel            : {
        celular: 3123077900,
        fijo   : 0
      }
    },
    grupo    : 'Reintegra',
    id       : 6006685,
    idProceso: [
      0
    ],
    llaveProceso: '15842408900120170009500',
    numero      : 297,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547939',
    capitalAdeudado: 40406421,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-04-10T05:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 21,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-021-civil-municipal-de-bogota'
        },
        {
          id  : 15,
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-15-de-ejecucion-civil-municipal-de-bogota'
        }
      ],
      obligacion: [
        '1740086734 4513073749673967',
        5303719549810730
      ],
      radicado         : '2017 - 01532',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 79388145,
      direccion      : 'CARRERA 72 A- No 9 - 44',
      email          : 'li_bcar@hotmail.com',
      primerApellido : 'GONZALEZ',
      primerNombre   : 'LIBARDO',
      segundoApellido: 'TRIVIÑO',
      segundoNombre  : 'ALFONSO',
      tel            : {
        celular: 0,
        fijo   : 2928108
      }
    },
    fecha    : '2023-05-15T05:00:00.000Z',
    grupo    : 'Bancolombia',
    id       : 79388145,
    idProceso: [
      50769660,
      0
    ],
    idProcesos: [
      50769660
    ],
    llaveProceso: '11001400302120170153200',
    numero      : 310,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547955',
    capitalAdeudado: 42530688,
    demanda        : {
      ciudad                 : 'CAPARRAPI',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-21T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 1,
          tipo: 'Promiscuo Municipal'
        }
      ],
      obligacion: [
        7910080245
      ],
      radicado         : '2017 - 00096',
      vencimientoPagare: '2020-04-01T00:00:00.000Z'
    },
    deudor: {
      cedula         : 20427976,
      direccion      : 'CARRERA 3 No 9 - 02 /08  CAPARRAPI (CUNDINAMARCA)',
      primerApellido : 'MOYANO',
      primerNombre   : 'BLANCA',
      segundoApellido: 'BELTRAN',
      segundoNombre  : 'MELBA',
      tel            : {
        celular: 0,
        fijo   : 3213718
      }
    },
    grupo    : 'Reintegra',
    id       : 20427976,
    idProceso: [
      0
    ],
    llaveProceso: '25148408900120170009600',
    numero      : 338,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d7933454795b',
    capitalAdeudado: 19977436,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-29T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 33,
          tipo: 'Civil Municipal'
        },
        {
          id  : 2,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        '377815565830854  4513071889404813',
        '5176409000345363    5306946666855816'
      ],
      radicado         : '2017 - 01474',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 79505982,
      direccion      : 'CALLE 168 No 8 G - 61 BLOQUE  5 APARTAMENTO  102',
      email          : 'luissanchez69@live.com',
      primerApellido : 'SANCHEZ',
      primerNombre   : 'LUIS',
      segundoApellido: 'ORTIZ',
      segundoNombre  : 'AUGUSTO',
      tel            : {
        celular: 3174409073,
        fijo   : 8003961
      }
    },
    fecha    : '2023-05-17T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 79505982,
    idProceso: [
      50763460
    ],
    llaveProceso: '11001400303320170147400',
    numero      : 344,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d7933454795f',
    capitalAdeudado: 76735593,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-28T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 1,
          tipo: 'Civil Municipal'
        },
        {
          id  : 10,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        6260082762,
        377813367146983
      ],
      radicado         : '2017 - 01309',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 41688661,
      direccion      : 'CARRERA 8 No 190 - 22 Hoy Carrera 31 No. 190-04',
      email          : 'anabeatrizcorredor@yahoo.es',
      primerApellido : 'CORREDOR',
      primerNombre   : 'ANA',
      segundoApellido: 'RIVERA',
      segundoNombre  : 'BEATRIZ',
      tel            : {
        celular: 3106630177,
        fijo   : 5101587
      }
    },
    fecha    : '2023-08-01T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 41688661,
    idProceso: [
      50764880
    ],
    llaveProceso: '11001400300120170130900',
    numero      : 348,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547963',
    capitalAdeudado: 11853652,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-29T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 76,
          tipo: 'Civil Municipal'
        },
        {
          id  : 17,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        4280023383
      ],
      radicado         : '2017 - 01016',
      vencimientoPagare: '2019-05-20T00:00:00.000Z'
    },
    deudor: {
      cedula         : 71992491,
      direccion      : 'TRANSVERSAL 2 C BIS No 97 B-05 SUR',
      primerApellido : 'JESUS',
      primerNombre   : 'MARIO',
      segundoApellido: 'OSSA PULGARIN ',
      segundoNombre  : 'DE',
      tel            : {
        celular: 0,
        fijo   : 7673180
      }
    },
    fecha    : '2023-06-27T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 71992491,
    idProceso: [
      51499790,
      0
    ],
    idProcesos: [
      51499790
    ],
    llaveProceso: '11001400307620170101600',
    numero      : 352,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547969',
    capitalAdeudado: 22130224,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-06T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 78,
          tipo: 'Civil Municipal'
        },
        {
          id  : 12,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        3880082626
      ],
      radicado         : '2017 - 00975',
      vencimientoPagare: '2019-02-26T00:00:00.000Z'
    },
    deudor: {
      cedula         : 1116782267,
      direccion      : 'DIAGONAL 2  No 79 F- 04',
      email          : 'juanotero1989@gmail.com',
      primerApellido : 'OTERO',
      primerNombre   : 'JOGLI',
      segundoApellido: 'VARGAS',
      segundoNombre  : 'JOAQUIN',
      tel            : {
        celular: 3005941798,
        fijo   : 0
      }
    },
    fecha    : '2023-05-04T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 1116782267,
    idProceso: [
      51465090
    ],
    llaveProceso: '11001400307820170097500',
    numero      : 358,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d7933454796c',
    capitalAdeudado: 32318533,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-26T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 17,
          tipo: 'Civil Municipal'
        },
        {
          id  : 15,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        'SO79522009',
        5491570044098801
      ],
      radicado         : '2017 - 01336',
      vencimientoPagare: '2021-03-26T00:00:00.000Z'
    },
    deudor: {
      cedula         : 53064513,
      direccion      : 'CARRERA 68 D No 40-53 SUR TORRE 6 APARTAMENTO 1006',
      email          : 'ncuestas@mccain.com.co',
      primerApellido : 'CUESTAS',
      primerNombre   : 'NATALIA',
      segundoApellido: 'MONDRAGON',
      tel            : {
        celular: 0,
        fijo   : null
      }
    },
    fecha    : '2022-03-28T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 53064513,
    idProceso: [
      50782960
    ],
    llaveProceso: '11001400301720170133600',
    numero      : 361,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547974',
    capitalAdeudado: 34749647,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-17T00:00:00.000Z',
      etapaProcesal          : 'EJECUCION',
      juzgado                : [
        {
          id  : 22,
          tipo: 'Civil Municipal'
        },
        {
          id  : 20,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        2290098960
      ],
      radicado         : '2017-1208',
      vencimientoPagare: '2018-10-08T00:00:00.000Z'
    },
    deudor: {
      cedula         : 900336193,
      direccion      : 'CARRERA 24 G No20-35 SUR',
      primerApellido : 'RIVOLI',
      primerNombre   : 'INVERSION',
      segundoApellido: 'S.A.S.',
      tel            : {
        celular: 0,
        fijo   : 3727561
      }
    },
    fecha    : '2023-01-31T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 900336193,
    idProceso: [
      50817380,
      0
    ],
    idProcesos: [
      50817380
    ],
    llaveProceso: '11001400302220170120800',
    numero      : 369,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547989',
    capitalAdeudado: 50509238,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-16T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 4,
          tipo: 'Civil Municipal'
        },
        {
          id  : 9,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        2500084774,
        'AUDIOPRESTAMO'
      ],
      radicado         : '2017 - 01266',
      vencimientoPagare: '2020-07-21T00:00:00.000Z'
    },
    deudor: {
      cedula         : 71603563,
      direccion      : 'CARRERA 82  No  19 - 20',
      email          : 'gilbertojaime@hotmail.com',
      primerApellido : 'JAIME',
      primerNombre   : 'GILBERTO',
      segundoApellido: 'BETANCOURT',
      tel            : {
        celular: 0,
        fijo   : 3138547
      }
    },
    fecha    : '2022-02-04T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 71603563,
    idProceso: [
      50859050
    ],
    llaveProceso: '11001400300420170126600',
    numero      : 390,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d7933454798b',
    capitalAdeudado: 38847950,
    demanda        : {
      ciudad                 : 'ZIPAQUIRA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-09T00:00:00.000Z',
      etapaProcesal          : 'NOTIFICACION',
      juzgado                : [
        {
          id  : 3,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        3320087751,
        3320088190
      ],
      radicado         : '2018 - 00131',
      vencimientoPagare: '2020-08-22T00:00:00.000Z'
    },
    deudor: {
      cedula         : 79712791,
      direccion      : 'CALLE 3 C No  13 - 07   ZIPAQUIRA',
      email          : 'giovannymat@yahoo.com',
      primerApellido : 'MATEUS',
      primerNombre   : 'EDGAR',
      segundoApellido: 'CASTILLO',
      segundoNombre  : 'JOBANNY',
      tel            : {
        celular: 0,
        fijo   : 8511988
      }
    },
    grupo    : 'Reintegra',
    id       : 79712791,
    idProceso: [
      0
    ],
    llaveProceso: '25899400300220170013100',
    numero      : 392,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547998',
    capitalAdeudado: 22592583,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 21,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-021-civil-municipal-de-bogota'
        },
        {
          id  : 13,
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-13-de-ejecucion-civil-municipal-de-bogota'
        }
      ],
      obligacion: [
        87823
      ],
      radicado         : '2018 - 00236',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 79396995,
      direccion      : 'CALLE 12 A No 71 B - 60',
      email          : 'arthurlingo64@hotmail.com',
      primerApellido : 'LINCE',
      primerNombre   : 'ARTURO',
      segundoApellido: 'GOMEZ',
      tel            : {
        celular: 31088445603,
        fijo   : 4244358
      }
    },
    fecha    : '2023-06-15T05:00:00.000Z',
    grupo    : 'Bancolombia',
    id       : 79396995,
    idProceso: [
      51029180
    ],
    llaveProceso: '11001400302120180023600',
    numero      : 405,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    _id            : '64cc10e7ea30d793345479a4',
    capitalAdeudado: 40942872,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 71,
          tipo: 'Civil Municipal'
        },
        {
          id  : 7,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        5740084511,
        6390082501
      ],
      radicado         : '2017 - 01250',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 19275068,
      direccion      : 'CALLE 71 A No 70 B-11',
      email          : 'oscarmultibog@hotmail.com',
      primerApellido : 'GOMEZ',
      primerNombre   : 'OSCAR',
      segundoApellido: 'CHUCHIN',
      segundoNombre  : 'HUMBERTO',
      tel            : {
        celular: 3105638608,
        fijo   : 2511959
      }
    },
    fecha    : '2022-03-10T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 19275068,
    idProceso: [
      64793050
    ],
    llaveProceso: '11001400307120170125000',
    numero      : 417,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345479a7',
    capitalAdeudado: 10382732,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-01-12T05:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 6319,
          tipo: 'Civil Municipal/Civil Municipal de Ejecucion'
        },
        {
          id  : 0,
          tipo: 'SINGULAR'
        }
      ],
      obligacion: [
        '377813451010780 / 4513070410107739',
        5303710165958750
      ],
      radicado         : 1.100140030632017e22,
      vencimientoPagare: '2020-08-07T05:00:00.000Z'
    },
    deudor: {
      cedula         : 52773230,
      direccion      : 'CALLE 42 No 78 H - 38 SUR',
      email          : 'N / A',
      primerApellido : 'BARRETO',
      primerNombre   : 'DIANA',
      segundoApellido: 'OSMA',
      segundoNombre  : 'PATRICIA',
      tel            : {
        celular: 3107706773,
        fijo   : 3085025
      }
    },
    fecha    : '2023-06-30T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 52773230,
    idProceso: [
      65701460
    ],
    llaveProceso: '11001400306320170129000',
    numero      : 420,
    tipoProceso : 'HMM PISO 1'
  },
  {
    _id            : '64cc10e7ea30d793345479c7',
    capitalAdeudado: 22244760,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 59,
          tipo: 'Civil Municipal'
        },
        {
          id  : 7,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        1740087269
      ],
      radicado         : '2018 - 00090',
      vencimientoPagare: '2020-07-03T05:00:00.000Z'
    },
    deudor: {
      cedula         : 25126734,
      direccion      : 'CARRERA 103 A  No 77D-22 MOLINOS- BOGOTA',
      email          : 'mauriciosamu1128@gmail.com',
      primerApellido : 'DE',
      primerNombre   : 'MARIA',
      segundoApellido: 'OROZCO',
      segundoNombre  : 'MARIN',
      tel            : {
        celular: 3124885346,
        fijo   : 4412100
      }
    },
    fecha    : '2022-03-25T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 25126734,
    idProceso: [
      50989890
    ],
    llaveProceso: '11001400305920180009000',
    numero      : 452,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345479cd',
    capitalAdeudado: 17502203,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 37,
          tipo: 'Civil Municipal'
        },
        {
          id  : 8,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        'AUDIOPRESTAMO'
      ],
      radicado         : '2018 - 00111',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 52271112,
      direccion      : 'CARRERA 101 No 70 A-14 INTERIOR 1 APARTAMENTO 408',
      email          : 'saraja.7@hotmail.com',
      primerApellido : 'BELTRAN',
      primerNombre   : 'SANDRA',
      segundoApellido: 'OVIEDO',
      segundoNombre  : 'PATRICIA',
      tel            : {
        celular: 0,
        fijo   : 6607900
      }
    },
    fecha    : '2023-02-02T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 52271112,
    idProceso: [
      50990920
    ],
    llaveProceso: '11001400303720180011100',
    numero      : 458,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345479ee',
    capitalAdeudado: 18100699,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-03-09T05:00:00.000Z',
      etapaProcesal          : 'EMBARGO DE REMANENTES JUZGADO 27 PROCESO 2019 - 00251',
      juzgado                : [
        {
          id  : 8,
          tipo: ' Pequeñas Causas y Competencias Multiples',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-08-de-pequenas-causas-laborales-de-bogota'
        },
        {
          id  : 5,
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-05-de-ejecucion-civil-municipal-de-bogota'
        }
      ],
      obligacion: [
        'AUDIOPRESTAMO',
        '0377816345049476 // 4513070259455355 // 5303720114305077'
      ],
      radicado         : '2018 - 00785',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 51987570,
      direccion      : 'CALLE 163 B No 50-80  INTERIOR 10 APT 231 CONJUNTO LA ESTANCIA III',
      email          : 'sandrabogota2007@yahoo.com',
      primerApellido : 'PACHECO',
      primerNombre   : 'SANDRA',
      segundoApellido: 'RAMIREZ',
      segundoNombre  : 'PATRICIA',
      tel            : {
        celular: 0,
        fijo   : 8121692
      }
    },
    fecha    : '2023-08-02T05:00:00.000Z',
    grupo    : 'Bancolombia',
    id       : 51987570,
    idProceso: [
      87350810
    ],
    llaveProceso: '11001418900820180078500',
    numero      : 491,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345479f6',
    capitalAdeudado: 24807317,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-08-10T05:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 13,
          tipo: ' Pequeñas Causas y Competencias Multiples',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-13-de-pequenas-causas-y-competencias-multiples-de-bogota'
        }
      ],
      obligacion: [
        '20990123680  7/  377813468472239',
        '4513079359765043 // 53037220341399596'
      ],
      radicado         : '2019 - 00708',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 3208569,
      direccion      : 'DIAGONAL 77B No 119 A-74 APTO 504 INT6',
      email          : 'dcentro@pcpplasticos.com',
      primerApellido : 'APONTE',
      primerNombre   : 'FLORESMIRO',
      segundoApellido: 'ACOSTA',
      tel            : {
        celular: 0,
        fijo   : 3208569
      }
    },
    grupo    : 'Bancolombia',
    id       : 3208569,
    idProceso: [
      0
    ],
    llaveProceso: '11001418901320190070800',
    numero      : 499,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    _id            : '64cc10e7ea30d79334547a05',
    capitalAdeudado: 46118717,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      juzgado                : [
        {
          id  : 17,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        7910080591,
        4099830244266410
      ],
      radicado         : '2019 - 00179',
      vencimientoPagare: '2022-10-03T05:00:00.000Z'
    },
    deudor: {
      cedula         : 19496623,
      direccion      : 'CARRERA 68 No 100-51 APTO 405',
      email          : 'terranova54@latinmail.com',
      primerApellido : 'LEON',
      primerNombre   : 'MANUEL',
      segundoApellido: 'CALDERON',
      segundoNombre  : 'ALBERTO',
      tel            : {
        celular: 0,
        fijo   : 3175879
      }
    },
    grupo      : 'Insolvencia',
    id         : 19496623,
    numero     : 514,
    tipoProceso: 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a16',
    capitalAdeudado: 35608653,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2020-10-07T00:00:00.000Z',
      etapaProcesal          : 'EJECUCION',
      juzgado                : [
        {
          id  : 42,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-42-civil-municipal-de-bogota'
        }
      ],
      obligacion: [
        2020084294,
        '2020087484 // 4594250317705437 //5303723260933890'
      ],
      radicado         : '2020 - 00535',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 51813018,
      direccion      : 'KR 81 No. 127 A - 46 CONJUNTO MONTE AZUL BOGOTA',
      email          : 'yadelcis@hotmail.com',
      primerApellido : 'PAEZ',
      primerNombre   : 'SANDRA',
      segundoApellido: 'MURCIA',
      segundoNombre  : 'LEONOR',
      tel            : {
        celular: 0,
        fijo   : 0
      }
    },
    fecha    : '2023-03-13T05:00:00.000Z',
    grupo    : 'Bancolombia',
    id       : 51813018,
    idProceso: [
      128164881
    ],
    llaveProceso: '11001400304220200053500',
    numero      : 531,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a18',
    capitalAdeudado: 56987693,
    demanda        : {
      ciudad                 : 'SOACHA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      etapaProcesal          : 'EJECUCION',
      juzgado                : [
        {
          id  : 4,
          tipo: ' Pequeñas Causas y Competencias Multiples',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-04-municipal-de-pequenas-causas-y-competencia-multiple-de-soacha'
        }
      ],
      obligacion: [
        1680097436,
        148653
      ],
      radicado         : '2018 - 00060',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 79522009,
      direccion      : 'DIAGONAL 28 No 33-27  TORRE 7 APART 203  SOACHA',
      email          : 'jairopardo8-11-70@hotmail.com',
      primerApellido : 'PARDO',
      primerNombre   : 'JAIRO',
      segundoApellido: 'JAIMES',
      segundoNombre  : 'ALFONSO',
      tel            : {
        celular: 0,
        fijo   : 7808590
      }
    },
    grupo    : 'Bancolombia',
    id       : 79522009,
    idProceso: [
      0
    ],
    llaveProceso: '2575440030042018000600',
    numero      : 533,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    _id            : '64cc10e7ea30d79334547a19',
    capitalAdeudado: 33000833,
    demanda        : {
      ciudad                 : 'ZIPAQUIRA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2020-09-05T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 2,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        377814085773793,
        4513070445120640
      ],
      radicado         : '2020 - 00289',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 11337530,
      direccion      : 'VEREDA SAN JORGE ZIPAQUIRA',
      email          : 'maribelbonita86@hotmail.com',
      primerApellido : 'TRIVIÑO',
      primerNombre   : 'PEDRO',
      segundoApellido: 'VALBUENA',
      segundoNombre  : 'JULIO',
      tel            : {
        celular: 0,
        fijo   : 0
      }
    },
    grupo    : 'Reintegra',
    id       : 11337530,
    idProceso: [
      0
    ],
    llaveProceso: '2589940010020200028900',
    numero      : 534,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a1c',
    capitalAdeudado: 20353079,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-06-28T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 51,
          tipo: 'Civil Municipal'
        },
        {
          id  : 4,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        2270085292,
        3778131949466660
      ],
      radicado         : '2018 - 00850',
      vencimientoPagare: '2022-02-02T00:00:00.000Z'
    },
    deudor: {
      cedula         : 52155023,
      direccion      : 'CALLE 86A No 95A-15 APTO 108',
      email          : 'mediconta@gmail.com',
      primerApellido : 'LILIANA',
      primerNombre   : 'SANDRA',
      segundoApellido: 'CRUZ BELTRAN ',
      segundoNombre  : '',
      tel            : {
        celular: 3108540511,
        fijo   : 5360278
      }
    },
    fecha    : '2023-07-10T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 52155023,
    idProceso: [
      89137980
    ],
    llaveProceso: '11001400305120180085000',
    numero      : 537,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a1e',
    capitalAdeudado: 32026447,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-07-03T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 36,
          tipo: 'Civil Municipal'
        },
        {
          id  : 15,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        2070086628,
        4594250056606570
      ],
      radicado         : '2018 - 00818',
      vencimientoPagare: '2021-04-10T00:00:00.000Z'
    },
    deudor: {
      cedula         : 51937267,
      direccion      : 'CALLLE 106 B- No 54-57 APTO 201 PUENTE LARGO',
      email          : 'amoplata@yahoo.com',
      primerApellido : 'MORA',
      primerNombre   : 'ADRIANA',
      segundoApellido: 'PLATA',
      segundoNombre  : 'LUCIA',
      tel            : {
        celular: 0,
        fijo   : 8146011
      }
    },
    fecha    : '2023-08-03T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 51937267,
    idProceso: [
      51306830
    ],
    llaveProceso: '11001400303620180081800',
    numero      : 539,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a1f',
    capitalAdeudado: 17667402,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-07-26T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 14,
          tipo: 'Civil Municipal'
        },
        {
          id  : 9,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        1980096337,
        6700083464
      ],
      radicado         : '2018 - 00929',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 3242760,
      direccion      : 'CARRERA 86 No 99-23',
      email          : 'rodrigogar68@hotmail.com',
      primerApellido : 'GARCIA',
      primerNombre   : 'JOSE',
      segundoApellido: 'QUINTERO',
      segundoNombre  : 'RODRIGO',
      tel            : {
        celular: 3143659602,
        fijo   : 6855750
      }
    },
    fecha    : '2023-06-27T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 3242760,
    idProceso: [
      51341610
    ],
    llaveProceso: '11001400301420180092900',
    numero      : 540,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a20',
    capitalAdeudado: 39855851,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 8241,
          tipo: 'Civil Municipal/ Civil Municipal'
        },
        {
          id  : 14,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        'AUDIOPRESTAMO',
        5491580436291960
      ],
      radicado         : '2018 - 00964',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 79533771,
      direccion      : 'CARRERA 81 G No 48-03 SUR',
      email          : 'jrestradacastillo@gmail.com',
      primerApellido : 'ESTRADA',
      primerNombre   : 'JOSE',
      segundoApellido: 'CASTILLO',
      segundoNombre  : 'RAMON',
      tel            : {
        celular: 0,
        fijo   : 2998302
      }
    },
    fecha    : '2022-03-24T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 79533771,
    idProceso: [
      52160520,
      112967583
    ],
    llaveProceso: '11001400308220180096400',
    numero      : 541,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a21',
    capitalAdeudado: 12864472,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 12,
          tipo: ' Pequeñas Causas y Competencias Multiples'
        },
        {
          id  : 17,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        'AMERICAN 377813618831557',
        'VISA 4513070030495183 // 5303715376619405'
      ],
      radicado         : '2018 - 00644',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 53106069,
      direccion      : 'CALLE 65 BIS No 86-50',
      email          : 'bicato10@hotmail.com',
      primerApellido : 'ESGUERRA',
      primerNombre   : 'BIBIANA',
      segundoApellido: 'VASQUEZ',
      segundoNombre  : 'PATRICIA',
      tel            : {
        celular: 0,
        fijo   : 53106069
      }
    },
    fecha    : '2023-07-05T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 53106069,
    idProceso: [
      71079290
    ],
    llaveProceso: '11001418901220180064400',
    numero      : 542,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a25',
    capitalAdeudado: 41372568,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-06T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 2,
          tipo: ' Civil Municipal'
        },
        {
          id  : 13,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        12541235
      ],
      radicado         : '2017 - 01002',
      vencimientoPagare: '2020-10-04T00:00:00.000Z'
    },
    deudor: {
      cedula         : 1116782267,
      direccion      : 'DIAGONAL 2 No 79 F -04',
      email          : 'juanotero1989@gmail.com',
      primerApellido : 'OTERO',
      primerNombre   : 'JOGLI',
      segundoApellido: 'VARGAS',
      segundoNombre  : 'JOAQUIN',
      tel            : {
        celular: 3005941798,
        fijo   : 0
      }
    },
    fecha    : '2023-03-14T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 1116782267,
    idProceso: [
      50780430
    ],
    llaveProceso: '11001400300220170100200',
    numero      : 546,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d79334547a2c',
    capitalAdeudado: 31804872,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-06-20T00:00:00.000Z',
      juzgado                : [
        {
          id  : 8365,
          tipo: ' Pequeñas Causas y Competencias Multiples'
        }
      ],
      obligacion: [
        130089828
      ],
      radicado         : '2023 - 01088',
      vencimientoPagare: '2025-02-25T00:00:00.000Z'
    },
    deudor: {
      cedula         : 80220698,
      direccion      : 'Carrera 7 # 180 75 // Carrera 8 A No. 182 - 12',
      email          : 'lxndrlaverde@gmail.com',
      primerApellido : 'LAVERDE',
      primerNombre   : 'JOSE',
      segundoApellido: 'PENAGOS',
      segundoNombre  : 'ALEXANDER',
      tel            : {
        celular: 0,
        fijo   : 0
      }
    },
    grupo      : 'Bancolombia',
    id         : 80220698,
    numero     : 553,
    tipoProceso: 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a2e',
    capitalAdeudado: 80906224,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26T00:00:00.000Z',
      juzgado                : [],
      obligacion             : [
        1920089307
      ],
      vencimientoPagare: '2026-03-04T00:00:00.000Z'
    },
    deudor: {
      cedula         : 53130409,
      direccion      : 'CL 55 BIS 16 48 Apartamento 702 Edificio Bangkok',
      email          : 'jsquiroga72@hotmail.com',
      primerApellido : 'QUIROGA',
      primerNombre   : 'JEIMMY',
      segundoApellido: 'RAMIREZ',
      segundoNombre  : 'SOLEY',
      tel            : {
        celular: 3506509064,
        fijo   : 3917539
      }
    },
    grupo      : 'Bancolombia',
    id         : 53130409,
    numero     : 555,
    tipoProceso: 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a2f',
    capitalAdeudado: 149444779,
    demanda        : {
      ciudad                 : 'MADRID',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26T00:00:00.000Z',
      juzgado                : [],
      obligacion             : [
        '3830095699 // 3830095700',
        3830095701
      ],
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 1022335014,
      direccion      : 'Carrera 13 # 4-20 Madrid (Cundinamarca)',
      email          : 'ciro.onofe1105@gmail.com',
      primerApellido : 'ERQUILIAN',
      primerNombre   : 'CIRO',
      segundoApellido: 'ONOFRE',
      tel            : {
        celular: 3023193548,
        fijo   : 0
      }
    },
    grupo      : 'Bancolombia',
    id         : 1022335014,
    numero     : 556,
    tipoProceso: 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a30',
    capitalAdeudado: 49329779,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26T00:00:00.000Z',
      juzgado                : [],
      obligacion             : [
        840093593,
        'PAGARE SIN NUMERO T. AMERICAN EXPRESS 0377844069636757'
      ],
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 71685758,
      direccion      : 'KR 32 A 1 19 BARRIO SANTA MATILDE',
      email          : 'cahequi8097@gmail.com  fundaoyuki@gmail.com',
      primerApellido : 'HERNEY',
      primerNombre   : 'CARLOS',
      segundoApellido: 'QUINTERO',
      tel            : {
        celular: 3002985587,
        fijo   : 6485655
      }
    },
    grupo      : 'Bancolombia',
    id         : 71685758,
    numero     : 557,
    tipoProceso: 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a31',
    capitalAdeudado: 46537671,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26T00:00:00.000Z',
      juzgado                : [],
      obligacion             : [
        3880005183,
        'PAGARE SIN NUMERO T. MASTER CARD 5303720122061696'
      ],
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 52531016,
      direccion      : 'Calle 18 N 86 55 Etapa 1 Torre 5 Apartamento 403 Conjunto Residencial Parque de Ostente',
      email          : 'marcearias@yahoo.com',
      primerApellido : 'ARIAS',
      primerNombre   : 'CLAUDIA',
      segundoApellido: 'LÓPEZ',
      segundoNombre  : 'MARCELA',
      tel            : {
        celular: 3106736494,
        fijo   : 0
      }
    },
    grupo      : 'Bancolombia',
    id         : 52531016,
    numero     : 558,
    tipoProceso: 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a32',
    capitalAdeudado: 42598393,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26T00:00:00.000Z',
      juzgado                : [],
      obligacion             : [
        1080103378
      ],
      vencimientoPagare: '2026-03-02T00:00:00.000Z'
    },
    deudor: {
      cedula         : 80219425,
      direccion      : 'Calle 50 Sur No. 93 D 38 Torre 07 Apartamento 601 Conjunto Residencial Porvenir Reservado Etapa 7; Carrera 89 A No. 45 A – 33 Sur Casa 207 Agrupación de Vivienda La Margarita Etapa 9',
      email          : 'edwsal736@gmail.com',
      primerApellido : 'SALCEDO',
      primerNombre   : 'EDWIN',
      segundoApellido: 'PEREZ',
      segundoNombre  : 'ALEXANDER',
      tel            : {
        celular: 3112633806,
        fijo   : 0
      }
    },
    grupo      : 'Bancolombia',
    id         : 80219425,
    numero     : 559,
    tipoProceso: 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a34',
    capitalAdeudado: 36720537,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26T00:00:00.000Z',
      juzgado                : [],
      obligacion             : [
        6520089408,
        'TARJETA MASTER CARD No. 5303720118094313 Y TARJETA AMERICAN No. 0377844026948428'
      ],
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 52278914,
      direccion      : 'Carrera 87 No. 48 – 50 Sur Casa 26 Conjunto Residencial Alameda de San José II',
      email          : 'lurodrig@corona.com.co  jrodriguez2805@hotmail.com',
      primerApellido : 'RODRIGUEZ',
      primerNombre   : 'LUZ',
      segundoApellido: 'MOERNO',
      segundoNombre  : 'JANNETH',
      tel            : {
        celular: 3153208374,
        fijo   : 17476445
      }
    },
    grupo      : 'Bancolombia',
    id         : 52278914,
    numero     : 561,
    tipoProceso: 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a35',
    capitalAdeudado: 25252953,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26T00:00:00.000Z',
      juzgado                : [],
      obligacion             : [
        9960086465,
        'TARJETA DE CREDITO MASTER CARD 5303720132348190'
      ],
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 17139148,
      direccion      : 'Carrera 80 No. 8 - 11 Torre 3 Interior 5 Apartamento 519 Torres de Santa Barbara Conjunto Residencial',
      email          : 'ajasalama@gmail.com',
      primerApellido : 'SALAMANCA',
      primerNombre   : 'MARIO',
      segundoApellido: 'PATIÑO',
      segundoNombre  : 'HERNAN',
      tel            : {
        celular: 0,
        fijo   : 7746112
      }
    },
    grupo      : 'Bancolombia',
    id         : 17139148,
    numero     : 562,
    tipoProceso: 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a36',
    capitalAdeudado: 0,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26T00:00:00.000Z',
      juzgado                : [],
      obligacion             : [
        null
      ],
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 7718318,
      primerApellido : 'LUGO',
      primerNombre   : 'MILTON',
      segundoApellido: 'GOMEZ',
      segundoNombre  : 'MARINO',
      tel            : {
        celular: 0,
        fijo   : 0
      }
    },
    grupo      : 'Bancolombia',
    id         : 7718318,
    numero     : 563,
    tipoProceso: 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a37',
    capitalAdeudado: 0,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26T00:00:00.000Z',
      juzgado                : [],
      obligacion             : [
        null
      ],
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 1013622120,
      primerApellido : 'QUIROGA',
      primerNombre   : 'JOHAN',
      segundoApellido: 'GALEANO',
      segundoNombre  : 'ANDRES',
      tel            : {
        celular: 0,
        fijo   : 0
      }
    },
    grupo      : 'Bancolombia',
    id         : 1013622120,
    numero     : 564,
    tipoProceso: 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a3a',
    capitalAdeudado: 0,
    demanda        : {
      entregaGarantiasAbogado: null,
      juzgado                : [],
      obligacion             : [],
      vencimientoPagare      : null
    },
    deudor: {
      cedula         : 94254761,
      primerApellido : 'JESUS',
      primerNombre   : 'WILSON',
      segundoApellido: 'MOLINA QUIRAMA ',
      segundoNombre  : 'DE',
      tel            : {
        celular: 0,
        fijo   : 0
      }
    },
    grupo : 'Bancolombia',
    id    : 94254761,
    numero: 567
  },
  {
    _id            : '64cc10e7ea30d7933454780e',
    capitalAdeudado: 21596919,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-07T00:00:00.000Z',
      juzgado                : [
        {
          id  : 37,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-37-civil-municipal-de-bogota'
        },
        {
          id  : 14,
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-14-de-ejecucion-civil-municipal-de-bogota'
        }
      ],
      obligacion: [
        '12313737//377815899589556',
        4513070106144855
      ],
      radicado         : '2017 - 00839',
      vencimientoPagare: '2017-08-28T00:00:00.000Z'
    },
    deudor: {
      cedula         : 80743147,
      direccion      : 'CRA 18 H No. 76 A-53 SUR BOGOTA',
      email          : 'sandrapatriciajoya-2545@hotmail.com',
      primerApellido : 'ROMERO',
      primerNombre   : 'JAVIER',
      segundoApellido: 'REYES',
      tel            : {
        celular: 3209229120,
        fijo   : 3903652
      }
    },
    fecha    : '2023-07-10T05:00:00.000Z',
    grupo    : 'LiosJuridicos',
    id       : 80743147,
    idProceso: [
      50508570
    ],
    llaveProceso: '11001400303720170083900',
    numero      : 11,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d79334547813',
    capitalAdeudado: 33791309,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-11T00:00:00.000Z',
      etapaProcesal          : 'EMPLAZAMIENTO',
      juzgado                : [
        {
          id  : 3,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-03-civil-municipal-de-bogota'
        }
      ],
      obligacion: [
        2530444
      ],
      radicado         : '2017 - 00884',
      vencimientoPagare: '2020-05-04T00:00:00.000Z'
    },
    deudor: {
      cedula         : 1077969975,
      direccion      : 'CARRERA 77B No. 68B - 19 BARRIO SANTA HELENITA',
      email          : 'yess_Id@hotmail.com',
      primerApellido : 'ALBEIRO',
      primerNombre   : 'YESID',
      segundoApellido: 'RAMOS',
      tel            : {
        celular: 3212337597,
        fijo   : 0
      }
    },
    fecha    : '2023-07-18T05:00:00.000Z',
    grupo    : 'Bancolombia',
    id       : 1077969975,
    idProceso: [
      50468620,
      113956611
    ],
    idProcesos: [
      50468620
    ],
    llaveProceso: '11001400300320170088400',
    numero      : 16,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d7933454781c',
    capitalAdeudado: 107818114,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-19T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 11,
          tipo: 'Civil del Circuito',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-011-civil-del-circuito-de-bogota'
        },
        {
          id  : 1,
          tipo: 'Ejecucion Civil del Circuito',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-01-de-ejecucion-civil-del-circuito-de-bogota'
        }
      ],
      obligacion: [
        12705806
      ],
      radicado         : '2017 - 00335',
      vencimientoPagare: '2020-05-10T00:00:00.000Z'
    },
    deudor: {
      cedula         : 3197274,
      direccion      : 'CL 14 No. 10 - 45 Bucaramanga',
      primerApellido : 'ZEA',
      primerNombre   : 'OMAR',
      segundoApellido: 'GALVIS',
      segundoNombre  : 'DARIO',
      tel            : {
        celular: 0,
        fijo   : 7479415
      }
    },
    fecha    : '2023-03-10T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 3197274,
    idProceso: [
      0,
      1805257424
    ],
    llaveProceso: '11001310301120170033500',
    numero      : 25,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d7933454781e',
    capitalAdeudado: 96608106,
    demanda        : {
      ciudad                 : 'GUADUAS',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-19T00:00:00.000Z',
      juzgado                : [
        {
          id  : 1,
          tipo: 'Civil del Circuito'
        }
      ],
      obligacion: [
        7910080321
      ],
      radicado         : '2017 - 00195',
      vencimientoPagare: '2017-04-11T00:00:00.000Z'
    },
    deudor: {
      cedula         : 79004127,
      direccion      : 'CALLE 4 No. 14-161 GUADUAS (CUNDINAMARCA)',
      primerApellido : 'LOMBANA',
      primerNombre   : 'NORBEY',
      segundoApellido: 'MAHECHA',
      tel            : {
        celular: 0,
        fijo   : 34746523
      }
    },
    grupo    : 'Insolvencia',
    id       : 79004127,
    idProceso: [
      0
    ],
    llaveProceso: '25320310300120170019500',
    numero      : 27,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    _id            : '64cc10e7ea30d79334547848',
    capitalAdeudado: 83955014,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-08T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 6,
          tipo: 'Civil Municipal'
        },
        {
          id  : 11,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        4200023595
      ],
      radicado         : '2017-00419',
      vencimientoPagare: '2019-08-12T00:00:00.000Z'
    },
    deudor: {
      cedula         : 53008703,
      direccion      : 'CARRERA 5 No. 30 - 77',
      primerApellido : 'CASTRO',
      primerNombre   : 'DERLY',
      segundoApellido: 'IZQUIERDO',
      segundoNombre  : 'CATHERINE',
      tel            : {
        celular: 0,
        fijo   : 7507842
      }
    },
    fecha    : '2023-05-10T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 53008703,
    idProceso: [
      50593100
    ],
    llaveProceso: '11001400300620170041900',
    numero      : 69,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547859',
    capitalAdeudado: 17632026,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 22,
          tipo: 'Civil Municipal'
        },
        {
          id  : 2,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        2250084171
      ],
      radicado         : '2017-00567',
      vencimientoPagare: '2018-11-11T00:00:00.000Z'
    },
    deudor: {
      cedula         : 1087781966,
      direccion      : 'CARRERA 73 A BIS No. 2 A-32 SUR BOGOTA',
      email          : 'mezaronald@yahoo.com',
      primerApellido : 'MEZA',
      primerNombre   : 'RHONALD',
      segundoApellido: 'TARAPUES',
      tel            : {
        celular: 0,
        fijo   : 4062925
      }
    },
    fecha    : '2023-05-29T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 1087781966,
    idProceso: [
      111939890
    ],
    llaveProceso: '11001400302220170056700',
    numero      : 86,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547869',
    capitalAdeudado: 50000000,
    demanda        : {
      ciudad                 : 'MESITAS',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 1,
          tipo: 'Promiscuo Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-001-promiscuo-municipal-de-el-colegio'
        }
      ],
      obligacion: [
        7300080586
      ],
      radicado         : '2017-00239',
      vencimientoPagare: '2019-07-05T00:00:00.000Z'
    },
    deudor: {
      cedula         : 1070329396,
      direccion      : 'CALL 2 No. 8-40 EL COLEGIO',
      primerApellido : 'QUINTERO',
      primerNombre   : 'ERIKA',
      segundoApellido: 'REYES',
      segundoNombre  : 'ALEJANDRA',
      tel            : {
        celular: 3114456631,
        fijo   : 0
      }
    },
    grupo    : 'Bancolombia',
    id       : 1070329396,
    idProceso: [
      0
    ],
    llaveProceso: '25245408900120170023900',
    numero      : 102,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547878',
    capitalAdeudado: 17256863,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 70,
          tipo: 'Civil Municipal'
        },
        {
          id  : 14,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        420087224
      ],
      radicado         : '2017 - 00566',
      vencimientoPagare: '2019-01-21T00:00:00.000Z'
    },
    deudor: {
      cedula         : 19386444,
      direccion      : 'CALLE 18 # 19 - 75 / CALLE 26 NTE No. 5A - 54 Cali - Valle',
      email          : 3176677592,
      primerApellido : 'MONTOYA',
      primerNombre   : 'NICOLAS',
      segundoApellido: 'CORREA',
      segundoNombre  : 'FERNANDO',
      tel            : {
        celular: 0,
        fijo   : 2531962
      }
    },
    fecha    : '2021-12-13T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 19386444,
    idProceso: [
      50522530
    ],
    llaveProceso: '11001400307020170056600',
    numero      : 117,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d7933454787b',
    capitalAdeudado: 13906249,
    demanda        : {
      ciudad                 : 'SOACHA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-04T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 3,
          tipo: 'Pequeñas Causas y Competencias Multiples',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-03-municipal-de-pequenas-causas-y-competencia-multiple-de-soacha'
        }
      ],
      obligacion: [
        6240082776
      ],
      radicado         : '2017 - 00755',
      vencimientoPagare: '2021-04-12T00:00:00.000Z'
    },
    deudor: {
      cedula        : 900212673,
      direccion     : 'CARRERA 3 # 29A - 02',
      primerApellido: 'E.U.',
      primerNombre  : 'JENCELL',
      tel           : {
        celular: 0,
        fijo   : 5753416
      }
    },
    grupo    : 'Bancolombia',
    id       : 900212673,
    idProceso: [
      0
    ],
    llaveProceso: '25754418900320170075500',
    numero      : 120,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547880',
    capitalAdeudado: 21613985,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 47,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        300093705
      ],
      radicado         : '2017 - 01520',
      vencimientoPagare: '2020-11-27T00:00:00.000Z'
    },
    deudor: {
      cedula         : 74338870,
      direccion      : 'CARRERA 18 # 12 - 72',
      primerApellido : 'GALINDO',
      primerNombre   : 'MILCIADES',
      segundoApellido: 'CASTEBLANCO',
      tel            : {
        celular: 0,
        fijo   : 4536131
      }
    },
    fecha    : '2022-09-02T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 74338870,
    idProceso: [
      0,
      109959053
    ],
    idProcesos: [
      109959053
    ],
    llaveProceso: '11001400304720170152000',
    numero      : 125,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345478a7',
    capitalAdeudado: 25519225,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-07-19T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 45,
          tipo: 'Civil Municipal'
        },
        {
          id  : 2,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        6240082772
      ],
      radicado         : '2017 - 00905',
      vencimientoPagare: '2019-09-30T00:00:00.000Z'
    },
    deudor: {
      cedula         : 14255996,
      direccion      : 'CARRERA 82 A No. 6B-30 CASA 36',
      primerApellido : 'RUIZ',
      primerNombre   : 'URIEL',
      segundoApellido: 'DIAZ',
      tel            : {
        celular: 3102785072,
        fijo   : 0
      }
    },
    fecha    : '2022-02-25T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 14255996,
    idProceso: [
      50593640
    ],
    llaveProceso: '11001400304520170090500',
    numero      : 164,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345478ac',
    capitalAdeudado: 13144437,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01T00:00:00.000Z',
      etapaProcesal          : 'NOTIFICACION',
      juzgado                : [
        {
          id  : 3,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        12498762,
        'audioprestamo'
      ],
      radicado         : '2017 - 01264',
      vencimientoPagare: '2020-03-15T00:00:00.000Z'
    },
    deudor: {
      cedula         : 23553904,
      direccion      : 'Carrera 67 No. 65-22 sur Torre 15 Apto 559',
      email          : 'dorancy1@hotmail.com',
      primerApellido : 'DE',
      primerNombre   : 'RITA',
      segundoApellido: 'GOMEZ',
      segundoNombre  : 'BLANCO',
      tel            : {
        celular: 0,
        fijo   : 3861894
      }
    },
    fecha    : '2023-06-01T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 23553904,
    idProceso: [
      50598770
    ],
    llaveProceso: '11001400300320170126400',
    numero      : 169,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d793345478bd',
    capitalAdeudado: 13319130,
    demanda        : {
      ciudad                 : 'CHIA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-11T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 2,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        1680097051
      ],
      radicado         : '2017 - 00412',
      vencimientoPagare: '2021-01-29T00:00:00.000Z'
    },
    deudor: {
      cedula         : 24134505,
      direccion      : 'CALLE 29 A # 2 - 76 APTO 304 CHIA',
      primerApellido : 'ROJAS',
      primerNombre   : 'CELY',
      segundoApellido: 'VELANDIA',
      segundoNombre  : 'MARGOTH',
      tel            : {
        celular: 0,
        fijo   : 5267343
      }
    },
    grupo    : 'Reintegra',
    id       : 24134505,
    idProceso: [
      0
    ],
    llaveProceso: '25175408900220170041200',
    numero      : 186,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345478c2',
    capitalAdeudado: 87649981,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-11T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 79,
          tipo: 'Civil Municipal'
        },
        {
          id  : 1,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        1220084112
      ],
      radicado         : '2017 - 01082',
      vencimientoPagare: '2020-11-30T00:00:00.000Z'
    },
    deudor: {
      cedula         : 80231798,
      direccion      : 'CARRERA 32 B # 2 - 64',
      email          : 'jhon.valencia@jvtel.com.co',
      primerApellido : 'VALENCIA',
      primerNombre   : 'JOHN',
      segundoApellido: 'MARQUEZ',
      segundoNombre  : 'ALEXANDER',
      tel            : {
        celular: 3004525014,
        fijo   : 2376454
      }
    },
    fecha    : '2023-07-31T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 80231798,
    idProceso: [
      51357750
    ],
    llaveProceso: '11001400307920170108200',
    numero      : 191,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345478c4',
    capitalAdeudado: 24590710,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-16T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 24,
          tipo: 'Civil Municipal'
        },
        {
          id  : 14,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        12750180
      ],
      radicado         : '2017 - 01750',
      vencimientoPagare: '2020-08-09T00:00:00.000Z'
    },
    deudor: {
      cedula         : 52465691,
      direccion      : 'CARRERA 80 # 70A - 09',
      email          : 'equesada01@hotmail.com',
      primerApellido : 'QUESADA',
      primerNombre   : 'CARMEN',
      segundoApellido: 'MARTINEZ',
      segundoNombre  : 'ELIZABETH',
      tel            : {
        celular: 3204792977,
        fijo   : 7829236
      }
    },
    grupo    : 'Reintegra',
    id       : 52465691,
    idProceso: [
      0
    ],
    llaveProceso: '11001400302420170175000',
    numero      : 193,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d793345478ca',
    capitalAdeudado: 28594040,
    demanda        : {
      ciudad                 : 'MELGAR',
      departamento           : 'TOLIMA',
      entregaGarantiasAbogado: '2017-08-22T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 2,
          tipo: 'Promiscuo Municipal'
        }
      ],
      obligacion: [
        12650694
      ],
      radicado         : '2017 - 00259',
      vencimientoPagare: '2020-08-16T00:00:00.000Z'
    },
    deudor: {
      cedula         : 1106893308,
      direccion      : 'VEREDA BOQUERON , FINCA LA MILAGROSA, MUNICIPIO FUSA // CALLE 3 # 37 - 21 BARRIO SICAMORO, MELGAR',
      email          : 'liliaramirez17@gmail.com',
      primerApellido : 'RAMIREZ',
      primerNombre   : 'MARTHA',
      segundoApellido: 'COLORADO',
      segundoNombre  : 'LILIANA',
      tel            : {
        celular: null,
        fijo   : 0
      }
    },
    grupo    : 'Reintegra',
    id       : 1106893308,
    idProceso: [
      0
    ],
    llaveProceso: '73449408900220170025900',
    numero      : 199,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d793345478d5',
    capitalAdeudado: 10555422,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22T00:00:00.000Z',
      etapaProcesal          : 'EJECUCION',
      juzgado                : [
        {
          id  : 21,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        377813597718262,
        '4513070908078111 // 5303714709873201'
      ],
      radicado         : '2018 - 00163',
      vencimientoPagare: '2020-01-05T00:00:00.000Z'
    },
    deudor: {
      cedula         : 343334,
      direccion      : 'CARRERA 50 # 113 - 09',
      primerApellido : 'CASTILLO',
      primerNombre   : 'JOSE',
      segundoApellido: 'CORTES',
      segundoNombre  : 'ANTONIO',
      tel            : {
        celular: 3015004499,
        fijo   : 4658342
      }
    },
    fecha    : '2023-06-22T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 343334,
    idProceso: [
      51006610,
      0
    ],
    idProcesos: [
      51006610
    ],
    llaveProceso: '11001400302120180016300',
    numero      : 210,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345478dc',
    capitalAdeudado: 206655465,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-17T00:00:00.000Z',
      juzgado                : [
        {
          id  : 37,
          tipo: 'Civil del Circuito'
        },
        {
          id  : 3,
          tipo: 'Civil del Circuito de Ejecucion'
        }
      ],
      obligacion: [
        182540,
        'AUDIOPRESTAMO'
      ],
      radicado         : '2017 - 00453',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 52328942,
      direccion      : 'CALLE 58 # 45 - 86',
      email          : 'casas_castillo@hotmail.com',
      primerApellido : 'NARANJO',
      primerNombre   : 'DIANA',
      segundoApellido: 'HERNANDEZ',
      segundoNombre  : 'VANESSA',
      tel            : {
        celular: 0,
        fijo   : 0
      }
    },
    fecha    : '2019-01-15T05:00:00.000Z',
    grupo    : 'LiosJuridicos',
    id       : 52328942,
    idProceso: [
      51315290,
      57718874
    ],
    idProcesos: [
      51315290
    ],
    llaveProceso: '11001310303720170045300',
    numero      : 217,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    _id            : '64cc10e7ea30d79334547901',
    capitalAdeudado: 12993948,
    demanda        : {
      ciudad                 : 'CHIA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-28T00:00:00.000Z',
      juzgado                : [
        {
          id  : 3,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        9460081795,
        5303727444531025
      ],
      radicado         : '2017 - 00477',
      vencimientoPagare: '2018-05-09T00:00:00.000Z'
    },
    deudor: {
      cedula         : 52344904,
      direccion      : 'CARRERA 9A 14F - 28C - UNIDAD 22 CHIA',
      email          : 'yohairapadro@gmail.com',
      primerApellido : 'PRADO',
      primerNombre   : 'YOHAIRA',
      segundoApellido: 'VALOYES',
      tel            : {
        celular: 3103291690,
        fijo   : 8615372
      }
    },
    grupo    : 'Reintegra',
    id       : 52344904,
    idProceso: [
      0
    ],
    llaveProceso: '25175408900320170047700',
    numero      : 254,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547905',
    capitalAdeudado: 18506672,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-01T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 13,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        5470083833,
        '377813735559305 // 5303724061518310'
      ],
      radicado         : '2017 - 01178',
      vencimientoPagare: '2018-01-26T00:00:00.000Z'
    },
    deudor: {
      cedula         : 51740544,
      direccion      : 'CARRERA 121 # 128B - 52 BLOQUE 8 CASA 34',
      email          : 'dirfinanciera.sol@gmail.com',
      primerApellido : 'BUITRAGO',
      primerNombre   : 'SOL',
      segundoApellido: 'DUQUE',
      segundoNombre  : 'JUDITH',
      tel            : {
        celular: 0,
        fijo   : 3002001
      }
    },
    fecha    : '2023-04-17T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 51740544,
    idProceso: [
      50692590
    ],
    llaveProceso: '11001400301320170117800',
    numero      : 258,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d7933454790c',
    capitalAdeudado: 115224736,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-21T00:00:00.000Z',
      juzgado                : [
        {
          id  : 201,
          tipo: 'Civil del Circuito de Ejecucion'
        }
      ],
      obligacion: [
        186718,
        '3778153354915637 / 4513079095670572'
      ],
      radicado         : '2018 - 00650',
      vencimientoPagare: '2020-05-04T00:00:00.000Z'
    },
    deudor: {
      cedula         : 7601476,
      direccion      : 'CARRERA 90 C No 6A - 31   - CASA 148',
      email          : 'jsanchezargote@gmail.com',
      primerApellido : 'SANCHEZ',
      primerNombre   : 'JULIO',
      segundoApellido: 'ARGOTE',
      segundoNombre  : 'RENE',
      tel            : {
        celular: 3118027001,
        fijo   : 3018759
      }
    },
    grupo    : 'Insolvencia',
    id       : 7601476,
    idProceso: [
      0
    ],
    llaveProceso: '1100140030202\'100050100',
    numero      : 265,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    _id            : '64cc10e7ea30d79334547914',
    capitalAdeudado: 65355736,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      juzgado                : [
        {
          id  : 6446,
          tipo: ' Pequeñas Causas y Competencias Multiples'
        }
      ],
      obligacion: [
        156791
      ],
      radicado         : '2018 - 01029',
      vencimientoPagare: '2022-05-10T05:00:00.000Z'
    },
    deudor: {
      cedula         : 1024479389,
      direccion      : 'CALLE 67 No 17 C-63 SUR',
      email          : 'sonymarce20@hotmail.com',
      primerApellido : 'MOLINA',
      primerNombre   : 'SONIA',
      segundoApellido: 'QUIMBAYO',
      segundoNombre  : 'MARCELA',
      tel            : {
        celular: 0,
        fijo   : 7650684
      }
    },
    fecha    : '2023-02-07T05:00:00.000Z',
    grupo    : 'Insolvencia',
    id       : 1024479389,
    idProceso: [
      113353750
    ],
    llaveProceso: '11001400306420180102900',
    numero      : 273,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    _id            : '64cc10e7ea30d79334547919',
    capitalAdeudado: 12347548,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 37,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-37-civil-municipal-de-bogota'
        },
        {
          id  : 11,
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-11-de-ejecucion-civil-municipal-de-bogota'
        }
      ],
      obligacion: [
        4670083154
      ],
      radicado         : '2017 - 01391',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 35506033,
      direccion      : 'CARRERA  101  No 71 B - 53',
      email          : 'natis-rolita@hotmail.con',
      primerApellido : 'PUERTA',
      primerNombre   : 'LUZ',
      segundoApellido: 'JARAMILLO',
      segundoNombre  : 'DARY',
      tel            : {
        celular: 3103430010,
        fijo   : 4357832
      }
    },
    fecha    : '2022-03-09T05:00:00.000Z',
    grupo    : 'Bancolombia',
    id       : 35506033,
    idProceso: [
      112945420
    ],
    llaveProceso: '11001400303720170139100',
    numero      : 278,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547927',
    capitalAdeudado: 25766204,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-13T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 10,
          tipo: '  Pequeñas Causas y Competencias Multiples'
        }
      ],
      obligacion: [
        300094317
      ],
      radicado         : '2017 - 00128',
      vencimientoPagare: '2020-08-31T00:00:00.000Z'
    },
    deudor: {
      cedula         : 80205694,
      direccion      : 'DIAGONAL 82 A SUR No 7C 19  ESTE',
      email          : 'kellyo.1508@hotmail.com',
      primerApellido : 'HERREÑO',
      primerNombre   : 'JOHN',
      segundoApellido: 'RAMIREZ',
      segundoNombre  : 'FREDY',
      tel            : {
        celular: 3124102,
        fijo   : 7641957
      }
    },
    grupo    : 'Reintegra',
    id       : 80205694,
    idProceso: [
      0
    ],
    llaveProceso: '11001410375220170012800',
    numero      : 292,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547928',
    capitalAdeudado: 12249598,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-19T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 48,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-048-civil-municipal-de-bogota'
        },
        {
          id  : 7,
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-07-de-ejecucion-civil-municipal-de-bogota'
        }
      ],
      obligacion: [
        '320088443  / 377813441863587',
        4513070212799642
      ],
      radicado         : '2017 - 00974',
      vencimientoPagare: '2020-03-05T00:00:00.000Z'
    },
    deudor: {
      cedula         : 1032383389,
      direccion      : 'CALLE 64 SUR  No 85 B - 40  APARTAMENTO  104',
      email          : 'ars.09@hotmail.com',
      primerApellido : 'REVELO',
      primerNombre   : 'ANDERSON',
      segundoApellido: 'SANTOS',
      tel            : {
        celular: 3118526428,
        fijo   : 4725511
      }
    },
    fecha    : '2022-12-01T05:00:00.000Z',
    grupo    : 'Bancolombia',
    id       : 1032383389,
    idProceso: [
      50762570
    ],
    llaveProceso: '11001400304820170097400',
    numero      : 293,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547929',
    capitalAdeudado: 48498610,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-18T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 63,
          tipo: 'Civil Municipal'
        },
        {
          id  : 1,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        12676248
      ],
      radicado         : '2017 - 00924',
      vencimientoPagare: '2020-09-13T00:00:00.000Z'
    },
    deudor: {
      cedula         : 79292743,
      direccion      : 'CALLE 86 A No 69 T -41  TORRE 1 APARTAMENTO 902',
      email          : 'hpulecio@cable.net.co',
      primerApellido : 'PULECIO',
      primerNombre   : 'HERNANDO',
      segundoApellido: 'PAREDES',
      tel            : {
        celular: 0,
        fijo   : 4619449
      }
    },
    fecha    : '2023-07-24T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 79292743,
    idProceso: [
      65700110
    ],
    llaveProceso: '11001400306320170092400',
    numero      : 294,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d7933454793f',
    capitalAdeudado: 44944657,
    demanda        : {
      ciudad                 : 'SOACHA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-26T00:00:00.000Z',
      etapaProcesal          : 'EJECUCION',
      juzgado                : [
        {
          id  : 1,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-01-civil-municipal-de-bogota'
        }
      ],
      obligacion: [
        '180049   53037120066499008',
        '3778133433049336 /4513075801129044'
      ],
      radicado         : '2017 - 00323',
      vencimientoPagare: '2030-01-05T00:00:00.000Z'
    },
    deudor: {
      cedula         : 8799171,
      direccion      : 'CARRERA 18 B No 4 C -  20  SOACHA',
      email          : 'saliradelante2012@hotmail.com',
      primerApellido : 'ARTEAGA',
      primerNombre   : 'MANUEL',
      segundoApellido: 'OROZCO',
      segundoNombre  : 'ENRIQUE',
      tel            : {
        celular: 0,
        fijo   : 5164071
      }
    },
    grupo    : 'Bancolombia',
    id       : 8799171,
    idProceso: [
      0
    ],
    llaveProceso: '25754400300120170032300',
    numero      : 316,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    _id            : '64cc10e7ea30d7933454794b',
    capitalAdeudado: 33615204,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-01-11T05:00:00.000Z',
      juzgado                : [
        {
          id  : 26,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        '5740084189 /5740084216',
        '160204/377813372389032'
      ],
      radicado         : '2017 - 01293',
      vencimientoPagare: '2017-05-06T00:00:00.000Z'
    },
    deudor: {
      cedula         : 52907317,
      direccion      : 'CALLE 74 A  SUR No 92 -21 torre 3',
      email          : 'milena125@hotmail.com',
      primerApellido : 'BARRETO',
      primerNombre   : 'SANDRA',
      segundoApellido: 'BERMUDEZ',
      segundoNombre  : 'MILENA',
      tel            : {
        celular: 0,
        fijo   : 0
      }
    },
    fecha    : '2018-10-02T05:00:00.000Z',
    grupo    : 'LiosJuridicos',
    id       : 52907317,
    idProceso: [
      50846930
    ],
    llaveProceso: '11001400302620170129300',
    numero      : 328,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    _id            : '64cc10e7ea30d79334547951',
    capitalAdeudado: 15018661,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 68,
          tipo: 'Civil Municipal'
        },
        {
          id  : 15,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        'AUDIOPRESTAMO'
      ],
      radicado         : '2017 - 01306',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 79853302,
      direccion      : 'CALLE  70 A BIS  No 117-16',
      email          : 'nanbravo04@hotmail.com',
      primerApellido : 'MARTINEZ',
      primerNombre   : 'NESTOR',
      segundoApellido: 'ORJUELA',
      segundoNombre  : 'JULIO',
      tel            : {
        celular: 3132088678,
        fijo   : 7459324
      }
    },
    fecha    : '2022-09-27T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 79853302,
    idProceso: [
      50765770
    ],
    llaveProceso: '11001400306820170130600',
    numero      : 334,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547954',
    capitalAdeudado: 99119191,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-16T00:00:00.000Z',
      juzgado                : [
        {
          id  : 6,
          tipo: 'Civil Municipal'
        },
        {
          id  : 4,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        140085
      ],
      radicado         : '2017 - 00964',
      vencimientoPagare: '2026-06-22T00:00:00.000Z'
    },
    deudor: {
      cedula         : 79666742,
      direccion      : 'TRANSVERSAL 17 No  64 F - 04 CASA 1 BIFAMILIAR MARLY',
      email          : 'rubypaez71@hotmail.com',
      primerApellido : 'TORRES',
      primerNombre   : 'HECTOR',
      segundoApellido: 'RIOS',
      segundoNombre  : 'ALFONSO',
      tel            : {
        celular: 3115030138,
        fijo   : 7651426
      }
    },
    fecha    : '2023-07-12T05:00:00.000Z',
    grupo    : 'Insolvencia',
    id       : 79666742,
    idProceso: [
      50857820
    ],
    llaveProceso: '11001400300620170096400',
    numero      : 337
  },
  {
    _id            : '64cc10e7ea30d79334547976',
    capitalAdeudado: 10775194,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-16T00:00:00.000Z',
      juzgado                : [
        {
          id  : 24,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        117171,
        377813401553319
      ],
      radicado         : '2018 - 00143',
      vencimientoPagare: '2024-03-30T00:00:00.000Z'
    },
    deudor: {
      cedula         : 39765816,
      direccion      : 'CALLE 50 SUR 93 D- 38 APTO 401 TORRE 6',
      email          : 'andreato1a@hotmaul.com',
      primerApellido : 'MORA',
      primerNombre   : 'MARTHA',
      segundoApellido: 'COLLAZOS',
      segundoNombre  : 'ANDREA',
      tel            : {
        celular: 0,
        fijo   : 0
      }
    },
    fecha    : '2019-09-27T05:00:00.000Z',
    grupo    : 'LiosJuridicos',
    id       : 39765816,
    idProceso: [
      51002530
    ],
    llaveProceso: '11001400302420180014300',
    numero      : 371,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    _id            : '64cc10e7ea30d7933454797b',
    capitalAdeudado: 27308454,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      juzgado                : [
        {
          id  : 76,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        118010,
        '377813183474353 // 4513074148699942 / 5491579209500691'
      ],
      radicado         : '2018 - 00052',
      vencimientoPagare: '2019-04-29T00:00:00.000Z'
    },
    deudor: {
      cedula         : 11203111,
      direccion      : 'CALLE 128 96A - 05 CASA 3 MULTIFAMILIAR ARRAYANES',
      email          : 'roberto.rico.ruiz@gmail.com',
      primerApellido : 'RICO',
      primerNombre   : 'ROBERTO',
      segundoApellido: 'RUIZ',
      tel            : {
        celular: 0,
        fijo   : 0
      }
    },
    fecha    : '2023-07-24T05:00:00.000Z',
    grupo    : 'LiosJuridicos',
    id       : 11203111,
    idProceso: [
      51500810
    ],
    llaveProceso: '11001400307620180005200',
    numero      : 376,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    _id            : '64cc10e7ea30d79334547986',
    capitalAdeudado: 36331525,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-09T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 50,
          tipo: 'Civil Municipal'
        },
        {
          id  : 14,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        2500085167,
        'AUDIOPRESTAMO'
      ],
      radicado         : '2017 - 01336',
      vencimientoPagare: '2019-05-05T00:00:00.000Z'
    },
    deudor: {
      cedula         : 91263617,
      direccion      : 'CARRERA 85  B No  23 B - 69  INTERIOR 7 APARTAMENTO  314',
      email          : 'leo.sanabria@live.com.mx',
      primerApellido : 'SANABRIA',
      primerNombre   : 'LEONARDO',
      segundoApellido: 'SANABRIA',
      tel            : {
        celular: 3118066048,
        fijo   : 4251180
      }
    },
    fecha    : '2023-01-19T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 91263617,
    idProceso: [
      106185210
    ],
    llaveProceso: '11001400305020170133600',
    numero      : 387,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d7933454798f',
    capitalAdeudado: 24000000,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-15T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 64,
          tipo: 'Civil Municipal'
        },
        {
          id  : 16,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        10000090724
      ],
      radicado         : '2017 - 01623',
      vencimientoPagare: '2019-06-08T00:00:00.000Z'
    },
    deudor: {
      cedula         : 80733467,
      direccion      : 'CARRERA 88 A No  67 - 44',
      email          : 'orlandonovoa9@gmail.com',
      primerApellido : 'NOVOA',
      primerNombre   : 'ORLANDO',
      segundoApellido: 'BARRETO',
      segundoNombre  : 'ENRIQUE',
      tel            : {
        celular: 3118163887,
        fijo   : 7836655
      }
    },
    fecha    : '2023-03-13T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 80733467,
    idProceso: [
      112730580
    ],
    llaveProceso: '11001400306420170162300',
    numero      : 396,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d7933454799a',
    capitalAdeudado: 31100999,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-16T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 78,
          tipo: 'Civil Municipal'
        },
        {
          id  : 16,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        3550083774,
        '4513082972339 / 5303714867753385'
      ],
      radicado         : '2017 - 01164',
      vencimientoPagare: '2024-01-26T00:00:00.000Z'
    },
    deudor: {
      cedula         : 79328264,
      direccion      : 'CARRERA 11 No  144 - 22 APARTAMENTO 301',
      email          : 'nescri64@hotmail.com',
      primerApellido : 'CRISTANCHO',
      primerNombre   : 'NESTOR',
      segundoApellido: 'LOPEZ',
      segundoNombre  : 'ALBERTO',
      tel            : {
        celular: 0,
        fijo   : 5266894
      }
    },
    fecha    : '2023-07-21T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 79328264,
    idProceso: [
      51465700
    ],
    llaveProceso: '11001400307820170116400',
    numero      : 407,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d7933454799c',
    capitalAdeudado: 11949471,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-02-15T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 56,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-056-civil-municipal-de-bogota'
        },
        {
          id  : 7,
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-07-de-ejecucion-civil-municipal-de-bogota'
        }
      ],
      obligacion: [
        4550087219
      ],
      radicado         : '2018 - 00221',
      vencimientoPagare: '2018-06-20T00:00:00.000Z'
    },
    deudor: {
      cedula         : 900545720,
      direccion      : 'CARRERA 50 1# 47 - 50 INT 1 APTO 101',
      email          : 'andibarracosta@gmail.com',
      primerApellido : 'SOLUCIONES',
      primerNombre   : 'CREAS',
      segundoApellido: 'S.A.S',
      tel            : {
        celular: 3107982028,
        fijo   : 8626344
      }
    },
    fecha    : '2023-06-08T05:00:00.000Z',
    grupo    : 'Bancolombia',
    id       : 900545720,
    idProceso: [
      51042800
    ],
    llaveProceso: '11001400305620180022100',
    numero      : 409,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345479ae',
    capitalAdeudado: 21049112,
    demanda        : {
      ciudad                 : 'CAJICA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-19T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 2,
          tipo: 'Promiscuo Municipal'
        }
      ],
      obligacion: [
        12730779
      ],
      radicado         : '2018 - 00048',
      vencimientoPagare: '2021-01-16T00:00:00.000Z'
    },
    deudor: {
      cedula         : 1069738339,
      direccion      : 'VEREDA LA 22 KILOMETRO 30 (CAJICA) // VEREDA SUBIA NORTE, PARTE BAJA, FINCA EL RINCON LOTE 2 (GRANADA- CUND): VEREDA SUBIA NORTE PARTE BAJA FINCA EL RINCON LOTE 2 (GRANADA - CUND)',
      primerApellido : 'CHINGATE',
      primerNombre   : 'JUAN',
      segundoApellido: 'PENAGOS',
      segundoNombre  : 'CAMILO',
      tel            : {
        celular: 313389449,
        fijo   : 0
      }
    },
    grupo    : 'Reintegra',
    id       : 1069738339,
    idProceso: [
      86157021
    ],
    llaveProceso: '25126408900220180004800',
    numero      : 427,
    tipoProceso : 'PRENDARIO'
  },
  {
    _id            : '64cc10e7ea30d793345479d2',
    capitalAdeudado: 24501535,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-07-05T00:00:00.000Z',
      etapaProcesal          : 'CONTESTACION DEMANDA',
      juzgado                : [
        {
          id  : 14,
          tipo: ' Pequeñas Causas y Competencias Multiples',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-014-de-pequenas-causas-y-competencia-multiple-de-bogota'
        }
      ],
      obligacion: [
        'AMERICAN 0377814037749057',
        'VISA 4513083943843365 // MASTER 5303729958258417'
      ],
      radicado         : '2019 - 00656',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 52883958,
      direccion      : 'DIAGONAL 2 No 21 B-20',
      email          : 'leidyyaneth.lyv@gmail.com',
      primerApellido : 'VIDAL',
      primerNombre   : 'LEIDY',
      segundoApellido: 'RODRIGUEZ',
      segundoNombre  : 'YANETH',
      tel            : {
        celular: 0,
        fijo   : 7114516
      }
    },
    fecha    : '2023-08-09T05:00:00.000Z',
    grupo    : 'Bancolombia',
    id       : 52883958,
    idProceso: [
      51816100,
      135801811
    ],
    idProcesos: [
      51816100
    ],
    llaveProceso: '11001418901420190065600',
    numero      : 463,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345479d5',
    capitalAdeudado: 14270897,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 52,
          tipo: 'Civil Municipal'
        },
        {
          id  : 17,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        '37781415851035/',
        '4099830008406922 / 5303710339142355'
      ],
      radicado         : '2018 - 00117',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 53160094,
      direccion      : 'CALLE 130 No 126-96 INTERIOR 16 APARTAMENTO 302',
      email          : 'djpaez5@hotmail.com',
      primerApellido : 'PAEZ',
      primerNombre   : 'DARLEY',
      segundoApellido: 'HIGUERA',
      segundoNombre  : 'JULIED',
      tel            : {
        celular: 3115754578,
        fijo   : 14933266
      }
    },
    fecha    : '2023-04-13T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 53160094,
    idProceso: [
      50990370
    ],
    llaveProceso: '11001400305220180011700',
    numero      : 466,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345479de',
    capitalAdeudado: 39146947,
    demanda        : {
      ciudad                 : 'SOACHA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 2,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        1000090987
      ],
      radicado         : '2018 - 00113',
      vencimientoPagare: '2019-03-08T05:00:00.000Z'
    },
    deudor: {
      cedula         : 4281808,
      direccion      : 'CALLE 1 A No 13-30  SOACHA',
      email          : 'eedibrando600@hotmail.com',
      primerApellido : 'CANDELA',
      primerNombre   : 'JOSE',
      segundoApellido: 'MUNEVAR',
      segundoNombre  : 'LIBRANDO',
      tel            : {
        celular: 0,
        fijo   : 7113967
      }
    },
    grupo    : 'Reintegra',
    id       : 4281808,
    idProceso: [
      0
    ],
    llaveProceso: '25754408900220180011300',
    numero      : 475,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345479e0',
    capitalAdeudado: 14534881,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-21T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 4,
          tipo: 'Civil Municipal'
        },
        {
          id  : 7,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        'AUDIOPRESTAMO'
      ],
      radicado         : '2018 - 00475',
      vencimientoPagare: '2020-08-15T00:00:00.000Z'
    },
    deudor: {
      cedula         : 79568543,
      direccion      : 'CALLE 60 No 38-26 APTO 301',
      email          : 'adolfo.daza@gmail.com',
      primerApellido : 'LEON',
      primerNombre   : 'ADOLFO',
      segundoApellido: 'DAZA FERNANDEZ ',
      segundoNombre  : '',
      tel            : {
        celular: 0,
        fijo   : 7038787
      }
    },
    fecha    : '2023-02-27T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 79568543,
    idProceso: [
      51149410
    ],
    llaveProceso: '11001400300420180047500',
    numero      : 477,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345479e3',
    capitalAdeudado: 17217066,
    demanda        : {
      ciudad                 : 'GIRARDOT',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      etapaProcesal          : 'EJECUCION',
      juzgado                : [
        {
          id  : 3,
          tipo: 'Civil Municipal'
        }
      ],
      obligacion: [
        'AUDIOPRESTAMO',
        5306960687119070
      ],
      radicado         : '2021 - 00539',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 39575032,
      direccion      : 'CARRERA 14 No 22-10  APARTAMENTO  202 GIRARDOT',
      email          : 'adriana.0806@hotmail.com',
      primerApellido : 'VANEGAS',
      primerNombre   : 'ADRIANA',
      segundoApellido: 'PEÑA',
      tel            : {
        celular: 3152573448,
        fijo   : 0
      }
    },
    fecha    : '2023-03-10T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 39575032,
    idProceso: [
      121826111
    ],
    llaveProceso: '25307400300320210053900',
    numero      : 480,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345479f3',
    capitalAdeudado: 27373832,
    demanda        : {
      ciudad                 : 'CHIA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 3,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-003-civil-municipal-de-chia'
        }
      ],
      obligacion: [
        'AUDIOPRESTAMO',
        5491570347356810
      ],
      radicado         : '2018 - 00602',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 13222728,
      direccion      : 'CARRERA 6 No 6-59',
      email          : 'mopadinco@yahoo.com',
      primerApellido : 'PINEDA',
      primerNombre   : 'MODESTO',
      segundoApellido: 'PEREZ',
      tel            : {
        celular: 0,
        fijo   : 8852490
      }
    },
    grupo    : 'Bancolombia',
    id       : 13222728,
    idProceso: [
      0
    ],
    llaveProceso: '25175408900320180060200',
    numero      : 496,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345479f7',
    capitalAdeudado: 15086199,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-16T00:00:00.000Z',
      etapaProcesal          : 'EJECUCION',
      juzgado                : [
        {
          id  : 6,
          tipo: 'Civil Municipal'
        },
        {
          id  : 17,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        68928057402,
        'AUDIOPRESTAMO'
      ],
      radicado         : '2018 - 00454',
      vencimientoPagare: '2020-05-27T00:00:00.000Z'
    },
    deudor: {
      cedula        : '900566964-9',
      direccion     : 'CARRERA 13 No 73-33',
      primerApellido: 'S.A.S',
      primerNombre  : 'SMARTITECH',
      tel           : {
        celular: 0,
        fijo   : 3849696
      }
    },
    fecha    : '2023-04-10T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : null,
    idProceso: [
      51154840,
      0
    ],
    idProcesos: [
      51154840
    ],
    llaveProceso: '11001400300620180045400',
    numero      : 500,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345479f9',
    capitalAdeudado: 10930100,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-12-10T05:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 16,
          tipo: ' Pequeñas Causas y Competencias Multiples'
        },
        {
          id  : 2,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        4594260107010410
      ],
      radicado         : '2019 - 01085',
      vencimientoPagare: '2021-05-01T05:00:00.000Z'
    },
    deudor: {
      cedula         : 1023861016,
      direccion      : 'TRANSVERSAL 70G SUR-68-52 TORRE 18 APARTAMENTO 1401',
      email          : 'Anrf1985@hotmail.com',
      primerApellido : 'ROZO',
      primerNombre   : 'ANGELICA',
      segundoApellido: 'FRANCO',
      segundoNombre  : 'NATHALY',
      tel            : {
        celular: 0,
        fijo   : 6594339
      }
    },
    fecha    : '2023-02-28T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 1023861016,
    idProceso: [
      86958040
    ],
    llaveProceso: '11001418901620190108500',
    numero      : 502,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d793345479ff',
    capitalAdeudado: 29416113,
    demanda        : {
      ciudad                 : 'LA CALERA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: null,
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 1,
          tipo: 'Promiscuo Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-01-promiscuo-municipal-de-la-calera'
        }
      ],
      obligacion: [
        2490084469
      ],
      radicado         : '2018 - 00371',
      vencimientoPagare: '2026-01-03T05:00:00.000Z'
    },
    deudor: {
      cedula         : 11230400,
      direccion      : 'CALLE 2 A No 5-22 APTO 503',
      email          : 'joalvato09@hotmail.com',
      primerApellido : 'VASQUEZ',
      primerNombre   : 'JOSE',
      segundoApellido: 'TOVAR',
      segundoNombre  : 'ALFONSO',
      tel            : {
        celular: 3123703828,
        fijo   : 0
      }
    },
    grupo    : 'Bancolombia',
    id       : 11230400,
    idProceso: [
      0
    ],
    llaveProceso: '25377408900120180037100',
    numero      : 508,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a15',
    capitalAdeudado: 14409411,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-21T00:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 81,
          tipo: 'Civil Municipal'
        },
        {
          id  : 1,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        40998833882814000,
        5303729887314280
      ],
      radicado         : '2018 - 00514',
      vencimientoPagare: '2020-10-05T00:00:00.000Z'
    },
    deudor: {
      cedula         : 35455606,
      direccion      : 'CALLE 175 No 70-40',
      email          : 'mariaclarareyes@hotmail.com',
      primerApellido : 'REYES',
      primerNombre   : 'MARIA',
      segundoApellido: 'REYES',
      segundoNombre  : 'CLARA',
      tel            : {
        celular: 0,
        fijo   : 60991181
      }
    },
    fecha    : '2023-03-14T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 35455606,
    idProceso: [
      51918470
    ],
    llaveProceso: '11001400308120180051400',
    numero      : 530,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a17',
    capitalAdeudado: 15324570,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2020-09-05T00:00:00.000Z',
      etapaProcesal          : 'CONTESTACIÓN DEMANDA',
      juzgado                : [
        {
          id  : 5068,
          tipo: ' Pequeñas Causas y Competencias Multiples/ Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-068-civil-municipal-de-bogota'
        }
      ],
      obligacion: [
        65886140334,
        4594260446916180
      ],
      radicado         : '2020-1021',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 900520023,
      direccion      : 'AV BOYACA 63D - 26 OFICINA 103',
      primerApellido : 'COLOMBIA',
      primerNombre   : 'DIMOIN',
      segundoApellido: 'S.A.S.',
      tel            : {
        celular: 0,
        fijo   : 0
      }
    },
    fecha    : '2023-07-27T05:00:00.000Z',
    grupo    : 'Bancolombia',
    id       : 900520023,
    idProceso: [
      112628300
    ],
    llaveProceso: '11001400306820200102100',
    numero      : 532,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a22',
    capitalAdeudado: 24849682,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-10-10T05:00:00.000Z',
      etapaProcesal          : 'EJECUCIÓN',
      juzgado                : [
        {
          id  : 12,
          tipo: ' Pequeñas Causas y Competencias Multiples'
        },
        {
          id  : 11,
          tipo: 'Civil Municipal de Ejecucion'
        }
      ],
      obligacion: [
        3880083804,
        '4513074508682496 // 53037103332223839'
      ],
      radicado         : '2018 - 00951',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 51579807,
      direccion      : 'CALLE 19 A No 82 - 65 INT 6 APTO 503',
      email          : 'rochi2656@hotmail.com',
      primerApellido : '',
      primerNombre   : 'ROSALIA',
      segundoApellido: 'SARMIENTO',
      segundoNombre  : 'CHARRY',
      tel            : {
        celular: 0,
        fijo   : 2943968
      }
    },
    fecha    : '2023-05-15T05:00:00.000Z',
    grupo    : 'Reintegra',
    id       : 51579807,
    idProceso: [
      64673240
    ],
    llaveProceso: '11001418901220180095100',
    numero      : 543,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a2a',
    capitalAdeudado: 28018855,
    demanda        : {
      ciudad                 : 'FUSAGASUGA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-06-20T00:00:00.000Z',
      juzgado                : [
        {
          id  : 3,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-003-civil-municipal-de-fusagasuga'
        }
      ],
      obligacion: [
        2640096179
      ],
      radicado         : '2023 - 00371',
      vencimientoPagare: '2028-03-08T00:00:00.000Z'
    },
    deudor: {
      cedula         : 1075211773,
      direccion      : 'KR 1 2 41 Fusagasugá',
      email          : 'jonathansoldier@hotmail.com',
      primerApellido : 'RAMIREZ',
      primerNombre   : 'PEDRO',
      segundoApellido: 'GOMEZ',
      segundoNombre  : 'JONATHAN',
      tel            : {
        celular: 0,
        fijo   : 0
      }
    },
    grupo      : 'Bancolombia',
    id         : 1075211773,
    numero     : 551,
    tipoProceso: 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a2b',
    capitalAdeudado: 77376262,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-06-20T00:00:00.000Z',
      juzgado                : [
        {
          id  : 4,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-04-civil-municipal-de-bogota'
        }
      ],
      obligacion: [
        530104065,
        530103261
      ],
      radicado         : '2023 - 00622',
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 1023874668,
      direccion      : 'CL 49 A BIS SUR No. 5 N 10',
      email          : 'oscar2794@hotmail.com',
      primerApellido : 'GOMEZ',
      primerNombre   : 'OSCAR',
      segundoApellido: 'MENDOZA',
      segundoNombre  : 'MAURICIO',
      tel            : {
        celular: 0,
        fijo   : 2043773
      }
    },
    fecha    : '2023-08-01T05:00:00.000Z',
    grupo    : 'Bancolombia',
    id       : 1023874668,
    idProceso: [
      130946630
    ],
    llaveProceso: '11001400300420230062200',
    numero      : 552,
    tipoProceso : 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a2d',
    capitalAdeudado: 22111021,
    demanda        : {
      ciudad                 : 'BOGOTA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26T00:00:00.000Z',
      juzgado                : [],
      obligacion             : [
        2150100545,
        '377844028390801 y 4513080181283486'
      ],
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 51976656,
      direccion      : 'Carrera 102 No. 69 - 81 Casa 5 Conjunto Residencial Montes de Tierra Grata',
      email          : 'sandris73@hotmail.com',
      primerApellido : 'ALVAREZ',
      primerNombre   : 'SANDRA',
      segundoApellido: 'RODRIGUEZ',
      segundoNombre  : 'PATRICIA',
      tel            : {
        celular: 3157352910,
        fijo   : 2297973
      }
    },
    grupo      : 'Bancolombia',
    id         : 51976656,
    numero     : 554,
    tipoProceso: 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a33',
    capitalAdeudado: 40696764,
    demanda        : {
      ciudad                 : 'BARRAQNUILLA',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26T00:00:00.000Z',
      juzgado                : [],
      obligacion             : [
        4770111750,
        'PAGARÉ SIN NÚMERO T. MASTER CARD 5303720229555616 // T. VISA 4513070377907980'
      ],
      vencimientoPagare: null
    },
    deudor: {
      cedula         : 1129565798,
      direccion      : 'CR 51 43 04 Barrio Abajo Barranquilla // Carrera 71 No. 88A - 31 Barranquilla // Calle 42 A No. 46 - 04 Barrio El Parque en Soledad (Atlantico)',
      email          : 'inghanselmartinez@hotmail.com',
      primerApellido : 'MARTINEZ',
      primerNombre   : 'HANSEL',
      segundoApellido: 'BARROS',
      tel            : {
        celular: null,
        fijo   : 3930210
      }
    },
    grupo      : 'Bancolombia',
    id         : 1129565798,
    numero     : 560,
    tipoProceso: 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a38',
    capitalAdeudado: 0,
    demanda        : {
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26T00:00:00.000Z',
      juzgado                : [],
      vencimientoPagare      : null
    },
    deudor: {
      cedula         : 79399032,
      primerApellido : 'ABADIA',
      primerNombre   : 'JORGE',
      segundoApellido: 'CARRILLO',
      segundoNombre  : 'ALEXANDER',
      tel            : {
        celular: 0,
        fijo   : 0
      }
    },
    grupo      : 'Bancolombia',
    id         : 79399032,
    numero     : 565,
    tipoProceso: 'SINGULAR'
  },
  {
    _id            : '64cc10e7ea30d79334547a39',
    capitalAdeudado: 0,
    demanda        : {
      entregaGarantiasAbogado: null,
      juzgado                : [],
      vencimientoPagare      : null
    },
    deudor: {
      cedula         : 1061047348,
      primerApellido : 'PALACIO',
      primerNombre   : 'SANDRA',
      segundoApellido: 'RIVERA',
      segundoNombre  : 'MILENA',
      tel            : {
        celular: 0,
        fijo   : 0
      }
    },
    grupo : 'Bancolombia',
    id    : 1061047348,
    numero: 566
  }
];

const uri = 'mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority';

const carpetasCollection = async () => {
  const client = new mongodb_1.MongoClient(
    uri 
  );

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

// Replace the uri string with your MongoDB deployment's connection string.
const client = new mongodb_1.MongoClient(
  uri 
);

async function run() {
  try {
    const database = client.db(
      'RyS' 
    );

    // Specifying a schema is optional, but it enables type hints on
    // finds and inserts
    const foods = database.collection(
      'Carpetas' 
    );

    const result = await foods.insertMany(
      carpetas, {
        ordered: true
      } 
    );
    console.log(
      `${ result.insertedCount } documents were inserted` 
    );
  } finally {
    await client.close();
  }
}
run();
console.log(
  run() 
);
