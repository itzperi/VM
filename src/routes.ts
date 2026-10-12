import { buildOrganizationSchema, buildAllProductSchemas, buildFaqPageSchema, buildBreadcrumbSchema, buildProductSchema, buildArticleSchema, buildWebSiteSchema } from './lib/schema';
import { SITE_URL, OG_IMAGE_URL } from './lib/siteConfig';
import { PRODUCTS, slugify } from './data/products';
import { BLOG_POSTS, getBlogPostBySlug } from './data/blogPosts';
import { LANDING_PAGES } from './data/landingPages';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  buildJsonLd?: () => object[];
}

export const ROUTES: RouteMeta[] = [
  {
    path: '/',
    title: 'Bulk Packaging Box Manufacturer Chennai | TV, Fan & Mailer Boxes',
    description:
      'Bulk TV, fan and appliance cartons, export master cartons, mailer and food boxes from a Chennai factory. MOQ 5,000 large / 10,000 small boxes. Get a volume quote.',
    buildJsonLd: () => [buildWebSiteSchema()],
  },
  {
    path: '/d2c-packaging',
    title: 'Bulk E-Commerce Mailer & Shipping Boxes | MOQ 10,000 | Chennai',
    description:
      'Custom printed mailer boxes, corrugated shipping cartons and courier mailers for D2C brands shipping at volume. Bulk runs from 10,000 units, made in Chennai.',
  },
  {
    path: '/food-packaging',
    title: 'Bulk Food Packaging & FMCG Boxes | MOQ 10,000 | Chennai',
    description:
      'Food-safe delivery boxes, bagasse containers and paper bowls in bulk for cloud-kitchen chains and FMCG brands. Minimum order 10,000 units, pan-India dispatch.',
  },
  {
    path: '/export-packaging',
    title: 'Export Master Cartons in Bulk | MOQ 5,000 | Visalatchi Chennai',
    description:
      "Export master cartons and CBM-optimised packaging from our Chennai plant, built to your buyer's specification. Bulk orders from 5,000 units.",
  },
  {
    path: '/products',
    title: 'Bulk Packaging Products & MOQ | Visalatchi Manufactures, Chennai',
    description:
      'TV, fan and appliance cartons and export master cartons from 5,000 units; mailers, small cartons, food packs and bags from 10,000. Itemised ex-GST quotes from Chennai.',
    buildJsonLd: () => buildAllProductSchemas(),
  },
  {
    path: '/process',
    title: 'Our Packaging Process | Visalatchi Manufactures',
    description:
      'How Visalatchi takes a bulk packaging order (5,000+ large or 10,000+ small boxes) from sample approval to production and pan-India dispatch.',
  },
  {
    path: '/about',
    title: 'About Visalatchi Manufactures | Chennai Packaging Factory',
    description:
      'Visalatchi Manufactures is a bulk packaging manufacturer in Thiruvottiyur, Chennai, running large boxes from 5,000 units and small boxes from 10,000, sample-first.',
  },
  {
    path: '/faq',
    title: 'Packaging MOQ FAQs: 5,000 Large, 10,000 Small Boxes | Visalatchi',
    description:
      'Why our MOQ is 5,000 for large boxes and 10,000 for small boxes, how bulk pricing works, sample approval and lead times for packaging ordered from our Chennai factory.',
    buildJsonLd: () => [buildFaqPageSchema()],
  },
  {
    path: '/contact',
    title: 'Get a Bulk Packaging Quote | Visalatchi Manufactures, Chennai',
    description:
      'Request a volume quote for 5,000+ large or 10,000+ small boxes from our Chennai factory. Speak directly with our D2C, food and export specialists.',
  },
  {
    path: '/blog',
    title: 'Packaging Guides & Resources | Visalatchi Manufactures Blog',
    description:
      'Guides on bulk packaging MOQs, corrugated board specs, FSSAI compliance and export carton requirements, from our Chennai packaging factory.',
  },
  // Bulk-buyer landing pages, each with its own on-page FAQ mirrored as
  // FAQPage JSON-LD.
  ...LANDING_PAGES.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    buildJsonLd: () => [buildFaqPageSchema(page.faqs)],
  })),
];

export interface HeadData {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
  noindex: boolean;
  schemas: object[];
}

// One dedicated, crawlable page per real product (granular service pages),
// each with its own Product schema and breadcrumb back to /products.
export const PRODUCT_ROUTE_PATHS: string[] = PRODUCTS.map((p) => `/products/${slugify(p.name)}`);

function computeProductHeadData(slug: string): HeadData | null {
  const product = PRODUCTS.find((p) => slugify(p.name) === slug);
  if (!product) return null;

  const path = `/products/${slug}`;
  const canonicalUrl = `${SITE_URL}${path}`;
  const title = `Bulk ${product.name} | MOQ ${product.moq.toLocaleString('en-IN')} Units | Visalatchi Chennai`;
  const description = `${product.description} Minimum order ${product.moq.toLocaleString('en-IN')} units, volume pricing on quotation. Made in Chennai, dispatched pan-India.`;
  const schemas = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema(path, product.name),
    buildProductSchema(product),
  ];
  return { title, description, canonicalUrl, ogImage: product.image, noindex: false, schemas };
}

// One dedicated page per blog post, each with its own Article schema.
export const BLOG_ROUTE_PATHS: string[] = BLOG_POSTS.map((p) => `/blog/${p.slug}`);

function computeBlogHeadData(slug: string): HeadData | null {
  const post = getBlogPostBySlug(slug);
  if (!post) return null;

  const path = `/blog/${slug}`;
  const canonicalUrl = `${SITE_URL}${path}`;
  const title = `${post.title} | Visalatchi Manufactures`;
  const schemas = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema(path, post.title),
    buildArticleSchema(post, canonicalUrl),
  ];
  return { title, description: post.description, canonicalUrl, ogImage: OG_IMAGE_URL, noindex: false, schemas };
}

/** Single source of truth for per-route <head> content, consumed by both the
 * client-side Seo component and the build-time prerender script — this is
 * what keeps the hydrated page and the raw HTML crawlers see in sync. */
export function computeHeadData(pathname: string): HeadData {
  if (pathname.startsWith('/products/')) {
    const productHead = computeProductHeadData(pathname.slice('/products/'.length));
    if (productHead) return productHead;
  }

  if (pathname.startsWith('/blog/')) {
    const blogHead = computeBlogHeadData(pathname.slice('/blog/'.length));
    if (blogHead) return blogHead;
  }

  const route = ROUTES.find((r) => r.path === pathname);
  if (!route) {
    return {
      title: 'Page Not Found | Visalatchi Manufactures',
      description: '',
      canonicalUrl: '',
      ogImage: OG_IMAGE_URL,
      noindex: true,
      schemas: [],
    };
  }
  const canonicalUrl = `${SITE_URL}${route.path === '/' ? '' : route.path}`;
  const shortTitle = route.title.split('|')[0].trim();
  const schemas = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema(route.path, shortTitle),
    ...(route.buildJsonLd ? route.buildJsonLd() : []),
  ];
  return { title: route.title, description: route.description, canonicalUrl, ogImage: OG_IMAGE_URL, noindex: false, schemas };
}
