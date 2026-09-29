import React, { useState } from 'react';
import { 
  Eye, 
  Activity, 
  Zap, 
  Radio, 
  Cpu, 
  ShieldAlert, 
  Layers, 
  TrendingDown, 
  Server, 
  Sliders, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  FileText, 
  Users, 
  Target, 
  Compass, 
  Database, 
  MapPin, 
  BarChart3,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function OjosDeLaRedModule() {
  // Interactive Simulation State
  const [selectedSensor, setSelectedSensor] = useState('SN-BT-002');
  const [simulationMode, setSimulationMode] = useState('normal'); // 'normal', 'fraud', 'overload'
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'architecture', 'commercial-kit'

  // Simulated Sensors Data
  const sensors = [
    {
      id: 'SN-BT-001',
      name: 'Sensor Cabecera Trafo CT-402 (Mendoza Centro)',
      type: 'Cabecera de Línea',
      location: 'Subestación BT-04',
      status: simulationMode === 'overload' ? 'warning' : 'ok',
      voltage: simulationMode === 'overload' ? '208V' : '224V',
      current: simulationMode === 'overload' ? '410A' : '315A',
      lossEstimate: simulationMode === 'overload' ? '8.4%' : '3.2%',
      powerFactor: '0.94',
      lastPulse: 'Hace 4 seg',
      anomalies: simulationMode === 'overload' ? 'Sobrecarga en Fase R' : 'Operación Nominal'
    },
    {
      id: 'SN-BT-002',
      name: 'Sensor Tramo Ramal R2 - Av. San Martín',
      type: 'Monitor de Tramo TDR',
      location: 'Poste #142 - Tramo R2',
      status: simulationMode === 'fraud' ? 'critical' : 'ok',
      voltage: simulationMode === 'fraud' ? '198V' : '221V',
      current: simulationMode === 'fraud' ? '185A (Desbalance)' : '142A',
      lossEstimate: simulationMode === 'fraud' ? '24.8% (HURTO DETECTADO)' : '4.1%',
      powerFactor: simulationMode === 'fraud' ? '0.78' : '0.92',
      lastPulse: 'Hace 2 seg',
      anomalies: simulationMode === 'fraud' ? 'Conexión Clandestina Directa (Bypass)' : 'Operación Nominal'
    },
    {
      id: 'SN-BT-003',
      name: 'Sensor Terminal Cajas AP - Guaymallén',
      type: 'Auditor Alumbrado Público',
      location: 'Tablero AP Sector 9',
      status: 'ok',
      voltage: '223V',
      current: '88A',
      lossEstimate: '2.1%',
      powerFactor: '0.96',
      lastPulse: 'Hace 6 seg',
      anomalies: 'Consumo Auditado Conforme'
    },
    {
      id: 'SN-BT-004',
      name: 'Sensor Concentrador Barrio Privado / Comercio',
      type: 'Medición Balance de Energía',
      location: 'Nodo Zonal Las Heras',
      status: 'warning',
      voltage: '215V',
      current: '260A',
      lossEstimate: '11.5%',
      powerFactor: '0.88',
      lastPulse: 'Hace 1 seg',
      anomalies: 'Desviación de Balance en Horario Pico'
    }
  ];

  const currentSensorData = sensors.find(s => s.id === selectedSensor) || sensors[1];

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '24px' }} className="fade-in">
      {/* Header Banner - Executive Vision */}
      <div className="glass-panel" style={{
        padding: '28px 32px',
        marginBottom: '24px',
        background: 'linear-gradient(135deg, rgba(7, 10, 18, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%)',
        borderLeft: '4px solid #00f2fe',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '240px',
          height: '240px',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          borderRadius: '50%'
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{
                background: 'rgba(0, 242, 254, 0.15)',
                padding: '6px 12px',
                borderRadius: '20px',
                border: '1px solid rgba(0, 242, 254, 0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Eye size={16} color="#00f2fe" />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00f2fe', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Estrategia de Producto & CTO
                </span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Visión Unificada Alejandro + Rodolfo (CTO) + Diego
              </span>
            </div>

            <h1 style={{ fontSize: '1.85rem', fontWeight: 800, margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }} className="gradient-text">
              Los Ojos de tu Red: Monitoreo & Sensores de Baja Tensión
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '850px', margin: 0, lineHeight: 1.5 }}>
              Plataforma integral de telemetría, visibilidad continua de líneas y análisis predictivo de pérdidas técnicas y no técnicas (hurto/anomalías) para distribuidoras de energía.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setActiveTab('dashboard')}
              className="glass-pill"
              style={{
                padding: '10px 18px',
                cursor: 'pointer',
                background: activeTab === 'dashboard' ? 'rgba(0, 242, 254, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                borderColor: activeTab === 'dashboard' ? '#00f2fe' : 'rgba(255, 255, 255, 0.1)',
                color: activeTab === 'dashboard' ? '#00f2fe' : 'var(--text-main)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Activity size={16} />
              <span>Tablero en Vivo</span>
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className="glass-pill"
              style={{
                padding: '10px 18px',
                cursor: 'pointer',
                background: activeTab === 'architecture' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                borderColor: activeTab === 'architecture' ? '#a855f7' : 'rgba(255, 255, 255, 0.1)',
                color: activeTab === 'architecture' ? '#a855f7' : 'var(--text-main)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Cpu size={16} />
              <span>Arquitectura CTO (Rodolfo & Diego)</span>
            </button>

            <button
              onClick={() => setActiveTab('commercial-kit')}
              className="glass-pill"
              style={{
                padding: '10px 18px',
                cursor: 'pointer',
                background: activeTab === 'commercial-kit' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                borderColor: activeTab === 'commercial-kit' ? '#10b981' : 'rgba(255, 255, 255, 0.1)',
                color: activeTab === 'commercial-kit' ? '#10b981' : 'var(--text-main)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FileText size={16} />
              <span>Kit Comercial & Mkt</span>
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1: LIVE DASHBOARD SIMULATION */}
      {activeTab === 'dashboard' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Quick Metrics KPI Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            <div className="glass-panel" style={{ padding: '20px', borderTop: '3px solid #00f2fe' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>SENSORES ACTIVOS</span>
                <Radio size={18} color="#00f2fe" />
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)' }}>
                1,420 / 1,450
              </div>
              <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>
                ● 97.9% Cobertura de Red en Tiempo Real
              </span>
            </div>

            <div className="glass-panel" style={{ padding: '20px', borderTop: '3px solid #ef4444' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>PÉRDIDAS DETECTADAS</span>
                <TrendingDown size={18} color="#ef4444" />
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ef4444' }}>
                {simulationMode === 'fraud' ? '24.8%' : '7.4%'}
              </div>
              <span style={{ fontSize: '0.75rem', color: simulationMode === 'fraud' ? '#ef4444' : '#f59e0b', fontWeight: 600 }}>
                {simulationMode === 'fraud' ? '⚠️ Alerta de Hurto Masivo en Tramo R2' : 'Detección Continua en Cajas y Troncales'}
              </span>
            </div>

            <div className="glass-panel" style={{ padding: '20px', borderTop: '3px solid #10b981' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>RECUPERO POTENCIAL</span>
                <ShieldCheck size={18} color="#10b981" />
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981' }}>
                $4.2M ARS / mes
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Retorno Inversión Sensores: 45 Días
              </span>
            </div>

            <div className="glass-panel" style={{ padding: '20px', borderTop: '3px solid #a855f7' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>SALUD DE RED Y LÍNEAS</span>
                <Activity size={18} color="#a855f7" />
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#a855f7' }}>
                {simulationMode === 'overload' ? 'Alerta Sobrecarga' : 'Óptima (94/100)'}
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Balance Energético Actualizado
              </span>
            </div>
          </div>

          {/* Interactive Simulation Control Bar */}
          <div className="glass-panel" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', background: 'rgba(15, 23, 42, 0.8)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Sliders size={18} color="#00f2fe" />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
                Simulador de Eventos de Red (Prueba de Sinergia CTO + Producto):
              </span>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setSimulationMode('normal')}
                className="glass-pill"
                style={{
                  padding: '6px 14px',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  background: simulationMode === 'normal' ? 'rgba(16, 185, 129, 0.25)' : 'transparent',
                  borderColor: simulationMode === 'normal' ? '#10b981' : 'rgba(255, 255, 255, 0.1)',
                  color: simulationMode === 'normal' ? '#10b981' : 'var(--text-muted)'
                }}
              >
                ● Operación Normal
              </button>

              <button
                onClick={() => {
                  setSimulationMode('fraud');
                  setSelectedSensor('SN-BT-002');
                }}
                className="glass-pill"
                style={{
                  padding: '6px 14px',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  background: simulationMode === 'fraud' ? 'rgba(239, 68, 68, 0.25)' : 'transparent',
                  borderColor: simulationMode === 'fraud' ? '#ef4444' : 'rgba(255, 255, 255, 0.1)',
                  color: simulationMode === 'fraud' ? '#ef4444' : 'var(--text-muted)'
                }}
              >
                🚨 Simular Hurto Directo en Tramo R2
              </button>

              <button
                onClick={() => {
                  setSimulationMode('overload');
                  setSelectedSensor('SN-BT-001');
                }}
                className="glass-pill"
                style={{
                  padding: '6px 14px',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  background: simulationMode === 'overload' ? 'rgba(245, 158, 11, 0.25)' : 'transparent',
                  borderColor: simulationMode === 'overload' ? '#f59e0b' : 'rgba(255, 255, 255, 0.1)',
                  color: simulationMode === 'overload' ? '#f59e0b' : 'var(--text-muted)'
                }}
              >
                ⚡ Simular Sobrecarga en Subestación
              </button>
            </div>
          </div>

          {/* Grid Layout: Sensor Map/Grid View + Detailed Inspection */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 1fr) minmax(360px, 1.2fr)', gap: '24px' }}>
            {/* Left: Sensor List & Map Nodes */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={18} color="#00f2fe" />
                  Red de Sensores Instalados en Campo
                </h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>Selecciona para inspeccionar</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {sensors.map((sensor) => {
                  const isSelected = sensor.id === selectedSensor;
                  let badgeBg = 'rgba(16, 185, 129, 0.15)';
                  let badgeColor = '#10b981';
                  let statusText = 'Normal';

                  if (sensor.status === 'critical') {
                    badgeBg = 'rgba(239, 68, 68, 0.2)';
                    badgeColor = '#ef4444';
                    statusText = 'ALERTA HURTO';
                  } else if (sensor.status === 'warning') {
                    badgeBg = 'rgba(245, 158, 11, 0.2)';
                    badgeColor = '#f59e0b';
                    statusText = 'DESBALANCE';
                  }

                  return (
                    <div
                      key={sensor.id}
                      onClick={() => setSelectedSensor(sensor.id)}
                      className="glass-panel"
                      style={{
                        padding: '14px 16px',
                        cursor: 'pointer',
                        borderColor: isSelected ? '#00f2fe' : 'rgba(255, 255, 255, 0.08)',
                        background: isSelected ? 'rgba(0, 242, 254, 0.08)' : 'rgba(15, 23, 42, 0.5)',
                        transition: 'all 0.2s ease',
                        borderRadius: '12px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: isSelected ? '#00f2fe' : 'var(--text-main)' }}>
                          {sensor.id}
                        </span>
                        <span style={{
                          padding: '2px 8px',
                          borderRadius: '12px',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          background: badgeBg,
                          color: badgeColor
                        }}>
                          {statusText}
                        </span>
                      </div>

                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '4px' }}>
                        {sensor.name}
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        <span>📍 {sensor.location}</span>
                        <span style={{ color: sensor.status === 'critical' ? '#ef4444' : '#00f2fe', fontWeight: 600 }}>
                          Pérdida: {sensor.lossEstimate}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Detailed Telemetry & Loss Inspection for Selected Sensor */}
            <div className="glass-panel" style={{ padding: '24px', borderLeft: '3px solid #00f2fe' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#00f2fe', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Telemetría en Tiempo Real
                  </span>
                  <h3 style={{ margin: '2px 0 0 0', fontSize: '1.2rem', fontWeight: 800 }}>
                    {currentSensorData.id} — {currentSensorData.name}
                  </h3>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#10b981' }}>
                  <RefreshCw size={14} className="spin" />
                  <span>En vivo ({currentSensorData.lastPulse})</span>
                </div>
              </div>

              {/* Status Alert Banner if Critical */}
              {currentSensorData.status === 'critical' && (
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <AlertTriangle size={24} color="#ef4444" />
                  <div>
                    <div style={{ fontWeight: 800, color: '#ef4444', fontSize: '0.9rem' }}>
                      DETECCIÓN DE FRAUDE / CONEXIÓN DIRECTA
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      El sensor registró una caída abrupta de impedancia y pérdida del 24.8% en el tramo. Notificación enviada a cuadrilla.
                    </div>
                  </div>
                </div>
              )}

              {/* Metric Cards Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
                <div className="glass-panel" style={{ padding: '14px', background: 'rgba(7, 10, 18, 0.6)' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>TUS VALORES DE TENSIÓN</span>
                  <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#00f2fe' }}>{currentSensorData.voltage}</span>
                </div>

                <div className="glass-panel" style={{ padding: '14px', background: 'rgba(7, 10, 18, 0.6)' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>CORRIENTE MEDIDA (AMPERES)</span>
                  <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>{currentSensorData.current}</span>
                </div>

                <div className="glass-panel" style={{ padding: '14px', background: 'rgba(7, 10, 18, 0.6)' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>ESTIMACIÓN DE PÉRDIDA EN TRAMO</span>
                  <span style={{ fontSize: '1.3rem', fontWeight: 800, color: currentSensorData.status === 'critical' ? '#ef4444' : '#10b981' }}>
                    {currentSensorData.lossEstimate}
                  </span>
                </div>

                <div className="glass-panel" style={{ padding: '14px', background: 'rgba(7, 10, 18, 0.6)' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>FACTOR DE POTENCIA (COS PHI)</span>
                  <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>{currentSensorData.powerFactor}</span>
                </div>
              </div>

              {/* Anomaly & Action Details */}
              <div className="glass-panel" style={{ padding: '16px', background: 'rgba(15, 23, 42, 0.6)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>
                  Diagnóstico del Motor Analítico (IA / TDR)
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>
                  {currentSensorData.anomalies}
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>
                  Nuestra arquitectura integra la señal del sensor de campo con los algoritmos de balance de masa en baja tensión para geolocalizar la fuga antes de enviar la inspección física.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TECHNICAL ARCHITECTURE CTO (RODOLFO + DIEGO) */}
      {activeTab === 'architecture' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 12px 0', color: '#a855f7' }}>
              🛠️ Modelo de Trabajo Unificado: CTO (Rodolfo) + Desarrollo Plataforma (Diego)
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
              Para responder a la visión exigida por Alejandro, la estrategia tecnológica se divide de forma complementaria. Rodolfo lidera la infraestructura y la especificación de hardware en campo, mientras Diego ejecuta la ingestión de datos, analítica y visualización ejecutiva en la plataforma web.
            </p>
          </div>

          {/* 2 Column Architecture Division */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            {/* Rodolfo CTO Card */}
            <div className="glass-panel" style={{ padding: '24px', borderTop: '4px solid #a855f7' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ background: 'rgba(168, 85, 247, 0.2)', padding: '10px', borderRadius: '12px' }}>
                  <Cpu size={24} color="#a855f7" />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>Rodolfo (CTO)</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Infraestructura, Sensores & Hardware</span>
                </div>
              </div>

              <ul style={{ paddingLeft: '20px', color: 'var(--text-main)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
                <li><strong>Ecosistema de Sensores BT:</strong> Especificación y diseño de los dispositivos de monitoreo en troncales y subestaciones.</li>
                <li><strong>Telemetría y Firmware:</strong> Protocolos de transmisión (LoRa, Celular/NB-IoT) y frecuencia de pulso.</li>
                <li><strong>Lógica de Pérdidas de Campo:</strong> Modelado físico de caídas de tensión, impedancia de línea y algoritmos TDR.</li>
                <li><strong>Estrategia Tecnológica:</strong> Dirección técnica general y validación de normas EPRE Mendoza / Distribuidoras.</li>
              </ul>
            </div>

            {/* Diego Platform Lead Card */}
            <div className="glass-panel" style={{ padding: '24px', borderTop: '4px solid #00f2fe' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ background: 'rgba(0, 242, 254, 0.2)', padding: '10px', borderRadius: '12px' }}>
                  <Server size={24} color="#00f2fe" />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>Diego (Platform Lead)</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Plataforma Web, Demos & UX Executiva</span>
                </div>
              </div>

              <ul style={{ paddingLeft: '20px', color: 'var(--text-main)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
                <li><strong>Plataforma Web BP Bromteck:</strong> Desarrollo continuo en React/Vite y despliegue en Firebase Hosting.</li>
                <li><strong>Dashboards Ejecutivos y Operativos:</strong> Interfaz gráfica interactiva ("Los Ojos de la Red") para clientes.</li>
                <li><strong>Procesamiento & Ingesta Data:</strong> Integración de APIs de sensores y motor de cálculo de balance energético.</li>
                <li><strong>Kit Visual para Comercial:</strong> Demos interactivas listas para que Alejandro y Ventas muestren al cliente.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: COMMERCIAL & MARKETING KIT FOR CLIENTS */}
      {activeTab === 'commercial-kit' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '24px', borderLeft: '4px solid #10b981' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <Sparkles size={18} color="#10b981" />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Traducción para Marketing & Fuerza de Ventas
              </span>
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 10px 0' }}>
              📄 Proposal Pitch: "Somos los Ojos de tu Red"
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
              Este kit convierte la complejidad de nuestros sensores e ingeniería en un argumento de ventas contundente y directo para presentarle a los clientes (EDEMSA, distribuidoras y cooperativas eléctricas).
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div className="glass-panel" style={{ padding: '20px' }}>
              <div style={{ fontWeight: 800, color: '#00f2fe', fontSize: '1.05rem', marginBottom: '8px' }}>
                1. El Problema del Cliente
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                Las distribuidoras pierden entre un 12% y un 25% de la energía en Baja Tensión debido a hurtos directos, enganches clandestinos y fallas de balance no detectadas a tiempo.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '20px' }}>
              <div style={{ fontWeight: 800, color: '#10b981', fontSize: '1.05rem', marginBottom: '8px' }}>
                2. Nuestra Solución ("Ojos de la Red")
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                Desplegamos una capa de sensores no invasivos en troncales y subestaciones conectada a la plataforma BP Bromteck, dando visibilidad mapa a mapa en tiempo real.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '20px' }}>
              <div style={{ fontWeight: 800, color: '#a855f7', fontSize: '1.05rem', marginBottom: '8px' }}>
                3. El Retorno de Inversión (ROI)
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                Reducción de pérdidas del 15% al 30% en los primeros 90 días de implementación, recuperando la inversión de hardware y software en menos de 6 meses.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
