# Final report: maximum-visibility pass, 22 Nov 2026

Branch `seo-max-visibility` (git worktree `D:\vm-max`, based on `origin/main` 6b62edf). Nothing is pushed or deployed.

## Before / after scores (0-10)

"Before" is `BASELINE-2026-11-22.md`. "After" is this branch as built locally. The live site will score the "before" column until it is deployed and the www redirect is fixed.

| Area | Before | After | What moved it |
|---|---|---|---|
| Technical | 9 (code) / 6 (live) | 9 (code) / 6 (live) | Code unchanged and clean. Live stays at 6 until the deploy and the www → non-www fix in Vercel. |
| On-page | 9 | 9 | Already passing: all titles 50-60 chars, descriptions 140-158, one H1. |
| Content depth | 8 | 8 | Glossary added (17 terms). Team pages are still thin (about 200 words) until bios exist. |
| Schema | 9 | 9 | Added DefinedTermSet (glossary) and Product additionalProperty (MOQ, material, quote-only pricing, sample). All JSON-LD on 41 pages parses; no ratings or reviews. |
| GEO | 7 | 8 | Markdown copy of every page, glossary, more AI crawlers allowed, product → specialist links. Capped at 8 by off-site entity signals (marketplace profiles, mentions, reviews). |
| AEO | 9 | 10 | Glossary gives quotable one-sentence definitions for every spec term buyers ask about. |
| Local | 6 | 6 | Everything left here is off-site (GBP phone, photos, reviews, citations). Checklist written. |
| Images | 5 | 5 | Product photos are still Unsplash stock. Responsive srcset added; no change in trust until real photos exist. |
| Performance | 8 | 8 | See below. |
| Agent readiness | 7 | 9 | `/<route>.md` for every page with `rel=alternate`, llms.txt points to them, glossary in llms-full.txt. |

### Lighthouse mobile (median of 3, simulated throttling, 4x CPU)

| Page | Perf before → after | SEO | LCP before → after | TBT before → after |
|---|---|---|---|---|
| / | 76 → 77 | 100 → 100 | 3.0 s → 2.9 s | 540 → 420 ms |
| /appliance-packaging-boxes | 90 → 92 | 100 → 100 | 2.6 s → 2.6 s | 220 → 170 ms |
| /products/tv-appliance-packaging-box | 77 → 77 | 100 → 100 | 4.3 s → 4.4 s | 280 → 260 ms |
| /team/aswin-nagappan | 89 → 82 | 100 → 100 | 2.7 s → 2.9 s | 260 → 390 ms |
| /packaging-glossary (new) | – → 78 | 100 | – → 2.9 s | – → 450 ms |

Lighthouse on this machine varies by ±10 points between runs (benchmark index 772-1329), so these differences are within noise. **Product-page LCP did not improve**: the hero image is a remote Unsplash photo and the preload did not shorten it in the lab. Real, self-hosted product photos (AVIF/WebP) are the actual fix. The target of LCP < 2.0 s was not reached on any page.

## What changed (5 commits)

1. `4b00400` Palaniappan / 98405 01323 replaced by Aswin Nagappan / +91 73050 20110 everywhere; `/team/palaniappan` 301 → `/team/aswin-nagappan`.
2. `8f38f93` `/packaging-glossary` page; markdown copies of every page (noindex); more AI crawlers in robots.txt; per-specialist GA4 phone/WhatsApp events and an email-click event; product image srcset/preload; strategy docs (CLUSTERS, COMPETITOR-GAPS, BRAND-MENTIONS, GBP-CHECKLIST, AI-VISIBILITY-LOG).
3. `fb45633` BASELINE audit; roadmap rewritten with owner tasks separate from code tasks.
4. `fac963d` 12-week content calendar.
5. `e2e757f` Product pages link to their specialist's team page and the glossary; Product schema properties; robots.txt Content-Signal turned into a comment (it failed the Lighthouse robots audit).

Local only, not committed: `docs/seo-plan/OUTREACH-DRAFTS.md`.

## Not done, and why

- **Backlink profile (Step 9)**: no backlink API is connected (Moz, Bing Webmaster, Ahrefs, DataForSEO). Pull it from Bing Webmaster Tools once verified.
- **Competitor review counts and backlinks (Step 8)**: same reason. Competitors were identified from live search results instead.
- **Live SERP intent check per page (Step 3)**: two live searches were run; both are dominated by IndiaMART/TradeIndia listings, which shapes the advice below. A per-keyword check needs a SERP tool.
- **Rich Results Test (Step 6)**: needs the deployed URL. JSON-LD was validated locally (parses, correct types, no fake ratings).
- **Area pages for Ennore/Manali/Ambattur/Sriperumbudur/Oragadam**: not built. Rule 5: no real area-specific facts exist yet.
- **Image sitemap and OG images**: skipped while product photos are stock; adding them to an image sitemap would advertise stock photos as the company's.
- **/.well-known files and WebMCP**: nothing useful to put there yet; the quote form already passes accessibility 100.

## Blocked on owner facts (every TODO(owner))

`src/data/ownerFacts.ts`: `email`, `foundingYear`, `capacity`, `machinery`, `boardRange`, `certifications`, `leadTimeLarge`, `leadTimeSmall`, `numberOfEmployees`, `googleSiteVerification`.
`src/data/team.ts`: `background` and `linkedIn` for Aswin Nagappan and Periyanan (plus a photo of each).
`src/data/caseStudies.ts`: real case studies (unlocks `/case-studies`).
`src/data/specReference.ts`: real carton spec rows (unlocks `/carton-specification-reference`).
`src/lib/siteConfig.ts`: `SAME_AS` profile URLs (IndiaMART, TradeIndia, LinkedIn, JustDial, Facebook).
`src/data/products.ts`: real photos to replace 12 Unsplash images.
Vercel env vars: `VITE_GA_MEASUREMENT_ID`, `VITE_GOOGLE_ADS_CONVERSION`, `VITE_WEB3FORMS_KEY` (if not already set).

## Next 3 highest-impact actions

1. **Deploy this branch and fix the www redirect in Vercel.** Until then search engines and AI see the old phone number, and every canonical points at a redirecting URL.
2. **Update the phone on Google Business Profile, then create IndiaMART and TradeIndia profiles with the same NAP.** Marketplace listings are what rank and get cited for Chennai carton searches today.
3. **Real photos and weekly genuine reviews.** They lift the images, local and GEO scores at once, and fix product-page LCP when self-hosted.
