import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ExternalLink, Users, Sparkles, MessageSquare, CheckCircle, Search, PlusCircle, Bookmark, Star, ChevronDown, ChevronUp, Share2, Award, Clock, ArrowRight, X } from 'lucide-react';

const INITIAL_EVENTS = [
  {
    id: 'ailat-2026',
    title: 'AILAT 2026',
    subtitle: 'AI Corporate Convention Latin America — 3° Edición',
    webLink: 'https://www.ai-lat.com/schedule',
    location: 'Centro de Convenciones Buenos Aires (CEC), Av. Figueroa Alcorta 2099, CABA, Argentina',
    date: 'Jueves 1 de Octubre de 2026 | 08:00 a 18:00 hs',
    participants: '+35 Conferencistas C-Level & Top Tech Executives | +1500 Asistentes VIP',
    executiveSummary: 'AILAT26 es la convención corporativa de Inteligencia Artificial más relevante de América Latina. Enfocada en la transición de la IA teórica hacia la implementación operativa y escalable en industrias críticas (Utilities, Energía, Fintech, Retail y Logística). Para Diego Musach (Head of Engineering / Director de Tecnología), representa una oportunidad única para auditar arquitecturas Edge/Cloud AI, validar la hoja de ruta del módulo "Ojos de La Red" e Inferencia en Baja Tensión de Bromteck, entablar relaciones estratégicas con referentes de Nvidia, Google, Microsoft, SAP y Mercado Libre, y explorar proveedores de hardware/sensores para distribución eléctrica.',
    talks: [
      {
        id: 'ailat-talk-1',
        title: 'Keynote Plenaria: IA Generativa en Escala Enterprise — De la Promesa a los Resultados de Negocio',
        track: 'Plenaria Principal',
        time: '09:00 - 10:00 hs',
        room: 'Sala Plenaria (Main Stage)',
        level: 'Nivel Ejecutivo / C-Suite',
        topics: ['IA Generativa Enterprise', 'ROI & Negocios', 'Arquitectura Nube Híbrida', 'Gobernanza de Datos'],
        speakers: [
          {
            name: 'Juan Vallejo',
            role: 'Director General',
            company: 'Google Argentina',
            linkedin: 'https://www.linkedin.com/in/juanvallejo'
          },
          {
            name: 'Ezequiel Glinsky',
            role: 'General Manager of Customer Success LATAM',
            company: 'Microsoft',
            linkedin: 'https://www.linkedin.com/in/ezequielglinsky'
          }
        ],
        whyDiegoMustAttend: 'Es fundamental para que Diego Musach audite cómo las grandes tecnológicas estructuran la factibilidad financiera y operativa de proyectos masivos de IA. Permite comparar la infraestructura cloud de Bromteck frente a las tendencias de latencia y costo de inferencia en modelos Enterprise de Google Cloud y Azure.',
        whatToTakeaway: '• Frameworks concretos para medir el ROI en implementaciones de IA.\n• Criterios de selección entre modelos de lenguaje propietarios (Gemini/Copilot) vs. infraestructuras on-premise/hybrid para utilities.\n• Casos de uso de gobernanza de datos aplicables a información sensible de redes eléctricas.',
        otherDetails: 'Apertura oficial del evento. Requiere estar 15 minutos antes para acceder a asientos preferenciales en Sala Plenaria.',
        priority: 'Alta'
      },
      {
        id: 'ailat-talk-2',
        title: 'IA en el Edge e Infraestructura de Altas Prestaciones para Procesamiento de Sensores e Imágenes',
        track: 'Deep Tech & Hardware',
        time: '10:15 - 11:00 hs',
        room: 'Sala 2: Deep Tech & Hardware',
        level: 'Nivel Técnico Avanzado / CTO',
        topics: ['Edge AI', 'NVIDIA Jetson / TensorRT', 'Visión Artificial', 'Sensores IoT Industrial'],
        speakers: [
          {
            name: 'Guilherme Fuhrken',
            role: 'LATAM Enterprise Sales & AI Solutions Manager',
            company: 'NVIDIA',
            linkedin: 'https://www.linkedin.com/in/guilhermefuhrken'
          }
        ],
        whyDiegoMustAttend: '⭐ CHARLA CRÍTICA PARA BROMTECK / EDEMSA. El proyecto "Ojos de La Red" y la detección visual de hurtos en Baja Tensión requieren procesamiento en tiempo real en los propios transformadores/pilares. Entender la oferta de NVIDIA para inferencia en dispositivos embebidos redujo tiempos de arquitectura de meses a días.',
        whatToTakeaway: '• Modelos de cuantización INT8 y optimización de TensorRT para hardware comprimido de bajo consumo.\n• Modelos de visión artificial optimizados para inspección de redes de baja y media tensión.\n• Contacto directo con el equipo de soluciones de NVIDIA para acceder a muestras de devkits y aceleradores.',
        otherDetails: 'Presentación con demo de código y benchmarks de inferencia en tiempo real. Llevar preguntas específicas sobre consumo eléctrico de chips en intemperie.',
        priority: 'Alta'
      },
      {
        id: 'ailat-talk-3',
        title: 'Arquitectura RAG Enterprise & Bases de Datos Vectoriales: Escalando el Conocimiento Técnico en Tiempo Real',
        track: 'IA & Arquitectura Software',
        time: '11:15 - 12:00 hs',
        room: 'Sala 1: Software & Cloud Architecture',
        level: 'Nivel Técnico Senior',
        topics: ['RAG Avanzado', 'Vector Databases', 'Búsqueda Semántica', 'Reglamentaciones EPRE / EDEMSA'],
        speakers: [
          {
            name: 'Amilcar Luna',
            role: 'Head of AI & Enterprise Architecture',
            company: 'SAP Latin America',
            linkedin: 'https://www.linkedin.com/in/amilcarluna'
          }
        ],
        whyDiegoMustAttend: 'Directamente vinculada al desarrollo del módulo RAG de Pérdidas Técnicas y Reglamentos EPRE (Res. 129/18). Diego debe validar las mejores prácticas de Chunking, Búsqueda Híbrida y re-ranking para normativas técnicas complejas sin alucinaciones.',
        whatToTakeaway: '• Estrategias de indexación híbrida (Keyword BM25 + Embeddings vectoriales) para documentación técnica.\n• Métricas de evaluación de RAG (Ragas / TruLens) para asegurar 0% de errores en liquidaciones de energía.\n• Métodos de actualización diferencial de bases vectoriales sin downtime.',
        otherDetails: 'Ideal para consultar sobre integración con ERPs corporativos y repositorios de datos masivos.',
        priority: 'Alta'
      },
      {
        id: 'ailat-talk-4',
        title: 'Detección de Anomalías y Fraude Mediante Machine Learning Masivo en Tiempo Real',
        track: 'Analytics & Fraud Prevention',
        time: '14:00 - 14:45 hs',
        room: 'Sala Plenaria Main Stage',
        level: 'Nivel Ejecutivo & Técnico',
        topics: ['Detección de Fraude', 'Time-Series ML', 'Streaming de Datos', 'Reducción de Pérdidas'],
        speakers: [
          {
            name: 'Pablo Moretti',
            role: 'VP de Desarrollo de Producto & Data/AI',
            company: 'Mercado Libre',
            linkedin: 'https://www.linkedin.com/in/pablomoretti'
          }
        ],
        whyDiegoMustAttend: 'Aunque enfocado en e-commerce/fintech, la matemática del comportamiento anómalo en tiempo real es idéntica a la detección de hurtos e inconsistencias de consumo en transformadores de distribuidoras eléctricas. Aporta una perspectiva de volumen masivo.',
        whatToTakeaway: '• Modelos de bosques de aislamiento (Isolation Forests) y Autoencoders para series temporales de medición.\n• Estrategias para evitar falsos positivos en alertas de campo para auditores de la red eléctrica.\n• Sistemas de priorización automática de órdenes de inspección.',
        otherDetails: 'Primera charla del bloque de la tarde. Enfoque en arquitectura de eventos en tiempo real.',
        priority: 'Media'
      },
      {
        id: 'ailat-talk-5',
        title: 'Liderazgo de Equipos de Ingeniería de IA, MLOps y Cultura de Entrega Continua',
        track: 'Management & Liderazgo Tech',
        time: '15:00 - 15:45 hs',
        room: 'Sala 3: Liderazgo & Transformación',
        level: 'Nivel Ejecutivo / Directivo',
        topics: ['MLOps', 'Gestión de Talento Tech', 'CI/CD de Modelos', 'Pragmatic Engineering'],
        speakers: [
          {
            name: 'Alejandro Melamed',
            role: 'Founder & CEO',
            company: 'Humanize Consulting',
            linkedin: 'https://www.linkedin.com/in/alejandromelamed'
          },
          {
            name: 'Astrid Mirkin',
            role: 'General Manager South Latam & Miami',
            company: 'TikTok',
            linkedin: 'https://www.linkedin.com/in/astridmirkin'
          }
        ],
        whyDiegoMustAttend: 'Como Head of Engineering y Director de Tecnología, Diego gestiona equipos multidisciplinarios de firmware, web y ciencia de datos. Esta sesión brinda herramientas clave de retención de talento, velocidad de ejecución y adopción interna.',
        whatToTakeaway: '• Metodologías para acortar el ciclo de vida desde la prueba de concepto (PoC) a producción real.\n• Indicadores clave (KPIs) de productividad para ingenieros de IA e infraestructura.\n• Gestión del cambio operativo al introducir herramientas de IA en personal de terreno.',
        otherDetails: 'Panel interactivo con preguntas de la audiencia sobre retención y liderazgo técnico.',
        priority: 'Media'
      },
      {
        id: 'ailat-talk-6',
        title: 'Smart Grids, IIoT y Sensores Inteligentes Impulsados por Algoritmos Predictores',
        track: 'Smart Industries & Utilities',
        time: '16:00 - 16:45 hs',
        room: 'Sala 2: Smart Industries & IoT',
        level: 'Nivel Especializado en Energía',
        topics: ['Smart Grids', 'IIoT', 'Mantenimiento Predictivo', 'Baja Tensión & TDR'],
        speakers: [
          {
            name: 'Erica Libertelli',
            role: 'Managing Director & Panel Host',
            company: 'AI in LATAM',
            linkedin: 'https://www.linkedin.com/in/ericalibertelli'
          },
          {
            name: 'Panelistas Especialistas de la Industria',
            role: 'Directores de Innovación',
            company: 'Energy & Utilities LatAm',
            linkedin: 'https://www.ai-lat.com/speaker'
          }
        ],
        whyDiegoMustAttend: 'Encaja al 100% con la propuesta de valor de Bromteck para EDEMSA. Permite comparar las soluciones desarrolladas por Bromteck (reflectometría TDR, auditoría AP, medición BT) con iniciativas internacionales de Smart Grids.',
        whatToTakeaway: '• Estándares internacionales de protocolos de comunicación para medidores inteligentes y sensores de campo.\n• Modelos predictivos de falla de aislamiento y sobrecarga térmica en estaciones transformadoras.\n• Oportunidades de comercialización de los módulos de Bromteck hacia otras distribuidoras de la región.',
        otherDetails: 'Presenta casos prácticos de distribuidoras eléctricas de la región.',
        priority: 'Alta'
      },
      {
        id: 'ailat-talk-7',
        title: 'Panel de Cierre & AILAT Awards: El Futuro de la IA en LatAm 2026-2027',
        track: 'Plenaria Cierre & Networking',
        time: '17:00 - 18:00 hs',
        room: 'Sala Plenaria Main Stage',
        level: 'Todos los niveles',
        topics: ['Tendencias 2027', 'Ecosistema LatAm', 'Alianzas B2B', 'Networking VIP'],
        speakers: [
          {
            name: 'Comité Ejecutivo AILAT26',
            role: 'Organizadores & Keynote Guests',
            company: 'AI in LATAM',
            linkedin: 'https://www.ai-lat.com'
          }
        ],
        whyDiegoMustAttend: 'Sesión clave para networking institucional de alto nivel. Permite posicionar la tecnología de Bromteck en la conversación del ecosistema y conectarse con líderes de empresas interesadas en soluciones de ingeniería pragmatic en energía.',
        whatToTakeaway: '• Contactos estratégicos C-Level e inversores.\n• Panorama regulatorio y tendencial de la IA en LatAm para los próximos 2 años.\n• Acceso al cóctel ejecutivo de cierre.',
        otherDetails: 'Al finalizar la sesión comienza el Cóctel de Networking VIP en el foyer principal.',
        priority: 'Alta'
      }
    ]
  }
];

export default function EventsAgendaModule() {
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('bmk_events_agenda_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing saved events data:", e);
      }
    }
    return INITIAL_EVENTS;
  });

  const [selectedEventId, setSelectedEventId] = useState('ailat-2026');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('Todas');
  const [expandedTalks, setExpandedTalks] = useState({});
  const [userComments, setUserComments] = useState(() => {
    const saved = localStorage.getItem('bmk_events_user_comments');
    return saved ? JSON.parse(saved) : {};
  });

  // Modal para agregar nuevo evento
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    subtitle: '',
    webLink: '',
    location: '',
    date: '',
    participants: '',
    executiveSummary: ''
  });

  // Modal para agregar charla a un evento
  const [isAddTalkModalOpen, setIsAddTalkModalOpen] = useState(false);
  const [newTalk, setNewTalk] = useState({
    title: '',
    track: 'General',
    time: '10:00 - 11:00 hs',
    room: 'Sala Principal',
    level: 'Ejecutivo',
    topics: '',
    speakerName: '',
    speakerRole: '',
    speakerCompany: '',
    speakerLinkedin: '',
    whyDiegoMustAttend: '',
    whatToTakeaway: '',
    otherDetails: '',
    priority: 'Alta'
  });

  const [commentSaveStatus, setCommentSaveStatus] = useState({});

  useEffect(() => {
    localStorage.setItem('bmk_events_agenda_data', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('bmk_events_user_comments', JSON.stringify(userComments));
  }, [userComments]);

  const activeEvent = events.find(e => e.id === selectedEventId) || events[0];

  const handleCommentChange = (talkId, text) => {
    setUserComments(prev => ({
      ...prev,
      [talkId]: text
    }));
    setCommentSaveStatus(prev => ({
      ...prev,
      [talkId]: 'Guardado localmente ✓'
    }));
    setTimeout(() => {
      setCommentSaveStatus(prev => ({
        ...prev,
        [talkId]: null
      }));
    }, 2500);
  };

  const toggleExpand = (talkId) => {
    setExpandedTalks(prev => ({
      ...prev,
      [talkId]: !prev[talkId]
    }));
  };

  const handleCreateNewEvent = (e) => {
    e.preventDefault();
    if (!newEvent.title.trim()) return;

    const eventId = `event-${Date.now()}`;
    const createdEvent = {
      id: eventId,
      title: newEvent.title,
      subtitle: newEvent.subtitle || 'Convención & Encuentro Tecnológico',
      webLink: newEvent.webLink || 'https://www.ai-lat.com',
      location: newEvent.location || 'Por confirmar',
      date: newEvent.date || 'Fecha a confirmar',
      participants: newEvent.participants || 'Líderes de tecnología y directivos',
      executiveSummary: newEvent.executiveSummary || 'Resumen ejecutivo de agenda tecnológica.',
      talks: []
    };

    setEvents(prev => [...prev, createdEvent]);
    setSelectedEventId(eventId);
    setIsAddEventModalOpen(false);
    setNewEvent({ title: '', subtitle: '', webLink: '', location: '', date: '', participants: '', executiveSummary: '' });
  };

  const handleCreateNewTalk = (e) => {
    e.preventDefault();
    if (!newTalk.title.trim() || !activeEvent) return;

    const talkId = `talk-${Date.now()}`;
    const formattedTalk = {
      id: talkId,
      title: newTalk.title,
      track: newTalk.track,
      time: newTalk.time,
      room: newTalk.room,
      level: newTalk.level,
      topics: newTalk.topics.split(',').map(t => t.trim()).filter(Boolean),
      speakers: [
        {
          name: newTalk.speakerName || 'Conferencista por confirmar',
          role: newTalk.speakerRole || 'Speaker',
          company: newTalk.speakerCompany || 'Empresa',
          linkedin: newTalk.speakerLinkedin || 'https://linkedin.com'
        }
      ],
      whyDiegoMustAttend: newTalk.whyDiegoMustAttend || 'Relevante para los objetivos de liderazgo e ingeniería de Diego Musach.',
      whatToTakeaway: newTalk.whatToTakeaway || 'Puntos clave y preguntas de la sesión.',
      otherDetails: newTalk.otherDetails || 'N/A',
      priority: newTalk.priority
    };

    setEvents(prev => prev.map(ev => {
      if (ev.id === activeEvent.id) {
        return { ...ev, talks: [...ev.talks, formattedTalk] };
      }
      return ev;
    }));

    setIsAddTalkModalOpen(false);
    setNewTalk({
      title: '', track: 'General', time: '10:00 - 11:00 hs', room: 'Sala Principal', level: 'Ejecutivo',
      topics: '', speakerName: '', speakerRole: '', speakerCompany: '', speakerLinkedin: '',
      whyDiegoMustAttend: '', whatToTakeaway: '', otherDetails: '', priority: 'Alta'
    });
  };

  const filteredTalks = (activeEvent?.talks || []).filter(talk => {
    const matchesSearch = searchQuery === '' || 
      talk.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talk.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      talk.speakers.some(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.company.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesPriority = selectedPriority === 'Todas' || talk.priority === selectedPriority;
    return matchesSearch && matchesPriority;
  });

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '24px 16px' }} className="fade-in">
      
      {/* Selector de Evento Dropdown Bar Top Header */}
      <div className="glass-panel" style={{ padding: '16px 24px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', borderRadius: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: 'rgba(245, 158, 11, 0.15)', padding: '10px', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
            <Calendar size={24} color="#f59e0b" />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
              Módulo de Eventos & Agendas Estratégicas
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Selección de Evento:</span>
              <select
                value={selectedEventId}
                onChange={(e) => setSelectedEventId(e.target.value)}
                className="glass-input"
                style={{
                  padding: '6px 14px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#00f2fe',
                  background: 'rgba(15, 23, 42, 0.8)',
                  borderColor: 'rgba(0, 242, 254, 0.4)',
                  borderRadius: '10px',
                  cursor: 'pointer'
                }}
              >
                {events.map(ev => (
                  <option key={ev.id} value={ev.id} style={{ background: '#0b1329', color: '#fff' }}>
                    {ev.title} {ev.id === 'ailat-2026' ? '⭐ (AILAT 2026)' : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => setIsAddTalkModalOpen(true)}
            className="btn-secondary"
            style={{ fontSize: '0.85rem', padding: '8px 14px' }}
          >
            <PlusCircle size={16} color="#00f2fe" />
            <span>Agregar Charla al Evento</span>
          </button>

          <button
            onClick={() => setIsAddEventModalOpen(true)}
            className="btn-primary"
            style={{ fontSize: '0.85rem', padding: '8px 16px' }}
          >
            <Sparkles size={16} />
            <span>+ Agregar Nuevo Evento</span>
          </button>
        </div>
      </div>

      {/* BRIEF DEL EVENTO (ENCABEZADO CON RESUMEN EJECUTIVO Y DATOS CLAVE) */}
      {activeEvent && (
        <div className="glass-panel" style={{
          padding: '28px',
          marginBottom: '28px',
          borderRadius: '18px',
          background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.6) 100%)',
          borderColor: 'rgba(0, 242, 254, 0.25)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}>
          {/* Header Superior */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                <span className="glass-pill badge-primary" style={{ fontSize: '0.75rem', padding: '4px 10px', fontWeight: 700 }}>
                  Resumen Ejecutivo Oficial
                </span>
                <span className="glass-pill" style={{ fontSize: '0.75rem', borderColor: 'rgba(245, 158, 11, 0.4)', color: '#f59e0b' }}>
                  {activeEvent.subtitle}
                </span>
              </div>
              <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '4px 0 8px 0', fontFamily: 'var(--font-heading)' }} className="gradient-text">
                {activeEvent.title}
              </h1>
            </div>

            <a
              href={activeEvent.webLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                fontSize: '0.85rem',
                padding: '10px 18px',
                background: 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)',
                color: '#070a12',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 0 15px rgba(0, 242, 254, 0.3)'
              }}
            >
              <span>Visitar Sitio Oficial</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Grid de Metadatos Clave */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '14px',
            marginBottom: '20px'
          }}>
            <div className="glass-panel" style={{ padding: '12px 16px', borderRadius: '12px', background: 'rgba(7, 10, 18, 0.5)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00f2fe', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>
                <MapPin size={16} />
                <span>Ubicación & Sede</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: 500 }}>
                {activeEvent.location}
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '12px 16px', borderRadius: '12px', background: 'rgba(7, 10, 18, 0.5)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>
                <Clock size={16} />
                <span>Fecha & Horario</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: 500 }}>
                {activeEvent.date}
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '12px 16px', borderRadius: '12px', background: 'rgba(7, 10, 18, 0.5)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a855f7', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px' }}>
                <Users size={16} />
                <span>Participantes & Convocatoria</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: 500 }}>
                {activeEvent.participants}
              </div>
            </div>
          </div>

          {/* Cuestión Estratégica / Resumen Ejecutivo */}
          <div style={{
            background: 'rgba(0, 242, 254, 0.05)',
            borderLeft: '4px solid #00f2fe',
            padding: '14px 18px',
            borderRadius: '0 12px 12px 0'
          }}>
            <div style={{ fontSize: '0.8rem', color: '#00f2fe', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} />
              <span>Resumen Ejecutivo para Diego Musach (Head of Engineering / Director de Tecnología)</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: 1.6, margin: 0 }}>
              {activeEvent.executiveSummary}
            </p>
          </div>
        </div>
      )}

      {/* BARRA DE FILTROS & BÚSQUEDA DE CONFERENCIAS */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '280px' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Buscar por título, speaker, tecnología (Nvidia, RAG, Edge, Fraude)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="glass-input"
              style={{ width: '100%', paddingLeft: '42px', fontSize: '0.9rem' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', fontWeight: 600 }}>Filtrar Prioridad:</span>
          {['Todas', 'Alta', 'Media'].map(prio => (
            <button
              key={prio}
              onClick={() => setSelectedPriority(prio)}
              className={`glass-pill ${selectedPriority === prio ? 'active' : ''}`}
              style={{
                fontSize: '0.8rem',
                padding: '6px 12px',
                cursor: 'pointer',
                background: selectedPriority === prio ? 'rgba(0, 242, 254, 0.2)' : 'transparent',
                borderColor: selectedPriority === prio ? '#00f2fe' : 'rgba(255, 255, 255, 0.1)',
                color: selectedPriority === prio ? '#00f2fe' : 'var(--text-muted)'
              }}
            >
              {prio}
            </button>
          ))}
        </div>
      </div>

      {/* LISTA CONFERENCIA POR CONFERENCIA CON LOS 7 PUNTOS REQUERIDOS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filteredTalks.length === 0 ? (
          <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-subtle)' }}>
            No se encontraron conferencias con los filtros aplicados.
          </div>
        ) : (
          filteredTalks.map((talk, idx) => {
            const isExpanded = expandedTalks[talk.id] !== false; // Expandido por defecto
            const talkComment = userComments[talk.id] || '';
            const statusMsg = commentSaveStatus[talk.id];

            return (
              <div
                key={talk.id}
                className="glass-panel"
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  borderLeft: talk.priority === 'Alta' ? '5px solid #00f2fe' : '5px solid #f59e0b',
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                {/* 1. TÍTULO Y HEADER DE CONFERENCIA */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ flex: 1, minWidth: '280px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                      <span className="glass-pill" style={{ background: 'rgba(0, 242, 254, 0.15)', borderColor: '#00f2fe', color: '#00f2fe', fontSize: '0.72rem', fontWeight: 700 }}>
                        Conferencia #{idx + 1}
                      </span>
                      <span className="glass-pill" style={{ background: 'rgba(245, 158, 11, 0.15)', borderColor: '#f59e0b', color: '#f59e0b', fontSize: '0.72rem', fontWeight: 600 }}>
                        {talk.time}
                      </span>
                      <span className="glass-pill" style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>
                        📍 {talk.room}
                      </span>
                      <span className="glass-pill" style={{ fontSize: '0.72rem', borderColor: 'rgba(168, 85, 247, 0.4)', color: '#a855f7' }}>
                        {talk.track}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', margin: '4px 0 10px 0', lineHeight: 1.4 }}>
                      1. Título: {talk.title}
                    </h2>
                  </div>

                  <button
                    onClick={() => toggleExpand(talk.id)}
                    className="btn-secondary"
                    style={{ padding: '6px 10px', fontSize: '0.75rem', borderRadius: '8px' }}
                  >
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    <span>{isExpanded ? 'Contraer' : 'Ver Detalles'}</span>
                  </button>
                </div>

                {/* CONTENIDO DETALLADO CON LOS PUNTOS 2 AL 7 */}
                {isExpanded && (
                  <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '18px' }} className="fade-in">
                    
                    {/* 2. PRINCIPALES TEMAS */}
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                        2. Principales Temas Tratados
                      </div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {talk.topics.map((tp, tIdx) => (
                          <span key={tIdx} className="glass-pill" style={{ fontSize: '0.75rem', background: 'rgba(15, 23, 42, 0.7)', borderColor: 'rgba(255, 255, 255, 0.15)', color: 'var(--text-main)' }}>
                            🏷️ {tp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 3. QUIÉNES LA DAN (NOMBRE, CARGO, EMPRESA Y LINKEDIN) */}
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                        3. Quiénes la dan (Disertantes & Perfil)
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                        {talk.speakers.map((spk, sIdx) => (
                          <div key={sIdx} className="glass-panel" style={{ padding: '12px 16px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', background: 'rgba(7, 10, 18, 0.6)' }}>
                            <div>
                              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>
                                {spk.name}
                              </div>
                              <div style={{ fontSize: '0.78rem', color: '#00f2fe' }}>
                                {spk.role} • <strong style={{ color: 'var(--text-subtle)' }}>{spk.company}</strong>
                              </div>
                            </div>
                            <a
                              href={spk.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="glass-pill"
                              style={{
                                fontSize: '0.75rem',
                                padding: '5px 10px',
                                background: 'rgba(10, 102, 194, 0.25)',
                                borderColor: '#0a66c2',
                                color: '#38bdf8',
                                textDecoration: 'none',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}
                            >
                              <span>LinkedIn</span>
                              <ExternalLink size={12} />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 4. POR QUÉ DIEGO MUSACH DEBE ASISTIR */}
                    <div style={{
                      background: 'rgba(16, 185, 129, 0.08)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      padding: '14px 18px',
                      borderRadius: '12px'
                    }}>
                      <div style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Star size={16} color="#10b981" />
                        <span>4. Por qué Diego Musach debe asistir</span>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                        {talk.whyDiegoMustAttend}
                      </p>
                    </div>

                    {/* 5. QUÉ LLEVARSE O QUÉ BUSCAR DE ESA CHARLA */}
                    <div style={{
                      background: 'rgba(0, 242, 254, 0.06)',
                      border: '1px solid rgba(0, 242, 254, 0.25)',
                      padding: '14px 18px',
                      borderRadius: '12px'
                    }}>
                      <div style={{ fontSize: '0.8rem', color: '#00f2fe', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Bookmark size={16} color="#00f2fe" />
                        <span>5. Qué llevarse o qué buscar de esta charla (Entregables / Key Takeaways)</span>
                      </div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.6, whitespace: 'pre-line' }}>
                        {talk.whatToTakeaway}
                      </div>
                    </div>

                    {/* 6. OTROS DATOS QUE TENGA QUE TENER EN CUENTA */}
                    <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                        6. Otros datos a tener en cuenta (Logística & Prerrequisitos)
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                        {talk.otherDetails}
                      </p>
                    </div>

                    {/* 7. ESPACIO PARA MIS COMENTARIOS (INPUT CON GUARDADO PERSISTENTE) */}
                    <div style={{
                      background: 'rgba(30, 41, 59, 0.5)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      padding: '14px 18px',
                      borderRadius: '12px'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <div style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <MessageSquare size={16} color="#f59e0b" />
                          <span>7. Espacio para mis comentarios (Diego Musach)</span>
                        </div>
                        {statusMsg && (
                          <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>
                            {statusMsg}
                          </span>
                        )}
                      </div>
                      <textarea
                        rows={3}
                        placeholder="Escribí aquí tus notas personales, preguntas para el speaker o acuerdos durante el evento..."
                        value={talkComment}
                        onChange={(e) => handleCommentChange(talk.id, e.target.value)}
                        className="glass-input"
                        style={{
                          width: '100%',
                          fontSize: '0.88rem',
                          lineHeight: 1.5,
                          background: 'rgba(7, 10, 18, 0.8)',
                          borderColor: 'rgba(245, 158, 11, 0.3)',
                          borderRadius: '8px',
                          color: '#fff',
                          padding: '10px 14px'
                        }}
                      />
                    </div>

                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* MODAL PARA AGREGAR NUEVO EVENTO */}
      {isAddEventModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div className="glass-panel" style={{ width: '100%', maxWidth: '650px', padding: '28px', borderRadius: '18px', background: '#0b1329', border: '1px solid #00f2fe' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0, color: '#00f2fe' }}>
                ➕ Agregar Nuevo Evento al Tablero
              </h2>
              <button onClick={() => setIsAddEventModalOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateNewEvent} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Nombre del Evento (Ej: AILAT 2026, IoT Summit 2027)</label>
                <input
                  required
                  type="text"
                  placeholder="Nombre del evento..."
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="glass-input"
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Subtítulo / Bajada</label>
                <input
                  type="text"
                  placeholder="Ej: Conferencia Internacional de Inteligencia Artificial..."
                  value={newEvent.subtitle}
                  onChange={(e) => setNewEvent({ ...newEvent, subtitle: e.target.value })}
                  className="glass-input"
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Link Web Oficial</label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={newEvent.webLink}
                    onChange={(e) => setNewEvent({ ...newEvent, webLink: e.target.value })}
                    className="glass-input"
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Fecha & Horario</label>
                  <input
                    type="text"
                    placeholder="Ej: 1 de Octubre 2026"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="glass-input"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Lugar / Sede</label>
                <input
                  type="text"
                  placeholder="Ej: Centro de Convenciones CEC, Buenos Aires"
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                  className="glass-input"
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Resumen Ejecutivo Brief</label>
                <textarea
                  rows={3}
                  placeholder="Brief ejecutivo del evento y objetivos clave..."
                  value={newEvent.executiveSummary}
                  onChange={(e) => setNewEvent({ ...newEvent, executiveSummary: e.target.value })}
                  className="glass-input"
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                <button type="button" onClick={() => setIsAddEventModalOpen(false)} className="btn-secondary">
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  Guardar Evento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL PARA AGREGAR CHARLA */}
      {isAddTalkModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div className="glass-panel" style={{ width: '100%', maxWidth: '700px', padding: '28px', borderRadius: '18px', background: '#0b1329', border: '1px solid #00f2fe', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: '#00f2fe' }}>
                📌 Agregar Nueva Conferencia a "{activeEvent?.title}"
              </h2>
              <button onClick={() => setIsAddTalkModalOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateNewTalk} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>1. Título de la Conferencia</label>
                <input
                  required
                  type="text"
                  placeholder="Título completo..."
                  value={newTalk.title}
                  onChange={(e) => setNewTalk({ ...newTalk, title: e.target.value })}
                  className="glass-input"
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Horario</label>
                  <input
                    type="text"
                    placeholder="10:00 - 11:00 hs"
                    value={newTalk.time}
                    onChange={(e) => setNewTalk({ ...newTalk, time: e.target.value })}
                    className="glass-input"
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Sala / Track</label>
                  <input
                    type="text"
                    placeholder="Sala 1"
                    value={newTalk.room}
                    onChange={(e) => setNewTalk({ ...newTalk, room: e.target.value })}
                    className="glass-input"
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Prioridad</label>
                  <select
                    value={newTalk.priority}
                    onChange={(e) => setNewTalk({ ...newTalk, priority: e.target.value })}
                    className="glass-input"
                    style={{ width: '100%' }}
                  >
                    <option value="Alta">Alta</option>
                    <option value="Media">Media</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>2. Temas Principales (separados por coma)</label>
                <input
                  type="text"
                  placeholder="Ej: Edge AI, Smart Grids, Sensores"
                  value={newTalk.topics}
                  onChange={(e) => setNewTalk({ ...newTalk, topics: e.target.value })}
                  className="glass-input"
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>3. Nombre Disertante</label>
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    value={newTalk.speakerName}
                    onChange={(e) => setNewTalk({ ...newTalk, speakerName: e.target.value })}
                    className="glass-input"
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Cargo & Empresa</label>
                  <input
                    type="text"
                    placeholder="Ej: CTO en Empresa"
                    value={newTalk.speakerRole}
                    onChange={(e) => setNewTalk({ ...newTalk, speakerRole: e.target.value })}
                    className="glass-input"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Link a LinkedIn del Speaker</label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/..."
                  value={newTalk.speakerLinkedin}
                  onChange={(e) => setNewTalk({ ...newTalk, speakerLinkedin: e.target.value })}
                  className="glass-input"
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>4. Por qué Diego Musach debe asistir</label>
                <textarea
                  rows={2}
                  placeholder="Relevancia estratégica..."
                  value={newTalk.whyDiegoMustAttend}
                  onChange={(e) => setNewTalk({ ...newTalk, whyDiegoMustAttend: e.target.value })}
                  className="glass-input"
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>5. Qué llevarse / buscar</label>
                <textarea
                  rows={2}
                  placeholder="Entregables y aprendizajes..."
                  value={newTalk.whatToTakeaway}
                  onChange={(e) => setNewTalk({ ...newTalk, whatToTakeaway: e.target.value })}
                  className="glass-input"
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                <button type="button" onClick={() => setIsAddTalkModalOpen(false)} className="btn-secondary">
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  Agregar Conferencia
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
