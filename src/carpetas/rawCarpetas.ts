/* eslint-disable @typescript-eslint/no-unused-vars */

import * as fs from 'fs/promises';
import { IntCarpetaRaw } from '../types/raw-carpets';

export const carpetas: IntCarpetaRaw[] = [
  {
    _id   : '64cc10e7ea30d79334547819',
    numero: 22,
    id    : '80073174',
    deudor: {
      cedula        : 80073174,
      nombreCompleto: 'JOSE EDWIN GARCES ARDILA',
      tel           : {
        fijo   : '7978419',
        celular: ''
      },
      direccion:
        'CALLE 160 No. 58-75 TORRE 6 APTO 503 BOGOTA /// YOPAL CASANARE',
      primerNombre   : 'JOSE',
      segundoNombre  : 'EDWIN',
      primerApellido : 'GARCES',
      segundoApellido: 'ARDILA'
    },
    demanda: {
      vencimientoPagare: '2020-04-26',
      obligacion       : [
        2453698
      ],
      entregaGarantiasAbogado: '2017-05-11',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          id  : 85,
          tipo: 'Civil Municipal'
        },
        ejecucion: {
          id  : 11,
          tipo: 'Civil Municipal de Ejecucion'
        }
      },
      radicado      : '2017 - 00849',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        id  : 11,
        tipo: 'Civil Municipal de Ejecucion'
      }
    },
    capitalAdeudado: 29690679,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400308520170084900',
    grupo          : 'Reintegra',
    idProceso      : [
      51935790
    ],
    fecha: '2023-06-15T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547823',
    numero: 32,
    id    : '1022940572',
    deudor: {
      cedula: 1022940572,
      nombreCompleto:
        'JONATHAN ANDRES  BERNAL PARRA',
      tel: {
        fijo   : '',
        celular: '3134775602'
      },
      email: 'jhonannicky@hotmail.com',
      direccion:
        'CALLE 36 B SUR No. 11-25 APTO 1307 BOGOTA',
      primerNombre   : 'JONATHAN',
      segundoNombre  : 'ANDRES',
      primerApellido : '',
      segundoApellido: 'BERNAL PARRA '
    },
    demanda: {
      vencimientoPagare: '2028-08-01',
      obligacion       : [
        4280019446,
        '5406915580101610 4513077620518209//20990166568'
      ],
      obligacion2:
        '5406915580101610 4513077620518209//20990166568',
      entregaGarantiasAbogado: '2018-05-30',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '43'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '18'
        }
      },
      radicado      : '2018- 00384',
      etapaProcesal : 'EJECUCION',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '18'
      }
    },
    capitalAdeudado: 54812000,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400304320180038400',
    grupo          : 'Reintegra',
    idProceso      : [
      114256610
    ],
    fecha: '2023-04-27T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547826',
    numero: 35,
    id    : '7226201',
    deudor: {
      cedula: 7226201,
      nombreCompleto:
        'LUIS CARLOS GUTIERREZ VELANDIA',
      tel: {
        fijo   : '',
        celular: '3106199094'
      },
      email: 'luiscagv@yahoo.com',
      direccion:
        'CARRERA 33 No. 1 H-86 DUITAMA (BOYACÁ)',
      primerNombre   : 'LUIS',
      segundoNombre  : 'CARLOS',
      primerApellido : 'GUTIERREZ',
      segundoApellido: 'VELANDIA'
    },
    demanda: {
      vencimientoPagare: '2016-09-16',
      obligacion       : [
        5303722385820750,
        'AUTOPRESTAMO'
      ],
      obligacion2            : 'AUTOPRESTAMO',
      entregaGarantiasAbogado: '2017-05-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '26'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '3'
        }
      },
      radicado      : '2017-00511',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '3'
      }
    },
    capitalAdeudado: 26464177,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400302620170051100',
    grupo          : 'Reintegra',
    idProceso      : [
      50477000
    ],
    fecha: '2023-04-13T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454782d',
    numero: 42,
    id    : '1072421639',
    deudor: {
      cedula: 1072421639,
      nombreCompleto:
        'JUAN DANIEL MORENO CIFUENTES',
      tel: {
        fijo   : '',
        celular: '3126139284'
      },
      email: 'jdanielmoreno87@hotmail.com',
      direccion:
        'BARRIO SANTA ANA FC LA CAMPIÑA ANAPOIMA',
      primerNombre   : 'JUAN',
      segundoNombre  : 'DANIEL',
      primerApellido : 'MORENO',
      segundoApellido: 'CIFUENTES'
    },
    demanda: {
      obligacion: [
        3840082880
      ],
      entregaGarantiasAbogado: '2017-05-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'ANAPOIMA',
      juzgado                : {
        origen: {
          id  : 1,
          tipo: ' PM'
        },

      },
      radicado      : '2017 - 00108',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        id  : 1,
        tipo: ' PM'
      }
    },
    capitalAdeudado: 12956286,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25035408900120170010800',
    grupo          : 'Reintegra',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547831',
    numero: 46,
    id    : '11251297',
    deudor: {
      cedula        : 11251297,
      nombreCompleto: 'ALVARO RODRIGUEZ ALONSO',
      tel           : {
        fijo   : '',
        celular: '3166182970'
      },
      email: 'alvaro.r@live.com',
      direccion:
        'Carrera 2B No.14-04 BARRIO VILLA ALEJANDRA CHOCONTA',
      primerNombre   : 'ALVARO',
      primerApellido : 'RODRIGUEZ',
      segundoApellido: 'ALONSO'
    },
    demanda: {
      vencimientoPagare:
        '18/04/2020 // 04/05/2020',
      obligacion: [
        53037139326557900,
        4099839496308260
      ],
      obligacion2            : 4099839496308260,
      entregaGarantiasAbogado: '2017-05-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'CHOCONTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '001'
        },

      },
      radicado      : '2017-00106',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '001'
      }
    },
    capitalAdeudado: 12537973,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '25183400300120170010600',
    grupo          : 'Reintegra',
    idProceso      : [
      86212261
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547832',
    numero: 47,
    id    : '52129551',
    deudor: {
      cedula        : 52129551,
      nombreCompleto: 'ANA RITA GUZMAN GOMEZ',
      tel           : {
        fijo   : '',
        celular: '32291500487'
      },
      direccion      : 'CALLE 61 J No. 17D - 55 Sur',
      primerNombre   : 'ANA',
      segundoNombre  : 'RITA',
      primerApellido : 'GUZMAN',
      segundoApellido: 'GOMEZ'
    },
    demanda: {
      vencimientoPagare: '2019-09-22',
      obligacion       : [
        '377816034633036//45130802058774831',
        53003720132046710
      ],
      obligacion2            : 53003720132046710,
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '6'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '13'
        }
      },
      radicado      : '2017-00302',
      etapaProcesal : 'EJECUCION',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '13'
      }
    },
    capitalAdeudado: 21530598,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300620170030200',
    grupo          : 'Reintegra',
    idProceso      : [
      50521190
    ],
    fecha: '2023-06-26T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454783d',
    numero: 58,
    id    : '14273737',
    deudor: {
      cedula        : 14273737,
      nombreCompleto: 'JOSÉ URIEL PAEREZ PERDOMO',
      tel           : {
        fijo   : '4183276 ',
        celular: '3228293322'
      },
      email          : 'lejopaerez@hotmail.com',
      direccion      : 'CALLE 23 D No.107-32 BOGOTA',
      primerNombre   : 'JOSÉ',
      segundoNombre  : 'URIEL',
      primerApellido : 'PAEREZ',
      segundoApellido: 'PERDOMO'
    },
    demanda: {
      obligacion: [
        '5820083643//377816164971529',
        '4513080225477441//5303720124048311'
      ],
      obligacion2:
        '4513080225477441//5303720124048311',
      entregaGarantiasAbogado: '2017-06-08',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '42'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '10'
        }
      },
      radicado      : '2017-00760',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '10'
      }
    },
    capitalAdeudado: 96125453,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400304220170076000',
    grupo          : 'Reintegra',
    idProceso      : [
      50517060
    ],
    fecha: '2023-06-23T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547843',
    numero: 64,
    id    : '79891952',
    deudor: {
      cedula: 79891952,
      nombreCompleto:
        'RAFAEL ERNESTO CADENA PARGA',
      tel: {
        fijo   : '3157900 ',
        celular: '3157900006'
      },
      email: 'rafael.cadena@signsas.com',
      direccion:
        'CARRERA 13 A No. 150-25 INT 3 APTO 203',
      primerNombre   : 'RAFAEL',
      segundoNombre  : 'ERNESTO',
      primerApellido : 'CADENA',
      segundoApellido: 'PARGA'
    },
    demanda: {
      vencimientoPagare: '2017-10-22',
      obligacion       : [
        125348220
      ],
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '29'
        },

      },
      radicado      : '2017 - 00557',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '29'
      }
    },
    capitalAdeudado: 32926699,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400302920170055700',
    grupo          : 'Insolvencia',
    idProceso      : [
      50517510
    ],
    fecha: '2018-02-22T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547857',
    numero: 84,
    id    : '79108747',
    deudor: {
      cedula        : 79108747,
      nombreCompleto: 'EDGAR HERNANDEZ RUBIO',
      tel           : {
        fijo   : '8054434 ',
        celular: '3118802970'
      },
      email: 'edgarH62@hotmail.com',
      direccion:
        'CARRERA 17 A No. 175-82 INTERIOR 1 PTO 601',
      primerNombre   : 'EDGAR',
      primerApellido : 'HERNANDEZ',
      segundoApellido: 'RUBIO'
    },
    demanda: {
      vencimientoPagare: '2019-11-05',
      obligacion       : [
        377815178176828,
        53037234659826290
      ],
      obligacion2            : 53037234659826290,
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '39'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '14'
        }
      },
      radicado      : '2017-00800',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '14'
      }
    },
    capitalAdeudado: 12128189,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400303920170080000',
    grupo          : 'Reintegra',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d7933454785d',
    numero: 90,
    id    : '1032432802',
    deudor: {
      cedula: 1032432802,
      nombreCompleto:
        'LUIS ESNEIDER ORDUZ FARFAN',
      tel: {
        fijo   : '4712921',
        celular: ''
      },
      email          : 'orduzcrit2@hotmail.com',
      direccion      : 'CARRERA 95 # 138 - 58',
      primerNombre   : 'LUIS',
      segundoNombre  : 'ESNEIDER',
      primerApellido : 'ORDUZ',
      segundoApellido: 'FARFAN'
    },
    demanda: {
      vencimientoPagare: '2020-06-09',
      obligacion       : [
        12330030
      ],
      entregaGarantiasAbogado: '1899-12-30',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-34-civil-municipal-de-bogota',
          id  : '34'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-12-de-ejecucion-civil-municipal-de-bogota',
          id  : '12'
        }
      },
      radicado      : '2017 - 00836',
      etapaProcesal : 'EJECUCION',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-12-de-ejecucion-civil-municipal-de-bogota',
        id  : '12'
      }
    },
    capitalAdeudado: 26515333,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400303420170083600',
    grupo          : 'Bancolombia',
    idProceso      : [
      50521480,
      81728891
    ],
    fecha     : '2023-07-24T05:00:00.000Z',
    idProcesos: [
      50521480
    ]
  },
  {
    _id   : '64cc10e7ea30d7933454786a',
    numero: 103,
    id    : '16831314',
    deudor: {
      cedula: 16831314,
      nombreCompleto:
        'EDUARDO ENRIQUE ARANGO CHACON',
      tel: {
        fijo   : '',
        celular: '3216066052'
      },
      email          : 'kikearango@hotmail.com',
      direccion      : 'CARRERA 74 No. 25 G-69',
      primerNombre   : 'EDUARDO',
      segundoNombre  : 'ENRIQUE',
      primerApellido : 'ARANGO',
      segundoApellido: 'CHACON'
    },
    demanda: {
      vencimientoPagare: '2019-05-13',
      obligacion       : [
        '1800088189//377813488630162',
        '4513071987853655//5303715363121332'
      ],
      obligacion2:
        '4513071987853655//5303715363121332',
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal/Civil Municipal',
          id  : '826'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '18'
        }
      },
      radicado      : '2017-00680',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '18'
      }
    },
    capitalAdeudado: 43921469,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400308220170068000',
    grupo          : 'Reintegra',
    idProceso      : [
      51619370,
      81869501
    ],
    fecha     : '2023-05-11T05:00:00.000Z',
    idProcesos: [
      51619370
    ]
  },
  {
    _id   : '64cc10e7ea30d7933454786d',
    numero: 106,
    id    : '501492',
    deudor: {
      cedula        : 501492,
      nombreCompleto: 'DANIEL HERNANDEZ GONZALEZ',
      tel           : {
        fijo   : '2716567',
        celular: ''
      },
      email          : 'danielher84@gmail.com',
      direccion      : 'CALLE 134 No. 58-58',
      primerNombre   : 'DANIEL',
      primerApellido : 'HERNANDEZ',
      segundoApellido: 'GONZALEZ'
    },
    demanda: {
      vencimientoPagare: '2018-08-28',
      obligacion       : [
        12515504
      ],
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '59'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '15'
        }
      },
      radicado      : '2017 - 00483',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '15'
      }
    },
    capitalAdeudado: 16497281,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400305920170048300',
    grupo          : 'Reintegra',
    idProceso      : [
      50514310
    ],
    fecha: '2023-02-27T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454786f',
    numero: 108,
    id    : '79558732',
    deudor: {
      cedula: 79558732,
      nombreCompleto:
        'MIGUEL ANGEL HUERTAS VALENCIA',
      tel: {
        fijo   : '2723136',
        celular: ''
      },
      email          : 'miguelangelhuertasv@hotmail.com',
      direccion      : 'TRANVERSAL 15A # 31-09 SUR',
      primerNombre   : 'MIGUEL',
      segundoNombre  : 'ANGEL',
      primerApellido : 'HUERTAS',
      segundoApellido: 'VALENCIA'
    },
    demanda: {
      vencimientoPagare: '2020-06-07',
      obligacion       : [
        12455661,
        '12657330//12748966'
      ],
      obligacion2            : '12657330//12748966',
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: ' CC',
          id  : '25'
        },
        ejecucion: {
          tipo: ' C CTO E',
          id  : '2'
        }
      },
      radicado      : '2017 - 00736',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: ' C CTO E',
        id  : '2'
      }
    },
    capitalAdeudado: 211610991,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001310302520170073600',
    grupo          : 'Reintegra',
    idProceso      : [
      28937944
    ],
    fecha: '2023-06-30T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454789d',
    numero: 154,
    id    : '79840930',
    deudor: {
      cedula: 79840930,
      nombreCompleto:
        'GABRIEL EDUARDO MEJIA LADINO',

      email: 'gabriel.eml@hotmail.com',
      direccion:
        'CARRERA 79 BIS A # 73 - 92 SUR APTO 304 INT 3',
      primerNombre   : 'GABRIEL',
      segundoNombre  : 'EDUARDO',
      primerApellido : 'MEJIA',
      segundoApellido: 'LADINO'
    },
    demanda: {
      vencimientoPagare:
      '21/02/2018 // 26/10/20247',
      obligacion: [
        5670083032,
        '377813199287708 // 4513075700372455 // 123470'
      ],
      obligacion2:
      '377813199287708 // 4513075700372455 // 123470',
      entregaGarantiasAbogado: '2017-08-23',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '36'
        },

      },
      radicado      : '2017 - 00841',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '36'
      }
    },

    capitalAdeudado: 29366625,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400303620170084100',
    grupo          : 'LiosJuridicos',
    idProceso      : [
      50688820
    ],
    fecha: '2023-07-10T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345478a8',
    numero: 165,
    id    : '86057132',
    deudor: {
      cedula        : 86057132,
      nombreCompleto: 'FREDY MENESES',
      tel           : {
        fijo   : '4088069 ',
        celular: '3125312823'
      },
      email         : 'imagenfmr@yahoo.com',
      direccion     : 'Carrera 40 D No. 1H-28',
      primerNombre  : 'FREDY',
      primerApellido: 'MENESES'
    },
    demanda: {
      vencimientoPagare: '2019-08-18',
      obligacion       : [
        2310089458,
        '4513088545588847// AUDIO PRESTAMO'
      ],
      obligacion2:
        '4513088545588847// AUDIO PRESTAMO',
      entregaGarantiasAbogado: '2017-07-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '76'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '4'
        }
      },
      radicado      : '2017 - 00635',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '4'
      }
    },
    capitalAdeudado: 44742148,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400307620170063500',
    grupo          : 'Reintegra',
    idProceso      : [
      51497380
    ],
    fecha: '2023-05-31T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345478b1',
    numero: 174,
    id    : '52189873',
    deudor: {
      cedula: 52189873,
      nombreCompleto:
        'DARNELLY HERNANDEZ MARTINEZ',
      tel: {
        fijo   : '4530972 ',
        celular: '3144189224'
      },
      email          : 'darnelly-74@hotmail.com',
      direccion      : 'CALLE 74G # 80 - 58 SUR',
      primerNombre   : 'DARNELLY',
      primerApellido : 'HERNANDEZ',
      segundoApellido: 'MARTINEZ'
    },
    demanda: {
      vencimientoPagare: '2026-03-10',
      obligacion       : [
        136962
      ],
      entregaGarantiasAbogado: '2017-08-22',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-25-civil-municipal-de-bogota',
          id  : '25'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-18-de-ejecucion-civil-municipal-de-bogota',
          id  : '18'
        }
      },
      radicado      : '2017 - 00903',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-18-de-ejecucion-civil-municipal-de-bogota',
        id  : '18'
      }
    },
    capitalAdeudado: 14795921,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400302520170090300',
    grupo          : 'Bancolombia',
    idProceso      : [
      112048180
    ],
    fecha: '2023-07-25T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345478b6',
    numero: 179,
    id    : '12254068',
    deudor: {
      cedula        : 12254068,
      nombreCompleto: 'GUILLERMO GONZALEZ TAGUA',
      tel           : {
        fijo   : '5642974 ',
        celular: '3218180993'
      },
      email:
        'guillermogonzalez_tagua@hotmail.com',
      direccion      : 'CARRERA 30 No.68 J-08 SUR',
      primerNombre   : 'GUILLERMO',
      primerApellido : 'GONZALEZ',
      segundoApellido: 'TAGUA'
    },
    demanda: {
      vencimientoPagare: '2019-11-02',
      obligacion       : [
        5670085162
      ],
      entregaGarantiasAbogado: '2017-08-01',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '11'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '2'
        }
      },
      radicado      : '2017 - 01084',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '2'
      }
    },
    capitalAdeudado: 12687427,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400301120170108400',
    grupo          : 'Reintegra',
    idProceso      : [
      50760030
    ],
    fecha: '2023-07-26T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345478ba',
    numero: 183,
    id    : '11185630',
    deudor: {
      cedula: 11185630,
      nombreCompleto:
        'WILSON ALFONSO JIMENEZ MENDIETA',
      tel: {
        fijo   : '5714329',
        celular: ''
      },
      email          : 'grupocomerciallasabana@hotmail.com',
      direccion      : 'CARRERA 81C # 2B - 80 PISO 2',
      primerNombre   : 'WILSON',
      segundoNombre  : 'ALFONSO',
      primerApellido : 'JIMENEZ',
      segundoApellido: 'MENDIETA'
    },
    demanda: {
      vencimientoPagare: '2019-11-03',
      obligacion       : [
        2150091504
      ],
      entregaGarantiasAbogado: '2017-08-01',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-01-civil-municipal-de-bogota',
          id  : '1'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-17-de-ejecucion-civil-municipal-de-bogota',
          id  : '17'
        }
      },
      radicado      : '2017 - 01001',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-17-de-ejecucion-civil-municipal-de-bogota',
        id  : '17'
      }
    },
    capitalAdeudado: 25833335,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300120170100100',
    grupo          : 'Bancolombia',
    idProceso      : [
      50621670
    ],
    fecha: '2023-07-17T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345478bb',
    numero: 184,
    id    : '17650971',
    deudor: {
      cedula        : 17650971,
      nombreCompleto: 'JUAN CARLOS TOVAR TOLEDO',
      tel           : {
        fijo   : '83107389',
        celular: ''
      },
      direccion      : 'CARRERA 86 # 69 H - 40',
      primerNombre   : 'JUAN',
      segundoNombre  : 'CARLOS',
      primerApellido : 'TOVAR',
      segundoApellido: 'TOLEDO'
    },
    demanda: {
      vencimientoPagare: '2021-12-15',
      obligacion       : [
        8470081213
      ],
      entregaGarantiasAbogado: '2017-08-01',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '25'
        },

      },
      radicado: '2017 - 00807',
      etapaProcesal:
        'DESIGNACIÓN CURADOR AD LITEM',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '25'
      }
    },
    capitalAdeudado: 22277206,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400302520170080700',
    grupo          : 'Reintegra',
    idProceso      : [
      50623380,
      0
    ],
    fecha     : '2023-06-21T05:00:00.000Z',
    idProcesos: [
      50623380
    ]
  },
  {
    _id   : '64cc10e7ea30d793345478cc',
    numero: 201,
    id    : '51733931',
    deudor: {
      cedula: 51733931,
      nombreCompleto:
        'PIEDAD MARITZA OLGA ROCIO PRIETO VARGAS',
      tel: {
        fijo   : '6256456 ',
        celular: '3108711046'
      },
      email:
        'sebantialbeltransprieto@hotmail.com',
      direccion      : 'CALLE 127D # 21 - 80 APTO 105',
      primerNombre   : 'PIEDAD',
      segundoNombre  : 'MARITZA OLGA ',
      primerApellido : 'ROCIO',
      segundoApellido: 'PRIETO VARGAS '
    },
    demanda: {
      vencimientoPagare:
        '16/11/2019 // 6/03/2020',
      obligacion: [
        377816483778266,
        4513080485378479
      ],
      obligacion2            : 4513080485378479,
      entregaGarantiasAbogado: '2017-08-23',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal/ Civil Municipal',
          id  : '7940'
        },

      },
      radicado      : '2017 - 01142',
      despachoActivo: {
        tipo: 'Civil Municipal/ Civil Municipal',
        id  : '7940'
      }
    },
    capitalAdeudado: 27602952,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400307920170114200',
    grupo          : 'Insolvencia',
    idProceso      : [
      128433271
    ],
    fecha: '2023-06-05T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345478cf',
    numero: 204,
    id    : '46679232',
    deudor: {
      cedula        : 46679232,
      nombreCompleto: 'FLOR ESPERANZA GUTIERREZ',
      tel           : {
        fijo   : '5754502',
        celular: ''
      },
      email          : 'carito220@hotmail.es',
      direccion      : 'CARRERA 34 # 9 - 60',
      primerNombre   : 'FLOR',
      primerApellido : 'ESPERANZA',
      segundoApellido: 'GUTIERREZ'
    },
    demanda: {
      vencimientoPagare: '2020-08-23',
      obligacion       : [
        12743098
      ],
      entregaGarantiasAbogado: '2017-08-28',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '45'
        },

      },
      radicado      : '2017 - 01063',
      etapaProcesal : 'EJECUCION',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '45'
      }
    },
    capitalAdeudado: 41990538,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400304520170106300',
    grupo          : 'Reintegra',
    idProceso      : [
      110120573
    ],
    fecha: '2023-03-07T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345478d0',
    numero: 205,
    id    : '51856244',
    deudor: {
      cedula: 51856244,
      nombreCompleto:
        'NELIDA DEL CARMEN RIVERA MESA',
      tel: {
        fijo   : '7616370 ',
        celular: '3143313269'
      },
      direccion:
        'CARRERA 2A BIS A ESTE # 89A  SUR',
      primerNombre   : 'NELIDA',
      segundoNombre  : 'DEL',
      primerApellido : 'CARMEN',
      segundoApellido: 'RIVERA MESA '
    },
    demanda: {
      vencimientoPagare: '2021-09-09',
      obligacion       : [
        430103841
      ],
      entregaGarantiasAbogado: '2017-08-22',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '12'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '15'
        }
      },
      radicado: '2017 - 00971',
      etapaProcesal:
        'EJECUCIÓN SOLICITAR LIQUIDACIÓN A REINTEGRA',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '15'
      }
    },
    capitalAdeudado: 14068639,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400301220170097100',
    grupo          : 'Reintegra',
    idProceso      : [
      50669130
    ],
    fecha: '2022-03-17T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345478d3',
    numero: 208,
    id    : '80357801',
    deudor: {
      cedula         : 80357801,
      nombreCompleto : 'JEOVANY ROJAS CRUZ',
      email          : 'jeovanyrojas@outlook.com',
      direccion      : 'CALLE 34 # 1A - 40 CASA 247',
      primerNombre   : 'JEOVANY',
      primerApellido : 'ROJAS',
      segundoApellido: 'CRUZ',

    },
    demanda: {
      vencimientoPagare: '2020-08-15',
      obligacion       : [
        12725973
      ],
      entregaGarantiasAbogado: '2017-08-22',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'SOACHA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '2'
        },

      },
      radicado      : '2017 - 00265',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '2'
      }
    },
    capitalAdeudado: 27819415,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '25754400300220170026500',
    grupo          : 'Reintegra',
    idProceso      : [
      86374941
    ]
  },
  {
    _id   : '64cc10e7ea30d793345478d4',
    numero: 209,
    id    : '79852094',
    deudor: {
      cedula        : 79852094,
      nombreCompleto: 'CESAR ALFONSO UMAÑA CAÑON',
      tel           : {
        fijo   : '31006108',
        celular: '3212406004'
      },
      email          : 'cesa861@hotmail.com',
      direccion      : 'CARRERA 68M # 37D - 47 SUR',
      primerNombre   : 'CESAR',
      segundoNombre  : 'ALFONSO',
      primerApellido : 'UMAÑA',
      segundoApellido: 'CAÑON'
    },
    demanda: {
      vencimientoPagare: '2020-08-31',
      obligacion       : [
        2170085697,
        '377813567054276 // 451377194627824 // 5303710806169667 // 5306726083237084 // AUDIOPRESTAMO'
      ],
      obligacion2:
        '377813567054276 // 451377194627824 // 5303710806169667 // 5306726083237084 // AUDIOPRESTAMO',
      entregaGarantiasAbogado: '2017-08-22',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '64'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '7'
        }
      },
      radicado      : '2017 - 01191',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '7'
      }
    },
    capitalAdeudado: 54090336,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400306420170119100',
    grupo          : 'Reintegra',
    idProceso      : [
      50672820
    ],
    fecha: '2023-07-14T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345478e2',
    numero: 223,
    id    : '17174720',
    deudor: {
      cedula: 17174720,
      nombreCompleto:
        'GERARDO ANTONIO MONCADA VEGA',
      tel: {
        fijo   : '3349755 ',
        celular: '3153330306'
      },
      email          : 'gerardomoncada70@hotmail.com',
      direccion      : 'CALLE 159 # 15 - 45',
      primerNombre   : 'GERARDO',
      segundoNombre  : 'ANTONIO',
      primerApellido : 'MONCADA',
      segundoApellido: 'VEGA'
    },
    demanda: {
      vencimientoPagare:
        '18/04/2020  5/05/2020  15/12/2019',
      obligacion: [
        11903330957,
        '377816208286710 // 4513083951499464 // 5176407001878614 // 5303720129694960 // AUDIOPRESTAMO'
      ],
      obligacion2:
        '377816208286710 // 4513083951499464 // 5176407001878614 // 5303720129694960 // AUDIOPRESTAMO',
      entregaGarantiasAbogado: '2017-08-23',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '55'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '15'
        }
      },
      radicado      : '2017 - 00860',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '15'
      }
    },
    capitalAdeudado: 43653352,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400305520170086000',
    grupo          : 'Reintegra',
    idProceso      : [
      86524020
    ],
    fecha: '2023-08-03T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345478ec',
    numero: 233,
    id    : '11313124',
    deudor: {
      cedula        : 11313124,
      nombreCompleto: 'JOSE LUIS TORRES TAMAYO',
      tel           : {
        fijo   : '3138216 ',
        celular: '3138216786'
      },
      email: 'jotorres@perosnalsoft.com.co',
      direccion:
        'CALLE 145 # 46 - 13 APTO 202 INT 5',
      primerNombre   : 'JOSE',
      segundoNombre  : 'LUIS',
      primerApellido : 'TORRES',
      segundoApellido: 'TAMAYO'
    },
    demanda: {
      vencimientoPagare: '2020-08-24',
      obligacion       : [
        4099838997529750,
        '5303712728390736 // 12141636'
      ],
      obligacion2            : '5303712728390736 // 12141636',
      entregaGarantiasAbogado: '2017-08-29',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '28'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '16'
        }
      },
      radicado      : '2017 - 00849',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '16'
      }
    },
    capitalAdeudado: 30506109,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400302820170084900',
    grupo          : 'Reintegra',
    idProceso      : [
      50685700
    ],
    fecha: '2022-06-16T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345478ee',
    numero: 235,
    id    : '79853115',
    deudor: {
      cedula        : 79853115,
      nombreCompleto: 'FANOR DIAZ AGUDELO',
      tel           : {
        fijo   : '8060271 ',
        celular: '3212406193'
      },
      email: 'fanor.diaz@gmail.com',
      direccion:
        'DIAGONAL 56 BIS 84 A 10 SUR TR 1',
      primerNombre   : 'FANOR',
      primerApellido : 'DIAZ',
      segundoApellido: 'AGUDELO'
    },
    demanda: {
      vencimientoPagare: '2017-02-14',
      obligacion       : [
        148931
      ],
      entregaGarantiasAbogado: '2017-09-06',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-008-civil-municipal-de-bogota',
          id  : '8'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-06-de-ejecucion-civil-municipal-de-bogota',
          id  : '6'
        }
      },
      radicado      : '2017 - 01134',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-06-de-ejecucion-civil-municipal-de-bogota',
        id  : '6'
      }
    },
    capitalAdeudado: 27603821,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400300820170113400',
    grupo          : 'Bancolombia',
    idProceso      : [
      50716620
    ],
    fecha: '2023-07-27T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345478f2',
    numero: 239,
    id    : '53131901',
    deudor: {
      cedula: 53131901,
      nombreCompleto:
        'NIDIA JACQUELINE RIVEROS ARAQUE',

      direccion:
        'CARRERA 88C  63 SUR 67 TORRE 5 APARTAMENTO 1',
      primerNombre   : 'NIDIA',
      segundoNombre  : 'JACQUELINE',
      primerApellido : 'RIVEROS',
      segundoApellido: 'ARAQUE'
    },
    demanda: {
      obligacion: [
        20990135265
      ],
      entregaGarantiasAbogado: '2017-09-13',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '45'
        },

      },
      radicado      : '2017 - 01164',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '45'
      }
    },
    capitalAdeudado: 1788247698,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400304520170116400',
    grupo          : 'LiosJuridicos',
    idProceso      : [
      9877803
    ],
    fecha: '2023-06-20T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345478f6',
    numero: 243,
    id    : '300388244',
    deudor: {
      cedula: 300388244,
      nombreCompleto:
        'MARIA OLGA CASTAÑEDA PERUGACHI',
      tel: {
        fijo   : '1111111 ',
        celular: '32222239883 3143072762'
      },
      direccion      : 'CALLE 15 # 15 - 45',
      primerNombre   : 'MARIA',
      segundoNombre  : 'OLGA',
      primerApellido : 'CASTAÑEDA',
      segundoApellido: 'PERUGACHI'
    },
    demanda: {
      vencimientoPagare: '2020-08-11',
      obligacion       : [
        12577419
      ],
      entregaGarantiasAbogado: '2017-08-25',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal // Civil Municipal',
          id  : '6925'
        },

      },
      radicado: '2017 - 00845',
      etapaProcesal:
        'EN EJECUCIÓN LIQUIDACIÓN CREDITO SOLICITADA A COVINOC',
      despachoActivo: {
        tipo: 'Civil Municipal // Civil Municipal',
        id  : '6925'
      }
    },
    capitalAdeudado: 46109381,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400306920170084500',
    grupo          : 'Reintegra',
    idProceso      : [
      50675410
    ],
    fecha: '2023-07-17T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345478fc',
    numero: 249,
    id    : '19069228',
    deudor: {
      cedula: 19069228,
      nombreCompleto:
        'JORGE ALBERTO MARTINEZ BENDEK',
      tel: {
        fijo   : '6701643 ',
        celular: '3134749213'
      },
      email          : 'jorgemar24@gmail.com',
      direccion      : 'CARRERA 15 # 188 - 39',
      primerNombre   : 'JORGE',
      segundoNombre  : 'ALBERTO',
      primerApellido : 'MARTINEZ',
      segundoApellido: 'BENDEK'
    },
    demanda: {
      vencimientoPagare:
        '18/05/2020  5/05/2020  15/05/2019',
      obligacion: [
        377813517259835,
        '377814405234039 // 45130727777594186 // 5491572487025564 // AUDIOPRESTAMO'
      ],
      obligacion2:
        '377814405234039 // 45130727777594186 // 5491572487025564 // AUDIOPRESTAMO',
      entregaGarantiasAbogado: '2017-08-23',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '16'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '18'
        }
      },
      radicado      : '2017 - 00875',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '18'
      }
    },
    capitalAdeudado: 44933312,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400301620170087500',
    grupo          : 'Reintegra',
    idProceso      : [
      50687430
    ],
    fecha: '2023-05-16T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454791a',
    numero: 279,
    id    : '1069745324',
    deudor: {
      cedula: 1069745324,
      nombreCompleto:
        'ANDRES FELIPE GUTIERREZ TRUJILLO',
      tel: {
        fijo   : '',
        celular: '3115964170'
      },
      direccion:
        'CALLE 14A SUR # 11M - 18 CASA 22',
      primerNombre   : 'ANDRES',
      segundoNombre  : 'FELIPE',
      primerApellido : 'GUTIERREZ',
      segundoApellido: 'TRUJILLO'
    },
    demanda: {
      vencimientoPagare: '2020-12-07',
      obligacion       : [
        2330087057
      ],
      entregaGarantiasAbogado: '2017-08-25',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '8'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '1'
        }
      },
      radicado      : '2017 - 01058',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '1'
      }
    },
    capitalAdeudado: 14404721,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300820170105800',
    grupo          : 'Reintegra',
    idProceso      : [
      112758450
    ],
    fecha: '2022-07-21T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454791b',
    numero: 280,
    id    : '19447966',
    deudor: {
      cedula: 19447966,
      nombreCompleto:
        'JOSE HERNANDO SANCHEZ VALBUENA',
      tel: {
        fijo   : '4789274 ',
        celular: '3125826241'
      },
      email          : 'jhernandosanchez@yahoo.es',
      direccion      : 'CR 12B 24-37 SUR',
      primerNombre   : 'JOSE',
      segundoNombre  : 'HERNANDO',
      primerApellido : 'SANCHEZ',
      segundoApellido: 'VALBUENA'
    },
    demanda: {
      vencimientoPagare: '15/012021',
      obligacion       : [
        8920084662
      ],
      entregaGarantiasAbogado: '2017-09-11',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '9'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '18'
        }
      },
      radicado      : '2017 - 01279',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '18'
      }
    },
    capitalAdeudado: 11796195,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300920170127900',
    grupo          : 'Reintegra',
    idProceso      : [
      50875780
    ],
    fecha: '2022-01-26T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454791d',
    numero: 282,
    id    : '19255260',
    deudor: {
      cedula: 19255260,
      nombreCompleto:
        'MATIAS HUMBERTO AVILA AGUILAR',
      tel: {
        fijo   : '4170527 ',
        celular: '3125024008'
      },
      email          : 'maifren_13@yahoo.es',
      direccion      : 'CALLE 2 C No 62 - 20',
      primerNombre   : 'MATIAS',
      segundoNombre  : 'HUMBERTO',
      primerApellido : 'AVILA',
      segundoApellido: 'AGUILAR'
    },
    demanda: {
      vencimientoPagare: '5/05/2024',
      obligacion       : [
        174366
      ],
      entregaGarantiasAbogado: '21/09/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-015-civil-municipal-de-bogota',
          id  : '15'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-11-de-ejecucion-civil-municipal-de-bogota',
          id  : '11'
        }
      },
      radicado      : '2017 - 01394',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-11-de-ejecucion-civil-municipal-de-bogota',
        id  : '11'
      }
    },
    capitalAdeudado: 66362959,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400301520170139400',
    grupo          : 'Bancolombia',
    idProceso      : [
      50777890
    ],
    fecha: '2021-11-08T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547921',
    numero: 286,
    id    : '80259791',
    deudor: {
      cedula        : 80259791,
      nombreCompleto: 'ALIRIO HEREDIA BUITRAGO',
      tel           : {
        fijo   : '2796621',
        celular: ''
      },
      email          : 'gerencia.seguridadgf@gmail.com',
      direccion      : 'DIAGONAL 48 J No 5C- 34 SUR',
      primerNombre   : 'ALIRIO',
      primerApellido : 'HEREDIA',
      segundoApellido: 'BUITRAGO'
    },
    demanda: {
      vencimientoPagare: '2020-09-06',
      obligacion       : [
        12711612
      ],
      entregaGarantiasAbogado: '2017-09-11',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '17'
        },

      },
      radicado      : '2017 - 01195',
      etapaProcesal : 'CURADOR AD LITEM',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '17'
      }
    },
    capitalAdeudado: 94533343,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400301720170119500',
    grupo          : 'Reintegra',
    idProceso      : [
      50721470,
      127748331
    ],
    fecha     : '2023-07-10T05:00:00.000Z',
    idProcesos: [
      50721470
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547922',
    numero: 287,
    id    : '79861754',
    deudor: {
      cedula: 79861754,
      nombreCompleto:
        'CARLOS GERMAN RUGE CASTAÑEDA',
      tel: {
        fijo   : '6087374 ',
        celular: '3104865508'
      },
      email          : 'carlosgrugec@hotmail.com',
      direccion      : 'CALLE 72 A No  74 A - 77',
      primerNombre   : 'CARLOS',
      segundoNombre  : 'GERMAN',
      primerApellido : 'RUGE',
      segundoApellido: 'CASTAÑEDA'
    },
    demanda: {
      vencimientoPagare: '2020-09-29',
      obligacion       : [
        12592504
      ],
      entregaGarantiasAbogado: '2017-10-04',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal DESG / Civil Municipal',
          id  : '1650'
        },

      },
      radicado      : '2017 - 00157',
      despachoActivo: {
        tipo: 'Civil Municipal DESG / Civil Municipal',
        id  : '1650'
      }
    },
    capitalAdeudado: 44309785,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400301620170015700',
    grupo          : 'Insolvencia',
    idProceso      : [
      50242270
    ],
    fecha: '2022-08-11T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547924',
    numero: 289,
    id    : '12229243',
    deudor: {
      cedula: 12229243,
      nombreCompleto:
        'JOSE AHINSONJOBER TORO VARGAS',
      tel: {
        fijo   : '4651401',
        celular: ''
      },
      email          : 'serdiajo@gmail.com',
      direccion      : 'AVENIDA 1 DE MAYO No 29-06',
      primerNombre   : 'JOSE',
      segundoNombre  : 'AHINSONJOBER',
      primerApellido : 'TORO',
      segundoApellido: 'VARGAS'
    },
    demanda: {
      vencimientoPagare: '2020-03-22',
      obligacion       : [
        5306940432740470
      ],
      entregaGarantiasAbogado: '2017-09-11',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '18'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '16'
        }
      },
      radicado      : '2017 - 01522',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '16'
      }
    },
    capitalAdeudado: 14645611,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400301820170152200',
    grupo          : 'Reintegra',
    idProceso      : [
      50711570
    ],
    fecha: '2022-09-16T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454792a',
    numero: 295,
    id    : '36536419',
    deudor: {
      cedula: 36536419,
      nombreCompleto:
        'RITA CECILIA FERNANDEZ IBAÑEZ',
      tel: {
        fijo   : '2131020',
        celular: ''
      },
      direccion:
        'CALLE 124 No  20-76 APARTAMENTO 503',
      primerNombre   : 'RITA',
      segundoNombre  : 'CECILIA',
      primerApellido : 'FERNANDEZ',
      segundoApellido: 'IBAÑEZ'
    },
    demanda: {
      vencimientoPagare: '2020-09-12',
      obligacion       : [
        12389160
      ],
      entregaGarantiasAbogado: '2017-09-18',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '51'
        },

      },
      radicado: '2017 - 01113',
      etapaProcesal:
        'PENDIENTE SENTENCIA Y OFICIOS',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '51'
      }
    },
    capitalAdeudado: 25845669,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400305120170111300',
    grupo          : 'Reintegra',
    idProceso      : [
      110568033
    ],
    fecha: '2023-07-19T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454792c',
    numero: 297,
    id    : '6006685',
    deudor: {
      cedula: 6006685,
      nombreCompleto:
        'MIGUEL ANGEL MARTINEZ HUERTAS',
      tel: {
        fijo   : '',
        celular: '3123077900'
      },
      direccion      : 'CALLE 5 A No 6 - 23 UMBITA',
      primerNombre   : 'MIGUEL',
      segundoNombre  : 'ANGEL',
      primerApellido : 'MARTINEZ',
      segundoApellido: 'HUERTAS'
    },
    demanda: {
      vencimientoPagare: '10/07/2019',
      obligacion       : [
        5450082766,
        5450083252
      ],
      obligacion2            : 5450083252,
      entregaGarantiasAbogado: '21/09/2017',
      departamento           : 'BOYACÁ',
      ciudad                 : 'UMBITA',
      juzgado                : {
        origen: {
          tipo: ' PM',
          id  : '001'
        },

      },
      radicado      : '2017 - 00095',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: ' PM',
        id  : '001'
      }
    },
    capitalAdeudado: 28485816,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '15842408900120170009500',
    grupo          : 'Reintegra',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547939',
    numero: 310,
    id    : '79388145',
    deudor: {
      cedula: 79388145,
      nombreCompleto:
        'LIBARDO ALFONSO GONZALEZ TRIVIÑO',
      tel: {
        fijo   : '2928108',
        celular: ''
      },
      email          : 'li_bcar@hotmail.com',
      direccion      : 'CARRERA 72 A- No 9 - 44',
      primerNombre   : 'LIBARDO',
      segundoNombre  : 'ALFONSO',
      primerApellido : 'GONZALEZ',
      segundoApellido: 'TRIVIÑO'
    },
    demanda: {
      vencimientoPagare: '23/03/2020',
      obligacion       : [
        '1740086734 4513073749673967',
        5303719549810730
      ],
      obligacion2            : 5303719549810730,
      entregaGarantiasAbogado: '04/10/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-021-civil-municipal-de-bogota',
          id  : '21'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-15-de-ejecucion-civil-municipal-de-bogota',
          id  : '15'
        }
      },
      radicado      : '2017 - 01532',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-15-de-ejecucion-civil-municipal-de-bogota',
        id  : '15'
      }
    },
    capitalAdeudado: 40406421,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400302120170153200',
    grupo          : 'Bancolombia',
    idProceso      : [
      50769660,
      0
    ],
    fecha     : '2023-05-15T05:00:00.000Z',
    idProcesos: [
      50769660
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547955',
    numero: 338,
    id    : '20427976',
    deudor: {
      cedula: 20427976,
      nombreCompleto:
        'BLANCA MELBA MOYANO BELTRAN',
      tel: {
        fijo   : '3213718',
        celular: ''
      },
      direccion:
        'CARRERA 3 No 9 - 02 /08  CAPARRAPI (CUNDINAMARCA)',
      primerNombre   : 'BLANCA',
      segundoNombre  : 'MELBA',
      primerApellido : 'MOYANO',
      segundoApellido: 'BELTRAN'
    },
    demanda: {
      vencimientoPagare: '2020-04-01',
      obligacion       : [
        7910080245
      ],
      entregaGarantiasAbogado: '2017-09-21',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'CAPARRAPI',
      juzgado                : {
        origen: {
          tipo: ' PM',
          id  : '001'
        },

      },
      radicado      : '2017 - 00096',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: ' PM',
        id  : '001'
      }
    },
    capitalAdeudado: 42530688,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25148408900120170009600',
    grupo          : 'Reintegra',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d7933454795b',
    numero: 344,
    id    : '79505982',
    deudor: {
      cedula: 79505982,
      nombreCompleto:
        'LUIS AUGUSTO SANCHEZ ORTIZ',
      tel: {
        fijo   : '8003961 ',
        celular: '3174409073'
      },
      email: 'luissanchez69@live.com',
      direccion:
        'CALLE 168 No 8 G - 61 BLOQUE  5 APARTAMENTO  102',
      primerNombre   : 'LUIS',
      segundoNombre  : 'AUGUSTO',
      primerApellido : 'SANCHEZ',
      segundoApellido: 'ORTIZ'
    },
    demanda: {
      vencimientoPagare:
        '9/12/2019       5/03/2020',
      obligacion: [
        '377815565830854  4513071889404813',
        '5176409000345363    5306946666855816'
      ],
      obligacion2:
        '5176409000345363    5306946666855816',
      entregaGarantiasAbogado: '2017-09-29',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '33'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '2'
        }
      },
      radicado      : '2017 - 01474',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '2'
      }
    },
    capitalAdeudado: 19977436,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400303320170147400',
    grupo          : 'Reintegra',
    idProceso      : [
      50763460
    ],
    fecha: '2023-05-17T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454795f',
    numero: 348,
    id    : '41688661',
    deudor: {
      cedula: 41688661,
      nombreCompleto:
        'ANA BEATRIZ CORREDOR RIVERA',
      tel: {
        fijo   : '5101587 ',
        celular: '3106630177'
      },
      email: 'anabeatrizcorredor@yahoo.es',
      direccion:
        'CARRERA 8 No 190 - 22 Hoy Carrera 31 No. 190-04',
      primerNombre   : 'ANA',
      segundoNombre  : 'BEATRIZ',
      primerApellido : 'CORREDOR',
      segundoApellido: 'RIVERA'
    },
    demanda: {
      vencimientoPagare:
        '2/12/2021        3/09/2020',
      obligacion: [
        6260082762,
        377813367146983
      ],
      obligacion2            : 377813367146983,
      entregaGarantiasAbogado: '2017-09-28',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '1'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '10'
        }
      },
      radicado      : '2017 - 01309',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '10'
      }
    },
    capitalAdeudado: 76735593,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300120170130900',
    grupo          : 'Reintegra',
    idProceso      : [
      50764880
    ],
    fecha: '2023-08-01T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547963',
    numero: 352,
    id    : '71992491',
    deudor: {
      cedula: 71992491,
      nombreCompleto:
        'MARIO DE JESUS OSSA PULGARIN',
      tel: {
        fijo   : '7673180',
        celular: ''
      },
      direccion:
        'TRANSVERSAL 2 C BIS No 97 B-05 SUR',
      primerNombre   : 'MARIO',
      segundoNombre  : 'DE',
      primerApellido : 'JESUS',
      segundoApellido: 'OSSA PULGARIN '
    },
    demanda: {
      vencimientoPagare: '2019-05-20',
      obligacion       : [
        4280023383
      ],
      entregaGarantiasAbogado: '2017-09-29',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '76'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '17'
        }
      },
      radicado      : '2017 - 01016',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '17'
      }
    },
    capitalAdeudado: 11853652,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400307620170101600',
    grupo          : 'Reintegra',
    idProceso      : [
      51499790,
      0
    ],
    fecha     : '2023-06-27T05:00:00.000Z',
    idProcesos: [
      51499790
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547969',
    numero: 358,
    id    : '1116782267',
    deudor: {
      cedula: 1116782267,
      nombreCompleto:
        'JOGLI JOAQUIN OTERO VARGAS',
      tel: {
        fijo   : '',
        celular: '3005941798'
      },
      email          : 'juanotero1989@gmail.com',
      direccion      : 'DIAGONAL 2  No 79 F- 04',
      primerNombre   : 'JOGLI',
      segundoNombre  : 'JOAQUIN',
      primerApellido : 'OTERO',
      segundoApellido: 'VARGAS'
    },
    demanda: {
      vencimientoPagare: '2019-02-26',
      obligacion       : [
        3880082626
      ],
      entregaGarantiasAbogado: '2017-10-06',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '78'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '12'
        }
      },
      radicado      : '2017 - 00975',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '12'
      }
    },
    capitalAdeudado: 22130224,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400307820170097500',
    grupo          : 'Reintegra',
    idProceso      : [
      51465090
    ],
    fecha: '2023-05-04T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454796c',
    numero: 361,
    id    : '53064513',
    deudor: {
      cedula        : 53064513,
      nombreCompleto: 'NATALIA CUESTAS MONDRAGON',
      tel           : {
        fijo   : 'F4782781',
        celular: ''
      },
      email: 'ncuestas@mccain.com.co',
      direccion:
        'CARRERA 68 D No 40-53 SUR TORRE 6 APARTAMENTO 1006',
      primerNombre   : 'NATALIA',
      primerApellido : 'CUESTAS',
      segundoApellido: 'MONDRAGON'
    },
    demanda: {
      vencimientoPagare: '2021-03-26',
      obligacion       : [
        'SO79522009',
        5491570044098801
      ],
      obligacion2            : 5491570044098801,
      entregaGarantiasAbogado: '2017-09-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '17'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '15'
        }
      },
      radicado      : '2017 - 01336',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '15'
      }
    },
    capitalAdeudado: 32318533,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400301720170133600',
    grupo          : 'Reintegra',
    idProceso      : [
      50782960
    ],
    fecha: '2022-03-28T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547974',
    numero: 369,
    id    : '900336193',
    deudor: {
      cedula        : 900336193,
      nombreCompleto: 'INVERSION RIVOLI S.A.S.',
      tel           : {
        fijo   : '3727561',
        celular: ''
      },
      direccion      : 'CARRERA 24 G No20-35 SUR',
      primerNombre   : 'INVERSION',
      primerApellido : 'RIVOLI',
      segundoApellido: 'S.A.S.'
    },
    demanda: {
      vencimientoPagare: '2018-10-08',
      obligacion       : [
        2290098960
      ],
      entregaGarantiasAbogado: '2017-10-17',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '22'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '20'
        }
      },
      radicado      : '2017-1208',
      etapaProcesal : 'EJECUCION',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '20'
      }
    },
    capitalAdeudado: 34749647,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400302220170120800',
    grupo          : 'Reintegra',
    idProceso      : [
      50817380,
      0
    ],
    fecha     : '2023-01-31T05:00:00.000Z',
    idProcesos: [
      50817380
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547989',
    numero: 390,
    id    : '71603563',
    deudor: {
      cedula        : 71603563,
      nombreCompleto: 'GILBERTO JAIME BETANCOURT',
      tel           : {
        fijo   : '3138547',
        celular: ''
      },
      email          : 'gilbertojaime@hotmail.com',
      direccion      : 'CARRERA 82  No  19 - 20',
      primerNombre   : 'GILBERTO',
      primerApellido : 'JAIME',
      segundoApellido: 'BETANCOURT'
    },
    demanda: {
      vencimientoPagare: '2020-07-21',
      obligacion       : [
        2500084774,
        'AUDIOPRESTAMO'
      ],
      obligacion2            : 'AUDIOPRESTAMO',
      entregaGarantiasAbogado: '2017-11-16',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '4'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '9'
        }
      },
      radicado      : '2017 - 01266',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '9'
      }
    },
    capitalAdeudado: 50509238,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300420170126600',
    grupo          : 'Reintegra',
    idProceso      : [
      50859050
    ],
    fecha: '2022-02-04T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454798b',
    numero: 392,
    id    : '79712791',
    deudor: {
      cedula: 79712791,
      nombreCompleto:
        'EDGAR JOBANNY MATEUS CASTILLO',
      tel: {
        fijo   : '8511988',
        celular: ''
      },
      email: 'giovannymat@yahoo.com',
      direccion:
        'CALLE 3 C No  13 - 07   ZIPAQUIRA',
      primerNombre   : 'EDGAR',
      segundoNombre  : 'JOBANNY',
      primerApellido : 'MATEUS',
      segundoApellido: 'CASTILLO'
    },
    demanda: {
      vencimientoPagare: '2020-08-22',
      obligacion       : [
        3320087751,
        3320088190
      ],
      obligacion2            : 3320088190,
      entregaGarantiasAbogado: '2017-11-09',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'ZIPAQUIRA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '003'
        },

      },
      radicado      : '2018 - 00131',
      etapaProcesal : 'NOTIFICACION',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '003'
      }
    },
    capitalAdeudado: 38847950,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25899400300220170013100',
    grupo          : 'Reintegra',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547998',
    numero: 405,
    id    : '79396995',
    deudor: {
      cedula        : 79396995,
      nombreCompleto: 'ARTURO LINCE GOMEZ',
      tel           : {
        fijo   : '4244358 ',
        celular: '31088445603'
      },
      email          : 'arthurlingo64@hotmail.com',
      direccion      : 'CALLE 12 A No 71 B - 60',
      primerNombre   : 'ARTURO',
      primerApellido : 'LINCE',
      segundoApellido: 'GOMEZ'
    },
    demanda: {
      vencimientoPagare: '27/0/2021',
      obligacion       : [
        87823
      ],
      entregaGarantiasAbogado: '15/02/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-021-civil-municipal-de-bogota',
          id  : '21'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-13-de-ejecucion-civil-municipal-de-bogota',
          id  : '13'
        }
      },
      radicado      : '2018 - 00236',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-13-de-ejecucion-civil-municipal-de-bogota',
        id  : '13'
      }
    },
    capitalAdeudado: 22592583,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400302120180023600',
    grupo          : 'Bancolombia',
    idProceso      : [
      51029180
    ],
    fecha: '2023-06-15T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345479a4',
    numero: 417,
    id    : '19275068',
    deudor: {
      cedula: 19275068,
      nombreCompleto:
        'OSCAR HUMBERTO GOMEZ CHUCHIN',
      tel: {
        fijo   : '2511959 ',
        celular: '3105638608'
      },
      email          : 'oscarmultibog@hotmail.com',
      direccion      : 'CALLE 71 A No 70 B-11',
      primerNombre   : 'OSCAR',
      segundoNombre  : 'HUMBERTO',
      primerApellido : 'GOMEZ',
      segundoApellido: 'CHUCHIN'
    },
    demanda: {
      vencimientoPagare: '2/09/2021 / 3/01/2021',
      obligacion       : [
        5740084511,
        6390082501
      ],
      obligacion2            : 6390082501,
      entregaGarantiasAbogado: '19/11/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '71'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '7'
        }
      },
      radicado      : '2017 - 01250',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '7'
      }
    },
    capitalAdeudado: 40942872,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400307120170125000',
    grupo          : 'Reintegra',
    idProceso      : [
      64793050
    ],
    fecha: '2022-03-10T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345479a7',
    numero: 420,
    id    : '52773230',
    deudor: {
      cedula: 52773230,
      nombreCompleto:
        'DIANA PATRICIA BARRETO OSMA',
      tel: {
        fijo   : '3085025 ',
        celular: '3107706773'
      },
      email          : 'N / A',
      direccion      : 'CALLE 42 No 78 H - 38 SUR',
      primerNombre   : 'DIANA',
      segundoNombre  : 'PATRICIA',
      primerApellido : 'BARRETO',
      segundoApellido: 'OSMA'
    },
    demanda: {
      vencimientoPagare: '08/07/2020',
      obligacion       : [
        '377813451010780 / 4513070410107739',
        5303710165958750
      ],
      obligacion2            : 5303710165958750,
      entregaGarantiasAbogado: '01/12/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal/Civil Municipal de Ejecucion',
          id  : '6319'
        },
        ejecucion: {
          tipo: 'SINGULAR',
          id  : ''
        }
      },
      radicado      : 1.100140030632017e22,
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'SINGULAR',
        id  : ''
      }
    },
    capitalAdeudado: 10382732,
    tipoProceso    : 'HMM PISO 1',
    llaveProceso   : '11001400306320170129000',
    grupo          : 'Reintegra',
    idProceso      : [
      65701460
    ],
    fecha: '2023-06-30T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345479c7',
    numero: 452,
    id    : '25126734',
    deudor: {
      cedula        : 25126734,
      nombreCompleto: 'MARIA MARIN DE OROZCO',
      tel           : {
        fijo   : '4412100 ',
        celular: '3124885346'
      },
      email: 'mauriciosamu1128@gmail.com',
      direccion:
        'CARRERA 103 A  No 77D-22 MOLINOS- BOGOTA',
      primerNombre   : 'MARIA',
      segundoNombre  : 'MARIN',
      primerApellido : 'DE',
      segundoApellido: 'OROZCO'
    },
    demanda: {
      vencimientoPagare: '07/03/2020',
      obligacion       : [
        1740087269
      ],
      entregaGarantiasAbogado: '29/01/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '59'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '7'
        }
      },
      radicado      : '2018 - 00090',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '7'
      }
    },
    capitalAdeudado: 22244760,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400305920180009000',
    grupo          : 'Reintegra',
    idProceso      : [
      50989890
    ],
    fecha: '2022-03-25T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345479cd',
    numero: 458,
    id    : '52271112',
    deudor: {
      cedula: 52271112,
      nombreCompleto:
        'SANDRA PATRICIA BELTRAN OVIEDO',
      tel: {
        fijo   : '6607900',
        celular: ''
      },
      email: 'saraja.7@hotmail.com',
      direccion:
        'CARRERA 101 No 70 A-14 INTERIOR 1 APARTAMENTO 408',
      primerNombre   : 'SANDRA',
      segundoNombre  : 'PATRICIA',
      primerApellido : 'BELTRAN',
      segundoApellido: 'OVIEDO'
    },
    demanda: {
      vencimientoPagare: '15/0/2020',
      obligacion       : [
        'AUDIOPRESTAMO'
      ],
      entregaGarantiasAbogado: '29/01/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '37'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '8'
        }
      },
      radicado      : '2018 - 00111',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '8'
      }
    },
    capitalAdeudado: 17502203,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400303720180011100',
    grupo          : 'Reintegra',
    idProceso      : [
      50990920
    ],
    fecha: '2023-02-02T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345479ee',
    numero: 491,
    id    : '51987570',
    deudor: {
      cedula: 51987570,
      nombreCompleto:
        'SANDRA PATRICIA PACHECO RAMIREZ',
      tel: {
        fijo   : '8121692',
        celular: ''
      },
      email: 'sandrabogota2007@yahoo.com',
      direccion:
        'CALLE 163 B No 50-80  INTERIOR 10 APT 231 CONJUNTO LA ESTANCIA III',
      primerNombre   : 'SANDRA',
      segundoNombre  : 'PATRICIA',
      primerApellido : 'PACHECO',
      segundoApellido: 'RAMIREZ'
    },
    demanda: {
      vencimientoPagare:
        '15/05/2021 // 5/07/2021 // 5/07/2021',
      obligacion: [
        'AUDIOPRESTAMO',
        '0377816345049476 // 4513070259455355 // 5303720114305077'
      ],
      obligacion2:
        '0377816345049476 // 4513070259455355 // 5303720114305077',
      entregaGarantiasAbogado: '3/09/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: ' Pequeñas Causas y Competencias Multiples',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-08-de-pequenas-causas-laborales-de-bogota',
          id  : '8'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-05-de-ejecucion-civil-municipal-de-bogota',
          id  : '5'
        }
      },
      radicado: '2018 - 00785',
      etapaProcesal:
        'EMBARGO DE REMANENTES JUZGADO 27 PROCESO 2019 - 00251',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-05-de-ejecucion-civil-municipal-de-bogota',
        id  : '5'
      }
    },
    capitalAdeudado: 18100699,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001418900820180078500',
    grupo          : 'Bancolombia',
    idProceso      : [
      87350810
    ],
    fecha: '2023-08-02T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345479f6',
    numero: 499,
    id    : '3208569',
    deudor: {
      cedula        : 3208569,
      nombreCompleto: 'FLORESMIRO APONTE ACOSTA',
      tel           : {
        fijo   : '3208569',
        celular: ''
      },
      email: 'dcentro@pcpplasticos.com',
      direccion:
        'DIAGONAL 77B No 119 A-74 APTO 504 INT6',
      primerNombre   : 'FLORESMIRO',
      primerApellido : 'APONTE',
      segundoApellido: 'ACOSTA'
    },
    demanda: {
      vencimientoPagare: '31/11/2024',
      obligacion       : [
        '20990123680  7/  377813468472239',
        '4513079359765043 // 53037220341399596'
      ],
      obligacion2:
        '4513079359765043 // 53037220341399596',
      entregaGarantiasAbogado: '08/10/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: ' Pequeñas Causas y Competencias Multiples',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-13-de-pequenas-causas-y-competencias-multiples-de-bogota',
          id  : '13'
        },

      },
      radicado      : '2019 - 00708',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: ' Pequeñas Causas y Competencias Multiples',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-13-de-pequenas-causas-y-competencias-multiples-de-bogota',
        id  : '13'
      }
    },
    capitalAdeudado: 24807317,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001418901320190070800',
    grupo          : 'Bancolombia',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547a05',
    numero: 514,
    id    : '19496623',
    deudor: {
      cedula: 19496623,
      nombreCompleto:
        'MANUEL ALBERTO LEON CALDERON',
      tel: {
        fijo   : '3175879',
        celular: ''
      },
      email          : 'terranova54@latinmail.com',
      direccion      : 'CARRERA 68 No 100-51 APTO 405',
      primerNombre   : 'MANUEL',
      segundoNombre  : 'ALBERTO',
      primerApellido : 'LEON',
      segundoApellido: 'CALDERON'
    },
    demanda: {
      vencimientoPagare: '10/03/2022',
      obligacion       : [
        7910080591,
        4099830244266410
      ],
      obligacion2            : 4099830244266410,
      entregaGarantiasAbogado: '30/11/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '17'
        },

      },
      radicado      : '2019 - 00179',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '17'
      }
    },
    capitalAdeudado: 46118717,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Insolvencia'
  },
  {
    _id   : '64cc10e7ea30d79334547a16',
    numero: 531,
    id    : '51813018',
    deudor: {
      cedula        : 51813018,
      nombreCompleto: 'SANDRA LEONOR PAEZ MURCIA',

      email: 'yadelcis@hotmail.com',
      direccion:
        'KR 81 No. 127 A - 46 CONJUNTO MONTE AZUL BOGOTA',
      primerNombre   : 'SANDRA',
      segundoNombre  : 'LEONOR',
      primerApellido : 'PAEZ',
      segundoApellido: 'MURCIA'
    },
    demanda: {
      obligacion: [
        2020084294,
        '2020087484 // 4594250317705437 //5303723260933890'
      ],
      obligacion2:
        '2020087484 // 4594250317705437 //5303723260933890',
      entregaGarantiasAbogado: '2020-10-07',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-42-civil-municipal-de-bogota',
          id  : '42'
        },

      },
      radicado      : '2020 - 00535',
      etapaProcesal : 'EJECUCION',
      despachoActivo: {
        tipo: 'Civil Municipal',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-42-civil-municipal-de-bogota',
        id  : '42'
      }
    },
    capitalAdeudado: 35608653,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400304220200053500',
    grupo          : 'Bancolombia',
    idProceso      : [
      128164881
    ],
    fecha: '2023-03-13T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547a18',
    numero: 533,
    id    : '79522009',
    deudor: {
      cedula: 79522009,
      nombreCompleto:
        'JAIRO ALFONSO PARDO JAIMES',
      tel: {
        fijo   : '7808590',
        celular: ''
      },
      email: 'jairopardo8-11-70@hotmail.com',
      direccion:
        'DIAGONAL 28 No 33-27  TORRE 7 APART 203  SOACHA',
      primerNombre   : 'JAIRO',
      segundoNombre  : 'ALFONSO',
      primerApellido : 'PARDO',
      segundoApellido: 'JAIMES'
    },
    demanda: {
      vencimientoPagare: '15/11/2021',
      obligacion       : [
        1680097436,
        148653
      ],
      obligacion2            : 148653,
      entregaGarantiasAbogado: '14/11/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'SOACHA',
      juzgado                : {
        origen: {
          tipo: ' Pequeñas Causas y Competencias Multiples',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-04-municipal-de-pequenas-causas-y-competencia-multiple-de-soacha',
          id  : '4'
        },

      },
      radicado      : '2018 - 00060',
      etapaProcesal : 'EJECUCION',
      despachoActivo: {
        tipo: ' Pequeñas Causas y Competencias Multiples',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-04-municipal-de-pequenas-causas-y-competencia-multiple-de-soacha',
        id  : '4'
      }
    },
    capitalAdeudado: 56987693,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '2575440030042018000600',
    grupo          : 'Bancolombia',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547a19',
    numero: 534,
    id    : '11337530',
    deudor: {
      cedula: 11337530,
      nombreCompleto:
        'PEDRO JULIO TRIVIÑO VALBUENA',

      email          : 'maribelbonita86@hotmail.com',
      direccion      : 'VEREDA SAN JORGE ZIPAQUIRA',
      primerNombre   : 'PEDRO',
      segundoNombre  : 'JULIO',
      primerApellido : 'TRIVIÑO',
      segundoApellido: 'VALBUENA'
    },
    demanda: {
      obligacion: [
        377814085773793,
        4513070445120640
      ],
      obligacion2            : 4513070445120640,
      entregaGarantiasAbogado: '2020-09-05',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'ZIPAQUIRA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '2'
        },

      },
      radicado      : '2020 - 00289',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '2'
      }
    },
    capitalAdeudado: 33000833,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '2589940010020200028900',
    grupo          : 'Reintegra',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547a1c',
    numero: 537,
    id    : '52155023',
    deudor: {
      cedula: 52155023,
      nombreCompleto:
        'SANDRA  LILIANA CRUZ BELTRAN',
      tel: {
        fijo   : '5360278 ',
        celular: '3108540511'
      },
      email          : 'mediconta@gmail.com',
      direccion      : 'CALLE 86A No 95A-15 APTO 108',
      primerNombre   : 'SANDRA',
      segundoNombre  : '',
      primerApellido : 'LILIANA',
      segundoApellido: 'CRUZ BELTRAN '
    },
    demanda: {
      vencimientoPagare: '2022-02-02',
      obligacion       : [
        2270085292,
        3778131949466660
      ],
      obligacion2            : 3778131949466660,
      entregaGarantiasAbogado: '2018-06-28',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '51'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '4'
        }
      },
      radicado      : '2018 - 00850',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '4'
      }
    },
    capitalAdeudado: 20353079,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400305120180085000',
    grupo          : 'Reintegra',
    idProceso      : [
      89137980
    ],
    fecha: '2023-07-10T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547a1e',
    numero: 539,
    id    : '51937267',
    deudor: {
      cedula        : 51937267,
      nombreCompleto: 'ADRIANA LUCIA MORA PLATA',
      tel           : {
        fijo   : '8146011',
        celular: ''
      },
      email: 'amoplata@yahoo.com',
      direccion:
        'CALLLE 106 B- No 54-57 APTO 201 PUENTE LARGO',
      primerNombre   : 'ADRIANA',
      segundoNombre  : 'LUCIA',
      primerApellido : 'MORA',
      segundoApellido: 'PLATA'
    },
    demanda: {
      vencimientoPagare: '2021-04-10',
      obligacion       : [
        2070086628,
        4594250056606570
      ],
      obligacion2            : 4594250056606570,
      entregaGarantiasAbogado: '2018-07-03',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '36'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '15'
        }
      },
      radicado      : '2018 - 00818',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '15'
      }
    },
    capitalAdeudado: 32026447,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400303620180081800',
    grupo          : 'Reintegra',
    idProceso      : [
      51306830
    ],
    fecha: '2023-08-03T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547a1f',
    numero: 540,
    id    : '3242760',
    deudor: {
      cedula: 3242760,
      nombreCompleto:
        'JOSE RODRIGO GARCIA QUINTERO',
      tel: {
        fijo   : '6855750 ',
        celular: '3143659602'
      },
      email          : 'rodrigogar68@hotmail.com',
      direccion      : 'CARRERA 86 No 99-23',
      primerNombre   : 'JOSE',
      segundoNombre  : 'RODRIGO',
      primerApellido : 'GARCIA',
      segundoApellido: 'QUINTERO'
    },
    demanda: {
      vencimientoPagare:
        '10/05/2121 // 10/05/2021',
      obligacion: [
        1980096337,
        6700083464
      ],
      obligacion2            : 6700083464,
      entregaGarantiasAbogado: '2018-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '14'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '9'
        }
      },
      radicado      : '2018 - 00929',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '9'
      }
    },
    capitalAdeudado: 17667402,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400301420180092900',
    grupo          : 'Reintegra',
    idProceso      : [
      51341610
    ],
    fecha: '2023-06-27T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547a20',
    numero: 541,
    id    : '79533771',
    deudor: {
      cedula: 79533771,
      nombreCompleto:
        'JOSE RAMON ESTRADA CASTILLO',
      tel: {
        fijo   : '2998302',
        celular: ''
      },
      email          : 'jrestradacastillo@gmail.com',
      direccion      : 'CARRERA 81 G No 48-03 SUR',
      primerNombre   : 'JOSE',
      segundoNombre  : 'RAMON',
      primerApellido : 'ESTRADA',
      segundoApellido: 'CASTILLO'
    },
    demanda: {
      vencimientoPagare:
        '15/04/2021 // 6/05/2021',
      obligacion: [
        'AUDIOPRESTAMO',
        5491580436291960
      ],
      obligacion2            : 5491580436291960,
      entregaGarantiasAbogado: '31/08/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal/ Civil Municipal',
          id  : '8241'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '14'
        }
      },
      radicado      : '2018 - 00964',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '14'
      }
    },
    capitalAdeudado: 39855851,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400308220180096400',
    grupo          : 'Reintegra',
    idProceso      : [
      52160520,
      112967583
    ],
    fecha: '2022-03-24T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547a21',
    numero: 542,
    id    : '53106069',
    deudor: {
      cedula: 53106069,
      nombreCompleto:
        'BIBIANA PATRICIA ESGUERRA VASQUEZ',
      tel: {
        fijo   : '53106069',
        celular: ''
      },
      email          : 'bicato10@hotmail.com',
      direccion      : 'CALLE 65 BIS No 86-50',
      primerNombre   : 'BIBIANA',
      segundoNombre  : 'PATRICIA',
      primerApellido : 'ESGUERRA',
      segundoApellido: 'VASQUEZ'
    },
    demanda: {
      vencimientoPagare: '6/04/2021 // 6/04/2021',
      obligacion       : [
        'AMERICAN 377813618831557',
        'VISA 4513070030495183 // 5303715376619405'
      ],
      obligacion2:
        'VISA 4513070030495183 // 5303715376619405',
      entregaGarantiasAbogado: '22/08/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: ' Pequeñas Causas y Competencias Multiples',
          id  : '12'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '17'
        }
      },
      radicado      : '2018 - 00644',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '17'
      }
    },
    capitalAdeudado: 12864472,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001418901220180064400',
    grupo          : 'Reintegra',
    idProceso      : [
      71079290
    ],
    fecha: '2023-07-05T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547a25',
    numero: 546,
    id    : '1116782267',
    deudor: {
      cedula: 1116782267,
      nombreCompleto:
        'JOGLI JOAQUIN OTERO VARGAS',
      tel: {
        fijo   : '',
        celular: '3005941798'
      },
      email          : 'juanotero1989@gmail.com',
      direccion      : 'DIAGONAL 2 No 79 F -04',
      primerNombre   : 'JOGLI',
      segundoNombre  : 'JOAQUIN',
      primerApellido : 'OTERO',
      segundoApellido: 'VARGAS'
    },
    demanda: {
      vencimientoPagare: '2020-10-04',
      obligacion       : [
        12541235
      ],
      entregaGarantiasAbogado: '2017-10-06',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: ' Civil Municipal',
          id  : '2'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '13'
        }
      },
      radicado      : '2017 - 01002',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '13'
      }
    },
    capitalAdeudado: 41372568,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400300220170100200',
    grupo          : 'Reintegra',
    idProceso      : [
      50780430
    ],
    fecha: '2023-03-14T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547a2c',
    numero: 553,
    id    : '80220698',
    deudor: {
      cedula: 80220698,
      nombreCompleto:
        'JOSE ALEXANDER LAVERDE PENAGOS',
      email: 'lxndrlaverde@gmail.com',
      direccion:
        'Carrera 7 # 180 75 // Carrera 8 A No. 182 - 12',
      primerNombre   : 'JOSE',
      segundoNombre  : 'ALEXANDER',
      primerApellido : 'LAVERDE',
      segundoApellido: 'PENAGOS',

    },
    demanda: {
      vencimientoPagare: '2025-02-25',
      obligacion       : [
        130089828
      ],
      entregaGarantiasAbogado: '2023-06-20',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal / PCC',
          id  : '8365'
        },

      },
      radicado      : '2023 - 01088',
      despachoActivo: {
        tipo: 'Civil Municipal / PCC',
        id  : '8365'
      }
    },
    capitalAdeudado: 31804872,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    _id   : '64cc10e7ea30d79334547a2e',
    numero: 555,
    id    : '53130409',
    deudor: {
      cedula: 53130409,
      nombreCompleto:
        'JEIMMY SOLEY QUIROGA RAMIREZ',
      tel: {
        fijo   : '3917539 ',
        celular: '3506509064'
      },
      email: 'jsquiroga72@hotmail.com',
      direccion:
        'CL 55 BIS 16 48 Apartamento 702 Edificio Bangkok',
      primerNombre   : 'JEIMMY',
      segundoNombre  : 'SOLEY',
      primerApellido : 'QUIROGA',
      segundoApellido: 'RAMIREZ'
    },
    demanda: {
      vencimientoPagare: '2026-03-04',
      obligacion       : [
        1920089307
      ],
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',


    },
    capitalAdeudado: 80906224,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    _id   : '64cc10e7ea30d79334547a2f',
    numero: 556,
    id    : '1022335014',
    deudor: {
      cedula        : 1022335014,
      nombreCompleto: 'CIRO ERQUILIAN ONOFRE',
      tel           : {
        fijo   : '',
        celular: '3023193548'
      },
      email: 'ciro.onofe1105@gmail.com',
      direccion:
        'Carrera 13 # 4-20 Madrid (Cundinamarca)',
      primerNombre   : 'CIRO',
      primerApellido : 'ERQUILIAN',
      segundoApellido: 'ONOFRE'
    },
    demanda: {
      vencimientoPagare:
        '9/03/2026 // 9/03/2026 // 9/04/2026',
      obligacion: [
        '3830095699 // 3830095700',
        3830095701
      ],
      obligacion2            : 3830095701,
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'MADRID',


    },
    capitalAdeudado: 149444779,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    _id   : '64cc10e7ea30d79334547a30',
    numero: 557,
    id    : '71685758',
    deudor: {
      cedula        : 71685758,
      nombreCompleto: 'CARLOS HERNEY QUINTERO',
      tel           : {
        fijo   : '6485655 ',
        celular: '3002985587'
      },
      email:
        'cahequi8097@gmail.com  fundaoyuki@gmail.com',
      direccion:
        'KR 32 A 1 19 BARRIO SANTA MATILDE',
      primerNombre   : 'CARLOS',
      primerApellido : 'HERNEY',
      segundoApellido: 'QUINTERO'
    },
    demanda: {
      vencimientoPagare:
        '18/07/2026 // 4/03/2026',
      obligacion: [
        840093593,
        'PAGARE SIN NUMERO T. AMERICAN EXPRESS 0377844069636757'
      ],
      obligacion2:
        'PAGARE SIN NUMERO T. AMERICAN EXPRESS 0377844069636757',
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',


    },
    capitalAdeudado: 49329779,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    _id   : '64cc10e7ea30d79334547a31',
    numero: 558,
    id    : '52531016',
    deudor: {
      cedula: 52531016,
      nombreCompleto:
        'CLAUDIA MARCELA ARIAS LÓPEZ',
      tel: {
        fijo   : '',
        celular: '3106736494'
      },
      email: 'marcearias@yahoo.com',
      direccion:
        'Calle 18 N 86 55 Etapa 1 Torre 5 Apartamento 403 Conjunto Residencial Parque de Ostente',
      primerNombre   : 'CLAUDIA',
      segundoNombre  : 'MARCELA',
      primerApellido : 'ARIAS',
      segundoApellido: 'LÓPEZ'
    },
    demanda: {
      vencimientoPagare:
        '17/03/2026 // 4/03/2026',
      obligacion: [
        3880005183,
        'PAGARE SIN NUMERO T. MASTER CARD 5303720122061696'
      ],
      obligacion2:
        'PAGARE SIN NUMERO T. MASTER CARD 5303720122061696',
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',


    },
    capitalAdeudado: 46537671,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    _id   : '64cc10e7ea30d79334547a32',
    numero: 559,
    id    : '80219425',
    deudor: {
      cedula: 80219425,
      nombreCompleto:
        'EDWIN ALEXANDER SALCEDO PEREZ',
      tel: {
        fijo   : '',
        celular: '3112633806'
      },
      email: 'edwsal736@gmail.com',
      direccion:
        'Calle 50 Sur No. 93 D 38 Torre 07 Apartamento 601 Conjunto Residencial Porvenir Reservado Etapa 7; Carrera 89 A No. 45 A – 33 Sur Casa 207 Agrupación de Vivienda La Margarita Etapa 9',
      primerNombre   : 'EDWIN',
      segundoNombre  : 'ALEXANDER',
      primerApellido : 'SALCEDO',
      segundoApellido: 'PEREZ'
    },
    demanda: {
      vencimientoPagare: '2026-03-02',
      obligacion       : [
        1080103378
      ],
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',


    },
    capitalAdeudado: 42598393,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    _id   : '64cc10e7ea30d79334547a34',
    numero: 561,
    id    : '52278914',
    deudor: {
      cedula: 52278914,
      nombreCompleto:
        'LUZ JANNETH RODRIGUEZ MOERNO',
      tel: {
        fijo   : '17476445',
        celular: '3153208374'
      },
      email:
        'lurodrig@corona.com.co  jrodriguez2805@hotmail.com',
      direccion:
        'Carrera 87 No. 48 – 50 Sur Casa 26 Conjunto Residencial Alameda de San José II',
      primerNombre   : 'LUZ',
      segundoNombre  : 'JANNETH',
      primerApellido : 'RODRIGUEZ',
      segundoApellido: 'MOERNO'
    },
    demanda: {
      vencimientoPagare:
        '2/03/2026 // 20/03/2026',
      obligacion: [
        6520089408,
        'TARJETA MASTER CARD No. 5303720118094313 Y TARJETA AMERICAN No. 0377844026948428'
      ],
      obligacion2:
        'TARJETA MASTER CARD No. 5303720118094313 Y TARJETA AMERICAN No. 0377844026948428',
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',


    },
    capitalAdeudado: 36720537,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    _id   : '64cc10e7ea30d79334547a35',
    numero: 562,
    id    : '17139148',
    deudor: {
      cedula: 17139148,
      nombreCompleto:
        'MARIO HERNAN SALAMANCA PATIÑO',
      tel: {
        fijo   : '7746112',
        celular: ''
      },
      email: 'ajasalama@gmail.com',
      direccion:
        'Carrera 80 No. 8 - 11 Torre 3 Interior 5 Apartamento 519 Torres de Santa Barbara Conjunto Residencial',
      primerNombre   : 'MARIO',
      segundoNombre  : 'HERNAN',
      primerApellido : 'SALAMANCA',
      segundoApellido: 'PATIÑO'
    },
    demanda: {
      vencimientoPagare:
        '10/05/2026 // 6/03/2026',
      obligacion: [
        9960086465,
        'TARJETA DE CREDITO MASTER CARD 5303720132348190'
      ],
      obligacion2:
        'TARJETA DE CREDITO MASTER CARD 5303720132348190',
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',


    },
    capitalAdeudado: 25252953,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    _id   : '64cc10e7ea30d79334547a36',
    numero: 563,
    id    : '7718318',
    deudor: {
      cedula         : 7718318,
      nombreCompleto : 'MILTON MARINO LUGO GOMEZ',
      primerNombre   : 'MILTON',
      segundoNombre  : 'MARINO',
      primerApellido : 'LUGO',
      segundoApellido: 'GOMEZ',

    },
    demanda: {
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      obligacion             : [
        null
      ],


    },
    capitalAdeudado: 0,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    _id   : '64cc10e7ea30d79334547a37',
    numero: 564,
    id    : '1013622120',
    deudor: {
      cedula: 1013622120,
      nombreCompleto:
        'JOHAN ANDRES QUIROGA GALEANO',
      primerNombre   : 'JOHAN',
      segundoNombre  : 'ANDRES',
      primerApellido : 'QUIROGA',
      segundoApellido: 'GALEANO',

    },
    demanda: {
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      obligacion             : [
        null
      ],


    },
    capitalAdeudado: 0,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    _id   : '64cc10e7ea30d79334547a3a',
    numero: 567,
    id    : '94254761',
    deudor: {
      cedula: 94254761,
      nombreCompleto:
        'WILSON DE JESUS MOLINA QUIRAMA',
      primerNombre   : 'WILSON',
      segundoNombre  : 'DE',
      primerApellido : 'JESUS',
      segundoApellido: 'MOLINA QUIRAMA ',

    },
    capitalAdeudado: 0,
    grupo          : 'Bancolombia',
    demanda        : {
      obligacion: [],


    }
  },
  {
    _id   : '64cc10e7ea30d7933454780e',
    numero: 11,
    id    : 80743147,
    deudor: {
      cedula        : 80743147,
      nombreCompleto: 'JAVIER ROMERO REYES',
      tel           : {
        fijo   : 3903652,
        celular: 3209229120
      },
      email:
        'sandrapatriciajoya-2545@hotmail.com',
      direccion:
        'CRA 18 H No. 76 A-53 SUR BOGOTA',
      primerNombre   : 'JAVIER',
      primerApellido : 'ROMERO',
      segundoApellido: 'REYES'
    },
    demanda: {
      vencimientoPagare: '2017-08-28',
      obligacion       : [
        '12313737//377815899589556',
        4513070106144855
      ],
      entregaGarantiasAbogado: '2017-06-07',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          id  : 37,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-37-civil-municipal-de-bogota'
        },
        ejecucion: {
          id  : 14,
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-14-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      radicado      : '2017 - 00839',
      despachoActivo: {
        id  : 14,
        tipo: 'Civil Municipal de Ejecucion'
      }
    },
    capitalAdeudado: 21596919,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400303720170083900',
    grupo          : 'LiosJuridicos',
    idProceso      : [
      50508570
    ],
    fecha: '2023-07-10T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547813',
    numero: 16,
    id    : 1077969975,
    deudor: {
      cedula        : 1077969975,
      nombreCompleto: 'YESID ALBEIRO RAMOS',
      tel           : {
        celular: 3212337597
      },
      email: 'yess_Id@hotmail.com',
      direccion:
        'CARRERA 77B No. 68B - 19 BARRIO SANTA HELENITA',
      primerNombre   : 'YESID',
      primerApellido : 'ALBEIRO',
      segundoApellido: 'RAMOS'
    },
    demanda: {
      vencimientoPagare: '2020-05-04',
      obligacion       : [
        2530444
      ],
      entregaGarantiasAbogado: '2017-05-11',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          id  : 3,
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-03-civil-municipal-de-bogota'
        }
      },
      radicado      : '2017 - 00884',
      etapaProcesal : 'EMPLAZAMIENTO',
      despachoActivo: {
        id  : 3,
        tipo: 'Civil Municipal',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-03-civil-municipal-de-bogota'
      }
    },
    capitalAdeudado: 33791309,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400300320170088400',
    grupo          : 'Bancolombia',
    idProceso      : [
      50468620,
      113956611
    ],
    fecha     : '2023-07-18T05:00:00.000Z',
    idProcesos: [
      50468620
    ]
  },
  {
    _id   : '64cc10e7ea30d7933454781c',
    numero: 25,
    id    : 3197274,
    deudor: {
      cedula        : 3197274,
      nombreCompleto: 'OMAR DARIO ZEA GALVIS',
      tel           : {
        fijo: 7479415
      },
      direccion      : 'CL 14 No. 10 - 45 Bucaramanga',
      primerNombre   : 'OMAR',
      segundoNombre  : 'DARIO',
      primerApellido : 'ZEA',
      segundoApellido: 'GALVIS'
    },
    demanda: {
      vencimientoPagare: '2020-05-10',
      obligacion       : [
        12705806
      ],
      entregaGarantiasAbogado: '2017-05-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil del Circuito',
          id  : 11,
          url : 'https://www.ramajudicial.gov.co/web/juzgado-011-civil-del-circuito-de-bogota'
        },
        ejecucion: {
          tipo: 'Ejecucion Civil del Circuito',
          id  : 1,
          url : 'https://www.ramajudicial.gov.co/web/juzgado-01-de-ejecucion-civil-del-circuito-de-bogota'
        }
      },
      radicado     : '2017 - 00335',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 107818114,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001310301120170033500',
    grupo          : 'Reintegra',
    idProceso      : [
      0,
      1805257424
    ],
    fecha: '2023-03-10T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454781e',
    numero: 27,
    id    : 79004127,
    deudor: {
      cedula        : 79004127,
      nombreCompleto: 'NORBEY LOMBANA MAHECHA',
      tel           : {
        fijo: 34746523
      },
      direccion:
        'CALLE 4 No. 14-161 GUADUAS (CUNDINAMARCA)',
      primerNombre   : 'NORBEY',
      primerApellido : 'LOMBANA',
      segundoApellido: 'MAHECHA'
    },
    demanda: {
      vencimientoPagare: '2017-04-11',
      obligacion       : [
        7910080321
      ],
      entregaGarantiasAbogado: '2017-05-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'GUADUAS',
      juzgado                : {
        origen: {
          tipo: 'Civil del Circuito',
          id  : 1
        }
      },
      radicado      : '2017 - 00195',
      despachoActivo: {
        tipo: ' CIVIL CTO',
        id  : '001'
      }
    },
    capitalAdeudado: 96608106,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '25320310300120170019500',
    grupo          : 'Insolvencia',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547848',
    numero: 69,
    id    : '53008703',
    deudor: {
      cedula: 53008703,
      nombreCompleto:
        'DERLY CATHERINE CASTRO IZQUIERDO',
      tel: {
        fijo   : '7507842 ',
        celular: ''
      },
      direccion      : 'CARRERA 5 No. 30 - 77',
      primerNombre   : 'DERLY',
      segundoNombre  : 'CATHERINE',
      primerApellido : 'CASTRO',
      segundoApellido: 'IZQUIERDO'
    },
    demanda: {
      vencimientoPagare: '2019-08-12',
      obligacion       : [
        4200023595
      ],
      entregaGarantiasAbogado: '2017-06-08',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '6'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '11'
        }
      },
      radicado      : '2017-00419',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '11'
      }
    },
    capitalAdeudado: 83955014,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300620170041900',
    grupo          : 'Reintegra',
    idProceso      : [
      50593100
    ],
    fecha: '2023-05-10T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547859',
    numero: 86,
    id    : '1087781966',
    deudor: {
      cedula        : 1087781966,
      nombreCompleto: 'RHONALD MEZA TARAPUES',
      tel           : {
        fijo   : '4062925 ',
        celular: ''
      },
      email: 'mezaronald@yahoo.com',
      direccion:
        'CARRERA 73 A BIS No. 2 A-32 SUR BOGOTA',
      primerNombre   : 'RHONALD',
      primerApellido : 'MEZA',
      segundoApellido: 'TARAPUES'
    },
    demanda: {
      vencimientoPagare: '2018-11-11',
      obligacion       : [
        2250084171
      ],
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '22'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '2'
        }
      },
      radicado      : '2017-00567',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '2'
      }
    },
    capitalAdeudado: 17632026,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400302220170056700',
    grupo          : 'Reintegra',
    idProceso      : [
      111939890
    ],
    fecha: '2023-05-29T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547869',
    numero: 102,
    id    : '1070329396',
    deudor: {
      cedula: 1070329396,
      nombreCompleto:
        'ERIKA ALEJANDRA QUINTERO REYES',
      tel: {
        fijo   : '',
        celular: '3114456631'
      },
      direccion      : 'CALL 2 No. 8-40 EL COLEGIO',
      primerNombre   : 'ERIKA',
      segundoNombre  : 'ALEJANDRA',
      primerApellido : 'QUINTERO',
      segundoApellido: 'REYES'
    },
    demanda: {
      vencimientoPagare: '2019-07-05',
      obligacion       : [
        7300080586
      ],
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'MESITAS',
      juzgado                : {
        origen: {
          tipo: ' PM',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-001-promiscuo-municipal-de-el-colegio',
          id  : '001'
        },

      },
      radicado      : '2017-00239',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: ' PM',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-001-promiscuo-municipal-de-el-colegio',
        id  : '001'
      }
    },
    capitalAdeudado: 50000000,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25245408900120170023900',
    grupo          : 'Bancolombia',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547878',
    numero: 117,
    id    : '19386444',
    deudor: {
      cedula: 19386444,
      nombreCompleto:
        'NICOLAS FERNANDO MONTOYA CORREA',
      tel: {
        fijo   : '2531962',
        celular: ''
      },
      email: 3176677592,
      direccion:
        'CALLE 18 # 19 - 75 / CALLE 26 NTE No. 5A - 54 Cali - Valle',
      primerNombre   : 'NICOLAS',
      segundoNombre  : 'FERNANDO',
      primerApellido : 'MONTOYA',
      segundoApellido: 'CORREA'
    },
    demanda: {
      vencimientoPagare: '2019-01-21',
      obligacion       : [
        420087224
      ],
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '70'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '14'
        }
      },
      radicado      : '2017 - 00566',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '14'
      }
    },
    capitalAdeudado: 17256863,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400307020170056600',
    grupo          : 'Reintegra',
    idProceso      : [
      50522530
    ],
    fecha: '2021-12-13T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454787b',
    numero: 120,
    id    : '900212673',
    deudor: {
      cedula        : 900212673,
      nombreCompleto: 'JENCELL E.U.',
      tel           : {
        fijo   : '5753416',
        celular: ''
      },
      direccion     : 'CARRERA 3 # 29A - 02',
      primerNombre  : 'JENCELL',
      primerApellido: 'E.U.'
    },
    demanda: {
      vencimientoPagare: '2021-04-12',
      obligacion       : [
        6240082776
      ],
      entregaGarantiasAbogado: '2017-08-04',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'SOACHA',
      juzgado                : {
        origen: {
          id  : 3,
          tipo: 'Pequeñas Causas y Competencias Multiples',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-03-municipal-de-pequenas-causas-y-competencia-multiple-de-soacha'
        },

      },
      radicado      : '2017 - 00755',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        id  : 3,
        tipo: 'Pequeñas Causas y Competencias Multiples',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-03-municipal-de-pequenas-causas-y-competencia-multiple-de-soacha'
      }
    },
    capitalAdeudado: 13906249,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25754418900320170075500',
    grupo          : 'Bancolombia',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547880',
    numero: 125,
    id    : '74338870',
    deudor: {
      cedula: 74338870,
      nombreCompleto:
        'MILCIADES GALINDO CASTEBLANCO',
      tel: {
        fijo   : '4536131',
        celular: ''
      },
      direccion      : 'CARRERA 18 # 12 - 72',
      primerNombre   : 'MILCIADES',
      primerApellido : 'GALINDO',
      segundoApellido: 'CASTEBLANCO'
    },
    demanda: {
      vencimientoPagare: '2020-11-27',
      obligacion       : [
        300093705
      ],
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '47'
        },

      },
      radicado      : '2017 - 01520',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '47'
      }
    },
    capitalAdeudado: 21613985,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400304720170152000',
    grupo          : 'Reintegra',
    idProceso      : [
      0,
      109959053
    ],
    fecha     : '2022-09-02T05:00:00.000Z',
    idProcesos: [
      109959053
    ]
  },
  {
    _id   : '64cc10e7ea30d793345478a7',
    numero: 164,
    id    : '14255996',
    deudor: {
      cedula        : 14255996,
      nombreCompleto: 'URIEL RUIZ DIAZ',
      tel           : {
        fijo   : '',
        celular: '3102785072'
      },
      direccion      : 'CARRERA 82 A No. 6B-30 CASA 36',
      primerNombre   : 'URIEL',
      primerApellido : 'RUIZ',
      segundoApellido: 'DIAZ'
    },
    demanda: {
      vencimientoPagare: '2019-09-30',
      obligacion       : [
        6240082772
      ],
      entregaGarantiasAbogado: '2017-07-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '45'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '2'
        }
      },
      radicado      : '2017 - 00905',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '2'
      }
    },
    capitalAdeudado: 25519225,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400304520170090500',
    grupo          : 'Reintegra',
    idProceso      : [
      50593640
    ],
    fecha: '2022-02-25T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345478ac',
    numero: 169,
    id    : '23553904',
    deudor: {
      cedula        : 23553904,
      nombreCompleto: 'RITA BLANCO DE GOMEZ',
      tel           : {
        fijo   : '3861894',
        celular: ''
      },
      email: 'dorancy1@hotmail.com',
      direccion:
        'Carrera 67 No. 65-22 sur Torre 15 Apto 559',
      primerNombre   : 'RITA',
      segundoNombre  : 'BLANCO',
      primerApellido : 'DE',
      segundoApellido: 'GOMEZ'
    },
    demanda: {
      vencimientoPagare: '2020-03-15',
      obligacion       : [
        12498762,
        'audioprestamo'
      ],
      obligacion2            : 'audioprestamo',
      entregaGarantiasAbogado: '2017-08-01',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '3'
        },

      },
      radicado      : '2017 - 01264',
      etapaProcesal : 'NOTIFICACION',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '3'
      }
    },
    capitalAdeudado: 13144437,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400300320170126400',
    grupo          : 'Reintegra',
    idProceso      : [
      50598770
    ],
    fecha: '2023-06-01T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345478bd',
    numero: 186,
    id    : '24134505',
    deudor: {
      cedula: 24134505,
      nombreCompleto:
        'CELY MARGOTH ROJAS VELANDIA',
      tel: {
        fijo   : '5267343',
        celular: ''
      },
      direccion:
        'CALLE 29 A # 2 - 76 APTO 304 CHIA',
      primerNombre   : 'CELY',
      segundoNombre  : 'MARGOTH',
      primerApellido : 'ROJAS',
      segundoApellido: 'VELANDIA'
    },
    demanda: {
      vencimientoPagare: '2021-01-29',
      obligacion       : [
        1680097051
      ],
      entregaGarantiasAbogado: '2017-08-11',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'CHIA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '2'
        },

      },
      radicado      : '2017 - 00412',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '2'
      }
    },
    capitalAdeudado: 13319130,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25175408900220170041200',
    grupo          : 'Reintegra',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d793345478c2',
    numero: 191,
    id    : '80231798',
    deudor: {
      cedula: 80231798,
      nombreCompleto:
        'JOHN ALEXANDER VALENCIA MARQUEZ',
      tel: {
        fijo   : '2376454 ',
        celular: '3004525014'
      },
      email          : 'jhon.valencia@jvtel.com.co',
      direccion      : 'CARRERA 32 B # 2 - 64',
      primerNombre   : 'JOHN',
      segundoNombre  : 'ALEXANDER',
      primerApellido : 'VALENCIA',
      segundoApellido: 'MARQUEZ'
    },
    demanda: {
      vencimientoPagare: '2020-11-30',
      obligacion       : [
        1220084112
      ],
      entregaGarantiasAbogado: '2017-08-11',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '79'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '1'
        }
      },
      radicado      : '2017 - 01082',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '1'
      }
    },
    capitalAdeudado: 87649981,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400307920170108200',
    grupo          : 'Reintegra',
    idProceso      : [
      51357750
    ],
    fecha: '2023-07-31T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345478c4',
    numero: 193,
    id    : '52465691',
    deudor: {
      cedula: 52465691,
      nombreCompleto:
        'CARMEN ELIZABETH QUESADA MARTINEZ',
      tel: {
        fijo   : '7829236 ',
        celular: '3204792977'
      },
      email          : 'equesada01@hotmail.com',
      direccion      : 'CARRERA 80 # 70A - 09',
      primerNombre   : 'CARMEN',
      segundoNombre  : 'ELIZABETH',
      primerApellido : 'QUESADA',
      segundoApellido: 'MARTINEZ'
    },
    demanda: {
      vencimientoPagare: '2020-08-09',
      obligacion       : [
        12750180
      ],
      entregaGarantiasAbogado: '2017-08-16',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '24'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '14'
        }
      },
      radicado      : '2017 - 01750',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '14'
      }
    },
    capitalAdeudado: 24590710,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400302420170175000',
    grupo          : 'Reintegra',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d793345478ca',
    numero: 199,
    id    : '1106893308',
    deudor: {
      cedula: 1106893308,
      nombreCompleto:
        'MARTHA LILIANA RAMIREZ COLORADO',
      tel: {
        fijo: '',
        celular:
          '3108612781        CEL 3502772711'
      },
      email: 'liliaramirez17@gmail.com',
      direccion:
        'VEREDA BOQUERON , FINCA LA MILAGROSA, MUNICIPIO FUSA // CALLE 3 # 37 - 21 BARRIO SICAMORO, MELGAR',
      primerNombre   : 'MARTHA',
      segundoNombre  : 'LILIANA',
      primerApellido : 'RAMIREZ',
      segundoApellido: 'COLORADO'
    },
    demanda: {
      vencimientoPagare: '2020-08-16',
      obligacion       : [
        12650694
      ],
      entregaGarantiasAbogado: '2017-08-22',
      departamento           : 'TOLIMA',
      ciudad                 : 'MELGAR',
      juzgado                : {
        origen: {
          tipo: ' PM',
          id  : '2'
        },

      },
      radicado      : '2017 - 00259',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: ' PM',
        id  : '2'
      }
    },
    capitalAdeudado: 28594040,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '73449408900220170025900',
    grupo          : 'Reintegra',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d793345478d5',
    numero: 210,
    id    : 343334,
    deudor: {
      cedula: 343334,
      nombreCompleto:
        'JOSE ANTONIO CASTILLO CORTES',
      tel: {
        fijo   : 4658342,
        celular: 3015004499
      },
      direccion      : 'CARRERA 50 # 113 - 09',
      primerNombre   : 'JOSE',
      segundoNombre  : 'ANTONIO',
      primerApellido : 'CASTILLO',
      segundoApellido: 'CORTES'
    },
    demanda: {
      vencimientoPagare: '2020-01-05',
      obligacion       : [
        377813597718262,
        '4513070908078111 // 5303714709873201'
      ],
      entregaGarantiasAbogado: '2017-08-22',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : 21
        }
      },
      radicado     : '2018 - 00163',
      etapaProcesal: 'EJECUCION'
    },
    capitalAdeudado: 10555422,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400302120180016300',
    grupo          : 'Reintegra',
    idProceso      : [
      51006610,
      0
    ],
    fecha     : '2023-06-22T05:00:00.000Z',
    idProcesos: [
      51006610
    ]
  },
  {
    _id   : '64cc10e7ea30d793345478dc',
    numero: 217,
    id    : '52328942',
    deudor: {
      cedula: 52328942,
      nombreCompleto:
        'DIANA VANESSA NARANJO HERNANDEZ',

      email          : 'casas_castillo@hotmail.com',
      direccion      : 'CALLE 58 # 45 - 86',
      primerNombre   : 'DIANA',
      segundoNombre  : 'VANESSA',
      primerApellido : 'NARANJO',
      segundoApellido: 'HERNANDEZ'
    },
    demanda: {
      obligacion: [
        182540,
        'AUDIOPRESTAMO'
      ],
      obligacion2            : 'AUDIOPRESTAMO',
      entregaGarantiasAbogado: '2017-08-17',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: ' CCTO',
          id  : '37'
        },
        ejecucion: {
          tipo: ' CCTOEJ',
          id  : '3'
        }
      },
      radicado      : '2017 - 00453',
      despachoActivo: {
        tipo: ' CCTOEJ',
        id  : '3'
      }
    },
    capitalAdeudado: 206655465,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001310303720170045300',
    grupo          : 'LiosJuridicos',
    idProceso      : [
      51315290,
      57718874
    ],
    fecha     : '2019-01-15T05:00:00.000Z',
    idProcesos: [
      51315290
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547901',
    numero: 254,
    id    : '52344904',
    deudor: {
      cedula        : 52344904,
      nombreCompleto: 'YOHAIRA PRADO VALOYES',
      tel           : {
        fijo   : '8615372 ',
        celular: '3103291690'
      },
      email: 'yohairapadro@gmail.com',
      direccion:
        'CARRERA 9A 14F - 28C - UNIDAD 22 CHIA',
      primerNombre   : 'YOHAIRA',
      primerApellido : 'PRADO',
      segundoApellido: 'VALOYES'
    },
    demanda: {
      vencimientoPagare: '2018-05-09',
      obligacion       : [
        9460081795,
        5303727444531025
      ],
      obligacion2            : 5303727444531025,
      entregaGarantiasAbogado: '2017-08-28',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'CHIA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '3'
        },

      },
      radicado      : '2017 - 00477',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '3'
      }
    },
    capitalAdeudado: 12993948,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25175408900320170047700',
    grupo          : 'Reintegra',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547905',
    numero: 258,
    id    : '51740544',
    deudor: {
      cedula        : 51740544,
      nombreCompleto: 'SOL JUDITH BUITRAGO DUQUE',
      tel           : {
        fijo   : '3002001',
        celular: ''
      },
      email: 'dirfinanciera.sol@gmail.com',
      direccion:
        'CARRERA 121 # 128B - 52 BLOQUE 8 CASA 34',
      primerNombre   : 'SOL',
      segundoNombre  : 'JUDITH',
      primerApellido : 'BUITRAGO',
      segundoApellido: 'DUQUE'
    },
    demanda: {
      vencimientoPagare: '2018-01-26',
      obligacion       : [
        5470083833,
        '377813735559305 // 5303724061518310'
      ],
      obligacion2:
        '377813735559305 // 5303724061518310',
      entregaGarantiasAbogado: '2017-09-01',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '13'
        },

      },
      radicado      : '2017 - 01178',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '13'
      }
    },
    capitalAdeudado: 18506672,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400301320170117800',
    grupo          : 'Reintegra',
    idProceso      : [
      50692590
    ],
    fecha: '2023-04-17T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454790c',
    numero: 265,
    id    : '7601476',
    deudor: {
      cedula        : 7601476,
      nombreCompleto: 'JULIO RENE SANCHEZ ARGOTE',
      tel           : {
        fijo   : '3018759 ',
        celular: '3118027001'
      },
      email: 'jsanchezargote@gmail.com',
      direccion:
        'CARRERA 90 C No 6A - 31   - CASA 148',
      primerNombre   : 'JULIO',
      segundoNombre  : 'RENE',
      primerApellido : 'SANCHEZ',
      segundoApellido: 'ARGOTE'
    },
    demanda: {
      vencimientoPagare: '2020-05-04',
      obligacion       : [
        186718,
        '3778153354915637 / 4513079095670572'
      ],
      obligacion2:
        '3778153354915637 / 4513079095670572',
      entregaGarantiasAbogado: '2017-09-21',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: ' CCTO/ CCTOE',
          id  : '201'
        },

      },
      radicado      : '2018 - 00650',
      despachoActivo: {
        tipo: ' CCTO/ CCTOE',
        id  : '201'
      }
    },
    capitalAdeudado: 115224736,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '1100140030202\'100050100',
    grupo          : 'Insolvencia',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547914',
    numero: 273,
    id    : '1024479389',
    deudor: {
      cedula: 1024479389,
      nombreCompleto:
        'SONIA MARCELA MOLINA QUIMBAYO',
      tel: {
        fijo   : '7650684',
        celular: ''
      },
      email          : 'sonymarce20@hotmail.com',
      direccion      : 'CALLE 67 No 17 C-63 SUR',
      primerNombre   : 'SONIA',
      segundoNombre  : 'MARCELA',
      primerApellido : 'MOLINA',
      segundoApellido: 'QUIMBAYO'
    },
    demanda: {
      vencimientoPagare: '5/10/2022',
      obligacion       : [
        156791
      ],
      entregaGarantiasAbogado: '25/09/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal //  PCCivil Municipal',
          id  : '6446'
        },

      },
      radicado      : '2018 - 01029',
      despachoActivo: {
        tipo: 'Civil Municipal //  PCCivil Municipal',
        id  : '6446'
      }
    },
    capitalAdeudado: 65355736,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400306420180102900',
    grupo          : 'Insolvencia',
    idProceso      : [
      113353750
    ],
    fecha: '2023-02-07T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547919',
    numero: 278,
    id    : '35506033',
    deudor: {
      cedula        : 35506033,
      nombreCompleto: 'LUZ DARY PUERTA JARAMILLO',
      tel           : {
        fijo   : '4357832 ',
        celular: '3103430010'
      },
      email          : 'natis-rolita@hotmail.con',
      direccion      : 'CARRERA  101  No 71 B - 53',
      primerNombre   : 'LUZ',
      segundoNombre  : 'DARY',
      primerApellido : 'PUERTA',
      segundoApellido: 'JARAMILLO'
    },
    demanda: {
      vencimientoPagare: '18/03/2019',
      obligacion       : [
        4670083154
      ],
      entregaGarantiasAbogado: '28/09/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-37-civil-municipal-de-bogota',
          id  : '37'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-11-de-ejecucion-civil-municipal-de-bogota',
          id  : '11'
        }
      },
      radicado      : '2017 - 01391',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-11-de-ejecucion-civil-municipal-de-bogota',
        id  : '11'
      }
    },
    capitalAdeudado: 12347548,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400303720170139100',
    grupo          : 'Bancolombia',
    idProceso      : [
      112945420
    ],
    fecha: '2022-03-09T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547927',
    numero: 292,
    id    : '80205694',
    deudor: {
      cedula: 80205694,
      nombreCompleto:
        'JOHN FREDY HERREÑO RAMIREZ',
      tel: {
        fijo   : '7641957 ',
        celular: '3124102'
      },
      email: 'kellyo.1508@hotmail.com',
      direccion:
        'DIAGONAL 82 A SUR No 7C 19  ESTE',
      primerNombre   : 'JOHN',
      segundoNombre  : 'FREDY',
      primerApellido : 'HERREÑO',
      segundoApellido: 'RAMIREZ'
    },
    demanda: {
      vencimientoPagare: '2020-08-31',
      obligacion       : [
        300094317
      ],
      entregaGarantiasAbogado: '2017-09-13',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '  Pequeñas Causas y Competencias Multiples',
          id  : '10'
        },

      },
      radicado      : '2017 - 00128',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: '  Pequeñas Causas y Competencias Multiples',
        id  : '10'
      }
    },
    capitalAdeudado: 25766204,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001410375220170012800',
    grupo          : 'Reintegra',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547928',
    numero: 293,
    id    : '1032383389',
    deudor: {
      cedula        : 1032383389,
      nombreCompleto: 'ANDERSON REVELO SANTOS',
      tel           : {
        fijo   : '4725511 ',
        celular: '3118526428'
      },
      email: 'ars.09@hotmail.com',
      direccion:
        'CALLE 64 SUR  No 85 B - 40  APARTAMENTO  104',
      primerNombre   : 'ANDERSON',
      primerApellido : 'REVELO',
      segundoApellido: 'SANTOS'
    },
    demanda: {
      vencimientoPagare: '2020-03-05',
      obligacion       : [
        '320088443  / 377813441863587',
        4513070212799642
      ],
      obligacion2            : 4513070212799642,
      entregaGarantiasAbogado: '2017-09-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-048-civil-municipal-de-bogota',
          id  : '48'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-07-de-ejecucion-civil-municipal-de-bogota',
          id  : '7'
        }
      },
      radicado      : '2017 - 00974',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-07-de-ejecucion-civil-municipal-de-bogota',
        id  : '7'
      }
    },
    capitalAdeudado: 12249598,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400304820170097400',
    grupo          : 'Bancolombia',
    idProceso      : [
      50762570
    ],
    fecha: '2022-12-01T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547929',
    numero: 294,
    id    : '79292743',
    deudor: {
      cedula        : 79292743,
      nombreCompleto: 'HERNANDO PULECIO PAREDES',
      tel           : {
        fijo   : '4619449',
        celular: ''
      },
      email: 'hpulecio@cable.net.co',
      direccion:
        'CALLE 86 A No 69 T -41  TORRE 1 APARTAMENTO 902',
      primerNombre   : 'HERNANDO',
      primerApellido : 'PULECIO',
      segundoApellido: 'PAREDES'
    },
    demanda: {
      vencimientoPagare: '2020-09-13',
      obligacion       : [
        12676248
      ],
      entregaGarantiasAbogado: '2017-09-18',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '63'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '1'
        }
      },
      radicado      : '2017 - 00924',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '1'
      }
    },
    capitalAdeudado: 48498610,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400306320170092400',
    grupo          : 'Reintegra',
    idProceso      : [
      65700110
    ],
    fecha: '2023-07-24T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454793f',
    numero: 316,
    id    : '8799171',
    deudor: {
      cedula: 8799171,
      nombreCompleto:
        'MANUEL ENRIQUE ARTEAGA OROZCO',
      tel: {
        fijo   : '5164071',
        celular: ''
      },
      email: 'saliradelante2012@hotmail.com',
      direccion:
        'CARRERA 18 B No 4 C -  20  SOACHA',
      primerNombre   : 'MANUEL',
      segundoNombre  : 'ENRIQUE',
      primerApellido : 'ARTEAGA',
      segundoApellido: 'OROZCO'
    },
    demanda: {
      vencimientoPagare: '2030-01-05',
      obligacion       : [
        '180049   53037120066499008',
        '3778133433049336 /4513075801129044'
      ],
      obligacion2:
        '3778133433049336 /4513075801129044',
      entregaGarantiasAbogado: '2017-10-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'SOACHA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-01-civil-municipal-de-bogota',
          id  : '1'
        },

      },
      radicado      : '2017 - 00323',
      etapaProcesal : 'EJECUCION',
      despachoActivo: {
        tipo: 'Civil Municipal',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-01-civil-municipal-de-bogota',
        id  : '1'
      }
    },
    capitalAdeudado: 44944657,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '25754400300120170032300',
    grupo          : 'Bancolombia',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d7933454794b',
    numero: 328,
    id    : '52907317',
    deudor: {
      cedula: 52907317,
      nombreCompleto:
        'SANDRA MILENA BARRETO BERMUDEZ',

      email: 'milena125@hotmail.com',
      direccion:
        'CALLE 74 A  SUR No 92 -21 torre 3',
      primerNombre   : 'SANDRA',
      segundoNombre  : 'MILENA',
      primerApellido : 'BARRETO',
      segundoApellido: 'BERMUDEZ'
    },
    demanda: {
      vencimientoPagare: '2017-05-06',
      obligacion       : [
        '5740084189 /5740084216',
        '160204/377813372389032'
      ],
      obligacion2            : '160204/377813372389032',
      entregaGarantiasAbogado: '001/11/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '26'
        },

      },
      radicado      : '2017 - 01293',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '26'
      }
    },
    capitalAdeudado: 33615204,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400302620170129300',
    grupo          : 'LiosJuridicos',
    idProceso      : [
      50846930
    ],
    fecha: '2018-10-02T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547951',
    numero: 334,
    id    : '79853302',
    deudor: {
      cedula: 79853302,
      nombreCompleto:
        'NESTOR JULIO MARTINEZ ORJUELA',
      tel: {
        fijo   : '7459324 ',
        celular: '3132088678'
      },
      email          : 'nanbravo04@hotmail.com',
      direccion      : 'CALLE  70 A BIS  No 117-16',
      primerNombre   : 'NESTOR',
      segundoNombre  : 'JULIO',
      primerApellido : 'MARTINEZ',
      segundoApellido: 'ORJUELA'
    },
    demanda: {
      vencimientoPagare: '15/01/2020',
      obligacion       : [
        'AUDIOPRESTAMO'
      ],
      entregaGarantiasAbogado: '26/09/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '68'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '15'
        }
      },
      radicado      : '2017 - 01306',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '15'
      }
    },
    capitalAdeudado: 15018661,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400306820170130600',
    grupo          : 'Reintegra',
    idProceso      : [
      50765770
    ],
    fecha: '2022-09-27T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547954',
    numero: 337,
    id    : '79666742',
    deudor: {
      cedula: 79666742,
      nombreCompleto:
        'HECTOR ALFONSO TORRES RIOS',
      tel: {
        fijo   : '7651426 ',
        celular: '3115030138'
      },
      email: 'rubypaez71@hotmail.com',
      direccion:
        'TRANSVERSAL 17 No  64 F - 04 CASA 1 BIFAMILIAR MARLY',
      primerNombre   : 'HECTOR',
      segundoNombre  : 'ALFONSO',
      primerApellido : 'TORRES',
      segundoApellido: 'RIOS'
    },
    demanda: {
      vencimientoPagare: '2026-06-22',
      obligacion       : [
        140085
      ],
      entregaGarantiasAbogado: '2017-11-16',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '6'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '4'
        }
      },
      radicado      : '2017 - 00964',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '4'
      }
    },
    capitalAdeudado: 99119191,
    llaveProceso   : '11001400300620170096400',
    grupo          : 'Insolvencia',
    idProceso      : [
      50857820
    ],
    fecha: '2023-07-12T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547976',
    numero: 371,
    id    : '39765816',
    deudor: {
      cedula: 39765816,
      nombreCompleto:
        'MARTHA ANDREA MORA COLLAZOS',

      email: 'andreato1a@hotmaul.com',
      direccion:
        'CALLE 50 SUR 93 D- 38 APTO 401 TORRE 6',
      primerNombre   : 'MARTHA',
      segundoNombre  : 'ANDREA',
      primerApellido : 'MORA',
      segundoApellido: 'COLLAZOS'
    },
    demanda: {
      vencimientoPagare: '2024-03-30',
      obligacion       : [
        117171,
        377813401553319
      ],
      obligacion2            : 377813401553319,
      entregaGarantiasAbogado: '2018-01-16',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '24'
        },

      },
      radicado      : '2018 - 00143',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '24'
      }
    },
    capitalAdeudado: 10775194,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400302420180014300',
    grupo          : 'LiosJuridicos',
    idProceso      : [
      51002530
    ],
    fecha: '2019-09-27T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454797b',
    numero: 376,
    id    : '11203111',
    deudor: {
      cedula        : 11203111,
      nombreCompleto: 'ROBERTO RICO RUIZ',

      email: 'roberto.rico.ruiz@gmail.com',
      direccion:
        'CALLE 128 96A - 05 CASA 3 MULTIFAMILIAR ARRAYANES',
      primerNombre   : 'ROBERTO',
      primerApellido : 'RICO',
      segundoApellido: 'RUIZ'
    },
    demanda: {
      vencimientoPagare: '2019-04-29',
      obligacion       : [
        118010,
        '377813183474353 // 4513074148699942 / 5491579209500691'
      ],
      obligacion2:
        '377813183474353 // 4513074148699942 / 5491579209500691',
      entregaGarantiasAbogado: '17/01/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '76'
        },

      },
      radicado      : '2018 - 00052',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '76'
      }
    },
    capitalAdeudado: 27308454,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400307620180005200',
    grupo          : 'LiosJuridicos',
    idProceso      : [
      51500810
    ],
    fecha: '2023-07-24T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547986',
    numero: 387,
    id    : '91263617',
    deudor: {
      cedula: 91263617,
      nombreCompleto:
        'LEONARDO SANABRIA SANABRIA',
      tel: {
        fijo   : '4251180 ',
        celular: '3118066048'
      },
      email: 'leo.sanabria@live.com.mx',
      direccion:
        'CARRERA 85  B No  23 B - 69  INTERIOR 7 APARTAMENTO  314',
      primerNombre   : 'LEONARDO',
      primerApellido : 'SANABRIA',
      segundoApellido: 'SANABRIA'
    },
    demanda: {
      vencimientoPagare: '2019-05-05',
      obligacion       : [
        2500085167,
        'AUDIOPRESTAMO'
      ],
      obligacion2            : 'AUDIOPRESTAMO',
      entregaGarantiasAbogado: '2017-11-09',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '50'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '14'
        }
      },
      radicado      : '2017 - 01336',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '14'
      }
    },
    capitalAdeudado: 36331525,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400305020170133600',
    grupo          : 'Reintegra',
    idProceso      : [
      106185210
    ],
    fecha: '2023-01-19T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454798f',
    numero: 396,
    id    : '80733467',
    deudor: {
      cedula: 80733467,
      nombreCompleto:
        'ORLANDO ENRIQUE NOVOA BARRETO',
      tel: {
        fijo   : '7836655 ',
        celular: '3118163887'
      },
      email          : 'orlandonovoa9@gmail.com',
      direccion      : 'CARRERA 88 A No  67 - 44',
      primerNombre   : 'ORLANDO',
      segundoNombre  : 'ENRIQUE',
      primerApellido : 'NOVOA',
      segundoApellido: 'BARRETO'
    },
    demanda: {
      vencimientoPagare: '2019-06-08',
      obligacion       : [
        10000090724
      ],
      entregaGarantiasAbogado: '2017-11-15',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '64'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '16'
        }
      },
      radicado      : '2017 - 01623',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '16'
      }
    },
    capitalAdeudado: 24000000,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400306420170162300',
    grupo          : 'Reintegra',
    idProceso      : [
      112730580
    ],
    fecha: '2023-03-13T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454799a',
    numero: 407,
    id    : '79328264',
    deudor: {
      cedula: 79328264,
      nombreCompleto:
        'NESTOR ALBERTO CRISTANCHO LOPEZ',
      tel: {
        fijo   : '5266894',
        celular: ''
      },
      email: 'nescri64@hotmail.com',
      direccion:
        'CARRERA 11 No  144 - 22 APARTAMENTO 301',
      primerNombre   : 'NESTOR',
      segundoNombre  : 'ALBERTO',
      primerApellido : 'CRISTANCHO',
      segundoApellido: 'LOPEZ'
    },
    demanda: {
      vencimientoPagare: '2024-01-26',
      obligacion       : [
        3550083774,
        '4513082972339 / 5303714867753385'
      ],
      obligacion2:
        '4513082972339 / 5303714867753385',
      entregaGarantiasAbogado: '2017-11-16',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '78'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '16'
        }
      },
      radicado      : '2017 - 01164',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '16'
      }
    },
    capitalAdeudado: 31100999,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400307820170116400',
    grupo          : 'Reintegra',
    idProceso      : [
      51465700
    ],
    fecha: '2023-07-21T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d7933454799c',
    numero: 409,
    id    : '900545720',
    deudor: {
      cedula        : 900545720,
      nombreCompleto: 'CREAS SOLUCIONES S.A.S',
      tel           : {
        fijo   : '8626344 ',
        celular: '3107982028'
      },
      email: 'andibarracosta@gmail.com',
      direccion:
        'CARRERA 50 1# 47 - 50 INT 1 APTO 101',
      primerNombre   : 'CREAS',
      primerApellido : 'SOLUCIONES',
      segundoApellido: 'S.A.S'
    },
    demanda: {
      vencimientoPagare: '2018-06-20',
      obligacion       : [
        4550087219
      ],
      entregaGarantiasAbogado: '2018-02-15',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-056-civil-municipal-de-bogota',
          id  : '56'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-07-de-ejecucion-civil-municipal-de-bogota',
          id  : '7'
        }
      },
      radicado      : '2018 - 00221',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-07-de-ejecucion-civil-municipal-de-bogota',
        id  : '7'
      }
    },
    capitalAdeudado: 11949471,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400305620180022100',
    grupo          : 'Bancolombia',
    idProceso      : [
      51042800
    ],
    fecha: '2023-06-08T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345479ae',
    numero: 427,
    id    : '1069738339',
    deudor: {
      cedula: 1069738339,
      nombreCompleto:
        'JUAN CAMILO CHINGATE PENAGOS',
      tel: {
        fijo   : '',
        celular: '313389449'
      },
      direccion:
        'VEREDA LA 22 KILOMETRO 30 (CAJICA) // VEREDA SUBIA NORTE, PARTE BAJA, FINCA EL RINCON LOTE 2 (GRANADA- CUND): VEREDA SUBIA NORTE PARTE BAJA FINCA EL RINCON LOTE 2 (GRANADA - CUND)',
      primerNombre   : 'JUAN',
      segundoNombre  : 'CAMILO',
      primerApellido : 'CHINGATE',
      segundoApellido: 'PENAGOS'
    },
    demanda: {
      vencimientoPagare: '2021-01-16',
      obligacion       : [
        12730779
      ],
      entregaGarantiasAbogado: '2018-01-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'CAJICA',
      juzgado                : {
        origen: {
          tipo: ' PM',
          id  : '2'
        },

      },
      radicado      : '2018 - 00048',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: ' PM',
        id  : '2'
      }
    },
    capitalAdeudado: 21049112,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '25126408900220180004800',
    grupo          : 'Reintegra',
    idProceso      : [
      86157021
    ]
  },
  {
    _id   : '64cc10e7ea30d793345479d2',
    numero: 463,
    id    : '52883958',
    deudor: {
      cedula: 52883958,
      nombreCompleto:
        'LEIDY YANETH VIDAL RODRIGUEZ',
      tel: {
        fijo   : '7114516',
        celular: ''
      },
      email          : 'leidyyaneth.lyv@gmail.com',
      direccion      : 'DIAGONAL 2 No 21 B-20',
      primerNombre   : 'LEIDY',
      segundoNombre  : 'YANETH',
      primerApellido : 'VIDAL',
      segundoApellido: 'RODRIGUEZ'
    },
    demanda: {
      vencimientoPagare:
        '4/02/2021 // 16/02/2021',
      obligacion: [
        'AMERICAN 0377814037749057',
        'VISA 4513083943843365 // MASTER 5303729958258417'
      ],
      obligacion2:
        'VISA 4513083943843365 // MASTER 5303729958258417',
      entregaGarantiasAbogado: '2018-07-05',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: ' Pequeñas Causas y Competencias Multiples',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-014-de-pequenas-causas-y-competencia-multiple-de-bogota',
          id  : '14'
        },

      },
      radicado      : '2019 - 00656',
      etapaProcesal : 'CONTESTACION DEMANDA',
      despachoActivo: {
        tipo: ' Pequeñas Causas y Competencias Multiples',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-014-de-pequenas-causas-y-competencia-multiple-de-bogota',
        id  : '14'
      }
    },
    capitalAdeudado: 24501535,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001418901420190065600',
    grupo          : 'Bancolombia',
    idProceso      : [
      51816100,
      135801811
    ],
    fecha     : '2023-08-09T05:00:00.000Z',
    idProcesos: [
      51816100
    ]
  },
  {
    _id   : '64cc10e7ea30d793345479d5',
    numero: 466,
    id    : '53160094',
    deudor: {
      cedula: 53160094,
      nombreCompleto:
        'DARLEY JULIED PAEZ HIGUERA',
      tel: {
        fijo   : '14933266',
        celular: '3115754578'
      },
      email: 'djpaez5@hotmail.com',
      direccion:
        'CALLE 130 No 126-96 INTERIOR 16 APARTAMENTO 302',
      primerNombre   : 'DARLEY',
      segundoNombre  : 'JULIED',
      primerApellido : 'PAEZ',
      segundoApellido: 'HIGUERA'
    },
    demanda: {
      vencimientoPagare:
        '3/05/2020 // 17/04/2020',
      obligacion: [
        '37781415851035/',
        '4099830008406922 / 5303710339142355'
      ],
      obligacion2:
        '4099830008406922 / 5303710339142355',
      entregaGarantiasAbogado: '29/01/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '52'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '17'
        }
      },
      radicado      : '2018 - 00117',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '17'
      }
    },
    capitalAdeudado: 14270897,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400305220180011700',
    grupo          : 'Reintegra',
    idProceso      : [
      50990370
    ],
    fecha: '2023-04-13T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345479de',
    numero: 475,
    id    : '4281808',
    deudor: {
      cedula: 4281808,
      nombreCompleto:
        'JOSE LIBRANDO CANDELA MUNEVAR',
      tel: {
        fijo   : '7113967',
        celular: ''
      },
      email          : 'eedibrando600@hotmail.com',
      direccion      : 'CALLE 1 A No 13-30  SOACHA',
      primerNombre   : 'JOSE',
      segundoNombre  : 'LIBRANDO',
      primerApellido : 'CANDELA',
      segundoApellido: 'MUNEVAR'
    },
    demanda: {
      vencimientoPagare: '03/08//2019',
      obligacion       : [
        1000090987
      ],
      entregaGarantiasAbogado: '15/02/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'SOACHA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '2'
        },

      },
      radicado      : '2018 - 00113',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '2'
      }
    },
    capitalAdeudado: 39146947,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25754408900220180011300',
    grupo          : 'Reintegra',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d793345479e0',
    numero: 477,
    id    : '79568543',
    deudor: {
      cedula: 79568543,
      nombreCompleto:
        'ADOLFO  LEON DAZA FERNANDEZ',
      tel: {
        fijo   : '7038787',
        celular: ''
      },
      email          : 'adolfo.daza@gmail.com',
      direccion      : 'CALLE 60 No 38-26 APTO 301',
      primerNombre   : 'ADOLFO',
      segundoNombre  : '',
      primerApellido : 'LEON',
      segundoApellido: 'DAZA FERNANDEZ '
    },
    demanda: {
      vencimientoPagare: '2020-08-15',
      obligacion       : [
        'AUDIOPRESTAMO'
      ],
      entregaGarantiasAbogado: '2018-04-21',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '4'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '7'
        }
      },
      radicado      : '2018 - 00475',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '7'
      }
    },
    capitalAdeudado: 14534881,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300420180047500',
    grupo          : 'Reintegra',
    idProceso      : [
      51149410
    ],
    fecha: '2023-02-27T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345479e3',
    numero: 480,
    id    : '39575032',
    deudor: {
      cedula        : 39575032,
      nombreCompleto: 'ADRIANA VANEGAS PEÑA',
      tel           : {
        fijo   : '',
        celular: '3152573448'
      },
      email: 'adriana.0806@hotmail.com',
      direccion:
        'CARRERA 14 No 22-10  APARTAMENTO  202 GIRARDOT',
      primerNombre   : 'ADRIANA',
      primerApellido : 'VANEGAS',
      segundoApellido: 'PEÑA'
    },
    demanda: {
      vencimientoPagare:
        '15/04/2021 // 6/04/2021',
      obligacion: [
        'AUDIOPRESTAMO',
        5306960687119070
      ],
      obligacion2            : 5306960687119070,
      entregaGarantiasAbogado: '23/08/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'GIRARDOT',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '3'
        },

      },
      radicado      : '2021 - 00539',
      etapaProcesal : 'EJECUCION',
      despachoActivo: {
        tipo: 'Civil Municipal',
        id  : '3'
      }
    },
    capitalAdeudado: 17217066,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25307400300320210053900',
    grupo          : 'Reintegra',
    idProceso      : [
      121826111
    ],
    fecha: '2023-03-10T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345479f3',
    numero: 496,
    id    : '13222728',
    deudor: {
      cedula        : 13222728,
      nombreCompleto: 'MODESTO PINEDA PEREZ',
      tel           : {
        fijo   : '8852490',
        celular: ''
      },
      email          : 'mopadinco@yahoo.com',
      direccion      : 'CARRERA 6 No 6-59',
      primerNombre   : 'MODESTO',
      primerApellido : 'PINEDA',
      segundoApellido: 'PEREZ'
    },
    demanda: {
      vencimientoPagare:
        '14/09/2021 // 07/05/2021',
      obligacion: [
        'AUDIOPRESTAMO',
        5491570347356810
      ],
      obligacion2            : 5491570347356810,
      entregaGarantiasAbogado: '18/09/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'CHIA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-003-civil-municipal-de-chia',
          id  : '3'
        },

      },
      radicado      : '2018 - 00602',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-003-civil-municipal-de-chia',
        id  : '3'
      }
    },
    capitalAdeudado: 27373832,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25175408900320180060200',
    grupo          : 'Bancolombia',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d793345479f7',
    numero: 500,
    id    : '900566964-9',
    deudor: {
      cedula        : '900566964-9',
      nombreCompleto: 'SMARTITECH S.A.S',
      tel           : {
        fijo   : '3849696',
        celular: ''
      },
      direccion     : 'CARRERA 13 No 73-33',
      primerNombre  : 'SMARTITECH',
      primerApellido: 'S.A.S'
    },
    demanda: {
      vencimientoPagare: '2020-05-27',
      obligacion       : [
        68928057402,
        'AUDIOPRESTAMO'
      ],
      obligacion2            : 'AUDIOPRESTAMO',
      entregaGarantiasAbogado: '2018-04-16',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '6'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '17'
        }
      },
      radicado      : '2018 - 00454',
      etapaProcesal : 'EJECUCION',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '17'
      }
    },
    capitalAdeudado: 15086199,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300620180045400',
    grupo          : 'Reintegra',
    idProceso      : [
      51154840,
      0
    ],
    fecha     : '2023-04-10T05:00:00.000Z',
    idProcesos: [
      51154840
    ]
  },
  {
    _id   : '64cc10e7ea30d793345479f9',
    numero: 502,
    id    : '1023861016',
    deudor: {
      cedula: 1023861016,
      nombreCompleto:
        'ANGELICA NATHALY ROZO FRANCO',
      tel: {
        fijo   : '6594339',
        celular: ''
      },
      email: 'Anrf1985@hotmail.com',
      direccion:
        'TRANSVERSAL 70G SUR-68-52 TORRE 18 APARTAMENTO 1401',
      primerNombre   : 'ANGELICA',
      segundoNombre  : 'NATHALY',
      primerApellido : 'ROZO',
      segundoApellido: 'FRANCO'
    },
    demanda: {
      vencimientoPagare: '05/01/2021',
      obligacion       : [
        4594260107010410
      ],
      entregaGarantiasAbogado: '12/10/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: ' Pequeñas Causas y Competencias Multiples',
          id  : '16'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '2'
        }
      },
      radicado      : '2019 - 01085',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '2'
      }
    },
    capitalAdeudado: 10930100,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001418901620190108500',
    grupo          : 'Reintegra',
    idProceso      : [
      86958040
    ],
    fecha: '2023-02-28T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d793345479ff',
    numero: 508,
    id    : '11230400',
    deudor: {
      cedula: 11230400,
      nombreCompleto:
        'JOSE ALFONSO VASQUEZ TOVAR',
      tel: {
        fijo   : '',
        celular: '3123703828'
      },
      email          : 'joalvato09@hotmail.com',
      direccion      : 'CALLE 2 A No 5-22 APTO 503',
      primerNombre   : 'JOSE',
      segundoNombre  : 'ALFONSO',
      primerApellido : 'VASQUEZ',
      segundoApellido: 'TOVAR'
    },
    demanda: {
      vencimientoPagare: '01/03/2026',
      obligacion       : [
        2490084469
      ],
      entregaGarantiasAbogado: '26/11/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'LA CALERA',
      juzgado                : {
        origen: {
          tipo: ' PM',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-01-promiscuo-municipal-de-la-calera',
          id  : '001'
        },

      },
      radicado      : '2018 - 00371',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: ' PM',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-01-promiscuo-municipal-de-la-calera',
        id  : '001'
      }
    },
    capitalAdeudado: 29416113,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25377408900120180037100',
    grupo          : 'Bancolombia',
    idProceso      : [
      0
    ]
  },
  {
    _id   : '64cc10e7ea30d79334547a15',
    numero: 530,
    id    : '35455606',
    deudor: {
      cedula        : 35455606,
      nombreCompleto: 'MARIA CLARA REYES REYES',
      tel           : {
        fijo   : '60991181',
        celular: ''
      },
      email          : 'mariaclarareyes@hotmail.com',
      direccion      : 'CALLE 175 No 70-40',
      primerNombre   : 'MARIA',
      segundoNombre  : 'CLARA',
      primerApellido : 'REYES',
      segundoApellido: 'REYES'
    },
    demanda: {
      vencimientoPagare: '2020-10-05',
      obligacion       : [
        40998833882814000,
        5303729887314280
      ],
      obligacion2            : 5303729887314280,
      entregaGarantiasAbogado: '2018-04-21',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          id  : '81'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '1'
        }
      },
      radicado      : '2018 - 00514',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '1'
      }
    },
    capitalAdeudado: 14409411,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400308120180051400',
    grupo          : 'Reintegra',
    idProceso      : [
      51918470
    ],
    fecha: '2023-03-14T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547a17',
    numero: 532,
    id    : '900520023',
    deudor: {
      cedula        : 900520023,
      nombreCompleto: 'DIMOIN COLOMBIA S.A.S.',

      direccion      : 'AV BOYACA 63D - 26 OFICINA 103',
      primerNombre   : 'DIMOIN',
      primerApellido : 'COLOMBIA',
      segundoApellido: 'S.A.S.'
    },
    demanda: {
      obligacion: [
        65886140334,
        4594260446916180
      ],
      obligacion2            : 4594260446916180,
      entregaGarantiasAbogado: '2020-09-05',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: ' Pequeñas Causas y Competencias Multiples/ Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-068-civil-municipal-de-bogota',
          id  : '5068'
        },

      },
      radicado      : '2020-1021',
      etapaProcesal : 'CONTESTACIÓN DEMANDA',
      despachoActivo: {
        tipo: ' Pequeñas Causas y Competencias Multiples/ Civil Municipal',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-068-civil-municipal-de-bogota',
        id  : '5068'
      }
    },
    capitalAdeudado: 15324570,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400306820200102100',
    grupo          : 'Bancolombia',
    idProceso      : [
      112628300
    ],
    fecha: '2023-07-27T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547a22',
    numero: 543,
    id    : '51579807',
    deudor: {
      cedula        : 51579807,
      nombreCompleto: 'ROSALIA CHARRY  SARMIENTO',
      tel           : {
        fijo   : '2943968',
        celular: ''
      },
      email: 'rochi2656@hotmail.com',
      direccion:
        'CALLE 19 A No 82 - 65 INT 6 APTO 503',
      primerNombre   : 'ROSALIA',
      segundoNombre  : 'CHARRY',
      primerApellido : '',
      segundoApellido: 'SARMIENTO'
    },
    demanda: {
      vencimientoPagare: '13/03/2022',
      obligacion       : [
        3880083804,
        '4513074508682496 // 53037103332223839'
      ],
      obligacion2:
        '4513074508682496 // 53037103332223839',
      entregaGarantiasAbogado: '10/10/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: ' Pequeñas Causas y Competencias Multiples',
          id  : '12'
        },
        ejecucion: {
          tipo: 'Civil Municipal de Ejecucion',
          id  : '11'
        }
      },
      radicado      : '2018 - 00951',
      etapaProcesal : 'EJECUCIÓN',
      despachoActivo: {
        tipo: 'Civil Municipal de Ejecucion',
        id  : '11'
      }
    },
    capitalAdeudado: 24849682,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001418901220180095100',
    grupo          : 'Reintegra',
    idProceso      : [
      64673240
    ],
    fecha: '2023-05-15T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547a2a',
    numero: 551,
    id    : '1075211773',
    deudor: {
      cedula: 1075211773,
      nombreCompleto:
        'PEDRO JONATHAN RAMIREZ GOMEZ',
      email          : 'jonathansoldier@hotmail.com',
      direccion      : 'KR 1 2 41 Fusagasugá',
      primerNombre   : 'PEDRO',
      segundoNombre  : 'JONATHAN',
      primerApellido : 'RAMIREZ',
      segundoApellido: 'GOMEZ',

    },
    demanda: {
      vencimientoPagare: '2028-03-08',
      obligacion       : [
        2640096179
      ],
      entregaGarantiasAbogado: '2023-06-20',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'FUSAGASUGA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-003-civil-municipal-de-fusagasuga',
          id  : '3'
        },

      },
      radicado      : '2023 - 00371',
      despachoActivo: {
        tipo: 'Civil Municipal',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-003-civil-municipal-de-fusagasuga',
        id  : '3'
      }
    },
    capitalAdeudado: 28018855,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    _id   : '64cc10e7ea30d79334547a2b',
    numero: 552,
    id    : '1023874668',
    deudor: {
      cedula: 1023874668,
      nombreCompleto:
        'OSCAR MAURICIO GOMEZ MENDOZA',
      tel: {
        fijo   : '2043773',
        celular: ''
      },
      email          : 'oscar2794@hotmail.com',
      direccion      : 'CL 49 A BIS SUR No. 5 N 10',
      primerNombre   : 'OSCAR',
      segundoNombre  : 'MAURICIO',
      primerApellido : 'GOMEZ',
      segundoApellido: 'MENDOZA'
    },
    demanda: {
      vencimientoPagare:
        '10/02/2026 // 27/01/2026',
      obligacion: [
        530104065,
        530103261
      ],
      obligacion2            : 530103261,
      entregaGarantiasAbogado: '2023-06-20',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: 'Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-04-civil-municipal-de-bogota',
          id  : '4'
        },

      },
      radicado      : '2023 - 00622',
      despachoActivo: {
        tipo: 'Civil Municipal',
        url : 'https://www.ramajudicial.gov.co/web/juzgado-04-civil-municipal-de-bogota',
        id  : '4'
      }
    },
    capitalAdeudado: 77376262,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300420230062200',
    grupo          : 'Bancolombia',
    idProceso      : [
      130946630
    ],
    fecha: '2023-08-01T05:00:00.000Z'
  },
  {
    _id   : '64cc10e7ea30d79334547a2d',
    numero: 554,
    id    : '51976656',
    deudor: {
      cedula: 51976656,
      nombreCompleto:
        'SANDRA PATRICIA ALVAREZ RODRIGUEZ',
      tel: {
        fijo   : '2297973 ',
        celular: '3157352910'
      },
      email: 'sandris73@hotmail.com',
      direccion:
        'Carrera 102 No. 69 - 81 Casa 5 Conjunto Residencial Montes de Tierra Grata',
      primerNombre   : 'SANDRA',
      segundoNombre  : 'PATRICIA',
      primerApellido : 'ALVAREZ',
      segundoApellido: 'RODRIGUEZ'
    },
    demanda: {
      vencimientoPagare:
        '22/02/2026 // 4/07/2026 // 6/03/2026',
      obligacion: [
        2150100545,
        '377844028390801 y 4513080181283486'
      ],
      obligacion2:
        '377844028390801 y 4513080181283486',
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',


    },
    capitalAdeudado: 22111021,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    _id   : '64cc10e7ea30d79334547a33',
    numero: 560,
    id    : '1129565798',
    deudor: {
      cedula        : 1129565798,
      nombreCompleto: 'HANSEL MARTINEZ BARROS',
      tel           : {
        fijo   : '3930210 ',
        celular: '3043463859 // 3005306070'
      },
      email: 'inghanselmartinez@hotmail.com',
      direccion:
        'CR 51 43 04 Barrio Abajo Barranquilla // Carrera 71 No. 88A - 31 Barranquilla // Calle 42 A No. 46 - 04 Barrio El Parque en Soledad (Atlantico)',
      primerNombre   : 'HANSEL',
      primerApellido : 'MARTINEZ',
      segundoApellido: 'BARROS'
    },
    demanda: {
      vencimientoPagare: '6/03/2026 //4/07/2026',
      obligacion       : [
        4770111750,
        'PAGARÉ SIN NÚMERO T. MASTER CARD 5303720229555616 // T. VISA 4513070377907980'
      ],
      obligacion2:
        'PAGARÉ SIN NÚMERO T. MASTER CARD 5303720229555616 // T. VISA 4513070377907980',
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BARRAQNUILLA',


    },
    capitalAdeudado: 40696764,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    _id   : '64cc10e7ea30d79334547a38',
    numero: 565,
    id    : '79399032',
    deudor: {
      cedula: 79399032,
      nombreCompleto:
        'JORGE ALEXANDER ABADIA CARRILLO',
      primerNombre   : 'JORGE',
      segundoNombre  : 'ALEXANDER',
      primerApellido : 'ABADIA',
      segundoApellido: 'CARRILLO',

    },
    demanda: {
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',



    },
    capitalAdeudado: 0,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    _id   : '64cc10e7ea30d79334547a39',
    numero: 566,
    id    : '1061047348',
    deudor: {
      cedula: 1061047348,
      nombreCompleto:
        'SANDRA MILENA PALACIO RIVERA',
      primerNombre   : 'SANDRA',
      segundoNombre  : 'MILENA',
      primerApellido : 'PALACIO',
      segundoApellido: 'RIVERA',

    },
    capitalAdeudado: 0,
    grupo          : 'Bancolombia',

  }
];

const newCarpetasMap = carpetas.map(
  (
    carpeta
  ) => {

    const {
      deudor, demanda
    } = carpeta;
    const newId = Number(carpeta.id)
    console.log(newId)
    const {
      obligacion2, ...newdemanda
    } = demanda;
const newCarpeta = {
  ...carpeta,
  id: Number(carpeta.id)
}

    return newCarpeta;
  }
);

fs.writeFile(
  'carpetas.json',
  JSON.stringify(
    newCarpetasMap
  )
);
