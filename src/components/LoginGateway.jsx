import React, { useState } from 'react';
import { ShieldCheck, Lock, User, Zap, KeyRound, ChevronRight, AlertCircle } from 'lucide-react';
import { VALID_USERS } from '../data/mockData';

export default function LoginGateway({ onLoginSuccess }) {
  const [username, setUsername] = useState('dmusach');
  const [password, setPassword] = useState('BP-dmusach-2026');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const found = VALID_USERS.find(
      (u) => u.username.toLowerCase() === username.trim().toLowerCase() && u.pass === password
    );
    if (found) {
      setError('');
      onLoginSuccess(found);
    } else {
      setError('Credenciales inválidas. Por favor utiliza los usuarios autorizados (dmusach o acubino).');
    }
  };

  const autofillUser = (u) => {
    setUsername(u.username);
    setPassword(u.pass);
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
      {/* Dynamic background elements */}
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

      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '20%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(50px)',
        zIndex: 0
      }} />

      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '460px',
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
            Plataforma Godel — Inteligencia en Baja Tensión (EDEMSA)
          </p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>
              Usuario Autorizado
            </label>
            <div style={{ position: 'relative' }}>
              <User size={18} color="#00f2fe" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                className="input-glass"
                style={{ paddingLeft: '40px' }}
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>
              Contraseña de Acceso
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} color="#00f2fe" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="password"
                className="input-glass"
                style={{ paddingLeft: '40px' }}
                placeholder="Contraseña"
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
            <span>Ingresar a la Plataforma</span>
            <ChevronRight size={18} />
          </button>
        </form>

        {/* Quick Credentials selector requested by user */}
        <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Seleccionar Usuario Configurado:
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            {VALID_USERS.map((u) => (
              <button
                key={u.username}
                type="button"
                onClick={() => autofillUser(u)}
                className="glass-pill"
                style={{
                  flex: 1,
                  cursor: 'pointer',
                  justifyContent: 'center',
                  padding: '8px 10px',
                  background: username === u.username ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                  borderColor: username === u.username ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <KeyRound size={14} color="#00f2fe" />
                <span>{u.username}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
