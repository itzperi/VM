# Competitor gaps: bulk corrugated packaging, Chennai (22 Nov 2026)

Method: live web searches for "corrugated box manufacturer Chennai" and "TV carton box manufacturer Tamil Nadu export master carton Chennai" (22 Nov 2026). Facts below are what the competitors' own marketplace listings say; none were verified independently. Review counts and backlink data need a paid tool (DataForSEO / Ahrefs / Semrush), which isn't connected, so those columns are left for the next audit.

## The key finding

**The first results page is almost entirely IndiaMART and TradeIndia profiles, not company websites.** For Chennai corrugated-box searches, Google (and AI engines that cite Google results) currently treat marketplace listings as the answer. So:

1. Visalatchi needs complete IndiaMART and TradeIndia profiles. They are the pages that rank and that AI answers quote. Its own site then wins the longer, spec-heavy searches (ply, BF, appliance cartons, export cartons, MOQ), where marketplace listings are thin.
2. Almost no competitor has its own content site with guides, a glossary, spec explanations or schema. That is the gap visalatchimanufacturing.com already fills, and it should keep widening it.

## Competitors seen (self-reported, from listings)

| Competitor | Location | What the listing claims | Own website with content? | Gap Visalatchi can exploit |
|---|---|---|---|---|
| Tgi Packaging Pvt Ltd | SIPCOT Irungattukottai | Large-format and double-wall boards and boxes, export cartons, about 33 years in business, 51-100 staff | Listing only in results | Appliance-specific pages, MOQ clarity, sample-first process, named specialists |
| Chennai Polypack Pvt Ltd | Chennai | 3- and 5-ply boxes, started 1997, lists per-piece prices | Listing | Spec guides (ply/BF), bulk positioning |
| Sri Venkateswara Packaging | Korukkupet, Ennore High Road (North Chennai, near Thiruvottiyur) | Corrugated boxes, paper pouches, est. 1996 | Listing | **Closest geographic rival.** Beat it on GBP reviews and photos, and on North Chennai location relevance |
| Manigandan Packaging | Thandalam, Kovoor | Printed corrugated boxes, e-commerce boxes | Listing | D2C mailer content, printed box guides |
| Kaaran Cartons | Kollumedu | 3/5/7-ply boxes, rolls, sheets; GST registered Oct 2024 | Listing | Established manufacturer signals (once the owner supplies founding year) |
| M. M. Cartons | Morai, Tiruvallur | Export cartons, duplex, printed corrugated | Listing | Export carton compliance content |
| Pooja Cartons & Containers | Vellanur | Packing boxes, est. 2004 | Listing | Same as above |
| A One Enterprises | Chennai | Corrugated boxes, kraft paper, printing, est. 2015 | Listing | Same as above |
| Sai Muruga Packages | Chennai | Boxes for toys, apparel, bottles | Listing | Industry pages |
| Eco Packaaging Industries | Mogappair East | Export carton boxes (Dial4Trade) | Listing | Same as above |

**Nobody in the results targets TV, fan or appliance cartons by name.** That niche (`/appliance-packaging-boxes`, `/products/tv-appliance-packaging-box`, `/products/ceiling-fan-packaging-box`, `/pump-motor-packaging-boxes`, `/mixer-grinder-packaging-boxes`) is open, and the site already has pages for it.

## What competitors have that Visalatchi does not (yet)

| Signal | Competitors | Visalatchi | Fix (owner) |
|---|---|---|---|
| Founding year shown | Most (1996, 1997, 2004, 2015) | Not published | Fill `foundingYear` in `src/data/ownerFacts.ts` |
| Employee count / turnover band | Several | Not published | Fill `numberOfEmployees` (optional) |
| Marketplace profile (IndiaMART / TradeIndia) | All | Not in `SAME_AS` | Create both, same NAP, then add URLs to `SAME_AS` |
| Real product photos | Many | Product pages use stock photos (Unsplash) | Shoot real plant and product photos (see below) |
| Price shown | Some (₹/piece) | Quote-only by design | Keep quote-only; the price-factors guide covers this intent |

## Important: product images are stock photos

All 12 products in `src/data/products.ts` use `images.unsplash.com` photos, and the same URLs feed the Product schema `image` and the OG image of each product page. This is the largest remaining trust gap: buyers and Google both reward real plant photos, and a stock photo labelled as a product can mislead. I left the images in place (removing them changes the design), but they should be replaced with real photos as soon as they exist. I did not add them to an image sitemap for the same reason.
