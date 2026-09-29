import React from 'react';
import { Rocket, ShieldCheck, Key, Database, Smartphone, HardDrive, FileText, Zap, UserCheck, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function ProductionRoadmapModule() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* Header Banner */}
      <div className="glass-panel" style={{
        padding: '32px',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(16, 185, 129, 0.18) 100%)',
        border: '1px solid rgba(16, 185, 129, 0.35)',
        position: 'relative'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="glass-pill badge-success">
                <Rocket size={14} />
                Informe Ejecutivo de Despliegue Real
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Dirección de Producto (Diego Musach) & Arquitectura (Alejandro Cubino)
              </span>
            </div>

            <h2 style={{ fontSize: '2.2rem', marginBottom: '10px' }} className="gradient-text">
              Plan de Producción Real & Conexión EDEMSA
            </h2>
            <p style={{ color: '#e2e8f0', fontSize: '1rem', lineHeight: '1.6', maxWidth: '880px' }}>
              Documento ejecutivo que detalla el estado actual de la plataforma, los <strong>requerimientos reales</strong> y la hoja de ruta técnica para conectar la solución a los 450,000 clientes de la red de EDEMSA en Mendoza.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '16px 20px', background: 'rgba(16, 185, 129, 0.08)', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
            <div style={{ fontSize: '0.75rem', color: '#6ee7b7', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Estado del Sistema</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10b981', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={18} />
              <span>Fase 1 Demo Lista</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: LO QUE YA ESTÁ CONSTRUIDO (ESTADO REAL EN CÓDIGO) */}
      <div className="glass-panel" style={{ padding: '28px', border: '1px solid rgba(0, 242, 254, 0.3)', background: 'rgba(0, 242, 254, 0.03)' }}>
        <h3 style={{ fontSize: '1.3rem', color: '#00f2fe', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ShieldCheck size={22} color="#00f2fe" />
          <span>1. Estado Real del Código: Lo que YA está Construido y Funcionando</span>
        </h3>
        <p style={{ fontSize: '0.95rem', color: '#e2e8f0', lineHeight: '1.6', marginBottom: '18px' }}>
          La base de software actual no es un prototipo estático; contiene los motores de cálculo regulatorio, el almacenamiento de notas compartidas entre usuarios y la simulación interactiva de campo:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
          <div style={{ padding: '16px', background: 'rgba(15,23,42,0.8)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: '0.85rem', color: '#00f2fe', fontWeight: 700, marginBottom: '6px' }}>
              • Motor de Cálculo Res. EPRE N° 129/18
            </div>
            <div style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.5' }}>
              Fórmula de Energía Consumida No Registrada (ECNR) a 48 meses retroactivos con recargo del 50% al 100% por reincidencia.
            </div>
          </div>

          <div style={{ padding: '16px', background: 'rgba(15,23,42,0.8)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: '0.85rem', color: '#8b5cf6', fontWeight: 700, marginBottom: '6px' }}>
              • Registro Colaborativo Diego & Alejandro
            </div>
            <div style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.5' }}>
              Sistema de notas guardadas con firma de usuario (`dmusach` / `alejandro`) y timestamp indeleble para cada proyecto.
            </div>
          </div>

          <div style={{ padding: '16px', background: 'rgba(15,23,42,0.8)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 700, marginBottom: '6px' }}>
              • Generador PDF & Captura de Fotos
            </div>
            <div style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.5' }}>
              Emisión instantánea de Acta ECNR imprimible y simulador de carga de fotos tomadas por la cámara del celular.
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: HOJA DE RUTA HUMANA DE PRODUCCIÓN REAL (SIN CHECKBOXES FALSOS) */}
      <div className="glass-panel" style={{ padding: '28px' }}>
        <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Zap size={22} color="#f59e0b" />
          <span>2. Hoja de Ruta Ejecutiva: Los 5 Pasos Reales para Conectar EDEMSA</span>
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          {/* Step 1 */}
          <div className="glass-panel" style={{ padding: '20px', background: 'rgba(15, 23, 42, 0.6)', borderLeft: '4px solid #00f2fe' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
                Paso 1: Activación de la API Key Corporativa de Google Cloud (Street View)
              </div>
              <span className="glass-pill badge-info">Estimado: 1 a 2 días</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '12px' }}>
              Habilitar en Google Cloud Console las APIs <code>Street View Static API</code> y <code>Maps JavaScript API</code> para que al ingresar cualquier número de cuenta de EDEMSA, la plataforma descargue automáticamente el frente actualizado de la casa en Mendoza.
            </p>
            <div style={{ fontSize: '0.82rem', color: '#ef4444', fontWeight: 700 }}>
              🔴 REQUISITO: Dar de alta API Key en GCP ($200 USD/mes gratis de crédito de Google).
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-panel" style={{ padding: '20px', background: 'rgba(15, 23, 42, 0.6)', borderLeft: '4px solid #3b82f6' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
                Paso 2: Conexión con la Base de Datos Comercial SAP / Oracle de EDEMSA
              </div>
              <span className="glass-pill badge-info">Estimado: 3 a 5 días</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '12px' }}>
              Solicitar al área de sistemas de EDEMSA un conector REST o vista de lectura a la tabla <code>suministros_bt</code> para consultar datos reales: número de cuenta, titular, coordenadas GIS y meses de impago.
            </p>
            <div style={{ fontSize: '0.82rem', color: '#ef4444', fontWeight: 700 }}>
              🔴 REQUISITO: Credencial de lectura HTTPS a la base de datos de EDEMSA.
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-panel" style={{ padding: '20px', background: 'rgba(15, 23, 42, 0.6)', borderLeft: '4px solid #8b5cf6' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
                Paso 3: Despliegue de la App Móvil PWA en Teléfonos de Cuadrillas
              </div>
              <span className="glass-pill badge-info">Estimado: 3 a 4 días</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '12px' }}>
              Instalar la PWA en las tablets de campo de los linieros (Camilo y Enrique). Permite sacar fotos directamente del pilar con sello indeleble de marca de agua con coordenadas GPS y hora UTC, funcionando incluso sin señal 4G.
            </p>
            <div style={{ fontSize: '0.82rem', color: '#ef4444', fontWeight: 700 }}>
              🔴 REQUISITO: Dispositivos Android/iOS con GPS y cámara para los linieros.
            </div>
          </div>

          {/* Step 4 */}
          <div className="glass-panel" style={{ padding: '20px', background: 'rgba(15, 23, 42, 0.6)', borderLeft: '4px solid #f59e0b' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
                Paso 4: Adquisición & Emparejamiento de Hardware TDR & Pinzas Bluetooth
              </div>
              <span className="glass-pill badge-info">Estimado: 5 a 7 días</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '12px' }}>
              Adquirir 2 unidades de reflectómetro TDR (Megger TDR500 o Sonel TDR-420) y pinzas amperométricas Fluke 376 FC. La app se conecta por Bluetooth y detecta puentes clandestinos empotrados detras del pilar sin romper la pared.
            </p>
            <div style={{ fontSize: '0.82rem', color: '#ef4444', fontWeight: 700 }}>
              🔴 REQUISITO: Compra de 2 reflectómetros TDR + pinza Bluetooth.
            </div>
          </div>

          {/* Step 5 */}
          <div className="glass-panel" style={{ padding: '20px', background: 'rgba(15, 23, 42, 0.6)', borderLeft: '4px solid #10b981' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
                Paso 5: Automatización de Expedientes PDF & Facturación Comercial
              </div>
              <span className="glass-pill badge-info">Estimado: 2 a 3 días</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '12px' }}>
              Configurar el generador de PDF con la plantilla oficial de EDEMSA y EPRE Mendoza para emitir la notificación legal de deuda ECNR lista para ser cobrada en la boleta de luz.
            </p>
            <div style={{ fontSize: '0.82rem', color: '#ef4444', fontWeight: 700 }}>
              🔴 REQUISITO: Visto bueno del departamento comercial de EDEMSA sobre la plantilla PDF.
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 3: PLAN DE AUDITORÍA DE ALGORITMO & AISLAMIENTO DE FALLAS (CHARLA CON NICO) */}
      <div className="glass-panel" style={{
        padding: '28px',
        border: '2px solid #a855f7',
        background: 'rgba(168, 85, 247, 0.04)',
        boxShadow: '0 0 30px rgba(168, 85, 247, 0.15)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
          <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
            <AlertTriangle size={24} color="#c4b5fd" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="glass-pill badge-warning" style={{ fontSize: '0.7rem' }}>
                Prioridad Estratégica
              </span>
              <span style={{ fontSize: '0.8rem', color: '#c4b5fd' }}>Insight de Ingeniería & Auditoría Algorítmica</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#c4b5fd', fontWeight: 800 }}>
              3. Plan de Auditoría de Algoritmo: Aislamiento de Fallas (PNT vs. PT)
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#e2e8f0', marginTop: '2px' }}>
              Fundamento técnico sobre cómo evitar que el algoritmo atribuya erróneamente pérdidas técnicas a pérdidas no técnicas (hurto).
            </p>
          </div>
        </div>

        {/* Diagnóstico de los 3 Puntos Críticos */}
        <div className="responsive-grid" style={{ marginBottom: '24px' }}>
          
          <div className="glass-panel" style={{ padding: '16px', background: 'rgba(9, 13, 22, 0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 700, marginBottom: '6px' }}>
              1. La Trampa Matemática del Cálculo por Residuo
            </div>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
              En baja tensión la Pérdida No Técnica (PNT) se calcula por residuo: <code style={{ color: '#00f2fe' }}>PNT = Inyectada - PT Teórica</code>. Si el GIS tiene cables de menor sección a la real, empalmes sulfatados o desbalance de fases, la PT real es 11-12% (no 6,77%), por lo que el sistema <strong>infla artificialmente la PNT (el 9,009% en pantalla)</strong>.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '16px', background: 'rgba(9, 13, 22, 0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 700, marginBottom: '6px' }}>
              2. Asimetría Temporal y Ciclos de Facturación
            </div>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
              La inyección se mide en tiempo real o diario, mientras que la facturación residencial se lee en ciclos bimestrales con estimaciones. Si el motor no desestacionaliza con precisión los 10.154 clientes contra la ventana del alimentador, genera una <strong>"pérdida aparente"</strong> que no existe en el cable.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '16px', background: 'rgba(9, 13, 22, 0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 700, marginBottom: '6px' }}>
              3. Balance de Masa a Nivel Transformador
            </div>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
              En BT falta telemedición real aguas abajo del transformador (solo hay en cabecera y lecturas comerciales dispersas). Sin telemedición abajo, el salto entre alimentador y cliente final es una <strong>aproximación estadística, no un dato duro</strong>.
            </p>
          </div>

        </div>

        {/* PLAN DE ACCIÓN CONCRETO (LOS 3 PASOS DE AUDITORÍA) */}
        <div style={{ background: 'rgba(168, 85, 247, 0.1)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
          <h4 style={{ fontSize: '1.05rem', color: '#c4b5fd', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={18} />
            <span>Plan de Acción Inmediato para Auditar el Algoritmo (Antes de Quedar Expuesto)</span>
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            <div style={{ padding: '12px 16px', background: 'rgba(15,23,42,0.8)', borderRadius: '8px', borderLeft: '4px solid #a855f7' }}>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '4px' }}>
                • Paso A: Auditar la Base de Cálculo con Luis
              </div>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                Sentarse con Luis a contrastar qué fórmula de pérdidas técnicas en BT usa internamente EDEMSA contra los supuestos del algoritmo. Si los supuestos de impedancia y caída de tensión difieren, el 9% está distorsionado de entrada.
              </p>
            </div>

            <div style={{ padding: '12px 16px', background: 'rgba(15,23,42,0.8)', borderRadius: '8px', borderLeft: '4px solid #a855f7' }}>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '4px' }}>
                • Paso B: Seguimiento del Recambio de Medidores en Alimentador Malargüe
              </div>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                Medir el alimentador Malargüe a 30 y 60 días del recambio de los 187 medidores electromecánicos. Si la inyección y el consumo facturado no se acercan (la PNT no baja), la causa es estructural de red (pérdida técnica) y el modelo debe re-calibrarse para no mandar a las cuadrillas a buscar fantasmas.
              </p>
            </div>

            <div style={{ padding: '12px 16px', background: 'rgba(15,23,42,0.8)', borderRadius: '8px', borderLeft: '4px solid #a855f7' }}>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '4px' }}>
                • Paso C: Enfoque en Zonas de Alta Densidad de Fraude Real
              </div>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                Probar el sistema en zonas con tasa de hurto histórica real alta (como Las Heras o San Rafael centro), y no en Malargüe, donde la tasa de fraude intrínseca es de apenas 1% a 3% y cualquier desvío del algoritmo resalta de inmediato.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
