import { PRODUCTS } from '../data/products';
import { FAQS } from '../data/faqs';
import { ProductItem } from '../types';
import { SITE_URL, LOGO_URL, PLANT_ADDRESS, TAMIL_NADU_CITIES, PLANT_COORDS, PLANT_MAPS_SHARE_URL } from './siteConfig';

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: 'Visalatchi Manufactures',
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    priceRange: '₹8 to ₹36',
    description:
      'Chennai-based packaging manufacturer supplying D2C mailer boxes, corrugated shipping cartons, food-safe delivery packs and export cartons, dispatched pan-India from Tamil Nadu.',
    address: {
      '@type': 'PostalAddress',
      ...PLANT_ADDRESS,
    },
    // Exact coordinates from the verified GBP pin, not a geocoded guess.
    geo: {
      '@type': 'GeoCoordinates',
      latitude: PLANT_COORDS.lat,
      longitude: PLANT_COORDS.lng,
    },
    hasMap: PLANT_MAPS_SHARE_URL,
    // Matches the hours published on the Google Business Profile listing.
    // Keep these two in sync if the profile's hours ever change.
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '09:00',
        closes: '15:00',
      },
    ],
    // City-level only, matching GBP's "Service area" list exactly. Google's
    // June 2025 Service Area Business guidance disallows declaring an entire
    // state or country as a service area; SABs must name specific cities,
    // postal codes, or neighborhoods instead. A blanket "Tamil Nadu" or
    // "India" entry here would contradict that guidance even though this
    // isn't a pure SAB (there's a public plant address), so it's dropped for
    // consistency with what GBP itself allows.
    areaServed: TAMIL_NADU_CITIES.map((city) => ({ '@type': 'City', name: city })),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-98405-01323',
        contactType: 'sales',
        name: 'Palaniappan, D2C & Domestic Brand Specialist',
        areaServed: 'IN',
        availableLanguage: ['English', 'Tamil'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-94444-20367',
        contactType: 'sales',
        name: 'Periyanan, Export Logistics & Food Lead',
        areaServed: 'IN',
        availableLanguage: ['English', 'Tamil'],
      },
    ],
  };
}

function parsePrice(startingPrice: string): { price: string; currency: string } {
  const match = startingPrice.match(/[\d,.]+/);
  return { price: match ? match[0].replace(/,/g, '') : '0', currency: 'INR' };
}

export function buildProductSchema(product: ProductItem) {
  const { price, currency } = parsePrice(product.startingPrice);
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    material: product.material,
    image: product.image,
    brand: { '@type': 'Brand', name: 'Visalatchi Manufactures' },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
      eligibleQuantity: { '@type': 'QuantitativeValue', minValue: product.moq, unitText: 'units' },
      seller: { '@type': 'Organization', name: 'Visalatchi Manufactures' },
    },
  };
}

export function buildAllProductSchemas() {
  return PRODUCTS.map((p) => buildProductSchema(p));
}

export function buildFaqPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Home + current page, per route. Takes plain (path, title) pairs rather
 * than importing ROUTES from routes.ts to avoid a circular import (routes.ts
 * already imports this module's build* functions). */
export function buildBreadcrumbSchema(pathname: string, pageTitle: string) {
  const itemListElement = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
  ];
  if (pathname !== '/') {
    itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: pageTitle,
      item: `${SITE_URL}${pathname}`,
    });
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };
}
