import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { routes } from './src/app/app.routes';

const base = 'https://fournova.in';
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

routes.forEach(r => {
  const loc = `${base}/${r.path}`;
  xml += `  <url><loc>${loc}</loc></url>\n`;
});

xml += '</urlset>';

writeFileSync(resolve('dist', 'sitemap.xml'), xml);
console.log('✅ sitemap.xml generated');
