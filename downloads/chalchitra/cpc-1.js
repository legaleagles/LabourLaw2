/* CPC in Motion — Episodes 1–2 */
var SERIES = SERIES || { slug: "cpc", title: "CPC in Motion", subject: "Civil Procedure Code &amp; Limitation Act", episodes: [] };

SERIES.episodes.push({ n: 1, title: "The gateway to the court", unit: "Unit I", blurb: "What CPC is, how a suit begins, which court, who must be a party, no second fights, summons, transfer.", scenes: [
 { t: "CPC is the road from a right to a remedy", sec: "CPC 1908 · 158 sections + 51 Orders", hook: "Sections = power · Orders = method", dur: 6.5, svg: function(){
   var posts = [["RIGHT", 62, "#ffd23f"], ["SUIT", 152, "#d9ecff"], ["DECREE", 245, "#c9f2d6"], ["EXECUTION", 342, "#ffd2c4"]];
   return ground() + '<path d="M14,200 C120,182 280,218 392,196" stroke="#b9a77d" stroke-width="16" fill="none" stroke-linecap="round"/>'
    + posts.map(function(p, k){ return POP(sign(p[1], 150, p[0], p[2], p[0].length > 7 ? 12 : 15), .4 + k * .9); }).join('')
    + MV(person(36, 200, "#2e6fd8", "you"), .6, 4.4, 270, 0)
    + CAP(200, 40, "a right is useless until a court enforces it", 4.6, 17)
    + CAP(200, 64, "1908 Code · amended 1976, 1999, 2002", 5.2, 13);
 }},
 { t: "A suit begins only with a plaint", sec: "S.26 · O.IV", hook: "No plaint, no suit", dur: 7, svg: function(){
   return ground() + court(328, 205, "COURT") + judge(200, 205) + person(70, 205, "#e4572e", "Lakshmi")
    + SAY(105, 62, 150, "Evict him today!", .4) + NO(200, 118, 1.6) + SAY(255, 62, 110, "File a plaint!", 2.0)
    + G(MV(doc(100, 150, "PLAINT"), 3.6, 1.4, 228, 10), A('slide', 2.8, .6, '--fx:0px;--fy:40px;'))
    + STAMP(292, 102, "SUIT FILED", "#2a9d55", 5.1, -6);
 }},
 { t: "Every civil right gets in — unless a law bars it", sec: "S.9 (Expl. I: religious office)", hook: "Civil + not barred", dur: 8, svg: function(){
   var items = [["🏠", "property", 1], ["₹", "money", 1], ["🪑", "temple office", 1], ["🍛", "caste dinner", 0, "not a civil right"], ["⚖", "tax assessment", 0, "barred by a special law"]];
   var out = items.map(function(it, k){ var d = .5 + k * 1.25, y = 30 + k * 44, tok = token(60, y, it[0], it[1]);
     if (it[2] === 1) return MV(tok, d, 1, 210, 0) + OK(372, y, d + 1, .75);
     return BOUNCE(tok, d, 1.1, 110, 0) + FI(cross(176, y, .7) + TC(60, y + 28, it[3], 11.5, '#e4572e'), d + .6);
   }).join('');
   return bg() + '<rect class="ink" x="186" y="14" width="14" height="200" fill="#7b4bb7"/>' + TD(193, 242, "S.9 GATE", 16) + out;
 }},
 { t: "File in the lowest court that can carry the value", sec: "S.6 · S.15", hook: "Too heavy? Plaint returned (O.VII r.10)", dur: 7, svg: function(){
   var rows = [["Junior Civil Judge", "small claims", 190, "#d9ecff"], ["Senior Civil Judge", "bigger claims", 140, "#c9f2d6"], ["District Court", "biggest claims", 90, "#ffd2c4"]];
   return ground() + rows.map(function(b){ return '<rect class="ink" x="120" y="' + (b[2] - 12) + '" width="270" height="24" fill="' + b[3] + '"/>' + TB(130, b[2] + 5, b[0], 13, 'start') + T(380, b[2] + 5, b[1], 11, 'end'); }).join('')
    + BOUNCE(bag(55, 200, "₹40L"), .6, 1.6, 240, -22, true) + POP(TC(300, 166, "too heavy!", 13, '#e4572e'), 1.2, '')
    + MVIN(bag(55, 200, "₹40L"), 2.6, 1.4, 240, -72) + OK(100, 140, 4.2, .85)
    + CAP(200, 40, "climb only as high as the value needs", 4.8);
 }},
 { t: "Land case? Sue where the land is", sec: "S.16 (S.17: land in two districts)", hook: "Land → where the land lies", dur: 6.5, svg: function(){
   return mapBg() + '<circle cx="120" cy="140" r="6" fill="' + INK + '"/>' + TB(120, 163, "Hyderabad", 14) + '<circle cx="310" cy="118" r="6" fill="' + INK + '"/>' + TB(310, 141, "Warangal", 14)
    + POP(house(120, 128, .9), .5) + POP(person(310, 110, "#7b4bb7", ""), 1.1)
    + POP(court(120, 212, "", null, .5), 2.2, '') + FI(court(310, 210, "", null, .5) + cross(340, 176, .8), 2.2)
    + arrow(205, 196, 152, 196, 2.8, "#2a9d55") + OK(160, 172, 3.6)
    + CAP(200, 24, "the land decides the court — not where he lives", 4.4);
 }},
 { t: "Money case? His home town — or wherever the deal happened", sec: "S.19 (wrongs) · S.20 (others)", hook: "Cause of action = the bundle of facts", dur: 7, svg: function(){
   var pins = [["Hyderabad", "contract signed", 90, 92], ["Guntur", "goods delivered", 300, 72], ["Vijayawada", "buyer lives", 220, 168]];
   return mapBg() + pins.map(function(p, k){ return POP(pin(p[2], p[3], p[0], p[1]), .5 + k * 1.2); }).join('')
    + pins.map(function(p, k){ return OK(p[2] + 26, p[3] - 30, 4 + k * .35, .75); }).join('')
    + CAP(200, 242, "any of these three courts can try the money suit", 5.3);
 }},
 { t: "A necessary party is a leg of the table", sec: "O.I r.1, 3, 9, 10 (r.8: representative suit)", hook: "No necessary party → no effective decree", dur: 7.5, svg: function(){
   var top = tableT(120, 90, 170, "DECREE") + '<rect class="ink" x="130" y="104" width="12" height="98" fill="#8a5a2b"/><rect class="ink" x="268" y="104" width="12" height="98" fill="#8a5a2b"/>' + TB(136, 226, "Lakshmi", 12) + TB(274, 226, "Raghav", 12);
   var kavya = '<rect class="ink" x="199" y="104" width="12" height="98" fill="#2e6fd8"/>' + TB(205, 226, "Kavya (co-owner)", 12);
   return ground() + TIP(top + G(kavya, 'animation:move 1s ease-in 1.4s both, fade .6s 2.1s forwards;--tx:0px;--ty:60px;'), 2.6, 9, 280, 202)
    + CAP(205, 40, "pull out a necessary party… the decree falls", 2.9, 16)
    + FI(pill(60, 200, "proper party", "#ffd23f"), 4.4) + CAP(200, 244, "a proper party is only a cushion — helpful, not essential", 5.2, 13);
 }},
 { t: "Sue for the whole claim — what you leave out is lost", sec: "O.II r.2", hook: "Sue for all or lose the rest", dur: 6.5, svg: function(){
   return ground() + T(200, 34, "one loan, one promissory note: ₹5 lakh", 16)
    + FI('<path d="M176,96 L176,190" stroke="' + INK + '" stroke-width="3" stroke-dasharray="6 5"/>' + T(176, 92, "✂", 22), .8)
    + MV(note(60, 110, 112, "₹2 L", "#c9f2d6", 64), 2, 1, 0, -48) + OK(184, 80, 3, .8) + FI(TB(232, 85, "sued & won", 13), 3)
    + FADE(MV(note(190, 110, 168, "₹3 L", "#ffd2c4", 64), 1.2, .8, 0, 20, true), 3.6, 1.2) + STAMP(274, 160, "BARRED", "#e4572e", 4.4)
    + CAPB(200, 236, "a later suit for ₹3 L? too late", 4.8, 14);
 }},
 { t: "Same fight already pending? The later suit waits", sec: "S.10 · res sub judice", hook: "Pending → pause, not dismiss", dur: 6.5, svg: function(){
   return ground() + court(100, 205, "Court A · first") + court(300, 205, "Court B · later")
    + POP(doc(200, 70, "same matter"), .4) + MVIN(doc(200, 70, ""), 1.2, 1, -100, 70) + MVIN(doc(200, 70, ""), 1.5, 1, 100, 70)
    + POP(pauseI(300, 110), 3) + STAMP(300, 60, "TRIAL STAYED", "#2e6fd8", 3.8, -6) + OK(100, 110, 4.4);
 }},
 { t: "Decided once, decided forever", sec: "S.11 · res judicata (Expl. IV: constructive)", hook: "D-S-T-C-F · should have said it then? can’t say it now", dur: 8, svg: function(){
   return ground() + court(310, 205, "COURT") + person(70, 205, "#7b4bb7", "Raghav", "sad")
    + FI(doc(70, 140, "same claim", "#ffd2c4"), .3) + STAMP(310, 96, "DECIDED", "#2a9d55", .6, -8)
    + BOUNCE(doc(70, 140, "", "#ffd2c4"), 1, 1.5, 170, 20) + POP(shield(262, 150, "RJ"), 1.6)
    + POP('<g transform="translate(150,90)"><rect x="-38" y="-16" width="76" height="30" rx="5" fill="#fff" stroke="' + INK + '" stroke-width="2.4" stroke-dasharray="6 4"/>' + TB(0, 4, "gift deed", 13) + '</g>', 3.6)
    + POP(lock(150, 58) + TB(150, 36, "never raised → locked out", 13), 4.6, 'thud');
 }},
 { t: "Summons: hand it, family, door, newspaper", sec: "S.27–29 · O.V (r.12, 15, 17, 20)", hook: "P-F-A-S · foreign summons served like ours (S.29)", dur: 8, svg: function(){
   return ground() + house(250, 212, 1.6) + '<rect class="ink" x="238" y="182" width="24" height="30" fill="#8a5a2b"/>'
    + TB(70, 40, "1 personal", 14) + TB(165, 40, "2 family", 14) + TB(250, 40, "3 affix", 14) + TB(345, 40, "4 paper / e-mail", 13)
    + person(70, 205, "#2e6fd8", "server") + MV(env(70, 130), .6, 1, 95, 0) + NO(165, 96, 1.7, .8) + FI(TB(165, 166, "refused", 13), 1.7)
    + POP(env(250, 175), 2.6, 'thud') + CAP(232, 136, "🔨 nailed to the door", 3, 13)
    + POP('<g transform="translate(345,160)"><rect class="ink" x="-30" y="-36" width="60" height="72" fill="#fff"/><path d="M-22,-24 H22 M-22,-14 H22 M-22,-4 H10 M-22,6 H22 M-22,16 H14" stroke="#888" stroke-width="2.4"/>' + TD(0, -41, "NOTICE", 12) + '</g>', 4.6)
    + OK(378, 128, 5.6, .8);
 }},
 { t: "Only a higher court can move a suit", sec: "S.22–24 (HC / District Court) · S.25 (Supreme Court)", hook: "Transfer comes from above", dur: 6.5, svg: function(){
   return ground() + court(90, 205, "Court A") + court(310, 205, "Court B")
    + POP(box(140, 16, 120, 30, "#ffd23f", "HIGH COURT", 16), .3)
    + MV(hand(92, 60) + doc(92, 138, "suit"), 1, 2.6, 218, 0)
    + CAP(200, 240, "a party can only ask — S.24 / S.25 decide", 3.8, 14);
 }}
]});

SERIES.episodes.push({ n: 2, title: "The pleadings war", unit: "Unit II", blurb: "Pleadings, forms, striking out, amendment, plaint, return and rejection, documents, written statement, set-off, counter-claim, S.89, issues.", scenes: [
 { t: "Pleadings: facts only — not law, not evidence", sec: "O.VI r.1–2", hook: "F-M-N-C: Facts · Material · Not evidence · Concise", dur: 7.5, svg: function(){
   var items = [["material facts", 1], ["the law", 0], ["evidence", 0], ["arguments", 0], ["facts in brief", 1]];
   var funnel = '<path class="ink" d="M150,40 H290 L240,120 V170 H200 V120 Z" fill="#d9ecff"/>' + TD(220, 70, "PLEADING", 15);
   return bg() + funnel + doc(220, 200, "plaint / WS") + items.map(function(it, k){ var d = .4 + k * 1.1, y = 28 + k * 38;
     var p = pill(70, y, it[0], it[1] ? "#c9f2d6" : "#ffd2c4", 12);
     return it[1] ? G(MV(p, d, 1, 150, 120 - y), 'animation:fade .4s ' + (d + 1) + 's forwards;') + OK(268, 200, d + 1, .7) : BOUNCE(p, d, 1, 70, 0) + NO(150, y, d + .5, .55);
   }).join('');
 }},
 { t: "Sign it, verify it, use the forms", sec: "O.VI r.3, 14, 15 · Appendix A", hook: "Signed by party + pleader · verified on oath", dur: 6, svg: function(){
   return ground() + POP('<g transform="translate(120,130)"><rect class="ink" x="-60" y="-80" width="120" height="150" fill="#fff"/><path d="M-44,-58 H44 M-44,-44 H44 M-44,-30 H30 M-44,-16 H44 M-44,-2 H20" stroke="#999" stroke-width="2.4"/></g>', .3)
    + G('<path d="M80,160 C95,145 105,170 120,155 S145,160 155,150" fill="none" stroke="#2e6fd8" stroke-width="3" stroke-dasharray="120" style="' + A('draw', 1.2, 1, '--len:120;stroke-dashoffset:120;') + '"/>', '') + CAPB(118, 185, "signed", 1.8, 13)
    + STAMP(120, 100, "VERIFIED", "#2a9d55", 2.8, -8)
    + POP('<g transform="translate(300,120)">' + [0, 1, 2].map(function(k){ return '<rect class="ink" x="' + (-40 + k * 6) + '" y="' + (-50 + k * 6) + '" width="80" height="100" fill="#fff3c8"/>'; }).join('') + TD(12, 20, "FORMS", 15) + '</g>', 4)
    + CAP(300, 200, "standard forms in Appendix A", 4.6, 13);
 }},
 { t: "The court can strike out the junk", sec: "O.VI r.16", hook: "Unnecessary · scandalous · vexatious · abuse → struck out", dur: 6, svg: function(){
   var lines = [["facts of the sale", 0], ["defendant is a scoundrel", 1], ["date of the agreement", 0], ["irrelevant family gossip", 1]];
   return bg() + '<rect class="ink" x="70" y="30" width="260" height="180" fill="#fff"/>' + lines.map(function(l, k){ var y = 70 + k * 38;
     return TB(90, y, l[0], 15, 'start') + (l[1] ? G('<path d="M84,' + (y - 5) + ' H' + (100 + l[0].length * 7.4) + '" stroke="#e4572e" stroke-width="4" stroke-dasharray="300" style="' + A('draw', 1 + k * .6, .6, '--len:300;stroke-dashoffset:300;') + '"/>', '') + NO(318, y - 5, 1.4 + k * .6, .6) : OK(318, y - 5, 1 + k * .6, .6));
   }).join('') + CAP(200, 236, "anything that may delay or embarrass a fair trial", 3.6, 14);
 }},
 { t: "Amendment: fix the real question, don’t change the case", sec: "O.VI r.17 (proviso)", hook: "Before trial: freely · after trial starts: only with due diligence", dur: 7.5, svg: function(){
   return ground() + '<path d="M30,120 H370" stroke="' + INK + '" stroke-width="4"/>' + '<path d="M200,104 V136" stroke="' + INK + '" stroke-width="4"/>' + TB(200, 158, "trial begins", 13)
    + TB(110, 96, "before trial", 14) + TB(290, 96, "after trial starts", 14)
    + POP(doc(110, 60, "") + '<path d="M118,58 l6,-8 l6,8" fill="none" stroke="#2a9d55" stroke-width="3"/>', .5) + OK(140, 40, 1.3, .7)
    + POP(doc(290, 60, ""), 2.2, '') + POP(TC(290, 190, "only if you couldn’t raise it earlier", 12.5, '#e4572e'), 3, 'blip') + OK(320, 40, 3.8, .7)
    + POP(pill(200, 226, "new inconsistent case? ✗", "#ffd2c4", 12), 4.8, 'no');
 }},
 { t: "A plaint must carry these particulars", sec: "O.VII r.1", hook: "Court · parties · facts · cause date · jurisdiction · value · relief", dur: 7.5, svg: function(){
   var it = ["name of the court", "parties & addresses", "facts of the case", "when the cause arose", "why this court has jurisdiction", "value of the suit", "relief claimed"];
   return bg() + doc(60, 120, "PLAINT", null, 2.2) + it.map(function(s, k){ var y = 38 + k * 28; return POP('<g>' + tick(150, y - 4, .55) + TB(166, y, s, 14, 'start') + '</g>', .5 + k * .7, 'ok'); }).join('');
 }},
 { t: "Wrong court? The plaint is returned", sec: "O.VII r.10, 10A", hook: "Wrong door → return, not reject", dur: 6.5, svg: function(){
   return ground() + court(160, 205, "no jurisdiction") + court(330, 205, "right court")
    + person(40, 205, "#e4572e", "plaintiff") + BOUNCE(doc(60, 140, "plaint"), .5, 1.6, 90, 0)
    + STAMP(160, 92, "RETURNED", "#d97706", 1.4, -8) + MVIN(doc(60, 140, ""), 2.6, 1.6, 270, 10) + OK(330, 100, 4.3)
    + CAP(200, 240, "endorsed with dates and handed back to be filed in the proper court", 4.6, 13);
 }},
 { t: "Dead on arrival? The plaint is rejected", sec: "O.VII r.11 (r.13: a fresh plaint is allowed)", hook: "No cause · undervalued · under-stamped · barred · no copies", dur: 7.5, svg: function(){
   var r = ["no cause of action", "undervalued, not corrected", "court fee short, not paid", "barred by law", "no duplicate copies"];
   return bg() + doc(90, 125, "PLAINT", "#fff", 2) + r.map(function(s, k){ return POP(pill(270, 40 + k * 36, s, "#ffd2c4", 12), .5 + k * .6, 'blip'); }).join('')
    + STAMP(90, 125, "REJECTED", "#e4572e", 3.8, -14) + CAP(200, 236, "not res judicata — a fresh, correct plaint can be filed", 4.8, 14);
 }},
 { t: "Documents you rely on go in with the plaint", sec: "O.VII r.14 · O.VIII r.1A · O.XIII", hook: "Relied on? File it now — later only with leave", dur: 6.5, svg: function(){
   return bg() + POP(doc(80, 120, "sale deed"), .4) + POP(doc(140, 120, "receipt"), .8) + POP(doc(200, 120, "letter"), 1.2)
    + POP(box(250, 90, 120, 60, "#fff3c8", "list of documents", 13), 1.8)
    + POP(pill(140, 60, "Ex. A1", "#ffd23f"), 2.8, 'stamp') + CAP(200, 196, "produced → admitted → marked as an exhibit", 3.4, 15)
    + POP(pill(200, 226, "late document? only with the court’s leave", "#ffd2c4", 12), 4.6, 'blip');
 }},
 { t: "Written statement: 30 days, outer limit 90", sec: "O.VIII r.1, 3–5 · commercial suits: 120 days, strict", hook: "Deny specifically — or it is admitted", dur: 7.5, svg: function(){
   return bg() + POP(cal(70, 70, "DAY", "30", "#2a9d55"), .4) + POP(cal(170, 70, "UP TO", "90", "#d97706"), 1.2) + POP(cal(270, 70, "COMMERCIAL", "120", "#e4572e"), 2) + CAP(340, 76, "hard stop", 2.4, 13)
    + POP(SAY(100, 170, 130, "“I deny it all”", 3), 3, '') + STAMP(100, 210, "EVASIVE = ADMITTED", "#e4572e", 4, -4, 14)
    + POP(bubble(300, 170, 150, "“No sale on 3 May”"), 4.6, 'blip') + OK(300, 212, 5.4, .8);
 }},
 { t: "Set-off: his ascertained debt comes off your claim", sec: "O.VIII r.6", hook: "Set-off = shield", dur: 7, svg: function(){
   return ground() + balance(200, 205, -12, 1.8, "₹1,00,000", "₹40,000", POP(bag(130, 130, "₹1L"), .4), POP(bag(270, 130, "₹40K"), 1)) + TB(130, 40, "plaintiff claims", 13) + TB(270, 40, "defendant is owed", 13)
    + POP(box(260, 196, 128, 28, "#c9f2d6", "decree: ₹60,000", 13), 3.2, 'ok') + CAP(200, 240, "same parties · ascertained sum · legally recoverable", 4, 12.5);
 }},
 { t: "Counter-claim: the defendant fires back", sec: "O.VIII r.6A–6G", hook: "Set-off = shield · counter-claim = sword", dur: 7, svg: function(){
   return ground() + person(70, 205, "#2e6fd8", "plaintiff") + person(330, 205, "#7b4bb7", "defendant", "angry")
    + MV(doc(110, 160, "claim"), .4, 1, 120, 0) + POP(shield(300, 150, "WS", "#2e6fd8", .7), 1.4)
    + G('<path d="M300,120 L110,120" stroke="#e4572e" stroke-width="4" marker-end="url(#ah)" stroke-dasharray="200" style="' + A('draw', 2.4, .7, '--len:200;stroke-dashoffset:200;') + '"/>', '') + (cue(2.4, 'whoosh'), '')
    + POP(pill(200, 96, "COUNTER-CLAIM", "#ffd2c4", 14), 2.6) + CAP(200, 50, "any claim against the plaintiff — treated as a plaint", 3.6, 14)
    + CAP(200, 240, "survives even if the main suit is dismissed", 4.6, 13);
 }},
 { t: "Settle before you battle", sec: "S.89 · O.X r.1A", hook: "A-C-M-L: Arbitration · Conciliation · Mediation · Lok Adalat", dur: 7, svg: function(){
   var d = [["Arbitration", 60], ["Conciliation", 150], ["Mediation", 250], ["Lok Adalat", 340]];
   return ground() + '<path d="M20,200 H380" stroke="#b9a77d" stroke-width="14" stroke-linecap="round"/>' + d.map(function(x, k){ return POP(door(x[1], 180, x[0], ["#2e6fd8", "#7b4bb7", "#2a9d55", "#d97706"][k]), .6 + k * .6); }).join('')
    + MV(doc(20, 140, "dispute"), 3.2, 1.4, 220, 0) + OK(250, 90, 4.8)
    + CAP(200, 40, "the court sends the case out if a settlement looks possible", 3, 14) + CAP(200, 64, "Afcons v Cherian Varkey (2010)", 4.2, 12);
 }},
 { t: "Where the two sides disagree, an issue is born", sec: "O.XIV r.1 · first hearing", hook: "Issues = the exam paper of the suit", dur: 7, svg: function(){
   return bg() + box(16, 40, 130, 120, "#d9ecff", "", 13) + TB(81, 30, "plaint says", 13) + box(254, 40, 130, 120, "#ffd2c4", "", 13) + TB(319, 30, "WS says", 13)
    + TB(81, 80, "sold on 3 May", 13) + TB(81, 110, "₹5 L paid", 13) + TB(319, 80, "no sale at all", 13) + TB(319, 110, "₹5 L paid", 13)
    + POP(TD(200, 86, "⚡ ISSUE 1", 15, 'middle', '#e4572e'), 1.4, 'stamp') + POP(TC(200, 116, "agreed → no issue", 12, '#2a9d55'), 2.4, 'ok')
    + POP(box(80, 180, 240, 50, "#fff3c8", "Issue 1: Was there a sale on 3 May?", 13.5), 3.4)
    + CAP(200, 244, "issues of fact and issues of law · law issues first if they can end the suit", 4.4, 12);
 }}
]});
