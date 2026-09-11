# ⚡ PROYECTO: BP BROMTECK (BlackPuma vs. Bromteck BP)

> **Documento Técnico de Contexto, Arquitectura y Credenciales**  
> *Soluciones Concretas de Ingeniería & Operaciones EDEMSA | Inteligencia en Baja Tensión*

---

## 📌 1. RESUMEN EJECUTIVO Y ENFOQUE ESTRATÉGICO
**BP Bromteck** es una plataforma de análisis predictivo, ingeniería pragmática y auditoría operativa diseñada para competir y superar la oferta de **BlackPuma (BP)** en la distribución de energía eléctrica (caso emblemático **EDEMSA Mendoza**).

A diferencia de análisis genéricos de morosidad, **BP Bromteck** conecta:
1. **Inteligencia en Baja Tensión & IA Visual:** Análisis computacional de fachadas e inmuebles vía Google Street View para detectar inconsistencias comerciales/industriales no declaradas, persianas comerciales impagas y acometidas irregulares antes del pilar (ET-201).
2. **Liquidación Retroactiva ECNR (Res. EPRE Mendoza N° 129/18):** Cálculo automatizado de la Energía Consumida No Registrada y emisión de actas de recargo comercial.
3. **Auditoría de Alumbrado Público (AP):** Inspección de líneas de AP para identificar medidores descalibrados y enganches directos a la red pública.
4. **Matriz de Inputs Técnicos Requeridos (en rojo 🔴):** Especificación transparente de las fuentes de datos (Street View, Red GIS, ERP Comercial, TDR reflectometría) requeridas para cada solución.

---

## 🔑 2. CREDENCIALES Y REPOSITORIOS

- **URL de Producción (Firebase Hosting):** [https://bp-bromteck.web.app](https://bp-bromteck.web.app)
- **Repositorio GitHub:** [https://github.com/diegomusach/bp-bromteck-godel](https://github.com/diegomusach/bp-bromteck-godel)

### **Usuarios Autorizados:**
- 👤 **Diego Musach (Director de Producto & Estrategia)**
  - **Usuario:** `dmusach`
  - **Contraseña:** `BP-dmusach-2026`
- 👤 **Alejandro Cubino (Líder Técnico & Arquitectura)**
  - **Usuario:** `alejandro` *(o `acubino`)*
  - **Contraseña:** `BP-alejandro-2026` *(o `BP-acubino-2026`)*

---

## 🛠️ 3. ARQUITECTURA Y MÓDULOS DE NAVEGACIÓN

El sistema se compone de los siguientes módulos integrados en React + Vite:

1. **`BlackPumaComparison.jsx` (Benchmark BP vs. BP Bromteck):**
   - Análisis comparativo directo de capacidades frente a BlackPuma.
   - Guía de ubicación de soluciones y Matriz de Inputs requeridos en rojo (🔴).
2. **`LowVoltageIntelligence.jsx` (Baja Tensión & IA Visual):**
   - Inspección por mapa interactivo, Street View de inmuebles y detección de hurto.
3. **`PragmaticEngineeringModule.jsx` (Soluciones Concretas EDEMSA):**
   - 10 proyectos técnicos (reemplazo preensamblado 3x95/50mm², conectores IPC, pilar ET-201).
4. **`PublicLightingAuditModule.jsx` (Auditoría AP):**
   - Control de fotocélulas, temporizadores y balances energéticos de Alumbrado Público.
5. **`TechnicalLossRAG.jsx` (Asistente IA RAG):**
   - Respuestas automatizadas a la pregunta: *¿Qué cambia, Dónde y Cómo?*
6. **`ExecutiveMobileReport.jsx` & `ProductionRoadmapModule.jsx`:**
   - Reporte ejecutivo resumido para dispositivos móviles y catálogo de soluciones.

---

## 🚀 4. COMANDOS DE DESARROLLO Y DESPLIEGUE

### **Servidor Local de Desarrollo**
```bash
# Navegar al directorio
cd /Users/diegomusach/.gemini/antigravity/scratch/bromteck-godel

# Iniciar servidor Vite local (puerto 5173 o disponible)
npm run dev
```

### **Compilación & Despliegue a Firebase Hosting**
```bash
# 1. Compilar bundle de producción
npm run build

# 2. Desplegar al sitio bp-bromteck en Firebase
npx firebase-tools deploy --only hosting
```

### **Sincronización con GitHub**
```bash
git add .
git commit -m "feat(bp-bromteck): actualizaciones de módulos y arquitectura"
git push origin main
```

---

## 📌 5. FIRMA OBLIGATORIA DEL PROYECTO
*Todos los mensajes emitidos en este proyecto deben incluir al final:*

---
**Link para ingresar:** [bp-bromteck.web.app](https://bp-bromteck.web.app)  
**Credenciales (Diego y Alejandro):** Diego: `dmusach` (`BP-dmusach-2026`) | Alejandro: `alejandro` / `acubino` (`BP-alejandro-2026`)  
**Link a GitHub:** [github.com/diegomusach/bp-bromteck-godel](https://github.com/diegomusach/bp-bromteck-godel)  
---
