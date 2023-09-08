import { DemandaRaw,
         DepartamentoRaw,
         IntCarpeta,
         IntCarpetaRaw,
         IntDemanda,
         Juzgado } from '../types/carpetas';
import { IntDepartamentos } from '../types/rama-judicial';
import fetchProceso, { sleep } from '../procesos';
import { Despachos } from '../despachos';
import { Deudor } from './deudor';
import * as fs from 'fs/promises';
import { intProceso } from '../types/procesos';
import { insertNewCarpetas } from '..';

const Carpetas: IntCarpetaRaw[] = [
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '40.589.422 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-11',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-05-30',
      municipio              : 'GIRARDOT',
      obligacion             : {
        '0': '2273 320145954',
        '1': ''
      },
      radicado         : '2017 - 00250',
      vencimientoPagare: '2026-11-28'
    },
    deudor: {
      cedula   : 39581581,
      direccion: 'MZ 7 CS 6 UB HDA/ GIRARDOT',
      email    : '34|',
      nombre   : 'ALEXANDRA MILENA JIMENEZ AGUILAR',
      telefono : 8361704
    },
    llaveProceso: '2530740030012017025000',
    numero      : 1,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '162.012.163 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-08',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-10-27',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '1930085200  /190184  /377813469298997',
        '1': '4513070079097239  /5303714507623618'
      },
      radicado         : '2017 - 00554',
      vencimientoPagare: '2018-09-09'
    },
    deudor: {
      cedula: 1026259010,
      direccion:
        'DIAGONAL 77 B No 119 A-73  INTERIOR 1 APARTAMENTO 602',
      email : 'edwin06cuervo@hotmail.com',
      nombre: 'EDWIN ANDRES CUERVO VERDUGO',
      telefono:
        ' F 3935996                CEL 3142064177'
    },
    llaveProceso: '11001310304320170055400',
    numero      : 2,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '33.175.721 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-18',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2018-09-28',
      municipio              : 'CAJICA',
      obligacion             : {
        '0': 12204943,
        '1': ''
      },
      radicado         : '2017 - 00715',
      vencimientoPagare: '2017-09-13'
    },
    deudor: {
      cedula: 1018441487,
      direccion:
        'CARRERA 2 E No 1 A  - 60 CASA 126 - CAJICA',
      email   : 'N/A',
      nombre  : 'MARIA CLAUDIA REATIGA URREA',
      telefono: 60277773
    },
    llaveProceso: '25126408900220170071500',
    numero      : 3,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '29.925.624 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-11',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-05-30',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '2273 320158101',
        '1': ''
      },
      radicado         : '2017 - 00720',
      vencimientoPagare: '2022-11-15'
    },
    deudor: {
      cedula: 93437973,
      direccion:
        'CARRERA 104 No. 12  B-94 BOGOTA',
      email: 'dipsonsanchez16@g0mail.com',
      nombre:
        'DIPSON EUSEBIO SANCHEZ CASTIBLANCO',
      telefono: '4741056//3182165543'
    },
    llaveProceso: '11001400305320170072000',
    numero      : 4,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '25.184.150 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-11',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-06-05',
      municipio              : 'GUASCA',
      obligacion             : {
        '0': '2273 320172490',
        '1': ''
      },
      radicado         : '2017 - 00168',
      vencimientoPagare: '1934-02-14'
    },
    deudor: {
      cedula   : 20645940,
      direccion: 'CARRERA 9 No. 2-03 GUASCA',
      email    : 'patoavella8210@hotmail.com',
      nombre   : 'FANY PATRICIA AVELLANEDA TOVAR',
      telefono : '3217662673//8573134'
    },
    llaveProceso: '25322418900120170016800',
    numero      : 5,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.313.851 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-11',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-05-30',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '2273 320111490',
        '1': ''
      },
      radicado         : '2017 -00444',
      vencimientoPagare: '2008-09-05'
    },
    deudor: {
      cedula: 79645559,
      direccion:
        'CALLE 6 BIS A 90 A-80 TORRE 7 APTO 203',
      email   : 'N/A',
      nombre  : 'FRANCISCO MONTAÑA QUESADA',
      telefono: '4380641//3118469698'
    },
    llaveProceso: '11001400307620170044400',
    numero      : 6,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '134.026.609 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-11',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-05-24',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2553057,
        '1': ''
      },
      radicado         : '2017 - 00374',
      vencimientoPagare: '2020-04-26'
    },
    deudor: {
      cedula: 79733852,
      direccion:
        'CALLE 21 BIS SUR No. 88-58 BOGOTA',
      email   : 'N/A',
      nombre  : 'JOSE RICARDO PRIETO CRUZ',
      telefono: 4003113
    },
    llaveProceso: '11001310302720170037400',
    numero      : 7,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '25.758.912 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-11',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-05-24',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2008124,
        '1': ''
      },
      radicado         : '2017 - 00667',
      vencimientoPagare: '2020-04-20'
    },
    deudor: {
      cedula: 79642493,
      direccion:
        'CALLE 118 No. 18-65 APTO 504 ANAYA EL PARQUE BOGOTA',
      email   : 'N/A',
      nombre  : 'JOSE WILSON ROJAS VALDES',
      telefono: '6224552//3106980002'
    },
    llaveProceso: '11001400301420170066700',
    numero      : 8,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '78.071.921 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-19',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-09-25',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '2290099308    /2170086682',
        '1': ''
      },
      radicado         : '2017 - 00998',
      vencimientoPagare: '18/02//2021'
    },
    deudor: {
      cedula   : 1020731500,
      direccion: 'DIAGONAL 77  B No 19 A - 73',
      email    : 'dany_aleja@hotmail.com',
      nombre:
        'DANIELA ALEJANDRA CARDENAS RODRIGUEZ',
      telefono: '1020731500 / 3105583907'
    },
    llaveProceso: '1100140030442017099800',
    numero      : 9,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.946.341 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-11',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2017-05-24',
      municipio              : 'SUBA',
      obligacion             : {
        '0': 2405037,
        '1': ''
      },
      radicado         : '2017 - 00909',
      vencimientoPagare: '2020-04-26'
    },
    deudor: {
      cedula   : 52396019,
      direccion: 'CARRERA 109A No. 148-91 BOGOTA',
      email    : 'N/A',
      nombre   : 'MARINA MORALES HERNANDEZ',
      telefono : 3202705987
    },
    llaveProceso: '11001418900320170090900',
    numero      : 10,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'LiosJuridicos',
    demanda : {
      capitalAdeudado        : '21.596.919 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-07',
      etapaProcesal:
        'EL 12/06/2018 EL JUZGADO DECRETA TERMINACION PROCESO POR PAGO CUOTAS EN MORA //EL 4/08/2018 SE DEVOLVIERON GARANTIAS A AECSA S.A. // EL JUEZ NO ACCEDIO A SOLICITUD ENTREGA DESEMBARGO PARTE ACTORA 1/02/2019 SE ARCHIVA PROCESO CAJA 240 // PAGAR DESARCHIVE Y REQUERIR AL JUEZ PARA QUE DE CUMPLIMIENTO A ENTREGA DE OFICIO DADO QUE PERSISTE EL EMBARGO A PESAR QUE EL CLIENTE ESTA AL DIA',
      fechaPresentacion: '2018-09-05',
      municipio        : 'BOGOTA',
      obligacion       : {
        '0': '12313737//377815899589556',
        '1': 4513070106144855
      },
      radicado         : '2017 - 00839',
      vencimientoPagare: '2017-08-28'
    },
    deudor: {
      cedula: 80743147,
      direccion:
        'CRA 18 H No. 76 A-53 SUR BOGOTA',
      email:
        'sandrapatriciajoya-2545@hotmail.com',
      nombre  : 'JAVIER ROMERO REYES',
      telefono: '3903652//3209229120'
    },
    llaveProceso: '11001400303720170083900',
    numero      : 11,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-11',
      etapaProcesal          : 'APELACION',
      fechaPresentacion      : '2017-05-30',
      municipio              : 'FACATATIVA',
      obligacion             : {
        '0': 2273320140425,
        '1': ''
      },
      radicado         : '2017 - 00488/ 2018 - 00158',
      vencimientoPagare: '2026-07-05'
    },
    deudor: {
      cedula: 11436632,
      direccion:
        'CALLE 2 E 1 A-85 SUR FACATATIVA',
      email   : 'triracso25@hotmail.com',
      nombre  : 'OSCAR MANUEL TRIVIÑO GARCIA',
      telefono: 3214791915
    },
    llaveProceso: '25269400300220180015800',
    numero      : 12,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '23.326.974 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-11',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-05-31',
      municipio              : 'VIANI',
      obligacion             : {
        '0': 3720087139,
        '1': ''
      },
      radicado         : '2017 - 00020',
      vencimientoPagare: '2018-07-03'
    },
    deudor: {
      cedula   : 447028,
      direccion: 'FINCA EL HOSPICIO VIANI',
      email    : 'N/A',
      nombre   : 'PASCUAL ORTEGA ENCISO',
      telefono : 3106890300
    },
    llaveProceso: '25867418900120170002000',
    numero      : 13,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.987.259 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-19',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-09-27',
      municipio              : 'SIBATE',
      obligacion             : {
        '0': 4517,
        '1': ''
      },
      radicado         : '2017 - 00284',
      vencimientoPagare: '2023-03-05'
    },
    deudor: {
      cedula: 52441656,
      direccion:
        'TRANSVERSAL 6 B  No 12 A - 18   SIBATE',
      email   : 'elmisosro1@hotmail,com',
      nombre  : 'ELSA MILENA SOSA  ROMERO',
      telefono: '5295780 / 3133743400'
    },
    llaveProceso: '25740418900120170028400',
    numero      : 14,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '24.792.093 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-11',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-05-24',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2450966,
        '1': ''
      },
      radicado         : '2017 - 00654',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 1098678636,
      direccion:
        'CARRERA 78 F 50 INTERIOR 2 AP/ CA 101',
      email   : 'N/A',
      nombre  : 'SILVIA SUSANA SIERRA CASTAÑEDA',
      telefono: '3155112901//3043581350'
    },
    llaveProceso: '11001400307220170065400',
    numero      : 15,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '33.791.309 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-11',
      etapaProcesal          : 'EMPLAZAMIENTO',
      fechaPresentacion      : '2017-05-24',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2530444,
        '1': 'N/A'
      },
      radicado         : '2017 - 00884',
      vencimientoPagare: '2020-05-04'
    },
    deudor: {
      cedula: 1077969975,
      direccion:
        'CARRERA 77B No. 68B - 19 BARRIO SANTA HELENITA',
      email   : 'yess_Id@hotmail.com',
      nombre  : 'YESID ALBEIRO RAMOS',
      telefono: 'CEL 3212337597'
    },
    llaveProceso: '11001400300320170088400',
    numero      : 16,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.684.674 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-11',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-05-30',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': '2273 320131950',
        '1': ''
      },
      radicado         : '2017 - 00480',
      vencimientoPagare: '2025-09-07'
    },
    deudor: {
      cedula: 52953923,
      direccion:
        'CALLE 17 No. 24 C-17 SUR BOGOTA',
      email   : 'importex1112@gmail.com',
      nombre  : 'YEDSY CAROLAY ROJAS GAMBOA',
      telefono: 8135263
    },
    llaveProceso: '25754418900220170048000',
    numero      : 17,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '67.068.123 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-11',
      etapaProcesal          : 'AUDIENCIA',
      fechaPresentacion      : '2017-05-30',
      municipio              : 'CHIA',
      obligacion             : {
        '0': 12645083,
        '1': 12340733
      },
      radicado         : '2017 - 00269',
      vencimientoPagare: '2017-04-27'
    },
    deudor: {
      cedula   : 79205977,
      direccion: 'cra 4 No. 5-51 Chía',
      email    : 'N/A',
      nombre   : 'LUIS ENRIQUE ACOSTA CHAVARRIA',
      telefono : 8638948
    },
    llaveProceso: '25175400300320170026900',
    numero      : 18,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.391.508 COP',
      departamento           : 'CUNDINNAMARCA',
      entregaGarantiasAbogado: '2017-09-19',
      etapaProcesal          : '',
      fechaPresentacion      : '25/09/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 103560,
        '1': ''
      },
      radicado         : '2017 - 01755',
      vencimientoPagare: '2022-12-06'
    },
    deudor: {
      cedula: 80001905,
      direccion:
        'CALLE 42 SUR No 87 C -18  INTERIOR 2 APARTAMENTO 203',
      email   : 'eliacid@hotmail.com',
      nombre  : 'ELIACID CHAVES OBANDO',
      telefono: 4062058
    },
    llaveProceso: '11001400302120170175500',
    numero      : 19,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '58.957.417 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-11',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-05-24',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2551197,
        '1': ''
      },
      radicado         : '2017 - 00483',
      vencimientoPagare: '2020-04-25'
    },
    deudor: {
      cedula   : 94482258,
      direccion: 'Carrera 72 R No. 37-90 SUR',
      email    : 'sotocolombiano@gmail.com',
      nombre:
        'ANDRES MAURICIO FERNANDEZ DE SOTO DOMINGUEZ',
      telefono: 4630870
    },
    llaveProceso: '11001400302220170048300',
    numero      : 20,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 42886,
      fechaPresentacion      : '2017-07-25',
      municipio              : 'FUSAGASUGA',
      obligacion             : {
        '0': 15537944,
        '1': 42874
      },
      radicado         : '2017 - 00437',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 11309242,
      direccion: 'CALLE 522 -68 fusagasuga',
      email    : 'edware960720@hotmail.com',
      nombre   : 'RAMIRO CRISTANCHO CONTRERAS',
      telefono : 312821861
    },
    llaveProceso: '25290400300120170043700',
    numero      : 21,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '29.690.679 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-11',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-05-24',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2453698,
        '1': 'N/A'
      },
      radicado         : '2017 - 00849',
      vencimientoPagare: '2020-04-26'
    },
    deudor: {
      cedula: 80073174,
      direccion:
        'CALLE 160 No. 58-75 TORRE 6 APTO 503 BOGOTA /// YOPAL CASANARE',
      email   : '',
      nombre  : 'JOSE EDWIN GARCES ARDILA',
      telefono: 'F 7978419'
    },
    llaveProceso: '11001400308520170084900',
    numero      : 22,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-19',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-05-30',
      municipio              : 'GIRARDOT',
      obligacion             : {
        '0': 12517400,
        '1': 5306941968938113
      },
      radicado         : '2017 - 00337',
      vencimientoPagare: '2017-04-26'
    },
    deudor: {
      cedula: 11207272,
      direccion:
        'MANZANA D CS 8 DIAMANTE GIRARDOT',
      email   : 'karendiaz@hotmail.com',
      nombre  : 'EDER ALEXIS HERRERA SAENZ',
      telefono: 3186899839
    },
    llaveProceso: '25307400300120170033700',
    numero      : 23,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-19',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-07-05',
      municipio              : 'GAMA',
      obligacion             : {
        '0': 5303726157973550,
        '1': 5303716368987260
      },
      radicado         : '2017 - 00024',
      vencimientoPagare: '20/10/2016 - 05/08/16'
    },
    deudor: {
      cedula: 3034074,
      direccion:
        'Urbanización la Pola Manzana C casa 31 Gama',
      email   : 'jechos243@hotmail.com',
      nombre  : 'WILSON ARMANDO RODRIGUEZ MORA',
      telefono: 3102354541
    },
    llaveProceso: '25299418900120170002400',
    numero      : 24,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '107.818.114 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-19',
      etapaProcesal          : 'EJECUCIÓN ',
      fechaPresentacion      : '2017-05-30',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12705806,
        '1': 'N/A'
      },
      radicado         : '2017 - 00335',
      vencimientoPagare: '2020-05-10'
    },
    deudor: {
      cedula   : 3197274,
      direccion: 'CL 14 No. 10 - 45 Bucaramanga',
      email    : 'N/A',
      nombre   : 'OMAR DARIO ZEA GALVIS',
      telefono : 'F 7479415'
    },
    llaveProceso: '11001310301120170033500',
    numero      : 25,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '17.307.303 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-19',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-05-30',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990116310,
        '1': ''
      },
      radicado         : '2017 - 00827',
      vencimientoPagare: '2024-03-03'
    },
    deudor: {
      cedula   : 52744376,
      direccion: 'CALLE 67 No.86A-49 BOGOTA',
      email    : 'N/A',
      nombre   : 'YUDY RODRIGUEZ',
      telefono : 3183517022
    },
    llaveProceso: '11001400306520170082700',
    numero      : 26,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Insolvencia',
    demanda : {
      capitalAdeudado        : '96.608.106 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-19',
      etapaProcesal          : 2.532031890012017e22,
      fechaPresentacion      : 'CENTRO DE CONCILIACION',
      municipio              : 'GUADUAS',
      obligacion             : {
        '0': 7910080321,
        '1': 'N/A'
      },
      radicado         : '2017 - 00195',
      vencimientoPagare: '2017-04-11'
    },
    deudor: {
      cedula: 79004127,
      direccion:
        'CALLE 4 No. 14-161 GUADUAS (CUNDINAMARCA)',
      email   : 347620,
      nombre  : ' NORBEY LOMBANA MAHECHA',
      telefono: 'F 34746523'
    },
    llaveProceso: '25320310300120170019500',
    numero      : 27,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-30',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-08',
      municipio              : 'FUSAGASUGA',
      obligacion             : {
        '0': 127011,
        '1': ''
      },
      radicado         : '2017 - 00369',
      vencimientoPagare: '2025-09-03'
    },
    deudor: {
      cedula: 20563933,
      direccion:
        'CALLE 17 No 8-41 APTO 101 FUSAGASUGA',
      email   : 'anyelicllau2006@hotmail.com',
      nombre  : 'MARIA SOCORRO TORRES DE GONZALEZ',
      telefono: '8671269 / /3102301734'
    },
    llaveProceso: '25290400300120170036900',
    numero      : 28,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '51.217.496 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-19',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-26',
      municipio              : 'CHIA',
      obligacion             : {
        '0': 179301,
        '1': ''
      },
      radicado         : '2017 - 00511',
      vencimientoPagare: '2029-12-05'
    },
    deudor: {
      cedula   : 80814800,
      direccion: 'CARRERA  9 No 19 - 59 CHIA ',
      email    : 'whitman.najarramirez@hotmail.com',
      nombre   : 'WHITMAN JEFERSON NAJAR RAMIREZ',
      telefono : 8638680
    },
    llaveProceso: '25175400300120170051100',
    numero      : 29,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '48.945.056 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-18',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 146247,
        '1': ''
      },
      radicado         : '2017 - 00951',
      vencimientoPagare: '2031-12-02'
    },
    deudor: {
      cedula: 52367601,
      direccion:
        'CARRERA 8 No 192 - 60  APARTAMENTO  312  / GARAGE  29',
      email   : 'mivibel@yahoo.com',
      nombre  : 'MIREYA VIVIANA BELTRAN HERRERA',
      telefono: 3002107965
    },
    llaveProceso: '11001400303020170095100',
    numero      : 30,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-30',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-09',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 530311042614581,
        '1': 4513077790909121
      },
      radicado         : '2017 - 00211',
      vencimientoPagare: '1936-12-09'
    },
    deudor: {
      cedula: 79590985,
      direccion:
        'CARRERA 13 sur No. 49-37 soacha y venida 19 nO. 118-95 ofc 411',
      email   : 'jpkafu@gmail.com',
      nombre  : 'JORGE PEREZ',
      telefono: '7793347 // 3014192323'
    },
    llaveProceso: '25754400300320170021100',
    numero      : 31,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '54.812.000 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-05-30',
      etapaProcesal          : 'EJECUCION',
      fechaPresentacion:
        '8/06/2017 // 12/04/2018',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 4280019446,
        '1': '5406915580101610 4513077620518209//20990166568'
      },
      radicado         : '2018- 00384',
      vencimientoPagare: '2028-08-01'
    },
    deudor: {
      cedula: 1022940572,
      direccion:
        'CALLE 36 B SUR No. 11-25 APTO 1307 BOGOTA',
      email   : 'jhonannicky@hotmail.com',
      nombre  : ' JONATHAN ANDRES  BERNAL PARRA',
      telefono: 'CEL 3134775602'
    },
    llaveProceso: '11001400304320180038400',
    numero      : 32,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-30',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-09',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 377813824603022,
        '1': 4513078713738027
      },
      radicado         : '2017 - 00649',
      vencimientoPagare: '2020-03-03'
    },
    deudor: {
      cedula: 28936365,
      direccion:
        'CALLE 401 SUR 72 L -40 CRISTALES  BOGOTA',
      email   : 'snaluistol@gmail.com',
      nombre  : 'NINI JOHANA CORTES MONROY ',
      telefono: '4762591//3118113651'
    },
    llaveProceso: '11001400308220170064900',
    numero      : 33,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '26.815.877 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-06',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-08',
      municipio              : 'GIRARDOT',
      obligacion             : {
        '0': 23595,
        '1': ''
      },
      radicado         : '2017 - 00330',
      vencimientoPagare: '2036-04-26'
    },
    deudor: {
      cedula: 1070612757,
      direccion:
        'M 7 TORRE 6 APTO 404 GIRARDOT// CALLE 3 No. 27-01 edificio torr 6 manzana 7 ciudadela Cafam del Sol apto 404',
      email   : 'kjpg_11@hotmail.com',
      nombre  : 'KAREN JULIETH PINZON GUTIERREZ',
      telefono: 3006308169
    },
    llaveProceso: '25307400300320170033000',
    numero      : 34,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '26.464.177 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-19',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-05-30',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 5303722385820750,
        '1': 'AUTOPRESTAMO'
      },
      radicado         : '2017-00511',
      vencimientoPagare: '2016-09-16'
    },
    deudor: {
      cedula: 7226201,
      direccion:
        'CARRERA 33 No. 1 H-86 DUITAMA (BOYACÁ)',
      email   : 'luiscagv@yahoo.com',
      nombre  : 'LUIS CARLOS GUTIERREZ VELANDIA',
      telefono: 'CEL 3106199094'
    },
    llaveProceso: '11001400302620170051100',
    numero      : 35,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '9.633.585 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-06',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-14',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 65758,
        '1': ''
      },
      radicado         : '2017 - 00892',
      vencimientoPagare: '2017-09-15'
    },
    deudor: {
      cedula: 52314251,
      direccion:
        'CALLE 49 SUR No. 89 B-30 Etapa 1 CAsa1',
      email   : 'N/A',
      nombre  : 'SANDRA PATRICIA AGUDELO MONTAGUT',
      telefono: '4189692//3012419992'
    },
    llaveProceso: '11001400306620170089200',
    numero      : 36,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.707.877 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-06',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '09/06/2017//27/07/17',
      municipio              : 'SIBATE',
      obligacion             : {
        '0': 12548843,
        '1': ''
      },
      radicado         : '2017 - 00217',
      vencimientoPagare: '2020-05-26'
    },
    deudor: {
      cedula: 1030536736,
      direccion:
        'CALLE 14 Mo. 8 -04 BARRIO SAN JUAN SIBATE',
      email   : 'luis.alfonso@correo.polica.gov.co',
      nombre  : 'LUIS ALBERTO ALFONSO GIRALDO',
      telefono: 3208091862
    },
    llaveProceso: '25740418900120170021700',
    numero      : 37,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.006.640 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-06',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-06-15',
      municipio              : 'TABIO',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': '34328697321//377815467278467'
      },
      radicado         : '2017 - 00102',
      vencimientoPagare: '2020-03-19'
    },
    deudor: {
      cedula   : 39808625,
      direccion: 'CALLE 2 No. 1-24 CASA 2 TABIO',
      email    : 'hjg296@hotmail.com',
      nombre   : 'LUZ MIRYAM GUTÍERREZ MARTÍNEZ',
      telefono : 3142310966
    },
    llaveProceso: '25785418900120170010200',
    numero      : 38,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '23.090.872 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-07',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-06-13',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '1030083498/10322560611//377815447801594',
        '1': '4513074699689599//5303710402241209'
      },
      radicado         : '2017 - 00903',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 79982488,
      direccion: 'CALLE 120 No. 11 B-66 BOGOTA',
      email    : 'trujete@hotmail.com',
      nombre   : 'JORGE ALONSO TRUJILLO GÓMEZ',
      telefono:
        'F 7053290                CEL 3012746201'
    },
    llaveProceso: '11001400306520170090300',
    numero      : 39,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '19.865.254 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-07',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-13',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '4670083309 // 377813453296510',
        '1': '5303711693085438 / AUDIOPRESTAMO'
      },
      radicado         : '2017 - 00809',
      vencimientoPagare: '2021-07-22'
    },
    deudor: {
      cedula: 19173252,
      direccion:
        'CALLE 70 No. 113 b - 40  BARRIO RIVIERA ',
      email   : 'N/A',
      nombre  : 'JOSÉ ENRIQUE RIAÑO HENRIQUEZ',
      telefono: 5401243
    },
    llaveProceso: '11001400303420170080900',
    numero      : 40,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '62.998.254 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-08',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '11/08/147',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 186924,
        '1': ''
      },
      radicado         : '2017 - 01190',
      vencimientoPagare: '2020-01-02'
    },
    deudor: {
      cedula   : 52991801,
      direccion: 'CARRERA 80 D No. 7-B-83 BOGOTA',
      email    : 'karicazo@yahoo.com',
      nombre:
        'YENCY KARINA CASTIBLANCO BOHORQUEZ',
      telefono: '6050054//3103247337'
    },
    llaveProceso: '11001400303520170119000',
    numero      : 41,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '12.956.286 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-19',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-05-31',
      municipio              : 'ANAPOIMA',
      obligacion             : {
        '0': 3840082880,
        '1': 'N/A'
      },
      radicado         : '2017 - 00108',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 1072421639,
      direccion:
        'BARRIO SANTA ANA FC LA CAMPIÑA ANAPOIMA',
      email   : 'jdanielmoreno87@hotmail.com',
      nombre  : 'JUAN DANIEL MORENO CIFUENTES',
      telefono: 'CEL 3126139284'
    },
    llaveProceso: '25035408900120170010800',
    numero      : 42,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '2.078.520 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2017-06-23',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 377813731599891,
        '1': ''
      },
      radicado         : '2017 - 00882',
      vencimientoPagare: '2024-11-18'
    },
    deudor: {
      cedula: 11188351,
      direccion:
        'CARRERA 80 No. 67-41 CALLE 66 No. 113-C- 45 APTO 404 INTERIOR 4 SEVILLA REAL CONJUNTO RESIDENCIAL',
      email   : 'N/A',
      nombre  : 'JOSE FREDDY VARGAS RUIZ',
      telefono: '2520054//31240411133'
    },
    llaveProceso: '11001400301220170088200',
    numero      : 43,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '2.078.520 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-11',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 377813731599891,
        '1': ''
      },
      radicado         : '2017 - 00882',
      vencimientoPagare: '2024-11-18'
    },
    deudor: {
      cedula: 11188351,
      direccion:
        'CARRERA 80 No. 67-41 CALLE 66 No. 113-C- 45 APTO 404 INTERIOR 4 SEVILLA REAL CONJUNTO RESIDENCIAL',
      email   : 'N/A',
      nombre  : 'JOSE FREDDY VARGAS RUIZ',
      telefono: '2520054//31240411133'
    },
    llaveProceso: '11001400301220170088200',
    numero      : 44,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '11.832.595 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-06-14',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 377815134447388,
        '1': '40999835900267587//53037142299024763'
      },
      radicado         : '2017 - 00528',
      vencimientoPagare: '2020-02-02'
    },
    deudor: {
      cedula   : 4042105,
      direccion: 'SIN INFORMACION',
      email    : 'N/A',
      nombre   : 'EDISON PALMA CARDENAL ',
      telefono : 3123142449
    },
    llaveProceso: '11001400301920170052800',
    numero      : 45,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '12.537.973 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-05-19',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-05-30',
      municipio              : 'CHOCONTA',
      obligacion             : {
        '0': '5,30371393265579E+016',
        '1': 4099839496308260
      },
      radicado         : '2017-00106',
      vencimientoPagare: '18/04/20//04/05/20'
    },
    deudor: {
      cedula: 11251297,
      direccion:
        'Carrera 2B No.14-04 BARRIO VILLA ALEJANDRA CHOCONTA',
      email   : 'alvaro.r@live.com',
      nombre  : 'ALVARO RODRIGUEZ ALONSO',
      telefono: 'CEL 3166182970'
    },
    llaveProceso: '25183400300120170010600',
    numero      : 46,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '21.530.598 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'EJECUCION',
      fechaPresentacion      : '2017-06-20',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '377816034633036//45130802058774831',
        '1': 53003720132046710
      },
      radicado         : '2017-00302',
      vencimientoPagare: '2019-09-22'
    },
    deudor: {
      cedula   : 52129551,
      direccion: 'CALLE 61 J No. 17D - 55 Sur ',
      email    : 'N/A',
      nombre   : 'ANA RITA GUZMAN GOMEZ',
      telefono : 'CEL 32291500487'
    },
    llaveProceso: '11001400300620170030200',
    numero      : 47,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '28.468.389 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-09-18',
      etapaProcesal          : 1.100140030352017e22,
      fechaPresentacion:
        'TERMINO ERRADAMENTE POR PAGO TOTAL',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 12549338,
        '1': 'N/A'
      },
      radicado         : '2017 - 01425',
      vencimientoPagare: '2017-09-12'
    },
    deudor: {
      cedula: 52837630,
      direccion:
        'CARRERA  39 B No  27 A - 40 SUR ',
      email   : 'jennyadrianapt@gmail.com',
      nombre  : 'JENNY ADRIANA PATARROYO TORRES ',
      telefono: 'F 2031266'
    },
    llaveProceso: '11001400303520170142500',
    numero      : 48,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '35.031.244 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2017-06-20',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '320 149552',
        '1': ''
      },
      radicado         : '2017 - 00644',
      vencimientoPagare: '2027-03-02'
    },
    deudor: {
      cedula: 79532034,
      direccion:
        'CARRERA 77  L No. 57-H39 SUR//CARRERA 11B No. 12-68 SUR BOGOTA//  TRANSVERSAL 31 No. 28-31 Apto 103 bloque 7',
      email   : 'ramirosilva80@hotmail.com',
      nombre  : 'JOSE ISRAEL MONROY CORDOBA',
      telefono: '7824394//3165275725'
    },
    llaveProceso: '11001400305120170064400',
    numero      : 49,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '22.309.546 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion:
        '16/06/2017 // 08/06/2018',
      municipio : 'BOGOTA',
      obligacion: {
        '0': '1800088260//377813230167802',
        '1': 4513070115042991
      },
      radicado         : '2018 - 00614',
      vencimientoPagare: '2019-06-01'
    },
    deudor: {
      cedula   : 52444244,
      direccion: 'CARRERA 54 C No. 143 S-90 ',
      email    : 'gloriaaz@yahoo.com',
      nombre   : 'GLORIA ASTRID RODRÍGUEZ BAQUERO ',
      telefono : '3893349//3212062887'
    },
    llaveProceso: '11001400303420180061400',
    numero      : 50,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-23',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '6610083691//161451//3778815787383070',
        '1': '5303715153971258//4513076874137526//AUDIOPRESTAMO'
      },
      radicado         : '2017 - 00607',
      vencimientoPagare: '2017-02-21'
    },
    deudor: {
      cedula: 37549188,
      direccion:
        'CARRERA 54C No. 143-A-90//CARRERA 54C No. 143-A-90 APTO 213 TORRE 2 CONJUNTO RESIDENCIAL BARCELONA PH',
      email   : 'caromartinezvera@gmail.com',
      nombre  : 'MARIA CAROLINA MARTINEZ VERA',
      telefono: '7262316//3175921396'
    },
    llaveProceso: '11001400300920170060700',
    numero      : 51,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.302.625 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-22',
      municipio              : 'ZIPAQUIRA',
      obligacion             : {
        '0': '320 160226',
        '1': '160226//377813713927961'
      },
      radicado         : '2017 - 00256',
      vencimientoPagare: '2031-01-18'
    },
    deudor: {
      cedula: 35412591,
      direccion:
        'CARRERA 7 No. 25-51 BQ/ TO 9 APTO 104 PARQUE RESIDENCIAL VILLAZO ZIPAQUIRA',
      email   : 'N/A',
      nombre  : 'MARTHA STELLA GOMEZ BOLIVAR',
      telefono: 3114720151
    },
    llaveProceso: '25899400300220170025600',
    numero      : 52,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '97.712.903 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2017-06-21',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '320 131802',
        '1': ''
      },
      radicado         : '2017 - 00975',
      vencimientoPagare: '2025-09-01'
    },
    deudor: {
      cedula: 53051476,
      direccion:
        'calle 64 No. 85-60 INTERIOR 1 LOTE 19 MANZANA 36 URBANIZACION LA ISABELA  ETAPA IIcalle 64 I No. 86-60 ',
      email   : 'dimarce1513@hotmail.com',
      nombre  : 'DIANA MARCELA SANCHEZ LOZANO',
      telefono: '2241552//3212307798'
    },
    llaveProceso: '11001400308520170097500',
    numero      : 53,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '18.400.665 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-21',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 320095437,
        '1': ''
      },
      radicado         : '2017 - 01138',
      vencimientoPagare: '2022-04-02'
    },
    deudor: {
      cedula: 38261511,
      direccion:
        'CARRERA 87D No. 48-03 SUR//DIAGONAL 49 No. 85-79 SUR TORRE 10 APARTAMENTO 2',
      email   : 'olgagallego63@hotmail.com',
      nombre  : 'OLGA GALLEGO',
      telefono: '7385452/3138615288'
    },
    llaveProceso: '11001400306420170113800',
    numero      : 54,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '35.544.456 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-06-20',
      municipio              : 'MADRID',
      obligacion             : {
        '0': '3830084858//4090832249783283',
        '1': 'AUTOPRESTAMO'
      },
      radicado         : '2017 - 01087',
      vencimientoPagare: '2018-03-06'
    },
    deudor: {
      cedula: 80353430,
      direccion:
        'CALLE 11 A No. 3-29 URBANIZACION EL PORVENIR MADRID',
      email   : 'faride1109@yahoo.com',
      nombre  : 'DOUGLAS AYURE RIOS ',
      telefono: '8252559//3124488945'
    },
    llaveProceso: '25430400300120170108700',
    numero      : 55,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '116.728.485 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 1.100140030272014e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '2273 320157242',
        '1': 'N/A'
      },
      radicado         : '2014 - 00703',
      vencimientoPagare: '2022-10-19'
    },
    deudor: {
      cedula: 52039387,
      direccion:
        'DIAGONAL 62 C No. 19-C-12 ACACIA SAN',
      email : 'gladys12357@hotmail.com',
      nombre: 'GLADYS HERNANDEZ LOPEZ ',
      telefono:
        'F 7900454              CEL 3138551970'
    },
    llaveProceso: '11001400302720140070300',
    numero      : 56,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '28.250.394 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-15',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '710084822//377813215734547',
        '1': '4513072329336110//5303713387599294'
      },
      radicado         : '2017 - 00512',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 39556705,
      direccion:
        'AVDA 80 No. 60-95  RIO INTERIOR 3 APTO 11',
      email   : 'ceciliaaponte@hotmail.com',
      nombre  : 'CARMEN CECILIA APONTE ZAMBRANO ',
      telefono: '7500346//3102279518'
    },
    llaveProceso: '11001400302820170051200',
    numero      : 57,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '96.125.453 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-08',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-06-13',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '5820083643//377816164971529',
        '1': '4513080225477441//5303720124048311'
      },
      radicado         : '2017-00760',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 14273737,
      direccion: 'CALLE 23 D No.107-32 BOGOTA',
      email    : 'lejopaerez@hotmail.com',
      nombre   : 'JOSÉ URIEL PAEREZ PERDOMO',
      telefono:
        'F 4183276               CEL 3228293322'
    },
    llaveProceso: '11001400304220170076000',
    numero      : 58,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.847.942 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-19',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-09-26',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 490098936,
        '1': ''
      },
      radicado         : '2017 - 01064',
      vencimientoPagare: '2017-10-04'
    },
    deudor: {
      cedula   : 52341348,
      direccion: 'CALLE 70 C No 105 H - 06',
      email    : 'nancyta1905@hotmail.com',
      nombre   : 'NANCY RODRIGUEZ  GOMEZ',
      telefono : '6977403 / 3103161197'
    },
    llaveProceso: '11001400302520170106400',
    numero      : 59,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '42.898 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-09-18',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': 35987412
      },
      radicado         : '2017 - 00901',
      vencimientoPagare: 12438741
    },
    deudor: {
      cedula   : 1032373332,
      direccion: '',
      email    : 'CRA 77 A No. 63f-47 piso 2',
      nombre   : 'LADY JOHANNA BAYONA GARCÍA  ',
      telefono : 'lady.bayona@Ifgcolombia.com'
    },
    llaveProceso: '11001400302020170090100',
    numero      : 60,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '21.493.086 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-16',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12653060,
        '1': '377813471593666//5303720056388123'
      },
      radicado         : '2017 - 00557',
      vencimientoPagare: '2017-11-04'
    },
    deudor: {
      cedula   : 80197126,
      direccion: 'CALLE 165 No. 74 C-07 CASA 1',
      email    : 'arqrasjuan1989@htmail.com',
      nombre   : 'JUAN PABLO RUBIO ESGUERRA',
      telefono : 8000178
    },
    llaveProceso: '11001400304620170055700',
    numero      : 61,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.445.371 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-06-21',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '320 093516',
        '1': ''
      },
      radicado         : '2017 - 00537',
      vencimientoPagare: '2022-01-31'
    },
    deudor: {
      cedula: 80722943,
      direccion:
        'DIAGONAL 60 SUR NO. 28-I 72 INTERIOR 3 APTO 204',
      email   : ' ',
      nombre  : 'LUIS EDUARDO CARRANZA BUSTOS',
      telefono: '7417183//3138253554'
    },
    llaveProceso: '11001400306320180016800',
    numero      : 62,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '600.721 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-09-06',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-19',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 145608,
        '1': ''
      },
      radicado         : '2017 - 00089',
      vencimientoPagare: '2021-11-18'
    },
    deudor: {
      cedula   : 1022943195,
      direccion: 'CALLE 72B BIS No 5A 22 SUR',
      email    : 'marcelaipuzsuarez@hotmail.com',
      nombre   : 'DIANA MARCELA IPUZ SUAREZ',
      telefono : '7493169 / 7672067'
    },
    llaveProceso: '11001418900920170008900',
    numero      : 63,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Insolvencia',
    demanda : {
      capitalAdeudado        : '32.926.699 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 1.100140030292017e22,
      fechaPresentacion:
        'PROCESO DE REESTRUCTURACION SUPER SOCIEDADES',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 125348220,
        '1': 'N/A'
      },
      radicado         : '2017 - 00557',
      vencimientoPagare: '2017-10-22'
    },
    deudor: {
      cedula: 79891952,
      direccion:
        'CARRERA 13 A No. 150-25 INT 3 APTO 203',
      email : 'rafael.cadena@signsas.com',
      nombre: 'RAFAEL ERNESTO CADENA PARGA',
      telefono:
        'F 3157900              CEL 3157900006'
    },
    llaveProceso: '11001400302920170055700',
    numero      : 64,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '50.511.309 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 1.100140030202017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12730628,
        '1': 'N/A'
      },
      radicado         : '2017 - 00776',
      vencimientoPagare: '2019-12-19'
    },
    deudor: {
      cedula   : 79276611,
      direccion: 'CALLE 70 SUR No. 3-23',
      email    : 'ernes_Idar2021@hotmail.com',
      nombre   : 'ERNESTO AUGUSTO IDARRAGA QUINTERO',
      telefono : 'F 7615662'
    },
    llaveProceso: '11001400302020170077600',
    numero      : 65,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.845.011 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-07-21',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12525003,
        '1': ''
      },
      radicado         : '2017 - 00702',
      vencimientoPagare: '2018-10-08'
    },
    deudor: {
      cedula   : 66841096,
      direccion: 'CARRERA 22 No. 161-26 PISO 2',
      email    : 'sansuarez.ga@gmail.com',
      nombre   : 'SANDRA PATRICIA SUAREZ GALVIS',
      telefono : '8017389//3144113614'
    },
    llaveProceso: '11001400301920170070200',
    numero      : 66,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '173.618.623 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 1.10014003047201e50,
      fechaPresentacion      : 'SENTENCIA',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '5303716461821906//5306948999859317//12611392',
        '1': '4513072520491185//0377815106380054//12496791'
      },
      radicado         : '2017 - 00360',
      vencimientoPagare: '2018-06-23'
    },
    deudor: {
      cedula   : 78076295,
      direccion: 'cl 106 No. 50-21 BOGOTA',
      email    : 'havena@ingeobrasas.com',
      nombre   : 'HUMBERTO ENRIQUE AVENA CORRALES',
      telefono : '6215383//3005146155'
    },
    llaveProceso: '11001310301720170036000',
    numero      : 67,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.302.625 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-22',
      municipio              : 'ZIPAQUIRA',
      obligacion             : {
        '0': '320 160226',
        '1': '160226//377813713927961'
      },
      radicado         : '2017 - 00270',
      vencimientoPagare: '2031-01-18'
    },
    deudor: {
      cedula: 35412591,
      direccion:
        'CARRERA 7 No. 25-51 BQ/ TO 9 APTO 104 PARQUE RESIDENCIAL VILLAZO ZIPAQUIRA',
      email   : 'N/A',
      nombre  : 'MARTHA STELLA GOMEZ BOLIVAR',
      telefono: 3114720151
    },
    llaveProceso: '25899400300220170027000',
    numero      : 68,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '83.955.014 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-08',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '13/06/2017//21/07/17',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4200023595,
        '1': 'N/A'
      },
      radicado         : '2017-00419',
      vencimientoPagare: '2019-08-12'
    },
    deudor: {
      cedula   : 53008703,
      direccion: 'CARRERA 5 No. 30 - 77',
      email    : 'N/A',
      nombre   : 'DERLY CATHERINE CASTRO IZQUIERDO',
      telefono : 'F 7507842 2856110'
    },
    llaveProceso: '11001400300620170041900',
    numero      : 69,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '74.069.982 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 1.1001400308520171e22,
      fechaPresentacion      : 'SENTENCIA',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12587175,
        '1': 'N/A'
      },
      radicado         : '2017 - 01084',
      vencimientoPagare: '2017-06-07'
    },
    deudor: {
      cedula   : 14250539,
      direccion: 'CALLE 54 # 22 - 50 ',
      email    : 'ariascesaraugustoarias@gmail.com',
      nombre   : 'CESAR AUGUSTO ARIAS',
      telefono : 'CEL 3152248920'
    },
    llaveProceso: '11001400308520170108400',
    numero      : 70,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '24.193.522 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 1.100140030472017e22,
      fechaPresentacion      : 'NOTIFICACION',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12615209,
        '1': ''
      },
      radicado         : '2017 - 01065',
      vencimientoPagare: '2017-06-07'
    },
    deudor: {
      cedula   : 53015307,
      direccion: 'CL 146A # 53A - 10 APT 102',
      email    : 'stephanytorresrojas@gmail.com',
      nombre   : 'BETTY STEPHANI TORRES ROJAS',
      telefono : 2590618
    },
    llaveProceso: '11001400304720170106500',
    numero      : 71,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-12',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-06-16',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2474005,
        '1': ''
      },
      radicado         : '2017 - 01241',
      vencimientoPagare: '2017-06-07'
    },
    deudor: {
      cedula   : 1030545462,
      direccion: 'CARRERA 88 # 26 - 68',
      email    : '1988fac@gmail.com',
      nombre   : 'NESTOR FABIAN ESPITIA FRAILE',
      telefono : ''
    },
    llaveProceso: '11001400306020170124100',
    numero      : 72,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '78.297.335 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 1.100140030042017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12537545,
        '1': 'N/A'
      },
      radicado         : '2017 - 00575',
      vencimientoPagare: '2018-08-27'
    },
    deudor: {
      cedula: 31877993,
      direccion:
        'CARRERA 55 A No. 165-27 int 7 apto 102',
      email   : 'mrocha@hotmail.com',
      nombre  : 'SONIA MAZUERA ',
      telefono: 'F 2333333 4432706'
    },
    llaveProceso: '11001400300420170057500',
    numero      : 73,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '44.110.828 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-15',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12185017,
        '1': ''
      },
      radicado         : '2017 - 00507',
      vencimientoPagare: '2017-06-07'
    },
    deudor: {
      cedula   : 79789620,
      direccion: 'CARRERA 18 # 120 - 65 APTO 306',
      email    : 'carlosborray@gmail.com',
      nombre   : 'CARLOS ANDRÉS BORRAY ARCE',
      telefono : 3138327713
    },
    llaveProceso: '11001400304820170050700',
    numero      : 74,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-12-31',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 44690,
        '1': '320 096597'
      },
      radicado: '2017 - 00918',
      vencimientoPagare:
        'CALLE 8 C No. 92-72 casa 20 conjunto residencial ciudad tital ph'
    },
    deudor: {
      cedula   : 80792132,
      direccion: 'marioabc_83@hotmail.com',
      email    : '44955363/31249909451',
      nombre   : 'MARIO ANDRES BOJACA CRUZ',
      telefono : ''
    },
    llaveProceso: '11001400305820170091800',
    numero      : 75,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '17.517.434 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 2.518340030012017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'CHOCONTA',
      obligacion             : {
        '0': 2660080368,
        '1': 'N/A'
      },
      radicado         : '2017 - 00119',
      vencimientoPagare: '2019-07-21'
    },
    deudor: {
      cedula   : 20493423,
      direccion: 'CALLE 8 # 2 - 32 CHOCONTA',
      email    : 'stellamarin23@hotmail.com',
      nombre   : 'ESTELA MARIN GARZÓN',
      telefono : 'CEL 3112110025'
    },
    llaveProceso: '25183400300120170011900',
    numero      : 76,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '19.693.963 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 2.575440030012017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': '320 157362',
        '1': '157362//377813499486349'
      },
      radicado         : '2017 - 00837',
      vencimientoPagare: '2027-10-24'
    },
    deudor: {
      cedula: 1030554218,
      direccion:
        'CALLE 16 A No. 44-C-S.28 MANZANA 6 ET 1 SOACHA',
      email : 'carito_abril3@hotmail.com',
      nombre: 'JEIMY CAROLINA LEGUIZAMON VASQUEZ',
      telefono:
        'F 5663711              CEL 3174386730'
    },
    llaveProceso: '25754418900120170083700',
    numero      : 77,
    tipoProceso : 'ACUMULADO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '11.590.469 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2017-06-20',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 5303729451744848,
        '1': '0377816394649010'
      },
      radicado         : '2017 - 01231',
      vencimientoPagare: '05/07/2016 // 16/04/16'
    },
    deudor: {
      cedula: 7711481,
      direccion:
        'CALLE 44D # 45 - 45 APTO 904 INT 7U',
      email   : 'santosjaime07@yahoo.es',
      nombre  : 'JAIME EDISON SANTOS MARTIN',
      telefono: 3158939957
    },
    llaveProceso: '11001400306420170123100',
    numero      : 78,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '23.640.676 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 1.100140030332017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 3890084585,
        '1': 'N/A'
      },
      radicado         : '2017 - 00892',
      vencimientoPagare: '2020-08-04'
    },
    deudor: {
      cedula: 38289111,
      direccion:
        'DIAGONAL 2 # 64A - 65 INT 1 APTO 401 ',
      email   : 'ccctina0218@gmail.com',
      nombre  : 'CRISTINA CASTAÑO CASTILLO',
      telefono: 'F 2653927'
    },
    llaveProceso: '11001400303320170089200',
    numero      : 79,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.208.319 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 2.581740890012017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'TOCANCIPA',
      obligacion             : {
        '0': 377816861734105,
        '1': 'N/A'
      },
      radicado         : '2017 - 00351',
      vencimientoPagare: '2019-09-01'
    },
    deudor: {
      cedula   : 79882688,
      direccion: 'CALLE 11 # 4 - 39 TOCANCIPA',
      email    : 'joranpo@hotmail.com',
      nombre   : 'JORGE ANDRES PORRAS VARGAS',
      telefono : 'F 8785890'
    },
    llaveProceso: '25817418900120170035100',
    numero      : 80,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '17.337.417 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-12-06',
      etapaProcesal          : 1.100140030362017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 1680096092,
        '1': 'N/A'
      },
      radicado         : '2017 - 00554',
      vencimientoPagare: '2018-10-26'
    },
    deudor: {
      cedula: 900789612,
      direccion:
        'CARRERA 7 # 171A - 14 LA CALERA',
      email: 'N/A',
      nombre:
        'DS&D SOLUCIONES CONSTRUCTIVAS S.A.S.',
      telefono: 'F 6721931'
    },
    llaveProceso: '11001400303620170055400',
    numero      : 81,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '39.576.493 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-20',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 1980094471,
        '1': ''
      },
      radicado         : '2017 - 01065',
      vencimientoPagare: '2018-08-27'
    },
    deudor: {
      cedula   : 13921619,
      direccion: 'CALLE 89 # 95G- 26',
      email    : 'N/A',
      nombre   : 'RAFAEL GONZALEZ OLEJUA',
      telefono : 311284993
    },
    llaveProceso: '11001400300320170106500',
    numero      : 82,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '14.272.971 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-22',
      etapaProcesal          : 1.100140030192017e22,
      fechaPresentacion:
        'EL 4 DE ABRIL DE 2019 SE DEVOLVIERON GARANTIAS A AECSA S.A. // EL 27/03/2019 SE RADICO EN EL SIM OFICIO DE LEVANTAMIENTO DE MEDIDA CAUTELAR DE EMBARGO SOBRE VEHICULO // EL 26 DE ABRIL DE 2019 SE ARCHIVO EL PROCESO EN LA CAJA 631 EL 19 DE MARZO 2019',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 12436479,
        '1': ''
      },
      radicado         : '2017 - 01025',
      vencimientoPagare: '2017-09-20'
    },
    deudor: {
      cedula   : 19438068,
      direccion: 'CARRERA 29 No 12  A - 46  ',
      email    : 'luisadopa@gmail.com',
      nombre   : 'LUIS ADOLFO PEÑA ARCINIEGAS ',
      telefono : '2478114 /3115672367'
    },
    llaveProceso: '11001400301920170102500',
    numero      : 83,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '12.128.189 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-06-14',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 377815178176828,
        '1': 53037234659826290
      },
      radicado         : '2017-00800',
      vencimientoPagare: '2019-11-05'
    },
    deudor: {
      cedula: 79108747,
      direccion:
        'CARRERA 17 A No. 175-82 INTERIOR 1 PTO 601',
      email : 'edgarH62@hotmail.com',
      nombre: 'EDGAR HERNANDEZ RUBIO',
      telefono:
        'F 8054434               CEL 3118802970'
    },
    llaveProceso: '11001400303920170080000',
    numero      : 84,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '24.227.539 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-06-20',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 6820082421,
        '1': '377815190381158 // 530371010816'
      },
      radicado         : '2017 - 00834',
      vencimientoPagare: '2020-04-10'
    },
    deudor: {
      cedula: 39673896,
      direccion:
        'CALLE 143 # 118 - 15 APTO 503 INT 2 ',
      email   : 'sma9511@hotmail.com',
      nombre  : 'SANDRA PATRICIA MALAVER ALVAREZ',
      telefono: 7466151
    },
    llaveProceso: '11001400303420170083400',
    numero      : 85,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '=9507489+8124537',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-06-14',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2250084171,
        '1': 'N/A'
      },
      radicado         : '2017-00567',
      vencimientoPagare: '2018-11-11'
    },
    deudor: {
      cedula: 1087781966,
      direccion:
        'CARRERA 73 A BIS No. 2 A-32 SUR BOGOTA',
      email   : 'mezaronald@yahoo.com',
      nombre  : 'RHONALD MEZA TARAPUES ',
      telefono: 'F 4062925  7496611'
    },
    llaveProceso: '11001400302220170056700',
    numero      : 86,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '11.777.235 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-20',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2150091074,
        '1': ''
      },
      radicado         : '2017 - 00561',
      vencimientoPagare: '2018-04-20'
    },
    deudor: {
      cedula   : 4198210,
      direccion: 'CALLE 39 I # 72F - 53 SUR ',
      email    : 'omar690501@hotmail.com',
      nombre   : 'OMAR ESPITIA REYES',
      telefono : 7109935
    },
    llaveProceso: '11001400304620170056100',
    numero      : 87,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-20',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12488415,
        '1': ''
      },
      radicado         : '2017 - 00528',
      vencimientoPagare: '2018-07-01'
    },
    deudor: {
      cedula   : 51890871,
      direccion: 'calle 6 No. 4-07 BOGOTA',
      email    : 'lasmi40@hotmail.com',
      nombre   : 'IDALY FERRO CARDONA',
      telefono : '7779254//3103126814'
    },
    llaveProceso: '1100140030820170052800',
    numero      : 88,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '8.451.598 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion:
        '21/07/2017 // 18/09/2017',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 12431049,
        '1': ''
      },
      radicado         : '2017 - 00615',
      vencimientoPagare: '2017-06-09'
    },
    deudor: {
      cedula   : 1030551366,
      direccion: 'CARRERA 78P BIS # 33A - 91 SUR',
      email    : 'jvargas88@hotmail.com',
      nombre   : 'JULIAN ARMANDO ACOSTA RODRIGUEZ',
      telefono : 4815285
    },
    llaveProceso: '11001400306520170093400',
    numero      : 89,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '26.515.333 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '1899-12-30',
      etapaProcesal          : 'EJECUCION',
      fechaPresentacion      : '2017-06-20',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12330030,
        '1': 'N/A'
      },
      radicado         : '2017 - 00836',
      vencimientoPagare: '2020-06-09'
    },
    deudor: {
      cedula   : 1032432802,
      direccion: 'CARRERA 95 # 138 - 58',
      email    : 'orduzcrit2@hotmail.com',
      nombre   : 'LUIS ESNEIDER ORDUZ FARFAN ',
      telefono : 'F 4712921'
    },
    llaveProceso: '11001400303420170083600',
    numero      : 90,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-12-31',
      etapaProcesal          : '2018 - 00406',
      fechaPresentacion      : 1.100140030142018e22,
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '05/04/2018 15/01/2021',
        '1': 2500083807
      },
      radicado         : '2018 - 00406',
      vencimientoPagare: 'N/A'
    },
    deudor: {
      cedula   : 79456791,
      direccion: 'jaime.precco@gmail.com',
      email:
        'F3554893              CEL 3165211980',
      nombre  : 'JAIME JESUS REYES OROZCO',
      telefono: 'JAIME JESUS REYES OROZCO'
    },
    llaveProceso: '11001400303120180040600',
    numero      : 91,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '20.568.241 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 1.100140030132017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 11875034,
        '1': 5406915515196620
      },
      radicado         : '2017 - 00841',
      vencimientoPagare: '9/06/2020'
    },
    deudor: {
      cedula   : 52214536,
      direccion: 'CARRERA 40A # 1H - 06',
      email    : 'magda-mile@hotmail.com',
      nombre   : 'MAGDA MILENA SALINAS RODRIGUEZ ',
      telefono : 'F 8142058'
    },
    llaveProceso: '11001400301320170084100',
    numero      : 92,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '37.074.975 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-28',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-20',
      municipio              : 'CAJICA',
      obligacion             : {
        '0': 166689,
        '1': ''
      },
      radicado         : '2017 - 00496',
      vencimientoPagare: '2031-08-06'
    },
    deudor: {
      cedula: 1140835529,
      direccion:
        'CALLE 133 # 53 - 365CJ LOMAS DE (BARRANQUILLA)',
      email   : 'vivibruges@hotmail.com',
      nombre  : 'VIVIAN PAOLA BRUGES MEDINA',
      telefono: 3599167
    },
    llaveProceso: '25126408900120170049600',
    numero      : 93,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '95.244.711 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-28',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-29',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 177994,
        '1': ''
      },
      radicado         : '2017 - 00591',
      vencimientoPagare: '2034-10-09'
    },
    deudor: {
      cedula   : 1030527169,
      direccion: 'CARRERA 70C # 1A - 86 SUR ',
      email    : 'o',
      nombre   : 'AIDA YURANI GRIJALBA MARTINEZ',
      telefono : 2607867
    },
    llaveProceso: '11001400305620170059100',
    numero      : 94,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '19.146.744 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-28',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-29',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12099135,
        '1': ''
      },
      radicado         : '2017 - 00575',
      vencimientoPagare: '2017-06-13'
    },
    deudor: {
      cedula   : 1015410386,
      direccion: 'CARRERA 40B # 1 - 61 ',
      email    : 'edwinperez8302@hotmail.com',
      nombre   : 'EDWIN JHOBANI PEREZ PITA',
      telefono : 4758582
    },
    llaveProceso: '11001400302820170057500',
    numero      : 95,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '46.027.552 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-28',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-29',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 160742,
        '1': 377815863029282
      },
      radicado         : '2017 - 00871',
      vencimientoPagare: '2033-01-30'
    },
    deudor: {
      cedula   : 52818959,
      direccion: 'CARRERA 72 # 57B - 50 ',
      email    : 'bluemoontauro@hotmail.com',
      nombre   : 'YURANNY POLANCO CESPEDES',
      telefono : 4638445
    },
    llaveProceso: '11001400305320170087100',
    numero      : 96,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '79.862.886 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-09-20',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990137187,
        '1': ''
      },
      radicado         : '2016 - 00319',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 19270589,
      direccion:
        'CALLE 52 A BIS  No 35 B 41 SUR ',
      email   : 'conjuexeu@hotmail.com',
      nombre  : 'JOSE ALFREDO RIAÑO MALDONADO',
      telefono: 2388711
    },
    llaveProceso: '11001400308520160031900',
    numero      : 97,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-28',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-29',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 190459,
        '1': ''
      },
      radicado         : '2017 - 00623',
      vencimientoPagare: '2030-01-25'
    },
    deudor: {
      cedula   : 41672170,
      direccion: 'CARRERA 50A # 68 - 39 ',
      email    : 'carmenzachaparro@outlook.com',
      nombre   : 'MARIA DEL CARMEN CHAPARRO LEMUS',
      telefono : 2501908
    },
    llaveProceso: '11001400301120170062300',
    numero      : 98,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.215.928 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-28',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : ' 08/08/17',
      municipio              : 'KENNEDY',
      obligacion             : {
        '0': 5306934855078754,
        '1': 12378896
      },
      radicado         : '2017 - 01110',
      vencimientoPagare: '13/062017'
    },
    deudor: {
      cedula   : 79996551,
      direccion: 'TRANSVERSAL 78A # 71A - 71 SUR',
      email    : 'N/A',
      nombre   : 'YONI ALEXANDER RESTREPO PEÑUELA',
      telefono : 7754676
    },
    llaveProceso: '1100141037512017111000',
    numero      : 99,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '17.280.117 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-28',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-29',
      municipio              : 'MADRID',
      obligacion             : {
        '0': 377813893568486,
        '1': 12484407
      },
      radicado         : '2017 - 00684',
      vencimientoPagare: '2017-06-13'
    },
    deudor: {
      cedula   : 80430881,
      direccion: 'CALLE 8 # 1 - 92E MADRID',
      email    : 'jojaro07@hotmail.com',
      nombre   : 'JHON JAIRO RUBIO ORTIZ',
      telefono : 3143190799
    },
    llaveProceso: '25430418900120170068400',
    numero      : 100,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '54.468.401 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-28',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-06-29',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12545412,
        '1': ''
      },
      radicado         : '2017 - 00653',
      vencimientoPagare: '2017-06-13'
    },
    deudor: {
      cedula   : 57452535,
      direccion: 'CALLE 102 # 15 - 58 APTO 204',
      email    : 'lei.m@hotmail.com',
      nombre   : 'LEILA JOHANNA MARTINEZ MORA',
      telefono : 3004975278
    },
    llaveProceso: '11001400301020170065301',
    numero      : 101,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '50.000.000 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion:
        '15/06/2017 // 29/08/2017',
      municipio : 'MESITAS',
      obligacion: {
        '0': 7300080586,
        '1': 'N/A'
      },
      radicado         : '2017-00239',
      vencimientoPagare: '2019-07-05'
    },
    deudor: {
      cedula   : 1070329396,
      direccion: 'CALL 2 No. 8-40 EL COLEGIO',
      email    : 'N/A',
      nombre   : 'ERIKA ALEJANDRA QUINTERO REYES',
      telefono : 'CEL 3114456631'
    },
    llaveProceso: '25245408900120170023900',
    numero      : 102,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '43.921.469 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-06-16',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '1800088189//377813488630162',
        '1': '4513071987853655//5303715363121332'
      },
      radicado         : '2017-00680',
      vencimientoPagare: '2019-05-13'
    },
    deudor: {
      cedula   : 16831314,
      direccion: 'CARRERA 74 No. 25 G-69',
      email    : 'kikearango@hotmail.com',
      nombre   : 'EDUARDO ENRIQUE ARANGO CHACON',
      telefono : 'CEL 3216066052'
    },
    llaveProceso: '11001400308220170068000',
    numero      : 103,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '3.244.441 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-07-19',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-07-21',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 127061,
        '1': 540084358
      },
      radicado         : '2017 - 00417',
      vencimientoPagare: '2015-08-28'
    },
    deudor: {
      cedula: 51922135,
      direccion:
        'CARRERA 73 No. 87-07 APARTAMENTO 211 TORRE 6',
      email   : 'nancy_herrera2@hotmail.es',
      nombre  : 'NANCY HERRERA MENDEZ',
      telefono: '7573897//3103230563'
    },
    llaveProceso: '11001400300620170041700',
    numero      : 104,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.688.162 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-07-19',
      etapaProcesal          : '',
      fechaPresentacion      : 'ADMISION',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 5850082368,
        '1': ''
      },
      radicado         : '2017 - 01113',
      vencimientoPagare: '2020-04-27'
    },
    deudor: {
      cedula   : 15319344,
      direccion: 'CALLE 42 A BIS SUR No. 90A -64',
      email    : 'N/A',
      nombre   : 'ESTELIO DE JESUS  ROLDAN POZO',
      telefono : 3133809713
    },
    llaveProceso: '11001400300720170111300',
    numero      : 105,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '16.497.281 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-06-16',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12515504,
        '1': 'N/A'
      },
      radicado         : '2017 - 00483',
      vencimientoPagare: '2018-08-28'
    },
    deudor: {
      cedula   : 501492,
      direccion: 'CALLE 134 No. 58-58 ',
      email    : 'danielher84@gmail.com',
      nombre   : 'DANIEL HERNANDEZ GONZALEZ',
      telefono : 'F 2716567'
    },
    llaveProceso: '11001400305920170048300',
    numero      : 106,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.303.855 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-08',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 6900084281,
        '1': '4513070458359200 // AUDIOPRESTAMO'
      },
      radicado         : '2017 - 00790',
      vencimientoPagare: '2016-01-29'
    },
    deudor: {
      cedula: 80112954,
      direccion:
        'DIAGONAL 52 B SUER # 5C - 20 ESTE ',
      email   : 'efrain.martinez.1021@hotmail.com',
      nombre  : 'HANYELO EFRAIN MARTINEZ TURRIAGO',
      telefono: '5936306 // 3176550987'
    },
    llaveProceso: '11001400305720170079000',
    numero      : 107,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '211.610.991 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-06-20',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12455661,
        '1': '12657330//12748966'
      },
      radicado         : '2017 - 00736',
      vencimientoPagare: '2020-06-07'
    },
    deudor: {
      cedula   : 79558732,
      direccion: 'TRANVERSAL 15A # 31-09 SUR',
      email    : 'miguelangelhuertasv@hotmail.com',
      nombre   : 'MIGUEL ANGEL HUERTAS VALENCIA',
      telefono : 'F 2723136'
    },
    llaveProceso: '11001310302520170073600',
    numero      : 108,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '21.660.562 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-08',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12491571,
        '1': ''
      },
      radicado         : '2018 - 00119',
      vencimientoPagare: '2017-07-26'
    },
    deudor: {
      cedula   : 1018428090,
      direccion: 'CARRERA 3 D # 32A - 69 SUR ',
      email    : 'oscar.agudelo@crcom.gov.co',
      nombre   : 'OSCAR IVAN AGUDELO MORA',
      telefono : 3045449490
    },
    llaveProceso: '11001400302420180011900',
    numero      : 109,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '25.119.879 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 1.100140030452017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 430103643,
        '1': 'N/A'
      },
      radicado         : '2017 - 00774',
      vencimientoPagare: '2019-07-18'
    },
    deudor: {
      cedula   : 46677093,
      direccion: 'CALLE 33 SUR No. 82 B-06',
      email    : 'N/A',
      nombre   : 'MARLENE RONCANCIO BENITEZ',
      telefono : 'F 5710351'
    },
    llaveProceso: '11001400304520170077400',
    numero      : 110,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.433.690 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-08-08',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12156526,
        '1': ''
      },
      radicado         : '2017 - 00712',
      vencimientoPagare: '2017-07-26'
    },
    deudor: {
      cedula   : 1020743892,
      direccion: 'CALLE 141 # 7B - 50 APTO 501',
      email    : 'karenvivicastano@gmail.com',
      nombre   : 'KAREN VIVIANA CASTAÑO CORONADO',
      telefono : '2131545 // 3014347540'
    },
    llaveProceso: '11001400305420170071200',
    numero      : 111,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '98.478.181 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01',
      etapaProcesal          : 1.100140030202017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4513070463579430,
        '1': '5303710149625331//12716727'
      },
      radicado         : '2017 - 00974',
      vencimientoPagare: '26/07/2020 // 3/07/2020'
    },
    deudor: {
      cedula   : 23993605,
      direccion: 'CARRERA 129 # 131 - 03',
      email    : 'N/A',
      nombre   : 'MARIA TRINIDAD SOTELO TORRES',
      telefono:
        'F 5399415              CEL 3124740888'
    },
    llaveProceso: '11001400302020170097400',
    numero      : 112,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.305.609 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01',
      etapaProcesal          : 1.100140030302017e22,
      fechaPresentacion      : 'LIQUIDACION',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 860669,
        '1': ''
      },
      radicado         : '2017 - 01817',
      vencimientoPagare: '2021-05-16'
    },
    deudor: {
      cedula   : 53178044,
      direccion: 'CALLE 153 # 97B - 30 CASA ALTA',
      email    : 'bibi0225@hotmail.es',
      nombre   : 'SANDRA BIBIANA URREGO MAYORGA',
      telefono : '6210512 // 3167289932'
    },
    llaveProceso: '11001400303020170181700',
    numero      : 113,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '20.501.855 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-11',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': '377813527966924/',
        '1': '000000020990112484.'
      },
      radicado         : '2017 - 00752',
      vencimientoPagare: '2023-11-15'
    },
    deudor: {
      cedula   : 79209455,
      direccion: 'CALLE 11 # 52A - 14 SOACHA',
      email    : 'antoniocaicedo1972@gmail.com',
      nombre   : 'JOSE ANTONIO CAICEDO RUIZ',
      telefono : '3213173 // 3128067314'
    },
    llaveProceso: '25754418900220170075200',
    numero      : 114,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '17.831.989 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-08',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 129471,
        '1': ''
      },
      radicado         : '2017 - 00809',
      vencimientoPagare: '2025-06-17'
    },
    deudor: {
      cedula   : 52174728,
      direccion: 'CARRERA 80 # 41G - 09 SUR ',
      email    : 'jucana92@hotmail.com',
      nombre   : 'SILVIA MARIA VALENZUELA VELASQUEZ',
      telefono : '5741561 // 3212344417'
    },
    llaveProceso: '11001400305220170080900',
    numero      : 115,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '18.077.141 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-08',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12001404,
        '1': '4513070579287120.'
      },
      radicado         : '2017 - 00830',
      vencimientoPagare: '2017-07-26'
    },
    deudor: {
      cedula: 52548162,
      direccion:
        'CARRERA 51A # 127 - 75 APTO 1102 ',
      email   : 'karinamantilla@hotmail.com',
      nombre  : 'ANA KARINA MANTILLA PARDO',
      telefono: '3579028 // 3164355892'
    },
    llaveProceso: '11001400301020170083000',
    numero      : 116,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '17.256.863 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-06-20',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 420087224,
        '1': 'N/A'
      },
      radicado         : '2017 - 00566',
      vencimientoPagare: '2019-01-21'
    },
    deudor: {
      cedula: 19386444,
      direccion:
        'CALLE 18 # 19 - 75 / CALLE 26 NTE No. 5A - 54 Cali - Valle //CR 60 D 97 85 BRR ANDES BOGOTA',
      email   : 3176677592,
      nombre  : 'NICOLAS FERNANDO MONTOYA CORREA',
      telefono: 'F 2531962'
    },
    llaveProceso: '11001400307020170056600',
    numero      : 117,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '1.092.045 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-04',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-08-11',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 37813676080923,
        '1': 20990093604
      },
      radicado         : '2017 - 01456',
      vencimientoPagare: '2022-02-02'
    },
    deudor: {
      cedula: 19308014,
      direccion:
        'TRANSVERSAL 119 # 151A - 51 TORRE 11 APTO 602',
      email   : 'plangeluchis@gmail.com',
      nombre  : 'JAIME ORLANDO PEÑA ROJAS',
      telefono: '5353320// 3103358755'
    },
    llaveProceso: '11001400305320170145600',
    numero      : 118,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '20.987.589 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-04',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-11',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 450087082,
        '1': ''
      },
      radicado         : '2017 - 00988',
      vencimientoPagare: '2019-05-13'
    },
    deudor: {
      cedula: 79693495,
      direccion:
        'DIAGONAL 2A SUER # 78L - 81 APTO 501B',
      email   : 'carolcecesar@gmail.com',
      nombre  : 'CESAR AUGUSTO GIL GALLEGO',
      telefono: '4610722 // 3103789233'
    },
    llaveProceso: '11001400301420170098800',
    numero      : 119,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '13.906.249 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-04',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-08-11',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 6240082776,
        '1': 'N/A'
      },
      radicado         : '2017 - 00755',
      vencimientoPagare: '2021-04-12'
    },
    deudor: {
      cedula   : 900212673,
      direccion: 'CARRERA 3 # 29A - 02 ',
      email    : 'N/A',
      nombre   : 'JENCELL E.U.',
      telefono : 'F 5753416'
    },
    llaveProceso: '25754418900320170075500',
    numero      : 120,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '55.929.373 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-04',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-11',
      municipio              : 'MADRID',
      obligacion             : {
        '0': '451305630938242.',
        '1': '20990179915 // AUDIOPRESTAMO '
      },
      radicado         : '2018 - 00273',
      vencimientoPagare: '2029-12-26'
    },
    deudor: {
      cedula   : 19453362,
      direccion: 'CARRERA 22 A # 8D - 08 SUR',
      email    : 'orlandolugo.r@gmail.com',
      nombre   : 'JAIME ORLANDO LUGO RODRIGUEZ',
      telefono : 8207907
    },
    llaveProceso: '25430400300120180027300',
    numero      : 121,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '42.951 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 42958,
      fechaPresentacion      : '2017-09-13',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4513073601094195,
        '1': '15774711,08'
      },
      radicado         : '2017 - 01193',
      vencimientoPagare: 135435
    },
    deudor: {
      cedula   : 52543321,
      direccion: '',
      email    : 'CALLE 1H # 32A - 17',
      nombre   : ' PAOLA ANDREA FERNANDEZ RINCON',
      telefono : 'andreafernandez@hotmail.com'
    },
    llaveProceso: '11001400304020170119300',
    numero      : 122,
    tipoProceso : 'ACUMULADO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '42.951 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 42958,
      fechaPresentacion      : '2017-10-03',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': '48365616,94'
      },
      radicado         : '2017 - 00754',
      vencimientoPagare: '2419-10-07'
    },
    deudor: {
      cedula   : 79547983,
      direccion: '',
      email:
        'DIAGONAL 146 # 136A - 79 IN 3 AP 3 ',
      nombre  : 'GUSTAVO SANTAMARIA MOSQUERA',
      telefono: 'gustavo_santamaria@hotmail.com'
    },
    llaveProceso: '11001400306920170075400',
    numero      : 123,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-09',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-08-16',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 153313,
        '1': 377815399826276
      },
      radicado         : '2017 - 01180',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 40025572,
      direccion:
        'CALLE 181 # 17B 47 SAN ANTONIO ',
      email   : 'eariasseguros@hotmail.com',
      nombre  : 'BLANCA EDELMIRA ARIAS MELO',
      telefono: '6749599 // 3202092701'
    },
    llaveProceso: '11001400303320170118000',
    numero      : 124,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '21.613.985 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-12',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion:
        '20/06/2017 // 28/08/2017',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 300093705,
        '1': 'N/A'
      },
      radicado         : '2017 - 01520',
      vencimientoPagare: '2020-11-27'
    },
    deudor: {
      cedula   : 74338870,
      direccion: 'CARRERA 18 # 12 - 72',
      email    : 'N/A',
      nombre   : 'MILCIADES GALINDO CASTEBLANCO',
      telefono : 'F 4536131'
    },
    llaveProceso: '11001400304720170152000',
    numero      : 125,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '14.675.091 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-11',
      etapaProcesal          : 2.575441890032017e22,
      fechaPresentacion      : 'LIQUIDACION',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': '4513075306389036 // 5303715369427808'
      },
      radicado         : '2017 - 00762',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 79834592,
      direccion:
        'CALLE 34 # 2- 07 TORRE 23 APTO 101 ',
      email   : 'japp161@hotmail.com',
      nombre  : 'YONNY ARTURO PINZON PULIDO',
      telefono: '8211035 // 3138725407'
    },
    llaveProceso: '25754418900320170076200',
    numero      : 126,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '51.302.541 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-10-27',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 6670083892,
        '1': 12074022
      },
      radicado: '2017 - 00735',
      vencimientoPagare:
        '26/05/2021 // 26/07/2017'
    },
    deudor: {
      cedula   : 41610065,
      direccion: 'CARRERA 23 # 20 - 40 SUR',
      email    : 'albertotrilleras@hotmail.com',
      nombre   : 'ZOILA IRENE SUAVITA DE TRILLERAS',
      telefono : '3614483 // 3124498840'
    },
    llaveProceso: '11001400308020170073500',
    numero      : 127,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.149.185 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-15',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-08-18',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4060080684,
        '1': ''
      },
      radicado         : '2017 - 00733',
      vencimientoPagare: '2018-05-11'
    },
    deudor: {
      cedula   : 52385097,
      direccion: 'CALLE 62B SUR # 70 F - 45',
      email    : 'mariagladyys@hotmail.com',
      nombre   : 'MARIA GLADYS  GONZALEZ SOSA',
      telefono : 2173287
    },
    llaveProceso: '11001400307820170073300',
    numero      : 128,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.046.670 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-15',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-18',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 54744000041,
        '1': '634444000044 // 377813872494423 // 5306935267717699'
      },
      radicado: '2017 - 01064',
      vencimientoPagare:
        '29/07/2019 // 29/11/2021'
    },
    deudor: {
      cedula: 41709257,
      direccion:
        'CALLE 150A # 101 - 20 TORRE 3 APTO 802',
      email   : 'ele41709257@hotmail.com',
      nombre  : 'ELENA QUIÑONES',
      telefono: '6928962 // 3184581490'
    },
    llaveProceso: '11001400304320170106400',
    numero      : 129,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.477.030 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-15',
      etapaProcesal          : 'LIQUIDACION',
      fechaPresentacion      : '2017-08-18',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 377815132099546,
        '1': ''
      },
      radicado         : '2017 - 01153',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 77010352,
      direccion: 'CALLE 116 # 11C - 15 APTO 104',
      email    : 'arosadomestre@yahoo.com',
      nombre   : 'ARMANDO ENRIQUE ROSADO MESTRE',
      telefono : '6371679 // 3125855939'
    },
    llaveProceso: '11001400306420170115300',
    numero      : 130,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '42.965 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 42965,
      fechaPresentacion      : '2017-09-05',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': '',
        '1': '16924662,77'
      },
      radicado         : '2017 - 00774',
      vencimientoPagare: '2192-12-15'
    },
    deudor: {
      cedula   : 52830770,
      direccion: '',
      email    : 'CARRERA 9 ESTE # 36 - 40 CASA 34',
      nombre   : 'ROCIO ALEIDA ORTIZ BARRETO',
      telefono : 'rachiy_26@hotmail.com'
    },
    llaveProceso: '25754418900120170077400',
    numero      : 131,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '57.161.766 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-11',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-08-23',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '1770990 // 4513076455160970',
        '1': 5303711546384996
      },
      radicado         : '2017 - 01051',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 80049317,
      direccion:
        'CARRERA 145 # 144C - 72 TORRE 9 APTO 9',
      email   : 'jovanirestrepo@hotmail.com',
      nombre  : 'JOVANI EMILIO RESTREPO RAMIREZ',
      telefono: '8023973 // 3214033971'
    },
    llaveProceso: '11001400306820170105100',
    numero      : 132,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '24.624.884 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-11',
      etapaProcesal          : 1.100140030122017e22,
      fechaPresentacion      : 'LIQUIDACION',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 130201,
        '1': ''
      },
      radicado         : '2017 - 00950',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 80820336,
      direccion: 'CALLE 89A BIS B 113 - 23 ',
      email    : 'carlosrondon2008@hotmail.com',
      nombre   : 'CARLOS GIOVANNY RONDON GARCIA ',
      telefono : '4316891 // 3125757941'
    },
    llaveProceso: '11001400301220170095000',
    numero      : 133,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '54.428.394 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-16',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-08-24',
      municipio              : 'MADRID',
      obligacion             : {
        '0': 167364,
        '1': '377813624212172.'
      },
      radicado         : '2017 - 01083',
      vencimientoPagare: '2028-08-28'
    },
    deudor: {
      cedula: 80722626,
      direccion:
        'CARRERA 2 # 1 - 04 BLOQUE 8 APTO 101',
      email   : 'fredy8221@hotmail.com',
      nombre  : 'FREDY ALEXANDER BUENO PARADA',
      telefono: '8284768 // 3105519200'
    },
    llaveProceso: '25430400300120170108300',
    numero      : 134,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.203.589 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-28',
      etapaProcesal          : 1.100140030042017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 410086468,
        '1': 'N/A'
      },
      radicado         : '2017 - 00639',
      vencimientoPagare: '2020-12-31'
    },
    deudor: {
      cedula   : 5654542,
      direccion: 'CARRERA 16 # 10 - 30 ',
      email    : 'N/A',
      nombre   : 'RUBER ANDRES VALENZUELA SIERRA',
      telefono:
        'F 6045701              CEL 3007704166'
    },
    llaveProceso: '11001400300420170063900',
    numero      : 135,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '41.735.442 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-16',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-23',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 132651,
        '1': ''
      },
      radicado         : '2017 - 01491',
      vencimientoPagare: '2025-10-04'
    },
    deudor: {
      cedula   : 79463388,
      direccion: 'CALLE 46 SUR # 81G - 15',
      email    : 'jorgeernesto@hotmail.com',
      nombre   : 'JORGE ERNESTO ROA MANRIQUE',
      telefono : '2990898 // 3125225701'
    },
    llaveProceso: '11001400304720170149100',
    numero      : 136,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '19.926.084 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-15',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-23',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 235349,
        '1': ''
      },
      radicado         : '2017 - 01713',
      vencimientoPagare: '2023-10-31'
    },
    deudor: {
      cedula: 52818134,
      direccion:
        'CALLE 181C # 11 - 75 TORRE 3 APTO 302',
      email   : 'ednita22ms@hotmail.com',
      nombre  : 'EDNA MILENA MUÑOZ SANCHEZ',
      telefono: '3002766 // 3002908272'
    },
    llaveProceso: '11001400304720170171300',
    numero      : 137,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '45.758.347 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-15',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-22',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 156979,
        '1': ''
      },
      radicado         : '2017 - 01160',
      vencimientoPagare: '2027-10-11'
    },
    deudor: {
      cedula   : 52323645,
      direccion: 'CARRERA 19 # 22C - 75 ',
      email    : 'ybarrantes@gmail.com',
      nombre   : 'FLOR YAMILE BARRANTES CARO ',
      telefono : '5471164 // 3103446498'
    },
    llaveProceso: '11001400306420170116000',
    numero      : 138,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '91.986.323 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-15',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-23',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 146579,
        '1': ''
      },
      radicado         : '2017 - 00793',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 20896387,
      direccion: 'CARRERA 32 # 18 - 31 SUR ',
      email    : 'jose_agudelo@juancarpas.edu.com',
      nombre   : 'ANA EMILCE ROJAS SARMIENTO',
      telefono : '7502262 // 3204955563'
    },
    llaveProceso: '11001400306120170079300',
    numero      : 139,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '38.664.283 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-06-28',
      etapaProcesal          : 1.100140030772017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12480702,
        '1': 'N/A'
      },
      radicado         : '2017 - 00568',
      vencimientoPagare: '2020-06-12'
    },
    deudor: {
      cedula: 80933170,
      direccion:
        'CARRERA 8 # 13 - 34 SUR BLOQUE 6 APTO 101',
      email   : 'Jfcomercializadorajb@hotmail.com',
      nombre  : 'JHON FABER FORIGUA GARCIA',
      telefono: 'F 4075393'
    },
    llaveProceso: '11001400307720170056800',
    numero      : 140,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '28.130.302 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-15',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-22',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 156285,
        '1': ''
      },
      radicado         : '2017 - 01100',
      vencimientoPagare: '2017-09-24'
    },
    deudor: {
      cedula: 79412583,
      direccion:
        'CARREA 54 # 18 - 30 SUR APTO 201',
      email   : 'edgardavid302@hotmail.com',
      nombre  : 'EDGAR DAVID HERNANDEZ RINCON',
      telefono: '4137430 // 3003932311'
    },
    llaveProceso: '11001400303920170110000',
    numero      : 141,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '123.933.432 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-11',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-23',
      municipio              : 'FUNZA',
      obligacion             : {
        '0': 20990186969,
        '1': ''
      },
      radicado         : '2017 - 00742',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 36184358,
      direccion:
        'CARREA 2 # 21 - 55 TO 402 J FUNZA',
      email   : 'N/A',
      nombre  : 'DEISY POLANIA CUELLAR ',
      telefono: 3882131
    },
    llaveProceso: '25286310300120170074200',
    numero      : 142,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '9.079.297 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-17',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-22',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4280023643,
        '1': ''
      },
      radicado         : '2017 - 01089',
      vencimientoPagare: '2017-06-30'
    },
    deudor: {
      cedula   : 1023904524,
      direccion: 'CALLE 22C SUR # 5 - 54',
      email    : 'dalila_paito@hotmail.com',
      nombre   : 'PAOLA ANDREA RODRIGUEZ MORALES',
      telefono : 8136733
    },
    llaveProceso: '11001400303420170108900',
    numero      : 143,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '10.481.215 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-16',
      etapaProcesal          : 1.100140030262017e22,
      fechaPresentacion:
        'LIQUIDACIÓN DEL CRÉDITO SOLICITADA',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 1980094643,
        '1': 'N/A'
      },
      radicado         : '2017 - 00872',
      vencimientoPagare: '2020-10-26'
    },
    deudor: {
      cedula   : 52581513,
      direccion: 'CALLE 136A # 100A - 07',
      email    : 'N/A',
      nombre   : 'MARIA FILOMENA GONZALES SALAS ',
      telefono : 'CEL 3124794983'
    },
    llaveProceso: '11001400302620170087200',
    numero      : 144,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '53.995.817 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-15',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-22',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 189023,
        '1': '4099835384362938 // 5303715821335466'
      },
      radicado         : '2017 - 00817',
      vencimientoPagare: '2035-11-19'
    },
    deudor: {
      cedula: 79714749,
      direccion:
        'CALLE 66A SUR # 66 - 81 TORRE 16 APTO 661',
      email   : 'joja1114@hotmail.com',
      nombre  : 'JHON JAMINTON FUENTES CARREÑO',
      telefono: 7244449
    },
    llaveProceso: '11001400305520170081700',
    numero      : 145,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-17',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-22',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12730731,
        '1': '377813515714351.'
      },
      radicado         : '2017 - 00826',
      vencimientoPagare: '2017-08-11'
    },
    deudor: {
      cedula: 4520757,
      direccion:
        'TRANVERSAL 3 # 52B - 09 APTO 405',
      email   : 'pelaezpedro@hotmail.com',
      nombre  : 'PEDRO NEL PELAEZ TISNES',
      telefono: '2103564 // 3116216567'
    },
    llaveProceso: '11001400308620170082600',
    numero      : 146,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '84.049.009 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-15',
      etapaProcesal          : 1.100140030592017e22,
      fechaPresentacion      : 'EJECUCION',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4800902204,
        '1': 'N/A'
      },
      radicado         : '2017 - 00747',
      vencimientoPagare: '2021-12-05'
    },
    deudor: {
      cedula: 80080669,
      direccion:
        'CALLE 75 # 89B - 09 APTO 104 TORRE 8',
      email : 'andreslaiton@hotmail.com',
      nombre: 'MILTON ANDRES LAITON RINCON ',
      telefono:
        'F 6320923              CEL 3133912606'
    },
    llaveProceso: '11001400305920170074700',
    numero      : 147,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '30.873.492 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-16',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-22',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12447813,
        '1': ''
      },
      radicado         : '2017 - 00813',
      vencimientoPagare: '2017-08-10'
    },
    deudor: {
      cedula: 79505815,
      direccion:
        'AERONAUTICA CIVIL AVENIDA CALLE 26 # 106 - 33 ',
      email   : 'nestorg1969@hotmail.com ',
      nombre  : 'NESTOR GERARDO OSORIO MORALES',
      telefono: '4109980 // 6255975'
    },
    llaveProceso: '11001400300920170081300',
    numero      : 148,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '51.748.331 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-18',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-08-22',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 155176,
        '1': ''
      },
      radicado         : '2017 - 00256',
      vencimientoPagare: '2042-08-29'
    },
    deudor: {
      cedula: 23181779,
      direccion:
        'CENTRO COMERCIAL SURICENTRO LOCAL 6 -97 (MONTERIA) 77 CARRERA 4 ESTE # 38 - 56 ESTAPA H4 CASA 62',
      email   : 'tatianamag12@hotmail.com',
      nombre  : 'MAGDA TATIANA TORRES GONZALEZ',
      telefono: '7867106 // 3138172167'
    },
    llaveProceso: '25754400300220170025600',
    numero      : 149,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '47.820.559 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-23',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 180394,
        '1': ''
      },
      radicado         : '2017 - 00249',
      vencimientoPagare: '2025-01-19'
    },
    deudor: {
      cedula   : 79988076,
      direccion: 'CALLE 136 # 157 - 91 ',
      email    : 'g.o75@hotmail.com',
      nombre   : 'VICTOR TRIANA ALARCON ',
      telefono : '3156448 // 3156448156'
    },
    llaveProceso: '2575440030012017024900',
    numero      : 150,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '2273320123786.',
        '1': 337815690656158
      },
      radicado         : '2017 - 01135',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 88227428,
      direccion:
        'CALLE 180 # 12A - 16 INT 3 APT 202 ETAPA 3 // CALLE 137 # 91 - 40 INT 5 APTO 404',
      email   : 'higuitac@gmail.com',
      nombre  : 'ANDRES FELIPE HIGUITA CARDONA ',
      telefono: ''
    },
    llaveProceso: '11001400307320170113500',
    numero      : 151,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '76.394.840 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-23',
      etapaProcesal          : 1.100140030732017e22,
      fechaPresentacion:
        'DESDE EL 25/03/2022 APARECE OFICIO CORREGIDO SIN TRAMITAR Y PASA A LA LETRA',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 180950,
        '1': 'N/A'
      },
      radicado         : '2017 - 01136',
      vencimientoPagare: '2035-02-05'
    },
    deudor: {
      cedula: 1032431042,
      direccion:
        'CARRERA 111 BIS # 154A - 30 TORRE 2 APTO 1007',
      email : 'nicolas.osorio@finamerica.com.co',
      nombre: 'NICOLAS OSORIO RODRIGUEZ',
      telefono:
        'F 3142566               CEL 3142566974'
    },
    llaveProceso: '110014007320170113600',
    numero      : 152,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '20.221.005 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-24',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 179883,
        '1': ''
      },
      radicado         : '2017 - 00714',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 52230614,
      direccion:
        'CARRERA 15B # 6 - 32 TORRE 8 APTO 202',
      email   : 'rocio4332@hotmail.com',
      nombre  : 'MARBELL ROCIO DOMINGUEZ ALVAREZ',
      telefono: '5168872 // 3214064280'
    },
    llaveProceso: '25754418900220170071400',
    numero      : 153,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'LiosJuridicos',
    demanda : {
      capitalAdeudado        : '29.366.625 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-23',
      etapaProcesal:
        'EL 11/07/2018 EL JUZGADO DECRETA TERMINACION PROCESO POR PAGO CUOTAS EN MORA // EL 5/09/2018 SE DEVOLVIERON GARANTIAS A AECSA S.A. // 30/08/2022 NO SE HAN LEVANTADO MEDIDAS CAUTELARES// PAGAR DESARCHIVE Y TRAMITAR OFICIO RECIENTE // ARCHIVO DEFINITIVO 596-2018',
      fechaPresentacion: '2018-09-05',
      municipio        : 'BOGOTA',
      obligacion       : {
        '0': 5670083032,
        '1': '377813199287708 // 4513075700372455 // 123470'
      },
      radicado: '2017 - 00841',
      vencimientoPagare:
        '21/02/2018 // 26/10/20247'
    },
    deudor: {
      cedula: 79840930,
      direccion:
        'CARRERA 79 BIS A # 73 - 92 SUR APTO 304 INT 3 ',
      email   : 'gabriel.eml@hotmail.com',
      nombre  : 'GABRIEL EDUARDO MEJIA LADINO ',
      telefono: '7347505 // 3112945552'
    },
    llaveProceso: '11001400303620170084100',
    numero      : 154,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : 40423614,
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-04',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-11',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4513082821740149,
        '1': 20990170294
      },
      radicado         : '2017 - 00717',
      vencimientoPagare: '29/11/2028'
    },
    deudor: {
      cedula: 71557211,
      direccion:
        'CALLE 7 # 5 - 29 TORRE 8 APTO 303',
      email   : 'ruedacarlos47@gmail.com',
      nombre  : 'CARLOS ARTURO RUEDA ALZATE ',
      telefono: ''
    },
    llaveProceso: '11001400308320170071700',
    numero      : 155,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '41.371.151 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : 2.547340030012017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'MOSQUERA',
      obligacion             : {
        '0': 12519120,
        '1': 12549733
      },
      radicado         : '2017 - 00777',
      vencimientoPagare: '2020-08-15'
    },
    deudor: {
      cedula: 52431512,
      direccion:
        'CARRERA 10 # 5 - 62 TORRE 7 APTO 127 ',
      email   : 'gerencia@logimontacargas.com',
      nombre  : 'MARTHA PATRICIA MORALES SARMIENTO',
      telefono: 'F 8295963'
    },
    llaveProceso: '25473400300120170077700',
    numero      : 156,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': ''
      },
      radicado         : '2017 - 00889',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 19146821,
      direccion: '',
      email    : '',
      nombre   : 'LUIS ALBERTO MENDOZA CASTAÑO',
      telefono : ''
    },
    llaveProceso: '11001400301120170088900',
    numero      : 157,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '183.128.611 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-17',
      etapaProcesal          : 2.589931030012017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'ZIPAQUIRA',
      obligacion             : {
        '0': 173482,
        '1': '4099849860904006 // AUDIOPRESTAMO'
      },
      radicado         : '2017 - 00393',
      vencimientoPagare: '2034-03-26'
    },
    deudor: {
      cedula   : 80808819,
      direccion: 'CARRERA 3 ESTE # 6B - 36 CHIA',
      email    : 'jjgallego14@hotmail.com',
      nombre   : 'JULIAN JHOHANY GALLEGO MONTES',
      telefono : 'F 3115070'
    },
    llaveProceso: '25899310300120170039300',
    numero      : 158,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '18.653.826 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 11932772,
        '1': ''
      },
      radicado         : '2017 - 01333',
      vencimientoPagare: '2017-08-16'
    },
    deudor: {
      cedula: 98389962,
      direccion:
        'CARRERA 14 # 11 - 14 SUR BLOQUE 10 ',
      email   : 'allantobar@gmail.com',
      nombre  : 'ALLAN FREDY TOBAR ENCISO ',
      telefono: 3125586008
    },
    llaveProceso: '11001400307320170133300',
    numero      : 159,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.000.000 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 103083921,
        '1': ''
      },
      radicado         : '2017 - 00762',
      vencimientoPagare: '7/12/20149'
    },
    deudor: {
      cedula   : 79387342,
      direccion: 'CALLE 28A SUR # 28A - 18',
      email    : 'jairocarrillosa@hotmail.com',
      nombre   : 'JAIRO ALBERTO CARRILLO SALINAS ',
      telefono : '6047182 // 3118411820'
    },
    llaveProceso: '11001400307820170076200',
    numero      : 160,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '120.292.568 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-24',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-08-31',
      municipio              : 'MOSQUERA',
      obligacion             : {
        '0': 169486,
        '1': ''
      },
      radicado         : '2017 - 00956',
      vencimientoPagare: '2033-10-31'
    },
    deudor: {
      cedula: 79335809,
      direccion:
        'CALLE 23 # 5 - 23 CASA 4 INT 10 ',
      email: 'norina@reservalaboral.com.co',
      nombre:
        'RICARDO ALBERTO BELTRAN HERNANDEZ ',
      telefono: '3153808 // 3153808376'
    },
    llaveProceso: '25286310300120170095600',
    numero      : 161,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '',
      fechaPresentacion      : 'SENTENCIA',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 43449,
        '1': 1540086035
      },
      radicado: '2017 - 00946',
      vencimientoPagare:
        'AVENIDA 68 # 4 - 40 BLOQUE 6 APTO 402'
    },
    deudor: {
      cedula   : 900432476,
      direccion: 'N/A',
      email    : 7514006,
      nombre   : 'MANHATTAN DOTACIONES S.A.S ',
      telefono : 'OK'
    },
    llaveProceso: '11001400304120170094600',
    numero      : 162,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : 40423614,
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-04',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'MOSQUERA',
      obligacion             : {
        '0': 4513082821740149,
        '1': 20990170294
      },
      radicado         : '2017 - 00924',
      vencimientoPagare: '29/11/2028'
    },
    deudor: {
      cedula: 71557211,
      direccion:
        'CALLE 7 # 5 - 29 TORRE 8 APTO 303',
      email   : 'ruedacarlos47@gmail.com',
      nombre  : 'CARLOS ARTURO RUEDA ALZATE ',
      telefono: ''
    },
    llaveProceso: '25473418900120170092400',
    numero      : 163,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '25.519.225 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-07-19',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-07-21',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 6240082772,
        '1': 'N/A'
      },
      radicado         : '2017 - 00905',
      vencimientoPagare: '2019-09-30'
    },
    deudor: {
      cedula   : 14255996,
      direccion: 'CARRERA 82 A No. 6B-30 CASA 36',
      email    : 'N/A',
      nombre   : 'URIEL RUIZ DIAZ',
      telefono : 'CEL 3102785072'
    },
    llaveProceso: '11001400304520170090500',
    numero      : 164,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '44.742.148 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-07-19',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-07-21',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2310089458,
        '1': '4513088545588847// AUDIO PRESTAMO'
      },
      radicado         : '2017 - 00635',
      vencimientoPagare: '2019-08-18'
    },
    deudor: {
      cedula   : 86057132,
      direccion: 'Carrera 40 D No. 1H-28',
      email    : 'imagenfmr@yahoo.com',
      nombre   : 'FREDY MENESES',
      telefono:
        'F 4088069              CEL 3125312823'
    },
    llaveProceso: '11001400307620170063500',
    numero      : 165,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '30.526.136 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : 1.100140030092017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12752576,
        '1': 'N/A'
      },
      radicado         : '2017 - 00837',
      vencimientoPagare: '2020-08-16'
    },
    deudor: {
      cedula   : 52432989,
      direccion: 'CALLE 70C # 111D - 06',
      email    : 'aide116455@hotmail.com',
      nombre   : 'DORA AIDE PEÑA PEÑA ',
      telefono:
        'F 54006426            CEL 3142403097'
    },
    llaveProceso: '11001400300920170083700',
    numero      : 166,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '118.940.346 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : 1.100131030102017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 197033,
        '1': 'N/A'
      },
      radicado         : '2017 - 00710',
      vencimientoPagare: '2031-10-07'
    },
    deudor: {
      cedula: 79688268,
      direccion:
        'CARRERA 83A # 116A - 72 CASA 214',
      email : 'maurgonzal@yahoo.com',
      nombre: ' JOSE MAURICIO GONZALEZ CALDERON ',
      telefono:
        'F 4589855              CEL 3196564315'
    },
    llaveProceso: '11001310301020170071000',
    numero      : 167,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '18.141.791 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-17',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 116942,
        '1': ''
      },
      radicado         : '2017 - 00872',
      vencimientoPagare: '2024-03-24'
    },
    deudor: {
      cedula   : 21046826,
      direccion: 'CARRERA 7 # 71 - 24',
      email    : 'sergio830@hotmail.com',
      nombre   : 'MARIA STELLA HERNANDEZ BELTRAN ',
      telefono : '6861327 // 3164673352'
    },
    llaveProceso: '11001400301920170087200',
    numero      : 168,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '13.144.437 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01',
      etapaProcesal          : 'NOTIFICACION ',
      fechaPresentacion      : '2017-07-21',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12498762,
        '1': 'audioprestamo'
      },
      radicado         : '2017 - 01264',
      vencimientoPagare: '2020-03-15'
    },
    deudor: {
      cedula: 23553904,
      direccion:
        'Carrera 67 No. 65-22 sur Torre 15 Apto 559',
      email   : 'dorancy1@hotmail.com',
      nombre  : 'RITA BLANCO DE GOMEZ',
      telefono: 'F 3861894'
    },
    llaveProceso: '11001400300320170126400',
    numero      : 169,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '8.108.220 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-18',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4513075095312892,
        '1': 5303718444914360
      },
      radicado         : '2017 - 01114',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 55303731,
      direccion: 'CALLE 138 # 11B - 16 APTO 401',
      email    : 'isagarcia@hotmail.com',
      nombre   : 'ISABEL CRISTINA GARCIA DURAN ',
      telefono : '5514126 // 3006509338'
    },
    llaveProceso: '11001400301320170111400',
    numero      : 170,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '46.042.338 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-24',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12766386,
        '1': ''
      },
      radicado         : '2017 - 00863',
      vencimientoPagare: '2017-08-14'
    },
    deudor: {
      cedula: 1024468871,
      direccion:
        'CALLE 59C SUR # 87K - 64 APTO 1016',
      email   : 'jlaura00@hotmail.com',
      nombre  : 'MARITZA NATALI RODRIGUEZ URREA',
      telefono: 'N/A'
    },
    llaveProceso: '11001400308620170086300',
    numero      : 171,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.487.506 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 11895200,
        '1': ''
      },
      radicado         : '2017 - 00850',
      vencimientoPagare: '2017-08-16'
    },
    deudor: {
      cedula   : 52475256,
      direccion: 'CARRERA 79B # 45 - 19 SUR',
      email    : 'N/A',
      nombre:
        'ADRIANA DEL PILAR ALFONSO BAQUERO ',
      telefono: 6967694
    },
    llaveProceso: '11001400302720170085000',
    numero      : 172,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '41.576.997 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-24',
      etapaProcesal          : '',
      fechaPresentacion      : 'NOTIFICACION',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 166760,
        '1': 'N/A'
      },
      radicado         : '2017 - 01161',
      vencimientoPagare: '2028-08-09'
    },
    deudor: {
      cedula: 79878252,
      direccion:
        'CALLE 69A SUR # 104 - 18 CASA 177',
      email : 'diegoc8a@gmail.com',
      nombre: 'DIEGO ALEXANDER CAYCEDO OCHOA',
      telefono:
        'F 7230139               CEL 3114901649'
    },
    llaveProceso: '11001400301520170116100',
    numero      : 173,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '14.795.921 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 136962,
        '1': 'N/A'
      },
      radicado         : '2017 - 00903',
      vencimientoPagare: '2026-03-10'
    },
    deudor: {
      cedula   : 52189873,
      direccion: 'CALLE 74G # 80 - 58 SUR ',
      email    : 'darnelly-74@hotmail.com',
      nombre   : 'DARNELLY HERNANDEZ MARTINEZ ',
      telefono:
        'F 4530972                 CEL 3144189224'
    },
    llaveProceso: '11001400302520170090300',
    numero      : 174,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.618.551 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-24',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-08-31',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 20990117740,
        '1': ''
      },
      radicado         : '2017 - 00761',
      vencimientoPagare: '2024-04-22'
    },
    deudor: {
      cedula: 91354321,
      direccion:
        'CALLE 36 # 1 ESTE - 81 BLOQUE 21 CASA 11 SOACHA',
      email   : 'omarfula@hotmail.com',
      nombre  : 'OMAR GUSTAVO FULA AVILA ',
      telefono: '8212461 // 3118866968'
    },
    llaveProceso: '25754418900220170076100',
    numero      : 175,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '20.211.828 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-16',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 113835,
        '1': 377813623621787
      },
      radicado         : '2017 - 00801',
      vencimientoPagare: '2023-11-27'
    },
    deudor: {
      cedula   : 79787268,
      direccion: 'CALLE 26 # 103 - 09 ',
      email    : 'ingedibutec@gmail.com',
      nombre   : 'JHON FREDY MURILLO DAZA ',
      telefono : '7562457 // 3182221747'
    },
    llaveProceso: '11001400300420170080100',
    numero      : 176,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '18.696.053 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-24',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2290099501,
        '1': ''
      },
      radicado         : '2017 - 01041',
      vencimientoPagare: '2022-06-02'
    },
    deudor: {
      cedula   : 79327475,
      direccion: 'CARRERA 85 # 52 - 05 SUR ',
      email    : 'leonardyherrera@yahoo.com',
      nombre   : 'LEONARDY HERRERA ROJAS',
      telefono : 4663467
    },
    llaveProceso: '11001400304520170104100',
    numero      : 177,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '39.243.095 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4099831431615063,
        '1': '5303715050478433 // 5306940349167962 // 12641256'
      },
      radicado         : '2017 - 01221',
      vencimientoPagare: '2017-08-15'
    },
    deudor: {
      cedula   : 37861286,
      direccion: 'DIAGONAL 52# 3 - 24 APTO 50 ',
      email    : 'maryluzocasiones1104.p@hotmail.com',
      nombre   : 'MARYLUZ OCASIONES PINZON ',
      telefono : '7675057 // 3156780088'
    },
    llaveProceso: '11001400306620170122100',
    numero      : 178,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '12.687.427 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-07-21',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 5670085162,
        '1': 'N/A'
      },
      radicado         : '2017 - 01084',
      vencimientoPagare: '2019-11-02'
    },
    deudor: {
      cedula   : 12254068,
      direccion: 'CARRERA 30 No.68 J-08 SUR',
      email:
        'guillermogonzalez_tagua@hotmail.com',
      nombre: 'GUILLERMO GONZALEZ TAGUA',
      telefono:
        'F 5642974              CEL 3218180993'
    },
    llaveProceso: '11001400301120170108400',
    numero      : 179,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '68.421.268 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-29',
      municipio              : 'VIOTA',
      obligacion             : {
        '0': 12594582,
        '1': ''
      },
      radicado         : '2017 - 00218',
      vencimientoPagare: '2017-08-15'
    },
    deudor: {
      cedula   : 21016631,
      direccion: 'CALLE 3 # 5 - 31 VIOTA',
      email    : 'N/A',
      nombre   : 'ALCIRA DELIA SAENZ GARAVIS',
      telefono : 3104832
    },
    llaveProceso: '25878418900120170021800',
    numero      : 180,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '25.340.036 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12569604,
        '1': ''
      },
      radicado         : '2017 - 00115',
      vencimientoPagare: '2017-08-16'
    },
    deudor: {
      cedula   : 1033783222,
      direccion: 'CALLE 69J # 20B - 52 ',
      email    : 'leoguegar@hotmail.com',
      nombre   : 'LEONARDO ALIRIO GARCIA GUERRERO ',
      telefono : '7177769 // 3103048137 '
    },
    llaveProceso: '11001418901020170011500',
    numero      : 181,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '25.833.335 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01',
      etapaProcesal          : 1.100140030012017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2150091504,
        '1': 'N/A'
      },
      radicado         : '2017 - 01001',
      vencimientoPagare: '2019-11-03'
    },
    deudor: {
      cedula   : 11185630,
      direccion: 'CARRERA 81C # 2B - 80 PISO 2 ',
      email    : 'grupocomerciallasabana@hotmail.com',
      nombre   : 'WILSON ALFONSO JIMENEZ MENDIETA ',
      telefono : 'F 5714329'
    },
    llaveProceso: '11001400300120170100100',
    numero      : 182,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '25.833.335 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-08-08',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2150091504,
        '1': 'N/A'
      },
      radicado         : '2017 - 01001',
      vencimientoPagare: '2019-11-03'
    },
    deudor: {
      cedula   : 11185630,
      direccion: 'CARRERA 81C # 2B - 80 PISO 2 ',
      email    : 'grupocomerciallasabana@hotmail.com',
      nombre   : 'WILSON ALFONSO JIMENEZ MENDIETA ',
      telefono : 'F 5714329'
    },
    llaveProceso: '11001400300120170100100',
    numero      : 183,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '22.277.206 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-01',
      etapaProcesal:
        'DESIGNACIÓN CURADOR AD LITEM',
      fechaPresentacion: '2017-08-08',
      municipio        : 'BOGOTA',
      obligacion       : {
        '0': 8470081213,
        '1': 'N/A'
      },
      radicado         : '2017 - 00807',
      vencimientoPagare: '2021-12-15'
    },
    deudor: {
      cedula   : 17650971,
      direccion: 'CARRERA 86 # 69 H - 40',
      email    : 'N/A',
      nombre   : 'JUAN CARLOS TOVAR TOLEDO',
      telefono : 'F 83107389'
    },
    llaveProceso: '11001400302520170080700',
    numero      : 184,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '41.262.275 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-11',
      etapaProcesal          : '',
      fechaPresentacion      : 'NOTIFICACION',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': '    ',
        '1': 20990158916
      },
      radicado         : '2017 - 00283',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 10294828,
      direccion: 'CARRERA 4 ESTE # 38 - 56',
      email    : 'willdany@hotmail.com',
      nombre   : 'WILLIAM GIOVANNI DORADO FERNANDEZ',
      telefono : '3351000 // 3103397090'
    },
    llaveProceso: '25754400300320170028300',
    numero      : 185,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '13.319.130 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-11',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-08-15',
      municipio              : 'CHIA',
      obligacion             : {
        '0': 1680097051,
        '1': 'N/A'
      },
      radicado         : '2017 - 00412',
      vencimientoPagare: '2021-01-29'
    },
    deudor: {
      cedula: 24134505,
      direccion:
        'CALLE 29 A # 2 - 76 APTO 304 CHIA',
      email   : 'N/A',
      nombre  : 'CELY MARGOTH ROJAS VELANDIA',
      telefono: 'F 5267343'
    },
    llaveProceso: '25175408900220170041200',
    numero      : 186,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '10.928.053 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-23',
      etapaProcesal          : 2.529040030022017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'FUSAGASUGA',
      obligacion             : {
        '0': 4513070122193330,
        '1': 'AUDIOPRESTAMO'
      },
      radicado: '2017 - 00552',
      vencimientoPagare:
        '19/03/2020 //  15/10/2019 '
    },
    deudor: {
      cedula: 39624423,
      direccion:
        'CARRERA 6 # 16A - 84 FUSAGASUGA ',
      email : '  ',
      nombre: 'YAZMIN ALVARADO PINZON ',
      telefono:
        'F 8717658               CEL 3138851725'
    },
    llaveProceso: '25290400300220170055200',
    numero      : 187,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '42.969 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 42967,
      fechaPresentacion      : '2018-02-12',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 5303710467974930,
        '1': '31660690,17'
      },
      radicado         : '2017 - 01269',
      vencimientoPagare: 170638
    },
    deudor: {
      cedula   : 1019029250,
      direccion: '',
      email    : 'CARRERA 86 # 77A - 28 ',
      nombre   : 'DIEGO ARMANDO AREVALO VELANDIA',
      telefono : 'arevalodiego77@gmail.com'
    },
    llaveProceso: '11001400306720170126900',
    numero      : 188,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '71.966.685 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '29/08/2017',
      municipio              : 'TOCANCIPA',
      obligacion             : {
        '0': 175217,
        '1': 5303718084430842
      },
      radicado         : '2017 - 00494',
      vencimientoPagare: '09/06/2034'
    },
    deudor: {
      cedula   : 4547635,
      direccion: 'CALLE 10 # 8 - 07 TOCANCIPA',
      email    : 'wilderj11@yahoo.com',
      nombre   : 'WILDER DE JESUS ROMAN GRISALES',
      telefono : '3213559 // 3142125039 '
    },
    llaveProceso: '25817418900120170049400',
    numero      : 189,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '42.971 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 42977,
      fechaPresentacion      : '2017-12-07',
      municipio              : 'FUNZA',
      obligacion             : {
        '0': '',
        '1': '18539423,59'
      },
      radicado         : '2017 - 00781',
      vencimientoPagare: 152366
    },
    deudor: {
      cedula   : 79909315,
      direccion: 41537019,
      email    : 'CARRERA 18C # 121 - 40 ',
      nombre   : 'VICTOR EDUARDO  MORA ESPINOSA ',
      telefono : 'victormor84@outlook.com'
    },
    llaveProceso: '25286400300120170078100',
    numero      : 190,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '87.649.981 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-11',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-08-23',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 1220084112,
        '1': 'N/A'
      },
      radicado         : '2017 - 01082',
      vencimientoPagare: '2020-11-30'
    },
    deudor: {
      cedula   : 80231798,
      direccion: 'CARRERA 32 B # 2 - 64 ',
      email    : 'jhon.valencia@jvtel.com.co',
      nombre   : 'JOHN ALEXANDER VALENCIA MARQUEZ',
      telefono:
        'F 2376454  2371468                CEL 3004525014'
    },
    llaveProceso: '11001400307920170108200',
    numero      : 191,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '38.393.691 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-17',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '101/09/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 490098495,
        '1': 128775
      },
      radicado: '2017 - 01532',
      vencimientoPagare:
        '22/02/2021 // 19/05/20258'
    },
    deudor: {
      cedula: 53053612,
      direccion:
        'TRANVERSAL 142 # 150 - 50 CASA 2 ET 8 ',
      email   : 'baldini@mybosi.com',
      nombre  : 'DIANA PATRICIA SANCHEZ SALCEDO ',
      telefono: 2572857
    },
    llaveProceso: '1100140030732017015300',
    numero      : 192,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '24.590.710 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-16',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-08-23',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12750180,
        '1': 'N/A'
      },
      radicado         : '2017 - 01750',
      vencimientoPagare: '2020-08-09'
    },
    deudor: {
      cedula   : 52465691,
      direccion: 'CARRERA 80 # 70A - 09',
      email    : 'equesada01@hotmail.com',
      nombre   : 'CARMEN ELIZABETH QUESADA MARTINEZ',
      telefono:
        'F 7829236              CEL 3204792977'
    },
    llaveProceso: '11001400302420170175000',
    numero      : 193,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '47.317.351 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-28',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-08-31',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12601534,
        '1': ''
      },
      radicado         : '2017 - 01297',
      vencimientoPagare: '2017-08-23'
    },
    deudor: {
      cedula: 52790965,
      direccion:
        'CALLE 20C # 106 - 27 APTO 202 INT 13 ',
      email   : 'fabiola_19805@hotmail.com',
      nombre  : 'FABIOLA MARTINEZ RUEDA',
      telefono: 3107976282
    },
    llaveProceso: '11001400303520170129700',
    numero      : 194,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '25.303.069 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-24',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-08-30',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 138546,
        '1': ''
      },
      radicado         : '2017 - 0991',
      vencimientoPagare: '2026-05-04'
    },
    deudor: {
      cedula   : 80244664,
      direccion: 'CARRERA 95 BIS # 90A - 12 ',
      email    : 'gufo2299@hotmail.com',
      nombre   : 'DOUGLAS FABIAN SIZA CORTES',
      telefono : '4429545 // 3118280782'
    },
    llaveProceso: '1100140030122017099100',
    numero      : 195,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '124.710.637 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : 1.100131030212017e22,
      fechaPresentacion      : 'PAGO TOTAL',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2330086807,
        '1': '200865 // 377813427489837 // 4513070249553475 // 5303710103729395 '
      },
      radicado         : '2017 - 00471',
      vencimientoPagare: '2037-03-15'
    },
    deudor: {
      cedula   : 80130064,
      direccion: 'TRANSVERSAL 5Q  # 48P - 06 SUR',
      email    : 'jairotibata@hotmail.com',
      nombre   : 'JAIRO TIBATA',
      telefono:
        'F 7677881              CEL 3157303099'
    },
    llaveProceso: '11001310302120170047100',
    numero      : 196,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.983.619 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-28',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-04',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 11705210,
        '1': ''
      },
      radicado         : '2017 - 01086',
      vencimientoPagare: '2017-08-23'
    },
    deudor: {
      cedula   : 79457880,
      direccion: 'CALLE 106 # 8A - 19 CASA 698',
      email    : 'mariojean1@yahoo.es',
      nombre   : 'MARIO JEAN PINZON BARON',
      telefono : 2159919
    },
    llaveProceso: '11001400304520170108600',
    numero      : 197,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '29.204.879 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-29',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-09-04',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 167542,
        '1': ''
      },
      radicado         : '2017 - 01329',
      vencimientoPagare: '2028-09-03'
    },
    deudor: {
      cedula   : 1012318156,
      direccion: 'CARRERA 80M # 74 - 04 SUR ',
      email    : 'hectormanuelverdolaga@gmail.com',
      nombre   : 'HECTOR MANUEL RAMIREZ PUENTES',
      telefono : '3142498 // 3142998727'
    },
    llaveProceso: '11001400304020170132900',
    numero      : 198,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '28.594.040 COP',
      departamento           : 'TOLIMA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-08-31',
      municipio              : 'MELGAR',
      obligacion             : {
        '0': 12650694,
        '1': 'N/A'
      },
      radicado         : '2017 - 00259',
      vencimientoPagare: '2020-08-16'
    },
    deudor: {
      cedula: 1106893308,
      direccion:
        'VEREDA BOQUERON , FINCA LA MILAGROSA, MUNICIPIO FUSA // CALLE 3 # 37 - 21 BARRIO SICAMORO, MELGAR',
      email : 'liliaramirez17@gmail.com',
      nombre: 'MARTHA LILIANA RAMIREZ COLORADO ',
      telefono:
        'CEL 3108612781        CEL 3502772711'
    },
    llaveProceso: '73449408900220170025900',
    numero      : 199,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '34.506.455 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-28',
      etapaProcesal          : 1.100140030122017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 168737,
        '1': 'N/A'
      },
      radicado         : '2017 - 01012',
      vencimientoPagare: '2028-10-10'
    },
    deudor: {
      cedula   : 79582683,
      direccion: 'TRANVERSAL 16A # 42 - 58 SUR',
      email    : 'mmx4b@msn.com',
      nombre   : 'ALEXANDER ROJAS CASTAÑEDA',
      telefono:
        'F 7600199                 CEL 3103770989'
    },
    llaveProceso: '11001400301220170101200',
    numero      : 200,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Insolvencia',
    demanda : {
      capitalAdeudado        : '27.602.952 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-23',
      etapaProcesal          : 1.100140030792017e22,
      fechaPresentacion      : 'PROCESO DE INSOLVENCIA',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 377816483778266,
        '1': 4513080485378479
      },
      radicado         : '2017 - 01142',
      vencimientoPagare: '16/11/2019 // 6/03/2020'
    },
    deudor: {
      cedula   : 51733931,
      direccion: 'CALLE 127D # 21 - 80 APTO 105',
      email:
        'sebantialbeltransprieto@hotmail.com',
      nombre:
        'PIEDAD MARITZA OLGA ROCIO PRIETO VARGAS',
      telefono:
        'F 6256456              CEL 3108711046'
    },
    llaveProceso: '11001400307920170114200',
    numero      : 201,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '54.240.143 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-28',
      etapaProcesal          : 1.1001400308520171e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 151374,
        '1': 'N/A'
      },
      radicado         : '2017 - 01287',
      vencimientoPagare: '2022-05-30'
    },
    deudor: {
      cedula   : 52488943,
      direccion: 'CALLE 89 # 98 - 27 ',
      email    : 'tocami96@hotmail.com',
      nombre   : 'SONIA MIREYA PANTOJA SANDOVAL',
      telefono : 'F 2287856'
    },
    llaveProceso: '11001400308520170128700',
    numero      : 202,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '60.804.048 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-29',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-09-04',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 179104,
        '1': ''
      },
      radicado         : '2017 - 01060',
      vencimientoPagare: '2024-11-28'
    },
    deudor: {
      cedula   : 80380775,
      direccion: 'CALLE 92 BIS SUR # 3 - 61',
      email    : 'fantavillabon@hotmail.com',
      nombre   : 'GONZALO VILLABON MARTINEZ',
      telefono : '7672705 // 3118264932'
    },
    llaveProceso: '11001400300820170106000',
    numero      : 203,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '41.990.538 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-28',
      etapaProcesal          : 'EJECUCION',
      fechaPresentacion      : '2017-08-30',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12743098,
        '1': 'N/A'
      },
      radicado         : '2017 - 01063',
      vencimientoPagare: '2020-08-23'
    },
    deudor: {
      cedula   : 46679232,
      direccion: 'CARRERA 34 # 9 - 60',
      email    : 'carito220@hotmail.es',
      nombre   : 'FLOR ESPERANZA GUTIERREZ ',
      telefono : 'F 5754502'
    },
    llaveProceso: '11001400304520170106300',
    numero      : 204,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '14.068.639 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal:
        'EJECUCIÓN SOLICITAR LIQUIDACIÓN A REINTEGRA',
      fechaPresentacion: '2017-08-28',
      municipio        : 'BOGOTA',
      obligacion       : {
        '0': 430103841,
        '1': 'N/A'
      },
      radicado         : '2017 - 00971',
      vencimientoPagare: '2021-09-09'
    },
    deudor: {
      cedula: 51856244,
      direccion:
        'CARRERA 2A BIS A ESTE # 89A  SUR',
      email : 'N/A',
      nombre: 'NELIDA DEL CARMEN RIVERA MESA',
      telefono:
        'F 7616370               CEL 3143313269'
    },
    llaveProceso: '11001400301220170097100',
    numero      : 205,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '30.556.160 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-29',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-09-05',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 120356,
        '1': 1590082995
      },
      radicado         : '2017 - 01469',
      vencimientoPagare: '16//11/2021'
    },
    deudor: {
      cedula: 80729141,
      direccion:
        'CARRERA 17 F 71A - 95 SUR  CASA 239',
      email   : 'edgar_julian@hotmail.com',
      nombre  : 'EDGAR MARTINEZ VELANDIA ',
      telefono: 7902763
    },
    llaveProceso: '11001400306420170146900',
    numero      : 206,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '23.404.368 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-17',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-05',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 112910,
        '1': ''
      },
      radicado         : '2017 - 01024',
      vencimientoPagare: '2017-02-28'
    },
    deudor: {
      cedula: 51993007,
      direccion:
        'CALLE 148 # 94A - 10/60 APTO 408 ETAPA 5',
      email   : 'sanbiru_69@hotmail.com',
      nombre  : 'SANDRA BIBIANA RUGE RODRIGUEZ',
      telefono: 4806528
    },
    llaveProceso: '11001400302220170102400',
    numero      : 207,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '27.819.415 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 12725973,
        '1': 'N/A'
      },
      radicado         : '2017 - 00265',
      vencimientoPagare: '2020-08-15'
    },
    deudor: {
      cedula   : 80357801,
      direccion: 'CALLE 34 # 1A - 40 CASA 247',
      email    : 'jeovanyrojas@outlook.com',
      nombre   : 'JEOVANY ROJAS CRUZ',
      telefono : 'N/A'
    },
    llaveProceso: '25754400300220170026500',
    numero      : 208,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '54.090.336 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2170085697,
        '1': '377813567054276 // 451377194627824 // 5303710806169667 // 5306726083237084 // AUDIOPRESTAMO'
      },
      radicado         : '2017 - 01191',
      vencimientoPagare: '2020-08-31'
    },
    deudor: {
      cedula   : 79852094,
      direccion: 'CARRERA 68M # 37D - 47 SUR ',
      email    : 'cesa861@hotmail.com',
      nombre   : 'CESAR ALFONSO UMAÑA CAÑON ',
      telefono:
        'F 31006108               CEL 3212406004'
    },
    llaveProceso: '11001400306420170119100',
    numero      : 209,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '10.555.422 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : 'EJECUCION',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 377813597718262,
        '1': '4513070908078111 // 5303714709873201 '
      },
      radicado         : '2018 - 00163',
      vencimientoPagare: '5/01/2020  5/01/2020'
    },
    deudor: {
      cedula   : 343334,
      direccion: 'CARRERA 50 # 113 - 09',
      email    : 'N/A',
      nombre   : 'JOSE ANTONIO CASTILLO CORTES',
      telefono:
        'F 4658342                 CEL 3015004499'
    },
    llaveProceso: '11001400302120180016300',
    numero      : 210,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '36.520.799 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-24',
      etapaProcesal          : 2.528640030012018e22,
      fechaPresentacion:
        'NOTIFICACIÓN CERTIMAIL A MARIA NUBIA MARTINEZ CELY',
      municipio : 'MOSQUERA',
      obligacion: {
        '0': 166601,
        '1': 'N/A'
      },
      radicado         : '2018 - 00105',
      vencimientoPagare: '2028-08-02'
    },
    deudor: {
      cedula   : 17652071,
      direccion: 'CARRERA 4A # 11 - 44 FUNZA',
      email    : 'marimar832010@hotmail.com',
      nombre   : 'SAUL BARBOSA RAMIREZ',
      telefono : 'F 7555569'
    },
    llaveProceso: '25473400300120180010500',
    numero      : 211,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.660.698 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-29',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-09-04',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 99873,
        '1': ''
      },
      radicado         : '2017 - 01035',
      vencimientoPagare: '2017-05-09'
    },
    deudor: {
      cedula: 14320811,
      direccion:
        'CARRERA 145 # 142F - 60  CASA 164',
      email   : 'verafarfan@hotmail.com',
      nombre  : 'FERNANDO VERA FARFAN',
      telefono: 3005421
    },
    llaveProceso: '11001400304620170103500',
    numero      : 212,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.573.628 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-30',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-04',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 85712,
        '1': ''
      },
      radicado         : '2017 - 01488',
      vencimientoPagare: '2021-04-25'
    },
    deudor: {
      cedula   : 52325613,
      direccion: 'CARRERA 98B # 14 - 06 CASA 166',
      email    : 'miricu143@hotmail.com',
      nombre   : 'MYRIAM CONSUELO RIOS FONSECA',
      telefono : 5739502
    },
    llaveProceso: '110014003088220170148800',
    numero      : 213,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '27.490.437 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-17',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-09-04',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 147381,
        '1': ''
      },
      radicado         : '2017 - 00867',
      vencimientoPagare: '2017-06-28'
    },
    deudor: {
      cedula: 52702559,
      direccion:
        'CALLE 6D # 5 - 60 MANZANA C CASA 17',
      email   : 'jennyprm@hotmail.com ',
      nombre  : 'YENNY PATRICIA RUBIO MAHECHA',
      telefono: '7290666 // 3204297147'
    },
    llaveProceso: '257544189002220170086700',
    numero      : 214,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.241.665 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-23',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-04',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 85677,
        '1': ''
      },
      radicado         : '2017 - 01273',
      vencimientoPagare: '2017-03-30'
    },
    deudor: {
      cedula   : 36458257,
      direccion: 'CARRERA 98B # 14 - 06 CASA 155',
      email    : 'luzdary.hurtado.rios@hotmail.com',
      nombre   : 'LUZ DARY HURTADO RIOS',
      telefono : 3182448
    },
    llaveProceso: '11001400300820170127300',
    numero      : 215,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '42.977 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 42982,
      fechaPresentacion      : '2017-10-23',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': '13401112,61'
      },
      radicado         : '2017 - 01255',
      vencimientoPagare: 96859
    },
    deudor: {
      cedula   : 51833717,
      direccion: '',
      email    : 'CARRERA 123 # 131 - 32 ',
      nombre   : 'BLANCA JANETH PINZON SUAREZ',
      telefono : 'janethpinzon@hotmail.com'
    },
    llaveProceso: '11001400300520170125500',
    numero      : 216,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'LiosJuridicos',
    demanda : {
      capitalAdeudado        : '206.655.465 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-17',
      etapaProcesal:
        'EL 24/07/2019 JUZGADO 3 DE EJECUCION DECRETA TERMINACION DEL PROCESO POR PAGO CUOTAS EN MORA // EL 12/12/2019 SE DEVOLVIO DESGLOSE CON GARANTIAS A AECSA S.A. // EL 31/08/2022 SE VERIFICA Y NO SE HA LEVANTADO MEDIDA CAUTELAR //CAJA  387 DE 2021',
      fechaPresentacion: '2019-12-12',
      municipio        : 'BOGOTA',
      obligacion       : {
        '0': 182540,
        '1': 'AUDIOPRESTAMO'
      },
      radicado         : '2017 - 00453',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 52328942,
      direccion: 'CALLE 58 # 45 - 86 ',
      email    : 'casas_castillo@hotmail.com',
      nombre   : 'DIANA VANESSA NARANJO HERNANDEZ',
      telefono : '2256952 // 3108096132'
    },
    llaveProceso: '11001310303720170045300',
    numero      : 217,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.963.196 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-25',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-11',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990118584,
        '1': '0377813642739792'
      },
      radicado         : '2017 - 00840',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 12402596,
      direccion: 'CALLE 144 # 136A - 45',
      email    : 'N/A',
      nombre   : 'ELIO ALVARADO HERNANDEZ',
      telefono : 6896897
    },
    llaveProceso: '11001400300220170084000',
    numero      : 218,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '50.891.805 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-04',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-11',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 25214,
        '1': ''
      },
      radicado         : '2017 - 01075',
      vencimientoPagare: '2032-07-19'
    },
    deudor: {
      cedula   : 80921416,
      direccion: 'CARRERA 99A # 61A - 19 CASA 61',
      email    : 'layton_blas@live.com',
      nombre   : 'BLAS LAITON PATIÑO',
      telefono : 7287007
    },
    llaveProceso: '11001400307220170107500',
    numero      : 219,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.810.342 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-04',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-09-11',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 112462,
        '1': ''
      },
      radicado         : '2017 - 01509',
      vencimientoPagare: '2023-10-14'
    },
    deudor: {
      cedula   : 51726361,
      direccion: 'AVENIDA CALLE 34 # 58 - 51 ',
      email    : 'mariae131@hotmail.com',
      nombre   : 'MARIA EUGENIA SALCEDO PINEDA',
      telefono : '7842477 // 3144468420 '
    },
    llaveProceso: '11001400304020170150900',
    numero      : 220,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.864.394 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-18',
      etapaProcesal          : 1.100140030132017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990095881,
        '1': 'N/A'
      },
      radicado         : '2017 - 01157',
      vencimientoPagare: '2022-04-19'
    },
    deudor: {
      cedula   : 52192430,
      direccion: 'CARRERA 81A # 54 - 32 ',
      email    : 'N/A',
      nombre   : 'BEATRIZ HELENA MACHADO',
      telefono:
        'F 4506940                  CEL 3103025587'
    },
    llaveProceso: '11001400301320170115700',
    numero      : 221,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '51.145.474 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-30',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-04',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 96356,
        '1': ''
      },
      radicado         : '2017 - 00858',
      vencimientoPagare: '2022-05-03'
    },
    deudor: {
      cedula   : 79332273,
      direccion: 'CARRERA 13 # 155 - 88 CASA 39',
      email    : 'htcolombia@gmail.com',
      nombre   : 'DUFRESNY AUGUSTO PINILLA',
      telefono : '5705869 // 3005705869'
    },
    llaveProceso: '11001400302820170085800',
    numero      : 222,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '43.653.352 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-23',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-08-28',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 11903330957,
        '1': '377816208286710 // 4513083951499464 // 5176407001878614 // 5303720129694960 // AUDIOPRESTAMO'
      },
      radicado: '2017 - 00860',
      vencimientoPagare:
        '18/04/2020  5/05/2020  15/12/2019'
    },
    deudor: {
      cedula   : 17174720,
      direccion: 'CALLE 159 # 15 - 45 ',
      email    : 'gerardomoncada70@hotmail.com',
      nombre   : 'GERARDO ANTONIO MONCADA VEGA ',
      telefono:
        'F 3349755                 CEL 3153330306'
    },
    llaveProceso: '11001400305520170086000',
    numero      : 223,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '36.182.458 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-29',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-08',
      municipio              : 'LA MESA',
      obligacion             : {
        '0': 4600,
        '1': ''
      },
      radicado         : '2017 - 00407',
      vencimientoPagare: '2023-04-30'
    },
    deudor: {
      cedula   : 52616509,
      direccion: 'CALLE 5 # 21 - 76',
      email    : 'mariarosacortes2233@hotmail.com',
      nombre   : 'MARIA ROSA ZARATE CORTES',
      telefono : 3114881698
    },
    llaveProceso: '25386400300120170040700',
    numero      : 224,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '23.287.784 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-18',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-04',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 141663,
        '1': ''
      },
      radicado         : '2017 - 01163',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 79815721,
      direccion:
        'CARRERA 88 C # 62 - 09 SUR APTO 104 ',
      email   : 'N/A',
      nombre  : 'LUIS OCTAVIO ROJAS VALBUENA',
      telefono: 7232380
    },
    llaveProceso: '11001400301320170116300',
    numero      : 225,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '19.290.331 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-06',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-13',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12583959,
        '1': ''
      },
      radicado         : '2017 - 00943',
      vencimientoPagare: '2017-08-31'
    },
    deudor: {
      cedula   : 80513085,
      direccion: 'CALLE 77 # 84 - 34',
      email    : 'ngurrero@hotmail.com',
      nombre   : 'NESTOR GERMAN URREGO AGUILERA',
      telefono : 80513085
    },
    llaveProceso: '11001400305520170094300',
    numero      : 226,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '18.546.821 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-04',
      etapaProcesal          : 1.100140030152017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12499205,
        '1': 'N/A'
      },
      radicado         : '2017 - 01249',
      vencimientoPagare: '2020-08-30'
    },
    deudor: {
      cedula   : 23550435,
      direccion: 'CARRERA 50 # 2A - 4 APTO 101',
      email    : 'N/A',
      nombre   : 'ROSA ELENA MARTINEZ DE DUITAMA',
      telefono : 'F 2775447'
    },
    llaveProceso: '11001400301520170124900',
    numero      : 227,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.622.019 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-04',
      etapaProcesal          : 1.100140030182017e22,
      fechaPresentacion      : 'EJECUCION',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 119098,
        '1': 'N/A'
      },
      radicado         : '2017 - 01517',
      vencimientoPagare: '2024-06-03'
    },
    deudor: {
      cedula   : 80740039,
      direccion: 'CALLE 48B SUR # 6C - 06 ',
      email    : 'fabianalexanderg@yahoo.es',
      nombre   : 'FABIAN ALEXANDER GIL GIL ',
      telefono : 'F 7609920'
    },
    llaveProceso: '11001400301820170151700',
    numero      : 228,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '102.825.603 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-04',
      etapaProcesal          : '',
      fechaPresentacion      : '1309/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 141432,
        '1': ''
      },
      radicado         : '2017 - 01240',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 52818428,
      direccion: 'CALLE 24D # 72A - 81  CASA 9',
      email    : 'alejandramogollonbernal@gmail.com',
      nombre:
        'JENNIFER ALEJANDRA MOGOLLÓN BERNAL ',
      telefono: 4166717
    },
    llaveProceso: '11001400306820170124000',
    numero      : 229,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '29.908.812 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-22',
      etapaProcesal          : 1.100140030522017e22,
      fechaPresentacion:
        'SUSPENDIDO CENTRO DE CONCILIACIÓN',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 12519174,
        '1': 'N/A'
      },
      radicado         : '2017 - 00906',
      vencimientoPagare: '23/0/72018'
    },
    deudor: {
      cedula: 1014185483,
      direccion:
        'CALLE 95 # 71 - 45 TORRE 8 APTO 1604',
      email : 'alexander.arquitecto@gmail.com',
      nombre: 'FREDY ALEXANDER MUÑOZ CASTAÑEDA',
      telefono:
        'F 8137713              CEL 3057528084'
    },
    llaveProceso: '11001400305220170090600',
    numero      : 230,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '',
      fechaPresentacion      : 'NOTIFICACION',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 44518,
        '1': 145608
      },
      radicado: '2017 - 00089',
      vencimientoPagare:
        'CALLE 67 C SUR 1B ESTE  APARTAMENTO 404 TORRE 2 '
    },
    deudor: {
      cedula   : 1022943195,
      direccion: 'marcelaipuzsuarez@hotmail.com',
      email    : '7493169 / 7672067',
      nombre   : 'DIANA MARCELA IPUZ SUAREZ Y OTRO',
      telefono : ''
    },
    llaveProceso: '11001418900920170008900',
    numero      : 231,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '9.844.757 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-06',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-18',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 162559,
        '1': ''
      },
      radicado         : '2017 - 00879',
      vencimientoPagare: '2033-03-22'
    },
    deudor: {
      cedula   : 1023868827,
      direccion: 'calle 39 SUR 9B 29 ESTE',
      email    : 'sandrujs2009@hotmail.com',
      nombre   : 'SANDRA MILENA CUBILLOS LINARES',
      telefono : 3679910
    },
    llaveProceso: '11001400304820170087900',
    numero      : 232,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '30.506.109 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-29',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-09-01',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4099838997529750,
        '1': '5303712728390736 // 12141636'
      },
      radicado         : '2017 - 00849',
      vencimientoPagare: '2020-08-24'
    },
    deudor: {
      cedula: 11313124,
      direccion:
        'CALLE 145 # 46 - 13 APTO 202 INT 5 ',
      email : 'jotorres@perosnalsoft.com.co',
      nombre: 'JOSE LUIS TORRES TAMAYO ',
      telefono:
        'F 3138216              CEL 3138216786'
    },
    llaveProceso: '11001400302820170084900',
    numero      : 233,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.414.194 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-09-06',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-18',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '377815075274932 / 5176400101402245',
        '1': '5303729008808054 // AUDIOPRESTAMO'
      },
      radicado         : '2017-01205',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 16940930,
      direccion: 'CALLE 152 12 35 INT 7',
      email    : 'mauricio.aguirre@bav.sabmiller',
      nombre:
        'MAURICIO ALEXANDER AGUIRRE BERMUDEZ',
      telefono: '7451585 /3052392765'
    },
    llaveProceso: '11001400304320170120500',
    numero      : 234,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '27.603.821 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-06',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-09-18',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 148931,
        '1': 'N/A'
      },
      radicado         : '2017 - 01134',
      vencimientoPagare: '2017-02-14'
    },
    deudor: {
      cedula: 79853115,
      direccion:
        'DIAGONAL 56 BIS 84 A 10 SUR TR 1',
      email : 'fanor.diaz@gmail.com ',
      nombre: 'FANOR DIAZ AGUDELO',
      telefono:
        'F 8060271                CEL 3212406193'
    },
    llaveProceso: '11001400300820170113400',
    numero      : 235,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '31.688.075 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-06',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-18',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 159497,
        '1': ''
      },
      radicado         : '2017 - 01362',
      vencimientoPagare: '2032-12-21'
    },
    deudor: {
      cedula   : 3165933,
      direccion: 'CARRERA 81 F 71F 56 ',
      email    : 'rigoberto-moreno20@hotmail.com ',
      nombre   : 'RIGOBERTO MORENO OLAYA',
      telefono : '7191321 /3123836799'
    },
    llaveProceso: '11001400308520170136200',
    numero      : 236,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '90.276.951 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-29',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-09-19',
      municipio              : 'TENJO',
      obligacion             : {
        '0': 151792,
        '1': ''
      },
      radicado         : '2017 - 00247',
      vencimientoPagare: '2017-05-14'
    },
    deudor: {
      cedula   : 80237050,
      direccion: 'CARRERA 9 No 3-93',
      email    : 'numasue@gmail.com',
      nombre   : 'NUMAEL AUGUSTO GONZALEZ SALGUERO',
      telefono : '8656241 /3114602334'
    },
    llaveProceso: '25799418900120170024700',
    numero      : 237,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '60.433.884 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-11',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-09-19',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12541785,
        '1': 186378
      },
      radicado         : '2017 - 01106',
      vencimientoPagare: '05/09/2017 //13/08/2030'
    },
    deudor: {
      cedula   : 7181490,
      direccion: '',
      email    : 'blamblemooo1@gmail.com',
      nombre   : 'FREDY ALEXANDER RUDA ARIAS',
      telefono : '2362747 /3106289389'
    },
    llaveProceso: '11001400304320170110600',
    numero      : 238,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'LiosJuridicos',
    demanda : {
      capitalAdeudado        : '17.882.476 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-13',
      etapaProcesal:
        'SIN LEVANTAMIENTO DE MEDIDA CAUTELAR AL 18/01/2023 SE ENCUENTRA DESARCHIVE DESDE EL 14 DE DICI DE 2022',
      fechaPresentacion: '2017-10-25',
      municipio        : 'BOGOTA',
      obligacion       : {
        '0': 20990135265,
        '1': ''
      },
      radicado         : '2017 - 01164',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 53131901,
      direccion:
        'CARRERA 88C  63 SUR 67 TORRE 5 APARTAMENTO 1',
      email   : 'N/A',
      nombre  : 'NIDIA JACQUELINE RIVEROS ARAQUE',
      telefono: 7839904
    },
    llaveProceso: '11001400304520170116400',
    numero      : 239,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '21.616.444 COP',
      departamento           : 'CUN DINAMARCA',
      entregaGarantiasAbogado: '2017-09-12',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-09-19',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 140122,
        '1': ''
      },
      radicado         : '2017 - 00829',
      vencimientoPagare: '2026-06-23'
    },
    deudor: {
      cedula   : 180145973,
      direccion: 'CARRERA 8 No 3-33',
      email    : 'cesarramm09@hotmail.com',
      nombre   : 'CESAR ALIRIO MORENO MONGUI',
      telefono : '5774513 /3134293286'
    },
    llaveProceso: '25754418900220170082900',
    numero      : 240,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.677.786 COP',
      departamento           : 'CUNDINNAMARCA',
      entregaGarantiasAbogado: '2017-09-11',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-19',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 18000088458,
        '1': ''
      },
      radicado         : '2017 - 01044',
      vencimientoPagare: '2018-07-27'
    },
    deudor: {
      cedula: 900535464,
      direccion:
        'CARRERA 8 BIS A No 151-86 APARTAMENTO 201',
      email   : 'publi.magic@hotmail.com',
      nombre  : 'PUBLI MAGIC S..A.S.',
      telefono: 4796494
    },
    llaveProceso: '11001400302320170104400',
    numero      : 241,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '21.740.168 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-11',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-19',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 20990182990,
        '1': ''
      },
      radicado         : '2017 - 00903',
      vencimientoPagare: '2023-04-20'
    },
    deudor: {
      cedula: 79793904,
      direccion:
        'CALLE 183 No11 -55 BLOQUE 9 APARTAMENTO 102',
      email   : 'johnhader70@hotmail.com',
      nombre  : 'JOHN HADER OTALVARO  ROMO',
      telefono: '4805457 /3223968514'
    },
    llaveProceso: '25754418900220180036300',
    numero      : 242,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '46.109.381 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-25',
      etapaProcesal:
        'EN EJECUCIÓN LIQUIDACIÓN CREDITO SOLICITADA A COVINOC',
      fechaPresentacion: '2017-08-31',
      municipio        : 'BOGOTA',
      obligacion       : {
        '0': 12577419,
        '1': 'N/A'
      },
      radicado         : '2017 - 00845',
      vencimientoPagare: '2020-08-11'
    },
    deudor: {
      cedula   : 300388244,
      direccion: 'CALLE 15 # 15 - 45 ',
      email    : 'N/A',
      nombre   : 'MARIA OLGA CASTAÑEDA PERUGACHI ',
      telefono:
        'F 1111111              CEL 32222239883 3143072762'
    },
    llaveProceso: '11001400306920170084500',
    numero      : 243,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '37.800.911 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-12',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-19',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 161786,
        '1': ''
      },
      radicado         : '2017 - 01006',
      vencimientoPagare: '2033-02-28'
    },
    deudor: {
      cedula   : 80144827,
      direccion: 'CALLE 62 A SUR 87C -58',
      email    : 'pajulo8@hotmail.com',
      nombre   : 'RICARDO ANDRES NOCUA GUATAMA',
      telefono : 7232237
    },
    llaveProceso: '11001400302620170100600',
    numero      : 244,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '35.432.721 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-06',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-09-19',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 103058,
        '1': ''
      },
      radicado         : '2017 - 00957',
      vencimientoPagare: '2022-11-21'
    },
    deudor: {
      cedula   : 79893549,
      direccion: 'CALLE 76 C SUR 1H 27 ',
      email    : 'jaorgodi@hotmail.com',
      nombre   : 'JAVIER ORLANDO GOMEZ DIAZ',
      telefono : 2389440
    },
    llaveProceso: '11001400303820170095700',
    numero      : 245,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '18.012.121 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-13',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-09-19',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 113645,
        '1': ''
      },
      radicado         : '2018 - 00242',
      vencimientoPagare: '2023-11-21'
    },
    deudor: {
      cedula   : 79805533,
      direccion: 'CARRERA 26 No 44-76 SUR',
      email    : 'N/A',
      nombre   : 'EDWIN BUITRAGO VILLAMIL',
      telefono : '7696884 /3204979488'
    },
    llaveProceso: '11001400304720180024200',
    numero      : 246,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '17.635.164 COP',
      departamento           : 'CUNDINNAMARCA',
      entregaGarantiasAbogado: '2017-09-06',
      etapaProcesal          : '',
      fechaPresentacion      : 'SENTENCIA',
      municipio              : 'ANAPOIMA',
      obligacion             : {
        '0': '377815356092904//45130711799741999',
        '1': 5303714068687853
      },
      radicado         : '2017 - 00173',
      vencimientoPagare: '2017-03-20'
    },
    deudor: {
      cedula   : 179290,
      direccion: 'CALLE 5 No  0-19 ANAPOIMA',
      email    : 'dlancheros92@hotmail.com',
      nombre   : 'DIONISIO LANCHEROS NOVOA',
      telefono : 3115221604
    },
    llaveProceso: '25035418900120170017300',
    numero      : 247,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '49.971.067 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-07',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-14',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 130619,
        '1': ''
      },
      radicado         : '2017 - 00871',
      vencimientoPagare: '2017-04-22'
    },
    deudor: {
      cedula   : 19475788,
      direccion: 'CALLE 31 SUR No 12-33 ',
      email    : 'hemacarblan@hotmail.com',
      nombre   : 'HENRY CARRANZA ALBA',
      telefono : '4070342/ 3193196261'
    },
    llaveProceso: '11001400305920170087100',
    numero      : 248,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '44.933.312 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-23',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-09-04',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 377813517259835,
        '1': '377814405234039 // 45130727777594186 // 5491572487025564 // AUDIOPRESTAMO'
      },
      radicado: '2017 - 00875',
      vencimientoPagare:
        '18/05/2020  // 5/05/2020 // 15/05/2019'
    },
    deudor: {
      cedula   : 19069228,
      direccion: 'CARRERA 15 # 188 - 39 ',
      email    : 'jorgemar24@gmail.com',
      nombre   : 'JORGE ALBERTO MARTINEZ BENDEK ',
      telefono:
        'F 6701643              CEL 3134749213'
    },
    llaveProceso: '11001400301620170087500',
    numero      : 249,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '46.432.606 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-04',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-14',
      municipio              : 'SOPO',
      obligacion             : {
        '0': '37781325203 /4513088996703762',
        '1': '5303729275150891 /12642123'
      },
      radicado         : '2017 - 00599',
      vencimientoPagare: '2017-08-29'
    },
    deudor: {
      cedula: 72165243,
      direccion:
        'CALLE 3 A No 5-56 APARTAAMENTO 101 SOPO',
      email   : 'vivipu@hotmail.com.co',
      nombre  : 'FRANCISCO CONTRERAS RAMIREZ',
      telefono: '8715525 /3135348199'
    },
    llaveProceso: '25758418900120170059900',
    numero      : 250,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '56.386.936 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2020-04-25',
      etapaProcesal          : '2017 - 01162',
      fechaPresentacion      : 1.100140030132017e22,
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12703441,
        '1': 'N/A'
      },
      radicado         : 'PRENDARIO',
      vencimientoPagare: '2017-08-22'
    },
    deudor: {
      cedula: 7226283,
      direccion:
        'CARRERA 11A # 17 - 24 SANTA BARBARA ',
      email   : 'cajux@hotmail.com',
      nombre  : 'CARLOS JAVIER BECERRA BENAVIDES',
      telefono: 'CEL 3178195535'
    },
    llaveProceso: 'EDIFICIO EJECUCION',
    numero      : 251,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '26.469.309 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-09-05',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-14',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 147600,
        '1': ''
      },
      radicado         : '2017 - 01236',
      vencimientoPagare: '2027-01-05'
    },
    deudor: {
      cedula   : 1023863956,
      direccion: 'CALLE 67 C SUR 1 B 23 EST',
      email    : 'angelsuarez.23@hotmail.com',
      nombre   : 'ANGEL JOVANI SUAREZ GOMEZ',
      telefono : 2848432
    },
    llaveProceso: '11001400303420170123600',
    numero      : 252,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.114.966 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-07',
      etapaProcesal          : 1.100140030252017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12395327,
        '1': 'N/A'
      },
      radicado         : '2017 - 00998',
      vencimientoPagare: '2020-09-04'
    },
    deudor: {
      cedula   : 1013604409,
      direccion: 'CALLE 47 SUR No 27-81 ',
      email    : 'jan_2504@hotmail.com',
      nombre   : 'JORGE EDUARDO ACOSTA CORREDOR',
      telefono:
        'F 3521314                 CEL 3115197002'
    },
    llaveProceso: '11001400302520170099800',
    numero      : 253,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '12.993.948 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-28',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-09-08',
      municipio              : 'CHIA',
      obligacion             : {
        '0': 9460081795,
        '1': 5303727444531025
      },
      radicado         : '2017 - 00477',
      vencimientoPagare: '2018-05-09'
    },
    deudor: {
      cedula: 52344904,
      direccion:
        'CARRERA 9A 14F - 28C - UNIDAD 22 CHIA',
      email : 'yohairapadro@gmail.com',
      nombre: 'YOHAIRA PRADO VALOYES',
      telefono:
        'F 8615372                  CEL 3103291690'
    },
    llaveProceso: '25175408900320170047700',
    numero      : 254,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.311.681 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-01',
      etapaProcesal          : 1.100140030122017e22,
      fechaPresentacion      : 'EJECUCION',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 940082843,
        '1': 'N/A'
      },
      radicado         : '2017 - 01021',
      vencimientoPagare: '2019-07-19'
    },
    deudor: {
      cedula   : 23946115,
      direccion: 'DIAGONAL 136 BIS # 3 - 80 SUR ',
      email    : 'N/A',
      nombre   : 'YEIMI ZORAIDA PEREZ ACEVEDO',
      telefono : 'F 2593579'
    },
    llaveProceso: '11001400301220170102100',
    numero      : 255,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '6.165.522 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-18',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-21',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 40800882948,
        '1': 96296
      },
      radicado         : '2017 - 01410',
      vencimientoPagare: '2019-09-02'
    },
    deudor: {
      cedula: 79881862,
      direccion:
        'TRANSVERSAL 112 C No  64 D -15, BLOQUE 7 APARTAMENTO 4',
      email   : 'freddydanasebas@hotmail.com',
      nombre  : 'FREDDY ARIAS MARTINEZ',
      telefono: 3552430
    },
    llaveProceso: '11001400300720170141000',
    numero      : 256,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.036.109 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-13',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-21',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990083482,
        '1': ''
      },
      radicado         : '2017 - 00138',
      vencimientoPagare: '2017-04-25'
    },
    deudor: {
      cedula: 79706920,
      direccion:
        'CALLE 8 A No 88B - 31 ETAPA 7 CASA 196',
      email   : 'N/A',
      nombre  : 'PAUL RICHARD CAICEDO',
      telefono: 7527164
    },
    llaveProceso: '11001418900720170013800',
    numero      : 257,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '18.506.672 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-01',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-09-06',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 5470083833,
        '1': '377813735559305 // 5303724061518310'
      },
      radicado         : '2017 - 01178',
      vencimientoPagare: '2018-01-26'
    },
    deudor: {
      cedula: 51740544,
      direccion:
        'CARRERA 121 # 128B - 52 BLOQUE 8 CASA 34',
      email   : 'dirfinanciera.sol@gmail.com',
      nombre  : 'SOL JUDITH BUITRAGO DUQUE',
      telefono: 'F 3002001'
    },
    llaveProceso: '11001400301320170117800',
    numero      : 258,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '79.266.368 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-13',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-21',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 153884,
        '1': ''
      },
      radicado         : '2017 - 01256',
      vencimientoPagare: '2017-04-23'
    },
    deudor: {
      cedula   : 52770471,
      direccion: 'CARRERA 87 F - No 26-74 SUR',
      email    : 'nelly_ruiz1980@hotmail.com',
      nombre   : 'LUZ NELLY RUIZ LARA ',
      telefono : 4505648
    },
    llaveProceso: '11001400303920170125600',
    numero      : 259,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.242.560 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-18',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-27',
      municipio              : 'FUSAGASUGA',
      obligacion             : {
        '0': 132687,
        '1': 3778133800181884
      },
      radicado         : '2017 - 00634',
      vencimientoPagare: '2017-09-12'
    },
    deudor: {
      cedula: 11384155,
      direccion:
        'CARRERA 4 ESTE 4-42  FUSAGASUGA ',
      email   : 'heralvarezpa@misena.edu.co',
      nombre  : 'HERNAN ALVAREZ PARDO',
      telefono: 3133854
    },
    llaveProceso: '25290400300120170063400',
    numero      : 260,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '18.220.483 COP',
      departamento           : 'CUNDINNAMARCA ',
      entregaGarantiasAbogado: '2017-09-18',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-27',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12686980,
        '1': ''
      },
      radicado         : '2017 - 01116',
      vencimientoPagare: '2017-09-11'
    },
    deudor: {
      cedula: 79901800,
      direccion:
        'CALLE 1 No 78 M 21 BLOQUE H4 APARTAMENTO 502',
      email   : 'dsenna_22@yahoo.com',
      nombre  : 'DANIEL ALBERTO IBAÑEZ DELGADO',
      telefono: '2737360 / 3125489014'
    },
    llaveProceso: '11001400308220170111600',
    numero      : 261,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.840.545 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-12',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-27',
      municipio              : 'FUSAGASUGA',
      obligacion             : {
        '0': '9450082213 /0377847716751531',
        '1': '0377847593768038'
      },
      radicado         : '2017 - 00631',
      vencimientoPagare: '2018-08-01'
    },
    deudor: {
      cedula: 1069737167,
      direccion:
        'DIAGONAL 1C No 25B -18  FUSAGASUGA',
      email   : 'rafael_moreno.z@hotmail.com',
      nombre  : 'RAFAEL ANDRES MORENO ZAMORA',
      telefono: '8864238/3103247146'
    },
    llaveProceso: '2590400300220170063100',
    numero      : 262,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '21.435.278 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-09-22',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-09-27',
      municipio              : 'PENSILVANIA',
      obligacion             : {
        '0': 12603197,
        '1': ''
      },
      radicado         : '2017 - 01007',
      vencimientoPagare: '2017-09-20'
    },
    deudor: {
      cedula   : 9856710,
      direccion: 'CARRERA  6 No 8-16 PENSILVANIA',
      email    : 'latablita1404@hotmail.com',
      nombre   : 'ANCIZAR GIRALDO BOTERO',
      telefono : 8555661
    },
    llaveProceso: '11001400307020170100700',
    numero      : 263,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '36.756.277 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-20',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-28',
      municipio              : 'SESQUILE',
      obligacion             : {
        '0': 3360084994,
        '1': ''
      },
      radicado         : '2017 - 00166',
      vencimientoPagare: '2017-08-04'
    },
    deudor: {
      cedula: 3058707,
      direccion:
        'VEREDA POTRERO LARGO  GUATAVITA',
      email   : 'N / A',
      nombre  : 'HECTOR JULIO GARZON PEÑA',
      telefono: 3105683065
    },
    llaveProceso: '25736408900120170016600',
    numero      : 264,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Insolvencia',
    demanda : {
      capitalAdeudado        : '115.224.736 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-21',
      etapaProcesal          : 1.100140030632018e22,
      fechaPresentacion:
        'PROCESO DE INSOLVENCIA PASO A LIQUIDACION JUDICIAL',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 186718,
        '1': '3778153354915637 / 4513079095670572'
      },
      radicado         : '2018 - 00650',
      vencimientoPagare: '2020-05-04'
    },
    deudor: {
      cedula: 7601476,
      direccion:
        'CARRERA 90 C No 6A - 31   - CASA 148',
      email : 'jsanchezargote@gmail.com',
      nombre: 'JULIO RENE SANCHEZ ARGOTE',
      telefono:
        'F 3018759                 CEL 3118027001'
    },
    llaveProceso: '1100140030202100050100',
    numero      : 265,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '67.660.913 COP',
      departamento           : 'CUNDINNAMARCA',
      entregaGarantiasAbogado: '2017-09-22',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-09-27',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12468489,
        '1': ''
      },
      radicado         : '2017 - 01219',
      vencimientoPagare: '2017-09-20'
    },
    deudor: {
      cedula   : 71192974,
      direccion: 'CARRERA 24 H No 23 A - 08 SUR',
      email    : 'mayaconfecciones1@gmail.com',
      nombre   : 'JULIAN DE JESUS ISAZA AGUIRRE',
      telefono : 3138085772
    },
    llaveProceso: '11001400302020170121900',
    numero      : 266,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '32.830.090 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-22',
      etapaProcesal          : 1.100140030622017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12547875,
        '1': 'N/A'
      },
      radicado         : '2017 - 01229',
      vencimientoPagare: '2020-09-20'
    },
    deudor: {
      cedula: 52102735,
      direccion:
        'CARRERA 5 C BIS No  54 - 06 SUR',
      email   : 'N/A',
      nombre  : 'ANA FABIOLA CARDOZO HERREÑO',
      telefono: 'F 5672482'
    },
    llaveProceso: '11001400306220170122900',
    numero      : 267,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '48.855.784 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-25',
      etapaProcesal          : 1.100140030352017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12649406,
        '1': 'N/A'
      },
      radicado         : '2017 - 01475',
      vencimientoPagare: '21/09/2020'
    },
    deudor: {
      cedula: 79592811,
      direccion:
        'CARRERA 72 No 23 - 24 APARTAMENTO 402  I',
      email   : 'johuleal@gmail.com',
      nombre  : 'JORGE HUGO LEAL SERRATO',
      telefono: 'F 7598804'
    },
    llaveProceso: '11001400303520170147500',
    numero      : 268,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '105.666.670 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-21',
      etapaProcesal          : '',
      fechaPresentacion      : 'TERMINO POR PAGO TOTAL',
      municipio              : 'FUNZA ',
      obligacion             : {
        '0': 182524,
        '1': ''
      },
      radicado         : '2018 - 00421',
      vencimientoPagare: '31/03/2025'
    },
    deudor: {
      cedula   : 80162950,
      direccion: 'CARRERA 16 No 14 - 36 ',
      email    : 'ju@yahoo.es',
      nombre   : 'JUAN CARLOS ORTIZ CUERVO',
      telefono : 5490735
    },
    llaveProceso: '25286400300120180042100',
    numero      : 269,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.921.423 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-25',
      etapaProcesal          : '',
      fechaPresentacion      : '05/10/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12327160,
        '1': ''
      },
      radicado         : '2017 - 01139',
      vencimientoPagare: '21/09/2017'
    },
    deudor: {
      cedula   : 1018423770,
      direccion: 'CALLE 37 B No 68 I - 23 SUR',
      email    : 'andresxaw@gmail.com',
      nombre   : 'WILMER ANDRES QUIÑONES HERNANDEZ',
      telefono : '4566333 / 3107727822'
    },
    llaveProceso: '11001408903420170113900',
    numero      : 270,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '05/10/2017',
      fechaPresentacion      : '17/10/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': '39.495.993.87'
      },
      radicado         : '2017 - 00990',
      vencimientoPagare: 12600924
    },
    deudor: {
      cedula   : 52850427,
      direccion: '',
      email:
        'CARRERA 16 No  24 - 34 APARTAMENTO 302',
      nombre  : 'AURA GEOVANA RODRIGUEZ MORA',
      telefono: 'geomora850@hotmail.com'
    },
    llaveProceso: '11001400405420170099000',
    numero      : 271,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '14.586.242 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-25',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '05/10/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12381866,
        '1': ''
      },
      radicado         : '2017 - 00763',
      vencimientoPagare: '21/09/2017'
    },
    deudor: {
      cedula   : 80406979,
      direccion: 'CALLE 9 No 1 - 32     TABIO',
      email    : 'nellyandreabotiab@hotmail.com',
      nombre   : 'LUIS FERNANDO GUTIERREZ RODRIGUEZ',
      telefono : 7697763
    },
    llaveProceso: '11001400300620170076300',
    numero      : 272,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Insolvencia',
    demanda : {
      capitalAdeudado        : '65.355.736 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-25',
      etapaProcesal          : 1.100140030642018e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 156791,
        '1': 'N/A'
      },
      radicado         : '2018 - 01029',
      vencimientoPagare: '5/10/2022'
    },
    deudor: {
      cedula   : 1024479389,
      direccion: 'CALLE 67 No 17 C-63 SUR',
      email    : 'sonymarce20@hotmail.com',
      nombre   : 'SONIA MARCELA MOLINA QUIMBAYO',
      telefono : 'F 7650684'
    },
    llaveProceso: '11001400306420180102900',
    numero      : 273,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.918.060 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-21',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '05/10/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 109481,
        '1': ''
      },
      radicado         : '2017 - 01484',
      vencimientoPagare: '27/06/2017'
    },
    deudor: {
      cedula   : 80312466,
      direccion: 'carrera 28 No  84 - 36',
      email    : 'andresacevedo24@hotmail.com',
      nombre   : 'ANDRES GUILLERMO ACEVEDO BORRAEZ',
      telefono : '6915340 /3178134824'
    },
    llaveProceso: '11001400300720170148400',
    numero      : 274,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '11.599.559 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-27',
      etapaProcesal          : '',
      fechaPresentacion      : '05/10/2017',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 20990124579,
        '1': ''
      },
      radicado         : '2017 - 00969',
      vencimientoPagare: '09/12/2024'
    },
    deudor: {
      cedula: 39670695,
      direccion:
        'TRANSVERSAL 4 B No 3 - 64 sur  APTO 473  SOACHA',
      email   : 'rokerita19748@hotmail.com',
      nombre  : 'HORTENCIA GARZON',
      telefono: '6012243 / 3208100658'
    },
    llaveProceso: '25754408900320170096900',
    numero      : 275,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '46.086.886 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-09-21',
      etapaProcesal          : '',
      fechaPresentacion      : '05/10/2017',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 190886,
        '1': ''
      },
      radicado         : '2017 - 00381',
      vencimientoPagare: '05/02/2017'
    },
    deudor: {
      cedula: 79200345,
      direccion:
        'CARRERA 5  No 5 - 30 APARTAMENTO 202 SOACHA ',
      email   : 'nelson_mayorga@outlook.com',
      nombre  : 'NELSON MAYORGA GOMEZ',
      telefono: '9008364 / 3204283595'
    },
    llaveProceso: '25754400300420170038100',
    numero      : 276,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '23.454.012 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-01',
      etapaProcesal          : 1.100140030832017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 1710090192,
        '1': 'AUDIOPRESTAMO'
      },
      radicado         : '2017 - 00980',
      vencimientoPagare: '2019-08-07'
    },
    deudor: {
      cedula   : 39687966,
      direccion: 'DIAGONAL 76 # 6 - 12 APTO 604',
      email    : 'olgalucia.herazo@gmail.com',
      nombre   : 'OLGA LUCIA HERAZO PERDOMO ',
      telefono : 'F 2120692'
    },
    llaveProceso: '11001400308320170098000',
    numero      : 277,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '12.347.548 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-28',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '10/10/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4670083154,
        '1': 'N/A'
      },
      radicado         : '2017 - 01391',
      vencimientoPagare: '18/03/2019'
    },
    deudor: {
      cedula   : 35506033,
      direccion: 'CARRERA  101  No 71 B - 53',
      email    : 'natis-rolita@hotmail.con',
      nombre   : 'LUZ DARY PUERTA JARAMILLO',
      telefono:
        'F 4357832                CEL 3103430010'
    },
    llaveProceso: '11001400303720170139100',
    numero      : 278,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '14.404.721 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-08-25',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-09-04',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2330087057,
        '1': 'N/A'
      },
      radicado         : '2017 - 01058',
      vencimientoPagare: '2020-12-07'
    },
    deudor: {
      cedula: 1069745324,
      direccion:
        'CALLE 14A SUR # 11M - 18 CASA 22',
      email   : 'N/A',
      nombre  : 'ANDRES FELIPE GUTIERREZ TRUJILLO',
      telefono: 'CEL 3115964170'
    },
    llaveProceso: '11001400300820170105800',
    numero      : 279,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '11.796.195 COP',
      departamento           : 'CUNDINNAMARCA',
      entregaGarantiasAbogado: '2017-09-11',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-09-19',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 8920084662,
        '1': 'N/A'
      },
      radicado         : '2017 - 01279',
      vencimientoPagare: '15/012021 '
    },
    deudor: {
      cedula   : 19447966,
      direccion: 'CR 12B 24-37 SUR',
      email    : 'jhernandosanchez@yahoo.es',
      nombre   : 'JOSE HERNANDO SANCHEZ VALBUENA',
      telefono:
        'F 4789274              CEL 3125826241'
    },
    llaveProceso: '11001400300920170127900',
    numero      : 280,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '10/10/2017 // 13/03/2018',
      fechaPresentacion      : '13/04/2018',
      municipio              : 'ARBELAEZ',
      obligacion             : {
        '0': '',
        '1': '112.243.598.43'
      },
      radicado         : '2018 - 00049',
      vencimientoPagare: 21258
    },
    deudor: {
      cedula   : 1069712582,
      direccion: '',
      email    : ' CALLE 34 No 2 - 15 SOACHA',
      nombre   : 'YENNY MARGOTH LARA MUÑOZ',
      telefono : 'yennychipaque@outlook.com'
    },
    llaveProceso: '25053408900120180004900',
    numero      : 281,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '66.362.959 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-21',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '10/10/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 174366,
        '1': 'N/A'
      },
      radicado         : '2017 - 01394',
      vencimientoPagare: '5/05/2024'
    },
    deudor: {
      cedula   : 19255260,
      direccion: 'CALLE 2 C No 62 - 20',
      email    : 'maifren_13@yahoo.es',
      nombre   : 'MATIAS HUMBERTO AVILA AGUILAR',
      telefono:
        'F 4170527              CEL 3125024008'
    },
    llaveProceso: '11001400301520170139400',
    numero      : 282,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '21.109.451 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-26',
      etapaProcesal          : 'LIQUIDACION',
      fechaPresentacion      : 'RT',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 1860086996,
        '1': ''
      },
      radicado         : '2017 - 01140',
      vencimientoPagare: '2017-07-20'
    },
    deudor: {
      cedula: 1010188573,
      direccion:
        'CALLE 6 D No 88 D 59  APARTAMENTO  402',
      email   : 'jansonmalak@hotmail.com',
      nombre  : 'JANSON DAVID CARREÑO QUIJANO',
      telefono: 4095235
    },
    llaveProceso: '11001400304120170114000',
    numero      : 283,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.488.696 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-27',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-10-10',
      municipio              : 'COTA',
      obligacion             : {
        '0': 300093754,
        '1': ''
      },
      radicado         : '2017 - 00704',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 93119101,
      direccion: 'VEREDA EL TIME  ( COTA )',
      email    : 'abarriosleg@yahoo.es',
      nombre   : 'ARMANDO BARRIOS VARGAS ',
      telefono : 3380250
    },
    llaveProceso: '25214400300120170070400',
    numero      : 284,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '21.223.176 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-12',
      etapaProcesal          : 1.100140030052017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 6900083898,
        '1': '4513086465970276 // AUDIOPRESTAMO'
      },
      radicado         : '2017 - 01326',
      vencimientoPagare: '2017-06-10'
    },
    deudor: {
      cedula: 52318314,
      direccion:
        'CALLE 19 A 82 65 TR 4 APARTAMENTO 301 ',
      email : 'adrianitaa@gmail.com',
      nombre: 'ADRIANA MARIA PEREZ GOMEZ',
      telefono:
        '8065373                  CEL 3134576869'
    },
    llaveProceso: '11001400300520170132600',
    numero      : 285,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '94.533.343 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-11',
      etapaProcesal          : 'CURADOR AD LITEM',
      fechaPresentacion      : '2017-09-19',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12711612,
        '1': 'N/A'
      },
      radicado         : '2017 - 01195',
      vencimientoPagare: '2020-09-06'
    },
    deudor: {
      cedula   : 80259791,
      direccion: 'DIAGONAL 48 J No 5C- 34 SUR',
      email    : 'gerencia.seguridadgf@gmail.com',
      nombre   : 'ALIRIO HEREDIA BUITRAGO',
      telefono : 'F 2796621'
    },
    llaveProceso: '11001400301720170119500',
    numero      : 286,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Insolvencia',
    demanda : {
      capitalAdeudado        : '44.309.785 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-04',
      etapaProcesal          : 1.100140037162017e22,
      fechaPresentacion      : 'PROCESO DE INSOLVENCIA',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12592504,
        '1': 'N/A'
      },
      radicado         : '2017 - 00157',
      vencimientoPagare: '2020-09-29'
    },
    deudor: {
      cedula   : 79861754,
      direccion: 'CALLE 72 A No  74 A - 77  ',
      email    : 'carlosgrugec@hotmail.com ',
      nombre   : 'CARLOS GERMAN RUGE CASTAÑEDA',
      telefono:
        'F 6087374              CEL 3104865508'
    },
    llaveProceso: '11001400301620170015700',
    numero      : 287,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '60.495.232 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-03',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-10-06',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 138027,
        '1': ''
      },
      radicado         : '2017 - 01133',
      vencimientoPagare: '2017-04-15'
    },
    deudor: {
      cedula   : 20371142,
      direccion: 'DIAGONAL  15 B No 104 - 46 ',
      email    : 'isafrevi@hotmail.com',
      nombre   : 'VIVIANA MARCELA ROA VIVAS',
      telefono : 8454465
    },
    llaveProceso: '11001400308320170113300',
    numero      : 288,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '14.645.611 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-11',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-09-14',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 5306940432740470,
        '1': 'N/A'
      },
      radicado         : '2017 - 01522',
      vencimientoPagare: '2020-03-22'
    },
    deudor: {
      cedula   : 12229243,
      direccion: 'AVENIDA 1 DE MAYO No 29-06 ',
      email    : 'serdiajo@gmail.com',
      nombre   : 'JOSE AHINSONJOBER TORO VARGAS',
      telefono : 'F 4651401'
    },
    llaveProceso: '11001400301820170152200',
    numero      : 289,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.869.971 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-27',
      etapaProcesal          : 'SUSPENDIDO',
      fechaPresentacion      : '2017-10-06',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 83616,
        '1': ''
      },
      radicado         : '2017 - 00975',
      vencimientoPagare: '2020-12-13'
    },
    deudor: {
      cedula: 40035102,
      direccion:
        'DIAGONAL 15 B - 104 - 45 CASA  55',
      email   : 'luz.y31@hotmail.com',
      nombre  : 'ELIZABETH GIL RODRIGUEZ',
      telefono: '6051177 / 3152504510'
    },
    llaveProceso: '11001400305920170097500',
    numero      : 290,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '55.186.030 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-29',
      etapaProcesal          : 'LIQUIDACION',
      fechaPresentacion      : '06/102017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '200828  / 4513070087585399',
        '1': 55303710092258330
      },
      radicado         : '2017 - 01330',
      vencimientoPagare: '2017-08-04'
    },
    deudor: {
      cedula: 35427969,
      direccion:
        'CARRERA 91 No 157 B - 82  TORRE 2 APARTAMENTO 40',
      email   : 'carof111@hotmail.com',
      nombre  : 'YEIMMY CAROLINA FINO BALLEN',
      telefono: 8520724
    },
    llaveProceso: '11001400303920170133000',
    numero      : 291,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '25.766.204 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-13',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-09-21',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 300094317,
        '1': 'N/A'
      },
      radicado         : '2017 - 00128',
      vencimientoPagare: '2020-08-31'
    },
    deudor: {
      cedula: 80205694,
      direccion:
        'DIAGONAL 82 A SUR No 7C 19  ESTE',
      email : 'kellyo.1508@hotmail.com',
      nombre: 'JOHN FREDY HERREÑO RAMIREZ ',
      telefono:
        'F 7641957                CEL 3124102'
    },
    llaveProceso: '11001410375220170012800',
    numero      : 292,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '12.249.598 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-19',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-10-06',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '320088443  / 377813441863587',
        '1': 4513070212799642
      },
      radicado         : '2017 - 00974',
      vencimientoPagare: '2020-03-05'
    },
    deudor: {
      cedula: 1032383389,
      direccion:
        'CALLE 64 SUR  No 85 B - 40  APARTAMENTO  104',
      email : 'ars.09@hotmail.com',
      nombre: 'ANDERSON REVELO SANTOS ',
      telefono:
        'F 4725511              CEL 3118526428'
    },
    llaveProceso: '11001400304820170097400',
    numero      : 293,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '48.498.610 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-18',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-09-21',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12676248,
        '1': 'N/A'
      },
      radicado         : '2017 - 00924',
      vencimientoPagare: '2020-09-13'
    },
    deudor: {
      cedula: 79292743,
      direccion:
        'CALLE 86 A No 69 T -41  TORRE 1 APARTAMENTO 902',
      email   : 'hpulecio@cable.net.co',
      nombre  : 'HERNANDO PULECIO PAREDES',
      telefono: 'F 4619449'
    },
    llaveProceso: '11001400306320170092400',
    numero      : 294,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '25.845.669 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-18',
      etapaProcesal:
        'PENDIENTE SENTENCIA Y OFICIOS',
      fechaPresentacion: '2017-09-21',
      municipio        : 'BOGOTA',
      obligacion       : {
        '0': 12389160,
        '1': 'N/A'
      },
      radicado         : '2017 - 01113',
      vencimientoPagare: '2020-09-12'
    },
    deudor: {
      cedula: 36536419,
      direccion:
        'CALLE 124 No  20-76 APARTAMENTO 503',
      email   : 'N/A',
      nombre  : 'RITA CECILIA FERNANDEZ IBAÑEZ',
      telefono: 'F 2131020'
    },
    llaveProceso: '11001400305120170111300',
    numero      : 295,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '20.063.065 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-06',
      etapaProcesal          : 1.100141037522017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'KENNEDY',
      obligacion             : {
        '0': 12445450,
        '1': 'N/A'
      },
      radicado         : '2017 - 01291',
      vencimientoPagare: '2020-10-04'
    },
    deudor: {
      cedula: 86074992,
      direccion:
        'DIAGONAL 40 G SUR-  No 72 J - 35 INTERIOR 2A',
      email   : 'diharveypra@yahoo.es',
      nombre  : 'DIDIER HARVEY PRADA AGUIRRE',
      telefono: 'F 7356359'
    },
    llaveProceso: '11001410375220170129100',
    numero      : 296,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '28.485.816 COP',
      departamento           : 'BOYACÁ',
      entregaGarantiasAbogado: '2017-09-21',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '12/10/2017',
      municipio              : 'UMBITA',
      obligacion             : {
        '0': 5450082766,
        '1': 5450083252
      },
      radicado         : '2017 - 00095',
      vencimientoPagare: '10/07/2019'
    },
    deudor: {
      cedula   : 6006685,
      direccion: 'CALLE 5 A No 6 - 23 UMBITA',
      email    : 'N/A',
      nombre   : 'MIGUEL ANGEL MARTINEZ HUERTAS',
      telefono : 'CEL 3123077900'
    },
    llaveProceso: '15842408900120170009500',
    numero      : 297,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '96.442.977 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-13',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-10-17',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 155487,
        '1': ''
      },
      radicado         : '2017 - 00986',
      vencimientoPagare: '2017-04-04'
    },
    deudor: {
      cedula: 79659040,
      direccion:
        ' CALLE 58 A SUR No 18 B -35 INT 6',
      email   : 'gabrielisag61@hotmail.com',
      nombre  : 'HECTOR GABRIEL RAMIREZ BOHORQUEZ',
      telefono: '2053366/  3164700074'
    },
    llaveProceso: '11001400307820170098600',
    numero      : 298,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '28.432.149 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-13',
      etapaProcesal          : '',
      fechaPresentacion      : 'NOTIFICACION',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 6980085637,
        '1': 120353
      },
      radicado         : '2017 - 00346',
      vencimientoPagare: '2017-07-15'
    },
    deudor: {
      cedula: 80879280,
      direccion:
        'CARRERA 9 ESTE No 36-59 SUR  SOACHA',
      email   : 'roberto.g12@hotmail.com',
      nombre  : 'ROBERTO STIVENSON ACERO BARON',
      telefono: 7307304
    },
    llaveProceso: '25754400300320170034600',
    numero      : 299,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '19.678.334 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-12',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2017-10-18',
      municipio              : 'FUNZA',
      obligacion             : {
        '0': 12245382,
        '1': ''
      },
      radicado         : '2017 - 00816',
      vencimientoPagare: '2017-05-26'
    },
    deudor: {
      cedula: 79617611,
      direccion:
        'CARRERA 3 E No 11-60 INTERIOR 9 CASA 2  FUNZA',
      email   : 'fabiojara@gmail.com',
      nombre  : 'FABIO EDILBERTO JARA SANCHEZ',
      telefono: '2623688 /3174280231'
    },
    llaveProceso: '25286400300120170081600',
    numero      : 300,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '43.021 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 43026,
      fechaPresentacion      : '',
      municipio              : 'GUASCA',
      obligacion             : {
        '0': 169241,
        '1': '24.721.567.58'
      },
      radicado         : '2018 - 00022',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 35220385,
      direccion: '',
      email    : 'CALLE 1 A - No 6-68 PORTAL  GUASCA',
      nombre   : 'BLANCA YOLANDA ACOSTA RODRIGUEZ',
      telefono : 'yolanda23wp@hotmail.com'
    },
    llaveProceso: '25322418900120180002200',
    numero      : 301,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '153.236.346 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-12',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-10-19',
      municipio              : 'FUNZA',
      obligacion             : {
        '0': 159541,
        '1': ''
      },
      radicado         : '2017 - 01003',
      vencimientoPagare: '2032-12-24'
    },
    deudor: {
      cedula: 79906707,
      direccion:
        'CARRER 5  No 2-35  MANZANA 21 CASA 208- MOSQUERA',
      email   : 's3curityinformation@gmail.com',
      nombre  : 'EDGAR GODOY LOPEZ',
      telefono: '8272125 /3005821212'
    },
    llaveProceso: '25286310300120170100300',
    numero      : 302,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.534.383 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-16',
      etapaProcesal          : 1.100140030302017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '2620088246 / 3777813457586759',
        '1': 4594250105313477
      },
      radicado         : '2017 - 01579',
      vencimientoPagare: '2020-07-14'
    },
    deudor: {
      cedula   : 1118532643,
      direccion: 'CARRERA 16 No 66 A 16 ',
      email:
        'willintong950@gmail.com  rafaelalfonsocamachovelandia@gmail.com',
      nombre: 'RAFAEL ALFONSO CAMACHO VELANDIA',
      telefono:
        'F 7170610           CEL 3202777672'
    },
    llaveProceso: '11001400303020170157900',
    numero      : 303,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '61.821.425 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-18',
      etapaProcesal          : 1.100140030732017e22,
      fechaPresentacion:
        'SIN LEVANTAMIENTO DE MEDIDSA CAUTELAR  PAQUETE 269',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 134175,
        '1': ''
      },
      radicado         : 'BOGOTA',
      vencimientoPagare: '2025-11-26'
    },
    deudor: {
      cedula: 79892240,
      direccion:
        'CALLE 76 A SUR No 1 B - 40 ESTE',
      email   : 'ferchog01@yahoo.es',
      nombre  : 'FERNANDO GONZALEZ TELLEZ',
      telefono: '7621723/3212414138'
    },
    llaveProceso: '2017 - 01411',
    numero      : 304,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '11.961.381 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-17',
      etapaProcesal          : 1.100140030822017e22,
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12048231,
        '1': 'N/A'
      },
      radicado         : '2017 - 01256',
      vencimientoPagare: '2020-10-11'
    },
    deudor: {
      cedula   : 19479861,
      direccion: 'DIAGONAL 5 D BIS No 44 A -45',
      email    : 'serinconr@hotmail.com',
      nombre   : 'FERNANDO RINCON RODRIGUEZ',
      telefono : 'F8035212'
    },
    llaveProceso: '11001400308220170125600',
    numero      : 305,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '18.368.757 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-20',
      etapaProcesal          : 1.1001400306420171e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 11788203,
        '1': 'N/A'
      },
      radicado         : '2017 - 01490',
      vencimientoPagare: '10/810/2020'
    },
    deudor: {
      cedula   : 7217446,
      direccion: 'CALLE 127 B No 19-60 APTO 402',
      email    : 'N MI',
      nombre   : 'JORGE ARTURO JIMENEZ LEAL',
      telefono:
        'F 2953878           CEL 3102050752'
    },
    llaveProceso: '11001400306420170149000',
    numero      : 306,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '70.693.047 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-10-20',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-10-24',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 190522,
        '1': 4594250022871300
      },
      radicado         : '2017 - 01125',
      vencimientoPagare: '2031-01-27'
    },
    deudor: {
      cedula: 79309509,
      direccion:
        'TRANSVERSAL 70 G No 63-52 SUR APTO 27 TORRE 2',
      email   : 'cac.marketing@hotmail.com',
      nombre  : 'CARLOS ARTURO CASTAÑO ALDANA',
      telefono: 4675567
    },
    llaveProceso: '11001400303620170112500',
    numero      : 307,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '83.592.166 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-23',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-10-24',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 143579,
        '1': ''
      },
      radicado         : '2017 - 01176',
      vencimientoPagare: '2017-05-27'
    },
    deudor: {
      cedula: 80271269,
      direccion:
        'CARRERA 76 No 57 Z-46 SUR INTERIOR 3 APARTAMENTO 6',
      email   : 'osfacer@hotmail.com',
      nombre  : 'OSCAR ERNESTO SERRANO VELASCO',
      telefono: 7197503
    },
    llaveProceso: '11001400302220170117600',
    numero      : 308,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-24',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-10-31',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4513080019699192,
        '1': '0377815686597168'
      },
      radicado         : '2017 - 01613',
      vencimientoPagare: '2017-04-22'
    },
    deudor: {
      cedula   : 19332163,
      direccion: 'CARRERA 69 C No 98A -50 ',
      email    : 'hencast@hotmail.com',
      nombre   : 'HENRY NOEL CASTELBLANCO SOSA',
      telefono : 4424940
    },
    llaveProceso: '11001400306720170161300',
    numero      : 309,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '40.406.421 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-04',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '10/10/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '1740086734 4513073749673967',
        '1': 5303719549810730
      },
      radicado         : '2017 - 01532',
      vencimientoPagare: '23/03/2020'
    },
    deudor: {
      cedula   : 79388145,
      direccion: 'CARRERA 72 A- No 9 - 44  ',
      email    : 'li_bcar@hotmail.com',
      nombre   : 'LIBARDO ALFONSO GONZALEZ TRIVIÑO ',
      telefono : 'F 2928108'
    },
    llaveProceso: '11001400302120170153200',
    numero      : 310,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '10.761.991 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-24',
      etapaProcesal          : 'LIQUIDACION',
      fechaPresentacion      : '2017-10-31',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': '00377815346213420'
      },
      radicado         : '2017 - 00184',
      vencimientoPagare: '2017-07-20'
    },
    deudor: {
      cedula: 32730630,
      direccion:
        'CARRERA 65 No 22 A- 43 APARTAMENTO 1002- 5',
      email   : 'pa_pinzon@hotmail.com',
      nombre  : 'PAULA ANDREA PINZON OTALVARO',
      telefono: 5745876
    },
    llaveProceso: '11001400370820170018400',
    numero      : 311,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '10.668.327 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-26',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-10-21',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 82317,
        '1': ''
      },
      radicado         : '2017 - 01140',
      vencimientoPagare: '2017-06-08'
    },
    deudor: {
      cedula: 80394456,
      direccion:
        'CARRERA 87 D No 42 A 20 SUR INTERIOR 6',
      email   : 'pedrosebastin394@hotmail.com',
      nombre  : 'PEDRO PABLO SARMIENTO MAYORGA ',
      telefono: 8138756
    },
    llaveProceso: '11001418904320170114000',
    numero      : 312,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.521.212 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-25',
      etapaProcesal          : 1.1001400307820171e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 3000093979,
        '1': 'N/A'
      },
      radicado         : '2017 - 01049',
      vencimientoPagare: '2017-06-22'
    },
    deudor: {
      cedula: 80490307,
      direccion:
        'DIAGONAL 68 SUR No 37-69 INT 136',
      email   : 'mauricioperez7314@hotmail.com',
      nombre  : 'MAURICIO PEREZ PLAZAS',
      telefono: 'F 8042266'
    },
    llaveProceso: '11001400307820170104900',
    numero      : 313,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '21.139.648 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-31',
      etapaProcesal          : 'TERMINADO',
      fechaPresentacion      : '2017-11-08',
      municipio              : 'CAJICA',
      obligacion             : {
        '0': 161979,
        '1': ''
      },
      radicado         : '2017 - 00768',
      vencimientoPagare: '2033-03-06'
    },
    deudor: {
      cedula: 1075655673,
      direccion:
        'CARRERA 2 B - No 2 J - 55  LOTE 6 MZ 25',
      email   : 'revisionvillavicencio@gmail.co',
      nombre  : 'TATIANA RAMON PEPICANO',
      telefono: 8510171
    },
    llaveProceso: '25126408900220170076800',
    numero      : 314,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '47.230.309 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-28',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-11-01',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 170453,
        '1': ''
      },
      radicado         : '2017 - 00364',
      vencimientoPagare: '2033-12-05'
    },
    deudor: {
      cedula: 80203869,
      direccion:
        'CALLE 34 A SUR No 13 - 46  SOACHA',
      email   : 'bladimir0612@hotmail.com',
      nombre  : 'BLADIMIR GUTIERREZ CIFUENTES',
      telefono: 9015412
    },
    llaveProceso: '25754400300320170036400',
    numero      : 315,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '44.944.657 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-26',
      etapaProcesal          : 'EJECUCION',
      fechaPresentacion      : '2017-11-01',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': '180049   53037120066499008',
        '1': '3778133433049336 /4513075801129044'
      },
      radicado         : '2017 - 00323',
      vencimientoPagare: '2030-01-05'
    },
    deudor: {
      cedula: 8799171,
      direccion:
        'CARRERA 18 B No 4 C -  20  SOACHA',
      email   : 'saliradelante2012@hotmail.com',
      nombre  : 'MANUEL ENRIQUE ARTEAGA OROZCO',
      telefono: 'F 5164071'
    },
    llaveProceso: '25754400300120170032300',
    numero      : 316,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.008.514 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-31',
      etapaProcesal          : 'LIQUIDACION',
      fechaPresentacion      : '2017-11-07',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 123326,
        '1': ''
      },
      radicado         : '2017 - 01813',
      vencimientoPagare: ' 21/10/2024'
    },
    deudor: {
      cedula   : 80251653,
      direccion: 'CALLE 62 G  No 75 g - 18 sur',
      email    : 'wilsoningind@yahoo.es',
      nombre   : 'WILSON JAVIER SANCHEZ',
      telefono : 5971320
    },
    llaveProceso: '11001400301820170181300',
    numero      : 317,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '43.033 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 43041,
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': '14.703.952.55'
      },
      radicado         : '2017 - 01164',
      vencimientoPagare: 121594
    },
    deudor: {
      cedula   : 51673703,
      direccion: '',
      email    : 'CALLE 52 SUR No 97 C - 20',
      nombre   : 'SONIA JANETH RODRIGUEZ',
      telefono : 'sonianicolas@hotmail.com'
    },
    llaveProceso: '11001400307020170116400',
    numero      : 318,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '24.165.959 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-25',
      etapaProcesal          : 'LIQUIDACION',
      fechaPresentacion      : '2017-11-08',
      municipio              : 'CAJICA',
      obligacion             : {
        '0': '335008770 /3350086329',
        '1': '53003710116636165/0377813180199052'
      },
      radicado         : '2017 - 00756',
      vencimientoPagare: '2017-12-05'
    },
    deudor: {
      cedula   : 33307437,
      direccion: ' CARRERA 2 No 1 - 23  cajica',
      email    : 'N/A',
      nombre   : 'GLORIA ANGELICA PRASCA MEJIA',
      telefono : ''
    },
    llaveProceso: '25126400300120170075600',
    numero      : 319,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '27.247.328 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-31',
      etapaProcesal          : 1.100140030562017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12727553,
        '1': 'N/A'
      },
      radicado         : '2017 - 01312',
      vencimientoPagare: '2020-10-26'
    },
    deudor: {
      cedula   : 1032492078,
      direccion: 'CARRERA 1F ESTE No 90-63 SUR',
      email    : 'crisandres12@hotmail.com',
      nombre   : ' MARIA CAMILA MACIAS PADILLA',
      telefono : 'F 7681014'
    },
    llaveProceso: '11001400305620170131200',
    numero      : 320,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.867.980 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-02',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion:
        '7/11/2017  13/12/17 2DA VEZ',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 2150091479,
        '1': ''
      },
      radicado         : '2017 - 01367',
      vencimientoPagare: '2018-09-21'
    },
    deudor: {
      cedula: 52391771,
      direccion:
        'TRANSVERSAL 78 B No 6 B - 20 APARTAMENTO 101',
      email   : 'N/A',
      nombre  : 'ADELA BARAJAS MORENO',
      telefono: 2928808
    },
    llaveProceso: '11001400301620170136700',
    numero      : 321,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '87.015.973 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-25',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-11-07',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 155766,
        '1': ''
      },
      radicado         : '2017 - 01205',
      vencimientoPagare: '2027-09-11'
    },
    deudor: {
      cedula: 63395806,
      direccion:
        'CALLE 127 C - No  2 B - 18  APARTAMENTO 101',
      email   : 'claudiasuarezp@gmail.com',
      nombre  : 'CLAUDIA YAMILE SUAREZ POBLADOR',
      telefono: '5205695 / 3112326151'
    },
    llaveProceso: '11001400308620170120500',
    numero      : 322,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '19.362.960 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-21',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-11-02',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 90669,
        '1': ''
      },
      radicado         : '2017 - 01509',
      vencimientoPagare: '2021-10-20'
    },
    deudor: {
      cedula: 11319802,
      direccion:
        'CALLE 40 SUR  No  72 G -01  APARTAMENTO 101',
      email   : 'fermedina11@gmail.com',
      nombre  : 'LUIS FERNANDO MEDINA POTES',
      telefono: 317636780
    },
    llaveProceso: '11001400303720170150900',
    numero      : 323,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '35.732.574 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-17',
      etapaProcesal          : 'LIQUIDACION',
      fechaPresentacion      : '2017-11-01',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 164578,
        '1': 1380081489
      },
      radicado         : '2017 - 00849',
      vencimientoPagare: '2020-11-21'
    },
    deudor: {
      cedula: 80032088,
      direccion:
        'TRANSVERSAL 28 No 22-13 APARTAMENTO 304 TORRE 7 SOACHA',
      email   : 'majupi170301@hotmail.com',
      nombre  : 'JOSE EDWIN MORALES ALFONSO',
      telefono: 9016510
    },
    llaveProceso: '11001400300120170084900',
    numero      : 324,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '',
      fechaPresentacion      : '2017-11-02',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': ''
      },
      radicado         : '2017 - 00760',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 30583011,
      direccion: '',
      email    : '',
      nombre   : 'MARCELA PATRICIA DIAZ PEREIRA',
      telefono : ''
    },
    llaveProceso: '11001400308020170076000',
    numero      : 325,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '19.550.288 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-27',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-11-02',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 103162,
        '1': ''
      },
      radicado         : '2017 - 01471',
      vencimientoPagare: '2022-11-26'
    },
    deudor: {
      cedula: 19352146,
      direccion:
        'DIAGONAL 58 No 28 - 72    APARTAMENTO 603 INTERIOR 6',
      email   : 'elpotegomez@hotmail.com',
      nombre  : 'JORGE ELIECER GOMEZ LOPEZ',
      telefono: '7102329 / 3138267838'
    },
    llaveProceso: '11001400303420170147100',
    numero      : 326,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '',
      fechaPresentacion      : '14/11/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 43945,
        '1': 80517
      },
      radicado         : '2017 - 01369',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 94524378,
      direccion: 'jose.daniel.escobar@hotmail.co',
      email    : '6332400 / 3155459543',
      nombre   : 'JOSE DANIEL ESCOBAR PATIÑO',
      telefono : ''
    },
    llaveProceso: '11001400301220170136900',
    numero      : 327,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'LiosJuridicos',
    demanda : {
      capitalAdeudado        : '33.615.204 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-01',
      etapaProcesal:
        'SIN LEVANTAMIENTO DE MEDIDA CAUTELAR PQQUETE 767 DE 2018',
      fechaPresentacion: '2017-12-18',
      municipio        : 'BOGOTA',
      obligacion       : {
        '0': '5740084189 /5740084216',
        '1': '160204/377813372389032'
      },
      radicado         : '2017 - 01293',
      vencimientoPagare: '2017-05-06'
    },
    deudor: {
      cedula: 52907317,
      direccion:
        'CALLE 74 A  SUR No 92 -21 torre 3',
      email   : 'milena125@hotmail.com',
      nombre  : 'SANDRA MILENA BARRETO BERMUDEZ',
      telefono: 5787068
    },
    llaveProceso: '11001400302620170129300',
    numero      : 328,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.537.828 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-01',
      etapaProcesal          : 1.1001400308520171e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 79669,
        '1': 'N/A'
      },
      radicado         : '2017 - 01596',
      vencimientoPagare: '2020-02-11'
    },
    deudor: {
      cedula: 10180062,
      direccion:
        'AVENIDA CALLE 153 No 119 -40 INTERIOR 1 CASA 17 BOSQUES DE CAMINO VERDE AGRUPACION 2',
      email : 'reinaldomelen@hotmail.com',
      nombre: 'REINALDO ADRIAN MELENDEZ  VARON',
      telefono:
        'F 2287430           CEL 3107584138'
    },
    llaveProceso: '11001400308520170159600',
    numero      : 329,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '36.103.545 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-10-31',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2017-11-14',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 156888,
        '1': ''
      },
      radicado         : '2017 - 01218',
      vencimientoPagare: '2042-10-09'
    },
    deudor: {
      cedula: 80185084,
      direccion:
        'CARRERA 95 A  No 136 - 47 APARTAMENTO 401 BLOQUE 3',
      email   : 'arby3920@hotmail.com',
      nombre  : 'NELSON ARBEY CANGREJO SUAREZ',
      telefono: '6822121 / 3176822122'
    },
    llaveProceso: '11001400307020170121800',
    numero      : 330,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '43.041 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 43053,
      fechaPresentacion      : '2018-01-16',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': '10.670.890.00'
      },
      radicado         : '2017 - 01300',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 1016043191,
      direccion: '',
      email    : 'CALLE 23 SUR No 96 - 82',
      nombre   : 'CHRISTIAN DARIO RUIZ AVELLANEDA',
      telefono : 'krisdark225@hotmail.com'
    },
    llaveProceso: '11001410375220170130000',
    numero      : 331,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '38.034.170 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-11-08',
      etapaProcesal          : '',
      fechaPresentacion:
        '16/11/2017 // 15/03/2018',
      municipio : 'SOACHA',
      obligacion: {
        '0': '161947 /377813179503108',
        '1': 377813223799561
      },
      radicado         : '2018   00098',
      vencimientoPagare: '2017-06-05'
    },
    deudor: {
      cedula: 91284725,
      direccion:
        'CARRERA 7 A  No  2 A - 35 TORRE 10 APARTAMENTO 303',
      email   : 'nichemen@hotmail.com',
      nombre  : 'MIGUEL ANTONIO SANCHEZ MARROQUIN',
      telefono: '9032416 /3168017488'
    },
    llaveProceso: '25754400100420180009800',
    numero      : 332,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '18.898.421 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-12-18',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2018-01-15',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12710799,
        '1': ''
      },
      radicado         : '2017 - 01317',
      vencimientoPagare: '2017-11-08'
    },
    deudor: {
      cedula: 52085839,
      direccion:
        'CALLE 55 No 78 -74  APARTAMENTO 1110',
      email   : 'ahidaguevara@gmail.com',
      nombre  : '  AHIDA LUCERO GUEVARA BECERRA ',
      telefono: 3049740
    },
    llaveProceso: '11001400306320170131700',
    numero      : 333,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '15.018.661 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-26',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '10/10/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': 'N/A'
      },
      radicado         : '2017 - 01306',
      vencimientoPagare: '15/01/2020'
    },
    deudor: {
      cedula   : 79853302,
      direccion: 'CALLE  70 A BIS  No 117-16',
      email    : 'nanbravo04@hotmail.com',
      nombre   : 'NESTOR JULIO MARTINEZ ORJUELA',
      telefono:
        'F 7459324                CEL 3132088678'
    },
    llaveProceso: '11001400306820170130600',
    numero      : 334,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.464.765 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-11-10',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion:
        '21/11/2017       6/02/2018',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 4020082793,
        '1': 4513070099197613
      },
      radicado         : '2018 - 00118',
      vencimientoPagare: '2020-11-30'
    },
    deudor: {
      cedula: 1030601547,
      direccion:
        'CARRERA 72  No 57 B -85 SUR INTERIOR 8 APARTAMENTO 2',
      email   : 'cam.g.4@hotmail.com',
      nombre  : 'CRISTIAN CAMILO GARCIA ESCOBAR',
      telefono: 7786659
    },
    llaveProceso: '11001400301120180011800',
    numero      : 335,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '18.295.501 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-11-14',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-11-20',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 530092248,
        '1': ''
      },
      radicado         : '2017 - 01756',
      vencimientoPagare: '24/05/82021'
    },
    deudor: {
      cedula   : 79860814,
      direccion: 'CALLE 63 No   26 - 10',
      email    : 'catirimorales79@hotmail.com',
      nombre   : 'JOSE ALFREDO CARDOZO RODRIGUEZ',
      telefono : 4592342
    },
    llaveProceso: '11001400303020170175600',
    numero      : 336,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Insolvencia',
    demanda : {
      capitalAdeudado        : '99.119.191 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-16',
      etapaProcesal          : 1.100140030062017e22,
      fechaPresentacion      : 'PORCESO DE INSOLVENCUA',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 140085,
        '1': 'N/A'
      },
      radicado         : '2017 - 00964',
      vencimientoPagare: '2026-06-22'
    },
    deudor: {
      cedula: 79666742,
      direccion:
        'TRANSVERSAL 17 No  64 F - 04 CASA 1 BIFAMILIAR MARLY',
      email   : 'rubypaez71@hotmail.com',
      nombre  : 'HECTOR ALFONSO TORRES RIOS',
      telefono: 'F 7651426 CEL 3115030138'
    },
    llaveProceso: '11001400300620170096400',
    numero      : 337,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '42.530.688 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-21',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-10-19',
      municipio              : 'CAPARRAPI',
      obligacion             : {
        '0': 7910080245,
        '1': 'N/A'
      },
      radicado         : '2017 - 00096',
      vencimientoPagare: '2020-04-01'
    },
    deudor: {
      cedula: 20427976,
      direccion:
        'CARRERA 3 No 9 - 02 /08  CAPARRAPI (CUNDINAMARCA)',
      email   : 'N/A',
      nombre  : 'BLANCA MELBA MOYANO BELTRAN',
      telefono: 'F 3213718'
    },
    llaveProceso: '25148408900120170009600',
    numero      : 338,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '36.069.195 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-11-09',
      etapaProcesal          : '',
      fechaPresentacion      : 'SENTENCIA',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 53392043,
        '1': '530092506 /530092671'
      },
      radicado         : '2017 - 01195',
      vencimientoPagare: '2021-04-20'
    },
    deudor: {
      cedula: 91072102,
      direccion:
        'CARRERA 53 No 153 - 84  INTERIOR 5 APARTAMENTO  204',
      email   : 'alfonso.mojica@sumatronicltda.com',
      nombre  : 'LUIS ALFONSO MOJICA ZAMBRANO',
      telefono: 3560348
    },
    llaveProceso: '11001400305620170119500',
    numero      : 339,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '14.986.915 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-04',
      etapaProcesal          : 1.100140030602017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 6690082032,
        '1': 'N/A'
      },
      radicado         : '2017 - 01014',
      vencimientoPagare: '2018-09-25'
    },
    deudor: {
      cedula   : 79573945,
      direccion: 'CARRERA 19  No 56 A  SUR - 72',
      email    : 'cubrimage@hotmail.com',
      nombre   : 'WILLIAM CORTES ROJAS ',
      telefono : 'F 2054674'
    },
    llaveProceso: '11001400306020170101400',
    numero      : 340,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.731.580 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-11-08',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-11-15',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '3777816328330786 / 459425002',
        '1': 5303721445053527
      },
      radicado         : '2017 - 01289',
      vencimientoPagare: '2017-07-19'
    },
    deudor: {
      cedula: 19294251,
      direccion:
        'CARRERA 14 No  127 - 10 OFICINA 707',
      email   : 'mariovelezparra@gmail.com',
      nombre  : 'MARIO VELEZ PARRA',
      telefono: '6155668 / 3102124649'
    },
    llaveProceso: '11001400305720170128900',
    numero      : 341,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '43.053 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 43059,
      fechaPresentacion      : '2017-12-13',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 5303720026675088,
        '1': '27.570.000.00'
      },
      radicado         : '2017 - 01400',
      vencimientoPagare: 4594250054867309
    },
    deudor: {
      cedula   : 91240362,
      direccion: '',
      email    : 'CARRERA 87 No  17 - 59 ',
      nombre:
        'GABRIEL AUGUSTO CASTILLO CASTELBLANCO',
      telefono:
        'gabocastillocastelblanco@gmail.com'
    },
    llaveProceso: '11001400301220170140000',
    numero      : 342,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.767.956 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-09-01',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-11-17',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '23110089362 / 2044038',
        '1': '8291213 / 3131312135'
      },
      radicado         : '2017 - 01517',
      vencimientoPagare: '2019-07-07'
    },
    deudor: {
      cedula   : 80803306,
      direccion: 'CALLE 22 L  No 123 A - 35',
      email    : 'magia.orfen@hotmail.com',
      nombre   : 'EDUARDO ALFONSO RICO JIMENEZ',
      telefono : '5470813 / 3188426582'
    },
    llaveProceso: '11001400303920170151700',
    numero      : 343,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '19.977.436 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-29',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-10-06',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '377815565830854  4513071889404813',
        '1': '5176409000345363    5306946666855816'
      },
      radicado: '2017 - 01474',
      vencimientoPagare:
        '9/12/2019       5/03/2020'
    },
    deudor: {
      cedula: 79505982,
      direccion:
        'CALLE 168 No 8 G - 61 BLOQUE  5 APARTAMENTO  102',
      email : 'luissanchez69@live.com',
      nombre: 'LUIS AUGUSTO SANCHEZ ORTIZ',
      telefono:
        'F 8003961              CEL 3174409073'
    },
    llaveProceso: '11001400303320170147400',
    numero      : 344,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.944.433 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-11-15',
      etapaProcesal          : 1.100140030452017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2290097439,
        '1': 'N/A'
      },
      radicado         : '2017 - 01476',
      vencimientoPagare: '2019-06-05'
    },
    deudor: {
      cedula: 51974282,
      direccion:
        'CALLE 128 C No 45 - 08 INTERIOR 22 ',
      email : 'sjpradag@yahoo.es',
      nombre: 'SANDRA JEANNETTE PRADA GUTIERREZ',
      telefono:
        'F 7216691               CEL 3204900530'
    },
    llaveProceso: '11001400304520170147600',
    numero      : 345,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.938.618 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-11-09',
      etapaProcesal          : 'TERMINADO',
      fechaPresentacion      : '2017-11-22',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 540691617249629400,
        '1': 1010082331
      },
      radicado         : '2017 - 01545',
      vencimientoPagare: '2021-03-17'
    },
    deudor: {
      cedula: 1019101174,
      direccion:
        'CALLE 13 B No 72 A - 40 INRERIOR  2 APARTAMENTO 402',
      email   : 'paulisgomez94@gmail.com',
      nombre  : 'PAULA ANDREA GOMEZ LOPEZ',
      telefono: '4668308 / 30163933457'
    },
    llaveProceso: '11001400307320170154500',
    numero      : 346,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '11.831.747 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-11-10',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-11-21',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4513080135113862,
        '1': 'AUDIOPRESTAMO'
      },
      radicado         : '2017 - 01525',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 41888857,
      direccion:
        'CALLE 19 No  18 - 54 APARTAMENTO 301',
      email:
        'equiposysuministroscapital@hotmail.com',
      nombre  : 'MARIA ELENA ZULUAGA URIBE',
      telefono: '2869149 / 2681212'
    },
    llaveProceso: '11001400303920170152500',
    numero      : 347,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '76.735.593 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-28',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-10-06',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 6260082762,
        '1': 377813367146983
      },
      radicado: '2017 - 01309',
      vencimientoPagare:
        '2/12/2021        3/09/2020'
    },
    deudor: {
      cedula: 41688661,
      direccion:
        'CARRERA 8 No 190 - 22 Hoy Carrera 31 No. 190-04',
      email : 'anabeatrizcorredor@yahoo.es',
      nombre: 'ANA BEATRIZ CORREDOR RIVERA',
      telefono:
        'F 5101587               CEL 3106630177'
    },
    llaveProceso: '11001400300120170130900',
    numero      : 348,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '17.074.755 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-11-14',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-11-23',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 140864,
        '1': ''
      },
      radicado         : '2017 - 01272',
      vencimientoPagare: '2016-07-18'
    },
    deudor: {
      cedula: 30746589,
      direccion:
        'CARRERA 73 B No  146 F - 50 INTERIOR 9 APARTAMENTO 604',
      email   : 'admithel.ltda@yahoo.com',
      nombre  : 'LILIANA GARCIA ROSERO',
      telefono: '5814164/3155831999'
    },
    llaveProceso: '11001400302720170127200',
    numero      : 349,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '24.965.682 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-11-15',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-11-23',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '6740081982 / 451308007555923',
        '1': 5303717744146285
      },
      radicado         : '2017 - 01357',
      vencimientoPagare: '2020-05-05'
    },
    deudor: {
      cedula   : 80111672,
      direccion: 'CALLE 51  SUR No  80 - 24',
      email    : 'diegovergarav@hotmail.com',
      nombre   : 'DIEGO FERNEY VERGARA VALDERRAMA ',
      telefono : '4647087 / 3112441540'
    },
    llaveProceso: '11001400305020170135700',
    numero      : 350,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.487.437 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-11-22',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2017-11-27',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 116080,
        '1': 116080
      },
      radicado         : '2018 - 00024',
      vencimientoPagare: '2024-02-24'
    },
    deudor: {
      cedula   : 80800256,
      direccion: 'CALLE 73 B  SUR No 1A - 06',
      email    : 'sariguella35@hotmail.com',
      nombre   : 'CRISTIAN JOSUE CARDENAS NORIEGA',
      telefono : '7612712 3134704885'
    },
    llaveProceso: '1100141037520180002400',
    numero      : 351,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '11.853.652 COP',
      departamento           : 'CUNDINAMRCA',
      entregaGarantiasAbogado: '2017-09-29',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-10-17',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4280023383,
        '1': 'N/A'
      },
      radicado         : '2017 - 01016',
      vencimientoPagare: '2019-05-20'
    },
    deudor: {
      cedula: 71992491,
      direccion:
        'TRANSVERSAL 2 C BIS No 97 B-05 SUR ',
      email   : 'N/A',
      nombre  : 'MARIO DE JESUS OSSA PULGARIN',
      telefono: 'F 7673180'
    },
    llaveProceso: '11001400307620170101600',
    numero      : 352,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '24.172.047 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2017-11-16',
      etapaProcesal          : '',
      fechaPresentacion      : 'SENTENCIA',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '4513082447756537/4513085528567731',
        '1': '5303728067784305/'
      },
      radicado         : '2017 - 01563',
      vencimientoPagare: '2017-05-15'
    },
    deudor: {
      cedula   : 19297891,
      direccion: 'CALLE 1 H  No 29 - 73',
      email    : 'ricardoagi1955@gmail.com',
      nombre   : 'RICARDO ARIAS GUZMAN',
      telefono : 4587493
    },
    llaveProceso: '11001400307320170156300',
    numero      : 353,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '162.645.743 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-24',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-11-29',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 199177,
        '1': ''
      },
      radicado         : '2017 - 00359',
      vencimientoPagare: '2037-03-01'
    },
    deudor: {
      cedula: 80032437,
      direccion:
        'CARRERA 102 No 155 - 19 INTERIOR 5 APARTAMENTO  230',
      email   : 'bagilt@yahoo.com',
      nombre  : 'BERNARDO ANIBAL GIL TORRES',
      telefono: '6854161 / 3003813863'
    },
    llaveProceso: '11001310304520170035900',
    numero      : 354,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '34.896.224 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-21',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2017-11-27',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 136483,
        '1': ''
      },
      radicado         : '2017 - 01526',
      vencimientoPagare: '2026-02-21'
    },
    deudor: {
      cedula: 80800763,
      direccion:
        'CARRERA 98 A No 15 A -70 INTERIOR 18 APARTAMENTO 6',
      email   : 'nelsonivansegura@hotmail.com',
      nombre  : 'NELSON IVAN SEGURA MENDEZ',
      telefono: 4653573
    },
    llaveProceso: '11001400301720170152600',
    numero      : 355,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '30.573.555 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-28',
      etapaProcesal          : 1.100140030242017e22,
      fechaPresentacion:
        'EL 7 DE SEPTIEMBRE DE 2018 SE TERMINO PROCESO POR PAGO CUOTAS EN MORA // EL 17 DE ENERO DE 2019 SE DEVOLVIERON GARANTIAS A AECSA S.A. // EL 21/09/2018 SE HIZO LEVANTAMIENTO DE MEDIDAS CAUTELARES SEGÚN CERTIFICADO',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 162697,
        '1': ''
      },
      radicado         : '2017 - 01708',
      vencimientoPagare: '2017-08-03'
    },
    deudor: {
      cedula: 53119460,
      direccion:
        'CARRERA 81 B No  19 B- 50 APARTAMENTO 601',
      email   : 'ximenars29@hotmail.com',
      nombre  : 'SONIA XIMENA RODRIGUEZ SANCHEZ',
      telefono: '4707082 / '
    },
    llaveProceso: '11001400302420170170800',
    numero      : 356,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '22.149.641 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-12-04',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '12/12/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 146999,
        '1': ''
      },
      radicado         : '2017 - 01378',
      vencimientoPagare: '21/0/2017'
    },
    deudor: {
      cedula: 1012330386,
      direccion:
        'CALLE 79 SUR No 77 L- 72 INT 59 ',
      email   : 'disayuri@hotmail.com',
      nombre  : 'DIANA SAYURI RODRIGUEZ GARCIA',
      telefono: '4493410/ 313241'
    },
    llaveProceso: '11001400305520170137800',
    numero      : 357,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '22.130.224 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-06',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-10-12',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 3880082626,
        '1': 'N/A'
      },
      radicado         : '2017 - 00975',
      vencimientoPagare: '2019-02-26'
    },
    deudor: {
      cedula   : 1116782267,
      direccion: 'DIAGONAL 2  No 79 F- 04',
      email    : 'juanotero1989@gmail.com',
      nombre   : 'JOGLI JOAQUIN OTERO VARGAS',
      telefono : 'CEL 3005941798'
    },
    llaveProceso: '11001400307820170097500',
    numero      : 358,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '8.725.321 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-24',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '07/12/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 71141,
        '1': ''
      },
      radicado         : '2017 - 01786',
      vencimientoPagare: '29/07/2018'
    },
    deudor: {
      cedula: 79357895,
      direccion:
        'CARRERA 123 No 13 - 85 casa 364',
      email   : 'N/A ',
      nombre  : 'JOSE DAVID PEÑA SAAVEDRA',
      telefono: '31665335 / 3165335 / 3165335586'
    },
    llaveProceso: '11001400306520170178600',
    numero      : 359,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.576.784 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-12-04',
      etapaProcesal          : '',
      fechaPresentacion      : '12/12/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 116252,
        '1': ''
      },
      radicado         : '2017 - 01452',
      vencimientoPagare: '02/03/2024'
    },
    deudor: {
      cedula   : 52327561,
      direccion: 'CARRERA 110 C No 77- 15',
      email    : 'jana578@hotmail.com',
      nombre   : 'NOHORA DEL PILAR VARGAS BERNAL',
      telefono : '7416881 / 3002261859'
    },
    llaveProceso: '11001400302320170145200',
    numero      : 360,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '32.318.533 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-09-26',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-10-17',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'SO79522009',
        '1': 5491570044098801
      },
      radicado         : '2017 - 01336',
      vencimientoPagare: '2021-03-26'
    },
    deudor: {
      cedula: 53064513,
      direccion:
        'CARRERA 68 D No 40-53 SUR TORRE 6 APARTAMENTO 1006',
      email   : 'ncuestas@mccain.com.co',
      nombre  : 'NATALIA CUESTAS MONDRAGON',
      telefono: 'F4782781'
    },
    llaveProceso: '11001400301720170133600',
    numero      : 361,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '42.269 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-12-05',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '12/12/2017',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 165609,
        '1': ''
      },
      radicado         : '2018 - 00031',
      vencimientoPagare: '03/07/2036'
    },
    deudor: {
      cedula   : 52031089,
      direccion: 'CARRERA 80 J No 73-27',
      email    : 'HERNANDEZ_YANETH@HOTMAIL.COM',
      nombre   : 'YANETH HERNANDEZ SUAREZ',
      telefono : '7553091 / 3007553091'
    },
    llaveProceso: '25754400300220180003100',
    numero      : 362,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '12/12/2017',
      fechaPresentacion      : '16/01/2018',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 4513077734943038,
        '1': '31.247.705.94'
      },
      radicado         : '2017 - 00409',
      vencimientoPagare: '2210088055/158705'
    },
    deudor: {
      cedula   : 52645617,
      direccion: '',
      email:
        'CARRERA 4 A ESTE No 38 - 56 CASA 127 SOACHA',
      nombre  : 'MARIA LILIANA CASTAÑEDA ZAPATA',
      telefono: 'maria_castañeda06@hotmail.com'
    },
    llaveProceso: '25754400300220170040900',
    numero      : 363,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '60.161.467 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-12-06',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '14/12/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 144698,
        '1': ''
      },
      radicado         : '2017 - 01647',
      vencimientoPagare: '26/10/82026'
    },
    deudor: {
      cedula: 52102754,
      direccion:
        'CALLE 6 B No 80 G-95 TORRE 5 APARTAMENTO 717',
      email   : 'spatriciasanchez2011@hotmail.com',
      nombre  : 'SANDRA PATRICIA SANCHEZ VELASQUEZ',
      telefono: 4671755
    },
    llaveProceso: '11001400307320170164700',
    numero      : 364,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '23.970.146 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-12-07',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '14/12/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 106172,
        '1': ''
      },
      radicado         : '2018 - 00140',
      vencimientoPagare: '10/03/2023'
    },
    deudor: {
      cedula: 79861680,
      direccion:
        'CARRERA 105 A No 70 D- 90 INT 1 APART 5',
      email   : 'richard.iriarte76@hotmail.com',
      nombre  : 'RICHARD CAMILO IRIARTE GARCIA',
      telefono: 2275729
    },
    llaveProceso: '11001400305020180014000',
    numero      : 365,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '19.041.643 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-12-11',
      etapaProcesal          : 1.100140030092017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 134032,
        '1': 'N/A'
      },
      radicado         : '2017 - 01361',
      vencimientoPagare: '22/11/2025'
    },
    deudor: {
      cedula   : 53094561,
      direccion: 'CARRERA 87 K No 70-44 SUR',
      email    : 'yurisita_05@hotmail.com',
      nombre   : 'YURI ANDREA GONZALEZ TORRES',
      telefono : 7380081
    },
    llaveProceso: '11001400300920170136100',
    numero      : 366,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '29.419.277 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-12-01',
      etapaProcesal          : 1.1001400307820171e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 168725,
        '1': 'N/A'
      },
      radicado         : '2017 - 01235',
      vencimientoPagare: '10/10/2033'
    },
    deudor: {
      cedula   : 79416270,
      direccion: 'CALLE 130 C BIS A No 99-49',
      email    : 'amezquitapaa@gmail.com',
      nombre   : 'ANDRES ANTONIO  AMEZQUITA PAEZ',
      telefono:
        'F 6481255             CEL 3144899865'
    },
    llaveProceso: '11001400307820170123500',
    numero      : 367,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '36.307.716 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-12-11',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion:
        '18/12/2017     09/02/2018',
      municipio : 'GIRARDOT',
      obligacion: {
        '0': 6841,
        '1': ''
      },
      radicado         : '2018 - 00066',
      vencimientoPagare: '02/05/2026'
    },
    deudor: {
      cedula   : 39577914,
      direccion: 'CARRERA 19 No 13-20 GIRARDOT',
      email    : 'caro_23mc@hotmail.com',
      nombre   : 'CAROLINA MARTINEZ CALDERON',
      telefono : 69115123
    },
    llaveProceso: '25307400300120180006600',
    numero      : 368,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '34.749.647 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-17',
      etapaProcesal          : 'EJECUCION',
      fechaPresentacion      : '2017-10-31',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2290098960,
        '1': 'N/A'
      },
      radicado         : '2017-1208',
      vencimientoPagare: '2018-10-08'
    },
    deudor: {
      cedula   : 900336193,
      direccion: 'CARRERA 24 G No20-35 SUR',
      email    : 'N/A',
      nombre   : 'INVERSION RIVOLI S.A.S.',
      telefono : 'F 3727561'
    },
    llaveProceso: '11001400302220170120800',
    numero      : 369,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '51.466.338 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-12-11',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '14/12/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 180998,
        '1': 3778813729098781
      },
      radicado         : '2017 - 01556',
      vencimientoPagare: '06/02/2030'
    },
    deudor: {
      cedula   : 52840906,
      direccion: 'CARRERA 51 B No 18-28 SUR',
      email    : 'hernandezsuarez28@hotmail.com',
      nombre   : 'LILIAN ANDREA HERNANDEZ SUAREZ',
      telefono : 4793387
    },
    llaveProceso: '11001400302020170155600',
    numero      : 370,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'LiosJuridicos',
    demanda : {
      capitalAdeudado        : '10.775.194 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-16',
      etapaProcesal:
        'SIN LEVANTAMIENTO DE MEDIDA CAUTELAR NO HA SIDO ARCHIVADO POR EL JUZGADO',
      fechaPresentacion: '19/02/2018',
      municipio        : 'BOGOTA',
      obligacion       : {
        '0': 117171,
        '1': 377813401553319
      },
      radicado         : '2018 - 00143',
      vencimientoPagare: '2024-03-30'
    },
    deudor: {
      cedula: 39765816,
      direccion:
        'CALLE 50 SUR 93 D- 38 APTO 401 TORRE 6',
      email   : 'andreato1a@hotmaul.com',
      nombre  : 'MARTHA ANDREA MORA COLLAZOS',
      telefono: 6236600
    },
    llaveProceso: '11001400302420180014300',
    numero      : 371,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '17.921.982 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-11',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '19/01/2018',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 120770,
        '1': ''
      },
      radicado         : '2018 - 00070',
      vencimientoPagare: '2024-07-31'
    },
    deudor: {
      cedula: 51953414,
      direccion:
        'TRANSVERSAL 49 # 3 - 92 CASA 360 ZAPAN 3 ',
      email   : 'janethrpinzon@gmail.com',
      nombre  : 'JANETH RUBIELA GORDILLO PINZON',
      telefono: '6795197//3152482331'
    },
    llaveProceso: '25754400300220180007000',
    numero      : 372,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '10.725.698 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-18',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '22/01/2018',
      municipio              : 'APULO',
      obligacion             : {
        '0': 4513087158442953,
        '1': 5306966000650228
      },
      radicado         : '2018 - 00005',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 79616846,
      direccion: 'CARRERA 5 # 12 - 53 APULO',
      email    : 'rodrigo_ruiz33@hotmail.com',
      nombre   : 'RODRIGO ALBERTO RUIZ VILLALBA',
      telefono : '8388423//3112764286'
    },
    llaveProceso: '25599400300120180000500',
    numero      : 373,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '27.006.100 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-15',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '22/01/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 121543,
        '1': ''
      },
      radicado         : '2018 - 00067',
      vencimientoPagare: '2024-08-26'
    },
    deudor: {
      cedula: 80850549,
      direccion:
        'CALLE 2 SUR 16 - 36 MANZANA 104 // CARRERA 96 D 6 - 55 CADA 81 ET 1 ',
      email   : 'jjhoan_27@hotmail.com',
      nombre  : 'JHOAN ANTONIO BARAJAS MONTENEGRO',
      telefono: 7384582
    },
    llaveProceso: '11001400308620180006700',
    numero      : 374,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '66.255.617 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-15',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '22/01/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 179854,
        '1': ''
      },
      radicado         : '2018 - 00123',
      vencimientoPagare: '2034-08-24'
    },
    deudor: {
      cedula   : 74845495,
      direccion: 'CALLE 59A SUR 45D - 15',
      email    : 'alfredozorromart@hotmail.com',
      nombre   : 'JHON ALFREDO ZORRO MARTINEZ',
      telefono : 7315902
    },
    llaveProceso: '11001400304020180012300',
    numero      : 375,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'LiosJuridicos',
    demanda : {
      capitalAdeudado        : '27.308.454 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-17',
      etapaProcesal:
        'EL 22/08/2018 EL JUZGADO DECRETO LA TERMINACION DEL PROCESO POR PAGO CUOTAS EN MORA DE LA OBLIGACION HIPOTECARIA //  SE ENVIO SOLICITUD DESARCHIVE EL 18 DE AGOSOTO DE 2023 A ARCHIVO CENTRAL .',
      fechaPresentacion: '2018-08-22',
      municipio        : 'BOGOTA',
      obligacion       : {
        '0': 118010,
        '1': '377813183474353 // 4513074148699942 / 5491579209500691'
      },
      radicado         : '2018 - 00052',
      vencimientoPagare: '2019-04-29'
    },
    deudor: {
      cedula: 11203111,
      direccion:
        'CALLE 128 96A - 05 CASA 3 MULTIFAMILIAR ARRAYANES',
      email   : 'roberto.rico.ruiz@gmail.com',
      nombre  : 'ROBERTO RICO RUIZ',
      telefono: 6597446
    },
    llaveProceso: '11001400307620180005200',
    numero      : 376,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.503.258 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-17',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '24/01/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2150091493,
        '1': ''
      },
      radicado         : '2018 - 00107',
      vencimientoPagare: '2018-09-27'
    },
    deudor: {
      cedula   : 40356325,
      direccion: 'CARRERA 79D 36 - 74 ',
      email    : 'sacave22@gmail.com',
      nombre   : 'GLADIS VELASQUEZ CASTRO',
      telefono : 3118206
    },
    llaveProceso: '11001400304620180010700',
    numero      : 377,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 11346521,
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': '15270162,48'
      },
      radicado         : '2018 - 00181',
      vencimientoPagare: 4594250463791785
    },
    deudor: {
      cedula   : 11346521,
      direccion: '',
      email:
        'DIAGINAL 51A 59 A - 17 APARTAMENTO 1 ',
      nombre: 'NELSON YESITH MORENO LEON',
      telefono:
        'yesith.moreno@correo.policia.gov.co'
    },
    llaveProceso: '11001400301120180018100',
    numero      : 378,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '40.292.980 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-11',
      etapaProcesal          : 1.100140030812018e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 155380,
        '1': 'N/A'
      },
      radicado         : '2018 - 00111',
      vencimientoPagare: '2027-08-31'
    },
    deudor: {
      cedula   : 79804965,
      direccion: 'CALLE 36C No 3A - 25',
      email    : 'jhondoblea@hotmail.com',
      nombre   : 'JHON ALEXANDER ALARCON GALVIS',
      telefono:
        'F 5686327              CEL 3157236856'
    },
    llaveProceso: '11001400308120180011100',
    numero      : 379,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '40.292.980 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-11',
      etapaProcesal          : 1.100140030812018e22,
      fechaPresentacion:
        'EL 2/07/2021 EL JUZGADO DECRETA TERMINACION PROCESO POR PAGO CUOTAS EN MORA //EL 30/08/2022 SE DEVOLVIERON GARANTIAS Y DESGLOSE A AECSA // EL 4/05/2022 LA OFICIAN DE REGISTRO LEVANTO MEDIDA CAUTELAR DE EMBARGO',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 155380,
        '1': 'N/A'
      },
      radicado         : '2018 - 00111',
      vencimientoPagare: '2027-08-31'
    },
    deudor: {
      cedula   : 79804965,
      direccion: 'CALLE 36C No 3A - 25',
      email    : 'jhondoblea@hotmail.com',
      nombre   : 'JHON ALEXANDER ALARCON GALVIS',
      telefono:
        'F 5686327              CEL 3157236856'
    },
    llaveProceso: '11001400308120180011100',
    numero      : 380,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '24.878.276 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-01-18',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '24/01/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 155586,
        '1': ''
      },
      radicado         : '2018 - 00075',
      vencimientoPagare: '2027-09-06'
    },
    deudor: {
      cedula: 1032396480,
      direccion:
        'CARRERA 81 B No 66 - 51 CASA 139 TERRAZA DE CASTILLA // TRV 70 G # 63 - 52 SUR APTO 604 BL 5 ',
      email   : 'nimary20@hotmail.com',
      nombre  : 'NIELCEN MARISOL MARIN MELO',
      telefono: 3203430311
    },
    llaveProceso: '11001400304120180007500',
    numero      : 381,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '11.224.313 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-11',
      etapaProcesal          : '',
      fechaPresentacion      : 'NOTIFICACION',
      municipio              : 'SAN JUAN DE RIOSECO',
      obligacion             : {
        '0': 3720086711,
        '1': ''
      },
      radicado         : '2018 - 00004',
      vencimientoPagare: '2019-09-08'
    },
    deudor: {
      cedula: 80403235,
      direccion:
        'CARRERA 4 NO 5 - 02 SAN JUAN DE RIO SECO',
      email   : 'N/A',
      nombre  : 'CARLOS ALBERTO LANCHEROS BARRAGAN',
      telefono: 3107518479
    },
    llaveProceso: '25662408900120180000400',
    numero      : 382,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '14.735.254 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-18',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion:
        '26/01/2018 //02/04/2018',
      municipio : 'KENNEDY',
      obligacion: {
        '0': 116650,
        '1': ''
      },
      radicado         : '2018 - 00479',
      vencimientoPagare: '2024-03-16'
    },
    deudor: {
      cedula: 65706810,
      direccion:
        'CALLE 12 # 2C - 55 SENDEROS DE FUNZA // CALLE 50 SUR # 93D - 38',
      email: 'nonbaro@hotmail.com',
      nombre:
        'NOHORA ESPERANZA BARRERO RODRIGUEZ',
      telefono: 8231926
    },
    llaveProceso: '11001400302620180047900',
    numero      : 383,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '30.413.921 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-24',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '2018-01-30',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 130026,
        '1': ''
      },
      radicado         : '2018 - 00110',
      vencimientoPagare: '2025-06-07'
    },
    deudor: {
      cedula: 80026753,
      direccion:
        'TRANSVERSAL 73 # 11B - 77 INT 2 APTO 504',
      email   : 'd8003galindo@gmail.com',
      nombre  : 'DIEGO JAVIER GALINDO MEJIA',
      telefono: '3069272//3202116040'
    },
    llaveProceso: '11001400305620180011000',
    numero      : 384,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.344.261 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-19',
      etapaProcesal          : '',
      fechaPresentacion      : 'NOTIFICACION',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 9450082795,
        '1': ''
      },
      radicado         : '2018 - 00074',
      vencimientoPagare: '2019-07-29'
    },
    deudor: {
      cedula   : 406547,
      direccion: 'TRANVERSAL 11A # 9A - 13 ',
      email    : 'N/A',
      nombre   : 'AVELINO SIERRA SIERRA',
      telefono : 235426
    },
    llaveProceso: '11001400303520180007400',
    numero      : 385,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '26.468.936 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-16',
      etapaProcesal          : 2.526940890012017e22,
      fechaPresentacion      : '',
      municipio              : 'FACATATIVA',
      obligacion             : {
        '0': 12722464,
        '1': 'N/A'
      },
      radicado         : '2017 - 00744',
      vencimientoPagare: '2020-11-10'
    },
    deudor: {
      cedula: 1070950842,
      direccion:
        'CARRERA 4 B  SUR No 4 - 30  FACATATIVA',
      email   : 'pradalexander@hotmail.com',
      nombre  : 'ALEXANDER PRADA PALMAR',
      telefono: 'F 8429325'
    },
    llaveProceso: '25269400300120170074400',
    numero      : 386,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '36.331.525 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-09',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-11-20',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2500085167,
        '1': 'AUDIOPRESTAMO'
      },
      radicado         : '2017 - 01336',
      vencimientoPagare: '2019-05-05'
    },
    deudor: {
      cedula: 91263617,
      direccion:
        'CARRERA 85  B No  23 B - 69  INTERIOR 7 APARTAMENTO  314',
      email : 'leo.sanabria@live.com.mx',
      nombre: 'LEONARDO SANABRIA SANABRIA',
      telefono:
        'F 4251180           CEL 3118066048'
    },
    llaveProceso: '11001400305020170133600',
    numero      : 387,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '27.696.651 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-29',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '05/02/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 1310089728,
        '1': '377813368402583 /AUDIOPRESTAMO'
      },
      radicado         : '2018 - 00111',
      vencimientoPagare: '26/11/2020'
    },
    deudor: {
      cedula: 52644132,
      direccion:
        'CARRERA 14 B No 119 - 30  BOGOTA',
      email   : 'ximpucci1@hotmail.com',
      nombre  : 'XIMENA  ESCOBAR PUCCETI',
      telefono: '6126610 / 3124575163'
    },
    llaveProceso: '11001400301720180011100',
    numero      : 388,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': ''
      },
      radicado         : '2018 - 00121',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 79874218,
      direccion: '',
      email    : '',
      nombre   : 'MIGUEL ANGEL GRANADOS GUTIERREZ',
      telefono : ''
    },
    llaveProceso: '11001400307020180012100',
    numero      : 389,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '50.509.238 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-16',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-11-20',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2500084774,
        '1': 'AUDIOPRESTAMO'
      },
      radicado         : '2017 - 01266',
      vencimientoPagare: '2020-07-21'
    },
    deudor: {
      cedula   : 71603563,
      direccion: 'CARRERA 82  No  19 - 20 ',
      email    : 'gilbertojaime@hotmail.com',
      nombre   : 'GILBERTO JAIME BETANCOURT',
      telefono : 'F 3138547'
    },
    llaveProceso: '11001400300420170126600',
    numero      : 390,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '48.945.502 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-29',
      etapaProcesal          : '',
      fechaPresentacion      : 'LIQUIDACION',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 161684,
        '1': 'N/A'
      },
      radicado         : '2018 - 00129',
      vencimientoPagare: '26/02/2033'
    },
    deudor: {
      cedula: 52190973,
      direccion:
        'AVENIDA(CALLE) 68 SUR No 70D-71, APARTAMENTO 1302',
      email   : 'bibianvargas@gmail.com',
      nombre  : 'YANETH BIBIANA VARGAS CANO',
      telefono: 'F 7802492'
    },
    llaveProceso: '11001400305020180012900',
    numero      : 391,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '38.847.950 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-09',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2017-11-20',
      municipio              : 'ZIPAQUIRA',
      obligacion             : {
        '0': 3320087751,
        '1': 3320088190
      },
      radicado         : '2018 - 00131',
      vencimientoPagare: '2020-08-22'
    },
    deudor: {
      cedula: 79712791,
      direccion:
        'CALLE 3 C No  13 - 07   ZIPAQUIRA',
      email   : 'giovannymat@yahoo.com',
      nombre  : 'EDGAR JOBANNY MATEUS CASTILLO',
      telefono: 'F 8511988'
    },
    llaveProceso: '25899400300220170013100',
    numero      : 392,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '25.857.393 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-29',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '05/02/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 377816034306740,
        '1': ''
      },
      radicado         : '2018 - 00149',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 79134529,
      direccion:
        'CARRERA 79 No 19A - 28. APARTAMENTO 1102',
      email   : 'aeljogarcia69@gmail.com',
      nombre  : 'MIGUEL ALEJANDRO GARCIA RODRIGUEZ',
      telefono: '6356262 / 3013377704'
    },
    llaveProceso: '11001400303820180014900',
    numero      : 393,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '25.863.164 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-25',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '05/02/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 165720,
        '1': ''
      },
      radicado         : '2018 - 00299',
      vencimientoPagare: '08/07/2033'
    },
    deudor: {
      cedula   : 79424813,
      direccion: 'CARRERA 16 No 7 - 32  BOGOTA',
      email    : 'servicioscyga@hotmail.com',
      nombre   : 'OMAR HERNANDO QUIROGA TORRES',
      telefono : '5605872 / 3153113742'
    },
    llaveProceso: '11001400305120180029900',
    numero      : 394,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.974.554 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-29',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '05/02/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 60144000242,
        '1': ''
      },
      radicado         : '2018 - 00090',
      vencimientoPagare: '29/09/2018'
    },
    deudor: {
      cedula: 2869326,
      direccion:
        'CARRERA 59 A No 136- 25 APARTAMENTO 302 BOGOTA',
      email   : 'jbermeo01@hotmail.com',
      nombre  : 'JORGE BERMEO ROJAS',
      telefono: 6436451
    },
    llaveProceso: '11001400308420180009000',
    numero      : 395,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '24.000.000 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-15',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-11-21',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 10000090724,
        '1': 'N/A'
      },
      radicado         : '2017 - 01623',
      vencimientoPagare: '2019-06-08'
    },
    deudor: {
      cedula   : 80733467,
      direccion: 'CARRERA 88 A No  67 - 44',
      email    : 'orlandonovoa9@gmail.com',
      nombre   : 'ORLANDO ENRIQUE NOVOA BARRETO',
      telefono:
        'F 7836655           CEL 3118163887'
    },
    llaveProceso: '11001400306420170162300',
    numero      : 396,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '14.467.701 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-19',
      etapaProcesal          : 2.547340030012018e22,
      fechaPresentacion      : 'CURADOR AD LITEM',
      municipio              : 'MOSQUERA',
      obligacion             : {
        '0': 430104535,
        '1': 'N/A'
      },
      radicado         : '2018 - 00106',
      vencimientoPagare: '31/05/2022'
    },
    deudor: {
      cedula: 13812570,
      direccion:
        'CALLE 12A No 1B ESTE-80 MANZANA 2 CASA MOSQUERA',
      email   : 'jtapias@pastasdoria.com',
      nombre  : 'JOSE DE JESUS TAPIAS ESTEVEZ',
      telefono: 'F 8290169'
    },
    llaveProceso: '25473400300120180010600',
    numero      : 397,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '52.854.078 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-24',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '07/02/2018',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 171882,
        '1': ''
      },
      radicado         : '2018 - 00064',
      vencimientoPagare: '29/01/2044'
    },
    deudor: {
      cedula: 52465659,
      direccion:
        'CARRERA 87 BIS No 50 SUR-75 PISO 2',
      email   : 'liancridana@hotmail.com',
      nombre  : 'LILIANA ANDREA ERAZO LOPEZ',
      telefono: '4669771/ 3214771295'
    },
    llaveProceso: '25754400300120180006400',
    numero      : 398,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '40.477.377 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-25',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '08/02/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 161174,
        '1': ''
      },
      radicado         : '2018 - 00132',
      vencimientoPagare: '12/02/2033'
    },
    deudor: {
      cedula: 79704579,
      direccion:
        'CARRER PUBICHAS CASA 27 D EXTERIOR',
      email   : 'giogol5@hotmail.com',
      nombre  : 'GIOVANNI  PERDOMO QUIROGA',
      telefono: 3372263
    },
    llaveProceso: '11001400303720180013200',
    numero      : 399,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '17.247.376 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-23',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : ' 09/02/2018',
      municipio              : 'GIRARDOT',
      obligacion             : {
        '0': 6590084682,
        '1': ''
      },
      radicado         : '2018 - 00075',
      vencimientoPagare: '21/12/2020'
    },
    deudor: {
      cedula: 79652256,
      direccion:
        'XARRERA 2 No 10-30B CENTENARIO - GIRARDOT',
      email   : 'ocaelmejor@yahoo.es',
      nombre  : 'OSCAR GUILLERMO LOZANO GONZALEZ',
      telefono: 8361124
    },
    llaveProceso: '25307400300220180007500',
    numero      : 400,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '26.633.997 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-02-15',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '20/02/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 142837,
        '1': ''
      },
      radicado         : '2018-0237',
      vencimientoPagare: '15/10/2017'
    },
    deudor: {
      cedula   : 52357813,
      direccion: 'CALLE 50 SUR No 87 D- 81',
      email    : 'dandraojeda_5@hotmail.com',
      nombre   : 'SANDRA PATRICIA  OJEDA RODRIGUEZ',
      telefono : '7232225 / 31125727752'
    },
    llaveProceso: '11001400302520180023700',
    numero      : 401,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '41.146.013 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-02-15',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '20/02/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 154048,
        '1': ''
      },
      radicado         : '2018 - 00218',
      vencimientoPagare: '26/07/2022'
    },
    deudor: {
      cedula   : 39766624,
      direccion: 'CALLE 92 SUR No 14 A 57',
      email    : 'geraldin316@hotmail.com',
      nombre   : 'BLANCA CECILIA ARDILA HUERTAS',
      telefono : '4596827 /3205307727'
    },
    llaveProceso: '11001400306420180021800',
    numero      : 402,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '27.607.878 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-02-15',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '20/02/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 141356,
        '1': ''
      },
      radicado         : '2018-0191',
      vencimientoPagare: '3/8/2017'
    },
    deudor: {
      cedula: 52361215,
      direccion:
        'DIAGONAL 77 B No 123 A- 43 CASA 173',
      email   : 'claudia.1120@hotmail.com',
      nombre  : 'CLAUDIA YANETH VALENCIA AYA',
      telefono: 74881010
    },
    llaveProceso: '11001400304920180019100',
    numero      : 403,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '18.230.088 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-02-15',
      etapaProcesal          : 'SENTENCIA',
      fechaPresentacion      : '21/02/2018',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 167362,
        '1': ''
      },
      radicado         : '2018 - 00177',
      vencimientoPagare: '28/08/2033'
    },
    deudor: {
      cedula   : 1013586083,
      direccion: 'DIAGONAL 18 B No 44-24',
      email    : 'cesar.rios_30@hotmail.com',
      nombre   : 'CESAR AUGUSTO PINEDA RIOS',
      telefono : '2035780 / 3102259717'
    },
    llaveProceso: '257544189003201800177',
    numero      : 404,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '22.592.583 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-02-15',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2018-22-02',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 87823,
        '1': 'N/A'
      },
      radicado         : '2018 - 00236',
      vencimientoPagare: '27/0/2021'
    },
    deudor: {
      cedula   : 79396995,
      direccion: 'CALLE 12 A No 71 B - 60',
      email    : 'arthurlingo64@hotmail.com',
      nombre   : 'ARTURO LINCE GOMEZ',
      telefono:
        'F 4244358                CEL 31088445603'
    },
    llaveProceso: '11001400302120180023600',
    numero      : 405,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.024.877 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-02-15',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '23/02/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 112507,
        '1': ''
      },
      radicado         : '2018 - 00205',
      vencimientoPagare: '15/10/2033'
    },
    deudor: {
      cedula   : 8510459,
      direccion: 'CALLE 86 A SUR No 80K-40',
      email    : 'N/A',
      nombre   : 'SANTIAGO JAVIER SARABIA JIMENEZ',
      telefono : 7793825
    },
    llaveProceso: '11001400300220180020500',
    numero      : 406,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '31.100.999 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-16',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-11-27',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 3550083774,
        '1': '4513082972339 / 5303714867753385'
      },
      radicado         : '2017 - 01164',
      vencimientoPagare: '2024-01-26'
    },
    deudor: {
      cedula: 79328264,
      direccion:
        ' CARRERA 11 No  144 - 22 APARTAMENTO 301',
      email   : 'nescri64@hotmail.com',
      nombre  : 'NESTOR ALBERTO CRISTANCHO LOPEZ ',
      telefono: 'F 5266894'
    },
    llaveProceso: '11001400307820170116400',
    numero      : 407,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '17.508.189 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-08-15',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '22/02/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 152654,
        '1': ''
      },
      radicado         : '2018 - 00264',
      vencimientoPagare: '06/06/2018'
    },
    deudor: {
      cedula   : 80792987,
      direccion: 'CALLE 4 D No 39 C-22',
      email    : 'jhonbeja227@gmail.com',
      nombre   : 'JHON ALEXANDER BEJARANO FONSECA',
      telefono : 3750917
    },
    llaveProceso: '11001400308120180026400',
    numero      : 408,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '11.949.471 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-02-15',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2018-02-28',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4550087219,
        '1': 'N/A'
      },
      radicado         : '2018 - 00221',
      vencimientoPagare: '2018-06-20'
    },
    deudor: {
      cedula: 900545720,
      direccion:
        'CARRERA 50 1# 47 - 50 INT 1 APTO 101',
      email : 'andibarracosta@gmail.com',
      nombre: 'CREAS CONSULTORES S.A.S',
      telefono:
        'F 8626344                  CEL 3107982028'
    },
    llaveProceso: '11001400305620180022100',
    numero      : 409,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '22.835.665 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-22',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '03/04/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 450089940,
        '1': ''
      },
      radicado         : '2018 - 00370',
      vencimientoPagare: '12/02/2018'
    },
    deudor: {
      cedula   : 52304124,
      direccion: 'TRANSVERSAL 4H No 31-17',
      email    : 'jennymontoyav@hotmail.com',
      nombre   : 'JENNY LILIANA MONTOYA VILLAMIL',
      telefono : 2048816
    },
    llaveProceso: '11001400303520180037000',
    numero      : 410,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '21.817.515 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-16',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2018-04-26',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 20990175542,
        '1': ''
      },
      radicado         : '2018-0365',
      vencimientoPagare: '2034-06-24'
    },
    deudor: {
      cedula: 1032362698,
      direccion:
        'DIAGONAL 24 No 42-95 - HORTENSIA',
      email   : 'natis2596@hotmail.com',
      nombre  : 'NATALI VASQUEZ RUBIO',
      telefono: 6307546
    },
    llaveProceso: '25754418900220180036500',
    numero      : 411,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '19.865.454 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-16',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2018-04-26',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 20990147276,
        '1': ''
      },
      radicado         : '2018 - 00364',
      vencimientoPagare: '2026-12-28'
    },
    deudor: {
      cedula   : 80896755,
      direccion: 'CARRERA 7C- No 02-85 SUR',
      email    : 'fabiop0917@hotmail.com',
      nombre   : 'FABIO NELSON PEREZ CRISTIANO',
      telefono : 3204063623
    },
    llaveProceso: '25754418900220180036400',
    numero      : 412,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '21.470.052 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-12',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2018-04-26',
      municipio              : 'SOACHA ',
      obligacion             : {
        '0': 20990182990,
        '1': ''
      },
      radicado         : '2018 - 00363',
      vencimientoPagare: '2035-04-20'
    },
    deudor: {
      cedula: 1018430139,
      direccion:
        'CARRERA 38 No 14-93 BLOQUE 9 APTO 102',
      email   : 'luifermkt889@hotmail.com',
      nombre  : 'LUISA FERNANDA SALAZAR  PATARROYO',
      telefono: 6680643
    },
    llaveProceso: '25754418900220180036300',
    numero      : 413,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '10.224.254 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-12',
      etapaProcesal          : 1.100140030442018e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 377813488963894,
        '1': '4,55130702377226E+016'
      },
      radicado         : '2018 - 00566',
      vencimientoPagare: '17/07/2020 // 3/05/2020'
    },
    deudor: {
      cedula   : 51712277,
      direccion: 'CALLE 48 N SUR No 3-90',
      email    : 'eldayanetcortes@gmail.com',
      nombre   : 'ELDA YANET CORTES',
      telefono : 'F 279786'
    },
    llaveProceso: '11001400304420180056600',
    numero      : 414,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '43.208 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 43217,
      fechaPresentacion      : '2018-06-13',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 5303710076309980,
        '1': '33,785,911,61'
      },
      radicado         : '2018 - 00474',
      vencimientoPagare: '32767-12-31'
    },
    deudor: {
      cedula   : 1024479982,
      direccion: '',
      email:
        'CALLE 61 SUR No 20 D-60 INT11  APTO 501',
      nombre  : 'INGRID CATHERINE TAPIAS RICO',
      telefono: 'ictapiasr@gmail.com'
    },
    llaveProceso: '11001400304320180047400',
    numero      : 415,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '51.606.071 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-14',
      etapaProcesal          : 1.100140030202017e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2330087192,
        '1': 2330087423
      },
      radicado         : 'EDIFICIO EJECUCION',
      vencimientoPagare: '2020-02-02'
    },
    deudor: {
      cedula   : 79512506,
      direccion: 'CALLE 24 No 24 - 16  SUR',
      email    : 'yulypgarcia.montplas@gmail.com',
      nombre:
        'JOSE ANTONIO MONTEALEGRE HERNANDEZ',
      telefono:
        'F 2724305              CEL 3134664560'
    },
    llaveProceso: '2017 - 01477',
    numero      : 416,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '40.942.872 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-19',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '06/12/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 5740084511,
        '1': 6390082501
      },
      radicado         : '2017 - 01250',
      vencimientoPagare: '2/09/2021 / 3/01/2021'
    },
    deudor: {
      cedula   : 19275068,
      direccion: 'CALLE 71 A No 70 B-11',
      email    : 'oscarmultibog@hotmail.com',
      nombre   : 'OSCAR HUMBERTO GOMEZ CHUCHIN',
      telefono:
        'F 2511959          CEL 3105638608'
    },
    llaveProceso: '11001400307120170125000',
    numero      : 417,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '23.159.598 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-12',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '19//04/2018',
      municipio              : 'FACATATIVA',
      obligacion             : {
        '0': 377816809738564,
        '1': 451387592504913
      },
      radicado         : '2018 - 00246',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 35521020,
      direccion: 'CALLE 11B- No 10-21  ',
      email    : 'aurag2599@hotmail.com',
      nombre   : 'AURA LETICIA GAMEZ ROJAS ',
      telefono : 6104622
    },
    llaveProceso: '25269400300120180024600',
    numero      : 418,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '43.211 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 43217,
      fechaPresentacion      : '2018-05-11',
      municipio              : 'CHIA',
      obligacion             : {
        '0': 5303711851549150,
        '1': '20,453,625,97'
      },
      radicado         : '2018 - 00237',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 73133278,
      direccion: '',
      email    : 'CALLE 1 SUR No 5A- 179 CASA 26 ',
      nombre   : 'ALVARO HERNAN RUIZ HERNANDEZ',
      telefono : 'alvarohernandezruiz@yahoo.es'
    },
    llaveProceso: '25175410300120180023700',
    numero      : 419,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '10.382.732 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-12-01',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '12/12/2017',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '377813451010780 / 4513070410107739',
        '1': 5303710165958750
      },
      radicado         : 1.100140030632017e22,
      vencimientoPagare: '08/07/2020'
    },
    deudor: {
      cedula   : 52773230,
      direccion: 'CALLE 42 No 78 H - 38 SUR',
      email    : 'N / A',
      nombre   : 'DIANA PATRICIA BARRETO OSMA',
      telefono:
        'F 3085025             CEL 3107706773'
    },
    llaveProceso: '11001400306320170129000',
    numero      : 420,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.704.853 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-24',
      etapaProcesal          : 'LIQUIDACION',
      fechaPresentacion      : '2018-04-27',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4099840209665970,
        '1': ''
      },
      radicado         : '2018 - 00617',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 79837700,
      direccion:
        'DIAGONAL 2 No 79 A-45 BLOQ 2 APTO 402',
      email   : 'alexmortiz76@yahoo.com',
      nombre  : 'ALEXANDER MUÑOZ ORTIZ',
      telefono: 4514661
    },
    llaveProceso: '11001400307520180061700',
    numero      : 421,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '23.440.288 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-16',
      etapaProcesal          : 1.100141037522018e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'kENNEDY',
      obligacion             : {
        '0': 2099120807,
        '1': 'N/A'
      },
      radicado         : '2018 - 00602',
      vencimientoPagare: '03/0/82024'
    },
    deudor: {
      cedula: 41722029,
      direccion:
        'CALLE 12 C- No 71C-60 INT. 6 APTO 403',
      email   : 'miyura1212@hotmail.com',
      nombre  : 'LUZ YOLANDA MUÑOZ MURCIA',
      telefono: 'F 40390564'
    },
    llaveProceso: '11001410307520180060200',
    numero      : 422,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '19.715.538 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-16',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2018-04-25',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990125146,
        '1': 377813200121300
      },
      radicado         : '2018 - 00443',
      vencimientoPagare: '2024-12-30'
    },
    deudor: {
      cedula: 80059977,
      direccion:
        'CARRER 1 ESTE No 67 A - 60 SUR  APTO 103 TORRE 7',
      email   : 'andrespedraza12933@gmail.com',
      nombre  : 'ANDRES PEDRAZA GARCIA ',
      telefono: 6949499
    },
    llaveProceso: '11001400301920180044300',
    numero      : 423,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '18.240.978 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-12',
      etapaProcesal          : 1.100140030152018e22,
      fechaPresentacion:
        'EL 4/09/2019 SE DEVUELVE DESGLOSE CON GARANTIAS A AECSA // EL 18/03/2019 EL JUZGADO DA POR TERMINADO PROCESO POR PAGO CUOTAS EN MORA // EL 2/11/2022 SE PIDIO CERTIFICADO CON LEVANTAMIENTO DE MEDIDA CAUTELAR',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 6980085367,
        '1': ''
      },
      radicado         : '2018 - 00459',
      vencimientoPagare: '18/02/82020'
    },
    deudor: {
      cedula   : 79742224,
      direccion: 'CALLE 31A No 22-13 SUR',
      email    : 'leo-sosa44@hotmail.com',
      nombre   : 'JAIME LEONARDO SOSA ROODRIGUEZ',
      telefono : 8031739
    },
    llaveProceso: '110014003015201800459',
    numero      : 424,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '27.503.283 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-25',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2018-05-08',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990126656,
        '1': ''
      },
      radicado         : '2018 - 00674',
      vencimientoPagare: '2025-02-24'
    },
    deudor: {
      cedula: 52498444,
      direccion:
        'CARRERA 29 No 40 A-53  APTO 604',
      email   : 'sandralopezdemesa@hotmail.com',
      nombre  : 'SANDRA RAQUEL LOPEZ DE MESA OSES',
      telefono: 6043134
    },
    llaveProceso: '11001400307520180067400',
    numero      : 425,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '1.309.817.652 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-26',
      etapaProcesal          : 'SUSPENDIDO',
      fechaPresentacion      : '2018-04-08',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': '3,77813198955955E+016'
      },
      radicado         : '2018 - 00476',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 19395095,
      direccion: 'CARRERA 151 C No 109A-50',
      email    : 'hernando.22.95@hotmail.com',
      nombre   : 'FELIX  HERNANDO MONTENEGRO GARCIA',
      telefono : 4779065
    },
    llaveProceso: '11001400306820180047600',
    numero      : 426,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '21.049.112 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-19',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2018-02-01',
      municipio              : 'CAJICA',
      obligacion             : {
        '0': 12730779,
        '1': 'N/A'
      },
      radicado         : '2018 - 00048',
      vencimientoPagare: '2021-01-16'
    },
    deudor: {
      cedula: 1069738339,
      direccion:
        'VEREDA LA 22 KILOMETRO 30 (CAJICA) // VEREDA SUBIA NORTE, PARTE BAJA, FINCA EL RINCON LOTE 2 (GRANADA- CUND): VEREDA SUBIA NORTE PARTE BAJA FINCA EL RINCON LOTE 2 (GRANADA - CUND)',
      email   : 'N/A',
      nombre  : 'JUAN CAMILO CHINGATE PENAGOS',
      telefono: 'CEL 313389449'
    },
    llaveProceso: '25126408900220180004800',
    numero      : 427,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '21.770.748 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-30',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2018-05-08',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 377814411512303,
        '1': ''
      },
      radicado         : '2018 - 00520',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 1019016622,
      direccion: 'CARRERA 47 A No 118-08 OF 106',
      email    : 'gioser.87@hotmail.com',
      nombre   : 'SERGIO LIBARDO ESPINOSA GOMEZ',
      telefono : 6901251
    },
    llaveProceso: '11001400302420180052000',
    numero      : 428,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '14.054.721 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-26',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '08/05/20184',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4594250085795500,
        '1': ''
      },
      radicado         : '2018 - 00612',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 10260455,
      direccion:
        'DIAGONAL 82 BIS SUR No 5 A-50 ESTE',
      email   : 'arcangel0605@hotmail.com',
      nombre  : 'ARCANGEL HERNANDEZ RODRIGUEZ',
      telefono: '7644527 /3157637045'
    },
    llaveProceso: '11001400306520180061200',
    numero      : 429,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '29.045.383 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-27',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2018-05-08',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990162905,
        '1': ''
      },
      radicado         : '2018 - 00404',
      vencimientoPagare: '2028-04-10'
    },
    deudor: {
      cedula   : 1024517216,
      direccion: 'DIAGONAL 68 D No 70C-31',
      email    : 'alejaso1291@hotmail.com',
      nombre   : 'JHONATAN ALEJANDRO  CUELLAR ARIAS',
      telefono : '4596744/3112907361'
    },
    llaveProceso: '11001410300120180040400',
    numero      : 430,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '43.214 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 43228,
      fechaPresentacion      : '2018-06-07',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 5303719576623800,
        '1': '15.796.908.07'
      },
      radicado         : '2018 - 00604',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 1014181498,
      direccion: '',
      email    : 'CARRERA 75 No 64 A- 22',
      nombre   : 'DUVY MARIELA RODRIGUEZ ROCHA',
      telefono : 'duvy.rodriguez@outlook.com'
    },
    llaveProceso: '11001400302220180060400',
    numero      : 431,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '30.053.475 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-27',
      etapaProcesal          : '',
      fechaPresentacion      : 'NOTIFICACION',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 530091199,
        '1': 377813482999910
      },
      radicado         : '2018 - 00583',
      vencimientoPagare: '2023-04-05'
    },
    deudor: {
      cedula   : 52757086,
      direccion: 'CARRERA 5 N BIS No 49-31 SUR',
      email    : 'yannisf25@hotmail.com',
      nombre   : 'LILIA YANIRA DIAZ CARO',
      telefono : 2791198
    },
    llaveProceso: '11001400308120180058300',
    numero      : 432,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '43.237 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'ZIPAQUIRA',
      obligacion             : {
        '0': '',
        '1': '24,057,365,00'
      },
      radicado         : '2018 - 00222',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 3116420,
      direccion: '',
      email    : 'CALLE 3 No 17-36',
      nombre   : 'JORGE ALBERTO BELTRAN PAEZ',
      telefono : 'jorgebepe@gmail.com'
    },
    llaveProceso: '25899400300120180022200',
    numero      : 433,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '1.220.463.917 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-05-15',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2018-05-22',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990085420,
        '1': ''
      },
      radicado         : '2018 - 00999',
      vencimientoPagare: '2021-04-04'
    },
    deudor: {
      cedula: 80429531,
      direccion:
        'DIAGONAL 15B No 104-45 CASA  132',
      email   : 'diagonal132@gmail.com',
      nombre  : 'FRANCISCO JAVIER GIL FLOREZ',
      telefono: '7536513/3193862544'
    },
    llaveProceso: '11001400306820180099900',
    numero      : 434,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '3.212.457.385 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-05-16',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2018-05-22',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990131392,
        '1': ''
      },
      radicado         : '2018 - 00573',
      vencimientoPagare: '2025-08-18'
    },
    deudor: {
      cedula: 1012341563,
      direccion:
        'CALLE 62A SUR-No 73C-21 T 1 APTO 202',
      email   : 'marysqs@hotmail.com',
      nombre  : 'MARIBEL REVELO QUIROGA ',
      telefono: 7383907
    },
    llaveProceso: '11001400301620180057300',
    numero      : 435,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '3.856.958.181 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-05-23',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2018-05-31',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 5491585909873,
        '1': 'AUDIOPRESTAMO'
      },
      radicado         : '2018 - 00756',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 79145374,
      direccion: 'TRANSVERSAL 2A No 67-71',
      email    : 'jcbaquerob@gmail.com',
      nombre   : 'JUAN CAMILO BAQUERO BUTTNER',
      telefono : 3483713
    },
    llaveProceso: '11001400306320180075600',
    numero      : 436,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '22.725.078 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-05-29',
      etapaProcesal          : 1.100141890152018e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': 4513073535490930
      },
      radicado: '2018 - 00212',
      vencimientoPagare:
        '23/05/2021 // 15/11/2020'
    },
    deudor: {
      cedula   : 80162319,
      direccion: 'CARRERA 79A No 13-10',
      email    : 'javierzipa83@hotmail.com',
      nombre   : 'JAVIER ANTONIO ZIPA SALAMANCA',
      telefono : 'F 8060262'
    },
    llaveProceso: '11001400371520180021200',
    numero      : 437,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.337.934 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-05-29',
      etapaProcesal          : 'EXCEPCIONES',
      fechaPresentacion      : '2018-05-31',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 15400866488,
        '1': ''
      },
      radicado         : '2018 - 00210',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 52132383,
      direccion: 'CARRERA 24 B No 31C-64',
      email    : 'velandialuzd@yahooo.es',
      nombre   : 'LUZ DARY VELANDIA GARCIA',
      telefono : 3973634
    },
    llaveProceso: '11001418900620180021000',
    numero      : 438,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '2.552.745.786 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-05-15',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2018-05-31',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 20990165412,
        '1': ''
      },
      radicado         : '2018 - 00555',
      vencimientoPagare: '2028-06-26'
    },
    deudor: {
      cedula   : 79812352,
      direccion: 'TRANSVERSAL 78 No 68A-15 SUR',
      email    : 'N/A',
      nombre   : 'MIGUEL ESNEYDER DEVIA CEPEDA',
      telefono : '7803858/3123170535'
    },
    llaveProceso: '25899400300320180055500',
    numero      : 439,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '14.670.023 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-05-29',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2018-05-31',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 1330085524,
        '1': ''
      },
      radicado         : '2018 - 00223',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 30387764,
      direccion:
        'CARRERA 13 No 13-24 OFICINA 625',
      email   : 'quirogag8878@gmail.com',
      nombre  : 'BLANCA ESTHER QUIROGA GIRALDO',
      telefono: 3107996508
    },
    llaveProceso: '11001408900820180022300',
    numero      : 440,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '17.141.891 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-05-23',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2018-05-31',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 20990156079,
        '1': ''
      },
      radicado         : '2018 - 00609',
      vencimientoPagare: '2032-09-18'
    },
    deudor: {
      cedula   : 52064928,
      direccion: 'CARRERA 5 No 7-40 SUR',
      email    : 'janeth2609@hotmail.com',
      nombre   : 'YANETH MILLAN PRIETO',
      telefono : '3339300/3102762216'
    },
    llaveProceso: '25899408900120180060900',
    numero      : 441,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '18.780.239 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-06-15',
      etapaProcesal          : 1.100140030782018e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 3778813777601880,
        '1': 4110540337511900
      },
      radicado         : '2018 - 00623',
      vencimientoPagare: '3/01/2021 // 2/02/2021'
    },
    deudor: {
      cedula   : 80183322,
      direccion: 'CARRERA 80 No 7D-05 CASA 231',
      email    : 'felipe.ef82@gmail.com',
      nombre   : 'JULIAN FELIPE ECHEVERRY FORERO',
      telefono : 'F 41277825'
    },
    llaveProceso: '11001400307820180062300',
    numero      : 442,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.303.941 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-05-08',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2018-06-19',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': 1740087509
      },
      radicado         : '2018 - 00784',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 80424051,
      direccion:
        'CARRERA 10 No 12-32, APTO 230 TORRE 8',
      email   : 'dieben71@gmail.com',
      nombre  : 'DIEGO FERNANDO BENITEZ ALVARADO',
      telefono: 3502092709
    },
    llaveProceso: '11001400301020180078400',
    numero      : 443,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 43270,
      fechaPresentacion      : '2018-06-26',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 377816279930352,
        '1': '36,820,559,51'
      },
      radicado         : '2018 - 00896',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 79562532,
      direccion: '',
      email    : 'CALLE 34 No 34C- 38 SUR',
      nombre   : 'PABLO CESAR SOACHA MORALES',
      telefono : 'paceso@latinmail.com'
    },
    llaveProceso: '11001400304020180089600',
    numero      : 444,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '29.143.861 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-06-14',
      etapaProcesal          : 2.575441890012018e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 20990165615,
        '1': 'N/A'
      },
      radicado         : '2018 - 00572',
      vencimientoPagare: '2028-07-03'
    },
    deudor: {
      cedula: 79978846,
      direccion:
        'CARRERA 10BIS B ESTE No 63-44 SUR',
      email : 'juangarzon21@hotmail.com',
      nombre: 'JUAN CARLOS GARZON BEJARANO',
      telefono:
        'F 3654986          CEL 3212282328'
    },
    llaveProceso: '25754400300120180057200',
    numero      : 445,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '43.265 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': '',
        '1': '16.392,987.23'
      },
      radicado         : '2018 - 00573',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 79725365,
      direccion: '',
      email    : 'CALLE 36 No 69-56 SUR. B CARVAJAL',
      nombre   : 'RICARDO CUSPOCA',
      telefono : 'mary07-69@hotmail.com'
    },
    llaveProceso: '25899418900120180057300',
    numero      : 446,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '19.260.500 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-06-21',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 1010082679,
        '1': ''
      },
      radicado         : '2018 - 00711',
      vencimientoPagare: '2027-10-27'
    },
    deudor: {
      cedula   : 79698506,
      direccion: 'CARRERA 80 BIS A No 70A-15',
      email    : 'N/A',
      nombre   : 'CARLOS ANTONIO PACHECO TORRES',
      telefono : 79698506
    },
    llaveProceso: '11001400300520180071100',
    numero      : 447,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '14.744.174 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-06-21',
      etapaProcesal          : 1.100140030122018e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': ''
      },
      radicado         : '2018 - 00810',
      vencimientoPagare: '2021-01-15'
    },
    deudor: {
      cedula   : 79342337,
      direccion: 'CALLE 113 SUR No 3-30 ESTE',
      email    : 'ngluisalfredo@gmail.com',
      nombre   : 'LUIS ALFREDO NIÑO GARCIA',
      telefono : 'F 8134170'
    },
    llaveProceso: '11001400301220180081000',
    numero      : 448,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '14.170.111 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-06-19',
      etapaProcesal          : 1.100140030172018e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'AUIDIOPRESTAMO',
        '1': 5306968825200490
      },
      radicado: '2018 - 00705',
      vencimientoPagare:
        '15/11/2020 // 17/11/2020'
    },
    deudor: {
      cedula   : 4271429,
      direccion: 'DIAGONAL 85 No 85A-22',
      email    : 'N/A',
      nombre   : 'TULIO ERNESTO TELLEZ ROJAS',
      telefono:
        'F 7510457                       CEL 3204265908'
    },
    llaveProceso: '11001400301720180070500',
    numero      : 449,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '21.550.202 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-06-19',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2018-06-26',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990160362,
        '1': ''
      },
      radicado         : '2018 - 00647',
      vencimientoPagare: '2021-01-22'
    },
    deudor: {
      cedula: 53133179,
      direccion:
        'CALLE 63 SUR No 78 J-38 TORRE 4 APTO 603',
      email   : 'kellyohamd@hotmail.com',
      nombre  : 'KELLY YOHANNA MURCIA DUCON',
      telefono: 7192579
    },
    llaveProceso: '11001400307820180064700',
    numero      : 450,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '10.691.310 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-06-28',
      etapaProcesal          : '',
      fechaPresentacion      : 'LIQUIDACION',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 377813280714347,
        '1': 4513070073578510
      },
      radicado         : '2018 - 00711',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 1032389993,
      direccion: 'CALLE4 48B SUR No 72 M-21',
      email    : 'jeisongc18@hotmail.com',
      nombre   : 'JOSE JEISSON GALINDO CARRILLO',
      telefono : '7163566/3209393337'
    },
    llaveProceso: '11001400305620180071100',
    numero      : 451,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '22.244.760 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-29',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '05/02/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 1740087269,
        '1': 'N/A'
      },
      radicado         : '2018 - 00090',
      vencimientoPagare: '07/03/2020'
    },
    deudor: {
      cedula: 25126734,
      direccion:
        'CARRERA 103 A  No 77D-22 MOLINOS- BOGOTA',
      email : 'mauriciosamu1128@gmail.com',
      nombre: 'MARIA MARIN DE OROZCO',
      telefono:
        'F 4412100           CEL 3124885346'
    },
    llaveProceso: '11001400305920180009000',
    numero      : 452,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '11.080.107 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-06-26',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2018-07-03',
      municipio              : 'FUNZA',
      obligacion             : {
        '0': 5303728778961290,
        '1': ''
      },
      radicado         : '2018 - 00841',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 79892208,
      direccion:
        'CARRERA 7 A No 5-22 MANZANA A CASA 3A',
      email   : 'ricardomelorr77@hotmail.com',
      nombre  : 'RICARDO RUEDA MELO',
      telefono: 8297714
    },
    llaveProceso: '25286400300120180084100',
    numero      : 453,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.580.021 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-06-26',
      etapaProcesal          : 1.100140030842018e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4594250129248050,
        '1': 5303710259485390
      },
      radicado         : '2018 - 00673',
      vencimientoPagare: '2021-02-04'
    },
    deudor: {
      cedula   : 80089235,
      direccion: 'CALLE 151 No 14A-32 APTO 10',
      email    : 'cocomarnico@gmail.com',
      nombre   : 'NICOLAS ERNESTO COCOMA ARCINIEGAS',
      telefono:
        'F 2863225                     CEL 3114473402'
    },
    llaveProceso: '11001400308420180067300',
    numero      : 454,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '14.997.448 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-06-29',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2018-07-06',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': ''
      },
      radicado         : '2018 - 00835',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 52434815,
      direccion: 'CALLE 43 SUR No 51F-23 PISO 2',
      email    : 'yemargol@yahoo.es',
      nombre   : 'YENNY MARCELA GOMEZ OLARTE',
      telefono : 18109227
    },
    llaveProceso: '11001400303820180083500',
    numero      : 455,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '24.310.470 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-06-29',
      etapaProcesal          : 1.100141037512018e22,
      fechaPresentacion:
        'PENDIENTE CURADOR AD LITEM',
      municipio : 'KENNEDY',
      obligacion: {
        '0': 10044000104,
        '1': 'N/A'
      },
      radicado         : '2018 - 01121',
      vencimientoPagare: '2021-01-29'
    },
    deudor: {
      cedula: 26407097,
      direccion:
        'CALLE  57B BIS No 99B-64 SUR BOSA SANTA FE',
      email: 'N/A',
      nombre:
        'ANA LUCIA YAÑEZ VARGAS (FALLECIDA)',
      telefono: 'F 6407097'
    },
    llaveProceso: '11001410375120180112100',
    numero      : 456,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '24.765.475 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-07-09',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2018-07-18',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': '460091173/ 460090745'
      },
      radicado         : '2018 - 00872',
      vencimientoPagare: '2019-01-26'
    },
    deudor: {
      cedula   : 900237555,
      direccion: 'CARRERA 58 No 15-54 PISO 2',
      email    : 'solinconltda@yahoo.es',
      nombre   : 'SOLINCON LIMITADA',
      telefono : '7495406/31088812879'
    },
    llaveProceso: '11001400307920180087200',
    numero      : 457,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '17.502.203 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-29',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '05/02/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': 'N/A'
      },
      radicado         : '2018 - 00111',
      vencimientoPagare: '15/0/2020'
    },
    deudor: {
      cedula: 52271112,
      direccion:
        'CARRERA 101 No 70 A-14 INTERIOR 1 APARTAMENTO 408',
      email   : 'saraja.7@hotmail.com',
      nombre  : 'SANDRA PATRICIA BELTRAN OVIEDO ',
      telefono: 'F 6607900'
    },
    llaveProceso: '11001400303720180011100',
    numero      : 458,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '32.492.443 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-07-16',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2018-07-23',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 5470085449,
        '1': ''
      },
      radicado         : '2018 - 00945',
      vencimientoPagare: '2024-06-30'
    },
    deudor: {
      cedula   : 79857627,
      direccion: 'CALLE 131  No 109-13',
      email    : 'cesarvanegas1425@gmail.com',
      nombre   : 'CESAR ARMANDO VANEGAS',
      telefono : 3108121876
    },
    llaveProceso: '11001400305320180094500',
    numero      : 459,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 43294,
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': '16.399.509.25'
      },
      radicado         : '2019 - 00409',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 79424825,
      direccion: 52205842,
      email    : 'DIAGONAL 31 No 24-63 SUR',
      nombre:
        'JORGE ABDOLONIO GUERRERO HERNANDEZ',
      telefono: 'kathepiti@hotmail.com'
    },
    llaveProceso: '11001400306620190040900',
    numero      : 460,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '22.458.995 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-07-10',
      etapaProcesal          : 1.100140030322018e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 6980086687,
        '1': 'N/A'
      },
      radicado         : '2018 - 00959',
      vencimientoPagare: '2021-03-17'
    },
    deudor: {
      cedula: 93288875,
      direccion:
        'CALLLE 147 No 17-60. INT 5 APTO 402',
      email   : 'joseaflorez@hotmail.com',
      nombre  : 'JOSE ANTONIO FLOREZ OVIEDO',
      telefono: 'F 6202859'
    },
    llaveProceso: '11001400303220180095900',
    numero      : 461,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '21.997.013 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-07-06',
      etapaProcesal          : 2.575441890012018e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 20990165644,
        '1': 'N/A'
      },
      radicado         : '2018 - 00700',
      vencimientoPagare: '2043-07-04'
    },
    deudor: {
      cedula   : 80755973,
      direccion: 'CARRERA 87 No 69-165',
      email    : 'yamid11@hotmail.es',
      nombre   : 'YAMID GELVES CACERES',
      telefono:
        'F 7279254                       CEL 3114915425'
    },
    llaveProceso: '25754418900120180070000',
    numero      : 462,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '24.501.535 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-07-05',
      etapaProcesal          : 'CONTESTACION DEMANDA',
      fechaPresentacion      : '2018-07-12',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'AMERICAN 0377814037749057',
        '1': 'VISA 4513083943843365 // MASTER 5303729958258417'
      },
      radicado         : '2019 - 00656',
      vencimientoPagare: '4/02/2021 // 16/02/2021'
    },
    deudor: {
      cedula   : 52883958,
      direccion: 'DIAGONAL 2 No 21 B-20',
      email    : 'leidyyaneth.lyv@gmail.com',
      nombre   : 'LEIDY YANETH VIDAL RODRIGUEZ',
      telefono : 'F 7114516'
    },
    llaveProceso: '11001418901420190065600',
    numero      : 463,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '43.293 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '',
      fechaPresentacion:
        '22/08/2018 EN CORRECCION',
      municipio : 'SOACHA',
      obligacion: {
        '0': '',
        '1': '19.080.628.51'
      },
      radicado         : '2018 - 00664',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 51944991,
      direccion: 51944991,
      email    : 'TRANSVERSAL 4B No 3-75   CASA 44',
      nombre   : 'RICARDO ARMANDO CELIS ANGEL ',
      telefono : 'maria.elizabeth2903@hotmail.co'
    },
    llaveProceso: '25754418900220180066400',
    numero      : 464,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '25.303.711 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-07-29',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '2018-07-31',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 209900149557,
        '1': 377815750421170
      },
      radicado         : '2018 - 00854',
      vencimientoPagare: '2027-03-02'
    },
    deudor: {
      cedula   : 79789409,
      direccion: 'CALLE 105 SUR No 2-22 ESTE',
      email    : 'N/A',
      nombre   : 'GIOVANNY DURAN ANTONIO',
      telefono : 2000101
    },
    llaveProceso: '11001400307720180085400',
    numero      : 465,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '14.270.897 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-01-29',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '05/02/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '37781415851035/',
        '1': '4099830008406922 / 5303710339142355'
      },
      radicado         : '2018 - 00117',
      vencimientoPagare: '3/05/2020 // 17/04/2020'
    },
    deudor: {
      cedula: 53160094,
      direccion:
        'CALLE 130 No 126-96 INTERIOR 16 APARTAMENTO 302',
      email : 'djpaez5@hotmail.com',
      nombre: 'DARLEY JULIED PAEZ HIGUERA',
      telefono:
        'F 14933266               CEL 3115754578'
    },
    llaveProceso: '11001400305220180011700',
    numero      : 466,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '37/0/2018',
      fechaPresentacion:
        '27/09/2018 EN CORRECCION',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 5303720477397800,
        '1': '19,774,658,00'
      },
      radicado         : '2018 - 00832',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 79938802,
      direccion: '',
      email    : 'CARRERA 94 A No 18-14',
      nombre   : 'MANUEL SANTIAGO CORREAL ZUÑIGA',
      telefono : 'santiagocorreal@hotmail.com'
    },
    llaveProceso: '11001400301720180083200',
    numero      : 467,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.881.706 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-08-03',
      etapaProcesal          : 1.100141890042018e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 3880083739,
        '1': 377813300070688
      },
      radicado         : '2018 - 00384',
      vencimientoPagare: '2020-06-08'
    },
    deudor: {
      cedula   : 79719969,
      direccion: 'CALLE 63 BIS No 69 a-29',
      email    : 'cenp11@hotmail.com',
      nombre   : 'CARLOS EDUARDO NARANJO PIÑEROS',
      telefono:
        'F 2400591                       CEL 3102438242'
    },
    llaveProceso: '11001408900420180038400',
    numero      : 468,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '14.770.792 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-08-01',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '2018-08-09',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 21581018168,
        '1': ''
      },
      radicado         : '2017 - 00922',
      vencimientoPagare: '2022-11-15'
    },
    deudor: {
      cedula   : 46667409,
      direccion: 'CALLE 43 No 80F-20',
      email    : 'N/A',
      nombre   : 'LUZ MYRIAM VALDERRAMA TUTA',
      telefono : '8117033 /3123178629'
    },
    llaveProceso: '11001400307020180092200',
    numero      : 469,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '09/08/2018',
      fechaPresentacion      : '2018-09-07',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': '',
        '1': '21.955.632.15'
      },
      radicado         : '2018 - 00841',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 52711938,
      direccion: '',
      email    : 'TRANSVERSAL 2A No 74B-62 SUR',
      nombre   : 'ELIANA JANNETH LOZANO ARTURO',
      telefono : 'eliananhtlozano@hotmail.com'
    },
    llaveProceso: '25754418900320180084100',
    numero      : 470,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.555.416 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-07-06',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '09/08/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990097950,
        '1': ''
      },
      radicado         : '2018 - 00712',
      vencimientoPagare: '15/06/2022'
    },
    deudor: {
      cedula   : 80742720,
      direccion: 'CARRERA 13 BIS No 47 SUR- 32',
      email    : 'nanaleo24@hotmail.com',
      nombre   : 'ADRIANA MIREYA AGUILAR',
      telefono : '7608072 / 3166997083'
    },
    llaveProceso: '1100140030152018007100',
    numero      : 471,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.720.013 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-08-03',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '09/08/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2010085214,
        '1': 3778151023327
      },
      radicado         : '2018 - 00389',
      vencimientoPagare: '13/03/2022'
    },
    deudor: {
      cedula   : 91250936,
      direccion: 'CARRERA 7 D No 151-40 APTO 101',
      email    : 'sergioespinel5@gmail.com',
      nombre   : 'SERGIO ESPINEL CORREAL',
      telefono : 6254528
    },
    llaveProceso: '11001418900920180038900',
    numero      : 472,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '15/08/2018',
      fechaPresentacion      : '',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': '',
        '1': ''
      },
      radicado         : '2018 - 00855',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 52725153,
      direccion: '',
      email    : 'TRANSVERSAL 2 ESTE No 32B-80 SUR ',
      nombre   : 'SANDRA MILENA VEGA AVILA',
      telefono : 'protegeservicios@hotmail.com'
    },
    llaveProceso: '25754418900320180085500',
    numero      : 473,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '23.110.934 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-08-15',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '10/09/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990125162,
        '1': ''
      },
      radicado         : '2018 - 01271',
      vencimientoPagare: '04/01/2030'
    },
    deudor: {
      cedula: 52788376,
      direccion:
        'TRANSVERSAL 83 A No 73-10   ALMERIA',
      email   : 'katiusaka79@gmail.com',
      nombre  : 'NADIA KATERINE MORENO CAMACHO',
      telefono: '4383117 / 3144765126'
    },
    llaveProceso: '11001418903220180127100',
    numero      : 474,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '39.146.947 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-02-15',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2018-02-22',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 1000090987,
        '1': 'N/A'
      },
      radicado         : '2018 - 00113',
      vencimientoPagare: '03/08//2019'
    },
    deudor: {
      cedula   : 4281808,
      direccion: 'CALLE 1 A No 13-30  SOACHA ',
      email    : 'eedibrando600@hotmail.com',
      nombre   : 'JOSE LIBRANDO CANDELA MUNEVAR',
      telefono : 'F 7113967   '
    },
    llaveProceso: '25754408900220180011300',
    numero      : 475,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '28.251.567 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '21/08/2018',
      etapaProcesal          : '05/09/2018',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': ''
      },
      radicado         : 'O',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 1081395456,
      direccion: '',
      email    : 'CARRERA 24B No 44-24',
      nombre   : 'ARNULFO PASTES DAZA',
      telefono : 'cerogube.1973@yahoo.com'
    },
    llaveProceso: '11001418901220180064200',
    numero      : 476,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '14.534.881 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-21',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2018-04-25',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': 'N/A'
      },
      radicado         : '2018 - 00475',
      vencimientoPagare: '2020-08-15'
    },
    deudor: {
      cedula   : 79568543,
      direccion: 'CALLE 60 No 38-26 APTO 301',
      email    : 'adolfo.daza@gmail.com',
      nombre   : 'ADOLFO  LEON DAZA FERNANDEZ',
      telefono : 'F 7038787'
    },
    llaveProceso: '11001400300420180047500',
    numero      : 477,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.147.359 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-08-31',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '11/09/2018',
      municipio              : 'TENJO',
      obligacion             : {
        '0': '3450084783 / 3450084855',
        '1': 'AUDIOPRESTAMO'
      },
      radicado         : '2018 - 00335',
      vencimientoPagare: '13/12/2019'
    },
    deudor: {
      cedula   : 3199064,
      direccion: 'CARRERA 4  No  1F-52  TENJO',
      email    : 'juristenjo@hotmail.com',
      nombre   : 'FABIO HERNANDO PASTOR PASTOR',
      telefono : '8646896 / 3202340560'
    },
    llaveProceso: '25799418900120180033500',
    numero      : 478,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.821.536 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-08-23',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '6/09/2018',
      municipio              : 'TABIO',
      obligacion             : {
        '0': 4594250481433800,
        '1': 5303720342826530
      },
      radicado         : '2018 - 00171',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 39809183,
      direccion: 'CALLE 8 No 0-105  TABIO',
      email    : 'tani_botia@hotmail.com',
      nombre   : 'TANIA CONSUELO BOTIA CORREA',
      telefono : 5099143
    },
    llaveProceso: '25785418900120180017100',
    numero      : 479,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '17.217.066 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-08-23',
      etapaProcesal          : 'EJECUCION',
      fechaPresentacion      : '13/09/2018',
      municipio              : 'GIRARDOT',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': 5306960687119070
      },
      radicado         : '2021 - 00539',
      vencimientoPagare: '15/04/2021 // 6/04/2021'
    },
    deudor: {
      cedula: 39575032,
      direccion:
        'CARRERA 14 No 22-10  APARTAMENTO  202 GIRARDOT',
      email   : 'adriana.0806@hotmail.com',
      nombre  : 'ADRIANA VANEGAS PEÑA',
      telefono: 'CEL 3152573448'
    },
    llaveProceso: '25307400300320210053900',
    numero      : 480,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.768.627 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-09-03',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '13/09/2018',
      municipio              : 'kENNEDY',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': ''
      },
      radicado         : '2019 - 00276',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 80019013,
      direccion:
        'CALLE 26 SUR No 95A-49 BL 9 APTO 102',
      email: 'willi.1977@hotmail.com',
      nombre:
        'WILLINTONG MARIO  YARURO PEÑARANDA',
      telefono: '5731671 /  3144195480'
    },
    llaveProceso: '11001410375120190027600',
    numero      : 481,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '35.321.033 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-08-22',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '13/09/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990114419,
        '1': ''
      },
      radicado         : '2018 - 00936',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 52380535,
      direccion:
        'CARRERA 88D No 6D-27 TORRE 6 APTO 618',
      email   : 'ccortes3500@gmail.com',
      nombre  : 'CLAUDIA JANETH CORTES ROSAS',
      telefono: 4138037
    },
    llaveProceso: '11001400307120180093600',
    numero      : 482,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '14.134.623 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-09-03',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '13/09/2018',
      municipio              : 'BARRIOS UNIDOS ',
      obligacion             : {
        '0': 5860083295,
        '1': ''
      },
      radicado         : '2018 - 01370',
      vencimientoPagare: '21/21/2021'
    },
    deudor: {
      cedula   : 19459237,
      direccion: 'CALLE 71 A No 69A-11 APTO  301',
      email    : 'N/A',
      nombre   : 'WILSON RICARDO ESCOBAR ESCOBAR',
      telefono : 7975211
    },
    llaveProceso: '11001418903220180137000',
    numero      : 483,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '26.503.795 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-09-06',
      etapaProcesal          : 2.575441890032019e22,
      fechaPresentacion      : 'NOTIFICACIÓN',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 20990157739,
        '1': 'N/A'
      },
      radicado         : '2019 - 00270',
      vencimientoPagare: '21/11/2032'
    },
    deudor: {
      cedula   : 30339083,
      direccion: 'CARRERA 7A No  2-94 SUR',
      email    : 'N/A',
      nombre   : 'JENNY  ANDREA AVILA GARZON ',
      telefono : 'F 6690738'
    },
    llaveProceso: '25754418900320190027000',
    numero      : 484,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.492.041 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-09-03',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '18/09/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'AUDIOPRETAMO / 377815771894801',
        '1': 4513074250577090
      },
      radicado         : '2018 - 00761',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 52115085,
      direccion: 'CALLE 75 A No 110C-17',
      email    : 'margobus2003@yahoo.com',
      nombre   : 'DIANA MARGARITA BUSTOS BALLEN',
      telefono : '43468511 / 3002667595'
    },
    llaveProceso: '11001418900820180076100',
    numero      : 485,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.827.556 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-08-10',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '18/09/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2330066914,
        '1': ''
      },
      radicado         : '2018 - 00210',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 40776578,
      direccion:
        'CARRERA 26B No 28-30  SUR INT 2',
      email   : 'salonmur@hotmail.com',
      nombre  : 'SANDRA PATRICIA LONDOÑO MURCIA',
      telefono: 3609077
    },
    llaveProceso: '11001418900520180021000',
    numero      : 486,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '20/09/2018',
      fechaPresentacion      : '02/10/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4513089091236580,
        '1': '12.028.842.57'
      },
      radicado         : '2018 - 00789',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 80473211,
      direccion: '',
      email:
        'CARRERA 102 B No 151-15 TORRE 2  APTO 1309',
      nombre  : 'GABRIEL MENDOZA MORINELLY',
      telefono: 'morinelly@gmail.com'
    },
    llaveProceso: '11001400301420180078900',
    numero      : 487,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '20/09/2018',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': '25.547.970.61'
      },
      radicado         : '2018 - 00834',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 52837807,
      direccion: '',
      email    : 'CARRERA 69J No 63A- 49',
      nombre   : 'SANDRA MILENA MORENO CAMPUZANO',
      telefono : 'angel428041@gmail.com'
    },
    llaveProceso: '11001418901020180083400',
    numero      : 488,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '23.041.704 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-09-13',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '20/09/2018',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 20990126542,
        '1': ''
      },
      radicado         : '2018 - 01008',
      vencimientoPagare: '19/02/2025'
    },
    deudor: {
      cedula   : 80257279,
      direccion: 'CALLE 72 G- SUR No 35-13 SUR',
      email    : 'jjanzola@hotmail.com',
      nombre   : 'ORLANDO SILVA CALDERON',
      telefono : 7183245
    },
    llaveProceso: '25754418900320180100800',
    numero      : 489,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '20/09/2018',
      fechaPresentacion      : '02/11/2018',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': '',
        '1': '17.506.316.71'
      },
      radicado         : '2018 - 00988',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 80052004,
      direccion: 396776067,
      email:
        'TRANSVERSAL 18 C- No 9C-11 SUR MANZANA 5 CASA 134',
      nombre  : 'DIEGO ARMANDO MATEUS ESPITIA',
      telefono: 'diegopetete04@hotmail.com'
    },
    llaveProceso: '25754418900120180098800',
    numero      : 490,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '18.100.699 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-09-03',
      etapaProcesal:
        'EMBARGO DE REMANENTES JUZGADO 27 PROCESO 2019 - 00251',
      fechaPresentacion: '20/09/2018',
      municipio        : 'BOGOTA',
      obligacion       : {
        '0': 'AUDIOPRESTAMO',
        '1': '0377816345049476 // 4513070259455355 // 5303720114305077'
      },
      radicado: '2018 - 00785',
      vencimientoPagare:
        '15/05/2021 // 5/07/2021 // 5/07/2021'
    },
    deudor: {
      cedula: 51987570,
      direccion:
        'CALLE 163 B No 50-80  INTERIOR 10 APT 231 CONJUNTO LA ESTANCIA III',
      email   : 'sandrabogota2007@yahoo.com',
      nombre  : 'SANDRA PATRICIA PACHECO RAMIREZ',
      telefono: 'F 8121692'
    },
    llaveProceso: '11001418900820180078500',
    numero      : 491,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.456.703 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-09-18',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '25/09/2018',
      municipio              : 'SESQUILE',
      obligacion             : {
        '0': 3360085515,
        '1': ''
      },
      radicado         : '2018 - 00135',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 22444794,
      direccion: 'CALLE 22 No 1-137',
      email    : '',
      nombre:
        'MARIBEL DEL ROSARIO RIVERA JIMENEZ',
      telefono: ''
    },
    llaveProceso: '25736408900120180013500',
    numero      : 492,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '21.035.323 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-09-06',
      etapaProcesal          : 'SUBSANA',
      fechaPresentacion      : '29/09/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990155357,
        '1': ''
      },
      radicado         : '2018 - 01817',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 53103504,
      direccion: 'CALLE 7 No 87B-90',
      email    : 'juliana.4455@hotmail.com',
      nombre   : 'KELLY YULIANA QUINTERO FIERRO',
      telefono : 4542788
    },
    llaveProceso: '11001410375120180181700',
    numero      : 493,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.225.494 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-09-13',
      etapaProcesal          : 'NOTIFICACION',
      fechaPresentacion      : '26/09/2018',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 2099010135501,
        '1': ''
      },
      radicado         : '2018 - 01022',
      vencimientoPagare: '2026-01-14'
    },
    deudor: {
      cedula   : 1022332681,
      direccion: 'CARRERA 51F- No 37 A-26 SUR',
      email    : 'vitopia1022@hotmail.com',
      nombre   : 'LUISA ENELLY GUGU VITOPIA',
      telefono : 3214747968
    },
    llaveProceso: '25754418900320180102200',
    numero      : 494,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '29.229.159 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-09-18',
      etapaProcesal          : 1.100140030032018e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': 377814420105917
      },
      radicado: '2018 - 01236',
      vencimientoPagare:
        '05/08/2021 // 07/05/2018'
    },
    deudor: {
      cedula: 17099495,
      direccion:
        'CALLE 29 No 23-46  TORRE 1 APTO 701',
      email   : 'pablomendoza44@gmail.com',
      nombre  : 'PABLO ELIAS MENDOZA MURILLO',
      telefono: 'F 76131145'
    },
    llaveProceso: '11001400300320180123600',
    numero      : 495,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '27.373.832 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-09-18',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '4/10/2018',
      municipio              : 'CHIA',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': 5491570347356810
      },
      radicado: '2018 - 00602',
      vencimientoPagare:
        '14/09/2021 // 07/05/2021'
    },
    deudor: {
      cedula   : 13222728,
      direccion: 'CARRERA 6 No 6-59',
      email    : 'mopadinco@yahoo.com',
      nombre   : 'MODESTO PINEDA PEREZ',
      telefono : 'F 8852490'
    },
    llaveProceso: '25175408900320180060200',
    numero      : 496,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '23.678.920 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-09-26',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '3/10/2018',
      municipio              : 'ZIPAQUIRA',
      obligacion             : {
        '0': 20990142568,
        '1': ''
      },
      radicado         : '2018 - 00435',
      vencimientoPagare: '2018-09-02'
    },
    deudor: {
      cedula: 11339859,
      direccion:
        'CARRERA 11 No 24 A-21 APTO 30 RINCON DEL ZIPA',
      email   : 'mluisa_06@hotmail.com',
      nombre  : 'ROQUE ANTONIO SANCHEZ',
      telefono: 8826149
    },
    llaveProceso: '25899410300120180043500',
    numero      : 497,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '19.491.278 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-09-18',
      etapaProcesal          : 2.589940030032018e22,
      fechaPresentacion:
        'PENDIENTE PAGAR ARANCEL $ 7000 Y DAR TRAMITE MARIA HELENA SUAREZ',
      municipio : 'ZIPAQUIRA',
      obligacion: {
        '0': 'AUDIOPRESTAMO',
        '1': 5306960218152465
      },
      radicado         : '2018 - 00429',
      vencimientoPagare: '2031-05-23'
    },
    deudor: {
      cedula   : 80546020,
      direccion: 'CARRERA 7 No 4-11  CENTRO',
      email    : 'kristal6020@gmail.com',
      nombre   : 'JOSE ALEXANDER BECERRA BARRERA',
      telefono : 3112304
    },
    llaveProceso: '25899400300320180042900',
    numero      : 498,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '24.807.317 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-10-08',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '12/10/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '20990123680  7/  377813468472239',
        '1': '4513079359765043 // 53037220341399596'
      },
      radicado         : '2019 - 00708',
      vencimientoPagare: '31/11/2024'
    },
    deudor: {
      cedula: 3208569,
      direccion:
        'DIAGONAL 77B No 119 A-74 APTO 504 INT6',
      email   : 'dcentro@pcpplasticos.com',
      nombre  : 'FLORESMIRO APONTE ACOSTA',
      telefono: 'F 3208569'
    },
    llaveProceso: '11001418901320190070800',
    numero      : 499,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '15.086.199 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-16',
      etapaProcesal          : 'EJECUCION ',
      fechaPresentacion      : '2018-04-27',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 68928057402,
        '1': 'AUDIOPRESTAMO'
      },
      radicado         : '2018 - 00454',
      vencimientoPagare: '2020-05-27'
    },
    deudor: {
      cedula   : '900566964-9',
      direccion: 'CARRERA 13 No 73-33',
      email    : 'N/A',
      nombre   : 'SMARTITECH S.A.S',
      telefono : 'F 3849696'
    },
    llaveProceso: '11001400300620180045400',
    numero      : 500,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '31.627.562 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-10-09',
      etapaProcesal          : 1.100140030552018e22,
      fechaPresentacion      : 'LIQUIDACIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '19353965852// 4549260357738974',
        '1': 4594260246320690
      },
      radicado         : '2018 - 01316',
      vencimientoPagare: '01/06/2021//04/10/2021'
    },
    deudor: {
      cedula: 830105220,
      direccion:
        'AVENIDA EL DORADO No 68C-61 OFICINA 702',
      email   : 'ucebul@gmail.com',
      nombre  : 'ASOCIACION AGROPECUARIA UCEBUL',
      telefono: 'F 7552891'
    },
    llaveProceso: '11001400305520180131600',
    numero      : 501,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '10.930.100 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-10-12',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '24/10/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4594260107010410,
        '1': 'N/A'
      },
      radicado         : '2019 - 01085',
      vencimientoPagare: '05/01/2021'
    },
    deudor: {
      cedula: 1023861016,
      direccion:
        'TRANSVERSAL 70G SUR-68-52 TORRE 18 APARTAMENTO 1401',
      email   : 'Anrf1985@hotmail.com',
      nombre  : 'ANGELICA NATHALY ROZO FRANCO',
      telefono: 'F 6594339'
    },
    llaveProceso: '11001418901620190108500',
    numero      : 502,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.631.923 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-10-10',
      etapaProcesal          : 'ADMISIION',
      fechaPresentacion      : '25/10/2018',
      municipio              : 'MANTA',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': '3360084365 / 3360084819'
      },
      radicado         : '2018 - 00063',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 3096755,
      direccion: 'DIAGONAL 2 No 6 A-29',
      email    : 'jclm152@hotmail.com',
      nombre   : 'JUAN CARLOS LEON MONTENEGRO',
      telefono : 8058011
    },
    llaveProceso: '25436408900120180006300',
    numero      : 503,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '29/10/2018',
      fechaPresentacion      : '',
      municipio              : 'SIBATE',
      obligacion             : {
        '0': '',
        '1': '26.315.289.23'
      },
      radicado         : '2018 - 00370',
      vencimientoPagare: 'CREDITO HIPOTCARIO'
    },
    deudor: {
      cedula   : 52432037,
      direccion: '',
      email    : '',
      nombre   : 'ANA DEL PILAR MENDEZ AMAYA',
      telefono : 'ojodelluvia@yahoo.com'
    },
    llaveProceso: '25740410300120180037000',
    numero      : 504,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '14.634.269 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-10-27',
      etapaProcesal          : 1.100141037512018e22,
      fechaPresentacion:
        'LIQUIDACION DEL CRÉDITO',
      municipio : 'KENNEDY',
      obligacion: {
        '0': '377813291831031 // 377815026183364',
        '1': '4099830041795208 /53037110111724925'
      },
      radicado         : '2018 - 02462',
      vencimientoPagare: '04/06/2021 //04/06/2021'
    },
    deudor: {
      cedula: 80156570,
      direccion:
        'CALLE 53 SUR No 82-38 CASA LADRILLO',
      email   : 'organizacionapply@gmail.com',
      nombre  : 'WILLIAM  GIOVANNY GARZON LOPEZ',
      telefono: 'F 2300145'
    },
    llaveProceso: '11001418902520180246200',
    numero      : 505,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '15.426.759 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-10-25',
      etapaProcesal          : 1.100140030042021e22,
      fechaPresentacion      : 'ADMITIENDO HIPOTECARIO',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '5,49157039248288E+016',
        '1': 'N/A'
      },
      radicado         : '2021- 00611',
      vencimientoPagare: '04/06/2021'
    },
    deudor: {
      cedula: 1023891419,
      direccion:
        'CARRERA 3 No 6-25 SUR TORRE 6 APTO 104',
      email   : 'edwin.sarmiento@altipal.com',
      nombre  : 'EDWIN CAMILO SARMIENTO GOMEZ',
      telefono: 'F 4616831'
    },
    llaveProceso: '11001418903120180138000',
    numero      : 506,
    tipoProceso : 'ACUMULADO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : 2.584341030012018e22,
      fechaPresentacion:
        'SIN LEVANTAMIENTO DE MEDIDA CAUTELAR',
      municipio : 'UBATE',
      obligacion: {
        '0': 3380087493,
        '1': '21.876.281,00'
      },
      radicado         : '2018 - 00499',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 80468168,
      direccion: '',
      email    : 'CARRERA 4 A No 16 B-14  TORRE2',
      nombre   : 'WILLIAM  YOVANY CASALLAS ROMERO',
      telefono : 'wcasallas@hotmail.com'
    },
    llaveProceso: '',
    numero      : 507,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '29.416.113 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-11-26',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '07/12/2018',
      municipio              : 'LA CALERA',
      obligacion             : {
        '0': 2490084469,
        '1': 'N/A'
      },
      radicado         : '2018 - 00371',
      vencimientoPagare: '01/03/2026 '
    },
    deudor: {
      cedula   : 11230400,
      direccion: 'CALLE 2 A No 5-22 APTO 503',
      email    : 'joalvato09@hotmail.com',
      nombre   : 'JOSE ALFONSO VASQUEZ TOVAR',
      telefono : 'CEL 3123703828'
    },
    llaveProceso: '25377408900120180037100',
    numero      : 508,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.585.595 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-11-30',
      etapaProcesal          : '',
      fechaPresentacion      : 'ADMISION',
      municipio              : 'COTA',
      obligacion             : {
        '0': 8270082134,
        '1': ''
      },
      radicado         : '2018 - 01002',
      vencimientoPagare: '15/10/218'
    },
    deudor: {
      cedula   : 20401209,
      direccion: 'CALLE 7 No 5-31',
      email    : 'todostienenzero@hotmail.com',
      nombre   : 'DIANA CAROLINA PRADO FIQUITIVA',
      telefono : ''
    },
    llaveProceso: '25214400300120180100200',
    numero      : 509,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '40.828.299 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2018-11-26',
      etapaProcesal          : 2.575440030022019e22,
      fechaPresentacion      : 'ADMISION',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 20990164067,
        '1': 6980087352
      },
      radicado         : '2018 - 00415',
      vencimientoPagare: '17/05/2033'
    },
    deudor: {
      cedula   : 80854028,
      direccion: 'CALLE 68 No 81 G-16',
      email    : 'huesos254@gmail.com',
      nombre   : 'MANUEL ARNULFO ARAQUE MUÑOZ',
      telefono : 8213897
    },
    llaveProceso: '25754400300220180041500',
    numero      : 510,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '41.522.255 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-11-21',
      etapaProcesal          : '',
      fechaPresentacion      : 'ADMISION',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 20990201453,
        '1': ''
      },
      radicado         : '2018 - 00416',
      vencimientoPagare: '12/04/2018'
    },
    deudor: {
      cedula   : 52851677,
      direccion: 'CARRRA 102 No 69-22',
      email    : 'dhyanitaco@hotmail.com',
      nombre   : 'DIANA MARJORIE ROMERO MONTOYA',
      telefono : 52851677
    },
    llaveProceso: '25754400300220180041600',
    numero      : 511,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '21.856.062 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2018-12-05',
      etapaProcesal          : '14/12/2018//13/05/2019',
      fechaPresentacion      : '',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': '',
        '1': ''
      },
      radicado         : '2018 - 01352',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 1014200510,
      direccion: '',
      email    : 'CALLE 93 No 94 N -16',
      nombre   : 'SANDRA MILENA MORALES GARCIA',
      telefono : 'milemorales17@hotmail.com'
    },
    llaveProceso: '25754418900320180135200',
    numero      : 512,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '40.290.738 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-11-07',
      etapaProcesal          : '01/02/2019',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': ''
      },
      radicado         : '2019 - 00165',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 80865782,
      direccion: '',
      email    : 'CALLE 64 C No 105 D- 36 PISO 3',
      nombre   : 'ERIK RICARDO PINTO RODRIGUEZ',
      telefono : 'erickro11@yahoo.es'
    },
    llaveProceso: '11001400304420190016500',
    numero      : 513,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '14.123.185 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-10-25',
      etapaProcesal          : 1.100141890212019e22,
      fechaPresentacion      : 'EJECUCION',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2370091170,
        '1': 5303710505564220
      },
      radicado         : '2019 - 00291',
      vencimientoPagare: '29/11/2019'
    },
    deudor: {
      cedula: 79290475,
      direccion:
        'KR 123 No 131 - 61. bloque 16 APTO 501',
      email   : 'minforb@gmail.com',
      nombre  : 'OSCAR ARMANDO TORRES GOMEZ',
      telefono: 'SIN/INF'
    },
    llaveProceso: '11001418902120190029100',
    numero      : 514,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Insolvencia',
    demanda : {
      capitalAdeudado        : '46.118.717 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-11-30',
      etapaProcesal          : '1,10014003017201E+022',
      fechaPresentacion:
        'PROCESO SUSPENDIDO CENTRO DE CONCILIACION',
      municipio : 'BOGOTA',
      obligacion: {
        '0': 7910080591,
        '1': 4099830244266410
      },
      radicado         : '2019 - 00179',
      vencimientoPagare: '10/03/2022'
    },
    deudor: {
      cedula   : 19496623,
      direccion: 'CARRERA 68 No 100-51 APTO 405',
      email    : 'terranova54@latinmail.com',
      nombre   : 'MANUEL ALBERTO LEON CALDERON',
      telefono : 'F 3175879'
    },
    llaveProceso: '11001400301720190017900',
    numero      : 514,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.800.337 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-11-01',
      etapaProcesal          : 'ADMISION',
      fechaPresentacion      : '01/02/2019',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 3778164677886080,
        '1': 530372013262050
      },
      radicado         : '2019 - 00190',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 79245905,
      direccion: 'CALLE 116 A- 70G-48 APTO 204',
      email    : 'asplucal@gmail.com',
      nombre   : 'ALVARO LUIS ASPRILLA LUCUMI',
      telefono : 6315927
    },
    llaveProceso: '11001418901420190019000',
    numero      : 516,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': '16262273,30'
      },
      radicado         : '2019 - 00162',
      vencimientoPagare: '1899-12-30'
    },
    deudor: {
      cedula   : 52470211,
      direccion: '',
      email    : 'CARRERA 53A # 4F-67',
      nombre   : 'MARYLU VALENCIA SUAREZ',
      telefono : 'mvalencia_9@yahoo.es'
    },
    llaveProceso: '11001418901020190016200',
    numero      : 517,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '12.203.649 COP',
      departamento           : 'CUNDINAMARCA ',
      entregaGarantiasAbogado: '2019-01-30',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 377816507543324,
        '1': 4513070013675100
      },
      radicado         : '2019 - 00162',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 80222254,
      direccion:
        'CARRERA 86 # 77 - 35 INT 13 APTO 339',
      email   : 'CYBERGEORGE82@HOTMAIL.COM',
      nombre  : 'JORGE IVAN AVENDAÑO VANEGAS',
      telefono: 3124487509
    },
    llaveProceso: '11001418900920190016200',
    numero      : 518,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '30.056.041 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2019-01-25',
      etapaProcesal          : 1.100140030702019e22,
      fechaPresentacion:
        'EL 3/12/2020 EL JUZGADO DECRETO TERMINACION PROCESO POR PAGO CUOTAS EN MORA // EL 12/05/2021 SE RETIRARON GARANTIAS DEL JUZGADO // EL 29/04/2021 SE ENVIO OFICIO A OFICINA DE REGISTRO // EL 22/09/2021 SUPERNOTARIADO LO DEVOLVIO POR NO PAGO // EL 11/11/2021 SE SOLICITO CERTIFICADO Y ESTA PENDIENTE LEVANTAMIENTO DE MEDIDA CAUTELAR //PAGAR DESGLOSE Y RETIRAR OFICIO PARA RADICAR LEVANTAMIENTO',
      municipio : 'BOGOTA',
      obligacion: {
        '0': '2273 320150109',
        '1': 'N/A'
      },
      radicado         : '2019 - 00551',
      vencimientoPagare: '23/03/2027'
    },
    deudor: {
      cedula: 1030529007,
      direccion:
        'CARRERA 98D # 61A-24 SUR (KR 113A # 61A-24 Sur Bosa Porvenir)',
      email   : 'catalinalosada_w@hotmail.com',
      nombre  : 'LEIDY CATALINA LOSADA CABRERA',
      telefono: 'F 7848716'
    },
    llaveProceso: '11001400307020190055100',
    numero      : 519,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.871.976 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2019-02-15',
      etapaProcesal          : 1.100141890552019e22,
      fechaPresentacion      : '26/02/2019',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 5470086745,
        '1': ''
      },
      radicado         : '2019 - 00287',
      vencimientoPagare: '18/09/2023'
    },
    deudor: {
      cedula: 92554673,
      direccion:
        'CARRERA 123 No 130C- 56  TORRE 52 APTO 201',
      email   : 'farapaeos@gmail.com',
      nombre  : 'RAFAEL ADOLFO PAEZ ORTEGA',
      telefono: 3919591
    },
    llaveProceso: '11001400307320190028700',
    numero      : 520,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '20.616.779 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2019-02-08',
      etapaProcesal          : '',
      fechaPresentacion      : '15/02/2019',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4099830177563670,
        '1': ''
      },
      radicado         : '2019 - 00235',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 40050052,
      direccion: 'CARRERA 4A No 93-11p 1',
      email    : 'aquimaria1965@gmail.com',
      nombre:
        'MARIA AQUILINA RODRIGUEZ LANCHEROS',
      telefono: 7622730
    },
    llaveProceso: '11001418901220190023500',
    numero      : 521,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '29.723.047 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2019-02-12',
      etapaProcesal          : '',
      fechaPresentacion      : '26/02/2019 // 4/06/19',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990146891,
        '1': 450091594
      },
      radicado         : '2019 - 01004',
      vencimientoPagare: '19/12/2026'
    },
    deudor: {
      cedula   : 79359896,
      direccion: 'CALLE 42 C No 78  A-17 SUR',
      email    : 'dorapia@hotmail.com',
      nombre   : 'ARMANDO RODRIGUEZ RODRIGUEZ',
      telefono : 4742982
    },
    llaveProceso: '11001400306820190100400',
    numero      : 522,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '22.144.741 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2019-02-26',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990158449,
        '1': ''
      },
      radicado         : '2019 -00434',
      vencimientoPagare: '26/11/2018'
    },
    deudor: {
      cedula   : 1014185022,
      direccion: 'CALLE 90A No 45 A- 05',
      email    : 'aleja202007@hotmail.com',
      nombre   : 'LUISA ALEJANDRA ESCOBAR ANDRADE',
      telefono : '7949511/3123704906'
    },
    llaveProceso: '11001418907620190043400',
    numero      : 523,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '19.951.135 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2019-05-20',
      etapaProcesal          : '',
      fechaPresentacion      : '04/06/2019',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990138197,
        '1': ''
      },
      radicado         : '2019 - 01008',
      vencimientoPagare: '25/04/2026'
    },
    deudor: {
      cedula   : 52433839,
      direccion: 'CARRERA 15 # 33-17',
      email    : 'grpte@hotmail.com',
      nombre   : 'INGRIT YOHANA VASQUEZ ROJAS',
      telefono : '2836157//3213987669'
    },
    llaveProceso: '11001400307520190100800',
    numero      : 524,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2019-06-29',
      etapaProcesal          : '',
      fechaPresentacion      : '04/06/2019',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990151954,
        '1': ''
      },
      radicado         : '2019 - 00496',
      vencimientoPagare: '16/05/2032'
    },
    deudor: {
      cedula: 1030543356,
      direccion:
        'CALLE 48 SUR 87-86 TORRE 16 APTO 261',
      email   : 'magda.riascos.diaz@gmail.com',
      nombre  : 'MAGDA LORENA RIASCOS DIAZ',
      telefono: 2934384
    },
    llaveProceso: '11001400303620190049600',
    numero      : 525,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.180.105 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2019-05-20',
      etapaProcesal          : '',
      fechaPresentacion      : '5/06/2019',
      municipio              : 'CHIA',
      obligacion             : {
        '0': 9320086222,
        '1': ''
      },
      radicado         : '2019 - 00304',
      vencimientoPagare: '25/10/2024'
    },
    deudor: {
      cedula   : 1072642976,
      direccion: 'CALLE 17 #5-10 CHIA',
      email    : 'cristian20g@hotmail.com',
      nombre:
        'CRISTIAN DAVID GUTIERREZ RODRIGUEZ',
      telefono: 3202954313
    },
    llaveProceso: '25175400300120190030400',
    numero      : 526,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '29.140.667 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2019-05-20',
      etapaProcesal          : 2.528640030012019e22,
      fechaPresentacion      : 'NOTIFICACION',
      municipio              : 'FUNZA',
      obligacion             : {
        '0': '2273 320097153',
        '1': 'REF 42796745'
      },
      radicado         : '2019 - 00418',
      vencimientoPagare: '03/01/2022 //25/05/2022'
    },
    deudor: {
      cedula   : 80654935,
      direccion: 'CALLE 7A #7A-15 FUNZA',
      email:
        'jmarcelo_78@yahoo.com // samvari12@gmail.com',
      nombre: 'JAIRO MARCELO GUIZA RODRIGUEZ',
      telefono:
        'F 8233553                          CEL 3108090708'
    },
    llaveProceso: '25286400300120190041800',
    numero      : 527,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '46.371.154 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2019-08-20',
      etapaProcesal          : 2.543040030012019e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'MADRID',
      obligacion             : {
        '0': '2273 320186673',
        '1': 'N/A'
      },
      radicado         : '2019 - 01160',
      vencimientoPagare: '25/08/2030'
    },
    deudor: {
      cedula: 1065564377,
      direccion:
        'CALLE  23 No 12-50 CASA 16 INT 12 MANZANA 1 CONJUNTO QUINTAS DE ZARAGOZA',
      email   : 'yoladisb@hotmail.com',
      nombre  : 'YOLADIS ESTHER BLANCO LOPEZ',
      telefono: 'F 6601752'
    },
    llaveProceso: '25473400100120190116000',
    numero      : 528,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '35.424.539 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2019-11-14',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 20990171776,
        '1': 'AUDIOPRESTAMO'
      },
      radicado         : '2019 - 01103',
      vencimientoPagare: '24/01/2034'
    },
    deudor: {
      cedula   : 2976219,
      direccion: 'CARRERA 39 B No 20T-1 APTO 303',
      email    : 'gcontreras@intecq.com',
      nombre   : 'GONZALO CONTRERAS POVEDA',
      telefono : 4607474
    },
    llaveProceso: '11001400305220190110300',
    numero      : 529,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '14.409.411 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-21',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2018-04-25',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '4,0998833882814E+016',
        '1': 5303729887314280
      },
      radicado         : '2018 - 00514',
      vencimientoPagare: '2020-10-05'
    },
    deudor: {
      cedula   : 35455606,
      direccion: 'CALLE 175 No 70-40',
      email    : 'mariaclarareyes@hotmail.com',
      nombre   : 'MARIA CLARA REYES REYES',
      telefono : 'F 60991181'
    },
    llaveProceso: '11001400308120180051400',
    numero      : 530,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '35.608.653 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2020-10-07',
      etapaProcesal          : 'EJECUCION',
      fechaPresentacion      : '2020-10-07',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2020084294,
        '1': '2020087484 // 4594250317705437 //5303723260933890'
      },
      radicado         : '2020 - 00535',
      vencimientoPagare: ''
    },
    deudor: {
      cedula: 51813018,
      direccion:
        'KR 81 No. 127 A - 46 CONJUNTO MONTE AZUL BOGOTA',
      email   : 'yadelcis@hotmail.com',
      nombre  : 'SANDRA LEONOR PAEZ MURCIA',
      telefono: '6139147 // 3134386087'
    },
    llaveProceso: '11001400304220200053500',
    numero      : 531,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '15.324.570 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2020-09-05',
      etapaProcesal          : 'CONTESTACIÓN DEMANDA',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 65886140334,
        '1': 4594260446916180
      },
      radicado         : '2020-1021',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 900520023,
      direccion: 'AV BOYACA 63D - 26 OFICINA 103',
      email    : 'N/A',
      nombre   : 'DIMOIN COLOMBIA S.A.S.',
      telefono : 6708086
    },
    llaveProceso: '11001400306820200102100',
    numero      : 532,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '56.987.693 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-11-14',
      etapaProcesal          : 'EJECUCION',
      fechaPresentacion      : '',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': 1680097436,
        '1': 148653
      },
      radicado         : '2018 - 00060',
      vencimientoPagare: '15/11/2021'
    },
    deudor: {
      cedula: 79522009,
      direccion:
        'DIAGONAL 28 No 33-27  TORRE 7 APART 203  SOACHA',
      email   : 'jairopardo8-11-70@hotmail.com',
      nombre  : 'JAIRO ALFONSO PARDO JAIMES',
      telefono: 'F 7808590'
    },
    llaveProceso: '2575440030042018000600',
    numero      : 533,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '33.000.833 COP',
      departamento           : 'CNDINAMARCA',
      entregaGarantiasAbogado: '2020-09-05',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '',
      municipio              : 'ZIPAQUIRA',
      obligacion             : {
        '0': 377814085773793,
        '1': 4513070445120640
      },
      radicado         : '2020 - 00289',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 11337530,
      direccion: 'VEREDA SAN JORGE ZIPAQUIRA',
      email    : 'maribelbonita86@hotmail.com',
      nombre   : 'PEDRO JULIO TRIVIÑO VALBUENA',
      telefono : 3115159670
    },
    llaveProceso: '2589940010020200028900',
    numero      : 534,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '13.583.148 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2020-09-25',
      etapaProcesal          : 1.10014003069202e22,
      fechaPresentacion      : 'NOTIFICACION',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 370091753,
        '1': 3700700231
      },
      radicado         : '2020 - 00823',
      vencimientoPagare: '01/23/2021'
    },
    deudor: {
      cedula   : 51918944,
      direccion: 'CALLE 55 SUR 24C-28 APTO 502',
      email    : 'amandagaitan@hotmail.com',
      nombre   : 'AMANDA LUCIA GAITAN RINCÓN ',
      telefono : 2823872
    },
    llaveProceso: '11001400306920200082300',
    numero      : 535,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '18.772.902 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-04-26',
      etapaProcesal          : 1.100140030202018e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4513072334510690,
        '1': 5491580398400380
      },
      radicado         : '2018 - 00479',
      vencimientoPagare: '2020-08-02'
    },
    deudor: {
      cedula   : 39544073,
      direccion: 'CALLE 64 C No 105-88',
      email    : 'blancall21@hotmail.com',
      nombre   : 'BLANCA LILIA BRAVO PAEZ',
      telefono : 'F 2295550'
    },
    llaveProceso: '11001400302020180047900',
    numero      : 536,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '20.353.079 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-06-28',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2018-07-06',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2270085292,
        '1': 3778131949466660
      },
      radicado         : '2018 - 00850',
      vencimientoPagare: '2022-02-02'
    },
    deudor: {
      cedula   : 52155023,
      direccion: 'CALLE 86A No 95A-15 APTO 108',
      email    : 'mediconta@gmail.com',
      nombre   : 'SANDRA  LILIANA CRUZ BELTRAN',
      telefono:
        'F 5360278                          CEL 3108540511'
    },
    llaveProceso: '11001400305120180085000',
    numero      : 537,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '16.862.840 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-05-17',
      etapaProcesal          : 1.100140030272018e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4099840046475270,
        '1': 'N/A'
      },
      radicado         : '2018 - 00577',
      vencimientoPagare: '2020-09-24'
    },
    deudor: {
      cedula   : 41564331,
      direccion: 'CALLE 40 No 8-86',
      email    : 'grovida@gmail.com',
      nombre   : 'GLORIA GIRALDO DE ROVIDA',
      telefono : 'F 7383907'
    },
    llaveProceso: '11001400302720180057700',
    numero      : 538,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '32.026.447 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-07-03',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2018-07-11',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2070086628,
        '1': 4594250056606570
      },
      radicado         : '2018 - 00818',
      vencimientoPagare: '2021-04-10'
    },
    deudor: {
      cedula: 51937267,
      direccion:
        'CALLLE 106 B- No 54-57 APTO 201 PUENTE LARGO',
      email   : 'amoplata@yahoo.com',
      nombre  : 'ADRIANA LUCIA MORA PLATA',
      telefono: 'F 8146011'
    },
    llaveProceso: '11001400303620180081800',
    numero      : 539,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '17.667.402 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-07-26',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '31/0772019',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 1980096337,
        '1': 6700083464
      },
      radicado: '2018 - 00929',
      vencimientoPagare:
        '10/05/2121 // 10/05/2021'
    },
    deudor: {
      cedula   : 3242760,
      direccion: 'CARRERA 86 No 99-23',
      email    : 'rodrigogar68@hotmail.com',
      nombre   : 'JOSE RODRIGO GARCIA QUINTERO',
      telefono:
        'F 6855750                   CEL 3143659602'
    },
    llaveProceso: '11001400301420180092900',
    numero      : 540,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '39.855.851 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-08-31',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '10/09/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'AUDIOPRESTAMO',
        '1': 5491580436291960
      },
      radicado         : '2018 - 00964',
      vencimientoPagare: '15/04/2021 // 6/05/2021'
    },
    deudor: {
      cedula   : 79533771,
      direccion: 'CARRERA 81 G No 48-03 SUR',
      email    : 'jrestradacastillo@gmail.com',
      nombre   : 'JOSE RAMON ESTRADA CASTILLO',
      telefono : 'F 2998302'
    },
    llaveProceso: '11001400308220180096400',
    numero      : 541,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '12.864.472 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-08-22',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '05/09/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'AMERICAN 377813618831557',
        '1': 'VISA 4513070030495183 // 5303715376619405'
      },
      radicado         : '2018 - 00644',
      vencimientoPagare: '6/04/2021 // 6/04/2021'
    },
    deudor: {
      cedula   : 53106069,
      direccion: 'CALLE 65 BIS No 86-50',
      email    : 'bicato10@hotmail.com',
      nombre   : 'BIBIANA PATRICIA ESGUERRA VASQUEZ',
      telefono : 'F 53106069'
    },
    llaveProceso: '11001418901220180064400',
    numero      : 542,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '24.849.682 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2018-10-10',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '19/10/2018',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 3880083804,
        '1': '4513074508682496 // 53037103332223839'
      },
      radicado         : '2018 - 00951',
      vencimientoPagare: '13/03/2022'
    },
    deudor: {
      cedula: 51579807,
      direccion:
        'CALLE 19 A No 82 - 65 INT 6 APTO 503',
      email   : 'rochi2656@hotmail.com',
      nombre  : 'ROSALIA CHARRY  SARMIENTO',
      telefono: 'F 2943968'
    },
    llaveProceso: '11001418901220180095100',
    numero      : 543,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '26.806.038 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2019-12-04',
      etapaProcesal          : 1.100140030612019e22,
      fechaPresentacion      : 'EJECUCIÓN',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 1800092546,
        '1': 1800092544
      },
      radicado         : '2019 - 02159',
      vencimientoPagare: '4/03/2019 //5/02/2026'
    },
    deudor: {
      cedula   : 52018939,
      direccion: 'CALLE 78 D 110-22 INTERIOR 16',
      email    : 'sonialo.ejm@gmail.com',
      nombre   : 'SONIA ANGELICA LOPEZ ORTIZ',
      telefono:
        'F 8055915                     CEL 3112925970'
    },
    llaveProceso: '11001400304320190215900',
    numero      : 544,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': ''
      },
      radicado         : 'SIN NUMERO',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 79295686,
      direccion: '',
      email    : '',
      nombre   : 'JAIRO ALDANA VILLAMIZAR',
      telefono : ''
    },
    llaveProceso: 'N/A',
    numero      : 545,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Reintegra',
    demanda : {
      capitalAdeudado        : '41.372.568 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2017-10-06',
      etapaProcesal          : 'EJECUCIÓN',
      fechaPresentacion      : '2017-10-12',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 12541235,
        '1': 'N/A'
      },
      radicado         : '2017 - 01002',
      vencimientoPagare: '2020-10-04'
    },
    deudor: {
      cedula   : 1116782267,
      direccion: 'DIAGONAL 2 No 79 F -04',
      email    : 'juanotero1989@gmail.com',
      nombre   : 'JOGLI JOAQUIN OTERO VARGAS',
      telefono : 'CEL 3005941798'
    },
    llaveProceso: '11001400300220170100200',
    numero      : 546,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': '',
        '1': ''
      },
      radicado         : '2021 - 00153',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 348774,
      direccion: '',
      email    : '',
      nombre   : 'JOSE EDGAR ACHURI GONZALEZ',
      telefono : ''
    },
    llaveProceso: '25754400300120210015300',
    numero      : 547,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': ''
      },
      radicado         : '2017 - 01024',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 23270185,
      direccion: '',
      email    : '',
      nombre   : 'CLARA PATRICIA PEÑA BELTRAN',
      telefono : ''
    },
    llaveProceso: '11001400300820170102400',
    numero      : 548,
    tipoProceso : 'PRENDARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '',
        '1': ''
      },
      radicado         : 'SIN NUMERO',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 79405147,
      direccion: '',
      email    : '',
      nombre   : 'JOSE ANTONIO BEJARANO CARREÑO',
      telefono : ''
    },
    llaveProceso: 'N/',
    numero      : 549,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Terminados',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'SOACHA',
      obligacion             : {
        '0': '',
        '1': ''
      },
      radicado         : '2019 - 00911',
      vencimientoPagare: ''
    },
    deudor: {
      cedula   : 1022336662,
      direccion: '',
      email    : '',
      nombre   : 'MIGUEL ANGEL AGUASACO PEÑUELA',
      telefono : ''
    },
    llaveProceso: '25754418900120190091100',
    numero      : 550,
    tipoProceso : 'HIPOTECARIO'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '28.018.855 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-06-20',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'FUSAGASUGA',
      obligacion             : {
        '0': 2640096179,
        '1': 'N/A'
      },
      radicado         : '2023 - 00371',
      vencimientoPagare: '2028-03-08'
    },
    deudor: {
      cedula   : 1075211773,
      direccion: 'KR 1 2 41 Fusagasugá',
      email    : 'jonathansoldier@hotmail.com',
      nombre   : 'PEDRO JONATHAN RAMIREZ GOMEZ',
      telefono : 'N/A'
    },
    llaveProceso: '',
    numero      : 551,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '77.376.262 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-06-20',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 530104065,
        '1': 530103261
      },
      radicado: '2023 - 00622',
      vencimientoPagare:
        '10/02/2026 // 27/01/2026'
    },
    deudor: {
      cedula   : 1023874668,
      direccion: 'CL 49 A BIS SUR No. 5 N 10  ',
      email    : 'oscar2794@hotmail.com',
      nombre   : 'OSCAR MAURICIO GOMEZ MENDOZA',
      telefono : 'F 2043773'
    },
    llaveProceso: '11001400300420230062200',
    numero      : 552,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '31.804.872 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-06-20',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 130089828,
        '1': 'N/A'
      },
      radicado         : '2023 - 01088',
      vencimientoPagare: '2025-02-25'
    },
    deudor: {
      cedula: 80220698,
      direccion:
        'Carrera 7 # 180 75 // Carrera 8 A No. 182 - 12',
      email   : 'lxndrlaverde@gmail.com',
      nombre  : 'JOSE ALEXANDER LAVERDE PENAGOS',
      telefono: 'N/A'
    },
    llaveProceso: '',
    numero      : 553,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '22.111.021 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2150100545,
        '1': '377844028390801 y 4513080181283486'
      },
      radicado: '2023 - 01311',
      vencimientoPagare:
        '22/02/2026 // 4/07/2026 // 6/03/2026'
    },
    deudor: {
      cedula: 51976656,
      direccion:
        'Carrera 102 No. 69 - 81 Casa 5 Conjunto Residencial Montes de Tierra Grata',
      email   : 'sandris73@hotmail.com',
      nombre  : 'SANDRA PATRICIA ALVAREZ RODRIGUEZ',
      telefono: 'F 2297973 CELULAR 3157352910'
    },
    llaveProceso: '',
    numero      : 554,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '80.906.224 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 1920089307,
        '1': 'N/A'
      },
      radicado         : '2023 - 00904',
      vencimientoPagare: '2026-03-04'
    },
    deudor: {
      cedula: 53130409,
      direccion:
        'CL 55 BIS 16 48 Apartamento 702 Edificio Bangkok',
      email   : 'jsquiroga72@hotmail.com ',
      nombre  : 'JEIMMY SOLEY QUIROGA RAMIREZ',
      telefono: 'F 3917539 CELULAR 3506509064'
    },
    llaveProceso: '',
    numero      : 555,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '149.444.779 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'MADRID',
      obligacion             : {
        '0': '3830095699 // 3830095700',
        '1': 3830095701
      },
      radicado: '2023 - 1127',
      vencimientoPagare:
        '9/03/2026 // 9/03/2026 // 9/04/2026'
    },
    deudor: {
      cedula: 1022335014,
      direccion:
        ' Carrera 13 # 4-20 Madrid (Cundinamarca)',
      email   : 'ciro.onofe1105@gmail.com',
      nombre  : 'CIRO ERQUILIAN ONOFRE',
      telefono: 'CELULAR 3023193548'
    },
    llaveProceso: '25430400300120230112700',
    numero      : 556,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '49.329.779 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 840093593,
        '1': 'PAGARE SIN NUMERO T. AMERICAN EXPRESS 0377844069636757'
      },
      radicado         : '2023-782',
      vencimientoPagare: '18/07/2026 // 4/03/2026'
    },
    deudor: {
      cedula: 71685758,
      direccion:
        'KR 32 A 1 19 BARRIO SANTA MATILDE',
      email:
        'cahequi8097@gmail.com  fundaoyuki@gmail.com',
      nombre  : 'CARLOS HERNEY QUINTERO ',
      telefono: 'F 6485655 CELULAR 3002985587'
    },
    llaveProceso: 1.100140030172023e22,
    numero      : 557,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '46.537.671 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 3880005183,
        '1': 'PAGARE SIN NUMERO T. MASTER CARD 5303720122061696'
      },
      radicado         : '2023 -',
      vencimientoPagare: '17/03/2026 // 4/03/2026'
    },
    deudor: {
      cedula: 52531016,
      direccion:
        'Calle 18 N 86 55 Etapa 1 Torre 5 Apartamento 403 Conjunto Residencial Parque de Ostente',
      email   : 'marcearias@yahoo.com',
      nombre  : 'CLAUDIA MARCELA ARIAS LÓPEZ',
      telefono: 'CELULAR 3106736494'
    },
    llaveProceso: '',
    numero      : 558,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '42.598.393 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 1080103378,
        '1': 'N/A'
      },
      radicado         : ' 2023-00886',
      vencimientoPagare: '2026-03-02'
    },
    deudor: {
      cedula: 80219425,
      direccion:
        'Calle 50 Sur No. 93 D 38 Torre 07 Apartamento 601 Conjunto Residencial Porvenir Reservado Etapa 7; Carrera 89 A No. 45 A – 33 Sur Casa 207 Agrupación de Vivienda La Margarita Etapa 9',
      email   : 'edwsal736@gmail.com',
      nombre  : 'EDWIN ALEXANDER SALCEDO PEREZ',
      telefono: 'CELULAR 3112633806'
    },
    llaveProceso: '',
    numero      : 559,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '40.696.764 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BARRAQNUILLA',
      obligacion             : {
        '0': 4770111750,
        '1': 'PAGARÉ SIN NÚMERO T. MASTER CARD 5303720229555616 // T. VISA 4513070377907980'
      },
      radicado         : '2023-00735',
      vencimientoPagare: '6/03/2026 //4/07/2026'
    },
    deudor: {
      cedula: 1129565798,
      direccion:
        'CR 51 43 04 Barrio Abajo Barranquilla // Carrera 71 No. 88A - 31 Barranquilla // Calle 42 A No. 46 - 04 Barrio El Parque en Soledad (Atlantico)',
      email : 'inghanselmartinez@hotmail.com',
      nombre: 'HANSEL MARTINEZ BARROS',
      telefono:
        'F 3930210 CELULAR 3043463859 // 3005306070'
    },
    llaveProceso: '08001418901820230073500',
    numero      : 560,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '36.720.537 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 6520089408,
        '1': 'TARJETA MASTER CARD No. 5303720118094313 Y TARJETA AMERICAN No. 0377844026948428'
      },
      radicado         : '2023-00884',
      vencimientoPagare: '2/03/2026 // 20/03/2026'
    },
    deudor: {
      cedula: 52278914,
      direccion:
        'Carrera 87 No. 48 – 50 Sur Casa 26 Conjunto Residencial Alameda de San José II',
      email:
        'lurodrig@corona.com.co  jrodriguez2805@hotmail.com',
      nombre: 'LUZ JANNETH RODRIGUEZ MORENO',
      telefono:
        'F 17476445/7848056 CELULAR 3153208374'
    },
    llaveProceso: '',
    numero      : 561,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '25.252.953 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 9960086465,
        '1': 'TARJETA DE CREDITO MASTER CARD 5303720132348190'
      },
      radicado         : '',
      vencimientoPagare: '10/05/2026 // 6/03/2026'
    },
    deudor: {
      cedula: 17139148,
      direccion:
        'Carrera 80 No. 8 - 11 Torre 3 Interior 5 Apartamento 519 Torres de Santa Barbara Conjunto Residencial',
      email   : 'ajasalama@gmail.com',
      nombre  : 'MARIO HERNAN SALAMANCA PATIÑO',
      telefono: 'F 7746112'
    },
    llaveProceso: '',
    numero      : 562,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '39.472.561 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '6890083869 // 6890084347',
        '1': '2250084884 // TARJETA DE CRÉDITO AMERICAN EXPRESS No. 0377815043687256'
      },
      radicado: '',
      vencimientoPagare:
        '10/03/2026 // 25/06/2026 // 4/05/2025// 18/07/2026'
    },
    deudor: {
      cedula   : 7718318,
      direccion: 'Carrera 57 No. 60 A - 20 ',
      email    : 'milugo1111@hotmail.com',
      nombre   : 'MILTON MARINO LUGO GOMEZ',
      telefono : 'N/A'
    },
    llaveProceso: '',
    numero      : 563,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '29.090.298 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 9460085166,
        '1': 'N/A'
      },
      radicado         : '2023-01280',
      vencimientoPagare: '2026-03-08'
    },
    deudor: {
      cedula: 79399032,
      direccion:
        'Transversal 77 N 7A -16 Int 9 // Carrera 69 No. 31 - 68',
      email   : 'abadiajorgesa@gmail.com',
      nombre  : 'JORGE ALEX ABADIA CARRILLO',
      telefono: 'CELULAR 3125642401'
    },
    llaveProceso: '',
    numero      : 564,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '24.994.278 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 1010090492,
        '1': 'N/A'
      },
      radicado         : '2023 - 01273',
      vencimientoPagare: '2026-03-09'
    },
    deudor: {
      cedula: 1061047348,
      direccion:
        'Transversal 96 B No. 20 D - 70 Casa 23 Conjunto Residencial Casas del Portal de Hayuelos',
      email   : 'sammy_1722@hotmail.es',
      nombre  : 'SANDRA MILENA PALACIO RIVERA',
      telefono: 'F 7442510 CELULAR 3058819253'
    },
    llaveProceso: '11001400306920230127300',
    numero      : 565,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '19.218.060 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 6620091753,
        '1': 'N/A'
      },
      radicado         : '2023 - 1243',
      vencimientoPagare: '2026-02-28'
    },
    deudor: {
      cedula: 1013622120,
      direccion:
        'Carrera 46 A No. 22 C - 36 Sur // Avenida 92 No. 15 - 40',
      email   : 'johanesquiroga@gmail.com',
      nombre  : 'JOHAN ANDRES QUIROGA GALEANO',
      telefono: 'F 7156426 CELULAR 3203203196'
    },
    llaveProceso: '11001400306520230124300',
    numero      : 566,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '19.188.290 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-07-26',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 1000094307,
        '1': 'N/A'
      },
      radicado         : '',
      vencimientoPagare: '2027-08-02'
    },
    deudor: {
      cedula   : 94254761,
      direccion: 'Calle 71 F No. 78 C - 50 Sur',
      email    : 'wilsonmolina16@hotmail.com',
      nombre   : 'WILSON DE JESUS MOLINA QUIRAMA',
      telefono : 'F 7766244 CELULAR 3144005060'
    },
    llaveProceso: '',
    numero      : 567,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '20.815.025 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-08-02',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 5670094881,
        '1': 'PAGARÉ SIN NÚMERO REF 100221151 TARJETA DE CRÉDITO MASTER CARD No. 5303730462170320'
      },
      radicado: '2023-1627',
      vencimientoPagare:
        '25/02/2028 // 17/06/2026'
    },
    deudor: {
      cedula   : 1033739670,
      direccion: 'Calle 71 No. 46-08 Sur',
      email    : 'lorena19081@hotmail.com',
      nombre   : 'LORENA GUISELLE CHAPARRO LEAL',
      telefono:
        'CELULAR 3046243064 CELULAR 3015181948'
    },
    llaveProceso: '11001400306320230162700',
    numero      : 568,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '28.820.731 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-08-04',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 2990086384,
        '1': 'N/A'
      },
      radicado         : '',
      vencimientoPagare: '2026-03-18'
    },
    deudor: {
      cedula   : 52514115,
      direccion: 'TV 96 B 20 D 70 CASA 3  ',
      email    : 'dsilvarar28@gmail.com',
      nombre   : 'DIANA PATRICIA SILVARA RODRIGUEZ',
      telefono : 'CELULAR 3203477527'
    },
    llaveProceso: '',
    numero      : 569,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '19.170.517 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-08-04',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 3990086952,
        '1': 'N/A'
      },
      radicado         : '2023-1465',
      vencimientoPagare: '2026-03-18'
    },
    deudor: {
      cedula: 21386342,
      direccion:
        'Av Suba No. 136-80 Bl B Ap 502 Cerros de Suba – Gratamira //Kr 75 No. 65 - 78 Ap 402 Edificio Montreal P.H. Medellín // Vereda Potrerito ?',
      email : 'martacospina@hotmail.com',
      nombre: 'MARTHA CECILIA OSPINA ARENAS',
      telefono:
        'F 42977768 // 7534515 CELULAR 3163096532'
    },
    llaveProceso: '11001418901420230146500',
    numero      : 570,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '24.843.938 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-08-04',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'MOSQUERA',
      obligacion             : {
        '0': 1380089168,
        '1': 'N/A'
      },
      radicado         : '2023 - 01289',
      vencimientoPagare: '2026-03-07'
    },
    deudor: {
      cedula: 53132436,
      direccion:
        'Carrera 10 No. 5 - 62 Bloque Torre 1 Apartamento 202 Conjunto Residencial Belverde I del municipio de Mosquera',
      email   : 'capryeyom@hotmail.com',
      nombre  : 'ERLI YANETH OYUELA MARTINEZ',
      telefono: 'F 5751066 CELULAR 3126172174'
    },
    llaveProceso: '',
    numero      : 571,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '91.487.785 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-08-04',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 1910090586,
        '1': 94351552
      },
      radicado         : '',
      vencimientoPagare: '17/03/2026 // 3/08/2026'
    },
    deudor: {
      cedula: 9527771,
      direccion:
        'CL 134 16 50 AP 104 Edificio Verona Barrio Contador Bogotá',
      email   : 'jaimequinterom1@hotmail.com',
      nombre  : 'JAIME ENRIQUE QUINTERO MENDOZA',
      telefono: 'F 6154763 CELULAR 3102997350'
    },
    llaveProceso: '',
    numero      : 572,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '55.099.216 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-08-04',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4020084965,
        '1': 100260717
      },
      radicado         : '',
      vencimientoPagare: '17/03/2023 // 4/08/2026'
    },
    deudor: {
      cedula: 52327261,
      direccion:
        'CR 104 No 13D 77 CS 241 Conjunto Residencial Sabanagrande 1 ',
      email   : 'galvis-almanza@hotmail.com',
      nombre  : 'SANDRA PATRICIA GALVIS ALMANZA',
      telefono: 'F 4152969 CELULAR 3203369576'
    },
    llaveProceso: '',
    numero      : 573,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '43.725.000 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-08-17',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '2370110350 // 1410093357',
        '1': '43206562 T.C. VISA 4513080146836311 // 82377390 T.C. AMERICAN 0377816058360201'
      },
      radicado: '',
      vencimientoPagare:
        '2/04/2026 // 24/04/2026 // 7/04/2026 // 7/04/2026'
    },
    deudor: {
      cedula: 1014214413,
      direccion:
        'CARRERA 85 L # 63B-42 CONJUNTO RESIDENCIAL PORTALES DE VILLALUZ ETAPA 1',
      email   : 'ingridpatarroyobaez@gmail.com',
      nombre  : 'INGRID LIZETH PATARROYO BAEZ',
      telefono: 'CELULAR 3007547824'
    },
    llaveProceso: '',
    numero      : 574,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '86.945.177 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-08-17',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 'Q 0000000079780047027001',
        '1': 'N/A'
      },
      radicado         : '2023-864',
      vencimientoPagare: '2026-04-02'
    },
    deudor: {
      cedula: 79780047,
      direccion:
        'Carrera 13 A No. 113 42 Apartamento 207 Santa Paula // Carrera 11 No. 112 – 65 // Calle 119 No. 7 – 14 Consultorio 617 // Calle 85 A No. 21 - 51',
      email: 'carrerasiachoque@yahoo.com',
      nombre:
        'JAVIER ALEJANDRO CARRERA SIACHOQUE',
      telefono:
        'FIJO 7574806 //7664931 CELULAR 3164336320'
    },
    llaveProceso: '11001400300620230086400',
    numero      : 575,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '94.472.793 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-08-17',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 4610082832,
        '1': 'Q 0000001020754305027001'
      },
      radicado: '2023 - 843',
      vencimientoPagare:
        '2/04/2026 //  23/04/2026'
    },
    deudor: {
      cedula: 1020754305,
      direccion:
        'Carrera 15 No. 127 - 32 Apartamento 105 Portaldel Country',
      email   : 'jcamilovp@gmail.com',
      nombre  : 'JUAN CAMILO VELASQUEZ PEREIRA',
      telefono: 'CELULAR 3188015288'
    },
    llaveProceso: '11001400300520230084300',
    numero      : 576,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '26.690.131 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2021-08-18',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 6670095919,
        '1': '102800851 X T.C. MASTER 5303710105146382 Y T.C. AMERICAN 0377816042003354'
      },
      radicado         : '',
      vencimientoPagare: '2/04/2026 // 7/04/2026'
    },
    deudor: {
      cedula: 1068973010,
      direccion:
        'CL 26 A SUR 12 L 21 Piso 3o. Barrio san José Sur',
      email : 'mayeflor21@hotmail.com',
      nombre: 'INDIRA MAYERLY FLOREZ CASTRO',
      telefono:
        'FIJO 4074724 CELULAR 3506837545 //3506837547'
    },
    llaveProceso: '',
    numero      : 577,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '140.332.319 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2021-08-18',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'ZIPAQUIRA',
      obligacion             : {
        '0': 3320096675,
        '1': '83942050 X T.C MASTER 5491580158404844 Y AMERICAN 377816059851588'
      },
      radicado: '',
      vencimientoPagare:
        '15/03/2026 // 17/08/2026'
    },
    deudor: {
      cedula: 35422519,
      direccion:
        ' CL 4 16 10 AP 201 Barrio Algarra III',
      email   : 'dicrisare@gmail.com',
      nombre  : 'DIANA CRISTINA AREVALO ARBOLEDA',
      telefono: 3203172020
    },
    llaveProceso: '',
    numero      : 578,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '20.488.522 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2021-08-18',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 9440087467,
        '1': '40733834 X T.C. VISA 4513080401547652'
      },
      radicado         : '',
      vencimientoPagare: '21/03/2026 // 7/03/2026'
    },
    deudor: {
      cedula   : 1024481233,
      direccion: 'Calle 114 No. 6 A 92',
      email    : 'suenopandapijamas@gmail.com',
      nombre   : 'ZOILA IRENE SUAVITA DE TRILLERAS',
      telefono : 'F 8027134 CELULAR 3108012331'
    },
    llaveProceso: '',
    numero      : 579,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '42.647.591 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-08-24',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': 790100533,
        '1': '790101375 Y 101380449 X T.C. AMERICAN 0377844056881358'
      },
      radicado: '',
      vencimientoPagare:
        '18/08/2026 // 4/04/2026 // 5/08/2026'
    },
    deudor: {
      cedula: 19488050,
      direccion:
        'Transversal 78 No. 40J - 14 Sur',
      email   : 'joseignaciogaleanoa@gmail.com',
      nombre  : 'JOSE IGNACIO GALEANO ALVARADO',
      telefono: 'CELULAR 3103052825'
    },
    llaveProceso: '',
    numero      : 580,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '51.081.164 COP',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-08-24',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'BOGOTA',
      obligacion             : {
        '0': '22273 320177358',
        '1': 2470088213
      },
      radicado: '',
      vencimientoPagare:
        '12/09/2034 // 30/03/2026'
    },
    deudor: {
      cedula: 52760611,
      direccion:
        'Carrera 145 144 C 72 Torre 7 Apartamento 904 Conjunto Residencial Almenara P.H  de la ciudad de Bogotá',
      email   : 'angelicagodoygutierrez@gmail.com',
      nombre  : 'ANGELICA GODOY GUTIERREZ',
      telefono: 'CELULAR 3116509661'
    },
    llaveProceso: '',
    numero      : 581,
    tipoProceso : 'SINGULAR'
  },
  {
    category: 'Bancolombia',
    demanda : {
      capitalAdeudado        : '',
      departamento           : 'CUNDINAMARCA',
      entregaGarantiasAbogado: '2023-08-24',
      etapaProcesal          : '',
      fechaPresentacion      : '',
      municipio              : 'MADRID',
      obligacion             : {
        '0': 3830095609,
        '1': 'N/A'
      },
      radicado         : '',
      vencimientoPagare: '2026-03-06'
    },
    deudor: {
      cedula: 7228260,
      direccion:
        'Calle 23 No. 12 - 50 Bloque 14 Apto 15 Madrid (Cundinamarca)',
      email   : 'duartepedroantonio@hotmail.com',
      nombre  : 'PEDRO ANTONIO DUARTE VARGAS',
      telefono: 'CELULAR 3133073186'
    },
    llaveProceso: '',
    numero      : 582,
    tipoProceso : 'SINGULAR'
  }
];

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

function capitalBuilder(
  capitalAdeudado: string | number
) {
  if ( typeof capitalAdeudado === 'number' ) {
    return capitalAdeudado;
  }

  const copTaker = capitalAdeudado.replace(
    /\sCOP/gi,
    ''
  );

  const dotTaker = copTaker.replace(
    '.', ''
  );
  console.log(
    dotTaker
  );

  return Number(
    dotTaker
  );
}

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
        const nDesp = despacho.nombre
              .toLowerCase()
              .normalize(
                'NFD'
              )
              .replace(
                /\p{Diacritic}/gu, ''
              )
              .trim();

        const pDesp = proceso.despacho
              .toLowerCase()
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
            `procesos despacho is in despachos ${ indexOfDesp + 1 }`
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
        : `https://www.ramajudicial.gov.co${ proceso.despacho
              .replaceAll(
                ' ', '-'
              )
              .toLowerCase() }`
    };
    juzgados.set(
      indexOf, newJuzgado
    );
  }

  return Array.from(
    juzgados.values()
  );
}

function setDepartamento(
  departamento: DepartamentoRaw
) {
  const deptos = Departamentos.result;

  const filterDeptos = deptos.find(
    (
      dpt
    ) => {
      const stringDepto = dpt.descripcion;

      return (
        stringDepto.toLowerCase() === departamento.toLowerCase()
      );
    }
  );

  if ( filterDeptos ) {
    return filterDeptos.descripcion;
  }

  return null;
}

export class Demanda implements IntDemanda {
  constructor(
    {
      capitalAdeudado,
      entregaGarantiasAbogado,
      etapaProcesal,
      departamento,
      fechaPresentacion,
      municipio,
      obligacion,
      radicado,
      vencimientoPagare
    }: DemandaRaw
  ) {
    this.capitalAdeudado = capitalBuilder(
      capitalAdeudado
    );
    this.entregaGarantiasAbogado = new Date(
      entregaGarantiasAbogado
    );
    this.etapaProcesal
      = etapaProcesal?.toString();
    this.fechaPresentacion = new Date(
      fechaPresentacion ?? ''
    );
    this.municipio = municipio;
    this.obligacion = obligacion;
    this.radicado = radicado.toString();
    this.vencimientoPagare = new Date(
      vencimientoPagare
    );
    this.departamento
      = setDepartamento(
        departamento
      );
  }
  departamento: string | null;
  juzgados: Juzgado[] = [];
  capitalAdeudado: number;
  entregaGarantiasAbogado: Date;
  etapaProcesal?: string;
  fechaPresentacion?: Date;
  municipio: string;
  obligacion: { [key: string]: string | number };
  radicado: string;
  vencimientoPagare?: Date;
  expediente?: string;
}

async function createCarpetasDemanda() {
  const procesosMap = new Map<
    number,
    intProceso
  >();

  const newCarpetas = new Set<IntCarpeta>();

  for ( const carpeta of Carpetas ) {
    const awaitTime = 200;

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
        llaveProceso:
        carpeta.llaveProceso.toString()
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

    const categories = [
      'nn',
      'Bancolombia',
      'Reintegra',
      'LiosJuridicos',
      'Insolvencia',
      'Terminados'
    ];

    if ( RequestProcesos.length > 0 ) {
      for ( const proceso of RequestProcesos ) {
        if ( !proceso.esPrivado ) {
          procesosMap.set(
            proceso.idProceso,
            proceso
          );

          const indexOf
            = RequestProcesos.indexOf(
              proceso
            );

          const juzgados = newJuzgado(
            RequestProcesos
          );

          const newCarpeta: IntCarpeta = {
            category   : carpeta.category,
            deudor     : newDeudor,
            numero     : carpeta.numero,
            tipoProceso: carpeta.tipoProceso,
            idProceso  : proceso.idProceso,
            llaveProceso:
              carpeta.llaveProceso.toString(),
            categoryTag: categories.indexOf(
              carpeta.category
            ),
            demanda: {
              ...newDemanda,
              expediente:
                carpeta.llaveProceso.toString(),
              juzgados: juzgados,

            }
          };
          fs.writeFile(
            `carpetas/${ newCarpeta.numero }.${ indexOf }.json`,
            JSON.stringify(
              newCarpeta
            )
          );
          newCarpetas.add(
            newCarpeta
          );

          continue;
        }
      }
    } else if ( RequestProcesos.length === 0 ) {

      const newCarpeta: IntCarpeta = {
        demanda: {
          ...newDemanda,
          expediente:
            carpeta.llaveProceso.toString(),
          departamento: carpeta.demanda.departamento
        },
        category   : carpeta.category,
        categoryTag: categories.indexOf(
          carpeta.category
        ),
        deudor: newDeudor,
        numero: carpeta.numero,
        llaveProceso:
          carpeta.llaveProceso.toString(),
        tipoProceso: carpeta.tipoProceso
      };
      fs.writeFile(
        `carpetas/${ newCarpeta.numero }.json`,
        JSON.stringify(
          newCarpeta
        )
      );
      newCarpetas.add(
        newCarpeta
      );
    }
  }

  const newProcesosArray = Array.from(
    procesosMap.values()
  );

  fs.writeFile(
    'procesosData.json',
    JSON.stringify(
      newProcesosArray
    )
  );

  const newCarpetasArray
    = Array.from(
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
              'newCarpetasFinal.json',
              JSON.stringify(
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
