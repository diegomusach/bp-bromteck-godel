import React, { useState } from 'react';
import { DEEP_UTILITIES_IDEAS } from '../data/mockData';
import { Wrench, ShieldAlert, FileText, CheckCircle2, Zap, AlertTriangle, ChevronRight, Scale, Cpu } from 'lucide-react';

export default function PragmaticEngineeringModule() {
  const [selectedIdea, setSelectedIdea] = useState(DEEP_UTILITIES_IDEAS[0]);

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
                Ingeniería Concreta de Distribución Eléctrica
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Normativa EPRE Mendoza & Operaciones EDEMSA
              </span>
            </div>
            <h2 style={{ fontSize: '2.1rem' }} className="gradient-text">
              Soluciones Técnicas Concretas & Antifraude en Baja Tensión
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '6px', maxWidth: '850px', lineHeight: '1.5' }}>
              Proyectos prácticos de ingeniería eléctrica, liquidación ECNR, especificación de insumos de red (conductores preensamblados Al 3x95/50) y auditoría de campo para Camilo, Enrique y el equipo de Bromteck.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '12px 20px', background: 'rgba(0, 242, 254, 0.08)', borderColor: 'rgba(0, 242, 254, 0.3)' }}>
            <div style={{ fontSize: '0.75rem', color: '#00f2fe', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Foco Operativo</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginTop: '2px' }}>
              10 Soluciones de Ingeniería Real
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout: List on Left, Detailed Engineering Spec on Right */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(340px, 400px) 1fr', gap: '24px', alignItems: 'start' }}>
        
        {/* Solutions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Listado de Soluciones Prácticas (Seleccionar)
          </span>

          {DEEP_UTILITIES_IDEAS.map((idea) => (
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
                <span style={{ fontSize: '0.75rem', color: '#00f2fe', fontWeight: 700 }}>#{idea.id}</span>
              </div>
              <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '6px', lineHeight: '1.4' }}>
                {idea.title}
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {idea.problem}
              </p>
            </div>
          ))}
        </div>

        {/* Selected Idea Deep Technical Spec Sheet */}
        <div className="glass-panel" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div>
              <span className="glass-pill badge-warning" style={{ marginBottom: '8px' }}>
                {selectedIdea.area}
              </span>
              <h3 style={{ fontSize: '1.6rem', color: '#fff', marginTop: '6px' }} className="gradient-text">
                {selectedIdea.title}
              </h3>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="glass-panel" style={{ padding: '20px', marginBottom: '20px', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
            <h4 style={{ fontSize: '0.95rem', color: '#fca5a5', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertTriangle size={18} />
              <span>Problema Operativo Real en la Distribuidora</span>
            </h4>
            <p style={{ fontSize: '0.95rem', color: '#fee2e2', lineHeight: '1.6' }}>
              {selectedIdea.problem}
            </p>
          </div>

          {/* Solution Description */}
          <div className="glass-panel" style={{ padding: '20px', marginBottom: '20px', background: 'rgba(0, 242, 254, 0.03)', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
            <h4 style={{ fontSize: '0.95rem', color: '#00f2fe', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Zap size={18} />
              <span>Solución Concreta Bromteck</span>
            </h4>
            <p style={{ fontSize: '0.95rem', color: '#e2e8f0', lineHeight: '1.6' }}>
              {selectedIdea.solution}
            </p>
          </div>

          {/* Technical Method & Deliverable */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div className="glass-panel" style={{ padding: '18px', background: 'rgba(139, 92, 246, 0.05)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
              <h5 style={{ fontSize: '0.85rem', color: '#c4b5fd', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Wrench size={16} />
                <span>Método / Fórmula / Materiales</span>
              </h5>
              <p style={{ fontSize: '0.9rem', color: '#f3e8ff', lineHeight: '1.5' }}>
                {selectedIdea.materialsOrMethod}
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
      </div>
    </div>
  );
}
