import React, { useState, useEffect } from 'react';
import { GitBranch, GitMerge, GitCommit, ShieldCheck, Plus, CheckCircle2, AlertCircle, Cpu, Database, FolderGit2, ArrowRight } from 'lucide-react';
import { getBranches, createBranch, mergeBranchToTrunk } from '../utils/branchManager';
import { sanitizeInput } from '../utils/security';

export default function BranchingTrunkModule({ currentUser }) {
  const [branches, setBranches] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newBranchName, setNewBranchName] = useState('');
  const [newBranchDesc, setNewBranchDesc] = useState('');
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    loadBranches();
  }, []);

  const loadBranches = () => {
    const list = getBranches();
    setBranches(list);
    if (!selectedBranch && list.length > 0) {
      setSelectedBranch(list[0]);
    }
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (!newBranchName.trim()) return;

    const cleanName = sanitizeInput(newBranchName);
    const cleanDesc = sanitizeInput(newBranchDesc);

    const created = createBranch({
      name: cleanName,
      description: cleanDesc,
      createdBy: currentUser?.name || currentUser?.username || 'Ingeniero EDEMSA'
    });

    setNotification({ type: 'success', message: `Rama '${created.name}' creada exitosamente.` });
    setNewBranchName('');
    setNewBranchDesc('');
    setShowCreateModal(false);
    loadBranches();
    setSelectedBranch(created);

    setTimeout(() => setNotification(null), 4000);
  };

  const handleMerge = (branchId) => {
    const res = mergeBranchToTrunk(branchId, currentUser);
    if (res.success) {
      setNotification({ type: 'success', message: `Rama fusionada exitosamente con Main Trunk por ${res.branch.mergedBy}` });
      loadBranches();
      setSelectedBranch(res.trunk);
    } else {
      setNotification({ type: 'danger', message: res.message });
    }
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Top Banner */}
      <div className="glass-panel" style={{
        padding: '28px',
        background: 'linear-gradient(135deg, rgba(7, 10, 18, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%)',
        border: '1px solid rgba(0, 242, 254, 0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="glass-pill badge-info">
                <FolderGit2 size={14} />
                Gestión DB Trunks & Branches
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Arquitectura de Ramas & Control de Versiones EPRE
              </span>
            </div>
            <h2 style={{ fontSize: '2rem' }} className="gradient-text">
              Trunks, Branches & Control de Datos EDEMSA
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '4px', maxWidth: '850px' }}>
              Administrá ramas de prueba para soluciones técnicas de Baja Tensión y Alumbrado Público. Compará cambios antes de integrar (*merge*) a la rama de producción **Main Trunk**.
            </p>
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            className="btn-primary"
            style={{ padding: '12px 20px' }}
          >
            <Plus size={18} />
            <span>Crear Nueva Rama</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {notification && (
        <div className={`glass-panel ${notification.type === 'success' ? 'badge-success' : 'badge-danger'}`} style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          {notification.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{notification.message}</span>
        </div>
      )}

      {/* Grid Layout: Branch List on Left, Detailed View on Right */}
      <div className="responsive-grid-2col" style={{ alignItems: 'start' }}>
        
        {/* Branch List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h3 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Ramas Activas ({branches.length})
          </h3>

          {branches.map((b) => {
            const isSelected = selectedBranch?.id === b.id;
            return (
              <div
                key={b.id}
                onClick={() => setSelectedBranch(b)}
                className="glass-panel glass-panel-hover"
                style={{
                  padding: '16px',
                  cursor: 'pointer',
                  borderColor: isSelected ? '#00f2fe' : 'rgba(255,255,255,0.08)',
                  background: isSelected ? 'rgba(0, 242, 254, 0.12)' : 'rgba(15, 23, 42, 0.65)',
                  borderRadius: '12px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <GitBranch size={18} color={b.isTrunk ? '#10b981' : '#00f2fe'} />
                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>{b.name}</span>
                  </div>
                  <span className={`glass-pill ${b.isTrunk ? 'badge-success' : b.status === 'MERGED' ? 'badge-info' : 'badge-warning'}`}>
                    {b.isTrunk ? 'MAIN TRUNK' : b.status}
                  </span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  {b.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                  <span>Por: {b.createdBy}</span>
                  <span>{b.itemsCount} cambios</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Branch Detailed View & Diff Tool */}
        {selectedBranch && (
          <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-glass)', paddingBottom: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <GitCommit size={20} color="#00f2fe" />
                  <h3 style={{ fontSize: '1.4rem' }}>{selectedBranch.name}</h3>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Creado el {selectedBranch.createdAt} por <strong>{selectedBranch.createdBy}</strong>
                </span>
              </div>

              {!selectedBranch.isTrunk && selectedBranch.status === 'OPEN' && (
                <button
                  onClick={() => handleMerge(selectedBranch.id)}
                  className="btn-primary"
                  style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)' }}
                >
                  <GitMerge size={16} />
                  <span>Fusionar a Main Trunk</span>
                </button>
              )}
            </div>

            {/* Commit Detail Card */}
            <div className="glass-panel" style={{ padding: '16px', background: 'rgba(9, 13, 22, 0.9)' }}>
              <div style={{ fontSize: '0.75rem', color: '#00f2fe', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', fontWeight: 600 }}>
                Último Commit Registrado
              </div>
              <div style={{ fontSize: '0.9rem', color: '#fff', fontFamily: 'monospace' }}>
                {selectedBranch.lastCommit}
              </div>
            </div>

            {/* Dynamic Diff Visualizer */}
            <div>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Cpu size={16} color="#00f2fe" />
                <span>Diferencial de Datos respecto a Main Trunk (Diff View)</span>
              </h4>

              <div className="table-scroll-wrapper">
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border-glass)', color: 'var(--text-subtle)' }}>
                      <th style={{ padding: '10px', textAlign: 'left' }}>Módulo Afectado</th>
                      <th style={{ padding: '10px', textAlign: 'left' }}>Estado en Trunk</th>
                      <th style={{ padding: '10px', textAlign: 'left' }}>Cambio en {selectedBranch.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '10px', fontWeight: 600, color: '#f8fafc' }}>Res. EPRE N° 129/18</td>
                      <td style={{ padding: '10px', color: 'var(--text-muted)' }}>Cálculo ECNR estándar (6 meses)</td>
                      <td style={{ padding: '10px', color: '#6ee7b7' }}>+ Recargo por reincidencia 1.5x TDR</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '10px', fontWeight: 600, color: '#f8fafc' }}>Alumbrado Público</td>
                      <td style={{ padding: '10px', color: 'var(--text-muted)' }}>Medición manual de líneas</td>
                      <td style={{ padding: '10px', color: '#a5f3fc' }}>+ Auditoría fotocélula con IA Street View</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal for Creating Branch */}
      {showCreateModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(7, 10, 18, 0.85)', backdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, padding: '20px'
        }}>
          <div className="glass-panel" style={{ width: '100%', maxWidth: '500px', padding: '28px', border: '1px solid var(--border-glass-bright)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }} className="gradient-text">
              Crear Nueva Rama de Ingeniería
            </h3>
            <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Nombre de la Rama (ej. epre-calc-2026)
                </label>
                <input
                  type="text"
                  className="input-glass"
                  placeholder="ej. epre-calc-2026"
                  value={newBranchName}
                  onChange={(e) => setNewBranchName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Descripción Técnica de los Cambios
                </label>
                <textarea
                  className="input-glass"
                  rows={3}
                  placeholder="Detalle de modificaciones en Baja Tensión o AP..."
                  value={newBranchDesc}
                  onChange={(e) => setNewBranchDesc(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '8px' }}>
                <button type="button" onClick={() => setShowCreateModal(false)} className="btn-secondary">
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  <span>Crear Rama</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
