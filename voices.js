/* "What people say": feedback that was approved in Telegram and published to
   /site-feedback-public.json. Renders into [data-voices] (attribute value = how
   many comments to show; "all" shows every one, with filters). Nothing shows
   until at least one approved comment exists; the average rating appears only
   once 3 or more approved ratings exist, so it is never based on one or two. */
(function () {
  var T = {
    en: { title: 'What people say', avg: function (a, n) { return a + ' out of 5 · ' + n + ' ratings'; }, all: 'See all reviews', home: 'Homepage', qr: 'Quick Revision', vn: 'Visual notes', ean: 'Exam Answer Notes', site: 'LawSticker AI', none: 'No reviews in this section yet.',
      f: { all: 'All', study: 'Study material', site: 'Rights and tools' }, more: 'Show more' },
    te: { title: 'ప్రజలు ఏమంటున్నారు', avg: function (a, n) { return '5కి ' + a + ' · ' + n + ' రేటింగ్‌లు'; }, all: 'అన్ని రివ్యూలు చూడండి', home: 'హోమ్ పేజీ', qr: 'క్విక్ రివిజన్', vn: 'విజువల్ నోట్స్', ean: 'ఎగ్జామ్ ఆన్సర్ నోట్స్', site: 'లాస్టిక్కర్ AI', none: 'ఈ విభాగంలో ఇంకా రివ్యూలు లేవు.',
      f: { all: 'అన్నీ', study: 'స్టడీ మెటీరియల్', site: 'హక్కులు, టూల్స్' }, more: 'మరిన్ని చూపించు' },
    hi: { title: 'लोग क्या कहते हैं', avg: function (a, n) { return '5 में से ' + a + ' · ' + n + ' रेटिंग'; }, all: 'सभी रिव्यू देखें', home: 'होमपेज', qr: 'क्विक रिविज़न', vn: 'विज़ुअल नोट्स', ean: 'एग्ज़ाम आंसर नोट्स', site: 'लॉस्टिकर AI', none: 'इस सेक्शन में अभी कोई रिव्यू नहीं।',
      f: { all: 'सभी', study: 'स्टडी मटीरियल', site: 'अधिकार और टूल्स' }, more: 'और दिखाएँ' }
  };
  var css = '.vx{margin:0 0 18px}.vx h2{font-weight:800;font-stretch:85%;font-size:clamp(24px,5.6vw,32px);line-height:1.1;margin:0 0 4px}' +
    '.vx .avg{display:flex;align-items:center;gap:8px;font-size:15px;color:var(--muted,#5A5F86);margin:0 0 12px}.vx .avg b{font-size:20px;color:#E09E00;letter-spacing:1px}' +
    '.vx .grid{display:grid;gap:10px}@media (min-width:760px){.vx .grid{grid-template-columns:repeat(3,1fr)}.vx.full .grid{grid-template-columns:repeat(2,1fr)}}' +
    '.vx .q{background:var(--surface,#fff);border:1.5px solid var(--line,#D5D9EA);border-radius:16px;padding:14px;margin:0;display:flex;flex-direction:column;gap:8px}' +
    '.vx .q .st{color:#E09E00;font-size:16px;letter-spacing:1px}.vx .q blockquote{margin:0;font-size:16px;line-height:1.45;color:var(--ink,#17183F);overflow-wrap:anywhere}' +
    '.vx .q figcaption{font-size:13px;color:var(--muted,#5A5F86);margin-top:auto}' +
    '.vx .lk{display:inline-block;margin-top:10px;font-weight:700;color:var(--indigo,#2A2C94)}' +
    '.vx .chips{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 12px}.vx .chips button{font:inherit;font-size:14px;font-weight:700;border:1.5px solid var(--line,#D5D9EA);background:var(--surface,#fff);color:var(--ink,#17183F);border-radius:999px;padding:6px 12px;cursor:pointer}' +
    '.vx .chips button[aria-pressed=true]{background:var(--indigo,#2A2C94);border-color:var(--indigo,#2A2C94);color:#fff}' +
    '.vx .mt{font:inherit;font-weight:700;margin-top:12px;border:1.5px solid var(--line,#D5D9EA);background:var(--surface,#fff);color:var(--indigo,#2A2C94);border-radius:12px;padding:8px 14px;cursor:pointer}' +
    '.vx .empty{color:var(--muted,#5A5F86)}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var data = null, filt = 'all', shown = 12;
  function L() { var l = (document.documentElement.lang || 'en').slice(0, 2); return T[l] ? T[l] : T.en; }
  function area(p) { p = p || ''; return /quick-revision|visual-notes|exam-answer-notes|eklavya|hub|study|notes/.test(p) ? 'study' : 'site'; }
  function where(p, t) {
    p = p || 'home';
    if (p === 'home' || p === '/' || p === '/index.html') return t.home;
    if (p.indexOf('/quick-revision') === 0) return t.qr;
    if (p.indexOf('/visual-notes') === 0) return t.vn;
    if (p.indexOf('/exam-answer-notes') === 0) return t.ean;
    return t.site;
  }
  function fmtDate(d) { try { return new Date(d + 'T12:00:00+05:30').toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) { return d; } }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function stars(n) { return n ? '★★★★★'.slice(0, n) + '☆☆☆☆☆'.slice(0, 5 - n) : ''; }
  function card(e, t) {
    return '<figure class="q">' + (e.rating ? '<span class="st" aria-label="' + e.rating + ' out of 5">' + stars(e.rating) + '</span>' : '') +
      '<blockquote lang="' + esc(e.lang || 'en') + '">' + esc(e.message) + '</blockquote><figcaption>' + esc(where(e.page, t)) + ' · ' + esc(fmtDate(e.date)) + '</figcaption></figure>';
  }
  function render() {
    if (!data) return;
    var t = L(), els = document.querySelectorAll('[data-voices]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i], mode = el.getAttribute('data-voices'), full = mode === 'all';
      var all = data.filter(function (e) { return full ? (filt === 'all' || area(e.page) === filt) : true; });
      var withMsg = all.filter(function (e) { return e.message; });
      var rated = all.filter(function (e) { return e.rating; });
      if (!full && !withMsg.length) { el.hidden = true; continue; }
      var avg = rated.length >= 3 ? (rated.reduce(function (a, e) { return a + e.rating; }, 0) / rated.length).toFixed(1) : null;
      var list = full ? withMsg.slice(0, shown) : withMsg.slice(0, +mode || 3);
      var h = (full ? '' : '<h2>' + esc(t.title) + '</h2>') + (avg ? '<p class="avg"><b aria-hidden="true">★</b><span>' + esc(t.avg(avg, rated.length)) + '</span></p>' : '<p class="avg"></p>');
      if (full) h += '<div class="chips" role="group">' + ['all', 'study', 'site'].map(function (k) { return '<button type="button" data-vf="' + k + '" aria-pressed="' + (filt === k) + '">' + esc(t.f[k]) + '</button>'; }).join('') + '</div>';
      h += list.length ? '<div class="grid">' + list.map(function (e) { return card(e, t); }).join('') + '</div>' : '<p class="empty">' + esc(t.none) + '</p>';
      if (full && withMsg.length > shown) h += '<button type="button" class="mt" data-vmore>' + esc(t.more) + '</button>';
      if (!full) h += '<a class="lk" href="/reviews.html">' + esc(t.all) + ' →</a>';
      el.className = 'vx' + (full ? ' full' : ''); el.innerHTML = h; el.hidden = false;
    }
  }
  document.addEventListener('click', function (e) {
    var f = e.target.closest('[data-vf]'); if (f) { filt = f.getAttribute('data-vf'); shown = 12; render(); return; }
    if (e.target.closest('[data-vmore]')) { shown += 12; render(); }
  });
  fetch('/site-feedback-public.json', { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
    data = (d && d.entries) || []; render();
  }).catch(function () {});
  try { new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] }); } catch (e) {}
})();
