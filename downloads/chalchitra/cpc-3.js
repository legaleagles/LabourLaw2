/* CPC in Motion — Episodes 5–6 */
SERIES.episodes.push({ n: 5, title: "Special suits & the road upward", unit: "Unit IV", blurb: "Suits by or against the Government, public nuisance and charities, minors, indigent persons, interpleader, supplemental proceedings, appeals, reference, review, revision.", scenes: [
 { t: "Suing the Government: use the right name", sec: "S.79", hook: "Union of India · State of ___", dur: 6, svg: function(){
   return ground() + court(300, 205, "COURT") + person(70, 205, "#2e6fd8", "citizen")
    + POP(doc(150, 140, "plaint", "#fff", 1.3), .4) + POP(pill(180, 34, "“the Collector’s office”", "#ffd2c4", 12), 1.2, '') + NO(300, 34, 1.6, .7)
    + POP(pill(180, 72, "“Union of India” / “State of ___”", "#c9f2d6", 11.5), 2.4) + OK(330, 72, 3, .7)
    + CAP(200, 240, "Central Govt → Union of India · State Govt → the State", 3.6, 13);
 }},
 { t: "Notice first — two months’ wait", sec: "S.80(1), (2), (3)", hook: "2 months’ notice · urgent → leave of court · small defects don’t kill the suit", dur: 7.5, svg: function(){
   return ground() + person(60, 205, "#2e6fd8", "citizen") + court(340, 205, "Govt office", "#7b8fa6", .8)
    + MV(env(90, 96), .4, 1.4, 200, 0) + POP(cal(200, 50, "WAIT", "2 mo", "#2e6fd8"), 1.9)
    + POP(pill(190, 132, "(2) urgent? sue with leave of court", "#fff3c8", 11), 3) + POP(pill(190, 162, "(3) defect in notice ≠ dismissal", "#c9f2d6", 11), 3.9)
    + CAP(200, 240, "the Government gets a chance to settle first", 4.6, 13);
 }},
 { t: "Decree against Government: three months to pay", sec: "S.82", hook: "No execution for 3 months · no arrest", dur: 6, svg: function(){
   return bg() + POP(doc(80, 110, "DECREE", "#fff3c8", 1.6), .3) + G(arrow(120, 110, 180, 110, .9), '') + POP(clock(240, 110, 42, "3 months to satisfy", 1.2), 1.2)
    + POP(court(350, 140, "", "#7b8fa6", .7), 2.6, '') + OK(350, 80, 3.4, .7)
    + CAP(200, 220, "only then can it be executed — and never by arrest", 3.8, 13);
 }},
 { t: "Public wrongs: nuisance & public trusts", sec: "S.91 · S.92", hook: "Advocate General — or two persons with leave", dur: 7, svg: function(){
   return ground() + '<path class="ink" d="M40,212 V150 h40 v62" fill="#999"/><path d="M60,148 q-14,-30 4,-52 q16,-24 -2,-48" stroke="#555" stroke-width="7" fill="none" stroke-linecap="round" opacity=".6"/>' + TB(60, 230, "nuisance", 12)
    + '<g transform="translate(330,212)"><polygon class="ink" points="-30,-50 0,-80 30,-50" fill="#ffd23f"/><rect class="ink" x="-26" y="-50" width="52" height="50" fill="#fff"/></g>' + TB(330, 230, "public trust", 12)
    + POP(person(150, 205, "#2a9d55", "Advocate General", null, .9), .6) + POP(person(230, 205, "#2e6fd8", "", null, .75) + person(262, 205, "#d97706", "", null, .75), 1.6, '')
    + POP(pill(246, 120, "2+ persons, with leave", "#fff3c8", 11), 2) + CAP(200, 40, "S.91: public nuisance · S.92: breach of a public charitable trust", 3, 12.5);
 }},
 { t: "Minors sue through a friend", sec: "O.XXXII r.1, 3, 7, 15", hook: "Next friend sues · guardian ad litem defends · no compromise without leave", dur: 7.5, svg: function(){
   return ground() + person(70, 205, "#2e6fd8", "next friend") + person(112, 205, "#ffd23f", "", null, .6) + TB(112, 168, "minor", 11) + person(330, 205, "#7b4bb7", "guardian ad litem") + person(288, 205, "#ffd23f", "", null, .6) + TB(288, 168, "minor", 11)
    + TB(95, 40, "plaintiff side", 13) + TB(305, 40, "defendant side", 13)
    + POP(doc(200, 110, "compromise"), 2) + POP(court(200, 70, "", null, .4), 2.6, '') + POP(TC(200, 150, "needs leave of court (r.7)", 12, '#e4572e'), 3, 'blip')
    + CAP(200, 240, "r.15: same rules for persons of unsound mind", 4, 13);
 }},
 { t: "Too poor for court fee? Sue as indigent", sec: "O.XXXIII", hook: "No sufficient means → no court fee now", dur: 7, svg: function(){
   return ground() + person(70, 205, "#2e6fd8", "indigent person", "sad") + POP(pill(70, 60, "can’t pay court fee", "#ffd2c4", 12), .4)
    + POP(doc(200, 110, "application", "#fff", 1.3), 1.2) + POP(judge(310, 205), 1.8) + SAY(310, 100, 140, "Inquiry — allowed", 2.6)
    + STAMP(200, 160, "FEE EXCUSED", "#2a9d55", 3.4, -8, 13)
    + CAP(200, 240, "if he wins, unpaid court fee is the first charge on the decree", 4.4, 12.5);
 }},
 { t: "Interpleader: the stakeholder steps aside", sec: "S.88 · O.XXXV", hook: "Two claimants · one neutral holder · let them fight", dur: 7, svg: function(){
   return ground() + FADE(person(200, 205, "#2a9d55", "stakeholder"), 3.2)
    + POP(person(60, 205, "#2e6fd8", "claim A", "angry"), .8) + POP(person(340, 205, "#7b4bb7", "claim B", "angry"), 1.2)
    + SAY(60, 100, 90, "Mine!", 1.4) + SAY(340, 100, 90, "Mine!", 1.8)
    + MV(POP(bag(200, 140, "₹"), .3, ''), 2.6, 1, 0, -50) + POP(court(200, 42, "", null, .45), 2.2, '')
    + CAP(200, 240, "he deposits it in court and is discharged; A and B fight it out", 4, 12.5);
 }},
  { t: "Supplemental proceedings — and a price for misuse", sec: "S.94 · S.95 · O.XXXVIII", hook: "Arrest/attachment before judgment · wrongful use → compensation up to ₹50,000", dur: 7.5, svg: function(){
   var it = [["⛓", "arrest before judgment"], ["🏷", "attachment before judgment"], ["✋", "temporary injunction"], ["🧑‍💼", "receiver"]];
   return bg() + CAP(200, 26, "S.94: to stop justice being defeated", .1, 14) + it.map(function(x, k){ return POP(token(34, 60 + k * 38, x[0], x[1]), .4 + k * .6); }).join('')
    + POP(TC(300, 70, "S.95: obtained on", 12, '#e4572e') + TC(300, 86, "insufficient grounds?", 12, '#e4572e'), 3, 'blip')
    + POP(person(260, 205, "#7b4bb7", "harassed", "sad", .8), 3.4, '') + MV(bag(370, 196, "₹50K"), 3.8, 1.2, -70, 0) + CAP(200, 244, "pay compensation — up to ₹50,000", 4.8, 13);
 }},
{ t: "First appeal: facts and law, all open", sec: "S.96 · O.XLI", hook: "From original decree · not from consent decree · ≤ ₹10,000: law only", dur: 7.5, svg: function(){
   return ground() + '<path class="ink" d="M40,212 h80 v-30 h80 v-30 h80 v-30 h80 v90 Z" fill="#efe2c6"/>' + TB(80, 205, "trial court", 12) + TB(160, 176, "1st appeal", 12) + TB(240, 146, "2nd appeal", 12) + TB(320, 116, "Supreme Court", 11)
    + MV(person(60, 182, "#2e6fd8", "", null, .6), .4, 1.2, 100, -30)
    + POP(pill(200, 40, "facts + law re-heard (S.96)", "#c9f2d6", 12), 1.4)
    + POP(pill(110, 80, "(3) consent decree → no appeal", "#ffd2c4", 11), 2.4) + POP(pill(290, 80, "(4) ≤ ₹10,000 → law only", "#fff3c8", 11), 3.2)
    + CAP(200, 238, "S.96(2): appeal lies even from an ex parte decree", 4, 12.5);
 }},
 { t: "Second appeal: only a substantial question of law", sec: "S.100 · S.102", hook: "High Court · substantial question of law · no 2nd appeal if money ≤ ₹25,000", dur: 7.5, svg: function(){
   return bg() + POP(court(200, 120, "HIGH COURT", "#2e6fd8"), .3) + MVIN(pill(60, 200, "facts?", "#ffd2c4", 13), 1, 1, 40, -40) + NO(100, 132, 1.8, .7)
    + MVIN(pill(340, 200, "substantial question of law", "#c9f2d6", 11.5), 2.4, 1, -50, -40) + OK(290, 132, 3.4, .7)
    + POP(pill(200, 30, "S.102: money suit ≤ ₹25,000 → no second appeal", "#fff3c8", 11.5), 4.2);
 }},
 { t: "Appeals from orders & the appeal rules", sec: "S.104 · O.XLIII · O.XLI r.5, 22, 23, 27", hook: "Only listed orders · no automatic stay · cross-objection · remand · extra evidence", dur: 8, svg: function(){
   var r = [["r.5", "appeal ≠ automatic stay", "#ffd2c4"], ["r.22", "cross-objection (30 days)", "#d9ecff"], ["r.23", "remand to trial court", "#fff3c8"], ["r.27", "additional evidence — rarely", "#c9f2d6"]];
   return bg() + POP(box(20, 20, 360, 40, "#e9dcff", "S.104 + O.XLIII r.1: appeal only from the orders listed", 12.5), .3)
    + r.map(function(x, k){ return POP(box(20, 74 + k * 40, 56, 32, "#fff", x[0], 13) + box(84, 74 + k * 40, 296, 32, x[2], x[1], 13), 1.2 + k * .8); }).join('')
    + CAP(200, 240, "no second appeal from an appellate order (S.104(2))", 4.6, 12.5);
 }},
 { t: "Reference & review", sec: "S.113 · O.XLVI · S.114 · O.XLVII", hook: "Reference: doubt to the High Court · Review: same court looks again", dur: 7.5, svg: function(){
   return bg() + POP(court(80, 110, "trial court", null, .7), .3) + MV(bubble(80, 40, 70, "?"), .9, 1.2, 230, 0) + POP(court(320, 110, "High Court", "#2e6fd8", .7), 1.6)
    + CAP(200, 140, "reference: a doubt on law (e.g. validity of an Act)", 2.2, 12.5)
    + POP(judge(70, 225, "same judge"), 3.2) + ['new evidence', 'error on the face of record', 'other sufficient reason'].map(function(s, k){ return POP(pill(250, 172 + k * 26, s, ["#c9f2d6", "#fff3c8", "#d9ecff"][k], 11.5), 3.6 + k * .5); }).join('');
 }},
 { t: "Revision: High Court’s supervisory eye", sec: "S.115", hook: "Case decided · no appeal lies · jurisdiction error", dur: 8, svg: function(){
   var e = ["used a jurisdiction it didn’t have", "failed to use one it had", "acted illegally / with material irregularity"];
   return bg() + POP(court(70, 110, "High Court", "#2e6fd8", .7), .3) + POP('<g transform="translate(70,40)"><ellipse rx="22" ry="12" fill="#fff" stroke="' + INK + '" stroke-width="2.4"/><circle r="6" fill="' + INK + '"/></g>', .8, 'blip')
    + e.map(function(s, k){ return POP(box(140, 40 + k * 46, 248, 36, ["#ffd2c4", "#fff3c8", "#e9dcff"][k], s, 11.5), 1.4 + k * .9); }).join('')
    + CAP(200, 200, "only where no appeal lies to the High Court", 4.4, 13) + CAP(200, 226, "interlocutory order: only if it would finally dispose of the suit", 5, 11.5);
 }}
]});

SERIES.episodes.push({ n: 6, title: "The clock: Limitation Act, 1963", unit: "Unit V", blurb: "Why time limits, S.3 bar, the Schedule, S.4–5 delay, disabilities, exclusion of time, acknowledgment and part payment, continuing wrongs, easements, adverse possession.", scenes: [
 { t: "The law helps the vigilant, not the sleepers", sec: "Limitation Act, 1963 · object", hook: "Vigilantibus non dormientibus jura subveniunt", dur: 6.5, svg: function(){
   return ground() + person(80, 205, "#2e6fd8", "sleeps", "sad") + POP(TC(100, 120, "z z z", 16, '#7b8fa6'), .4, '') + POP(clock(250, 110, 46, "", .8), .6)
    + POP(STAMP(250, 175, "TIME-BARRED", "#e4572e", 3, -8, 14), 3, '')
    + CAP(200, 26, "bars the remedy (court), not usually the right", 3.8, 14) + CAP(200, 240, "interest reipublicae ut sit finis litium — litigation must end", 4.4, 12);
 }},
 { t: "Late suit? Dismissed — even if no one objects", sec: "S.3", hook: "Court must check limitation on its own", dur: 6, svg: function(){
   return ground() + judge(200, 205) + person(320, 205, "#7b4bb7", "defendant") + SAY(320, 110, 110, "(silent)", .5)
    + MV(doc(60, 130, "late plaint"), 1, 1, 80, 0) + POP(cal(80, 60, "FILED", "LATE", "#e4572e"), 1.6)
    + STAMP(150, 150, "DISMISSED", "#e4572e", 2.6, -8, 15) + CAP(200, 240, "even if limitation is not set up as a defence", 3.4, 13);
 }},
 { t: "The Schedule: three shelves of time", sec: "Schedule · Arts. 1–137", hook: "Suits 1–113 · Appeals 114–117 · Applications 118–137", dur: 8, svg: function(){
   var sh = [["SUITS", "Arts 1–113", "#d9ecff"], ["APPEALS", "Arts 114–117", "#c9f2d6"], ["APPLICATIONS", "Arts 118–137", "#fff3c8"]];
   var ex = [["money lent · Art 19", "3 yrs"], ["possession on title · Art 65", "12 yrs"], ["appeal to HC (CPC) · Art 116", "90 days"], ["residuary · Art 137", "3 yrs"]];
   return bg() + sh.map(function(s, k){ return POP(box(14 + k * 126, 20, 120, 46, s[2], "", 13) + TD(74 + k * 126, 42, s[0], s[0].length > 8 ? 13 : 16) + T(74 + k * 126, 60, s[1], 11.5), .3 + k * .6); }).join('')
    + ex.map(function(e, k){ return POP(box(20, 84 + k * 40, 270, 32, "#fff", e[0], 12) + box(298, 84 + k * 40, 82, 32, "#ffd23f", e[1], 13), 2.4 + k * .8); }).join('');
 }},
 { t: "Court closed on the last day? File on reopening", sec: "S.4", hook: "Last day a holiday → next working day", dur: 5.5, svg: function(){
   return ground() + POP(cal(110, 100, "LAST DAY", "Sun", "#e4572e"), .3) + POP(court(110, 205, "CLOSED", "#999", .8), .8, 'thud')
    + G(arrow(150, 100, 240, 100, 1.6), '') + POP(cal(290, 100, "REOPENS", "Mon", "#2a9d55"), 2.2) + MV(doc(250, 180, "plaint"), 2.6, .8, 40, -10) + OK(340, 160, 3.2, .7)
    + CAP(200, 30, "filing on the reopening day is in time", 3.6, 14);
 }},
 { t: "Delay can be forgiven — for appeals and applications", sec: "S.5 · Collector, LA v Mst. Katiji (1987)", hook: "Sufficient cause · liberal view · not for suits", dur: 7, svg: function(){
   return ground() + person(70, 205, "#2e6fd8", "appellant", "sad") + SAY(70, 100, 130, "I was ill, sir…", .5) + judge(300, 205)
    + POP(pill(200, 40, "appeal / application late", "#ffd2c4", 12), 1.2) + POP(pill(200, 150, "sufficient cause shown", "#c9f2d6", 12), 2) + STAMP(300, 110, "DELAY CONDONED", "#2a9d55", 2.8, -8, 12)
    + POP(TC(200, 240, "suits: no S.5 — the clock is strict", 13, '#e4572e'), 3.8, 'no');
 }},
 { t: "Legal disability: the clock waits", sec: "S.6 · S.7 · S.8", hook: "Minor · insane · idiot → time runs after it ends", dur: 7.5, svg: function(){
   return bg() + '<path d="M30,120 H370" stroke="' + INK + '" stroke-width="3"/>' + POP(person(70, 110, "#ffd23f", "", null, .7) + TB(70, 52, "minor", 12), .3) + POP(pauseI(160, 110), 1, 'thud')
    + POP(person(240, 110, "#2e6fd8", "", null, .8) + TB(240, 46, "turns 18", 12), 1.8) + G(arrow(260, 120, 360, 120, 2.4, '#2a9d55'), '') + POP(TC(320, 104, "clock starts", 12, '#2a9d55'), 2.6, '')
    + POP(pill(200, 168, "S.8: never more than 3 years after the disability ends", "#fff3c8", 11), 3.4)
    + POP(pill(200, 204, "imprisonment is NOT a disability (1963 Act)", "#ffd2c4", 11), 4.2) + CAP(200, 238, "S.7: one of several plaintiffs disabled", 5, 11.5);
 }},
 { t: "Once it starts, it doesn’t stop", sec: "S.9", hook: "Later disability or inability doesn’t pause the clock", dur: 5.5, svg: function(){
   return bg() + POP(clock(200, 110, 56, "", .3), .2) + G(arrow(80, 200, 320, 200, 1.4, '#2a9d55'), '') + TB(200, 230, "time keeps running", 13)
    + POP(person(60, 110, "#2e6fd8", "later falls ill", "sad", .8), 2) + NO(110, 60, 2.6, .7)
    + CAP(200, 30, "a later disability can’t stop a clock already running", 3, 13);
 }},
 { t: "Days that don’t count", sec: "S.12 · S.13 · S.14 · S.15", hook: "First day · copy time · wrong court in good faith · stay & notice period", dur: 8, svg: function(){
   var r = [["S.12", "first day + time to get certified copies", "#d9ecff"], ["S.13", "time spent on an indigent application", "#fff3c8"], ["S.14", "suit in a wrong court, in good faith", "#c9f2d6"], ["S.15", "stay / injunction time + S.80 notice period", "#ffd2c4"]];
   return bg() + CAP(200, 26, "EXCLUDED from the count", .2, 16) + r.map(function(x, k){ return POP(box(16, 42 + k * 46, 64, 36, "#fff", x[0], 14) + box(88, 42 + k * 46, 296, 36, x[2], x[1], 12), .6 + k * .9); }).join('')
    + CAP(200, 240, "S.17: fraud or mistake → time runs from discovery", 4.6, 12.5);
 }},
 { t: "A signed admission restarts the clock", sec: "S.18", hook: "Written · signed · before expiry → fresh period", dur: 6.5, svg: function(){
   return ground() + person(70, 205, "#7b4bb7", "debtor") + POP('<g transform="translate(190,110)"><rect class="ink" x="-60" y="-50" width="120" height="100" fill="#fff"/>' + T(0, -20, "I owe ₹80,000", 13) + '<path d="M-30,24 q10,-14 20,0 t20,0 t20,0" stroke="#2e6fd8" stroke-width="2.4" fill="none"/>' + T(0, 44, "signed", 11) + '</g>', .4)
    + POP(pill(320, 50, "before expiry", "#d9ecff", 12.5), 1.4) + POP(clock(320, 125, 34, "", 2), 2, 'chime') + POP(TC(320, 182, "fresh period", 13, '#2a9d55'), 2.6, '')
    + CAP(200, 240, "oral acknowledgment doesn’t count", 3.4, 13);
 }},
 { t: "Part payment restarts it too", sec: "S.19", hook: "Paid before expiry + written proof of payment", dur: 6, svg: function(){
   return ground() + person(70, 205, "#7b4bb7", "debtor") + person(330, 205, "#2e6fd8", "creditor")
    + MV(bag(100, 150, "₹5K"), .5, 1.4, 200, 0) + POP(doc(200, 80, "receipt"), 2, '') + OK(236, 84, 2.4, .6)
    + POP(clock(200, 160, 26, "", 2.6), 2.8, 'chime') + CAP(200, 240, "towards the debt or its interest — fresh period from payment", 3.4, 12.5);
 }},
 { t: "New party? New date. Ongoing wrong? Ongoing clock", sec: "S.21 · S.22", hook: "Added party: from date added · continuing breach: fresh every moment", dur: 7, svg: function(){
   return bg() + POP(doc(70, 80, "suit"), .3) + POP(person(130, 110, "#d97706", "added later", null, .7), 1, '') + POP(pill(225, 70, "from the date added", "#d9ecff", 12), 1.6)
    + CAP(110, 150, "S.21: time counted from when added", 2.2, 12)
    + POP('<path d="M260,190 q20,-30 40,0 t40,0" stroke="#2e6fd8" stroke-width="5" fill="none"/><path class="ink" d="M240,200 h140" fill="none"/>', 3, 'whoosh') + POP(clock(345, 120, 28, "", 3.4), 3.4, '')
    + CAP(200, 240, "S.22: continuing wrong — a fresh period every moment", 3.8, 12);
 }},
 { t: "Easements by long use", sec: "S.25 · S.26", hook: "20 years — peaceably, openly, as of right · 30 against Government", dur: 7, svg: function(){
   return ground() + '<path d="M0,212 Q200,150 400,212" fill="#d4e6c3" stroke="' + INK + '" stroke-width="2"/><path d="M60,212 C140,170 260,170 340,212" stroke="#b9a77d" stroke-width="10" fill="none" stroke-dasharray="2 10" stroke-linecap="round"/>'
    + MV(person(60, 205, "#2e6fd8", "", null, .7), .4, 2, 260, 0) + POP(cal(110, 70, "YEARS", "20", "#2a9d55"), 1.2) + POP(cal(290, 70, "GOVT", "30", "#7b8fa6"), 2.4)
    + POP(pill(200, 130, "peaceful · open · as of right · uninterrupted", "#fff3c8", 11.5), 3) + CAP(200, 30, "a right of way, light or air ripens into an easement", 3.6, 12.5);
 }},
 { t: "12 years’ possession — the owner’s right dies", sec: "S.27 · Art. 65 · Ravinder Kaur Grewal (2019)", hook: "Remedy gone → right extinguished · adverse possession as sword and shield", dur: 8, svg: function(){
   return ground() + house(200, 212, 2) + POP(person(310, 205, "#7b4bb7", "possessor"), .4)
    + POP(cal(80, 60, "YEARS", "12", "#e4572e"), 1.2) + POP(pill(250, 46, "open · hostile · continuous", "#fff3c8", 12), 1.6) + FADE(person(70, 205, "#2e6fd8", "owner", "sad"), 2.6) + POP(STAMP(70, 140, "RIGHT GONE", "#e4572e", 3, -8, 12), 3, '')
    + POP(pill(250, 82, "2019: the possessor can even sue", "#c9f2d6", 11.5), 4)
    + CAP(200, 244, "S.27: once the time to recover possession ends, the title itself ends", 4.6, 11.5);
 }},
 { t: "Special laws keep their own clocks", sec: "S.29", hook: "Special/local period prevails · S.4–24 apply unless excluded", dur: 6, svg: function(){
   return bg() + POP(clock(110, 110, 50, "Limitation Act", .4), .2) + POP(clock(290, 110, 50, "special law", .8), .8)
    + POP(pill(290, 190, "its own period wins", "#c9f2d6", 12), 1.8) + POP(pill(200, 226, "S.4–24 still apply unless expressly excluded", "#fff3c8", 11.5), 2.6)
    + CAP(200, 26, "and that’s the clock — file on time!", 3.4, 15);
 }}
]});
