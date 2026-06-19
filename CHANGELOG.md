# Changelog

All notable changes to Blueboxd are documented here.
This project adheres to [Semantic Versioning](https://semver.org).

## [1.3.0] - 2026-06-19

### Added
- **Watch Parties — Phase A (discovery hero).** Poster-backed hero card with a live countdown, RSVP avatar strip, "I'm in" / "Open room" CTAs, and a recaps-and-replays rail of past parties.
- **Watch Parties — Phase C (room polish).** Host avatar resolved from the host's Bluesky profile, an escalating urgency pill ("Starting soon" → "Showtime in…"), and an ambient empty-state so a fresh room never looks dead.
- **Clickable share cards** across diary, stats, movies, reviews, party, and leaderboard — every shared image is now a tappable Bluesky link-preview that points back to the room.
- **About page** with a values block and mobile-friendly layout.
- **Leaderboard** entry points added to the header and the profile menu.
- **Dark-mode header buttons** — the white header action buttons now invert correctly under the dark theme.

### Changed
- Diary and Stats rebuilt to a Letterboxd-grade interface: interactive star ratings, per-row remove buttons, sort + debounced search, animated count-up metrics, and taste-profile cards.
- Header buttons adopt a featured gradient; the "Club" button is replaced by a featured **Leaderboard** button. "Owned" → "In Library", "Want" → "Watchlist".
- Person pages de-duplicate by TMDb ID and load full filmographies via an archive.org proxy to dodge throttling.
- AI-generated diary/stats share blurbs (Cloudflare Workers AI) replace boilerplate share text.

### Fixed
- "Could not save" write errors caused by a concurrent OAuth token-refresh race.
- Person-page "0 films" bug and blank-poster bug in Recently Watched.

## [1.1.1] - 2026-06-12

### Fixed
- **Genre counts reconciled** — the film count shown beside each category on the homepage now matches the count inside that category's browse page. The homepage previously displayed raw upstream archive hit-counts (e.g. Comedy in the tens of thousands) while the browse page showed the true de-duplicated catalog total. Both now derive from the same `buildRailMaster()` source, so they can never disagree.

### Changed
- **Mobile responsiveness pass** — added a dedicated phone breakpoint (≤640px). The header now wraps cleanly: brand and action buttons share the top row while the search bar drops to its own full-width row. Nav buttons, the theme toggle and the profile pill are sized down (the profile handle collapses to its avatar) so nothing overflows the viewport, and the hero and poster rails are scaled for small screens.

## [1.1.0] - 2026-06-12

### Added
- **Noir City featured marquee** — a curated, neon-styled showcase rail leading the homepage, hand-ordered to the noir canon (Scarlet Street, Detour, The Killers, Laura, Kiss Me Deadly, The Big Heat, Gilda, and more). Shared `buildRailMaster()` engine powers both the homepage feature and the genre browse so curation logic lives in one place.
- **Liability gate** — a blocking first-visit modal requiring affirmative 18+ acknowledgement before entry: third-party / Internet Archive sourcing disclaimer, "as-is" no-warranty terms, hold-harmless, and a DMCA takedown link. The "Enter" action stays disabled until the visitor checks the consent box.
- **Walled-garden playback** — film browsing (titles, posters, synopses) stays open, but the actual stream is withheld unless the visitor holds a valid Bluesky session. Enforced at the API layer, not just the UI, so the stream URL never leaks to logged-out clients.

### Changed
- Rail de-duplication hardened: variant-collapse now folds "with subtitles", "colorized", "remastered" and similar upload variants of the same film, and a targeted canonical-merge keeps exactly one best copy of each showcase classic with a clean display title.

### Fixed
- Quarantined a poisoned Internet Archive record whose filename claimed one film but whose metadata resolved to another, preventing it from ever headlining a rail.
- Homepage featured block no longer serves stale titles after a catalog refresh.

## [1.0.1] - 2026-06-11

### Changed
- About page now shows the dynamic **IIM "Created with Creative Clarity" badge** (a unique generative scene on every visit) in place of the static contributions graphic.

## [1.0.0] - 2026-06-11

First public release. 🎬

### Added
- Curated public-domain catalog with 6 channels (Film Noir, Classic Horror, Sci-Fi, Golden-Age Comedy, Carnival & Circus, Prison Block), sourced live from the Internet Archive.
- Browse-by-star and browse-by-director rails with TMDB portraits for 40+ classic-era names.
- Portable film diary: watches, ratings, and reviews written to the user's own Bluesky PDS via AT Protocol.
- "The club is watching" community feed built from public atproto records.
- Watch-party discovery rail surfacing live #TCMParty / #FilmSky / #NoirAlley threads (read-only).
- Bluesky OAuth login.
- Legal layer: first-visit clickwrap consent (logged to D1), DMCA takedown flow, public-domain-only sourcing.
- Async, D1-backed observability for playback success and search telemetry.
- Single-file Cloudflare Worker architecture -- no build step.

### Fixed
- Resolved a bundle-killing string-escaping bug in portrait fallback handlers that crashed client-side rendering.
