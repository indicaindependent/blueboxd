# Contributing to Blueboxd

Thanks for your interest! Blueboxd is a single-file Cloudflare Worker, so contributing is refreshingly simple.

## Ground rules

1. **Public domain only.** Never add catalog sources that aren't clearly public-domain. This is non-negotiable.
2. **Never commit secrets.** No app-passwords, DIDs, account IDs, or PDS hostnames. Use `wrangler secret` and the `YOUR_*` placeholders.
3. **Keep it edge-native.** No build step, no heavy frameworks. The whole app ships as `cineclub_bundled.js`.

## Workflow

1. Fork & branch from `main`.
2. Make your change. Run `node --check cineclub_bundled.js` before committing.
3. Open a PR with a clear description of what and why.
4. One reviewer approval merges.

## Code style

- Vanilla JS, no transpilation.
- Prefer DOM-built elements over `innerHTML` with interpolated user data (avoids escaping bugs).
- Keep API responses small and cache-friendly.

## Reporting bugs

Open an issue with repro steps, expected vs. actual, and your browser/region if it's a rendering issue.
