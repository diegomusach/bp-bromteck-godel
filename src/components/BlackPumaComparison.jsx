import React from 'react';
import { BLACK_PUMA_BENCHMARK, DEEP_UTILITIES_IDEAS } from '../data/mockData';
import { ExternalLink, CheckCircle2, Zap, ArrowRight, ShieldCheck, Sparkles, TrendingUp, HelpCircle, Layers, Cpu, Database } from 'lucide-react';

export default function BlackPumaComparison({ onNavigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* Guía de Ubicación de Sugerencias Box */}
      <div className="glass-panel" style={{
        padding: '20px 24px',
        background: 'rgba(0, 242, 254, 0.06)',
        border: '1px solid rgba(0, 242, 254, 0.3)',
        borderRadius: '14px'
      }}>
        <h4 style={{ fontSize: '1rem', color: '#00f2fe', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HelpCircle size={18} />
          <span>📍 Ubicación de las Sugerencias y Soluciones en el Dashboard</span>
        </h4>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: '1.5' }}>
          Todas las sugerencias operativas y sus <strong>INPUTS (en rojo 🔴)</strong> están disponibles en las siguientes pestañas:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
          <div onClick={() => onNavigate('engineering')} style={{ cursor: 'pointer', padding: '10px 14px', background: 'rgba(15,23,42,0.6)', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.4)' }}>
            <strong style={{ color: '#ef4444', fontSize: '0.85rem' }}>1. Soluciones Concretas EPRE & Inputs:</strong>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', marginTop: '2px' }}>10 proyectos técnicos con indicación explícita de inputs en rojo.</div>
          </div>
          <div onClick={() => onNavigate('low-voltage')} style={{ cursor: 'pointer', padding: '10px 14px', background: 'rgba(15,23,42,0.6)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <strong style={{ color: '#6ee7b7', fontSize: '0.85rem' }}>2. Baja Tensión & Hurto IA:</strong>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', marginTop: '2px' }}>Sugerencias por suministro con Street View y fuentes de datos.</div>
          </div>
          <div onClick={() => onNavigate('rag')} style={{ cursor: 'pointer', padding: '10px 14px', background: 'rgba(15,23,42,0.6)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <strong style={{ color: '#c4b5fd', fontSize: '0.85rem' }}>3. RAG Pérdidas Técnicas:</strong>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', marginTop: '2px' }}>Asistente IA que responde "Qué cambia, Dónde y Cómo".</div>
          </div>
        </div>
      </div>

      {/* Header Banner */}
      <div className="glass-panel" style={{
        padding: '32px',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.4) 100%)',
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
            Ingeniería Inversa: BP vs. BP Bromteck
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '24px' }}>
            Analizamos minuciosamente cómo opera <strong>BP</strong> hoy con <strong>EDEMSA</strong> en Baja Tensión y detallamos las fuentes de datos e <strong>INPUTS necesarios (en rojo 🔴)</strong> para implementar cada solución.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <button onClick={() => onNavigate('engineering')} className="btn-primary">
              <span>Ver Soluciones & Inputs EPRE</span>
              <ArrowRight size={18} />
            </button>
            <button onClick={() => onNavigate('low-voltage')} className="btn-secondary">
              <span>Explorar Hurto por IA Visual</span>
            </button>
          </div>
        </div>
      </div>

      {/* PROMINENT DASHBOARD SECTION: 🔴 MATRIZ DE INPUTS Y FUENTES DE DATOS REQUERIDAS */}
      <div className="glass-panel" style={{
        padding: '28px',
        border: '2px solid #ef4444',
        background: 'rgba(239, 68, 68, 0.04)',
        boxShadow: '0 0 30px rgba(239, 68, 68, 0.15)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
          <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
            <Database size={24} color="#ef4444" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.4rem', color: '#ef4444', fontWeight: 800 }}>
              🔴 Matriz de Inputs & Fuentes de Datos Necesarias en el Dashboard
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#fca5a5' }}>
              Especificación técnica de las fuentes de datos (Google Street View, Red GIS, ERP, TDR) para cada implementación
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '14px' }}>
          {DEEP_UTILITIES_IDEAS.map((idea) => (
            <div key={idea.id} className="glass-panel" style={{ padding: '16px', background: 'rgba(9, 13, 22, 0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.82rem', color: '#fff', fontWeight: 700, marginBottom: '6px' }}>
                {idea.title}
              </div>
              <div style={{
                padding: '8px 10px',
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid #ef4444',
                borderRadius: '6px',
                fontSize: '0.78rem',
                color: '#fca5a5',
                fontWeight: 700
              }}>
                {idea.requiredInput}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILED PANEL: ¿Cómo lo hace BP (Black Puma) hoy en EDEMSA? */}
      <div className="glass-panel" style={{ padding: '28px', border: '1px solid rgba(245, 158, 11, 0.3)', background: 'rgba(245, 158, 11, 0.02)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
            <Cpu size={24} color="#f59e0b" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.4rem', color: '#fde047' }}>
              ¿Cómo lo hace BP (Black Puma) hoy en EDEMSA?
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Desglose paso a paso del flujo de trabajo operativo actual de la competencia
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          <div className="glass-panel" style={{ padding: '16px', background: 'rgba(15,23,42,0.8)' }}>
            <div style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: 700, marginBottom: '4px' }}>Paso 1: Extracción de Mora</div>
            <p style={{ fontSize: '0.85rem', color: '#e2e8f0', lineHeight: '1.5' }}>
              Extrae el padrón de clientes en Baja Tensión de EDEMSA y filtra los suministros con histórico de impago y morosidad acumulada.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '16px', background: 'rgba(15,23,42,0.8)' }}>
            <div style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: 700, marginBottom: '4px' }}>Paso 2: Geolocalización en Maps</div>
            <p style={{ fontSize: '0.85rem', color: '#e2e8f0', lineHeight: '1.5' }}>
              Ubica los suministros morosos en Google Maps e identifica de forma básica si la manzana es comercial, industrial o residencial.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '16px', background: 'rgba(15,23,42,0.8)' }}>
            <div style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: 700, marginBottom: '4px' }}>Paso 3: Análisis de Estructura</div>
            <p style={{ fontSize: '0.85rem', color: '#e2e8f0', lineHeight: '1.5' }}>
              Conecta la falta de pago con los cambios estructurales de la zona para determinar si el cliente tiene riesgo de corte.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '16px', background: 'rgba(15,23,42,0.8)' }}>
            <div style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: 700, marginBottom: '4px' }}>Paso 4: Conclusión de Acción</div>
            <p style={{ fontSize: '0.85rem', color: '#e2e8f0', lineHeight: '1.5' }}>
              Le indica a EDEMSA por qué tendría que accionar y sugiere el recambio de medidores o la suspensión del servicio.
            </p>
          </div>
        </div>

        {/* COMPARACIÓN: Cómo lo Supera BP Bromteck */}
        <div style={{ background: 'rgba(0, 242, 254, 0.05)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(0, 242, 254, 0.25)' }}>
          <h4 style={{ fontSize: '1.05rem', color: '#00f2fe', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={18} />
            <span>¿Cómo lo Superamos en BP Bromteck? (El Valor Agregado)</span>
          </h4>
          <ul style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: '1.6', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: '#00f2fe', fontWeight: 700 }}>1.</span>
              <span><strong>IA Visual de Fachadas en Street View</strong>: No solo mapeamos la zona en Google Maps; cuestionamos a la IA comparando fotos del frente de la casa para detectar persianas comerciales no declaradas o caños de acometida desviados antes del pilar (ET-201).</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: '#00f2fe', fontWeight: 700 }}>2.</span>
              <span><strong>Liquidación Retroactiva ECNR (Res. EPRE Mendoza N° 129/18)</strong>: Calculamos automáticamente la energía consumida no registrada y la multa retroactiva lista para cobro comercial.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: '#00f2fe', fontWeight: 700 }}>3.</span>
              <span><strong>RAG de Pérdidas Técnicas con Insumos Reales</strong>: Le indicamos a EDEMSA *Qué cambia, Dónde y Cómo*, especificando el reemplazo de líneas de cobre desnudo por conductor de aluminio preensamblado 3x95/50mm² y conectores IPC.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
