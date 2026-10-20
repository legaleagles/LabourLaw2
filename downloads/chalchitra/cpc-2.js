/* CPC in Motion — Episodes 3–4 */
SERIES.episodes.push({ n: 3, title: "Inside the trial", unit: "Unit III (a)", blurb: "Appearance and ex parte, examination of parties, witnesses, evidence, admissions, documents, adjournments, hearing, affidavits, judgment, decree, costs.", scenes: [
 { t: "Who turns up decides what happens", sec: "O.IX r.3, 6, 8", hook: "Both absent → dismissed · plaintiff absent → dismissed · defendant absent → ex parte", dur: 8, svg: function(){
   var rows = [["both absent", 0, 0, "suit dismissed", "#ffd2c4"], ["plaintiff absent", 0, 1, "suit dismissed", "#ffd2c4"], ["only defendant absent", 1, 0, "heard ex parte", "#d9ecff"]];
   return bg() + TB(185, 26, "plaintiff", 12) + TB(242, 26, "defendant", 12) + rows.map(function(r, k){ var y = 66 + k * 60, d = .5 + k * 1.6;
     return TB(14, y + 5, r[0], 13, 'start') + POP(r[1] ? person(185, y + 22, "#2e6fd8", "", null, .62) : '<circle cx="185" cy="' + y + '" r="14" fill="none" stroke="#999" stroke-width="2.4" stroke-dasharray="4 4"/>', d, '')
       + POP(r[2] ? person(242, y + 22, "#7b4bb7", "", null, .62) : '<circle cx="242" cy="' + y + '" r="14" fill="none" stroke="#999" stroke-width="2.4" stroke-dasharray="4 4"/>', d + .2, '')
       + G(arrow(266, y, 290, y, d + .6), '') + POP(box(296, y - 16, 98, 32, r[4], r[3], 12.5), d + 1, r[2] ? 'pop' : 'no');
   }).join('') + CAP(200, 240, "r.9: a dismissed plaintiff can’t sue again — he must apply to restore", 5.6, 12.5);
 }},
 { t: "Ex parte decree? Two keys open it again", sec: "O.IX r.13 · S.96(2) · Art. 123 (30 days)", hook: "Not duly served · or sufficient cause", dur: 7, svg: function(){
   return ground() + '<rect class="ink" x="230" y="70" width="110" height="142" fill="#8a5a2b"/>' + STAMP(285, 130, "EX PARTE DECREE", "#e4572e", .4, -8, 12)
    + person(70, 205, "#7b4bb7", "defendant", "sad")
    + POP(pill(120, 70, "🔑 summons not duly served", "#ffd23f", 12), 1.5) + POP(pill(120, 110, "🔑 sufficient cause for absence", "#ffd23f", 12), 2.3)
    + TIP('<rect class="ink" x="230" y="70" width="110" height="142" fill="#a5753f"/>', 3.4, 75, 340, 212) + OK(285, 150, 4.2)
    + CAP(240, 240, "apply within 30 days — or appeal the decree", 4.6, 13);
 }},
 { t: "First hearing: the judge asks the parties", sec: "O.X r.1–2 (r.1A: refer to ADR)", hook: "Admit or deny? — the judge asks first", dur: 6.5, svg: function(){
   return ground() + judge(200, 200) + person(70, 205, "#2e6fd8", "plaintiff") + person(330, 205, "#7b4bb7", "defendant")
    + SAY(200, 64, 190, "Do you admit the sale?", .5, 13) + SAY(330, 110, 90, "Yes", 1.8) + SAY(70, 110, 140, "And the price?", 2.6)
    + POP(box(120, 140, 160, 28, "#c9f2d6", "admitted facts → no proof", 12.5), 3.6, 'ok')
    + CAP(200, 240, "answers are recorded — narrowing the real dispute", 4.4, 13);
 }},
 { t: "Witnesses: list, summon, pay", sec: "O.XVI · S.132–133", hook: "List in 15 days · costs paid · VIPs exempt", dur: 7, svg: function(){
   return ground() + POP(box(20, 30, 120, 90, "#fff3c8", "", 12) + TB(80, 52, "witness list", 13) + T(80, 76, "1. neighbour", 12) + T(80, 96, "2. surveyor", 12), .4)
    + POP(cal(80, 160, "WITHIN", "15", "#2a9d55"), 1.2) + TB(80, 205, "days of issues", 11.5)
    + MV(env(160, 80), 2, 1, 80, 60) + POP(person(260, 205, "#d97706", "witness"), 2.2, '') + POP(bag(300, 205, "₹"), 3, 'ok')
    + POP(pill(272, 34, "President · Governors · Ministers · Judges", "#d9ecff", 10.5), 4.2) + CAPB(272, 60, "exempt from appearing (S.133)", 4.6, 11.5);
 }},
 { t: "Evidence: chief by affidavit, then cross", sec: "O.XVIII r.4 · r.5", hook: "Chief → cross → re-exam", dur: 7, svg: function(){
   var st = [["chief", "by affidavit", "#d9ecff"], ["cross", "in open court", "#ffd2c4"], ["re-exam", "to explain", "#c9f2d6"]];
   return ground() + st.map(function(s, k){ var x = 70 + k * 130; return POP(box(x - 52, 60, 104, 56, s[2], "", 13) + TD(x, 86, s[0].toUpperCase(), 17) + T(x, 106, s[1], 12), .5 + k * 1.2) + (k < 2 ? G(arrow(x + 54, 88, x + 76, 88, .9 + k * 1.2), '') : ''); }).join('')
    + POP(person(200, 205, "#d97706", "witness"), 4, '') + POP(judge(320, 205, "Commissioner"), 4.6)
    + CAP(200, 140, "the court may let a commissioner record it", 5, 13);
 }},
 { t: "What’s admitted needn’t be proved", sec: "O.XII r.1, 4, 6", hook: "Admitted = proved · judgment on admission", dur: 6.5, svg: function(){
   return ground() + '<path d="M30,150 H360" stroke="#b9a77d" stroke-width="12" stroke-linecap="round" stroke-dasharray="1 22"/>' + TB(40, 130, "start", 13) + POP('<rect class="ink" x="330" y="90" width="8" height="70" fill="#fff"/><path d="M338,92 h30 v18 h-30" fill="#e4572e" stroke="' + INK + '" stroke-width="2"/>', .3, '') + TB(350, 180, "judgment", 13)
    + MV(pill(70, 150, "admitted", "#c9f2d6", 13), .8, 1.4, 250, 0) + OK(320, 120, 2.3)
    + POP(pill(200, 70, "notice to admit facts (r.4)", "#fff3c8", 12), 3)
    + CAP(200, 236, "r.6: on clear admissions the court can pass judgment at once", 3.8, 13);
 }},
 { t: "Documents: admitted, impounded or returned", sec: "O.XIII r.3–9", hook: "Mark it · lock it (if suspicious) · return it later", dur: 7, svg: function(){
   return bg() + POP(doc(70, 110, "deed"), .4) + STAMP(70, 160, "Ex. A1", "#2a9d55", 1, -6, 15) + TB(70, 200, "admitted & marked", 12)
    + POP(doc(200, 110, "forged?"), 2, '') + POP(lock(200, 160, 1.3), 2.6, 'thud') + TB(200, 200, "impounded (r.8)", 12)
    + MV(POP(doc(330, 110, "returned"), 3.6, ''), 4.2, .8, 30, 0) + TB(330, 200, "returned later (r.9)", 12)
    + CAP(200, 34, "rejected documents are returned at once", 4.8, 13);
 }},
 { t: "Adjournments: three at most, with costs", sec: "O.XVII r.1 (proviso)", hook: "Max 3 adjournments to a party · costs for each", dur: 6.5, svg: function(){
   return bg() + [0, 1, 2].map(function(k){ return POP(cal(80 + k * 90, 90, "NEXT DATE", String(k + 1), "#2e6fd8"), .4 + k * .8, 'pop') + OK(80 + k * 90, 140, .8 + k * .8, .6); }).join('')
    + POP(cal(350, 90, "NEXT DATE", "4", "#e4572e"), 3.2, '') + NO(350, 140, 3.6, .7)
    + POP(bag(200, 220, "costs"), 4.2, 'stamp') + CAP(200, 34, "only for sufficient cause — and the court fixes costs", 4.8, 13);
 }},
 { t: "Hearing order & affidavits", sec: "O.XVIII r.1–3 · O.XIX", hook: "Plaintiff begins · affidavits = facts you know", dur: 6.5, svg: function(){
   return ground() + person(80, 205, "#2e6fd8", "plaintiff") + person(320, 205, "#7b4bb7", "defendant") + SAY(80, 110, 120, "I begin", .5)
    + POP(TC(318, 92, "defendant begins only", 11.5, '#e4572e') + TC(318, 108, "if he admits the facts", 11.5, '#e4572e'), 1.4, 'blip')
    + POP('<g transform="translate(200,120)"><rect class="ink" x="-40" y="-50" width="80" height="100" fill="#fff"/>' + TD(0, -30, "AFFIDAVIT", 13) + '<path d="M-28,-14 H28 M-28,-2 H28 M-28,10 H18" stroke="#999" stroke-width="2.4"/></g>', 2.2)
    + STAMP(200, 160, "ON OATH", "#2a9d55", 3, -8, 13) + CAP(200, 240, "only facts within your own knowledge (beliefs only in interim matters)", 3.8, 12);
 }},
 { t: "Judgment: the reasons, delivered on time", sec: "S.2(9) · O.XX r.1–5", hook: "Within 30 days — 60 at most", dur: 6.5, svg: function(){
   return ground() + judge(80, 205) + POP('<g transform="translate(230,120)"><rect class="ink" x="-70" y="-80" width="140" height="160" fill="#fff"/>' + TD(0, -56, "JUDGMENT", 17) + T(0, -30, "points for decision", 12) + T(0, -10, "decision on each", 12) + T(0, 10, "reasons", 12) + T(0, 30, "relief granted", 12) + '</g>', .5)
    + POP(cal(350, 90, "DAYS", "30", "#2a9d55"), 1.8) + POP(TC(350, 140, "max 60", 13, '#e4572e'), 2.4, 'blip')
    + CAP(200, 240, "pronounced in open court after the hearing", 3.2, 13);
 }},
 { t: "From judgment to decree", sec: "S.2(2) decree · S.2(14) order", hook: "Reasons → judgment · rights → decree · rest → order", dur: 7.5, svg: function(){
   var k = [["preliminary", "rights decided, more to do"], ["final", "suit fully disposed of"], ["partly both", "some rights final, some pending"]];
   return bg() + POP(doc(60, 70, "judgment"), .3) + G(arrow(85, 70, 140, 70, .8), '') + POP(doc(170, 70, "DECREE", "#fff3c8"), 1.2, 'stamp')
    + k.map(function(r, n){ return POP(box(16, 118 + n * 40, 130, 32, ["#d9ecff", "#c9f2d6", "#ffd2c4"][n], r[0], 13) + T(156, 139 + n * 40, r[1], 12, 'start'), 2 + n * .8); }).join('')
    + POP(pill(300, 70, "deemed decree: rejection of plaint", "#fff3c8", 10.5), 4.6) + CAP(200, 240, "order = any other decision of a civil court", 5.2, 13);
 }},
 { t: "Costs follow the event", sec: "S.35 · S.35A · S.35B", hook: "Loser pays · false claim pays more · delay pays too", dur: 6.5, svg: function(){
   return ground() + person(80, 205, "#2e6fd8", "winner") + person(320, 205, "#7b4bb7", "loser", "sad")
    + MV(bag(300, 150, "costs"), .6, 1.4, -200, 0) + OK(150, 150, 2)
    + POP(pill(200, 50, "S.35A false / vexatious claim → compensatory costs (up to ₹3,000)", "#ffd2c4", 10), 2.8)
    + POP(pill(200, 86, "S.35B causing delay → costs before next step", "#fff3c8", 10.5), 3.8);
 }}
]});

SERIES.episodes.push({ n: 4, title: "Protect the property, enforce the decree", unit: "Unit III (b)", blurb: "Interim orders and stay, temporary injunction, receiver, commissions, execution: who, how, arrest, attachment, sale, restitution.", scenes: [
 { t: "While the case runs, the court holds an umbrella", sec: "Interim orders · S.94 · stay (S.10, O.XLI r.5)", hook: "Keep things as they are till the decision", dur: 6.5, svg: function(){
   var it = ["injunction", "receiver", "commission", "attachment", "stay"];
   return ground() + house(200, 212, 1.6) + POP('<path class="ink" d="M90,110 Q200,20 310,110 Z" fill="#2e6fd8"/><path d="M200,70 V180" stroke="' + INK + '" stroke-width="4"/>', .4, 'whoosh')
    + it.map(function(s, k){ return POP(pill([45, 122, 197, 278, 352][k], 236, s, "#ffd23f", 11), 1.2 + k * .5); }).join('')
    + CAP(200, 26, "interim = for the time being", 4, 15);
 }},
 { t: "Temporary injunction: three locks must open", sec: "O.XXXIX r.1–2", hook: "P-B-I: Prima facie case · Balance of convenience · Irreparable injury", dur: 7.5, svg: function(){
   var l = ["Prima facie case", "Balance of convenience", "Irreparable injury"];
   return bg() + l.map(function(s, k){ var x = 70 + k * 130; return '<g>' + lock(x, 80, 2) + TB(x, 130, s, 13) + '</g>' + OK(x + 26, 60, 1 + k * 1.1, .7); }).join('')
    + POP(box(110, 160, 180, 40, "#c9f2d6", "INJUNCTION GRANTED", 15), 4.4, 'stamp')
    + CAP(200, 236, "Dalpat Kumar v Prahlad Singh (1992)", 5, 13);
 }},
 { t: "Ex parte injunction & disobedience", sec: "O.XXXIX r.3, 3A, 2A", hook: "Notice first · ex parte with reasons · decide in 30 days · disobey → 3 months jail", dur: 7, svg: function(){
   return ground() + POP(env(70, 70), .4) + TB(70, 104, "notice to opponent", 12) + POP(pill(200, 70, "urgent? ex parte with reasons", "#fff3c8", 11.5), 1.4)
    + POP(cal(330, 70, "DECIDE IN", "30", "#2e6fd8"), 2.2)
    + POP(person(120, 205, "#7b4bb7", "disobeys", "angry"), 3.2, '') + POP(bars(200, 140, 70, 72), 4, 'thud') + POP(TC(320, 175, "up to 3 months +", 12, '#e4572e') + TC(320, 193, "property attached", 12, '#e4572e'), 4.6, 'stamp');
 }},
 { t: "Receiver: the court’s caretaker", sec: "O.XL", hook: "Neutral hands for disputed property", dur: 6, svg: function(){
   return ground() + house(260, 212, 1.6) + person(50, 205, "#2e6fd8", "party A") + person(350, 205, "#7b4bb7", "party B")
    + POP(person(150, 205, "#2a9d55", "Receiver"), .8) + MV(bag(290, 120, "rent"), 1.8, 1.2, -100, 0) + POP(court(150, 80, "", null, .5), 3.2, 'ok')
    + CAP(200, 240, "collects, manages, preserves — and accounts to the court", 3.8, 13);
 }},
 { t: "Commissions: the court sends someone out", sec: "O.XXVI", hook: "Witness · local inspection · accounts · partition · science", dur: 7, svg: function(){
   var c = [["examine a witness", "r.1"], ["local investigation", "r.9"], ["scientific test", "r.10A"], ["accounts", "r.11"], ["partition", "r.13"]];
   return bg() + POP(court(70, 140, "court", null, .7), .3) + c.map(function(s, k){ var y = 36 + k * 42; return G(arrow(110, 120, 176, y - 4, .8 + k * .6), '') + POP(pill(270, y, s[0] + " · " + s[1], ["#d9ecff", "#c9f2d6", "#fff3c8", "#ffd2c4", "#e9dcff"][k], 12.5), 1 + k * .6); }).join('');
 }},
 { t: "Execution: turning paper into reality", sec: "S.36–38 · S.39 transfer", hook: "Decree = paper · execution = power", dur: 6.5, svg: function(){
   return ground() + POP(doc(80, 120, "DECREE", "#fff3c8", 1.6), .3) + G(arrow(120, 120, 220, 120, 1), '') + POP(house(290, 150, 2), 1.6, 'ok')
    + TB(80, 190, "decree-holder", 13) + TB(290, 190, "judgment-debtor’s property", 13)
    + CAP(200, 40, "executed by the court that passed it — or the court it transfers to", 2.6, 13);
 }},
 { t: "All execution disputes stay inside execution", sec: "S.47", hook: "No separate suit · can’t go behind the decree", dur: 6.5, svg: function(){
   return ground() + court(290, 205, "executing court") + person(60, 205, "#7b4bb7", "J-debtor", "angry")
    + MV(doc(90, 140, "objection"), .6, 1.2, 150, 10) + OK(290, 100, 1.9)
    + POP(court(120, 80, "", null, .5) + NO(150, 50, 0, .6), 2.8, 'no') + TB(120, 108, "new suit? ✗", 12)
    + POP(pill(250, 30, "decree wrong? appeal it — not here", "#ffd2c4", 11.5), 3.8, 'blip');
 }},
 { t: "Apply for execution — 12 years to do it", sec: "O.XXI r.11 · Art. 136", hook: "Application with particulars · 12 years", dur: 6, svg: function(){
   return bg() + POP('<g transform="translate(120,120)"><rect class="ink" x="-70" y="-80" width="140" height="160" fill="#fff"/>' + TD(0, -56, "EXECUTION PETITION", 12) + T(0, -30, "decree details", 12) + T(0, -10, "amount due", 12) + T(0, 10, "mode wanted", 12) + T(0, 30, "property / person", 12) + '</g>', .4)
    + POP(clock(300, 110, 46, "12 years from the decree", 1.4), 1.2)
    + CAP(200, 236, "money decree: oral application at the time of the decree is allowed", 3.2, 12.5);
 }},
 { t: "Modes of execution", sec: "S.51", hook: "D-A-A-R-O: Deliver · Attach & sell · Arrest · Receiver · Other", dur: 7, svg: function(){
   var m = [["🏠", "deliver"], ["🏷", "attach+sell"], ["⛓", "arrest"], ["🧑‍💼", "receiver"], ["✳", "any other"]];
   return bg() + m.map(function(x, k){ var px = [40, 120, 200, 280, 360][k]; return POP(token(px, 110, x[0], x[1], 'below'), .5 + k * .7); }).join('')
    + CAP(200, 40, "the decree-holder picks; the court decides", 4.2, 15) + CAP(200, 210, "arrest for money only if he can pay and won’t", 5, 13);
 }},
 { t: "Arrest & detention — with limits", sec: "S.55–58 · Jolly George Varghese (1980)", hook: "Not at night in his house · not women (money decree) · over ₹5,000 → 3 months", dur: 8, svg: function(){
   var rows = [["over ₹5,000", "up to 3 months"], ["₹2,000 – ₹5,000", "up to 6 weeks"], ["up to ₹2,000", "no detention"]];
   return bg() + bars(24, 40, 96, 100) + POP(person(72, 132, "#7b4bb7", "", "sad"), .4, 'thud')
    + rows.map(function(r, k){ return POP(box(150, 40 + k * 38, 110, 30, "#fff3c8", r[0], 12) + box(270, 40 + k * 38, 120, 30, k === 2 ? "#c9f2d6" : "#ffd2c4", r[1], 12), 1 + k * .7); }).join('')
    + POP(pill(200, 182, "🌙 no entry into his house after sunset", "#d9ecff", 11.5), 3.4) + POP(pill(200, 214, "👩 no arrest of women in money decrees (S.56)", "#d9ecff", 11.5), 4.2)
    + CAP(200, 242, "only if he can pay and refuses — Jolly George", 5, 12.5);
 }},
  { t: "Attachment: some things can never be taken", sec: "S.60 · O.XXI", hook: "Clothes · tools · farmer’s house & cattle · pension · part of salary", dur: 7, svg: function(){
   var x = [["👕", "clothes & bedding"], ["🔨", "tools of an artisan"], ["🌾", "a farmer’s house & cattle"], ["👴", "pensions"], ["💼", "salary: ₹1,000 + ⅔ of the rest"]];
   return bg() + CAPB(200, 26, "never attachable (S.60)", .1, 15) + x.map(function(it, k){ return POP(token(36, 56 + k * 36, it[0], it[1]), .4 + k * .6); }).join('')
    + POP(shield(330, 120, "S.60", "#2a9d55", 1.1), 3.6, 'ok') + CAP(200, 240, "everything else of the judgment-debtor can be attached", 4.4, 13);
 }},
{ t: "Sale by public auction — and how to undo it", sec: "O.XXI r.64–94 (r.89, 90)", hook: "Deposit & 5% → set aside (r.89) · fraud / irregularity → set aside (r.90)", dur: 7, svg: function(){
   return ground() + house(110, 212, 1.6) + POP(STAMP(110, 110, "SOLD", "#e4572e", .6), .6, '') + POP(bubble(270, 70, 170, "Going… going… gone!"), 1.4, 'blip')
    + POP(pill(270, 130, "r.89: pay the amount + 5% to the buyer", "#c9f2d6", 11), 2.6) + POP(pill(270, 166, "r.90: fraud / material irregularity", "#fff3c8", 11), 3.4)
    + OK(370, 200, 4.4, .7) + CAP(200, 240, "otherwise the sale becomes absolute", 4.8, 13);
 }},
 { t: "Undo the wrong — the court’s own power", sec: "S.144 restitution · S.151 inherent powers", hook: "Actus curiae neminem gravabit", dur: 6.5, svg: function(){
   return ground() + POP(doc(80, 110, "decree", "#fff3c8"), .3) + POP(STAMP(80, 110, "REVERSED", "#e4572e", 1), 1, '') + MV(house(150, 200, 1.2), 2, 1.4, 160, 0) + OK(320, 140, 3.5)
    + CAP(200, 40, "things go back to how they were (S.144)", 2.6, 15) + POP(pill(200, 236, "S.151: inherent power to do justice / stop abuse", "#d9ecff", 11.5), 4.2);
 }}
]});
