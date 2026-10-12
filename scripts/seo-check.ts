// Post-build SEO gate: `npx tsx scripts/seo-check.ts` (after `npm run vercel-build`).
// Loads every dist/**/index.html and fails (exit 1) on any violation of the
// on-page rules in docs/seo-plan/PROMPT-10-OUT-OF-10.md (Phase 5).
import fs from 'node:fs';
import path from 'node:path';
import { SITE_URL } from '../src/lib/siteConfig';
import { PUBLISHED_LANDING_PAGES } from '../src/data/landingPages';

const DIST = path.resolve(process.cwd(), 'dist');
const LANDING = new Set(PUBLISHED_LANDING_PAGES.map((p) => p.path));

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) return e.name === 'assets' ? [] : walk(full);
    return e.name === 'index.html' ? [full] : [];
  });
}

const decode = (s: string) =>
  s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
const norm = (s: string) => decode(s).replace(/\s+/g, ' ').trim();

function visibleText(html: string): string {
  const body = html.split('<div id="root">')[1] ?? '';
  return norm(body.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' '));
}

function routeOf(file: string): string {
  const rel = path.relative(DIST, path.dirname(file)).split(path.sep).join('/');
  return rel ? `/${rel}` : '/';
}

const failures: string[] = [];
const fail = (p: string, msg: string) => failures.push(`${p}: ${msg}`);
const titles = new Map<string, string>();
const descs = new Map<string, string>();
const links = new Map<string, Set<string>>();
const stats: { route: string; words: number; types: string }[] = [];

const files = walk(DIST);
for (const file of files) {
  const route = routeOf(file);
  const html = fs.readFileSync(file, 'utf8');
  const text = visibleText(html);
  const words = text.split(' ').filter(Boolean).length;

  // H1
  const h1s = (html.split('<div id="root">')[1]?.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) fail(route, `${h1s} <h1> elements`);

  // Title / description
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  if (title.length < 30 || title.length > 60) fail(route, `title ${title.length} chars`);
  if (desc.length < 120 || desc.length > 158) fail(route, `description ${desc.length} chars`);
  if (titles.has(title)) fail(route, `duplicate title with ${titles.get(title)}`);
  if (descs.has(desc)) fail(route, `duplicate description with ${descs.get(desc)}`);
  titles.set(title, route);
  descs.set(desc, route);

  // Canonical
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const expected = `${SITE_URL}${route === '/' ? '' : route}`;
  if (canonical !== expected) fail(route, `canonical ${canonical} != ${expected}`);

  // JSON-LD
  let schemas: any[] = [];
  const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  try {
    schemas = ld ? JSON.parse(ld) : [];
  } catch (e) {
    fail(route, `JSON-LD does not parse: ${(e as Error).message}`);
  }
  const types = new Set(schemas.flatMap((s) => [].concat(s['@type'])));
  const need = ['Organization', 'BreadcrumbList'];
  if (route.startsWith('/products/')) need.push('Product', 'FAQPage');
  else if (route.startsWith('/blog/')) need.push('Article');
  else if (route.startsWith('/team/')) need.push('ProfilePage');
  else if (LANDING.has(route) || route === '/faq') need.push('FAQPage');
  else if (route === '/') need.push('WebSite');
  for (const t of need) if (!types.has(t)) fail(route, `missing ${t} schema`);
  stats.push({ route, words, types: [...types].join(', ') });

  // FAQ schema text must be visible
  for (const s of schemas.filter((x) => x['@type'] === 'FAQPage')) {
    for (const q of s.mainEntity) {
      if (!text.includes(norm(q.name))) fail(route, `FAQ question not visible: "${q.name.slice(0, 60)}"`);
      if (!text.includes(norm(q.acceptedAnswer.text))) fail(route, `FAQ answer not visible: "${q.name.slice(0, 60)}"`);
    }
  }

  // Images
  const root = html.split('<div id="root">')[1] ?? '';
  for (const img of root.match(/<img\b[^>]*>/g) || []) {
    const decorative = /aria-hidden="true"/.test(img) && /alt=""/.test(img);
    if (!decorative && !/alt="[^"]+"/.test(img)) fail(route, `img without alt: ${img.slice(0, 90)}`);
    if (!/\swidth="\d+"/.test(img) || !/\sheight="\d+"/.test(img)) fail(route, `img without width/height: ${img.slice(0, 90)}`);
  }

  // Legacy MOQ copy + MOQ numbers
  if (/50 units|low MOQ/i.test(text)) fail(route, 'legacy "50 units / low MOQ" copy');
  for (const m of text.matchAll(/\b(?:MOQ|minimum order(?: quantity)?(?: is)?)\s*(?:of\s*)?:?\s*([\d,]{3,})(?!\s*(?:GSM|BF|mm|cm|kg|g\b))/gi)) {
    const n = m[1].replace(/,/g, '');
    if (n !== '5000' && n !== '10000') fail(route, `unexpected MOQ number "${m[0]}"`);
  }

  // Word count for commercial + editorial pages
  if ((route.startsWith('/products/') || route.startsWith('/blog/') || LANDING.has(route)) && words < 600) {
    fail(route, `${words} words (< 600)`);
  }

  // Internal links for the reachability check
  const out = new Set<string>();
  for (const m of root.matchAll(/href="(\/[^"#?]*)/g)) out.add(m[1].replace(/\/$/, '') || '/');
  links.set(route, out);
}

// Reachability: every page within 3 clicks of the homepage.
const depth = new Map<string, number>([['/', 0]]);
const queue = ['/'];
while (queue.length) {
  const cur = queue.shift()!;
  for (const next of links.get(cur) ?? []) {
    if (!depth.has(next) && links.has(next)) {
      depth.set(next, depth.get(cur)! + 1);
      queue.push(next);
    }
  }
}
for (const route of links.keys()) {
  const d = depth.get(route);
  if (d === undefined) fail(route, 'orphan: not reachable from /');
  else if (d > 3) fail(route, `${d} clicks from / (> 3)`);
}

console.log(`Checked ${files.length} pages.`);
console.table(stats.sort((a, b) => a.route.localeCompare(b.route)));
if (failures.length) {
  console.error(`\n${failures.length} SEO check failure(s):\n  ${failures.join('\n  ')}`);
  process.exit(1);
}
console.log('All SEO checks passed.');
