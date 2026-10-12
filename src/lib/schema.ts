import { PRODUCTS, slugify } from '../data/products';
import { FAQS, FaqItem } from '../data/faqs';
import { OWNER_FACTS } from '../data/ownerFacts';
import { TEAM, TeamMember, authorForCategory } from '../data/team';
import { BlogPost, ProductItem } from '../types';
import type { Crumb } from './breadcrumbs';
import { SITE_URL, LOGO_URL, OG_IMAGE_URL, SAME_AS, MOQ_LARGE, MOQ_SMALL, PLANT_ADDRESS, TAMIL_NADU_CITIES, PLANT_COORDS, PLANT_MAPS_SHARE_URL } from './siteConfig';

const ORG_ID = `${SITE_URL}/#organization`;
const ORG_NAME = 'Visalatchi Manufactures';

/** Drops undefined/empty-string/empty-array fields so owner TODOs never
 * appear in structured data as blank values. */
function compact<T extends Record<string, unknown>>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined && v !== '' && !(Array.isArray(v) && v.length === 0)),
  ) as T;
}

export function personId(member: TeamMember): string {
  return `${SITE_URL}/team/${member.slug}#person`;
}

export function buildPersonSchema(member: TeamMember, withContext = false) {
  return compact({
    ...(withContext ? { '@context': 'https://schema.org' } : {}),
    '@type': 'Person',
    '@id': personId(member),
    name: member.name,
    jobTitle: member.jobTitle,
    telephone: member.phoneE164,
    knowsLanguage: member.languages,
    url: `${SITE_URL}/team/${member.slug}`,
    worksFor: { '@id': ORG_ID },
    sameAs: member.linkedIn ? [member.linkedIn] : undefined,
  });
}

export function buildOrganizationSchema() {
  const email = OWNER_FACTS.email || undefined;
  return compact({
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': ORG_ID,
    name: ORG_NAME,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: LOGO_URL, contentUrl: LOGO_URL, width: 512, height: 512, caption: 'Visalatchi Manufactures logo' },
    image: [OG_IMAGE_URL, LOGO_URL],
    sameAs: SAME_AS,
    email,
    foundingDate: OWNER_FACTS.foundingYear || undefined,
    numberOfEmployees: OWNER_FACTS.numberOfEmployees
      ? { '@type': 'QuantitativeValue', value: OWNER_FACTS.numberOfEmployees }
      : undefined,
    hasCredential: OWNER_FACTS.certifications.length
      ? OWNER_FACTS.certifications.map((c) => compact({
          '@type': 'EducationalOccupationalCredential',
          name: c.name,
          credentialCategory: 'certification',
          recognizedBy: c.issuer ? { '@type': 'Organization', name: c.issuer } : undefined,
          url: c.url,
        }))
      : undefined,
    priceRange: '₹₹',
    description:
      'Bulk packaging manufacturer in Chennai, Tamil Nadu supplying TV, fan and appliance cartons, export master cartons, corrugated shipping boxes, printed mailer boxes and food-safe delivery packs. Minimum order 5,000 units for large boxes and 10,000 units for small boxes, dispatched pan-India.',
    address: { '@type': 'PostalAddress', ...PLANT_ADDRESS },
    // Exact coordinates from the verified GBP pin, not a geocoded guess.
    geo: { '@type': 'GeoCoordinates', latitude: PLANT_COORDS.lat, longitude: PLANT_COORDS.lng },
    hasMap: PLANT_MAPS_SHARE_URL,
    location: {
      '@type': 'Place',
      name: 'Visalatchi Manufactures plant, Thiruvottiyur',
      address: { '@type': 'PostalAddress', ...PLANT_ADDRESS },
      geo: { '@type': 'GeoCoordinates', latitude: PLANT_COORDS.lat, longitude: PLANT_COORDS.lng },
      hasMap: PLANT_MAPS_SHARE_URL,
    },
    // Matches the hours published on the Google Business Profile listing.
    // Keep these two in sync if the profile's hours ever change.
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '09:00', closes: '15:00' },
    ],
    // City-level only (Google's service-area guidance disallows whole
    // states/countries). See TAMIL_NADU_CITIES in siteConfig for provenance.
    areaServed: TAMIL_NADU_CITIES.map((city) => ({ '@type': 'City', name: city })),
    telephone: '+91-98405-01323',
    knowsAbout: [
      'Bulk corrugated boxes',
      '3-ply, 5-ply and 7-ply corrugated cartons',
      'TV and appliance packaging boxes',
      'Fan packaging boxes',
      'Export master cartons',
      'Custom printed mailer boxes',
      'Food-safe delivery packaging',
      'Bagasse food containers',
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
    employee: TEAM.map((m) => buildPersonSchema(m)),
    contactPoint: TEAM.map((m) => compact({
      '@type': 'ContactPoint',
      telephone: m.phoneE164,
      email,
      contactType: 'sales',
      name: `${m.name}, ${m.jobTitle}`,
      areaServed: 'IN',
      availableLanguage: m.languages,
    })),
  });
}

// Pricing is quote-based (volume-dependent), so no fixed price is published.
// The Offer still declares the product's minimum via eligibleQuantity, which
// is the fact bulk buyers and AI answer engines actually look for.
export function buildProductSchema(product: ProductItem) {
  const url = `${SITE_URL}/products/${slugify(product.name)}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: `${product.description} Minimum order ${product.moq.toLocaleString('en-IN')} units.`,
    material: product.material,
    image: {
      '@type': 'ImageObject',
      contentUrl: product.image,
      url: product.image,
      caption: `${product.name} (${product.material})`,
    },
    url,
    brand: { '@type': 'Brand', name: ORG_NAME },
    manufacturer: { '@id': ORG_ID },
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: 'INR',
      availability: 'https://schema.org/MadeToOrder',
      businessFunction: 'http://purl.org/goodrelations/v1#Sell',
      eligibleCustomerType: 'http://purl.org/goodrelations/v1#Business',
      eligibleQuantity: { '@type': 'QuantitativeValue', minValue: product.moq, unitText: 'units' },
      seller: { '@id': ORG_ID },
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

// Bylines: the named specialist for the post's category (see data/team.ts);
// 'general' posts are attributed to the organisation itself.
export function buildArticleSchema(post: BlogPost, canonicalUrl: string) {
  const author = authorForCategory(post.category);
  return compact({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishDate,
    dateModified: post.updatedDate || post.publishDate,
    author: author
      ? { '@type': 'Person', '@id': personId(author), name: author.name, url: `${SITE_URL}/team/${author.slug}`, jobTitle: author.jobTitle }
      : { '@type': 'Organization', '@id': ORG_ID, name: ORG_NAME },
    publisher: { '@type': 'Organization', '@id': ORG_ID, name: ORG_NAME, logo: { '@type': 'ImageObject', url: LOGO_URL } },
    image: OG_IMAGE_URL,
    mainEntityOfPage: canonicalUrl,
    inLanguage: 'en-IN',
    citation: post.sources?.length ? post.sources.map((s) => ({ '@type': 'CreativeWork', name: s.title, url: s.url })) : undefined,
  });
}

/** BreadcrumbList from the shared trail (lib/breadcrumbs.ts), so the JSON-LD
 * always matches the visible breadcrumb on the page. */
export function buildBreadcrumbSchema(trail: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === '/' ? '' : c.path}`,
    })),
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: ORG_NAME,
    url: SITE_URL,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-IN',
  };
}

/** WebPage with a SpeakableSpecification pointing at the answer-first
 * paragraph(s) marked with the .speakable class. */
export function buildSpeakableWebPageSchema(canonicalUrl: string, name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': ORG_ID },
    inLanguage: 'en-IN',
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.speakable'] },
  };
}

export function buildProfilePageSchema(member: TeamMember, canonicalUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: canonicalUrl,
    mainEntity: buildPersonSchema(member),
  };
}
