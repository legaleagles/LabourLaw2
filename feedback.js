/* LawSticker AI feedback sheet for study pages. Any element with [data-feedback]
   opens it. Sends to /api/site-feedback, which delivers to Telegram with the
   page address, so a reported mistake arrives with the exact page it is on. */
(function () {
  var API = 'https://lawsticker-backend-494996217030.europe-west1.run.app/api/site-feedback';
  var CATS = [['wrong_info', '⚠️ Mistake in the notes'], ['request', '🙋 Request a topic'], ['idea', '💡 Idea'], ['bug', '🐞 Something broken'], ['praise', '👏 Thanks']];
  var css = '.lfb-bg{position:fixed;inset:0;background:rgba(10,11,40,.55);z-index:1000;display:flex;align-items:flex-end;justify-content:center}' +
    '.lfb-bg[hidden]{display:none}' +
    '.lfb{background:#fff;color:#17183F;width:100%;max-width:520px;max-height:92vh;overflow:auto;border-radius:18px 18px 0 0;padding:18px 16px 20px;font:16px/1.45 "Anek Latin",system-ui,sans-serif}' +
    '@media (min-width:600px){.lfb-bg{align-items:center}.lfb{border-radius:18px}}' +
    '.lfb h2{font-size:21px;font-weight:800;line-height:1.15;margin:0 0 4px}.lfb p.s{color:#545978;font-size:14.5px;margin:0 0 12px}' +
    '.lfb .lab{display:block;font-weight:700;font-size:14.5px;margin:12px 0 6px}' +
    '.lfb .chips{display:flex;flex-wrap:wrap;gap:6px}.lfb .chips button{font:inherit;font-size:14px;font-weight:600;border:1.5px solid #DCE0EE;background:#fff;color:#17183F;border-radius:999px;padding:6px 11px;cursor:pointer}' +
    '.lfb .chips button[aria-pressed=true]{background:#2A2C94;border-color:#2A2C94;color:#fff}' +
    '.lfb .stars{display:flex;gap:4px}.lfb .stars button{font-size:28px;line-height:1;border:0;background:none;color:#CBD0E6;cursor:pointer;padding:2px}.lfb .stars button.on{color:#F5A400}' +
    '.lfb textarea,.lfb input[type=text]{width:100%;box-sizing:border-box;font:inherit;font-size:15.5px;border:1.5px solid #DCE0EE;border-radius:12px;padding:10px 12px;color:#17183F;background:#fff}' +
    '.lfb textarea{min-height:110px;resize:vertical}.lfb .cnt{font-size:12.5px;color:#7A7FA6;text-align:right;margin-top:2px}' +
    '.lfb .hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}' +
    '.lfb .row{display:flex;gap:8px;margin-top:14px}.lfb .row button{font:inherit;font-weight:800;font-size:15.5px;border-radius:12px;padding:11px 16px;cursor:pointer;border:0}' +
    '.lfb .send{background:#2A2C94;color:#fff;flex:1}.lfb .send:disabled{opacity:.6}.lfb .cancel{background:#EEF0F8;color:#17183F}' +
    '.lfb .out{min-height:1.4em;font-size:14.5px;margin-top:10px}.lfb .out.ok{color:#0B7A55;font-weight:700}.lfb .out.err{color:#B42318;font-weight:700}' +
    '.lfb :focus-visible{outline:3px solid #FFB703;outline-offset:2px}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var S = { rating: 0, cat: 'wrong_info', sending: false, back: null };
  var bg = document.createElement('div'); bg.className = 'lfb-bg'; bg.hidden = true;
  bg.innerHTML = '<div class="lfb" role="dialog" aria-modal="true" aria-labelledby="lfbT">' +
    '<h2 id="lfbT">Send feedback</h2><p class="s">Spotted a mistake, want a topic added, or found this useful? It goes straight to the person who makes these notes, with this page\'s address.</p>' +
    '<span class="lab" id="lfbC">What is it about?</span><div class="chips" role="group" aria-labelledby="lfbC"></div>' +
    '<label class="lab" for="lfbM">Your message</label><textarea id="lfbM" maxlength="1000" placeholder="For a mistake, mention the topic or section, and what it should say."></textarea><div class="cnt"><span>0</span>/1000</div>' +
    '<span class="lab" id="lfbR">How useful is this page? (optional)</span><div class="stars" role="radiogroup" aria-labelledby="lfbR"></div>' +
    '<label class="lab" for="lfbN">Name, phone or email (optional, only if you want a reply)</label><input type="text" id="lfbN" maxlength="80" autocomplete="off">' +
    '<div class="hp" aria-hidden="true"><input type="text" id="lfbW" tabindex="-1" autocomplete="off"></div>' +
    '<div class="row"><button type="button" class="cancel">Cancel</button><button type="button" class="send">Send</button></div><p class="out" aria-live="polite"></p></div>';
  document.body.appendChild(bg);
  var q = function (s) { return bg.querySelector(s); };
  function draw() {
    q('.chips').innerHTML = CATS.map(function (c) { return '<button type="button" data-c="' + c[0] + '" aria-pressed="' + (S.cat === c[0]) + '">' + c[1] + '</button>'; }).join('');
    q('.stars').innerHTML = [1, 2, 3, 4, 5].map(function (n) { return '<button type="button" role="radio" aria-checked="' + (n === S.rating) + '" aria-label="' + n + ' of 5" data-s="' + n + '" class="' + (n <= S.rating ? 'on' : '') + '">★</button>'; }).join('');
  }
  function open() {
    S.back = document.activeElement; S.rating = 0; S.cat = 'wrong_info'; draw();
    q('.out').textContent = ''; q('.out').className = 'out'; q('.send').disabled = false;
    bg.hidden = false; document.body.style.overflow = 'hidden';
    try { gtag('event', 'study_fb_open', { page: location.pathname }); } catch (e) {}
    setTimeout(function () { q('#lfbM').focus(); }, 50);
  }
  function close() { bg.hidden = true; document.body.style.overflow = ''; if (S.back && S.back.focus) S.back.focus(); }
  function send() {
    if (S.sending) return;
    var msg = q('#lfbM').value.trim(), out = q('.out');
    if (msg.length < 5 && !(S.cat === 'praise' && S.rating)) { out.textContent = 'Please write a few words so the message is useful.'; out.className = 'out err'; q('#lfbM').focus(); return; }
    S.sending = true; q('.send').disabled = true; out.textContent = 'Sending…'; out.className = 'out';
    var cat = S.cat === 'request' || S.cat === 'idea' || S.cat === 'bug' || S.cat === 'praise' || S.cat === 'wrong_info' ? S.cat : 'other';
    fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rating: S.rating, category: cat, message: msg, contact: q('#lfbN').value, website: q('#lfbW').value,
        page: (location.pathname + location.hash).slice(0, 80), lang: (document.documentElement.lang || 'en').slice(0, 2) }) })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok && j && j.ok, j: j || {} }; }); })
      .then(function (x) {
        S.sending = false;
        if (x.ok) { out.textContent = 'Thank you! Your message has been sent.'; out.className = 'out ok'; q('#lfbM').value = ''; q('#lfbN').value = ''; q('.cnt span').textContent = '0';
          try { gtag('event', 'study_fb_sent', { cat: cat }); } catch (e) {} setTimeout(close, 1800); }
        else { out.textContent = x.j.code === 'rate' ? 'Too many messages from this device. Please try again later.' : (x.j.error || 'Could not send right now. Please try again in a minute.'); out.className = 'out err'; q('.send').disabled = false; }
      }).catch(function () { S.sending = false; out.textContent = 'Could not send. Check your internet and try again.'; out.className = 'out err'; q('.send').disabled = false; });
  }
  bg.addEventListener('click', function (e) {
    if (e.target === bg) return close();
    var c = e.target.closest('[data-c]'); if (c) { S.cat = c.getAttribute('data-c'); draw(); return; }
    var s = e.target.closest('[data-s]'); if (s) { var n = +s.getAttribute('data-s'); S.rating = S.rating === n ? 0 : n; draw(); return; }
    if (e.target.closest('.cancel')) return close();
    if (e.target.closest('.send')) return send();
  });
  q('#lfbM').addEventListener('input', function () { q('.cnt span').textContent = this.value.length; });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !bg.hidden) close(); });
  document.addEventListener('click', function (e) { var t = e.target.closest('[data-feedback]'); if (t) { e.preventDefault(); open(); } });
})();
