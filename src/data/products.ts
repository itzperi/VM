import { ProductItem } from '../types';
import { MOQ_LARGE, MOQ_SMALL } from '../lib/siteConfig';

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-01',
    name: 'Mailer Box',
    category: 'd2c',
    description: 'Crush-tested for courier handling; brandable interior/exterior print keeps unboxing on-brand without a separate insert.',
    moq: MOQ_SMALL,
    startingPrice: 'Volume quote',
    material: 'E-Flute / B-Flute Recycled Kraft Board',
    ecoFriendly: true,
    leadTime: 'Fast dispatch',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    features: ['Custom inside/outside print', 'Locking front tuck tab', 'Bulk runs from 10,000 units', 'FSC certified kraft stock']
  },
  {
    id: 'prod-02',
    name: 'Corrugated Shipping Box',
    category: 'd2c',
    description: '3-ply and 5-ply cartons in small and medium sizes for e-commerce shipping, warehouse storage and B2B dispatch.',
    moq: MOQ_SMALL,
    startingPrice: 'Volume quote',
    material: '3-Ply / 5-Ply Kraft Corrugated',
    ecoFriendly: true,
    leadTime: 'Fast dispatch',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    features: ['High edge-crush test strength', 'Small and medium e-commerce sizes', 'Stacking capacity 200+ kg', '100% Recyclable']
  },
  {
    id: 'prod-03',
    name: 'Food Delivery Box',
    category: 'food',
    description: 'Grease and moisture-resistant boxes built for cloud kitchens, QSR, tiffin services, meal-kit delivery and bakeries.',
    moq: MOQ_SMALL,
    startingPrice: 'Volume quote',
    material: 'Virgin Food-Grade Board + Bio Lining',
    ecoFriendly: true,
    leadTime: 'Fast dispatch',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    features: ['Direct food contact safe', 'Grease barrier coating', 'Heat retentive design', 'Flat-packed delivery']
  },
  {
    id: 'prod-04',
    name: 'Courier & Return Mailers',
    category: 'd2c',
    description: 'Tear-proof tamper-evident courier bags designed for high-volume e-commerce dispatch, clothing, documents and books.',
    moq: MOQ_SMALL,
    startingPrice: 'Volume quote',
    material: 'Co-extruded Heavy Poly / Bio-Polymer',
    ecoFriendly: false,
    leadTime: 'Fast dispatch',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
    features: ['Tamper-evident adhesive tape', 'Puncture resistant film', 'Dual seal option for returns', 'Lightweight for low freight']
  },
  {
    id: 'prod-05',
    name: 'Paper & Padded Mailers',
    category: 'd2c',
    description: 'Cushioned eco-friendly mailers offering padded protection for apparel, books, jewellery, beauty, accessories and small electronics.',
    moq: MOQ_SMALL,
    startingPrice: 'Volume quote',
    material: 'Honeycomb Kraft Paper Cushioning',
    ecoFriendly: true,
    leadTime: 'Fast dispatch',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    features: ['Bubble-free honeycomb interior', '100% Paper curbside recyclable', 'Self-seal strip', 'Premium natural texture']
  },
  {
    id: 'prod-06',
    name: 'Frosted Zipper Garment Bag',
    category: 'd2c',
    description: 'Sleek frosted CPE bags for luxury apparel, inner packaging, linens, and fashion garment presentation.',
    moq: MOQ_SMALL,
    startingPrice: 'Volume quote',
    material: 'Frosted Matte Soft-Touch CPE',
    ecoFriendly: false,
    leadTime: '10 day lead time',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
    features: ['Resealable slider zipper', 'Vent hole for air release', 'Dust & water resistant', 'Custom logo screen printing']
  },
  {
    id: 'prod-07',
    name: 'Custom Printed Paper Carry Bag (Eco)',
    category: 'd2c',
    description: 'Sturdy twisted-handle kraft bags for bakery, cafes, retail, gifting, events, takeaway and D2C stores.',
    moq: MOQ_SMALL,
    startingPrice: 'Volume quote',
    material: 'Virgin Kraft Paper (120-150 GSM)',
    ecoFriendly: true,
    leadTime: 'Fast dispatch',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    features: ['Reinforced paper handles', 'Holds up to 5kg weight', '1-4 Color soy ink printing', 'Biodegradable']
  },
  {
    id: 'prod-08',
    name: 'Bagasse Food Container (Eco)',
    category: 'food',
    description: 'Sugarcane bagasse compostable containers for QSR, cloud kitchens, events, and hot takeaway meals.',
    moq: MOQ_SMALL,
    startingPrice: 'Volume quote',
    material: '100% Sugarcane Bagasse Fiber',
    ecoFriendly: true,
    leadTime: '10 day lead time',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80',
    features: ['100% Home compostable', 'Microwave & freezer safe', 'Oil proof up to 120°C', 'Sturdy hinged or snap lid']
  },
  {
    id: 'prod-09',
    name: 'Paper Bowls & Food Containers (Eco)',
    category: 'food',
    description: 'Food-safe leak-proof paper bowls for curries, biryani, rice, noodles, salads, desserts, and takeaway dispatch.',
    moq: MOQ_SMALL,
    startingPrice: 'Volume quote',
    material: 'Food-Grade Kraft Paper + PLA Bio Coating',
    ecoFriendly: true,
    leadTime: '18 day delivery (India)',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    features: ['Leak-proof rolled rim', 'Tight-fitting PP/PLA lids', 'FSSAI compliant material', 'Stackable design']
  },
  {
    id: 'prod-10',
    name: 'TV & Appliance Packaging Box',
    category: 'appliance',
    description: 'Heavy-duty 5-ply and 7-ply corrugated cartons for TVs, monitors, air coolers, mixers, water heaters and other boxed appliances, built to the product\'s dimensions and weight.',
    moq: MOQ_LARGE,
    startingPrice: 'Volume quote',
    material: '5-Ply / 7-Ply Heavy-Duty Kraft Corrugated',
    ecoFriendly: true,
    leadTime: 'Quoted per order',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    features: ['Sized to your product and its fitments', 'Custom print: logo, model number, handling marks', 'Strength matched to product weight and stacking', 'Bulk runs from 5,000 units'],
  },
  {
    id: 'prod-11',
    name: 'Ceiling Fan Packaging Box',
    category: 'appliance',
    description: 'Corrugated cartons for ceiling, table, pedestal and exhaust fans, sized for the motor, blades and accessories and printed with your brand and model details.',
    moq: MOQ_LARGE,
    startingPrice: 'Volume quote',
    material: '5-Ply Kraft Corrugated',
    ecoFriendly: true,
    leadTime: 'Quoted per order',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    features: ['Sized for motor, blades and accessories', 'Custom print: logo, model number, handling marks', 'Stackable for warehouse and dealer dispatch', 'Bulk runs from 5,000 units'],
  },
  {
    id: 'prod-12',
    name: 'Export Master Carton (5-Ply / 7-Ply)',
    category: 'export',
    description: 'Large master cartons for export and bulk domestic shipping, built to the buyer\'s specification and sized for efficient pallet and container loading.',
    moq: MOQ_LARGE,
    startingPrice: 'Volume quote',
    material: '5-Ply / 7-Ply Kraft Corrugated',
    ecoFriendly: true,
    leadTime: 'Quoted per order',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    features: ['Built to buyer specification', 'CBM-optimised for container loading', 'Shipping marks and labels printed', 'Bulk runs from 5,000 units'],
  }
];

// "Best for" annotations shown in the price-list tables (CatalogView, D2CView,
// FoodView). Kept separate from ProductItem.description because these are
// audience-facing use-case call-outs, not the product description itself.
const PRICE_LIST_BEST_FOR: Record<string, string> = {
  'prod-01': 'D2C shipping, subscription boxes, fashion, food kits, cosmetics',
  'prod-02': 'General e-commerce shipping, bulk dispatch, B2B warehouse',
  'prod-03': 'Cloud kitchens, QSR, tiffin services, meal-kit delivery, bakeries',
  'prod-04': 'E-commerce courier shipping, clothing, documents, books',
  'prod-05': 'Apparel, books, jewellery, beauty, accessories, small electronics',
  'prod-06': 'Fashion, apparel, linens, premium inner packaging',
  'prod-07': 'Bakery, cafes, retail, gifting, events, takeaway, D2C stores',
  'prod-08': 'QSR, cloud kitchens, events, hot takeaway food',
  'prod-09': 'Curries, biryani, rice, noodles, salads, desserts, takeaway',
  'prod-10': 'TV, monitor, air cooler, mixer grinder, water heater and appliance manufacturers',
  'prod-11': 'Ceiling, table, pedestal and exhaust fan manufacturers',
  'prod-12': 'Exporters, container shipments, bulk domestic distribution',
};

export interface PriceListRow {
  name: string;
  bestFor: string;
  moq: string;
  leadTime: string;
  price: string;
}

/** Builds price-list table rows straight from PRODUCTS so the numbers shown
 * on /products, /d2c-packaging and /food-packaging can never drift apart —
 * they previously were three separate hardcoded copies of the same data. */
export function buildPriceListRows(ids?: string[]): PriceListRow[] {
  const list = ids ? ids.map((id) => PRODUCTS.find((p) => p.id === id)).filter((p): p is ProductItem => !!p) : PRODUCTS;
  return list.map((p) => ({
    name: p.name,
    bestFor: PRICE_LIST_BEST_FOR[p.id] ?? p.description,
    moq: `${p.moq.toLocaleString('en-IN')} units`,
    leadTime: p.leadTime,
    price: p.startingPrice.split('/')[0].trim(),
  }));
}

export function bestForById(id: string): string {
  return PRICE_LIST_BEST_FOR[id] ?? '';
}

/** URL slug for a product's dedicated /products/:slug page. Derived from the
 * name rather than stored on ProductItem so there is one place that can
 * never drift from the display name. */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  return PRODUCTS.find((p) => slugify(p.name) === slug);
}
