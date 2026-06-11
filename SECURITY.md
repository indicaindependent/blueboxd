# Security Policy

## Reporting a vulnerability

Please **do not** open a public issue for security vulnerabilities.

Instead, report responsibly via a **direct message on Bluesky** to
[@indicaindependent.bsky.social](https://bsky.app/profile/indicaindependent.bsky.social).

Include:
- A description of the issue and its impact
- Steps to reproduce
- Any relevant logs or proof-of-concept (please redact secrets)

We aim to acknowledge reports within **72 hours** and will keep you updated on remediation.

## Scope

Blueboxd is a single Cloudflare Worker. Areas of particular interest:
- OAuth / session handling
- AT Protocol record writes to user PDSes
- Any path that could leak host credentials or another user's session

## Out of scope

- Content sourced from the Internet Archive (report mis-categorized titles via the in-app DMCA/takedown form)
- Rate-limiting / DoS against the public instance
