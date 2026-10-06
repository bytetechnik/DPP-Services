import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { routes } from "./seo-routes.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const origin = "https://www.dpp-services.de";
const lastmod = new Date().toISOString().slice(0, 10);

const urls = routes
  .map(
    (route) => `  <url>
    <loc>${origin}${route.path === "/" ? "/" : route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

await writeFile(path.join(root, "public", "sitemap.xml"), xml, "utf8");
console.log(`Wrote sitemap.xml with ${routes.length} URLs (${lastmod}).`);
