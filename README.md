# INNOPATH - Smart Solar Mini Cold Storage

### Farmer-Centric Multi-Unit Cold Storage Dashboard for North East Region (NER)

INNOPATH is a mobile-first, multilingual responsive web application and Progressive Web Application (PWA) designed for farmers, farmer producer organizations (FPOs), collection centres, and local operators across the North East Region (NER) of India.

---

## 🌟 Key Features

1. **Multi-Unit Cold Storage Box Fleet Support (`INNO-001` to `INNO-010+`)**
   - Individual box tracking with unique IDs, assigned farmers, and collection centre locations.
   - Deep-linking via physical printed QR codes on boxes (`?unit=INNO-003`).
   - Quick 1-tap box switcher dropdown from any screen.
   - Cooperative Overview showing Total, Normal, Warning, and Offline units.

2. **Dedicated Storage Unit View**
   - 3-second glance hero status indicator (Normal, Warning, Offline).
   - 2x2 metrics grid: Chamber Temperature, Internal Humidity, Battery Level & Voltage, and Solar Power Input.
   - Staged cooling status (Stage-1 Eco Mode, inside circulation fan, external heat-sink blower).

3. **Crop Management & Validation Honesty**
   - 🍅 **Tomato:** Validated (10–13°C, 70–90% RH)
   - 🌶️ **Chilli:** Profile Ready / Validation Required (8–10°C, 85–95% RH)
   - 🫘 **French Beans:** Profile Ready / Validation Required (7–10°C, 85–90% RH)
   - 🥬 **Cabbage / Leafy:** Transparently marked unsupported (0–2°C outside Peltier $\Delta T$ capacity).

4. **Central Alerts & Live Presentation Simulator**
   - Central fleet scanner highlighting units requiring attention.
   - 1-tap navigation directly into affected units.
   - Interactive simulation test bar for college presentations and project evaluations.

5. **Subsystems & Maintenance**
   - 8-point digital system health checklist (SHT31 sensors, Peltier module, fans, LiFePO4 battery, MPPT controller, ESP32 telemetry).
   - Daily 5-point maintenance checklist with service logging.
   - Historical temperature trend chart with safe band visualization.
   - 3-way connectivity overview (BLE, Wi-Fi, Hotspot) and offline guarantee.

6. **Multilingual Parity**
   - Full support for **हिन्दी (Hindi)**, **English**, **অসমীয়া (Assamese)**, **Khasi**, and **Mizo**.

---

## 🚀 Live Demo & PWA
- **Live Cloud Web App:** [https://innopath-cold-storage.vercel.app](https://innopath-cold-storage.vercel.app)
- **Local Testing:** Serve locally on port 8080 (`python -m http.server 8080`).

---

## 🛠️ Technology Stack
- **Frontend:** Vanilla HTML5, Mobile-First Responsive CSS3, Modular JavaScript (ES6+).
- **Offline / PWA:** Service Worker (`sw.js`), Web App Manifest (`manifest.json`).
- **Telemetry Hardware Target:** ESP32 Microcontroller, SHT31 Temp/RH Sensor, TEC1-12706 Peltier, MPPT Solar Controller, 12V LiFePO4 Battery.