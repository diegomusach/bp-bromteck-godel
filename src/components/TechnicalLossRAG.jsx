import React, { useState } from 'react';
import { RAG_KNOWLEDGE_BASE } from '../data/mockData';
import { Bot, Send, Zap, Wrench, Layers, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';

export default function TechnicalLossRAG() {
  const [queryInput, setQueryInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: "¡Hola! Soy el asistente RAG de **BP Bromteck Godel** especializado en **Pérdidas Técnicas de Baja Tensión**.\n\nPuedes preguntarme sobre diagnósticos en la red de EDEMSA: *¿Qué cambia, Dónde y Cómo?* Te ofreceré recomendaciones muy concretas sobre conductores, materiales y balanceo de fases."
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!queryInput.trim()) return;

    const userText = queryInput.trim();
    const newMessages = [...messages, { sender: 'user', text: userText }];
    setMessages(newMessages);
    setQueryInput('');
    setIsTyping(true);

    setTimeout(() => {
      // Find matching mock RAG query or generate a structured response
      const matched = RAG_KNOWLEDGE_BASE.find((kb) =>
        userText.toLowerCase().includes('guaymallén') ||
        userText.toLowerCase().includes('conductores') ||
        userText.toLowerCase().includes('materiales')
      );

      let responseText = matched
        ? matched.response
        : `**Diagnóstico de Pérdidas Técnicas de Baja Tensión (Red EDEMSA)**:\n\n1. **¿Qué Cambia?**: Reemplazo de conductores descalibrados y degradados por **Conductor Preensamblado de Aluminio 3x70/50 mm²**.\n2. **¿Dónde?**: Ramal Secundario de Baja Tensión en Subestación N° 088 (Alimentador Maipú Centro).\n3. **¿Cómo?**: Instalación de conectores estancos por perforación de aislamiento (IPC) y balanceo de cargas en 18 suministros trifásicos.\n\n*Resultado Estimado*: Disminución del 11.5% en pérdidas por efecto Joule e incremento del perfil de tensión al usuario final de 198V a 220V nominal.`;

      if (userText.toLowerCase().includes('robar') || userText.toLowerCase().includes('colgarse') || userText.toLowerCase().includes('cuestionar')) {
        const questionMatch = RAG_KNOWLEDGE_BASE.find((kb) => kb.query.includes('cuestionar'));
        if (questionMatch) responseText = questionMatch.response;
      }

      setMessages([...newMessages, { sender: 'assistant', text: responseText }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleQuickQuestion = (qText) => {
    setQueryInput(qText);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Banner */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #00f2fe 0%, #8b5cf6 100%)',
            padding: '10px',
            borderRadius: '12px',
            display: 'flex'
          }}>
            <Bot size={24} color="#070a12" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ fontSize: '1.6rem' }} className="gradient-text">
                Asistente RAG: Pérdidas Técnicas en Red de Baja Tensión
              </h2>
              <span className="glass-pill badge-info">Prioridad 1 — EDEMSA</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Responde con precisión de ingeniería eléctrica: <strong>Qué cambia, Dónde y Cómo</strong> con mejoras concretas en materiales y conductores.
            </p>
          </div>
        </div>
      </div>

      {/* RAG Workspace Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 380px) 1fr', gap: '24px', alignItems: 'start' }}>
        
        {/* Preset Queries & Technical Specs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="glass-panel" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '0.95rem', color: '#00f2fe', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HelpCircle size={16} />
              <span>Consultas RAG Frecuentes (EDEMSA)</span>
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={() => handleQuickQuestion("¿Qué cambios inmediatos debemos hacer en los conductores de Baja Tensión en Guaymallén?")}
                className="btn-secondary"
                style={{ textAlign: 'left', fontSize: '0.82rem', padding: '10px 12px', display: 'block', width: '100%', borderRadius: '8px' }}
              >
                1. Conductores & Materiales en Guaymallén
              </button>

              <button
                onClick={() => handleQuickQuestion("¿De qué otra manera podemos cuestionar a la IA si el cliente va a colgarse o robar energía?")}
                className="btn-secondary"
                style={{ textAlign: 'left', fontSize: '0.82rem', padding: '10px 12px', display: 'block', width: '100%', borderRadius: '8px' }}
              >
                2. Cuestionamiento IA: Riesgo de Hurto ("Colgarse")
              </button>

              <button
                onClick={() => handleQuickQuestion("¿Dónde están las mayores pérdidas por efecto Joule en Baja Tensión de Maipú y cómo corregirlas?")}
                className="btn-secondary"
                style={{ textAlign: 'left', fontSize: '0.82rem', padding: '10px 12px', display: 'block', width: '100%', borderRadius: '8px' }}
              >
                3. Pérdidas por Efecto Joule en Maipú
              </button>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '20px', background: 'rgba(139, 92, 246, 0.05)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
            <h4 style={{ fontSize: '0.95rem', color: '#c4b5fd', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Wrench size={16} />
              <span>Estándar Bromteck de Materiales</span>
            </h4>
            <ul style={{ fontSize: '0.82rem', color: 'var(--text-muted)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} color="#10b981" /> Conductor Al Preensamblado XLPE 3x95/50mm²
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} color="#10b981" /> Conectores de Perforación de Aislamiento (IPC)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} color="#10b981" /> Pilares Integrados de Medición Antifraude
              </li>
            </ul>
          </div>
        </div>

        {/* Chat Console */}
        <div className="glass-panel" style={{ height: '560px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Chat Messages */}
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  background: m.sender === 'user' ? 'linear-gradient(135deg, rgba(0, 242, 254, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)' : 'rgba(15, 23, 42, 0.85)',
                  border: m.sender === 'user' ? '1px solid rgba(0, 242, 254, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: m.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                  padding: '14px 18px',
                  color: '#f8fafc',
                  fontSize: '0.92rem',
                  lineHeight: '1.6',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {m.text}
              </div>
            ))}

            {isTyping && (
              <div style={{ alignSelf: 'flex-start', background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '12px 18px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                El asistente RAG de Bromteck está procesando la consulta técnica...
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} style={{ padding: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', gap: '12px', background: 'rgba(9, 13, 22, 0.6)' }}>
            <input
              type="text"
              className="input-glass"
              placeholder="Consulta al RAG sobre materiales, conductores o zonas en baja tensión..."
              value={queryInput}
              onChange={(e) => setQueryInput(e.target.value)}
            />
            <button type="submit" className="btn-primary" style={{ padding: '10px 18px' }}>
              <Send size={16} />
              <span>Preguntar</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
