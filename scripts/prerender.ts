// Build-time static rendering, run via `tsx scripts/prerender.ts` after `vite build`.
//
// Most AI crawlers (GPTBot, ClaudeBot, PerplexityBot) don't execute JavaScript,
// so this app being pure client-rendered means they'd otherwise see an empty
// <div id="root">. This script renders each route to a real HTML string with
// React's own server renderer (no headless browser needed) and writes it to
// dist/<route>/index.html. It also writes:
//   - dist/404.html          (served by Vercel with a real 404 status)
//   - dist/sitemap.xml       (lastmod from each page's real update date)
//   - dist/llms-full.txt     (plain-text content of the key pages, for AI engines)
// and FAILS the build if any page's title/description is missing, duplicated
// or outside the target length.
import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../src/App';
import { ALL_ROUTE_PATHS, computeHeadData, HeadData, NOT_FOUND_HEAD } from '../src/routes';
import { SITE_URL, MOQ_RULE, PLANT_ADDRESS_FULL } from '../src/lib/siteConfig';
import { OWNER_FACTS } from '../src/data/ownerFacts';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const templatePath = path.join(DIST_DIR, 'index.html');

const TITLE_RANGE = [50, 60] as const;
const DESCRIPTION_RANGE = [140, 158] as const;

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

/** Preload the two Latin font files used above the fold (public/fonts). */
function fontPreloadTags(): string[] {
  return ['inter-latin', 'fraunces-latin']
    .filter((f) => fs.existsSync(path.join(DIST_DIR, 'fonts', `${f}.woff2`)))
    .map((f) => `<link rel="preload" href="/fonts/${f}.woff2" as="font" type="font/woff2" crossorigin />`);
}

function buildHtml(template: string, head: HeadData, appHtml: string, preloads: string[]): string {
  const headTags = [
    `<title>${escapeHtml(head.title)}</title>`,
    `<meta name="robots" content="${head.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}" />`,
    OWNER_FACTS.googleSiteVerification ? `<meta name="google-site-verification" content="${escapeAttr(OWNER_FACTS.googleSiteVerification)}" />` : '',
    ...preloads,
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
    head.canonicalUrl ? `<meta name="twitter:title" content="${escapeAttr(head.title)}" />` : '',
    head.description ? `<meta name="twitter:description" content="${escapeAttr(head.description)}" />` : '',
    `<meta name="twitter:image" content="${escapeAttr(head.ogImage)}" />`,
    head.schemas.length ? `<script type="application/ld+json">${JSON.stringify(head.schemas).replace(/</g, '\\u003c')}</script>` : '',
  ]
    .filter(Boolean)
    .join('\n    ');

  let html = template.replace(/<title>.*?<\/title>/s, '');
  // Inline the (small, ~8 KB gzipped) stylesheet so first paint doesn't wait
  // on a render-blocking request.
  html = html.replace(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/, (tag, href) => {
    const cssPath = path.join(DIST_DIR, href);
    return fs.existsSync(cssPath) ? `<style>${fs.readFileSync(cssPath, 'utf-8')}</style>` : tag;
  });
  html = html.replace('</head>', `${headTags}\n  </head>`);
  html = html.replace(/<div id="root">.*?<\/div>/s, `<div id="root">${appHtml}</div>`);
  return html;
}

function outputPathFor(routePath: string): string {
  if (routePath === '/') return path.join(DIST_DIR, 'index.html');
  return path.join(DIST_DIR, routePath.replace(/^\//, ''), 'index.html');
}

function render(routePath: string): string {
  return renderToString(React.createElement(StaticRouter, { location: routePath }, React.createElement(App)));
}

/** Visible text of <main>, for llms-full.txt. */
function mainText(appHtml: string): string {
  const main = appHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? appHtml;
  return main
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, '')
    .replace(/<\/(p|h[1-6]|li|tr|div|section)>/g, '\n')
    .replace(/<(td|th)[^>]*>/g, ' | ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
    .split('\n')
    .map((l) => l.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .join('\n');
}

function validateHeads(heads: Map<string, HeadData>): string[] {
  const errors: string[] = [];
  const seenTitles = new Map<string, string>();
  const seenDescs = new Map<string, string>();
  for (const [p, h] of heads) {
    const t = h.title.length;
    const d = h.description.length;
    if (t < TITLE_RANGE[0] || t > TITLE_RANGE[1]) errors.push(`${p}: title ${t} chars (want ${TITLE_RANGE.join('-')}): "${h.title}"`);
    if (d < DESCRIPTION_RANGE[0] || d > DESCRIPTION_RANGE[1]) errors.push(`${p}: description ${d} chars (want ${DESCRIPTION_RANGE.join('-')})`);
    if (seenTitles.has(h.title)) errors.push(`${p}: duplicate title with ${seenTitles.get(h.title)}`);
    if (seenDescs.has(h.description)) errors.push(`${p}: duplicate description with ${seenDescs.get(h.description)}`);
    seenTitles.set(h.title, p);
    seenDescs.set(h.description, p);
  }
  return errors;
}

// Pages whose plain text goes into llms-full.txt (commercial + reference pages).
const LLMS_FULL_PREFIXES = ['/', '/appliance-packaging-boxes', '/bulk-packaging-boxes', '/corrugated-box-manufacturer-chennai',
  '/5-ply-7-ply-corrugated-boxes', '/pump-motor-packaging-boxes', '/mixer-grinder-packaging-boxes', '/products',
  '/export-packaging', '/food-packaging', '/d2c-packaging', '/faq', '/about', '/contact', '/case-studies', '/carton-specification-reference'];

async function main() {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`dist/index.html not found — run "vite build" before the prerender step.`);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');
  const preloads = fontPreloadTags();

  const heads = new Map<string, HeadData>();
  const texts = new Map<string, string>();
  for (const routePath of ALL_ROUTE_PATHS) {
    const head = computeHeadData(routePath);
    heads.set(routePath, head);
    const appHtml = render(routePath);
    if (LLMS_FULL_PREFIXES.includes(routePath) || routePath.startsWith('/products/')) texts.set(routePath, mainText(appHtml));
    const outPath = outputPathFor(routePath);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, buildHtml(template, head, appHtml, preloads), 'utf-8');
    console.log(`Prerendered ${routePath} -> ${path.relative(process.cwd(), outPath)}`);
  }

  // 404 page: an unmatched path renders <NotFound />; Vercel serves dist/404.html with HTTP 404.
  fs.writeFileSync(path.join(DIST_DIR, '404.html'), buildHtml(template, NOT_FOUND_HEAD, render('/__not-found__'), preloads), 'utf-8');
  console.log('Wrote dist/404.html');

  const urlEntries = ALL_ROUTE_PATHS.map((p) =>
    `  <url>\n    <loc>${SITE_URL}${p === '/' ? '' : p}</loc>\n    <lastmod>${heads.get(p)!.lastmod}</lastmod>\n  </url>`,
  ).join('\n');
  fs.writeFileSync(
    path.join(DIST_DIR, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`,
    'utf-8',
  );
  console.log(`Wrote dist/sitemap.xml (${ALL_ROUTE_PATHS.length} URLs)`);

  const llmsFull = [
    '# Visalatchi Manufactures: full site content',
    '',
    `> Bulk corrugated packaging manufacturer. ${MOQ_RULE} Plant: ${PLANT_ADDRESS_FULL}. Phones: +91 98405 01323 (Palaniappan), +91 94444 20367 (Periyanan).`,
    '',
    ...[...texts].flatMap(([p, t]) => [`## ${heads.get(p)!.title}`, `URL: ${SITE_URL}${p === '/' ? '' : p}`, '', t, '']),
  ].join('\n');
  fs.writeFileSync(path.join(DIST_DIR, 'llms-full.txt'), llmsFull, 'utf-8');
  console.log(`Wrote dist/llms-full.txt (${texts.size} pages)`);

  const errors = validateHeads(heads);
  if (errors.length) {
    console.error(`\nHead-tag check failed (${errors.length}):\n  ${errors.join('\n  ')}`);
    process.exit(1);
  }
  console.log('Head-tag check passed');
}

main().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
