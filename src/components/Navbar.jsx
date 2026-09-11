import React from 'react';
import { Zap, ShieldAlert, Cpu, Bot, Smartphone, LogOut, UserCheck } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, currentUser, onLogout, isMobileView, setIsMobileView }) {
  return (
    <header className="glass-panel" style={{
      borderRadius: '0',
      borderLeft: 'none',
      borderRight: 'none',
      borderTop: 'none',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '12px 24px'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)',
            padding: '8px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(0, 242, 254, 0.4)'
          }}>
            <Zap size={22} color="#070a12" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }} className="gradient-text">
                BP Bromteck
              </span>
              <span className="glass-pill badge-info" style={{ fontSize: '0.7rem' }}>
                Godel v2.4 — EDEMSA
              </span>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Inteligencia en Baja Tensión & Reverse Engineering
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', padding: '4px' }}>
          <button
            onClick={() => setActiveTab('benchmark')}
            className="glass-pill"
            style={{
              cursor: 'pointer',
              padding: '8px 14px',
              background: activeTab === 'benchmark' ? 'rgba(0, 242, 254, 0.18)' : 'transparent',
              borderColor: activeTab === 'benchmark' ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.08)',
              color: activeTab === 'benchmark' ? '#00f2fe' : 'var(--text-muted)'
            }}
          >
            <Cpu size={16} />
            <span>Black Puma Benchmark</span>
          </button>

          <button
            onClick={() => setActiveTab('low-voltage')}
            className="glass-pill"
            style={{
              cursor: 'pointer',
              padding: '8px 14px',
              background: activeTab === 'low-voltage' ? 'rgba(0, 242, 254, 0.18)' : 'transparent',
              borderColor: activeTab === 'low-voltage' ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.08)',
              color: activeTab === 'low-voltage' ? '#00f2fe' : 'var(--text-muted)'
            }}
          >
            <ShieldAlert size={16} />
            <span>Baja Tensión & Hurto IA</span>
          </button>

          <button
            onClick={() => setActiveTab('rag')}
            className="glass-pill"
            style={{
              cursor: 'pointer',
              padding: '8px 14px',
              background: activeTab === 'rag' ? 'rgba(0, 242, 254, 0.18)' : 'transparent',
              borderColor: activeTab === 'rag' ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.08)',
              color: activeTab === 'rag' ? '#00f2fe' : 'var(--text-muted)'
            }}
          >
            <Bot size={16} />
            <span>RAG Pérdidas Técnicas</span>
          </button>

          <button
            onClick={() => setActiveTab('mobile')}
            className="glass-pill"
            style={{
              cursor: 'pointer',
              padding: '8px 14px',
              background: activeTab === 'mobile' ? 'rgba(0, 242, 254, 0.18)' : 'transparent',
              borderColor: activeTab === 'mobile' ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.08)',
              color: activeTab === 'mobile' ? '#00f2fe' : 'var(--text-muted)'
            }}
          >
            <Smartphone size={16} />
            <span>Reporte Móvil Exec</span>
          </button>
        </nav>

        {/* User Info & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="glass-pill" style={{ borderColor: 'rgba(0, 242, 254, 0.3)', padding: '6px 12px' }}>
            <UserCheck size={14} color="#00f2fe" />
            <span style={{ color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600 }}>
              {currentUser.username}
            </span>
          </div>

          <button
            onClick={onLogout}
            className="btn-secondary"
            style={{ padding: '6px 12px', fontSize: '0.8rem' }}
            title="Cerrar Sesión"
          >
            <LogOut size={14} />
            <span>Salir</span>
          </button>
        </div>
      </div>
    </header>
  );
}
