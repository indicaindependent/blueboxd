# Blueboxd

**A Bluesky film club for public-domain cinema.** Free, ad-free, and fully portable — your film diary, ratings, and reviews live in *your own* AT Protocol repo, not ours.

> Watch classic public-domain films, log them to your Bluesky identity, host live watch parties, and climb a community leaderboard. No paywalls, no tracking, no separate account.

Live at **[blueboxd.com](https://blueboxd.com)**.

---

## What is this?

Blueboxd is a single [Cloudflare Worker](https://workers.cloudflare.com/) that powers an entire Letterboxd-style film club — plus a retro TV Hub of always-on channels — on top of [Bluesky](https://bsky.app) and the [AT Protocol](https://atproto.com). Films stream directly from the [Internet Archive](https://archive.org) — Blueboxd hosts no video and controls no content.

The twist: **there is no Blueboxd database for your data.** Your diary entries, ratings, reviews, and watchlist are written as records into *your own* atproto repo via OAuth. Delete your account on Blueboxd and you keep everything — it's yours, portable, forever.

## Features

- **Public-domain catalogue** — thousands of vintage films (noir, sci-fi, horror, westerns, musicals…) verified against a real film database and streamed legally from archive.org.
- **atproto-native diary** — ratings, reviews, watchlist, and "in library" all saved to *your* Bluesky repo via OAuth. No password ever touches Blueboxd.
- **Live watch parties** — scheduled group screenings with a countdown hero, RSVP, a synced player that unlocks at showtime, and live reactions mirrored from the Bluesky thread.
- **Leaderboard** — weekly community ranking by films watched, with snapshots.
- **Shareable cards** — every diary, stats, party, and leaderboard view generates a clickable Bluesky link-preview card that drives fans back into the room.
- **Person pages** — browse by star or director with full, de-duplicated filmographies.
- **TV Hub** — a retro broadcast experience: tune into always-on channels (a classic-film channel and a cartoon "Toon Town" channel) that play curated public-domain line-ups like old-school TV, no picking required.

## Architecture

```
                    ┌─────────────────────────────┐
   blueboxd.com ───▶│   Cloudflare Worker          │
                    │   (this repo — worker.js)    │
                    ├─────────────────────────────┤
   archive.org  ◀───┤  • catalogue + streaming     │
   (films)          │  • watch parties + rooms     │
                    │  • TV Hub channels (film/toon) │
                    │  • leaderboard + snapshots   │
   Bluesky /    ◀───┤  • share-card rendering      │
   AT Protocol      │  • OAuth → user's own repo   │──▶ your atproto repo
   (your diary)     └─────────────────────────────┘    (diary, ratings, reviews)
                              │
                    KV  ·  D1 (social index)
```

Everything runs at the edge in one Worker. State lives in Cloudflare KV (caches, sessions) and D1 (the social/watch index) — **never** the user's film data, which is atproto-only.

## Self-hosting

You'll need a Cloudflare account, a Bluesky account to act as the host, and Node.

1. Bind a KV namespace, a D1 database, and your secrets/vars:
   - `OWNER_DID_ENV` — the DID of your host/owner Bluesky account
   - OAuth client config + a host app-password (as Worker secrets, **never** hardcoded)
2. Set `OWNER_DID` / `HOST_HANDLE` in `worker.js` (or via the env var) to your account.
3. Deploy `worker.js` to your Worker and point your domain at it.
4. The `.mjs` helpers post the scheduled cadence cards (Saturday party, weekly leaderboard, diary share).

> **Security note:** all tokens, app-passwords, and OAuth secrets are read from Worker secret bindings. There are no secrets in this source, and there never should be — see [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE) © indicaindependent

---

*Part of the [Indica Independent](https://github.com/indicaindependent) stack. Public-domain cinema, streamed free & legal.*


---

## Support the Mission

This is free, ad-free, independent infrastructure — no VC, no gov funding, no strings. If it served you, a tip keeps it alive and funds the next tool.

[![Donate via SkyGive](https://img.shields.io/badge/Donate_via_SkyGive-8A5CF6?style=for-the-badge&logoColor=white)](https://donate.skygive.app/)
[![Lightning](https://img.shields.io/badge/tips@skygive.app-F7931A?style=for-the-badge&logo=lightning&logoColor=white)](https://donate.skygive.app/)

<sub> Sovereign Lightning + on-chain via SkyGive. Your sats fund uptime, not ads.</sub>
