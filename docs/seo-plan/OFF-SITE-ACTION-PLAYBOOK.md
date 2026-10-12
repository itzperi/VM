# Off-Site Action Playbook (Bulk / MOQ 5,000 Large · 10,000 Small)

Everything that drives rankings, AI citations and bulk enquiries but is not a code change. Ordered by impact, then time. Copy is ready to paste. Every step needs your own account logins.

**Positioning rule for every platform:** say "Minimum order 5,000 units for large boxes (TV, fan, appliance, master cartons), 10,000 units for small boxes" early, every time. It costs some enquiry volume and raises enquiry quality, which is the goal. Never reuse old copy that mentions 50-unit or low MOQs.

**NAP. Use exactly this everywhere:**

- Name: Visalatchi Manufactures
- Address: No 10/4B Village Street, Sadayan Kuppam Pattai, Thiruvottiyur, Chennai 600019, Tamil Nadu, India
- Phones: +91 98405 01323 (Palaniappan), +91 94444 20367 (Periyanan)
- Website: https://visalatchimanufacturing.com

---

## 1. Deploy and switch on lead capture (Day 1, about 30 minutes)

The live site still shows the old "low MOQ from 50 units" version. Nothing below works until the new build is live.

1. **Get a Web3Forms key** (free): go to web3forms.com, enter the inbox that should receive enquiries, and copy the access key. Without it, enquiries reach you only if the visitor presses Send in WhatsApp.
2. **Create a GA4 property** (analytics.google.com) and copy the measurement ID `G-XXXXXXXXXX`.
3. In **Vercel → Project → Settings → Environment Variables**, add:
   - `VITE_WEB3FORMS_KEY` = your key
   - `VITE_GA_MEASUREMENT_ID` = your GA4 ID
   - `VITE_GOOGLE_ADS_CONVERSION` = later, once Google Ads is set up (format `AW-XXXXXXXXX/Label`)
4. Push or redeploy the project. Then check that https://visalatchimanufacturing.com shows "From TV & Fan Cartons to Mailers" in the hero.
5. **Test the form once** with your own details and confirm the email arrives.
6. **Domains:** in Vercel → Settings → Domains, make the non-www domain primary and have www redirect to it.

## 2. Google Search Console + Bing + IndexNow (Day 1, about 30 minutes)

1. search.google.com/search-console → add `https://visalatchimanufacturing.com` → verify with the HTML tag method (add the meta tag to `index.html` and redeploy).
2. Sitemaps → submit `sitemap.xml`.
3. URL Inspection → request indexing for these, in order:
   - `/`
   - `/bulk-packaging-boxes`
   - `/corrugated-box-manufacturer-chennai`
   - `/products`
   - `/faq`
4. bing.com/webmasters → import the site from Search Console. This matters because ChatGPT Search and Copilot answers lean on Bing's index.
5. After every deploy, run `npm run indexnow`. It pushes all URLs to Bing and other IndexNow engines within hours. The key file is already in `public/`.

## 3. Google Business Profile (Week 1, then 15 minutes a week)

**Primary category:** Corrugated box supplier. If that isn't available, use Packaging company.

**Secondary categories:**
- Packaging company
- Box supplier
- Manufacturer
- Paper bag supplier
- Food products supplier (only if accurate for your food packaging)

**Business description** (742 characters):

> Visalatchi Manufactures is a bulk packaging manufacturer in Thiruvottiyur, North Chennai. We produce TV, fan and appliance cartons, export master cartons, 3-ply, 5-ply and 7-ply corrugated boxes, custom printed mailer boxes, food delivery boxes, bagasse food containers, paper bowls, courier mailers, paper carry bags and export master cartons for brands, FMCG manufacturers, exporters and distributors. Minimum order is 5,000 units for large boxes and 10,000 units for small boxes. Every bulk order starts with a physical pre-production sample, and every quotation is itemised with no hidden plate or conversion charges. We dispatch across Chennai, Tamil Nadu and pan-India. Call Palaniappan (98405 01323) for D2C and domestic orders or Periyanan (94444 20367) for food and export orders to get a volume quote.

**Products** (add TV & Appliance Packaging Box, Ceiling Fan Packaging Box and Export Master Carton first, then the rest; add each one with a photo, the description "Minimum order 5,000 units" (TV & Appliance Box, Fan Box, Export Master Carton) or "Minimum order 10,000 units" (all small boxes), plus "Volume pricing on quotation.", and a link to its `/products/...` page):
- Corrugated Shipping Box
- Mailer Box
- Food Delivery Box
- Courier & Return Mailers
- Paper & Padded Mailers
- Paper Carry Bag
- Bagasse Food Container
- Paper Bowls

**Photos:** at least 10 real ones, covering:
- the plant exterior and signage
- machines running
- stacked finished cartons
- a printed mailer close-up
- the team
- a loaded dispatch vehicle

Add a few more every month.

**Weekly post ideas** (rotate through these):
1. "Appliance makers: planning summer or festival-season dispatch? Book your carton run now (from 5,000 units)." Use the button: Call now.
2. A photo of a bulk run in production, captioned with box type and ply. Do not name the customer without permission.
3. "3-ply or 5-ply? Here's how to choose for your product weight." Link to `/blog/corrugated-box-ply-thickness-explained`.
4. "What decides the price of corrugated boxes in bulk?" Link to `/blog/corrugated-box-price-factors-bulk`.

**Q&A to seed:** ask these from a personal account, then answer from the business account.
- *What is your minimum order?* → "5,000 units for large boxes such as TV, fan and appliance cartons; 10,000 units for small boxes. Per size and print design."
- *Do you give samples?* → "Yes, every bulk order starts with a physical pre-production sample."
- *Do you deliver outside Chennai?* → "Yes, pan-India dispatch from our Thiruvottiyur plant."

**Reviews:** in GBP, use "Get more reviews" and send the link after every delivered order:

> Hi [Name], thank you for your order of [quantity] [product]. If you have a minute, a Google review mentioning what you ordered would really help us: [review link]. Thanks, Visalatchi Manufactures.

## 4. IndiaMART + TradeIndia (Week 1, the highest-volume B2B lead source)

These marketplaces are where Indian bulk packaging buyers post requirements, and Chennai competitors (TGI Packaging, Srinivasa Packing, Klassic Corrugators, Kalpaka, Cuboid) already list there. A paid seller plan is worth it for the 30-40 enquiries/month goal. Free listings get few buy-leads.

**Settings on every product:**
- Minimum Order Quantity = 5000 for large boxes (TV, fan, appliance, master/export cartons), 10000 for small boxes, mailers, food packs and bags
- Unit = Piece/Box
- Price = "Get latest price"

Leave the price blank only until you have real 5k-tier rates, then publish them. Listings with a price get more and better leads.

**Buy-leads:** skip anything under 5,000 for large boxes or 10,000 for small boxes, and reply to qualifying leads within one hour. Speed is the biggest factor in winning marketplace leads.

### IndiaMART company profile

> Visalatchi Manufactures is a bulk packaging manufacturer in Thiruvottiyur, Chennai, Tamil Nadu, supplying brands, FMCG manufacturers, exporters and distributors across India. We manufacture 3-ply and 5-ply corrugated shipping boxes, custom printed mailer boxes, food delivery boxes, bagasse food containers, paper bowls and food containers, courier and return mailers, paper and padded mailers, frosted zipper garment bags and custom printed paper carry bags.
>
> We work on bulk orders only, from a minimum of 5,000 units for large boxes (TV, fan, appliance and export master cartons) and 10,000 units for small boxes, per size and print design, so every job runs as a dedicated production batch with consistent quality from the first box to the last. Every order starts with a physical pre-production sample for your approval, and every quotation is itemised ex-GST with no hidden plate or conversion charges. Larger and repeat volumes get lower unit rates.
>
> Appliance and electronics manufacturers get heavy-duty 5-ply and 7-ply cartons for TVs, fans, coolers and kitchen appliances, built to product weight. D2C and e-commerce brands get crush-tested mailers and cartons for courier handling. Food, FMCG and cloud-kitchen chains get food-safe, grease and moisture-resistant packaging including compostable bagasse. Exporters get master cartons built to buyer specification and CBM-optimised for container loading. We dispatch pan-India from our Chennai plant. Share your box size, quantity (5,000+) and delivery date for a firm volume quote.

### Product listing template (repeat for each product)

- **Title:** `[Product] - Bulk, MOQ 5000 Pcs` for large boxes or `MOQ 10000 Pcs` for small boxes (for example "TV Packaging Box 7 Ply - Bulk, MOQ 5000 Pcs", "Ceiling Fan Box - Bulk, MOQ 5000 Pcs", "Printed Mailer Box - Bulk, MOQ 10000 Pcs")
- **Specifications:** material, ply, GSM/BF if fixed, print options, box style, usage
- **Description:** "Manufactured in Chennai. Minimum order 5,000 pieces (large boxes) or 10,000 pieces (small boxes) per size/design. Physical sample before bulk production. Pan-India dispatch. Volume pricing on quotation."

### TradeIndia company profile

Reuse the IndiaMART profile, plus this export line: "We coordinate with your freight forwarder for container bookings from Chennai Port."

### JustDial description (short field)

> Bulk packaging manufacturer in Thiruvottiyur, Chennai: TV, fan and appliance cartons, corrugated boxes (3, 5, 7-ply), printed mailer boxes, food delivery boxes, bagasse containers, paper bags and export cartons. Minimum order 5,000 units for large boxes, 10,000 for small boxes. Physical sample before every bulk run, itemised ex-GST pricing, pan-India dispatch. Call Palaniappan 98405 01323 (D2C/domestic) or Periyanan 94444 20367 (food/export).

**Also list on:** Exporters India, Udyam (MSME) directory, and Tamil Nadu packaging or industry associations. Use the same NAP and descriptions.

**When each profile goes live**, add its URL to `SAME_AS` in `src/lib/siteConfig.ts` and redeploy. That links your website entity to the profiles for Google and AI engines.

## 5. Google Ads (Week 2, while organic rankings build)

- **Campaign:** Search only, location Tamil Nadu plus your key shipping states, language English and Tamil.
- **Landing pages:** `/appliance-packaging-boxes` (TV/fan/appliance terms, highest ticket, start here), `/bulk-packaging-boxes` (pan-India terms) and `/corrugated-box-manufacturer-chennai` (Chennai terms).
- **Conversion:** set `VITE_GOOGLE_ADS_CONVERSION`. The site fires it on every quote submission. Phone-call conversions can be added in Google Ads directly.

**Ad groups and keywords** (phrase or exact match):

| Ad group | Keywords |
|---|---|
| Appliance boxes | tv box manufacturer, fan box manufacturer, appliance carton manufacturer, 7 ply box manufacturer chennai, ceiling fan packaging box |
| Corrugated – Chennai | corrugated box manufacturer chennai, carton box manufacturers in chennai, 5 ply box manufacturer chennai, corrugated box suppliers chennai |
| Bulk boxes – India | bulk packaging boxes, wholesale corrugated boxes, corrugated boxes in bulk, packaging box manufacturer india |
| Mailer / e-commerce | bulk mailer boxes, custom mailer box manufacturer, e-commerce packaging boxes bulk |
| Food packaging | food packaging box manufacturer, bulk food delivery boxes, bagasse container manufacturer |
| Export | export carton manufacturer, master carton manufacturer chennai |

**Negative keywords:**
- Small-quantity and retail terms: small quantity, 100 pcs, 500 pcs, single, sample only, retail, near me cheap
- Wrong intent: second hand, used boxes, diy, how to make, amazon, flipkart
- Job seekers: jobs, career, salary

**Responsive search ad headlines** (each 30 characters or fewer):
- TV & Fan Boxes from 5,000 Units
- Appliance Carton Manufacturer
- Corrugated Box Maker Chennai
- Factory-Direct Volume Pricing
- Sample Before Every Bulk Run
- 3-Ply & 5-Ply Cartons
- Itemised Quote, No Hidden Fees
- Pan-India Dispatch
- Printed Mailer Boxes in Bulk

**Descriptions** (each 90 characters or fewer):
- Heavy-duty TV, fan & appliance cartons made in Chennai. From 5,000 units. Itemised quote.
- Approve a physical sample with your product first, then we run your bulk order. Call 98405 01323.

**Budget:** start modest, judge on cost per qualified (meets MOQ) lead after 30 days, then shift spend to the ad groups that produce real orders.

## 6. LinkedIn + direct outreach (Week 1 onward)

**Company page:** Industry: Packaging and Containers. About section:

> Visalatchi Manufactures is a bulk packaging manufacturer in Thiruvottiyur, Chennai. We produce TV, fan and appliance cartons, corrugated boxes, printed mailer boxes, food-safe packaging and export master cartons for manufacturers, brands and exporters, from 5,000 units for large boxes and 10,000 for small boxes, with a physical sample before every bulk run.

Have both specialists link their personal profiles to the page.

**Outreach:** work through `sales-prospecting-tamil-nadu.xlsx` and target procurement, purchase or supply-chain teams at appliance and electronics manufacturers first (see `prospects-appliance-tn.csv`), then FMCG brands, exporters and D2C brands. Message template (personalise the first line every time):

> Hi [Name], I noticed [specific thing about their product or shipping]. We manufacture corrugated and printed packaging in bulk at our Chennai plant (5,000+ units for large cartons like TV and fan boxes, 10,000+ for small boxes) and start every order with a physical sample. If you're reviewing packaging suppliers or costs this quarter, I'd be happy to quote one of your current box sizes for comparison. Palaniappan, Visalatchi Manufactures, 98405 01323.

## 7. Proof content to send for the website (as soon as you have it)

These are the biggest remaining trust and AI-citation gaps. Send any of these and they'll be added to the site:

- Real photos: the plant, machines, stacked cartons, printed mailers, a dispatch vehicle, the team
- Capacity (boxes per day or tonnes per month) and the main machinery list
- 2-3 short case studies, anonymised if needed: "FMCG brand, 25,000 5-ply cartons/month, [problem] → [result]"
- Certificates held (FSC, ISO, FSSAI-related, Udyam/MSME), with copies
- Real price bands for 2-3 standard sizes at 5k / 10k / 25k units
- Founding year and founder background

## 8. Community presence (ongoing, no shortcuts)

Answer real questions in r/india, r/IndianStartups, r/ecommerce and LinkedIn or Facebook groups for D2C sellers, exporters and cloud-kitchen operators. Search for threads about "corrugated box manufacturer", "bulk packaging supplier", "packaging cost per order" and "export carton". Answer the question first, with real specifics. Mention Visalatchi only where it's directly relevant. A comment should still be useful with the brand name deleted.

## 9. Measure against the goal (monthly)

GA4 → Reports → Engagement → Events. These events are counted automatically once the env vars are set:
- `generate_lead` (quote forms), split by the `quantity_tier` and `form` parameters
- `whatsapp_click`

Track monthly in one sheet: enquiries by channel (website form, WhatsApp, phone, IndiaMART, TradeIndia, Ads), how many met the MOQ, and how many became orders. The target is 30-40 qualified enquiries a month. Put money and time into the channels that produce orders, not just enquiries.
