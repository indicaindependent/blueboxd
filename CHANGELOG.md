# Changelog

All notable changes to Blueboxd are documented here.
This project adheres to [Semantic Versioning](https://semver.org).

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
