# Changelog

All notable changes to Blueboxd are documented here.
This project adheres to [Semantic Versioning](https://semver.org).

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
