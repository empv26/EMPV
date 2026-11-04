import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const origin = process.env.SEO_CHECK_ORIGIN || "https://empv.it";
const read = (path) => readFile(new URL("../dist/" + path, import.meta.url), "utf8");

const root = await read("index.html");
const fallback = await read("404.html");
const italianHome = await read("it/index.html");
const englishHome = await read("en/index.html");
assert.match(root, /http-equiv="refresh" content="0; url=\/it\/"/, "Root must redirect immediately to Italian canonical");
assert.match(root, /rel="canonical" href="https:\/\/empv\.it\/it\/"/, "Root must consolidate to Italian canonical");
assert.match(root, /location\.replace\(/, "Root should preserve existing legacy query URLs");
assert.match(root, /google-site-verification/, "Root must retain Google verification");
assert.doesNotMatch(root, /class="hero"/, "Root must not render a second copy of the homepage");
assert.notEqual(root.match(/<title>(.*?)<\/title>/)?.[1], italianHome.match(/<title>(.*?)<\/title>/)?.[1],
  "Root must not share title with the real homepage");
assert.match(fallback, /data-prerendered="true"/, "404 fallback must preserve the React/static app");
assert.match(italianHome, /EMPV Discovery/, "Italian homepage must remain intact");
assert.match(englishHome, /Custom software/, "English homepage must remain intact");

const robots = await read("robots.txt");
const sitemap = await read("sitemap.xml");
const pairs = [
  ["/it/", "/en/"],
  ["/it/cosa-facciamo/", "/en/what-we-do/"],
  ["/it/automazione-processi-aziendali/", "/en/business-process-automation/"],
  ["/it/progetti/", "/en/projects/"],
  ["/it/lab/", "/en/lab/"],
  ["/it/research-notes/", "/en/research-notes/"],
];

function groupFor(agent) {
  const groups = robots.split(/\n\s*\n/).map(group => group.split(/\r?\n/).map(line => line.trim()));
  const exact = groups.find(lines => lines.some(line => line.toLowerCase() === "user-agent: " + agent.toLowerCase()));
  return exact || groups.find(lines => lines.some(line => line.toLowerCase() === "user-agent: *"));
}

for (const agent of ["OAI-SearchBot", "Claude-SearchBot", "Claude-User", "Googlebot", "Bingbot"]) {
  const group = groupFor(agent);
  assert.ok(group, "No applicable robots.txt group for " + agent);
  assert.ok(group.some(line => /^allow:\s*\/$/i.test(line)), "Root is not allowed for " + agent);
  assert.ok(!group.some(line => /^disallow:\s*\/$/i.test(line)), "Root disallowed for " + agent);
}
assert.ok(robots.includes("Sitemap: " + origin + "/sitemap.xml"), "Sitemap points to wrong site origin");

for (const [it, en] of pairs) {
  for (const [path, lang] of [[it, "it"], [en, "en"]]) {
    const html = await read(path.replace(/^\//, "") + "index.html");
    const url = origin + path;
    assert.ok(html.includes('rel="canonical" href="' + url + '"'), path + ": wrong canonical");
    assert.ok(html.includes('hreflang="it" href="' + origin + it + '"'), path + ": missing Italian alternate");
    assert.ok(html.includes('hreflang="en" href="' + origin + en + '"'), path + ": missing English alternate");
    assert.ok(html.includes('name="robots" content="index,follow'), path + ": indexability meta missing");
    assert.ok(html.includes('data-prerendered="true"'), path + ": text prerender missing");
    assert.ok(html.includes('"@type":"WebPage"'), path + ": WebPage JSON-LD missing");
    assert.ok(sitemap.includes("<loc>" + url + "</loc>"), path + ": sitemap missing page");
    assert.ok(sitemap.includes('hreflang="' + lang + '" href="' + url + '"'), path + ": sitemap locale link missing");
  }
}

const itServices = await read("it/cosa-facciamo/index.html");
const enServices = await read("en/what-we-do/index.html");
for (const [lang, html] of [["it", itServices], ["en", enServices]]) {
  for (const term of ["empv-discovery", "software-su-misura", "automazioni-integrazioni", "ai-per-le-aziende", "ai-locale-privata"]) {
    assert.ok(html.includes('id="' + term + '"'), lang + ": service content absent in prerender");
  }
  assert.ok(html.includes('id="services-evidence-title"'), lang + ": project evidence absent");
}

console.log("SEO/GEO crawl-readiness checks PASS: discoverable localized pages, crawler robots groups, canonical/hreflang, HTML text, sitemap and Organization context.");
