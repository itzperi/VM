// Submits every sitemap URL to IndexNow (Bing, Yandex, Seznam, Naver) right
// after a deploy, so new/changed pages are crawled in hours instead of weeks.
// Bing's index also feeds ChatGPT Search and Microsoft Copilot answers.
//
// Usage (after the new build is live):  npx tsx scripts/indexnow.ts
// The key file public/308869a986e6d26d6dfdd726f94a18cb.txt must be deployed first;
// IndexNow fetches it to verify you own the domain.
import { ROUTES, PRODUCT_ROUTE_PATHS, BLOG_ROUTE_PATHS } from '../src/routes';
import { SITE_URL } from '../src/lib/siteConfig';

const KEY = '308869a986e6d26d6dfdd726f94a18cb';
const host = new URL(SITE_URL).host;
const urlList = [...ROUTES.map((r) => r.path), ...PRODUCT_ROUTE_PATHS, ...BLOG_ROUTE_PATHS].map(
  (p) => `${SITE_URL}${p === '/' ? '' : p}`,
);

async function main() {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key: KEY, keyLocation: `${SITE_URL}/${KEY}.txt`, urlList }),
  });
  console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URLs`);
  if (res.status >= 400) console.log(await res.text());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
