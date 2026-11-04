import { chromium } from "playwright";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, mkdir, stat } from "node:fs/promises";
import { join, extname, resolve, sep } from "node:path";

const dist = resolve("dist");
const folder = process.env.RUNNER_TEMP ? join(process.env.RUNNER_TEMP, "empv-services-qa") : "/tmp/empv-services-qa";
await mkdir(folder, { recursive: true });

const contentType = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".avif": "image/avif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};

const server = createServer(async (req, res) => {
  const pathname = decodeURIComponent(new URL(req.url || "/", "http://127.0.0.1").pathname);
  let requested = resolve(dist, "." + pathname);
  if (!(requested === dist || requested.startsWith(dist + sep))) {
    res.writeHead(403); res.end(); return;
  }
  try {
    if ((await stat(requested)).isDirectory()) requested = join(requested, "index.html");
    const data = await readFile(requested);
    res.writeHead(200, { "Content-Type": contentType[extname(requested)] || "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404); res.end("not found");
  }
});
await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
const base = "http://127.0.0.1:" + server.address().port;
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });

const sizes = [320, 390, 768, 1440, 1920];
let checks = 0;
try {
  for (const lang of ["it", "en"]) {
    const segment = lang === "it" ? "cosa-facciamo" : "what-we-do";
    const servicePath = "/" + lang + "/" + segment + "/";
    for (const width of sizes) {
      const page = await browser.newPage({
        viewport: { width, height: 920 },
        deviceScaleFactor: 1,
        reducedMotion: "reduce",
      });
      const errors = [];
      page.on("pageerror", err => errors.push(err.message));
      const home = await page.goto(base + "/" + lang + "/", { waitUntil: "networkidle" });
      assert.equal(home.status(), 200);
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.locator("#services a.empv-glass-card").count(), 5, lang + "/" + width + ": services count");
      assert.equal(await page.locator("#work a.empv-glass-card").count(), 4, lang + "/" + width + ": project count");
      assert.equal(await page.locator("#services .empv-card-title").first().innerText(), "EMPV Discovery");
      assert.ok(await page.locator(".desktop-nav a[href$='/lab/']").count(), lang + "/" + width + ": AI Lab header");
      assert.equal(await page.locator("#services .empv-glass-card--lab").count(), 5, lang + "/" + width + ": retained Glass layout");
      assert.equal(await page.locator("#services .empv-card-meta").count(), 5, lang + "/" + width + ": service details");
      assert.equal(await page.locator("#services a[href*='" + servicePath + "#']").count(), 5, lang + "/" + width + ": real service links");
      const layout = await page.evaluate(() => ({
        viewport: window.innerWidth,
        html: document.documentElement.scrollWidth,
        body: document.body.scrollWidth,
        serviceCards: [...document.querySelectorAll("#services a.empv-glass-card")].map(node => {
          const r = node.getBoundingClientRect();
          return { left: r.left, right: r.right, width: r.width, height: r.height };
        }),
      }));
      assert.ok(layout.html <= width + 3 && layout.body <= width + 3, lang + "/" + width + ": horizontal overflow " + JSON.stringify(layout));
      for (const rect of layout.serviceCards) {
        assert.ok(rect.left >= -3 && rect.right <= width + 3 && rect.width > 200, lang + "/" + width + ": service card clipped " + JSON.stringify(rect));
      }
      await page.locator("#services").scrollIntoViewIfNeeded();
      await page.screenshot({ path: join(folder, lang + "-" + width + "-services-home.png") });

      const detail = await page.goto(base + servicePath, { waitUntil: "networkidle" });
      assert.equal(detail.status(), 200);
      assert.equal(await page.locator("main article.detail-block[id]").count(), 5, lang + "/" + width + ": detail sections");
      assert.equal(await page.locator("main h1").count(), 1, lang + "/" + width + ": detail H1");
      const detailLayout = await page.evaluate(() => ({ viewport: window.innerWidth, html: document.documentElement.scrollWidth, body: document.body.scrollWidth }));
      assert.ok(detailLayout.html <= width + 3 && detailLayout.body <= width + 3, lang + "/" + width + ": detail overflow " + JSON.stringify(detailLayout));
      await page.screenshot({ path: join(folder, lang + "-" + width + "-services-detail.png") });
      assert.deepEqual(errors, [], lang + "/" + width + ": runtime errors");
      await page.close();
      checks += 1;
      console.log("PASS " + lang + " " + width + "px homepage + services page");
    }
    const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: "reduce" });
    await page.goto(base + "/" + lang + "/", { waitUntil: "networkidle" });
    const menu = page.locator(".mobile-menu-toggle");
    const mobileState = await page.evaluate(() => {
      const el = document.querySelector(".mobile-menu-toggle");
      return {
        width: window.innerWidth,
        screenWidth: screen.width,
        viewportMeta: document.querySelector('meta[name="viewport"]')?.getAttribute("content"),
        hasToggle: Boolean(el),
        computedDisplay: el ? getComputedStyle(el).display : null,
        rootChildren: document.getElementById("root")?.children.length,
        scriptSrc: [...document.querySelectorAll('script[type="module"]')].map(el => el.getAttribute("src")),
      };
    });
    console.log("MOBILE DIAGNOSTICS " + lang + " " + JSON.stringify(mobileState));
    assert.ok(await menu.isVisible(), lang + ": touch mobile toggle must be visible");
    await menu.click();
    assert.ok(await page.locator(".mobile-nav-panel a[href$='/lab/']").isVisible(), lang + ": AI Lab must remain accessible on mobile");
    await page.goto(base + "/" + lang + "/lab/", { waitUntil: "networkidle" });
    assert.ok((await page.locator("body").innerText()).includes("System Twin"), lang + ": original AI Lab page available");
    await page.goto(base + "/" + lang + "/lab/local-ai/", { waitUntil: "networkidle" });
    assert.ok((await page.locator("body").innerText()).includes("Local AI"), lang + ": Lab detail available");
    await page.close();
    checks += 1;
  }
  console.log("PASS services browser QA: " + checks + " viewport/language and mobile checks, screenshots in " + folder);
} finally {
  await browser.close();
  await new Promise(resolve => server.close(resolve));
}
