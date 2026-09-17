import React, { useState } from 'react';
import LoginGateway from './components/LoginGateway';
import Navbar from './components/Navbar';
import BlackPumaComparison from './components/BlackPumaComparison';
import LowVoltageIntelligence from './components/LowVoltageIntelligence';
import PragmaticEngineeringModule from './components/PragmaticEngineeringModule';
import UtilitiesRoadmapCatalog from './components/UtilitiesRoadmapCatalog';
import TechnicalLossRAG from './components/TechnicalLossRAG';
import ExecutiveMobileReport from './components/ExecutiveMobileReport';
import ProductionRoadmapModule from './components/ProductionRoadmapModule';
import PublicLightingAuditModule from './components/PublicLightingAuditModule';
import BranchingTrunkModule from './components/BranchingTrunkModule';
import ExecutiveMeetingDashboard from './components/ExecutiveMeetingDashboard';
import NotionCardsManagement from './components/NotionCardsManagement';
import MiningRigiProspects from './components/MiningRigiProspects';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("BP Bromteck App Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="glass-panel" style={{ padding: '40px', margin: '40px auto', maxWidth: '600px', textAlign: 'center' }}>
          <h2 style={{ color: '#ef4444', marginBottom: '16px' }}>Ocurrió un inconveniente visual</h2>
          <p style={{ color: 'var(--text-subtle)', marginBottom: '20px' }}>
            Se detectó una excepción en el renderizado. Presioná el botón para restablecer el tablero.
          </p>
          <button 
            onClick={() => { this.setState({ hasError: false }); window.location.reload(); }}
            className="btn-primary" 
            style={{ padding: '10px 20px' }}
          >
            Recargar Aplicación
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('executive-meeting-14sep');

  if (!currentUser) {
    return <LoginGateway onLoginSuccess={(user) => setCurrentUser(user)} />;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentUser={currentUser}
        onLogout={() => setCurrentUser(null)}
      />

      <main className="app-main-content">
        <ErrorBoundary>
          {activeTab === 'executive-meeting-14sep' && (
            <ExecutiveMeetingDashboard />
          )}

          {activeTab === 'mining-rigi' && (
            <MiningRigiProspects />
          )}

          {activeTab === 'notion-cards' && (
            <NotionCardsManagement currentUser={currentUser} />
          )}

          {activeTab === 'production-roadmap' && (
            <ProductionRoadmapModule />
          )}

          {activeTab === 'public-lighting' && (
            <PublicLightingAuditModule />
          )}

          {activeTab === 'branches' && (
            <BranchingTrunkModule currentUser={currentUser} />
          )}

          {activeTab === 'benchmark' && (
            <BlackPumaComparison onNavigate={(tab) => setActiveTab(tab)} />
          )}

          {activeTab === 'low-voltage' && (
            <LowVoltageIntelligence />
          )}

          {activeTab === 'engineering' && (
            <PragmaticEngineeringModule currentUser={currentUser} />
          )}

          {activeTab === 'catalog' && (
            <UtilitiesRoadmapCatalog />
          )}

          {activeTab === 'rag' && (
            <TechnicalLossRAG />
          )}

          {activeTab === 'mobile' && (
            <ExecutiveMobileReport />
          )}
        </ErrorBoundary>
      </main>

      <footer style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '20px',
        textAlign: 'center',
        color: 'var(--text-subtle)',
        fontSize: '0.8rem',
        background: 'rgba(7, 10, 18, 0.8)'
      }}>
        <div>
          BP Bromteck — Soluciones Concretas de Ingeniería & Operaciones EDEMSA | © 2026 Bromteck Inc.
        </div>
      </footer>
    </div>
  );
}
