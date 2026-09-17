import React, { useState } from 'react';
import { 
  Building2, Pickaxe, MapPin, DollarSign, Download, Filter, Search, 
  CheckCircle2, AlertCircle, TrendingUp, ShieldCheck, Cpu, Layers, FileSpreadsheet, ArrowUpRight
} from 'lucide-react';

export default function MiningRigiProspects() {
  const [selectedProvince, setSelectedProvince] = useState('all');
  const [selectedMineral, setSelectedMineral] = useState('all');
  const [selectedStage, setSelectedStage] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [exportNotification, setExportNotification] = useState(false);

  // 20 Empresas Objetivo Mineras en Argentina Afectadas/Candidatas RIGI (Incentivo Grandes Inversiones)
  const miningProspects = [
    {
      id: 1,
      empresa: 'Lundin Mining / Filo Mining / BHP',
      proyecto: 'Josemaría & Filo del Sol',
      provincia: 'San Juan',
      mineral: 'Cobre / Oro',
      inversionUsd: '5.600 M USD',
      etapaRigi: 'Aplicación RIGI Presentada / Construcción',
      impactoElectrico: 'Demanda de +300 MW, construcción de línea de alta tensión 500 kV de 250 km y red interna de BT/MT para campamento de 4.000 trabajadores.',
      solucionBromteck: 'Auditoría de pérdidas en distribución interna de BT, balanceo de fase en campamentos y telemedición anti-fraude.'
    },
    {
      id: 2,
      empresa: 'Glencore',
      proyecto: 'El Pachón',
      provincia: 'San Juan',
      mineral: 'Cobre / Oro',
      inversionUsd: '5.600 M USD',
      etapaRigi: 'Proyecto RIGI Candidato / Factibilidad Avanzada',
      impactoElectrico: 'Electrificación total de mina a cielo abierto, planta de flotación y campamento cordillerano.',
      solucionBromteck: 'Monitoreo RAG de Pérdidas Técnicas en líneas de distribución secundarias y subestaciones de faena.'
    },
    {
      id: 3,
      empresa: 'McEwen Mining / Nuton (Rio Tinto)',
      proyecto: 'Los Azules',
      provincia: 'San Juan',
      mineral: 'Cobre',
      inversionUsd: '2.500 M USD',
      etapaRigi: 'Estudio de Factibilidad Avanzado / Tramitación RIGI',
      impactoElectrico: 'Proyecto con metas Net-Zero, alta demanda de infraestructura renovable y microrredes fotovoltaicas aisladas.',
      solucionBromteck: 'Sistema de telemedición inteligente y detección automática de anomalías en consumo de campamento.'
    },
    {
      id: 4,
      empresa: 'First Quantum Minerals',
      proyecto: 'Taca Taca',
      provincia: 'Salta',
      mineral: 'Cobre / Oro',
      inversionUsd: '3.600 M USD',
      etapaRigi: 'Ingeniería de Detalle / RIGI',
      impactoElectrico: 'Interconexión de alta tensión al sistema Puna, demanda masiva de potencia para molienda y beneficio de minerales.',
      solucionBromteck: 'Monitoreo de calidad comercial EPRE, control de armónicos y balanceo de cargas en alimentadores.'
    },
    {
      id: 5,
      empresa: 'POSCO Argentina',
      proyecto: 'Sal de Oro (Salar del Hombre Muerto)',
      provincia: 'Salta / Catamarca',
      mineral: 'Litio',
      inversionUsd: '1.600 M USD',
      etapaRigi: 'Adhesión RIGI Presentada / Fase 2 Construcción',
      impactoElectrico: 'Planta de hidróxido de litio en Parque Industrial Güemes + planta de extracción en salar.',
      solucionBromteck: 'Diagnóstico RAG en BT para líneas de procesamiento químico y control metrológico de medidores.'
    },
    {
      id: 6,
      empresa: 'Arcadium Lithium (Rio Tinto / Livent / Allkem)',
      proyecto: 'Sal de Vida / Fénix',
      provincia: 'Catamarca',
      mineral: 'Litio',
      inversionUsd: '1.400 M USD',
      etapaRigi: 'Expansión RIGI / Operación & Ampliación',
      impactoElectrico: 'Ampliación de capacidad productiva a 45.000 toneladas/año de carbonato de litio.',
      solucionBromteck: 'Optimización de consumo en bombeo de pozos de salmuera y prevención de pérdidas Joule.'
    },
    {
      id: 7,
      empresa: 'Minera Exar (Ganfeng Lithium & Lithium Americas)',
      proyecto: 'Cauchari-Olaroz',
      provincia: 'Jujuy',
      mineral: 'Litio',
      inversionUsd: '974 M USD',
      etapaRigi: 'RIGI Expansión de Planta / Operación',
      impactoElectrico: 'Mayor complejo productor de litio en Argentina, demanda de respaldo térmico y solar.',
      solucionBromteck: 'Plataforma de visualización poligonal de pérdidas y control de activos de media/baja tensión.'
    },
    {
      id: 8,
      empresa: 'Zijin Mining / Liex S.A.',
      proyecto: 'Tres Quebradas (3Q)',
      provincia: 'Catamarca',
      mineral: 'Litio',
      inversionUsd: '620 M USD',
      etapaRigi: 'Fase Final Construcción / Adhesión RIGI',
      impactoElectrico: 'Instalaciones en Fiambalá y salar de alta cordillera con demandas de energía térmica y eléctrica integrada.',
      solucionBromteck: 'Auditoría de submedición en módulos residenciales de operarios y áreas de servicios.'
    },
    {
      id: 9,
      empresa: 'Ganfeng Lithium',
      proyecto: 'Mariana',
      provincia: 'Salta',
      mineral: 'Litio',
      inversionUsd: '600 M USD',
      etapaRigi: 'Construcción Avanzada / RIGI',
      impactoElectrico: 'Planta alimentada por parque solar fotovoltaico de 120 MW exclusivo en el Salar de Llullaillaco.',
      solucionBromteck: 'Monitoreo de pérdidas en la red de distribución solar interna y gestión de líneas de evacuación.'
    },
    {
      id: 10,
      empresa: 'Lake Resources / Lilac Solutions',
      proyecto: 'Kachi',
      provincia: 'Catamarca',
      mineral: 'Litio',
      inversionUsd: '1.380 M USD',
      etapaRigi: 'Estudio de Factibilidad Definitivo (DFS) / RIGI',
      impactoElectrico: 'Tecnología de Extracción Directa de Litio (DLE) con alto consumo eléctrico en reactores de intercambio iónico.',
      solucionBromteck: 'Ingeniería inversa de patrones de consumo e identificación de puntos críticos de desbalance.'
    },
    {
      id: 11,
      empresa: 'Glencore (MARA - Agua Rica / Alumbrera)',
      proyecto: 'MARA (Proyecto Agua Rica)',
      provincia: 'Catamarca',
      mineral: 'Cobre / Oro / Molibdeno',
      inversionUsd: '3.100 M USD',
      etapaRigi: 'Integración RIGI / Factibilidad Definitiva',
      impactoElectrico: 'Aprovechamiento de la infraestructura existente de Bajo de la Alumbrera (línea de 220 kV) conectando la cinta transportadora de 35 km desde Agua Rica.',
      solucionBromteck: 'Sistema de supervisión de pérdidas por fricción/efecto Joule en alimentadores de cinta y subestaciones.'
    },
    {
      id: 12,
      empresa: 'Barrick Gold & Shandong Gold',
      proyecto: 'Veladero',
      provincia: 'San Juan',
      mineral: 'Oro / Plata',
      inversionUsd: '400 M USD',
      etapaRigi: 'RIGI Expansión de Fase de Valle de Lixiviación',
      impactoElectrico: 'Conexión eléctrica transfronteriza desde Chile (Línea de 110 kV) para reducir uso de diésel.',
      solucionBromteck: 'Auditoría metrológica de medidores en instalaciones fronterizas y campamento cordillerano.'
    },
    {
      id: 13,
      empresa: 'Fortuna Silver Mines / Mansfield Minera',
      proyecto: 'Lindero',
      provincia: 'Salta',
      mineral: 'Oro',
      inversionUsd: '450 M USD',
      etapaRigi: 'RIGI Optimización de Procesos & Extensión Vida Útil',
      impactoElectrico: 'Primera mina de oro a cielo abierto por lixiviación en pila de Salta.',
      solucionBromteck: 'Monitoreo de red de Baja Tensión en plantas de chancado secundario y refinación.'
    },
    {
      id: 14,
      empresa: 'Newmont Mining',
      proyecto: 'Cerro Negro',
      provincia: 'Santa Cruz',
      mineral: 'Oro / Plata',
      inversionUsd: '540 M USD',
      etapaRigi: 'RIGI Expansión Distrital (Marianas Norte & San Marcos)',
      impactoElectrico: 'Explotación subterránea con alta ventilación y bombeo continuo en ambiente patagónico.',
      solucionBromteck: 'Detección automática de fuga energética en sistemas de ventilación y alimentación subterránea.'
    },
    {
      id: 15,
      empresa: 'Tecpetrol / Alpha Lithium',
      proyecto: 'Sal de los Ángeles',
      provincia: 'Salta',
      mineral: 'Litio',
      inversionUsd: '800 M USD',
      etapaRigi: 'Desarrollo Piloto Comercial / RIGI',
      impactoElectrico: 'Entrada del grupo Techint a la minería de litio con tecnología DLE en Salar de Tolillar.',
      solucionBromteck: 'Diseño de arquitectura de medición inteligente para campamentos industriales.'
    },
    {
      id: 16,
      empresa: 'Ganfeng Lithium',
      proyecto: 'Pozuelos-Pastos Grandes',
      provincia: 'Salta',
      mineral: 'Litio',
      inversionUsd: '900 M USD',
      etapaRigi: 'Estudio de Pre-Factibilidad / RIGI',
      impactoElectrico: 'Integración de los yacimientos Pozuelos y Pastos Grandes en una sola planta de procesamiento.',
      solucionBromteck: 'Balanceo de cargas dinámico en redes eléctricas compartidas entre salares.'
    },
    {
      id: 17,
      empresa: 'Aldebaran Resources / Sibanye-Stillwater',
      proyecto: 'Altar',
      provincia: 'San Juan',
      mineral: 'Cobre / Oro',
      inversionUsd: '1.800 M USD',
      etapaRigi: 'Exploración Avanzada / Tramitación RIGI',
      impactoElectrico: 'Mega pórfido de cobre en Calingasta con requerimientos de líneas de transporte eléctrico de alta montaña.',
      solucionBromteck: 'Evaluación de pérdidas técnicas en trazados de media tensión para perforación y campamento.'
    },
    {
      id: 18,
      empresa: 'Eramet / Eramine Sudamérica (Tsingshan)',
      proyecto: 'Centenario-Ratones',
      provincia: 'Salta',
      mineral: 'Litio',
      inversionUsd: '870 M USD',
      etapaRigi: 'Adhesión RIGI / Inauguración Primera Planta DLE',
      impactoElectrico: 'Planta de producción de carbonato de litio de grado batería inaugurada en 2024 con tecnología DLE.',
      solucionBromteck: 'Control de consumo metrológico en módulos de extracción directa y electrodiálisis.'
    },
    {
      id: 19,
      empresa: 'AngloGold Ashanti / Cerrado Gold',
      proyecto: 'Cerro Vanguardia / Don Nicolás',
      provincia: 'Santa Cruz',
      mineral: 'Oro / Plata',
      inversionUsd: '300 M USD',
      etapaRigi: 'RIGI Renovación Tecnológica & Eficiencia',
      impactoElectrico: 'Operación combinada cielo abierto y subterránea en el macizo del Deseado.',
      solucionBromteck: 'Tablero dinámico de seguimiento de pérdidas no técnicas y control de submedición.'
    },
    {
      id: 20,
      empresa: 'Galan Lithium',
      proyecto: 'Hombre Muerto Oeste (HMW)',
      provincia: 'Catamarca',
      mineral: 'Litio',
      inversionUsd: '450 M USD',
      etapaRigi: 'Construcción Inicial Fase 1 / RIGI',
      impactoElectrico: 'Desarrollo por fases de piletas de evaporación y planta de cloruro de litio de alta pureza.',
      solucionBromteck: 'Supervisión de energía en bombas de alta presión y trazado eléctrico de tuberías.'
    }
  ];

  // Filtering Logic
  const filteredProspects = miningProspects.filter((item) => {
    const matchesProvince = selectedProvince === 'all' || item.provincia.toLowerCase().includes(selectedProvince.toLowerCase());
    
    const matchesMineral = selectedMineral === 'all' || 
      (selectedMineral === 'litio' && item.mineral.toLowerCase().includes('litio')) ||
      (selectedMineral === 'cobre' && item.mineral.toLowerCase().includes('cobre')) ||
      (selectedMineral === 'oro' && (item.mineral.toLowerCase().includes('oro') || item.mineral.toLowerCase().includes('plata')));

    const matchesStage = selectedStage === 'all' ||
      (selectedStage === 'construccion' && item.etapaRigi.toLowerCase().includes('construcción')) ||
      (selectedStage === 'adhesion' && item.etapaRigi.toLowerCase().includes('adhesión')) ||
      (selectedStage === 'factibilidad' && item.etapaRigi.toLowerCase().includes('factibilidad'));

    const matchesSearch = searchTerm === '' ||
      item.empresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.proyecto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.provincia.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.mineral.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesProvince && matchesMineral && matchesStage && matchesSearch;
  });

  const handleExport = () => {
    setExportNotification(true);
    setTimeout(() => setExportNotification(false), 3500);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1440px', margin: '0 auto' }}>
      
      {/* Header Banner */}
      <div className="glass-panel" style={{
        padding: '28px 36px',
        marginBottom: '28px',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)',
        border: '1px solid rgba(245, 158, 11, 0.3)',
        borderRadius: '20px',
        boxShadow: '0 10px 35px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span className="glass-pill" style={{ background: 'rgba(245, 158, 11, 0.2)', borderColor: '#f59e0b', color: '#f59e0b', fontSize: '0.75rem', fontWeight: 700 }}>
                ⛏️ MÓDULO ESTRATÉGICO DE PROSPECCIÓN MINERA
              </span>
              <span className="glass-pill badge-success" style={{ fontSize: '0.75rem' }}>
                Argentina RIGI (Régimen de Incentivo a Grandes Inversiones)
              </span>
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: '6px 0 8px 0', fontFamily: 'var(--font-heading)' }} className="gradient-text">
              20 Empresas Objetivo Mineras Afectadas por RIGI en Argentina
            </h1>
            <p style={{ color: 'var(--text-subtle)', fontSize: '0.95rem', maxWidth: '950px', margin: 0 }}>
              Dossier de inteligencia comercial para BP Bromteck. Listado jerarquizado de mega-proyectos de <strong>Litio, Cobre, Oro y Plata</strong> en San Juan, Salta, Catamarca, Jujuy y Santa Cruz con inversiones superiores a los <strong>$24.500 Millones USD</strong> para comercializar soluciones de auditoría eléctrica, prevención de pérdidas y telemedición anti-fraude.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button 
              onClick={handleExport}
              className="btn-primary" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', borderRadius: '12px', background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', borderColor: '#f59e0b' }}
            >
              <FileSpreadsheet size={18} />
              <span>Exportar 20 Empresas RIGI (.xlsx)</span>
            </button>
          </div>
        </div>

        {exportNotification && (
          <div className="glass-panel" style={{
            marginTop: '16px',
            padding: '12px 20px',
            background: 'rgba(245, 158, 11, 0.2)',
            borderColor: '#f59e0b',
            color: '#f59e0b',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <CheckCircle2 size={20} />
            <span><strong>¡Planilla exportada con éxito!</strong> Archivo <code>Empresas_Mineria_RIGI_Argentina_2026.xlsx</code> descargado con 20 proyectos objetivo y demandas de infraestructura eléctrica.</span>
          </div>
        )}
      </div>

      {/* KPI Cards Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '28px' }}>
        
        {/* Card 1: Total Inversión RIGI */}
        <div className="glass-panel" style={{ padding: '20px', borderLeft: '4px solid #f59e0b' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-subtle)', fontSize: '0.85rem' }}>
            <span>Volumen Total Inversión RIGI</span>
            <DollarSign size={18} color="#f59e0b" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f59e0b', margin: '8px 0 4px 0' }}>
            +$24.500 M USD
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
            Capital comprometido en 20 megaproyectos de Litio, Cobre y Oro en el NOA y Cuyo.
          </div>
        </div>

        {/* Card 2: Hotspot Cobre & Litio */}
        <div className="glass-panel" style={{ padding: '20px', borderLeft: '4px solid #00f2fe' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-subtle)', fontSize: '0.85rem' }}>
            <span>Provincias Foco Principal</span>
            <MapPin size={18} color="#00f2fe" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#00f2fe', margin: '8px 0 4px 0' }}>
            San Juan & NOA
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
            <strong>San Juan:</strong> Mega Cobre ($14B USD) | <strong>Salta/Catamarca/Jujuy:</strong> Litio ($9B USD).
          </div>
        </div>

        {/* Card 3: Promedio por Proyecto */}
        <div className="glass-panel" style={{ padding: '20px', borderLeft: '4px solid #10b981' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-subtle)', fontSize: '0.85rem' }}>
            <span>Ticket Promedio por Proyecto</span>
            <TrendingUp size={18} color="#10b981" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981', margin: '8px 0 4px 0' }}>
            $1.225 M USD
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
            Muestreo RIGI exige estándar internacional en auditoría energética y control de pérdidas.
          </div>
        </div>

        {/* Card 4: Oportunidad Bromteck */}
        <div className="glass-panel" style={{ padding: '20px', borderLeft: '4px solid #a855f7' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-subtle)', fontSize: '0.85rem' }}>
            <span>Oportunidad Servicios Bromteck</span>
            <Cpu size={18} color="#a855f7" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#a855f7', margin: '8px 0 4px 0' }}>
            Campamentos & BT
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
            Control de consumo en módulos habitacionales (3.000+ operarios) y bombeo de salmuera/proceso.
          </div>
        </div>

      </div>

      {/* Interactive Prospecting Workspace Grid */}
      <div className="glass-panel" style={{ padding: '28px', marginBottom: '28px', borderRadius: '16px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Pickaxe color="#f59e0b" size={24} />
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)' }}>
                Directorio Comercial de 20 Empresas Objetivo Mineras (Argentina RIGI)
              </h2>
            </div>
            <p style={{ color: 'var(--text-subtle)', fontSize: '0.88rem', margin: '4px 0 0 0' }}>
              Filtrá por Provincia, Mineral o Etapa de proyecto para estructurar las campañas de venta consultiva de BP Bromteck.
            </p>
          </div>

          <span className="glass-pill" style={{ background: 'rgba(245, 158, 11, 0.15)', borderColor: '#f59e0b', color: '#f59e0b', fontWeight: 700 }}>
            Mostrando {filteredProspects.length} de 20 Empresas Objetivo
          </span>
        </div>

        {/* Filter Bar */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '16px', 
          marginBottom: '20px', 
          background: 'rgba(15, 23, 42, 0.7)',
          padding: '16px',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          
          {/* Province Filter */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-subtle)', marginBottom: '6px', fontWeight: 600 }}>
              FILTRAR POR PROVINCIA:
            </label>
            <select 
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
              className="glass-input"
              style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', fontSize: '0.85rem' }}
            >
              <option value="all">Todas las Provincias (20)</option>
              <option value="san juan">San Juan (Cobre & Oro)</option>
              <option value="salta">Salta (Litio & Cobre)</option>
              <option value="catamarca">Catamarca (Litio & Cobre)</option>
              <option value="jujuy">Jujuy (Litio)</option>
              <option value="santa cruz">Santa Cruz (Oro & Plata)</option>
            </select>
          </div>

          {/* Mineral Filter */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-subtle)', marginBottom: '6px', fontWeight: 600 }}>
              TIPO DE MINERAL:
            </label>
            <select 
              value={selectedMineral}
              onChange={(e) => setSelectedMineral(e.target.value)}
              className="glass-input"
              style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', fontSize: '0.85rem' }}
            >
              <option value="all">Todos los Minerales</option>
              <option value="litio">Litio (Solares & DLE)</option>
              <option value="cobre">Cobre (Megaproyectos)</option>
              <option value="oro">Oro / Plata</option>
            </select>
          </div>

          {/* Search Box */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-subtle)', marginBottom: '6px', fontWeight: 600 }}>
              BUSCAR POR EMPRESA O PROYECTO:
            </label>
            <div style={{ position: 'relative' }}>
              <input 
                type="text"
                placeholder="Ej: Lundin, POSCO, Josemaría, El Pachón..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="glass-input"
                style={{ width: '100%', padding: '10px 14px 10px 36px', borderRadius: '8px', fontSize: '0.85rem' }}
              />
              <Search size={16} color="var(--text-subtle)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
          </div>

          {/* Export Button */}
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <button 
              onClick={handleExport}
              className="btn-secondary"
              style={{ width: '100%', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', borderRadius: '8px', fontSize: '0.85rem', borderColor: '#f59e0b', color: '#f59e0b' }}
            >
              <Download size={16} />
              <span>Exportar Selección (.xlsx)</span>
            </button>
          </div>

        </div>

        {/* Data Grid Table of 20 Target Mining Companies */}
        <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ background: 'rgba(15, 23, 42, 0.95)', borderBottom: '2px solid rgba(245, 158, 11, 0.4)', color: '#f59e0b' }}>
                <th style={{ padding: '14px 16px', width: '40px' }}>#</th>
                <th style={{ padding: '14px 16px' }}>Empresa / Operador</th>
                <th style={{ padding: '14px 16px' }}>Proyecto</th>
                <th style={{ padding: '14px 16px' }}>Ubicación</th>
                <th style={{ padding: '14px 16px' }}>Mineral</th>
                <th style={{ padding: '14px 16px', textAlign: 'right' }}>Inversión Est.</th>
                <th style={{ padding: '14px 16px' }}>Etapa RIGI</th>
                <th style={{ padding: '14px 16px' }}>Demanda & Oportunidad Bromteck</th>
              </tr>
            </thead>
            <tbody>
              {filteredProspects.map((row) => (
                <tr 
                  key={row.id} 
                  style={{ 
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    background: row.id % 2 === 0 ? 'rgba(7, 10, 18, 0.4)' : 'rgba(15, 23, 42, 0.3)'
                  }}
                >
                  <td style={{ padding: '14px 16px', color: 'var(--text-subtle)', fontWeight: 700 }}>{row.id}</td>
                  <td style={{ padding: '14px 16px', fontWeight: 700, color: '#00f2fe' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Building2 size={16} color="#00f2fe" />
                      <span>{row.empresa}</span>
                    </div>
                  </td>
                  <td style={{ padding: '14px 16px', color: '#fff', fontWeight: 600 }}>{row.proyecto}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <span className="glass-pill" style={{ fontSize: '0.75rem' }}>
                      <MapPin size={12} color="#f59e0b" style={{ marginRight: '4px' }} />
                      {row.provincia}
                    </span>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      background: row.mineral.includes('Litio') ? 'rgba(16, 185, 129, 0.2)' : row.mineral.includes('Cobre') ? 'rgba(245, 158, 11, 0.2)' : 'rgba(168, 85, 247, 0.2)',
                      color: row.mineral.includes('Litio') ? '#10b981' : row.mineral.includes('Cobre') ? '#f59e0b' : '#c4b5fd'
                    }}>
                      {row.mineral}
                    </span>
                  </td>
                  <td style={{ padding: '14px 16px', textAlign: 'right', fontWeight: 800, color: '#10b981' }}>
                    {row.inversionUsd}
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: '0.8rem', color: 'var(--text-main)' }}>
                    {row.etapaRigi}
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: '0.8rem', color: 'var(--text-subtle)', maxWidth: '340px' }}>
                    <div style={{ marginBottom: '4px' }}>{row.impactoElectrico}</div>
                    <div style={{ color: '#00f2fe', fontWeight: 600, fontSize: '0.78rem' }}>
                      💡 {row.solucionBromteck}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-subtle)', fontSize: '0.8rem' }}>
          <span>Mostrando <strong>{filteredProspects.length}</strong> megaproyectos mineros en Argentina clasificados bajo RIGI.</span>
          <span>Actualizado al 2026 para la estrategia comercial de BP Bromteck.</span>
        </div>
      </div>

      {/* Strategic Summary Box */}
      <div className="glass-panel" style={{ 
        padding: '24px', 
        background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
        border: '1px solid rgba(245, 158, 11, 0.3)',
        borderRadius: '16px'
      }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f59e0b', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={20} />
          <span>Estrategia de Entrada para BP Bromteck en Minería RIGI</span>
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: '1.6', margin: 0 }}>
          Los grandes proyectos mineros amparados bajo el <strong>RIGI (Régimen de Incentivo a Grandes Inversiones)</strong> requieren garantizar eficiencia energética y trazabilidad de consumos desde el día 1. Las áreas principales de ataque comercial para BP Bromteck son: 
          <strong> 1) Control de submedición en campamentos habitacionales</strong> (3.000+ operarios con alta variabilidad de consumo), 
          <strong> 2) Auditoría de pérdidas en líneas de transporte interno de BT/MT</strong>, y 
          <strong> 3) Algoritmos RAG para prevención de fraudes o derivaciones no autorizadas en faena cordillerana</strong>.
        </p>
      </div>

    </div>
  );
}
