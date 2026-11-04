import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import sharp from "sharp";

const read = (path) => readFile(new URL("../dist/" + path, import.meta.url), "utf8");
const slugs = [
  "empv-discovery",
  "software-su-misura",
  "automazioni-integrazioni",
  "ai-per-le-aziende",
  "ai-locale-privata",
];

const [itHome, enHome, itServices, enServices, itLab, enLab, sitemap, llms] = await Promise.all([
  read("it/index.html"),
  read("en/index.html"),
  read("it/cosa-facciamo/index.html"),
  read("en/what-we-do/index.html"),
  read("it/lab/index.html"),
  read("en/lab/index.html"),
  read("sitemap.xml"),
  read("llms.txt"),
]);

for (const [lang, home, page, segment, lab] of [
  ["it", itHome, itServices, "cosa-facciamo", itLab],
  ["en", enHome, enServices, "what-we-do", enLab],
]) {
  assert.match(home, /id="services"/, lang + ": services section missing from homepage");
  assert.match(home, /class="lab-list empv-card-grid"/, lang + ": approved Glass layout missing");
  assert.match(home, new RegExp('href="[^"]+/' + lang + '/lab/"'), lang + ": AI Lab must remain in header");
  assert.doesNotMatch(home, /class="empv-card-title">(?:System Twin|Opportunity Engine|Trustworthy Reasoning)<\/h3>/, lang + ": AI Lab card remains on homepage");
  assert.match(page, /data-prerendered="true"/, lang + ": services page is not prerendered");
  assert.match(page, /"@type":"CollectionPage"/, lang + ": services CollectionPage missing");
  assert.equal((page.match(/"@type":"Service"/g) || []).length, 5, lang + ": expected five structured services");

  for (const slug of slugs) {
    assert.ok(home.includes("/" + lang + "/" + segment + "/#" + slug), lang + ": missing card link " + slug);
    assert.ok(page.includes('id="' + slug + '"'), lang + ": missing service anchor " + slug);
  }
  const portfolioPath = lang === "it" ? "progetti" : "projects";
  for (const slug of ["commesse-posa", "psicologia-operations", "pet-resort-operations", "richieste-preventivi"]) {
    assert.ok(page.includes("/" + lang + "/" + portfolioPath + "/" + slug + "/"), lang + ": missing contextual project link " + slug);
  }
  assert.match(page, /id="services-evidence-title"/, lang + ": evidence section missing");
  assert.match(lab, /System Twin/, lang + ": existing AI Lab page changed unexpectedly");
}

assert.match(itHome, /EMPV Discovery/, "IT Discovery card missing");
assert.match(enHome, /Custom software/, "EN software card missing");
assert.match(itServices, /href="[^"]+\/it\/automazione-processi-aziendali\/"/, "IT related process link missing");
assert.match(enServices, /href="[^"]+\/en\/business-process-automation\/"/, "EN related process link missing");
assert.match(sitemap, /\/it\/cosa-facciamo\//, "Italian services missing from sitemap");
assert.match(sitemap, /\/en\/what-we-do\//, "English services missing from sitemap");
assert.match(llms, /EMPV Discovery/, "Services missing from llms.txt");
for (const [lang, home] of [["it", itHome], ["en", enHome]]) {
  assert.ok(home.includes("https://empv.it/empv-logo-192.png") || home.includes("/empv-logo-192.png"),
    lang + ": Organization logo not referenced");
}
const logo = await sharp(await readFile(new URL("../dist/empv-logo-192.png", import.meta.url))).metadata();
assert.equal(logo.width, 192, "Organization logo width");
assert.equal(logo.height, 192, "Organization logo height");
assert.equal(logo.format, "png", "Organization logo encoding");

console.log("Services SEO regression checks: IT/EN homepage, Glass cards, links, AI Lab preservation, static routes, JSON-LD, sitemap and llms.txt — PASS");
