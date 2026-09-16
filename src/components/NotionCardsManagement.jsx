import React, { useState, useEffect } from 'react';
import { 
  CheckSquare, MessageSquare, Send, CheckCircle2, Clock, AlertCircle, 
  Search, Filter, UserCheck, RefreshCw, Plus, Sparkles, XCircle, Check
} from 'lucide-react';

const INITIAL_TEAM_CARDS = [
  {
    id: 'mario-1',
    title: 'Evaluación de Desempeño & Cierre de Wynn (Android/Amazon)',
    responsable: 'Mario Maqueda',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    priority: 'P1 - Crítico',
    status: 'Completado',
    closedAt: '16 Sep 2026',
    project: 'Android / OTT Wynn',
    summary: 'Cierre de desarrollos y corrección de errores en Wynn (Amazon y Android) + STB Elvago.',
    transcript: 'Mario entregó el reporte de avance de 200hs de personalización remota y cierre de WinAmazon. Se acordó esquema de revisiones mensuales.',
    comments: [
      { author: 'Diego Musach', date: '16 Sep 2026 10:15', text: 'Tarjetas de Mario revisadas y aprobadas para cierre.' }
    ]
  },
  {
    id: 'mario-2',
    title: 'Integración Launcher & Fix Botón Back en App Amazon (SuperCab)',
    responsable: 'Mario Maqueda',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    priority: 'P1 - Crítico',
    status: 'Completado',
    closedAt: '16 Sep 2026',
    project: 'Amazon FireTV',
    summary: 'Solución del crash en el login de la app de Amazon y persistencia del reproductor.',
    transcript: 'Corrección de fallas de audio/subtítulos en Supercabo Amazon y prueba de Launcher.',
    comments: [
      { author: 'Diego Musach', date: '16 Sep 2026 10:30', text: 'Verificada la persistencia de video al salir de audio/subtítulos.' }
    ]
  },
  {
    id: 'mario-3',
    title: 'Migración a Kotlin & Integración de Agentes con IA',
    responsable: 'Mario Maqueda',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    priority: 'P2 - Alto',
    status: 'Completado',
    closedAt: '16 Sep 2026',
    project: 'Refactor Core',
    summary: 'Migración de código heredado a Kotlin utilizando agentes de IA en proyecto paralelo.',
    transcript: 'Duplicación del proyecto y conversión modular de paquetes principales.',
    comments: [
      { author: 'Diego Musach', date: '16 Sep 2026 11:00', text: 'Migración Kotlin aprobada.' }
    ]
  },
  {
    id: 'camilo-1',
    title: 'Campaña Gödel: Auditoría de 502 Inspecciones en Malargüe',
    responsable: 'Camilo Uribe',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    priority: 'P1 - Crítico',
    status: 'En Progreso',
    project: 'EDEMSA Inspecciones',
    summary: 'Consolidado de 502 OS ejecutadas con 187 recambios electromecánicos a electrónicos.',
    transcript: 'Se exige tabla dinámica con drill-down a 1-click exportable a Excel para las 7 cuadrillas.',
    comments: [
      { author: 'Diego Musach', date: '15 Sep 2026 18:00', text: 'Necesitamos el cruzamiento fino con las 5 irregularidades y ECNR esta semana.' }
    ]
  },
  {
    id: 'enrique-1',
    title: 'Cluster Ceph & Diagnóstico de Inconsistencias GIS en EDEMSA',
    responsable: 'Enrique Bevilacqua',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    priority: 'P1 - Crítico',
    status: 'En Progreso',
    project: 'Infraestructura & GIS',
    summary: 'Verificación de llaves que figuran abiertas pero registran carga real en el GIS de EDEMSA.',
    transcript: 'Coordinación con Felipe para preparar evidencia previa a reunión con Nicolás.',
    comments: [
      { author: 'Diego Musach', date: '15 Sep 2026 19:30', text: 'Revisar modelo CB10 y costos de Amazon.' }
    ]
  },
  {
    id: 'leonard-1',
    title: 'Bromteck 4.0: Preloading para Smart TVs & Rediseño EPG',
    responsable: 'Leonard Amaya',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80',
    priority: 'P2 - Alto',
    status: 'En Progreso',
    project: 'Smart TV Frontend',
    summary: 'Optimización de carga de EPG en bloques para Samsung/LG de bajos recursos.',
    transcript: 'Rebranding visual, login QR/UDI y sidebar responsivo.',
    comments: [
      { author: 'Diego Musach', date: '14 Sep 2026 16:00', text: 'Asegurar paridad con Android TV.' }
    ]
  }
];

export default function NotionCardsManagement({ currentUser }) {
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem('bp_notion_cards_storage_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {
        console.error('Error parsing saved cards:', e);
      }
    }
    return INITIAL_TEAM_CARDS;
  });

  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'open', 'closed'
  const [filterMember, setFilterMember] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCardId, setSelectedCardId] = useState(cards[0]?.id || null);
  const [commentText, setCommentText] = useState('');
  const [saveToast, setSaveToast] = useState(false);

  // Auto-save to localStorage on every update
  useEffect(() => {
    localStorage.setItem('bp_notion_cards_storage_v2', JSON.stringify(cards));
  }, [cards]);

  // Handle toggling card status (Cerrada vs Abierta)
  const handleToggleCardStatus = (cardId) => {
    const today = new Date().toLocaleDateString('es-AR', { day: '2-digit', month: 'short', year: 'numeric' });
    const userName = currentUser?.name || currentUser?.username || 'Diego Musach';

    setCards(prevCards => prevCards.map(card => {
      if (card.id === cardId) {
        const isNowClosed = card.status !== 'Completado';
        const newStatus = isNowClosed ? 'Completado' : 'En Progreso';
        
        const newComment = {
          author: userName,
          date: new Date().toLocaleString('es-AR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }),
          text: isNowClosed 
            ? `🟢 Tarjeta MARCADA COMO CERRADA por ${userName}.` 
            : `↺ Tarjeta REABIERTA por ${userName}.`
        };

        return {
          ...card,
          status: newStatus,
          closedAt: isNowClosed ? today : null,
          comments: [...(card.comments || []), newComment]
        };
      }
      return card;
    }));

    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  // Handle adding a new comment
  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText.trim() || !selectedCardId) return;

    const userName = currentUser?.name || currentUser?.username || 'Diego Musach';
    const newComment = {
      author: userName,
      date: new Date().toLocaleString('es-AR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }),
      text: commentText.trim()
    };

    setCards(prevCards => prevCards.map(card => {
      if (card.id === selectedCardId) {
        return {
          ...card,
          comments: [...(card.comments || []), newComment]
        };
      }
      return card;
    }));

    setCommentText('');
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  // Filtered Cards list
  const filteredCards = cards.filter(card => {
    const matchesStatus = 
      filterStatus === 'all' || 
      (filterStatus === 'open' && card.status !== 'Completado') ||
      (filterStatus === 'closed' && card.status === 'Completado');

    const matchesMember = 
      filterMember === 'all' || 
      card.responsable.toLowerCase().includes(filterMember.toLowerCase());

    const matchesSearch = 
      searchTerm === '' ||
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.responsable.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.summary.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesMember && matchesSearch;
  });

  const selectedCard = cards.find(c => c.id === selectedCardId) || filteredCards[0] || cards[0];

  // Calculated Metrics
  const totalCount = cards.length;
  const closedCount = cards.filter(c => c.status === 'Completado').length;
  const openCount = totalCount - closedCount;
  const closedPercentage = totalCount > 0 ? Math.round((closedCount / totalCount) * 100) : 0;

  // Mario specific count
  const marioCards = cards.filter(c => c.responsable.includes('Mario'));
  const marioClosed = marioCards.filter(c => c.status === 'Completado').length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Toast Notification */}
      {saveToast && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 9999,
          padding: '12px 20px',
          background: 'rgba(16, 185, 129, 0.95)',
          color: '#fff',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(16, 185, 129, 0.4)',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <CheckCircle2 size={20} />
          <span>¡Guardado permanente en memoria local y estado del sistema!</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="glass-panel" style={{
        padding: '28px',
        background: 'linear-gradient(135deg, rgba(7, 15, 33, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%)',
        border: '1px solid rgba(16, 185, 129, 0.4)',
        borderRadius: '20px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span className="glass-pill badge-success" style={{ fontSize: '0.75rem' }}>
                <CheckSquare size={14} /> Módulo de Seguimiento & Cierre de Tarjetas
              </span>
              <span className="glass-pill badge-info" style={{ fontSize: '0.75rem' }}>
                Auto-Guardado Permanente Activo
              </span>
            </div>
            <h2 style={{ fontSize: '2rem', margin: '4px 0 8px 0' }} className="gradient-text">
              Tablero de Tareas Notion & Criterios de Cierre por Integrante
            </h2>
            <p style={{ color: 'var(--text-subtle)', fontSize: '0.95rem', maxWidth: '850px', margin: 0 }}>
              Gestioná las tareas del equipo (Mario Maqueda, Camilo Uribe, Enrique Bevilacqua, etc.). Marcá tarjetas como <strong>Cerradas / Completadas</strong> con 1-click y escribí comentarios con persistencia garantizada.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <div className="glass-panel" style={{ padding: '12px 18px', background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.3)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tarjetas Cerradas</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981', marginTop: '2px' }}>
                {closedCount} / {totalCount} ({closedPercentage}%)
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '12px 18px', background: 'rgba(0, 242, 254, 0.1)', borderColor: 'rgba(0, 242, 254, 0.3)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: '#00f2fe', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Foco Mario Maqueda</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00f2fe', marginTop: '2px' }}>
                {marioClosed} / {marioCards.length} Cerradas
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar Filters & Controls */}
      <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Status Toggle Tabs */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setFilterStatus('all')}
            className="glass-pill"
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              background: filterStatus === 'all' ? 'rgba(0, 242, 254, 0.2)' : 'transparent',
              borderColor: filterStatus === 'all' ? '#00f2fe' : 'rgba(255,255,255,0.1)',
              color: filterStatus === 'all' ? '#00f2fe' : 'var(--text-subtle)',
              fontWeight: filterStatus === 'all' ? 700 : 500
            }}
          >
            📋 Todas ({totalCount})
          </button>

          <button
            onClick={() => setFilterStatus('open')}
            className="glass-pill"
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              background: filterStatus === 'open' ? 'rgba(245, 158, 11, 0.2)' : 'transparent',
              borderColor: filterStatus === 'open' ? '#f59e0b' : 'rgba(255,255,255,0.1)',
              color: filterStatus === 'open' ? '#f59e0b' : 'var(--text-subtle)',
              fontWeight: filterStatus === 'open' ? 700 : 500
            }}
          >
            🔴 Pendientes ({openCount})
          </button>

          <button
            onClick={() => setFilterStatus('closed')}
            className="glass-pill"
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              background: filterStatus === 'closed' ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
              borderColor: filterStatus === 'closed' ? '#10b981' : 'rgba(255,255,255,0.1)',
              color: filterStatus === 'closed' ? '#10b981' : 'var(--text-subtle)',
              fontWeight: filterStatus === 'closed' ? 700 : 500
            }}
          >
            🟢 Cerradas / Completadas ({closedCount})
          </button>
        </div>

        {/* Member Selector */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <select
            value={filterMember}
            onChange={(e) => setFilterMember(e.target.value)}
            className="glass-input"
            style={{ padding: '8px 14px', borderRadius: '8px', fontSize: '0.85rem' }}
          >
            <option value="all">👤 Todos los Colaboradores</option>
            <option value="Mario">Mario Maqueda ({marioClosed}/{marioCards.length} Cerradas)</option>
            <option value="Camilo">Camilo Uribe</option>
            <option value="Enrique">Enrique Bevilacqua</option>
            <option value="Leonard">Leonard Amaya</option>
          </select>

          {/* Search Box */}
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Buscar tema o palabra clave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="glass-input"
              style={{ padding: '8px 14px 8px 36px', borderRadius: '8px', fontSize: '0.85rem', width: '220px' }}
            />
            <Search size={15} color="var(--text-subtle)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
        </div>

      </div>

      {/* Main Content Layout: List on Left, Detail & Actions on Right */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(350px, 400px) 1fr', gap: '24px', alignItems: 'start' }}>
        
        {/* Left Side: Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '720px', overflowY: 'auto', paddingRight: '4px' }}>
          {filteredCards.length === 0 ? (
            <div className="glass-panel" style={{ padding: '30px', textAlign: 'center', color: 'var(--text-subtle)' }}>
              No hay tarjetas que coincidan con los filtros seleccionados.
            </div>
          ) : (
            filteredCards.map((card) => {
              const isSelected = selectedCard?.id === card.id;
              const isClosed = card.status === 'Completado';

              return (
                <div
                  key={card.id}
                  onClick={() => setSelectedCardId(card.id)}
                  className="glass-panel glass-panel-hover"
                  style={{
                    padding: '16px',
                    cursor: 'pointer',
                    borderColor: isSelected ? '#00f2fe' : isClosed ? 'rgba(16, 185, 129, 0.4)' : 'rgba(255,255,255,0.08)',
                    background: isSelected ? 'rgba(0, 242, 254, 0.08)' : isClosed ? 'rgba(16, 185, 129, 0.05)' : 'var(--bg-card)',
                    borderLeft: isClosed ? '5px solid #10b981' : '5px solid #f59e0b'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <img src={card.avatar} alt={card.responsable} style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }} />
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff' }}>{card.responsable}</span>
                    </div>

                    <span 
                      className={`glass-pill ${isClosed ? 'badge-success' : 'badge-warning'}`}
                      style={{ fontSize: '0.7rem', padding: '3px 8px' }}
                    >
                      {isClosed ? '🟢 CERRADA' : '🔴 EN PROGRESO'}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '0.92rem', color: '#fff', margin: '4px 0 8px 0', lineHeight: '1.4' }}>
                    {card.title}
                  </h4>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                    <span>{card.project}</span>
                    <span>💬 {(card.comments || []).length} comentarios</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Side: Selected Card Details & Interactive Actions */}
        {selectedCard ? (
          <div className="glass-panel" style={{ padding: '28px', border: '1px solid rgba(0, 242, 254, 0.3)' }}>
            
            {/* Header Action Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '20px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <img src={selectedCard.avatar} alt={selectedCard.responsable} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '2px solid #00f2fe' }} />
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{selectedCard.responsable}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{selectedCard.project} • {selectedCard.priority}</div>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.4rem', color: '#fff', margin: '8px 0 4px 0' }} className="gradient-text">
                  {selectedCard.title}
                </h3>
              </div>

              {/* TOGGLE CLOSE/REOPEN BUTTON */}
              <button
                onClick={() => handleToggleCardStatus(selectedCard.id)}
                className={selectedCard.status === 'Completado' ? 'btn-secondary' : 'btn-primary'}
                style={{
                  padding: '12px 20px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  background: selectedCard.status === 'Completado' ? 'rgba(245, 158, 11, 0.2)' : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  borderColor: selectedCard.status === 'Completado' ? '#f59e0b' : '#10b981',
                  color: selectedCard.status === 'Completado' ? '#f59e0b' : '#ffffff'
                }}
              >
                {selectedCard.status === 'Completado' ? (
                  <>
                    <RefreshCw size={18} />
                    <span>↺ Reabrir Tarjeta</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 size={18} />
                    <span>✓ MARCAR COMO CERRADA</span>
                  </>
                )}
              </button>
            </div>

            {/* Status Summary Banner */}
            <div style={{
              padding: '14px 20px',
              borderRadius: '12px',
              marginBottom: '20px',
              background: selectedCard.status === 'Completado' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
              border: selectedCard.status === 'Completado' ? '1px solid #10b981' : '1px solid #f59e0b',
              color: selectedCard.status === 'Completado' ? '#10b981' : '#f59e0b',
              display: 'flex',
              alignItems: 'center',
              justify: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {selectedCard.status === 'Completado' ? <CheckCircle2 size={20} /> : <Clock size={20} />}
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                  Estado Actual: {selectedCard.status === 'Completado' ? `COMPLETADO / CERRADO (Registrado ${selectedCard.closedAt || 'Hoy'})` : 'PENDIENTE / EN PROGRESO'}
                </span>
              </div>
              <span style={{ fontSize: '0.8rem', opacity: 0.9 }}>
                ID: <code>{selectedCard.id}</code>
              </span>
            </div>

            {/* Transcript & Summary */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '0.9rem', color: '#00f2fe', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Resumen Ejecutivo & Contexto
              </h4>
              <div style={{ padding: '16px', background: 'rgba(15, 23, 42, 0.6)', borderRadius: '10px', fontSize: '0.9rem', color: '#e2e8f0', lineHeight: '1.6', marginBottom: '12px' }}>
                {selectedCard.summary}
              </div>

              {selectedCard.transcript && (
                <div style={{ padding: '14px', background: 'rgba(7, 10, 18, 0.8)', borderRadius: '8px', borderLeft: '3px solid #00f2fe', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  <strong>Minuta / Detalle:</strong> {selectedCard.transcript}
                </div>
              )}
            </div>

            {/* Comments List & Instant Posting */}
            <div>
              <h4 style={{ fontSize: '0.9rem', color: '#fff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageSquare size={16} color="#00f2fe" />
                 Historial de Comentarios & Registro ({(selectedCard.comments || []).length})
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px', maxHeight: '220px', overflowY: 'auto' }}>
                {(selectedCard.comments || []).length === 0 ? (
                  <div style={{ padding: '12px', fontStyle: 'italic', color: 'var(--text-subtle)', fontSize: '0.85rem' }}>
                    Sin comentarios aún. Escribí una observación abajo.
                  </div>
                ) : (
                  selectedCard.comments.map((cmt, idx) => (
                    <div key={idx} style={{ padding: '12px 16px', background: 'rgba(15, 23, 42, 0.8)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#00f2fe', marginBottom: '4px', fontWeight: 700 }}>
                        <span>{cmt.author}</span>
                        <span style={{ color: 'var(--text-subtle)' }}>{cmt.date}</span>
                      </div>
                      <div style={{ fontSize: '0.88rem', color: '#f8fafc' }}>
                        {cmt.text}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleAddComment} style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="text"
                  placeholder={`Escribir comentario o nota para ${selectedCard.responsable}...`}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="glass-input"
                  style={{ flex: 1, padding: '12px 16px', borderRadius: '10px' }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '12px 20px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Send size={16} />
                  <span>Guardar Comentario</span>
                </button>
              </form>
            </div>

          </div>
        ) : null}

      </div>
    </div>
  );
}
