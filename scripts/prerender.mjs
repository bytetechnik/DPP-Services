import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import { routes } from "./seo-routes.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist", "client");
const port = 4173;
const origin = `http://127.0.0.1:${port}`;

function chromePath() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  ].filter(Boolean);
  const found = candidates.find((candidate) => existsSync(candidate));
  if (!found) {
    throw new Error("No Chrome or Edge executable found. Set CHROME_PATH.");
  }
  return found;
}

function waitForServer() {
  return new Promise((resolve, reject) => {
    const started = Date.now();
    const tick = async () => {
      try {
        const response = await fetch(origin);
        if (response.ok) {
          resolve();
          return;
        }
      } catch {
        // preview is still starting
      }
      if (Date.now() - started > 30000) {
        reject(new Error("vite preview did not start"));
        return;
      }
      setTimeout(tick, 300);
    };
    tick();
  });
}

const viteBin = path.join(root, "node_modules", "vite", "bin", "vite.js");
const preview = spawn(process.execPath, [viteBin, "preview", "--host", "127.0.0.1", "--port", String(port), "--strictPort"], {
  cwd: root,
  stdio: "inherit",
});

let browser;
try {
  await waitForServer();
  browser = await puppeteer.launch({
    executablePath: chromePath(),
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });

  for (const route of routes) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.evaluateOnNewDocument(() => {
      window.__DPP_PRERENDER__ = true;
    });
    const url = `${origin}${route.path}`;
    await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
    await page.waitForFunction(() => document.documentElement.dataset.pageReady === "true", {
      timeout: 20000,
    });
    await page.waitForFunction(() => {
      const heading = document.querySelector("main h1, main h2");
      return Boolean(heading && heading.textContent && heading.textContent.trim().length > 0);
    });
    const html = await page.content();
    if (!html.includes("<title>") || !html.includes('rel="canonical"')) {
      throw new Error(`Prerender missed head tags for ${route.path}`);
    }
    const out =
      route.path === "/"
        ? path.join(dist, "index.html")
        : path.join(dist, route.path.replace(/^\//, ""), "index.html");
    await mkdir(path.dirname(out), { recursive: true });
    await writeFile(out, html, "utf8");
    await page.close();
    console.log(`Prerendered ${route.path}`);
  }
} finally {
  await browser?.close();
  preview.kill();
}
