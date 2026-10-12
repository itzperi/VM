import { FaqItem } from './faqs';
import { TEAM } from './team';
import { MOQ_RULE, PLANT_ADDRESS_FULL } from '../lib/siteConfig';

// Short, answer-first Q&A blocks for pages that otherwise have no question
// content. Each answer is written to stand alone in 40-60 words (featured
// snippet / AI Overview length) and uses only facts already published
// elsewhere on the site: never invent capacity, lead times or certifications
// here; those wait for OWNER_FACTS. Rendered by <PageAnswers /> and emitted as
// FAQPage JSON-LD by routes.ts, so the visible text and the schema match.

const HOURS = 'Monday to Saturday, 9 am to 6 pm, and Sunday, 9 am to 3 pm';

const STATIC_ANSWERS: Record<string, { heading: string; items: FaqItem[] }> = {
  '/': {
    heading: 'Bulk packaging at a glance',
    items: [
      {
        q: 'What does Visalatchi Manufactures make?',
        a: 'Visalatchi Manufactures is a bulk packaging manufacturer in Thiruvottiyur, Chennai, Tamil Nadu. It makes 5-ply and 7-ply cartons for TVs, fans and appliances, export master cartons, corrugated shipping boxes, custom printed mailer boxes, food delivery boxes, bagasse containers and paper carry bags, dispatched across India.',
      },
      {
        q: 'What is the minimum order quantity?',
        a: `${MOQ_RULE} Each size or print design is its own production run, so every SKU must meet its own minimum. Larger runs of 25,000 or 50,000+ units get lower unit rates.`,
      },
      {
        q: 'How do I get a bulk packaging quote?',
        a: 'Share your box size, product weight, quantity per size and target start date through the quote form, or call Palaniappan on 98405 01323 or Periyanan on 94444 20367. You receive an itemised ex-GST quotation, then approve a physical sample before bulk production starts.',
      },
    ],
  },
  '/about': {
    heading: 'About Visalatchi in brief',
    items: [
      {
        q: 'Who is Visalatchi Manufactures?',
        a: 'Visalatchi Manufactures is a corrugated packaging factory in Thiruvottiyur, North Chennai, making bulk runs for appliance makers, D2C brands, food and FMCG companies and exporters. Large boxes start at 5,000 units and small boxes at 10,000, and every order is approved on a physical sample first.',
      },
      {
        q: 'Where is the Visalatchi plant?',
        a: `The plant is at ${PLANT_ADDRESS_FULL}. It is open ${HOURS}. Bulk orders are dispatched from Thiruvottiyur to factories, warehouses, fulfilment centres and ports across India.`,
      },
      {
        q: 'Who should I speak to about my order?',
        a: 'Palaniappan (98405 01323) handles D2C mailer boxes, printed cartons and domestic brand orders. Periyanan (94444 20367) handles export master cartons, container loading and food-grade packaging. Both speak English and Tamil and can be reached by phone or WhatsApp.',
      },
    ],
  },
  '/process': {
    heading: 'Questions about the order process',
    items: [
      {
        q: 'How does a bulk packaging order work?',
        a: 'A Visalatchi order runs in four steps. You choose the format and size, receive an itemised ex-GST quote, approve a physical pre-production sample, and then the bulk run is produced with checks at raw material, production and pre-dispatch stages before it ships to your address anywhere in India.',
      },
      {
        q: 'Do I approve a sample before bulk production?',
        a: 'Yes. Every bulk order goes through physical sample approval before the run begins, so you can check fit, strength, closure and print on the real box. Bulk production starts only after you confirm the sample, so changes are made before thousands of units are produced.',
      },
      {
        q: 'How long does a bulk order take?',
        a: 'Lead time depends on the product, board and print, and is counted from sample approval. As a guide, bagasse food containers and frosted zipper garment bags run on a 10-day lead time and paper bowls on 18 days within India. Your quotation confirms the exact dispatch date.',
      },
    ],
  },
  '/contact': {
    heading: 'Before you request a quote',
    items: [
      {
        q: 'What details do I need for a packaging quote?',
        a: 'Send the box dimensions (length, width and height), the product weight, the quantity for each size, any print or branding, your delivery city and your target start date. If you are unsure of the right ply or board, share the product itself and we will recommend a specification.',
      },
      {
        q: 'What are your working hours?',
        a: `The Visalatchi plant in Thiruvottiyur, Chennai is open ${HOURS}. You can send a quote request through the form or WhatsApp at any time, with your box size, product weight and quantity, and the team will reply during working hours.`,
      },
      {
        q: 'Which number should I call?',
        a: 'Call or WhatsApp Palaniappan on 98405 01323 for D2C, mailer box and domestic brand orders, or Periyanan on 94444 20367 for export master cartons, container loading and food-grade packaging. Both can take a quote request in English or Tamil.',
      },
    ],
  },
  '/export-packaging': {
    heading: 'Export carton questions',
    items: [
      {
        q: 'What is an export master carton?',
        a: 'An export master carton is the outer corrugated box that groups inner packs for international shipping. Visalatchi makes them in 5-ply and 7-ply board, built to the buyer\'s size, strength and labelling requirements and sized to make the best use of container space (CBM).',
      },
      {
        q: 'What is the minimum order for export cartons?',
        a: 'Export master cartons are a large-box format with a minimum order of 5,000 units per size or print design. Larger runs of 10,000, 25,000 and 50,000+ units are welcome and get lower unit rates, quoted itemised and ex-GST.',
      },
      {
        q: 'Can you match my overseas buyer\'s carton specification?',
        a: 'Share your destination market\'s requirements, the buyer\'s carton specification and your order volume, and Visalatchi will confirm what can be met before you commit. Every run starts with a physical sample you can approve against the buyer\'s checklist.',
      },
    ],
  },
  '/d2c-packaging': {
    heading: 'D2C packaging questions',
    items: [
      {
        q: 'What is the minimum order for custom mailer boxes?',
        a: 'Custom printed mailer boxes, small shipping cartons and courier mailers are small-box formats with a minimum order of 10,000 units per size or print design. That run length spreads die, plate and setup costs thinly enough to reach a low unit price for high-volume D2C brands.',
      },
      {
        q: 'Should I choose E-flute or B-flute for my mailer box?',
        a: 'E-flute suits lighter products and gives a smoother surface for print, while B-flute is thicker and better for heavier contents. If you are unsure, share your product weight and we will recommend a board in your quotation, then confirm it on a physical sample.',
      },
      {
        q: 'Can mailer boxes be printed inside and outside?',
        a: 'Yes. Mailer boxes can carry your logo and brand colours outside, and a welcome message, care instructions or social handles inside. Plain kraft is also available. Each print design counts as its own run of 10,000 units, and you approve the printed sample before bulk production.',
      },
    ],
  },
};

/** Q&A for a path, or undefined when the page has none. Team pages are built
 * from data/team.ts so a new team member gets answers automatically. */
export function getPageAnswers(path: string): { heading: string; items: FaqItem[] } | undefined {
  if (STATIC_ANSWERS[path]) return STATIC_ANSWERS[path];
  const member = path.startsWith('/team/') ? TEAM.find((m) => `/team/${m.slug}` === path) : undefined;
  if (!member) return undefined;
  return {
    heading: `Working with ${member.name}`,
    items: [
      {
        q: `What does ${member.name} handle at Visalatchi?`,
        a: `${member.name} is the ${member.jobTitle} at Visalatchi Manufactures in Thiruvottiyur, Chennai. ${member.focus}`,
      },
      {
        q: `How do I contact ${member.name}?`,
        a: `Call or WhatsApp ${member.name} on ${member.phone}, ${HOURS}. Conversations can be in ${member.languages.join(' or ')}. Share your box size, product weight and quantity for a bulk quote: 5,000 units minimum for large boxes, 10,000 for small boxes.`,
      },
    ],
  };
}
