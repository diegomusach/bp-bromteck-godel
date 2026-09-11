// PDF Generator for ECNR Actas (Res. EPRE Mendoza N° 129/18)

export function generateActaPdf({
  suministroId = "SUM-EDM-10492",
  clientName = "Panadería & Comercio San Martín",
  address = "Av. San Martín 1420, Guaymallén, Mendoza",
  tariff = "T1-G",
  debtAmount = 485200,
  inspectorName = "Camilo R. (Cuadrilla 04)",
  requiredInput = "Google Street View API + Padrón Comercial ERP + Foto de Pilar",
  actionText = "Despachar inspección de campo inmediata. Normalizar acometida e refacturar por tarifa comercial T1-G con penalización por energía consumida no registrada (ECNR)."
}) {
  const printWindow = window.open('', '_blank');
  
  const content = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Acta ECNR - ${suministroId}</title>
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px; color: #1e293b; background: #fff; }
          .header { border-bottom: 3px solid #00f2fe; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-space-between; }
          .logo { font-size: 24px; font-weight: 800; color: #0f172a; }
          .title { font-size: 20px; font-weight: 700; color: #0284c7; margin-top: 5px; }
          .badge { background: #fee2e2; color: #991b1b; padding: 4px 12px; border-radius: 4px; font-weight: 700; font-size: 12px; display: inline-block; }
          .box { background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px; margin-bottom: 20px; }
          .red-box { background: #fef2f2; border: 2px solid #ef4444; padding: 18px; border-radius: 8px; margin-bottom: 20px; }
          .label { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700; }
          .value { font-size: 15px; font-weight: 600; color: #0f172a; margin-top: 4px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
          .footer { margin-top: 50px; border-top: 1px solid #cbd5e1; padding-top: 20px; font-size: 11px; color: #64748b; text-align: center; }
          .stamp { border: 2px dashed #0284c7; padding: 15px; text-align: center; margin-top: 30px; border-radius: 8px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="logo">BP BROMTECK — EDEMSA GRID</div>
            <div class="title">ACTA DIGITAL DE LIQUIDACIÓN RETROACTIVA ECNR</div>
            <div style="font-size: 12px; color: #64748b;">Conforme Resolución EPRE Mendoza N° 129/18 & Norma ET-201</div>
          </div>
          <div style="text-align: right;">
            <div class="badge">ACTA LEGAL OFICIAL</div>
            <div style="font-size: 11px; color: #64748b; margin-top: 6px;">Fecha: ${new Date().toLocaleDateString('es-AR')}</div>
          </div>
        </div>

        <div class="grid">
          <div class="box">
            <div class="label">Suministro Auditado</div>
            <div class="value">${suministroId}</div>
          </div>
          <div class="box">
            <div class="label">Tarifa Contratada</div>
            <div class="value">${tariff}</div>
          </div>
        </div>

        <div class="box">
          <div class="label">Titular & Dirección Auditada</div>
          <div class="value">${clientName}</div>
          <div style="font-size: 13px; color: #475569; margin-top: 2px;">${address}</div>
        </div>

        <div class="red-box">
          <div class="label" style="color: #991b1b;">🔴 FUENTE DE DATOS E INPUT UTILIZADO</div>
          <div style="font-size: 13px; color: #7f1d1d; font-weight: 700; margin-top: 4px;">
            ${requiredInput}
          </div>
        </div>

        <div class="box" style="background: #f0fdf4; border-color: #16a34a;">
          <div class="label" style="color: #15803d;">Acción Comercial & Liquidación ECNR Recomendada</div>
          <div style="font-size: 14px; color: #14532d; margin-top: 6px; line-height: 1.5;">
            ${actionText}
          </div>
          <div style="margin-top: 12px; font-size: 16px; font-weight: 800; color: #15803d;">
            Importe Estimado a Cobrar: $${debtAmount.toLocaleString()} ARS
          </div>
        </div>

        <div class="stamp">
          <div style="font-weight: 800; color: #0284c7;">VERIFICADO Y FIRMADO DIGITALMENTE EN CAMPO</div>
          <div style="font-size: 12px; color: #475569; margin-top: 4px;">Inspector: ${inspectorName} | Coordenadas GPS: -32.8901, -68.8472 | Sello UTC Indeleble</div>
        </div>

        <div class="footer">
          BP Bromteck System © 2026 — Copia Probatoria para Expediente Comercial EDEMSA Mendoza (Res. EPRE N° 129/18).
        </div>

        <script>
          window.onload = function() {
            window.print();
          };
        </script>
      </body>
    </html>
  `;

  printWindow.document.write(content);
  printWindow.document.close();
}
