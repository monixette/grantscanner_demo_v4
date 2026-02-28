/* ============================================================
   Grant Scanner — app.js  (shared across all pages)
   Theme · Burger · Countdown · i18n (ES/EN)
   ============================================================ */

(function () {
  'use strict';

  /* ══════════════════════════════════════════
     TRANSLATIONS
     ══════════════════════════════════════════ */
  const T = {
    /* Nav */
    'nav.pipeline': { es: '📊 Pipeline', en: '📊 Pipeline' },
    'nav.reports': { es: '📄 Reportes', en: '📄 Reports' },
    'nav.settings': { es: '⚙️ Configuración', en: '⚙️ Settings' },
    'nav.detail': { es: '📋 Detalle Grant', en: '📋 Grant Detail' },
    'nav.score': { es: '📊 Score', en: '📊 Score' },
    'nav.decision': { es: '✅ Decisión', en: '✅ Decision' },
    'nav.generating': { es: '⚙️ Generando', en: '⚙️ Generating' },
    'nav.output': { es: '📄 Propuesta', en: '📄 Output' },
    /* KPIs */
    'kpi.mapped': { es: 'Donantes Mapeados', en: 'Funders Mapped' },
    'kpi.open': { es: 'Abiertas / Activas', en: 'Open / Active' },
    'kpi.progress': { es: 'En Proceso', en: 'In Progress' },
    'kpi.submitted': { es: 'Enviadas Q1 2026', en: 'Submitted Q1 2026' },
    'kpi.ch1': { es: '↑ 3 este mes', en: '↑ 3 this month' },
    'kpi.ch2': { es: 'Verificado hoy', en: 'Verified today' },
    'kpi.ch3': { es: '↑ 1 nueva', en: '↑ 1 new' },
    'kpi.ch4': { es: '2 en espera', en: '2 awaiting decision' },
    /* Filters */
    'filter.status': { es: 'Estado:', en: 'Status:' },
    'filter.all': { es: 'Todos', en: 'All' },
    'filter.open': { es: '⚡ Abiertos', en: '⚡ Open' },
    'filter.closed': { es: '✕ Cerrados', en: '✕ Closed' },
    'filter.invite': { es: '🔒 Por Invitación', en: '🔒 By Invitation' },
    'filter.watch': { es: '👁 Seguimiento', en: '👁 Monitoring' },
    'filter.align': { es: 'Alineación:', en: 'Alignment:' },
    'filter.a.all': { es: 'Todos', en: 'All' },
    'filter.a.high': { es: '🟢 Alta', en: '🟢 High' },
    'filter.a.med': { es: '🟡 Media', en: '🟡 Medium' },
    'filter.a.low': { es: '🔴 Baja', en: '🔴 Low' },
    'filter.region': { es: 'Región:', en: 'Region:' },
    'filter.sort': { es: 'Orden:', en: 'Sort:' },
    'filter.reset': { es: '✕ Limpiar', en: '✕ Reset' },
    /* Hero CTA */
    'cta.badge': { es: '⚡ Prioridad Inmediata', en: '⚡ Immediate Priority' },
    'cta.meta': { es: 'Score 74/100 · Verificado Feb 28, 2026 · 27 días al cierre', en: 'Score 74/100 · Verified Feb 28, 2026 · 27 days to close' },
    'cta.title': { es: 'Fundación Merced IDEAS 2026 — Convocatoria abierta hasta 27 marzo', en: 'Fundación Merced IDEAS 2026 — Open call until March 27' },
    'cta.desc': {
      es: 'Democracia · Ciudadanía · Juventudes · OSC México · <strong style="color:var(--accent)">Acción recomendada: aplicar ahora</strong>',
      en: 'Democracy · Citizenship · Youth · Mexican OSC · <strong style="color:var(--accent)">Recommended action: apply now</strong>'
    },
    'cta.btn': { es: 'Revisar y Aplicar →', en: 'Review & Apply →' },
    /* Buttons */
    'btn.priority': { es: 'Abrir Grant Prioritario →', en: 'Open Priority Grant →' },
    'btn.back.dash': { es: '← Dashboard', en: '← Dashboard' },
    'btn.preq': { es: 'Pre-Calificación →', en: 'Run Pre-Qualification →' },
    'btn.back.grant': { es: '← Detalle', en: '← Grant Detail' },
    'btn.decision': { es: 'Tomar Decisión →', en: 'Make a Decision →' },
    'btn.generate': { es: '⚡ Generar Propuesta →', en: '⚡ Generate Proposal →' },
    'btn.back.score': { es: '← Score', en: '← Score' },
    'btn.view': { es: 'Ver Propuesta →', en: 'View Proposal →' },
    'btn.new': { es: '← Nueva Búsqueda', en: '← New Grant Search' },
    'btn.return': { es: '← Volver al Dashboard', en: '← Return to Dashboard' },
    /* Steps */
    'step.1': { es: 'Paso 1/6 — Dashboard', en: 'Step 1/6 — Dashboard' },
    'step.2': { es: 'Paso 2/6 — Detalle', en: 'Step 2/6 — Grant Detail' },
    'step.3': { es: 'Paso 3/6 — Score', en: 'Step 3/6 — Score Report' },
    'step.4': { es: 'Paso 4/6 — Decisión', en: 'Step 4/6 — Decision' },
    'step.5': { es: 'Paso 5/6 — Generando', en: 'Step 5/6 — Generating' },
    'step.6': { es: 'Paso 6/6 — Propuesta', en: 'Step 6/6 — Output' },
    /* Grant detail page */
    'grant.verified': { es: 'Inteligencia de Grant · Datos Verificados', en: 'Grant Intelligence · Verified Data' },
    'grant.cats': { es: 'Categorías de Participación', en: 'Participation Categories' },
    'grant.themes': { es: 'Líneas Temáticas', en: 'Thematic Lines' },
    'grant.contact': { es: 'Contacto & Plataforma', en: 'Contact & Platform' },
    'grant.excerpts': { es: 'Extractos Clave — Verificados Feb 28, 2026', en: 'Key Excerpts — Verified Feb 28, 2026' },
    'grant.align': { es: 'Alineación Rápida — Accountability Lab Mexico', en: 'Quick Alignment — Accountability Lab Mexico' },
    'grant.days': { es: 'días', en: 'days' },
    /* Score page */
    'score.ctx': { es: 'Análisis IA · Feb 28, 2026', en: 'AI Analysis · Feb 28, 2026' },
    'score.title': { es: 'Reporte de Pre-Calificación', en: 'Pre-Qualification Report' },
    'score.affinity': { es: 'Score de Afinidad', en: 'Affinity Score' },
    'score.breakdown': { es: 'Desglose de Score (100 pts)', en: 'Score Breakdown (100 pts)' },
    'score.strengths': { es: 'Puntos Fuertes', en: 'Points of Strength' },
    'score.watch': { es: 'Puntos de Atención', en: 'Watch Points' },
    'score.strategy': { es: 'Estrategia de Encuadre', en: 'Framing Strategy' },
    'score.portfolio': { es: 'Conexiones de Portafolio', en: 'Portfolio Connections' },
    /* Decision page */
    'dec.ctx': { es: 'Revisión Humana', en: 'Human Review' },
    'dec.title': { es: 'Tomar una Decisión', en: 'Make a Decision' },
    'dec.sub': {
      es: 'Revisa el score, ajusta si es necesario y confirma Go / Pendiente / No Go',
      en: 'Review the AI score, adjust if needed, then commit to Go / Pending / No-Go'
    },
    'dec.go': { es: 'Go', en: 'Go' },
    'dec.go.body': { es: 'Proceder a generar la propuesta', en: 'Proceed to proposal generation' },
    'dec.pending': { es: 'Pendiente', en: 'Pending' },
    'dec.pending.b': { es: 'Guardar para revisión', en: 'Save for later review' },
    'dec.nogo': { es: 'No Go', en: 'No Go' },
    'dec.nogo.b': { es: 'Archivar este grant', en: 'Archive this grant' },
    /* Generating page */

    /* ── Dashboard ── */
    'dash.ctx': { es: 'Inteligencia de Funders · Feb 2026', en: 'Funder Intelligence · Feb 2026' },
    'dash.title': { es: 'Grant Dashboard', en: 'Grant Dashboard' },
    'dash.sub': { es: '18 funders mapeados · Estatus en tiempo real · Scores de alineación IA en el pipeline de AL Mexico', en: '18 funders mapped · Real-time status · AI-powered alignment scores across the AL Mexico pipeline' },
    /* ── Filters ── */
    'fil.all': { es: 'Todos', en: 'All' },
    'fil.open': { es: '⚡ Abierto', en: '⚡ Open' },
    'fil.closed': { es: '✕ Cerrado', en: '✕ Closed' },
    'fil.invite': { es: '🔒 Por Invitación', en: '🔒 By Invitation' },
    'fil.watch': { es: '👁 Monitoreo', en: '👁 Monitoring' },
    'fil.alignment': { es: 'Alineación:', en: 'Alignment:' },
    'fil.region': { es: 'Región:', en: 'Region:' },
    'fil.sort': { es: 'Orden:', en: 'Sort:' },
    'fil.high': { es: '🟢 Alta', en: '🟢 High' },
    'fil.medium': { es: '🟡 Media', en: '🟡 Medium' },
    'fil.low': { es: '🔴 Baja', en: '🔴 Low' },
    'fil.allregions': { es: 'Todas las regiones', en: 'All regions' },
    'fil.sortScore': { es: 'Score ↓', en: 'Score ↓' },
    'fil.sortDeadline': { es: 'Fecha ↑', en: 'Deadline ↑' },
    'fil.sortName': { es: 'Nombre A–Z', en: 'Name A–Z' },
    'fil.reset': { es: '✕ Reset', en: '✕ Reset' },
    /* ── Table headers ── */
    'th.funder': { es: 'Funder / Programa', en: 'Funder / Programme' },
    'th.region': { es: 'Región', en: 'Region' },
    'th.cycle': { es: 'Ciclo / Cierre', en: 'Cycle & Deadline' },
    'th.amount': { es: 'Monto', en: 'Grant Range' },
    'th.score': { es: 'Score', en: 'Score' },
    'th.scoreTooltip': { es: 'Score de afinidad IA (0–100) basado en alineación de misión, geografía, tipo de org, viabilidad financiera, plazo, capacidad, valores compartidos y factores de riesgo.', en: 'AI-calculated affinity score (0–100) based on mission alignment, geography, org type, financial viability, timeline, capacity, shared values, and risk factors.' },
    'th.status': { es: 'Estado', en: 'Status' },

    /* ── Decision page ── */
    'dec.ctx': { es: 'Revisión Humana', en: 'Human Review' },
    'dec.title': { es: 'Tomar una Decisión', en: 'Make a Decision' },
    'dec.sub': { es: 'Revisa el score IA, ajústalo si es necesario, añade contexto y confirma Go / Pendiente / No Go', en: 'Review the AI score, adjust if needed, add context, then commit to Go / Pending / No-Go' },
    'dec.aiscoreLabel': { es: 'Score IA', en: 'AI Score' },
    'dec.alignment': { es: '🟢 Alta alineación', en: '🟢 High alignment' },
    'dec.adjustLabel': { es: 'Ajustar Score (opcional)', en: 'Adjust Score (optional)' },
    'dec.s0': { es: '0 — Sin encaje', en: '0 — No fit' },
    'dec.s50': { es: '50 — Neutral', en: '50 — Neutral' },
    'dec.s100': { es: '100 — Perfecto', en: '100 — Perfect' },
    'dec.adjusted': { es: '⚠️ Score ajustado desde la línea base IA (74)', en: '⚠️ Score adjusted from AI baseline (74)' },
    'dec.remindersLabel': { es: 'Recordatorios Clave', en: 'Key Reminders' },
    'dec.r1': { es: 'Donataria Autorizada vigente ✅', en: 'Valid Donataria Autorizada ✅' },
    'dec.r2': { es: 'Documentar trabajo formal con jóvenes 12–29 (Cat. 2)', en: 'Document formal work with youth 12–29 (Cat. 2)' },
    'dec.r3': { es: 'Cierre: 27 marzo 2026 - 27 dias', en: 'Deadline: 27 March 2026 - 27 days' },
    'dec.notesLabel': { es: 'Notas para la Propuesta', en: 'Notes for Proposal' },
    'dec.note1': { es: '➕ Integrity Icon como evidencia principal de ciudadanía juvenil', en: '➕ Integrity Icon as primary evidence of youth citizenship' },
    'dec.note2': { es: '➕ Civic Action Teams → grupos de jóvenes (Cat. 2 req.)', en: '➕ Civic Action Teams → youth groups (Cat. 2 req.)' },
    'dec.note3': { es: '➕ Framing: "laboratorios de ciudadanía juvenil"', en: '➕ Framing: "youth civic laboratories"' },
    'dec.note4': { es: '➕ Solicitar bases PDF para confirmar presupuesto elegible', en: '➕ Request PDF bases to confirm eligible budget' },
    'dec.notesPlaceholder': { es: 'Escribe contexto adicional, estrategia de framing, o instrucciones al generador de propuesta…', en: 'Write additional context, framing strategy, or instructions to the proposal generator…' },
    'dec.yourDecision': { es: 'Tu Decisión', en: 'Your Decision' },
    'dec.go': { es: 'Go', en: 'Go' },
    'dec.goDesc': { es: 'Proceder a la generación de propuesta — IA redactará la solicitud', en: 'Proceed to proposal generation — AI will draft the application' },
    'dec.pending': { es: 'Pendiente', en: 'Pending' },
    'dec.pendingDesc': { es: 'Guardar para revisión posterior — añadir a cola de monitoreo', en: 'Save for later review — add to monitoring queue' },
    'dec.nogo': { es: 'No Go', en: 'No Go' },
    'dec.nogoDesc': { es: 'Archivar este grant — marcar para el siguiente ciclo', en: 'Archive this grant — flag for next cycle' },
    /* ── Generating page ── */
    'gen.sub': { es: 'Grant Scanner está leyendo la convocatoria, sintetizando el portfolio de AL Mexico y redactando una solicitud a medida.', en: "Grant Scanner is reading the call, synthesizing AL Mexico's portfolio, and writing a tailored application." },
    'gen.init': { es: 'Inicializando pipeline…', en: 'Initializing pipeline…' },
    'gen.step1': { es: 'Obteniendo datos de la convocatoria · fundacionmerced.org.mx/ideas2026', en: 'Fetching live call data · fundacionmerced.org.mx/ideas2026' },
    'gen.step2': { es: 'Cargando perfil organizacional y portfolio de AL Mexico', en: 'Loading AL Mexico organizational profile & portfolio' },
    'gen.step3': { es: 'Verificando criterios de elegibilidad · Categoría 2', en: 'Cross-referencing eligibility criteria · Category 2 match' },
    'gen.step4': { es: 'Redactando Sección 1 — Contexto Organizacional y Misión', en: 'Drafting Section 1 — Organizational Context & Mission' },
    'gen.step5': { es: 'Redactando Sección 2 — Descripción del Proyecto y Objetivos', en: 'Drafting Section 2 — Project Description & Objectives' },
    'gen.step6': { es: 'Redactando Sección 3 — Teoría de Cambio y Lógica de Impacto', en: 'Drafting Section 3 — Theory of Change & Impact Logic' },
    'gen.step7': { es: 'Redactando Sección 4 — Marco Presupuestal (sin salarios)', en: 'Drafting Section 4 — Budget Framework (no salaries)' },
    'gen.step8': { es: 'Revisión final · Verificación de cumplimiento · Formato de salida', en: 'Final review · Compliance check · Formatting output' },
    /* ── Score page ── */
    'score.badge': { es: '⚡ Go Recomendado', en: '⚡ Go Recommended' },
    'score.align': { es: 'Alineación', en: 'Alignment' },
    'score.region': { es: 'Región', en: 'Region' },
    'score.amount': { es: 'Monto est.', en: 'Est. Amount' },
    'score.deadline': { es: 'Cierre', en: 'Deadline' },
    /* ── Breadcrumbs ── */
    'bc.dashboard': { es: 'Dashboard', en: 'Dashboard' },
    'bc.score': { es: 'Score', en: 'Score' },
    'bc.decision': { es: 'Decisión', en: 'Decision' },
    /* ── Nav extras ── */
    'nav.dash': { es: '🏠 Dashboard', en: '🏠 Dashboard' },
    'nav.badge': { es: 'Mapeo 2026', en: 'Mapping 2026' },
    'gen.title': { es: 'Redactando Propuesta…', en: 'Drafting Proposal…' },
    'gen.sub': {
      es: 'Grant Scanner está leyendo la convocatoria y redactando la propuesta.',
      en: 'Grant Scanner is reading the call and writing a tailored application.'
    },
    'gen.init': { es: 'Iniciando pipeline…', en: 'Initializing pipeline…' },
    'gen.done': { es: 'Propuesta lista — lista para revisar', en: 'Proposal complete — ready to review' },
    /* Output page */
    'out.ctx': { es: 'Borrador Generado', en: 'Generated Application Draft' },
    'out.title': { es: 'Propuesta · IDEAS 2026', en: 'Proposal · IDEAS 2026' },
    'out.info': { es: 'Info del Documento', en: 'Document Info' },
    'out.actions': { es: 'Acciones', en: 'Actions' },
    'out.amp': { es: 'Impacto Potencial', en: 'Amplification Impact' },
    'out.copy': { es: 'Copiar Markdown', en: 'Copy Markdown' },
    'out.download': { es: 'Descargar .md', en: 'Download .md' },
  };

  /* ══════════════════════════════════════════
     LANGUAGE SYSTEM
     ══════════════════════════════════════════ */
  let currentLang = 'es';

  window.switchLang = function () {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyLang(currentLang);
  };

  function applyLang(l) {
    // Expose for other scripts (score.html etc.)
    window.currentLang = l;
    // Text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (T[key] && T[key][l] !== undefined) el.textContent = T[key][l];
    });
    // HTML nodes (allow inner tags like <strong>)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (T[key] && T[key][l] !== undefined) el.innerHTML = T[key][l];
    });
    // Update lang toggle label
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = l === 'es' ? 'EN' : 'ES';
    const mbl = document.getElementById('mobileLangLabel');
    if (mbl) mbl.textContent = l === 'es' ? '🌐 Switch to English' : '🌐 Cambiar a Español';
    // Update html lang attr
    document.documentElement.lang = l === 'es' ? 'es' : 'en';
    // Hook: allow score page to re-render language-sensitive content
    if (typeof window._scoreRerender === 'function') window._scoreRerender();
    if (typeof window._decisionRerender === 'function') window._decisionRerender();
    if (typeof window._outputRerender === 'function') window._outputRerender();
  }

  // Wire up lang toggle button via event delegation
  document.addEventListener('click', e => {
    if (e.target.id === 'langToggle') window.switchLang();
  });

  /* ══════════════════════════════════════════
     THEME  (always starts light per session)
     ══════════════════════════════════════════ */
  function initTheme() { applyTheme('light'); }

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    const btn = document.getElementById('themeToggle');
    const lbl = document.getElementById('mobileThemeLabel');
    if (btn) btn.textContent = t === 'dark' ? '🌙' : '☀️';
    if (lbl) lbl.textContent = t === 'dark' ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode';
  }

  window.toggleTheme = function () {
    const cur = document.documentElement.getAttribute('data-theme');
    applyTheme(cur === 'dark' ? 'light' : 'dark');
  };

  document.addEventListener('click', e => {
    if (e.target.id === 'themeToggle') window.toggleTheme();
  });

  /* ══════════════════════════════════════════
     BURGER / MOBILE DRAWER
     ══════════════════════════════════════════ */
  function initBurger() {
    const burger = document.getElementById('burgerBtn');
    const drawer = document.getElementById('mobileDrawer');
    if (!burger || !drawer) return;

    burger.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
      const bars = burger.querySelectorAll('span');
      if (open) {
        bars[0].style.transform = 'translateY(7px) rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        bars.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });

    document.addEventListener('click', e => {
      if (!burger.contains(e.target) && !drawer.contains(e.target)) {
        drawer.classList.remove('open');
        burger.setAttribute('aria-expanded', false);
        burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
  }

  /* ══════════════════════════════════════════
     COUNTDOWN
     ══════════════════════════════════════════ */
  function initCountdown() {
    const el = document.getElementById('daysLeft');
    if (!el) return;
    const deadline = new Date('2026-03-27T23:30:00-06:00');
    const diff = Math.max(0, Math.ceil((deadline - new Date()) / 86400000));
    el.textContent = diff;
  }

  /* ══════════════════════════════════════════
     INIT
     ══════════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initBurger();
    initCountdown();
    applyLang(currentLang); // apply default language
  });

}());
