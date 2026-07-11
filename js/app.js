/* ══════════════════════════════════════════
   BIBLIOTECA ESCOLAR — app.js
   Vistas: grid / compact / list
   ══════════════════════════════════════════ */
(function () {
  'use strict';

  const CATEGORIAS = {
    AUT: { nombre: 'Autoayuda',  emoji: '🧠' },
    CIE: { nombre: 'Ciencia',    emoji: '🔬' },
    CLA: { nombre: 'Clásicos',   emoji: '📜' },
    JUV: { nombre: 'Juvenil',    emoji: '⭐' },
    MIS: { nombre: 'Misterio',   emoji: '🔍' },
    NAR: { nombre: 'Narrativa',  emoji: '📖' },
    VAR: { nombre: 'Varios',     emoji: '📌' },
    INF: { nombre: 'Infantil',   emoji: '🧸' },
    CIV: { nombre: 'Cívica',     emoji: '🏛️' },
  };

  const ESTADOS = {
    A: { label: 'Excelente',   color: '#2d6a2d', bg: '#eaf4ea' },
    B: { label: 'Bueno',       color: '#2e75b6', bg: '#e4eff9' },
    D: { label: 'Deteriorado', color: '#b06800', bg: '#fef3e2' },
    C: { label: 'Crítico',     color: '#8b1a1a', bg: '#fceaea' },
  };

  // ── STATE ──
  let currentFilter = 'all';
  let currentQuery  = '';
  let currentView   = localStorage.getItem('bib-view') || 'grid';

  // ── HELPERS ──
  function esc(s) {
    return String(s || '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function buildTags(l) {
    return [l.codigo, l.titulo, l.autor, l.categoria,
      (CATEGORIAS[l.categoria] || {}).nombre || ''].join(' ').toLowerCase();
  }

  // ── CARD HTML ──
  function cardHTML(l) {
    const cat      = l.categoria;
    const estado   = ESTADOS[l.estado] || ESTADOS.A;
    const copias   = l.copias > 1 ? ' · ' + l.copias + ' copias' : '';
    const paginas  = l.paginas > 0 ? l.paginas + ' págs.' : '';
    const info     = [l.editorial, l.year, l.isbn ? 'ISBN ' + l.isbn : ''].filter(Boolean).join(' · ');
    const catEmoji = (CATEGORIAS[cat] || {}).emoji || '📚';
    const catNom   = (CATEGORIAS[cat] || {}).nombre || cat;
    const onerr    = "this.style.display='none';this.nextElementSibling.style.display='flex'";

    return '<article class="card" data-cat="' + esc(cat) + '" data-tags="' + esc(buildTags(l)) + '">' +
      '<div class="card-img">' +
        '<img src="images/portadas/' + esc(l.codigo) + '.jpg" alt="' + esc(l.titulo) + '" loading="lazy" onerror="' + onerr + '">' +
        '<div class="img-ph" style="display:none"><span>' + catEmoji + '</span><p>' + esc(l.codigo) + '</p></div>' +
      '</div>' +
      '<div class="card-accent cat-' + esc(cat) + '"></div>' +
      '<div class="card-body">' +
        '<div class="card-meta-top">' +
          '<span class="code-pill">' + esc(l.codigo) + '</span>' +
          '<span class="state-badge state-' + esc(l.estado) + '">' + esc(l.estado) + ' · ' + esc(estado.label) + '</span>' +
          (!l.disponible ? '<span class="no-disponible">No disponible</span>' : '') +
        '</div>' +
        '<h2 class="card-title">' + esc(l.titulo) + '</h2>' +
        '<p class="card-author">' + esc(l.autor) + esc(copias) + '</p>' +
        (info ? '<p class="card-info">' + esc(info) + '</p>' : '') +
        '<p class="card-desc">' + esc(l.descripcion) + '</p>' +
        (l.nota ? '<p class="card-nota">' + esc(l.nota) + '</p>' : '') +
      '</div>' +
      '<div class="card-footer">' +
        '<span class="cat-tag cat-' + esc(cat) + '">' + esc(catNom) + '</span>' +
        (paginas ? '<span class="pages-badge">' + esc(paginas) + '</span>' : '') +
      '</div>' +
    '</article>';
  }

  // ── VIEW SWITCHER ──
  window.setView = function (view) {
    currentView = view;
    localStorage.setItem('bib-view', view);

    var grid = document.getElementById('grid');
    grid.className = 'grid view-' + view;

    ['grid', 'compact', 'list'].forEach(function (v) {
      var btn = document.getElementById('btn-' + v);
      if (btn) btn.classList.toggle('active', v === view);
    });
  };

  // ── FILTERS ──
  function buildFilters() {
    var counts = { all: LIBROS.length };
    LIBROS.forEach(function (l) { counts[l.categoria] = (counts[l.categoria] || 0) + 1; });

    var el = document.getElementById('filters');
    if (!el) return;

    var cats = Object.keys(CATEGORIAS).filter(function (c) { return counts[c] > 0; });
    var html = '<button class="filter-btn active" data-cat="all">Todos <span class="filter-count">' + counts.all + '</span></button>';
    cats.forEach(function (cat) {
      var c = CATEGORIAS[cat];
      html += '<button class="filter-btn" data-cat="' + cat + '">' +
        c.emoji + ' ' + c.nombre + ' <span class="filter-count">' + (counts[cat] || 0) + '</span></button>';
    });
    el.innerHTML = html;

    el.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        currentFilter = this.dataset.cat;
        el.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');
        applyFilters();
      });
    });
  }

  // ── STATS ──
  function updateStats() {
    var t = document.getElementById('stat-total');
    var c = document.getElementById('stat-cats');
    if (t) t.textContent = LIBROS.length;
    if (c) { var s = new Set(LIBROS.map(function (l) { return l.categoria; })); c.textContent = s.size; }
  }

  // ── RENDER ──
  function renderGrid() {
    var grid = document.getElementById('grid');
    if (!grid) return;

    var sorted = LIBROS.slice().sort(function (a, b) {
      if (a.categoria < b.categoria) return -1;
      if (a.categoria > b.categoria) return 1;
      return a.codigo.localeCompare(b.codigo);
    });

    grid.innerHTML = sorted.map(cardHTML).join('') +
      '<div class="no-results hidden" id="no-results"><p>📭</p><h3>Sin resultados</h3><p>Intenta con otro término o categoría.</p></div>';
  }

  // ── FILTER ──
  function applyFilters() {
    var cards    = Array.from(document.querySelectorAll('.card'));
    var noResult = document.getElementById('no-results');
    var visible  = 0;
    var needle   = currentQuery.toLowerCase();

    cards.forEach(function (card) {
      var mc = currentFilter === 'all' || card.dataset.cat === currentFilter;
      var mq = !needle || (card.dataset.tags || '').includes(needle);
      if (mc && mq) { card.classList.remove('hidden'); visible++; }
      else { card.classList.add('hidden'); }
    });

    var countEl = document.getElementById('count');
    if (countEl) countEl.textContent = visible + (visible === 1 ? ' libro' : ' libros');
    if (noResult) noResult.classList.toggle('hidden', visible > 0);
  }

  // ── SEARCH ──
  function initSearch() {
    var input = document.getElementById('search');
    if (!input) return;
    input.addEventListener('input', function () { currentQuery = this.value.trim(); applyFilters(); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { this.value = ''; currentQuery = ''; applyFilters(); }
    });
  }

  // ── STICKY ──
  function initSticky() {
    var c = document.getElementById('controls');
    if (!c) return;
    window.addEventListener('scroll', function () {
      c.style.boxShadow = window.scrollY > 10 ? '0 3px 12px rgba(26,18,9,.12)' : '0 2px 8px rgba(26,18,9,.06)';
    }, { passive: true });
  }

  // ── DETECT MOBILE → default list on small screens ──
  function detectDefaultView() {
    var saved = localStorage.getItem('bib-view');
    if (!saved) {
      currentView = window.innerWidth <= 480 ? 'list' : 'grid';
    }
  }

  // ── INIT ──
  function init() {
    if (typeof LIBROS === 'undefined' || !Array.isArray(LIBROS)) {
      var g = document.getElementById('grid');
      if (g) g.innerHTML = '<p style="padding:40px;color:red">Error: libros.js no está cargado.</p>';
      return;
    }
    detectDefaultView();
    updateStats();
    renderGrid();
    buildFilters();
    initSearch();
    initSticky();
    setView(currentView);
    applyFilters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
