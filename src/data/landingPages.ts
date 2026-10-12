import { FaqItem } from './faqs';

// High-intent commercial landing pages aimed at bulk buyers (MOQ 5,000 for
// large boxes, 10,000 for small boxes). Each targets a distinct search intent
// so they don't cannibalise the division pages: "TV / fan / appliance boxes"
// (highest-ticket, manufacturer-led), "bulk / wholesale boxes" (pan-India)
// and "corrugated box manufacturer Chennai" (local pack + Chennai industry). Content follows the same rule as the rest of the site: catalog
// facts only, no invented capacity figures, client names or statistics.
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
}

export const LANDING_PAGES: LandingPage[] = [
  {
    path: '/appliance-packaging-boxes',
    title: 'TV, Fan & Appliance Box Manufacturer Chennai | MOQ 5,000',
    description:
      'Heavy-duty 5-ply and 7-ply cartons for TVs, fans, air coolers and appliances, made in Chennai to your product size and weight. Bulk orders from 5,000 units.',
    eyebrow: 'Appliance & Electronics Packaging · MOQ 5,000 Units',
    h1: 'TV, Fan & Appliance Packaging Boxes, Made in Chennai',
    answer:
      'Visalatchi Manufactures makes heavy-duty 5-ply and 7-ply corrugated cartons for TVs and monitors, ceiling, table and pedestal fans, air coolers, mixer grinders, water heaters and other appliances at its plant in Thiruvottiyur, Chennai. Boxes are built to each product\'s dimensions and weight, from a minimum order of 5,000 units per size.',
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
        a: 'Yes. Cartons are made in Chennai and dispatched across Tamil Nadu, including Sriperumbudur, Oragadam, Hosur and Coimbatore, and to plants and warehouses across India.',
      },
    ],
    ctaNote: 'Large boxes: minimum order 5,000 units per size.',
  },
  {
    path: '/bulk-packaging-boxes',
    title: 'Bulk Packaging Boxes Manufacturer India | Visalatchi',
    description:
      'Wholesale corrugated, appliance, mailer, food and export boxes from a Chennai factory. MOQ 5,000 large boxes, 10,000 small boxes. Get a volume quote.',
    eyebrow: 'Bulk & Wholesale · MOQ 5,000 Large / 10,000 Small',
    h1: 'Bulk Packaging Boxes, Manufactured from 5,000 Units',
    answer:
      'Visalatchi Manufactures is a bulk packaging box manufacturer in Chennai, Tamil Nadu, producing TV, fan and appliance cartons, export master cartons, corrugated shipping boxes, custom printed mailer boxes and food-safe packaging. The minimum order is 5,000 units for large boxes and 10,000 units for small boxes, with factory-direct volume pricing and pan-India dispatch.',
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
  },
  {
    path: '/corrugated-box-manufacturer-chennai',
    title: 'Corrugated Box Manufacturer in Chennai | Bulk Orders | Visalatchi',
    description:
      '3, 5 and 7-ply corrugated boxes made in Thiruvottiyur, North Chennai. Large cartons from 5,000 units, small boxes from 10,000. Plant visits welcome.',
    eyebrow: 'Thiruvottiyur, North Chennai · Bulk Corrugated Boxes',
    h1: 'Corrugated Box Manufacturer in Chennai for Bulk Orders',
    answer:
      'Visalatchi Manufactures makes 3-ply, 5-ply and 7-ply corrugated boxes and cartons at its plant in Thiruvottiyur, North Chennai, for manufacturers, brands and exporters. Large cartons start at 5,000 units and small boxes at 10,000. Being in North Chennai puts the plant close to Chennai Port, Ennore, Manali, Ambattur and the Red Hills industrial belt.',
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
  },
];

export function getLandingPage(path: string): LandingPage | undefined {
  return LANDING_PAGES.find((p) => p.path === path);
}
