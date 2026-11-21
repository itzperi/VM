# Prompt: maximum search + AI visibility for visalatchimanufacturing.com

Paste everything inside the fence below into Claude Code, opened in the `VM-main` folder.
It runs the full SEO / GEO / AEO / Local / technical / agentic stack in one pass, in a fixed order, with hard fact rules.

A note on "100,000x": no honest plan can promise a multiplier. Pages that do not exist yet cannot rank and AI engines only cite what they can verify. This prompt goes after every lever that moves visibility (indexable pages, entity clarity, citations, reviews, links, AI-readable answers) and measures the result against a baseline, so the growth is real and provable.

Contact change already applied in code (22 Nov 2026): **Palaniappan / 98405 01323 is removed. Aswin Nagappan, +91 73050 20110, is now the D2C & domestic specialist.** `/team/palaniappan` 301-redirects to `/team/aswin-nagappan` (vercel.json). Step 0 below re-verifies this.

---

```
ROLE
You are a senior technical SEO, GEO (generative engine optimisation), AEO (answer engine
optimisation) and local SEO lead working on visalatchimanufacturing.com, the site of
Visalatchi Manufactures, a bulk corrugated and printed packaging manufacturer with its own
plant in Thiruvottiyur, Chennai 600019, Tamil Nadu. Stack: React + Vite, prerendered by
scripts/prerender.ts, deployed on Vercel. Source of truth for business facts:
src/lib/siteConfig.ts, src/data/ownerFacts.ts, src/data/team.ts.

GOAL
Make the business the most visible, most cited and most contacted bulk packaging
manufacturer for its buyers in Chennai, Tamil Nadu and India, across:
  - Google organic + Google Maps / local pack
  - Google AI Overviews and AI Mode
  - ChatGPT Search, Perplexity, Gemini, Microsoft Copilot / Bing, Claude
  - Voice and featured-snippet answers
  - B2B marketplaces (IndiaMART, TradeIndia, JustDial) as citation sources
Business goal: 30-40 qualified enquiries per month for orders of 5,000+ units.

HARD RULES (never break these)
1. MOQ: 5,000 units for large boxes (TV, fan, appliance, export master cartons), 10,000 for
   small boxes (mailers, small cartons, food packs, bags). Use MOQ_LARGE / MOQ_SMALL /
   MOQ_RULE from siteConfig.ts. Never write "low MOQ", "from 50 units" or similar.
2. Pricing is quote-only. Never invent prices, capacities, certifications, years in
   business, client names, reviews, ratings, awards, case-study numbers or team bios.
3. Any fact not already in the codebase or supplied by the owner gets a visible
   TODO(owner) placeholder in a data file, rendered only when filled. Never fake schema
   (no AggregateRating/Review without real reviews, no certification you can't cite).
4. Contacts: Aswin Nagappan (D2C & domestic brands) +91 73050 20110, Periyanan (export &
   food) +91 94444 20367. Palaniappan and 98405 01323 must not appear anywhere.
5. No doorway pages: every city/industry page needs unique, useful content (real
   transport/lead-time notes, relevant box types, local FAQs), or it is not built.
6. Don't break existing URLs. Any rename gets a 301 in vercel.json.
7. Work in small verified steps. After each step run `npm run lint` and
   `npm run seo-check`, and fix anything they flag before moving on.

STEP 0: VERIFY THE CONTACT CHANGE
- grep -ri "palaniappan\|98405\|9840501323" over src, scripts, public, docs, index.html:
  zero hits expected (binary .docx/.pdf/.xlsx excepted; list them for the owner).
- Confirm Aswin Nagappan / +917305020110 in: team.ts, Footer, ContactView, ContactModal,
  FloatingWhatsAppButton, MobileActionBar, D2CView, inquiryStore (WhatsApp target),
  schema.ts (contactPoint + Person), llms.txt, prerender.ts markdown, FAQs, pageAnswers.
- Confirm /team/aswin-nagappan prerenders with ProfilePage + Person schema and that
  vercel.json 301s /team/palaniappan to it. Confirm the sitemap lists the new URL only.

STEP 1: BASELINE AUDIT (write docs/seo-plan/BASELINE-<date>.md)
Score 0-10 each, with evidence: technical, on-page, content depth, schema, GEO
(citability + entity), AEO (answer blocks), local, images, performance (Lighthouse
mobile, LCP/CLS/INP), agent readiness. Record:
- Every route, its title, meta description, H1, canonical, word count, schema types.
- Pages that are thin (<300 words of unique copy), duplicated, orphaned or not in sitemap.
- Current state of robots.txt, sitemap.xml, llms.txt, /.well-known files.
This baseline is what all later "x times better" claims are measured against.

STEP 2: TECHNICAL SEO
- Every route prerenders full HTML (content, links, JSON-LD) without JS. Verify by
  fetching dist/*.html.
- One canonical per page, absolute, self-referencing; trailing-slash policy consistent.
- sitemap.xml: all indexable routes, real <lastmod>, no redirects/404s/noindex URLs.
  Split into sitemap index + pages/blog/products if over 200 URLs.
- robots.txt: keep AI crawlers allowed (GPTBot, OAI-SearchBot, ChatGPT-User,
  PerplexityBot, Google-Extended, ClaudeBot, Claude-SearchBot, Bingbot, Applebot-Extended).
- Custom 404 with links to top categories; no soft 404s.
- Core Web Vitals on mobile: LCP < 2.0s, CLS < 0.05, INP < 200ms. Preload the LCP image,
  serve AVIF/WebP with width/height, lazy-load below the fold, self-host fonts with
  font-display: swap, cut unused JS.
- Security headers stay as in vercel.json. IndexNow ping on deploy (`npm run indexnow`).

STEP 3: ON-PAGE + SEARCH EXPERIENCE (SXO)
For each money page (home, catalog, every product, TV/fan/appliance cartons, export,
food, D2C, bulk landing pages, contact):
- Check the live SERP intent for its main keyword and match the page type to it
  (manufacturer page vs. listicle vs. product grid). Fix mismatches.
- Title <= 60 chars, keyword first, "Chennai" or "India" where intent is local/national.
- Meta description 140-155 chars with MOQ, sample-first and a call to action.
- One H1, logical H2/H3, first 100 words answer "what, for whom, minimum order, where".
- Clear above-the-fold CTA: "Get a bulk quote" + call/WhatsApp the right specialist.
- Internal links: every product links to its category, related products, the spec
  reference, a relevant blog post and the right specialist's team page.
Keyword clusters to cover (build a hub-and-spoke map in docs/seo-plan/CLUSTERS.md):
  corrugated box manufacturer Chennai / Tamil Nadu / India; 3 ply / 5 ply / 7 ply boxes;
  TV carton box, fan carton box, appliance packaging; export master carton; mailer box
  manufacturer; food delivery box, bagasse container, paper bag manufacturer;
  printed corrugated box; carton box Thiruvottiyur / North Chennai / Ennore / Manali /
  Ambattur / Sriperumbudur / Oragadam (industrial belts where buyers are).

STEP 4: GEO (AI SEARCH CITABILITY)
- Every key page gets a 40-60 word direct-answer paragraph near the top that an AI can
  quote verbatim: who you are, what you make, MOQ, location, how to order.
- Question-style H2s ("What is the minimum order for corrugated boxes?") followed by
  self-contained 2-4 sentence answers. Use src/data/pageAnswers.ts as the store.
- Add comparison tables (3 vs 5 vs 7 ply; flute types; box styles) with real spec data
  only. Tables and lists are what AI engines extract most.
- Entity consistency: identical name, address, phone, founding facts across site,
  schema, llms.txt, GBP and every directory. Organization schema with sameAs to every
  real profile (fill SAME_AS in siteConfig.ts as profiles go live).
- llms.txt + llms-full.txt: business summary, MOQ, contacts, key pages with one-line
  descriptions, FAQ answers in plain markdown. Serve a .md version of key pages.
- Add "Last updated" dates and an author/reviewer (team member) to every guide.
- Brand-mention plan: list 20 places where buyers and AIs read (Reddit r/IndiaBusiness,
  Quora packaging questions, LinkedIn articles by Aswin Nagappan and Periyanan, YouTube
  plant walkthrough, industry directories, local news). Draft genuine, non-spammy posts
  into docs/seo-plan/BRAND-MENTIONS.md for the owner to publish by hand.

STEP 5: AEO (FEATURED SNIPPETS + VOICE)
- FAQPage schema only where the FAQ is visible on the page.
- For each top question: answer in the first sentence, then detail. Keep a 1-sentence
  "voice answer" version under 30 words.
- HowTo-style process page (enquiry -> spec -> sample -> approval -> bulk -> dispatch)
  with numbered steps and real lead times once the owner supplies them.
- Glossary page: BF, GSM, BCT, ECT, flute, ply, RSC, die-cut, master carton.

STEP 6: SCHEMA (JSON-LD, validate every page)
- Organization + LocalBusiness (Manufacturer subtype where valid) with address, geo,
  openingHours (TODO(owner) if unknown), telephone, contactPoint per specialist,
  areaServed, sameAs, logo, image.
- WebSite + SearchAction if site search exists; BreadcrumbList on every non-home page.
- Product on product pages: name, description, image, brand, category, additionalProperty
  for ply/flute/MOQ. No offers.price unless real; no ratings unless real.
- Person + ProfilePage on /team/aswin-nagappan and /team/periyanan.
- Article/BlogPosting with author Person, datePublished, dateModified.
- Validate with the Rich Results Test and Schema.org validator; fix all errors.

STEP 7: LOCAL SEO + MAPS
- Google Business Profile checklist for the owner (docs/seo-plan/GBP-CHECKLIST.md):
  primary category "Corrugated box supplier" or "Packaging company", secondaries,
  description with MOQ, services list matching site products, 20+ real plant photos,
  weekly posts, Q&A seeded with real FAQs, review request flow (QR + WhatsApp link).
  Phone on GBP must match the site; add Aswin Nagappan's number where it belongs.
- NAP consistency audit: list every listing found and its exact NAP; mark mismatches.
- Citations to build (owner does by hand, prompt drafts the copy): IndiaMART,
  TradeIndia, JustDial, Sulekha, ExportersIndia, Bing Places, Apple Business Connect,
  Udyam-linked listings, Chennai industrial associations.
- Location pages only for areas the plant really serves, each with unique delivery
  and buyer-industry content (see rule 5). Embed the map on /contact.
- Geo-grid plan: track "corrugated box manufacturer" and "carton box manufacturer" on a
  5x5 grid around the plant monthly; record share of local voice.

STEP 8: CONTENT PLAN + COMPETITOR PAGES
- Find the top 10 competitors ranking for the cluster keywords. For each: pages, content
  gaps, schema, review count, backlinks. Write docs/seo-plan/COMPETITOR-GAPS.md.
- 12-week content calendar of buyer-intent posts (sourcing guides, cost-driver
  explainers without invented prices, spec guides, export carton compliance, food-grade
  packaging rules in India). Each post names its author and links to a money page.
- "Alternatives" / comparison pages only where honest and useful (e.g. "corrugated vs
  plastic crates for appliance shipping"), never attacking named competitors falsely.
- Fill case studies only from real orders the owner approves.

STEP 9: BACKLINKS + DIGITAL PR
- Pull the current backlink profile (free sources: Bing Webmaster, Moz, Common Crawl;
  DataForSEO/Ahrefs if connected). Flag toxic links; disavow only clear spam.
- Link targets: supplier directories, Chennai/Tamil Nadu business associations,
  packaging industry bodies, customer "our suppliers" pages, local news on plant
  investments, guest guides on packaging/logistics sites, HARO-style expert quotes.
- Linkable assets to build on-site: free box-size / board-strength calculator, carton
  spec reference, printable packaging spec checklist (PDF), glossary.
- Draft outreach emails into docs/seo-plan/OUTREACH-DRAFTS.md (kept local, not committed).

STEP 10: IMAGES
- Every image: descriptive filename, alt text describing the actual image, width/height,
  AVIF/WebP, ImageObject in schema for hero/product images.
- Image sitemap entries for product and plant photos.
- OG/Twitter images per key page (1200x630). Write AI image-generation prompts for
  missing OG cards only; never generate fake plant or product photos presented as real.

STEP 11: AGENT READINESS
- Lighthouse agentic/accessibility checks: every button and form has an accessible
  name; quote form usable by keyboard and by browsing agents.
- /.well-known/ discovery files where useful; markdown versions of key pages;
  Content-Signal / AI-use policy in robots.txt consistent with "allow search + cite".
- WebMCP / structured "request a quote" action if feasible without breaking the form.

STEP 12: MEASUREMENT
- GA4 + Google Ads conversion events for: quote submit, call click (per specialist),
  WhatsApp click (per specialist), email click. Separate events for Aswin Nagappan and
  Periyanan so lead routing is measurable.
- Google Search Console + Bing Webmaster verified; submit sitemap.
- Monthly AI-visibility check: ask ChatGPT, Perplexity, Gemini, Copilot and Google AI
  Mode 20 fixed buyer questions ("best corrugated box manufacturer in Chennai",
  "TV carton box supplier Tamil Nadu", ...). Log whether the site is cited and how.
  Store in docs/seo-plan/AI-VISIBILITY-LOG.md.
- Re-run Step 1 scoring every month and chart change vs baseline.

DELIVERABLES
1. Code changes, each step committed separately with a clear message.
2. docs/seo-plan/: BASELINE, CLUSTERS, COMPETITOR-GAPS, BRAND-MENTIONS, GBP-CHECKLIST,
   AI-VISIBILITY-LOG, and an updated IMPLEMENTATION-ROADMAP with owner-only tasks
   separated from code tasks.
3. A final report: before/after scores per area, what changed, what is blocked on
   owner facts (list each TODO(owner)), and the next 3 highest-impact actions.

Stop and ask me before: deleting pages, changing URLs, publishing anything off-site,
or adding any fact you could not verify in the codebase.
```

---

## Owner-only items that cap visibility no matter what code does

1. Update the Google Business Profile phone/contacts to Aswin Nagappan, +91 73050 20110 (and IndiaMART, JustDial, WhatsApp Business, any printed material).
2. Supply real facts for `src/data/ownerFacts.ts` and team bios (years, background, LinkedIn, photo for Aswin Nagappan).
3. Collect real Google reviews from past customers every week.
4. Real plant and product photos.
5. Deploy: Vercel is not linked to the GitHub repo, so pushing alone does not publish.
