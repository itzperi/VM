export interface FaqItem {
  q: string;
  a: string;
}

// The first answer sentence of every FAQ is written to stand alone (40-60
// words max) so it can be lifted verbatim into a featured snippet, People
// Also Ask box or AI Overview citation.
export const FAQS: FaqItem[] = [
  {
    q: 'What is the minimum order quantity (MOQ) at Visalatchi Manufactures?',
    a: 'The minimum order is 5,000 units for large boxes, such as TV, fan, appliance and export master cartons, and 10,000 units for small boxes, including mailer boxes, small e-commerce cartons, food delivery boxes, courier mailers and paper bags. Visalatchi is a bulk packaging manufacturer in Chennai, Tamil Nadu, and does not run small-batch orders.',
  },
  {
    q: 'Why do large boxes have a lower MOQ than small boxes?',
    a: 'A large appliance carton uses several times more board than a small mailer, so 5,000 large boxes is already a full, efficient production run. Small boxes need around 10,000 units to spread setup costs such as dies, printing plates and machine changeover thinly enough to reach a genuinely low unit price.',
  },
  {
    q: 'Do you make TV boxes and fan boxes in bulk?',
    a: 'Yes. Visalatchi makes heavy-duty 5-ply and 7-ply corrugated cartons for TVs, monitors, ceiling and table fans, air coolers, mixer grinders and other appliances, built to the product\'s dimensions and weight, from a minimum order of 5,000 units per size.',
  },
  {
    q: 'Can I order more than the minimum, or split an order across sizes?',
    a: 'Yes. Larger orders of 10,000, 25,000 and 50,000+ units are welcome and get lower unit rates. Each size or print design is its own production run, so every SKU must meet its minimum: 5,000 for a large box, 10,000 for a small box.',
  },
  {
    q: 'How much does a bulk corrugated box cost per unit?',
    a: 'Bulk corrugated box pricing depends on box size, ply (3, 5 or 7), paper grade, print colours and total quantity. Visalatchi quotes every order individually, ex-GST. Share your dimensions, product weight and quantity for a firm quotation.',
  },
  {
    q: 'Can I get a packaging sample before placing a bulk order?',
    a: 'Yes. Every bulk order goes through a physical pre-production sample approval before the run begins, so you confirm size, strength, print and material before thousands of units are produced.',
  },
  {
    q: 'What packaging is best for food delivery and cloud kitchen chains?',
    a: 'Food delivery boxes and bagasse food containers use grease- and moisture-resistant materials suited to hot food, curries and cloud-kitchen dispatch. Both are small-box formats produced in bulk runs from 10,000 units, which suits multi-outlet chains and FMCG brands.',
  },
  {
    q: 'Do you offer eco-friendly or recyclable packaging in bulk?',
    a: 'Yes. The eco range includes custom printed paper carry bags, bagasse food containers, and paper bowls and food containers, all recyclable or compostable, available from a 10,000-unit minimum order. Corrugated cartons are also fully recyclable.',
  },
  {
    q: 'How do you handle festival-season and peak volume?',
    a: 'Bulk customers can plan production ahead of Diwali, Pongal, summer appliance season and sale events, and set up repeat-order schedules so packaging arrives before demand spikes rather than during them.',
  },
  {
    q: 'Is Visalatchi based in Chennai only, or does it ship across India?',
    a: 'Visalatchi manufactures in Thiruvottiyur, Chennai, Tamil Nadu and ships bulk orders pan-India, matching dispatch to your factory, warehouse, fulfillment centre or port and your delivery timeline.',
  },
  {
    q: 'Can bulk packaging be printed with my brand design?',
    a: 'Yes. Appliance cartons, corrugated boxes, mailer boxes and paper carry bags can be custom printed with your logo, model details and handling marks. Each print design is its own run: 5,000 units for large boxes, 10,000 for small boxes.',
  },
  {
    q: 'How does pricing work, and are there hidden charges?',
    a: 'Pricing is itemised per unit with no hidden conversion or plate charges. Every quotation is ex-GST and based on your size, finish, print and total quantity, with lower unit rates at higher volumes.',
  },
  {
    q: 'What packaging is suitable for exporters shipping internationally?',
    a: 'Export master cartons (5-ply or 7-ply) are built to each buyer\'s compliance and labelling requirement and sized for container loading, from 5,000 units. Share your destination market\'s requirements and order volume and Visalatchi will confirm what can be met before you commit.',
  },
  {
    q: 'What is the lead time for a bulk order?',
    a: 'Lead time depends on the product, board and print. As a guide, bagasse food containers and frosted zipper garment bags run on a 10-day lead time and paper bowls on an 18-day delivery timeline within India, counted from sample approval. Your quotation confirms the exact date.',
  },
  {
    q: 'Do you provide compliance documentation for food-grade packaging?',
    a: 'Relevant specification and compliance documentation is available on request. Share your retail or regulatory requirement and Visalatchi will confirm what can be provided.',
  },
  {
    q: 'I need fewer than the minimum. Can you help?',
    a: 'Visalatchi only takes bulk orders: at least 5,000 units for large boxes or 10,000 units for small boxes, so trial quantities are not a fit. If you expect to reach those volumes within your next order cycle, get in touch and we can plan your first bulk run.',
  },
  {
    q: 'How do I get a firm bulk price quote?',
    a: 'Share your box size, product weight, order quantity and target start date through the contact form, or call Palaniappan (98405 01323) or Periyanan (94444 20367). A firm quotation follows based on your specifics.',
  },
];
