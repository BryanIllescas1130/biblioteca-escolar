/* ══════════════════════════════════════════
   BIBLIOTECA ESCOLAR — app.js
   Lee libros.js y construye el catálogo.
   Sin frameworks. Sin dependencias.
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
  };

  const ESTADOS = {
    A: { label: 'Excelente',   color: '#2d6a2d', bg: '#eaf4ea' },
    B: { label: 'Bueno',       color: '#2e75b6', bg: '#e4eff9' },
    D: { label: 'Deteriorado', color: '#b06800', bg: '#fef3e2' },
    C: { label: 'Crítico',     color: '#8b1a1a', bg: '#fceaea' },
  };

  let currentFilter = 'all';
  let currentQuery  = '';

  function esc(str) {
    return String(str || '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function buildTags(libro) {
    return [libro.codigo, libro.titulo, libro.autor, libro.categoria,
      (CATEGORIAS[libro.categoria] || {}).nombre || ''].join(' ').toLowerCase();
  }

  function cardHTML(libro) {
    const cat    = libro.categoria;
    const estado = ESTADOS[libro.estado] || ESTADOS.A;
    const copias = libro.copias > 1 ? ' · ' + libro.copias + ' copias' : '';
    const paginas = libro.paginas > 0 ? libro.paginas + ' págs.' : '';
    const infoParts = [libro.editorial, libro.year,
      libro.isbn ? 'ISBN ' + libro.isbn : ''].filter(Boolean);
    const info = infoParts.join(' · ');
    const catEmoji = (CATEGORIAS[cat] || {}).emoji || '📚';
    const catNombre = (CATEGORIAS[cat] || {}).nombre || cat;

    return '<article class="card" data-cat="' + esc(cat) + '" data-tags="' + esc(buildTags(libro)) + '">' +
      '<div class="card-img">' +
        '<img src="images/portadas/' + esc(libro.codigo) + '.jpg" alt="' + esc(libro.titulo) + '" loading="lazy"' +
          ' onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
        '<div class="img-ph" style="display:none"><span>' + catEmoji + '</span><p>' + esc(libro.codigo) + '</p></div>' +
      '</div>' +
      '<div class="card-accent cat-' + esc(cat) + '"></div>' +
      '<div class="card-body">' +
        '<div class="card-meta-top">' +
          '<span class="code-pill">' + esc(libro.codigo) + '</span>' +
          '<span class="state-badge" style="color:' + estado.color + ';background:' + estado.bg + '">' +
            '● ' + esc(libro.estado) + ' · ' + esc(estado.label) +
          '</span>' +
          (!libro.disponible ? '<span class="no-disponible">No disponible</span>' : '') +
        '</div>' +
        '<h2 class="card-title">' + esc(libro.titulo) + '</h2>' +
        '<p class="card-author">' + esc(libro.autor) + esc(copias) + '</p>' +
        (info ? '<p class="card-info">' + esc(info) + '</p>' : '') +
        '<p class="card-desc">' + esc(libro.descripcion) + '</p>' +
        (libro.nota ? '<p class="card-nota">' + esc(libro.nota) + '</p>' : '') +
      '</div>' +
      '<div class="card-footer">' +
        '<span class="cat-tag cat-' + esc(cat) + '">' + esc(catNombre) + '</span>' +
        (paginas ? '<span class="pages-badge">' + esc(paginas) + '</span>' : '') +
      '</div>' +
    '</article>';
  }

  function buildFilters() {
    var counts = { all: LIBROS.length };
    LIBROS.forEach(function(l) { counts[l.categoria] = (counts[l.categoria] || 0) + 1; });

    var filtersEl = document.getElementById('filters');
    if (!filtersEl) return;

    var cats = Object.keys(CATEGORIAS).filter(function(c) { return counts[c] > 0; });
    var html = '<button class="filter-btn active" data-cat="all">Todos <span class="filter-count">' + counts.all + '</span></button>';
    cats.forEach(function(cat) {
      var c = CATEGORIAS[cat];
      html += '<button class="filter-btn" data-cat="' + cat + '">' + c.emoji + ' ' + c.nombre +
        ' <span class="filter-count">' + counts[cat] + '</span></button>';
    });
    filtersEl.innerHTML = html;

    filtersEl.querySelectorAll('.filter-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        currentFilter = this.dataset.cat;
        filtersEl.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');
        applyFilters();
      });
    });
  }

  function updateStats() {
    var totalEl = document.getElementById('stat-total');
    var catEl   = document.getElementById('stat-cats');
    if (totalEl) totalEl.textContent = LIBROS.length;
    if (catEl) {
      var activeCats = new Set(LIBROS.map(function(l) { return l.categoria; }));
      catEl.textContent = activeCats.size;
    }
  }

  function renderGrid() {
    var grid = document.getElementById('grid');
    if (!grid) return;
    var sorted = LIBROS.slice().sort(function(a, b) {
      if (a.categoria < b.categoria) return -1;
      if (a.categoria > b.categoria) return 1;
      return a.codigo.localeCompare(b.codigo);
    });
    grid.innerHTML = sorted.map(cardHTML).join('') +
      '<div class="no-results hidden" id="no-results"><p>📭</p><h3>Sin resultados</h3><p>Intenta con otro término o categoría.</p></div>';
  }

  function applyFilters() {
    var cards    = Array.from(document.querySelectorAll('.card'));
    var noResult = document.getElementById('no-results');
    var visible  = 0;
    var needle   = currentQuery.toLowerCase();

    cards.forEach(function(card) {
      var matchesCat = currentFilter === 'all' || card.dataset.cat === currentFilter;
      var matchesQ   = !needle || (card.dataset.tags || '').includes(needle);
      if (matchesCat && matchesQ) { card.classList.remove('hidden'); visible++; }
      else { card.classList.add('hidden'); }
    });

    var countEl = document.getElementById('count');
    if (countEl) countEl.textContent = visible + (visible === 1 ? ' libro' : ' libros');
    if (noResult) noResult.classList.toggle('hidden', visible > 0);
  }

  function initSearch() {
    var input = document.getElementById('search');
    if (!input) return;
    input.addEventListener('input', function() { currentQuery = this.value.trim(); applyFilters(); });
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') { this.value = ''; currentQuery = ''; applyFilters(); }
    });
  }

  function initSticky() {
    var controls = document.getElementById('controls');
    if (!controls) return;
    window.addEventListener('scroll', function() {
      controls.style.boxShadow = window.scrollY > 10
        ? '0 3px 12px rgba(26,18,9,.12)' : '0 2px 8px rgba(26,18,9,.06)';
    }, { passive: true });
  }

  function init() {
    if (typeof LIBROS === 'undefined' || !Array.isArray(LIBROS)) {
      document.getElementById('grid').innerHTML =
        '<p style="padding:40px;color:red">Error: libros.js no está cargado.</p>';
      return;
    }
    updateStats();
    renderGrid();
    buildFilters();
    initSearch();
    initSticky();
    applyFilters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
