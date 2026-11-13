import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat, mkdir } from 'node:fs/promises';
import { resolve, join, extname, sep } from 'node:path';
const root = resolve('dist');
const types = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.webp':'image/webp','.jpg':'image/jpeg','.svg':'image/svg+xml'};
const server = createServer(async (req,res) => {
 let path = resolve(root, '.' + new URL(req.url, 'http://localhost').pathname);
 if (!path.startsWith(root + sep)) { res.writeHead(403).end(); return; }
 try { if ((await stat(path)).isDirectory()) path = join(path,'index.html'); res.setHeader('Content-Type',types[extname(path)] || 'application/octet-stream'); res.end(await readFile(path)); }
 catch { res.writeHead(404).end(); }
});
await new Promise(done => server.listen(0,'127.0.0.1',done));
const url = `http://127.0.0.1:${server.address().port}/presentazione/`;
const folder = join(process.env.RUNNER_TEMP || '/tmp','empv-presentation-qa');
await mkdir(folder,{recursive:true});
const browser = await chromium.launch({args:['--no-sandbox']});
try {
 for (const width of [320,390,768,1440,1920]) {
  const page = await browser.newPage({viewport:{width,height:1000},reducedMotion:'reduce'});
  const errors=[]; page.on('pageerror',e=>errors.push(e.message));
  assert.equal((await page.goto(url)).status(),200);
  await page.evaluate(()=>document.fonts.ready);
  assert.equal(await page.locator('.slide-frame').count(),15);
  for (const lang of ['it','en','fr']) {
   await page.locator(`[data-empv-language="${lang}"]`).click();
   assert.equal(await page.locator('html').getAttribute('lang'),lang);
   for (let slide=0;slide<15;slide++) {
    await page.locator('#pageSelect').selectOption(String(slide));
    const layout=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,images:[...document.querySelectorAll('.slide-frame.active img')].map(i=>i.complete&&i.naturalWidth>0)}));
    assert.ok(layout.scroll<=width+3, `${lang}/${width}/${slide+1}: horizontal overflow ${layout.scroll}`);
    assert.ok(layout.images.every(Boolean),`${lang}/${width}/${slide+1}: image failed`);
   }
   await page.locator('#pageSelect').selectOption('0');
   await page.screenshot({path:join(folder,`${lang}-${width}-cover.png`),fullPage:true});
  }
  await page.reload();
  assert.equal(await page.locator('html').getAttribute('lang'),'fr');
  assert.deepEqual(errors,[]);
  await page.close();
 }
 console.log('Presentation browser checks PASS: 15 slides × 3 languages × 5 widths, loaded images, no horizontal overflow, persisted language.');
} finally { await browser.close(); await new Promise(done=>server.close(done)); }
