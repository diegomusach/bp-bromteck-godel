// Mock Data for BP Bromteck (EDEMSA Case Study - Profundidad Técnica & Operativa Real)

export const VALID_USERS = [
  { username: 'dmusach', name: 'Diego Musach', role: 'Director de Producto & Estrategia', pass: 'BP-dmusach-2026' },
  { username: 'acubino', name: 'A. Cubino', role: 'Líder Técnico & Arquitectura', pass: 'BP-acubino-2026' }
];

export const BLACK_PUMA_BENCHMARK = {
  competitorName: "Plataforma BP",
  currentClient: "EDEMSA (Empresa Distribuidora de Electricidad de Mendoza S.A.)",
  initialFocus: "Red de Baja Tensión (Micro-Nivel por Cliente/Inmueble)",
  capabilities: [
    {
      feature: "Mapeo Geográfico por Google Maps",
      blackPumaStatus: "Clasificación básica del tipo de comercio en la zona.",
      bromteckAdvantage: "Detección de cambios dinámicos de zonificación urbana y alertas de inconsistencia comercial-residencial.",
      statusBadge: "Igualado & Superado",
      scoreBP: 7,
      scoreBromteck: 9.8
    },
    {
      feature: "Correlación de Morosidad e Histórico de Pago",
      blackPumaStatus: "Conecta histórico de impago con la zona geográfica.",
      bromteckAdvantage: "Modelo predictivo scoring que cruza variaciones estacionales de consumo con morosidad recurrente.",
      statusBadge: "Igualado & Superado",
      scoreBP: 8,
      scoreBromteck: 9.5
    },
    {
      feature: "Detección Visual de Hurto / Conexiones Clandestinas ('Colgarse')",
      blackPumaStatus: "No implementado / Análisis solo a nivel de datos.",
      bromteckAdvantage: "IA Visual de Fachadas (Google Street View + fotos de frente): cuestiona a la IA si hay acometidas irregulares o reformas no declaradas.",
      statusBadge: "Exclusivo BP Bromteck",
      scoreBP: 2,
      scoreBromteck: 9.9
    },
    {
      feature: "Diagnóstico RAG de Pérdidas Técnicas (Red de Baja Tensión)",
      blackPumaStatus: "Reportes genéricos sin especificación de conductores o materiales.",
      bromteckAdvantage: "Asistente RAG con recomendaciones técnicas concretas (*Qué cambia, Dónde y Cómo*): calibre de cables Al preensamblado, balanceo de fases y transformadores.",
      statusBadge: "Exclusivo BP Bromteck",
      scoreBP: 3,
      scoreBromteck: 9.7
    }
  ]
};

export const LOW_VOLTAGE_SUPPLIES = [
  {
    id: "SUM-EDM-10492",
    clientName: "Panadería & Comercio San Martín",
    address: "Av. San Martín 1420, Guaymallén, Mendoza",
    zoneType: "Comercial de Alta Intensidad (Cambiado de Residencial a Comercial)",
    meterNumber: "EDM-BT-99241",
    tariff: "T1-G (Comercial Baja Tensión)",
    delinquencyMonths: 4,
    debtAmount: 485200,
    theftRiskScore: 94,
    theftStatus: "ALTA PROBABILIDAD DE HURTO / CONEXIÓN CLANDESTINA",
    facadeUrl: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&q=80",
    streetViewNote: "Se detecta reforma de fachada comercial no declarada. Acometida aérea presenta desviación visual no estándar hacia caja secundaria sin precinto.",
    aiFindings: [
      "Inconsistencia entre categoría contratada T1-R (Residencial) y uso real de potencia industrial/comercial.",
      "El frente muestra cableado adicional de aluminio preensamblado desviado antes del medidor.",
      "Google Street View histórico muestra que la propiedad cambió de casa particular a local gastronómico en los últimos 8 meses."
    ],
    recommendedAction: "Despachar inspección de campo inmediata. Normalizar acometida e refacturar por tarifa comercial T1-G con penalización por energía consumida no registrada (ECNR).",
    potentialRecoveryUSD: 3450
  },
  {
    id: "SUM-EDM-10843",
    clientName: "Taller Mecánico & Metalúrgica Maipú",
    address: "Calle Mitre 890, Maipú, Mendoza",
    zoneType: "Industrial / Mixto",
    meterNumber: "EDM-BT-88310",
    tariff: "T1-R2 (Residencial)",
    delinquencyMonths: 2,
    debtAmount: 215000,
    theftRiskScore: 88,
    theftStatus: "ALTA PROBABILIDAD DE FRAUDE POR FASES DESBALANCEADAS",
    facadeUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    streetViewNote: "Google Street View registra galpón metálico con compresores y soldadoras operando en acometida residencial monofásica.",
    aiFindings: [
      "Subida abrupta de consumo en horario nocturno con caída repentina de registro en medidor.",
      "Discrepancia entre Street View (taller industrial) y contrato activo (residencial).",
      "Foto de frente muestra intervención en el pilar de medición."
    ],
    recommendedAction: "Inspección técnica de pilar con laboratorio móvil. Cambio de tarifa a T2 Trifásica Comercial.",
    potentialRecoveryUSD: 5200
  },
  {
    id: "SUM-EDM-11204",
    clientName: "Inmueble Particular - Luján de Cuyo",
    address: "Ruta 15 Km 12, Luján de Cuyo, Mendoza",
    zoneType: "Residencial Periurbano",
    meterNumber: "EDM-BT-44102",
    tariff: "T1-R1",
    delinquencyMonths: 0,
    debtAmount: 0,
    theftRiskScore: 18,
    theftStatus: "ESTADO NORMAL / SIN ANOMALÍAS DETECTADAS",
    facadeUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    streetViewNote: "Fachada en norma. Pilar sin alteración aparente. Cableado preensamblado en correcto estado.",
    aiFindings: [
      "Consumo regular acorde al promedio de la zona.",
      "Sin inconsistencias estructurales en Google Street View."
    ],
    recommendedAction: "Mantenimiento preventivo de rutina programado para Q4.",
    potentialRecoveryUSD: 0
  }
];

export const RAG_KNOWLEDGE_BASE = [
  {
    query: "¿Qué cambios inmediatos debemos hacer en los conductores de Baja Tensión en Guaymallén?",
    response: "**Recomendación de Red de Baja Tensión (Zona Guaymallén - Alimentador 4B)**:\n\n1. **Cambio de Conductor**: Reemplazar 450 metros de cable de cobre desnudo de 25mm² por **Conductor Preensamblado de Aluminio 3x95/50 mm²**.\n2. **Ubicación Exacta**: Tramo comprendido entre la Subestación Transformadora N° 142 (Av. San Martín) y la esquina de Güemes.\n3. **Cómo Ejecutar**: Balances de fase en las acometidas de los 14 comercios detectados con caída de tensión > 8%. Esto reducirá las pérdidas técnicas de la línea en un **14.2%** y evitará sobrecalentamiento por reactiva."
  },
  {
    query: "¿De qué otra manera podemos cuestionar a la IA si el cliente va a colgarse o robar energía?",
    response: "**Protocolo de Cuestionamiento Visual & Predictivo BP Bromteck**:\n\n1. **Análisis de Diferencia de Fachada**: La IA compara la imagen satelital/Street View histórica con la foto del frente tomada por el inspector. Detecta agregados de estructuras, marquesinas comerciales o aperturas de pilar no registradas.\n2. **Inconsistencia Térmica/Carga vs. Facturación**: Cuestiona si la actividad económica aparente de la zona (ej. rotisería, cámara frigorífica) es sostenible con el consumo KWh facturado.\n3. **Patrón de Morosidad Reincidente**: Cruza si los períodos de corte por morosidad coinciden con caídas repentinas a cero sin baja de servicio física."
  }
];

export const DEEP_UTILITIES_IDEAS = [
  {
    id: 1,
    title: "1. Calculadora de Liquidación Retroactiva ECNR (Res. EPRE Mendoza N° 129/18)",
    area: "Comercial & Legales EDEMSA",
    problem: "Las actas de fraude tardan meses en liquidarse porque el cálculo de Energía Consumida No Registrada (ECNR) requiere determinar la carga real estimada (kW), las horas de uso de la tarifa (ej. T1-G 300 hs/mes) y los recargos por reincidencia (1.5x o 2x) manualmente.",
    solution: "Módulo automático de liquidación ECNR que toma la foto de la acometida fraudulenta, identifica los artefactos instalados (ej. motor 5 HP + 3 heladeras exhibidoras = 8.5 kW), aplica el cuadro tarifario vigente de EDEMSA y emite el acta de deuda retroactiva (hasta 48 meses) lista para cobro comercial.",
    materialsOrMethod: "Fórmula: ECNR (kWh) = Carga Estimada (kW) × 300 hs/mes × Meses de Irregularidad × Coeficiente de Recargo EPRE.",
    deliverable: "PDF de Acta ECNR con validez probatoria y liquidación retroactiva instantánea."
  },
  {
    id: 2,
    title: "2. Detector de Fraude por Puente Clandestino Entubado Detrás del Pilar (ET-201)",
    area: "Inspección Técnica de Campo (Cuadrillas de Camilo y Enrique)",
    problem: "Los usuarios comerciales empetran caños por dentro de la mampostería desviando la acometida antes de ingresar a las bornas 1-3 del medidor, haciendo imposible detectar el puente a simple vista sin romper la pared.",
    solution: "Inyección de señal de radiofrecuencia/reflectometría (TDR) de bajo costo desde la pinza de derivación en la red de calle hacia el pilar. Si la señal encuentra una derivación T antes del medidor, la app móvil alerta 'Puente Empotrado Detectado a 1.2 metros'.",
    materialsOrMethod: "Equipo TDR portátil + App Móvil Android de recepción por Bluetooth.",
    deliverable: "Localización exacta de la derivación oculta sin necesidad de picar la mampostería preventivamente."
  },
  {
    id: 3,
    title: "3. Reemplazo Técnico de Red Desnuda por Preensamblado de Aluminio (3x95/50 + 1x25 mm²)",
    area: "Ingeniería de Redes & Obras de Baja Tensión",
    problem: "Líneas antiguas de cobre desnudo de 25mm² sujetas a sulfatación y enganches clandestinos tipo 'gancho arrojadizo', generando cortocircuitos y pérdidas por efecto Joule (I²R) superiores al 18%.",
    solution: "Cálculo de ingeniería de red para sustitución por conductor de aluminio preensamblado XLPE antirrobo (3x95/50mm² + neutro portante de 50mm² + alumbrado de 25mm²), incluyendo especificación exacta de conectores de perforación de aislamiento (IPC) y prensacables de retención.",
    materialsOrMethod: "Cable Al Preensamblado 3x95/50mm², Conectores IPC estancos Niled/Sicame, Prensacables de amarre de resina sintética.",
    deliverable: "Cómputo métrico e inventario de materiales de obra (BOM) para licitación o compra directa."
  },
  {
    id: 4,
    title: "4. Auditoría de Inconsistencia de Potencia: Contrato T1-Residencial vs. Carga Real",
    area: "Gestión Comercial & Control de Pérdidas",
    problem: "Locales comerciales (rotiserías, talleres metalúrgicos, supermercados de barrio) contratados bajo tarifa T1-R (Residencial) pagando tarifa subsidiada mientras consumen potencias trifásicas superiores a 10 kW.",
    solution: "Cruce automático de imágenes de fachadas en Google Street View (detección de marquesinas, cámaras frigoríficas, persianas comerciales) contra el padrón tarifario de EDEMSA. Emisión de notificación de reclasificación obligatoria a T1-G o T2 Trifásica.",
    materialsOrMethod: "Matching de código de suministro GIS vs API Google Street View + Padrón Comercial.",
    deliverable: "Listado priorizado de suministros T1-R a re-categorizar con aumento del 25% en ingresos recurrentes por factura."
  },
  {
    id: 5,
    title: "5. Re-balanceo de Cargas en Neutro de Subestación Transformadora (SET)",
    area: "Mantenimiento & Operaciones de Distribución",
    problem: "Desequilibrio severo de corrientes en las tres fases (IR = 180A, IS = 90A, IT = 240A) que provoca circulación de corriente por el neutro (IN > 110A), recalentamiento de la barra de neutro y quema frecuente del transformador de distribución.",
    solution: "Algoritmo de optimización que analiza los consumos monofásicos de cada pilar en el ramal y genera la orden exacta para la cuadrilla: 'Mover el Suministro #10492 de Fase T a Fase S en la caja de derivación #14'.",
    materialsOrMethod: "Medición con pinza amperométrica Bluetooth en SET + Algoritmo de permutación combinatoria.",
    deliverable: "Reducción de la corriente de neutro de 110A a menos de 15A y eliminación del riesgo de sobrecalentamiento del transformador."
  },
  {
    id: 6,
    title: "6. Detección de Inversión de Bornes (Fase-Neutro) en Medidores Electromecánicos",
    area: "Inspección de Fraude Comercial",
    problem: "Manipulación habitual donde el usuario invierte la conexión de entrada de fase y neutro en las bornas 1 y 2 del medidor, frenando o invirtiendo el giro del disco magnético sin dejar huellas visibles.",
    solution: "Testeo rápido de polaridad y corriente de retorno por neutro mediante la app de inspección conectada a un comprobador de enchufe/pilar de baja tensión.",
    materialsOrMethod: "Dispositivo comprobador de impedancia de bucle + App Móvil de acta de fraude.",
    deliverable: "Identificación inmediata de la inversión de bornes con registro de foto georreferenciada para el expediente legal."
  },
  {
    id: 7,
    title: "7. Monetización de Alquiler de Postación a Empresas de Fibra Óptica (Telecom Sharing)",
    area: "Nuevos Negocios & Cooperativas Eléctricas",
    problem: "Empresas de Internet (ISPs) y televisión por cable cuelgan kilómetros de fibra óptica sobre los postes de hormigón y madera de la distribuidora/cooperativa sin pagar el canon por poste ni respetar las distancias de seguridad con la baja tensión.",
    solution: "Escaneo fotográfico automatizado de la postación que cuenta los cables no identificados por poste y genera la intimación comercial a las empresas de telecomunicaciones para cobrar el canon mensual en USD por poste utilizado.",
    materialsOrMethod: "Computer Vision sobre fotos de cuadrilla / Street View + Mapeo GIS de postación.",
    deliverable: "Padrón auditado de postes alquilados y facturación mensual de canon a los ISPs de la zona."
  },
  {
    id: 8,
    title: "8. Normalización de Pilares según Especificación Técnica ET-201 (Mendoza)",
    area: "Obras Comercial & Atención al Cliente",
    problem: "Inmuebles con pilares clandestinos o fuera de norma (cajas de chapa oxidadas, caños de bajada rotos de PVC, sin puesta a tierra) que generan pérdidas por fuga a tierra y riesgo de electrocución.",
    solution: "Plataforma de kit de normalización que ofrece al usuario el pilar regulado (caja doble aislamiento de policarbonato, caño galvanizado 1 1/4\", interruptor termomagnético 2x25A curva C + disyuntor diferencial 30mA + jabalina de puesta a tierra de 1.5m).",
    materialsOrMethod: "Kit de materiales estandarizado según Norma ET-201 EDEMSA + Convenio de financiamiento en factura.",
    deliverable: "Regularización del pilar con cobro financiado en 12 cuotas dentro de la boleta de luz."
  },
  {
    id: 9,
    title: "9. Macro-Medición de Balance Energético en Cabecera de Ramal Periurbano",
    area: "Control de Pérdidas No Técnicas en Asentamientos",
    problem: "Pérdidas masivas de energía en barrios populares o asentamientos informales donde se conectan cientos de familias directamente a la línea aérea sin medidor individual.",
    solution: "Instalación de un medidor totalizador inteligente en la salida del transformador que compara en tiempo real la energía entregada versus la facturada, emitiendo el balance energético por manzana para proyectos de electrificación social.",
    materialsOrMethod: "Medidor totalizador trifásico indirecto con TI 400/5A + Transmisión celular 4G/IoT.",
    deliverable: "Mapa de calor de pérdidas masivas y proyecto de pilares comunitarios blindados con financiamiento provincial."
  },
  {
    id: 10,
    title: "10. Control de Servidumbre de Paso y Distancia de Seguridad en Edificaciones",
    area: "Legales & Mantenimiento de Infraestructura de Distribución",
    problem: "Vecinos o comercios que construyen balcones, tinglados o losas que quedan a menos de 1 metro de los conductores de baja/media tensión, violando la distancia de seguridad de la AEA y provocando cortocircuitos o electrocuciones.",
    solution: "Mapeo de riesgo geoespacial mediante análisis de imágenes que identifica construcciones invasoras sobre la traza eléctrica e imprime la notificación de intimación legal preventiva.",
    materialsOrMethod: "Algoritmo de medición de distancia de seguridad electromagnética (Norma AEA 95101).",
    deliverable: "Expediente legal de intimación al propietario para la demolición o aislamiento obligatorio del tramo."
  }
];

export const UTILITIES_SOLUTIONS_20 = DEEP_UTILITIES_IDEAS.map(idea => ({
  id: idea.id,
  category: idea.area,
  title: idea.title,
  target: idea.area,
  description: `${idea.problem} ${idea.solution}`,
  impact: idea.deliverable,
  roadmap: [
    `Fase 1: Diagnóstico de problema: ${idea.problem.substring(0, 70)}...`,
    `Fase 2: Aplicación del método técnico: ${idea.materialsOrMethod}`,
    `Fase 3: Ejecución de la solución: ${idea.solution.substring(0, 70)}...`,
    `Fase 4: Emisión del entregable: ${idea.deliverable}`
  ]
}));
