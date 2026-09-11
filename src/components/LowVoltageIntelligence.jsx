import React, { useState } from 'react';
import { LOW_VOLTAGE_SUPPLIES } from '../data/mockData';
import { MapPin, Camera, AlertTriangle, CheckCircle, Search, ShieldAlert, FileText, ArrowUpRight, Cpu, Zap, Database, Upload, Download } from 'lucide-react';
import { generateActaPdf } from '../utils/pdfGenerator';

export default function LowVoltageIntelligence() {
  const [selectedSupply, setSelectedSupply] = useState(LOW_VOLTAGE_SUPPLIES[0]);
  const [activeTabSub, setActiveTabSub] = useState('facade');
  const [dispatched, setDispatched] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [customPhotoUrl, setCustomPhotoUrl] = useState(null);

  const filteredSupplies = LOW_VOLTAGE_SUPPLIES.filter(
    (s) =>
      s.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDispatch = () => {
    setDispatched(true);
    setTimeout(() => {
      setDispatched(false);
    }, 4000);
  };

  const handleCustomPhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhotoUrl(url);
    }
  };

  const handleDownloadPdf = () => {
    generateActaPdf({
      suministroId: selectedSupply.id,
      clientName: selectedSupply.clientName,
      address: selectedSupply.address,
      tariff: selectedSupply.tariff,
      debtAmount: selectedSupply.debtAmount,
      requiredInput: selectedSupply.requiredInput,
      actionText: selectedSupply.recommendedAction
    });
  };

  const currentPhoto = customPhotoUrl || selectedSupply.facadeUrl;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Info */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="glass-pill badge-warning">
                <ShieldAlert size={14} />
                Prioridad 1 — Micro-Nivel Baja Tensión
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>EDEMSA Grid</span>
            </div>
            <h2 style={{ fontSize: '1.8rem' }} className="gradient-text">
              Inteligencia en Baja Tensión & Detección de Hurto por IA
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
              Inspección desde la casa (pilar de medición). Analiza mora histórica con zonificación de Google Street View para detectar conexiones irregulares ("colgarse").
            </p>
          </div>

          <div style={{ minWidth: '260px' }}>
            <div style={{ position: 'relative' }}>
              <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                className="input-glass"
                style={{ paddingLeft: '36px', fontSize: '0.85rem' }}
                placeholder="Buscar por cliente, suministro o dirección..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Selector on Left, Inspection Details on Right */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 360px) 1fr', gap: '24px', alignItems: 'start' }}>
        
        {/* Supplies List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Suministros en Baja Tensión ({filteredSupplies.length})
          </h3>

          {filteredSupplies.map((sup) => (
            <div
              key={sup.id}
              onClick={() => {
                setSelectedSupply(sup);
                setCustomPhotoUrl(null);
              }}
              className="glass-panel glass-panel-hover"
              style={{
                padding: '16px',
                cursor: 'pointer',
                borderColor: selectedSupply.id === sup.id ? 'var(--color-primary)' : 'var(--border-glass)',
                background: selectedSupply.id === sup.id ? 'rgba(0, 242, 254, 0.08)' : 'var(--bg-card)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#00f2fe' }}>{sup.id}</span>
                <span className={`glass-pill ${sup.theftRiskScore > 70 ? 'badge-danger' : 'badge-success'}`}>
                  Riesgo {sup.theftRiskScore}%
                </span>
              </div>
              <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '4px' }}>{sup.clientName}</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={12} color="#00f2fe" />
                {sup.address}
              </p>
              <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                <span>Mora: {sup.delinquencyMonths} meses</span>
                <span>Deuda: ${sup.debtAmount.toLocaleString()} ARS</span>
              </div>
            </div>
          ))}
        </div>

        {/* Inspection Panel */}
        <div className="glass-panel" style={{ padding: '28px' }}>
          {/* Header of selected supply */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 700 }} className="gradient-text">
                  {selectedSupply.id}
                </span>
                <span className="glass-pill badge-info">{selectedSupply.tariff}</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>{selectedSupply.clientName}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                <MapPin size={14} color="#00f2fe" />
                {selectedSupply.address}
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Evaluación de IA de Hurto</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: selectedSupply.theftRiskScore > 70 ? '#ef4444' : '#10b981' }}>
                {selectedSupply.theftRiskScore}%
              </div>
              <span className={`glass-pill ${selectedSupply.theftRiskScore > 70 ? 'badge-danger' : 'badge-success'}`}>
                {selectedSupply.theftStatus}
              </span>
            </div>
          </div>

          {/* PROMINENT RECOMENDACIÓN IA & ACCIÓN COMERCIAL BANNER AT TOP */}
          <div className="glass-panel" style={{
            padding: '20px',
            marginBottom: '24px',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.12) 100%)',
            border: '2px solid #10b981',
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
              <h4 style={{ fontSize: '1.05rem', color: '#10b981', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={20} color="#10b981" />
                <span>💡 RECOMENDACIÓN TÉCNICA & ACCIÓN COMERCIAL SUGERIDA</span>
              </h4>
              <div style={{ fontSize: '0.9rem', color: '#6ee7b7', fontWeight: 800, background: 'rgba(16, 185, 129, 0.2)', padding: '4px 12px', borderRadius: '20px' }}>
                Recuperación Estimada: ${selectedSupply.potentialRecoveryUSD.toLocaleString()} USD
              </div>
            </div>

            <p style={{ fontSize: '1rem', color: '#ecfdf5', lineHeight: '1.6', fontWeight: 600 }}>
              {selectedSupply.recommendedAction}
            </p>

            {/* RED INPUT BADGE */}
            <div style={{
              marginTop: '12px',
              padding: '8px 12px',
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid #ef4444',
              borderRadius: '8px',
              fontSize: '0.82rem',
              color: '#fca5a5',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Database size={16} />
              <span>{selectedSupply.requiredInput || "🔴 INPUT USADO: Google Street View API + Padrón Comercial ERP (SAP) de EDEMSA + Foto de Inspección de Campo"}</span>
            </div>
          </div>

          {/* Sub Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setActiveTabSub('facade')}
                className="glass-pill"
                style={{
                  cursor: 'pointer',
                  padding: '6px 14px',
                  background: activeTabSub === 'facade' ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                  borderColor: activeTabSub === 'facade' ? '#00f2fe' : 'rgba(255,255,255,0.1)',
                  color: activeTabSub === 'facade' ? '#00f2fe' : 'var(--text-muted)'
                }}
              >
                <Camera size={14} />
                <span>Análisis de Fachada & Google Street View</span>
              </button>
              <button
                onClick={() => setActiveTabSub('ai')}
                className="glass-pill"
                style={{
                  cursor: 'pointer',
                  padding: '6px 14px',
                  background: activeTabSub === 'ai' ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                  borderColor: activeTabSub === 'ai' ? '#00f2fe' : 'rgba(255,255,255,0.1)',
                  color: activeTabSub === 'ai' ? '#00f2fe' : 'var(--text-muted)'
                }}
              >
                <Cpu size={14} />
                <span>Conclusiones IA & Cuestionamiento</span>
              </button>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={handleDownloadPdf} className="btn-secondary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
                <Download size={14} />
                <span>📄 Descargar PDF Acta ECNR</span>
              </button>

              {/* Custom Photo Upload Button for Inspector */}
              <label className="glass-pill badge-info" style={{ cursor: 'pointer', padding: '6px 12px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Upload size={14} />
                <span>📷 Cargar Foto de Inspector</span>
                <input type="file" accept="image/*" capture="environment" onChange={handleCustomPhotoUpload} style={{ display: 'none' }} />
              </label>
            </div>
          </div>

          {/* Facade View */}
          {activeTabSub === 'facade' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div className="scanner-overlay" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0, 242, 254, 0.3)', position: 'relative' }}>
                <img
                  src={currentPhoto}
                  alt="Street View Facade or Inspector Photo"
                  style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(9, 13, 22, 0.95), transparent)',
                  padding: '12px 16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: customPhotoUrl ? '#10b981' : '#00f2fe', fontWeight: 600 }}>
                    <Camera size={14} />
                    <span>{customPhotoUrl ? '📷 Foto de Inspector Capturada en Campo' : 'Google Street View + Detección de Pilar'}</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    {selectedSupply.zoneType}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="glass-panel" style={{ padding: '16px', background: 'rgba(255,255,255,0.02)' }}>
                  <h5 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Nota de Inspección Visual</h5>
                  <p style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: '1.5' }}>
                    {selectedSupply.streetViewNote}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* AI Reasoning View */}
          {activeTabSub === 'ai' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="glass-panel" style={{ padding: '18px', background: 'rgba(0, 242, 254, 0.04)' }}>
                <h4 style={{ fontSize: '1rem', color: '#00f2fe', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Cpu size={18} />
                  <span>Cuestionamiento IA: ¿El cliente se va a colgar o robar energía?</span>
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {selectedSupply.aiFindings.map((finding, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#e2e8f0', lineHeight: '1.5' }}>
                      <span style={{ color: '#00f2fe', fontWeight: 700 }}>•</span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Dispatch Action Button */}
          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={handleDispatch}
              className={dispatched ? "btn-secondary" : "btn-primary"}
              style={{
                background: dispatched ? 'rgba(16, 185, 129, 0.2)' : undefined,
                borderColor: dispatched ? '#10b981' : undefined,
                color: dispatched ? '#6ee7b7' : undefined
              }}
            >
              {dispatched ? (
                <>
                  <CheckCircle size={18} />
                  <span>Inspección Despachada a Cuadrilla EDEMSA</span>
                </>
              ) : (
                <>
                  <ShieldAlert size={18} />
                  <span>Despachar Inspección Técnica de Campo</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
