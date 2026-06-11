<div align="center">

# 📺 Blueboxd

### Free public-domain cinema, with a film diary that lives in *your* Bluesky account.

**A Letterboxd-style social layer for classic film — built on the AT Protocol.**
No accounts to create. No ads. No tracking. No video hosted by us.

[**Live → blueboxd.com**](https://blueboxd.com) · [Mirror → cineclub.osintnet.uk](https://cineclub.osintnet.uk) · [@blueboxd.bsky.social](https://bsky.app/profile/blueboxd.bsky.social)

</div>

---

## What is this?

**Blueboxd** streams hand-curated public-domain films straight from the [Internet Archive](https://archive.org) — film noir, classic horror, golden-age comedy, sci-fi, and more — and pairs them with a **Letterboxd-style social layer that writes to your own Bluesky repo.**

Your watch diary, ratings, reviews, and favorites aren't locked in our database. They're stored as records in **your** Personal Data Server via the AT Protocol — fully portable, yours forever, readable by any atproto app. We host **zero video**: every stream comes directly from archive.org's public-domain collection.

It runs as a **single Cloudflare Worker** at the edge. One file, no build step, no framework.

> **One differentiator:** your film identity is data you own — not a profile we rent to you.

---

## Features

- 🎞️ **Curated public-domain catalog** — 6 hand-tuned channels (Film Noir, Classic Horror, Sci-Fi, Golden-Age Comedy, Carnival & Circus, Prison Block) sourced live from the Internet Archive
- 🎭 **Browse by star & director** — TMDB-portrait rails for 40+ classic-era names (Bogart, Stanwyck, Lang, Wilder...)
- 📔 **Portable film diary** — watches, ratings, and reviews written to **your** Bluesky PDS via AT Protocol
- 🍿 **The club is watching** — a live community feed of what members are watching, built from public atproto records
- 🔴 **Watch-party discovery** — surfaces real #TCMParty / #FilmSky / #NoirAlley threads buzzing on Bluesky right now (read-only — we surface the buzz, we never spam it)
- 🦋 **Bluesky OAuth** — log in with the account you already have; no new password
- ⚖️ **Legal-first** — clickwrap consent, DMCA takedown flow, public-domain-only sourcing, observability for playback health
- ⚡ **Edge-native** — a single Cloudflare Worker, D1 for telemetry, KV for caching. Cold-starts in milliseconds.

---

## Architecture

```
                    +-----------------------------+
   Bluesky user --->|   Cloudflare Worker (edge)  |
   (OAuth login)    |   cineclub_bundled.js       |
                    |                             |
                    |  - SPA shell + client render|
                    |  - /api/home   catalog rails|
                    |  - /api/detail  stream lookup|
                    |  - /api/discovery party feed|
                    |  - OAuth + session handling |
                    +------+--------------+-------+
                           |              |
              +------------+              +-------------+
              v                                         v
   +--------------------+                  +------------------------+
   |  Internet Archive  |                  |  Your Bluesky PDS      |
   |  (public-domain    |                  |  (diary / ratings /    |
   |   video streams)   |                  |   reviews -- you own)  |
   +--------------------+                  +------------------------+
              |                                         |
              v                                         v
   +--------------------+                  +------------------------+
   |  TMDB (portraits + |                  |  D1 + KV (telemetry,   |
   |   poster metadata) |                  |   caching, consent log)|
   +--------------------+                  +------------------------+
```

**No origin server. No video on our infra. Your social graph is yours.**

---

## Self-hosting

Blueboxd is a single Cloudflare Worker. To run your own instance:

```bash
git clone https://github.com/indicaindependent/blueboxd.git
cd blueboxd
npm i -g wrangler
cp wrangler.example.toml wrangler.toml   # then fill in your IDs
```

**1. Create the bindings** (KV + D1):

```bash
wrangler kv namespace create CC_KV
wrangler d1 create blueboxd-social
```

Paste the returned IDs into `wrangler.toml`.

**2. Set your owner identity** -- edit the two placeholders near the top of `cineclub_bundled.js`:

```js
var OWNER_DID = "did:plc:YOUR_OWNER_DID";   // your Bluesky host/owner account DID
var HOST_PDS  = "https://YOUR-PDS.host.bsky.network";  // your PDS endpoint
```

**3. Set secrets** (never commit these):

```bash
wrangler secret put BLUEBOXD_APP_PASSWORD   # host account app-password
wrangler secret put SESSION_SECRET
wrangler secret put CLIENT_PRIVATE_JWK      # OAuth client key
# optional alerting:
wrangler secret put SCRAMBLEMEBOT_TOKEN
wrangler secret put PETE_CHAT_ID
```

**4. Deploy:**

```bash
wrangler deploy
```

That's it -- no build pipeline, no node_modules in production. The entire app is `cineclub_bundled.js`.

---

## Legal & ethics

Blueboxd streams **only public-domain works** sourced from the Internet Archive. We host no video and store no copyrighted media. A [DMCA takedown flow](https://blueboxd.com/dmca) is built in, and first-visit consent is logged. If you believe something is mis-categorized, use the in-app takedown form.

---

## License

[MIT](LICENSE) (c) Indica Independent / VPDLNY

---

<div align="center">

Part of the **[Indica Independent](https://osintnet.uk)** open-tools stack -- OSINT-grade software for the people Wall Street and Big Tech ignore.

[osintnet.uk](https://osintnet.uk) · [WarHeatMap](https://github.com/indicaindependent/warheatmap) · [Tuck](https://github.com/indicaindependent/tuck) · [Strait Tracker](https://github.com/indicaindependent/straittracker)

*Built at the edge. Owned by you.* 📺

</div>
