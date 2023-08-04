import * as fs from 'fs/promises';

export const carpetas = [
  {
    numero: 1,
    id    : '39581581',
    deudor: {
      cedula        : 39581581,
      nombreCompleto: 'ALEXANDRA MILENA JIMENEZ AGUILAR'
    },
    capitalAdeudado: 0,
    llaveProceso   : '2530740030012017025000',
    grupo          : 'Terminados'
  },
  {
    numero: 2,
    id    : '1026259010',
    deudor: {
      cedula        : 1026259010,
      nombreCompleto: 'EDWIN ANDRES CUERVO VERDUGO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001310304320170055400',
    grupo          : 'Terminados'
  },
  {
    numero: 3,
    id    : '1018441487',
    deudor: {
      cedula        : 1018441487,
      nombreCompleto: 'MARIA CLAUDIA REATIGA URREA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25126408900220170071500',
    grupo          : 'Terminados'
  },
  {
    numero: 4,
    id    : '93437973',
    deudor: {
      cedula        : 93437973,
      nombreCompleto: 'DIPSON EUSEBIO SANCHEZ CASTIBLANCO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305320170072000',
    grupo          : 'Terminados'
  },
  {
    numero: 5,
    id    : '20645940',
    deudor: {
      cedula        : 20645940,
      nombreCompleto: 'FANY PATRICIA AVELLANEDA TOVAR'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25322418900120170016800',
    grupo          : 'Terminados'
  },
  {
    numero: 6,
    id    : '79645559',
    deudor: {
      cedula        : 79645559,
      nombreCompleto: 'FRANCISCO MONTAÑA QUESADA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307620170044400',
    grupo          : 'Terminados'
  },
  {
    numero: 7,
    id    : '79733852',
    deudor: {
      cedula        : 79733852,
      nombreCompleto: 'JOSE RICARDO PRIETO CRUZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001310302720170037400',
    grupo          : 'Terminados'
  },
  {
    numero: 8,
    id    : '79642493',
    deudor: {
      cedula        : 79642493,
      nombreCompleto: 'JOSE WILSON ROJAS VALDES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301420170066700',
    grupo          : 'Terminados'
  },
  {
    numero: 9,
    id    : '1020731500',
    deudor: {
      cedula        : 1020731500,
      nombreCompleto: 'DANIELA ALEJANDRA CARDENAS RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '1100140030442017099800',
    grupo          : 'Terminados'
  },
  {
    numero: 10,
    id    : '52396019',
    deudor: {
      cedula        : 52396019,
      nombreCompleto: 'MARINA MORALES HERNANDEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418900320170090900',
    grupo          : 'Terminados'
  },
  {
    numero: 11,
    id    : '80743147',
    deudor: {
      cedula        : 80743147,
      nombreCompleto: 'JAVIER ROMERO REYES',
      tel           : 'F 3903652 CEL 3209229120',
      email         : 'sandrapatriciajoya-2545@hotmail.com',
      direccion     : 'CRA 18 H No. 76 A-53 SUR BOGOTA'
    },
    demanda: {
      vencimientoPagare      : '2017-08-28',
      obligacion             : '12313737//377815899589556',
      obligacion2            : 4513070106144855,
      entregaGarantiasAbogado: '2017-06-07',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          id  : 37,
          tipo: 'Civil Municipal'
        },
        ejecucion: {
          id  : 14,
          tipo: 'Civil Municipal de Ejecucion'
        }
      },
      radicado: '2017 - 00839'
    },
    capitalAdeudado: 21596919,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400303720170083900',
    grupo          : 'LiosJuridicos'
  },
  {
    numero: 12,
    id    : '11436632',
    deudor: {
      cedula        : 11436632,
      nombreCompleto: 'OSCAR MANUEL TRIVIÑO GARCIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25269400300220180015800',
    grupo          : 'Terminados'
  },
  {
    numero: 13,
    id    : '447028',
    deudor: {
      cedula        : 447028,
      nombreCompleto: 'PASCUAL ORTEGA ENCISO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25867418900120170002000',
    grupo          : 'Terminados'
  },
  {
    numero: 14,
    id    : '52441656',
    deudor: {
      cedula        : 52441656,
      nombreCompleto: 'ELSA MILENA SOSA  ROMERO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25740418900120170028400',
    grupo          : 'Terminados'
  },
  {
    numero: 15,
    id    : '1098678636',
    deudor: {
      cedula        : 1098678636,
      nombreCompleto: 'SILVIA SUSANA SIERRA CASTAÑEDA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307220170065400',
    grupo          : 'Terminados'
  },
  {
    numero: 16,
    id    : '1077969975',
    deudor: {
      cedula        : 1077969975,
      nombreCompleto: 'YESID ALBEIRO RAMOS',
      tel           : 'CEL 3212337597',
      email         : 'yess_Id@hotmail.com',
      direccion     : 'CARRERA 77B No. 68B - 19 BARRIO SANTA HELENITA'
    },
    demanda: {
      vencimientoPagare      : '2020-05-04',
      obligacion             : 2530444,
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
      radicado     : '2017 - 00884',
      etapaProcesal: 'EMPLAZAMIENTO'
    },
    capitalAdeudado: 33791309,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400300320170088400',
    grupo          : 'Bancolombia'
  },
  {
    numero: 17,
    id    : '52953923',
    deudor: {
      cedula        : 52953923,
      nombreCompleto: 'YEDSY CAROLAY ROJAS GAMBOA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900220170048000',
    grupo          : 'Terminados'
  },
  {
    numero: 18,
    id    : '79205977',
    deudor: {
      cedula        : 79205977,
      nombreCompleto: 'LUIS ENRIQUE ACOSTA CHAVARRIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25175400300320170026900',
    grupo          : 'Terminados'
  },
  {
    numero: 19,
    id    : '80001905',
    deudor: {
      cedula        : 80001905,
      nombreCompleto: 'ELIACID CHAVES OBANDO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302120170175500',
    grupo          : 'Terminados'
  },
  {
    numero: 20,
    id    : '94482258',
    deudor: {
      cedula        : 94482258,
      nombreCompleto: 'ANDRES MAURICIO FERNANDEZ DE SOTO DOMINGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302220170048300',
    grupo          : 'Terminados'
  },
  {
    numero: 21,
    id    : '11309242',
    deudor: {
      cedula        : 11309242,
      nombreCompleto: 'RAMIRO CRISTANCHO CONTRERAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25290400300120170043700',
    grupo          : 'Terminados'
  },
  {
    numero: 22,
    id    : '80073174',
    deudor: {
      cedula        : 80073174,
      nombreCompleto: 'JOSE EDWIN GARCES ARDILA',
      tel           : 'F 7978419',
      direccion     : 'CALLE 160 No. 58-75 TORRE 6 APTO 503 BOGOTA /// YOPAL CASANARE'
    },
    demanda: {
      vencimientoPagare      : '2020-04-26',
      obligacion             : 2453698,
      entregaGarantiasAbogado: '2017-05-11',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          id  : 85,
          tipo: '85 Civil Municipal'
        },
        ejecucion: {
          id  : 11,
          tipo: '11 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 00849',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 29690679,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400308520170084900',
    grupo          : 'Reintegra'
  },
  {
    numero: 23,
    id    : '11207272',
    deudor: {
      cedula        : 11207272,
      nombreCompleto: 'EDER ALEXIS HERRERA SAENZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25307400300120170033700',
    grupo          : 'Terminados'
  },
  {
    numero: 24,
    id    : '3034074',
    deudor: {
      cedula        : 3034074,
      nombreCompleto: 'WILSON ARMANDO RODRIGUEZ MORA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25299418900120170002400',
    grupo          : 'Terminados'
  },
  {
    numero: 25,
    id    : '3197274',
    deudor: {
      cedula        : 3197274,
      nombreCompleto: 'OMAR DARIO ZEA GALVIS',
      tel           : 'F 7479415',
      direccion     : 'CL 14 No. 10 - 45 Bucaramanga'
    },
    demanda: {
      vencimientoPagare      : '2020-05-10',
      obligacion             : 12705806,
      entregaGarantiasAbogado: '2017-05-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '11 CCTO'
        },
        ejecucion: {
          tipo: '1 CCTO EJ'
        }
      },
      radicado     : '2017 - 00335',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 107818114,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001310301120170033500',
    grupo          : 'Reintegra'
  },
  {
    numero: 26,
    id    : '52744376',
    deudor: {
      cedula        : 52744376,
      nombreCompleto: 'YUDY RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306520170082700',
    grupo          : 'Terminados'
  },
  {
    numero: 27,
    id    : '79004127',
    deudor: {
      cedula        : 79004127,
      nombreCompleto: 'NORBEY LOMBANA MAHECHA',
      tel           : 'F 34746523',
      email         : 347620,
      direccion     : 'CALLE 4 No. 14-161 GUADUAS (CUNDINAMARCA)'
    },
    demanda: {
      vencimientoPagare      : '2017-04-11',
      obligacion             : 7910080321,
      entregaGarantiasAbogado: '2017-05-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'GUADUAS',
      juzgado                : {
        origen: {
          tipo: '001 CIVIL CTO'
        }
      },
      radicado: '2017 - 00195'
    },
    capitalAdeudado: 96608106,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '25320310300120170019500',
    grupo          : 'Insolvencia'
  },
  {
    numero: 28,
    id    : '20563933',
    deudor: {
      cedula        : 20563933,
      nombreCompleto: 'MARIA SOCORRO TORRES DE GONZALEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25290400300120170036900',
    grupo          : 'Terminados'
  },
  {
    numero: 29,
    id    : '80814800',
    deudor: {
      cedula        : 80814800,
      nombreCompleto: 'WHITMAN JEFERSON NAJAR RAMIREZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25175400300120170051100',
    grupo          : 'Terminados'
  },
  {
    numero: 30,
    id    : '52367601',
    deudor: {
      cedula        : 52367601,
      nombreCompleto: 'MIREYA VIVIANA BELTRAN HERRERA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303020170095100',
    grupo          : 'Terminados'
  },
  {
    numero: 31,
    id    : '79590985',
    deudor: {
      cedula        : 79590985,
      nombreCompleto: 'JORGE PEREZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754400300320170021100',
    grupo          : 'Terminados'
  },
  {
    numero: 32,
    id    : '1022940572',
    deudor: {
      cedula        : 1022940572,
      nombreCompleto: 'JONATHAN ANDRES  BERNAL PARRA',
      tel           : 'CEL 3134775602',
      email         : 'jhonannicky@hotmail.com',
      direccion     : 'CALLE 36 B SUR No. 11-25 APTO 1307 BOGOTA'
    },
    demanda: {
      vencimientoPagare      : '2028-08-01',
      obligacion             : 4280019446,
      obligacion2            : '5406915580101610 4513077620518209//20990166568',
      entregaGarantiasAbogado: '2018-05-30',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '43 Civil Municipal'
        },
        ejecucion: {
          tipo: '18 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2018- 00384',
      etapaProcesal: 'EJECUCION'
    },
    capitalAdeudado: 54812000,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400304320180038400',
    grupo          : 'Reintegra'
  },
  {
    numero: 33,
    id    : '28936365',
    deudor: {
      cedula        : 28936365,
      nombreCompleto: 'NINI JOHANA CORTES MONROY'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308220170064900',
    grupo          : 'Terminados'
  },
  {
    numero: 34,
    id    : '1070612757',
    deudor: {
      cedula        : 1070612757,
      nombreCompleto: 'KAREN JULIETH PINZON GUTIERREZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25307400300320170033000',
    grupo          : 'Terminados'
  },
  {
    numero: 35,
    id    : '7226201',
    deudor: {
      cedula        : 7226201,
      nombreCompleto: 'LUIS CARLOS GUTIERREZ VELANDIA',
      tel           : 'CEL 3106199094',
      email         : 'luiscagv@yahoo.com',
      direccion     : 'CARRERA 33 No. 1 H-86 DUITAMA (BOYACÁ)'
    },
    demanda: {
      vencimientoPagare      : '2016-09-16',
      obligacion             : 5303722385820750,
      obligacion2            : 'AUTOPRESTAMO',
      entregaGarantiasAbogado: '2017-05-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '26 Civil Municipal'
        },
        ejecucion: {
          tipo: '3 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017-00511',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 26464177,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400302620170051100',
    grupo          : 'Reintegra'
  },
  {
    numero: 36,
    id    : '52314251',
    deudor: {
      cedula        : 52314251,
      nombreCompleto: 'SANDRA PATRICIA AGUDELO MONTAGUT'
    },
    capitalAdeudado: 0,
    llaveProceso   : ' 11001400306620170089200',
    grupo          : 'Terminados'
  },
  {
    numero: 37,
    id    : '1030536736',
    deudor: {
      cedula        : 1030536736,
      nombreCompleto: 'LUIS ALBERTO ALFONSO GIRALDO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25740418900120170021700',
    grupo          : 'Terminados'
  },
  {
    numero: 38,
    id    : '39808625',
    deudor: {
      cedula        : 39808625,
      nombreCompleto: 'LUZ MIRYAM GUTÍERREZ MARTÍNEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25785418900120170010200',
    grupo          : 'Terminados'
  },
  {
    numero: 39,
    id    : '79982488',
    deudor: {
      cedula        : 79982488,
      nombreCompleto: 'JORGE ALONSO TRUJILLO GÓMEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306520170090300',
    grupo          : 'Terminados'
  },
  {
    numero: 40,
    id    : '19173252',
    deudor: {
      cedula        : 19173252,
      nombreCompleto: 'JOSÉ ENRIQUE RIAÑO HENRIQUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303420170080900',
    grupo          : 'Terminados'
  },
  {
    numero: 41,
    id    : '52991801',
    deudor: {
      cedula        : 52991801,
      nombreCompleto: 'YENCY KARINA CASTIBLANCO BOHORQUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303520170119000',
    grupo          : 'Terminados'
  },
  {
    numero: 42,
    id    : '1072421639',
    deudor: {
      cedula        : 1072421639,
      nombreCompleto: 'JUAN DANIEL MORENO CIFUENTES',
      tel           : 'CEL 3126139284',
      email         : 'jdanielmoreno87@hotmail.com',
      direccion     : 'BARRIO SANTA ANA FC LA CAMPIÑA ANAPOIMA'
    },
    demanda: {
      obligacion             : 3840082880,
      entregaGarantiasAbogado: '2017-05-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'ANAPOIMA',
      juzgado                : {
        origen: {
          id  : 1,
          tipo: '001 PM'
        }
      },
      radicado     : '2017 - 00108',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 12956286,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25035408900120170010800',
    grupo          : 'Reintegra'
  },
  {
    numero: 43,
    id    : '11188351',
    deudor: {
      cedula        : 11188351,
      nombreCompleto: 'JOSE FREDDY VARGAS RUIZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301220170088200',
    grupo          : 'Terminados'
  },
  {
    numero: 44,
    id    : '11188351',
    deudor: {
      cedula        : 11188351,
      nombreCompleto: 'JOSE FREDDY VARGAS RUIZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301220170088200',
    grupo          : 'Terminados'
  },
  {
    numero: 45,
    id    : '4042105',
    deudor: {
      cedula        : 4042105,
      nombreCompleto: 'EDISON PALMA CARDENAL'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301920170052800',
    grupo          : 'Terminados'
  },
  {
    numero: 46,
    id    : '11251297',
    deudor: {
      cedula        : 11251297,
      nombreCompleto: 'ALVARO RODRIGUEZ ALONSO',
      tel           : 'CEL 3166182970',
      email         : 'alvaro.r@live.com',
      direccion     : 'Carrera 2B No.14-04 BARRIO VILLA ALEJANDRA CHOCONTA'
    },
    demanda: {
      vencimientoPagare      : '18/04/2020 // 04/05/2020',
      obligacion             : 53037139326557900,
      obligacion2            : 4099839496308260,
      entregaGarantiasAbogado: '2017-05-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'CHOCONTA',
      juzgado                : {
        origen: {
          tipo: '001 Civil Municipal'
        }
      },
      radicado     : '2017-00106',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 12537973,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '25183400300120170010600',
    grupo          : 'Reintegra'
  },
  {
    numero: 47,
    id    : '52129551',
    deudor: {
      cedula        : 52129551,
      nombreCompleto: 'ANA RITA GUZMAN GOMEZ',
      tel           : 'CEL 32291500487',
      direccion     : 'CALLE 61 J No. 17D - 55 Sur'
    },
    demanda: {
      vencimientoPagare      : '2019-09-22',
      obligacion             : '377816034633036//45130802058774831',
      obligacion2            : 53003720132046710,
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '6 Civil Municipal'
        },
        ejecucion: {
          tipo: '13 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017-00302',
      etapaProcesal: 'EJECUCION'
    },
    capitalAdeudado: 21530598,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300620170030200',
    grupo          : 'Reintegra'
  },
  {
    numero: 48,
    id    : '52837630',
    deudor: {
      cedula        : 52837630,
      nombreCompleto: 'JENNY ADRIANA PATARROYO TORRES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303520170142500',
    grupo          : 'Terminados'
  },
  {
    numero: 49,
    id    : '79532034',
    deudor: {
      cedula        : 79532034,
      nombreCompleto: 'JOSE ISRAEL MONROY CORDOBA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305120170064400',
    grupo          : 'Terminados'
  },
  {
    numero: 50,
    id    : '52444244',
    deudor: {
      cedula        : 52444244,
      nombreCompleto: 'GLORIA ASTRID RODRÍGUEZ BAQUERO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303420180061400',
    grupo          : 'Terminados'
  },
  {
    numero: 51,
    id    : '37549188',
    deudor: {
      cedula        : 37549188,
      nombreCompleto: 'MARIA CAROLINA MARTINEZ VERA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300920170060700',
    grupo          : 'Terminados'
  },
  {
    numero: 52,
    id    : '35412591',
    deudor: {
      cedula        : 35412591,
      nombreCompleto: 'MARTHA STELLA GOMEZ BOLIVAR'
    },
    capitalAdeudado: 0,
    grupo          : 'Terminados'
  },
  {
    numero: 53,
    id    : '53051476',
    deudor: {
      cedula        : 53051476,
      nombreCompleto: 'DIANA MARCELA SANCHEZ LOZANO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308520170097500',
    grupo          : 'Terminados'
  },
  {
    numero: 54,
    id    : '38261511',
    deudor: {
      cedula        : 38261511,
      nombreCompleto: 'OLGA GALLEGO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306420170113800',
    grupo          : 'Terminados'
  },
  {
    numero: 55,
    id    : '80353430',
    deudor: {
      cedula        : 80353430,
      nombreCompleto: 'DOUGLAS AYURE RIOS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25430400300120170108700',
    grupo          : 'Terminados'
  },
  {
    numero: 56,
    id    : '52039387',
    deudor: {
      cedula        : 52039387,
      nombreCompleto: 'GLADYS HERNANDEZ LOPEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302720140070300',
    grupo          : 'Terminados'
  },
  {
    numero: 57,
    id    : '39556705',
    deudor: {
      cedula        : 39556705,
      nombreCompleto: 'CARMEN CECILIA APONTE ZAMBRANO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302820170051200',
    grupo          : 'Terminados'
  },
  {
    numero: 58,
    id    : '14273737',
    deudor: {
      cedula        : 14273737,
      nombreCompleto: 'JOSÉ URIEL PAEREZ PERDOMO',
      tel           : 'F 4183276               CEL 3228293322',
      email         : 'lejopaerez@hotmail.com',
      direccion     : 'CALLE 23 D No.107-32 BOGOTA'
    },
    demanda: {
      obligacion             : '5820083643//377816164971529',
      obligacion2            : '4513080225477441//5303720124048311',
      entregaGarantiasAbogado: '2017-06-08',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '42 Civil Municipal'
        },
        ejecucion: {
          tipo: '10 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017-00760',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 96125453,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400304220170076000',
    grupo          : 'Reintegra'
  },
  {
    numero: 59,
    id    : '52341348',
    deudor: {
      cedula        : 52341348,
      nombreCompleto: 'NANCY RODRIGUEZ  GOMEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302520170106400',
    grupo          : 'Terminados'
  },
  {
    numero: 60,
    id    : '1032373332',
    deudor: {
      cedula        : 1032373332,
      nombreCompleto: 'LADY JOHANNA BAYONA GARCÍA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302020170090100',
    grupo          : 'Terminados'
  },
  {
    numero: 61,
    id    : '80197126',
    deudor: {
      cedula        : 80197126,
      nombreCompleto: 'JUAN PABLO RUBIO ESGUERRA'
    },
    capitalAdeudado: 0,
    llaveProceso   : ' 11001400304620170055700',
    grupo          : 'Terminados'
  },
  {
    numero: 62,
    id    : '80722943',
    deudor: {
      cedula        : 80722943,
      nombreCompleto: 'LUIS EDUARDO CARRANZA BUSTOS'
    },
    capitalAdeudado: 0,
    llaveProceso   : ' 11001400306320180016800',
    grupo          : 'Terminados'
  },
  {
    numero: 63,
    id    : '1022943195',
    deudor: {
      cedula        : 1022943195,
      nombreCompleto: 'DIANA MARCELA IPUZ SUAREZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : ' 11001418900920170008900',
    grupo          : 'Terminados'
  },
  {
    numero: 64,
    id    : '79891952',
    deudor: {
      cedula        : 79891952,
      nombreCompleto: 'RAFAEL ERNESTO CADENA PARGA',
      tel           : 'F 3157900              CEL 3157900006',
      email         : 'rafael.cadena@signsas.com',
      direccion     : 'CARRERA 13 A No. 150-25 INT 3 APTO 203'
    },
    demanda: {
      vencimientoPagare      : '2017-10-22',
      obligacion             : 125348220,
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '29 Civil Municipal'
        }
      },
      radicado: '2017 - 00557'
    },
    capitalAdeudado: 32926699,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400302920170055700',
    grupo          : 'Insolvencia'
  },
  {
    numero: 65,
    id    : '79276611',
    deudor: {
      cedula        : 79276611,
      nombreCompleto: 'ERNESTO AUGUSTO IDARRAGA QUINTERO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302020170077600',
    grupo          : 'Terminados'
  },
  {
    numero: 66,
    id    : '66841096',
    deudor: {
      cedula        : 66841096,
      nombreCompleto: 'SANDRA PATRICIA SUAREZ GALVIS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301920170070200',
    grupo          : 'Terminados'
  },
  {
    numero: 67,
    id    : '78076295',
    deudor: {
      cedula        : 78076295,
      nombreCompleto: 'HUMBERTO ENRIQUE AVENA CORRALES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001310301720170036000',
    grupo          : 'Terminados'
  },
  {
    numero: 68,
    id    : '35412591',
    deudor: {
      cedula        : 35412591,
      nombreCompleto: 'MARTHA STELLA GOMEZ BOLIVAR'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25899400300220170027000',
    grupo          : 'Terminados'
  },
  {
    numero: 69,
    id    : '53008703',
    deudor: {
      cedula        : 53008703,
      nombreCompleto: 'DERLY CATHERINE CASTRO IZQUIERDO',
      tel           : 'F 7507842 2856110',
      direccion     : 'CARRERA 5 No. 30 - 77'
    },
    demanda: {
      vencimientoPagare      : '2019-08-12',
      obligacion             : 4200023595,
      entregaGarantiasAbogado: '2017-06-08',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '6 Civil Municipal'
        },
        ejecucion: {
          tipo: '11 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017-00419',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 83955014,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300620170041900',
    grupo          : 'Reintegra'
  },
  {
    numero: 70,
    id    : '14250539',
    deudor: {
      cedula        : 14250539,
      nombreCompleto: 'CESAR AUGUSTO ARIAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308520170108400',
    grupo          : 'Terminados'
  },
  {
    numero: 71,
    id    : '53015307',
    deudor: {
      cedula        : 53015307,
      nombreCompleto: 'BETTY STEPHANI TORRES ROJAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304720170106500',
    grupo          : 'Terminados'
  },
  {
    numero: 72,
    id    : '1030545462',
    deudor: {
      cedula        : 1030545462,
      nombreCompleto: 'NESTOR FABIAN ESPITIA FRAILE'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306020170124100',
    grupo          : 'Terminados'
  },
  {
    numero: 73,
    id    : '31877993',
    deudor: {
      cedula        : 31877993,
      nombreCompleto: 'SONIA MAZUERA'
    },
    demanda: {
      radicado: '2017 - 00575'
    },
    capitalAdeudado: 0,
    grupo          : 'Terminados'
  },
  {
    numero: 74,
    id    : '79789620',
    deudor: {
      cedula        : 79789620,
      nombreCompleto: 'CARLOS ANDRÉS BORRAY ARCE'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304820170050700',
    grupo          : 'Terminados'
  },
  {
    numero: 75,
    id    : '80792132',
    deudor: {
      cedula        : 80792132,
      nombreCompleto: 'MARIO ANDRES BOJACA CRUZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305820170091800',
    grupo          : 'Terminados'
  },
  {
    numero: 76,
    id    : '20493423',
    deudor: {
      cedula        : 20493423,
      nombreCompleto: 'ESTELA MARIN GARZÓN'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25183400300120170011900',
    grupo          : 'Terminados'
  },
  {
    numero: 77,
    id    : '1030554218',
    deudor: {
      cedula        : 1030554218,
      nombreCompleto: 'JEIMY CAROLINA LEGUIZAMON VASQUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900120170083700',
    grupo          : 'Terminados'
  },
  {
    numero: 78,
    id    : '7711481',
    deudor: {
      cedula        : 7711481,
      nombreCompleto: 'JAIME EDISON SANTOS MARTIN'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306420170123100',
    grupo          : 'Terminados'
  },
  {
    numero: 79,
    id    : '38289111',
    deudor: {
      cedula        : 38289111,
      nombreCompleto: 'CRISTINA CASTAÑO CASTILLO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303320170089200',
    grupo          : 'Terminados'
  },
  {
    numero: 80,
    id    : '79882688',
    deudor: {
      cedula        : 79882688,
      nombreCompleto: 'JORGE ANDRES PORRAS VARGAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25817418900120170035100',
    grupo          : 'Terminados'
  },
  {
    numero: 81,
    id    : '900789612',
    deudor: {
      cedula        : 900789612,
      nombreCompleto: 'DS&D SOLUCIONES CONSTRUCTIVAS S.A.S.'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303620170055400',
    grupo          : 'Terminados'
  },
  {
    numero: 82,
    id    : '13921619',
    deudor: {
      cedula        : 13921619,
      nombreCompleto: 'RAFAEL GONZALEZ OLEJUA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300320170106500',
    grupo          : 'Terminados'
  },
  {
    numero: 83,
    id    : '19438068',
    deudor: {
      cedula        : 19438068,
      nombreCompleto: 'LUIS ADOLFO PEÑA ARCINIEGAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301920170102500',
    grupo          : 'Terminados'
  },
  {
    numero: 84,
    id    : '79108747',
    deudor: {
      cedula        : 79108747,
      nombreCompleto: 'EDGAR HERNANDEZ RUBIO',
      tel           : 'F 8054434               CEL 3118802970',
      email         : 'edgarH62@hotmail.com',
      direccion     : 'CARRERA 17 A No. 175-82 INTERIOR 1 PTO 601'
    },
    demanda: {
      vencimientoPagare      : '2019-11-05',
      obligacion             : 377815178176828,
      obligacion2            : 53037234659826290,
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '39 Civil Municipal'
        },
        ejecucion: {
          tipo: '14 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017-00800',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 12128189,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400303920170080000',
    grupo          : 'Reintegra'
  },
  {
    numero: 85,
    id    : '39673896',
    deudor: {
      cedula        : 39673896,
      nombreCompleto: 'SANDRA PATRICIA MALAVER ALVAREZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303420170083400',
    grupo          : 'Terminados'
  },
  {
    numero: 86,
    id    : '1087781966',
    deudor: {
      cedula        : 1087781966,
      nombreCompleto: 'RHONALD MEZA TARAPUES',
      tel           : 'F 4062925  7496611',
      email         : 'mezaronald@yahoo.com',
      direccion     : 'CARRERA 73 A BIS No. 2 A-32 SUR BOGOTA'
    },
    demanda: {
      vencimientoPagare      : '2018-11-11',
      obligacion             : 2250084171,
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '22 Civil Municipal'
        },
        ejecucion: {
          tipo: '2 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017-00567',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 17632026,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400302220170056700',
    grupo          : 'Reintegra'
  },
  {
    numero: 87,
    id    : '4198210',
    deudor: {
      cedula        : 4198210,
      nombreCompleto: 'OMAR ESPITIA REYES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304620170056100',
    grupo          : 'Terminados'
  },
  {
    numero: 88,
    id    : '51890871',
    deudor: {
      cedula        : 51890871,
      nombreCompleto: 'IDALY FERRO CARDONA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '1100140030820170052800',
    grupo          : 'Terminados'
  },
  {
    numero: 89,
    id    : '1030551366',
    deudor: {
      cedula        : 1030551366,
      nombreCompleto: 'JULIAN ARMANDO ACOSTA RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306520170093400',
    grupo          : 'Terminados'
  },
  {
    numero: 90,
    id    : '1032432802',
    deudor: {
      cedula        : 1032432802,
      nombreCompleto: 'LUIS ESNEIDER ORDUZ FARFAN',
      tel           : 'F 4712921',
      email         : 'orduzcrit2@hotmail.com',
      direccion     : 'CARRERA 95 # 138 - 58'
    },
    demanda: {
      vencimientoPagare      : '2020-06-09',
      obligacion             : 12330030,
      entregaGarantiasAbogado: '1899-12-30',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '34 Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-34-civil-municipal-de-bogota'
        },
        ejecucion: {
          tipo: '12 Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-12-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      radicado     : '2017 - 00836',
      etapaProcesal: 'EJECUCION'
    },
    capitalAdeudado: 26515333,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400303420170083600',
    grupo          : 'Bancolombia'
  },
  {
    numero: 91,
    id    : '79456791',
    deudor: {
      cedula        : 79456791,
      nombreCompleto: 'JAIME JESUS REYES OROZCO'
    },
    capitalAdeudado: 0,
    grupo          : 'Terminados'
  },
  {
    numero: 92,
    id    : '52214536',
    deudor: {
      cedula        : 52214536,
      nombreCompleto: 'MAGDA MILENA SALINAS RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301320170084100',
    grupo          : 'Terminados'
  },
  {
    numero: 93,
    id    : '1140835529',
    deudor: {
      cedula        : 1140835529,
      nombreCompleto: 'VIVIAN PAOLA BRUGES MEDINA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25126408900120170049600',
    grupo          : 'Terminados'
  },
  {
    numero: 94,
    id    : '1030527169',
    deudor: {
      cedula        : 1030527169,
      nombreCompleto: 'AIDA YURANI GRIJALBA MARTINEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305620170059100',
    grupo          : 'Terminados'
  },
  {
    numero: 95,
    id    : '1015410386',
    deudor: {
      cedula        : 1015410386,
      nombreCompleto: 'EDWIN JHOBANI PEREZ PITA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302820170057500',
    grupo          : 'Terminados'
  },
  {
    numero: 96,
    id    : '52818959',
    deudor: {
      cedula        : 52818959,
      nombreCompleto: 'YURANNY POLANCO CESPEDES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305320170087100',
    grupo          : 'Terminados'
  },
  {
    numero: 97,
    id    : '19270589',
    deudor: {
      cedula        : 19270589,
      nombreCompleto: 'JOSE ALFREDO RIAÑO MALDONADO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308520160031900',
    grupo          : 'Terminados'
  },
  {
    numero: 98,
    id    : '41672170',
    deudor: {
      cedula        : 41672170,
      nombreCompleto: 'MARIA DEL CARMEN CHAPARRO LEMUS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301120170062300',
    grupo          : 'Terminados'
  },
  {
    numero: 99,
    id    : '79996551',
    deudor: {
      cedula        : 79996551,
      nombreCompleto: 'YONI ALEXANDER RESTREPO PEÑUELA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '1100141037512017111000',
    grupo          : 'Terminados'
  },
  {
    numero: 100,
    id    : '80430881',
    deudor: {
      cedula        : 80430881,
      nombreCompleto: 'JHON JAIRO RUBIO ORTIZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25430418900120170068400',
    grupo          : 'Terminados'
  },
  {
    numero: 101,
    id    : '57452535',
    deudor: {
      cedula        : 57452535,
      nombreCompleto: 'LEILA JOHANNA MARTINEZ MORA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301020170065301',
    grupo          : 'Terminados'
  },
  {
    numero: 102,
    id    : '1070329396',
    deudor: {
      cedula        : 1070329396,
      nombreCompleto: 'ERIKA ALEJANDRA QUINTERO REYES',
      tel           : 'CEL 3114456631',
      direccion     : 'CALL 2 No. 8-40 EL COLEGIO'
    },
    demanda: {
      vencimientoPagare      : '2019-07-05',
      obligacion             : 7300080586,
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'MESITAS',
      juzgado                : {
        origen: {
          tipo: '001 PM',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-001-promiscuo-municipal-de-el-colegio'
        }
      },
      radicado     : '2017-00239',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 50000000,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25245408900120170023900',
    grupo          : 'Bancolombia'
  },
  {
    numero: 103,
    id    : '16831314',
    deudor: {
      cedula        : 16831314,
      nombreCompleto: 'EDUARDO ENRIQUE ARANGO CHACON',
      tel           : 'CEL 3216066052',
      email         : 'kikearango@hotmail.com',
      direccion     : 'CARRERA 74 No. 25 G-69'
    },
    demanda: {
      vencimientoPagare      : '2019-05-13',
      obligacion             : '1800088189//377813488630162',
      obligacion2            : '4513071987853655//5303715363121332',
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '82 Civil Municipal/6 Civil Municipal'
        },
        ejecucion: {
          tipo: '18 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017-00680',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 43921469,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400308220170068000',
    grupo          : 'Reintegra'
  },
  {
    numero: 104,
    id    : '51922135',
    deudor: {
      cedula        : 51922135,
      nombreCompleto: 'NANCY HERRERA MENDEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300620170041700',
    grupo          : 'Terminados'
  },
  {
    numero: 105,
    id    : '15319344',
    deudor: {
      cedula        : 15319344,
      nombreCompleto: 'ESTELIO DE JESUS  ROLDAN POZO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300720170111300',
    grupo          : 'Terminados'
  },
  {
    numero: 106,
    id    : '501492',
    deudor: {
      cedula        : 501492,
      nombreCompleto: 'DANIEL HERNANDEZ GONZALEZ',
      tel           : 'F 2716567',
      email         : 'danielher84@gmail.com',
      direccion     : 'CALLE 134 No. 58-58'
    },
    demanda: {
      vencimientoPagare      : '2018-08-28',
      obligacion             : 12515504,
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '59 Civil Municipal'
        },
        ejecucion: {
          tipo: '15 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 00483',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 16497281,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400305920170048300',
    grupo          : 'Reintegra'
  },
  {
    numero: 107,
    id    : '80112954',
    deudor: {
      cedula        : 80112954,
      nombreCompleto: 'HANYELO EFRAIN MARTINEZ TURRIAGO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305720170079000',
    grupo          : 'Terminados'
  },
  {
    numero: 108,
    id    : '79558732',
    deudor: {
      cedula        : 79558732,
      nombreCompleto: 'MIGUEL ANGEL HUERTAS VALENCIA',
      tel           : 'F 2723136',
      email         : 'miguelangelhuertasv@hotmail.com',
      direccion     : 'TRANVERSAL 15A # 31-09 SUR'
    },
    demanda: {
      vencimientoPagare      : '2020-06-07',
      obligacion             : 12455661,
      obligacion2            : '12657330//12748966',
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '25 CC'
        },
        ejecucion: {
          tipo: '2 C CTO E'
        }
      },
      radicado     : '2017 - 00736',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 211610991,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001310302520170073600',
    grupo          : 'Reintegra'
  },
  {
    numero: 109,
    id    : '1018428090',
    deudor: {
      cedula        : 1018428090,
      nombreCompleto: 'OSCAR IVAN AGUDELO MORA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302420180011900',
    grupo          : 'Terminados'
  },
  {
    numero: 110,
    id    : '46677093',
    deudor: {
      cedula        : 46677093,
      nombreCompleto: 'MARLENE RONCANCIO BENITEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304520170077400',
    grupo          : 'Terminados'
  },
  {
    numero: 111,
    id    : '1020743892',
    deudor: {
      cedula        : 1020743892,
      nombreCompleto: 'KAREN VIVIANA CASTAÑO CORONADO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305420170071200',
    grupo          : 'Terminados'
  },
  {
    numero: 112,
    id    : '23993605',
    deudor: {
      cedula        : 23993605,
      nombreCompleto: 'MARIA TRINIDAD SOTELO TORRES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302020170097400',
    grupo          : 'Terminados'
  },
  {
    numero: 113,
    id    : '53178044',
    deudor: {
      cedula        : 53178044,
      nombreCompleto: 'SANDRA BIBIANA URREGO MAYORGA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303020170181700',
    grupo          : 'Terminados'
  },
  {
    numero: 114,
    id    : '79209455',
    deudor: {
      cedula        : 79209455,
      nombreCompleto: 'JOSE ANTONIO CAICEDO RUIZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900220170075200',
    grupo          : 'Terminados'
  },
  {
    numero: 115,
    id    : '52174728',
    deudor: {
      cedula        : 52174728,
      nombreCompleto: 'SILVIA MARIA VALENZUELA VELASQUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305220170080900',
    grupo          : 'Terminados'
  },
  {
    numero: 116,
    id    : '52548162',
    deudor: {
      cedula        : 52548162,
      nombreCompleto: 'ANA KARINA MANTILLA PARDO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301020170083000',
    grupo          : 'Terminados'
  },
  {
    numero: 117,
    id    : '19386444',
    deudor: {
      cedula        : 19386444,
      nombreCompleto: 'NICOLAS FERNANDO MONTOYA CORREA',
      tel           : 'F 2531962',
      email         : 3176677592,
      direccion     : 'CALLE 18 # 19 - 75 / CALLE 26 NTE No. 5A - 54 Cali - Valle'
    },
    demanda: {
      vencimientoPagare      : '2019-01-21',
      obligacion             : 420087224,
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '70 Civil Municipal'
        },
        ejecucion: {
          tipo: '14 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 00566',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 17256863,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400307020170056600',
    grupo          : 'Reintegra'
  },
  {
    numero: 118,
    id    : '19308014',
    deudor: {
      cedula        : 19308014,
      nombreCompleto: 'JAIME ORLANDO PEÑA ROJAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305320170145600',
    grupo          : 'Terminados'
  },
  {
    numero: 119,
    id    : '79693495',
    deudor: {
      cedula        : 79693495,
      nombreCompleto: 'CESAR AUGUSTO GIL GALLEGO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301420170098800',
    grupo          : 'Terminados'
  },
  {
    numero: 120,
    id    : '900212673',
    deudor: {
      cedula        : 900212673,
      nombreCompleto: 'JENCELL E.U.',
      tel           : 'F 5753416',
      direccion     : 'CARRERA 3 # 29A - 02'
    },
    demanda: {
      vencimientoPagare      : '2021-04-12',
      obligacion             : 6240082776,
      entregaGarantiasAbogado: '2017-08-04',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'SOACHA',
      juzgado                : {
        origen: {
          id  : 3,
          tipo: 'Pequeñas Causas y Competencias Multiples',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-03-municipal-de-pequenas-causas-y-competencia-multiple-de-soacha'
        }
      },
      radicado     : '2017 - 00755',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 13906249,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25754418900320170075500',
    grupo          : 'Bancolombia'
  },
  {
    numero: 121,
    id    : '19453362',
    deudor: {
      cedula        : 19453362,
      nombreCompleto: 'JAIME ORLANDO LUGO RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25430400300120180027300',
    grupo          : 'Terminados'
  },
  {
    numero: 122,
    id    : '52543321',
    deudor: {
      cedula        : 52543321,
      nombreCompleto: 'PAOLA ANDREA FERNANDEZ RINCON'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304020170119300',
    grupo          : 'Terminados'
  },
  {
    numero: 123,
    id    : '79547983',
    deudor: {
      cedula        : 79547983,
      nombreCompleto: 'GUSTAVO SANTAMARIA MOSQUERA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306920170075400',
    grupo          : 'Terminados'
  },
  {
    numero: 124,
    id    : '40025572',
    deudor: {
      cedula        : 40025572,
      nombreCompleto: 'BLANCA EDELMIRA ARIAS MELO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303320170118000',
    grupo          : 'Terminados'
  },
  {
    numero: 125,
    id    : '74338870',
    deudor: {
      cedula        : 74338870,
      nombreCompleto: 'MILCIADES GALINDO CASTEBLANCO',
      tel           : 'F 4536131',
      direccion     : 'CARRERA 18 # 12 - 72'
    },
    demanda: {
      vencimientoPagare      : '2020-11-27',
      obligacion             : 300093705,
      entregaGarantiasAbogado: '2017-06-12',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '47 Civil Municipal'
        }
      },
      radicado     : '2017 - 01520',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 21613985,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400304720170152000',
    grupo          : 'Reintegra'
  },
  {
    numero: 126,
    id    : '79834592',
    deudor: {
      cedula        : 79834592,
      nombreCompleto: 'YONNY ARTURO PINZON PULIDO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900320170076200',
    grupo          : 'Terminados'
  },
  {
    numero: 127,
    id    : '41610065',
    deudor: {
      cedula        : 41610065,
      nombreCompleto: 'ZOILA IRENE SUAVITA DE TRILLERAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308020170073500',
    grupo          : 'Terminados'
  },
  {
    numero: 128,
    id    : '52385097',
    deudor: {
      cedula        : 52385097,
      nombreCompleto: 'MARIA GLADYS  GONZALEZ SOSA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307820170073300',
    grupo          : 'Terminados'
  },
  {
    numero: 129,
    id    : '41709257',
    deudor: {
      cedula        : 41709257,
      nombreCompleto: 'ELENA QUIÑONES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304320170106400',
    grupo          : 'Terminados'
  },
  {
    numero: 130,
    id    : '77010352',
    deudor: {
      cedula        : 77010352,
      nombreCompleto: 'ARMANDO ENRIQUE ROSADO MESTRE'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306420170115300',
    grupo          : 'Terminados'
  },
  {
    numero: 131,
    id    : '52830770',
    deudor: {
      cedula        : 52830770,
      nombreCompleto: 'ROCIO ALEIDA ORTIZ BARRETO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900120170077400',
    grupo          : 'Terminados'
  },
  {
    numero: 132,
    id    : '80049317',
    deudor: {
      cedula        : 80049317,
      nombreCompleto: 'JOVANI EMILIO RESTREPO RAMIREZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306820170105100',
    grupo          : 'Terminados'
  },
  {
    numero: 133,
    id    : '80820336',
    deudor: {
      cedula        : 80820336,
      nombreCompleto: 'CARLOS GIOVANNY RONDON GARCIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301220170095000',
    grupo          : 'Terminados'
  },
  {
    numero: 134,
    id    : '80722626',
    deudor: {
      cedula        : 80722626,
      nombreCompleto: 'FREDY ALEXANDER BUENO PARADA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25430400300120170108300',
    grupo          : 'Terminados'
  },
  {
    numero: 135,
    id    : '5654542',
    deudor: {
      cedula        : 5654542,
      nombreCompleto: 'RUBER ANDRES VALENZUELA SIERRA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300420170063900',
    grupo          : 'Terminados'
  },
  {
    numero: 136,
    id    : '79463388',
    deudor: {
      cedula        : 79463388,
      nombreCompleto: 'JORGE ERNESTO ROA MANRIQUE'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304720170149100',
    grupo          : 'Terminados'
  },
  {
    numero: 137,
    id    : '52818134',
    deudor: {
      cedula        : 52818134,
      nombreCompleto: 'EDNA MILENA MUÑOZ SANCHEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304720170171300',
    grupo          : 'Terminados'
  },
  {
    numero: 138,
    id    : '52323645',
    deudor: {
      cedula        : 52323645,
      nombreCompleto: 'FLOR YAMILE BARRANTES CARO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306420170116000',
    grupo          : 'Terminados'
  },
  {
    numero: 139,
    id    : '20896387',
    deudor: {
      cedula        : 20896387,
      nombreCompleto: 'ANA EMILCE ROJAS SARMIENTO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306120170079300',
    grupo          : 'Terminados'
  },
  {
    numero: 140,
    id    : '80933170',
    deudor: {
      cedula        : 80933170,
      nombreCompleto: 'JHON FABER FORIGUA GARCIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307720170056800',
    grupo          : 'Terminados'
  },
  {
    numero: 141,
    id    : '79412583',
    deudor: {
      cedula        : 79412583,
      nombreCompleto: 'EDGAR DAVID HERNANDEZ RINCON'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303920170110000',
    grupo          : 'Terminados'
  },
  {
    numero: 142,
    id    : '36184358',
    deudor: {
      cedula        : 36184358,
      nombreCompleto: 'DEISY POLANIA CUELLAR'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25286310300120170074200',
    grupo          : 'Terminados'
  },
  {
    numero: 143,
    id    : '1023904524',
    deudor: {
      cedula        : 1023904524,
      nombreCompleto: 'PAOLA ANDREA RODRIGUEZ MORALES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303420170108900',
    grupo          : 'Terminados'
  },
  {
    numero: 144,
    id    : '52581513',
    deudor: {
      cedula        : 52581513,
      nombreCompleto: 'MARIA FILOMENA GONZALES SALAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302620170087200',
    grupo          : 'Terminados'
  },
  {
    numero: 145,
    id    : '79714749',
    deudor: {
      cedula        : 79714749,
      nombreCompleto: 'JHON JAMINTON FUENTES CARREÑO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305520170081700',
    grupo          : 'Terminados'
  },
  {
    numero: 146,
    id    : '4520757',
    deudor: {
      cedula        : 4520757,
      nombreCompleto: 'PEDRO NEL PELAEZ TISNES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308620170082600',
    grupo          : 'Terminados'
  },
  {
    numero: 147,
    id    : '80080669',
    deudor: {
      cedula        : 80080669,
      nombreCompleto: 'MILTON ANDRES LAITON RINCON'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305920170074700',
    grupo          : 'Terminados'
  },
  {
    numero: 148,
    id    : '79505815',
    deudor: {
      cedula        : 79505815,
      nombreCompleto: 'NESTOR GERARDO OSORIO MORALES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300920170081300',
    grupo          : 'Terminados'
  },
  {
    numero: 149,
    id    : '23181779',
    deudor: {
      cedula        : 23181779,
      nombreCompleto: 'MAGDA TATIANA TORRES GONZALEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754400300220170025600',
    grupo          : 'Terminados'
  },
  {
    numero: 150,
    id    : '79988076',
    deudor: {
      cedula        : 79988076,
      nombreCompleto: 'VICTOR TRIANA ALARCON'
    },
    capitalAdeudado: 0,
    llaveProceso   : '2575440030012017024900',
    grupo          : 'Terminados'
  },
  {
    numero: 151,
    id    : '88227428',
    deudor: {
      cedula        : 88227428,
      nombreCompleto: 'ANDRES FELIPE HIGUITA CARDONA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307320170113500',
    grupo          : 'Terminados'
  },
  {
    numero: 152,
    id    : '1032431042',
    deudor: {
      cedula        : 1032431042,
      nombreCompleto: 'NICOLAS OSORIO RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '110014007320170113600',
    grupo          : 'Terminados'
  },
  {
    numero: 153,
    id    : '52230614',
    deudor: {
      cedula        : 52230614,
      nombreCompleto: 'MARBELL ROCIO DOMINGUEZ ALVAREZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900220170071400',
    grupo          : 'Terminados'
  },
  {
    numero: 154,
    id    : '79840930',
    deudor: {
      cedula        : 79840930,
      nombreCompleto: 'GABRIEL EDUARDO MEJIA LADINO',
      tel           : '7347505 // 3112945552',
      email         : 'gabriel.eml@hotmail.com',
      direccion     : 'CARRERA 79 BIS A # 73 - 92 SUR APTO 304 INT 3'
    },
    demanda: {
      vencimientoPagare      : '21/02/2018 // 26/10/20247',
      obligacion             : 5670083032,
      obligacion2            : '377813199287708 // 4513075700372455 // 123470',
      entregaGarantiasAbogado: '2017-08-23',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '36 Civil Municipal'
        }
      },
      radicado: '2017 - 00841'
    },
    capitalAdeudado: 29366625,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400303620170084100',
    grupo          : 'LiosJuridicos'
  },
  {
    numero: 155,
    id    : '71557211',
    deudor: {
      cedula        : 71557211,
      nombreCompleto: 'CARLOS ARTURO RUEDA ALZATE'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308320170071700',
    grupo          : 'Terminados'
  },
  {
    numero: 156,
    id    : '52431512',
    deudor: {
      cedula        : 52431512,
      nombreCompleto: 'MARTHA PATRICIA MORALES SARMIENTO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25473400300120170077700',
    grupo          : 'Terminados'
  },
  {
    numero: 157,
    id    : '19146821',
    deudor: {
      cedula        : 19146821,
      nombreCompleto: 'LUIS ALBERTO MENDOZA CASTAÑO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301120170088900',
    grupo          : 'Terminados'
  },
  {
    numero: 158,
    id    : '80808819',
    deudor: {
      cedula        : 80808819,
      nombreCompleto: 'JULIAN JHOHANY GALLEGO MONTES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25899310300120170039300',
    grupo          : 'Terminados'
  },
  {
    numero: 159,
    id    : '98389962',
    deudor: {
      cedula        : 98389962,
      nombreCompleto: 'ALLAN FREDY TOBAR ENCISO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307320170133300',
    grupo          : 'Terminados'
  },
  {
    numero: 160,
    id    : '79387342',
    deudor: {
      cedula        : 79387342,
      nombreCompleto: 'JAIRO ALBERTO CARRILLO SALINAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307820170076200',
    grupo          : 'Terminados'
  },
  {
    numero: 161,
    id    : '79335809',
    deudor: {
      cedula        : 79335809,
      nombreCompleto: 'RICARDO ALBERTO BELTRAN HERNANDEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25286310300120170095600',
    grupo          : 'Terminados'
  },
  {
    numero: 162,
    id    : '900432476',
    deudor: {
      cedula        : 900432476,
      nombreCompleto: 'MANHATTAN DOTACIONES S.A.S'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304120170094600',
    grupo          : 'Terminados'
  },
  {
    numero: 163,
    id    : '71557211',
    deudor: {
      cedula        : 71557211,
      nombreCompleto: 'CARLOS ARTURO RUEDA ALZATE'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25473418900120170092400',
    grupo          : 'Terminados'
  },
  {
    numero: 164,
    id    : '14255996',
    deudor: {
      cedula        : 14255996,
      nombreCompleto: 'URIEL RUIZ DIAZ',
      tel           : 'CEL 3102785072',
      direccion     : 'CARRERA 82 A No. 6B-30 CASA 36'
    },
    demanda: {
      vencimientoPagare      : '2019-09-30',
      obligacion             : 6240082772,
      entregaGarantiasAbogado: '2017-07-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '45 Civil Municipal'
        },
        ejecucion: {
          tipo: '2Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 00905',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 25519225,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400304520170090500',
    grupo          : 'Reintegra'
  },
  {
    numero: 165,
    id    : '86057132',
    deudor: {
      cedula        : 86057132,
      nombreCompleto: 'FREDY MENESES',
      tel           : 'F 4088069              CEL 3125312823',
      email         : 'imagenfmr@yahoo.com',
      direccion     : 'Carrera 40 D No. 1H-28'
    },
    demanda: {
      vencimientoPagare      : '2019-08-18',
      obligacion             : 2310089458,
      obligacion2            : '4513088545588847// AUDIO PRESTAMO',
      entregaGarantiasAbogado: '2017-07-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '76 Civil Municipal'
        },
        ejecucion: {
          tipo: '4 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 00635',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 44742148,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400307620170063500',
    grupo          : 'Reintegra'
  },
  {
    numero: 166,
    id    : '52432989',
    deudor: {
      cedula        : 52432989,
      nombreCompleto: 'DORA AIDE PEÑA PEÑA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300920170083700',
    grupo          : 'Terminados'
  },
  {
    numero: 167,
    id    : '79688268',
    deudor: {
      cedula        : 79688268,
      nombreCompleto: 'JOSE MAURICIO GONZALEZ CALDERON'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001310301020170071000',
    grupo          : 'Terminados'
  },
  {
    numero: 168,
    id    : '21046826',
    deudor: {
      cedula        : 21046826,
      nombreCompleto: 'MARIA STELLA HERNANDEZ BELTRAN'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301920170087200',
    grupo          : 'Terminados'
  },
  {
    numero: 169,
    id    : '23553904',
    deudor: {
      cedula        : 23553904,
      nombreCompleto: 'RITA BLANCO DE GOMEZ',
      tel           : 'F 3861894',
      email         : 'dorancy1@hotmail.com',
      direccion     : 'Carrera 67 No. 65-22 sur Torre 15 Apto 559'
    },
    demanda: {
      vencimientoPagare      : '2020-03-15',
      obligacion             : 12498762,
      obligacion2            : 'audioprestamo',
      entregaGarantiasAbogado: '2017-08-01',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '3 Civil Municipal'
        }
      },
      radicado     : '2017 - 01264',
      etapaProcesal: 'NOTIFICACION'
    },
    capitalAdeudado: 13144437,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400300320170126400',
    grupo          : 'Reintegra'
  },
  {
    numero: 170,
    id    : '55303731',
    deudor: {
      cedula        : 55303731,
      nombreCompleto: 'ISABEL CRISTINA GARCIA DURAN'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301320170111400',
    grupo          : 'Terminados'
  },
  {
    numero: 171,
    id    : '1024468871',
    deudor: {
      cedula        : 1024468871,
      nombreCompleto: 'MARITZA NATALI RODRIGUEZ URREA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308620170086300',
    grupo          : 'Terminados'
  },
  {
    numero: 172,
    id    : '52475256',
    deudor: {
      cedula        : 52475256,
      nombreCompleto: 'ADRIANA DEL PILAR ALFONSO BAQUERO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302720170085000',
    grupo          : 'Terminados'
  },
  {
    numero: 173,
    id    : '79878252',
    deudor: {
      cedula        : 79878252,
      nombreCompleto: 'DIEGO ALEXANDER CAYCEDO OCHOA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301520170116100',
    grupo          : 'Terminados'
  },
  {
    numero: 174,
    id    : '52189873',
    deudor: {
      cedula        : 52189873,
      nombreCompleto: 'DARNELLY HERNANDEZ MARTINEZ',
      tel           : 'F 4530972                 CEL 3144189224',
      email         : 'darnelly-74@hotmail.com',
      direccion     : 'CALLE 74G # 80 - 58 SUR'
    },
    demanda: {
      vencimientoPagare      : '2026-03-10',
      obligacion             : 136962,
      entregaGarantiasAbogado: '2017-08-22',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '25 Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-25-civil-municipal-de-bogota'
        },
        ejecucion: {
          tipo: '18 Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-18-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      radicado     : '2017 - 00903',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 14795921,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400302520170090300',
    grupo          : 'Bancolombia'
  },
  {
    numero: 175,
    id    : '91354321',
    deudor: {
      cedula        : 91354321,
      nombreCompleto: 'OMAR GUSTAVO FULA AVILA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900220170076100',
    grupo          : 'Terminados'
  },
  {
    numero: 176,
    id    : '79787268',
    deudor: {
      cedula        : 79787268,
      nombreCompleto: 'JHON FREDY MURILLO DAZA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300420170080100',
    grupo          : 'Terminados'
  },
  {
    numero: 177,
    id    : '79327475',
    deudor: {
      cedula        : 79327475,
      nombreCompleto: 'LEONARDY HERRERA ROJAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304520170104100',
    grupo          : 'Terminados'
  },
  {
    numero: 178,
    id    : '37861286',
    deudor: {
      cedula        : 37861286,
      nombreCompleto: 'MARYLUZ OCASIONES PINZON'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306620170122100',
    grupo          : 'Terminados'
  },
  {
    numero: 179,
    id    : '12254068',
    deudor: {
      cedula        : 12254068,
      nombreCompleto: 'GUILLERMO GONZALEZ TAGUA',
      tel           : 'F 5642974              CEL 3218180993',
      email         : 'guillermogonzalez_tagua@hotmail.com',
      direccion     : 'CARRERA 30 No.68 J-08 SUR'
    },
    demanda: {
      vencimientoPagare      : '2019-11-02',
      obligacion             : 5670085162,
      entregaGarantiasAbogado: '2017-08-01',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '11 Civil Municipal'
        },
        ejecucion: {
          tipo: '2 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01084',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 12687427,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400301120170108400',
    grupo          : 'Reintegra'
  },
  {
    numero: 180,
    id    : '21016631',
    deudor: {
      cedula        : 21016631,
      nombreCompleto: 'ALCIRA DELIA SAENZ GARAVIS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25878418900120170021800',
    grupo          : 'Terminados'
  },
  {
    numero: 181,
    id    : '1033783222',
    deudor: {
      cedula        : 1033783222,
      nombreCompleto: 'LEONARDO ALIRIO GARCIA GUERRERO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418901020170011500',
    grupo          : 'Terminados'
  },
  {
    numero: 182,
    id    : '11185630',
    deudor: {
      cedula        : 11185630,
      nombreCompleto: 'WILSON ALFONSO JIMENEZ MENDIETA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300120170100100',
    grupo          : 'Terminados'
  },
  {
    numero: 183,
    id    : '11185630',
    deudor: {
      cedula        : 11185630,
      nombreCompleto: 'WILSON ALFONSO JIMENEZ MENDIETA',
      tel           : 'F 5714329',
      email         : 'grupocomerciallasabana@hotmail.com',
      direccion     : 'CARRERA 81C # 2B - 80 PISO 2'
    },
    demanda: {
      vencimientoPagare      : '2019-11-03',
      obligacion             : 2150091504,
      entregaGarantiasAbogado: '2017-08-01',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '1 Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-01-civil-municipal-de-bogota'
        },
        ejecucion: {
          tipo: '17 Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-17-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      radicado     : '2017 - 01001',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 25833335,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300120170100100',
    grupo          : 'Bancolombia'
  },
  {
    numero: 184,
    id    : '17650971',
    deudor: {
      cedula        : 17650971,
      nombreCompleto: 'JUAN CARLOS TOVAR TOLEDO',
      tel           : 'F 83107389',
      direccion     : 'CARRERA 86 # 69 H - 40'
    },
    demanda: {
      vencimientoPagare      : '2021-12-15',
      obligacion             : 8470081213,
      entregaGarantiasAbogado: '2017-08-01',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '25 Civil Municipal'
        }
      },
      radicado     : '2017 - 00807',
      etapaProcesal: 'DESIGNACIÓN CURADOR AD LITEM'
    },
    capitalAdeudado: 22277206,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400302520170080700',
    grupo          : 'Reintegra'
  },
  {
    numero: 185,
    id    : '10294828',
    deudor: {
      cedula        : 10294828,
      nombreCompleto: 'WILLIAM GIOVANNI DORADO FERNANDEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754400300320170028300',
    grupo          : 'Terminados'
  },
  {
    numero: 186,
    id    : '24134505',
    deudor: {
      cedula        : 24134505,
      nombreCompleto: 'CELY MARGOTH ROJAS VELANDIA',
      tel           : 'F 5267343',
      direccion     : 'CALLE 29 A # 2 - 76 APTO 304 CHIA'
    },
    demanda: {
      vencimientoPagare      : '2021-01-29',
      obligacion             : 1680097051,
      entregaGarantiasAbogado: '2017-08-11',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'CHIA',
      juzgado                : {
        origen: {
          tipo: '2Civil Municipal'
        }
      },
      radicado     : '2017 - 00412',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 13319130,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25175408900220170041200',
    grupo          : 'Reintegra'
  },
  {
    numero: 187,
    id    : '39624423',
    deudor: {
      cedula        : 39624423,
      nombreCompleto: 'YAZMIN ALVARADO PINZON'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25290400300220170055200',
    grupo          : 'Terminados'
  },
  {
    numero: 188,
    id    : '1019029250',
    deudor: {
      cedula        : 1019029250,
      nombreCompleto: 'DIEGO ARMANDO AREVALO VELANDIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306720170126900',
    grupo          : 'Terminados'
  },
  {
    numero: 189,
    id    : '4547635',
    deudor: {
      cedula        : 4547635,
      nombreCompleto: 'WILDER DE JESUS ROMAN GRISALES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25817418900120170049400',
    grupo          : 'Terminados'
  },
  {
    numero: 190,
    id    : '79909315',
    deudor: {
      cedula        : 79909315,
      nombreCompleto: 'VICTOR EDUARDO  MORA ESPINOSA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25286400300120170078100',
    grupo          : 'Terminados'
  },
  {
    numero: 191,
    id    : '80231798',
    deudor: {
      cedula        : 80231798,
      nombreCompleto: 'JOHN ALEXANDER VALENCIA MARQUEZ',
      tel           : 'F 2376454  2371468                CEL 3004525014',
      email         : 'jhon.valencia@jvtel.com.co',
      direccion     : 'CARRERA 32 B # 2 - 64'
    },
    demanda: {
      vencimientoPagare      : '2020-11-30',
      obligacion             : 1220084112,
      entregaGarantiasAbogado: '2017-08-11',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '79 Civil Municipal'
        },
        ejecucion: {
          tipo: '1 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01082',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 87649981,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400307920170108200',
    grupo          : 'Reintegra'
  },
  {
    numero: 192,
    id    : '53053612',
    deudor: {
      cedula        : 53053612,
      nombreCompleto: 'DIANA PATRICIA SANCHEZ SALCEDO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '1100140030732017015300',
    grupo          : 'Terminados'
  },
  {
    numero: 193,
    id    : '52465691',
    deudor: {
      cedula        : 52465691,
      nombreCompleto: 'CARMEN ELIZABETH QUESADA MARTINEZ',
      tel           : 'F 7829236              CEL 3204792977',
      email         : 'equesada01@hotmail.com',
      direccion     : 'CARRERA 80 # 70A - 09'
    },
    demanda: {
      vencimientoPagare      : '2020-08-09',
      obligacion             : 12750180,
      entregaGarantiasAbogado: '2017-08-16',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '24 Civil Municipal'
        },
        ejecucion: {
          tipo: '14 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01750',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 24590710,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400302420170175000',
    grupo          : 'Reintegra'
  },
  {
    numero: 194,
    id    : '52790965',
    deudor: {
      cedula        : 52790965,
      nombreCompleto: 'FABIOLA MARTINEZ RUEDA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303520170129700',
    grupo          : 'Terminados'
  },
  {
    numero: 195,
    id    : '80244664',
    deudor: {
      cedula        : 80244664,
      nombreCompleto: 'DOUGLAS FABIAN SIZA CORTES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '1100140030122017099100',
    grupo          : 'Terminados'
  },
  {
    numero: 196,
    id    : '80130064',
    deudor: {
      cedula        : 80130064,
      nombreCompleto: 'JAIRO TIBATA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001310302120170047100',
    grupo          : 'Terminados'
  },
  {
    numero: 197,
    id    : '79457880',
    deudor: {
      cedula        : 79457880,
      nombreCompleto: 'MARIO JEAN PINZON BARON'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304520170108600',
    grupo          : 'Terminados'
  },
  {
    numero: 198,
    id    : '1012318156',
    deudor: {
      cedula        : 1012318156,
      nombreCompleto: 'HECTOR MANUEL RAMIREZ PUENTES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304020170132900',
    grupo          : 'Terminados'
  },
  {
    numero: 199,
    id    : '1106893308',
    deudor: {
      cedula        : 1106893308,
      nombreCompleto: 'MARTHA LILIANA RAMIREZ COLORADO',
      tel           : 'CEL 3108612781        CEL 3502772711',
      email         : 'liliaramirez17@gmail.com',
      direccion     : 'VEREDA BOQUERON , FINCA LA MILAGROSA, MUNICIPIO FUSA // CALLE 3 # 37 - 21 BARRIO SICAMORO, MELGAR'
    },
    demanda: {
      vencimientoPagare      : '2020-08-16',
      obligacion             : 12650694,
      entregaGarantiasAbogado: '2017-08-22',
      departamento           : 'TOLIMA',
      ciudad                 : 'MELGAR',
      juzgado                : {
        origen: {
          tipo: '2 PM'
        }
      },
      radicado     : '2017 - 00259',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 28594040,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '73449408900220170025900',
    grupo          : 'Reintegra'
  },
  {
    numero: 200,
    id    : '79582683',
    deudor: {
      cedula        : 79582683,
      nombreCompleto: 'ALEXANDER ROJAS CASTAÑEDA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301220170101200',
    grupo          : 'Terminados'
  },
  {
    numero: 201,
    id    : '51733931',
    deudor: {
      cedula        : 51733931,
      nombreCompleto: 'PIEDAD MARITZA OLGA ROCIO PRIETO VARGAS',
      tel           : 'F 6256456              CEL 3108711046',
      email         : 'sebantialbeltransprieto@hotmail.com',
      direccion     : 'CALLE 127D # 21 - 80 APTO 105'
    },
    demanda: {
      vencimientoPagare      : '16/11/2019 // 6/03/2020',
      obligacion             : 377816483778266,
      obligacion2            : 4513080485378479,
      entregaGarantiasAbogado: '2017-08-23',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '79 Civil Municipal/ 40 Civil Municipal'
        }
      },
      radicado: '2017 - 01142'
    },
    capitalAdeudado: 27602952,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400307920170114200',
    grupo          : 'Insolvencia'
  },
  {
    numero: 202,
    id    : '52488943',
    deudor: {
      cedula        : 52488943,
      nombreCompleto: 'SONIA MIREYA PANTOJA SANDOVAL'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308520170128700',
    grupo          : 'Terminados'
  },
  {
    numero: 203,
    id    : '80380775',
    deudor: {
      cedula        : 80380775,
      nombreCompleto: 'GONZALO VILLABON MARTINEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300820170106000',
    grupo          : 'Terminados'
  },
  {
    numero: 204,
    id    : '46679232',
    deudor: {
      cedula        : 46679232,
      nombreCompleto: 'FLOR ESPERANZA GUTIERREZ',
      tel           : 'F 5754502',
      email         : 'carito220@hotmail.es',
      direccion     : 'CARRERA 34 # 9 - 60'
    },
    demanda: {
      vencimientoPagare      : '2020-08-23',
      obligacion             : 12743098,
      entregaGarantiasAbogado: '2017-08-28',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '45 Civil Municipal'
        }
      },
      radicado     : '2017 - 01063',
      etapaProcesal: 'EJECUCION'
    },
    capitalAdeudado: 41990538,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400304520170106300',
    grupo          : 'Reintegra'
  },
  {
    numero: 205,
    id    : '51856244',
    deudor: {
      cedula        : 51856244,
      nombreCompleto: 'NELIDA DEL CARMEN RIVERA MESA',
      tel           : 'F 7616370               CEL 3143313269',
      direccion     : 'CARRERA 2A BIS A ESTE # 89A  SUR'
    },
    demanda: {
      vencimientoPagare      : '2021-09-09',
      obligacion             : 430103841,
      entregaGarantiasAbogado: '2017-08-22',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '12 Civil Municipal'
        },
        ejecucion: {
          tipo: '15 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 00971',
      etapaProcesal: 'EJECUCIÓN SOLICITAR LIQUIDACIÓN A REINTEGRA'
    },
    capitalAdeudado: 14068639,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400301220170097100',
    grupo          : 'Reintegra'
  },
  {
    numero: 206,
    id    : '80729141',
    deudor: {
      cedula        : 80729141,
      nombreCompleto: 'EDGAR MARTINEZ VELANDIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306420170146900',
    grupo          : 'Terminados'
  },
  {
    numero: 207,
    id    : '51993007',
    deudor: {
      cedula        : 51993007,
      nombreCompleto: 'SANDRA BIBIANA RUGE RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302220170102400',
    grupo          : 'Terminados'
  },
  {
    numero: 208,
    id    : '80357801',
    deudor: {
      cedula        : 80357801,
      nombreCompleto: 'JEOVANY ROJAS CRUZ',
      email         : 'jeovanyrojas@outlook.com',
      direccion     : 'CALLE 34 # 1A - 40 CASA 247'
    },
    demanda: {
      vencimientoPagare      : '2020-08-15',
      obligacion             : 12725973,
      entregaGarantiasAbogado: '2017-08-22',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'SOACHA',
      juzgado                : {
        origen: {
          tipo: '2 Civil Municipal'
        }
      },
      radicado     : '2017 - 00265',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 27819415,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '25754400300220170026500',
    grupo          : 'Reintegra'
  },
  {
    numero: 209,
    id    : '79852094',
    deudor: {
      cedula        : 79852094,
      nombreCompleto: 'CESAR ALFONSO UMAÑA CAÑON',
      tel           : 'F 31006108               CEL 3212406004',
      email         : 'cesa861@hotmail.com',
      direccion     : 'CARRERA 68M # 37D - 47 SUR'
    },
    demanda: {
      vencimientoPagare      : '2020-08-31',
      obligacion             : 2170085697,
      obligacion2            : '377813567054276 // 451377194627824 // 5303710806169667 // 5306726083237084 // AUDIOPRESTAMO',
      entregaGarantiasAbogado: '2017-08-22',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '64 Civil Municipal'
        },
        ejecucion: {
          tipo: '7Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01191',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 54090336,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400306420170119100',
    grupo          : 'Reintegra'
  },
  {
    numero: 210,
    id    : '343334',
    deudor: {
      cedula        : 343334,
      nombreCompleto: 'JOSE ANTONIO CASTILLO CORTES',
      tel           : 'F 4658342                 CEL 3015004499',
      direccion     : 'CARRERA 50 # 113 - 09'
    },
    demanda: {
      vencimientoPagare      : '5/01/2020  5/01/2020',
      obligacion             : 377813597718262,
      obligacion2            : '4513070908078111 // 5303714709873201',
      entregaGarantiasAbogado: '22/082017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '21 Civil Municipal'
        }
      },
      radicado     : '2018 - 00163',
      etapaProcesal: 'EJECUCION'
    },
    capitalAdeudado: 10555422,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400302120180016300',
    grupo          : 'Reintegra'
  },
  {
    numero: 211,
    id    : '17652071',
    deudor: {
      cedula        : 17652071,
      nombreCompleto: 'SAUL BARBOSA RAMIREZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25473400300120180010500',
    grupo          : 'Terminados'
  },
  {
    numero: 212,
    id    : '14320811',
    deudor: {
      cedula        : 14320811,
      nombreCompleto: 'FERNANDO VERA FARFAN'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304620170103500',
    grupo          : 'Terminados'
  },
  {
    numero: 213,
    id    : '52325613',
    deudor: {
      cedula        : 52325613,
      nombreCompleto: 'MYRIAM CONSUELO RIOS FONSECA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '110014003088220170148800',
    grupo          : 'Terminados'
  },
  {
    numero: 214,
    id    : '52702559',
    deudor: {
      cedula        : 52702559,
      nombreCompleto: 'YENNY PATRICIA RUBIO MAHECHA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '257544189002220170086700',
    grupo          : 'Terminados'
  },
  {
    numero: 215,
    id    : '36458257',
    deudor: {
      cedula        : 36458257,
      nombreCompleto: 'LUZ DARY HURTADO RIOS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300820170127300',
    grupo          : 'Terminados'
  },
  {
    numero: 216,
    id    : '51833717',
    deudor: {
      cedula        : 51833717,
      nombreCompleto: 'BLANCA JANETH PINZON SUAREZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300520170125500',
    grupo          : 'Terminados'
  },
  {
    numero: 217,
    id    : '52328942',
    deudor: {
      cedula        : 52328942,
      nombreCompleto: 'DIANA VANESSA NARANJO HERNANDEZ',
      tel           : '2256952 // 3108096132',
      email         : 'casas_castillo@hotmail.com',
      direccion     : 'CALLE 58 # 45 - 86'
    },
    demanda: {
      obligacion             : 182540,
      obligacion2            : 'AUDIOPRESTAMO',
      entregaGarantiasAbogado: '2017-08-17',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '37 CCTO'
        },
        ejecucion: {
          tipo: '3 CCTOEJ'
        }
      },
      radicado: '2017 - 00453'
    },
    capitalAdeudado: 206655465,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001310303720170045300',
    grupo          : 'LiosJuridicos'
  },
  {
    numero: 218,
    id    : '12402596',
    deudor: {
      cedula        : 12402596,
      nombreCompleto: 'ELIO ALVARADO HERNANDEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300220170084000',
    grupo          : 'Terminados'
  },
  {
    numero: 219,
    id    : '80921416',
    deudor: {
      cedula        : 80921416,
      nombreCompleto: 'BLAS LAITON PATIÑO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307220170107500',
    grupo          : 'Terminados'
  },
  {
    numero: 220,
    id    : '51726361',
    deudor: {
      cedula        : 51726361,
      nombreCompleto: 'MARIA EUGENIA SALCEDO PINEDA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304020170150900',
    grupo          : 'Terminados'
  },
  {
    numero: 221,
    id    : '52192430',
    deudor: {
      cedula        : 52192430,
      nombreCompleto: 'BEATRIZ HELENA MACHADO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301320170115700',
    grupo          : 'Terminados'
  },
  {
    numero: 222,
    id    : '79332273',
    deudor: {
      cedula        : 79332273,
      nombreCompleto: 'DUFRESNY AUGUSTO PINILLA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302820170085800',
    grupo          : 'Terminados'
  },
  {
    numero: 223,
    id    : '17174720',
    deudor: {
      cedula        : 17174720,
      nombreCompleto: 'GERARDO ANTONIO MONCADA VEGA',
      tel           : 'F 3349755                 CEL 3153330306',
      email         : 'gerardomoncada70@hotmail.com',
      direccion     : 'CALLE 159 # 15 - 45'
    },
    demanda: {
      vencimientoPagare      : '18/04/2020  5/05/2020  15/12/2019',
      obligacion             : 11903330957,
      obligacion2            : '377816208286710 // 4513083951499464 // 5176407001878614 // 5303720129694960 // AUDIOPRESTAMO',
      entregaGarantiasAbogado: '2017-08-23',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '55 Civil Municipal'
        },
        ejecucion: {
          tipo: '15 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 00860',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 43653352,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400305520170086000',
    grupo          : 'Reintegra'
  },
  {
    numero: 224,
    id    : '52616509',
    deudor: {
      cedula        : 52616509,
      nombreCompleto: 'MARIA ROSA ZARATE CORTES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25386400300120170040700',
    grupo          : 'Terminados'
  },
  {
    numero: 225,
    id    : '79815721',
    deudor: {
      cedula        : 79815721,
      nombreCompleto: 'LUIS OCTAVIO ROJAS VALBUENA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301320170116300',
    grupo          : 'Terminados'
  },
  {
    numero: 226,
    id    : '80513085',
    deudor: {
      cedula        : 80513085,
      nombreCompleto: 'NESTOR GERMAN URREGO AGUILERA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305520170094300',
    grupo          : 'Terminados'
  },
  {
    numero: 227,
    id    : '23550435',
    deudor: {
      cedula        : 23550435,
      nombreCompleto: 'ROSA ELENA MARTINEZ DE DUITAMA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301520170124900',
    grupo          : 'Terminados'
  },
  {
    numero: 228,
    id    : '80740039',
    deudor: {
      cedula        : 80740039,
      nombreCompleto: 'FABIAN ALEXANDER GIL GIL'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301820170151700',
    grupo          : 'Terminados'
  },
  {
    numero: 229,
    id    : '52818428',
    deudor: {
      cedula        : 52818428,
      nombreCompleto: 'JENNIFER ALEJANDRA MOGOLLÓN BERNAL'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306820170124000',
    grupo          : 'Terminados'
  },
  {
    numero: 230,
    id    : '1014185483',
    deudor: {
      cedula        : 1014185483,
      nombreCompleto: 'FREDY ALEXANDER MUÑOZ CASTAÑEDA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305220170090600',
    grupo          : 'Terminados'
  },
  {
    numero: 231,
    id    : '1022943195',
    deudor: {
      cedula        : 1022943195,
      nombreCompleto: 'DIANA MARCELA IPUZ SUAREZ Y OTRO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418900920170008900',
    grupo          : 'Terminados'
  },
  {
    numero: 232,
    id    : '1023868827',
    deudor: {
      cedula        : 1023868827,
      nombreCompleto: 'SANDRA MILENA CUBILLOS LINARES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304820170087900',
    grupo          : 'Terminados'
  },
  {
    numero: 233,
    id    : '11313124',
    deudor: {
      cedula        : 11313124,
      nombreCompleto: 'JOSE LUIS TORRES TAMAYO',
      tel           : 'F 3138216              CEL 3138216786',
      email         : 'jotorres@perosnalsoft.com.co',
      direccion     : 'CALLE 145 # 46 - 13 APTO 202 INT 5'
    },
    demanda: {
      vencimientoPagare      : '2020-08-24',
      obligacion             : 4099838997529750,
      obligacion2            : '5303712728390736 // 12141636',
      entregaGarantiasAbogado: '2017-08-29',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '28 Civil Municipal'
        },
        ejecucion: {
          tipo: '16 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 00849',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 30506109,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400302820170084900',
    grupo          : 'Reintegra'
  },
  {
    numero: 234,
    id    : '16940930',
    deudor: {
      cedula        : 16940930,
      nombreCompleto: 'MAURICIO ALEXANDER AGUIRRE BERMUDEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304320170120500',
    grupo          : 'Terminados'
  },
  {
    numero: 235,
    id    : '79853115',
    deudor: {
      cedula        : 79853115,
      nombreCompleto: 'FANOR DIAZ AGUDELO',
      tel           : 'F 8060271                CEL 3212406193',
      email         : 'fanor.diaz@gmail.com',
      direccion     : 'DIAGONAL 56 BIS 84 A 10 SUR TR 1'
    },
    demanda: {
      vencimientoPagare      : '2017-02-14',
      obligacion             : 148931,
      entregaGarantiasAbogado: '2017-09-06',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '8 Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-008-civil-municipal-de-bogota'
        },
        ejecucion: {
          tipo: '6 Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-06-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      radicado     : '2017 - 01134',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 27603821,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400300820170113400',
    grupo          : 'Bancolombia'
  },
  {
    numero: 236,
    id    : '3165933',
    deudor: {
      cedula        : 3165933,
      nombreCompleto: 'RIGOBERTO MORENO OLAYA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308520170136200',
    grupo          : 'Terminados'
  },
  {
    numero: 237,
    id    : '80237050',
    deudor: {
      cedula        : 80237050,
      nombreCompleto: 'NUMAEL AUGUSTO GONZALEZ SALGUERO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25799418900120170024700',
    grupo          : 'Terminados'
  },
  {
    numero: 238,
    id    : '7181490',
    deudor: {
      cedula        : 7181490,
      nombreCompleto: 'FREDY ALEXANDER RUDA ARIAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304320170110600',
    grupo          : 'Terminados'
  },
  {
    numero: 239,
    id    : '53131901',
    deudor: {
      cedula        : 53131901,
      nombreCompleto: 'NIDIA JACQUELINE RIVEROS ARAQUE',
      tel           : 7839904,
      direccion     : 'CARRERA 88C  63 SUR 67 TORRE 5 APARTAMENTO 1'
    },
    demanda: {
      obligacion             : 20990135265,
      entregaGarantiasAbogado: '2017-09-13',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '45 Civil Municipal'
        }
      },
      radicado: '2017 - 01164'
    },
    capitalAdeudado: 1788247698,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400304520170116400',
    grupo          : 'LiosJuridicos'
  },
  {
    numero: 240,
    id    : '180145973',
    deudor: {
      cedula        : 180145973,
      nombreCompleto: 'CESAR ALIRIO MORENO MONGUI'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900220170082900',
    grupo          : 'Terminados'
  },
  {
    numero: 241,
    id    : '900535464',
    deudor: {
      cedula        : 900535464,
      nombreCompleto: 'PUBLI MAGIC S..A.S.'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302320170104400',
    grupo          : 'Terminados'
  },
  {
    numero: 242,
    id    : '79793904',
    deudor: {
      cedula        : 79793904,
      nombreCompleto: 'JOHN HADER OTALVARO  ROMO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900220180036300',
    grupo          : 'Terminados'
  },
  {
    numero: 243,
    id    : '300388244',
    deudor: {
      cedula        : 300388244,
      nombreCompleto: 'MARIA OLGA CASTAÑEDA PERUGACHI',
      tel           : 'F 1111111              CEL 32222239883 3143072762',
      direccion     : 'CALLE 15 # 15 - 45'
    },
    demanda: {
      vencimientoPagare      : '2020-08-11',
      obligacion             : 12577419,
      entregaGarantiasAbogado: '2017-08-25',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '69 Civil Municipal // 25 Civil Municipal'
        }
      },
      radicado     : '2017 - 00845',
      etapaProcesal: 'EN EJECUCIÓN LIQUIDACIÓN CREDITO SOLICITADA A COVINOC'
    },
    capitalAdeudado: 46109381,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400306920170084500',
    grupo          : 'Reintegra'
  },
  {
    numero: 244,
    id    : '80144827',
    deudor: {
      cedula        : 80144827,
      nombreCompleto: 'RICARDO ANDRES NOCUA GUATAMA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302620170100600',
    grupo          : 'Terminados'
  },
  {
    numero: 245,
    id    : '79893549',
    deudor: {
      cedula        : 79893549,
      nombreCompleto: 'JAVIER ORLANDO GOMEZ DIAZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303820170095700',
    grupo          : 'Terminados'
  },
  {
    numero: 246,
    id    : '79805533',
    deudor: {
      cedula        : 79805533,
      nombreCompleto: 'EDWIN BUITRAGO VILLAMIL'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304720180024200',
    grupo          : 'Terminados'
  },
  {
    numero: 247,
    id    : '179290',
    deudor: {
      cedula        : 179290,
      nombreCompleto: 'DIONISIO LANCHEROS NOVOA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25035418900120170017300',
    grupo          : 'Terminados'
  },
  {
    numero: 248,
    id    : '19475788',
    deudor: {
      cedula        : 19475788,
      nombreCompleto: 'HENRY CARRANZA ALBA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305920170087100',
    grupo          : 'Terminados'
  },
  {
    numero: 249,
    id    : '19069228',
    deudor: {
      cedula        : 19069228,
      nombreCompleto: 'JORGE ALBERTO MARTINEZ BENDEK',
      tel           : 'F 6701643              CEL 3134749213',
      email         : 'jorgemar24@gmail.com',
      direccion     : 'CARRERA 15 # 188 - 39'
    },
    demanda: {
      vencimientoPagare      : '18/05/2020  5/05/2020  15/05/2019',
      obligacion             : 377813517259835,
      obligacion2            : '377814405234039 // 45130727777594186 // 5491572487025564 // AUDIOPRESTAMO',
      entregaGarantiasAbogado: '2017-08-23',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '16 Civil Municipal'
        },
        ejecucion: {
          tipo: '18 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 00875',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 44933312,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400301620170087500',
    grupo          : 'Reintegra'
  },
  {
    numero: 250,
    id    : '72165243',
    deudor: {
      cedula        : 72165243,
      nombreCompleto: 'FRANCISCO CONTRERAS RAMIREZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25758418900120170059900',
    grupo          : 'Terminados'
  },
  {
    numero: 251,
    id    : '7226283',
    deudor: {
      cedula        : 7226283,
      nombreCompleto: 'CARLOS JAVIER BECERRA BENAVIDES'
    },
    capitalAdeudado: 0,
    grupo          : 'Terminados'
  },
  {
    numero: 252,
    id    : '1023863956',
    deudor: {
      cedula        : 1023863956,
      nombreCompleto: 'ANGEL JOVANI SUAREZ GOMEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303420170123600',
    grupo          : 'Terminados'
  },
  {
    numero: 253,
    id    : '1013604409',
    deudor: {
      cedula        : 1013604409,
      nombreCompleto: 'JORGE EDUARDO ACOSTA CORREDOR'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302520170099800',
    grupo          : 'Terminados'
  },
  {
    numero: 254,
    id    : '52344904',
    deudor: {
      cedula        : 52344904,
      nombreCompleto: 'YOHAIRA PRADO VALOYES',
      tel           : 'F 8615372                  CEL 3103291690',
      email         : 'yohairapadro@gmail.com',
      direccion     : 'CARRERA 9A 14F - 28C - UNIDAD 22 CHIA'
    },
    demanda: {
      vencimientoPagare      : '2018-05-09',
      obligacion             : 9460081795,
      obligacion2            : 5303727444531025,
      entregaGarantiasAbogado: '2017-08-28',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'CHIA',
      juzgado                : {
        origen: {
          tipo: '3 Civil Municipal'
        }
      },
      radicado: '2017 - 00477'
    },
    capitalAdeudado: 12993948,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25175408900320170047700',
    grupo          : 'Reintegra'
  },
  {
    numero: 255,
    id    : '23946115',
    deudor: {
      cedula        : 23946115,
      nombreCompleto: 'YEIMI ZORAIDA PEREZ ACEVEDO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301220170102100',
    grupo          : 'Terminados'
  },
  {
    numero: 256,
    id    : '79881862',
    deudor: {
      cedula        : 79881862,
      nombreCompleto: 'FREDDY ARIAS MARTINEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300720170141000',
    grupo          : 'Terminados'
  },
  {
    numero: 257,
    id    : '79706920',
    deudor: {
      cedula        : 79706920,
      nombreCompleto: 'PAUL RICHARD CAICEDO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418900720170013800',
    grupo          : 'Terminados'
  },
  {
    numero: 258,
    id    : '51740544',
    deudor: {
      cedula        : 51740544,
      nombreCompleto: 'SOL JUDITH BUITRAGO DUQUE',
      tel           : 'F 3002001',
      email         : 'dirfinanciera.sol@gmail.com',
      direccion     : 'CARRERA 121 # 128B - 52 BLOQUE 8 CASA 34'
    },
    demanda: {
      vencimientoPagare      : '2018-01-26',
      obligacion             : 5470083833,
      obligacion2            : '377813735559305 // 5303724061518310',
      entregaGarantiasAbogado: '2017-09-01',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '13 Civil Municipal'
        }
      },
      radicado     : '2017 - 01178',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 18506672,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400301320170117800',
    grupo          : 'Reintegra'
  },
  {
    numero: 259,
    id    : '52770471',
    deudor: {
      cedula        : 52770471,
      nombreCompleto: 'LUZ NELLY RUIZ LARA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303920170125600',
    grupo          : 'Terminados'
  },
  {
    numero: 260,
    id    : '11384155',
    deudor: {
      cedula        : 11384155,
      nombreCompleto: 'HERNAN ALVAREZ PARDO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25290400300120170063400',
    grupo          : 'Terminados'
  },
  {
    numero: 261,
    id    : '79901800',
    deudor: {
      cedula        : 79901800,
      nombreCompleto: 'DANIEL ALBERTO IBAÑEZ DELGADO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308220170111600',
    grupo          : 'Terminados'
  },
  {
    numero: 262,
    id    : '1069737167',
    deudor: {
      cedula        : 1069737167,
      nombreCompleto: 'RAFAEL ANDRES MORENO ZAMORA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '2590400300220170063100',
    grupo          : 'Terminados'
  },
  {
    numero: 263,
    id    : '9856710',
    deudor: {
      cedula        : 9856710,
      nombreCompleto: 'ANCIZAR GIRALDO BOTERO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307020170100700',
    grupo          : 'Terminados'
  },
  {
    numero: 264,
    id    : '3058707',
    deudor: {
      cedula        : 3058707,
      nombreCompleto: 'HECTOR JULIO GARZON PEÑA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25736408900120170016600',
    grupo          : 'Terminados'
  },
  {
    numero: 265,
    id    : '7601476',
    deudor: {
      cedula        : 7601476,
      nombreCompleto: 'JULIO RENE SANCHEZ ARGOTE',
      tel           : 'F 3018759                 CEL 3118027001',
      email         : 'jsanchezargote@gmail.com',
      direccion     : 'CARRERA 90 C No 6A - 31   - CASA 148'
    },
    demanda: {
      vencimientoPagare      : '2020-05-04',
      obligacion             : 186718,
      obligacion2            : '3778153354915637 / 4513079095670572',
      entregaGarantiasAbogado: '2017-09-21',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '20 CCTO/1 CCTOE'
        }
      },
      radicado: '2018 - 00650'
    },
    capitalAdeudado: 115224736,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '1100140030202\'100050100',
    grupo          : 'Insolvencia'
  },
  {
    numero: 266,
    id    : '71192974',
    deudor: {
      cedula        : 71192974,
      nombreCompleto: 'JULIAN DE JESUS ISAZA AGUIRRE'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302020170121900',
    grupo          : 'Terminados'
  },
  {
    numero: 267,
    id    : '52102735',
    deudor: {
      cedula        : 52102735,
      nombreCompleto: 'ANA FABIOLA CARDOZO HERREÑO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306220170122900',
    grupo          : 'Terminados'
  },
  {
    numero: 268,
    id    : '79592811',
    deudor: {
      cedula        : 79592811,
      nombreCompleto: 'JORGE HUGO LEAL SERRATO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303520170147500',
    grupo          : 'Terminados'
  },
  {
    numero: 269,
    id    : '80162950',
    deudor: {
      cedula        : 80162950,
      nombreCompleto: 'JUAN CARLOS ORTIZ CUERVO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25286400300120180042100',
    grupo          : 'Terminados'
  },
  {
    numero: 270,
    id    : '1018423770',
    deudor: {
      cedula        : 1018423770,
      nombreCompleto: 'WILMER ANDRES QUIÑONES HERNANDEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001408903420170113900',
    grupo          : 'Terminados'
  },
  {
    numero: 271,
    id    : '52850427',
    deudor: {
      cedula        : 52850427,
      nombreCompleto: 'AURA GEOVANA RODRIGUEZ MORA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400405420170099000',
    grupo          : 'Terminados'
  },
  {
    numero: 272,
    id    : '80406979',
    deudor: {
      cedula        : 80406979,
      nombreCompleto: 'LUIS FERNANDO GUTIERREZ RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300620170076300',
    grupo          : 'Terminados'
  },
  {
    numero: 273,
    id    : '1024479389',
    deudor: {
      cedula        : 1024479389,
      nombreCompleto: 'SONIA MARCELA MOLINA QUIMBAYO',
      tel           : 'F 7650684',
      email         : 'sonymarce20@hotmail.com',
      direccion     : 'CALLE 67 No 17 C-63 SUR'
    },
    demanda: {
      vencimientoPagare      : '5/10/2022',
      obligacion             : 156791,
      entregaGarantiasAbogado: '25/09/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '64 Civil Municipal // 46 PCCivil Municipal'
        }
      },
      radicado: '2018 - 01029'
    },
    capitalAdeudado: 65355736,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400306420180102900',
    grupo          : 'Insolvencia'
  },
  {
    numero: 274,
    id    : '80312466',
    deudor: {
      cedula        : 80312466,
      nombreCompleto: 'ANDRES GUILLERMO ACEVEDO BORRAEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300720170148400',
    grupo          : 'Terminados'
  },
  {
    numero: 275,
    id    : '39670695',
    deudor: {
      cedula        : 39670695,
      nombreCompleto: 'HORTENCIA GARZON'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754408900320170096900',
    grupo          : 'Terminados'
  },
  {
    numero: 276,
    id    : '79200345',
    deudor: {
      cedula        : 79200345,
      nombreCompleto: 'NELSON MAYORGA GOMEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754400300420170038100',
    grupo          : 'Terminados'
  },
  {
    numero: 277,
    id    : '39687966',
    deudor: {
      cedula        : 39687966,
      nombreCompleto: 'OLGA LUCIA HERAZO PERDOMO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308320170098000',
    grupo          : 'Terminados'
  },
  {
    numero: 278,
    id    : '35506033',
    deudor: {
      cedula        : 35506033,
      nombreCompleto: 'LUZ DARY PUERTA JARAMILLO',
      tel           : 'F 4357832                CEL 3103430010',
      email         : 'natis-rolita@hotmail.con',
      direccion     : 'CARRERA  101  No 71 B - 53'
    },
    demanda: {
      vencimientoPagare      : '18/03/2019',
      obligacion             : 4670083154,
      entregaGarantiasAbogado: '28/09/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '37 Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-37-civil-municipal-de-bogota'
        },
        ejecucion: {
          tipo: '11 Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-11-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      radicado     : '2017 - 01391',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 12347548,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400303720170139100',
    grupo          : 'Bancolombia'
  },
  {
    numero: 279,
    id    : '1069745324',
    deudor: {
      cedula        : 1069745324,
      nombreCompleto: 'ANDRES FELIPE GUTIERREZ TRUJILLO',
      tel           : 'CEL 3115964170',
      direccion     : 'CALLE 14A SUR # 11M - 18 CASA 22'
    },
    demanda: {
      vencimientoPagare      : '2020-12-07',
      obligacion             : 2330087057,
      entregaGarantiasAbogado: '2017-08-25',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '8 Civil Municipal'
        },
        ejecucion: {
          tipo: '1 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01058',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 14404721,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300820170105800',
    grupo          : 'Reintegra'
  },
  {
    numero: 280,
    id    : '19447966',
    deudor: {
      cedula        : 19447966,
      nombreCompleto: 'JOSE HERNANDO SANCHEZ VALBUENA',
      tel           : 'F 4789274              CEL 3125826241',
      email         : 'jhernandosanchez@yahoo.es',
      direccion     : 'CR 12B 24-37 SUR'
    },
    demanda: {
      vencimientoPagare      : '15/012021',
      obligacion             : 8920084662,
      entregaGarantiasAbogado: '2017-09-11',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '9 Civil Municipal'
        },
        ejecucion: {
          tipo: '18 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01279',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 11796195,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300920170127900',
    grupo          : 'Reintegra'
  },
  {
    numero: 281,
    id    : '1069712582',
    deudor: {
      cedula        : 1069712582,
      nombreCompleto: 'YENNY MARGOTH LARA MUÑOZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25053408900120180004900',
    grupo          : 'Terminados'
  },
  {
    numero: 282,
    id    : '19255260',
    deudor: {
      cedula        : 19255260,
      nombreCompleto: 'MATIAS HUMBERTO AVILA AGUILAR',
      tel           : 'F 4170527              CEL 3125024008',
      email         : 'maifren_13@yahoo.es',
      direccion     : 'CALLE 2 C No 62 - 20'
    },
    demanda: {
      vencimientoPagare      : '5/05/2024',
      obligacion             : 174366,
      entregaGarantiasAbogado: '21/09/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '15 Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-015-civil-municipal-de-bogota'
        },
        ejecucion: {
          tipo: '11 Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-11-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      radicado     : '2017 - 01394',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 66362959,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400301520170139400',
    grupo          : 'Bancolombia'
  },
  {
    numero: 283,
    id    : '1010188573',
    deudor: {
      cedula        : 1010188573,
      nombreCompleto: 'JANSON DAVID CARREÑO QUIJANO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304120170114000',
    grupo          : 'Terminados'
  },
  {
    numero: 284,
    id    : '93119101',
    deudor: {
      cedula        : 93119101,
      nombreCompleto: 'ARMANDO BARRIOS VARGAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25214400300120170070400',
    grupo          : 'Terminados'
  },
  {
    numero: 285,
    id    : '52318314',
    deudor: {
      cedula        : 52318314,
      nombreCompleto: 'ADRIANA MARIA PEREZ GOMEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300520170132600',
    grupo          : 'Terminados'
  },
  {
    numero: 286,
    id    : '80259791',
    deudor: {
      cedula        : 80259791,
      nombreCompleto: 'ALIRIO HEREDIA BUITRAGO',
      tel           : 'F 2796621',
      email         : 'gerencia.seguridadgf@gmail.com',
      direccion     : 'DIAGONAL 48 J No 5C- 34 SUR'
    },
    demanda: {
      vencimientoPagare      : '2020-09-06',
      obligacion             : 12711612,
      entregaGarantiasAbogado: '2017-09-11',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '17 Civil Municipal'
        }
      },
      radicado     : '2017 - 01195',
      etapaProcesal: 'CURADOR AD LITEM'
    },
    capitalAdeudado: 94533343,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400301720170119500',
    grupo          : 'Reintegra'
  },
  {
    numero: 287,
    id    : '79861754',
    deudor: {
      cedula        : 79861754,
      nombreCompleto: 'CARLOS GERMAN RUGE CASTAÑEDA',
      tel           : 'F 6087374              CEL 3104865508',
      email         : 'carlosgrugec@hotmail.com',
      direccion     : 'CALLE 72 A No  74 A - 77'
    },
    demanda: {
      vencimientoPagare      : '2020-09-29',
      obligacion             : 12592504,
      entregaGarantiasAbogado: '2017-10-04',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '16 Civil Municipal DESG / 50 Civil Municipal'
        }
      },
      radicado: '2017 - 00157'
    },
    capitalAdeudado: 44309785,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400301620170015700',
    grupo          : 'Insolvencia'
  },
  {
    numero: 288,
    id    : '20371142',
    deudor: {
      cedula        : 20371142,
      nombreCompleto: 'VIVIANA MARCELA ROA VIVAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308320170113300',
    grupo          : 'Terminados'
  },
  {
    numero: 289,
    id    : '12229243',
    deudor: {
      cedula        : 12229243,
      nombreCompleto: 'JOSE AHINSONJOBER TORO VARGAS',
      tel           : 'F 4651401',
      email         : 'serdiajo@gmail.com',
      direccion     : 'AVENIDA 1 DE MAYO No 29-06'
    },
    demanda: {
      vencimientoPagare      : '2020-03-22',
      obligacion             : 5306940432740470,
      entregaGarantiasAbogado: '2017-09-11',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '18 Civil Municipal'
        },
        ejecucion: {
          tipo: '16 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01522',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 14645611,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400301820170152200',
    grupo          : 'Reintegra'
  },
  {
    numero: 290,
    id    : '40035102',
    deudor: {
      cedula        : 40035102,
      nombreCompleto: 'ELIZABETH GIL RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305920170097500',
    grupo          : 'Terminados'
  },
  {
    numero: 291,
    id    : '35427969',
    deudor: {
      cedula        : 35427969,
      nombreCompleto: 'YEIMMY CAROLINA FINO BALLEN'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303920170133000',
    grupo          : 'Terminados'
  },
  {
    numero: 292,
    id    : '80205694',
    deudor: {
      cedula        : 80205694,
      nombreCompleto: 'JOHN FREDY HERREÑO RAMIREZ',
      tel           : 'F 7641957                CEL 3124102',
      email         : 'kellyo.1508@hotmail.com',
      direccion     : 'DIAGONAL 82 A SUR No 7C 19  ESTE'
    },
    demanda: {
      vencimientoPagare      : '2020-08-31',
      obligacion             : 300094317,
      entregaGarantiasAbogado: '2017-09-13',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '10  Pequeñas Causas y Competencias Multiples'
        }
      },
      radicado     : '2017 - 00128',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 25766204,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001410375220170012800',
    grupo          : 'Reintegra'
  },
  {
    numero: 293,
    id    : '1032383389',
    deudor: {
      cedula        : 1032383389,
      nombreCompleto: 'ANDERSON REVELO SANTOS',
      tel           : 'F 4725511              CEL 3118526428',
      email         : 'ars.09@hotmail.com',
      direccion     : 'CALLE 64 SUR  No 85 B - 40  APARTAMENTO  104'
    },
    demanda: {
      vencimientoPagare      : '2020-03-05',
      obligacion             : '320088443  / 377813441863587',
      obligacion2            : 4513070212799642,
      entregaGarantiasAbogado: '2017-09-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '48 Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-048-civil-municipal-de-bogota'
        },
        ejecucion: {
          tipo: '7 Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-07-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      radicado     : '2017 - 00974',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 12249598,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400304820170097400',
    grupo          : 'Bancolombia'
  },
  {
    numero: 294,
    id    : '79292743',
    deudor: {
      cedula        : 79292743,
      nombreCompleto: 'HERNANDO PULECIO PAREDES',
      tel           : 'F 4619449',
      email         : 'hpulecio@cable.net.co',
      direccion     : 'CALLE 86 A No 69 T -41  TORRE 1 APARTAMENTO 902'
    },
    demanda: {
      vencimientoPagare      : '2020-09-13',
      obligacion             : 12676248,
      entregaGarantiasAbogado: '2017-09-18',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '63 Civil Municipal'
        },
        ejecucion: {
          tipo: '1 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 00924',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 48498610,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400306320170092400',
    grupo          : 'Reintegra'
  },
  {
    numero: 295,
    id    : '36536419',
    deudor: {
      cedula        : 36536419,
      nombreCompleto: 'RITA CECILIA FERNANDEZ IBAÑEZ',
      tel           : 'F 2131020',
      direccion     : 'CALLE 124 No  20-76 APARTAMENTO 503'
    },
    demanda: {
      vencimientoPagare      : '2020-09-12',
      obligacion             : 12389160,
      entregaGarantiasAbogado: '2017-09-18',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '51 Civil Municipal'
        }
      },
      radicado     : '2017 - 01113',
      etapaProcesal: 'PENDIENTE SENTENCIA Y OFICIOS'
    },
    capitalAdeudado: 25845669,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400305120170111300',
    grupo          : 'Reintegra'
  },
  {
    numero: 296,
    id    : '86074992',
    deudor: {
      cedula        : 86074992,
      nombreCompleto: 'DIDIER HARVEY PRADA AGUIRRE'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001410375220170129100',
    grupo          : 'Terminados'
  },
  {
    numero: 297,
    id    : '6006685',
    deudor: {
      cedula        : 6006685,
      nombreCompleto: 'MIGUEL ANGEL MARTINEZ HUERTAS',
      tel           : 'CEL 3123077900',
      direccion     : 'CALLE 5 A No 6 - 23 UMBITA'
    },
    demanda: {
      vencimientoPagare      : '10/07/2019',
      obligacion             : 5450082766,
      obligacion2            : 5450083252,
      entregaGarantiasAbogado: '21/09/2017',
      departamento           : 'BOYACÁ',
      ciudad                 : 'UMBITA',
      juzgado                : {
        origen: {
          tipo: '001 PM'
        }
      },
      radicado     : '2017 - 00095',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 28485816,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '15842408900120170009500',
    grupo          : 'Reintegra'
  },
  {
    numero: 298,
    id    : '79659040',
    deudor: {
      cedula        : 79659040,
      nombreCompleto: 'HECTOR GABRIEL RAMIREZ BOHORQUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307820170098600',
    grupo          : 'Terminados'
  },
  {
    numero: 299,
    id    : '80879280',
    deudor: {
      cedula        : 80879280,
      nombreCompleto: 'ROBERTO STIVENSON ACERO BARON'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754400300320170034600',
    grupo          : 'Terminados'
  },
  {
    numero: 300,
    id    : '79617611',
    deudor: {
      cedula        : 79617611,
      nombreCompleto: 'FABIO EDILBERTO JARA SANCHEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25286400300120170081600',
    grupo          : 'Terminados'
  },
  {
    numero: 301,
    id    : '35220385',
    deudor: {
      cedula        : 35220385,
      nombreCompleto: 'BLANCA YOLANDA ACOSTA RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25322418900120180002200',
    grupo          : 'Terminados'
  },
  {
    numero: 302,
    id    : '79906707',
    deudor: {
      cedula        : 79906707,
      nombreCompleto: 'EDGAR GODOY LOPEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25286310300120170100300',
    grupo          : 'Terminados'
  },
  {
    numero: 303,
    id    : '1118532643',
    deudor: {
      cedula        : 1118532643,
      nombreCompleto: 'RAFAEL ALFONSO CAMACHO VELANDIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303020170157900',
    grupo          : 'Terminados'
  },
  {
    numero: 304,
    id    : '79892240',
    deudor: {
      cedula        : 79892240,
      nombreCompleto: 'FERNANDO GONZALEZ TELLEZ'
    },
    demanda: {
      radicado: '2017 - 01411'
    },
    capitalAdeudado: 0,
    grupo          : 'Terminados'
  },
  {
    numero: 305,
    id    : '19479861',
    deudor: {
      cedula        : 19479861,
      nombreCompleto: 'FERNANDO RINCON RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308220170125600',
    grupo          : 'Terminados'
  },
  {
    numero: 306,
    id    : '7217446',
    deudor: {
      cedula        : 7217446,
      nombreCompleto: 'JORGE ARTURO JIMENEZ LEAL'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306420170149000',
    grupo          : 'Terminados'
  },
  {
    numero: 307,
    id    : '79309509',
    deudor: {
      cedula        : 79309509,
      nombreCompleto: 'CARLOS ARTURO CASTAÑO ALDANA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303620170112500',
    grupo          : 'Terminados'
  },
  {
    numero: 308,
    id    : '80271269',
    deudor: {
      cedula        : 80271269,
      nombreCompleto: 'OSCAR ERNESTO SERRANO VELASCO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302220170117600',
    grupo          : 'Terminados'
  },
  {
    numero: 309,
    id    : '19332163',
    deudor: {
      cedula        : 19332163,
      nombreCompleto: 'HENRY NOEL CASTELBLANCO SOSA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306720170161300',
    grupo          : 'Terminados'
  },
  {
    numero: 310,
    id    : '79388145',
    deudor: {
      cedula        : 79388145,
      nombreCompleto: 'LIBARDO ALFONSO GONZALEZ TRIVIÑO',
      tel           : 'F 2928108',
      email         : 'li_bcar@hotmail.com',
      direccion     : 'CARRERA 72 A- No 9 - 44'
    },
    demanda: {
      vencimientoPagare      : '23/03/2020',
      obligacion             : '1740086734 4513073749673967',
      obligacion2            : 5303719549810730,
      entregaGarantiasAbogado: '04/10/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '21 Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-021-civil-municipal-de-bogota'
        },
        ejecucion: {
          tipo: '15 Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-15-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      radicado     : '2017 - 01532',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 40406421,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400302120170153200',
    grupo          : 'Bancolombia'
  },
  {
    numero: 311,
    id    : '32730630',
    deudor: {
      cedula        : 32730630,
      nombreCompleto: 'PAULA ANDREA PINZON OTALVARO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400370820170018400',
    grupo          : 'Terminados'
  },
  {
    numero: 312,
    id    : '80394456',
    deudor: {
      cedula        : 80394456,
      nombreCompleto: 'PEDRO PABLO SARMIENTO MAYORGA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418904320170114000',
    grupo          : 'Terminados'
  },
  {
    numero: 313,
    id    : '80490307',
    deudor: {
      cedula        : 80490307,
      nombreCompleto: 'MAURICIO PEREZ PLAZAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307820170104900',
    grupo          : 'Terminados'
  },
  {
    numero: 314,
    id    : '1075655673',
    deudor: {
      cedula        : 1075655673,
      nombreCompleto: 'TATIANA RAMON PEPICANO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25126408900220170076800',
    grupo          : 'Terminados'
  },
  {
    numero: 315,
    id    : '80203869',
    deudor: {
      cedula        : 80203869,
      nombreCompleto: 'BLADIMIR GUTIERREZ CIFUENTES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754400300320170036400',
    grupo          : 'Terminados'
  },
  {
    numero: 316,
    id    : '8799171',
    deudor: {
      cedula        : 8799171,
      nombreCompleto: 'MANUEL ENRIQUE ARTEAGA OROZCO',
      tel           : 'F 5164071',
      email         : 'saliradelante2012@hotmail.com',
      direccion     : 'CARRERA 18 B No 4 C -  20  SOACHA'
    },
    demanda: {
      vencimientoPagare      : '2030-01-05',
      obligacion             : '180049   53037120066499008',
      obligacion2            : '3778133433049336 /4513075801129044',
      entregaGarantiasAbogado: '2017-10-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'SOACHA',
      juzgado                : {
        origen: {
          tipo: '1 Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-01-civil-municipal-de-bogota'
        }
      },
      radicado     : '2017 - 00323',
      etapaProcesal: 'EJECUCION'
    },
    capitalAdeudado: 44944657,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '25754400300120170032300',
    grupo          : 'Bancolombia'
  },
  {
    numero: 317,
    id    : '80251653',
    deudor: {
      cedula        : 80251653,
      nombreCompleto: 'WILSON JAVIER SANCHEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301820170181300',
    grupo          : 'Terminados'
  },
  {
    numero: 318,
    id    : '51673703',
    deudor: {
      cedula        : 51673703,
      nombreCompleto: 'SONIA JANETH RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307020170116400',
    grupo          : 'Terminados'
  },
  {
    numero: 319,
    id    : '33307437',
    deudor: {
      cedula        : 33307437,
      nombreCompleto: 'GLORIA ANGELICA PRASCA MEJIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25126400300120170075600',
    grupo          : 'Terminados'
  },
  {
    numero: 320,
    id    : '1032492078',
    deudor: {
      cedula        : 1032492078,
      nombreCompleto: 'MARIA CAMILA MACIAS PADILLA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305620170131200',
    grupo          : 'Terminados'
  },
  {
    numero: 321,
    id    : '52391771',
    deudor: {
      cedula        : 52391771,
      nombreCompleto: 'ADELA BARAJAS MORENO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301620170136700',
    grupo          : 'Terminados'
  },
  {
    numero: 322,
    id    : '63395806',
    deudor: {
      cedula        : 63395806,
      nombreCompleto: 'CLAUDIA YAMILE SUAREZ POBLADOR'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308620170120500',
    grupo          : 'Terminados'
  },
  {
    numero: 323,
    id    : '11319802',
    deudor: {
      cedula        : 11319802,
      nombreCompleto: 'LUIS FERNANDO MEDINA POTES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303720170150900',
    grupo          : 'Terminados'
  },
  {
    numero: 324,
    id    : '80032088',
    deudor: {
      cedula        : 80032088,
      nombreCompleto: 'JOSE EDWIN MORALES ALFONSO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300120170084900',
    grupo          : 'Terminados'
  },
  {
    numero: 325,
    id    : '30583011',
    deudor: {
      cedula        : 30583011,
      nombreCompleto: 'MARCELA PATRICIA DIAZ PEREIRA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308020170076000',
    grupo          : 'Terminados'
  },
  {
    numero: 326,
    id    : '19352146',
    deudor: {
      cedula        : 19352146,
      nombreCompleto: 'JORGE ELIECER GOMEZ LOPEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303420170147100',
    grupo          : 'Terminados'
  },
  {
    numero: 327,
    id    : '94524378',
    deudor: {
      cedula        : 94524378,
      nombreCompleto: 'JOSE DANIEL ESCOBAR PATIÑO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301220170136900',
    grupo          : 'Terminados'
  },
  {
    numero: 328,
    id    : '52907317',
    deudor: {
      cedula        : 52907317,
      nombreCompleto: 'SANDRA MILENA BARRETO BERMUDEZ',
      tel           : 5787068,
      email         : 'milena125@hotmail.com',
      direccion     : 'CALLE 74 A  SUR No 92 -21 torre 3'
    },
    demanda: {
      vencimientoPagare      : '2017-05-06',
      obligacion             : '5740084189 /5740084216',
      obligacion2            : '160204/377813372389032',
      entregaGarantiasAbogado: '001/11/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '26 Civil Municipal'
        }
      },
      radicado: '2017 - 01293'
    },
    capitalAdeudado: 33615204,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400302620170129300',
    grupo          : 'LiosJuridicos'
  },
  {
    numero: 329,
    id    : '10180062',
    deudor: {
      cedula        : 10180062,
      nombreCompleto: 'REINALDO ADRIAN MELENDEZ  VARON'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308520170159600',
    grupo          : 'Terminados'
  },
  {
    numero: 330,
    id    : '80185084',
    deudor: {
      cedula        : 80185084,
      nombreCompleto: 'NELSON ARBEY CANGREJO SUAREZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307020170121800',
    grupo          : 'Terminados'
  },
  {
    numero: 331,
    id    : '1016043191',
    deudor: {
      cedula        : 1016043191,
      nombreCompleto: 'CHRISTIAN DARIO RUIZ AVELLANEDA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001410375220170130000',
    grupo          : 'Terminados'
  },
  {
    numero: 332,
    id    : '91284725',
    deudor: {
      cedula        : 91284725,
      nombreCompleto: 'MIGUEL ANTONIO SANCHEZ MARROQUIN'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754400100420180009800',
    grupo          : 'Terminados'
  },
  {
    numero: 333,
    id    : '52085839',
    deudor: {
      cedula        : 52085839,
      nombreCompleto: 'AHIDA LUCERO GUEVARA BECERRA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306320170131700',
    grupo          : 'Terminados'
  },
  {
    numero: 334,
    id    : '79853302',
    deudor: {
      cedula        : 79853302,
      nombreCompleto: 'NESTOR JULIO MARTINEZ ORJUELA',
      tel           : 'F 7459324                CEL 3132088678',
      email         : 'nanbravo04@hotmail.com',
      direccion     : 'CALLE  70 A BIS  No 117-16'
    },
    demanda: {
      vencimientoPagare      : '15/01/2020',
      obligacion             : 'AUDIOPRESTAMO',
      entregaGarantiasAbogado: '26/09/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '68 Civil Municipal'
        },
        ejecucion: {
          tipo: '15 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01306',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 15018661,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400306820170130600',
    grupo          : 'Reintegra'
  },
  {
    numero: 335,
    id    : '1030601547',
    deudor: {
      cedula        : 1030601547,
      nombreCompleto: 'CRISTIAN CAMILO GARCIA ESCOBAR'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301120180011800',
    grupo          : 'Terminados'
  },
  {
    numero: 336,
    id    : '79860814',
    deudor: {
      cedula        : 79860814,
      nombreCompleto: 'JOSE ALFREDO CARDOZO RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303020170175600',
    grupo          : 'Terminados'
  },
  {
    numero: 337,
    id    : '79666742',
    deudor: {
      cedula        : 79666742,
      nombreCompleto: 'HECTOR ALFONSO TORRES RIOS',
      tel           : 'F 7651426 CEL 3115030138',
      email         : 'rubypaez71@hotmail.com',
      direccion     : 'TRANSVERSAL 17 No  64 F - 04 CASA 1 BIFAMILIAR MARLY'
    },
    demanda: {
      vencimientoPagare      : '2026-06-22',
      obligacion             : 140085,
      entregaGarantiasAbogado: '2017-11-16',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '6 Civil Municipal'
        },
        ejecucion: {
          tipo: '4 Civil Municipal de Ejecucion'
        }
      },
      radicado: '2017 - 00964'
    },
    capitalAdeudado: 99119191,
    llaveProceso   : '11001400300620170096400',
    grupo          : 'Insolvencia'
  },
  {
    numero: 338,
    id    : '20427976',
    deudor: {
      cedula        : 20427976,
      nombreCompleto: 'BLANCA MELBA MOYANO BELTRAN',
      tel           : 'F 3213718',
      direccion     : 'CARRERA 3 No 9 - 02 /08  CAPARRAPI (CUNDINAMARCA)'
    },
    demanda: {
      vencimientoPagare      : '2020-04-01',
      obligacion             : 7910080245,
      entregaGarantiasAbogado: '2017-09-21',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'CAPARRAPI',
      juzgado                : {
        origen: {
          tipo: '001 PM'
        }
      },
      radicado     : '2017 - 00096',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 42530688,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25148408900120170009600',
    grupo          : 'Reintegra'
  },
  {
    numero: 339,
    id    : '91072102',
    deudor: {
      cedula        : 91072102,
      nombreCompleto: 'LUIS ALFONSO MOJICA ZAMBRANO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305620170119500',
    grupo          : 'Terminados'
  },
  {
    numero: 340,
    id    : '79573945',
    deudor: {
      cedula        : 79573945,
      nombreCompleto: 'WILLIAM CORTES ROJAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306020170101400',
    grupo          : 'Terminados'
  },
  {
    numero: 341,
    id    : '19294251',
    deudor: {
      cedula        : 19294251,
      nombreCompleto: 'MARIO VELEZ PARRA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305720170128900',
    grupo          : 'Terminados'
  },
  {
    numero: 342,
    id    : '91240362',
    deudor: {
      cedula        : 91240362,
      nombreCompleto: 'GABRIEL AUGUSTO CASTILLO CASTELBLANCO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301220170140000',
    grupo          : 'Terminados'
  },
  {
    numero: 343,
    id    : '80803306',
    deudor: {
      cedula        : 80803306,
      nombreCompleto: 'EDUARDO ALFONSO RICO JIMENEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303920170151700',
    grupo          : 'Terminados'
  },
  {
    numero: 344,
    id    : '79505982',
    deudor: {
      cedula        : 79505982,
      nombreCompleto: 'LUIS AUGUSTO SANCHEZ ORTIZ',
      tel           : 'F 8003961              CEL 3174409073',
      email         : 'luissanchez69@live.com',
      direccion     : 'CALLE 168 No 8 G - 61 BLOQUE  5 APARTAMENTO  102'
    },
    demanda: {
      vencimientoPagare      : '9/12/2019       5/03/2020',
      obligacion             : '377815565830854  4513071889404813',
      obligacion2            : '5176409000345363    5306946666855816',
      entregaGarantiasAbogado: '2017-09-29',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '33 Civil Municipal'
        },
        ejecucion: {
          tipo: '2 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01474',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 19977436,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400303320170147400',
    grupo          : 'Reintegra'
  },
  {
    numero: 345,
    id    : '51974282',
    deudor: {
      cedula        : 51974282,
      nombreCompleto: 'SANDRA JEANNETTE PRADA GUTIERREZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304520170147600',
    grupo          : 'Terminados'
  },
  {
    numero: 346,
    id    : '1019101174',
    deudor: {
      cedula        : 1019101174,
      nombreCompleto: 'PAULA ANDREA GOMEZ LOPEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307320170154500',
    grupo          : 'Terminados'
  },
  {
    numero: 347,
    id    : '41888857',
    deudor: {
      cedula        : 41888857,
      nombreCompleto: 'MARIA ELENA ZULUAGA URIBE'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303920170152500',
    grupo          : 'Terminados'
  },
  {
    numero: 348,
    id    : '41688661',
    deudor: {
      cedula        : 41688661,
      nombreCompleto: 'ANA BEATRIZ CORREDOR RIVERA',
      tel           : 'F 5101587               CEL 3106630177',
      email         : 'anabeatrizcorredor@yahoo.es',
      direccion     : 'CARRERA 8 No 190 - 22 Hoy Carrera 31 No. 190-04'
    },
    demanda: {
      vencimientoPagare      : '2/12/2021        3/09/2020',
      obligacion             : 6260082762,
      obligacion2            : 377813367146983,
      entregaGarantiasAbogado: '2017-09-28',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '1 Civil Municipal'
        },
        ejecucion: {
          tipo: '10 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01309',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 76735593,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300120170130900',
    grupo          : 'Reintegra'
  },
  {
    numero: 349,
    id    : '30746589',
    deudor: {
      cedula        : 30746589,
      nombreCompleto: 'LILIANA GARCIA ROSERO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302720170127200',
    grupo          : 'Terminados'
  },
  {
    numero: 350,
    id    : '80111672',
    deudor: {
      cedula        : 80111672,
      nombreCompleto: 'DIEGO FERNEY VERGARA VALDERRAMA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305020170135700',
    grupo          : 'Terminados'
  },
  {
    numero: 351,
    id    : '80800256',
    deudor: {
      cedula        : 80800256,
      nombreCompleto: 'CRISTIAN JOSUE CARDENAS NORIEGA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '1100141037520180002400',
    grupo          : 'Terminados'
  },
  {
    numero: 352,
    id    : '71992491',
    deudor: {
      cedula        : 71992491,
      nombreCompleto: 'MARIO DE JESUS OSSA PULGARIN',
      tel           : 'F 7673180',
      direccion     : 'TRANSVERSAL 2 C BIS No 97 B-05 SUR'
    },
    demanda: {
      vencimientoPagare      : '2019-05-20',
      obligacion             : 4280023383,
      entregaGarantiasAbogado: '2017-09-29',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '76 Civil Municipal'
        },
        ejecucion: {
          tipo: '17 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01016',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 11853652,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400307620170101600',
    grupo          : 'Reintegra'
  },
  {
    numero: 353,
    id    : '19297891',
    deudor: {
      cedula        : 19297891,
      nombreCompleto: 'RICARDO ARIAS GUZMAN'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307320170156300',
    grupo          : 'Terminados'
  },
  {
    numero: 354,
    id    : '80032437',
    deudor: {
      cedula        : 80032437,
      nombreCompleto: 'BERNARDO ANIBAL GIL TORRES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001310304520170035900',
    grupo          : 'Terminados'
  },
  {
    numero: 355,
    id    : '80800763',
    deudor: {
      cedula        : 80800763,
      nombreCompleto: 'NELSON IVAN SEGURA MENDEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301720170152600',
    grupo          : 'Terminados'
  },
  {
    numero: 356,
    id    : '53119460',
    deudor: {
      cedula        : 53119460,
      nombreCompleto: 'SONIA XIMENA RODRIGUEZ SANCHEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302420170170800',
    grupo          : 'Terminados'
  },
  {
    numero: 357,
    id    : '1012330386',
    deudor: {
      cedula        : 1012330386,
      nombreCompleto: 'DIANA SAYURI RODRIGUEZ GARCIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305520170137800',
    grupo          : 'Terminados'
  },
  {
    numero: 358,
    id    : '1116782267',
    deudor: {
      cedula        : 1116782267,
      nombreCompleto: 'JOGLI JOAQUIN OTERO VARGAS',
      tel           : 'CEL 3005941798',
      email         : 'juanotero1989@gmail.com',
      direccion     : 'DIAGONAL 2  No 79 F- 04'
    },
    demanda: {
      vencimientoPagare      : '2019-02-26',
      obligacion             : 3880082626,
      entregaGarantiasAbogado: '2017-10-06',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '78 Civil Municipal'
        },
        ejecucion: {
          tipo: '12 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 00975',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 22130224,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400307820170097500',
    grupo          : 'Reintegra'
  },
  {
    numero: 359,
    id    : '79357895',
    deudor: {
      cedula        : 79357895,
      nombreCompleto: 'JOSE DAVID PEÑA SAAVEDRA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306520170178600',
    grupo          : 'Terminados'
  },
  {
    numero: 360,
    id    : '52327561',
    deudor: {
      cedula        : 52327561,
      nombreCompleto: 'NOHORA DEL PILAR VARGAS BERNAL'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302320170145200',
    grupo          : 'Terminados'
  },
  {
    numero: 361,
    id    : '53064513',
    deudor: {
      cedula        : 53064513,
      nombreCompleto: 'NATALIA CUESTAS MONDRAGON',
      tel           : 'F4782781',
      email         : 'ncuestas@mccain.com.co',
      direccion     : 'CARRERA 68 D No 40-53 SUR TORRE 6 APARTAMENTO 1006'
    },
    demanda: {
      vencimientoPagare      : '2021-03-26',
      obligacion             : 'SO79522009',
      obligacion2            : 5491570044098801,
      entregaGarantiasAbogado: '2017-09-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '17 Civil Municipal'
        },
        ejecucion: {
          tipo: '15 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01336',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 32318533,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400301720170133600',
    grupo          : 'Reintegra'
  },
  {
    numero: 362,
    id    : '52031089',
    deudor: {
      cedula        : 52031089,
      nombreCompleto: 'YANETH HERNANDEZ SUAREZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754400300220180003100',
    grupo          : 'Terminados'
  },
  {
    numero: 363,
    id    : '52645617',
    deudor: {
      cedula        : 52645617,
      nombreCompleto: 'MARIA LILIANA CASTAÑEDA ZAPATA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754400300220170040900',
    grupo          : 'Terminados'
  },
  {
    numero: 364,
    id    : '52102754',
    deudor: {
      cedula        : 52102754,
      nombreCompleto: 'SANDRA PATRICIA SANCHEZ VELASQUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307320170164700',
    grupo          : 'Terminados'
  },
  {
    numero: 365,
    id    : '79861680',
    deudor: {
      cedula        : 79861680,
      nombreCompleto: 'RICHARD CAMILO IRIARTE GARCIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305020180014000',
    grupo          : 'Terminados'
  },
  {
    numero: 366,
    id    : '53094561',
    deudor: {
      cedula        : 53094561,
      nombreCompleto: 'YURI ANDREA GONZALEZ TORRES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300920170136100',
    grupo          : 'Terminados'
  },
  {
    numero: 367,
    id    : '79416270',
    deudor: {
      cedula        : 79416270,
      nombreCompleto: 'ANDRES ANTONIO  AMEZQUITA PAEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307820170123500',
    grupo          : 'Terminados'
  },
  {
    numero: 368,
    id    : '39577914',
    deudor: {
      cedula        : 39577914,
      nombreCompleto: 'CAROLINA MARTINEZ CALDERON'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25307400300120180006600',
    grupo          : 'Terminados'
  },
  {
    numero: 369,
    id    : '900336193',
    deudor: {
      cedula        : 900336193,
      nombreCompleto: 'INVERSION RIVOLI S.A.S.',
      tel           : 'F 3727561',
      direccion     : 'CARRERA 24 G No20-35 SUR'
    },
    demanda: {
      vencimientoPagare      : '2018-10-08',
      obligacion             : 2290098960,
      entregaGarantiasAbogado: '2017-10-17',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '22 Civil Municipal'
        },
        ejecucion: {
          tipo: '20 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017-1208',
      etapaProcesal: 'EJECUCION'
    },
    capitalAdeudado: 34749647,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400302220170120800',
    grupo          : 'Reintegra'
  },
  {
    numero: 370,
    id    : '52840906',
    deudor: {
      cedula        : 52840906,
      nombreCompleto: 'LILIAN ANDREA HERNANDEZ SUAREZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302020170155600',
    grupo          : 'Terminados'
  },
  {
    numero: 371,
    id    : '39765816',
    deudor: {
      cedula        : 39765816,
      nombreCompleto: 'MARTHA ANDREA MORA COLLAZOS',
      tel           : 6236600,
      email         : 'andreato1a@hotmaul.com',
      direccion     : 'CALLE 50 SUR 93 D- 38 APTO 401 TORRE 6'
    },
    demanda: {
      vencimientoPagare      : '2024-03-30',
      obligacion             : 117171,
      obligacion2            : 377813401553319,
      entregaGarantiasAbogado: '2018-01-16',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '24 Civil Municipal'
        }
      },
      radicado: '2018 - 00143'
    },
    capitalAdeudado: 10775194,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400302420180014300',
    grupo          : 'LiosJuridicos'
  },
  {
    numero: 372,
    id    : '51953414',
    deudor: {
      cedula        : 51953414,
      nombreCompleto: 'JANETH RUBIELA GORDILLO PINZON'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754400300220180007000',
    grupo          : 'Terminados'
  },
  {
    numero: 373,
    id    : '79616846',
    deudor: {
      cedula        : 79616846,
      nombreCompleto: 'RODRIGO ALBERTO RUIZ VILLALBA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25599400300120180000500',
    grupo          : 'Terminados'
  },
  {
    numero: 374,
    id    : '80850549',
    deudor: {
      cedula        : 80850549,
      nombreCompleto: 'JHOAN ANTONIO BARAJAS MONTENEGRO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308620180006700',
    grupo          : 'Terminados'
  },
  {
    numero: 375,
    id    : '74845495',
    deudor: {
      cedula        : 74845495,
      nombreCompleto: 'JHON ALFREDO ZORRO MARTINEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304020180012300',
    grupo          : 'Terminados'
  },
  {
    numero: 376,
    id    : '11203111',
    deudor: {
      cedula        : 11203111,
      nombreCompleto: 'ROBERTO RICO RUIZ',
      tel           : 6597446,
      email         : 'roberto.rico.ruiz@gmail.com',
      direccion     : 'CALLE 128 96A - 05 CASA 3 MULTIFAMILIAR ARRAYANES'
    },
    demanda: {
      vencimientoPagare      : '2019-04-29',
      obligacion             : 118010,
      obligacion2            : '377813183474353 // 4513074148699942 / 5491579209500691',
      entregaGarantiasAbogado: '17/01/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '76 Civil Municipal'
        }
      },
      radicado: '2018 - 00052'
    },
    capitalAdeudado: 27308454,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400307620180005200',
    grupo          : 'LiosJuridicos'
  },
  {
    numero: 377,
    id    : '40356325',
    deudor: {
      cedula        : 40356325,
      nombreCompleto: 'GLADIS VELASQUEZ CASTRO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304620180010700',
    grupo          : 'Terminados'
  },
  {
    numero: 378,
    id    : '11346521',
    deudor: {
      cedula        : 11346521,
      nombreCompleto: 'NELSON YESITH MORENO LEON'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301120180018100',
    grupo          : 'Terminados'
  },
  {
    numero: 379,
    id    : '79804965',
    deudor: {
      cedula        : 79804965,
      nombreCompleto: 'JHON ALEXANDER ALARCON GALVIS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308120180011100',
    grupo          : 'Terminados'
  },
  {
    numero: 380,
    id    : '79804965',
    deudor: {
      cedula        : 79804965,
      nombreCompleto: 'JHON ALEXANDER ALARCON GALVIS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308120180011100',
    grupo          : 'Terminados'
  },
  {
    numero: 381,
    id    : '1032396480',
    deudor: {
      cedula        : 1032396480,
      nombreCompleto: 'NIELCEN MARISOL MARIN MELO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304120180007500',
    grupo          : 'Terminados'
  },
  {
    numero: 382,
    id    : '80403235',
    deudor: {
      cedula        : 80403235,
      nombreCompleto: 'CARLOS ALBERTO LANCHEROS BARRAGAN'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25662408900120180000400',
    grupo          : 'Terminados'
  },
  {
    numero: 383,
    id    : '65706810',
    deudor: {
      cedula        : 65706810,
      nombreCompleto: 'NOHORA ESPERANZA BARRERO RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302620180047900',
    grupo          : 'Terminados'
  },
  {
    numero: 384,
    id    : '80026753',
    deudor: {
      cedula        : 80026753,
      nombreCompleto: 'DIEGO JAVIER GALINDO MEJIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305620180011000',
    grupo          : 'Terminados'
  },
  {
    numero: 385,
    id    : '406547',
    deudor: {
      cedula        : 406547,
      nombreCompleto: 'AVELINO SIERRA SIERRA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303520180007400',
    grupo          : 'Terminados'
  },
  {
    numero: 386,
    id    : '1070950842',
    deudor: {
      cedula        : 1070950842,
      nombreCompleto: 'ALEXANDER PRADA PALMAR'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25269400300120170074400',
    grupo          : 'Terminados'
  },
  {
    numero: 387,
    id    : '91263617',
    deudor: {
      cedula        : 91263617,
      nombreCompleto: 'LEONARDO SANABRIA SANABRIA',
      tel           : 'F 4251180           CEL 3118066048',
      email         : 'leo.sanabria@live.com.mx',
      direccion     : 'CARRERA 85  B No  23 B - 69  INTERIOR 7 APARTAMENTO  314'
    },
    demanda: {
      vencimientoPagare      : '2019-05-05',
      obligacion             : 2500085167,
      obligacion2            : 'AUDIOPRESTAMO',
      entregaGarantiasAbogado: '2017-11-09',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '50 Civil Municipal'
        },
        ejecucion: {
          tipo: '14 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01336',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 36331525,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400305020170133600',
    grupo          : 'Reintegra'
  },
  {
    numero: 388,
    id    : '52644132',
    deudor: {
      cedula        : 52644132,
      nombreCompleto: 'XIMENA  ESCOBAR PUCCETI'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301720180011100',
    grupo          : 'Terminados'
  },
  {
    numero: 389,
    id    : '79874218',
    deudor: {
      cedula        : 79874218,
      nombreCompleto: 'MIGUEL ANGEL GRANADOS GUTIERREZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307020180012100',
    grupo          : 'Terminados'
  },
  {
    numero: 390,
    id    : '71603563',
    deudor: {
      cedula        : 71603563,
      nombreCompleto: 'GILBERTO JAIME BETANCOURT',
      tel           : 'F 3138547',
      email         : 'gilbertojaime@hotmail.com',
      direccion     : 'CARRERA 82  No  19 - 20'
    },
    demanda: {
      vencimientoPagare      : '2020-07-21',
      obligacion             : 2500084774,
      obligacion2            : 'AUDIOPRESTAMO',
      entregaGarantiasAbogado: '2017-11-16',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '4 Civil Municipal'
        },
        ejecucion: {
          tipo: '9 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01266',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 50509238,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300420170126600',
    grupo          : 'Reintegra'
  },
  {
    numero: 391,
    id    : '52190973',
    deudor: {
      cedula        : 52190973,
      nombreCompleto: 'YANETH BIBIANA VARGAS CANO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305020180012900',
    grupo          : 'Terminados'
  },
  {
    numero: 392,
    id    : '79712791',
    deudor: {
      cedula        : 79712791,
      nombreCompleto: 'EDGAR JOBANNY MATEUS CASTILLO',
      tel           : 'F 8511988',
      email         : 'giovannymat@yahoo.com',
      direccion     : 'CALLE 3 C No  13 - 07   ZIPAQUIRA'
    },
    demanda: {
      vencimientoPagare      : '2020-08-22',
      obligacion             : 3320087751,
      obligacion2            : 3320088190,
      entregaGarantiasAbogado: '2017-11-09',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'ZIPAQUIRA',
      juzgado                : {
        origen: {
          tipo: '003 Civil Municipal'
        }
      },
      radicado     : '2018 - 00131',
      etapaProcesal: 'NOTIFICACION'
    },
    capitalAdeudado: 38847950,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25899400300220170013100',
    grupo          : 'Reintegra'
  },
  {
    numero: 393,
    id    : '79134529',
    deudor: {
      cedula        : 79134529,
      nombreCompleto: 'MIGUEL ALEJANDRO GARCIA RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303820180014900',
    grupo          : 'Terminados'
  },
  {
    numero: 394,
    id    : '79424813',
    deudor: {
      cedula        : 79424813,
      nombreCompleto: 'OMAR HERNANDO QUIROGA TORRES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305120180029900',
    grupo          : 'Terminados'
  },
  {
    numero: 395,
    id    : '2869326',
    deudor: {
      cedula        : 2869326,
      nombreCompleto: 'JORGE BERMEO ROJAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308420180009000',
    grupo          : 'Terminados'
  },
  {
    numero: 396,
    id    : '80733467',
    deudor: {
      cedula        : 80733467,
      nombreCompleto: 'ORLANDO ENRIQUE NOVOA BARRETO',
      tel           : 'F 7836655           CEL 3118163887',
      email         : 'orlandonovoa9@gmail.com',
      direccion     : 'CARRERA 88 A No  67 - 44'
    },
    demanda: {
      vencimientoPagare      : '2019-06-08',
      obligacion             : 10000090724,
      entregaGarantiasAbogado: '2017-11-15',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '64 Civil Municipal'
        },
        ejecucion: {
          tipo: '16 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01623',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 24000000,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400306420170162300',
    grupo          : 'Reintegra'
  },
  {
    numero: 397,
    id    : '13812570',
    deudor: {
      cedula        : 13812570,
      nombreCompleto: 'JOSE DE JESUS TAPIAS ESTEVEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25473400300120180010600',
    grupo          : 'Terminados'
  },
  {
    numero: 398,
    id    : '52465659',
    deudor: {
      cedula        : 52465659,
      nombreCompleto: 'LILIANA ANDREA ERAZO LOPEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754400300120180006400',
    grupo          : 'Terminados'
  },
  {
    numero: 399,
    id    : '79704579',
    deudor: {
      cedula        : 79704579,
      nombreCompleto: 'GIOVANNI  PERDOMO QUIROGA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303720180013200',
    grupo          : 'Terminados'
  },
  {
    numero: 400,
    id    : '79652256',
    deudor: {
      cedula        : 79652256,
      nombreCompleto: 'OSCAR GUILLERMO LOZANO GONZALEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25307400300220180007500',
    grupo          : 'Terminados'
  },
  {
    numero: 401,
    id    : '52357813',
    deudor: {
      cedula        : 52357813,
      nombreCompleto: 'SANDRA PATRICIA  OJEDA RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302520180023700',
    grupo          : 'Terminados'
  },
  {
    numero: 402,
    id    : '39766624',
    deudor: {
      cedula        : 39766624,
      nombreCompleto: 'BLANCA CECILIA ARDILA HUERTAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306420180021800',
    grupo          : 'Terminados'
  },
  {
    numero: 403,
    id    : '52361215',
    deudor: {
      cedula        : 52361215,
      nombreCompleto: 'CLAUDIA YANETH VALENCIA AYA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304920180019100',
    grupo          : 'Terminados'
  },
  {
    numero: 404,
    id    : '1013586083',
    deudor: {
      cedula        : 1013586083,
      nombreCompleto: 'CESAR AUGUSTO PINEDA RIOS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '257544189003201800177',
    grupo          : 'Terminados'
  },
  {
    numero: 405,
    id    : '79396995',
    deudor: {
      cedula        : 79396995,
      nombreCompleto: 'ARTURO LINCE GOMEZ',
      tel           : 'F 4244358                CEL 31088445603',
      email         : 'arthurlingo64@hotmail.com',
      direccion     : 'CALLE 12 A No 71 B - 60'
    },
    demanda: {
      vencimientoPagare      : '27/0/2021',
      obligacion             : 87823,
      entregaGarantiasAbogado: '15/02/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '21 Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-021-civil-municipal-de-bogota'
        },
        ejecucion: {
          tipo: '13 Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-13-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      radicado     : '2018 - 00236',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 22592583,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001400302120180023600',
    grupo          : 'Bancolombia'
  },
  {
    numero: 406,
    id    : '8510459',
    deudor: {
      cedula        : 8510459,
      nombreCompleto: 'SANTIAGO JAVIER SARABIA JIMENEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300220180020500',
    grupo          : 'Terminados'
  },
  {
    numero: 407,
    id    : '79328264',
    deudor: {
      cedula        : 79328264,
      nombreCompleto: 'NESTOR ALBERTO CRISTANCHO LOPEZ',
      tel           : 'F 5266894',
      email         : 'nescri64@hotmail.com',
      direccion     : 'CARRERA 11 No  144 - 22 APARTAMENTO 301'
    },
    demanda: {
      vencimientoPagare      : '2024-01-26',
      obligacion             : 3550083774,
      obligacion2            : '4513082972339 / 5303714867753385',
      entregaGarantiasAbogado: '2017-11-16',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '78 Civil Municipal'
        },
        ejecucion: {
          tipo: '16 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01164',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 31100999,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400307820170116400',
    grupo          : 'Reintegra'
  },
  {
    numero: 408,
    id    : '80792987',
    deudor: {
      cedula        : 80792987,
      nombreCompleto: 'JHON ALEXANDER BEJARANO FONSECA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308120180026400',
    grupo          : 'Terminados'
  },
  {
    numero: 409,
    id    : '900545720',
    deudor: {
      cedula        : 900545720,
      nombreCompleto: 'CREAS SOLUCIONES S.A.S',
      tel           : 'F 8626344                  CEL 3107982028',
      email         : 'andibarracosta@gmail.com',
      direccion     : 'CARRERA 50 1# 47 - 50 INT 1 APTO 101'
    },
    demanda: {
      vencimientoPagare      : '2018-06-20',
      obligacion             : 4550087219,
      entregaGarantiasAbogado: '2018-02-15',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '56 Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-056-civil-municipal-de-bogota'
        },
        ejecucion: {
          tipo: '7 Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-07-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      radicado     : '2018 - 00221',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 11949471,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400305620180022100',
    grupo          : 'Bancolombia'
  },
  {
    numero: 410,
    id    : '52304124',
    deudor: {
      cedula        : 52304124,
      nombreCompleto: 'JENNY LILIANA MONTOYA VILLAMIL'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303520180037000',
    grupo          : 'Terminados'
  },
  {
    numero: 411,
    id    : '1032362698',
    deudor: {
      cedula        : 1032362698,
      nombreCompleto: 'NATALI VASQUEZ RUBIO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900220180036500',
    grupo          : 'Terminados'
  },
  {
    numero: 412,
    id    : '80896755',
    deudor: {
      cedula        : 80896755,
      nombreCompleto: 'FABIO NELSON PEREZ CRISTIANO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900220180036400',
    grupo          : 'Terminados'
  },
  {
    numero: 413,
    id    : '1018430139',
    deudor: {
      cedula        : 1018430139,
      nombreCompleto: 'LUISA FERNANDA SALAZAR  PATARROYO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900220180036300',
    grupo          : 'Terminados'
  },
  {
    numero: 414,
    id    : '51712277',
    deudor: {
      cedula        : 51712277,
      nombreCompleto: 'ELDA YANET CORTES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304420180056600',
    grupo          : 'Terminados'
  },
  {
    numero: 415,
    id    : '1024479982',
    deudor: {
      cedula        : 1024479982,
      nombreCompleto: 'INGRID CATHERINE TAPIAS RICO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304320180047400',
    grupo          : 'Terminados'
  },
  {
    numero: 416,
    id    : '79512506',
    deudor: {
      cedula        : 79512506,
      nombreCompleto: 'JOSE ANTONIO MONTEALEGRE HERNANDEZ'
    },
    demanda: {
      radicado: '2017 - 01477'
    },
    capitalAdeudado: 0,
    grupo          : 'Terminados'
  },
  {
    numero: 417,
    id    : '19275068',
    deudor: {
      cedula        : 19275068,
      nombreCompleto: 'OSCAR HUMBERTO GOMEZ CHUCHIN',
      tel           : 'F 2511959          CEL 3105638608',
      email         : 'oscarmultibog@hotmail.com',
      direccion     : 'CALLE 71 A No 70 B-11'
    },
    demanda: {
      vencimientoPagare      : '2/09/2021 / 3/01/2021',
      obligacion             : 5740084511,
      obligacion2            : 6390082501,
      entregaGarantiasAbogado: '19/11/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '71 Civil Municipal'
        },
        ejecucion: {
          tipo: '7 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01250',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 40942872,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400307120170125000',
    grupo          : 'Reintegra'
  },
  {
    numero: 418,
    id    : '35521020',
    deudor: {
      cedula        : 35521020,
      nombreCompleto: 'AURA LETICIA GAMEZ ROJAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25269400300120180024600',
    grupo          : 'Terminados'
  },
  {
    numero: 419,
    id    : '73133278',
    deudor: {
      cedula        : 73133278,
      nombreCompleto: 'ALVARO HERNAN RUIZ HERNANDEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25175410300120180023700',
    grupo          : 'Terminados'
  },
  {
    numero: 420,
    id    : '52773230',
    deudor: {
      cedula        : 52773230,
      nombreCompleto: 'DIANA PATRICIA BARRETO OSMA',
      tel           : 'F 3085025             CEL 3107706773',
      email         : 'N / A',
      direccion     : 'CALLE 42 No 78 H - 38 SUR'
    },
    demanda: {
      vencimientoPagare      : '08/07/2020',
      obligacion             : '377813451010780 / 4513070410107739',
      obligacion2            : 5303710165958750,
      entregaGarantiasAbogado: '01/12/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '63 Civil Municipal/19 Civil Municipal de Ejecucion'
        },
        ejecucion: {
          tipo: 'SINGULAR'
        }
      },
      radicado     : 1.100140030632017e22,
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 10382732,
    tipoProceso    : 'HMM PISO 1',
    llaveProceso   : '11001400306320170129000',
    grupo          : 'Reintegra'
  },
  {
    numero: 421,
    id    : '79837700',
    deudor: {
      cedula        : 79837700,
      nombreCompleto: 'ALEXANDER MUÑOZ ORTIZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307520180061700',
    grupo          : 'Terminados'
  },
  {
    numero: 422,
    id    : '41722029',
    deudor: {
      cedula        : 41722029,
      nombreCompleto: 'LUZ YOLANDA MUÑOZ MURCIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001410307520180060200',
    grupo          : 'Terminados'
  },
  {
    numero: 423,
    id    : '80059977',
    deudor: {
      cedula        : 80059977,
      nombreCompleto: 'ANDRES PEDRAZA GARCIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301920180044300',
    grupo          : 'Terminados'
  },
  {
    numero: 424,
    id    : '79742224',
    deudor: {
      cedula        : 79742224,
      nombreCompleto: 'JAIME LEONARDO SOSA ROODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '110014003015201800459',
    grupo          : 'Terminados'
  },
  {
    numero: 425,
    id    : '52498444',
    deudor: {
      cedula        : 52498444,
      nombreCompleto: 'SANDRA RAQUEL LOPEZ DE MESA OSES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307520180067400',
    grupo          : 'Terminados'
  },
  {
    numero: 426,
    id    : '19395095',
    deudor: {
      cedula        : 19395095,
      nombreCompleto: 'FELIX  HERNANDO MONTENEGRO GARCIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306820180047600',
    grupo          : 'Terminados'
  },
  {
    numero: 427,
    id    : '1069738339',
    deudor: {
      cedula        : 1069738339,
      nombreCompleto: 'JUAN CAMILO CHINGATE PENAGOS',
      tel           : 'CEL 313389449',
      direccion     : 'VEREDA LA 22 KILOMETRO 30 (CAJICA) // VEREDA SUBIA NORTE, PARTE BAJA, FINCA EL RINCON LOTE 2 (GRANADA- CUND): VEREDA SUBIA NORTE PARTE BAJA FINCA EL RINCON LOTE 2 (GRANADA - CUND)'
    },
    demanda: {
      vencimientoPagare      : '2021-01-16',
      obligacion             : 12730779,
      entregaGarantiasAbogado: '2018-01-19',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'CAJICA',
      juzgado                : {
        origen: {
          tipo: '2 PM'
        }
      },
      radicado     : '2018 - 00048',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 21049112,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '25126408900220180004800',
    grupo          : 'Reintegra'
  },
  {
    numero: 428,
    id    : '1019016622',
    deudor: {
      cedula        : 1019016622,
      nombreCompleto: 'SERGIO LIBARDO ESPINOSA GOMEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302420180052000',
    grupo          : 'Terminados'
  },
  {
    numero: 429,
    id    : '10260455',
    deudor: {
      cedula        : 10260455,
      nombreCompleto: 'ARCANGEL HERNANDEZ RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306520180061200',
    grupo          : 'Terminados'
  },
  {
    numero: 430,
    id    : '1024517216',
    deudor: {
      cedula        : 1024517216,
      nombreCompleto: 'JHONATAN ALEJANDRO  CUELLAR ARIAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001410300120180040400',
    grupo          : 'Terminados'
  },
  {
    numero: 431,
    id    : '1014181498',
    deudor: {
      cedula        : 1014181498,
      nombreCompleto: 'DUVY MARIELA RODRIGUEZ ROCHA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302220180060400',
    grupo          : 'Terminados'
  },
  {
    numero: 432,
    id    : '52757086',
    deudor: {
      cedula        : 52757086,
      nombreCompleto: 'LILIA YANIRA DIAZ CARO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308120180058300',
    grupo          : 'Terminados'
  },
  {
    numero: 433,
    id    : '3116420',
    deudor: {
      cedula        : 3116420,
      nombreCompleto: 'JORGE ALBERTO BELTRAN PAEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25899400300120180022200',
    grupo          : 'Terminados'
  },
  {
    numero: 434,
    id    : '80429531',
    deudor: {
      cedula        : 80429531,
      nombreCompleto: 'FRANCISCO JAVIER GIL FLOREZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306820180099900',
    grupo          : 'Terminados'
  },
  {
    numero: 435,
    id    : '1012341563',
    deudor: {
      cedula        : 1012341563,
      nombreCompleto: 'MARIBEL REVELO QUIROGA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301620180057300',
    grupo          : 'Terminados'
  },
  {
    numero: 436,
    id    : '79145374',
    deudor: {
      cedula        : 79145374,
      nombreCompleto: 'JUAN CAMILO BAQUERO BUTTNER'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306320180075600',
    grupo          : 'Terminados'
  },
  {
    numero: 437,
    id    : '80162319',
    deudor: {
      cedula        : 80162319,
      nombreCompleto: 'JAVIER ANTONIO ZIPA SALAMANCA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400371520180021200',
    grupo          : 'Terminados'
  },
  {
    numero: 438,
    id    : '52132383',
    deudor: {
      cedula        : 52132383,
      nombreCompleto: 'LUZ DARY VELANDIA GARCIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418900620180021000',
    grupo          : 'Terminados'
  },
  {
    numero: 439,
    id    : '79812352',
    deudor: {
      cedula        : 79812352,
      nombreCompleto: 'MIGUEL ESNEYDER DEVIA CEPEDA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25899400300320180055500',
    grupo          : 'Terminados'
  },
  {
    numero: 440,
    id    : '30387764',
    deudor: {
      cedula        : 30387764,
      nombreCompleto: 'BLANCA ESTHER QUIROGA GIRALDO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001408900820180022300',
    grupo          : 'Terminados'
  },
  {
    numero: 441,
    id    : '52064928',
    deudor: {
      cedula        : 52064928,
      nombreCompleto: 'YANETH MILLAN PRIETO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25899408900120180060900',
    grupo          : 'Terminados'
  },
  {
    numero: 442,
    id    : '80183322',
    deudor: {
      cedula        : 80183322,
      nombreCompleto: 'JULIAN FELIPE ECHEVERRY FORERO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307820180062300',
    grupo          : 'Terminados'
  },
  {
    numero: 443,
    id    : '80424051',
    deudor: {
      cedula        : 80424051,
      nombreCompleto: 'DIEGO FERNANDO BENITEZ ALVARADO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301020180078400',
    grupo          : 'Terminados'
  },
  {
    numero: 444,
    id    : '79562532',
    deudor: {
      cedula        : 79562532,
      nombreCompleto: 'PABLO CESAR SOACHA MORALES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304020180089600',
    grupo          : 'Terminados'
  },
  {
    numero: 445,
    id    : '79978846',
    deudor: {
      cedula        : 79978846,
      nombreCompleto: 'JUAN CARLOS GARZON BEJARANO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754400300120180057200',
    grupo          : 'Terminados'
  },
  {
    numero: 446,
    id    : '79725365',
    deudor: {
      cedula        : 79725365,
      nombreCompleto: 'RICARDO CUSPOCA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25899418900120180057300',
    grupo          : 'Terminados'
  },
  {
    numero: 447,
    id    : '79698506',
    deudor: {
      cedula        : 79698506,
      nombreCompleto: 'CARLOS ANTONIO PACHECO TORRES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300520180071100',
    grupo          : 'Terminados'
  },
  {
    numero: 448,
    id    : '79342337',
    deudor: {
      cedula        : 79342337,
      nombreCompleto: 'LUIS ALFREDO NIÑO GARCIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301220180081000',
    grupo          : 'Terminados'
  },
  {
    numero: 449,
    id    : '4271429',
    deudor: {
      cedula        : 4271429,
      nombreCompleto: 'TULIO ERNESTO TELLEZ ROJAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301720180070500',
    grupo          : 'Terminados'
  },
  {
    numero: 450,
    id    : '53133179',
    deudor: {
      cedula        : 53133179,
      nombreCompleto: 'KELLY YOHANNA MURCIA DUCON'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307820180064700',
    grupo          : 'Terminados'
  },
  {
    numero: 451,
    id    : '1032389993',
    deudor: {
      cedula        : 1032389993,
      nombreCompleto: 'JOSE JEISSON GALINDO CARRILLO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305620180071100',
    grupo          : 'Terminados'
  },
  {
    numero: 452,
    id    : '25126734',
    deudor: {
      cedula        : 25126734,
      nombreCompleto: 'MARIA MARIN DE OROZCO',
      tel           : 'F 4412100           CEL 3124885346',
      email         : 'mauriciosamu1128@gmail.com',
      direccion     : 'CARRERA 103 A  No 77D-22 MOLINOS- BOGOTA'
    },
    demanda: {
      vencimientoPagare      : '07/03/2020',
      obligacion             : 1740087269,
      entregaGarantiasAbogado: '29/01/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '59 Civil Municipal'
        },
        ejecucion: {
          tipo: '7 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2018 - 00090',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 22244760,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400305920180009000',
    grupo          : 'Reintegra'
  },
  {
    numero: 453,
    id    : '79892208',
    deudor: {
      cedula        : 79892208,
      nombreCompleto: 'RICARDO RUEDA MELO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25286400300120180084100',
    grupo          : 'Terminados'
  },
  {
    numero: 454,
    id    : '80089235',
    deudor: {
      cedula        : 80089235,
      nombreCompleto: 'NICOLAS ERNESTO COCOMA ARCINIEGAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400308420180067300',
    grupo          : 'Terminados'
  },
  {
    numero: 455,
    id    : '52434815',
    deudor: {
      cedula        : 52434815,
      nombreCompleto: 'YENNY MARCELA GOMEZ OLARTE'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303820180083500',
    grupo          : 'Terminados'
  },
  {
    numero: 456,
    id    : '26407097',
    deudor: {
      cedula        : 26407097,
      nombreCompleto: 'ANA LUCIA YAÑEZ VARGAS (FALLECIDA)'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001410375120180112100',
    grupo          : 'Terminados'
  },
  {
    numero: 457,
    id    : '900237555',
    deudor: {
      cedula        : 900237555,
      nombreCompleto: 'SOLINCON LIMITADA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307920180087200',
    grupo          : 'Terminados'
  },
  {
    numero: 458,
    id    : '52271112',
    deudor: {
      cedula        : 52271112,
      nombreCompleto: 'SANDRA PATRICIA BELTRAN OVIEDO',
      tel           : 'F 6607900',
      email         : 'saraja.7@hotmail.com',
      direccion     : 'CARRERA 101 No 70 A-14 INTERIOR 1 APARTAMENTO 408'
    },
    demanda: {
      vencimientoPagare      : '15/0/2020',
      obligacion             : 'AUDIOPRESTAMO',
      entregaGarantiasAbogado: '29/01/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '37 Civil Municipal'
        },
        ejecucion: {
          tipo: '8 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2018 - 00111',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 17502203,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400303720180011100',
    grupo          : 'Reintegra'
  },
  {
    numero: 459,
    id    : '79857627',
    deudor: {
      cedula        : 79857627,
      nombreCompleto: 'CESAR ARMANDO VANEGAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305320180094500',
    grupo          : 'Terminados'
  },
  {
    numero: 460,
    id    : '79424825',
    deudor: {
      cedula        : 79424825,
      nombreCompleto: 'JORGE ABDOLONIO GUERRERO HERNANDEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306620190040900',
    grupo          : 'Terminados'
  },
  {
    numero: 461,
    id    : '93288875',
    deudor: {
      cedula        : 93288875,
      nombreCompleto: 'JOSE ANTONIO FLOREZ OVIEDO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303220180095900',
    grupo          : 'Terminados'
  },
  {
    numero: 462,
    id    : '80755973',
    deudor: {
      cedula        : 80755973,
      nombreCompleto: 'YAMID GELVES CACERES'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900120180070000',
    grupo          : 'Terminados'
  },
  {
    numero: 463,
    id    : '52883958',
    deudor: {
      cedula        : 52883958,
      nombreCompleto: 'LEIDY YANETH VIDAL RODRIGUEZ',
      tel           : 'F 7114516',
      email         : 'leidyyaneth.lyv@gmail.com',
      direccion     : 'DIAGONAL 2 No 21 B-20'
    },
    demanda: {
      vencimientoPagare      : '4/02/2021 // 16/02/2021',
      obligacion             : 'AMERICAN 0377814037749057',
      obligacion2            : 'VISA 4513083943843365 // MASTER 5303729958258417',
      entregaGarantiasAbogado: '2018-07-05',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '14 Pequeñas Causas y Competencias Multiples',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-014-de-pequenas-causas-y-competencia-multiple-de-bogota'
        }
      },
      radicado     : '2019 - 00656',
      etapaProcesal: 'CONTESTACION DEMANDA'
    },
    capitalAdeudado: 24501535,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001418901420190065600',
    grupo          : 'Bancolombia'
  },
  {
    numero: 464,
    id    : '51944991',
    deudor: {
      cedula        : 51944991,
      nombreCompleto: 'RICARDO ARMANDO CELIS ANGEL'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900220180066400',
    grupo          : 'Terminados'
  },
  {
    numero: 465,
    id    : '79789409',
    deudor: {
      cedula        : 79789409,
      nombreCompleto: 'GIOVANNY DURAN ANTONIO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307720180085400',
    grupo          : 'Terminados'
  },
  {
    numero: 466,
    id    : '53160094',
    deudor: {
      cedula        : 53160094,
      nombreCompleto: 'DARLEY JULIED PAEZ HIGUERA',
      tel           : 'F 14933266               CEL 3115754578',
      email         : 'djpaez5@hotmail.com',
      direccion     : 'CALLE 130 No 126-96 INTERIOR 16 APARTAMENTO 302'
    },
    demanda: {
      vencimientoPagare      : '3/05/2020 // 17/04/2020',
      obligacion             : '37781415851035/',
      obligacion2            : '4099830008406922 / 5303710339142355',
      entregaGarantiasAbogado: '29/01/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '52 Civil Municipal'
        },
        ejecucion: {
          tipo: '17 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2018 - 00117',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 14270897,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400305220180011700',
    grupo          : 'Reintegra'
  },
  {
    numero: 467,
    id    : '79938802',
    deudor: {
      cedula        : 79938802,
      nombreCompleto: 'MANUEL SANTIAGO CORREAL ZUÑIGA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301720180083200',
    grupo          : 'Terminados'
  },
  {
    numero: 468,
    id    : '79719969',
    deudor: {
      cedula        : 79719969,
      nombreCompleto: 'CARLOS EDUARDO NARANJO PIÑEROS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001408900420180038400',
    grupo          : 'Terminados'
  },
  {
    numero: 469,
    id    : '46667409',
    deudor: {
      cedula        : 46667409,
      nombreCompleto: 'LUZ MYRIAM VALDERRAMA TUTA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307020180092200',
    grupo          : 'Terminados'
  },
  {
    numero: 470,
    id    : '52711938',
    deudor: {
      cedula        : 52711938,
      nombreCompleto: 'ELIANA JANNETH LOZANO ARTURO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900320180084100',
    grupo          : 'Terminados'
  },
  {
    numero: 471,
    id    : '80742720',
    deudor: {
      cedula        : 80742720,
      nombreCompleto: 'ADRIANA MIREYA AGUILAR'
    },
    capitalAdeudado: 0,
    llaveProceso   : '1100140030152018007100',
    grupo          : 'Terminados'
  },
  {
    numero: 472,
    id    : '91250936',
    deudor: {
      cedula        : 91250936,
      nombreCompleto: 'SERGIO ESPINEL CORREAL'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418900920180038900',
    grupo          : 'Terminados'
  },
  {
    numero: 473,
    id    : '52725153',
    deudor: {
      cedula        : 52725153,
      nombreCompleto: 'SANDRA MILENA VEGA AVILA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900320180085500',
    grupo          : 'Terminados'
  },
  {
    numero: 474,
    id    : '52788376',
    deudor: {
      cedula        : 52788376,
      nombreCompleto: 'NADIA KATERINE MORENO CAMACHO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418903220180127100',
    grupo          : 'Terminados'
  },
  {
    numero: 475,
    id    : '4281808',
    deudor: {
      cedula        : 4281808,
      nombreCompleto: 'JOSE LIBRANDO CANDELA MUNEVAR',
      tel           : 'F 7113967',
      email         : 'eedibrando600@hotmail.com',
      direccion     : 'CALLE 1 A No 13-30  SOACHA'
    },
    demanda: {
      vencimientoPagare      : '03/08//2019',
      obligacion             : 1000090987,
      entregaGarantiasAbogado: '15/02/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'SOACHA',
      juzgado                : {
        origen: {
          tipo: '2 Civil Municipal'
        }
      },
      radicado     : '2018 - 00113',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 39146947,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25754408900220180011300',
    grupo          : 'Reintegra'
  },
  {
    numero: 476,
    id    : '1081395456',
    deudor: {
      cedula        : 1081395456,
      nombreCompleto: 'ARNULFO PASTES DAZA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418901220180064200',
    grupo          : 'Terminados'
  },
  {
    numero: 477,
    id    : '79568543',
    deudor: {
      cedula        : 79568543,
      nombreCompleto: 'ADOLFO  LEON DAZA FERNANDEZ',
      tel           : 'F 7038787',
      email         : 'adolfo.daza@gmail.com',
      direccion     : 'CALLE 60 No 38-26 APTO 301'
    },
    demanda: {
      vencimientoPagare      : '2020-08-15',
      obligacion             : 'AUDIOPRESTAMO',
      entregaGarantiasAbogado: '2018-04-21',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '4 Civil Municipal'
        },
        ejecucion: {
          tipo: '7 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2018 - 00475',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 14534881,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300420180047500',
    grupo          : 'Reintegra'
  },
  {
    numero: 478,
    id    : '3199064',
    deudor: {
      cedula        : 3199064,
      nombreCompleto: 'FABIO HERNANDO PASTOR PASTOR'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25799418900120180033500',
    grupo          : 'Terminados'
  },
  {
    numero: 479,
    id    : '39809183',
    deudor: {
      cedula        : 39809183,
      nombreCompleto: 'TANIA CONSUELO BOTIA CORREA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25785418900120180017100',
    grupo          : 'Terminados'
  },
  {
    numero: 480,
    id    : '39575032',
    deudor: {
      cedula        : 39575032,
      nombreCompleto: 'ADRIANA VANEGAS PEÑA',
      tel           : 'CEL 3152573448',
      email         : 'adriana.0806@hotmail.com',
      direccion     : 'CARRERA 14 No 22-10  APARTAMENTO  202 GIRARDOT'
    },
    demanda: {
      vencimientoPagare      : '15/04/2021 // 6/04/2021',
      obligacion             : 'AUDIOPRESTAMO',
      obligacion2            : 5306960687119070,
      entregaGarantiasAbogado: '23/08/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'GIRARDOT',
      juzgado                : {
        origen: {
          tipo: '3 Civil Municipal'
        }
      },
      radicado     : '2021 - 00539',
      etapaProcesal: 'EJECUCION'
    },
    capitalAdeudado: 17217066,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25307400300320210053900',
    grupo          : 'Reintegra'
  },
  {
    numero: 481,
    id    : '80019013',
    deudor: {
      cedula        : 80019013,
      nombreCompleto: 'WILLINTONG MARIO  YARURO PEÑARANDA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001410375120190027600',
    grupo          : 'Terminados'
  },
  {
    numero: 482,
    id    : '52380535',
    deudor: {
      cedula        : 52380535,
      nombreCompleto: 'CLAUDIA JANETH CORTES ROSAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307120180093600',
    grupo          : 'Terminados'
  },
  {
    numero: 483,
    id    : '19459237',
    deudor: {
      cedula        : 19459237,
      nombreCompleto: 'WILSON RICARDO ESCOBAR ESCOBAR'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418903220180137000',
    grupo          : 'Terminados'
  },
  {
    numero: 484,
    id    : '30339083',
    deudor: {
      cedula        : 30339083,
      nombreCompleto: 'JENNY  ANDREA AVILA GARZON'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900320190027000',
    grupo          : 'Terminados'
  },
  {
    numero: 485,
    id    : '52115085',
    deudor: {
      cedula        : 52115085,
      nombreCompleto: 'DIANA MARGARITA BUSTOS BALLEN'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418900820180076100',
    grupo          : 'Terminados'
  },
  {
    numero: 486,
    id    : '40776578',
    deudor: {
      cedula        : 40776578,
      nombreCompleto: 'SANDRA PATRICIA LONDOÑO MURCIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418900520180021000',
    grupo          : 'Terminados'
  },
  {
    numero: 487,
    id    : '80473211',
    deudor: {
      cedula        : 80473211,
      nombreCompleto: 'GABRIEL MENDOZA MORINELLY'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400301420180078900',
    grupo          : 'Terminados'
  },
  {
    numero: 488,
    id    : '52837807',
    deudor: {
      cedula        : 52837807,
      nombreCompleto: 'SANDRA MILENA MORENO CAMPUZANO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418901020180083400',
    grupo          : 'Terminados'
  },
  {
    numero: 489,
    id    : '80257279',
    deudor: {
      cedula        : 80257279,
      nombreCompleto: 'ORLANDO SILVA CALDERON'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900320180100800',
    grupo          : 'Terminados'
  },
  {
    numero: 490,
    id    : '80052004',
    deudor: {
      cedula        : 80052004,
      nombreCompleto: 'DIEGO ARMANDO MATEUS ESPITIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900120180098800',
    grupo          : 'Terminados'
  },
  {
    numero: 491,
    id    : '51987570',
    deudor: {
      cedula        : 51987570,
      nombreCompleto: 'SANDRA PATRICIA PACHECO RAMIREZ',
      tel           : 'F 8121692',
      email         : 'sandrabogota2007@yahoo.com',
      direccion     : 'CALLE 163 B No 50-80  INTERIOR 10 APT 231 CONJUNTO LA ESTANCIA III'
    },
    demanda: {
      vencimientoPagare      : '15/05/2021 // 5/07/2021 // 5/07/2021',
      obligacion             : 'AUDIOPRESTAMO',
      obligacion2            : '0377816345049476 // 4513070259455355 // 5303720114305077',
      entregaGarantiasAbogado: '3/09/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '8 Pequeñas Causas y Competencias Multiples',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-08-de-pequenas-causas-laborales-de-bogota'
        },
        ejecucion: {
          tipo: '5 Civil Municipal de Ejecucion',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-05-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      radicado     : '2018 - 00785',
      etapaProcesal: 'EMBARGO DE REMANENTES JUZGADO 27 PROCESO 2019 - 00251'
    },
    capitalAdeudado: 18100699,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001418900820180078500',
    grupo          : 'Bancolombia'
  },
  {
    numero: 492,
    id    : '22444794',
    deudor: {
      cedula        : 22444794,
      nombreCompleto: 'MARIBEL DEL ROSARIO RIVERA JIMENEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25736408900120180013500',
    grupo          : 'Terminados'
  },
  {
    numero: 493,
    id    : '53103504',
    deudor: {
      cedula        : 53103504,
      nombreCompleto: 'KELLY YULIANA QUINTERO FIERRO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001410375120180181700',
    grupo          : 'Terminados'
  },
  {
    numero: 494,
    id    : '1022332681',
    deudor: {
      cedula        : 1022332681,
      nombreCompleto: 'LUISA ENELLY GUGU VITOPIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900320180102200',
    grupo          : 'Terminados'
  },
  {
    numero: 495,
    id    : '17099495',
    deudor: {
      cedula        : 17099495,
      nombreCompleto: 'PABLO ELIAS MENDOZA MURILLO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300320180123600',
    grupo          : 'Terminados'
  },
  {
    numero: 496,
    id    : '13222728',
    deudor: {
      cedula        : 13222728,
      nombreCompleto: 'MODESTO PINEDA PEREZ',
      tel           : 'F 8852490',
      email         : 'mopadinco@yahoo.com',
      direccion     : 'CARRERA 6 No 6-59'
    },
    demanda: {
      vencimientoPagare      : '14/09/2021 // 07/05/2021',
      obligacion             : 'AUDIOPRESTAMO',
      obligacion2            : 5491570347356810,
      entregaGarantiasAbogado: '18/09/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'CHIA',
      juzgado                : {
        origen: {
          tipo: '3 Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-003-civil-municipal-de-chia'
        }
      },
      radicado     : '2018 - 00602',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 27373832,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25175408900320180060200',
    grupo          : 'Bancolombia'
  },
  {
    numero: 497,
    id    : '11339859',
    deudor: {
      cedula        : 11339859,
      nombreCompleto: 'ROQUE ANTONIO SANCHEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25899410300120180043500',
    grupo          : 'Terminados'
  },
  {
    numero: 498,
    id    : '80546020',
    deudor: {
      cedula        : 80546020,
      nombreCompleto: 'JOSE ALEXANDER BECERRA BARRERA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25899400300320180042900',
    grupo          : 'Terminados'
  },
  {
    numero: 499,
    id    : '3208569',
    deudor: {
      cedula        : 3208569,
      nombreCompleto: 'FLORESMIRO APONTE ACOSTA',
      tel           : 'F 3208569',
      email         : 'dcentro@pcpplasticos.com',
      direccion     : 'DIAGONAL 77B No 119 A-74 APTO 504 INT6'
    },
    demanda: {
      vencimientoPagare      : '31/11/2024',
      obligacion             : '20990123680  7/  377813468472239',
      obligacion2            : '4513079359765043 // 53037220341399596',
      entregaGarantiasAbogado: '08/10/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '13 Pequeñas Causas y Competencias Multiples',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-13-de-pequenas-causas-y-competencias-multiples-de-bogota'
        }
      },
      radicado     : '2019 - 00708',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 24807317,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '11001418901320190070800',
    grupo          : 'Bancolombia'
  },
  {
    numero: 500,
    id    : '900566964-9',
    deudor: {
      cedula        : '900566964-9',
      nombreCompleto: 'SMARTITECH S.A.S',
      tel           : 'F 3849696',
      direccion     : 'CARRERA 13 No 73-33'
    },
    demanda: {
      vencimientoPagare      : '2020-05-27',
      obligacion             : 68928057402,
      obligacion2            : 'AUDIOPRESTAMO',
      entregaGarantiasAbogado: '2018-04-16',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '6 Civil Municipal'
        },
        ejecucion: {
          tipo: '17 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2018 - 00454',
      etapaProcesal: 'EJECUCION'
    },
    capitalAdeudado: 15086199,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300620180045400',
    grupo          : 'Reintegra'
  },
  {
    numero: 501,
    id    : '830105220',
    deudor: {
      cedula        : 830105220,
      nombreCompleto: 'ASOCIACION AGROPECUARIA UCEBUL'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305520180131600',
    grupo          : 'Terminados'
  },
  {
    numero: 502,
    id    : '1023861016',
    deudor: {
      cedula        : 1023861016,
      nombreCompleto: 'ANGELICA NATHALY ROZO FRANCO',
      tel           : 'F 6594339',
      email         : 'Anrf1985@hotmail.com',
      direccion     : 'TRANSVERSAL 70G SUR-68-52 TORRE 18 APARTAMENTO 1401'
    },
    demanda: {
      vencimientoPagare      : '05/01/2021',
      obligacion             : 4594260107010410,
      entregaGarantiasAbogado: '12/10/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '16 Pequeñas Causas y Competencias Multiples'
        },
        ejecucion: {
          tipo: '2 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2019 - 01085',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 10930100,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001418901620190108500',
    grupo          : 'Reintegra'
  },
  {
    numero: 503,
    id    : '3096755',
    deudor: {
      cedula        : 3096755,
      nombreCompleto: 'JUAN CARLOS LEON MONTENEGRO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25436408900120180006300',
    grupo          : 'Terminados'
  },
  {
    numero: 504,
    id    : '52432037',
    deudor: {
      cedula        : 52432037,
      nombreCompleto: 'ANA DEL PILAR MENDEZ AMAYA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25740410300120180037000',
    grupo          : 'Terminados'
  },
  {
    numero: 505,
    id    : '80156570',
    deudor: {
      cedula        : 80156570,
      nombreCompleto: 'WILLIAM  GIOVANNY GARZON LOPEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418902520180246200',
    grupo          : 'Terminados'
  },
  {
    numero: 506,
    id    : '1023891419',
    deudor: {
      cedula        : 1023891419,
      nombreCompleto: 'EDWIN CAMILO SARMIENTO GOMEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418903120180138000',
    grupo          : 'Terminados'
  },
  {
    numero: 507,
    id    : '80468168',
    deudor: {
      cedula        : 80468168,
      nombreCompleto: 'WILLIAM  YOVANY CASALLAS ROMERO'
    },
    capitalAdeudado: 0,
    llaveProceso   : '2.58434003001201E+22',
    grupo          : 'Terminados'
  },
  {
    numero: 508,
    id    : '11230400',
    deudor: {
      cedula        : 11230400,
      nombreCompleto: 'JOSE ALFONSO VASQUEZ TOVAR',
      tel           : 'CEL 3123703828',
      email         : 'joalvato09@hotmail.com',
      direccion     : 'CALLE 2 A No 5-22 APTO 503'
    },
    demanda: {
      vencimientoPagare      : '01/03/2026',
      obligacion             : 2490084469,
      entregaGarantiasAbogado: '26/11/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'LA CALERA',
      juzgado                : {
        origen: {
          tipo: '001 PM',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-01-promiscuo-municipal-de-la-calera'
        }
      },
      radicado     : '2018 - 00371',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 29416113,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '25377408900120180037100',
    grupo          : 'Bancolombia'
  },
  {
    numero: 509,
    id    : '20401209',
    deudor: {
      cedula        : 20401209,
      nombreCompleto: 'DIANA CAROLINA PRADO FIQUITIVA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25214400300120180100200',
    grupo          : 'Terminados'
  },
  {
    numero: 510,
    id    : '80854028',
    deudor: {
      cedula        : 80854028,
      nombreCompleto: 'MANUEL ARNULFO ARAQUE MUÑOZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754400300220180041500',
    grupo          : 'Terminados'
  },
  {
    numero: 511,
    id    : '52851677',
    deudor: {
      cedula        : 52851677,
      nombreCompleto: 'DIANA MARJORIE ROMERO MONTOYA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754400300220180041600',
    grupo          : 'Terminados'
  },
  {
    numero: 512,
    id    : '1014200510',
    deudor: {
      cedula        : 1014200510,
      nombreCompleto: 'SANDRA MILENA MORALES GARCIA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900320180135200',
    grupo          : 'Terminados'
  },
  {
    numero: 513,
    id    : '80865782',
    deudor: {
      cedula        : 80865782,
      nombreCompleto: 'ERIK RICARDO PINTO RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304420190016500',
    grupo          : 'Terminados'
  },
  {
    numero: 514,
    id    : '19496623',
    deudor: {
      cedula        : 19496623,
      nombreCompleto: 'MANUEL ALBERTO LEON CALDERON',
      tel           : 'F 3175879',
      email         : 'terranova54@latinmail.com',
      direccion     : 'CARRERA 68 No 100-51 APTO 405'
    },
    demanda: {
      vencimientoPagare      : '10/03/2022',
      obligacion             : 7910080591,
      obligacion2            : 4099830244266410,
      entregaGarantiasAbogado: '30/11/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '17 Civil Municipal'
        }
      },
      radicado: '2019 - 00179'
    },
    capitalAdeudado: 46118717,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Insolvencia'
  },
  {
    numero: 514,
    id    : '79290475',
    deudor: {
      cedula        : 79290475,
      nombreCompleto: 'OSCAR ARMANDO TORRES GOMEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418902120190029100',
    grupo          : 'Terminados'
  },
  {
    numero: 516,
    id    : '79245905',
    deudor: {
      cedula        : 79245905,
      nombreCompleto: 'ALVARO LUIS ASPRILLA LUCUMI'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418901420190019000',
    grupo          : 'Terminados'
  },
  {
    numero: 517,
    id    : '52470211',
    deudor: {
      cedula        : 52470211,
      nombreCompleto: 'MARYLU VALENCIA SUAREZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418901020190016200',
    grupo          : 'Terminados'
  },
  {
    numero: 518,
    id    : '80222254',
    deudor: {
      cedula        : 80222254,
      nombreCompleto: 'JORGE IVAN AVENDAÑO VANEGAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418900920190016200',
    grupo          : 'Terminados'
  },
  {
    numero: 519,
    id    : '1030529007',
    deudor: {
      cedula        : 1030529007,
      nombreCompleto: 'LEIDY CATALINA LOSADA CABRERA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307020190055100',
    grupo          : 'Terminados'
  },
  {
    numero: 520,
    id    : '92554673',
    deudor: {
      cedula        : 92554673,
      nombreCompleto: 'RAFAEL ADOLFO PAEZ ORTEGA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307320190028700',
    grupo          : 'Terminados'
  },
  {
    numero: 521,
    id    : '40050052',
    deudor: {
      cedula        : 40050052,
      nombreCompleto: 'MARIA AQUILINA RODRIGUEZ LANCHEROS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418901220190023500',
    grupo          : 'Terminados'
  },
  {
    numero: 522,
    id    : '79359896',
    deudor: {
      cedula        : 79359896,
      nombreCompleto: 'ARMANDO RODRIGUEZ RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306820190100400',
    grupo          : 'Terminados'
  },
  {
    numero: 523,
    id    : '1014185022',
    deudor: {
      cedula        : 1014185022,
      nombreCompleto: 'LUISA ALEJANDRA ESCOBAR ANDRADE'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001418907620190043400',
    grupo          : 'Terminados'
  },
  {
    numero: 524,
    id    : '52433839',
    deudor: {
      cedula        : 52433839,
      nombreCompleto: 'INGRIT YOHANA VASQUEZ ROJAS'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400307520190100800',
    grupo          : 'Terminados'
  },
  {
    numero: 525,
    id    : '1030543356',
    deudor: {
      cedula        : 1030543356,
      nombreCompleto: 'MAGDA LORENA RIASCOS DIAZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400303620190049600',
    grupo          : 'Terminados'
  },
  {
    numero: 526,
    id    : '1072642976',
    deudor: {
      cedula        : 1072642976,
      nombreCompleto: 'CRISTIAN DAVID GUTIERREZ RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25175400300120190030400',
    grupo          : 'Terminados'
  },
  {
    numero: 527,
    id    : '80654935',
    deudor: {
      cedula        : 80654935,
      nombreCompleto: 'JAIRO MARCELO GUIZA RODRIGUEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25286400300120190041800',
    grupo          : 'Terminados'
  },
  {
    numero: 528,
    id    : '1065564377',
    deudor: {
      cedula        : 1065564377,
      nombreCompleto: 'YOLADIS ESTHER BLANCO LOPEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25473400100120190116000',
    grupo          : 'Terminados'
  },
  {
    numero: 529,
    id    : '2976219',
    deudor: {
      cedula        : 2976219,
      nombreCompleto: 'GONZALO CONTRERAS POVEDA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400305220190110300',
    grupo          : 'Terminados'
  },
  {
    numero: 530,
    id    : '35455606',
    deudor: {
      cedula        : 35455606,
      nombreCompleto: 'MARIA CLARA REYES REYES',
      tel           : 'F 60991181',
      email         : 'mariaclarareyes@hotmail.com',
      direccion     : 'CALLE 175 No 70-40'
    },
    demanda: {
      vencimientoPagare      : '2020-10-05',
      obligacion             : 40998833882814000,
      obligacion2            : 5303729887314280,
      entregaGarantiasAbogado: '2018-04-21',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '81 Civil Municipal'
        },
        ejecucion: {
          tipo: '1 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2018 - 00514',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 14409411,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400308120180051400',
    grupo          : 'Reintegra'
  },
  {
    numero: 531,
    id    : '51813018',
    deudor: {
      cedula        : 51813018,
      nombreCompleto: 'SANDRA LEONOR PAEZ MURCIA',
      tel           : '6139147 // 3134386087',
      email         : 'yadelcis@hotmail.com',
      direccion     : 'KR 81 No. 127 A - 46 CONJUNTO MONTE AZUL BOGOTA'
    },
    demanda: {
      obligacion             : 2020084294,
      obligacion2            : '2020087484 // 4594250317705437 //5303723260933890',
      entregaGarantiasAbogado: '2020-10-07',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '42 Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-42-civil-municipal-de-bogota'
        }
      },
      radicado     : '2020 - 00535',
      etapaProcesal: 'EJECUCION'
    },
    capitalAdeudado: 35608653,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400304220200053500',
    grupo          : 'Bancolombia'
  },
  {
    numero: 532,
    id    : '900520023',
    deudor: {
      cedula        : 900520023,
      nombreCompleto: 'DIMOIN COLOMBIA S.A.S.',
      tel           : 6708086,
      direccion     : 'AV BOYACA 63D - 26 OFICINA 103'
    },
    demanda: {
      obligacion             : 65886140334,
      obligacion2            : 4594260446916180,
      entregaGarantiasAbogado: '2020-09-05',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '50 Pequeñas Causas y Competencias Multiples/ 68 Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-068-civil-municipal-de-bogota'
        }
      },
      radicado     : '2020-1021',
      etapaProcesal: 'CONTESTACIÓN DEMANDA'
    },
    capitalAdeudado: 15324570,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400306820200102100',
    grupo          : 'Bancolombia'
  },
  {
    numero: 533,
    id    : '79522009',
    deudor: {
      cedula        : 79522009,
      nombreCompleto: 'JAIRO ALFONSO PARDO JAIMES',
      tel           : 'F 7808590',
      email         : 'jairopardo8-11-70@hotmail.com',
      direccion     : 'DIAGONAL 28 No 33-27  TORRE 7 APART 203  SOACHA'
    },
    demanda: {
      vencimientoPagare      : '15/11/2021',
      obligacion             : 1680097436,
      obligacion2            : 148653,
      entregaGarantiasAbogado: '14/11/2017',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'SOACHA',
      juzgado                : {
        origen: {
          tipo: '4 Pequeñas Causas y Competencias Multiples',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-04-municipal-de-pequenas-causas-y-competencia-multiple-de-soacha'
        }
      },
      radicado     : '2018 - 00060',
      etapaProcesal: 'EJECUCION'
    },
    capitalAdeudado: 56987693,
    tipoProceso    : 'HIPOTECARIO',
    llaveProceso   : '2575440030042018000600',
    grupo          : 'Bancolombia'
  },
  {
    numero: 534,
    id    : '11337530',
    deudor: {
      cedula        : 11337530,
      nombreCompleto: 'PEDRO JULIO TRIVIÑO VALBUENA',
      tel           : 3115159670,
      email         : 'maribelbonita86@hotmail.com',
      direccion     : 'VEREDA SAN JORGE ZIPAQUIRA'
    },
    demanda: {
      obligacion             : 377814085773793,
      obligacion2            : 4513070445120640,
      entregaGarantiasAbogado: '2020-09-05',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'ZIPAQUIRA',
      juzgado                : {
        origen: {
          tipo: '2 Civil Municipal'
        }
      },
      radicado     : '2020 - 00289',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 33000833,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '2589940010020200028900',
    grupo          : 'Reintegra'
  },
  {
    numero: 535,
    id    : '51918944',
    deudor: {
      cedula        : 51918944,
      nombreCompleto: 'AMANDA LUCIA GAITAN RINCÓN'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400306920200082300',
    grupo          : 'Terminados'
  },
  {
    numero: 536,
    id    : '39544073',
    deudor: {
      cedula        : 39544073,
      nombreCompleto: 'BLANCA LILIA BRAVO PAEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302020180047900',
    grupo          : 'Terminados'
  },
  {
    numero: 537,
    id    : '52155023',
    deudor: {
      cedula        : 52155023,
      nombreCompleto: 'SANDRA  LILIANA CRUZ BELTRAN',
      tel           : 'F 5360278                          CEL 3108540511',
      email         : 'mediconta@gmail.com',
      direccion     : 'CALLE 86A No 95A-15 APTO 108'
    },
    demanda: {
      vencimientoPagare      : '2022-02-02',
      obligacion             : 2270085292,
      obligacion2            : 3778131949466660,
      entregaGarantiasAbogado: '2018-06-28',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '51 Civil Municipal'
        },
        ejecucion: {
          tipo: '4 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2018 - 00850',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 20353079,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400305120180085000',
    grupo          : 'Reintegra'
  },
  {
    numero: 538,
    id    : '41564331',
    deudor: {
      cedula        : 41564331,
      nombreCompleto: 'GLORIA GIRALDO DE ROVIDA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400302720180057700',
    grupo          : 'Terminados'
  },
  {
    numero: 539,
    id    : '51937267',
    deudor: {
      cedula        : 51937267,
      nombreCompleto: 'ADRIANA LUCIA MORA PLATA',
      tel           : 'F 8146011',
      email         : 'amoplata@yahoo.com',
      direccion     : 'CALLLE 106 B- No 54-57 APTO 201 PUENTE LARGO'
    },
    demanda: {
      vencimientoPagare      : '2021-04-10',
      obligacion             : 2070086628,
      obligacion2            : 4594250056606570,
      entregaGarantiasAbogado: '2018-07-03',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '36 Civil Municipal'
        },
        ejecucion: {
          tipo: '15 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2018 - 00818',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 32026447,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400303620180081800',
    grupo          : 'Reintegra'
  },
  {
    numero: 540,
    id    : '3242760',
    deudor: {
      cedula        : 3242760,
      nombreCompleto: 'JOSE RODRIGO GARCIA QUINTERO',
      tel           : 'F 6855750                   CEL 3143659602',
      email         : 'rodrigogar68@hotmail.com',
      direccion     : 'CARRERA 86 No 99-23'
    },
    demanda: {
      vencimientoPagare      : '10/05/2121 // 10/05/2021',
      obligacion             : 1980096337,
      obligacion2            : 6700083464,
      entregaGarantiasAbogado: '2018-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '14 Civil Municipal'
        },
        ejecucion: {
          tipo: '9 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2018 - 00929',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 17667402,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400301420180092900',
    grupo          : 'Reintegra'
  },
  {
    numero: 541,
    id    : '79533771',
    deudor: {
      cedula        : 79533771,
      nombreCompleto: 'JOSE RAMON ESTRADA CASTILLO',
      tel           : 'F 2998302',
      email         : 'jrestradacastillo@gmail.com',
      direccion     : 'CARRERA 81 G No 48-03 SUR'
    },
    demanda: {
      vencimientoPagare      : '15/04/2021 // 6/05/2021',
      obligacion             : 'AUDIOPRESTAMO',
      obligacion2            : 5491580436291960,
      entregaGarantiasAbogado: '31/08/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '82 Civil Municipal/ 41 Civil Municipal'
        },
        ejecucion: {
          tipo: '14 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2018 - 00964',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 39855851,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400308220180096400',
    grupo          : 'Reintegra'
  },
  {
    numero: 542,
    id    : '53106069',
    deudor: {
      cedula        : 53106069,
      nombreCompleto: 'BIBIANA PATRICIA ESGUERRA VASQUEZ',
      tel           : 'F 53106069',
      email         : 'bicato10@hotmail.com',
      direccion     : 'CALLE 65 BIS No 86-50'
    },
    demanda: {
      vencimientoPagare      : '6/04/2021 // 6/04/2021',
      obligacion             : 'AMERICAN 377813618831557',
      obligacion2            : 'VISA 4513070030495183 // 5303715376619405',
      entregaGarantiasAbogado: '22/08/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '12 Pequeñas Causas y Competencias Multiples'
        },
        ejecucion: {
          tipo: '17 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2018 - 00644',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 12864472,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001418901220180064400',
    grupo          : 'Reintegra'
  },
  {
    numero: 543,
    id    : '51579807',
    deudor: {
      cedula        : 51579807,
      nombreCompleto: 'ROSALIA CHARRY  SARMIENTO',
      tel           : 'F 2943968',
      email         : 'rochi2656@hotmail.com',
      direccion     : 'CALLE 19 A No 82 - 65 INT 6 APTO 503'
    },
    demanda: {
      vencimientoPagare      : '13/03/2022',
      obligacion             : 3880083804,
      obligacion2            : '4513074508682496 // 53037103332223839',
      entregaGarantiasAbogado: '10/10/2018',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '12 Pequeñas Causas y Competencias Multiples'
        },
        ejecucion: {
          tipo: '11 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2018 - 00951',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 24849682,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001418901220180095100',
    grupo          : 'Reintegra'
  },
  {
    numero: 544,
    id    : '52018939',
    deudor: {
      cedula        : 52018939,
      nombreCompleto: 'SONIA ANGELICA LOPEZ ORTIZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400304320190215900',
    grupo          : 'Terminados'
  },
  {
    numero: 545,
    id    : '79295686',
    deudor: {
      cedula        : 79295686,
      nombreCompleto: 'JAIRO ALDANA VILLAMIZAR'
    },
    capitalAdeudado: 0,
    grupo          : 'Terminados'
  },
  {
    numero: 546,
    id    : '1116782267',
    deudor: {
      cedula        : 1116782267,
      nombreCompleto: 'JOGLI JOAQUIN OTERO VARGAS',
      tel           : 'CEL 3005941798',
      email         : 'juanotero1989@gmail.com',
      direccion     : 'DIAGONAL 2 No 79 F -04'
    },
    demanda: {
      vencimientoPagare      : '2020-10-04',
      obligacion             : 12541235,
      entregaGarantiasAbogado: '2017-10-06',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '2  Civil Municipal'
        },
        ejecucion: {
          tipo: '13 Civil Municipal de Ejecucion'
        }
      },
      radicado     : '2017 - 01002',
      etapaProcesal: 'EJECUCIÓN'
    },
    capitalAdeudado: 41372568,
    tipoProceso    : 'PRENDARIO',
    llaveProceso   : '11001400300220170100200',
    grupo          : 'Reintegra'
  },
  {
    numero: 547,
    id    : '348774',
    deudor: {
      cedula        : 348774,
      nombreCompleto: 'JOSE EDGAR ACHURI GONZALEZ'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754400300120210015300',
    grupo          : 'Terminados'
  },
  {
    numero: 548,
    id    : '23270185',
    deudor: {
      cedula        : 23270185,
      nombreCompleto: 'CLARA PATRICIA PEÑA BELTRAN'
    },
    capitalAdeudado: 0,
    llaveProceso   : '11001400300820170102400',
    grupo          : 'Terminados'
  },
  {
    numero: 549,
    id    : '79405147',
    deudor: {
      cedula        : 79405147,
      nombreCompleto: 'JOSE ANTONIO BEJARANO CARREÑO'
    },
    capitalAdeudado: 0,
    grupo          : 'Terminados'
  },
  {
    numero: 550,
    id    : '1022336662',
    deudor: {
      cedula        : 1022336662,
      nombreCompleto: 'MIGUEL ANGEL AGUASACO PEÑUELA'
    },
    capitalAdeudado: 0,
    llaveProceso   : '25754418900120190091100',
    grupo          : 'Terminados'
  },
  {
    numero: 551,
    id    : '1075211773',
    deudor: {
      cedula        : 1075211773,
      nombreCompleto: 'PEDRO JONATHAN RAMIREZ GOMEZ',
      email         : 'jonathansoldier@hotmail.com',
      direccion     : 'KR 1 2 41 Fusagasugá'
    },
    demanda: {
      vencimientoPagare      : '2028-03-08',
      obligacion             : 2640096179,
      entregaGarantiasAbogado: '2023-06-20',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'FUSAGASUGA',
      juzgado                : {
        origen: {
          tipo: '3 Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-003-civil-municipal-de-fusagasuga'
        }
      },
      radicado: '2023 - 00371'
    },
    capitalAdeudado: 28018855,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    numero: 552,
    id    : '1023874668',
    deudor: {
      cedula        : 1023874668,
      nombreCompleto: 'OSCAR MAURICIO GOMEZ MENDOZA',
      tel           : 'F 2043773',
      email         : 'oscar2794@hotmail.com',
      direccion     : 'CL 49 A BIS SUR No. 5 N 10'
    },
    demanda: {
      vencimientoPagare      : '10/02/2026 // 27/01/2026',
      obligacion             : 530104065,
      obligacion2            : 530103261,
      entregaGarantiasAbogado: '2023-06-20',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '4 Civil Municipal',
          url : 'https://www.ramajudicial.gov.co/web/juzgado-04-civil-municipal-de-bogota'
        }
      },
      radicado: '2023 - 00622'
    },
    capitalAdeudado: 77376262,
    tipoProceso    : 'SINGULAR',
    llaveProceso   : '11001400300420230062200',
    grupo          : 'Bancolombia'
  },
  {
    numero: 553,
    id    : '80220698',
    deudor: {
      cedula        : 80220698,
      nombreCompleto: 'JOSE ALEXANDER LAVERDE PENAGOS',
      email         : 'lxndrlaverde@gmail.com',
      direccion     : 'Carrera 7 # 180 75 // Carrera 8 A No. 182 - 12'
    },
    demanda: {
      vencimientoPagare      : '2025-02-25',
      obligacion             : 130089828,
      entregaGarantiasAbogado: '2023-06-20',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA',
      juzgado                : {
        origen: {
          tipo: '83 Civil Municipal /65 PCC'
        }
      },
      radicado: '2023 - 01088'
    },
    capitalAdeudado: 31804872,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    numero: 554,
    id    : '51976656',
    deudor: {
      cedula        : 51976656,
      nombreCompleto: 'SANDRA PATRICIA ALVAREZ RODRIGUEZ',
      tel           : 'F 2297973 CEL 3157352910',
      email         : 'sandris73@hotmail.com',
      direccion     : 'Carrera 102 No. 69 - 81 Casa 5 Conjunto Residencial Montes de Tierra Grata'
    },
    demanda: {
      vencimientoPagare      : '22/02/2026 // 4/07/2026 // 6/03/2026',
      obligacion             : 2150100545,
      obligacion2            : '377844028390801 y 4513080181283486',
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA'
    },
    capitalAdeudado: 22111021,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    numero: 555,
    id    : '53130409',
    deudor: {
      cedula        : 53130409,
      nombreCompleto: 'JEIMMY SOLEY QUIROGA RAMIREZ',
      tel           : 'F 3917539 CEL 3506509064',
      email         : 'jsquiroga72@hotmail.com',
      direccion     : 'CL 55 BIS 16 48 Apartamento 702 Edificio Bangkok'
    },
    demanda: {
      vencimientoPagare      : '2026-03-04',
      obligacion             : 1920089307,
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA'
    },
    capitalAdeudado: 80906224,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    numero: 556,
    id    : '1022335014',
    deudor: {
      cedula        : 1022335014,
      nombreCompleto: 'CIRO ERQUILIAN ONOFRE',
      tel           : 'CEL 3023193548',
      email         : 'ciro.onofe1105@gmail.com',
      direccion     : 'Carrera 13 # 4-20 Madrid (Cundinamarca)'
    },
    demanda: {
      vencimientoPagare      : '9/03/2026 // 9/03/2026 // 9/04/2026',
      obligacion             : '3830095699 // 3830095700',
      obligacion2            : 3830095701,
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'MADRID'
    },
    capitalAdeudado: 149444779,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    numero: 557,
    id    : '71685758',
    deudor: {
      cedula        : 71685758,
      nombreCompleto: 'CARLOS HERNEY QUINTERO',
      tel           : 'F 6485655 CEL 3002985587',
      email         : 'cahequi8097@gmail.com  fundaoyuki@gmail.com',
      direccion     : 'KR 32 A 1 19 BARRIO SANTA MATILDE'
    },
    demanda: {
      vencimientoPagare      : '18/07/2026 // 4/03/2026',
      obligacion             : 840093593,
      obligacion2            : 'PAGARE SIN NUMERO T. AMERICAN EXPRESS 0377844069636757',
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA'
    },
    capitalAdeudado: 49329779,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    numero: 558,
    id    : '52531016',
    deudor: {
      cedula        : 52531016,
      nombreCompleto: 'CLAUDIA MARCELA ARIAS LÓPEZ',
      tel           : 'CEL 3106736494',
      email         : 'marcearias@yahoo.com',
      direccion     : 'Calle 18 N 86 55 Etapa 1 Torre 5 Apartamento 403 Conjunto Residencial Parque de Ostente'
    },
    demanda: {
      vencimientoPagare      : '17/03/2026 // 4/03/2026',
      obligacion             : 3880005183,
      obligacion2            : 'PAGARE SIN NUMERO T. MASTER CARD 5303720122061696',
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA'
    },
    capitalAdeudado: 46537671,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    numero: 559,
    id    : '80219425',
    deudor: {
      cedula        : 80219425,
      nombreCompleto: 'EDWIN ALEXANDER SALCEDO PEREZ',
      tel           : 'CEL 3112633806',
      email         : 'edwsal736@gmail.com',
      direccion     : 'Calle 50 Sur No. 93 D 38 Torre 07 Apartamento 601 Conjunto Residencial Porvenir Reservado Etapa 7; Carrera 89 A No. 45 A – 33 Sur Casa 207 Agrupación de Vivienda La Margarita Etapa 9'
    },
    demanda: {
      vencimientoPagare      : '2026-03-02',
      obligacion             : 1080103378,
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA'
    },
    capitalAdeudado: 42598393,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    numero: 560,
    id    : '1129565798',
    deudor: {
      cedula        : 1129565798,
      nombreCompleto: 'HANSEL MARTINEZ BARROS',
      tel           : 'F 3930210 CEL 3043463859 // 3005306070',
      email         : 'inghanselmartinez@hotmail.com',
      direccion     : 'CR 51 43 04 Barrio Abajo Barranquilla // Carrera 71 No. 88A - 31 Barranquilla // Calle 42 A No. 46 - 04 Barrio El Parque en Soledad (Atlantico)'
    },
    demanda: {
      vencimientoPagare      : '6/03/2026 //4/07/2026',
      obligacion             : 4770111750,
      obligacion2            : 'PAGARÉ SIN NÚMERO T. MASTER CARD 5303720229555616 // T. VISA 4513070377907980',
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BARRAQNUILLA'
    },
    capitalAdeudado: 40696764,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    numero: 561,
    id    : '52278914',
    deudor: {
      cedula        : 52278914,
      nombreCompleto: 'LUZ JANNETH RODRIGUEZ MOERNO',
      tel           : 'F 17476445/7848056 CEL 3153208374',
      email         : 'lurodrig@corona.com.co  jrodriguez2805@hotmail.com',
      direccion     : 'Carrera 87 No. 48 – 50 Sur Casa 26 Conjunto Residencial Alameda de San José II'
    },
    demanda: {
      vencimientoPagare      : '2/03/2026 // 20/03/2026',
      obligacion             : 6520089408,
      obligacion2            : 'TARJETA MASTER CARD No. 5303720118094313 Y TARJETA AMERICAN No. 0377844026948428',
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA'
    },
    capitalAdeudado: 36720537,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    numero: 562,
    id    : '17139148',
    deudor: {
      cedula        : 17139148,
      nombreCompleto: 'MARIO HERNAN SALAMANCA PATIÑO',
      tel           : 'F 7746112',
      email         : 'ajasalama@gmail.com',
      direccion     : 'Carrera 80 No. 8 - 11 Torre 3 Interior 5 Apartamento 519 Torres de Santa Barbara Conjunto Residencial'
    },
    demanda: {
      vencimientoPagare      : '10/05/2026 // 6/03/2026',
      obligacion             : 9960086465,
      obligacion2            : 'TARJETA DE CREDITO MASTER CARD 5303720132348190',
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA'
    },
    capitalAdeudado: 25252953,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    numero: 563,
    id    : '7718318',
    deudor: {
      cedula        : 7718318,
      nombreCompleto: 'MILTON MARINO LUGO GOMEZ'
    },
    demanda: {
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA'
    },
    capitalAdeudado: 0,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    numero: 564,
    id    : '1013622120',
    deudor: {
      cedula        : 1013622120,
      nombreCompleto: 'JOHAN ANDRES QUIROGA GALEANO'
    },
    demanda: {
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA',
      ciudad                 : 'BOGOTA'
    },
    capitalAdeudado: 0,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    numero: 565,
    id    : '79399032',
    deudor: {
      cedula        : 79399032,
      nombreCompleto: 'JORGE ALEXANDER ABADIA CARRILLO'
    },
    demanda: {
      entregaGarantiasAbogado: '2023-07-26',
      departamento           : 'CUNDINAMARCA'
    },
    capitalAdeudado: 0,
    tipoProceso    : 'SINGULAR',
    grupo          : 'Bancolombia'
  },
  {
    numero: 566,
    id    : '1061047348',
    deudor: {
      cedula        : 1061047348,
      nombreCompleto: 'SANDRA MILENA PALACIO RIVERA'
    },
    capitalAdeudado: 0,
    grupo          : 'Bancolombia'
  },
  {
    numero: 567,
    id    : '94254761',
    deudor: {
      cedula        : 94254761,
      nombreCompleto: 'WILSON DE JESUS MOLINA QUIRAMA'
    },
    capitalAdeudado: 0,
    grupo          : 'Bancolombia'
  }
];

export function telFixer(
  tel 
) {
  const fijo = new Map();
  const celular = new Map();

  const hasFijo = tel.includes(
    'F' 
  );

  if ( hasFijo ) {
    const indexOfFijo = tel.indexOf(
      'F' 
    );

    const fijoRaw = tel
            .slice(
              indexOfFijo, 10 
            )
            .replace(
              'F ', '' 
            );
    fijo.set(
      'fijo', fijoRaw 
    );
  }

  const hasCel = tel.includes(
    'CEL' 
  );

  if ( hasCel ) {
    const indexOfCel = tel.indexOf(
      'CEL' 
    );

    const celularRaw = tel
            .slice(
              indexOfCel 
            )
            .replace(
              'CEL ', '' 
            );
    celular.set(
      'celular', celularRaw 
    );
  }

  return {
    fijo: Array.from(
      fijo.values() 
    ).toLocaleString(),
    celular: Array.from(
      celular.values() 
    ).toLocaleString()
  };
}

export function juzgadoFixer(
  juzgado 
) {
  if ( juzgado.id ) {
    const id = juzgado.id;

    const tipo = juzgado.tipo.replace(
      /\d/g, '' 
    );

    return {
      ...juzgado,
      id  : id,
      tipo: tipo
    };
  }

  const id = juzgado.tipo.replace(
    /\D/g, '' 
  );

  const tipo = juzgado.tipo.replace(
    /\d/g, '' 
  );

  return {
    ...juzgado,
    id  : id,
    tipo: tipo
  };
}

export function trimmer(
  nombreCompleto 
) {
  const trimDemandado = nombreCompleto.replace(
    /^\s+|\s+$/gm, '' 
  );
  console.log(
    trimDemandado 
  );

  const splitDemandado = trimDemandado.split(
    ' ' 
  );
  const splitDemandadoLength = splitDemandado.length;
  switch ( splitDemandadoLength ) {
    case 1:
      return {
        primerNombre: splitDemandado[ 0 ]
      };
    case 2:
      return {
        primerNombre  : splitDemandado[ 0 ],
        primerApellido: splitDemandado[ 1 ]
      };
    case 3:
      return {
        primerNombre   : splitDemandado[ 0 ],
        primerApellido : splitDemandado[ 1 ],
        segundoApellido: splitDemandado[ 2 ]
      };
    case 4:
      return {
        primerNombre   : splitDemandado[ 0 ],
        segundoNombre  : splitDemandado[ 1 ],
        primerApellido : splitDemandado[ 2 ],
        segundoApellido: splitDemandado[ 3 ]
      };
    case 5:
      return {
        primerNombre   : splitDemandado[ 0 ],
        segundoNombre  : splitDemandado[ 1 ],
        primerApellido : splitDemandado[ 2 ],
        segundoApellido: `${ splitDemandado[ 3 ] } ${ splitDemandado[ 4 ] } `
      };
    default:
      return {
        primerNombre   : splitDemandado[ 0 ],
        segundoNombre  : `${ splitDemandado[ 1 ] } ${ splitDemandado[ 2 ] } `,
        primerApellido : splitDemandado[ 3 ],
        segundoApellido: `${ splitDemandado[ 4 ] } ${ splitDemandado[ 5 ] } `
      };
  }
}

const newMapCarpetas = carpetas.map(
  (
    carpeta 
  ) => {
    if ( carpeta.deudor.tel ) {
      telFixer(
        carpeta.deudor.tel.toString() 
      );
    }

    const juzgados = carpeta.demanda?.juzgado?.ejecucion
        ?? carpeta.demanda?.juzgado?.origen;
    console.log(
      juzgados 
    );

    const trimmedName = trimmer(
      carpeta.deudor.nombreCompleto 
    );

    const {
      nombreCompleto, ...newDeudor 
    } = carpeta.deudor;
    const obligaciones = [];

    if ( carpeta.demanda ) {
      obligaciones.push(
        carpeta.demanda.obligacion 
      );

      if ( carpeta.demanda.obligacion2 ) {
        obligaciones.push(
          carpeta.demanda.obligacion2 
        );
      }
    }

    const newCarpeta = {
      ...carpeta,
      demanda: {
        ...carpeta.demanda,
        obligacion: obligaciones,
        juzgado   : {
          origen: juzgadoFixer(
            carpeta.demanda?.juzgado?.origen ?? {
              tipo: 'unknown',
              id  : 0,
              url : 'https://app.rsasesorjuridico.com'
            } 
          ),
          ejecucion: juzgadoFixer(
            carpeta.demanda?.juzgado?.ejecucion ?? {
              tipo: 'unknown',
              id  : 0,
              url : 'https://app.rsasesorjuridico.com'
            } 
          )
        },
        despachoActivo: juzgadoFixer(
          juzgados ?? {
            tipo: 'unknown',
            id  : 0,
            url : 'https://app.rsasesorjuridico.com'
          } 
        )
      },
      deudor: {
        ...carpeta.deudor,
        ...trimmedName,
        tel: telFixer(
          carpeta.deudor.tel?.toString() ?? 'nada' 
        )
      }
    };

    return newCarpeta;
  } 
);
console.log(
  newMapCarpetas 
);
fs.writeFile(
  'nuevosNombresMap.json', JSON.stringify(
    newMapCarpetas 
  ) 
);
