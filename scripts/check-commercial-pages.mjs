import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";
const urls=[
  ["/it/sviluppo-software-su-misura/","it"],
  ["/en/custom-software-development/","en"],
  ["/it/intelligenza-artificiale-locale-aziende/","it"],
  ["/en/on-premise-ai-business/","en"],
];
for(const [url,lang] of urls){
 const html=await readFile("dist"+url+"index.html","utf8");
 assert.match(html,/<h1[^>]*>/,"missing H1 "+url);
 assert.match(html,new RegExp('<html[^>]*lang="'+lang+'"'),"language mismatch "+url);
 assert.match(html,/rel="canonical"/,"missing canonical "+url);
 assert.match(html,/hreflang="it"/,"missing it alternate "+url);
 assert.match(html,/hreflang="en"/,"missing en alternate "+url);
 assert.match(html,/mailto:hello@empv.it/,"missing CTA "+url);
}
const services=await readFile("dist/it/cosa-facciamo/index.html","utf8");
assert.match(services,/sviluppo-software-su-misura/);
assert.match(services,/intelligenza-artificiale-locale-aziende/);
const sitemap=await readFile("dist/sitemap.xml","utf8");
for(const [url] of urls)assert.ok(sitemap.includes(url),"sitemap missing "+url);
console.log("Commercial page smoke checks passed");
