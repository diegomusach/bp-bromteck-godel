import React, { useState } from 'react';
import { UTILITIES_SOLUTIONS_20 } from '../data/mockData';
import { Zap, Search, Layers, ChevronRight, CheckCircle2, ArrowRight, ShieldCheck, Cpu, SlidersHorizontal, Sparkles } from 'lucide-react';

export default function UtilitiesRoadmapCatalog() {
  const [selectedSolution, setSelectedSolution] = useState(UTILITIES_SOLUTIONS_20[0]);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Todas', ...new Set(UTILITIES_SOLUTIONS_20.map((s) => s.category))];

  const filteredSolutions = UTILITIES_SOLUTIONS_20.filter((s) => {
    const matchesCat = selectedCategory === 'Todas' || s.category === selectedCategory;
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.target.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header Banner */}
      <div className="glass-panel" style={{ padding: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="glass-pill badge-info">
                <Sparkles size={14} />
                Catálogo Estratégico BP Bromteck
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Distribuidoras de Energía & Cooperativas Eléctricas
              </span>
            </div>
            <h2 style={{ fontSize: '2rem' }} className="gradient-text">
              20 Soluciones & Hojas de Ruta para Utilities
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '4px', maxWidth: '800px' }}>
              Portafolio completo de productos, optimizaciones operativas e inteligencia de datos diseñados para EDEMSA, cooperativas y distribuidoras eléctricas.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="glass-pill badge-success" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
              20 Opciones Disponibles
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Category Chips */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="glass-pill"
                style={{
                  cursor: 'pointer',
                  padding: '6px 14px',
                  fontSize: '0.8rem',
                  background: selectedCategory === cat ? 'rgba(0, 242, 254, 0.18)' : 'transparent',
                  borderColor: selectedCategory === cat ? '#00f2fe' : 'rgba(255,255,255,0.08)',
                  color: selectedCategory === cat ? '#00f2fe' : 'var(--text-muted)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ minWidth: '240px' }}>
            <div style={{ position: 'relative' }}>
              <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                className="input-glass"
                style={{ paddingLeft: '36px', fontSize: '0.85rem' }}
                placeholder="Buscar solución..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Catalog View: Grid on Left, Detailed Roadmap on Right */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(340px, 420px) 1fr', gap: '24px', alignItems: 'start' }}>
        
        {/* Solution List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '780px', overflowY: 'auto', paddingRight: '4px' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Resultados ({filteredSolutions.length})
          </span>

          {filteredSolutions.map((sol) => (
            <div
              key={sol.id}
              onClick={() => setSelectedSolution(sol)}
              className="glass-panel glass-panel-hover"
              style={{
                padding: '16px',
                cursor: 'pointer',
                borderColor: selectedSolution.id === sol.id ? 'var(--color-primary)' : 'var(--border-glass)',
                background: selectedSolution.id === sol.id ? 'rgba(0, 242, 254, 0.08)' : 'var(--bg-card)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span className="glass-pill badge-info" style={{ fontSize: '0.65rem' }}>
                  {sol.category}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>Opción #{sol.id}</span>
              </div>
              <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '6px', lineHeight: '1.4' }}>
                {sol.title}
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {sol.description}
              </p>
            </div>
          ))}
        </div>

        {/* Selected Solution Detail & Implementation Roadmap */}
        <div className="glass-panel" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div>
              <span className="glass-pill badge-info" style={{ marginBottom: '8px' }}>
                {selectedSolution.category}
              </span>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '6px' }} className="gradient-text">
                {selectedSolution.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Destinado a: <strong>{selectedSolution.target}</strong>
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '10px 16px', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', textAlign: 'right' }}>
              <div style={{ fontSize: '0.7rem', color: '#6ee7b7', textTransform: 'uppercase' }}>Impacto Esperado</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#10b981', marginTop: '2px' }}>
                {selectedSolution.impact}
              </div>
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Descripción de la Solución
            </h4>
            <p style={{ fontSize: '1rem', color: '#e2e8f0', lineHeight: '1.6' }}>
              {selectedSolution.description}
            </p>
          </div>

          {/* Implementation Roadmap */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#00f2fe', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={20} />
              <span>Hoja de Ruta de Implementación (Roadmap)</span>
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative' }}>
              {selectedSolution.roadmap.map((phase, pIdx) => (
                <div
                  key={pIdx}
                  className="glass-panel"
                  style={{
                    padding: '16px 20px',
                    background: 'rgba(15, 23, 42, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    borderLeft: '4px solid var(--color-primary)'
                  }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)',
                    color: '#070a12',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    flexShrink: 0
                  }}>
                    {pIdx + 1}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#f8fafc', lineHeight: '1.5' }}>
                    {phase}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
