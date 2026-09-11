import React from 'react';
import { BLACK_PUMA_BENCHMARK } from '../data/mockData';
import { ExternalLink, CheckCircle2, Zap, ArrowRight, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

export default function BlackPumaComparison({ onNavigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header Banner */}
      <div className="glass-panel" style={{
        padding: '32px',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 58, 138, 0.4) 100%)',
        border: '1px solid rgba(0, 242, 254, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span className="glass-pill badge-info">
              <Sparkles size={14} />
              Prioridad 1 — Benchmark EDEMSA
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Ingeniería Inversa Competitiva
            </span>
          </div>

          <h2 style={{ fontSize: '2.2rem', marginBottom: '14px' }} className="gradient-text">
            Ingeniería Inversa: Black Puma vs. BP Bromteck Godel
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '24px' }}>
            Analizamos la propuesta actual de <strong>Black Puma</strong> (<a href="https://theblackpuma.com/" target="_blank" rel="noreferrer" style={{ color: '#00f2fe', textDecoration: 'none' }}>theblackpuma.com <ExternalLink size={12} /></a>) desarrollada para <strong>EDEMSA</strong> (Baja Tensión) y establecemos el mapa de desarrollo para igualar y superar sus capacidades operativas.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <button onClick={() => onNavigate('low-voltage')} className="btn-primary">
              <span>Explorar Baja Tensión & Hurto IA</span>
              <ArrowRight size={18} />
            </button>
            <button onClick={() => onNavigate('rag')} className="btn-secondary">
              <span>Probar RAG de Pérdidas Técnicas</span>
            </button>
          </div>
        </div>

        {/* Decorative Grid Graphic */}
        <div style={{
          position: 'absolute',
          right: '-20px',
          top: '-20px',
          bottom: '-20px',
          width: '320px',
          opacity: 0.15,
          background: 'radial-gradient(circle, #00f2fe 10%, transparent 70%)',
          pointerEvents: 'none'
        }} />
      </div>

      {/* Benchmark Summary KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        <div className="glass-panel" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Cliente Objetivo</span>
            <Zap size={20} color="#00f2fe" />
          </div>
          <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '4px' }}>EDEMSA Mendoza</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Empresa Distribuidora de Electricidad</p>
        </div>

        <div className="glass-panel" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Foco de Intervención</span>
            <ShieldCheck size={20} color="#10b981" />
          </div>
          <h3 style={{ fontSize: '1.4rem', color: '#6ee7b7', marginBottom: '4px' }}>Micro-Nivel Baja Tensión</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Acción centrada en LA CASA / pilar de medición</p>
        </div>

        <div className="glass-panel" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Índice de Ventaja Competitiva</span>
            <TrendingUp size={20} color="#8b5cf6" />
          </div>
          <h3 style={{ fontSize: '1.4rem' }} className="gradient-text">9.7 / 10</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Supera a Black Puma por IA Visual y RAG</p>
        </div>
      </div>

      {/* Feature Comparison Matrix */}
      <div className="glass-panel" style={{ padding: '28px' }}>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Zap color="#00f2fe" size={22} />
          Matriz de Capacidades: Black Puma vs. BP Bromteck Godel
        </h3>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '750px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <th style={{ padding: '12px 16px' }}>Funcionalidad Estratégica</th>
                <th style={{ padding: '12px 16px' }}>Estado Actual en Black Puma</th>
                <th style={{ padding: '12px 16px' }}>Valor Agregado BP Bromteck Godel</th>
                <th style={{ padding: '12px 16px', textTransform: 'center' }}>Nivel de Ventaja</th>
              </tr>
            </thead>
            <tbody>
              {BLACK_PUMA_BENCHMARK.capabilities.map((cap, idx) => (
                <tr key={idx} style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  background: idx % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent'
                }}>
                  <td style={{ padding: '16px', fontWeight: 600, color: '#f8fafc', fontSize: '0.95rem' }}>
                    {cap.feature}
                  </td>
                  <td style={{ padding: '16px', color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '240px' }}>
                    {cap.blackPumaStatus}
                    <div style={{ marginTop: '6px', fontSize: '0.75rem', color: '#94a3b8' }}>
                      Score Black Puma: <strong>{cap.scoreBP}/10</strong>
                    </div>
                  </td>
                  <td style={{ padding: '16px', color: '#e2e8f0', fontSize: '0.9rem', maxWidth: '320px' }}>
                    {cap.bromteckAdvantage}
                    <div style={{ marginTop: '6px', fontSize: '0.75rem', color: '#00f2fe' }}>
                      Score Bromteck: <strong>{cap.scoreBromteck}/10</strong>
                    </div>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>
                    <span className={`glass-pill ${cap.statusBadge.includes('Exclusivo') ? 'badge-warning' : 'badge-success'}`}>
                      <CheckCircle2 size={12} />
                      {cap.statusBadge}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
