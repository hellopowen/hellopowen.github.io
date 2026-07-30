/* ==========================================================================
   Po-Wen Shih — hellopowen.github.io/po · full-career portfolio (v2 archival system — shipping build)
   2026-07-30
   An archival index treatment: one grotesque family (Space Grotesk) with a
   mono apparatus (Space Mono) reserved for the record-keeping — entry
   numbers, years, category tags, the clock. Near-monochrome paper and ink,
   one rust accent carried over from v1, hairline rules, wide measure,
   generous vertical rhythm. Every interaction is an enhancement; the
   document reads completely with JS off.
   ========================================================================== */

/* ---------- Tokens ------------------------------------------------------- */

:root{
  --paper:  #faf9f6;
  --ink:    #1b1917;
  --ink-2:  #45403a;
  --ink-3:  #6c655d;

  --accent:   #b5432a;
  --accent-2: #8e3320;

  --rule: #e2ddd4;

  --sans: "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Helvetica, Arial, sans-serif;
  --mono: "Space Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  /* fluid scale — t-00 is the mono apparatus, t-06 the hero */
  --t-00: clamp(11.5px, .6rem + .18vw, 13px);
  --t-01: clamp(14px,  .78rem + .2vw,  15.5px);
  --t-02: clamp(16px,  .9rem + .3vw,   18px);
  --t-03: clamp(19px,  1rem + .7vw,    25px);
  --t-04: clamp(23px,  1.1rem + 1.4vw, 34px);
  --t-05: clamp(32px,  1.3rem + 4.2vw, 68px);
  --t-06: clamp(42px,  1.4rem + 7.2vw, 116px);

  --maxw:   1080px;
  --gutter: clamp(20px, 5vw, 56px);
  --rhythm: clamp(64px, 11vw, 132px);
}

@media (prefers-color-scheme: dark){
  :root{
    --paper:#161412; --ink:#ece8e1; --ink-2:#c2bab0; --ink-3:#978e82;
    --accent:#e2704f; --accent-2:#f08a68;
    --rule:#2d2822;
  }
}

/* ---------- Base --------------------------------------------------------- */

*,*::before,*::after{ box-sizing:border-box; }

html{ scroll-behavior:smooth; scroll-padding-top:84px; -webkit-text-size-adjust:100%; }
@media (prefers-reduced-motion: reduce){
  html{ scroll-behavior:auto; }
  *{ animation-duration:.001ms !important; transition-duration:.001ms !important; }
}

body{
  margin:0;
  background:var(--paper);
  color:var(--ink);
  font-family:var(--sans);
  font-size:var(--t-02);
  line-height:1.55;
  -webkit-font-smoothing:antialiased;
  overflow-wrap:break-word;
}

.wrap{ max-width:var(--maxw); margin-inline:auto; padding-inline:var(--gutter); }
.mono{ font-family:var(--mono); }

::selection{ background:var(--accent); color:var(--paper); }

:focus-visible{ outline:2px solid var(--accent); outline-offset:3px; }

a{ color:var(--accent); text-underline-offset:3px; text-decoration-thickness:1px; }
a:hover{ color:var(--accent-2); }

.skip{
  position:absolute; left:-9999px; top:0; z-index:50;
  background:var(--ink); color:var(--paper); padding:10px 16px;
  font-size:var(--t-01); text-decoration:none;
}
.skip:focus{ left:0; }

/* ---------- Header ------------------------------------------------------- */

.site-head{
  position:sticky; top:0; z-index:10;
  background:var(--paper);
  border-bottom:1px solid var(--rule);
}
.site-head .bar{
  display:flex; justify-content:space-between; align-items:baseline;
  gap:16px; padding-block:15px;
}
.mark{
  font-weight:700; letter-spacing:-.01em; font-size:var(--t-01);
  color:var(--ink); text-decoration:none;
}
.mark:hover{ color:var(--accent); }
.clock{
  font-family:var(--mono); font-size:var(--t-00); color:var(--ink-3);
  letter-spacing:.02em; font-variant-numeric:tabular-nums; white-space:nowrap;
}

/* ---------- Display type ------------------------------------------------- */

.display{ font-weight:700; letter-spacing:-.03em; line-height:.96; margin:0; }
h1.display{ font-size:var(--t-06); }
h2.display{ font-size:var(--t-05); letter-spacing:-.025em; line-height:1.02; }
h3.display{ font-size:var(--t-04); letter-spacing:-.02em; line-height:1.08; margin-bottom:clamp(18px,3vw,28px); }

.lede{
  font-size:var(--t-03); line-height:1.4; letter-spacing:-.01em;
  max-width:52ch; margin:clamp(22px,4vw,40px) 0 0; color:var(--ink);
}
.meta{ font-family:var(--mono); font-size:var(--t-00); color:var(--ink-3); margin:clamp(20px,3.5vw,32px) 0 0; }

.cta{
  display:inline-block; margin-top:clamp(22px,4vw,36px);
  font-weight:500; font-size:var(--t-02); color:var(--accent);
  text-decoration:none; border-bottom:1px solid currentColor; padding-bottom:2px;
}
.cta:hover{ color:var(--accent-2); }
.cta .arw{ display:inline-block; transition:transform .18s ease; }
.cta:hover .arw{ transform:translateX(4px); }

.row{ display:flex; flex-wrap:wrap; align-items:baseline; column-gap:34px; }

/* ---------- Hero --------------------------------------------------------- */

.hero .wrap{ padding-block:clamp(64px,12vw,148px) clamp(48px,8vw,100px); }
.hero .meta{ margin-top:clamp(26px,4.5vw,44px); }

/* ---------- Index -------------------------------------------------------- */

.index .wrap{ padding-block:clamp(28px,5vw,56px) var(--rhythm); }
.ix-title{
  font-family:var(--mono); font-size:var(--t-00); font-weight:400;
  text-transform:uppercase; letter-spacing:.16em; color:var(--ink-3);
  margin:0 0 clamp(14px,2.5vw,22px);
}
.index ol, .index ul{ list-style:none; margin:0; padding:0; }
.index a{
  display:grid;
  grid-template-columns:4ch minmax(0,1fr) max-content;
  column-gap:clamp(14px,3vw,36px); align-items:baseline;
  padding-block:11px; border-top:1px solid var(--rule);
  text-decoration:none; color:var(--ink);
}
.index li:last-child a{ border-bottom:1px solid var(--rule); }
.index ul li:last-child a{ border-bottom:1px solid var(--rule); }
.index ol li:last-child a{ border-bottom:0; }
.index .no, .index .yr, .index .tag{
  font-family:var(--mono); font-size:var(--t-00); color:var(--ink-3);
  font-variant-numeric:tabular-nums;
}
.index .t{ font-size:var(--t-01); line-height:1.35; }
.index .yr{ text-align:right; }
.index .tag{ display:none; text-align:right; min-width:9ch; }
@media (min-width:720px){
  .index a{ grid-template-columns:4ch minmax(0,1fr) 9ch 9ch; }
  .index .tag{ display:block; }
}
.index a:hover .t, .index a:focus-visible .t{ color:var(--accent); }
.index a:hover .no{ color:var(--accent); }
.index a.is-view .no{ color:var(--accent); }
.index a.is-view .t{ color:var(--accent); }

/* ---------- Sections & entries ------------------------------------------- */

.block .wrap{ padding-block:0 var(--rhythm); }
.sec-head{ margin-bottom:clamp(26px,4.5vw,48px); }
.sub{ font-size:var(--t-02); color:var(--ink-2); max-width:58ch; margin:clamp(12px,2vw,18px) 0 0; }

.entry{
  display:grid; grid-template-columns:minmax(0,1fr);
  row-gap:clamp(12px,2vw,18px); column-gap:clamp(24px,4vw,48px);
  border-top:1px solid var(--rule);
  padding-block:clamp(26px,4.5vw,48px);
}
@media (min-width:880px){
  .entry{ grid-template-columns:180px minmax(0,1fr); }
}
.e-meta{
  display:flex; gap:18px; align-items:baseline;
  font-family:var(--mono); font-size:var(--t-00); color:var(--ink-3);
  font-variant-numeric:tabular-nums;
}
@media (min-width:880px){
  .e-meta{ flex-direction:column; gap:7px; align-items:flex-start; }
}
.e-meta .no{
  font-size:var(--t-03); color:var(--ink); line-height:1;
  transition:color .2s ease;
}
.entry.is-view .e-meta .no,
.entry:target .e-meta .no{ color:var(--accent); }

.e-body{ max-width:62ch; min-width:0; }
.e-body h3{
  font-size:var(--t-03); font-weight:500; letter-spacing:-.015em;
  line-height:1.18; margin:0 0 10px;
}
.e-body p{ margin:0 0 12px; color:var(--ink-2); font-size:var(--t-02); }
.e-body p:last-child{ margin-bottom:0; }
.role{
  font-family:var(--mono); font-size:var(--t-00); color:var(--ink-3);
  letter-spacing:.04em; margin:0 0 10px;
}
.when{ font-family:var(--mono); font-size:var(--t-00); color:var(--ink-3); }
p.when{ margin-top:14px; }

/* ---------- Lists (record) ----------------------------------------------- */

.dash{ list-style:none; margin:0; padding:0; }
.dash li{ border-top:1px solid var(--rule); padding-block:clamp(16px,2.5vw,22px); }
.dash b{ display:block; font-weight:500; font-size:var(--t-02); letter-spacing:-.01em; }
.dash li > div > span{ display:block; color:var(--ink-2); font-size:var(--t-01); margin-top:7px; max-width:66ch; }
.dash .when{ font-family:var(--mono); font-size:var(--t-00); color:var(--ink-3); }

.links{ list-style:none; margin:0; padding:0; }
.links a{
  display:flex; justify-content:space-between; align-items:baseline; gap:24px;
  padding-block:14px; border-top:1px solid var(--rule);
  text-decoration:none; color:var(--ink); font-size:var(--t-01);
}
.links li:last-child a{ border-bottom:1px solid var(--rule); }
.links a:hover span:first-child{ color:var(--accent); }
.links .src{ font-family:var(--mono); font-size:var(--t-00); color:var(--ink-3); white-space:nowrap; }

/* ---------- Table (record) ----------------------------------------------- */

.scroll{ overflow-x:auto; }
table{ width:100%; border-collapse:collapse; min-width:640px; }
caption{ text-align:left; }
th{
  font-family:var(--mono); font-size:var(--t-00); font-weight:400;
  text-transform:uppercase; letter-spacing:.12em; color:var(--ink-3);
  text-align:left; padding:0 20px 10px 0; border-bottom:1px solid var(--ink);
}
td{
  font-size:var(--t-01); color:var(--ink-2); vertical-align:top;
  padding:13px 20px 13px 0; border-top:1px solid var(--rule);
}
tbody tr:first-child td{ border-top:0; }
td .when{ font-family:var(--mono); font-size:var(--t-00); color:var(--ink-3); }

.note{ font-size:var(--t-01); color:var(--ink-2); max-width:62ch; margin:0 0 clamp(24px,4vw,36px); }
.muted{ color:var(--ink-2); max-width:62ch; }

hr{ border:0; border-top:1px solid var(--rule); margin:clamp(40px,7vw,72px) 0; }

/* ---------- Facts (about) ------------------------------------------------ */

.facts{ margin:clamp(28px,4.5vw,44px) 0 0; }
.facts > div{
  display:grid; grid-template-columns:minmax(96px,140px) minmax(0,1fr);
  gap:16px; border-top:1px solid var(--rule); padding-block:13px;
}
.facts > div:last-child{ border-bottom:1px solid var(--rule); }
dt{ font-family:var(--mono); font-size:var(--t-00); color:var(--ink-3); padding-top:3px; }
dd{ margin:0; font-size:var(--t-01); color:var(--ink-2); }

/* ---------- Footer ------------------------------------------------------- */

.site-foot{ border-top:1px solid var(--rule); }
.site-foot .wrap{ padding-block:clamp(52px,9vw,104px); }
.site-foot p{ color:var(--ink-2); font-size:var(--t-01); max-width:62ch; }
.fine{ font-size:var(--t-00); color:var(--ink-3); max-width:70ch; }

/* ---------- Viewing counter (JS only) ------------------------------------ */

.viewing{
  position:fixed; right:14px; bottom:14px; z-index:20;
  display:none;
  font-family:var(--mono); font-size:var(--t-00); letter-spacing:.05em;
  font-variant-numeric:tabular-nums;
  color:var(--ink-2); background:var(--paper);
  border:1px solid var(--rule); padding:7px 11px;
}
html.js .viewing.is-on{ display:block; }

/* ---------- Accessibility helpers ---------------------------------------- */

.vh{
  position:absolute; width:1px; height:1px; padding:0; margin:-1px;
  overflow:hidden; clip:rect(0 0 0 0); white-space:nowrap; border:0;
}

/* ---------- Print ---------------------------------------------------------- */

@media print{
  :root{
    --paper:#fff; --ink:#000; --ink-2:#222; --ink-3:#555;
    --accent:#000; --accent-2:#000; --rule:#bbb;
    --rhythm:24px; --gutter:0px;
  }
  .site-head,.skip,.viewing{ display:none !important; }
  body{ background:#fff; line-height:1.4; }
  .wrap{ max-width:none; padding:0; }
  .entry,.dash > li,tr,.facts > div{ break-inside:avoid; }
  .display{ break-after:avoid; }
  .scroll{ overflow:visible; }
  table{ min-width:0; }
  a{ color:#000; text-decoration:none; }
  .links a::after{ content:" " attr(href); font-size:8px; color:#555; }
  @page{ margin:15mm 14mm; }
}
