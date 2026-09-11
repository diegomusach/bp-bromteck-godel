// Mock Data for BP Bromteck (EDEMSA Case Study & BP Benchmark)

export const VALID_USERS = [
  { username: 'dmusach', name: 'Diego Musach', role: 'Director de Producto & Estrategia', pass: 'BP-dmusach-2026' },
  { username: 'acubino', name: 'A. Cubino', role: 'Líder Técnico & Arquitectura', pass: 'BP-acubino-2026' }
];

export const BLACK_PUMA_BENCHMARK = {
  competitorName: "BP (theblackpuma.com)",
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
