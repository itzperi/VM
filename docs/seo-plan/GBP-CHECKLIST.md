# Google Business Profile + citations checklist (owner does these by hand)

Profile: https://maps.app.goo.gl/F9VCUnqTkmb3cx568

The name, address and phone (NAP) must match the website exactly, everywhere:

```
Visalatchi Manufactures
No 10/4B Village Street, Sadayan Kuppam Pattai, Thiruvottiyur, Chennai 600019, Tamil Nadu, India
+91 73050 20110 (Aswin Nagappan, D2C & domestic)   +91 94444 20367 (Periyanan, export & food)
Website: https://visalatchimanufacturing.com
Hours: Mon-Sat 09:00-18:00, Sun 09:00-15:00
```

## 1. Fix first (this week)
- [ ] **Change the phone number.** If GBP shows 98405 01323 (Palaniappan), replace it with +91 73050 20110. Primary phone: whichever number answers most reliably; add the other as an additional phone.
- [ ] Do the same on WhatsApp Business, IndiaMART, JustDial, visiting cards, letterheads and the plant signboard.
- [ ] Website field: `https://visalatchimanufacturing.com` (add `?utm_source=gbp&utm_medium=organic` so GA4 can show GBP traffic).

## 2. Profile completeness
- [ ] Primary category: **Corrugated box supplier** (if offered; otherwise "Packaging company"). Secondary: Box manufacturer, Packaging supply store, Paper bag supplier, Manufacturer.
- [ ] Description (750 chars max), ready to paste:
  > Visalatchi Manufactures is a bulk packaging manufacturer in Thiruvottiyur, Chennai. We make TV, fan and appliance cartons, export master cartons (5-ply and 7-ply), corrugated shipping boxes, printed mailer boxes, food delivery boxes, bagasse containers and paper bags. Minimum order: 5,000 units for large boxes and 10,000 units for small boxes, per size and design. Every bulk order starts with a physical sample, quotes are itemised ex-GST, and we dispatch pan-India. Call Aswin Nagappan (D2C and domestic brands) on 73050 20110 or Periyanan (export and food) on 94444 20367.
- [ ] Services / Products: add each product with the same name as the website, a real photo, and a link to its page.
- [ ] Attributes: "Online estimates", "Onsite services" (only if true).
- [ ] Opening date: once the owner confirms the founding year.

## 3. Photos (biggest local ranking and trust lever you can control)
- [ ] 20+ real photos: plant exterior with signboard, every machine, stacked finished cartons, printing close-ups, loading a truck, the team at work.
- [ ] Add 2-3 new photos every week.
- [ ] Use the same photos on the website to replace the stock product photos.

## 4. Reviews
- [ ] Get the review link: GBP > "Ask for reviews". Make a QR code of it for invoices and delivery challans.
- [ ] WhatsApp message to send after each delivery:
  > Hi {name}, thank you for your order with Visalatchi Manufactures. If the cartons met your spec, a short Google review would help us a lot: {review link}. Thank you! – {Aswin Nagappan / Periyanan}
- [ ] Target: 1-2 new genuine reviews a week. Reply to every review within 48 hours, mentioning the product type ("glad the 5-ply fan cartons held up in transit").
- [ ] Never buy reviews or write them yourself. Google removes them and can suspend the profile.

## 5. Posts and Q&A
- [ ] One post a week: a finished job (with customer permission), a new machine, a packaging tip from the blog, with a link to the matching page.
- [ ] Seed Q&A with real questions and answers from `/faq` (MOQ, sample, lead time, delivery area).

## 6. Citations (same NAP everywhere)
Create or claim, then add each URL to `SAME_AS` in `src/lib/siteConfig.ts`:
- [ ] IndiaMART (most important: it ranks page 1 for every Chennai carton search)
- [ ] TradeIndia
- [ ] JustDial
- [ ] Sulekha
- [ ] ExportersIndia
- [ ] Bing Places (import from GBP)
- [ ] Apple Business Connect
- [ ] LinkedIn company page
- [ ] Facebook page
- [ ] Chennai / Tamil Nadu industrial association member directories (e.g. local small-industries associations, if a member)

## 7. NAP consistency audit (fill as you go)

| Listing | Name shown | Address shown | Phone shown | Matches? | Fixed on |
|---|---|---|---|---|---|
| Google Business Profile | | | | | |
| IndiaMART | | | | | |
| TradeIndia | | | | | |
| JustDial | | | | | |
| WhatsApp Business | | | | | |

## 8. Local rank tracking (monthly)
Track "corrugated box manufacturer", "carton box manufacturer" and "packaging box manufacturer" on a 5 x 5 grid, about 1 km apart, centred on the plant (13.1663, 80.3009). Free option: search from each point on a phone with location spoofing, or use a geo-grid tool (Local Falcon, BrightLocal, or DataForSEO if connected). Record the rank at each point in `AI-VISIBILITY-LOG.md` next to the AI results.
