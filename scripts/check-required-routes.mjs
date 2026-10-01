/**
 * Fails the build if an important public URL has no App Router file,
 * or if source links point to a path that does not exist.
 *
 * This is the guard for /es/inversiones/samana: a missing route file
 * must fail before Vercel can publish a 404.
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const appDir = join(root, "app");
const LOCALES = new Set(["es", "en", "de"]);

const REQUIRED_URLS = [
  "/es/inversiones/samana",
  "/en/investments/samana",
  "/es/inversiones/republica-dominicana",
  "/en/investments/dominican-republic",
  "/es/divisions/real-estate-hospitality",
  "/en/divisions/real-estate-hospitality",
];

const REQUIRED_FILES = [
  "app/[locale]/(dominicana-share)/inversiones/samana/route.ts",
  "app/[locale]/(dominicana-share)/investments/samana/route.ts",
  "app/api/dominicana-share/assets/[...path]/route.ts",
  "dominicana-share/content/es.html",
  "dominicana-share/content/en.html",
];

const SKIP_DIRS = new Set(["node_modules", ".next", ".git"]);
const SOURCE_EXT = new Set([".ts", ".tsx", ".js", ".mjs", ".md"]);
const IGNORE_LINK_PREFIXES = ["/api/", "/_next/", "/icon", "/apple-icon", "/opengraph", "/twitter"];

function walkFiles(dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const full = join(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) walkFiles(full, files);
    else files.push(full);
  }
  return files;
}

function routeSegments(rel) {
  const parts = rel.split(sep).filter(Boolean);
  const segments = [];
  let kind = null;
  for (const part of parts) {
    if (part.startsWith("(") && part.endsWith(")")) continue;
    if (part === "page.tsx" || part === "page.ts" || part === "page.js" || part === "route.ts" || part === "route.js") {
      kind = part.startsWith("page") ? "page" : "route";
      continue;
    }
    segments.push(part);
  }
  return kind ? segments : null;
}

function collectAppRoutes() {
  const routes = [];
  for (const file of walkFiles(appDir)) {
    const base = file.split(sep).pop();
    if (!base || !/^(page|route)\.(t|j)sx?$/.test(base)) continue;
    const rel = relative(appDir, file);
    const segments = routeSegments(rel);
    if (!segments) continue;
    routes.push({ file: relative(root, file).split(sep).join("/"), segments });
  }
  return routes;
}

function matchUrl(url, segments) {
  const parts = url.split("/").filter(Boolean);
  if (parts.length !== segments.length) return false;
  for (let i = 0; i < segments.length; i += 1) {
    const seg = segments[i];
    const value = parts[i];
    if (seg === "[locale]") {
      if (!LOCALES.has(value)) return false;
      continue;
    }
    if (seg.startsWith("[...") && seg.endsWith("]")) return true;
    if (seg.startsWith("[") && seg.endsWith("]")) continue;
    if (seg !== value) return false;
  }
  return true;
}

function hasRoute(url, routes) {
  return routes.some((route) => matchUrl(url, route.segments));
}

function extractLinks(text) {
  const found = new Set();
  const patterns = [
    /localizedPath\(\s*["'`](\/[^"'`$?#]*)["'`]/g,
    /href=["'`](\/(?:es|en|de)\/[^"'`$?#]*)["'`]/g,
    /href:\s*["'`](\/[^"'`$?#]*)["'`]/g,
    /["'`](\/(?:es|en|de)\/(?:inversiones|investments)\/[^"'`$?#]*)["'`]/g,
  ];
  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      found.add(match[1]);
    }
  }
  return found;
}

function toAbsoluteUrls(pathOrUrl) {
  if (pathOrUrl.startsWith("/es/") || pathOrUrl.startsWith("/en/") || pathOrUrl.startsWith("/de/")) {
    return [pathOrUrl];
  }
  if (pathOrUrl === "/inversiones/samana") return ["/es/inversiones/samana"];
  if (pathOrUrl === "/investments/samana") return ["/en/investments/samana"];
  return [...LOCALES].map((locale) => `/${locale}${pathOrUrl}`);
}

function shouldCheckLink(pathname) {
  if (!pathname.startsWith("/")) return false;
  if (IGNORE_LINK_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return false;
  if (pathname.includes("${")) return false;
  if (pathname.endsWith("/") && pathname !== "/" && !/^\/(?:es|en|de)\/$/.test(pathname)) {
    return false;
  }
  return true;
}

const errors = [];
const routes = collectAppRoutes();

for (const file of REQUIRED_FILES) {
  if (!existsSync(join(root, file))) {
    errors.push(`Missing required file: ${file}`);
  }
}

for (const url of REQUIRED_URLS) {
  if (!hasRoute(url, routes)) {
    errors.push(`Missing App Router file for required URL ${url}`);
  }
}

const sourceRoots = ["app", "components", "content", "dominicana-share", "lib"];
const linked = new Map();
for (const dir of sourceRoots) {
  for (const file of walkFiles(join(root, dir))) {
    if (!SOURCE_EXT.has(extname(file))) continue;
    const rel = relative(root, file).split(sep).join("/");
    const text = readFileSync(file, "utf8");
    for (const raw of extractLinks(text)) {
      if (!shouldCheckLink(raw)) continue;
      for (const url of toAbsoluteUrls(raw)) {
        if (!linked.has(url)) linked.set(url, rel);
      }
    }
  }
}

for (const [url, from] of linked) {
  if (!hasRoute(url, routes)) {
    errors.push(`Linked URL ${url} from ${from} has no matching page or route`);
  }
}

if (errors.length) {
  console.error("Route check failed:\n" + errors.map((line) => `- ${line}`).join("\n"));
  process.exit(1);
}

console.log(
  `Route check passed: ${REQUIRED_URLS.length} required URLs, ${linked.size} linked paths, ${routes.length} App Router endpoints.`,
);
