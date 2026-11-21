# Implementation roadmap (updated 22 Nov 2026)

Baseline: `BASELINE-2026-11-22.md`. Strategy docs: `CLUSTERS.md`, `COMPETITOR-GAPS.md`, `BRAND-MENTIONS.md`, `GBP-CHECKLIST.md`, `AI-VISIBILITY-LOG.md`.

## A. Owner-only tasks (code cannot do these; they decide the ceiling)

In order of impact:

1. **Deploy the new build.** The live site still shows Palaniappan / 98405 01323. Vercel isn't linked to the GitHub repo, so pushing alone doesn't publish. Deploy from the Vercel dashboard or CLI.
2. **Fix the www redirect in Vercel.** Make `visalatchimanufacturing.com` the primary domain and redirect `www` to it, so canonicals stop pointing at a redirecting URL.
3. **Update the phone number everywhere off-site**: Google Business Profile, WhatsApp Business, IndiaMART/JustDial if they exist, visiting cards (see `GBP-CHECKLIST.md` §1).
4. **Create IndiaMART and TradeIndia profiles.** They own page 1 for every Chennai carton search. Then add the URLs to `SAME_AS` in `src/lib/siteConfig.ts`.
5. **Real photos**: plant, machines, finished cartons. Replace the 12 Unsplash stock photos in `src/data/products.ts`, and add 20+ to GBP.
6. **Reviews**: 1-2 genuine Google reviews a week (`GBP-CHECKLIST.md` §4).
7. **Owner facts** in `src/data/ownerFacts.ts`: email, founding year, capacity, machinery, board range, certifications, lead times. Each one appears on the site and in schema automatically once filled.
8. **Team bios** in `src/data/team.ts`: background, years in trade, LinkedIn, photo, for Aswin Nagappan and Periyanan.
9. **Real data** for `src/data/caseStudies.ts` and `src/data/specReference.ts`. `/case-studies` and `/carton-specification-reference` publish themselves once these have one entry.
10. **Search Console + Bing Webmaster**: verify (paste the token into `googleSiteVerification`), submit the sitemap, run `npm run indexnow` after each deploy.
11. **GA4**: set `VITE_GA_MEASUREMENT_ID` (and `VITE_GOOGLE_ADS_CONVERSION` if running ads) in Vercel env vars; register `specialist` as an event-scoped custom dimension.
12. **Brand mentions**: publish the drafts in `BRAND-MENTIONS.md`, one or two a week.
13. **Monthly**: fill `AI-VISIBILITY-LOG.md` and the geo-grid table.

## B. Code tasks

Done on branch `seo-max-visibility`:
- [x] Contact change: Aswin Nagappan +91 73050 20110 replaces Palaniappan; 301 from the old team URL
- [x] `/packaging-glossary` with DefinedTermSet schema (17 terms)
- [x] Markdown copy of every page (`/<route>.md`), linked with `rel=alternate`, served noindex
- [x] robots.txt Content-Signal + Apple/Perplexity-User/Vertex crawlers
- [x] Per-specialist phone/WhatsApp click events, email click event
- [x] Product LCP: responsive srcset, early preconnect + preload

Next, once owner facts arrive (each is small):
- [ ] Swap product images to real photos; then add an image sitemap and ImageObject captions
- [ ] Team pages: render background/LinkedIn/photo (fields already wired), add `Person.sameAs`
- [ ] Area section on `/corrugated-box-manufacturer-chennai` for Ennore, Manali, Ambattur, Sriperumbudur, Oragadam, only with real delivery/lead-time facts
- [ ] Lead-time numbers into `/process` and HowTo schema
- [ ] Container-loading guide (needs Periyanan's real examples)
- [ ] Home page TBT: defer the hero video/marquee JS (home perf 76; the largest remaining speed item)
- [ ] Re-run `BASELINE` scoring monthly and record the change
