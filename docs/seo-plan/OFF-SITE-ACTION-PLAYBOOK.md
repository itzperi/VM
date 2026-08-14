# Off-Site Action Playbook

Everything left to genuinely improve ranking that is not a code change. Ordered by time required, cheapest first. Exact copy-paste text included wherever the target platform allows it. Nothing here can be executed by Claude, all of it needs your own account logins.

---

## 1. Vercel (5 minutes)

1. Go to your Vercel dashboard, open the project.
2. **Trigger the redeploy**: Deployments tab, if the latest deployment predates the last few commits, click the "..." menu on it and choose Redeploy, or just push confirms it should auto-build if Git is connected.
3. **Fix the domain**: Settings, Domains. Find both `visalatchimanufacturing.com` and `www.visalatchimanufacturing.com`. Set the non-www one as the Production/primary domain. Set www to redirect to it (not the other way around, which is the current, wrong, configuration).

## 2. Google Search Console (15 minutes)

1. Go to search.google.com/search-console, add property, enter `https://visalatchimanufacturing.com`.
2. Verify ownership. Easiest method for a Vercel site: the "HTML tag" method, Google gives you a `<meta>` tag, add it to `index.html`'s `<head>`, commit, push, redeploy, then click Verify.
3. Once verified, left sidebar, Sitemaps, enter `sitemap.xml`, submit.
4. URL Inspection tool, paste `https://visalatchimanufacturing.com`, click "Request Indexing."

## 3. Bing Webmaster Tools (10 minutes)

1. Go to bing.com/webmasters, sign in with a Microsoft account.
2. Add site, `https://visalatchimanufacturing.com`. Bing lets you import directly from Google Search Console if you did step 2 first, this is the fastest path.
3. Submit `sitemap.xml` the same way.

## 4. Google Business Profile (ongoing)

1. Finish the pending edits on your listing (phone number and website were shown as "Pending" review earlier).
2. **Ask for reviews.** In your GBP dashboard (or the Google Business app), find "Get more reviews," it generates a short shareable link. Send it after every completed order. Suggested WhatsApp message to send customers:

   > Hi [Name], thanks for the order! If you have a minute, a quick Google review would really help us out: [your GBP review link]. Thanks again for choosing Visalatchi.

3. **Preferred Source.** No dedicated settings page for this yet, it's surfaced to searchers directly in AI Overview results (a small "prefer this source" toggle next to results). Mention to repeat customers that they can mark Visalatchi as a preferred source next time they see it in a Google AI search result, it's a real, current signal, not something you configure in a dashboard.

## 5. Directory listings (30 to 60 minutes each)

Register on each with these exact company descriptions. NAP (name, address, phone) must match the website and GBP exactly, use the address and phone numbers already in `src/lib/siteConfig.ts`.

### IndiaMART

Category: Manufacturer. Nature of business: Manufacturer / Supplier.

> Visalatchi Manufactures is a Chennai based packaging manufacturer serving D2C and e commerce brands, food and FMCG businesses, and exporters across Tamil Nadu and India. We manufacture custom mailer boxes, corrugated shipping cartons, food safe delivery boxes, courier and return mailers, paper and padded mailers, frosted zipper garment bags, custom printed paper carry bags, bagasse food containers, and paper bowls, all from our plant in Thiruvottiyur, Chennai.
>
> What sets us apart from most packaging suppliers is that we accept low minimum order quantities starting from just 50 units, so growing brands can test a new box size without committing to a large volume. Every order goes through a physical sample approval step before bulk production begins, so you confirm size, print, and material before you commit. Pricing is itemised and transparent with no hidden conversion or plate charges, and our full price list is published rather than hidden behind a quote request.
>
> We serve three kinds of customers directly. D2C and e commerce brands get damage resistant mailers and cartons built for courier handling and fast dispatch during flash sale demand spikes. Food and FMCG manufacturers get food safe, moisture and grease resistant packaging including compostable bagasse containers, with food contact surfaces we can describe plainly on request. Exporters get master cartons built to buyer specification and shipping timeline, with CBM optimised sizing for container loading.
>
> We dispatch pan India by courier from our Chennai plant, and serve Chennai, Madurai, Coimbatore, and Tiruchirappalli directly. Share your product size, monthly volume, and target start date, and we will turn it into a firm quotation and a physical sample.

(1,743 characters, fits IndiaMART's longer company profile field.)

### JustDial

> Visalatchi Manufactures is a Chennai based packaging manufacturer for D2C brands, food and FMCG businesses, and exporters. We make mailer boxes, corrugated shipping cartons, food safe delivery packs, and export cartons, with minimum orders starting from just 50 units. Every order goes through a physical sample approval step before bulk production, so you know exactly what you are getting. Pricing is itemised and transparent with no hidden charges. From our plant in Thiruvottiyur, Chennai, we dispatch pan India. Call Palaniappan for D2C and domestic orders, or Periyanan for food and export orders, to get a sample and a firm quote.

(637 characters, fits JustDial's shorter business description field.)

### TradeIndia

Category: Manufacturer/Exporter.

> Visalatchi Manufactures, based in Thiruvottiyur, Chennai, Tamil Nadu, manufactures corrugated and paper based packaging for domestic and export markets. Our product range covers mailer boxes, 3 ply and 5 ply corrugated shipping cartons, food safe delivery boxes, courier and return mailers, padded mailers, printed kraft carry bags, and compostable bagasse food containers.
>
> For export buyers, we build master cartons to your specification and shipping timeline rather than a generic standard size, and can work with your compliance and labeling requirements once you share your destination market details. Minimum order quantities start from 50 units for select formats, with a physical sample approval step before every bulk production run. Pricing is itemised and quoted per specification, ex GST.
>
> We dispatch across India by courier and coordinate with freight forwarders for export container bookings from our Chennai plant. Contact us with your product dimensions, target market, and order volume for a formal quotation.

(1,027 characters.)

## 6. LinkedIn Company Page (20 minutes)

1. linkedin.com, click the grid icon top right, "Create a Company Page," choose "Small business."
2. Name: Visalatchi Manufactures. Website: your domain. Industry: Packaging and Containers. Company size: whatever is accurate.
3. About section:

   > Visalatchi Manufactures is a Chennai based packaging manufacturer serving D2C brands, food and FMCG businesses, and exporters. We produce mailer boxes, corrugated shipping cartons, food safe delivery packs, and export cartons, with minimum orders starting from 50 units and a physical sample approval step on every order. Based in Thiruvottiyur, Chennai, we dispatch pan India.

4. Add the logo (same one used on the site), add both specialists as employees on the page once they have personal LinkedIn profiles linked to it, that's a real authority signal, an anonymous company page is weaker than one with named people attached.

## 7. Genuine forum and community presence (ongoing, no shortcuts)

This cannot be scripted with exact text, because the whole point is that it has to be a real, specific answer to a real question, not a copy-pasted pitch. Generic promotional comments get removed and hurt more than they help.

**Where to look:** r/india, r/IndianStartups, r/Entrepreneur, r/ecommerce, and any Facebook groups for D2C sellers or cloud kitchen owners in India. Search for threads asking things like "packaging supplier Chennai," "low MOQ mailer boxes," "FSSAI compliant food packaging," or "corrugated box manufacturer recommendations."

**How to participate well:** answer the actual question first, with real specifics (a number, a material fact, a genuine trade-off), and only mention Visalatchi if it's directly relevant, ideally as a "we do X" aside, not the whole comment. A comment that would be useful even with the brand name deleted is a good comment. A comment that's just an ad with the brand name attached is not.

**Cadence:** a handful of genuine, well-placed comments over months does more for AI-citation authority than any number of forced ones in a week.

## 8. Real product photography (whenever feasible)

Every product image right now is a stock photo. Shot list for the highest-value replacements first:

1. Mailer Box, open and folded flat, showing custom print
2. Corrugated Shipping Box, stacked to show stacking capacity
3. Food Delivery Box, closed with a real food item inside (with permission if it's a customer's product)
4. Bagasse Food Container, showing the compostable material texture

Even phone photos with good lighting on a plain background outperform stock images for trust, this doesn't need a professional shoot to matter.

## 9. Ongoing content cadence

Already scoped in `CONTENT-CALENDAR.md`: roughly one new blog post every 3 to 4 weeks after the initial 6. Recency is worth close to 3x citation likelihood in AI search per the research cited in the last GEO audit, letting the blog go stale undoes that advantage over time.
