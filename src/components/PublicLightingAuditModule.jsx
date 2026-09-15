import React, { useState } from 'react';
import { Lightbulb, AlertTriangle, CheckCircle2, Zap, Upload, Database, FileText, MapPin, Calculator } from 'lucide-react';

export default function PublicLightingAuditModule() {
  const [municipality, setMunicipality] = useState('Guaymallén');
  const [lampType, setLampType] = useState('Sodio 250W (Sin Fotocélula - Encendido 24hs)');
  const [quantity, setQuantity] = useState(120);
  const [hoursPerDay, setHoursPerDay] = useState(24);

  // Math calculations
  const wattsPerLamp = lampType.includes('250W') ? 275 : lampType.includes('400W') ? 430 : 150; // including ballast
  const totalKW = (wattsPerLamp * quantity) / 1000;
  const monthlyKWhUnmetered = totalKW * hoursPerDay * 30;
  const monthlyLossUSD = Math.round(monthlyKWhUnmetered * 0.12); // $0.12 USD per KWh

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header Banner */}
      <div className="glass-panel" style={{
        padding: '28px',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(245, 158, 11, 0.15) 100%)',
        border: '1px solid rgba(245, 158, 11, 0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="glass-pill badge-warning">
                <Lightbulb size={14} />
                Auditoría de Pérdidas No Técnicas en Alumbrado Público (AP)
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                EDEMSA Grid & Municipios de Mendoza
              </span>
            </div>
            <h2 style={{ fontSize: '2.1rem' }} className="gradient-text">
              Auditoría & Cuantificación de Pérdidas en Alumbrado Público
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '6px', maxWidth: '850px', lineHeight: '1.5' }}>
              Identificación y facturación de luminarias colgadas directamente a la red de Baja Tensión sin fotocélula (encendidas 24hs) o sin medidor municipal.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '12px 20px', background: 'rgba(245, 158, 11, 0.08)', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
            <div style={{ fontSize: '0.75rem', color: '#fde047', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pérdida Mensual Estimada</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f59e0b', marginTop: '2px' }}>
              ${monthlyLossUSD.toLocaleString()} USD/mes
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout: Calculator & Simulation */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(340px, 420px) 1fr', gap: '24px', alignItems: 'start' }}>
        
        {/* AP Audit Form */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calculator size={18} color="#f59e0b" />
            <span>Calculadora de Pérdidas por AP Irregular</span>
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Municipio de Mendoza
              </label>

              <select
                className="input-glass"
                value={municipality}
                onChange={(e) => setMunicipality(e.target.value)}
                style={{ width: '100%' }}
              >
                <option value="Guaymallén" style={{ background: '#090d16' }}>Guaymallén</option>
                <option value="Maipú" style={{ background: '#090d16' }}>Maipú</option>
                <option value="Luján de Cuyo" style={{ background: '#090d16' }}>Luján de Cuyo</option>
                <option value="Las Heras" style={{ background: '#090d16' }}>Las Heras</option>
                <option value="Godoy Cruz" style={{ background: '#090d16' }}>Godoy Cruz</option>
                <option value="Capital" style={{ background: '#090d16' }}>Capital Mendoza</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Tipo de Luminaria & Anomalía
              </label>

              <select
                className="input-glass"
                value={lampType}
                onChange={(e) => setLampType(e.target.value)}
                style={{ width: '100%' }}
              >
                <option value="Sodio 250W (Sin Fotocélula - Encendido 24hs)" style={{ background: '#090d16' }}>Sodio 250W (Sin Fotocélula - Encendido 24hs)</option>
                <option value="Sodio 400W (Directo a Línea BT sin Medidor)" style={{ background: '#090d16' }}>Sodio 400W (Directo a Línea BT sin Medidor)</option>
                <option value="LED 150W (Fotocélula Defectuosa TR-12)" style={{ background: '#090d16' }}>LED 150W (Fotocélula Defectuosa TR-12)</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Cantidad de Luminarias Auditadas
              </label>
              <input
                type="number"
                className="input-glass"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
                max="5000"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Horas de Operación Diaria (24hs si no tiene fotocélula)
              </label>
              <input
                type="number"
                className="input-glass"
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                min="1"
                max="24"
              />
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="glass-panel" style={{ padding: '28px' }}>
          <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '20px' }} className="gradient-text">
            Dictamen Técnico de Auditoría AP — Municipio de {municipality}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            <div className="glass-panel" style={{ padding: '16px', background: 'rgba(15,23,42,0.8)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Potencia Total Clandestina</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00f2fe', marginTop: '4px' }}>
                {totalKW.toFixed(2)} kW
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '16px', background: 'rgba(15,23,42,0.8)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Energía Mensual No Facturada</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f59e0b', marginTop: '4px' }}>
                {monthlyKWhUnmetered.toLocaleString()} kWh
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '16px', background: 'rgba(16, 185, 129, 0.08)' }}>
              <div style={{ fontSize: '0.75rem', color: '#6ee7b7' }}>Pérdida Monetaria Mensual</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10b981', marginTop: '4px' }}>
                ${monthlyLossUSD.toLocaleString()} USD
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '20px', background: 'rgba(239, 68, 68, 0.08)', border: '1px solid #ef4444', marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1rem', color: '#ef4444', marginBottom: '8px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertTriangle size={18} />
              <span>Acción Comercial & Notificación al Municipio</span>
            </h4>
            <p style={{ fontSize: '0.92rem', color: '#fee2e2', lineHeight: '1.5' }}>
              Emisión de intimación técnica a la Secretaría de Obras Públicas de {municipality} para regularizar {quantity} luminarias con instalación de fotocélulas electrónicas de corte y medidor totalizador de AP bajo Tarifa T1-AP.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
