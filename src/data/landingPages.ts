import { FaqItem } from './faqs';

// High-intent commercial landing pages aimed at bulk buyers (MOQ 5,000 for
// large boxes, 10,000 for small boxes). Each targets a distinct search intent
// so they don't cannibalise the division pages or each other:
//   - "TV / fan / appliance boxes" (highest-ticket, manufacturer-led)
//   - "bulk / wholesale boxes" (pan-India)
//   - "corrugated box manufacturer Chennai" (local pack + Chennai industry)
//   - "5-ply / 7-ply corrugated boxes" (board-spec research intent)
//   - "pump & motor packaging boxes" (heavy-load industrial cartons)
//   - "mixer grinder packaging boxes" (kitchen-appliance cartons)
//   - "supplying Tamil Nadu industry" (UNPUBLISHED until owner facts arrive)
// Content follows the same rule as the rest of the site: catalog facts and
// general packaging knowledge only. No invented capacity figures, years,
// client names, testimonials, certifications, test results, prices, transit
// times or statistics. Visalatchi process claims are limited to: physical
// pre-production sample approval, itemised ex-GST quotes with no hidden plate
// or die charges, pan-India dispatch from Thiruvottiyur, and the two named
// specialists (Palaniappan 98405 01323, Periyanan 94444 20367).
//
// Note: BulkLandingView renders exactly three cells per table row (row[0],
// row[1], row[2]), so every table here keeps three columns.
export interface LandingPage {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  /** Answer-first opening paragraph, written to be quotable on its own. */
  answer: string;
  intro: string;
  buyers: { title: string; desc: string }[];
  table: { headers: string[]; rows: string[][] };
  tableCaption: string;
  steps: { title: string; desc: string }[];
  faqs: FaqItem[];
  ctaNote: string;
  /** Quote-modal requirement pre-fill, e.g. "TV & Appliance Packaging Box". */
  quoteRequirement: string;
  /** Short breadcrumb label. */
  breadcrumb: string;
  /** false = data kept for later (needs owner facts), not routed or in the sitemap. */
  published: boolean;
  /** Optional Tamil summary. Rendered only once a Tamil speaker has reviewed it. */
  tamilSummary?: { text: string; reviewed: boolean };
}

export const LANDING_PAGES: LandingPage[] = [
  {
    path: '/appliance-packaging-boxes',
    title: 'TV, Fan & Appliance Packaging Boxes Chennai | MOQ 5,000',
    description:
      'Heavy-duty 5-ply and 7-ply cartons for TVs, fans, air coolers and appliances, made in Chennai to your product size. From 5,000 units. Get a bulk quote.',
    eyebrow: 'Appliance & Electronics Packaging · MOQ 5,000 Units',
    h1: 'TV, Fan & Appliance Packaging Boxes, Made in Chennai',
    answer:
      'Visalatchi Manufactures makes heavy-duty 5-ply and 7-ply corrugated cartons for TVs, monitors, fans, air coolers, mixer grinders, water heaters and other appliances at its plant in Thiruvottiyur, Chennai. Every carton is built to the product\'s dimensions and weight, with a minimum order of 5,000 units per size.',
    intro:
      'For an appliance brand, a weak carton shows up as dealer returns, dented products and warranty claims. We size every carton to the product and its fitments, match the board strength to the product weight and how the cartons are stacked in your warehouse and trucks, and approve a physical sample with you before the bulk run. Itemised pricing, no hidden plate or die charges.',
    buyers: [
      { title: 'TV & display manufacturers', desc: 'Cartons for televisions, monitors and displays that must survive stacking, loading and last-mile delivery.' },
      { title: 'Fan manufacturers', desc: 'Boxes for ceiling, table, pedestal and exhaust fans, sized for the motor, blades and accessories.' },
      { title: 'Kitchen & home appliance brands', desc: 'Mixer grinders, wet grinders, air coolers, water heaters, induction cooktops and similar boxed products.' },
      { title: 'Electrical & power products', desc: 'Inverters, UPS units, stabilisers, pumps and motors that need strong cartons for heavier loads.' },
    ],
    table: {
      headers: ['Product', 'Typical board', 'Minimum order'],
      rows: [
        ['TV & monitor cartons', '5-ply or 7-ply, sized to screen size', '5,000 units per size'],
        ['Ceiling / table / pedestal fan boxes', '5-ply', '5,000 units per size'],
        ['Air cooler & large appliance cartons', '5-ply or 7-ply', '5,000 units per size'],
        ['Mixer grinder & kitchen appliance boxes', '3-ply or 5-ply, printed', '5,000 units per size'],
        ['Inverter, UPS & pump cartons', '5-ply or 7-ply', '5,000 units per size'],
        ['Accessory & spare-part boxes (small)', '3-ply', '10,000 units per size'],
      ],
    },
    tableCaption: 'Board, ply and fitments are recommended from your product weight, dimensions, stacking height and transit method, then confirmed on a physical sample. Unit pricing is quoted ex-GST per size and quantity.',
    steps: [
      { title: 'Share product details', desc: 'Product dimensions and weight, current carton spec if any, monthly volume and print artwork.' },
      { title: 'Spec & itemised quote', desc: 'Recommended ply, board and box style with an itemised ex-GST volume quote.' },
      { title: 'Physical sample & fit test', desc: 'Test the sample with your actual product before the bulk run.' },
      { title: 'Bulk production & scheduled dispatch', desc: 'Runs from 5,000 units, delivered to your plant or warehouse on a repeat schedule.' },
    ],
    faqs: [
      {
        q: 'Who makes TV and appliance boxes in Chennai?',
        a: 'Visalatchi Manufactures makes 5-ply and 7-ply corrugated cartons for TVs, fans, air coolers and other appliances at its plant in Thiruvottiyur, Chennai, Tamil Nadu, from a minimum order of 5,000 units per size.',
      },
      {
        q: 'What is the minimum order for fan or TV boxes?',
        a: 'The minimum order is 5,000 units per box size and print design. Small accessory or spare-part boxes have a 10,000-unit minimum.',
      },
      {
        q: 'Should an appliance carton be 5-ply or 7-ply?',
        a: 'Most fans, mixer grinders and mid-weight appliances ship well in 5-ply cartons. Heavier products, larger TVs and cartons stacked high in warehouses or trucks usually need 7-ply. The right choice is confirmed by testing a physical sample with your product.',
      },
      {
        q: 'Can you print our brand and model details on the carton?',
        a: 'Yes. Cartons can be printed with your logo, model number, product images, barcodes area and handling symbols such as this-side-up and fragile marks.',
      },
      {
        q: 'Do you supply appliance manufacturers outside Chennai?',
        a: 'Yes. Cartons are made at the Thiruvottiyur plant in Chennai and dispatched pan-India, to appliance plants and warehouses in Tamil Nadu and across the country.',
      },
    ],
    ctaNote: 'Large boxes: minimum order 5,000 units per size.',
    quoteRequirement: 'TV & Appliance Packaging Box',
    breadcrumb: 'Appliance Boxes',
    published: true,
    // Draft Tamil translation. It MUST be reviewed by a native Tamil speaker
    // (wording, brand/name spellings, numbers) before `reviewed` is set to
    // true. It does not render on the page while reviewed is false.
    tamilSummary: {
      reviewed: false,
      text: 'விசாலாட்சி மேனுஃபாக்சர்ஸ், சென்னை திருவொற்றியூரில் உள்ள எங்கள் தொழிற்சாலையில் டிவி, மின்விசிறி, ஏர் கூலர், மிக்ஸி மற்றும் பிற வீட்டு உபயோகப் பொருட்களுக்கான 5-பிளை மற்றும் 7-பிளை கனரக கொருகேட்டட் அட்டைப்பெட்டிகளை தயாரிக்கிறது. ஒவ்வொரு பெட்டியும் உங்கள் பொருளின் அளவு, எடை மற்றும் அடுக்கும் உயரத்திற்கு ஏற்ப வடிவமைக்கப்படுகிறது. உங்கள் லோகோ மற்றும் மாடல் விவரங்களுடன் அச்சிட்டு தருகிறோம். மொத்த உற்பத்திக்கு முன் மாதிரிப் பெட்டியை நீங்கள் சோதித்து அங்கீகரிக்கலாம். குறைந்தபட்ச ஆர்டர்: பெரிய பெட்டிகளுக்கு ஒரு அளவுக்கு 5,000, சிறிய பெட்டிகளுக்கு 10,000. தொடர்புக்கு: பழனியப்பன் 98405 01323, பெரியண்ணன் 94444 20367.',
    },
  },
  {
    path: '/bulk-packaging-boxes',
    title: 'Bulk Packaging Boxes Manufacturer in India | Visalatchi',
    description:
      'Wholesale corrugated, appliance, mailer, food and export boxes direct from a Chennai factory. MOQ 5,000 large, 10,000 small boxes. Request a volume quote.',
    eyebrow: 'Bulk & Wholesale · MOQ 5,000 Large / 10,000 Small',
    h1: 'Bulk Packaging Boxes, Manufactured from 5,000 Units',
    answer:
      'Visalatchi Manufactures is a bulk packaging box manufacturer in Chennai, Tamil Nadu, producing appliance cartons, export master cartons, corrugated shipping boxes, printed mailer boxes and food-safe packaging. The minimum order is 5,000 units for large boxes and 10,000 units for small boxes, with factory-direct volume pricing and pan-India dispatch.',
    intro:
      'We work with brands, FMCG manufacturers, exporters and distributors who buy packaging by the thousands. Every order runs as a dedicated production job after a physical sample is approved, so the last box in the run matches the first, and every quotation is itemised with no hidden plate or conversion charges.',
    buyers: [
      { title: 'Appliance & electronics manufacturers', desc: 'TV, fan, cooler and kitchen-appliance makers needing heavy-duty cartons from 5,000 units per size.' },
      { title: 'D2C & e-commerce brands', desc: 'Shipping 5,000+ orders a month on a validated box size and ready to move off small-batch pricing.' },
      { title: 'Food, FMCG & cloud-kitchen chains', desc: 'Steady weekly consumption of food-safe boxes, bagasse containers and paper bowls across outlets or SKUs.' },
      { title: 'Exporters', desc: 'Container shipments that need consistent master cartons built to the buyer\'s specification every time.' },
      { title: 'Distributors & wholesalers', desc: 'Buying packaging in volume for resale or for multiple client brands across India.' },
    ],
    table: {
      headers: ['Product', 'Typical bulk use', 'Minimum order'],
      rows: [
        ['TV, Fan & Appliance Cartons (5/7-ply)', 'TVs, fans, air coolers, kitchen appliances', '5,000 units'],
        ['Export Master Cartons (5/7-ply)', 'Container shipments, bulk domestic distribution', '5,000 units'],
        ['Corrugated Shipping Box (3/5-ply)', 'Small and medium e-commerce and B2B cartons', '10,000 units'],
        ['Custom Printed Mailer Box', 'Branded D2C shipping, subscription boxes, gifting', '10,000 units'],
        ['Food Delivery Box', 'Cloud kitchens, QSR chains, bakeries, meal kits', '10,000 units'],
        ['Courier Mailers, Paper Bags & Eco Food Packs', 'High-volume dispatch, retail and food chains', '10,000 units'],
      ],
    },
    tableCaption: 'Minimums apply per size and per print design: 5,000 units for large boxes, 10,000 for small boxes. Unit pricing is quoted ex-GST on size, board grade, print and quantity, with lower rates at 25,000 and 50,000+ units.',
    steps: [
      { title: 'Share your spec', desc: 'Box dimensions, product weight, ply or material, print colours, quantity and target delivery date.' },
      { title: 'Get an itemised quote', desc: 'An ex-GST volume quotation with no hidden plate or conversion charges.' },
      { title: 'Approve a physical sample', desc: 'Confirm size, print and material before the bulk run starts.' },
      { title: 'Bulk production & dispatch', desc: 'Dedicated production run, then pan-India dispatch to your warehouse, outlets or port.' },
    ],
    faqs: [
      {
        q: 'What is the minimum order for bulk packaging boxes?',
        a: 'Visalatchi\'s minimum order is 5,000 units for large boxes (TV, fan, appliance and export master cartons) and 10,000 units for small boxes, mailers, food packs and bags, per size and print design. Larger orders get lower unit rates.',
      },
      {
        q: 'Where can I buy packaging boxes in bulk in India?',
        a: 'Bulk packaging boxes can be ordered direct from a manufacturer such as Visalatchi Manufactures in Chennai, Tamil Nadu, which produces appliance, corrugated, mailer, food and export boxes in bulk (5,000+ large, 10,000+ small) and dispatches pan-India.',
      },
      {
        q: 'Is buying packaging boxes in bulk cheaper?',
        a: 'Yes. Fixed setup costs such as dies, printing plates and machine changeover are spread across every unit in a run, so a 5,000-unit order carries roughly one tenth of the setup cost per box of a 500-unit order.',
      },
      {
        q: 'Do you ship bulk orders outside Tamil Nadu?',
        a: 'Yes. Bulk orders are manufactured in Chennai and dispatched pan-India, to warehouses, fulfillment centres, retail outlets or ports.',
      },
    ],
    ctaNote: 'Bulk only: 5,000+ large boxes, 10,000+ small boxes.',
    quoteRequirement: 'Bulk Packaging Boxes',
    breadcrumb: 'Bulk Boxes',
    published: true,
  },
  {
    path: '/corrugated-box-manufacturer-chennai',
    title: 'Corrugated Box Manufacturer in Chennai | 3, 5 & 7-Ply Bulk',
    description:
      '3, 5 and 7-ply corrugated boxes made in Thiruvottiyur, North Chennai. Large cartons from 5,000 units, small boxes from 10,000. Ask for a sample and quote.',
    eyebrow: 'Thiruvottiyur, North Chennai · Bulk Corrugated Boxes',
    h1: 'Corrugated Box Manufacturer in Chennai for Bulk Orders',
    answer:
      'Visalatchi Manufactures makes 3-ply, 5-ply and 7-ply corrugated boxes and cartons at its plant in Thiruvottiyur, North Chennai, for manufacturers, brands and exporters. Large cartons start at 5,000 units and small boxes at 10,000. The plant sits in North Chennai, near Chennai Port, Ennore, Manali and the Red Hills industrial belt.',
    intro:
      'For Chennai businesses, a local corrugated box supplier means shorter dispatch times, easier sample collection and a factory you can visit. Plain or printed cartons are built to your product weight, stacking load and shipping method, from 5,000 units for large cartons and 10,000 for small boxes.',
    buyers: [
      { title: 'Manufacturers & industrial units', desc: 'Outer cartons and shipper boxes for units in Ambattur, Manali, Red Hills, Madhavaram and across Chennai.' },
      { title: 'Exporters near Chennai Port', desc: 'Master cartons built to buyer specification, a short haul from the Thiruvottiyur plant to the port.' },
      { title: 'E-commerce warehouses', desc: 'Repeat bulk runs of shipping cartons for fulfillment centres in and around Chennai.' },
      { title: 'FMCG & food brands', desc: 'Secondary cartons for packed goods distributed across Tamil Nadu and South India.' },
    ],
    table: {
      headers: ['Board', 'Best for', 'Minimum order'],
      rows: [
        ['3-ply corrugated (small boxes)', 'Lighter e-commerce products, inner and retail cartons', '10,000 units'],
        ['5-ply corrugated (large cartons)', 'Fans, appliances, master cartons, stacked warehouse storage', '5,000 units'],
        ['7-ply corrugated (heavy-duty)', 'TVs, heavy appliances, export and high-stack loads', '5,000 units'],
        ['Printed corrugated', 'Branded cartons with your logo, model details and handling marks', 'Per size: 5,000 large / 10,000 small'],
      ],
    },
    tableCaption: 'Ply, board grade and box style are recommended from your product weight, stacking load and transit method, then confirmed on a physical sample.',
    steps: [
      { title: 'Share dimensions & load', desc: 'Inner dimensions, product weight, stacking height and shipping method.' },
      { title: 'Board recommendation & quote', desc: 'The right ply and board grade, with an itemised ex-GST volume quote.' },
      { title: 'Sample approval', desc: 'Collect or receive a physical sample at your Chennai premises.' },
      { title: 'Production & local dispatch', desc: 'Bulk run from Thiruvottiyur, dispatched across Chennai, Tamil Nadu and India.' },
    ],
    faqs: [
      {
        q: 'Who makes corrugated boxes in bulk in Chennai?',
        a: 'Visalatchi Manufactures produces 3-ply, 5-ply and 7-ply corrugated boxes in bulk at its plant in Thiruvottiyur, North Chennai: large cartons from 5,000 units and small boxes from 10,000.',
      },
      {
        q: 'What is the difference between 3-ply and 5-ply corrugated boxes?',
        a: 'A 3-ply box has one fluted layer between two liners and suits lighter products. A 5-ply box has two fluted layers and three liners, giving more stacking strength for heavier goods, master cartons and export shipments.',
      },
      {
        q: 'Can I collect samples from the Chennai plant?',
        a: 'Yes. The plant is at No 10/4B Village Street, Sadayan Kuppam Pattai, Thiruvottiyur, Chennai 600019. Chennai businesses can collect samples or arrange a visit before placing a bulk order.',
      },
      {
        q: 'What is the minimum order for corrugated boxes?',
        a: 'The minimum order is 5,000 units for large cartons and 10,000 units for small boxes, per size and print design.',
      },
    ],
    ctaNote: 'Minimum 5,000 large cartons or 10,000 small boxes per size.',
    quoteRequirement: 'Corrugated Boxes',
    breadcrumb: 'Corrugated Boxes Chennai',
    published: true,
    // Draft Tamil translation. It MUST be reviewed by a native Tamil speaker
    // (wording, brand/name spellings, numbers) before `reviewed` is set to
    // true. It does not render on the page while reviewed is false.
    tamilSummary: {
      reviewed: false,
      text: 'விசாலாட்சி மேனுஃபாக்சர்ஸ், சென்னை திருவொற்றியூரில் உள்ள எங்கள் தொழிற்சாலையில் 3-பிளை, 5-பிளை மற்றும் 7-பிளை கொருகேட்டட் பெட்டிகள் மற்றும் அட்டைப்பெட்டிகளை மொத்தமாக தயாரிக்கிறோம். உற்பத்தியாளர்கள், பிராண்டுகள் மற்றும் ஏற்றுமதியாளர்களுக்காக, உங்கள் பொருளின் அளவு, எடை மற்றும் அனுப்பும் முறைக்கு ஏற்ப பெட்டிகளை வடிவமைக்கிறோம். மொத்த உற்பத்திக்கு முன் மாதிரிப் பெட்டியை நீங்கள் அங்கீகரிக்கலாம். விலைப்புள்ளி GST தவிர்த்து விவரமாக வழங்கப்படும். குறைந்தபட்ச ஆர்டர்: பெரிய பெட்டிகளுக்கு 5,000, சிறிய பெட்டிகளுக்கு 10,000. இந்தியா முழுவதும் அனுப்புகிறோம். தொடர்புக்கு: பழனியப்பன் 98405 01323, பெரியண்ணன் 94444 20367.',
    },
  },
  {
    path: '/5-ply-7-ply-corrugated-boxes',
    title: '5-Ply & 7-Ply Corrugated Boxes | Bulk Maker in Chennai',
    description:
      'What 3, 5 and 7-ply corrugated boxes mean, which ply suits product weight and stacking, and bulk MOQs from 5,000. Send your spec for a ply recommendation.',
    eyebrow: '3-Ply · 5-Ply · 7-Ply Corrugated Board Explained',
    h1: '5-Ply and 7-Ply Corrugated Boxes: Which Ply Does Your Product Need?',
    answer:
      'Ply is the number of paper layers in corrugated board: 3-ply has two flat liners and one fluted medium, 5-ply has three liners and two flutes, and 7-ply has four liners and three flutes. Visalatchi Manufactures makes all three in Chennai, with a minimum order of 5,000 large cartons or 10,000 small boxes.',
    intro:
      'Each extra fluted layer adds stiffness and stacking strength, but also board cost and carton weight, so the right ply is the lightest one that still protects your product through stacking, loading and transit. The choice depends on what the product weighs, how high cartons are stacked in your warehouse and trucks, how long they sit in humid storage, and how many times they are handled. We recommend a ply from your product details, then you confirm it on a physical sample before any bulk run.',
    buyers: [
      { title: 'Buyers upgrading from 3-ply', desc: 'Brands seeing crushed corners, bulging sides or collapsed bottom-row cartons who need to know whether 5-ply will fix the problem.' },
      { title: 'Appliance & electrical makers', desc: 'TV, fan, cooler, pump, motor and inverter manufacturers choosing between 5-ply and 7-ply for heavier, high-value products.' },
      { title: 'Exporters', desc: 'Master cartons that face long storage, container stacking and repeated handling, where 5-ply or 7-ply is the usual starting point.' },
      { title: 'Procurement & packaging engineers', desc: 'Teams writing or reviewing a carton specification who want the ply, box style and print settled before quotes are compared, so suppliers price the same board.' },
      { title: 'Buyers cutting packaging cost', desc: 'Brands that suspect their current 7-ply carton is over-specified and want to test whether a well-designed 5-ply carton protects the product just as well.' },
    ],
    table: {
      headers: ['Ply & construction', 'Load class, stacking situation and typical products', 'Minimum order'],
      rows: [
        ['3-ply (2 liners + 1 flute)', 'Light products; low stacks or cartons that travel inside an outer box. Mailers, small e-commerce cartons, retail and inner boxes, accessory boxes.', '10,000 units (small boxes)'],
        ['5-ply (3 liners + 2 flutes)', 'Medium-weight products; regular warehouse stacking and truck loading. Fans, mixer grinders, mid-size appliances, master cartons, larger e-commerce shippers.', '5,000 units (large boxes)'],
        ['7-ply (4 liners + 3 flutes)', 'Heavy or high-value products; tall stacks, long storage or rough handling. Large TVs, heavy appliances, pumps and motors, export cartons.', '5,000 units (large boxes)'],
        ['Mixed ply (5-ply outer, 3-ply inner)', 'Products packed in a printed 3-ply unit carton and grouped inside a 5-ply master carton for dispatch, common for kitchen appliances.', '5,000 per size (master); 10,000 (small inner)'],
        ['5-ply or 7-ply, printed', 'Any of the above with your logo, model details, barcode area and handling marks printed on the carton.', '5,000 per size and design'],
      ],
    },
    tableCaption: 'Load classes are a general guide, not a rating. The final ply, flute profile and paper grade are recommended from your product weight, dimensions, stacking height and transit method, then confirmed by testing a physical sample with your product. Pricing is quoted ex-GST per size and quantity.',
    steps: [
      { title: 'Tell us the load', desc: 'Product weight and dimensions, how many cartons high they are stacked, storage conditions and how the cartons are shipped.' },
      { title: 'Ply recommendation & quote', desc: 'We suggest 3, 5 or 7-ply with a box style and send an itemised ex-GST quote, with no hidden plate or die charges.' },
      { title: 'Physical sample test', desc: 'Pack your real product in the sample carton, stack it and handle it the way your dispatch team does, and check the bottom carton in the stack, before you approve.' },
      { title: 'Bulk run & dispatch', desc: 'Production from 5,000 large or 10,000 small boxes per size, dispatched from Thiruvottiyur, Chennai, anywhere in India.' },
    ],
    faqs: [
      {
        q: 'What does 5-ply mean in a corrugated box?',
        a: 'A 5-ply corrugated box is made of five paper layers: three flat liners with two fluted (wavy) mediums between them. The two flute layers give noticeably more stiffness and stacking strength than 3-ply, which is why 5-ply is common for appliances, master cartons and heavier e-commerce shipments.',
      },
      {
        q: 'When should I choose 7-ply instead of 5-ply?',
        a: 'Choose 7-ply when the product is heavy or high-value, when cartons are stacked tall for long periods, or when they face rough handling or export transit. For most mid-weight products, a well-specified 5-ply carton is enough, and a sample test with your product is the reliable way to decide.',
      },
      {
        q: 'Is a higher ply always better?',
        a: 'No, a higher ply is not always better, because each extra layer adds board cost and carton weight. Over-specifying wastes money on every unit of a bulk run. The goal is the lightest board that protects the product through your real stacking and transit conditions.',
      },
      {
        q: 'Does humidity affect corrugated box strength?',
        a: 'Yes, corrugated board absorbs moisture from humid air and loses compression strength as it does. In humid coastal storage, such as warehouses around Chennai, buyers often add strength margin by moving up a ply or a paper grade rather than running the carton at its limit.',
      },
      {
        q: 'What is the minimum order for 5-ply and 7-ply boxes?',
        a: 'At Visalatchi Manufactures, 5-ply and 7-ply large cartons have a minimum order of 5,000 units per size and print design. Small 3-ply boxes, mailers and accessory boxes have a 10,000-unit minimum. Larger orders get lower unit rates.',
      },
    ],
    ctaNote: '5/7-ply large cartons from 5,000 units; 3-ply small boxes from 10,000.',
    quoteRequirement: '5-Ply / 7-Ply Corrugated Boxes',
    breadcrumb: '5 & 7-Ply Boxes',
    published: true,
  },
  {
    path: '/pump-motor-packaging-boxes',
    title: 'Pump & Motor Packaging Boxes | Heavy-Duty 5/7-Ply Cartons',
    description:
      'Heavy-duty 5-ply and 7-ply cartons for pumps, motors and monoblocks, sized to each model and dispatched pan-India from Chennai. MOQ 5,000. Get a bulk quote.',
    eyebrow: 'Pump & Motor Packaging · MOQ 5,000 Per Size',
    h1: 'Pump and Motor Packaging Boxes for Heavy Loads',
    answer:
      'Visalatchi Manufactures makes heavy-duty 5-ply and 7-ply corrugated cartons for pumps, electric motors, monoblocks and similar heavy products at its plant in Thiruvottiyur, Chennai. Each carton is sized to the model and its weight, with a minimum order of 5,000 units per size and pan-India dispatch.',
    intro:
      'Pumps and motors are dense, heavy for their size and often have protruding shafts, terminal boxes or flanges, so a generic carton tends to fail at the base, the corners or where the product presses on one panel. Tamil Nadu has a large pump and motor manufacturing base, with Coimbatore as a well-known cluster. We build cartons around each model\'s dimensions and weight, recommend the ply from how the cartons are stacked and shipped, and approve a physical sample with you before the bulk run. Quotes are itemised ex-GST, with no hidden plate or die charges.',
    buyers: [
      { title: 'Pump manufacturers', desc: 'Domestic, agricultural, submersible and monoblock pump makers who need a strong carton for each model in the range, built so the base does not give way under the product weight.' },
      { title: 'Electric motor makers', desc: 'Manufacturers of single-phase and three-phase motors, where product weight and shaft protection drive the carton spec.' },
      { title: 'Pump & motor dealers and distributors', desc: 'Businesses repacking or redistributing heavy units who need consistent, printed outer cartons in volume.' },
      { title: 'Allied heavy products', desc: 'Compressors, gear units, stabilisers, inverters and similar dense products that ship in large corrugated cartons.' },
      { title: 'Brands standardising carton sizes', desc: 'Manufacturers with a wide model range who want to rationalise to fewer carton sizes, so each size reaches the 5,000-unit run and stock is simpler to manage.' },
    ],
    table: {
      headers: ['Carton type', 'Typical board and use', 'Minimum order'],
      rows: [
        ['Single-unit pump carton', '5-ply or 7-ply depending on product weight; sized to the pump body, shaft and fittings', '5,000 units per size'],
        ['Single-unit motor carton', '5-ply or 7-ply; sized to frame, shaft and terminal box, printed with model details', '5,000 units per size'],
        ['Heavy-duty export carton', '7-ply for long storage, container stacking and repeated handling', '5,000 units per size'],
        ['Master / outer carton', '5-ply or 7-ply for grouping smaller units or accessory kits for dispatch', '5,000 units per size'],
        ['Printed carton with specification panel', 'Any of the above, printed with brand, model, ratings panel area and heavy-load handling marks', '5,000 units per size and design'],
        ['Spare-part & accessory box (small)', '3-ply for impellers, seals, capacitors and fittings', '10,000 units per size'],
      ],
    },
    tableCaption: 'Board, ply and box style are recommended from your product weight, dimensions, stacking height and transit method, then confirmed by packing your actual pump or motor in a physical sample. Every size and print design is quoted separately, ex-GST, with no hidden plate or die charges.',
    steps: [
      { title: 'Send model details', desc: 'Dimensions and weight for each model, any protruding parts such as shafts or terminal boxes, current carton spec and damage history if you have one, and monthly volume per model.' },
      { title: 'Ply & style recommendation', desc: 'We suggest 5-ply or 7-ply and a box style per model, with an itemised ex-GST quote.' },
      { title: 'Sample & load check', desc: 'Pack your real pump or motor in the sample, stack and handle it as your dispatch team does, then approve.' },
      { title: 'Bulk run & dispatch', desc: 'Production from 5,000 units per size, dispatched from Thiruvottiyur, Chennai, to your plant or warehouse anywhere in India.' },
    ],
    faqs: [
      {
        q: 'What ply of carton does a pump or motor need?',
        a: 'Most pumps and motors ship in 5-ply or 7-ply corrugated cartons, because they are dense and heavy for their size. Lighter domestic models often suit 5-ply, while heavier units, tall stacks and export shipments usually need 7-ply. The final choice is confirmed by testing a sample with your product.',
      },
      {
        q: 'What is the minimum order for pump and motor boxes?',
        a: 'At Visalatchi Manufactures, pump and motor cartons are large boxes with a minimum order of 5,000 units per size and print design. Small spare-part and accessory boxes have a 10,000-unit minimum. Larger orders get lower unit rates.',
      },
      {
        q: 'Do you supply pump makers in Coimbatore?',
        a: 'Yes, cartons are made at the Thiruvottiyur plant in Chennai and dispatched pan-India, including to pump and motor manufacturers in Coimbatore. Send your delivery location with your enquiry and it is included in the quote.',
      },
      {
        q: 'Can one carton size fit several pump models?',
        a: 'Sometimes, if the models are close in size and weight, but a loose fit lets a heavy product move and damage the carton from inside. Many manufacturers standardise a few carton sizes across their range. Each size is its own production run with a 5,000-unit minimum.',
      },
      {
        q: 'Can the carton be printed with model and handling details?',
        a: 'Yes. Pump and motor cartons can be printed with your brand, model number, specification panel, barcode area and handling marks such as this-side-up, fragile and heavy-load symbols. Each print design is its own run with a 5,000-unit minimum per size, and the print is checked on the physical sample before production.',
      },
    ],
    ctaNote: 'Pump & motor cartons: minimum 5,000 units per size.',
    quoteRequirement: 'Pump & Motor Packaging Box',
    breadcrumb: 'Pump & Motor Boxes',
    published: true,
  },
  {
    path: '/mixer-grinder-packaging-boxes',
    title: 'Mixer Grinder Packaging Boxes | Printed Cartons, Chennai',
    description:
      'Printed single-unit cartons and master cartons for mixer grinders and kitchen appliances, made in Chennai. MOQ 5,000 per size. Request a sample and quote.',
    eyebrow: 'Kitchen Appliance Packaging · MOQ 5,000 Per Size',
    h1: 'Mixer Grinder Packaging Boxes: Printed Unit Cartons and Master Cartons',
    answer:
      'Visalatchi Manufactures makes printed single-unit cartons and corrugated master cartons for mixer grinders, wet grinders, juicers and other kitchen appliances at its plant in Thiruvottiyur, Chennai. Printed appliance cartons have a minimum order of 5,000 units per size, and small accessory boxes start at 10,000 units.',
    intro:
      'A mixer grinder carton does two jobs. It has to protect a motor base and several jars through stacking and transit, and it is also the box a shopper sees on the dealer\'s shelf. We size each single-unit carton to the product and its fitments, print it with your brand, model and feature panels, and pair it with 5-ply or 7-ply master cartons that take the stacking load during grouped dispatch to distributors. A physical sample is approved with you before the bulk run, and quotes are itemised with no hidden plate or die charges.',
    buyers: [
      { title: 'Mixer grinder brands', desc: 'Manufacturers and brand owners who need printed retail cartons for each model and jar configuration in their range.' },
      { title: 'Kitchen appliance makers', desc: 'Wet grinders, juicer mixer grinders, food processors, induction cooktops and similar boxed kitchen products.' },
      { title: 'Contract manufacturers', desc: 'Units producing appliances for several brands who need separate printed cartons per brand and model.' },
      { title: 'Distributors & dealers', desc: 'Buyers who need master cartons that group single-unit boxes for warehouse storage and dealer dispatch.' },
      { title: 'Brands launching new models', desc: 'Kitchen-appliance brands adding a model or jar configuration who need a new printed carton sized and sampled before the launch production run.' },
    ],
    table: {
      headers: ['Carton type', 'Typical board and use', 'Minimum order'],
      rows: [
        ['Printed single-unit carton', '3-ply or 5-ply printed corrugated, sized to the motor base, jars and fitments', '5,000 units per size'],
        ['Heavier appliance carton', '5-ply for wet grinders and larger kitchen appliances that need more strength', '5,000 units per size'],
        ['Master / outer carton', '5-ply or 7-ply, holding several unit cartons for warehouse stacking and dealer dispatch', '5,000 units per size'],
        ['Gift or combo pack carton', 'Printed 3-ply or 5-ply carton for festive or combo offers that pack the appliance with extra jars or accessories', '5,000 units per size'],
        ['Accessory & spare jar box (small)', '3-ply for spare jars, blades, lids and accessory kits', '10,000 units per size'],
      ],
    },
    tableCaption: 'Printed single-unit appliance cartons count as large boxes (5,000 per size); small accessory boxes are 10,000 per size. Ply, print and fitments are recommended from your product weight, dimensions and dispatch method, then confirmed on a physical sample. Pricing is quoted ex-GST.',
    steps: [
      { title: 'Share product & artwork', desc: 'Product dimensions and weight with jars packed, number of models, artwork or print brief, and monthly volume per model.' },
      { title: 'Carton spec & quote', desc: 'Recommended ply, box style and print for unit and master cartons, with an itemised ex-GST quote.' },
      { title: 'Printed sample approval', desc: 'Check fit with your packed product, and check print, colour, panel layout and barcode placement on a physical sample before the bulk run starts.' },
      { title: 'Bulk run & dispatch', desc: 'Production from 5,000 units per size, dispatched from Thiruvottiyur, Chennai, to your plant or warehouse across India.' },
    ],
    faqs: [
      {
        q: 'What is the minimum order for mixer grinder boxes?',
        a: 'At Visalatchi Manufactures, printed single-unit mixer grinder cartons are large boxes with a minimum order of 5,000 units per size and print design. Master cartons are also 5,000 per size, while small accessory and spare-jar boxes have a 10,000-unit minimum.',
      },
      {
        q: 'Should a mixer grinder carton be 3-ply or 5-ply?',
        a: 'Lighter mixer grinders packed with good fitments can ship in a printed 3-ply carton inside a 5-ply master carton. Heavier models, wet grinders and units shipped without a master carton usually need 5-ply. Testing a sample with your packed product confirms the right choice.',
      },
      {
        q: 'What is a master carton for kitchen appliances?',
        a: 'A master carton is the outer corrugated box that groups several single-unit appliance cartons for storage and dispatch. It takes the stacking load in warehouses and trucks, so it is usually 5-ply or 7-ply and printed with shipping marks rather than retail graphics.',
      },
      {
        q: 'Can you print our brand, model and feature details?',
        a: 'Yes. Single-unit cartons can be printed with your logo, model number, product images, feature panels, jar details, barcode area and handling marks. Each print design counts as its own run with a 5,000-unit minimum per size, so brands with several models often share one carton size and change only the printed panel.',
      },
      {
        q: 'Do you make the inner fitments as well?',
        a: 'Fitments are discussed at the specification stage. Share how your product is currently held inside the carton, and the quote will state clearly what is included. The carton is always sized around the product with its fitments in place, then checked on a sample.',
      },
    ],
    ctaNote: 'Printed appliance cartons from 5,000 per size; accessory boxes from 10,000.',
    quoteRequirement: 'Mixer Grinder Packaging Box',
    breadcrumb: 'Mixer Grinder Boxes',
    published: true,
  },
  // UNPUBLISHED ON PURPOSE. This page stays `published: false` (not routed,
  // not in the sitemap) until the owner confirms which Tamil Nadu areas are
  // actually served on a regular basis, and the real routes/transit details.
  // A location page listing towns the business does not genuinely serve is
  // doorway content and a local-SEO trust risk, so every area, route or
  // transit time below is a "TODO(owner):" placeholder. Replace all of them
  // with owner-confirmed facts (and keep them consistent with GBP's service
  // area and TAMIL_NADU_CITIES in siteConfig.ts) before flipping published.
  {
    path: '/supplying-tamil-nadu-industry',
    title: 'Corrugated Boxes for Tamil Nadu Industry | Visalatchi',
    description:
      'Bulk corrugated cartons for Tamil Nadu manufacturers, made in Chennai and dispatched to your plant. MOQ 5,000 large, 10,000 small. Request a bulk quote.',
    eyebrow: 'Tamil Nadu Industry · Bulk Corrugated Packaging',
    h1: 'Corrugated Packaging for Tamil Nadu Manufacturers',
    answer:
      'Visalatchi Manufactures makes 3-ply, 5-ply and 7-ply corrugated boxes and cartons for manufacturers across Tamil Nadu at its plant in Thiruvottiyur, Chennai. Large cartons start at 5,000 units and small boxes at 10,000 units per size, and orders are dispatched from Chennai to plants and warehouses.',
    intro:
      'Tamil Nadu\'s manufacturers, from appliance and electrical units to pump makers and exporters, buy corrugated packaging in volume and need it to arrive on schedule. TODO(owner): name the industrial areas served regularly from the Thiruvottiyur plant. Every order follows the same process: a recommended board spec, an itemised ex-GST quote with no hidden plate or die charges, a physical sample approved before production, then a bulk run dispatched from Chennai. TODO(owner): describe how dispatch to these areas is arranged.',
    buyers: [
      { title: 'Appliance & electronics plants', desc: 'TODO(owner): confirmed areas where appliance and electronics customers are served regularly.' },
      { title: 'Pump & motor manufacturers', desc: 'TODO(owner): confirmed areas (for example, whether the Coimbatore cluster is served regularly) and how cartons reach them.' },
      { title: 'Exporters', desc: 'Master cartons built to buyer specification for shipments through Chennai. TODO(owner): other ports or areas served regularly.' },
      { title: 'FMCG & food manufacturers', desc: 'TODO(owner): confirmed areas where FMCG and food customers are supplied regularly.' },
    ],
    table: {
      headers: ['Area', 'Dispatch route', 'Typical transit'],
      rows: [
        ['TODO(owner): area 1', 'TODO(owner): route / transport mode', 'TODO(owner): transit time'],
        ['TODO(owner): area 2', 'TODO(owner): route / transport mode', 'TODO(owner): transit time'],
        ['TODO(owner): area 3', 'TODO(owner): route / transport mode', 'TODO(owner): transit time'],
        ['TODO(owner): area 4', 'TODO(owner): route / transport mode', 'TODO(owner): transit time'],
      ],
    },
    tableCaption: 'All cartons are made at the Thiruvottiyur plant in Chennai. Minimum order 5,000 units for large boxes and 10,000 for small boxes, per size. TODO(owner): confirm how transit times are quoted.',
    steps: [
      { title: 'Share spec & location', desc: 'Product dimensions and weight, stacking and shipping method, quantity and your plant or warehouse location.' },
      { title: 'Spec & itemised quote', desc: 'Recommended ply and box style with an itemised ex-GST quote, no hidden plate or die charges.' },
      { title: 'Physical sample approval', desc: 'Approve a physical sample with your product before the bulk run. TODO(owner): how samples reach customers outside Chennai.' },
      { title: 'Bulk run & dispatch', desc: 'Production from 5,000 large or 10,000 small boxes per size, dispatched from Thiruvottiyur. TODO(owner): dispatch route to your area.' },
    ],
    faqs: [
      {
        q: 'Do you supply corrugated boxes outside Chennai?',
        a: 'Yes, Visalatchi Manufactures makes cartons in Thiruvottiyur, Chennai and dispatches pan-India. TODO(owner): list the Tamil Nadu areas served regularly.',
      },
      {
        q: 'How long does delivery take to my plant in Tamil Nadu?',
        a: 'TODO(owner): transit times by area, or how transit is confirmed per order.',
      },
      {
        q: 'What is the minimum order for Tamil Nadu buyers?',
        a: 'The minimum order is the same for every location: 5,000 units for large boxes such as appliance, export and master cartons, and 10,000 units for small boxes, mailers, food packs and bags, per size and print design.',
      },
      {
        q: 'Which industries do you supply in Tamil Nadu?',
        a: 'Visalatchi Manufactures makes cartons for appliance, electrical, pump and motor, export, FMCG and food businesses. TODO(owner): confirm which industries and areas are supplied regularly.',
      },
      {
        q: 'How do I get a sample if my plant is outside Chennai?',
        a: 'Every bulk order starts with a physical sample approved before production. TODO(owner): how samples are sent to customers outside Chennai.',
      },
    ],
    ctaNote: 'Minimum 5,000 large cartons or 10,000 small boxes per size.',
    quoteRequirement: 'Corrugated Boxes',
    breadcrumb: 'Tamil Nadu Industry',
    published: false,
  },
];

export const PUBLISHED_LANDING_PAGES = LANDING_PAGES.filter((p) => p.published);

export function getLandingPage(path: string): LandingPage | undefined {
  return PUBLISHED_LANDING_PAGES.find((p) => p.path === path);
}
