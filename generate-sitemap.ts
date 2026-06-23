import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { resolve } from 'path';

// Base URL of the live site – change if you use a different domain.
const base = 'https://fournova.in';

// Path to the routes definition file.
const routesFile = resolve('src', 'app', 'app.routes.ts');

// Extract only the path strings from the file using a simple regex.
// This avoids importing Angular components which can cause runtime errors.
const fileContent = readFileSync(routesFile, 'utf-8');
const pathRegex = /{\s*path\s*:\s*'([^']*)'/g;
const paths: string[] = [];
let match: RegExpExecArray | null;
while ((match = pathRegex.exec(fileContent)) !== null) {
  // match[1] is the route path string.
  paths.push(match[1]);
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

paths.forEach(p => {
  // Ensure the root path '' becomes just '/' and other paths have a leading slash.
  const location = p ? `/${p}` : '/';
  const loc = `${base}${location}`;
  xml += `  <url><loc>${loc}</loc></url>\n`;
});

xml += '</urlset>'; // close the tag

// Ensure the output folder exists – ts-node may run before a build creates "dist".
const outDir = resolve('dist');
mkdirSync(outDir, { recursive: true });

writeFileSync(resolve(outDir, 'sitemap.xml'), xml);
console.log('✅ sitemap.xml generated at', resolve(outDir, 'sitemap.xml'));
