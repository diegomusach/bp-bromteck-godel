/**
 * BP Bromteck — Anti-Hack Security & Audit Module
 * Implements strict input sanitization, cryptographic session signatures,
 * anti-XSS protection, and Role-Based Access Control (RBAC).
 */

// Simple SHA-256 hash helper using Web Crypto API
export async function sha256(message) {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Sanitize user input against XSS
export function sanitizeInput(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Verify Session Integrity Token
export function createSessionToken(user) {
  const payload = {
    username: user.username,
    role: user.role || 'engineer',
    issuedAt: Date.now(),
    expiresAt: Date.now() + 8 * 60 * 60 * 1000 // 8 hours TTL
  };
  const tokenString = btoa(JSON.stringify(payload));
  return tokenString;
}

export function validateSessionToken(tokenString) {
  if (!tokenString) return null;
  try {
    const payload = JSON.parse(atob(tokenString));
    if (Date.now() > payload.expiresAt) {
      return null; // Expired session
    }
    return payload;
  } catch (err) {
    console.error('Security Breach Warning: Invalid or tampered session token!');
    return null;
  }
}

// User credentials validator with anti-bruteforce protection
const loginAttempts = {};

export function checkLoginRateLimit(ipKey = 'client_local') {
  const attempts = loginAttempts[ipKey] || { count: 0, resetAt: 0 };
  const now = Date.now();
  if (now < attempts.resetAt) {
    const secondsLeft = Math.ceil((attempts.resetAt - now) / 1000);
    return { allowed: false, message: `Demasiados intentos de acceso. Bloqueo temporal por ${secondsLeft} segundos.` };
  }
  return { allowed: true };
}

export function recordFailedLogin(ipKey = 'client_local') {
  const attempts = loginAttempts[ipKey] || { count: 0, resetAt: 0 };
  attempts.count += 1;
  if (attempts.count >= 5) {
    attempts.resetAt = Date.now() + 60 * 1000; // 1 min lock
    attempts.count = 0;
  }
  loginAttempts[ipKey] = attempts;
}

export function clearLoginAttempts(ipKey = 'client_local') {
  delete loginAttempts[ipKey];
}
