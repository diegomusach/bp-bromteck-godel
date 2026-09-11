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

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('production-roadmap');

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

      <main style={{
        flex: 1,
        maxWidth: '1400px',
        width: '100%',
        margin: '0 auto',
        padding: '24px 20px 60px 20px'
      }}>
        {activeTab === 'production-roadmap' && (
          <ProductionRoadmapModule />
        )}

        {activeTab === 'public-lighting' && (
          <PublicLightingAuditModule />
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
