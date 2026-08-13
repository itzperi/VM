# Site Structure

Documenting the actual current architecture (already implemented), not a from scratch proposal.

```
/                           Homepage (Organization + LocalBusiness + Breadcrumb schema, 2 map embeds)
├── /d2c-packaging          D2C & e-commerce packaging channel page
├── /food-packaging         Food safe / FMCG packaging channel page
├── /export-packaging       Export packaging channel page
├── /products               Full catalog + price list (Product schema for all 9 products)
│   ├── /products/mailer-box
│   ├── /products/corrugated-shipping-box
│   ├── /products/food-delivery-box
│   ├── /products/courier-return-mailers
│   ├── /products/paper-padded-mailers
│   ├── /products/frosted-zipper-garment-bag
│   ├── /products/custom-printed-paper-carry-bag-eco
│   ├── /products/bagasse-food-container-eco
│   └── /products/paper-bowls-food-containers-eco
├── /process                 How orders flow: choose, sample, produce, ship
├── /about                    Company + named specialist bios
├── /faq                      FAQPage schema, 15 real Q&A pairs
└── /contact                   Quote form, North Chennai coverage content, map embed
```

18 URLs total in sitemap.xml (9 core pages + 9 product pages).

## What is deliberately not built, and why

- **No per city landing pages** (e.g. /packaging-manufacturer-madurai). Google's June 2025 Service Area Business guidance disallows entire states as a declared service area but does not require, and this plan does not recommend, thin duplicate landing pages per city for a single plant business. That pattern reads as doorway page spam. The real path to Madurai/Coimbatore/Trichy visibility is GBP's service area setting (already configured) plus genuine backlinks/citations, not manufactured pages with swapped city names.
- **No per neighborhood pages for North Chennai.** The ~46 real North Chennai localities are handled as one genuine content section on /contact, not 46 separate thin pages. See the seo-local skill's own 30 page warning / 50 page hard stop guidance on location page proliferation.
- **No blog yet.** Deferred to Phase 2 of the roadmap deliberately, see CONTENT-CALENDAR.md and IMPLEMENTATION-ROADMAP.md. A blog with 2 or 3 posts and no real depth is worse than no blog.

## Internal linking

- Every product detail page links back to /products and to 3 related products in the same category
- Catalog cards on /products link to individual product pages
- Footer links to every core page from every page (already implemented)
- Homepage's PathSelector routes to the 3 channel pages (D2C, food, export) based on stated business type

## Schema map (page type to schema types, current implementation)

| Page Type | Schema Types Implemented |
|---|---|
| All pages | Organization + LocalBusiness (with geo, openingHoursSpecification, hasMap, areaServed), BreadcrumbList |
| Product detail pages | Product (name, description, material, image, brand, offers with price/currency/MOQ) |
| /products (catalog) | All 9 Product schemas |
| /faq | FAQPage with 15 Question/Answer pairs |
