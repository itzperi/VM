import { BlogPost } from '../types';

// 6 posts scoped in docs/seo-plan/CONTENT-CALENDAR.md. Every claim here is
// either drawn from data/products.ts (real catalog facts), the site's own
// established process, or a cited external source, no invented statistics
// or regulatory claims. Regulatory posts (FSSAI, export) cite real sources
// checked 2026-08-14 and are framed as general awareness, not legal advice,
// since destination/buyer requirements vary and the site already tells
// customers to confirm specifics directly with Periyanan.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-choose-packaging-moq',
    title: 'How to Choose the Right MOQ for Your First Packaging Order',
    description:
      'A practical guide to minimum order quantities for D2C brands testing a new box size, with real MOQ and price examples from Chennai manufacturing.',
    publishDate: '2026-08-14',
    category: 'd2c',
    relatedProductIds: ['prod-01', 'prod-05', 'prod-07'],
    content: [
      {
        type: 'paragraph',
        text: 'Minimum order quantity, or MOQ, is the smallest batch a packaging manufacturer will produce for you. It is usually the first number a new D2C brand asks about, and often the deciding factor between testing a new box design and sticking with what already works.',
      },
      { type: 'heading', text: 'Why MOQ matters more than price per unit' },
      {
        type: 'paragraph',
        text: 'A box priced at 20 rupees a unit sounds cheap until the MOQ is 5,000 units and you only need 200 for a product launch. The real cost of a low price with a high MOQ is the working capital locked up in inventory you have not sold yet, plus warehouse space to store it. For a brand testing a new SKU size, a slightly higher per unit price at a low MOQ is almost always the better trade.',
      },
      { type: 'heading', text: 'What low MOQ actually looks like' },
      {
        type: 'list',
        items: [
          'Mailer boxes: minimum order 50 units, starting at 36 rupees per unit, with custom inside and outside print and a locking front tuck tab',
          'Paper and padded mailers: minimum order 100 units, starting at 22 rupees per unit, suited to apparel, books, jewellery, and small electronics',
          'Custom printed paper carry bags: minimum order 50 units, starting at 22 rupees per unit, biodegradable kraft paper',
        ],
      },
      {
        type: 'paragraph',
        text: 'These are reference prices at each product’s stated MOQ, ex GST. Final pricing depends on size, finish, and print colours, confirmed on a formal quotation once you share your dimensions.',
      },
      { type: 'heading', text: 'The sample step most low MOQ suppliers skip' },
      {
        type: 'paragraph',
        text: 'A low MOQ only protects you if the first batch is right. Every order at Visalatchi goes through a physical sample approval step before bulk production begins, so you confirm size, print, and material before committing to volume, not after receiving 500 boxes that do not fit your product.',
      },
      { type: 'heading', text: 'When to move past the reference MOQ' },
      {
        type: 'paragraph',
        text: 'Once a SKU is validated and you are ordering the same box repeatedly, moving to a higher volume tier usually drops the per unit price. That is a conversation for your specialist once you have real sales data, not something to over optimise before you have sold a single unit.',
      },
    ],
  },
  {
    slug: 'corrugated-box-ply-thickness-explained',
    title: 'Corrugated Box Thickness Explained: 3 Ply vs 5 Ply for E-commerce Shipping',
    description:
      'What 3 ply and 5 ply corrugated actually mean, when each one is the right call for e-commerce shipping, and how to avoid over-paying for strength you do not need.',
    publishDate: '2026-08-14',
    category: 'd2c',
    relatedProductIds: ['prod-02', 'prod-01'],
    content: [
      {
        type: 'paragraph',
        text: 'A corrugated box is not one material, it is layers: flat sheets of kraft paper (called liners) sandwiching a wavy fluted layer in between. 3 ply means one flute layer between two liners. 5 ply means two flute layers with an extra liner in the middle, making a noticeably stiffer, thicker board.',
      },
      { type: 'heading', text: 'What each is actually for' },
      {
        type: 'list',
        items: [
          '3 ply, e-flute or b-flute: courier shipping for lightweight to medium products, general e-commerce mailers, single item dispatch',
          '5 ply, 3-ply plus reinforcing liner: heavier products, stacked warehouse storage, B2B bulk dispatch, master cartons carrying multiple units',
        ],
      },
      {
        type: 'paragraph',
        text: 'Visalatchi’s mailer boxes use E-flute or B-flute recycled kraft board, the right weight class for courier-handled e-commerce shipping. The corrugated shipping box line steps up to 3 ply and 5 ply kraft corrugated, rated for edge-crush strength and stacking capacity above 200 kilograms, built for master cartons and bulk warehouse dispatch rather than single-item courier parcels.',
      },
      { type: 'heading', text: 'The over-engineering trap' },
      {
        type: 'paragraph',
        text: 'Ordering 5 ply for a product that only needs 3 ply adds material cost and shipping weight for strength your product will never use in transit. The reverse mistake, under-speccing 3 ply for something that needs stacking strength, shows up as crushed boxes at the warehouse. If you are not sure which class your product needs, share the item weight and shipping method (courier vs freight/warehouse) and get a recommendation before ordering, rather than guessing.',
      },
      { type: 'heading', text: 'Edge crush test, the number that actually matters' },
      {
        type: 'paragraph',
        text: 'Edge crush test measures how much force a board can take before it buckles under stacking weight, it is a better predictor of real-world performance than ply count alone, since two boards with the same ply count can have different edge-crush ratings depending on the paper grade used. This is why the corrugated shipping box line is described by its edge-crush and stacking-capacity rating, not just its ply count.',
      },
    ],
  },
  {
    slug: 'sample-approval-process-explained',
    title: "Sample Approval Process: What to Expect Before Your First Bulk Order",
    description:
      'A walkthrough of the choose, sample, produce, ship process, so you know what to expect before placing a bulk packaging order in Chennai.',
    publishDate: '2026-08-14',
    category: 'general',
    relatedProductIds: [],
    content: [
      {
        type: 'paragraph',
        text: 'Every packaging order at Visalatchi moves through four stages: choose, sample, produce, ship. The point of this structure is simple, no bulk production begins until you have physically approved a sample, so there are no surprises at scale.',
      },
      { type: 'heading', text: '1. Choose' },
      {
        type: 'paragraph',
        text: 'Pick the format and size that matches your product from the catalog. If nothing fits exactly, share your product’s dimensions, weight, and how it ships (courier, warehouse pallet, export container) and get a specific recommendation rather than picking the closest generic size.',
      },
      { type: 'heading', text: '2. Sample' },
      {
        type: 'paragraph',
        text: 'A physical sample is produced and sent to you before any bulk run starts. This is the step to check print colour accuracy, box fit, material feel, and structural strength for your actual product, not a rendered mockup, an actual box you can hold and test.',
      },
      { type: 'heading', text: '3. Produce' },
      {
        type: 'paragraph',
        text: 'Once you approve the sample, bulk production begins with quality checks at the raw material, in-production, and pre-dispatch stages. This is also the stage where lead time matters, fast-dispatch formats are stocked specifically to cover festival and flash-sale demand spikes without the usual production wait.',
      },
      { type: 'heading', text: '4. Ship' },
      {
        type: 'paragraph',
        text: 'Finished packaging is dispatched to match your courier partner or, for export orders, your shipping and container booking timeline. Dispatch happens pan-India from the Chennai plant.',
      },
      { type: 'heading', text: 'Why this sequence, not a faster one' },
      {
        type: 'paragraph',
        text: 'Skipping the sample step to save a week is the single most common reason brands end up with a bulk order that does not fit, prints incorrectly, or fails in transit, then have to reorder anyway, at a real cost in time and money. The sample step exists because it is cheaper to catch a problem in one box than in five hundred.',
      },
    ],
  },
  {
    slug: 'bagasse-vs-plastic-food-containers',
    title: 'Bagasse vs Plastic Food Containers: Cost and Compostability Compared',
    description:
      'A practical comparison of bagasse and plastic food containers for cloud kitchens and QSR brands, covering cost, heat performance, and end of life.',
    publishDate: '2026-08-14',
    category: 'food',
    relatedProductIds: ['prod-08', 'prod-09', 'prod-03'],
    content: [
      {
        type: 'paragraph',
        text: 'Bagasse is the fibrous pulp left over after sugarcane is crushed for juice, a byproduct that would otherwise be waste. Molded into food containers, it behaves very differently from plastic in ways that matter for a cloud kitchen or QSR brand choosing between them.',
      },
      { type: 'heading', text: 'Cost' },
      {
        type: 'paragraph',
        text: 'Visalatchi’s bagasse food containers start at 21 rupees per unit at a 100-unit MOQ. That is a real premium over basic plastic clamshells, and the honest reason to pick bagasse is not lowest cost, it is what it does at the two other points below.',
      },
      { type: 'heading', text: 'Heat and oil performance' },
      {
        type: 'paragraph',
        text: 'Bagasse containers in this catalog are rated microwave and freezer safe, and oil proof up to 120 degrees Celsius, which covers most hot Indian food use cases directly, curries, biryani, and similar dishes, without the container warping or leaching the way some thin plastics do under sustained heat.',
      },
      { type: 'heading', text: 'End of life, the actual difference' },
      {
        type: 'paragraph',
        text: 'This is where the two materials genuinely diverge. Bagasse containers are home compostable, breaking down as organic waste. Plastic containers, even where technically recyclable, depend on the end customer having access to a recycling stream that actually processes food-contaminated plastic, which is inconsistent across Indian cities. For a brand fielding sustainability questions from customers or listing on marketplaces with environmental packaging criteria, that difference is the actual selling point, not a marketing label.',
      },
      { type: 'heading', text: 'When plastic still makes sense' },
      {
        type: 'paragraph',
        text: 'If your dispatch volume is very price sensitive and your customer base is not asking sustainability questions, a lighter-weight plastic or poly format may still be the right call for margin reasons. This is a genuine trade-off, not a case where one option is simply better, it depends on what your specific order volume and customer base actually need.',
      },
    ],
  },
  {
    slug: 'fssai-food-packaging-requirements-explained',
    title: 'FSSAI Food Packaging Requirements: What Actually Matters for Cloud Kitchens',
    description:
      'A plain-language guide to FSSAI food-grade packaging requirements as of 2026, covering food contact material rules and the June 2026 metal-fastener advisory.',
    publishDate: '2026-08-14',
    category: 'food',
    relatedProductIds: ['prod-03', 'prod-08', 'prod-09'],
    content: [
      {
        type: 'paragraph',
        text: 'FSSAI regulates what materials are allowed to come into direct contact with food in India. The baseline rule is straightforward: packaging must be food grade, meaning it does not contaminate or chemically react with the food it holds. Beyond that baseline, a few specific, recent changes are worth knowing if you run a cloud kitchen or FMCG brand.',
      },
      { type: 'heading', text: 'The rule that already affects how boxes are sealed' },
      {
        type: 'paragraph',
        text: 'FSSAI issued an advisory dated June 12, 2026 directing all food business operators to immediately stop using metallic staple pins, wires, or similar materials to seal, fasten, or secure any food packaging. If your current food delivery packaging is sealed with a metal staple, that is now a compliance gap, not just a minor detail. Visalatchi’s food delivery boxes and bagasse containers use locking or snap-fit closures rather than metal fasteners.',
      },
      { type: 'heading', text: 'What the 2026 packaging amendment covers' },
      {
        type: 'paragraph',
        text: 'A draft Food Safety and Standards (Packaging) Amendment Regulations, 2026 was published in the Gazette of India on February 26, 2026. It introduces clearer definitions for food contact materials, sets specifications for food-grade contact materials, and formally recognises newer technologies like modified atmosphere packaging. For most cloud kitchen and FMCG buyers, the practical takeaway is that food contact material definitions are getting more specific, not looser, so a packaging supplier should be able to state plainly what your box’s food-contact surface actually is.',
      },
      { type: 'heading', text: 'What this means in practice' },
      {
        type: 'list',
        items: [
          'Ask your packaging supplier what the food-contact surface of your box or container is made from, virgin board, bio-coating, or a specific lining, not just "food safe" as a label',
          'If your current packaging uses metal staples for sealing, that needs to change following the June 2026 advisory',
          'Formats using modern-trade or retail-chain distribution should confirm any additional documentation that specific retailer requires, since requirements can vary by retail partner',
        ],
      },
      {
        type: 'paragraph',
        text: 'This is general awareness, not legal advice, and requirements can change or vary by product category. Visalatchi’s food-grade board, bagasse containers, and food delivery packs use virgin contact surfaces and food-approved bio-coatings; relevant specification and compliance documentation is available on request, share your specific retail or regulatory requirement directly with Periyanan.',
      },
    ],
    sources: [
      {
        title: 'FSSAI Draft Packaging Rules 2026 Explained',
        url: 'https://www.indialaw.in/blog/food/fssai-draft-packaging-rules-2026/',
      },
      {
        title: 'FSSAI Packaging And Labelling Regulations In India 2026',
        url: 'https://foodsure.co.in/blog/fssai-packaging-and-labelling/',
      },
    ],
  },
  {
    slug: 'export-master-carton-compliance-checklist',
    title: 'What Export Buyers Actually Check on Master Carton Compliance',
    description:
      'A general awareness guide to export packaging compliance for master cartons, covering labeling, moisture barriers, and the ISPM 15 rule for wooden pallets.',
    publishDate: '2026-08-14',
    category: 'export',
    relatedProductIds: ['prod-02'],
    content: [
      {
        type: 'paragraph',
        text: 'Export packaging compliance is not one universal checklist, requirements vary by destination country and by individual buyer. That said, a few categories come up consistently enough to be worth knowing before your buyer’s audit surfaces them as a surprise.',
      },
      { type: 'heading', text: 'Moisture and transit duration' },
      {
        type: 'paragraph',
        text: 'Ocean freight transit takes weeks, not days, and containers sit in variable humidity and temperature the entire time. A master carton specified for a short domestic courier trip is not automatically adequate for that, moisture barrier performance and edge-crush strength both need to be specified against the real transit duration and route, not assumed.',
      },
      { type: 'heading', text: 'ISPM 15, and where it actually applies' },
      {
        type: 'paragraph',
        text: 'ISPM 15 is an international standard, enforced by more than 160 countries including India, that regulates wooden packaging materials used in international trade, to prevent the spread of pests through untreated wood. It requires wood packaging (pallets, crates, dunnage) to be heat treated or fumigated by an accredited facility and marked with a specific stamp showing the IPPC logo, country code, facility code, and treatment method. This is important to know precisely because it is easy to misapply: ISPM 15 governs wood packaging materials specifically, it does not apply to the corrugated carton itself. If your export shipment uses wooden pallets alongside corrugated master cartons, the pallets need ISPM 15 compliant marking, confirm this with your pallet supplier or freight forwarder directly.',
      },
      { type: 'heading', text: 'Labeling requirements set by the buyer, not a general rule' },
      {
        type: 'paragraph',
        text: 'Country of origin marking, buyer-specific barcodes, carton content labeling, and language requirements are set by the importing country and the specific buyer’s own standards, there is no single template that covers every market. The reliable process is: share your destination market and buyer’s specific requirement upfront, and confirm what can be met before committing to an order, rather than assuming a standard export carton will satisfy every market’s audit.',
      },
      { type: 'heading', text: 'Why this matters for your shipping slot' },
      {
        type: 'paragraph',
        text: 'A compliance gap discovered at the port, wrong labeling, missing documentation, non-compliant pallet marking, can hold up a container past its booked sailing slot, which costs far more than the packaging itself. Confirming compliance requirements before production, not after the carton is built, is the only way to avoid that.',
      },
    ],
    sources: [
      {
        title: 'ISPM-15 Explained: Wood Packaging Export Rules for India',
        url: 'https://ergopack-india.com/blog/ispm-15-wood-packaging-explained',
      },
      {
        title: 'ISPM 15 & Export Treatment, National Wooden Pallet and Container Association',
        url: 'https://woodpackglobal.org/page/ISPM_15',
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
