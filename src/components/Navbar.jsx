import React, { useState } from 'react';
import { Zap, ShieldAlert, Cpu, Bot, Smartphone, LogOut, UserCheck, Layers, Wrench, Rocket, Lightbulb, Menu, X, GitBranch } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, currentUser, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'production-roadmap', label: '🚀 Pasos a Producción Real', icon: Rocket, color: '#10b981', isHighlighted: true },
    { id: 'engineering', label: 'Soluciones Concretas EPRE & Redes', icon: Wrench },
    { id: 'public-lighting', label: 'Alumbrado Público (AP)', icon: Lightbulb, color: '#fde047' },
    { id: 'low-voltage', label: 'Baja Tensión & Hurto IA', icon: ShieldAlert },
    { id: 'branches', label: 'Trunks & Branches DB', icon: GitBranch, color: '#a855f7' },
    { id: 'benchmark', label: 'BP Benchmark', icon: Cpu },
    { id: 'catalog', label: '30 Soluciones & Roadmaps', icon: Layers },
    { id: 'rag', label: 'RAG Pérdidas Técnicas', icon: Bot },
    { id: 'mobile', label: 'Reporte Móvil Exec', icon: Smartphone }
  ];

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
                EDEMSA Platform
              </span>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Inteligencia en Baja Tensión & Reverse Engineering
            </span>
          </div>
        </div>

        {/* Desktop Tab Navigation */}
        <nav className="nav-desktop-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            let bg = 'transparent';
            let border = 'rgba(255, 255, 255, 0.08)';
            let color = isActive ? '#00f2fe' : 'var(--text-muted)';

            if (item.isHighlighted) {
              bg = isActive ? 'rgba(16, 185, 129, 0.25)' : 'rgba(16, 185, 129, 0.1)';
              border = isActive ? '#10b981' : 'rgba(16, 185, 129, 0.3)';
              color = '#10b981';
            } else if (isActive) {
              bg = 'rgba(0, 242, 254, 0.18)';
              border = 'var(--color-primary)';
            } else if (item.color && isActive) {
              color = item.color;
            }

            return (
              <button
                key={item.id}
                onClick={() => handleTabSelect(item.id)}
                className="glass-pill"
                style={{
                  cursor: 'pointer',
                  padding: '8px 14px',
                  background: bg,
                  borderColor: border,
                  color: color,
                  fontWeight: item.isHighlighted ? 700 : 500
                }}
              >
                <Icon size={16} color={item.color || (isActive ? '#00f2fe' : 'currentColor')} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Info & Actions + Mobile Menu Toggle */}
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
            <span className="nav-desktop-links">Salir</span>
          </button>

          {/* Hamburger Toggle Button for Mobile Screens */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-secondary nav-mobile-toggle"
            style={{ padding: '8px', borderRadius: '10px' }}
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X size={20} color="#00f2fe" /> : <Menu size={20} color="#00f2fe" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav className="nav-mobile-drawer">
            <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', fontWeight: 600 }}>
              Seleccionar Módulo:
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabSelect(item.id)}
                  className="glass-panel"
                  style={{
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    width: '100%',
                    textAlign: 'left',
                    background: isActive ? 'rgba(0, 242, 254, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                    borderColor: isActive ? '#00f2fe' : 'rgba(255, 255, 255, 0.08)',
                    color: isActive ? '#00f2fe' : 'var(--text-main)',
                    fontWeight: isActive ? 700 : 500,
                    borderRadius: '10px',
                    cursor: 'pointer'
                  }}
                >
                  <Icon size={18} color={item.color || (isActive ? '#00f2fe' : '#94a3b8')} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}

