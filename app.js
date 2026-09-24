/**
 * INNOPATH - Smart Solar Mini Cold Storage Farmer Dashboard
 * Multi-Unit Cooperative & Farmer-Centric Application Engine
 * North East Region (NER) Optimized - Full Bilingual (Hindi & English)
 */

// 1. DEFAULT 10 STORAGE UNITS DATASET (NER Cooperatives & Collection Centres)
const DEFAULT_UNITS = [
  {
    id: "INNO-001",
    farmer: "रामेश्वर बोरो",
    farmerEn: "Rameshwar Boro",
    location: "रि-भोई संकलन केंद्र",
    locationEn: "Ri-Bhoi Collection Centre, Meghalaya",
    crop: "tomato",
    temp: 11.8,
    rh: 82,
    battery: 76,
    batteryV: "12.4V",
    solar: 58,
    status: "normal",
    lastSeen: "अभी-अभी (Just now)",
    fanIn: true,
    fanOut: true,
    peltier: 60,
    heatsinkTemp: 34
  },
  {
    id: "INNO-002",
    farmer: "सोनाम लामारे",
    farmerEn: "Sonam Lamare",
    location: "उमरोई फार्मर्स FPO",
    locationEn: "Umroi Farmers FPO, Meghalaya",
    crop: "tomato",
    temp: 12.1,
    rh: 80,
    battery: 88,
    batteryV: "12.6V",
    solar: 62,
    status: "normal",
    lastSeen: "2 मिनट पहले (2 min ago)",
    fanIn: true,
    fanOut: true,
    peltier: 55,
    heatsinkTemp: 33
  },
  {
    id: "INNO-003",
    farmer: "भबेश डेका",
    farmerEn: "Bhabesh Deka",
    location: "बारापानी एग्री हब",
    locationEn: "Barapani Agri Hub, Meghalaya",
    crop: "chilli",
    temp: 14.8, // Target is 8-10°C, so this is high!
    rh: 86,
    battery: 64,
    batteryV: "12.2V",
    solar: 45,
    status: "warning",
    warningReason: "high_temp",
    lastSeen: "5 मिनट पहले (5 min ago)",
    fanIn: true,
    fanOut: true,
    peltier: 90,
    heatsinkTemp: 38
  },
  {
    id: "INNO-004",
    farmer: "मैरी लिंगदोह",
    farmerEn: "Mary Lyngdoh",
    location: "मावफलांग ऑर्गेनिक क्लस्टर",
    locationEn: "Mawphlang Organic Cluster, Meghalaya",
    crop: "beans",
    temp: 8.4,
    rh: 88,
    battery: 72,
    batteryV: "12.3V",
    solar: 50,
    status: "normal",
    lastSeen: "1 मिनट पहले (1 min ago)",
    fanIn: true,
    fanOut: true,
    peltier: 65,
    heatsinkTemp: 32
  },
  {
    id: "INNO-005",
    farmer: "जितेन राभा",
    farmerEn: "Jiten Rabha",
    location: "गोलपारा बॉर्डर FPO",
    locationEn: "Goalpara Border FPO, Assam/NER",
    crop: "tomato",
    temp: 11.5,
    rh: 84,
    battery: 91,
    batteryV: "12.7V",
    solar: 68,
    status: "normal",
    lastSeen: "3 मिनट पहले (3 min ago)",
    fanIn: true,
    fanOut: true,
    peltier: 50,
    heatsinkTemp: 31
  },
  {
    id: "INNO-006",
    farmer: "लारिसा मारवेइन",
    farmerEn: "Larisa Marwein",
    location: "नोंगपोह सब्जी मंडी केंद्र",
    locationEn: "Nongpoh Vegetable Depot, Meghalaya",
    crop: "chilli",
    temp: 9.1,
    rh: 89,
    battery: 55,
    batteryV: "12.1V",
    solar: 38,
    status: "normal",
    lastSeen: "4 मिनट पहले (4 min ago)",
    fanIn: true,
    fanOut: true,
    peltier: 70,
    heatsinkTemp: 35
  },
  {
    id: "INNO-007",
    farmer: "देबाजीत हजारिका",
    farmerEn: "Debajit Hazarika",
    location: "जोरहाट कोल्ड चेन नोड",
    locationEn: "Jorhat Cold Chain Node, Assam",
    crop: "tomato",
    temp: 12.7,
    rh: 78,
    battery: 19, // Low battery warning!
    batteryV: "11.6V",
    solar: 15,
    status: "warning",
    warningReason: "low_battery",
    lastSeen: "8 मिनट पहले (8 min ago)",
    fanIn: true,
    fanOut: true,
    peltier: 40,
    heatsinkTemp: 30
  },
  {
    id: "INNO-008",
    farmer: "कैथरीन खारकोंगोर",
    farmerEn: "Catherine Kharkongor",
    location: "सोहरा हॉर्टिकल्चर सेंटर",
    locationEn: "Sohra Horticulture Centre, Meghalaya",
    crop: "beans",
    temp: 8.9,
    rh: 87,
    battery: 82,
    batteryV: "12.5V",
    solar: 54,
    status: "normal",
    lastSeen: "6 मिनट पहले (6 min ago)",
    fanIn: true,
    fanOut: true,
    peltier: 60,
    heatsinkTemp: 32
  },
  {
    id: "INNO-009",
    farmer: "थांगबोई हाओकिप",
    farmerEn: "Thangboi Haokip",
    location: "चुराचांदपुर एग्री सेंटर",
    locationEn: "Churachandpur Agri Centre, Manipur/NER",
    crop: "tomato",
    temp: 12.0,
    rh: 81,
    battery: 68,
    batteryV: "12.3V",
    solar: 0,
    status: "offline",
    warningReason: "offline",
    lastSeen: "45 मिनट पहले (Offline)",
    fanIn: true,
    fanOut: true,
    peltier: 60,
    heatsinkTemp: 33
  },
  {
    id: "INNO-010",
    farmer: "मोनी माला दास",
    farmerEn: "Moni Mala Das",
    location: "कामरूप रूरल कलेक्शन पॉइंट",
    locationEn: "Kamrup Rural Collection Point, Assam",
    crop: "tomato",
    temp: 11.9,
    rh: 83,
    battery: 79,
    batteryV: "12.4V",
    solar: 56,
    status: "normal",
    lastSeen: "अभी-अभी (Just now)",
    fanIn: true,
    fanOut: true,
    peltier: 55,
    heatsinkTemp: 33
  }
];

// App Global State
let storageUnits = [];
let activeUnitId = "INNO-001";
let currentLang = 'hi';
let currentTab = 'home';
let pendingCropSelection = null;
let currentPeriod = 'today';

// Helper to get active translation dictionary
function getT() {
  if (typeof window !== 'undefined' && window.TRANSLATIONS) {
    return window.TRANSLATIONS[currentLang] || window.TRANSLATIONS['hi'] || {};
  }
  return {};
}

// 2. DOM Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Load or initialize storage units
  const savedUnits = localStorage.getItem('innopath_units');
  if (savedUnits) {
    try {
      storageUnits = JSON.parse(savedUnits);
    } catch(e) {
      storageUnits = DEFAULT_UNITS;
    }
  } else {
    storageUnits = DEFAULT_UNITS;
    localStorage.setItem('innopath_units', JSON.stringify(storageUnits));
  }

  // Restore saved language
  const savedLang = localStorage.getItem('innopath_lang');
  if (savedLang && (savedLang === 'hi' || savedLang === 'en' || savedLang === 'as' || savedLang === 'kha' || savedLang === 'mzo')) {
    currentLang = savedLang;
    const sel = document.getElementById('langSelect');
    if (sel) sel.value = savedLang;
  }

  // Check URL query param or hash for targeted unit (?unit=INNO-003 or #INNO-003)
  const urlParams = new URLSearchParams(window.location.search);
  const targetUnitParam = urlParams.get('unit') || window.location.hash.replace('#', '');
  if (targetUnitParam) {
    const existing = storageUnits.find(u => u.id.toLowerCase() === targetUnitParam.toLowerCase());
    if (existing) {
      activeUnitId = existing.id;
    } else if (targetUnitParam.toUpperCase().startsWith('INNO-')) {
      // Auto-register unit from physical printed QR code scan
      const newBox = {
        id: targetUnitParam.toUpperCase(),
        farmer: "नया किसान (New Farmer)",
        farmerEn: "New Farmer",
        location: "नॉर्थ ईस्ट संकलन केंद्र",
        locationEn: "NER Collection Centre",
        crop: "tomato",
        temp: 11.8,
        rh: 82,
        battery: 85,
        batteryV: "12.5V",
        solar: 60,
        status: "normal",
        lastSeen: "अभी-अभी (Just now)",
        fanIn: true,
        fanOut: true,
        peltier: 60,
        heatsinkTemp: 33
      };
      storageUnits.unshift(newBox);
      localStorage.setItem('innopath_units', JSON.stringify(storageUnits));
      activeUnitId = newBox.id;
    }
  } else {
    const savedActive = localStorage.getItem('innopath_active_unit');
    if (savedActive && storageUnits.some(u => u.id === savedActive)) {
      activeUnitId = savedActive;
    }
  }

  // Language Dropdown Event Listener
  const langSel = document.getElementById('langSelect');
  if (langSel) {
    langSel.addEventListener('change', (e) => {
      currentLang = e.target.value;
      localStorage.setItem('innopath_lang', currentLang);
      applyLanguage(currentLang);
    });
  }

  // Apply Language and Render all views
  applyLanguage(currentLang);
  updateClock();
  setInterval(updateClock, 30000);

  // Register PWA Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('INNOPATH Service Worker Active'))
      .catch((err) => console.log('SW note:', err));
  }
});

// Helper to get active unit object
function getActiveUnit() {
  let unit = storageUnits.find(u => u.id === activeUnitId);
  if (!unit) {
    unit = storageUnits[0] || DEFAULT_UNITS[0];
    activeUnitId = unit.id;
  }
  return unit;
}

// 3. Select and Switch Active Unit
function selectUnit(unitId) {
  activeUnitId = unitId;
  localStorage.setItem('innopath_active_unit', unitId);
  closeUnitSwitchModal();

  const unit = getActiveUnit();
  updateActiveUnitDashboard(unit);
  renderUnitsList();
  renderCooperativeOverview();
  renderCentralAlerts();
  switchTab('home');

  // Smooth visual feedback
  const strip = document.querySelector('.active-box-strip');
  if (strip) {
    strip.style.transform = 'scale(1.02)';
    setTimeout(() => { strip.style.transform = 'none'; }, 200);
  }
}

// 4. Update Active Unit Dashboard (Home Tab)
function updateActiveUnitDashboard(unit) {
  const t = getT();
  if (!unit) unit = getActiveUnit();

  // Header active badge
  const headerBadge = document.getElementById('txt-active-unit-badge');
  if (headerBadge) {
    headerBadge.innerHTML = `📦 ${unit.id} ▾`;
  }

  // Home top strip
  safeSetText('home-box-id-val', unit.id);
  const locEl = document.getElementById('home-box-farmer-loc');
  if (locEl) {
    const farmerName = currentLang === 'en' ? (unit.farmerEn || unit.farmer) : unit.farmer;
    const locName = currentLang === 'en' ? (unit.locationEn || unit.location) : unit.location;
    locEl.innerHTML = `👤 ${farmerName} • 📍 ${locName}`;
  }

  // Status Badge in strip
  const stripBadge = document.getElementById('home-box-status-badge');
  if (stripBadge) {
    stripBadge.className = `unit-status-badge badge-${unit.status}`;
    if (unit.status === 'normal') stripBadge.innerHTML = t.statusNormalCount || '🟢 Normal';
    else if (unit.status === 'warning') stripBadge.innerHTML = t.statusWarningCount || '🟡 Warning';
    else stripBadge.innerHTML = t.statusOfflineCount || '🔴 Offline';
  }

  // Hero Status Box
  const heroBox = document.getElementById('hero-box');
  const heroIcon = document.getElementById('hero-icon');
  const heroTitle = document.getElementById('txt-hero-title');
  const heroSub = document.getElementById('txt-hero-sub');

  if (heroBox && heroIcon && heroTitle && heroSub) {
    heroBox.className = 'hero-status-box';
    if (unit.status === 'normal') {
      heroIcon.textContent = '🟢';
      heroTitle.innerHTML = t.heroTitleNormal || 'भंडारण स्थिति: सामान्य';
      heroSub.innerHTML = t.heroSubNormal || 'आपकी सब्जियाँ निर्धारित तापमान सीमा में हैं।';
    } else if (unit.status === 'warning') {
      heroBox.classList.add('warning');
      heroIcon.textContent = '🟡';
      if (unit.warningReason === 'low_battery') {
        heroTitle.innerHTML = t.simLowBattery || '🟡 कम बैटरी चेतावनी';
        heroSub.innerHTML = `बैटरी स्तर ${unit.battery}% पर है। कृपया सोलर चार्जिंग की जांच करें।`;
      } else {
        heroTitle.innerHTML = t.heroTitleWarning || '🟡 तापमान लक्ष्य से अधिक!';
        heroSub.innerHTML = `वर्तमान तापमान (${unit.temp}°C) फसल की लक्षित सीमा से ऊपर है।`;
      }
    } else {
      heroBox.classList.add('danger');
      heroIcon.textContent = '🔴';
      heroTitle.innerHTML = t.heroTitleOffline || '🔴 डिवाइस ऑफलाइन है';
      heroSub.innerHTML = t.heroSubOffline || 'लोकल कंट्रोलर द्वारा ऑटोनॉमस कूलिंग अभी भी जारी है।';
    }
  }

  // Main 4 Metric Cards
  safeSetText('val-temp', unit.temp.toFixed(1));
  safeSetText('val-rh', Math.round(unit.rh));
  safeSetText('val-battery', Math.round(unit.battery));
  safeSetText('val-solar', Math.round(unit.solar));

  const batSub = document.getElementById('txt-bat-sub');
  if (batSub) {
    batSub.innerHTML = unit.battery < 25
      ? `🟡 कम बैटरी (${unit.batteryV || '11.8V'})`
      : `🟢 सामान्य (${unit.batteryV || '12.4V'})`;
  }

  const solarSub = document.getElementById('txt-solar-sub');
  if (solarSub) {
    solarSub.innerHTML = unit.solar > 0 ? (t.solarSub || '🟢 चार्जिंग चालू') : '⚪ स्टैंडबाय (रात/छाया)';
  }

  // Active Crop info
  const cropInfo = (t.crops && t.crops[unit.crop]) ? t.crops[unit.crop] : (t.crops ? t.crops['tomato'] : { name: 'Tomato', icon: '🍅', tempTarget: '10–13°C', rhTarget: '70–90%' });
  safeSetText('txt-temp-target', `${t.tempTarget || 'लक्ष्य:'} ${cropInfo.tempTarget}`);
  safeSetText('txt-rh-target', `${t.rhTarget || 'लक्ष्य:'} ${cropInfo.rhTarget}`);

  const cropIconEl = document.getElementById('hero-crop-icon');
  const cropNameEl = document.getElementById('hero-crop-name');
  const cropStatusEl = document.getElementById('hero-crop-status');

  if (cropIconEl) cropIconEl.textContent = cropInfo.icon;
  if (cropNameEl) cropNameEl.textContent = `${t.cropSelectedPrefix || 'सक्रिय फसल:'} ${cropInfo.name}`;
  if (cropStatusEl) cropStatusEl.textContent = cropInfo.status;

  // Crops tab active unit label
  safeSetText('crop-unit-name', unit.id);

  // Quick health indicators
  const qhTemp = document.getElementById('qh-temp');
  const qhPeltier = document.getElementById('qh-peltier');
  const qhBattery = document.getElementById('qh-battery');

  if (qhTemp) {
    qhTemp.innerHTML = (unit.status === 'warning' && unit.warningReason === 'high_temp') ? '🟡 उच्च (High)' : '🟢 सामान्य';
    qhTemp.style.color = (unit.status === 'warning' && unit.warningReason === 'high_temp') ? '#b45309' : '#15803d';
  }
  if (qhPeltier) {
    qhPeltier.innerHTML = unit.status === 'offline' ? '🟢 स्वायत्त चालू' : '🟢 सक्रिय';
  }
  if (qhBattery) {
    qhBattery.innerHTML = unit.battery < 25 ? '🟡 कम स्तर' : '🟢 स्वस्थ';
    qhBattery.style.color = unit.battery < 25 ? '#b45309' : '#15803d';
  }

  // Re-render sub-pages to match unit
  
  // Sync Remote Power Toggle
  const isPowerOn = unit.isPoweredOn !== false;
  const powerToggle = document.getElementById('coolingPowerToggle');
  const powerCard = document.getElementById('power-control-card');
  const powerNote = document.getElementById('power-status-note');

  if (powerToggle) powerToggle.checked = isPowerOn;
  if (powerCard) {
    if (isPowerOn) powerCard.classList.remove('power-off');
    else powerCard.classList.add('power-off');
  }
  if (powerNote) {
    powerNote.style.color = isPowerOn ? '#15803d' : '#b45309';
    powerNote.innerHTML = isPowerOn
      ? (t.powerOnText || '🟢 कूलिंग सिस्टम सक्रिय है (Cooling ON)')
      : (t.powerOffText || '⚪ कूलिंग सिस्टम बंद है (Cooling OFF)');
  }

  // If power is turned off, override hero card and fans
  if (!isPowerOn) {
    const heroBox = document.getElementById('hero-box');
    const heroIcon = document.getElementById('hero-icon');
    const heroTitle = document.getElementById('txt-hero-title');
    const heroSub = document.getElementById('txt-hero-sub');
    if (heroBox && heroIcon && heroTitle && heroSub) {
      heroBox.className = 'hero-status-box';
      heroIcon.textContent = '⚪';
      heroTitle.innerHTML = currentLang === 'en' ? 'Cooling System Paused (OFF)' : '⚪ कूलिंग बंद है (Cooling Paused/OFF)';
      heroSub.innerHTML = currentLang === 'en' ? 'Peltier and fans are paused. Turn ON to keep produce safe.' : 'पेल्टियर और पंखे बंद हैं। सब्जियाँ सुरक्षित रखने हेतु फोन से चालू करें।';
    }
    safeSetText('val-fan-in', t.statusOff || 'बंद');
    safeSetText('val-fan-out', t.statusOff || 'बंद');
    safeSetText('txt-cooling-mode', currentLang === 'en' ? 'PAUSED / OFF' : 'बंद / OFF');
  }

  renderDateHistoryTable(unit);

  updateCropsTabUI(unit);
  renderSubPages(t);
}

// 5. Cooperative Overview Cards (Total, Normal, Warning, Offline)
function renderCooperativeOverview() {
  const total = storageUnits.length;
  let normal = 0;
  let warning = 0;
  let offline = 0;

  storageUnits.forEach(u => {
    if (u.status === 'normal') normal++;
    else if (u.status === 'warning') warning++;
    else if (u.status === 'offline') offline++;
  });

  safeSetText('coop-total-count', total);
  safeSetText('coop-normal-count', normal);
  safeSetText('coop-warning-count', warning);
  safeSetText('coop-offline-count', offline);

  // Update Alert badge count
  const badge = document.getElementById('alerts-badge');
  const issuesCount = warning + offline;
  if (badge) {
    if (issuesCount > 0) {
      badge.textContent = issuesCount;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }
}

// 6. Storage Units List & Live Search
function renderUnitsList(query = '') {
  const container = document.getElementById('units-list-container');
  if (!container) return;

  const t = getT();
  const q = query.trim().toLowerCase();

  const filtered = storageUnits.filter(u => {
    if (!q) return true;
    const farmer = (u.farmer || '') + ' ' + (u.farmerEn || '');
    const location = (u.location || '') + ' ' + (u.locationEn || '');
    const id = u.id || '';
    const status = u.status || '';
    return id.toLowerCase().includes(q) ||
           farmer.toLowerCase().includes(q) ||
           location.toLowerCase().includes(q) ||
           status.toLowerCase().includes(q);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="chart-card" style="text-align:center; padding:30px 16px; color:#64748b;">
        <span style="font-size:36px; display:block; margin-bottom:8px;">🔍</span>
        <b>कोई स्टोरेज बॉक्स नहीं मिला</b>
        <p style="font-size:12px; margin-top:4px;">"${query}" से मेल खाता कोई बॉक्स मौजूद नहीं है।</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(u => {
    const isActive = u.id === activeUnitId;
    const crop = (t.crops && t.crops[u.crop]) ? t.crops[u.crop] : { name: u.crop, icon: '📦', tempTarget: '10–13°C' };
    const farmerName = currentLang === 'en' ? (u.farmerEn || u.farmer) : u.farmer;
    const locName = currentLang === 'en' ? (u.locationEn || u.location) : u.location;

    let badgeClass = 'badge-normal';
    let badgeText = t.statusNormalCount || '🟢 सामान्य';
    if (u.status === 'warning') {
      badgeClass = 'badge-warning';
      badgeText = t.statusWarningCount || '🟡 ध्यान दें';
    } else if (u.status === 'offline') {
      badgeClass = 'badge-offline';
      badgeText = t.statusOfflineCount || '🔴 ऑफलाइन';
    }

    return `
      <div class="unit-card ${isActive ? 'active-unit-box' : ''}" onclick="selectUnit('${u.id}')">
        <div class="unit-card-header">
          <div>
            <div class="unit-id-badge">
              <span>📦 ${u.id}</span>
              ${isActive ? `<span style="font-size:10px; background:#dcfce7; color:#15803d; border:1px solid #86efac; padding:1px 6px; border-radius:10px; font-weight:800;">${t.activeUnitBadge || 'सक्रिय'}</span>` : ''}
            </div>
            <div class="unit-loc-tag">👤 ${farmerName} • 📍 ${locName}</div>
          </div>
          <span class="unit-status-badge ${badgeClass}">${badgeText}</span>
        </div>

        <div class="unit-metrics-strip">
          <div class="unit-metric-item">
            <div style="color:#64748b; font-size:10px;">${t.tempLabel || 'तापमान'}</div>
            <div class="unit-metric-val" style="color:#0284c7;">${u.temp.toFixed(1)}°C</div>
            <div style="font-size:9px; color:#94a3b8;">${crop.tempTarget}</div>
          </div>
          <div class="unit-metric-item">
            <div style="color:#64748b; font-size:10px;">${t.rhLabel || 'नमी'}</div>
            <div class="unit-metric-val" style="color:#0d9488;">${Math.round(u.rh)}%</div>
            <div style="font-size:9px; color:#94a3b8;">70–90%</div>
          </div>
          <div class="unit-metric-item">
            <div style="color:#64748b; font-size:10px;">${t.batLabel || 'बैटरी'}</div>
            <div class="unit-metric-val" style="color:${u.battery < 25 ? '#d97706' : '#15803d'};">${Math.round(u.battery)}%</div>
            <div style="font-size:9px; color:#94a3b8;">${u.batteryV || '12.4V'}</div>
          </div>
          <div class="unit-metric-item">
            <div style="color:#64748b; font-size:10px;">फसल</div>
            <div class="unit-metric-val">${crop.icon}</div>
            <div style="font-size:9px; color:#64748b; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:55px;">${crop.name}</div>
          </div>
        </div>

        <div class="unit-card-footer">
          <span>🕒 ${t.lastSeen || 'अंतिम अपडेट'}: ${u.lastSeen}</span>
          <button class="btn-open-box ${isActive ? 'is-active' : ''}" onclick="event.stopPropagation(); selectUnit('${u.id}')">
            ${isActive ? '✓ खुला हुआ (Open)' : (t.btnOpenUnit || 'डैशबोर्ड खोलें ›')}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function handleUnitSearch(text) {
  renderUnitsList(text);
}

// 7. Add Storage Unit Modal
function openAddUnitModal() {
  const modal = document.getElementById('addUnitModal');
  if (!modal) return;

  const nextNum = storageUnits.length + 1;
  const nextId = `INNO-${nextNum < 10 ? '00' + nextNum : (nextNum < 100 ? '0' + nextNum : nextNum)}`;

  const idInp = document.getElementById('newUnitId');
  if (idInp) idInp.value = nextId;

  modal.classList.add('active');
}

function closeAddUnitModal() {
  const modal = document.getElementById('addUnitModal');
  if (modal) modal.classList.remove('active');
}

function simulateQrScan() {
  const btn = document.getElementById('btn-sim-qr-scan');
  if (btn) btn.innerHTML = '🔄 स्कैन हो रहा है... (Scanning)';

  setTimeout(() => {
    const nextNum = storageUnits.length + 1;
    const scanId = `INNO-${nextNum < 10 ? '00' + nextNum : (nextNum < 100 ? '0' + nextNum : nextNum)}`;

    const idInp = document.getElementById('newUnitId');
    const farmerInp = document.getElementById('newUnitFarmer');
    const locInp = document.getElementById('newUnitLocation');
    const cropInp = document.getElementById('newUnitCrop');

    if (idInp) idInp.value = scanId;
    if (farmerInp) farmerInp.value = 'प्यनस्खें रॉय (Pynskhem Roy)';
    if (locInp) locInp.value = 'मैरांग कोऑपरेटिव क्लस्टर, मेघालय';
    if (cropInp) cropInp.value = 'tomato';

    if (btn) btn.innerHTML = '✅ QR स्कैन सफल! (INNO-' + scanId + ')';
  }, 400);
}

function submitAddUnit() {
  const idInp = document.getElementById('newUnitId');
  const farmerInp = document.getElementById('newUnitFarmer');
  const locInp = document.getElementById('newUnitLocation');
  const cropInp = document.getElementById('newUnitCrop');

  const id = (idInp && idInp.value.trim().toUpperCase()) || `INNO-0${storageUnits.length + 1}`;
  const farmer = (farmerInp && farmerInp.value.trim()) || 'नया किसान';
  const location = (locInp && locInp.value.trim()) || 'नॉर्थ ईस्ट FPO क्लस्टर';
  const crop = (cropInp && cropInp.value) || 'tomato';

  // Check if ID already exists
  if (storageUnits.some(u => u.id === id)) {
    alert(`यूनिट आईडी ${id} पहले से मौजूद है!`);
    return;
  }

  const newUnit = {
    id: id,
    farmer: farmer,
    farmerEn: farmer,
    location: location,
    locationEn: location,
    crop: crop,
    temp: 11.8,
    rh: 82,
    battery: 86,
    batteryV: "12.5V",
    solar: 58,
    status: "normal",
    lastSeen: "अभी-अभी (Just now)",
    fanIn: true,
    fanOut: true,
    peltier: 60,
    heatsinkTemp: 33
  };

  storageUnits.unshift(newUnit);
  localStorage.setItem('innopath_units', JSON.stringify(storageUnits));

  closeAddUnitModal();
  selectUnit(newUnit.id);
  alert(`✅ नई कोल्ड स्टोरेज यूनिट ${newUnit.id} सफलतापूर्वक जोड़ी गई!`);
}

// 8. Quick Unit Switcher Modal
function openUnitSwitchModal() {
  const modal = document.getElementById('unitSwitchModal');
  const listEl = document.getElementById('unit-switcher-list');
  if (!modal || !listEl) return;

  const t = getT();
  listEl.innerHTML = storageUnits.map(u => {
    const isAct = u.id === activeUnitId;
    const crop = (t.crops && t.crops[u.crop]) ? t.crops[u.crop] : { icon: '🍅' };
    const farmerName = currentLang === 'en' ? (u.farmerEn || u.farmer) : u.farmer;
    return `
      <div onclick="selectUnit('${u.id}')" style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:${isAct ? '#dcfce7' : '#f8fafc'}; border:1.5px solid ${isAct ? '#16a34a' : '#e2e8f0'}; border-radius:8px; cursor:pointer;">
        <div>
          <b style="font-size:14px; color:${isAct ? '#15803d' : '#0f172a'};">${crop.icon} ${u.id}</b>
          <div style="font-size:11px; color:#64748b;">${farmerName} • ${u.temp.toFixed(1)}°C</div>
        </div>
        <span style="font-size:12px; font-weight:700; color:${u.status === 'normal' ? '#15803d' : (u.status === 'warning' ? '#b45309' : '#dc2626')};">
          ${isAct ? '✓ सक्रिय' : (u.status === 'normal' ? '🟢' : (u.status === 'warning' ? '🟡' : '🔴'))}
        </span>
      </div>
    `;
  }).join('');

  modal.classList.add('active');
}

function closeUnitSwitchModal() {
  const modal = document.getElementById('unitSwitchModal');
  if (modal) modal.classList.remove('active');
}

// 9. Central Alert Management
function renderCentralAlerts() {
  const container = document.getElementById('central-alerts-container');
  if (!container) return;

  const t = getT();
  const alertUnits = storageUnits.filter(u => u.status === 'warning' || u.status === 'offline');

  if (alertUnits.length === 0) {
    container.innerHTML = `
      <div class="central-alert-card normal">
        <span style="font-size:26px;">🟢</span>
        <div>
          <b style="color:#15803d; font-size:14px;">सभी यूनिट्स सुरक्षित सीमा में हैं</b>
          <div style="font-size:12px; color:#166534; margin-top:2px;">
            सभी 10 कोल्ड स्टोरेज बॉक्स में तापमान और बैटरी सामान्य स्तर पर काम कर रहे हैं।
          </div>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = alertUnits.map(u => {
    const isWarning = u.status === 'warning';
    const cardClass = isWarning ? 'warning' : 'danger';
    const icon = isWarning ? '🟡' : '🔴';
    const farmer = currentLang === 'en' ? (u.farmerEn || u.farmer) : u.farmer;

    let alertTitle = '';
    let alertBody = '';
    let advice = '';

    if (u.warningReason === 'low_battery' || u.battery < 25) {
      alertTitle = `कम बैटरी स्तर: ${u.battery}% (${u.batteryV || '11.6V'})`;
      alertBody = `बॉक्स ${u.id} की बैटरी डिस्चार्ज सीमा के करीब है।`;
      advice = 'सुझाव: सोलर पैनल की दिशा धूप की ओर करें और पैनल से धूल साफ करें।';
    } else if (u.status === 'offline') {
      alertTitle = `डिवाइस ऑफलाइन (क्लाउड डिस्कनेक्टेड)`;
      alertBody = `बॉक्स ${u.id} से पिछले 45 मिनट से इंटरनेट सिग्नल नहीं मिला है।`;
      advice = 'सुरक्षा वादा: इन-बिल्ट ESP32 कंट्रोलर द्वारा स्वायत्त कूलिंग अभी भी चालू है।';
    } else {
      alertTitle = `उच्च तापमान चेतावनी: ${u.temp.toFixed(1)}°C`;
      alertBody = `बॉक्स ${u.id} का तापमान लक्षित सीमा (8–10°C) से अधिक है।`;
      advice = 'सुझाव: चेंबर का ढक्कन अच्छी तरह बंद करें और बाहरी पंखे की रुकावट जांचें।';
    }

    return `
      <div class="central-alert-card ${cardClass}" onclick="selectUnit('${u.id}')">
        <span style="font-size:28px; line-height:1;">${icon}</span>
        <div style="flex:1;">
          <div class="alert-unit-tag">यूनिट: <b>${u.id}</b> • ${farmer}</div>
          <b style="font-size:13px; display:block; margin-bottom:2px; color:${isWarning ? '#92400e' : '#991b1b'};">${alertTitle}</b>
          <div style="font-size:12px; color:#475569; line-height:1.35;">${alertBody}</div>
          <div style="font-size:11px; color:#0369a1; background:#e0f2fe; padding:4px 8px; border-radius:5px; margin-top:6px;">
            💡 ${advice}
          </div>
          <div style="text-align:right; margin-top:6px;">
            <span style="font-size:11px; font-weight:800; color:#15803d;">👉 इस बॉक्स का डैशबोर्ड खोलें ›</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 10. Alert Simulator (Judge Demo Testing on Active Unit)
function triggerAlertSim(type) {
  const unit = getActiveUnit();
  if (!unit) return;

  if (type === 'normal') {
    unit.status = 'normal';
    unit.temp = 11.8;
    unit.battery = 76;
    unit.batteryV = '12.4V';
    unit.warningReason = null;
  } else if (type === 'high_temp') {
    unit.status = 'warning';
    unit.temp = 15.4;
    unit.warningReason = 'high_temp';
  } else if (type === 'low_battery') {
    unit.status = 'warning';
    unit.battery = 18;
    unit.batteryV = '11.5V';
    unit.warningReason = 'low_battery';
  } else if (type === 'fan_fault') {
    unit.status = 'warning';
    unit.temp = 14.2;
    unit.warningReason = 'fan_fault';
  } else if (type === 'no_net') {
    unit.status = 'offline';
    unit.warningReason = 'offline';
  }

  // Update in array & localStorage
  const idx = storageUnits.findIndex(u => u.id === unit.id);
  if (idx !== -1) storageUnits[idx] = unit;
  localStorage.setItem('innopath_units', JSON.stringify(storageUnits));

  updateActiveUnitDashboard(unit);
  renderCooperativeOverview();
  renderUnitsList();
  renderCentralAlerts();
}

// 11. Crop Selection & Activation Modal
function openCropModal(cropKey) {
  const t = getT();
  const crop = (t.crops && t.crops[cropKey]) ? t.crops[cropKey] : null;
  if (!crop) return;

  pendingCropSelection = cropKey;
  const modalTitle = document.getElementById('modal-crop-title');
  const modalDesc = document.getElementById('modal-crop-desc');

  if (modalTitle) modalTitle.innerHTML = `${crop.icon} ${crop.name}`;
  if (modalDesc) {
    modalDesc.innerHTML = `
      <b>${crop.desc}</b><br><br>
      • ${t.tempLabel || 'Temperature'}: <b>${crop.tempTarget}</b><br>
      • ${t.rhLabel || 'Humidity'}: <b>${crop.rhTarget}</b><br><br>
      ${t.modalCropConfirm || 'क्या आप इस स्टोरेज बॉक्स के लिए यह फसल प्रोफाइल सक्रिय करना चाहते हैं?'}
    `;
  }
  const modal = document.getElementById('cropModal');
  if (modal) modal.classList.add('active');
}

function closeCropModal() {
  pendingCropSelection = null;
  const modal = document.getElementById('cropModal');
  if (modal) modal.classList.remove('active');
}


// 11b. Update Crops Tab UI to match Active Unit's Crop
function updateCropsTabUI(unit) {
  const t = getT();
  if (!unit) unit = getActiveUnit();
  const currentCrop = unit.crop || 'tomato';

  ['tomato', 'chilli', 'beans'].forEach(key => {
    const card = document.getElementById(`crop-card-${key}`);
    const btn = document.getElementById(`btn-crop-action-${key}`);
    const isThisCrop = (key === currentCrop);
    if (card) {
      if (isThisCrop) card.classList.add('active-selected');
      else card.classList.remove('active-selected');
    }
    if (btn) {
      if (isThisCrop) {
        btn.textContent = t.btnActive || (currentLang === 'en' ? 'Active' : 'सक्रिय');
        btn.style.background = '#15803d';
      } else {
        btn.textContent = t.btnSelect || (currentLang === 'en' ? 'Select' : 'चुनें');
        btn.style.background = '#475569';
      }
    }
  });

  const cabbageBtn = document.getElementById('btn-crop-action-cabbage');
  if (cabbageBtn) {
    cabbageBtn.textContent = t.btnUnsupported || (currentLang === 'en' ? 'Unsupported' : 'असमर्थित');
  }
}

function confirmCropSelection() {
  if (pendingCropSelection) {
    const unit = getActiveUnit();
    unit.crop = pendingCropSelection;

    const idx = storageUnits.findIndex(u => u.id === unit.id);
    if (idx !== -1) storageUnits[idx] = unit;
    localStorage.setItem('innopath_units', JSON.stringify(storageUnits));

    updateActiveUnitDashboard(unit);
    renderUnitsList();
    closeCropModal();
    switchTab('home');
  }
}

// 12. Full Bilingual Localization Engine
function applyLanguage(lang) {
  currentLang = lang;
  const t = getT();

  // Update generic elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Explicit translations for zero chance of truncation
  safeSetText('txt-subhead', t.subhead);
  safeSetText('txt-online-badge', t.onlineBadge);
  safeSetText('btn-open-phone', t.btnOpenPhone);
  safeSetText('btn-switch-box-shortcut', currentLang === 'en' ? '📦 View All Boxes' : '📦 सभी बॉक्स देखें');
  safeSetText('txt-temp-label', t.tempLabel);
  safeSetText('txt-rh-label', t.rhLabel);
  safeSetText('txt-bat-label', t.batLabel);
  safeSetText('txt-solar-label', t.solarLabel);
  safeSetText('txt-cooling-title', t.coolingTitle);
  safeSetText('txt-cooling-mode', t.coolingMode);
  safeSetText('val-fan-in', t.statusOn);
  safeSetText('val-fan-out', t.statusOn);
  safeSetText('btn-crop-change', t.btnChange);
  safeSetText('txt-quick-health-title', t.healthTitle || '⚙️ सिस्टम स्वास्थ्य (8 बिंदु जाँच)');
  safeSetText('txt-quick-health-link', currentLang === 'en' ? 'View Details ›' : 'विस्तार देखें ›');

  // Units Tab
  safeSetText('txt-units-title', t.unitsTitle);
  safeSetText('txt-units-desc', t.unitsDesc);
  safeSetText('txt-coop-title', t.coopTitle);
  safeSetText('txt-total-units', t.totalUnits);
  safeSetText('txt-normal-units', t.statusNormalCount);
  safeSetText('txt-warning-units', t.statusWarningCount);
  safeSetText('txt-offline-units', t.statusOfflineCount);
  safeSetText('btn-add-unit-trigger', t.btnAddUnit);
  const searchInp = document.getElementById('unitSearchInput');
  if (searchInp && t.searchPlaceholder) searchInp.placeholder = t.searchPlaceholder;

  // Crops Tab
  safeSetText('txt-crops-title', t.cropsTitle);
  safeSetText('txt-crops-desc', t.cropsDesc);
  safeSetText('txt-crop-active-label', currentLang === 'en' ? '📦 Currently Selected Unit:' : '📦 वर्तमान में चुनी गई यूनिट:');
  safeSetText('txt-crop-tomato', t.cropTomatoTitle);
  safeSetText('txt-tomato-status', t.tomatoStatus);
  safeSetText('txt-tomato-specs', t.tomatoSpecs);
  safeSetText('txt-crop-chilli', t.cropChilliTitle);
  safeSetText('txt-chilli-status', t.chilliStatus);
  safeSetText('txt-chilli-specs', t.chilliSpecs);
  safeSetText('txt-crop-beans', t.cropBeansTitle);
  safeSetText('txt-beans-status', t.beansStatus);
  safeSetText('txt-beans-specs', t.beansSpecs);
  safeSetText('txt-crop-cabbage', t.cropCabbageTitle);
  safeSetText('txt-cabbage-status', t.cabbageStatus);
  safeSetText('txt-cabbage-specs', t.cabbageSpecs);
  safeSetText('btn-crop-action-cabbage', t.btnUnsupported);

  // Alerts Tab
  safeSetText('txt-alerts-title', t.alertsTitle);
  safeSetText('txt-alerts-desc', t.alertsDesc);
  safeSetText('txt-tap-alert-tip', t.tapAlertTip);
  safeSetText('txt-sim-title', t.simTitle);
  safeSetText('btn-sim-normal', t.simNormal);
  safeSetText('btn-sim-high-temp', t.simHighTemp);
  safeSetText('btn-sim-low-battery', t.simLowBattery);
  safeSetText('btn-sim-fan-fault', t.simFanFault);
  safeSetText('btn-sim-no-net', t.simNoNet);

  // Data Tab
  safeSetText('txt-data-title', t.dataTitle);
  safeSetText('txt-data-desc', t.dataDesc);
  safeSetText('btn-filter-today', t.filterToday);
  safeSetText('btn-filter-yest', t.filterYesterday);
  safeSetText('btn-filter-week', t.filterWeek);
  safeSetText('txt-temp-history-title', t.tempHistoryTitle);
  safeSetText('txt-safe-band', t.safeBand);
  safeSetText('txt-chart-summary', t.chartSummary);
  safeSetText('txt-avg-rh-label', t.avgRhLabel);
  safeSetText('txt-avg-rh-sub', t.avgRhSub);
  safeSetText('txt-bat-cycle-label', t.batCycleLabel);
  safeSetText('txt-bat-cycle-sub', t.batCycleSub);

  // More Menu
  safeSetText('txt-more-title', t.moreTitle);
  safeSetText('txt-more-desc', t.moreDesc);
  safeSetText('txt-menu-energy', t.menuEnergy);
  safeSetText('txt-menu-data', t.menuData);
  safeSetText('txt-menu-health', t.menuHealth);
  safeSetText('txt-menu-maintenance', t.menuMaintenance);
  safeSetText('txt-menu-connectivity', t.menuConnectivity);
  safeSetText('txt-menu-batch', currentLang === 'en' ? 'Storage Load / Batch Record' : 'भंडारण लोड / बैच (Storage Load)');
  safeSetText('txt-menu-help', t.menuHelp);
  safeSetText('txt-menu-profile', t.menuProfile);
  safeSetText('txt-menu-share', currentLang === 'en' ? 'Open on Mobile (Scan Live QR)' : 'फोन पर खोलें (Scan Live QR)');

  // Bottom Navigation
  safeSetText('lbl-nav-home', t.navHome);
  safeSetText('lbl-nav-units', t.navUnits);
  safeSetText('lbl-nav-crops', t.navCrops);
  safeSetText('lbl-nav-alerts', t.navAlerts);
  safeSetText('lbl-nav-more', t.navMore);

  // Modals
  safeSetText('btn-crop-cancel', t.btnCancel);
  safeSetText('btn-crop-confirm', t.btnStart);
  safeSetText('txt-modal-add-title', t.addUnitModalTitle);
  safeSetText('txt-opt-manual', t.optEnterId);
  safeSetText('txt-opt-qr', t.optScanQr);
  safeSetText('txt-btn-sim-qr', t.btnSimScan);
  safeSetText('btn-cancel-add-unit', t.btnCancel);
  safeSetText('btn-submit-add-unit', t.btnAddConfirm);

  // Remote Power & Date History Translations
  safeSetText('txt-power-control-title', t.powerControlTitle);
  safeSetText('txt-power-control-sub', t.powerControlSub);
  safeSetText('txt-date-history-title', t.dateHistoryTitle);
  safeSetText('th-date', t.thDate);
  safeSetText('th-avg-temp', t.thAvgTemp);
  safeSetText('th-rh', t.thRh);
  safeSetText('th-battery', t.thBattery);
  safeSetText('th-status', t.thStatus);
  safeSetText('txt-modal-power-title', t.powerConfirmTitle);
  safeSetText('txt-modal-power-desc', t.powerConfirmDesc);
  safeSetText('btn-keep-power-on', t.btnPowerKeepOn);
  safeSetText('btn-confirm-power-off', t.btnPowerConfirm);


  // Re-render UI
  const unit = getActiveUnit();
  updateActiveUnitDashboard(unit);
  renderCooperativeOverview();
  renderUnitsList();
  renderCentralAlerts();
  initTemperatureChart(currentPeriod);
}

function safeSetText(id, text) {
  if (!text) return;
  const el = document.getElementById(id);
  if (el) el.innerHTML = text;
}

// 13. Sub-Pages Rendering (Energy, Health, Maintenance, Connectivity, Batch, Help, Profile)
function renderSubPages(t) {
  const unit = getActiveUnit();

  // Energy Flow Sub-page
  const elEnergy = document.getElementById('sub-energy');
  if (elEnergy) {
    elEnergy.innerHTML = `
      <button class="back-btn" onclick="closeSubPage()">${t.btnBack || '← वापस (Back)'}</button>
      <div class="section-title">${t.energyTitle}</div>
      <div class="section-desc">${t.energyDesc}</div>
      <div class="flow-container" style="margin-top:14px;">
        <div class="flow-step solar-step">
          <div style="text-align:left;">
            <b style="color:#d97706;">${t.solarPanelTitle}</b>
            <div style="font-size:12px; color:#64748b;">उत्पादन: ${Math.round(unit.solar)} W</div>
          </div>
          <span style="font-size:12px; font-weight:700; color:#15803d;">${unit.solar > 0 ? t.solarCharging : '⚪ स्टैंडबाय'}</span>
        </div>
        <div class="flow-down-arrow">↓</div>
        <div class="flow-step mppt-step">
          <div style="text-align:left;">
            <b style="color:#4f46e5;">${t.mpptTitle}</b>
            <div style="font-size:12px; color:#64748b;">${t.mpptEff}</div>
          </div>
          <span style="font-size:12px; font-weight:700; color:#15803d;">${t.mpptActive}</span>
        </div>
        <div class="flow-down-arrow">↓</div>
        <div class="flow-step battery-step">
          <div style="text-align:left;">
            <b style="color:#15803d;">${t.batTitle}</b>
            <div style="font-size:12px; color:#64748b;">स्तर: ${Math.round(unit.battery)}% (${unit.batteryV || '12.4V'})</div>
          </div>
          <span style="font-size:12px; font-weight:700; color:${unit.battery < 25 ? '#d97706' : '#15803d'};">
            ${unit.battery < 25 ? '🟡 कम स्तर' : t.batSafe}
          </span>
        </div>
        <div class="flow-down-arrow">↓</div>
        <div class="flow-step cooling-step">
          <div style="text-align:left;">
            <b style="color:#0284c7;">${t.coolSysTitle}</b>
            <div style="font-size:12px; color:#64748b;">खपत: 42 W</div>
          </div>
          <span style="font-size:12px; font-weight:700; color:#0284c7;">${t.coolStage1}</span>
        </div>
      </div>
    `;
  }

  // 8-Point System Health Sub-page
  const elHealth = document.getElementById('sub-health');
  if (elHealth) {
    elHealth.innerHTML = `
      <button class="back-btn" onclick="closeSubPage()">${t.btnBack || '← वापस (Back)'}</button>
      <div class="section-title">${t.healthTitle || '⚙️ सिस्टम स्वास्थ्य (System Health)'}</div>
      <div class="section-desc">${t.healthDesc || 'सभी आंतरिक सेंसर व घटकों की स्थिति'} - <b>${unit.id}</b></div>

      <div style="margin-top:14px;">
        <div class="health-item">
          <div>
            <div class="health-item-name">1. ${t.healthTemp || 'तापमान सेंसर (SHT31)'}</div>
            <div style="font-size:11px; color:#64748b;">डिजिटल I2C बस • ±0.2°C सटीकता</div>
          </div>
          <span class="health-state-tag" style="color:#15803d;">${t.stateNormal || '🟢 सामान्य'}</span>
        </div>

        <div class="health-item">
          <div>
            <div class="health-item-name">2. ${t.healthRh || 'नमी सेंसर (SHT31)'}</div>
            <div style="font-size:11px; color:#64748b;">सेंसिंग रेंज: 0–100% RH</div>
          </div>
          <span class="health-state-tag" style="color:#15803d;">${t.stateNormal || '🟢 सामान्य'}</span>
        </div>

        <div class="health-item">
          <div>
            <div class="health-item-name">3. ${t.healthCooling || 'पेल्टियर कूलिंग मॉड्यूल'}</div>
            <div style="font-size:11px; color:#64748b;">TEC1-12706 • PWM स्टेजिंग 60%</div>
          </div>
          <span class="health-state-tag" style="color:#0284c7;">🟢 सक्रिय</span>
        </div>

        <div class="health-item">
          <div>
            <div class="health-item-name">4. ${t.healthFanIn || 'आंतरिक सर्कुलेशन पंखा'}</div>
            <div style="font-size:11px; color:#64748b;">12V ब्रशलेस • 2200 RPM</div>
          </div>
          <span class="health-state-tag" style="color:#15803d;">🟢 चालू</span>
        </div>

        <div class="health-item">
          <div>
            <div class="health-item-name">5. ${t.healthFanOut || 'बाहरी हीट-सिंक पंखा'}</div>
            <div style="font-size:11px; color:#64748b;">हीट-सिंक तापमान: ${unit.heatsinkTemp || 34}°C</div>
          </div>
          <span class="health-state-tag" style="color:#15803d;">🟢 चालू</span>
        </div>

        <div class="health-item">
          <div>
            <div class="health-item-name">6. ${t.healthBat || 'बैटरी स्वास्थ्य (12V LFP)'}</div>
            <div style="font-size:11px; color:#64748b;">स्वास्थ्य क्षमता: 98% • ${unit.battery}% स्तर</div>
          </div>
          <span class="health-state-tag" style="color:${unit.battery < 25 ? '#b45309' : '#15803d'};">
            ${unit.battery < 25 ? (t.stateCheck || '🟡 जाँचें') : (t.stateNormal || '🟢 सामान्य')}
          </span>
        </div>

        <div class="health-item">
          <div>
            <div class="health-item-name">7. ${t.healthSolar || 'सोलर चार्जिंग (MPPT)'}</div>
            <div style="font-size:11px; color:#64748b;">MPPT दक्षता: 94% • 58W उत्पादन</div>
          </div>
          <span class="health-state-tag" style="color:#15803d;">🟢 सक्रिय</span>
        </div>

        <div class="health-item">
          <div>
            <div class="health-item-name">8. ${t.healthNet || 'कनेक्टिविटी (Wi-Fi/BLE)'}</div>
            <div style="font-size:11px; color:#64748b;">ESP32 ड्यूल-मोड टेलीमेट्री</div>
          </div>
          <span class="health-state-tag" style="color:${unit.status === 'offline' ? '#dc2626' : '#15803d'};">
            ${unit.status === 'offline' ? (t.stateOffline || '🔴 डिस्कनेक्टेड') : (t.stateConnected || '🟢 कनेक्टेड')}
          </span>
        </div>
      </div>
    `;
  }

  // Maintenance Sub-page
  const elMaint = document.getElementById('sub-maintenance');
  if (elMaint) {
    elMaint.innerHTML = `
      <button class="back-btn" onclick="closeSubPage()">${t.btnBack || '← वापस (Back)'}</button>
      <div class="section-title">${t.maintTitle || '🛠️ रखरखाव एवं हिस्ट्री'}</div>
      <div class="section-desc">${t.maintDesc || 'दैनिक चेकलिस्ट और सर्विस रिकॉर्ड'} - <b>${unit.id}</b></div>

      <div class="chart-card" style="margin-top:14px; background:#f0fdf4; border-color:#86efac;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <b style="color:#14532d;">${t.maintCond || 'वर्तमान स्थिति:'}</b>
          <span class="unit-status-badge badge-normal">${t.maintCondNormal || '🟢 सब ठीक है'}</span>
        </div>
      </div>

      <div style="margin-top:14px;">
        <div style="font-weight:700; font-size:13px; margin-bottom:8px;">दैनिक 10-सेकंड चेकलिस्ट:</div>
        <div class="checklist-item" onclick="toggleCheck(this)">
          <input type="checkbox" class="checklist-checkbox" checked>
          <span class="checklist-text">${t.chkSolar || '☀️ सोलर पैनल पर धूल या पत्तियां नहीं हैं'}</span>
        </div>
        <div class="checklist-item" onclick="toggleCheck(this)">
          <input type="checkbox" class="checklist-checkbox" checked>
          <span class="checklist-text">${t.chkDoor || '🚪 चेंबर का ढक्कन वायुरोधी (Tightly) बंद है'}</span>
        </div>
        <div class="checklist-item" onclick="toggleCheck(this)">
          <input type="checkbox" class="checklist-checkbox" checked>
          <span class="checklist-text">${t.chkFans || '🌀 कूलिंग पंखे सुचारू घूम रहे हैं'}</span>
        </div>
        <div class="checklist-item" onclick="toggleCheck(this)">
          <input type="checkbox" class="checklist-checkbox" checked>
          <span class="checklist-text">${t.chkCables || '🔌 सभी केबल्स ठीक से जुड़े हैं'}</span>
        </div>
        <div class="checklist-item" onclick="toggleCheck(this)">
          <input type="checkbox" class="checklist-checkbox" checked>
          <span class="checklist-text">${t.chkSensor || '🌡️ तापमान/नमी सेंसर केबल सुरक्षित है'}</span>
        </div>
      </div>

      <div style="margin-top:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <b style="font-size:13px;">${t.maintLogTitle || 'रखरखाव इतिहास (Service Log)'}</b>
          <button onclick="logNewMaintenance('${unit.id}')" style="background:#15803d; color:#fff; border:none; padding:4px 8px; border-radius:4px; font-size:11px; font-weight:700; cursor:pointer;">
            ${t.btnAddMaint || '+ दर्ज करें'}
          </button>
        </div>
        <div id="maint-log-list">
          <div class="maint-log-item">
            <span class="maint-log-date">आज (Today)</span>
            <span class="maint-log-task">दैनिक रूटीन जांच पूरी • सभी पंखे सामान्य</span>
          </div>
          <div class="maint-log-item">
            <span class="maint-log-date">20 Sep 2026</span>
            <span class="maint-log-task">सोलर पैनल की सूती कपड़े से सफाई संपन्न</span>
          </div>
          <div class="maint-log-item">
            <span class="maint-log-date">12 Sep 2026</span>
            <span class="maint-log-task">बाहरी हीट-सिंक जाली की धूल हटाई गई</span>
          </div>
        </div>
      </div>

      <div class="chart-summary-box" style="margin-top:14px;">
        ${t.maintTip || '💡 सुझाव: उत्तर-पूर्व के धूल भरे मौसम में बाहरी पंखे और सोलर पैनल को हर 15 दिन में ब्रश से साफ करें।'}
      </div>
    `;
  }

  // Connectivity Sub-page
  const elConn = document.getElementById('sub-connectivity');
  if (elConn) {
    elConn.innerHTML = `
      <button class="back-btn" onclick="closeSubPage()">${t.btnBack || '← वापस (Back)'}</button>
      <div class="section-title">${t.connPageTitle}</div>
      <div class="section-desc">${t.connPageDesc}</div>
      <div style="margin-top:14px;">
        <div class="chart-card" style="margin-bottom:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <b>${t.bleTitle}</b>
              <div style="font-size:12px; color:#64748b;">${t.bleDesc}</div>
            </div>
            <span class="status-badge">${t.bleConnected}</span>
          </div>
        </div>
        <div class="chart-card" style="margin-bottom:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <b>${t.wifiTitle}</b>
              <div style="font-size:12px; color:#64748b;">${t.wifiDesc}</div>
            </div>
            <span class="status-badge">${unit.status === 'offline' ? '🔴 डिस्कनेक्टेड' : t.wifiConnected}</span>
          </div>
        </div>
        <div class="chart-card" style="margin-bottom:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <b>${t.hotspotTitle}</b>
              <div style="font-size:12px; color:#64748b;">${t.hotspotDesc}</div>
            </div>
            <span style="font-size:12px; color:#94a3b8; font-weight:700;">${t.hotspotStandby}</span>
          </div>
        </div>
        <div class="hero-status-box" style="background:#f0fdf4; border-color:#86efac; margin-top:14px;">
          <span style="font-size:26px;">🛡️</span>
          <div>
            <b style="color:#166534; font-size:14px;">${t.guaranteeTitle}</b>
            <div style="font-size:12px; color:#14532d; margin-top:2px;">${t.guaranteeDesc}</div>
          </div>
        </div>
      </div>
    `;
  }

  
  // Staged Cooling Details Sub-page
  const elCooling = document.getElementById('sub-cooling');
  if (elCooling) {
    const cropInfo = (t.crops && t.crops[unit.crop]) ? t.crops[unit.crop] : { name: 'Tomato', tempTarget: '10–13°C' };
    elCooling.innerHTML = `
      <button class="back-btn" onclick="closeSubPage()">${t.btnBack || '← वापस (Back)'}</button>
      <div class="section-title">❄️ ${currentLang === 'en' ? 'Staged Cooling System Details' : 'शीतलन प्रणाली विवरण'} (${unit.id})</div>
      <div class="section-desc">${currentLang === 'en' ? 'Energy-aware thermoelectric cooling management' : 'ऊर्जा बचाने हेतु समझदार शीतलन नियंत्रण'}</div>

      <div class="chart-card" style="margin-top:14px;">
        <div style="margin-bottom:10px;">
          <b>${currentLang === 'en' ? '⚙️ Active Cooling Strategy:' : '⚙️ वर्तमान कूलिंग रणनीति:'}</b>
          <p style="font-size:13px; color:#475569; margin-top:4px;">
            ${currentLang === 'en'
              ? `Chamber temperature is ${unit.temp.toFixed(1)}°C (target: ${cropInfo.tempTarget}). System is running in <b>Stage-1 Eco Mode</b> to conserve battery power.`
              : `चेंबर का तापमान ${unit.temp.toFixed(1)}°C है (लक्ष्य: ${cropInfo.tempTarget})। बैटरी बचाने के लिए सिस्टम <b>स्टेज-1 दक्षता मोड</b> पर चल रहा है।`}
          </p>
        </div>
        <hr style="border:none; border-top:1px solid #e2e8f0; margin:10px 0;">
        <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:8px;">
          <span>${currentLang === 'en' ? 'Internal Air Circulation Fan:' : 'ठंडी हवा का आंतरिक पंखा:'}</span>
          <b style="color:#15803d;">🟢 100% ${currentLang === 'en' ? 'RUNNING' : 'चालू'}</b>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:8px;">
          <span>${currentLang === 'en' ? 'Peltier Thermoelectric Module:' : 'पेल्टियर कूलिंग मॉड्यूल:'}</span>
          <b style="color:#0284c7;">🟢 60% ${currentLang === 'en' ? 'Power (Eco Mode)' : 'शक्ति (इको मोड)'}</b>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:8px;">
          <span>${currentLang === 'en' ? 'External Heat-Sink Fan:' : 'बाहरी हीट-सिंक पंखा:'}</span>
          <b style="color:#15803d;">🟢 100% ${currentLang === 'en' ? 'RUNNING' : 'चालू'}</b>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:13px;">
          <span>${currentLang === 'en' ? 'Heat-Sink Temperature:' : 'बाहरी हीट-सिंक तापमान:'}</span>
          <b>${unit.heatsinkTemp || 34}°C (${currentLang === 'en' ? 'Normal' : 'सामान्य'})</b>
        </div>
      </div>

      <div class="chart-summary-box" style="margin-top:14px; background:#eff6ff; border-color:#bfdbfe; color:#1e40af;">
        ℹ️ ${currentLang === 'en'
          ? 'Dual PWM staged fan control reduces unnecessary power consumption by 35% compared to constant-speed systems.'
          : 'ड्यूल PWM स्टेज्ड फैन नियंत्रण लगातार चलने वाले सामान्य सिस्टम की तुलना में 35% कम बिजली की खपत करता है।'}
      </div>
    `;
  }

  // Storage Batch Sub-page
  const elBatch = document.getElementById('sub-batch');
  if (elBatch) {
    const cropInfo = (t.crops && t.crops[unit.crop]) ? t.crops[unit.crop] : { name: unit.crop, icon: '🍅' };
    elBatch.innerHTML = `
      <button class="back-btn" onclick="closeSubPage()">${t.btnBack || '← वापस (Back)'}</button>
      <div class="section-title">📦 वर्तमान भंडारण बैच (${unit.id})</div>
      <div class="section-desc">कोल्ड स्टोरेज बॉक्स में लोड की गई फसल का रिकॉर्ड</div>
      <div class="chart-card" style="margin-top:14px;">
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
          <span style="font-size:36px;">${cropInfo.icon}</span>
          <div>
            <div style="font-size:18px; font-weight:800;">${cropInfo.name}</div>
            <span class="crop-status-pill pill-green">🟢 भंडारण के अनुकूल</span>
          </div>
        </div>
        <div style="font-size:13px; color:#475569; line-height:1.6;">
          <div>• <b>मात्रा (Produce Load):</b> 5.0 किलोग्राम (kg)</div>
          <div>• <b>भंडारण शुरू हुआ:</b> आज सुबह 10:15 AM</div>
          <div>• <b>वर्तमान चेंबर तापमान:</b> ${unit.temp.toFixed(1)}°C</div>
          <div>• <b>लक्षित सुरक्षित अवधि:</b> 7 से 10 दिन</div>
        </div>
        <div class="chart-summary-box" style="margin-top:14px; background:#eff6ff; border-color:#bfdbfe; color:#1e40af;">
          ℹ️ नोट: कोई अवास्तविक दावा नहीं — केवल तापमान और नमी बनाए रखकर प्राकृतिक गुणवत्ता को सुरक्षित रखा जा रहा है।
        </div>
      </div>
    `;
  }

  // Help & Support Sub-page
  const elHelp = document.getElementById('sub-help');
  if (elHelp) {
    elHelp.innerHTML = `
      <button class="back-btn" onclick="closeSubPage()">${t.btnBack || '← वापस (Back)'}</button>
      <div class="section-title">${t.helpPageTitle}</div>
      <div class="section-desc">${t.helpPageDesc}</div>
      <div style="margin-top:14px; display:flex; flex-direction:column; gap:10px;">
        <div class="chart-card">
          <b>${t.faq1Q}</b>
          <p style="font-size:12px; color:#475569; margin-top:4px;">${t.faq1A}</p>
        </div>
        <div class="chart-card">
          <b>${t.faq2Q}</b>
          <p style="font-size:12px; color:#475569; margin-top:4px;">${t.faq2A}</p>
        </div>
        <div class="chart-card">
          <b>${t.faq3Q}</b>
          <p style="font-size:12px; color:#475569; margin-top:4px;">${t.faq3A}</p>
        </div>
        <div class="chart-card">
          <b>${t.faq4Q}</b>
          <p style="font-size:12px; color:#475569; margin-top:4px;">${t.faq4A}</p>
        </div>
        <div style="text-align:center; margin-top:10px;">
          <button class="btn-primary" style="display:inline-flex; align-items:center; justify-content:center; gap:8px;" onclick="alert('KVK Helpline: 1800-180-1551')">
            <span>📞</span>
            <span>${t.btnCallSupport}</span>
          </button>
        </div>
      </div>
    `;
  }

  // Farmer & Operator Profile Sub-page
  const elProf = document.getElementById('sub-profile');
  if (elProf) {
    const farmerName = currentLang === 'en' ? (unit.farmerEn || unit.farmer) : unit.farmer;
    const locName = currentLang === 'en' ? (unit.locationEn || unit.location) : unit.location;
    elProf.innerHTML = `
      <button class="back-btn" onclick="closeSubPage()">${t.btnBack || '← वापस (Back)'}</button>
      <div class="section-title">${t.profPageTitle}</div>
      <div class="section-desc">${t.profPageDesc}</div>
      <div class="chart-card" style="margin-top:14px; line-height:1.8; font-size:13px;">
        <div><b>संचालक / किसान:</b> ${farmerName}</div>
        <div><b>संकलन केंद्र / FPO:</b> ${locName}</div>
        <div><b>सक्रिय स्टोरेज बॉक्स:</b> <span style="color:#15803d; font-weight:800;">${unit.id}</span></div>
        <div><b>कुल प्रबंधित बॉक्स:</b> ${storageUnits.length} बॉक्स</div>
        <div><b>रजिस्टर्ड मोबाइल:</b> +91 98765 43210</div>
        <div><b>पसंदीदा भाषा:</b> ${currentLang === 'hi' ? 'हिन्दी (Hindi)' : (currentLang === 'en' ? 'English' : currentLang.toUpperCase())}</div>
      </div>
    `;
  }
}

function logNewMaintenance(unitId) {
  const task = prompt('नया रखरखाव कार्य दर्ज करें (उदा. पंखे की सफाई, पैनल धोना):', 'सोलर पैनल की सफाई की गई');
  if (task && task.trim()) {
    const list = document.getElementById('maint-log-list');
    if (list) {
      const item = document.createElement('div');
      item.className = 'maint-log-item';
      item.innerHTML = `
        <span class="maint-log-date">आज (Today)</span>
        <span class="maint-log-task">${task.trim()}</span>
      `;
      list.prepend(item);
      alert('✅ रखरखाव कार्य सफलतापूर्वक दर्ज किया गया!');
    }
  }
}

// 14. Tab Switching
function switchTab(tabId) {
  currentTab = tabId;
  document.querySelectorAll('.tab-view').forEach(el => el.classList.remove('active'));
  const targetView = document.getElementById(`view-${tabId}`);
  if (targetView) targetView.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`nav-${tabId}`);
  if (activeBtn) activeBtn.classList.add('active');

  if (tabId === 'units') {
    renderCooperativeOverview();
    const searchInp = document.getElementById('unitSearchInput');
    renderUnitsList(searchInp ? searchInp.value : '');
  } else if (tabId === 'crops') {
    updateCropsTabUI(getActiveUnit());
  } else if (tabId === 'alerts') {
    renderCentralAlerts();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 15. Sub-Page Routing under "More"
function openSubPage(pageId) {
  switchTab('more');
  const menuMain = document.getElementById('more-menu-main');
  if (menuMain) menuMain.style.display = 'none';

  document.querySelectorAll('.sub-page').forEach(el => el.classList.remove('active'));
  const targetSub = document.getElementById(`sub-${pageId}`);
  if (targetSub) {
    targetSub.classList.add('active');
    if (pageId === 'data') {
      setTimeout(() => initTemperatureChart(currentPeriod), 100);
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeSubPage() {
  document.querySelectorAll('.sub-page').forEach(el => el.classList.remove('active'));
  const menuMain = document.getElementById('more-menu-main');
  if (menuMain) menuMain.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 16. Canvas Temperature Graph
function initTemperatureChart(period) {
  currentPeriod = period;
  const canvas = document.getElementById('tempChart');
  if (!canvas) return;

  const unit = getActiveUnit();
  const curTempEl = document.getElementById('chart-cur-temp');
  if (curTempEl) curTempEl.textContent = `${unit.temp.toFixed(1)}°C`;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const parentW = canvas.parentElement ? canvas.parentElement.clientWidth : 340;
  const w = (rect.width > 0 ? rect.width : parentW) || 340;
  const h = (rect.height > 0 ? rect.height : 170) || 170;

  ctx.clearRect(0, 0, w, h);

  const padLeft = 40;
  const padRight = 20;
  const padTop = 20;
  const padBottom = 25;
  const chartW = w - padLeft - padRight;
  const chartH = h - padTop - padBottom;

  const minT = 8;
  const maxT = 16;

  function getY(temp) {
    return padTop + chartH - ((temp - minT) / (maxT - minT)) * chartH;
  }

  // Draw Soft Green Safe Zone Band (10°C - 13°C)
  const y13 = getY(13);
  const y10 = getY(10);
  ctx.fillStyle = 'rgba(34, 197, 94, 0.15)';
  ctx.fillRect(padLeft, y13, chartW, y10 - y13);

  // Dashed Boundaries
  ctx.setLineDash([4, 4]);
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#22c55e';

  ctx.beginPath();
  ctx.moveTo(padLeft, y13);
  ctx.lineTo(w - padRight, y13);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(padLeft, y10);
  ctx.lineTo(w - padRight, y10);
  ctx.stroke();

  ctx.setLineDash([]);

  // Axis Labels
  ctx.fillStyle = '#64748b';
  ctx.font = '11px sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText('14°C', padLeft - 6, getY(14) + 4);
  ctx.fillText('13°C', padLeft - 6, y13 + 4);
  ctx.fillText('11.5°', padLeft - 6, getY(11.5) + 4);
  ctx.fillText('10°C', padLeft - 6, y10 + 4);

  // Data points based on filter
  let points = [
    { time: '8 AM', temp: 12.4 },
    { time: '10 AM', temp: 11.2 },
    { time: '12 PM', temp: unit.temp },
    { time: '2 PM', temp: unit.temp + 0.1 }
  ];

  if (period === 'yesterday') {
    points = [
      { time: '8 AM', temp: 12.1 },
      { time: '12 PM', temp: 11.7 },
      { time: '4 PM', temp: 12.0 },
      { time: '8 PM', temp: 11.5 }
    ];
  } else if (period === 'week') {
    points = [
      { time: 'Mon', temp: 11.9 },
      { time: 'Wed', temp: 11.6 },
      { time: 'Fri', temp: 12.2 },
      { time: 'Today', temp: unit.temp }
    ];
  }

  const stepX = chartW / (points.length - 1);

  // Plot Curve
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#0284c7';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

  points.forEach((pt, i) => {
    const x = padLeft + i * stepX;
    const y = getY(pt.temp);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Plot Marker Dots
  ctx.textAlign = 'center';
  points.forEach((pt, i) => {
    const x = padLeft + i * stepX;
    const y = getY(pt.temp);

    ctx.beginPath();
    ctx.arc(x, y, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#0284c7';
    ctx.stroke();

    ctx.fillStyle = '#64748b';
    ctx.fillText(pt.time, x, h - 6);
  });
}

function setChartFilter(period, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  initTemperatureChart(period);
}

// 17. Interactive Checklist Toggle
function toggleCheck(container) {
  const cb = container.querySelector('.checklist-checkbox');
  if (cb) cb.checked = !cb.checked;
}

// 18. Dynamic Clock
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const timeStr = `${hours}:${minutes} ${ampm}`;

  const t = getT();
  const el = document.getElementById('txt-last-update');
  if (el) {
    el.textContent = `${t.lastUpdatePrefix || 'अंतिम अपडेट: आज'} ${timeStr}`;
  }
}

// 19. Dynamic Crisp Phone QR Code Modal (Targeting Active Box)
function openQrModal() {
  const t = getT();
  const unit = getActiveUnit();
  safeSetText('txt-qr-title', t.qrModalTitle || '📱 फोन पर कैसे खोलें (Scan QR)');

  // Determine active live URL dynamically with unit parameter
  const isVercel = window.location.hostname.includes('vercel.app');
  const baseLiveUrl = isVercel
    ? (window.location.origin + window.location.pathname)
    : 'https://innopath-cold-storage.vercel.app';

  const fullUrl = `${baseLiveUrl}?unit=${unit.id}`;

  // Crisp live QR code generator
  const qrImg = document.getElementById('qr-modal-img');
  if (qrImg) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&margin=8&data=${encodeURIComponent(fullUrl)}`;
    qrImg.onerror = () => { qrImg.src = 'phone_qr.png'; };
  }

  const bodyEl = document.getElementById('txt-qr-body');
  if (bodyEl) {
    bodyEl.innerHTML = `
      ${t.qrStep1 || '1. किसी भी फोन का <b>कैमरा या Google Lens</b> खोलकर यह QR कोड स्कैन करें।'}<br>
      ${t.qrStep2 || '2. या सीधे किसी भी ब्राउज़र में यह लिंक खोलें:'}<br>
      <div style="text-align:center; margin-top:8px;">
        <code style="background:#f1f5f9; padding:6px 12px; border-radius:6px; font-size:13px; font-weight:bold; color:#15803d; border:1px solid #cbd5e1; display:inline-block; word-break:break-all;">${fullUrl}</code>
      </div>
    `;
  }
  safeSetText('btn-qr-gotit', t.btnGotIt || 'समझ गया (Got It)');
  const modal = document.getElementById('qrModal');
  if (modal) modal.classList.add('active');
}

function closeQrModal() {
  const modal = document.getElementById('qrModal');
  if (modal) modal.classList.remove('active');
}

// 20. Remote Power Switch Control (Phone Control)
function handlePowerToggle(isOn) {
  const unit = getActiveUnit();
  if (!isOn) {
    // Show confirmation modal before turning OFF cooling
    const modal = document.getElementById('powerConfirmModal');
    if (modal) modal.classList.add('active');
  } else {
    // Turn cooling back ON immediately
    setUnitCoolingPower(unit, true);
  }
}

function cancelPowerToggle() {
  const modal = document.getElementById('powerConfirmModal');
  if (modal) modal.classList.remove('active');
  const toggle = document.getElementById('coolingPowerToggle');
  if (toggle) toggle.checked = true;
}

function confirmPowerOff() {
  const modal = document.getElementById('powerConfirmModal');
  if (modal) modal.classList.remove('active');
  const unit = getActiveUnit();
  setUnitCoolingPower(unit, false);
}

function setUnitCoolingPower(unit, isPowered) {
  unit.isPoweredOn = isPowered;
  const toggle = document.getElementById('coolingPowerToggle');
  if (toggle) toggle.checked = isPowered;

  const card = document.getElementById('power-control-card');
  const note = document.getElementById('power-status-note');
  const t = getT();

  if (isPowered) {
    if (card) card.classList.remove('power-off');
    if (note) {
      note.style.color = '#15803d';
      note.innerHTML = t.powerOnText || '🟢 कूलिंग सिस्टम सक्रिय है (Cooling ON)';
    }
  } else {
    if (card) card.classList.add('power-off');
    if (note) {
      note.style.color = '#b45309';
      note.innerHTML = t.powerOffText || '⚪ कूलिंग सिस्टम बंद है (Cooling OFF)';
    }
  }

  // Update in array & localStorage
  const idx = storageUnits.findIndex(u => u.id === unit.id);
  if (idx !== -1) storageUnits[idx] = unit;
  localStorage.setItem('innopath_units', JSON.stringify(storageUnits));

  updateActiveUnitDashboard(unit);
}

// 21. Date History Table Generator
function renderDateHistoryTable(unit) {
  const tbody = document.getElementById('date-history-tbody');
  const badge = document.getElementById('date-history-unit-badge');
  if (!tbody) return;
  if (!unit) unit = getActiveUnit();

  if (badge) badge.textContent = unit.id;
  const t = getT();

  const historyData = [
    { date: '25 Sep 2026', temp: unit.temp.toFixed(1) + '°C', rh: Math.round(unit.rh) + '%', bat: Math.round(unit.battery) + '%', status: '🟢 ' + (t.statusNormalCount || 'सामान्य') },
    { date: '24 Sep 2026', temp: '12.0°C', rh: '81%', bat: '85%', status: '🟢 ' + (t.statusNormalCount || 'सामान्य') },
    { date: '23 Sep 2026', temp: '11.6°C', rh: '83%', bat: '90%', status: '🟢 ' + (t.statusNormalCount || 'सामान्य') },
    { date: '22 Sep 2026', temp: '12.3°C', rh: '79%', bat: '78%', status: '🟢 ' + (t.statusNormalCount || 'सामान्य') },
    { date: '21 Sep 2026', temp: '13.8°C', rh: '84%', bat: '71%', status: '🟡 ' + (currentLang === 'en' ? 'Door Opened' : 'ढक्कन खुला') },
    { date: '20 Sep 2026', temp: '11.9°C', rh: '82%', bat: '88%', status: '🟢 ' + (t.statusNormalCount || 'सामान्य') },
    { date: '19 Sep 2026', temp: '12.1°C', rh: '80%', bat: '82%', status: '🟢 ' + (t.statusNormalCount || 'सामान्य') }
  ];

  tbody.innerHTML = historyData.map(row => `
    <tr>
      <td style="font-weight:700;">${row.date}</td>
      <td style="color:#0284c7; font-weight:700;">${row.temp}</td>
      <td style="color:#0d9488; font-weight:600;">${row.rh}</td>
      <td style="color:#15803d; font-weight:600;">${row.bat}</td>
      <td><span style="font-size:11px; font-weight:700;">${row.status}</span></td>
    </tr>
  `).join('');
}
