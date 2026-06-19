// ── og_render.mjs — Blueboxd OG card compositor (P3b + P4b) ──
// Renders branded 1200x630 PNG social cards via resvg-wasm. KV-cached by the worker.
import { initWasm, Resvg } from "./resvg_glue.mjs";
import RESVG_WASM from "./resvg.wasm";
import { FONT_REG_B64, FONT_BOLD_B64, b64ToU8 } from "./og_fonts.mjs";

let _ready = null;
let _fonts = null;
async function ensure() {
  if (!_ready) _ready = initWasm(RESVG_WASM).catch((e) => { _ready = null; throw e; });
  await _ready;
  if (!_fonts) _fonts = [b64ToU8(FONT_REG_B64), b64ToU8(FONT_BOLD_B64)];
  return _fonts;
}

const BG = "#0b0d10", FG = "#e8eaed", MUTE = "#9aa0a6", ACCENT = "#7cc4ff", WELL = "#14181d", GOLD = "#f5c518";

function escXml(s) {
  return String(s == null ? "" : s).replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]));
}
function fit(s, max) { s = String(s || ""); return [...s].length > max ? [...s].slice(0, max - 1).join("") + "\u2026" : s; }

async function posterData(url) {
  if (!url) return "";
  try {
    const r = await fetch(url, { cf: { cacheTtl: 86400, cacheEverything: true } });
    if (!r.ok) return "";
    const ct = r.headers.get("content-type") || "image/jpeg";
    const buf = new Uint8Array(await r.arrayBuffer());
    let bin = ""; const CH = 0x8000;
    for (let i = 0; i < buf.length; i += CH) bin += String.fromCharCode.apply(null, buf.subarray(i, i + CH));
    return "data:" + ct + ";base64," + btoa(bin);
  } catch (_) { return ""; }
}

function routeSvg({ emoji, title, desc, heroData }) {
  const heroBlock = heroData
    ? `<clipPath id="r"><rect x="64" y="95" width="280" height="420" rx="14"/></clipPath>
       <image x="64" y="95" width="280" height="420" href="${heroData}" preserveAspectRatio="xMidYMid slice" clip-path="url(#r)"/>
       <rect x="64" y="95" width="280" height="420" rx="14" fill="none" stroke="#2a2f36" stroke-width="2"/>`
    : `<rect x="64" y="95" width="280" height="420" rx="14" fill="${WELL}"/>
       <text x="204" y="330" fill="${MUTE}" font-family="DejaVu Sans" font-size="120" text-anchor="middle">\u{1F3AC}</text>`;
  const tx = 392;
  const words = String(desc || "").split(/\s+/);
  let l1 = "", l2 = "";
  for (const w of words) { if ([...l1].length < 38) l1 += (l1 ? " " : "") + w; else if ([...l2].length < 40) l2 += (l2 ? " " : "") + w; }
  if ([...l2].length >= 40) l2 = fit(l2, 40);
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0e1116"/><stop offset="1" stop-color="#0b0d10"/></linearGradient></defs>
<rect width="1200" height="630" fill="url(#g)"/>
${heroBlock}
<text x="${tx}" y="170" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="30">${escXml(emoji)} Blueboxd</text>
<text x="${tx}" y="270" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="58">${escXml(fit(title, 26))}</text>
<text x="${tx}" y="340" fill="${MUTE}" font-family="DejaVu Sans" font-size="30">${escXml(l1)}</text>
<text x="${tx}" y="382" fill="${MUTE}" font-family="DejaVu Sans" font-size="30">${escXml(l2)}</text>
<rect x="${tx}" y="440" width="180" height="56" rx="28" fill="${ACCENT}"/>
<text x="${tx + 90}" y="477" fill="#04121f" font-family="DejaVu Sans" font-weight="700" font-size="26" text-anchor="middle">Watch free \u2192</text>
<text x="${tx}" y="545" fill="${ACCENT}" font-family="DejaVu Sans" font-size="26">blueboxd.com</text>
</svg>`;
}

function gridSvg({ title, sub, datas }) {
  // portrait poster cells (2:3) in a 2x2 block on the right
  const PW = 158, PH = 234, GAP = 26;
  const gx = 1200 - 60 - (PW*2 + GAP);   // right margin 60
  const gy = (630 - (PH*2 + GAP)) / 2;   // vertically centered
  const cells = [[gx, gy], [gx+PW+GAP, gy], [gx, gy+PH+GAP], [gx+PW+GAP, gy+PH+GAP]];
  let imgs = "";
  for (let i = 0; i < 4; i++) {
    const [x, y] = cells[i]; const d = datas[i];
    if (d) imgs += `<clipPath id="c${i}"><rect x="${x}" y="${y}" width="${PW}" height="${PH}" rx="10"/></clipPath>
      <image x="${x}" y="${y}" width="${PW}" height="${PH}" href="${d}" preserveAspectRatio="xMidYMid slice" clip-path="url(#c${i})"/>
      <rect x="${x}" y="${y}" width="${PW}" height="${PH}" rx="10" fill="none" stroke="#2a2f36"/>`;
    else imgs += `<rect x="${x}" y="${y}" width="${PW}" height="${PH}" rx="10" fill="${WELL}"/>
      <text x="${x+PW/2}" y="${y+PH/2}" fill="${MUTE}" font-family="DejaVu Sans" font-size="40" text-anchor="middle">\u{1F3AC}</text>`;
  }
  // left text column: x=70, max width up to the grid (gx-90)
  const subLines = wrapText(sub, 22).slice(0, 3);  // wrap, max 3 lines
  let subTspans = subLines.map((ln, i) => `<text x="70" y="${300 + i*38}" fill="${MUTE}" font-family="DejaVu Sans" font-size="27">${escXml(ln)}</text>`).join("\n");
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="1200" height="630" fill="${BG}"/>
<text x="70" y="160" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="30">\u{1F4D3} Blueboxd</text>
<text x="70" y="246" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="58">${escXml(fit(title, 14))}</text>
${subTspans}
<text x="70" y="556" fill="${ACCENT}" font-family="DejaVu Sans" font-size="26">blueboxd.com</text>
${imgs}
</svg>`;
}
// simple greedy word-wrapper to N chars/line
function wrapText(s, n) {
  const words = String(s||"").split(/\s+/); const lines=[]; let cur="";
  for (const w of words) {
    if ((cur + " " + w).trim().length > n) { if (cur) lines.push(cur); cur = w; }
    else cur = (cur ? cur+" " : "") + w;
  }
  if (cur) lines.push(cur);
  return lines;
}

// ── Letterboxd-beating "last four watched" card ──────────────────────────────
// 4 portrait posters in a row + per-film star ratings + Blueboxd branding + handle.
// Our edges over Letterboxd: branding, handle, validator-correct posters, and the
// post itself keeps a clickable link (their image is a dead-end).
function starRow(cx, y, stars10) {
  // stars10 = 0..10 (half-star granularity). Render 5 stars, gold filled + half.
  if (stars10 == null) return "";
  const full = Math.floor(stars10 / 2), half = (stars10 % 2) === 1;
  let out = "", sx = cx - (5 * 26) / 2 + 13;
  for (let i = 0; i < 5; i++) {
    const filled = i < full, isHalf = i === full && half;
    const col = (filled || isHalf) ? "#f5c518" : "#3a4048";
    // simple star glyph
    out += `<text x="${sx + i*26}" y="${y}" fill="${col}" font-family="DejaVu Sans" font-size="30" text-anchor="middle">\u2605</text>`;
    if (isHalf) { // overlay left-half gold via clip
      out += `<text x="${sx + i*26}" y="${y}" fill="#f5c518" font-family="DejaVu Sans" font-size="30" text-anchor="middle" clip-path="url(#halfclip${i})">\u2605</text>`;
    }
  }
  return out;
}
function diaryRowSvg({ handle, films }) {
  // films: [{data, title, year, stars}] up to 4
  const W = 1200, H = 630;
  const PW = 232, PH = 348, GAP = 36;
  const rowW = PW*4 + GAP*3;
  const startX = (W - rowW) / 2;
  const topY = 150;
  let cells = "", clips = "";
  for (let i = 0; i < 4; i++) {
    const x = startX + i*(PW+GAP), y = topY;
    const f = films[i];
    if (f && f.data) {
      cells += `<clipPath id="pc${i}"><rect x="${x}" y="${y}" width="${PW}" height="${PH}" rx="14"/></clipPath>
        <image x="${x}" y="${y}" width="${PW}" height="${PH}" href="${f.data}" preserveAspectRatio="xMidYMid slice" clip-path="url(#pc${i})"/>
        <rect x="${x}" y="${y}" width="${PW}" height="${PH}" rx="14" fill="none" stroke="#2a2f36" stroke-width="1.5"/>`;
    } else {
      cells += `<rect x="${x}" y="${y}" width="${PW}" height="${PH}" rx="14" fill="${WELL}"/>
        <text x="${x+PW/2}" y="${y+PH/2+18}" fill="${MUTE}" font-family="DejaVu Sans" font-size="60" text-anchor="middle">\u{1F3AC}</text>`;
    }
    // star row under poster
    if (f && f.stars != null) cells += starRow(x + PW/2, y + PH + 46, f.stars);
  }
  const handleTxt = handle && handle.indexOf(":") < 0 ? "@" + handle.replace(/\.bsky\.social$/,"") : "";
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
<linearGradient id="bgg" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#0e1116"/><stop offset="1" stop-color="#080a0d"/>
</linearGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#bgg)"/>
<text x="${startX}" y="92" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="38">\u{1F4D3} Blueboxd \u00B7 <tspan fill="${MUTE}" font-weight="400" font-size="34">Last four watched</tspan></text>
${cells}
<text x="${startX}" y="595" fill="${MUTE}" font-family="DejaVu Sans" font-size="30">${escXml(handleTxt)}</text>
<text x="${W - 70}" y="595" fill="${ACCENT}" font-family="DejaVu Sans" font-size="30" text-anchor="end">blueboxd.com</text>
</svg>`;
}
// ── Stats card (Letterboxd shares NO stats on Bluesky — pure win) ────────────
function miniBars(x, y, w, rows, accent) {
  if (!rows.length) return "";
  const max = Math.max(1, ...rows.map(r => r.n));
  const rh = 36, bx = x + 92, bw = w - 92 - 56;
  let out = "";
  rows.forEach((r, i) => {
    const ry = y + i*rh;
    const fw = Math.max(6, Math.round(r.n / max * bw));
    out += `<text x="${x}" y="${ry+22}" fill="${MUTE}" font-family="DejaVu Sans" font-size="26">${escXml(r.label)}</text>
      <rect x="${bx}" y="${ry+4}" width="${bw}" height="22" rx="11" fill="#1b2027"/>
      <rect x="${bx}" y="${ry+4}" width="${fw}" height="22" rx="11" fill="${accent}"/>
      <text x="${bx+bw+18}" y="${ry+22}" fill="${FG}" font-family="DejaVu Sans" font-size="24">${r.n}</text>`;
  });
  return out;
}
function statsSvg({ handle, watched, reviews, avg, decades, ratings }) {
  const W = 1200, H = 630;
  const handleTxt = handle && handle.indexOf(":") < 0 ? "@" + handle.replace(/\.bsky\.social$/,"") : "your";
  const tiles = [
    { ic:"\u{1F3AC}", n: watched, l:"watched" },
    { ic:"\u270D\uFE0F", n: reviews, l:"reviews" },
    { ic:"\u2B50", n: (avg && avg>0 ? Number(avg).toFixed(1) : "\u2013"), l:"avg rating" },
  ];
  const tW = 300, tH = 150, tGap = 30, tX0 = 70, tY = 150;
  let tilesSvg = "";
  tiles.forEach((t, i) => {
    const x = tX0 + i*(tW+tGap);
    tilesSvg += `<rect x="${x}" y="${tY}" width="${tW}" height="${tH}" rx="18" fill="${WELL}"/>
      <text x="${x+tW/2}" y="${tY+46}" fill="${MUTE}" font-family="DejaVu Sans" font-size="34" text-anchor="middle">${t.ic}</text>
      <text x="${x+tW/2}" y="${tY+106}" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="56" text-anchor="middle">${escXml(String(t.n))}</text>
      <text x="${x+tW/2}" y="${tY+136}" fill="${MUTE}" font-family="DejaVu Sans" font-size="24" text-anchor="middle">${t.l}</text>`;
  });
  const colY = 360;
  const decRows = (decades||[]).slice(0,5).map(d => ({ label: d.k+"s", n: d.n }));
  const ratRows = [];
  for (let st=5; st>=1; st--) ratRows.push({ label: "\u2605".repeat(st), n: (ratings && ratings[st-1]) || 0 });
  const decBlock = decRows.length ? `<text x="70" y="${colY}" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="32">\u{1F4C5} By decade</text>${miniBars(70, colY+24, 520, decRows, ACCENT)}` : "";
  const hasRat = ratRows.some(r=>r.n>0);
  const ratBlock = hasRat ? `<text x="650" y="${colY}" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="32">\u2B50 Ratings</text>${miniBars(650, colY+24, 480, ratRows, "#f5c518")}` : "";
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="sbg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e1116"/><stop offset="1" stop-color="#080a0d"/></linearGradient></defs>
<rect width="${W}" height="${H}" fill="url(#sbg)"/>
<text x="70" y="92" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="38">\u{1F4CA} Blueboxd \u00B7 <tspan fill="${MUTE}" font-weight="400" font-size="34">${escXml(handleTxt)} film stats</tspan></text>
${tilesSvg}
${decBlock}
${ratBlock}
<text x="${W-70}" y="610" fill="${ACCENT}" font-family="DejaVu Sans" font-size="26" text-anchor="end">blueboxd.com/stats</text>
</svg>`;
}
export async function renderStatsCard(opts) {
  const fonts = await ensure();
  const svg = statsSvg({
    handle: opts.handle || "",
    watched: opts.watched || 0,
    reviews: opts.reviews || 0,
    avg: opts.avg || 0,
    decades: opts.decades || [],
    ratings: opts.ratings || [0,0,0,0,0],
  });
  return rasterize(svg, fonts);
}

export async function renderDiaryCard(opts) {
  const fonts = await ensure();
  const films = (opts.films || []).slice(0, 4);
  const datas = await Promise.all(films.map(f => posterData(f.poster)));
  const merged = films.map((f, i) => ({ data: datas[i], title: f.title, year: f.year, stars: (f.stars==null?null:f.stars) }));
  while (merged.length < 4) merged.push(null);
  const svg = diaryRowSvg({ handle: opts.handle || "", films: merged });
  return rasterize(svg, fonts);
}

// ── Shared primitives for the new card family ──────────────────────────────
function footer(handleTxt, domainTxt) {
  const left = handleTxt ? `<text x="70" y="595" fill="${MUTE}" font-family="DejaVu Sans" font-size="30">${escXml(handleTxt)}</text>` : "";
  return `${left}<text x="${1200-70}" y="595" fill="${ACCENT}" font-family="DejaVu Sans" font-size="30" text-anchor="end">${escXml(domainTxt||"blueboxd.com")}</text>`;
}
function fmtHandle(handle) {
  return handle && handle.indexOf(":") < 0 ? "@" + handle.replace(/\.bsky\.social$/,"") : "";
}
function wrapLines(s, max, maxLines) {
  s = String(s||"").replace(/\s+/g," ").trim();
  const words = s.split(" "); const lines=[]; let cur="";
  for (const w of words) {
    if ((cur+" "+w).trim().length > max) { if(cur) lines.push(cur); cur=w; if(lines.length>=maxLines){break;} }
    else cur=(cur?cur+" ":"")+w;
  }
  if (cur && lines.length<maxLines) lines.push(cur);
  if (lines.length===maxLines && words.join(" ").length>lines.join(" ").length) lines[maxLines-1]=fit(lines[maxLines-1]+"\u2026",max);
  return lines;
}
function bgDefs() {
  return `<defs>
<linearGradient id="bgg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e1116"/><stop offset="1" stop-color="#080a0d"/></linearGradient>
<linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0b0d10" stop-opacity="0.96"/><stop offset="0.55" stop-color="#0b0d10" stop-opacity="0.72"/><stop offset="1" stop-color="#0b0d10" stop-opacity="0.30"/></linearGradient>
<linearGradient id="scrimv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b0d10" stop-opacity="0.15"/><stop offset="0.6" stop-color="#0b0d10" stop-opacity="0.78"/><stop offset="1" stop-color="#0b0d10" stop-opacity="0.97"/></linearGradient>
</defs>`;
}

// ── Movie / review card: poster left, meta right ───────────────────────────
function movieSvg({ handle, data, title, year, stars10, snippet, reviewed }) {
  const W=1200,H=630;
  const PX=70, PY=120, PW=300, PH=450;
  const rx=PX+PW+56; // right column x
  const head = reviewed ? "Reviewed on Blueboxd" : "Now on Blueboxd";
  const posterCell = data
    ? `<clipPath id="mp"><rect x="${PX}" y="${PY}" width="${PW}" height="${PH}" rx="16"/></clipPath>
       <image x="${PX}" y="${PY}" width="${PW}" height="${PH}" href="${data}" preserveAspectRatio="xMidYMid slice" clip-path="url(#mp)"/>
       <rect x="${PX}" y="${PY}" width="${PW}" height="${PH}" rx="16" fill="none" stroke="#2a2f36" stroke-width="1.5"/>`
    : `<rect x="${PX}" y="${PY}" width="${PW}" height="${PH}" rx="16" fill="${WELL}"/><text x="${PX+PW/2}" y="${PY+PH/2+20}" fill="${MUTE}" font-family="DejaVu Sans" font-size="70" text-anchor="middle">\u{1F3AC}</text>`;
  const titleLines = wrapLines(title + (year?` (${year})`:""), 22, 3);
  let ty = PY+70;
  let titleSvg="";
  titleLines.forEach((ln,i)=>{ titleSvg += `<text x="${rx}" y="${ty+i*64}" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="54">${escXml(ln)}</text>`; });
  const afterTitle = ty + titleLines.length*64 + 6;
  let midSvg="";
  if (reviewed && stars10!=null) {
    // left-anchored star row
    let sx=rx+16; let sr="";
    const full=Math.floor(stars10/2), half=(stars10%2)===1;
    for(let i=0;i<5;i++){const col=(i<full||(i===full&&half))?"#f5c518":"#3a4048"; sr+=`<text x="${sx+i*46}" y="${afterTitle+30}" fill="${col}" font-family="DejaVu Sans" font-size="46" text-anchor="middle">\u2605</text>`;}
    midSvg=sr;
  }
  const snipY = afterTitle + (reviewed?70:20);
  let snipSvg="";
  if (snippet) {
    const lines=wrapLines(snippet, 40, 3);
    lines.forEach((ln,i)=>{ snipSvg+=`<text x="${rx}" y="${snipY+i*40}" fill="${MUTE}" font-family="DejaVu Sans" font-size="30">${escXml(reviewed?('\u201C'+ln+(i===lines.length-1?'\u201D':'')):ln)}</text>`; });
  }
  // CTA pill
  const ctaY=PY+PH-6;
  const cta=`<rect x="${rx}" y="${ctaY-34}" width="356" height="52" rx="26" fill="${GOLD}"/><text x="${rx+178}" y="${ctaY}" fill="#1a1400" font-family="DejaVu Sans" font-weight="700" font-size="28" text-anchor="middle">\u25B6 Watch free on Blueboxd</text>`;
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
${bgDefs()}
<rect width="${W}" height="${H}" fill="url(#bgg)"/>
<text x="70" y="80" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="36">\u{1F3AC} Blueboxd \u00B7 <tspan fill="${MUTE}" font-weight="400" font-size="32">${escXml(head)}</tspan></text>
${posterCell}
${titleSvg}
${midSvg}
${snipSvg}
${cta}
${footer(fmtHandle(handle),"blueboxd.com")}
</svg>`;
}

// ── Now-watching card ──────────────────────────────────────────────────────
function watchingSvg({ handle, data, title, year, note, progress }) {
  const W=1200,H=630;
  const PX=70,PY=120,PW=300,PH=450, rx=PX+PW+56;
  const posterCell = data
    ? `<clipPath id="wp"><rect x="${PX}" y="${PY}" width="${PW}" height="${PH}" rx="16"/></clipPath>
       <image x="${PX}" y="${PY}" width="${PW}" height="${PH}" href="${data}" preserveAspectRatio="xMidYMid slice" clip-path="url(#wp)"/>
       <rect x="${PX}" y="${PY}" width="${PW}" height="${PH}" rx="16" fill="none" stroke="#2a2f36" stroke-width="1.5"/>`
    : `<rect x="${PX}" y="${PY}" width="${PW}" height="${PH}" rx="16" fill="${WELL}"/><text x="${PX+PW/2}" y="${PY+PH/2+20}" fill="${MUTE}" font-family="DejaVu Sans" font-size="70" text-anchor="middle">\u{1F3AC}</text>`;
  const titleLines = wrapLines(title + (year?` (${year})`:""), 22, 3);
  let ty=PY+74, titleSvg="";
  titleLines.forEach((ln,i)=>{ titleSvg+=`<text x="${rx}" y="${ty+i*62}" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="52">${escXml(ln)}</text>`; });
  const afterTitle=ty+titleLines.length*62+8;
  let noteSvg="";
  if (note){ const lines=wrapLines(note,40,3); lines.forEach((ln,i)=>{ noteSvg+=`<text x="${rx}" y="${afterTitle+10+i*40}" fill="${MUTE}" font-family="DejaVu Sans" font-size="30">${escXml(ln)}</text>`; }); }
  // progress bar
  let progSvg="";
  if (progress!=null && progress>0){ const bw=356, pw=Math.max(8,Math.round(Math.min(1,progress)*bw)); const py=PY+PH-50;
    progSvg=`<rect x="${rx}" y="${py}" width="${bw}" height="14" rx="7" fill="#1b2027"/><rect x="${rx}" y="${py}" width="${pw}" height="14" rx="7" fill="${GOLD}"/><text x="${rx}" y="${py-12}" fill="${MUTE}" font-family="DejaVu Sans" font-size="24">${Math.round(progress*100)}% in</text>`; }
  const badge=`<rect x="${rx}" y="${PY-34}" width="220" height="46" rx="23" fill="${GOLD}"/><text x="${rx+110}" y="${PY-2}" fill="#1a1400" font-family="DejaVu Sans" font-weight="700" font-size="26" text-anchor="middle">\u25B6 Now watching</text>`;
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
${bgDefs()}
<rect width="${W}" height="${H}" fill="url(#bgg)"/>
<text x="70" y="80" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="36">\u{1F3AC} Blueboxd</text>
${posterCell}
${badge}
${titleSvg}
${noteSvg}
${progSvg}
${footer(fmtHandle(handle),"blueboxd.com")}
</svg>`;
}

// ── Party card: scrim poster background + live stat row ─────────────────────
function statChip(x, y, n, label) {
  return `<text x="${x}" y="${y}" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="46">${escXml(String(n))}</text><text x="${x}" y="${y+30}" fill="${MUTE}" font-family="DejaVu Sans" font-size="24">${escXml(label)}</text>`;
}
function partySvg({ handle, data, title, year, whenStr, live, going, reactions, host, theme }) {
  const W=1200,H=630;
  const bg = data
    ? `<clipPath id="bgc"><rect width="${W}" height="${H}"/></clipPath><image x="0" y="0" width="${W}" height="${H}" href="${data}" preserveAspectRatio="xMidYMid slice" clip-path="url(#bgc)"/><rect width="${W}" height="${H}" fill="url(#scrim)"/><rect width="${W}" height="${H}" fill="url(#scrimv)"/>`
    : `<rect width="${W}" height="${H}" fill="url(#bgg)"/>`;
  const badge = live
    ? `<rect x="70" y="118" width="150" height="48" rx="24" fill="#e23b3b"/><circle cx="98" cy="142" r="7" fill="#fff"/><text x="118" y="151" fill="#fff" font-family="DejaVu Sans" font-weight="700" font-size="26">LIVE</text>`
    : `<rect x="70" y="118" width="210" height="48" rx="24" fill="#1b2027"/><text x="86" y="151" fill="${GOLD}" font-family="DejaVu Sans" font-weight="700" font-size="26">\u23F0 UPCOMING</text>`;
  const titleLines = wrapLines(title + (year?` (${year})`:""), 30, 2);
  let ty=300, titleSvg="";
  titleLines.forEach((ln,i)=>{ titleSvg+=`<text x="70" y="${ty+i*66}" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="58">${escXml(ln)}</text>`; });
  const afterTitle=ty+titleLines.length*66;
  const whenSvg = whenStr ? `<text x="70" y="${afterTitle+8}" fill="${MUTE}" font-family="DejaVu Sans" font-size="30">${escXml((theme?theme+" \u00B7 ":"")+whenStr)}</text>` : "";
  // stat row
  const sy=afterTitle+90;
  let stats=`${statChip(70, sy, going, going===1?"going":"going")}`;
  stats+=`${statChip(260, sy, reactions, reactions===1?"reaction":"reactions")}`;
  const hostTxt = fmtHandle(host);
  const hostSvg = hostTxt ? `<text x="500" y="${sy}" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="30">${escXml(hostTxt)}</text><text x="500" y="${sy+30}" fill="${MUTE}" font-family="DejaVu Sans" font-size="24">host</text>` : "";
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
${bgDefs()}
${bg}
<text x="70" y="80" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="36">\u{1F4FA} Blueboxd \u00B7 <tspan fill="${MUTE}" font-weight="400" font-size="32">Watch Party</tspan></text>
${badge}
${titleSvg}
${whenSvg}
${stats}
${hostSvg}
${footer(fmtHandle(handle),"blueboxd.com")}
</svg>`;
}

// ── Party aggregate stats card ─────────────────────────────────────────────
function partyStatsSvg({ handle, hosted, attendees, reactions, biggest, labels }) {
  const W=1200,H=630;
  const handleTxt = fmtHandle(handle) || "your";
  const L = labels || { a:"parties hosted", b:"film-lovers joined", c:"live reactions" };
  const tiles=[
    { ic:"\u{1F4FA}", n:hosted, l:L.a },
    { ic:"\u{1F465}", n:attendees, l:L.b },
    { ic:"\u{1F4AC}", n:reactions, l:L.c },
  ];
  const tW=336,tH=190,tGap=30,tX0=70,tY=170;
  let tilesSvg="";
  tiles.forEach((t,i)=>{ const x=tX0+i*(tW+tGap);
    tilesSvg+=`<rect x="${x}" y="${tY}" width="${tW}" height="${tH}" rx="20" fill="${WELL}"/>
      <text x="${x+tW/2}" y="${tY+58}" fill="${MUTE}" font-family="DejaVu Sans" font-size="40" text-anchor="middle">${t.ic}</text>
      <text x="${x+tW/2}" y="${tY+134}" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="68" text-anchor="middle">${escXml(String(t.n))}</text>
      <text x="${x+tW/2}" y="${tY+172}" fill="${MUTE}" font-family="DejaVu Sans" font-size="26" text-anchor="middle">${escXml(t.l)}</text>`; });
  const big = biggest && biggest.title ? `<text x="70" y="470" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="34">\u{1F3C6} Biggest room</text><text x="70" y="514" fill="${MUTE}" font-family="DejaVu Sans" font-size="30">${escXml(fit(biggest.title,40))}${biggest.going?` \u00B7 ${biggest.going} joined`:""}</text>` : "";
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
${bgDefs()}
<rect width="${W}" height="${H}" fill="url(#bgg)"/>
<text x="70" y="92" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="38">\u{1F3AC} Blueboxd \u00B7 <tspan fill="${MUTE}" font-weight="400" font-size="34">${escXml(handleTxt)} watch-party stats</tspan></text>
${tilesSvg}
${big}
<text x="${W-70}" y="610" fill="${ACCENT}" font-family="DejaVu Sans" font-size="26" text-anchor="end">blueboxd.com/parties</text>
</svg>`;
}

export async function renderMovieCard(opts) {
  const fonts = await ensure();
  const data = await posterData(opts.poster);
  const svg = movieSvg({ handle:opts.handle||"", data, title:opts.title||"", year:opts.year||"", stars10:(opts.stars10==null?null:opts.stars10), snippet:opts.snippet||"", reviewed:!!opts.reviewed });
  return rasterize(svg, fonts);
}
export async function renderWatchingCard(opts) {
  const fonts = await ensure();
  const data = await posterData(opts.poster);
  const svg = watchingSvg({ handle:opts.handle||"", data, title:opts.title||"", year:opts.year||"", note:opts.note||"", progress:(opts.progress==null?null:opts.progress) });
  return rasterize(svg, fonts);
}
export async function renderPartyCard(opts) {
  const fonts = await ensure();
  const data = await posterData(opts.poster);
  const svg = partySvg({ handle:opts.handle||"", data, title:opts.title||"", year:opts.year||"", whenStr:opts.whenStr||"", live:!!opts.live, going:opts.going||0, reactions:opts.reactions||0, host:opts.host||"", theme:opts.theme||"" });
  return rasterize(svg, fonts);
}
export async function renderPartyStatsCard(opts) {
  const fonts = await ensure();
  const svg = partyStatsSvg({ handle:opts.handle||"", hosted:opts.hosted||0, attendees:opts.attendees||0, reactions:opts.reactions||0, biggest:opts.biggest||null, labels:opts.labels||null });
  return rasterize(svg, fonts);
}

function leaderboardSvg({ rows, weekLabel }) {
  const W = 1200, H = 630;
  const list = (rows || []).slice(0, 8);
  const rowH = 56, x0 = 70, y0 = 165, listW = W - 140;
  let rowsSvg = "";
  list.forEach((r, i) => {
    const y = y0 + i * rowH;
    const medal = r.rank === 1 ? "\u{1F947}" : r.rank === 2 ? "\u{1F948}" : r.rank === 3 ? "\u{1F949}" : "";
    const rankClr = r.rank <= 3 ? GOLD : MUTE;
    const handleTxt = "@" + String(r.handle || "").replace(/\.bsky\.social$/, "");
    const sub = (r.watched||0) + " watched \u00B7 " + (r.reviews||0) + " reviews \u00B7 " + (r.decades||0) + " decades";
    if (i % 2 === 0) rowsSvg += `<rect x="${x0-14}" y="${y-38}" width="${listW+28}" height="${rowH-8}" rx="12" fill="${WELL}" opacity="0.55"/>`;
    rowsSvg += `<text x="${x0}" y="${y}" fill="${rankClr}" font-family="DejaVu Sans" font-weight="700" font-size="34" text-anchor="middle">${medal || ("#"+r.rank)}</text>`;
    rowsSvg += `<text x="${x0+70}" y="${y-4}" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="30">${escXml(handleTxt)}</text>`;
    rowsSvg += `<text x="${x0+70}" y="${y+22}" fill="${MUTE}" font-family="DejaVu Sans" font-size="20">${escXml(sub)}</text>`;
    rowsSvg += `<text x="${W-70}" y="${y}" fill="${ACCENT}" font-family="DejaVu Sans" font-weight="700" font-size="34" text-anchor="end">${r.score}</text>`;
  });
  const wl = weekLabel ? `<tspan fill="${MUTE}" font-weight="400" font-size="30"> \u00B7 ${escXml(weekLabel)}</tspan>` : "";
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="lbg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e1116"/><stop offset="1" stop-color="#080a0d"/></linearGradient></defs>
<rect width="${W}" height="${H}" fill="url(#lbg)"/>
<text x="70" y="92" fill="${FG}" font-family="DejaVu Sans" font-weight="700" font-size="40">\u{1F3C6} Blueboxd Leaderboard${wl}</text>
<text x="70" y="128" fill="${MUTE}" font-family="DejaVu Sans" font-size="24">Top cinephiles \u2014 watched, reviewed &amp; explored, all on Bluesky</text>
${rowsSvg}
<text x="${W-70}" y="610" fill="${ACCENT}" font-family="DejaVu Sans" font-size="26" text-anchor="end">blueboxd.com/leaderboard</text>
</svg>`;
}
export async function renderLeaderboardCard(opts) {
  const fonts = await ensure();
  const svg = leaderboardSvg({ rows: opts.rows || [], weekLabel: opts.weekLabel || "" });
  return rasterize(svg, fonts);
}

async function rasterize(svg, fonts) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
    background: BG,
    font: { fontBuffers: fonts, defaultFontFamily: "DejaVu Sans", loadSystemFonts: false }
  });
  return resvg.render().asPng();
}

export async function renderRouteCard(opts) {
  const fonts = await ensure();
  const heroData = await posterData(opts.poster);
  const svg = routeSvg({ emoji: opts.emoji || "\u{1F3AC}", title: opts.title || "Blueboxd", desc: opts.desc || "", heroData });
  return rasterize(svg, fonts);
}

export async function renderGridCard(opts) {
  const fonts = await ensure();
  const posters = (opts.posters || []).slice(0, 4);
  const datas = await Promise.all([0, 1, 2, 3].map((i) => posterData(posters[i])));
  const svg = gridSvg({ title: opts.title || "My Film Diary", sub: opts.sub || "Recently watched on Blueboxd", datas });
  return rasterize(svg, fonts);
}