# Keyword clusters: hub-and-spoke map (22 Nov 2026)

Each cluster has one **hub** (the page that should rank for the head term) and **spokes** (pages that answer narrower questions and link up to the hub). Volumes aren't listed: no keyword tool is connected. Add them from Google Keyword Planner or Search Console once it has data.

Status: ✅ page exists · 🟡 exists but needs work · ⬜ not built (needs owner facts or content first).

## 1. Corrugated box manufacturer (location)
Hub: ✅ `/corrugated-box-manufacturer-chennai`
- corrugated box manufacturer Chennai / Tamil Nadu / India → hub
- carton box manufacturer Thiruvottiyur / North Chennai → hub (plant address, map, GBP)
- carton box Ennore / Manali / Ambattur / Sriperumbudur / Oragadam → ⬜ **do not build separate pages yet.** Rule 5 (no doorway pages): build an area page only once the owner can supply real, area-specific content (customers served there, transit time, typical box types). Until then, a "Areas we deliver to" section on the hub covers these terms.
- Spokes: ✅ `/about`, ✅ `/contact`, ✅ `/process`, ✅ `/blog/how-to-choose-bulk-packaging-supplier-india`

## 2. Ply and board grade
Hub: ✅ `/5-ply-7-ply-corrugated-boxes`
- 3 ply / 5 ply / 7 ply box, ply difference → ✅ `/blog/corrugated-box-ply-thickness-explained`
- BF, GSM, ECT, BCT, bursting strength meaning → ✅ `/packaging-glossary` (new)
- corrugated box price factors → ✅ `/blog/corrugated-box-price-factors-bulk`
- ⬜ `/carton-specification-reference` (auto-publishes once real spec rows are added to `src/data/specReference.ts`)

## 3. Appliance cartons (least competition, highest ticket)
Hub: ✅ `/appliance-packaging-boxes`
- TV carton box manufacturer → ✅ `/products/tv-appliance-packaging-box`
- ceiling fan carton box → ✅ `/products/ceiling-fan-packaging-box`
- pump / motor packaging box → ✅ `/pump-motor-packaging-boxes`
- mixer grinder packaging box → ✅ `/mixer-grinder-packaging-boxes`
- appliance packaging guide → ✅ `/blog/appliance-packaging-guide`
- ⬜ air cooler / washing machine / refrigerator cartons: only if the owner confirms they make them

## 4. Export packaging
Hub: ✅ `/export-packaging`
- export master carton 5 ply / 7 ply → ✅ `/products/export-master-carton-5-ply-7-ply`
- export carton compliance, shipping marks → ✅ `/blog/export-master-carton-compliance-checklist`
- CBM / container loading → ✅ glossary entry; ⬜ a container-loading guide (needs real pallet/container examples from Periyanan)

## 5. Bulk / MOQ
Hub: ✅ `/bulk-packaging-boxes`
- packaging MOQ, minimum order corrugated boxes → ✅ `/blog/how-to-choose-packaging-moq`, ✅ `/faq`
- sample approval → ✅ `/blog/sample-approval-process-explained`, ✅ `/process`

## 6. D2C / e-commerce
Hub: ✅ `/d2c-packaging`
- mailer box manufacturer → ✅ `/products/mailer-box`
- printed corrugated box → ✅ `/products/corrugated-shipping-box`
- courier / padded mailers → ✅ `/products/courier-return-mailers`, ✅ `/products/paper-padded-mailers`

## 7. Food packaging
Hub: ✅ `/food-packaging`
- food delivery box → ✅ `/products/food-delivery-box`
- bagasse container → ✅ `/products/bagasse-food-container-eco`, ✅ `/blog/bagasse-vs-plastic-food-containers`
- paper bowl → ✅ `/products/paper-bowls-food-containers-eco`
- FSSAI packaging rules → ✅ `/blog/fssai-food-packaging-requirements-explained`
- paper bag manufacturer → ✅ `/products/custom-printed-paper-carry-bag-eco`

## Internal-link rules (already mostly in place)
- Every spoke links to its hub and to the right specialist's team page.
- Every hub links to all its spokes.
- The glossary links out to the ply, MOQ, sample, export and bagasse guides; the footer links to the glossary on every page.
