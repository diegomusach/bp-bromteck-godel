import React, { useState } from 'react';
import { Lock, User, Zap, KeyRound, ChevronRight, AlertCircle, UserCheck, ShieldCheck } from 'lucide-react';
import { VALID_USERS } from '../data/mockData';
import { sanitizeInput, createSessionToken, checkLoginRateLimit, recordFailedLogin, clearLoginAttempts } from '../utils/security';

export default function LoginGateway({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Check anti-bruteforce rate limit
    const rateCheck = checkLoginRateLimit();
    if (!rateCheck.allowed) {
      setError(rateCheck.message);
      return;
    }

    const cleanUser = sanitizeInput(username.trim().toLowerCase());
    const cleanPass = password;

    const found = VALID_USERS.find(
      (u) => u.username.toLowerCase() === cleanUser && u.pass === cleanPass
    );

    if (found) {
      setError('');
      clearLoginAttempts();
      const sessionToken = createSessionToken(found);
      const authenticatedUser = { ...found, sessionToken };
      onLoginSuccess(authenticatedUser);
    } else {
      recordFailedLogin();
      setError('Credenciales inválidas o incompletas. Verificá tu usuario y contraseña (dmusach o alejandro).');
    }
  };

  const selectUserProfile = (u) => {
    setUsername(u.username);
    setPassword(''); // Requires typing password explicitly!
    setError('');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '20%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(0,242,254,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        zIndex: 0
      }} />

      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '480px',
        padding: '36px',
        position: 'relative',
        zIndex: 1,
        border: '1px solid rgba(0, 242, 254, 0.2)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(0, 242, 254, 0.15)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
            border: '1px solid rgba(0, 242, 254, 0.4)',
            marginBottom: '16px',
            boxShadow: '0 0 20px rgba(0, 242, 254, 0.3)'
          }}>
            <Zap size={32} color="#00f2fe" />
          </div>
          <h1 style={{ fontSize: '1.8rem', marginBottom: '6px' }} className="gradient-text">
            BP Bromteck
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Inteligencia en Baja Tensión & EDEMSA Solutions
          </p>
        </div>

        {/* SELECTOR DE USUARIO */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
            1. Seleccionar Perfil de Usuario:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <button
              type="button"
              onClick={() => selectUserProfile(VALID_USERS[0])}
              className="glass-panel glass-panel-hover"
              style={{
                padding: '12px',
                cursor: 'pointer',
                border: username === 'dmusach' ? '2px solid #00f2fe' : '1px solid rgba(255,255,255,0.1)',
                background: username === 'dmusach' ? 'rgba(0, 242, 254, 0.15)' : 'rgba(15,23,42,0.6)',
                borderRadius: '10px',
                textAlign: 'left'
              }}
            >
              <div style={{ fontSize: '0.75rem', color: '#00f2fe', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <UserCheck size={14} /> Diego Musach
              </div>
              <div style={{ fontSize: '0.8rem', color: '#fff', marginTop: '2px' }}>dmusach</div>
            </button>

            <button
              type="button"
              onClick={() => selectUserProfile(VALID_USERS[1])}
              className="glass-panel glass-panel-hover"
              style={{
                padding: '12px',
                cursor: 'pointer',
                border: username === 'alejandro' ? '2px solid #8b5cf6' : '1px solid rgba(255,255,255,0.1)',
                background: username === 'alejandro' ? 'rgba(139, 92, 246, 0.15)' : 'rgba(15,23,42,0.6)',
                borderRadius: '10px',
                textAlign: 'left'
              }}
            >
              <div style={{ fontSize: '0.75rem', color: '#c4b5fd', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <UserCheck size={14} /> Alejandro Cubino
              </div>
              <div style={{ fontSize: '0.8rem', color: '#fff', marginTop: '2px' }}>alejandro</div>
            </button>
          </div>
        </div>

        {/* LOGIN FORM - MANDATORY PASSWORD ENTER */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>
              2. Usuario Autorizado
            </label>
            <div style={{ position: 'relative' }}>
              <User size={18} color="#00f2fe" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                className="input-glass"
                style={{ paddingLeft: '40px' }}
                placeholder="Escribe tu usuario (ej. alejandro o dmusach)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>
              3. Contraseña Obligatoria
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} color="#00f2fe" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="password"
                className="input-glass"
                style={{ paddingLeft: '40px' }}
                placeholder="Escribe tu contraseña requerida"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {error && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '8px',
              padding: '10px 14px',
              color: '#fca5a5',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '12px', marginTop: '6px', fontSize: '1rem' }}>
            <span>Ingresar a BP Bromteck</span>
            <ChevronRight size={18} />
          </button>
        </form>

        <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
          Diego: <code>BP-dmusach-2026</code> | Alejandro: <code>BP-alejandro-2026</code>
        </div>
      </div>
    </div>
  );
}
