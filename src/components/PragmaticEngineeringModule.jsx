import React, { useState, useEffect } from 'react';
import { DEEP_UTILITIES_IDEAS } from '../data/mockData';
import { Wrench, Zap, AlertTriangle, CheckCircle2, Database, MessageSquare, Send, UserCheck, HardDrive, Cpu, Users } from 'lucide-react';

export default function PragmaticEngineeringModule({ currentUser }) {
  const [selectedIdea, setSelectedIdea] = useState(DEEP_UTILITIES_IDEAS[0]);
  const [commentsMap, setCommentsMap] = useState({});
  const [newCommentText, setNewCommentText] = useState('');

  // Load comments from localStorage or initial mock data
  useEffect(() => {
    const loadedMap = {};
    DEEP_UTILITIES_IDEAS.forEach((idea) => {
      const saved = localStorage.getItem(`bp_comments_${idea.id}`);
      if (saved) {
        try {
          loadedMap[idea.id] = JSON.parse(saved);
        } catch (e) {
          loadedMap[idea.id] = idea.initialComments || [];
        }
      } else {
        loadedMap[idea.id] = idea.initialComments || [];
      }
    });
    setCommentsMap(loadedMap);
  }, []);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newCommentText.trim() || !selectedIdea) return;

    const currentIdeaComments = commentsMap[selectedIdea.id] || [];
    const newCommentObj = {
      id: Date.now().toString(),
      user: currentUser?.username || 'dmusach',
      authorName: currentUser?.name || (currentUser?.username === 'alejandro' ? 'Alejandro Cubino' : 'Diego Musach'),
      timestamp: new Date().toLocaleString('es-AR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      text: newCommentText.trim()
    };

    const updatedComments = [...currentIdeaComments, newCommentObj];
    const newMap = { ...commentsMap, [selectedIdea.id]: updatedComments };
    setCommentsMap(newMap);

    // Save to localStorage for persistence across logins
    localStorage.setItem(`bp_comments_${selectedIdea.id}`, JSON.stringify(updatedComments));
    setNewCommentText('');
  };

  const currentComments = commentsMap[selectedIdea.id] || [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header Banner */}
      <div className="glass-panel" style={{
        padding: '28px',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)',
        border: '1px solid rgba(0, 242, 254, 0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="glass-pill badge-warning">
                <Wrench size={14} />
                Ingeniería Concreta & Módulo Colaborativo
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Normativa EPRE Mendoza & Operaciones EDEMSA
              </span>
            </div>
            <h2 style={{ fontSize: '2.1rem' }} className="gradient-text">
              Requisitos de Implementación & Registro de Comentarios
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '6px', maxWidth: '850px', lineHeight: '1.5' }}>
              Detalle exacto de lo que se <strong>NECESITA (Hardware, Software, Personal)</strong> más un <strong>cuadro de comentarios compartidos</strong> registrado en tiempo real entre Diego y Alejandro.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '12px 20px', background: 'rgba(0, 242, 254, 0.08)', borderColor: 'rgba(0, 242, 254, 0.3)' }}>
            <div style={{ fontSize: '0.75rem', color: '#00f2fe', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Usuario Activo</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <UserCheck size={18} color="#00f2fe" />
              <span>{currentUser?.name || currentUser?.username}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout: List on Left, Detailed Engineering Spec & Comments on Right */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(340px, 390px) 1fr', gap: '24px', alignItems: 'start' }}>
        
        {/* Solutions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Listado de Soluciones Prácticas (Seleccionar)
          </span>

          {DEEP_UTILITIES_IDEAS.map((idea) => {
            const count = (commentsMap[idea.id] || []).length;
            return (
              <div
                key={idea.id}
                onClick={() => setSelectedIdea(idea)}
                className="glass-panel glass-panel-hover"
                style={{
                  padding: '16px',
                  cursor: 'pointer',
                  borderColor: selectedIdea.id === idea.id ? 'var(--color-primary)' : 'var(--border-glass)',
                  background: selectedIdea.id === idea.id ? 'rgba(0, 242, 254, 0.08)' : 'var(--bg-card)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span className="glass-pill badge-info" style={{ fontSize: '0.65rem' }}>
                    {idea.area}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {count > 0 && (
                      <span className="glass-pill badge-warning" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>
                        <MessageSquare size={10} /> {count}
                      </span>
                    )}
                    <span style={{ fontSize: '0.75rem', color: '#00f2fe', fontWeight: 700 }}>#{idea.id}</span>
                  </div>
                </div>
                <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '6px', lineHeight: '1.4' }}>
                  {idea.title}
                </h4>
                
                {/* Highlighted Input Badge in Red */}
                <div style={{
                  marginTop: '8px',
                  padding: '6px 10px',
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  color: '#fca5a5',
                  fontWeight: 600
                }}>
                  {idea.requiredInput}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Idea Deep Technical Spec Sheet & Shared Comments */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="glass-panel" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div>
                <span className="glass-pill badge-warning" style={{ marginBottom: '8px' }}>
                  {selectedIdea.area}
                </span>
                <h3 style={{ fontSize: '1.6rem', color: '#fff', marginTop: '6px' }} className="gradient-text">
                  {selectedIdea.title}
                </h3>
              </div>
            </div>

            {/* RED HIGHLIGHTED INPUT PANEL */}
            <div className="glass-panel" style={{
              padding: '20px',
              marginBottom: '20px',
              background: 'rgba(239, 68, 68, 0.08)',
              border: '2px solid #ef4444',
              boxShadow: '0 0 20px rgba(239, 68, 68, 0.2)'
            }}>
              <h4 style={{ fontSize: '1rem', color: '#ef4444', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800 }}>
                <Database size={20} />
                <span>¿QUÉ INPUT SE NECESITA PARA IMPLEMENTARLO?</span>
              </h4>
              <div style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700, lineHeight: '1.5', background: 'rgba(9, 13, 22, 0.8)', padding: '12px 16px', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                {selectedIdea.requiredInput}
              </div>
              <div style={{ marginTop: '10px', fontSize: '0.82rem', color: '#fca5a5' }}>
                Tipo de Fuente: <strong>{selectedIdea.inputSourceType}</strong>
              </div>
            </div>

            {/* CONCRETE IMPLEMENTATION REQUIREMENTS BOX (WHAT I NEED) */}
            <div className="glass-panel" style={{ padding: '20px', marginBottom: '20px', background: 'rgba(59, 130, 246, 0.06)', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
              <h4 style={{ fontSize: '1.05rem', color: '#60a5fa', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                <Wrench size={18} />
                <span>¿QUÉ NECESITO PARA IMPLEMENTARLO EN CONCRETO?</span>
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                <div style={{ padding: '12px', background: 'rgba(15,23,42,0.7)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '0.8rem', color: '#93c5fd', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <HardDrive size={14} /> 🖥️ Hardware / Dispositivos
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#f8fafc' }}>
                    {selectedIdea.implementationRequirements?.hardware}
                  </div>
                </div>

                <div style={{ padding: '12px', background: 'rgba(15,23,42,0.7)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '0.8rem', color: '#93c5fd', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <Cpu size={14} /> 🔑 APIs & Software
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#f8fafc' }}>
                    {selectedIdea.implementationRequirements?.software}
                  </div>
                </div>

                <div style={{ padding: '12px', background: 'rgba(15,23,42,0.7)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '0.8rem', color: '#93c5fd', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <Users size={14} /> 👥 Personal Requerido
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#f8fafc' }}>
                    {selectedIdea.implementationRequirements?.personnel}
                  </div>
                </div>
              </div>
            </div>

            {/* Problem & Solution */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div className="glass-panel" style={{ padding: '18px', background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <h5 style={{ fontSize: '0.85rem', color: '#fde047', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <AlertTriangle size={16} />
                  <span>Problema Operativo Real</span>
                </h5>
                <p style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: '1.5' }}>
                  {selectedIdea.problem}
                </p>
              </div>

              <div className="glass-panel" style={{ padding: '18px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <h5 style={{ fontSize: '0.85rem', color: '#6ee7b7', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} />
                  <span>Entregable Operativo Concreto</span>
                </h5>
                <p style={{ fontSize: '0.9rem', color: '#ecfdf5', lineHeight: '1.5' }}>
                  {selectedIdea.deliverable}
                </p>
              </div>
            </div>
          </div>

          {/* INTERACTIVE SHARED COMMENTS PANEL (Diego & Alejandro) */}
          <div className="glass-panel" style={{ padding: '28px', border: '1px solid rgba(139, 92, 246, 0.3)', background: 'rgba(139, 92, 246, 0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h4 style={{ fontSize: '1.1rem', color: '#c4b5fd', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageSquare size={20} />
                <span>Registro de Comentarios Compartidos (Diego & Alejandro)</span>
              </h4>
              <span className="glass-pill badge-info" style={{ fontSize: '0.75rem' }}>
                {currentComments.length} comentarios registrados
              </span>
            </div>

            {/* List of Comments */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px', maxHeight: '300px', overflowY: 'auto' }}>
              {currentComments.length === 0 ? (
                <div style={{ color: 'var(--text-subtle)', fontSize: '0.88rem', fontStyle: 'italic', padding: '12px', textAlign: 'center', background: 'rgba(15,23,42,0.4)', borderRadius: '8px' }}>
                  No hay comentarios aún para este proyecto. Sé el primero en dejar una nota.
                </div>
              ) : (
                currentComments.map((c) => (
                  <div
                    key={c.id}
                    className="glass-panel"
                    style={{
                      padding: '14px 18px',
                      background: c.user === 'alejandro' || c.user === 'acubino' ? 'rgba(139, 92, 246, 0.12)' : 'rgba(0, 242, 254, 0.12)',
                      border: c.user === 'alejandro' || c.user === 'acubino' ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid rgba(0, 242, 254, 0.3)',
                      borderRadius: '12px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className={`glass-pill ${c.user === 'alejandro' || c.user === 'acubino' ? 'badge-warning' : 'badge-info'}`} style={{ fontSize: '0.7rem' }}>
                          <UserCheck size={12} />
                          {c.authorName}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                          @{c.user}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>
                        {c.timestamp}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.92rem', color: '#f8fafc', lineHeight: '1.5' }}>
                      {c.text}
                    </p>
                  </div>
                ))
              )}
            </div>

            {/* Comment Form */}
            <form onSubmit={handleAddComment} style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                className="input-glass"
                placeholder={`Escribir comentario como ${currentUser?.name || currentUser?.username}...`}
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary" style={{ padding: '10px 18px', whiteSpace: 'nowrap' }}>
                <Send size={16} />
                <span>Comentar</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
