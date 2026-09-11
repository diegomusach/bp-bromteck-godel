// Mock Data for BP Bromteck (EDEMSA Case Study & Utilities Solutions)

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

export const UTILITIES_SOLUTIONS_20 = [
  {
    id: 1,
    category: "Pérdidas No Técnicas & Hurto",
    title: "1. Detección Visual de Hurto de Energía por IA de Fachada (Google Street View)",
    target: "Distribuidoras & Cooperativas (Red de Baja Tensión)",
    description: "Cuestiona a la IA si hay conexiones clandestinas o puentes analizando las imágenes de fachadas históricas de Street View versus fotos de inspección en pilar.",
    impact: "Recuperación de hasta 22% de energía no facturada en zona T1.",
    roadmap: [
      "Fase 1: Ingesta de padrón comercial T1-R / T1-G y georreferenciación de pilares.",
      "Fase 2: Scraping automatizado de fotos de Google Street View + modelo de clasificación visual.",
      "Fase 3: Algoritmo de Scoring de Riesgo de Hurto ('Colgarse / Robar').",
      "Fase 4: Despacho de cuadrillas antifraude con expediente fotográfico digital."
    ]
  },
  {
    id: 2,
    category: "Pérdidas Técnicas & Redes",
    title: "2. Diagnóstico RAG de Pérdidas Técnicas en Baja Tensión ('Qué cambia, Dónde y Cómo')",
    target: "Áreas de Ingeniería de Distribución",
    description: "Asistente RAG que analiza caída de tensión y pérdidas por efecto Joule, recomendando calibres exactos de cable (Al 3x95/50mm²) y conectores IPC.",
    impact: "Reducción directa de pérdidas técnicas en 12% a 18% por alimentador.",
    roadmap: [
      "Fase 1: Modelado de red de baja (transformadores de distribución y trazados).",
      "Fase 2: Identificación de tramos de alta resistencia y caída > 8%.",
      "Fase 3: RAG con generación de recomendaciones de conductores e insumos.",
      "Fase 4: Integración con plan Capex quinquenal de la distribuidora."
    ]
  },
  {
    id: 3,
    category: "Gestión Comercial & Cobranzas",
    title: "3. Mapeo Inteligente de Morosidad Geolocalizada y Riesgo de Impago",
    target: "Gerencia Comercial y Finanzas",
    description: "Correlación de deuda histórica y morosidad recurrente con la tipología económica de la manzana o distrito.",
    impact: "Reducción de mora persistente en 35% mediante gestión focalizada.",
    roadmap: [
      "Fase 1: Conexión con sistema ERP / Facturación comercial.",
      "Fase 2: Clustering geográfico por nivel socioeconómico y tipo de comercio.",
      "Fase 3: Scoring de riesgo predictivo previo al ciclo de corte.",
      "Fase 4: Automatización de avisos de deuda y gestión por cuadrilla de zona."
    ]
  },
  {
    id: 4,
    category: "Recuperación de Tarifa",
    title: "4. Auditoría Automática de Inconsistencias Tarifarias (Residencial vs. Comercial)",
    target: "Auditoría Comercial & Inspección",
    description: "Identifica locales gastronómicos, talleres o comercios funcionando bajo contrato T1-R Residencial mediante datos de mapas y Street View.",
    impact: "Incremento inmediato del 15% en facturación recurrente por refacturación T1-G / T2.",
    roadmap: [
      "Fase 1: Mapeo de actividades económicas en Google Maps / OSM.",
      "Fase 2: Cruce masivo contra padrón de tarifas residenciales activas.",
      "Fase 3: Emisión de alertas de discrepancia de uso de potencia.",
      "Fase 4: Reclasificación tarifaria retroactiva con acta de inspección."
    ]
  },
  {
    id: 5,
    category: "Pérdidas Técnicas & Redes",
    title: "5. Balanceo Dinámico de Fases en Subestaciones de Baja Tensión por IA",
    target: "Operación de Redes & Mantenimiento",
    description: "Algoritmo que calcula el desequilibrio de carga en el neutro del transformador y recomienda la reubicación de acometidas en las fases R, S, T.",
    impact: "Reducción del 25% en sobrecalentamiento de neutro y quemado de trafos.",
    roadmap: [
      "Fase 1: Telemetría de corrientes en barra de baja de la subestación.",
      "Fase 2: Cálculo de corriente de neutro e índice de desbalance.",
      "Fase 3: Algoritmo genético de reordenamiento óptimo de cargas.",
      "Fase 4: Orden de trabajo en app móvil para cambio de fase en acometida."
    ]
  },
  {
    id: 6,
    category: "Activos & Mantenimiento",
    title: "6. Monitoreo Predictivo de Salud de Transformadores de Distribución (Trafo Analytics)",
    target: "Mantenimiento de Infraestructura",
    description: "Estimación de degradación térmica e historial de picos en transformadores para evitar fallas catastróficas en épocas de alta demanda.",
    impact: "Evita reemplazos de emergencia ($15,000+ USD por trafo afectado).",
    roadmap: [
      "Fase 1: Integración con Smart Meters o concentradores de baja.",
      "Fase 2: Algoritmo de envejecimiento térmico del aislante (Norma IEEE C57).",
      "Fase 3: Alerta de riesgo de colapso en períodos estacionales.",
      "Fase 4: Programa de sustitución o repotenciación programada."
    ]
  },
  {
    id: 7,
    category: "Pérdidas No Técnicas & Hurto",
    title: "7. Balance Energético y Detección de Fuga por Macro-Medición en Zonas Vulnerables",
    target: "Responsabilidad Social & Pérdidas",
    description: "Medición totalizadora en la salida del transformador versus la suma de medidores cliente para aislar sectores clandestinos.",
    impact: "Localización exacta de zonas de pérdidas masivas sin recorrer miles de pilares.",
    roadmap: [
      "Fase 1: Instalación de medidor totalizador en cabecera de línea.",
      "Fase 2: Telemetría por 15 minutos y suma de consumos registrados.",
      "Fase 3: Alerta de brecha energética > 15%.",
      "Fase 4: Proyecto de regularización mediante pilares blindados comunitarios."
    ]
  },
  {
    id: 8,
    category: "Pérdidas No Técnicas & Hurto",
    title: "8. Auditoría Fotográfica IA de Pilares y Sellos de Medición para Cuadrillas",
    target: "Inspección Técnica de Campo",
    description: "App móvil donde el inspector toma foto al pilar; la IA valida precintos rotos, perforaciones o puentes internos en el medidor.",
    impact: "Disminución del 90% en actas de inspección rechazadas o mal confeccionadas.",
    roadmap: [
      "Fase 1: Despliegue de App Móvil para inspectores de campo (Android/iOS).",
      "Fase 2: Modelo de visión por computadora para detección de precintos y pilar.",
      "Fase 3: Validación instantánea de regularidad antes de cerrar la orden.",
      "Fase 4: Expediente digital con validez legal ante el ente regulador."
    ]
  },
  {
    id: 9,
    category: "Operación de Campo",
    title: "9. Optimizador Inteligente de Rutas de Inspección y Lectura de Cuadrillas",
    target: "Operaciones & Logística",
    description: "Agrupa órdenes de trabajo por proximidad geográfica y prioridad de riesgo de hurto, optimizando el recorrido del vehículo de inspección.",
    impact: "Aumento del 40% en inspecciones realizadas por día por cuadrilla.",
    roadmap: [
      "Fase 1: Geolocalización de puntos de inspección priorizados por IA.",
      "Fase 2: Algoritmo de optimización de ruta (Travelling Salesman con tráfico).",
      "Fase 3: Asignación automática a dispositivos móviles de cuadrilla.",
      "Fase 4: Monitoreo en tiempo real del avance del recorrido."
    ]
  },
  {
    id: 10,
    category: "Gestión Comercial & Cobranzas",
    title: "10. Portal de Autogestión y Convenios de Pago para Usuarios Regularizados",
    target: "Atención al Cliente & Comercial",
    description: "Plataforma self-service donde usuarios notificados por hurto pueden acordar facilidades de pago y solicitar normalización de pilar.",
    impact: "Conversión del 30% de usuarios clandestinos a clientes registrados sin juicio.",
    roadmap: [
      "Fase 1: Portal web y WhatsApp Bot autogestionado para el cliente.",
      "Fase 2: Simulación de planes de pago de deuda acumulada + costo pilar.",
      "Fase 3: Firma digital de convenio de regularización.",
      "Fase 4: Solicitud de inspección de habilitación exprés."
    ]
  },
  {
    id: 11,
    category: "Smart Grid & Futuro",
    title: "11. Simulación de Impacto de Carga de Vehículos Eléctricos en Redes de Baja",
    target: "Planificación de Redes",
    description: "Evaluación del impacto en la tensión al conectar cargadores residenciales EV (7.4 kW / 22 kW) en ramales de baja existente.",
    impact: "Prevención de colapsos de red por adopción de electromovilidad.",
    roadmap: [
      "Fase 1: Mapeo de cargadores EV instalados o solicitados.",
      "Fase 2: Simulación de curvas de carga simultáneas en periodo nocturno.",
      "Fase 3: Identificación de nodos con caídas de tensión por debajo de norma.",
      "Fase 4: Recomendación de repotenciación o gestión de carga inteligente (V2G)."
    ]
  },
  {
    id: 12,
    category: "Calidad de Servicio",
    title: "12. Monitoreo en Tiempo Real de Calidad de Servicio (Índices SAIDI / SAIFI)",
    target: "Centro de Control & Regulatorio",
    description: "Tablero para medir la frecuencia y duración de interrupciones por alimentador y zona geográfica en tiempo real.",
    impact: "Evita multas millonarias del Ente Regulador Provincial (EPRE / ENRE).",
    roadmap: [
      "Fase 1: Integración con reclamos técnicos y datos de medidores inteligentes.",
      "Fase 2: Cálculo dinámico de minutos de interrupción por usuario (SAIDI).",
      "Fase 3: Mapas de calor de interrupciones acumuladas.",
      "Fase 4: Despacho prioritario a zonas al borde del límite de multa."
    ]
  },
  {
    id: 13,
    category: "Generación Distribuida",
    title: "13. Detección de Inyección Solar No Registrada (Generación Distribuida Clandestina)",
    target: "Nuevas Tecnologías & Comercial",
    description: "Identifica viviendas con sistemas fotovoltaicos inyectando a la red sin contrato de Usuario-Generador mediante análisis de flujo inverso.",
    impact: "Eliminación de riesgos de seguridad para linieros por retorno de energía no esperado.",
    roadmap: [
      "Fase 1: Identificación de medidores con registros de energía reactiva/inversa inusuales.",
      "Fase 2: Verificación fotográfica por satélite/Street View de paneles en tejados.",
      "Fase 3: Notificación de adecuación a la ley de generación distribuida.",
      "Fase 4: Instalación de medidor bidireccional homologado."
    ]
  },
  {
    id: 14,
    category: "Activos & Mantenimiento",
    title: "14. Mantenimiento Preventivo de Trazas de Red y Poda con Imágenes Satelitales",
    target: "Operaciones & Mantenimiento de Líneas",
    description: "Análisis del crecimiento de copas de árboles sobre la traza de líneas de baja y media tensión para planificar cuadrillas de poda.",
    impact: "Reducción del 45% de cortes por contacto de ramas en tormentas.",
    roadmap: [
      "Fase 1: Procesamiento de imágenes de vegetación de alta resolución (NDVI).",
      "Fase 2: Intersección del buffer de vegetación con las líneas eléctricas georreferenciadas.",
      "Fase 3: Categorización por nivel de urgencia (Peligro Inminente vs Programable).",
      "Fase 4: Generación de órdenes de trabajo para equipos de poda."
    ]
  },
  {
    id: 15,
    category: "Seguridad & Anti-Robo",
    title: "15. Sistema de Alerta Temprana por Robo de Cables de Cobre y Transformadores",
    target: "Seguridad Corporativa & Operaciones",
    description: "Detección instantánea de caída simultánea de tensión en múltiples nodos sin consumo residual, disparando alarma de vandalismo en curso.",
    impact: "Reducción de pérdidas millonarias por robo de material estratégico.",
    roadmap: [
      "Fase 1: Telemetría de monitoreo de continuidad de línea en baja.",
      "Fase 2: Algoritmo de distinción entre falla común y desmantelamiento de cable.",
      "Fase 3: Notificación inmediata en < 60 segundos a patrullas policiales de la zona.",
      "Fase 4: Protocolo de reposición rápida con cable de aluminio sin valor de reventa."
    ]
  },
  {
    id: 16,
    category: "Cooperativas Eléctricas",
    title: "16. Portal de Transparencia y Rendición de Cuentas para Cooperativas Eléctricas",
    target: "Consejos de Administración de Cooperativas",
    description: "Dashboard diseñado para mostrar a los asociados el balance energético, la reducción de pérdidas y el destino de las inversiones.",
    impact: "Mejora la confianza comunitaria y aprobación de cuotas de capitalización.",
    roadmap: [
      "Fase 1: Consolidado de indicadores de pérdidas técnicas y no técnicas.",
      "Fase 2: Visualización de obras ejecutadas georreferenciadas.",
      "Fase 3: Publicación de reportes periódicos interactivos para la asamblea.",
      "Fase 4: Portal accesible para asociados de la cooperativa."
    ]
  },
  {
    id: 17,
    category: "Alumbrado Público",
    title: "17. Auditoría y Control de Enganches Clandestinos en Redes de Alumbrado Público",
    target: "Gestión Municipal & Cooperativas",
    description: "Supervisión de circuitos de alumbrado para detectar puestos de venta o viviendas conectadas directamente a las líneas de calle.",
    impact: "Regularización de cuentas de consumo con municipios y vendedores informales.",
    roadmap: [
      "Fase 1: Medición de carga en tableros de comando de alumbrado público.",
      "Fase 2: Comparativa entre consumo diurno (apagado) y nocturno (encendido).",
      "Fase 3: Detección de consumos parásitos continuos en la línea de calle.",
      "Fase 4: Desconexión y regularización comercial."
    ]
  },
  {
    id: 18,
    category: "Legales & Facturación",
    title: "18. Automatización de Cálculo y Reclamación de Energía Consumida No Registrada (ECNR)",
    target: "Legales & Liquidación Comercial",
    description: "Generación automatizada del expediente de cobro retroactivo de energía no registrada según el reglamento del ente regulador.",
    impact: "Acelera el cobro de actas de fraude de 6 meses a menos de 15 días.",
    roadmap: [
      "Fase 1: Carga de fórmulas reguladas de cálculo ECNR (promedios, potencias contratadas).",
      "Fase 2: Generación del acta digital de comprobación de fraude.",
      "Fase 3: Emisión de la factura especial de recupero con retroactividad.",
      "Fase 4: Seguimiento del expediente de cobro administrativo o judicial."
    ]
  },
  {
    id: 19,
    category: "Inversiones Capex",
    title: "19. Simulador ROI de Inversiones de Red (Ranking de Obras por Recuperación de KWh)",
    target: "Gerencia General & Inversiones",
    description: "Herramienta financiera que prioriza los proyectos de remodelación de red según dólares recuperados por cada dólar invertido.",
    impact: "Maximiza el impacto del presupuesto Capex en reducción de pérdidas.",
    roadmap: [
      "Fase 1: Ingesta del banco de proyectos de obras eléctricas de la distribuidora.",
      "Fase 2: Estimación del valor KWh de pérdidas a recuperar en cada obra.",
      "Fase 3: Algoritmo de ranking de VAN / TIR de reducción de pérdidas.",
      "Fase 4: Planificación del cronograma óptimo de inversión."
    ]
  },
  {
    id: 20,
    category: "Atención al Cliente & IA",
    title: "20. Asistente Virtual IA para Notificaciones de Cortes y Reclamos por Foto",
    target: "Atención al Cliente & Canales Digitales",
    description: "Bot inteligente por WhatsApp donde el usuario reporta cables caídos o chispas enviando foto/video con geolocalización automática.",
    impact: "Despresurización del Call Center en un 60% durante contingencias climáticas.",
    roadmap: [
      "Fase 1: Integración de bot IA en WhatsApp Business API.",
      "Fase 2: Procesamiento de imágenes y video para clasificar la gravedad de la avería.",
      "Fase 3: Generación automática de reclamo georreferenciado en el sistema OMS.",
      "Fase 4: Notificación proactiva al usuario cuando la cuadrilla repara la falla."
    ]
  }
];
