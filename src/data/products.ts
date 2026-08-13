import { ProductItem } from '../types';

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-01',
    name: 'Mailer Box',
    category: 'd2c',
    description: 'Crush-tested for courier handling; brandable interior/exterior print keeps unboxing on-brand without a separate insert.',
    moq: 50,
    startingPrice: '₹36 / unit',
    material: 'E-Flute / B-Flute Recycled Kraft Board',
    ecoFriendly: true,
    leadTime: 'Fast dispatch',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    features: ['Custom inside/outside print', 'Locking front tuck tab', 'Low MOQ starting at 50', 'FSC certified kraft stock']
  },
  {
    id: 'prod-02',
    name: 'Corrugated Shipping Box',
    category: 'd2c',
    description: 'Heavy-duty 3-ply and 5-ply cartons for general e-commerce shipping, bulk warehouse storage and B2B dispatch.',
    moq: 500,
    startingPrice: '₹32 / unit',
    material: '3-Ply / 5-Ply Kraft Corrugated',
    ecoFriendly: true,
    leadTime: 'Fast dispatch',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    features: ['High edge-crush test strength', 'Ideal for master cartons', 'Stacking capacity 200+ kg', '100% Recyclable']
  },
  {
    id: 'prod-03',
    name: 'Food Delivery Box',
    category: 'food',
    description: 'Grease and moisture-resistant boxes built for cloud kitchens, QSR, tiffin services, meal-kit delivery and bakeries.',
    moq: 200,
    startingPrice: '₹32 / unit',
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
    moq: 1000,
    startingPrice: '₹10 / unit',
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
    moq: 100,
    startingPrice: '₹22 / unit',
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
    moq: 100,
    startingPrice: '₹20 / unit',
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
    moq: 50,
    startingPrice: '₹22 / unit',
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
    moq: 100,
    startingPrice: '₹21 / unit',
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
    moq: 300,
    startingPrice: '₹8 / unit',
    material: 'Food-Grade Kraft Paper + PLA Bio Coating',
    ecoFriendly: true,
    leadTime: '18 day delivery (India)',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    features: ['Leak-proof rolled rim', 'Tight-fitting PP/PLA lids', 'FSSAI compliant material', 'Stackable design']
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
