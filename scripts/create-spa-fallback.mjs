import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const distDir = resolve("dist");
const indexFile = resolve(distDir, "index.html");
const fallbackFile = resolve(distDir, "404.html");

if (!existsSync(indexFile)) {
  throw new Error("Cannot create SPA fallback because dist/index.html does not exist.");
}

copyFileSync(indexFile, fallbackFile);
console.log("Created dist/404.html SPA fallback.");

const knownRoutes = [
  "about",
  "contact",
  "rooms",
  "rooms/101",
  "rooms/102",
  "rooms/103",
  "rooms/201",
  "rooms/202",
  "rooms/203",
  "rooms/zimmer-101",
  "rooms/zimmer-102",
  "rooms/zimmer-103",
  "rooms/zimmer-201",
  "rooms/zimmer-202",
  "rooms/zimmer-203",
];

for (const route of knownRoutes) {
  const routeDir = resolve(distDir, route);
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(indexFile, resolve(routeDir, "index.html"));
}

console.log(`Created static fallback index files for ${knownRoutes.length} routes.`);
