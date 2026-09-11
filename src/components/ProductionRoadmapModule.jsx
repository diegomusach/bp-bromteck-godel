import React, { useState } from 'react';
import { Rocket, CheckCircle2, Circle, ArrowRight, ShieldCheck, Key, Database, Smartphone, HardDrive, FileText, Lock, ChevronRight, Zap } from 'lucide-react';

export default function ProductionRoadmapModule() {
  const [completedSteps, setCompletedSteps] = useState([1]); // Step 1 prototype done

  const toggleStep = (stepId) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter(s => s !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const steps = [
    {
      id: 1,
      title: "1. Prototipo & Motor de Lógica Regulada (COMPLETADO)",
      timeframe: "Finalizado",
      category: "Frontend & Lógica",
      status: "DONE",
      icon: ShieldCheck,
      description: "Plataforma web interactiva en vivo, motor de cálculo Res. EPRE N° 129/18, inputs en rojo, módulo de requisitos y sistema de comentarios compartidos entre Diego y Alejandro.",
      actions: [
        "Lógica matemática ECNR (48 meses retroactivos) funcionando.",
        "Sistema de autenticación y comentarios compartidos Diego & Alejandro.",
        "Simulador de carga de fotos de campo e interfaz móvil PWA.",
        "Desplegado en producción en Firebase Hosting."
      ],
      requirementsNeeded: "Ninguno adicional (ya desplegado)."
    },
    {
      id: 2,
      title: "2. Habilitación de API Keys de Nube (Google Cloud Platform)",
      timeframe: "1 a 2 Días",
      category: "APIs & Servicios",
      status: "PENDING",
      icon: Key,
      description: "Conexión directa con la API oficial de Google Street View para descargar automáticamente la foto de fachada de cualquier coordenada de Mendoza.",
      actions: [
        "Crear / Activar proyecto en Google Cloud Console.",
        "Habilitar 'Google Street View Static API' y 'Maps JavaScript API'.",
        "Configurar restricciones de dominio para monitoreo-activos-bromteck.web.app.",
        "Reemplazar la variable VITE_GCP_API_KEY en el archivo .env."
      ],
      requirementsNeeded: "Cuenta en Google Cloud Platform + Crédito API ($200 USD/mes gratis de Google)."
    },
    {
      id: 3,
      title: "3. Integración con ERP / SAP Comercial de EDEMSA",
      timeframe: "3 a 5 Días",
      category: "Backend & Base de Datos",
      status: "PENDING",
      icon: Database,
      description: "Conexión con la base de datos de EDEMSA para que la barra de búsqueda consulte los 450,000 usuarios reales de Mendoza en lugar del padrón demo.",
      actions: [
        "Solicitar al área de TI de EDEMSA un endpoint REST / GraphQL o vista SQL de lectura a la tabla de suministros.",
        "Mapear los campos: Numero_Suministro, Titular, Coordenadas_GIS, Tarifa_Contratada, Historico_Mora.",
        "Crear conector seguro HTTPS con token Bearer / OAuth2.",
        "Reemplazar la lista demo por consultas dinámicas a la base de datos."
      ],
      requirementsNeeded: "Credenciales de lectura de la base de datos de EDEMSA / SAP ERP."
    },
    {
      id: 4,
      title: "4. Despliegue de App Móvil PWA en Teléfonos de Cuadrillas",
      timeframe: "3 a 4 Días",
      category: "Operaciones de Campo",
      status: "PENDING",
      icon: Smartphone,
      description: "Habilitación de la App Móvil en los smartphones de los linieros (Camilo y Enrique) para captura de fotos de pilares en la casa del cliente.",
      actions: [
        "Configurar Service Worker para almacenamiento local offline ( IndexedDB / SQLite ).",
        "Alta de usuarios de campo (ej: camilo_inspecciones, enrique_inspecciones) en Firebase Auth.",
        "Probar la captura de foto nativa con timestamp UTC y coordenadas GPS indelebles.",
        "Instalar acceso directo PWA en las tablets/celulares de cuadrillas."
      ],
      requirementsNeeded: "Smartphones Android/iOS con GPS y cámara para los linieros."
    },
    {
      id: 5,
      title: "5. Emparejamiento de Hardware TDR & Pinzas Bluetooth",
      timeframe: "5 a 7 Días",
      category: "Hardware Antifraude",
      status: "PENDING",
      icon: HardDrive,
      description: "Integración con el equipamiento físico de reflectometría TDR y pinzas amperométricas para detección de puentes clandestinos detras de la pared.",
      actions: [
        "Adquirir 2 unidades de Reflectómetro TDR de campo (ej. Megger TDR500/3 o Sonel TDR-420).",
        "Adquirir pinzas amperométricas Bluetooth (Fluke 376 FC).",
        "Integrar la librería de comunicación Bluetooth Low Energy (BLE) en la app móvil.",
        "Capacitar a las cuadrillas en la toma de pulsos de reflectometría en pilares ET-201."
      ],
      requirementsNeeded: "Hardware TDR portátil + Pinza Amperométrica Bluetooth."
    },
    {
      id: 6,
      title: "6. Motor de Generación de PDF de Actas ECNR (Res. EPRE 129/18)",
      timeframe: "2 a 3 Días",
      category: "Legales & Facturación",
      status: "PENDING",
      icon: FileText,
      description: "Emisión automática del expediente legal de cobro retroactivo con marca de agua GPS e importe en ARS/USD listo para refacturar.",
      actions: [
        "Desplegar Cloud Function en Firebase con Puppeteer / PDFKit.",
        "Diseñar plantilla PDF oficial homologada con los logos de EDEMSA y EPRE.",
        "Incrustar fotos del pilar con sello digital indeleble de fecha, hora y coordenadas.",
        "Habilitar botón de envío automático por correo/factura al departamento comercial."
      ],
      requirementsNeeded: "Plantilla PDF aprobada por el Departamento Comercial de EDEMSA."
    }
  ];

  const progressPercent = Math.round((completedSteps.length / steps.length) * 100);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* Header Banner */}
      <div className="glass-panel" style={{
        padding: '32px',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(16, 185, 129, 0.2) 100%)',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span className="glass-pill badge-success">
              <Rocket size={14} />
              Plan de Puesta en Producción
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              EDEMSA Operations Roadmap
            </span>
          </div>

          <h2 style={{ fontSize: '2.2rem', marginBottom: '10px' }} className="gradient-text">
            Pasos a Seguir para que BP Bromteck sea 100% Real
          </h2>
          <p style={{ color: '#e2e8f0', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '900px', marginBottom: '24px' }}>
            Guía práctica paso a paso para pasar del prototipo web funcional a la integración completa con los sistemas de datos, hardware de campo y 450,000 clientes reales de EDEMSA en Mendoza.
          </p>

          {/* Progress Bar */}
          <div style={{ maxWidth: '600px', background: 'rgba(15,23,42,0.8)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#fff', marginBottom: '8px', fontWeight: 600 }}>
              <span>Avance de Implementación Real</span>
              <span style={{ color: '#10b981' }}>{progressPercent}% Completado</span>
            </div>
            <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ width: `${progressPercent}%`, height: '100%', background: 'linear-gradient(90deg, #00f2fe 0%, #10b981 100%)', transition: 'width 0.4s ease' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Zap color="#10b981" size={20} />
          <span>Desglose de los 6 Pasos Operativos:</span>
        </h3>

        {steps.map((step) => {
          const isDone = completedSteps.includes(step.id);
          const StepIcon = step.icon;

          return (
            <div
              key={step.id}
              className="glass-panel"
              style={{
                padding: '24px',
                border: isDone ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
                background: isDone ? 'rgba(16, 185, 129, 0.04)' : 'rgba(15, 23, 42, 0.7)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <button
                    onClick={() => toggleStep(step.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    {isDone ? (
                      <CheckCircle2 size={28} color="#10b981" />
                    ) : (
                      <Circle size={28} color="var(--text-muted)" />
                    )}
                  </button>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <h4 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 700 }}>
                        {step.title}
                      </h4>
                      <span className={`glass-pill ${isDone ? 'badge-success' : 'badge-info'}`} style={{ fontSize: '0.7rem' }}>
                        {step.category}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                      {step.description}
                    </p>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span className="glass-pill badge-warning" style={{ fontSize: '0.75rem' }}>
                    ⏱️ {step.timeframe}
                  </span>
                </div>
              </div>

              {/* Action Details */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div>
                  <h5 style={{ fontSize: '0.82rem', color: '#00f2fe', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                    Acciones Concretas a Ejecutar:
                  </h5>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {step.actions.map((act, idx) => (
                      <li key={idx} style={{ fontSize: '0.85rem', color: '#e2e8f0', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <ArrowRight size={14} color="#00f2fe" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-panel" style={{ padding: '14px', background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  <h5 style={{ fontSize: '0.82rem', color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', fontWeight: 700 }}>
                    🔴 Requisito / Credencial Necesaria:
                  </h5>
                  <p style={{ fontSize: '0.88rem', color: '#fca5a5', lineHeight: '1.4', fontWeight: 600 }}>
                    {step.requirementsNeeded}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
