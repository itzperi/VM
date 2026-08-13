# Implementation Roadmap

Adjusted from the standard 4 phase template to reflect that meaningful Phase 1 work is already done in code, and that a new Phase 0 exists because the domain is not yet live.

## Phase 0: Go live (blocks everything else)

**Status: not started, this is the actual current bottleneck.**

- Deploy the built app (Vite + Express, see server.ts) to real hosting
- Point visalatchimanufacturing.com's DNS at that hosting, currently DNS resolves but no server responds
- Verify HTTPS works (server.ts already has an HTTPS + canonical host redirect ready for production)
- Submit sitemap.xml to Google Search Console and Bing Webmaster Tools once live
- Request indexing for the homepage via GSC's URL Inspection tool

Nothing in Phase 1 through 4 below can be verified or take effect in real search results until this phase is done.

## Phase 1: Foundation (weeks 1-4 after go live)

**Status: mostly already complete in code, ahead of schedule.**

Already done:
- [x] Core pages (home, about, contact, 3 channel pages, products, process, FAQ)
- [x] Title, meta description, canonical, OG/Twitter tags per route
- [x] Organization + LocalBusiness + BreadcrumbList + Product + FAQPage schema
- [x] Sitemap.xml + robots.txt
- [x] Build time prerendering for crawler visibility
- [x] Google Maps embeds using verified GBP coordinates
- [x] GBP domain, hours, and service area synced with the website

Still to do once live:
- [ ] Google Search Console + Bing Webmaster Tools property verification
- [ ] Google Analytics or equivalent traffic tracking
- [ ] Run Google's Rich Results Test against the live schema to confirm no validation errors post deploy (schema was validated locally against the dev server, but a live-URL pass is the real test)
- [ ] Confirm GBP listing finishes its pending review (the phone number and website edits were shown as Pending in the profile data shared earlier)

## Phase 2: Expansion (weeks 5-12 after go live)

- [ ] Publish first content calendar batch (6 posts, see CONTENT-CALENDAR.md)
- [ ] Add author bios for Palaniappan and Periyanan to /about
- [ ] Replace stock product photography with real product photos as they become available
- [ ] Monitor GSC for the brand term "Visalatchi Manufactures" reaching position 1
- [ ] Monitor which Tier 2 keywords start appearing in GSC's Search Analytics at all (position 50-100 is a normal early signal, not a failure)

## Phase 3: Scale (weeks 13-24 after go live)

- [ ] Citation building: register on IndiaMART, JustDial, TradeIndia with NAP exactly matching the site and GBP (see COMPETITOR-ANALYSIS.md). This requires the business owner's own account, cannot be done via code.
- [ ] Begin soliciting real Google reviews from actual customers
- [ ] Continue content calendar at sustainable cadence
- [ ] Re-run a live audit (seo-audit, seo-technical, seo-page skills) now that there is real traffic and indexing data to analyze, this is the point where those skills become useful, they were not usable pre launch

## Phase 4: Authority (months 7-12)

- [ ] Once real reviews exist, add AggregateRating schema (never before this point)
- [ ] Pursue backlinks from real industry sources: packaging industry associations, D2C brand case studies (with client permission), local business press
- [ ] Reassess Tier 3 head term rankings; these are the slowest moving metric and 12 months is a realistic point to expect meaningful movement, not rank 1

## What "use all the skills" actually means in practice

The user asked to use every seo-* skill available. Skills that need a live URL to fetch (seo-audit, seo-technical inside it, seo-page, seo-bing, seo-seranking, seo-competitor-pages's live comparison mode) cannot run meaningfully until Phase 0 is complete, they were not skipped out of laziness, they are gated on deployment. seo-plan (this document) and seo-schema/seo-local/seo-maps (already applied directly to the codebase in prior work this session) do not require a live URL and have already been used. Once Phase 0 is done, re-run the live-fetch skills, that is the point they produce real signal instead of connection errors.
