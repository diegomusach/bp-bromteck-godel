import React, { useState } from 'react';
import { Smartphone, Users, Download, Share2, Database } from 'lucide-react';
import { LOW_VOLTAGE_SUPPLIES, DEEP_UTILITIES_IDEAS } from '../data/mockData';

export default function ExecutiveMobileReport() {
  const [deviceType, setDeviceType] = useState('iphone');
  const totalRecovery = LOW_VOLTAGE_SUPPLIES.reduce((acc, curr) => acc + curr.potentialRecoveryUSD, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Top Banner */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="glass-pill badge-info">
                <Smartphone size={14} />
                Multi-dispositivo iOS & Android Ready
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Módulo de Reporte Ejecutivo & Inputs</span>
            </div>
            <h2 style={{ fontSize: '1.8rem' }} className="gradient-text">
              Reporte Móvil Exec: Entregables & Inputs Requeridos
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Especificación en smartphone de las fuentes de datos (en rojo) necesarias para la inspección en campo.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setDeviceType('iphone')}
              className="glass-pill"
              style={{
                cursor: 'pointer',
                padding: '6px 14px',
                background: deviceType === 'iphone' ? 'rgba(0, 242, 254, 0.18)' : 'transparent',
                borderColor: deviceType === 'iphone' ? '#00f2fe' : 'rgba(255,255,255,0.1)',
                color: deviceType === 'iphone' ? '#00f2fe' : 'var(--text-muted)'
              }}
            >
              Vista iOS (iPhone)
            </button>
            <button
              onClick={() => setDeviceType('android')}
              className="glass-pill"
              style={{
                cursor: 'pointer',
                padding: '6px 14px',
                background: deviceType === 'android' ? 'rgba(0, 242, 254, 0.18)' : 'transparent',
                borderColor: deviceType === 'android' ? '#00f2fe' : 'rgba(255,255,255,0.1)',
                color: deviceType === 'android' ? '#00f2fe' : 'var(--text-muted)'
              }}
            >
              Vista Android
            </button>
          </div>
        </div>
      </div>

      {/* Simulator Container */}
      <div style={{ padding: '20px 0' }}>
        <div className="mobile-frame-wrapper">
          {/* Notch */}
          <div className="mobile-notch"></div>

          {/* Screen Content */}
          <div style={{ padding: '18px', minHeight: '620px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Mobile Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.7rem', color: '#00f2fe', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  BP Bromteck Mobile
                </span>
                <h3 style={{ fontSize: '1.1rem', color: '#fff' }}>Inputs & Inspección EDEMSA</h3>
              </div>
              <span className="glass-pill badge-warning" style={{ fontSize: '0.65rem' }}>
                LIVE SYNC
              </span>
            </div>

            {/* KPI Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div className="glass-panel" style={{ padding: '12px', background: 'rgba(239, 68, 68, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#fca5a5' }}>Suministros Críticos</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ef4444' }}>2</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Alto riesgo de hurto</div>
              </div>

              <div className="glass-panel" style={{ padding: '12px', background: 'rgba(16, 185, 129, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#6ee7b7' }}>Recuperación Estimada</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10b981' }}>${totalRecovery.toLocaleString()} USD</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Retorno estimado</div>
              </div>
            </div>

            {/* Team Distribution */}
            <div className="glass-panel" style={{ padding: '12px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Users size={12} color="#00f2fe" />
                <span>Asignación de Equipo de Campo</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Camilo & Enrique:</span>
                  <strong style={{ color: '#00f2fe' }}>Inspección ET-201 + TDR</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Líder de Producto:</span>
                  <strong style={{ color: '#8b5cf6' }}>Calculadora ECNR</strong>
                </div>
              </div>
            </div>

            {/* Critical Cases List & Inputs */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Inputs Requeridos para Inspección Móvil
              </div>

              {DEEP_UTILITIES_IDEAS.slice(0, 3).map((idea) => (
                <div key={idea.id} className="glass-panel" style={{ padding: '10px 12px', background: 'rgba(15, 23, 42, 0.8)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00f2fe' }}>{idea.title}</span>
                  </div>
                  
                  {/* RED INPUT BADGE MOBILE */}
                  <div style={{
                    marginTop: '6px',
                    padding: '6px 8px',
                    background: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid #ef4444',
                    borderRadius: '6px',
                    fontSize: '0.68rem',
                    color: '#fca5a5',
                    fontWeight: 700
                  }}>
                    {idea.requiredInput}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Actions */}
            <div style={{ display: 'flex', gap: '8px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <button className="btn-primary" style={{ flex: 1, padding: '8px', fontSize: '0.75rem' }}>
                <Share2 size={12} />
                <span>Compartir EDEMSA</span>
              </button>
              <button className="btn-secondary" style={{ padding: '8px 12px', fontSize: '0.75rem' }}>
                <Download size={12} />
                <span>PDF</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
