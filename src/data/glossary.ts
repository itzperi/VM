// Packaging glossary: general, industry-standard definitions only. Nothing
// here states a Visalatchi capability, capacity or certification; those live
// in ownerFacts.ts and are shown only once the owner confirms them.
export interface GlossaryTerm {
  /** Anchor id, used as /packaging-glossary#<id>. */
  id: string;
  term: string;
  /** One-sentence answer, quotable on its own (AI / voice answer). */
  short: string;
  /** Extra detail a buyer needs when specifying a box. */
  detail: string;
  /** Optional internal link for further reading. */
  link?: { to: string; label: string };
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    id: 'ply',
    term: 'Ply (3-ply, 5-ply, 7-ply)',
    short: 'Ply is the number of paper layers in a corrugated board: 3-ply has one fluted layer between two liners, 5-ply has two, and 7-ply has three.',
    detail: 'More plies mean a stiffer, stronger carton that stacks higher and survives longer journeys. 3-ply suits light retail and e-commerce goods, 5-ply suits appliances and heavier shipping cartons, and 7-ply is used for heavy, fragile or export loads.',
    link: { to: '/blog/corrugated-box-ply-thickness-explained', label: '3-ply vs 5-ply vs 7-ply explained' },
  },
  {
    id: 'flute',
    term: 'Flute',
    short: 'A flute is the wave-shaped paper layer inside corrugated board that gives the carton its cushioning and stacking strength.',
    detail: 'Flutes are graded by height. A-flute is the tallest (best cushioning), C-flute is the most common general-purpose profile, B-flute is thinner with good crush resistance and print surface, and E- and F-flute are very thin profiles used for retail and mailer boxes. Multi-wall boards combine profiles, for example BC-flute in 5-ply board.',
  },
  {
    id: 'liner',
    term: 'Liner (kraft liner, test liner)',
    short: 'Liners are the flat paper sheets glued to each side of the flute; they carry the print and much of the carton\'s strength.',
    detail: 'Kraft liners made from virgin fibre are stronger and more moisture resistant; test liners use recycled fibre and cost less. The liner grade is usually stated with its GSM and BF.',
  },
  {
    id: 'fluting-medium',
    term: 'Fluting medium',
    short: 'Fluting medium is the paper that is corrugated into flutes between the liners.',
    detail: 'Its GSM and BF strongly affect edge crush and box compression strength, so it is specified alongside the liners when quoting a carton.',
  },
  {
    id: 'gsm',
    term: 'GSM (grams per square metre)',
    short: 'GSM is the weight of paper per square metre; a higher GSM generally means a thicker, stronger sheet.',
    detail: 'Carton specifications list the GSM of every layer, for example "150 GSM kraft liner". GSM alone does not define strength; the bursting factor (BF) of the paper matters as well.',
  },
  {
    id: 'bf',
    term: 'BF (bursting factor)',
    short: 'BF, or bursting factor, is a measure of a paper\'s burst strength relative to its weight; higher BF paper resists bursting better at the same GSM.',
    detail: 'In India kraft paper is commonly traded by BF grade (for example 16, 18, 20, 22, 24 or 28 BF). Buyers specify BF together with GSM because the two together determine a board\'s bursting strength.',
  },
  {
    id: 'bursting-strength',
    term: 'Bursting strength',
    short: 'Bursting strength is the pressure a board can take before it ruptures, measured on a burst (Mullen) tester and usually stated in kg/cm².',
    detail: 'It indicates how well a carton resists punctures and rough handling. It is one of the common acceptance tests written into carton specifications.',
  },
  {
    id: 'ect',
    term: 'ECT (edge crush test)',
    short: 'ECT measures how much force a small upright strip of corrugated board can take on its edge before it crushes.',
    detail: 'Because cartons carry stacking loads on their vertical walls, ECT is a good predictor of box compression strength and is widely used to specify shipping cartons.',
  },
  {
    id: 'bct',
    term: 'BCT (box compression test)',
    short: 'BCT is the top-to-bottom load a complete, empty box can withstand before it collapses.',
    detail: 'BCT is what decides how high cartons can be stacked in a warehouse or container. It depends on board grade, flute, box dimensions and humidity, so it is checked on the actual box size rather than on board samples alone.',
  },
  {
    id: 'rsc',
    term: 'RSC (regular slotted container)',
    short: 'An RSC is the standard corrugated box style: four flaps on top and four on the bottom, with the outer flaps meeting in the middle.',
    detail: 'It is listed as style 0201 in the FEFCO code and is the most material-efficient box for most shipping cartons, including appliance and export master cartons.',
  },
  {
    id: 'die-cut',
    term: 'Die-cut box',
    short: 'A die-cut box is cut to a custom outline with a cutting die, which allows tuck-in flaps, locking tabs, handles and inserts.',
    detail: 'Mailer boxes, food boxes and fitted inserts are usually die-cut. A die is a one-time tooling item made for each design.',
  },
  {
    id: 'master-carton',
    term: 'Master carton',
    short: 'A master carton is the outer shipping carton that holds several unit boxes or inner packs, usually for export or distribution.',
    detail: 'Master cartons are normally 5-ply or 7-ply and are sized to fit pallets and containers efficiently. They carry shipping marks such as carton number, gross and net weight and destination.',
    link: { to: '/blog/export-master-carton-compliance-checklist', label: 'Export master carton compliance checklist' },
  },
  {
    id: 'cbm',
    term: 'CBM (cubic metre)',
    short: 'CBM is the volume of a shipment in cubic metres, used to work out how many cartons fit in a container or truck.',
    detail: 'Small changes to carton dimensions can change how many cartons fit in a 20 ft or 40 ft container, which is why export cartons are sized with container loading in mind.',
  },
  {
    id: 'flexo-printing',
    term: 'Flexographic (flexo) printing',
    short: 'Flexo printing prints directly onto corrugated board using flexible plates, and is the usual method for printing logos and shipping marks on cartons.',
    detail: 'It is cost-effective at volume for one to four colours. A printing plate is made for each colour of each design.',
  },
  {
    id: 'moq',
    term: 'MOQ (minimum order quantity)',
    short: 'MOQ is the smallest quantity a manufacturer will produce for one box size and print design.',
    detail: 'At Visalatchi Manufactures the MOQ is 5,000 units for large boxes and 10,000 units for small boxes, per size and print design.',
    link: { to: '/blog/how-to-choose-packaging-moq', label: 'Packaging MOQs explained' },
  },
  {
    id: 'pre-production-sample',
    term: 'Pre-production sample',
    short: 'A pre-production sample is a physical box made to the final specification for the buyer to test and approve before bulk production starts.',
    detail: 'It lets the buyer check fit, strength and print before thousands of units are made. Visalatchi Manufactures starts every bulk order with one.',
    link: { to: '/blog/sample-approval-process-explained', label: 'How sample approval works' },
  },
  {
    id: 'bagasse',
    term: 'Bagasse',
    short: 'Bagasse is the fibre left after sugarcane is crushed for juice, moulded into plates, bowls and food containers as an alternative to plastic.',
    detail: 'Bagasse containers are compostable and can hold hot and oily food, which makes them common for food delivery and takeaway packaging.',
    link: { to: '/blog/bagasse-vs-plastic-food-containers', label: 'Bagasse vs plastic food containers' },
  },
];
