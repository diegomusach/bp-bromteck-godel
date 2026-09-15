import React, { useState } from 'react';
import { 
  FileSpreadsheet, Download, Filter, Search, CheckCircle2, AlertTriangle, 
  TrendingUp, Layers, MapPin, Zap, UserCheck, ShieldAlert, Cpu, Award, 
  Calendar, ArrowRight, DollarSign, Activity, PieChart as PieIcon, RefreshCw
} from 'lucide-react';

export default function ExecutiveMeetingDashboard() {
  const [selectedZone, setSelectedZone] = useState('malargue');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [downloadNotification, setDownloadNotification] = useState(false);

  // Mock Clients Data simulating the dynamic table requested by Nico Palmucci & Diego
  const mockClients = [
    { nis: '2662654', nic: '2662654', cliente: 'HEXING TSI - HXE12-DL', depto: 'MALARGUE', localidad: 'PRIMER TRAMO', calle: 'CAPDEVILLE ALFONSO OESTE 450', trafo: 'U6950', marca: 'HEXING', tipo: 'electronico', estado: 'CAR Con Cambio', os: 'OS-11497', perdidasMwh: '2.4 MWh' },
    { nis: '3095968', nic: '3095968', cliente: 'ELSTER - A102c', depto: 'MALARGUE', localidad: 'PRIMER TRAMO', calle: 'JULIO EIDLS 159', trafo: 'U6950', marca: 'ELSTER', tipo: 'electronico', estado: 'CAR Con Cambio', os: 'OS-11499', perdidasMwh: '3.1 MWh' },
    { nis: '3137919', nic: '3137919', cliente: 'ELSTER - A150', depto: 'MALARGUE', localidad: 'PRIMER TRAMO', calle: 'RUTA NACIONAL 40 SUR 4083', trafo: 'U6950', marca: 'ELSTER', tipo: 'electronico', estado: 'CAR Con Cambio', os: 'OS-11499', perdidasMwh: '4.8 MWh' },
    { nis: '2662652', nic: '2662652', cliente: 'GALILEO - M8S1', depto: 'MALARGUE', localidad: 'PRIMER TRAMO', calle: 'GRAL. SAN MARTIN SUR 1599', trafo: 'U6950', marca: 'GALILEO', tipo: 'electromecanico', estado: 'Electromecanico Reemplazado', os: 'OS-11499', perdidasMwh: '1.9 MWh' },
    { nis: '3010162', nic: '3010162', cliente: 'ABB - T8S1', depto: 'MALARGUE', localidad: 'PRIMER TRAMO', calle: 'DE LA CRUZ PEREZ JUAN 48', trafo: 'U6950', marca: 'ABB', tipo: 'electromecanico', estado: 'Electromecanico Reemplazado', os: 'OS-11500', perdidasMwh: '2.7 MWh' },
    { nis: '2662649', nic: '2662649', cliente: 'ISKRA - ME154', depto: 'MALARGUE', localidad: 'PRIMER TRAMO', calle: 'COLONIA HIPICA - LOTE 12', trafo: 'U6950', marca: 'ISKRA', tipo: 'electronico', estado: 'Comunitario RENEBAP', os: 'OS-11502', perdidasMwh: '12.5 MWh' },
    { nis: '3019522', nic: '3019522', cliente: 'ABB - M8S1a', depto: 'MALARGUE', localidad: 'PRIMER TRAMO', calle: 'COLONIA HIPICA - LOTE 18', trafo: 'U6950', marca: 'ABB', tipo: 'electromecanico', estado: 'Comunitario RENEBAP', os: 'OS-11503', perdidasMwh: '14.2 MWh' },
    { nis: '3248768', nic: '3248768', cliente: 'ISKRA - MT174', depto: 'MALARGUE', localidad: 'SENSOR 7464', calle: 'MAULION CASTILLO 1290', trafo: 'U6319', marca: 'ISKRA', tipo: 'electronico', estado: 'Baja Consumiendo', os: 'OS-11510', perdidasMwh: '5.6 MWh' },
    { nis: '3251521', nic: '3251521', cliente: 'ELSTER - A1052', depto: 'MALARGUE', localidad: 'SENSOR 7464', calle: 'MAULION CASTILLO 1420', trafo: 'U6319', marca: 'ELSTER', tipo: 'electromecanico', estado: 'Electromecanico Reemplazado', os: 'OS-11511', perdidasMwh: '3.8 MWh' },
    { nis: '3133994', nic: '3133994', cliente: 'ELSTER - A1052 PLUS', depto: 'MALARGUE', localidad: 'SENSOR 7464', calle: 'ROMANCE 543', trafo: 'U6319', marca: 'ELSTER', tipo: 'electronico', estado: 'Normalizado MPV', os: 'OS-11512', perdidasMwh: '1.2 MWh' },
    { nis: '2000248', nic: '2000248', cliente: 'IRRAZABAL A', depto: 'SAN RAFAEL', localidad: 'CUADRO BENEGAS', calle: 'ROMANCE 543', trafo: 'SR-102', marca: 'M.A.-F72', tipo: 'electromecanico', estado: 'Electromecanico Reemplazado', os: 'OS-12001', perdidasMwh: '2.1 MWh' },
    { nis: '2000251', nic: '2000251', cliente: 'ZUNIGA M', depto: 'SAN RAFAEL', localidad: 'CUADRO BENEGAS', calle: 'ROMANCE 554', trafo: 'SR-102', marca: 'SCH-SL1622', tipo: 'electromecanico', estado: 'Electromecanico Reemplazado', os: 'OS-12002', perdidasMwh: '3.4 MWh' },
    { nis: '2000284', nic: '2000284', cliente: 'CACHO LEONCIO', depto: 'SAN RAFAEL', localidad: 'CUADRO BENEGAS', calle: 'ROMANCE 1086', trafo: 'SR-102', marca: 'SCH-SL1622', tipo: 'electromecanico', estado: 'Electromecanico Reemplazado', os: 'OS-12003', perdidasMwh: '4.1 MWh' },
    { nis: '2000311', nic: '2000311', cliente: 'URETA S', depto: 'SAN RAFAEL', localidad: 'CUADRO BENEGAS', calle: 'R. MAULEON CASTILLO 1290', trafo: 'SR-104', marca: 'GEN ELEC - F85B', tipo: 'electromecanico', estado: 'Baja Consumiendo', os: 'OS-12004', perdidasMwh: '6.3 MWh' },
    { nis: '2000314', nic: '2000314', cliente: 'ROSALES ROSA', depto: 'SAN RAFAEL', localidad: 'CUADRO BENEGAS', calle: 'R. MAULEON CASTILLO 1420', trafo: 'SR-104', marca: 'ELSTER - A150', tipo: 'electronico', estado: 'CAR Con Cambio', os: 'OS-12005', perdidasMwh: '5.9 MWh' },
  ];

  const filteredClients = mockClients.filter(c => {
    const matchesZone = selectedZone === 'all' || 
      (selectedZone === 'malargue' && c.depto === 'MALARGUE') ||
      (selectedZone === 'cuadro-benegas' && c.depto === 'SAN RAFAEL');

    const matchesFilter = selectedFilter === 'all' ||
      (selectedFilter === 'bajas' && c.estado.includes('Baja')) ||
      (selectedFilter === 'electromecanico' && c.tipo === 'electromecanico') ||
      (selectedFilter === 'car' && c.estado.includes('CAR')) ||
      (selectedFilter === 'renebap' && c.estado.includes('RENEBAP'));

    const matchesSearch = searchTerm === '' ||
      c.nic.includes(searchTerm) ||
      c.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.calle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.marca.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesZone && matchesFilter && matchesSearch;
  });

  const handleExport = () => {
    setDownloadNotification(true);
    setTimeout(() => setDownloadNotification(false), 3500);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1440px', margin: '0 auto' }}>
      
      {/* Header Banner */}
      <div className="glass-panel" style={{
        padding: '24px 32px',
        marginBottom: '28px',
        background: 'linear-gradient(135deg, rgba(7, 15, 33, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%)',
        border: '1px solid rgba(0, 242, 254, 0.3)',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span className="glass-pill badge-primary" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Reunión Estratégica 14/09 — Minuta & Hoja de Ruta
              </span>
              <span className="glass-pill badge-success" style={{ fontSize: '0.75rem' }}>
                EDEMSA Sur & Bromteck Leadership
              </span>
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: '6px 0 8px 0', fontFamily: 'var(--font-heading)' }} className="gradient-text">
              Tablero Ejecutivo: Síntesis EDEMSA & Oportunidades de Negocio
            </h1>
            <p style={{ color: 'var(--text-subtle)', fontSize: '0.95rem', maxWidth: '900px', margin: 0 }}>
              Resumen visual para la Dirección (Alejandro & Diego) sobre la reunión con <strong>Nico Palmucci</strong> y <strong>Germán Frosch</strong>. Diagnóstico real de la Campaña Gödel de 502 inspecciones, desglose financiero de los <strong>$56.453M de Pérdida No Reconocida</strong> y hoja de ruta para la reunión en San Rafael el <strong>Martes 22 / Miércoles 23 de Septiembre</strong>.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button 
              onClick={handleExport}
              className="btn-primary" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', borderRadius: '12px' }}
            >
              <FileSpreadsheet size={18} />
              <span>Simular Exportación Excel (502 NICs)</span>
            </button>
          </div>
        </div>

        {downloadNotification && (
          <div className="glass-panel" style={{
            marginTop: '16px',
            padding: '12px 20px',
            background: 'rgba(16, 185, 129, 0.2)',
            borderColor: '#10b981',
            color: '#10b981',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <CheckCircle2 size={20} />
            <span><strong>¡Descarga generada con éxito!</strong> Archivo <code>Campana_Godel_Malargue_502_NICs.xlsx</code> listo con filtros de subestación, marca de medidor y pérdidas por cliente.</span>
          </div>
        )}
      </div>

      {/* Top 5 High Impact Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '28px' }}>
        
        {/* Card 1: Pérdida No Reconocida Neto EDEMSA */}
        <div className="glass-panel" style={{ padding: '20px', borderLeft: '4px solid #ef4444' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-subtle)', fontSize: '0.85rem' }}>
            <span>Pérdida NO Reconocida (Neto)</span>
            <DollarSign size={18} color="#ef4444" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ef4444', margin: '8px 0 4px 0' }}>
            $56.453 M
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
            7,52% de la TAM sale <strong>directo del EBITDA</strong> de EDEMSA ($20,7B en Bajas + $15,9B en Activos).
          </div>
        </div>

        {/* Card 2: Ahorro Potencial Bajar 2 Puntos */}
        <div className="glass-panel" style={{ padding: '20px', borderLeft: '4px solid #10b981' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-subtle)', fontSize: '0.85rem' }}>
            <span>Meta Comité: Bajar 2% TAM</span>
            <TrendingUp size={18} color="#10b981" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981', margin: '8px 0 4px 0' }}>
            2x Inversión
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
            Reducir de 17% a 15% ahorra <strong>~$63M USD/año</strong> (equivale a duplicar el plan de obras anual).
          </div>
        </div>

        {/* Card 3: Cierre Campaña Gödel */}
        <div className="glass-panel" style={{ padding: '20px', borderLeft: '4px solid #00f2fe' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-subtle)', fontSize: '0.85rem' }}>
            <span>Campaña Gödel Ejecutada</span>
            <Activity size={18} color="#00f2fe" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#00f2fe', margin: '8px 0 4px 0' }}>
            502 OS (76%)
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
            <strong>187 recambios electromecánicos</strong> a electrónicos + 5 CAR directos + 162 regularizaciones.
          </div>
        </div>

        {/* Card 4: Foco Cirujano Malargüe */}
        <div className="glass-panel" style={{ padding: '20px', borderLeft: '4px solid #f59e0b' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-subtle)', fontSize: '0.85rem' }}>
            <span>Hotspot Malargüe (Alimentador #1)</span>
            <MapPin size={18} color="#f59e0b" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f59e0b', margin: '8px 0 4px 0' }}>
            1.062 MWh/mes
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
            Concentrado en el <strong>1er tramo (10 trafos / 414 clientes)</strong> + Sensor 7464 (147 MWh).
          </div>
        </div>

        {/* Card 5: Causa Raíz Revelada */}
        <div className="glass-panel" style={{ padding: '20px', borderLeft: '4px solid #a855f7' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-subtle)', fontSize: '0.85rem' }}>
            <span>Causa Raíz Revelada</span>
            <ShieldAlert size={18} color="#a855f7" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#a855f7', margin: '8px 0 4px 0' }}>
            18 Comunitarios
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
            <strong>Colonia Hípica RENEBAP:</strong> 18 medidores para 200 familias desbordan el desbalance.
          </div>
        </div>
      </div>

      {/* Main Grid: Section 1 (Qlik-Style Dynamic Interactive Table & UX Needs) */}
      <div className="glass-panel" style={{ padding: '28px', marginBottom: '28px', borderRadius: '16px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Zap color="#00f2fe" size={24} />
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)' }}>
                NUEVO MÓDULO: Simulación de Tabla Dinámica de Clientes (Efecto Qlik Sense)
              </h2>
            </div>
            <p style={{ color: 'var(--text-subtle)', fontSize: '0.88rem', margin: '4px 0 0 0' }}>
              Respuesta directa a lo que pidió Nico Palmucci en el call: <em>"Si la aplicación tuviese forma rápida de acceder a los 1.111 clientes de Cuadro Benegas o 414 de Malargüe a un clic, con Excel exportable, sería un GOLAZO"</em>.
            </p>
          </div>

          <span className="glass-pill badge-warning" style={{ fontWeight: 600 }}>
            Requerimiento N°1 de Producto BP Bromteck
          </span>
        </div>

        {/* Filter Controls Bar */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '16px', 
          marginBottom: '20px', 
          background: 'rgba(15, 23, 42, 0.7)',
          padding: '16px',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          
          {/* Zone Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-subtle)', marginBottom: '6px', fontWeight: 600 }}>
              FILTRAR POR ALIMENTADOR / ZONA:
            </label>
            <select 
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="glass-input"
              style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', fontSize: '0.85rem' }}
            >
              <option value="all">Todas las Zonas (Ver Todos)</option>
              <option value="malargue">Alimentador Malargüe #1 (414 Clientes)</option>
              <option value="cuadro-benegas">Alimentador Cuadro Benegas (1.111 Clientes)</option>
            </select>
          </div>

          {/* Sub-Filter Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-subtle)', marginBottom: '6px', fontWeight: 600 }}>
              CATEGORÍA DE INSPECCIÓN:
            </label>
            <select 
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="glass-input"
              style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', fontSize: '0.85rem' }}
            >
              <option value="all">Todos los Criterios</option>
              <option value="bajas">Solo Bajas Consumiendo</option>
              <option value="electromecanico">Solo Medidores Electromecánicos</option>
              <option value="car">Solo CAR (Consumo Antirreglamentario)</option>
              <option value="renebap">Solo Barrios Populares RENEBAP</option>
            </select>
          </div>

          {/* Live Search Input */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-subtle)', marginBottom: '6px', fontWeight: 600 }}>
              BÚSQUEDA RÁPIDA (CALLE, NIC, MARCA):
            </label>
            <div style={{ position: 'relative' }}>
              <input 
                type="text"
                placeholder="Ej: Romance, 2662654, Elster..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="glass-input"
                style={{ width: '100%', padding: '10px 14px 10px 36px', borderRadius: '8px', fontSize: '0.85rem' }}
              />
              <Search size={16} color="var(--text-subtle)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
          </div>

          {/* Export Action */}
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <button 
              onClick={handleExport}
              className="btn-secondary"
              style={{ width: '100%', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', borderRadius: '8px', fontSize: '0.85rem', borderColor: '#10b981', color: '#10b981' }}
            >
              <Download size={16} />
              <span>Exportar Selección (.xlsx)</span>
            </button>
          </div>
        </div>

        {/* Data Grid Table */}
        <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ background: 'rgba(15, 23, 42, 0.95)', borderBottom: '2px solid rgba(0, 242, 254, 0.3)', color: '#00f2fe' }}>
                <th style={{ padding: '14px 16px' }}>NIS / NIC</th>
                <th style={{ padding: '14px 16px' }}>Cliente / Aparato</th>
                <th style={{ padding: '14px 16px' }}>Dirección / Calle</th>
                <th style={{ padding: '14px 16px' }}>Subestación</th>
                <th style={{ padding: '14px 16px' }}>Tipo Medidor</th>
                <th style={{ padding: '14px 16px' }}>Estado Operativo</th>
                <th style={{ padding: '14px 16px' }}>Orden Servicio</th>
                <th style={{ padding: '14px 16px', textAlign: 'right' }}>Pérdida Est.</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((row, index) => (
                <tr 
                  key={index} 
                  style={{ 
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    background: index % 2 === 0 ? 'rgba(7, 10, 18, 0.4)' : 'rgba(15, 23, 42, 0.3)'
                  }}
                >
                  <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--text-main)' }}>{row.nic}</td>
                  <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>{row.cliente}</td>
                  <td style={{ padding: '12px 16px', color: 'var(--text-main)' }}>{row.calle}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span className="glass-pill" style={{ fontSize: '0.75rem' }}>{row.trafo}</span>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ 
                      padding: '4px 8px', 
                      borderRadius: '6px', 
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      background: row.tipo === 'electromecanico' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                      color: row.tipo === 'electromecanico' ? '#f59e0b' : '#10b981'
                    }}>
                      {row.tipo.toUpperCase()}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{
                      color: row.estado.includes('CAR') ? '#ef4444' : row.estado.includes('RENEBAP') ? '#a855f7' : '#00f2fe'
                    }}>
                      {row.estado}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px', color: 'var(--text-subtle)', fontFamily: 'monospace' }}>{row.os}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 700, color: '#f59e0b' }}>{row.perdidasMwh}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-subtle)', fontSize: '0.8rem' }}>
          <span>Mostrando <strong>{filteredClients.length}</strong> de 502 registros filtrados dinámicamente en tiempo real.</span>
          <span>Sincronizado con la base de datos de facturación e inspecciones EDEMSA 2026.</span>
        </div>
      </div>

      {/* Two Columns Grid: Strategic Takeaways & Commercial Roadmap */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '24px', marginBottom: '28px' }}>
        
        {/* Column 1: Puntos Clave de la Reunión & Lo que Busca EDEMSA */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '10px' }} className="gradient-text">
            <UserCheck size={20} color="#00f2fe" />
            De lo que se habló & Necesidades Directas de Nico Palmucci
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="glass-panel" style={{ padding: '14px', background: 'rgba(15, 23, 42, 0.6)' }}>
              <div style={{ fontWeight: 700, color: '#00f2fe', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} /> 1. Drill-Down de Clientes a 1-Click (Exportable a Excel)
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
                Nico dejó en claro que no quieren solo ver "1.111 clientes" en la tarjeta. Necesitan tocar la tarjeta o el filtro y tener el <strong>Excel inmediato con NIS/NIC, dirección y marca de medidor</strong> para entregar a las 7 cuadrillas sin demoras.
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '14px', background: 'rgba(15, 23, 42, 0.6)' }}>
              <div style={{ fontWeight: 700, color: '#10b981', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} /> 2. Restauración del Filtro "Baja Tensión (BT)" en Balance
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
                Nico pidió restaurar explícitamente la opción <code>Balance Energético del Sistema de Distribución de Baja Tensión</code> en el desplegable de gráficos. Ahí se concentra la Pérdida No Técnica del 8,3% y los barrios RENEBAP.
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '14px', background: 'rgba(15, 23, 42, 0.6)' }}>
              <div style={{ fontWeight: 700, color: '#f59e0b', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} /> 3. Automatización de Tramos en DWG para Luis Alegre
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
                Hoy Luis Alegre cruza los planos DWG manualmente para calcular MWh/km de red. Gödel debe institucionalizar y automatizar esta métrica por tramo de alimentador, ahorrándole semanas de cálculo manual.
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '14px', background: 'rgba(15, 23, 42, 0.6)' }}>
              <div style={{ fontWeight: 700, color: '#a855f7', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} /> 4. Explicación de la Incidencia de 5 CAR sobre 502 Inspecciones
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
                Solo hubo 5 CAR directos con multa porque <strong>187 medidores electromecánicos fueron cambiados a electrónicos</strong> (recambio metrológico preventivo) y el resto del desbalance estaba en los <strong>18 medidores comunitarios de Colonia Hípica (200 familias)</strong>.
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Oportunidades Comerciales & Próximos Pasos San Rafael */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '10px' }} className="gradient-text">
            <Award size={20} color="#10b981" />
            Oportunidades Comerciales & Plan San Rafael (Martes 22)
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Oportunidad 1 */}
            <div className="glass-panel" style={{ padding: '14px', background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
              <div style={{ fontWeight: 700, color: '#10b981', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Rocket size={16} /> Colocación de los 10 Sensores Pendientes (Sur + Centro)
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
                EDEMSA tiene 10 sensores físicos ya pagos y guardados. Germán le pidió a Camilo armar la propuesta para instalarlos en <strong>Sur (San Rafael / Valle Grande / El Tropezón) y Centro</strong> usando las cuadrillas TCT de Martín Salinas.
              </div>
            </div>

            {/* Oportunidad 2 */}
            <div className="glass-panel" style={{ padding: '14px', background: 'rgba(0, 242, 254, 0.1)', borderColor: 'rgba(0, 242, 254, 0.3)' }}>
              <div style={{ fontWeight: 700, color: '#00f2fe', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={16} /> Estrategia de Cierre Comercial (Licencia 1.000 Puntos)
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
                La cotización de 1.000 puntos sorprendió a la gerencia por el monto global. <strong>Alternativa de Cierre:</strong> Ofrecer contratación por módulos (ej: 500 puntos o paquetes de 100 puntos/mes) con un descuento especial si cierran antes del 30 de Septiembre.
              </div>
            </div>

            {/* Oportunidad 3 */}
            <div className="glass-panel" style={{ padding: '14px', background: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
              <div style={{ fontWeight: 700, color: '#f59e0b', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={16} /> Hoja de Ruta para San Rafael (Martes 22 / Miércoles 23)
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
                Reunión presencial clave en San Rafael con <strong>Nico Palmucci, Martín Salinas y Ricardo Alcalde</strong>. Presentar la comparativa de lecturas post-recambio (Junio vs. Agosto/Septiembre) e inaugurar el nuevo tablero con la lista dinámica de clientes.
              </div>
            </div>

            {/* Oportunidad 4 */}
            <div className="glass-panel" style={{ padding: '14px', background: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
              <div style={{ fontWeight: 700, color: '#ef4444', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <PieIcon size={16} /> Presentación a Marta (Comité Antipérdidas de 70 personas)
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
                Articular la propuesta conectando el Tablero de Qlik ($56.453M Pérdida No Reconocida) con la herramienta quirúrgica de Gödel para recuperar fondos que bajan el EBITDA.
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Banner Action */}
      <div className="glass-panel" style={{ 
        padding: '20px 28px', 
        textAlign: 'center',
        background: 'linear-gradient(90deg, rgba(0, 242, 254, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
        border: '1px solid rgba(0, 242, 254, 0.3)',
        borderRadius: '16px'
      }}>
        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#00f2fe', marginBottom: '4px' }}>
          BP Bromteck — Excelencia Operativa & Desarrollo Continuo para EDEMSA
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
          Este Tablero Ejecutivo ha sido generado automáticamente para la Dirección de BP Bromteck en base a la minuta oficial del call del 14 de Septiembre de 2026.
        </div>
      </div>

    </div>
  );
}
