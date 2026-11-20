/* LawSticker AI star ratings for study pages.
   - Adds a "How useful was this page?" card just above the footer.
   - Shows the page's average once 3+ people have rated it.
   - Adds a small ★ badge next to links to other rated pages (index pages).
   Ratings are read from /data/ratings.json (aggregates only) and sent to
   /api/rate. Each device rates a page once; tapping again changes it. */
(function () {
  var API = 'https://lawsticker-backend-494996217030.europe-west1.run.app/api/rate';
  var MIN_SHOW = 3;
  var norm = function (p) { return (p || '/').toLowerCase().split('?')[0].split('#')[0].replace(/index\.html$/, ''); };
  var here = norm(location.pathname);
  var KEY = 'ls_rate:' + here;
  var mine = 0;
  try { mine = parseInt(localStorage.getItem(KEY) || '0', 10) || 0; } catch (e) {}

  var css =
    '.lsr{--lsr-ink:#17183F;--lsr-mut:#5C6088;--lsr-line:#DCE0EE;--lsr-bg:#fff;--lsr-off:#C9CEE3;--lsr-on:#F2A200;' +
    'max-width:720px;margin:28px auto 8px;padding:14px 16px;border:1.5px solid var(--lsr-line);border-radius:16px;background:var(--lsr-bg);color:var(--lsr-ink);' +
    'display:flex;flex-wrap:wrap;align-items:center;gap:6px 14px;font:inherit;box-sizing:border-box}' +
    '@media (prefers-color-scheme:dark){html:not([data-theme=light]) .lsr{--lsr-ink:#EEF0FF;--lsr-mut:#A9AED6;--lsr-line:#2E3263;--lsr-bg:#171939;--lsr-off:#4A4F86}}' +
    '[data-theme=dark] .lsr{--lsr-ink:#EEF0FF;--lsr-mut:#A9AED6;--lsr-line:#2E3263;--lsr-bg:#171939;--lsr-off:#4A4F86}' +
    '.lsr .q{font-weight:800;font-size:16.5px;line-height:1.2}' +
    '.lsr .st{display:flex;gap:2px}' +
    '.lsr .st button{border:0;background:none;padding:3px;cursor:pointer;color:var(--lsr-off);line-height:0;border-radius:8px}' +
    '.lsr .st button svg{width:30px;height:30px;display:block;fill:currentColor}' +
    '.lsr .st button.on{color:var(--lsr-on)}' +
    '.lsr .st button:focus-visible{outline:3px solid #2A2C94;outline-offset:1px}' +
    '@media (hover:hover){.lsr .st:hover button{color:var(--lsr-on)}.lsr .st button:hover~button{color:var(--lsr-off)}}' +
    '.lsr .sum{font-size:14.5px;color:var(--lsr-mut);flex-basis:100%}' +
    '.lsr .sum b{color:var(--lsr-ink)}' +
    '.lsr .sum a{color:inherit;font-weight:700}' +
    '.lsr-b{display:inline-block;flex:none;align-self:center;font-size:.78em;font-weight:700;color:#9A5B00;background:#FFF3D6;border-radius:6px;padding:0 5px;margin-left:6px;vertical-align:middle;white-space:nowrap;line-height:1.5}' +
    '@media (prefers-color-scheme:dark){html:not([data-theme=light]) .lsr-b{color:#FFC94D;background:#3A2E10}}';

  var STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6l2.9 6 6.5.8-4.8 4.5 1.2 6.5L12 17.3l-5.8 3.1 1.2-6.5L2.6 9.4l6.5-.8z"/></svg>';
  var DATA = null, card, sumEl, btns = [];

  function avgOf(e) { return e && e.n ? e.s / e.n : 0; }
  function fmt(a) { return (Math.round(a * 10) / 10).toFixed(1); }

  function paint(n) {
    btns.forEach(function (b, i) { b.classList.toggle('on', i < n); b.setAttribute('aria-checked', i + 1 === n ? 'true' : 'false'); });
  }
  function summary() {
    if (!sumEl) return;
    var e = DATA && DATA.pages && DATA.pages[here];
    var txt = '';
    if (e && e.n >= MIN_SHOW) txt = '<b>★ ' + fmt(avgOf(e)) + '</b> from ' + e.n + ' ratings';
    else txt = 'Your rating helps other students find the best material.';
    if (mine) {
      txt = 'Thanks, you rated this ' + mine + '★' + (e && e.n >= MIN_SHOW ? ' · ' + txt : '') + '. Tap a star to change it.';
      if (mine <= 3 && document.querySelector('[data-feedback]')) txt += ' <a href="#" data-lsr-fb>Tell us what to improve</a>';
    }
    sumEl.innerHTML = txt;
    var fb = sumEl.querySelector('[data-lsr-fb]');
    if (fb) fb.addEventListener('click', function (ev) { ev.preventDefault(); var t = document.querySelector('[data-feedback]'); if (t) t.click(); });
  }

  function send(r) {
    var old = mine;
    if (r === old) return;
    mine = r; paint(r);
    try { localStorage.setItem(KEY, String(r)); } catch (e) {}
    // Update the shown average straight away; the file catches up within minutes.
    if (DATA) {
      DATA.pages = DATA.pages || {};
      var e = DATA.pages[here] || (DATA.pages[here] = { n: 0, s: 0, c: [0, 0, 0, 0, 0] });
      if (old) { e.s -= old; } else { e.n += 1; }
      e.s += r;
    }
    summary();
    try { if (window.gtag) gtag('event', 'rate_page', { rating: r, page_path: here }); } catch (e) {}
    fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ p: here, r: r, o: old, t: document.title.replace(/\s*[|·–-]\s*LawSticker AI\s*$/, '').slice(0, 90) }) })
      .then(function (res) { if (!res.ok) throw 0; })
      .catch(function () { sumEl.innerHTML = 'Could not save your rating. Please check your connection and tap a star again.'; mine = old; paint(old); try { old ? localStorage.setItem(KEY, String(old)) : localStorage.removeItem(KEY); } catch (e) {} });
  }

  function build() {
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    card = document.createElement('section');
    card.className = 'lsr'; card.setAttribute('aria-label', 'Rate this page');
    card.innerHTML = '<span class="q" id="lsr-q">How useful was this page?</span><span class="st" role="radiogroup" aria-labelledby="lsr-q"></span><span class="sum" aria-live="polite"></span>';
    var wrap = card.querySelector('.st'); sumEl = card.querySelector('.sum');
    for (var i = 1; i <= 5; i++) {
      var b = document.createElement('button');
      b.type = 'button'; b.innerHTML = STAR; b.setAttribute('role', 'radio');
      b.setAttribute('aria-label', i + (i === 1 ? ' star' : ' stars'));
      (function (n) { b.addEventListener('click', function () { send(n); }); })(i);
      wrap.appendChild(b); btns.push(b);
    }
    var foot = document.querySelector('footer');
    if (foot && foot.parentNode) foot.parentNode.insertBefore(card, foot);
    else (document.querySelector('main') || document.body).appendChild(card);
    paint(mine); summary();
  }

  function badges() {
    if (!DATA || !DATA.pages) return;
    var links = document.querySelectorAll('a[href]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      if (a.querySelector('.lsr-b') || a.closest('.lsr,nav,header,footer')) continue;
      var u; try { u = new URL(a.getAttribute('href'), location.href); } catch (e) { continue; }
      if (u.origin !== location.origin) continue;
      var p = norm(u.pathname);
      if (p === here) continue;
      var e = DATA.pages[p];
      if (!e || e.n < MIN_SHOW) continue;
      var s = document.createElement('span'); s.className = 'lsr-b';
      s.textContent = '★ ' + fmt(avgOf(e)); s.title = e.n + ' ratings';
      a.appendChild(s);
    }
  }

  function start() {
    build();
    var bucket = Math.floor(Date.now() / 600000);
    fetch('/data/ratings.json?v=' + bucket, { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : { pages: {} }; })
      .then(function (d) { DATA = d || { pages: {} }; summary(); badges(); })
      .catch(function () { DATA = { pages: {} }; });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
