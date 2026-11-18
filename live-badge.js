/* LawSticker AI live badge: "🟢 N people on the site right now".
   Fills every element with [data-live-badge]. Numbers come from Google Analytics
   Realtime (people active in the last 5 minutes, whole site) via the backend,
   which refreshes them at most once a minute. Fetched on every page load and
   again each minute while the page is open. Hidden when fewer than 2 people
   are active (one would usually be the reader) or when the numbers can't be
   loaded, so it never shows a stale or made-up figure. */
(function () {
  var API = 'https://lawsticker-backend-494996217030.europe-west1.run.app/api/live-users';
  var MIN = 2;
  var T = {
    en: function (n) { return n + ' people on the site right now'; },
    te: function (n) { return 'ఇప్పుడు సైట్‌లో ' + n + ' మంది ఉన్నారు'; },
    hi: function (n) { return 'अभी साइट पर ' + n + ' लोग हैं'; }
  };
  var last = null;
  var css = '.lsb{display:inline-flex;align-items:center;gap:7px;font:600 13.5px/1.2 "Anek Latin",system-ui,sans-serif;' +
    'color:inherit;background:rgba(11,158,107,.12);border:1px solid rgba(11,158,107,.35);border-radius:999px;padding:4px 11px 4px 9px;white-space:nowrap}' +
    '.lsb[hidden]{display:none}.lsb i{width:8px;height:8px;border-radius:50%;background:#0B9E6B;flex:none}' +
    '@media (prefers-reduced-motion:no-preference){.lsb i{animation:lsbp 2s ease-out infinite}}' +
    '@keyframes lsbp{0%{box-shadow:0 0 0 0 rgba(11,158,107,.55)}100%{box-shadow:0 0 0 7px rgba(11,158,107,0)}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  function lang() { var l = (document.documentElement.lang || 'en').slice(0, 2); return T[l] ? l : 'en'; }
  function paint() {
    var els = document.querySelectorAll('[data-live-badge]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      el.classList.add('lsb');
      if (last == null || last < MIN) { el.hidden = true; continue; }
      el.innerHTML = '<i aria-hidden="true"></i><span></span>';
      el.lastChild.textContent = T[lang()](last);
      el.title = 'People active in the last 5 minutes (Google Analytics Realtime)';
      el.hidden = false;
    }
  }
  function load() {
    if (!window.fetch) return;
    fetch(API, { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (d) {
      last = d && d.ok && typeof d.active_5min === 'number' ? d.active_5min : null; paint();
    }).catch(function () { last = null; paint(); });
  }
  paint(); load();
  setInterval(function () { if (!document.hidden) load(); }, 60000);
  try { new MutationObserver(paint).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] }); } catch (e) {}
})();
