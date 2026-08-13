// Build-time static rendering, run via `tsx scripts/prerender.ts` after `vite build`.
//
// Most AI crawlers (GPTBot, ClaudeBot, PerplexityBot) don't execute JavaScript,
// so this app being pure client-rendered means they'd otherwise see an empty
// <div id="root">. This script renders each route to a real HTML string with
// React's own server renderer (no headless browser needed) and writes it to
// dist/<route>/index.html, so express.static's default directory-index
// resolution serves real content for every URL in production.
import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../src/App';
import { ROUTES, PRODUCT_ROUTE_PATHS, computeHeadData } from '../src/routes';
import { SITE_URL } from '../src/lib/siteConfig';

const ALL_PATHS = [...ROUTES.map((r) => r.path), ...PRODUCT_ROUTE_PATHS];

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const templatePath = path.join(DIST_DIR, 'index.html');

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function buildHtml(template: string, pathname: string, appHtml: string): string {
  const head = computeHeadData(pathname);

  const headTags = [
    `<title>${escapeHtml(head.title)}</title>`,
    `<meta name="robots" content="${head.noindex ? 'noindex, nofollow' : 'index, follow'}" />`,
    head.description ? `<meta name="description" content="${escapeAttr(head.description)}" />` : '',
    head.canonicalUrl ? `<link rel="canonical" href="${head.canonicalUrl}" />` : '',
    head.canonicalUrl ? `<meta property="og:site_name" content="Visalatchi Manufactures" />` : '',
    head.canonicalUrl ? `<meta property="og:title" content="${escapeAttr(head.title)}" />` : '',
    head.description ? `<meta property="og:description" content="${escapeAttr(head.description)}" />` : '',
    head.canonicalUrl ? `<meta property="og:url" content="${head.canonicalUrl}" />` : '',
    head.canonicalUrl ? `<meta property="og:type" content="website" />` : '',
    head.canonicalUrl ? `<meta property="og:locale" content="en_IN" />` : '',
    `<meta property="og:image" content="${escapeAttr(head.ogImage)}" />`,
    head.canonicalUrl ? `<meta name="twitter:card" content="summary_large_image" />` : '',
    `<meta name="twitter:image" content="${escapeAttr(head.ogImage)}" />`,
    head.schemas.length ? `<script type="application/ld+json">${JSON.stringify(head.schemas)}</script>` : '',
  ]
    .filter(Boolean)
    .join('\n    ');

  let html = template.replace(/<title>.*?<\/title>/s, '');
  html = html.replace('</head>', `${headTags}\n  </head>`);
  html = html.replace(/<div id="root">.*?<\/div>/s, `<div id="root">${appHtml}</div>`);
  return html;
}

function outputPathFor(routePath: string): string {
  if (routePath === '/') return path.join(DIST_DIR, 'index.html');
  return path.join(DIST_DIR, routePath.replace(/^\//, ''), 'index.html');
}

async function main() {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`dist/index.html not found — run "vite build" before the prerender step.`);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  for (const routePath of ALL_PATHS) {
    const appHtml = renderToString(
      React.createElement(StaticRouter, { location: routePath }, React.createElement(App)),
    );
    const html = buildHtml(template, routePath, appHtml);
    const outPath = outputPathFor(routePath);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html, 'utf-8');
    console.log(`Prerendered ${routePath} -> ${path.relative(process.cwd(), outPath)}`);
  }

  const lastmod = new Date().toISOString().slice(0, 10);
  const urlEntries = ALL_PATHS.map((p) => {
    const priority = p === '/' ? '1.0' : p.startsWith('/products/') ? '0.7' : '0.8';
    return `  <url>\n    <loc>${SITE_URL}${p === '/' ? '' : p}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  }).join('\n');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap, 'utf-8');
  console.log('Wrote dist/sitemap.xml');
}

main().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
