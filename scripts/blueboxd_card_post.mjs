// Generic Blueboxd card poster — posts a URL to @blueboxd.com with a slick OG card.
// Usage: node blueboxd_card_post.mjs "<url>" "<text-with-link-and-tags>"
// The URL's OG image is scraped + uploaded as a blob so the card renders as the
// custom noir/stats/leaderboard card (not a flat thumbnail). Reuses the proven
// weekly-diary-share path. Env: BLUEBOXD_APP_PASSWORD.

const PDS = "https://bsky.social";
const HOST_DID = "did:plc:YOUR_OWNER_DID";
const APP_PASS = process.env.BLUEBOXD_APP_PASSWORD;

function buildFacets(text) {
  const enc = new TextEncoder(); const blen = (s) => enc.encode(s).length;
  const facets = [];
  const linkRe = /https?:\/\/[^\s\]\)]+/g; let m;
  while ((m = linkRe.exec(text))) {
    let url = m[0].replace(/[.,;!?)]+$/, "");
    const start = blen(text.slice(0, m.index));
    facets.push({ index: { byteStart: start, byteEnd: start + blen(url) },
      features: [{ $type: "app.bsky.richtext.facet#link", uri: url }] });
  }
  const tagRe = /(^|\s)(#[A-Za-z][A-Za-z0-9_]*)/g;
  while ((m = tagRe.exec(text))) {
    const tag = m[2]; const at = m.index + m[1].length;
    const start = blen(text.slice(0, at));
    facets.push({ index: { byteStart: start, byteEnd: start + blen(tag) },
      features: [{ $type: "app.bsky.richtext.facet#tag", tag: tag.slice(1) }] });
  }
  facets.sort((a, b) => a.index.byteStart - b.index.byteStart);
  return facets;
}
function ogGrab(html, prop) {
  const m = html.match(new RegExp('<meta property="' + prop + '" content="([^"]*)"', "i"));
  return m ? m[1].replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"') : "";
}

async function main() {
  const URL_IN = process.argv[2];
  const TEXT = process.argv[3];
  if (!APP_PASS) throw new Error("BLUEBOXD_APP_PASSWORD missing");
  if (!URL_IN || !TEXT) throw new Error("usage: node blueboxd_card_post.mjs <url> <text>");

  const ls = await fetch(PDS + "/xrpc/com.atproto.server.createSession", {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ identifier: HOST_DID, password: APP_PASS }) });
  const sess = await ls.json();
  if (!sess.accessJwt) throw new Error("auth failed: " + JSON.stringify(sess));
  const JWT = sess.accessJwt, DID = sess.did;

  const ua = "Mozilla/5.0 (compatible; bskyEmbed/1.0; +https://bsky.app)";
  const pg = await fetch(URL_IN + (URL_IN.includes("?") ? "&" : "?") + "cb=" + Date.now(), { headers: { "user-agent": ua } });
  const html = await pg.text();
  const ogTitle = ogGrab(html, "og:title") || "Blueboxd";
  const ogDesc = ogGrab(html, "og:description") || "Free public-domain cinema on Bluesky.";
  const ogImg = ogGrab(html, "og:image");
  if (!ogImg) throw new Error("OG image scrape failed for " + URL_IN);

  const ir = await fetch(ogImg + (ogImg.includes("?") ? "&" : "?") + "cb=" + Date.now(), { headers: { "user-agent": "Blueboxd/1.0" } });
  if (!ir.ok) throw new Error("og image fetch " + ir.status);
  const ct = ir.headers.get("content-type") || "image/png";
  const buf = Buffer.from(await ir.arrayBuffer());
  const up = await fetch(PDS + "/xrpc/com.atproto.repo.uploadBlob", {
    method: "POST", headers: { "content-type": ct, authorization: "Bearer " + JWT }, body: buf });
  const ud = await up.json();
  if (!ud.blob) throw new Error("blob upload failed: " + JSON.stringify(ud));

  const record = {
    $type: "app.bsky.feed.post", text: TEXT, facets: buildFacets(TEXT),
    embed: { $type: "app.bsky.embed.external",
      external: { uri: URL_IN, title: ogTitle, description: ogDesc, thumb: ud.blob } },
    createdAt: new Date().toISOString(), langs: ["en"] };

  if (process.env.DRY_RUN === "1") {
    console.log("DRY_RUN: would post →", URL_IN);
    console.log("  title:", ogTitle);
    console.log("  text:", TEXT.replace(/\n/g, " / "));
    console.log("  thumb blob ok:", !!ud.blob);
    return;
  }
  const cr = await fetch(PDS + "/xrpc/com.atproto.repo.createRecord", {
    method: "POST", headers: { "content-type": "application/json", authorization: "Bearer " + JWT },
    body: JSON.stringify({ repo: DID, collection: "app.bsky.feed.post", record }) });
  const crd = await cr.json();
  if (!crd.uri) throw new Error("create failed: " + JSON.stringify(crd));
  console.log("POSTED:", crd.uri.replace("at://" + DID + "/app.bsky.feed.post/", "https://bsky.app/profile/blueboxd.com/post/"));
}
main().catch(e => { console.error("ERR", e.message); process.exit(1); });
