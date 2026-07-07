// blueboxd_cadence.mjs — OptiPlex-native cadence poster (replaces Base44 automations).
// Builds the URL + human copy for a given cadence slot, then calls blueboxd_card_post.mjs.
// Usage: node blueboxd_cadence.mjs <leaderboard|grid|pick|diary|party>
// Env: BLUEBOXD_APP_PASSWORD (set in your local .env)
// No LLM — pure scripted copy with light rotation so it stays human + varied.

import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const POSTER = join(HERE, "blueboxd_card_post.mjs");
const SITE = "https://blueboxd.com";

const pick = (a) => a[Math.floor(Math.random() * a.length)];

async function jget(path) {
  const r = await fetch(SITE + path, { headers: { "user-agent": "Blueboxd/1.0" } });
  if (!r.ok) throw new Error(path + " -> " + r.status);
  return r.json();
}

function post(url, text) {
  console.log("POSTING:", url, "\n", text);
  const out = execFileSync("node", [POSTER, url, text], {
    env: process.env, encoding: "utf8" });
  console.log(out.trim());
}

// ---------- LEADERBOARD (Mon) ----------
async function leaderboard() {
  let top = [];
  try { const d = await jget("/api/leaderboard"); top = (d.leaders || d.rows || []).slice(0, 3); } catch (_) {}
  const names = top.map((x) => "@" + (x.handle || x.did || "").replace(/^@/, "")).filter(Boolean);
  const champ = names[0] || "the club";
  const intro = pick([
    "🏆 This week's Blueboxd leaderboard — our top cinephiles, ranked by films watched, reviews & decades explored.",
    "🏆 The Blueboxd leaderboard refreshed. Here's who's logging the most public-domain cinema this week.",
    "🏆 Fresh Blueboxd standings — ranked by Cinephile Score across watches, reviews & decades.",
  ]);
  const crown = names.length
    ? `${champ} is wearing the crown right now. ` : "";
  const cta = pick([
    "Climb the board → log a film 🎬",
    "Want in? Start your diary and log a watch 🎬",
    "Catch them — log your next film 🎬",
  ]);
  const text = `${intro}\n\n${crown}${cta}\n\n${SITE}/leaderboard\n\n#Blueboxd #filmsky #letterboxd`;
  post(SITE + "/leaderboard", text);
}

// ---------- WHAT THE CLUB WATCHED grid (Wed) ----------
async function grid() {
  let films = [];
  try { const d = await jget("/api/feed/watching?days=7"); films = (d.films || d.clubWatching || d.items || []).slice(0, 4); } catch (_) {}
  const top = films[0];
  const titles = films.slice(0, 4).map((f) => f && f.title).filter(Boolean);
  let url = SITE + "/genre/noir";
  if (top && (top.filmId || top.id)) url = SITE + "/film/" + encodeURIComponent(top.filmId || top.id);
  const intro = pick([
    "\uD83C\uDF9E\uFE0F What the club watched this week on Blueboxd.",
    "\uD83C\uDF9E\uFE0F This week in Blueboxd \u2014 the films the club kept coming back to.",
    "\uD83C\uDF9E\uFE0F The week's most-watched on Blueboxd. All free, all public domain.",
  ]);
  const list = titles.length ? "\n\nTop of the list: " + titles.slice(0, 3).join(", ") + "." : "";
  const text = intro + list + "\n\nWatch free \u2192 " + url + "\n\n#Blueboxd #filmsky #PublicDomain";
  post(url, text);
}

// ---------- TONIGHT'S PICK single film (Sat) ----------
const PICKS = [
  "detour", "scarlet-street", "the-stranger-1946", "d-o-a", "the-hitch-hiker",
  "house-on-haunted-hill", "carnival-of-souls", "night-of-the-living-dead",
  "metropolis", "nosferatu", "the-cabinet-of-dr-caligari", "the-phantom-of-the-opera",
  "his-girl-friday", "the-general", "charade", "suddenly-1954",
];
async function tonightsPick() {
  // rotate by week number so we don't repeat back-to-back
  const wk = Math.floor(Date.now() / (7 * 864e5)) % PICKS.length;
  let slug = PICKS[wk];
  // resolve to a real film via search so the /film card has a valid id+poster
  let id = null, title = null;
  try {
    const q = slug.replace(/-\d{4}$/, "").replace(/-/g, " ");
    const d = await jget("/api/search?q=" + encodeURIComponent(q));
    const hit = (d.docs || d.results || [])[0];
    if (hit) { id = hit.id || hit.identifier; title = hit.title; }
  } catch (_) {}
  const url = id ? `${SITE}/film/${id}` : `${SITE}/genre/noir`;
  const lead = pick([
    "🎬 Tonight on Blueboxd →",
    "🌙 Saturday night pick →",
    "🍿 Free feature for tonight →",
  ]);
  const t = title ? ` ${title}` : " a public-domain classic";
  const text = `${lead}${t}. Stream it free, no signup, no ads.\n\n${url}\n\n#Blueboxd #filmsky #classicfilm`;
  post(url, text);
}

// ---------- LAST-FOUR-WATCHED diary share (Sun) ----------
async function diary() {
  const url = SITE + "/u/blueboxd.com";
  const intro = pick([
    "\uD83C\uDFAC Our last four on Blueboxd \u2014 here's what the house account has been watching this week.",
    "\uD83C\uDFAC This week's diary on Blueboxd \u2014 the last four films we logged.",
    "\uD83C\uDFAC #LastFourWatched on Blueboxd \u2014 our recent reel. All free, all public domain.",
  ]);
  const text = intro + "\n\nKeep your own film diary, free \u2192 " + url + "\n\n#Blueboxd #filmsky #LastFourWatched";
  post(url, text);
}

const MODE = (process.argv[2] || "").toLowerCase();
const run = { leaderboard, grid, pick: tonightsPick, diary }[MODE];
if (!run) { console.error("usage: node blueboxd_cadence.mjs <leaderboard|grid|pick|diary>"); process.exit(1); }
run().catch((e) => { console.error("CADENCE ERR", e.message); process.exit(1); });
