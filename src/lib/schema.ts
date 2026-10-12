import { PRODUCTS, slugify } from '../data/products';
import { FAQS, FaqItem } from '../data/faqs';
import { BlogPost, ProductItem } from '../types';
import { SITE_URL, LOGO_URL, OG_IMAGE_URL, SAME_AS, MOQ_LARGE, MOQ_SMALL, PLANT_ADDRESS, TAMIL_NADU_CITIES, PLANT_COORDS, PLANT_MAPS_SHARE_URL } from './siteConfig';

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: 'Visalatchi Manufactures',
    url: SITE_URL,
    logo: LOGO_URL,
    image: [OG_IMAGE_URL, LOGO_URL],
    sameAs: SAME_AS,
    priceRange: '₹₹',
    description:
      'Bulk packaging manufacturer in Chennai, Tamil Nadu supplying corrugated shipping boxes, printed mailer boxes, food-safe delivery packs and export master cartons. Minimum order 5,000 units for large boxes (TV, fan, appliance, export cartons) and 10,000 units for small boxes, dispatched pan-India.',
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
    telephone: '+91-98405-01323',
    knowsAbout: [
      'Bulk corrugated boxes',
      '3-ply and 5-ply corrugated cartons',
      'Custom printed mailer boxes',
      'Food-safe delivery packaging',
      'Bagasse food containers',
      'Export master cartons',
      'TV and appliance packaging boxes',
      'Fan packaging boxes',
    ],
    // The commercial fact bulk buyers and AI engines look for first.
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Large boxes: TV, fan, appliance and export master cartons',
        description: 'Heavy-duty corrugated cartons manufactured from a minimum order of 5,000 units.',
        businessFunction: 'http://purl.org/goodrelations/v1#Sell',
        eligibleCustomerType: 'http://purl.org/goodrelations/v1#Business',
        eligibleQuantity: { '@type': 'QuantitativeValue', minValue: MOQ_LARGE, unitText: 'units' },
      },
      {
        '@type': 'Offer',
        name: 'Small boxes: mailers, small cartons, food packs and bags',
        description: 'Custom packaging manufactured from a minimum order of 10,000 units.',
        businessFunction: 'http://purl.org/goodrelations/v1#Sell',
        eligibleCustomerType: 'http://purl.org/goodrelations/v1#Business',
        eligibleQuantity: { '@type': 'QuantitativeValue', minValue: MOQ_SMALL, unitText: 'units' },
      },
    ],
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

// Pricing is quote-based (volume-dependent), so no fixed price is published.
// The Offer still declares the product's minimum via eligibleQuantity, which
// is the fact bulk buyers and AI answer engines actually look for.
export function buildProductSchema(product: ProductItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: `${product.description} Minimum order ${product.moq.toLocaleString('en-IN')} units.`,
    material: product.material,
    image: product.image,
    url: `${SITE_URL}/products/${slugify(product.name)}`,
    brand: { '@type': 'Brand', name: 'Visalatchi Manufactures' },
    manufacturer: { '@id': `${SITE_URL}/#organization` },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/MadeToOrder',
      businessFunction: 'http://purl.org/goodrelations/v1#Sell',
      eligibleCustomerType: 'http://purl.org/goodrelations/v1#Business',
      eligibleQuantity: { '@type': 'QuantitativeValue', minValue: product.moq, unitText: 'units' },
      seller: { '@id': `${SITE_URL}/#organization` },
    },
  };
}

export function buildAllProductSchemas() {
  return PRODUCTS.map((p) => buildProductSchema(p));
}

export function buildFaqPageSchema(faqs: FaqItem[] = FAQS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

// Real domain specialists per category, matching the roles already
// established in the Organization schema's contactPoint above, not
// fabricated bylines. 'general' posts aren't specific to either
// specialist's stated area, so they're attributed to the org itself.
const BLOG_AUTHOR_BY_CATEGORY: Record<BlogPost['category'], string> = {
  d2c: 'Palaniappan',
  food: 'Periyanan',
  export: 'Periyanan',
  general: 'Visalatchi Manufactures',
};

export function buildArticleSchema(post: BlogPost, canonicalUrl: string) {
  const authorName = BLOG_AUTHOR_BY_CATEGORY[post.category];
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishDate,
    author:
      authorName === 'Visalatchi Manufactures'
        ? { '@type': 'Organization', name: authorName }
        : { '@type': 'Person', name: authorName, worksFor: { '@type': 'Organization', name: 'Visalatchi Manufactures' } },
    publisher: { '@type': 'Organization', name: 'Visalatchi Manufactures', logo: { '@type': 'ImageObject', url: LOGO_URL } },
    mainEntityOfPage: canonicalUrl,
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

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Visalatchi Manufactures',
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
  };
}
