import React, { useState, useEffect } from 'react';
import { 
  Calendar, MapPin, ExternalLink, UserCheck, ShieldCheck, 
  Sparkles, CheckCircle, ChevronDown, ChevronUp, Search, 
  Bookmark, Briefcase, Award, Clock, Users, ArrowUpRight, MessageSquare, Plus, Trash2, Cpu, Code, Layers, Zap
} from 'lucide-react';

const AILAT_2026_EVENT = {
  id: 'ailat-2026',
  name: 'AILAT 2026 - AI Corporate Convention',
  shortName: 'AILAT 2026',
  date: '1 de Octubre, 2026',
  time: '08:00 hs - 18:00 hs',
  location: 'CEC - Centro de Convenciones de Buenos Aires (Av. Figueroa Alcorta 2099)',
  webUrl: 'https://www.ai-lat.com/schedule',
  ticketsUrl: 'https://ailat26.eventbrite.com.ar/',
  attendeesCount: '+1,500 Ejecutivos, CXOs, C-Levels y VPs de tecnología de LatAm',
  organizers: 'AI IN LATAM Hub',
  executiveSummary: 'AILAT26 es el evento corporativo de Inteligencia Artificial y tecnologías disruptivas más prominente de Latinoamérica. Reúne a directivos de Google, Microsoft, TikTok, SAP, NVIDIA, Mercado Libre y startups de frontera. Para Diego Musach (Head of Engineering / Director Tech), este evento representa la oportunidad estratégica de evaluar arquitecturas de agentes autónomos (Agentic AI), orquestación de LLMs, automatización en tiempo real, reducción de costos en infrencias RAG y alianzas clave para acelerar la hoja de ruta tecnológica de la empresa.',
  recommendedTracks: [
    'Main Stage: Agentic Commerce, AI Orchestration & Liderazgo Humano',
    'Sala B: SAP Agentic Core & Cuando el código lo escriben los agentes',
    'Sala C: Engineering Context, Voice Agents & Governance'
  ]
};

const AILAT_TALKS = [
  // --- PLENARIA / MAIN STAGE ---
  {
    id: 'talk-1',
    time: '08:00 - 08:55',
    track: 'Plenaria / Main Stage',
    title: 'Acreditaciones & AI Journey Onboarding',
    summary: 'Acreditaciones generales y recorrido inicial sobre el ecosistema de IA corporativa.',
    topics: ['Acreditación de ejecutivos', 'AI Journey map', 'Networking matutino'],
    speakers: [
      { name: 'Erika Libertelli', role: 'Board Member & Co-Founder', company: 'AI IN LATAM', linkedin: 'https://www.linkedin.com/search/results/people/?keywords=Erika%20Libertelli%20AI%20IN%20LATAM' }
    ],
    whyDiegoShouldAttend: 'Punto de contacto temprano con el C-Level del evento. Oportunidad de entablar conversación con líderes de tecnología e innovación antes del inicio oficial.',
    keyTakeaways: 'Credenciales del evento, mapa de salas e identificación de startups con stands en la expo.',
    logistics: 'Llegar a las 07:45 hs para evitar filas en el hall principal del CEC.',
    impactLevel: 'Medio'
  },
  {
    id: 'talk-2',
    time: '08:55 - 09:25',
    track: 'Plenaria / Main Stage',
    title: 'El Camino a la Empresa Autónoma',
    summary: 'Recorrido fundamental sobre los tipos de modelos y soluciones que todo líder tecnológico debe dominar para escalar la autonomía operativa.',
    topics: ['Autonomía empresarial', 'Arquitectura de agentes', 'Matriz de madurez en IA'],
    speakers: [
      { name: 'Ezequiel Glinsky', role: 'VP de Tecnología & Operaciones', company: 'Microsoft LatAm', linkedin: 'https://www.linkedin.com/in/ezequielkahan' },
      { name: 'Juan Vallejo', role: 'Head of Enterprise AI', company: 'Google Cloud Argentina', linkedin: 'https://www.linkedin.com/in/juanfilips' }
    ],
    whyDiegoShouldAttend: 'Crucial para alinear la visión técnica de ingeniería con las tendencias de autonomía que las Big Tech están desplegando a nivel empresarial.',
    keyTakeaways: 'Framework de gradación de autonomía: desde copilotos guiados por humanos hasta agentes autónomos supervisados por metas.',
    logistics: 'Ubicación central en Plenaria.',
    impactLevel: 'Alto'
  },
  {
    id: 'talk-3',
    time: '09:25 - 09:50',
    track: 'Plenaria / Main Stage',
    title: 'Construyendo el Futuro de la IA en la Argentina',
    summary: 'Visión estratégica del desarrollo local de modelos de IA, infraestructura computacional e inversiones en tecnología de frontera.',
    topics: ['Ecosistema de IA local', 'Talento tecnológico', 'Infraestructura de cómputo en LatAm'],
    speakers: [
      { name: 'Emiliano Kargieman', role: 'CEO & Founder', company: 'Satellogic / AI Advisor', linkedin: 'https://www.linkedin.com/in/ekargieman' }
    ],
    whyDiegoShouldAttend: 'Permite comprender el contexto regulatorio, de talento y capacidad de cómputo local para decisiones de arquitectura off-shore o near-shore.',
    keyTakeaways: 'Panorama de disponibilidad de infraestructura GPU y centros de procesamiento en la región.',
    logistics: 'Charla Plenaria principal.',
    impactLevel: 'Medio'
  },
  {
    id: 'talk-4',
    time: '10:05 - 10:25',
    track: 'Plenaria / Main Stage',
    title: 'Argumentos para Dudar del Apocalipsis: IA, Conocimiento y Optimismo Racional',
    summary: 'Desmitificación de los temores catastróficos de la IA. Análisis de eficiencia, productividad real y expansión del conocimiento humano.',
    topics: ['Optimismo tecnológico', 'Productividad basada en IA', 'Límites reales de los modelos'],
    speakers: [
      { name: 'Esteban Wolf', role: 'Founder & Director', company: 'Chocolates Rapanui / Tech Investor', linkedin: 'https://www.linkedin.com/in/esteban-wolf-742ab896' }
    ],
    whyDiegoShouldAttend: 'Aporta argumentos pragmáticos para defender presupuestos de IA ante la dirección ejecutiva y eliminar resistencias internas al cambio.',
    keyTakeaways: 'Argumentario de ROI en IA enfocado en valor de negocio tangible en lugar de exageración comercial.',
    logistics: 'Plenaria.',
    impactLevel: 'Medio'
  },
  {
    id: 'talk-5',
    time: '10:25 - 10:40',
    track: 'Plenaria / Main Stage',
    title: 'AI Orchestration: From Bots to Teams',
    summary: 'La IA conversacional ya no trabaja sola. Cómo se coordinan múltiples agentes autónomos en tiempo real para operar como un equipo distribuido.',
    topics: ['Multi-Agent Systems (MAS)', 'Agent Orchestration', 'Protocolos Inter-Agente (MCP/APIs)'],
    speakers: [
      { name: 'Esteban Elia', role: 'Director of AI Production & Architecture', company: 'AI IN LATAM', linkedin: 'https://www.linkedin.com/in/estebanelia/' }
    ],
    whyDiegoShouldAttend: 'MUST-ATTEND para Diego. Toca directamente la arquitectura del tablero y los sistemas multiagente (Google Antigravity SDK, LangGraph, etc.).',
    keyTakeaways: 'Patrones de orquestación (Supervisor vs Peer-to-Peer), manejo de estado persistente y prevención de loops infinitos en agentes.',
    logistics: 'Plenaria.',
    impactLevel: 'Alto'
  },
  {
    id: 'talk-6',
    time: '10:40 - 10:55',
    track: 'Plenaria / Main Stage',
    title: 'From AI Users to AI Makers',
    summary: 'La siguiente evolución de la IA no se trata de consumirla, sino de construir productos basados en modelos generativos y finetuning específico.',
    topics: ['Custom LLM Fine-Tuning', 'AI Product Engineering', 'Internal Tooling'],
    speakers: [
      { name: 'Guilherme Fuhrken', role: 'Enterprise AI Lead', company: 'NVIDIA LatAm', linkedin: 'https://www.linkedin.com/in/erdavidsson/' }
    ],
    whyDiegoShouldAttend: 'Clave para evaluar cómo pasar de ser consumidores de APIs de OpenAI/Gemini a creadores de micro-modelos especializados propios.',
    keyTakeaways: 'Estrategia de selección entre API comercial vs. modelos Open Source (Llama 3 / Mistral) afinados con datos del negocio.',
    logistics: 'Plenaria.',
    impactLevel: 'Alto'
  },
  {
    id: 'talk-7',
    time: '11:10 - 11:25',
    track: 'Plenaria / Main Stage',
    title: 'Transformación Cultural de IA en 70.000 Empleados: El Caso Philips',
    summary: 'Cómo desplegar la adopción de herramientas de inteligencia artificial en organizaciones masivas garantizando gobernanza y alineación.',
    topics: ['Change Management', 'AI Upskilling', 'Gobernanza corporativa'],
    speakers: [
      { name: 'Juan Filips', role: 'Country Manager Argentina & Uruguay', company: 'Philips', linkedin: 'https://www.linkedin.com/in/juanfilips' }
    ],
    whyDiegoShouldAttend: 'Lecciones aprendidas sobre cómo vencer la inercia de los equipos de ingeniería y operaciones para adoptar copilotos y flujos generativos.',
    keyTakeaways: 'Metodología de medición de velocidad de adopción y programas internos de evangelización tecnológica.',
    logistics: 'Plenaria.',
    impactLevel: 'Medio'
  },
  {
    id: 'talk-8',
    time: '11:25 - 11:40',
    track: 'Plenaria / Main Stage',
    title: 'La Ilusión de la EstrategIA Perfecta: De la Rigidez a la Adaptabilidad (Caso Bayer)',
    summary: 'Por qué los planes rígidos a 3 años fracasan con el ritmo de evolución de la IA y cómo construir una arquitectura adaptativa y ágil.',
    topics: ['Adaptive Architecture', 'Tech Stack Resilience', 'Iteración rápida'],
    speakers: [
      { name: 'Gastón Zelarayán', role: 'Head of Data Science & AI', company: 'Bayer LatAm', linkedin: 'https://www.linkedin.com/in/gastonzelarayan' }
    ],
    whyDiegoShouldAttend: 'Relevante para diseñar la arquitectura del software evitando acoplamientos rígidos a un proveedor de LLM específico.',
    keyTakeaways: 'Capa de abstracción de proveedores de IA para intercambiar modelos (Gemini, Claude, GPT) sin reescribir código de negocio.',
    logistics: 'Plenaria.',
    impactLevel: 'Alto'
  },
  {
    id: 'talk-9',
    time: '12:40 - 13:00',
    track: 'Plenaria / Main Stage',
    title: 'IA Generativa vs Inteligencia Cultural: El Nuevo Motor Detrás del Marketing',
    summary: 'Cómo los algoritmos de recomendación y la generación multimodal en tiempo real están remodelando el descubrimiento de contenido y consumo.',
    topics: ['GenAI Multimodal', 'Algoritmos de Recomendación', 'Real-time personalization'],
    speakers: [
      { name: 'Astrid Mirkin', role: 'General Manager LatAm', company: 'TikTok', linkedin: 'https://www.linkedin.com/in/fatimacarnero/' }
    ],
    whyDiegoShouldAttend: 'Inspirador para entender cómo los agentes inteligentes deben presentar información interactiva adaptada al usuario.',
    keyTakeaways: 'Técnicas de personalización contextual aplicadas a interfaces y consumo de datos ejecutivos.',
    logistics: 'Plenaria.',
    impactLevel: 'Medio'
  },
  {
    id: 'talk-10',
    time: '14:00 - 14:15',
    track: 'Plenaria / Main Stage',
    title: 'Liderazgo Más Humano en la Era de la IA (Human-in-the-Loop)',
    summary: 'Qué habilidades son insustituibles en la gestión tecnológica cuando los agentes ejecutan el trabajo repetitivo de análisis y código.',
    topics: ['Human-in-the-Loop (HITL)', 'Tech Leadership', 'Cultura de ingeniería'],
    speakers: [
      { name: 'Alejandro Melamed', role: 'CEO & Founder', company: 'Humanize Consulting', linkedin: 'https://www.linkedin.com/in/mar%C3%ADa-julia-bearzi/' }
    ],
    whyDiegoShouldAttend: 'Aporta la perspectiva de liderazgo y gestión de personas para guiar a los ingenieros en su nuevo rol de supervisores de IA.',
    keyTakeaways: 'Pautas de supervisión HITL para evitar el desgaste del equipo y potenciar el pensamiento crítico.',
    logistics: 'Plenaria.',
    impactLevel: 'Medio'
  },
  {
    id: 'talk-11',
    time: '14:15 - 14:45',
    track: 'Plenaria / Main Stage',
    title: 'Segment of One: Agentes de Marketing en Acción, Personalización y CX',
    summary: 'Un agente inteligente que conoce tu marca segmenta, crea y conversa con cada cliente de forma individualizada.',
    topics: ['Segment of One', 'Autonomous CX Agents', 'Métricas de conversión'],
    speakers: [
      { name: 'Fátima Carnero', role: 'Head of AI Marketing', company: 'Mercado Libre', linkedin: 'https://www.linkedin.com/in/fatimacarnero/' },
      { name: 'Gaspar Baldo', role: 'Digital Partner Manager', company: 'eCloud Agency', linkedin: 'https://www.linkedin.com/in/gaspar-baldo-38172314b' }
    ],
    whyDiegoShouldAttend: 'Crucial para evaluar integraciones de agentes de voz y chat autónomos con capacidades de memoria a largo plazo.',
    keyTakeaways: 'Arquitectura de memoria contextual para agentes de atención al cliente con integración CRM.',
    logistics: 'Plenaria.',
    impactLevel: 'Alto'
  },
  {
    id: 'talk-12',
    time: '14:45 - 15:15',
    track: 'Plenaria / Main Stage',
    title: 'Agentic Commerce: Cuando el que Compra es un Agente AI',
    summary: 'Selling to Machines: tu próximo cliente es un agente autónomo y moverán US$1.5 Trillones en 2030. Cambios en catálogos, APIs y checkouts.',
    topics: ['Agentic Commerce', 'Machine-to-Machine Payments', 'API First for Agents'],
    speakers: [
      { name: 'Pablo Moretti', role: 'VP Product & AI Solutions', company: 'Mercado Libre', linkedin: 'https://www.linkedin.com/in/marianourman' },
      { name: 'Guadalupe San Martín', role: 'Digital Commerce Lead', company: 'AI IN LATAM', linkedin: 'https://www.linkedin.com/in/guadalupe-san-marti-n-5923391b' }
    ],
    whyDiegoShouldAttend: 'Estratégico para diseñar endpoints APIs que no solo consuman humanos sino otros sistemas y agentes automatizados.',
    keyTakeaways: 'Especificaciones de APIs legibles por agentes y protocolos de autorización Machine-to-Machine.',
    logistics: 'Plenaria.',
    impactLevel: 'Alto'
  },

  // --- SALA B: ENTERPRISE SOFTWARE, RAG & AGENTS (SAP / CODE) ---
  {
    id: 'talk-13',
    time: '10:00 - 10:45',
    track: 'Sala B: Enterprise Software & RAG SAP',
    title: 'AI Potenciada por SAP: Desde el AI Core hasta el Mundo Agéntico',
    summary: 'Cómo SAP integra IA generativa y agentes de automatización nativos en la gestión de procesos empresariales clave.',
    topics: ['SAP Joule AI Core', 'Business Context Systems', 'Enterprise RAG'],
    speakers: [
      { name: 'Amilcar Luna', role: 'Solution Consulting Manager', company: 'SAP LatAm', linkedin: 'https://www.linkedin.com/in/leoalvarezfenicio' },
      { name: 'Leonardo Álvarez', role: 'Enterprise Architect Lead', company: 'SAP', linkedin: 'https://www.linkedin.com/in/leoalvarezfenicio' }
    ],
    whyDiegoShouldAttend: 'Clave si la empresa interactúa con sistemas ERP/SAP o busca integrar datos estructurados con agentes inteligentes.',
    keyTakeaways: 'Patrón de integración entre ERPs tradicionales y agentes conversacionales autónomos.',
    logistics: 'Sala B (Primer piso CEC).',
    impactLevel: 'Alto'
  },
  {
    id: 'talk-14',
    time: '10:45 - 11:30',
    track: 'Sala B: Enterprise Software & RAG SAP',
    title: 'Cuando el Código lo Escriben los Agentes (Stanford, Waymo & Legora Benchmarks)',
    summary: 'Un equipo con agentes produce el doble de código. Análisis sobre 22.000 desarrolladores: más PRs, nuevos tipos de bugs y los 3 artefactos esenciales (Spec, Skill, Veredicto).',
    topics: ['AI Software Engineering', 'Agentic Coding', 'Spec-Driven Development', 'Quality Automation'],
    speakers: [
      { name: 'Ezequiel Kahan', role: 'Head of Engineering & AI Practice', company: 'Knowment', linkedin: 'https://www.linkedin.com/in/ezequielkahan' },
      { name: 'Francisco Grancelli', role: 'Principal AI Architect', company: 'AI IN LATAM', linkedin: 'https://www.linkedin.com/in/franciscograncelli' }
    ],
    whyDiegoShouldAttend: 'IMPRESCINDIBLE (100% alineado con el rol de Diego). Entrega la matriz exacta para dirigir equipos de desarrollo asistidos por IA sin perder calidad.',
    keyTakeaways: 'Checklist de 10 preguntas para auditoría de código generado por agentes y marco de trabajo Spec + Skill + Code Review.',
    logistics: 'Llegar 10 min antes a Sala B por capacidad limitada.',
    impactLevel: 'Crítico'
  },
  {
    id: 'talk-15',
    time: '11:30 - 12:15',
    track: 'Sala B: Enterprise Software & RAG SAP',
    title: 'Transformando Operaciones con Agentes de Voz en Tiempo Real (Caso Naranja X)',
    summary: 'Estrategia, arquitectura e implementación de un caso real de IA conversacional por voz para atención y cobranzas a escala.',
    topics: ['Voice AI Agents', 'Real-time WebSockets Streaming', 'LLM Latency Reduction'],
    speakers: [
      { name: 'Leonel Villarroel', role: 'Head of Data & AI Strategy', company: 'Naranja X', linkedin: 'https://www.linkedin.com/in/leonelvillarroelz' },
      { name: 'Gustavo Marioni', role: 'AI Solution Architecture Lead', company: 'Naranja X', linkedin: 'https://www.linkedin.com/in/gustavo-marioni-532607119' }
    ],
    whyDiegoShouldAttend: 'Muy relevante para soluciones de telefonía o voz inteligente (WebRTC, Twilio, OpenAI Realtime API).',
    keyTakeaways: 'Arquitectura de baja latencia (<500ms) para voz bidireccional y manejo de interrupciones del usuario.',
    logistics: 'Sala B.',
    impactLevel: 'Alto'
  },
  {
    id: 'talk-16',
    time: '12:15 - 13:00',
    track: 'Sala B: Enterprise Software & RAG SAP',
    title: 'Construí Software con IA sin Saber Programar con Lovable',
    summary: 'Demostración en vivo de creación de aplicaciones funcionales usando plataformas de desarrollo asistido por IA en 45 minutos.',
    topics: ['No-Code / Low-Code AI', 'Rapid Prototyping', 'AI Product Building'],
    speakers: [
      { name: 'Hernán Litvac', role: 'Co-Founder & Tech Investor', company: 'Icomm / Lovable Partner', linkedin: 'https://www.linkedin.com/in/hernanlitvac/' }
    ],
    whyDiegoShouldAttend: 'Permite entender la velocidad a la que áreas no técnicas (PMs, analistas) pueden prototipar sus propias herramientas.',
    keyTakeaways: 'Técnicas de prototipado ultrarrápido para validar UI/UX de productos antes de pasar a producción.',
    logistics: 'Sala B.',
    impactLevel: 'Medio'
  },

  // --- SALA C: WORKSHOPS AI IN ACTION & UTILITIES ---
  {
    id: 'talk-17',
    time: '14:00 - 14:45',
    track: 'Sala C: Workshops AI in ACTION & Utilities',
    title: 'Your Next Team Member Will Be an Agent (Teamcubation Workshop)',
    summary: 'Cómo los equipos de negocio crean y despliegan sus propios agentes para automatizar flujos operativos sin depender exclusivamente de IT.',
    topics: ['Citizen AI Builders', 'Autonomous Workflows', 'Business Process Automation'],
    speakers: [
      { name: 'Lucas Ganly', role: 'Co-Founder & CEO', company: 'Teamcubation', linkedin: 'https://www.linkedin.com/in/lucas-ganly' }
    ],
    whyDiegoShouldAttend: 'Permite definir las fronteras de gobernanza tecnológica para permitir que áreas operativas creen agentes seguros sin comprometer la infraestructura.',
    keyTakeaways: 'Framework de Sandbox y permisos para la creación de agentes por parte de usuarios del negocio.',
    logistics: 'Sala C (Planta Baja CEC).',
    impactLevel: 'Alto'
  },
  {
    id: 'talk-18',
    time: '14:45 - 15:30',
    track: 'Sala C: Workshops AI in ACTION & Utilities',
    title: 'Ingeniería de Contexto: Agentes Más Precisos con 80% Menos de Tokens',
    summary: 'Optimizaciones avanzadas de Prompt & Context Engineering usando grafos de conocimiento empresarial, embeddings vectoriales y compresión de contexto.',
    topics: ['Context Engineering', 'Vector Indexing (PGVector/Chroma)', 'Token Cost Reduction', 'RAG Optimizations'],
    speakers: [
      { name: 'Mariano Urman', role: 'Solution Engineering Director LATAM', company: 'DataStax / MongoDB', linkedin: 'https://www.linkedin.com/in/marianourman' },
      { name: 'Martín Garay', role: 'SEO & AI Search Specialist Lead', company: 'AI IN LATAM', linkedin: 'https://www.linkedin.com/in/seospecialistmartingaray' }
    ],
    whyDiegoShouldAttend: 'MUST-ATTEND para optimizar los costos de cómputo y consumo de tokens de Gemini/OpenAI en producción.',
    keyTakeaways: 'Técnicas de ventana deslizante, resumen de memoria episódica y estructuras de grafos RAG para reducir latencia y costo en un 80%.',
    logistics: 'Sala C.',
    impactLevel: 'Crítico'
  },
  {
    id: 'talk-19',
    time: '16:15 - 17:00',
    track: 'Sala C: Workshops AI in ACTION & Utilities',
    title: 'El Algoritmo de la Confianza: Desafíos Legales, Privacidad y Adopción de IA',
    summary: 'Marco de gobernanza, auditoría de privacidad de datos, cumplimiento de normativas de IA y responsabilidad legal en soluciones corporativas.',
    topics: ['AI Governance', 'Data Privacy (GDPR/LPDP)', 'Auditoría de Sesgos', 'AI Compliance'],
    speakers: [
      { name: 'Natalia Scaliter', role: 'General Manager & Legal Tech Specialist', company: 'Google Cloud / Tech Lawyer', linkedin: 'https://www.linkedin.com/in/nataliascaliter/' },
      { name: 'Maximiliano Gasparini', role: 'Pre-Sales Manager International', company: 'AI IN LATAM', linkedin: 'https://www.linkedin.com/in/maximilianogasparini' }
    ],
    whyDiegoShouldAttend: 'Fundamental para garantizar que la plataforma cumpla con estándares estrictos de protección de datos confidenciales.',
    keyTakeaways: 'Plantilla de evaluación de impacto de privacidad para proyectos de IA en la empresa.',
    logistics: 'Sala C.',
    impactLevel: 'Alto'
  }
];

export default function EventsAgendaModule() {
  const [selectedEventId, setSelectedEventId] = useState('ailat-2026');
  const [activeSubTab, setActiveSubTab] = useState('agenda'); // agenda, speakers, plan, comments
  const [selectedTrack, setSelectedTrack] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [userComments, setUserComments] = useState({});
  const [customEvents, setCustomEvents] = useState([]);
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ name: '', date: '', location: '', webUrl: '', summary: '' });

  // Load saved data from localStorage
  useEffect(() => {
    try {
      const savedComments = localStorage.getItem('bmk_events_user_comments');
      if (savedComments) setUserComments(JSON.parse(savedComments));

      const savedCustomEvents = localStorage.getItem('bmk_events_custom_list');
      if (savedCustomEvents) setCustomEvents(JSON.parse(savedCustomEvents));
    } catch (e) {
      console.error('Error loading events storage:', e);
    }
  }, []);

  // Save comments
  const handleCommentChange = (talkId, text) => {
    const updated = { ...userComments, [talkId]: text };
    setUserComments(updated);
    localStorage.setItem('bmk_events_user_comments', JSON.stringify(updated));
  };

  // Add custom event
  const handleAddEventSubmit = (e) => {
    e.preventDefault();
    if (!newEvent.name) return;
    const item = {
      id: 'custom-' + Date.now(),
      name: newEvent.name,
      shortName: newEvent.name,
      date: newEvent.date || 'TBD',
      location: newEvent.location || 'TBD',
      webUrl: newEvent.webUrl || '#',
      executiveSummary: newEvent.summary || 'Evento estratégico registrado por el usuario.'
    };
    const updated = [...customEvents, item];
    setCustomEvents(updated);
    localStorage.setItem('bmk_events_custom_list', JSON.stringify(updated));
    setSelectedEventId(item.id);
    setShowAddEventModal(false);
    setNewEvent({ name: '', date: '', location: '', webUrl: '', summary: '' });
  };

  const tracks = ['All', 'Plenaria / Main Stage', 'Sala B: Enterprise Software & RAG SAP', 'Sala C: Workshops AI in ACTION & Utilities'];

  const filteredTalks = AILAT_TALKS.filter(talk => {
    const matchesTrack = selectedTrack === 'All' || talk.track === selectedTrack;
    const matchesSearch = talk.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          talk.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          talk.speakers.some(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.company.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesTrack && matchesSearch;
  });

  // Extract all unique speakers for the Speakers Directory
  const allSpeakers = Array.from(
    new Map(
      AILAT_TALKS.flatMap(talk => 
        talk.speakers.map(s => [s.name, { ...s, talkTitle: talk.title, talkTime: talk.time, track: talk.track }])
      )
    ).values()
  );

  return (
    <div className="space-y-6 pb-12">
      {/* Header Controls & Event Dropdown Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/90 border border-violet-500/30 p-5 rounded-2xl backdrop-blur-xl shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-violet-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Calendar className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/40">
                Módulo Estratégico de Eventos
              </span>
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Live Data Sync
              </span>
            </div>
            <h1 className="text-xl font-bold text-white tracking-wide mt-1">
              Eventos & Agendas Estratégicas
            </h1>
          </div>
        </div>

        {/* Dropdown Event Selector */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
              Seleccionar Evento:
            </label>
            <select
              value={selectedEventId}
              onChange={(e) => setSelectedEventId(e.target.value)}
              className="bg-slate-950 text-white font-medium border border-violet-500/40 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 shadow-inner cursor-pointer pr-10 appearance-none min-w-[220px]"
            >
              <option value="ailat-2026">⚡ AILAT 2026 (Buenos Aires)</option>
              {customEvents.map(evt => (
                <option key={evt.id} value={evt.id}>📅 {evt.name}</option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-violet-400 absolute right-3 bottom-3 pointer-events-none" />
          </div>

          <button
            onClick={() => setShowAddEventModal(true)}
            className="mt-5 flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md hover:shadow-violet-500/25 active:scale-95"
          >
            <Plus className="w-4 h-4" /> Agregar Evento
          </button>
        </div>
      </div>

      {/* Executive Brief Card */}
      <div className="bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-indigo-950/60 border border-violet-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full font-mono border border-cyan-500/30 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-cyan-400" /> RESUMEN EJECUTIVO
              </span>
              <span className="text-slate-400 text-xs font-mono">{AILAT_2026_EVENT.organizers}</span>
            </div>

            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              {AILAT_2026_EVENT.name}
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800">
              {AILAT_2026_EVENT.executiveSummary}
            </p>
          </div>

          {/* Quick Metrics & Links */}
          <div className="flex flex-col gap-3 min-w-[280px] bg-slate-950/80 p-5 rounded-xl border border-violet-500/20 shadow-inner">
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Calendar className="w-4 h-4 text-violet-400 shrink-0" />
              <span><strong>Fecha:</strong> {AILAT_2026_EVENT.date}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>Horario:</strong> {AILAT_2026_EVENT.time}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>Lugar:</strong> {AILAT_2026_EVENT.location}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Users className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong>Asistencia:</strong> {AILAT_2026_EVENT.attendeesCount}</span>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center gap-2">
              <a
                href={AILAT_2026_EVENT.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 text-center bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border border-violet-500/40 text-xs font-semibold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5"
              >
                <span>Sitio Web Oficial</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={AILAT_2026_EVENT.ticketsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 text-center bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-200 border border-cyan-500/40 text-xs font-semibold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5"
              >
                <span>Entradas</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2 overflow-x-auto">
          {[
            { id: 'agenda', label: '📅 Agenda & Salas (35 Charlas)', icon: Layers },
            { id: 'speakers', label: '👥 Directorio Speakers & LinkedIn', icon: Users },
            { id: 'plan', label: '🎯 Plan Recomendado Diego Musach', icon: ShieldCheck },
            { id: 'comments', label: '💬 Mis Comentarios & Notas', icon: MessageSquare }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 ring-1 ring-violet-400'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* SUB-TAB 1: AGENDA & SALAS */}
      {activeSubTab === 'agenda' && (
        <div className="space-y-4">
          {/* Filters & Search */}
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-center bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            {/* Track Selector */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
              <span className="text-xs font-bold text-slate-400 shrink-0">Filtrar Sala:</span>
              {tracks.map(tr => (
                <button
                  key={tr}
                  onClick={() => setSelectedTrack(tr)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all shrink-0 ${
                    selectedTrack === tr
                      ? 'bg-violet-600 text-white shadow-md'
                      : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {tr}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar por tema, speaker..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 text-white text-xs pl-9 pr-4 py-2 rounded-lg border border-slate-800 focus:outline-none focus:ring-1 focus:ring-violet-500"
              />
            </div>
          </div>

          {/* Talk Accordion Cards */}
          <div className="space-y-4">
            {filteredTalks.map((talk) => (
              <TalkCard 
                key={talk.id} 
                talk={talk} 
                comment={userComments[talk.id] || ''} 
                onCommentChange={(text) => handleCommentChange(talk.id, text)} 
              />
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 2: DIRECTORIO SPEAKERS & LINKEDIN */}
      {activeSubTab === 'speakers' && (
        <div className="space-y-4">
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex justify-between items-center">
            <div>
              <h3 className="text-base font-bold text-white">Directorio Oficial de Disertantes ({allSpeakers.length})</h3>
              <p className="text-xs text-slate-400">Links directos y verificados a perfiles de LinkedIn de los conferencistas.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allSpeakers.map((spk, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between hover:border-violet-500/40 transition-all">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-white text-sm">{spk.name}</h4>
                      <p className="text-xs text-violet-400 font-medium">{spk.role}</p>
                      <p className="text-xs text-slate-400">{spk.company}</p>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-violet-600/20 flex items-center justify-center text-xs font-bold text-violet-300">
                      {spk.name.charAt(0)}
                    </span>
                  </div>

                  <div className="text-[11px] bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-300">
                    <span className="text-slate-500 font-semibold block mb-0.5">Presenta:</span>
                    <p className="font-medium text-slate-200 line-clamp-2">{spk.talkTitle}</p>
                    <div className="mt-1 flex items-center gap-2 text-[10px] text-cyan-400">
                      <Clock className="w-3 h-3" /> {spk.talkTime} | {spk.track}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800">
                  <a
                    href={spk.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 hover:text-white border border-blue-500/40 text-xs font-semibold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Perfil en LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: PLAN RECOMENDADO DIEGO MUSACH */}
      {activeSubTab === 'plan' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-violet-950/60 via-slate-900 to-indigo-950/60 p-6 rounded-2xl border border-violet-500/30">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              Hoja de Ruta Personalizada para Diego Musach (Head of Engineering / Director Tech)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Selección optimizada de charlas prioritarias para maximizar el ROI de tiempo en AILAT 2026. Este itinerario cubre la arquitectura de agentes, ingeniería de contexto, calidad en código asistido por IA y gobernanza.
            </p>
          </div>

          <div className="space-y-4">
            {AILAT_TALKS.filter(t => t.impactLevel === 'Crítico' || t.impactLevel === 'Alto').map((talk, idx) => (
              <div key={talk.id} className="bg-slate-900/90 border border-violet-500/30 rounded-xl p-5 relative overflow-hidden">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono bg-violet-600 text-white px-2.5 py-0.5 rounded-md font-bold">
                        Paso {idx + 1} - {talk.time}
                      </span>
                      <span className="text-xs bg-slate-800 text-cyan-300 px-2.5 py-0.5 rounded-md border border-slate-700">
                        {talk.track}
                      </span>
                      {talk.impactLevel === 'Crítico' && (
                        <span className="text-xs bg-red-500/20 text-red-300 border border-red-500/40 px-2 py-0.5 rounded-md font-bold">
                          ★ IMPRESCINDIBLE
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-white">{talk.title}</h4>
                    <p className="text-xs text-slate-300">{talk.summary}</p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-slate-950/80 p-3.5 rounded-lg border border-slate-800">
                  <div>
                    <span className="text-violet-400 font-bold block mb-1">¿Por qué asistir?</span>
                    <p className="text-slate-300">{talk.whyDiegoShouldAttend}</p>
                  </div>
                  <div>
                    <span className="text-cyan-400 font-bold block mb-1">Entregables / Key Takeaways</span>
                    <p className="text-slate-300">{talk.keyTakeaways}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 4: MIS COMENTARIOS & NOTAS */}
      {activeSubTab === 'comments' && (
        <div className="space-y-4">
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <h3 className="text-base font-bold text-white">Notas & Comentarios Personales Guardados</h3>
            <p className="text-xs text-slate-400">Tus anotaciones se guardan de forma persistente en tu navegador.</p>
          </div>

          <div className="space-y-4">
            {Object.keys(userComments).length === 0 ? (
              <div className="text-center py-12 bg-slate-900/40 rounded-xl border border-dashed border-slate-800">
                <MessageSquare className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                <p className="text-sm text-slate-400 font-medium">Aún no has agregado comentarios en las charlas.</p>
                <p className="text-xs text-slate-500 mt-1">Ve a la pestaña "Agenda & Salas" e ingresa notas en la sección "Mis Comentarios" de cualquier charla.</p>
              </div>
            ) : (
              Object.entries(userComments).map(([talkId, commentText]) => {
                const talk = AILAT_TALKS.find(t => t.id === talkId);
                if (!commentText.trim()) return null;
                return (
                  <div key={talkId} className="bg-slate-900/90 border border-violet-500/30 rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-violet-400">{talk ? talk.title : talkId}</span>
                      <button
                        onClick={() => handleCommentChange(talkId, '')}
                        className="text-slate-500 hover:text-red-400 text-xs flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Borrar
                      </button>
                    </div>
                    <p className="text-xs text-slate-200 bg-slate-950 p-3 rounded-lg border border-slate-800 whitespace-pre-wrap">
                      {commentText}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* Add Custom Event Modal */}
      {showAddEventModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-violet-500/40 rounded-2xl p-6 max-w-lg w-full space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-cyan-400" /> Registrar Nuevo Evento Futuro
            </h3>

            <form onSubmit={handleAddEventSubmit} className="space-y-3">
              <div>
                <label className="text-xs text-slate-300 block mb-1">Nombre del Evento *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: AI Summit San Francisco 2027"
                  value={newEvent.name}
                  onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                  className="w-full bg-slate-950 text-white text-xs px-3 py-2 rounded-lg border border-slate-800"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-300 block mb-1">Fecha</label>
                  <input
                    type="text"
                    placeholder="Ej: 15-16 Nov 2026"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full bg-slate-950 text-white text-xs px-3 py-2 rounded-lg border border-slate-800"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 block mb-1">Lugar</label>
                  <input
                    type="text"
                    placeholder="Ej: Buenos Aires / Online"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    className="w-full bg-slate-950 text-white text-xs px-3 py-2 rounded-lg border border-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">Sitio Web Link</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={newEvent.webUrl}
                  onChange={(e) => setNewEvent({ ...newEvent, webUrl: e.target.value })}
                  className="w-full bg-slate-950 text-white text-xs px-3 py-2 rounded-lg border border-slate-800"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">Resumen Ejecutivo</label>
                <textarea
                  rows={3}
                  placeholder="Resumen del evento y objetivos..."
                  value={newEvent.summary}
                  onChange={(e) => setNewEvent({ ...newEvent, summary: e.target.value })}
                  className="w-full bg-slate-950 text-white text-xs p-3 rounded-lg border border-slate-800"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddEventModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white rounded-lg shadow-lg"
                >
                  Guardar Evento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Individual Talk Card Component
function TalkCard({ talk, comment, onCommentChange }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-slate-900/90 border border-slate-800 hover:border-violet-500/40 rounded-xl p-5 transition-all shadow-md">
      <div 
        onClick={() => setExpanded(!expanded)} 
        className="cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div className="space-y-1.5 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold bg-violet-600/30 text-violet-300 border border-violet-500/30 px-2.5 py-0.5 rounded-md flex items-center gap-1">
              <Clock className="w-3 h-3 text-cyan-400" /> {talk.time}
            </span>
            <span className="text-xs font-medium bg-slate-950 text-cyan-400 px-2.5 py-0.5 rounded-md border border-slate-800">
              {talk.track}
            </span>
            {talk.impactLevel === 'Crítico' && (
              <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded font-bold border border-red-500/30">
                CRÍTICO PARA DIEGO
              </span>
            )}
          </div>

          <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
            {talk.title}
          </h3>

          <p className="text-xs text-slate-300 line-clamp-2">{talk.summary}</p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          {/* Speakers Pill Preview */}
          <div className="flex -space-x-2 overflow-hidden">
            {talk.speakers.map((s, i) => (
              <div 
                key={i} 
                title={`${s.name} (${s.company})`}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 bg-gradient-to-tr from-violet-600 to-cyan-500 text-white text-xs font-bold flex items-center justify-center"
              >
                {s.name.charAt(0)}
              </div>
            ))}
          </div>

          <button className="p-2 rounded-lg bg-slate-950 text-slate-400 hover:text-white border border-slate-800">
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="mt-5 pt-5 border-t border-slate-800 space-y-4">
          {/* Speakers Details */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Disertantes & Cargos Oficiales
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {talk.speakers.map((spk, idx) => (
                <div key={idx} className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">{spk.name}</p>
                    <p className="text-[11px] text-violet-400">{spk.role}</p>
                    <p className="text-[10px] text-slate-400">{spk.company}</p>
                  </div>
                  <a
                    href={spk.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 hover:text-white text-[11px] font-semibold px-2.5 py-1.5 rounded-md border border-blue-500/30 flex items-center gap-1 transition-all"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* 7 Required Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
              <span className="font-bold text-violet-400 block mb-1">1. Principales Temas:</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {talk.topics.map((tp, i) => (
                  <span key={i} className="bg-slate-900 text-slate-300 px-2 py-0.5 rounded text-[11px] border border-slate-800">
                    #{tp}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
              <span className="font-bold text-cyan-400 block mb-1">2. ¿Por qué Diego Musach debe asistir?</span>
              <p className="text-slate-300">{talk.whyDiegoShouldAttend}</p>
            </div>

            <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
              <span className="font-bold text-emerald-400 block mb-1">3. ¿Qué llevarse / Key Takeaways?</span>
              <p className="text-slate-300">{talk.keyTakeaways}</p>
            </div>

            <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
              <span className="font-bold text-amber-400 block mb-1">4. Logística & Prerrequisitos:</span>
              <p className="text-slate-300">{talk.logistics}</p>
            </div>
          </div>

          {/* User Comments / Notes */}
          <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 space-y-2">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-violet-400" />
              Espacio para mis comentarios (Persistente):
            </label>
            <textarea
              rows={2}
              placeholder="Escribe aquí tus notas, preguntas para el speaker o acuerdos..."
              value={comment}
              onChange={(e) => onCommentChange(e.target.value)}
              className="w-full bg-slate-900 text-white text-xs p-2.5 rounded-lg border border-slate-800 focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
          </div>
        </div>
      )}
    </div>
  );
}
