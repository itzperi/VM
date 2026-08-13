import { buildOrganizationSchema, buildAllProductSchemas, buildFaqPageSchema, buildBreadcrumbSchema, buildProductSchema, buildArticleSchema } from './lib/schema';
import { SITE_URL, LOGO_URL } from './lib/siteConfig';
import { PRODUCTS, slugify } from './data/products';
import { BLOG_POSTS, getBlogPostBySlug } from './data/blogPosts';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  buildJsonLd?: () => object[];
}

export const ROUTES: RouteMeta[] = [
  {
    path: '/',
    title: 'Packaging Manufacturer in Chennai, Tamil Nadu | Visalatchi Manufactures',
    description:
      'Chennai-based packaging manufacturer for D2C, food & FMCG and export brands. Low MOQs from 50 units, sample-first, pan-India dispatch across Tamil Nadu and India.',
  },
  {
    path: '/d2c-packaging',
    title: 'D2C & E-Commerce Packaging Boxes | Chennai Manufacturer',
    description:
      'Custom mailer boxes, corrugated shipping cartons and courier mailers for D2C brands. Low MOQs from 50 units, made in Chennai, dispatched pan-India.',
  },
  {
    path: '/food-packaging',
    title: 'Food-Safe Packaging & FMCG Boxes | Chennai, Tamil Nadu',
    description:
      'FSSAI-ready food delivery boxes, bagasse containers and paper bowls for cloud kitchens and FMCG brands across Chennai and Tamil Nadu.',
  },
  {
    path: '/export-packaging',
    title: 'Export Packaging & Master Cartons | Visalatchi Manufactures',
    description:
      "Export-compliant master cartons and CBM-optimised packaging from our Chennai plant, built to your buyer's specification and shipping timeline.",
  },
  {
    path: '/products',
    title: 'Packaging Products & Pricing | Visalatchi Manufactures, Chennai',
    description:
      'Full price list for mailer boxes, corrugated cartons, food delivery packs and eco packaging. Transparent ex-GST pricing from our Chennai factory.',
    buildJsonLd: () => buildAllProductSchemas(),
  },
  {
    path: '/process',
    title: 'Our Packaging Process | Visalatchi Manufactures',
    description:
      'How Visalatchi takes your packaging order from sample approval to pan-India dispatch — choose, sample, produce, ship.',
  },
  {
    path: '/about',
    title: 'About Visalatchi Manufactures | Chennai Packaging Factory',
    description:
      'Visalatchi Manufactures is a Chennai, Tamil Nadu based packaging manufacturer built for low MOQs, sample-first orders and transparent pricing.',
  },
  {
    path: '/faq',
    title: 'Packaging FAQs — MOQs, Pricing & Delivery | Visalatchi',
    description:
      'Answers on minimum order quantities, sample approval, pricing and delivery timelines for packaging ordered from our Chennai factory.',
    buildJsonLd: () => [buildFaqPageSchema()],
  },
  {
    path: '/contact',
    title: 'Contact & Get a Quote | Visalatchi Manufactures, Chennai',
    description:
      'Request a packaging quote or sample from our Chennai, Tamil Nadu factory. Speak directly with our D2C, food and export specialists.',
  },
  {
    path: '/blog',
    title: 'Packaging Guides & Resources | Visalatchi Manufactures Blog',
    description:
      'Practical guides on packaging MOQs, corrugated board specs, FSSAI compliance and export carton requirements, from our Chennai packaging factory.',
  },
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
  const title = `${product.name} | ${product.startingPrice}, MOQ ${product.moq} | Visalatchi Manufactures`;
  const description = `${product.description} Starting at ${product.startingPrice}, minimum order ${product.moq} units. Made in Chennai, dispatched pan India.`;
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
  return { title, description: post.description, canonicalUrl, ogImage: LOGO_URL, noindex: false, schemas };
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
      ogImage: LOGO_URL,
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
  return { title: route.title, description: route.description, canonicalUrl, ogImage: LOGO_URL, noindex: false, schemas };
}
