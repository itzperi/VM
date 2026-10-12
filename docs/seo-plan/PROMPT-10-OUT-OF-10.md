# Prompt: take visalatchimanufacturing.com to 10/10 in SEO, GEO, AEO and Local

Audit baseline (12 Oct 2026, see `seo-audit-visalatchimanufacturing-com-2026-10-12.pdf`):
**SEO 9/10 · GEO 7/10 · AEO 10/10 · Local ~59/100 · Technical: mostly clean.**

This file has three parts:

- **Part A**: facts only the owner can supply. Fill them in first. Without them GEO and Local cannot pass 8.
- **Part B**: the prompt to paste into Claude Code. It covers all the code work.
- **Part C**: off-site actions the owner does by hand. These are what move GEO and Local to 10.

---

## Part A: Owner fact sheet (fill in, then paste into the Part B prompt)

Leave a line blank if it isn't true or you can't prove it. Never guess: a wrong fact costs more trust than a missing one.

```
BUSINESS
- Registered legal name (as on GST certificate):
- GSTIN:
- Udyam / MSME registration number:
- Year the plant started production:
- Business email for enquiries (on your own domain, e.g. sales@visalatchimanufacturing.com):
- Number of employees (approx.):

PLANT AND CAPABILITY
- Production capacity (e.g. "20,000 boxes per day" or "300 tonnes of board per month"):
- Main machines (make/model if known: corrugator, printer-slotter, die-cutter, stitcher, gluer):
- Ply range actually produced (3 / 5 / 7):
- Board/paper grades and BF range (e.g. "16-35 BF kraft, duplex"):
- Flutes produced (A, B, C, E, combinations):
- Maximum box size (L x W x H mm):
- Print capability (colours, flexo/offset):
- Certifications actually held, with certificate number and issuer (ISO 9001, FSC, BIS etc.):
- In-house testing (BCT, bursting strength, GSM, moisture), and which instruments:

LEAD TIMES (counted from sample approval)
- Large boxes (TV / fan / appliance / export cartons): __ working days
- Small boxes (mailers, small cartons, food packs, bags): __ working days
- Sample turnaround: __ working days

TEAM (repeat per person)
- Name / role:
- Years in the packaging trade:
- Previous experience (one or two sentences, true and checkable):
- Personal LinkedIn URL:
- Photo available? (yes/no)

PROOF
- 2-3 real orders we can publish as case studies (customer industry, box spec, quantity, problem, result; customer name only with written permission):
- Real job specs for the spec reference table (product, carton size, ply, board grade):
- Customer logos we have written permission to show:
- Real testimonials with permission (name, company, quote):
- Real plant photos (machines, stacked finished cartons, loading): count:

PROFILES THAT EXIST TODAY (paste exact URLs)
- Google Business Profile: https://maps.app.goo.gl/F9VCUnqTkmb3cx568
- IndiaMART:
- TradeIndia:
- JustDial:
- LinkedIn company page:
- Facebook page:
- Instagram:
- YouTube:
- Industry association membership (e.g. FCBM / ICCMA / local chamber):

TRACKING
- Google Search Console verification token (content="..." value):
- Bing Webmaster verification token:
- GA4 measurement ID (G-...):
- Web3Forms access key:
```

---

## Part B: Prompt to paste into Claude Code

> Copy everything inside the box into a new Claude Code session opened in the `D:/vm-repo` clone. Paste your completed Part A fact sheet where marked.

```text
You are working on the Visalatchi Manufactures website (React 19 + Vite, prerendered to static
HTML by scripts/prerender.ts, deployed to Vercel). Repo clone: D:/vm-repo (C: drive is full; build
and run everything from D:). Domain: https://visalatchimanufacturing.com. Business: bulk corrugated
packaging manufacturer in Thiruvottiyur, Chennai. MOQ 5,000 units large boxes / 10,000 small boxes.
Quote-only pricing.

GOAL: reach 10/10 in SEO, GEO (AI search) and AEO (answer engines), and 90+/100 local SEO, without
breaking anything that already scores 100 (Lighthouse Accessibility, Best Practices, SEO).

HARD RULES
1. Never invent facts. Use only what is in the fact sheet below or already on the site. If a field
   is blank, leave the feature hidden. The site already hides empty OWNER_FACTS fields; keep it that way.
2. No fake reviews, ratings, testimonials, logos, certifications, prices or capacity numbers.
   No AggregateRating schema unless real reviews are shown on the page.
3. All copy: Indian English, no em dashes, 40-60 word answer-first paragraphs under question headings.
4. Single source of truth: facts live in src/data/*.ts and src/lib/siteConfig.ts. Visible text and
   JSON-LD must be generated from the same data, never typed twice.
5. After every task run: `npx tsc --noEmit`, `npm run vercel-build`, `npx tsx scripts/seo-check.ts`.
   All must pass. Do not commit or push until I approve the diff.

=== OWNER FACT SHEET ===
[PASTE COMPLETED PART A HERE]
=== END FACT SHEET ===

TASKS (do them in order and report after each group)

GROUP 1: GEO ENTITY AND E-E-A-T (target GEO 7 -> 10)
1.1 Fill src/data/ownerFacts.ts from the fact sheet: email, foundingYear, capacity, machinery,
    boardRange, certifications (name, issuer, url), leadTimeLarge, leadTimeSmall,
    numberOfEmployees, googleSiteVerification.
1.2 Check that every filled field renders where it should, and add rendering where it is missing:
    - About page: a "Company facts" definition list (founded, plant address, capacity, machinery,
      ply/board range, certifications with links, employees, GSTIN/Udyam if supplied).
    - Organization/LocalBusiness JSON-LD (src/lib/schema.ts): foundingDate, email,
      numberOfEmployees (QuantitativeValue), hasCredential (EducationalOccupationalCredential per
      certification), taxID (GSTIN), legalName, and for each machine/capability a
      knowsAbout/makesOffer entry.
    - Contact page and footer: business email as a mailto link (NAP must stay identical everywhere).
    - FAQ answer "What is the lead time for a bulk order?" and the /process Q&A: use the real lead
      times from OWNER_FACTS instead of the product-specific examples.
    - <meta name="google-site-verification"> and msvalidate.01 (Bing) in the prerendered head.
1.3 SAME_AS in src/lib/siteConfig.ts: add every profile URL from the fact sheet (only ones that
    exist). Also render them as visible "Find us on" links in the footer with rel="me noopener".
1.4 Team (src/data/team.ts): fill background and linkedIn. On /team/:slug show years of experience,
    background, LinkedIn and photo (if supplied, as WebP with width/height and alt). Extend the
    ProfilePage/Person schema with sameAs, knowsAbout, worksFor (@id of the organisation), image
    and hasOccupation.
1.5 Case studies (src/data/caseStudies.ts) and spec reference rows (src/data/specReference.ts):
    add the real entries. The /case-studies and /carton-specification-reference routes switch on
    automatically when the arrays are non-empty. Then:
    - Add both to the footer and to src/lib/breadcrumbs.ts (labels already exist).
    - Link each case study from the matching product page and landing page ("Real order: ...").
    - Give case studies Article schema with about -> the Product, and the spec page a
      Dataset or Table-style ItemList schema.
1.6 Testimonials: only if real, permissioned quotes are supplied. Add a Testimonials component
    on the homepage and the matching landing pages, with Review schema (author Person, itemReviewed
    the Organization). Add AggregateRating only if 5+ real reviews are shown on that page.
1.7 Original data asset for AI citation: build /carton-strength-guide (or extend the spec page),
    a table of real board grades -> typical BCT/bursting strength -> suitable product weight,
    from the plant's own test records only. Mark it up as Dataset, add it to llms.txt,
    llms-full.txt and the sitemap.
1.8 Update public/llms.txt with the new facts (founded, capacity, certifications, lead times,
    profiles) and confirm llms-full.txt picks up the new pages (LLMS_FULL_PREFIXES in
    scripts/prerender.ts).

GROUP 2: SEO PERFORMANCE (target SEO 9 -> 10; Lighthouse mobile performance 90+ on every page)
Measured 12 Oct (simulated mobile, 4x CPU): home 89, /appliance-packaging-boxes 66-77,
/products/tv-appliance-packaging-box 73-79. LCP element is the .speakable text paragraph, with
~2.7 s "element render delay" and 1.4 s of Style & Layout.
2.1 Remove entrance animations from above-the-fold content. Every view root uses
    "animate-in fade-in duration-300" (opacity 0 -> 1), which delays LCP. Drop it from view roots
    (AboutView, BlogIndexView, BlogPostView, BulkLandingView, CatalogView, ContactView, D2CView,
    ExportView, FAQView, FoodView, ProcessView, ProductDetailView) or restrict it to
    prefers-reduced-motion: no-preference AND below-the-fold elements only. Same for the hero's
    fade-in-up classes.
2.2 Code-split data per route. assets/content-*.js (153 KB raw / 43 KB gz) holds all products, blog
    posts, landing pages and FAQs and loads on every page. Lazy-load route views with React.lazy
    + Suspense (keeping SSR in prerender.ts working: render the resolved component server side,
    hydrate with the same chunk preloaded via <link rel="modulepreload"> for that route only),
    so a landing page doesn't ship blog post bodies.
2.3 Cut unused JS (Lighthouse estimates 55 KiB, mostly in the react and index chunks): check for
    unused imports, make sure lucide-react icons are imported individually, and keep server-only
    packages (@google/genai, express) out of the client graph. Check with `npx vite-bundle-visualizer`.
2.4 Reduce Style & Layout cost: stop the ProcessMarquee infinite animation when it is
    off-screen (IntersectionObserver toggling animation-play-state) and use transform-only
    animation with will-change on the moving track. Add content-visibility:auto with
    contain-intrinsic-size to below-the-fold sections (marquee, footer, map, related products).
2.5 Fonts: inter-latin.woff2 (48 KB) + fraunces-latin.woff2 (37 KB). Subset both to the characters
    actually used (Latin basic + ₹ + punctuation) with glyphhanger or pyftsubset, keep preload only
    for the font used by the LCP text, use font-display: swap plus size-adjust fallback metrics so
    swapping causes no CLS.
2.6 Defer the Google Maps iframe: render a static placeholder (address + "Load map" button,
    or loading="lazy" plus an IntersectionObserver that only sets src when near the viewport).
2.7 Images: confirm every product image is AVIF/WebP with srcset/sizes, and the above-the-fold
    image (if any) has fetchpriority="high" and no lazy loading.
2.8 Verify: run Lighthouse mobile 3x per page on /, /appliance-packaging-boxes,
    /products/tv-appliance-packaging-box, /blog/appliance-packaging-guide and /faq against a server
    that mimics Vercel clean URLs and gzip (NOT `vite preview`, which serves the homepage HTML for
    folder routes and causes React hydration error #418). Target: median performance >= 90,
    LCP <= 2.5 s, TBT <= 200 ms, CLS 0, and still 100 for Accessibility, Best Practices and SEO.

GROUP 3: TECHNICAL AND CRAWL (keep "clean")
3.1 Add a scripts/link-check.ts step to vercel-build that fails the build on any internal link to
    a non-existent route, any page with fewer than 3 internal inlinks, duplicate titles or
    descriptions, heading-level skips, or JSON-LD that doesn't parse. (The crawl logic used in the
    12 Oct audit is a good template.)
3.2 Add a vercel.json redirect from www.visalatchimanufacturing.com to the apex (308), and from
    any old low-MOQ URLs to their current equivalents (check the live site's old sitemap first).
3.3 Add <link rel="alternate" type="text/plain" href="/llms.txt"> and an RSS/Atom feed for /blog
    (feed.xml with full summaries), referenced in the head and robots.txt.
3.4 Add image sitemap entries (<image:image>) for product images in sitemap.xml.
3.5 Add IndexNow key verification and run `npm run indexnow` as a post-deploy step.

GROUP 4: LOCAL SEO ON-SITE (target local 90+)
4.1 Make the GBP service area and siteConfig TAMIL_NADU_CITIES identical (owner updates GBP to
    the same 12 cities, or trim the site list to match GBP).
4.2 Add a /visit-our-plant section on /contact or /about: plant photos (real), landmark
    directions, loading-bay/truck access notes, hours, and the GBP embed. Add it to the
    LocalBusiness schema as photo / image ImageObjects.
4.3 Show real Google reviews once they exist: a link "Read our Google reviews" to the GBP review
    URL, plus 3 quoted reviews with permission. No embedded widgets that load third-party JS on
    page load.
4.4 Keep NAP byte-identical across site, schema, GBP and every directory: name "Visalatchi
    Manufactures", address from PLANT_ADDRESS, phones "+91 98405 01323" and "+91 94444 20367".

GROUP 5: CONTENT FOR AEO/GEO DEPTH (keep AEO at 10, push GEO)
5.1 Publish the next 4 posts in docs/seo-plan/CONTENT-CALENDAR.md, each 1,500+ words, with a
    named author from data/team.ts, 6+ external citations to authoritative sources (BIS, FSSAI,
    DGFT, ISTA, TAPPI), a comparison table, a 40-60 word answer under every question H2, and
    real photos where possible.
5.2 Add "Last reviewed by <name>, <role>" with date on every product and landing page (from
    team data), and an editorial policy section on /about stating how specs are checked.
5.3 Make every product page link to one relevant blog post and one case study, and every blog
    post link to 2+ product or landing pages with descriptive anchors.

DELIVERABLES
- A summary table: task -> files changed -> verification result.
- Before/after Lighthouse medians per page.
- A list of anything you could not do because a fact-sheet field was blank.
- Re-run the SEO/GEO/AEO audit on the built dist/ and report new scores with evidence.
```

---

## Part C: Off-site actions (owner). Code alone cannot reach 10 without these

| # | Action | Moves | Effort |
|---|---|---|---|
| 1 | **Deploy.** Connect Vercel to the GitHub repo (Vercel → Project → Settings → Git) so a push to `main` deploys. The live site still runs an old build. | All | 10 min |
| 2 | **Google Search Console + Bing Webmaster Tools.** Verify the domain, submit `/sitemap.xml`, request indexing for the homepage and the 6 landing pages. | SEO | 30 min |
| 3 | **Business listings with identical NAP:** IndiaMART, TradeIndia, JustDial, ExportersIndia, Sulekha, LinkedIn company page, Facebook page. Copy-paste text is already in `docs/seo-plan/OFF-SITE-ACTION-PLAYBOOK.md`. Send each live URL back so it goes into `SAME_AS`. | GEO, Local | 1 day |
| 4 | **Google Business Profile:** primary category "Corrugated box supplier", secondary "Packaging supply store" / "Box supplier" / "Manufacturer"; 750-character description with MOQ; 10+ real photos (plant, machines, finished stock, loading); products added with photos; weekly posts; Q&A seeded with the top 5 FAQs; service area = the 12 cities on the site. | Local | 2 hours, then 15 min a week |
| 5 | **Reviews:** ask every completed bulk customer for a Google review with a direct review link (GBP → "Ask for reviews"). Target 15+ in 90 days. Reply to every review within 48 hours. | Local, GEO | Ongoing |
| 6 | **Backlinks (10-20 relevant):** industry association member listings (FCBM, ICCMA, Tamil Nadu chambers), supplier pages of existing customers, local business news, the Udyam/MSME directory, trade-show exhibitor pages. | SEO, GEO | Ongoing |
| 7 | **Brand mentions for AI engines:** answer packaging questions on Quora/Reddit as the company (no spam), post plant videos on YouTube with the brand name and city in the title, publish one LinkedIn article a month from each team member. | GEO | Ongoing |
| 8 | **Photos and proof:** real photos of the plant, machines, team and 2-3 finished orders; written permission from 2-3 customers for case studies and testimonials. | GEO, Local | 1 day |

---

## What "10/10" means here (pass criteria for the re-audit)

| Area | Must be true |
|---|---|
| **SEO 10** | Lighthouse mobile median ≥ 90 on all key templates; 100 Accessibility/Best Practices/SEO; 0 broken links, duplicates or heading skips; indexed in GSC with no coverage errors; 10+ relevant referring domains |
| **GEO 10** | Founding year, capacity, machinery, certifications and lead times on site and in schema; team credentials + LinkedIn; 5+ consistent `sameAs` profiles; third-party mentions findable by web search; 2+ real case studies; one original data asset (strength/spec table) |
| **AEO 10** | (already met) question headings with 40-60 word answers on every commercial page; FAQPage/HowTo/Speakable matching visible text; keep it true for every new page |
| **Local 90+** | GBP complete with photos, weekly posts and 15+ reviews with replies; identical NAP on 7+ directories; GBP service area matches the site; local backlinks |
