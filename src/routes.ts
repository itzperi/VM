import {
  buildOrganizationSchema, buildAllProductSchemas, buildFaqPageSchema, buildBreadcrumbSchema, buildProductSchema,
  buildArticleSchema, buildWebSiteSchema, buildSpeakableWebPageSchema, buildProfilePageSchema,
} from './lib/schema';
import { SITE_URL, OG_IMAGE_URL } from './lib/siteConfig';
import { getBreadcrumbTrail } from './lib/breadcrumbs';
import { PRODUCTS, slugify } from './data/products';
import { getProductDetail } from './data/productDetails';
import { BLOG_POSTS, getBlogPostBySlug } from './data/blogPosts';
import { PUBLISHED_LANDING_PAGES } from './data/landingPages';
import { TEAM, getTeamMember } from './data/team';
import { CASE_STUDIES } from './data/caseStudies';
import { SPEC_ROWS } from './data/specReference';
import { getPageAnswers } from './data/pageAnswers';
import { PROCESS_STEPS } from './data/processSteps';

/** Date of the last substantive content update for non-blog pages. Bump it
 * when page copy changes; it drives sitemap <lastmod>. */
export const SITE_CONTENT_UPDATED = '2026-10-12';

export interface RouteMeta {
  path: string;
  /** 50-60 characters, primary keyword first. */
  title: string;
  /** 140-158 characters, ends with a call to action. */
  description: string;
  buildJsonLd?: (canonicalUrl: string) => object[];
}

const speakable = (name: string) => (url: string) => [buildSpeakableWebPageSchema(url, name)];

const STATIC_ROUTES: RouteMeta[] = [
  {
    path: '/',
    title: 'Bulk Packaging Box Manufacturer Chennai | TV, Fan & Mailer',
    description:
      'Bulk TV, fan and appliance cartons, export master cartons, mailer and food boxes made in Chennai. MOQ 5,000 large, 10,000 small boxes. Get a bulk quote today.',
    buildJsonLd: (url) => [buildWebSiteSchema(), buildSpeakableWebPageSchema(url, 'Visalatchi Manufactures')],
  },
  {
    path: '/d2c-packaging',
    title: 'Bulk E-Commerce Mailer & Shipping Boxes Chennai | MOQ 10k',
    description:
      'Custom printed mailer boxes, corrugated shipping cartons and courier mailers for D2C brands shipping at volume. Made in Chennai from 10,000 units. Get a quote.',
  },
  {
    path: '/food-packaging',
    title: 'Bulk Food Packaging & FMCG Boxes Chennai | MOQ 10,000 Units',
    description:
      'Food-safe delivery boxes, bagasse containers and paper bowls in bulk for cloud-kitchen chains and FMCG brands. MOQ 10,000 units, pan-India. Request a quote.',
  },
  {
    path: '/export-packaging',
    title: 'Export Master Carton Manufacturer Chennai | 5/7-Ply, MOQ 5k',
    description:
      "Export master cartons built to your buyer's specification and CBM-optimised for container loading, from our Chennai plant. MOQ 5,000 units. Get a quote.",
  },
  {
    path: '/products',
    title: 'Bulk Packaging Products & MOQ | Visalatchi Manufactures',
    description:
      'TV, fan, appliance and export cartons from 5,000 units; mailers, small cartons, food packs and bags from 10,000. Itemised ex-GST quotes. Request yours today.',
    buildJsonLd: () => buildAllProductSchemas(),
  },
  {
    path: '/process',
    title: 'How Bulk Packaging Orders Work | Visalatchi Manufactures',
    buildJsonLd: (url) => [{
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to order bulk packaging from Visalatchi Manufactures',
      step: PROCESS_STEPS.map((st, i) => ({ '@type': 'HowToStep', position: i + 1, name: st.title, text: st.desc, url: `${url}#step-${i + 1}` })),
    }],
    description:
      'From specification and itemised quote to physical sample approval, bulk production and pan-India dispatch: how a Visalatchi order runs. Start your quote now.',
  },
  {
    path: '/about',
    title: 'About Visalatchi Manufactures | Chennai Packaging Factory',
    description:
      'Bulk corrugated packaging manufacturer in Thiruvottiyur, Chennai. Large boxes from 5,000 units, small from 10,000, sample-first. Meet the team and get a quote.',
  },
  {
    path: '/faq',
    title: 'Packaging MOQ FAQs: 5,000 Large, 10,000 Small | Visalatchi',
    description:
      'Why our MOQ is 5,000 for large boxes and 10,000 for small, how bulk pricing, samples and lead times work at our Chennai factory. Read the answers or ask us.',
    buildJsonLd: (url) => [buildFaqPageSchema(), buildSpeakableWebPageSchema(url, 'Packaging MOQ FAQs')],
  },
  {
    path: '/contact',
    title: 'Get a Bulk Packaging Quote | Visalatchi Manufactures Chennai',
    description:
      'Request a volume quote for 5,000+ large or 10,000+ small boxes from our Thiruvottiyur, Chennai plant. Call, WhatsApp or send your box size for a quote today.',
  },
  {
    path: '/blog',
    title: 'Corrugated Packaging Guides & Resources | Visalatchi Blog',
    description:
      'Guides on carton ply and board grades, bulk box pricing, appliance packaging, FSSAI and export carton compliance from a Chennai box maker. Start reading now.',
  },
];

const LANDING_ROUTES: RouteMeta[] = PUBLISHED_LANDING_PAGES.map((page) => ({
  path: page.path,
  title: page.title,
  description: page.description,
  buildJsonLd: (url) => [buildFaqPageSchema(page.faqs), buildSpeakableWebPageSchema(url, page.h1)],
}));

// Only registered once the owner has supplied real content (no empty pages).
const CONDITIONAL_ROUTES: RouteMeta[] = [
  ...(CASE_STUDIES.length
    ? [{
        path: '/case-studies',
        title: 'Bulk Packaging Case Studies | Visalatchi Manufactures Chennai',
        description: 'How manufacturers and brands solved carton problems with bulk corrugated packaging from our Chennai plant: spec, quantity and result. Read them now.',
      }]
    : []),
  ...(SPEC_ROWS.length
    ? [{
        path: '/carton-specification-reference',
        title: 'Corrugated Carton Specification Reference | Visalatchi',
        description: 'Reference table of appliance and product carton sizes with the ply and board grades used in real production at our Chennai plant. Use it to spec your box.',
        buildJsonLd: speakable('Corrugated Carton Specification Reference'),
      }]
    : []),
];

const TEAM_ROUTES: RouteMeta[] = TEAM.map((m) => ({
  path: `/team/${m.slug}`,
  title: `${m.name}, ${m.jobTitle} | Visalatchi`,
  description: `${m.name} is the ${m.jobTitle} at Visalatchi Manufactures, Chennai. ${m.focus.split(',')[0]}. Call ${m.phone} for a quote.`,
}));

export const ROUTES: RouteMeta[] = [...STATIC_ROUTES, ...LANDING_ROUTES, ...CONDITIONAL_ROUTES, ...TEAM_ROUTES];

/** Trims a meta description to Google's ~158-char display width at a word
 * boundary. A safety net only: authored descriptions should already fit. */
function fitDescription(text: string, max = 158): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.\s]+$/, '')}…`;
}

export interface HeadData {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
  noindex: boolean;
  schemas: object[];
  /** ISO date for sitemap <lastmod>. */
  lastmod: string;
}

function breadcrumbSchemas(path: string): object[] {
  const trail = getBreadcrumbTrail(path);
  return trail ? [buildBreadcrumbSchema(trail)] : [];
}

export const PRODUCT_ROUTE_PATHS: string[] = PRODUCTS.map((p) => `/products/${slugify(p.name)}`);

function computeProductHeadData(slug: string): HeadData | null {
  const product = PRODUCTS.find((p) => slugify(p.name) === slug);
  if (!product) return null;
  const detail = getProductDetail(product.id);

  const path = `/products/${slug}`;
  const canonicalUrl = `${SITE_URL}${path}`;
  const title = detail?.seoTitle ?? `${product.name} | MOQ ${product.moq.toLocaleString('en-IN')} | Visalatchi`;
  const description = detail?.seoDescription
    ?? `Bulk ${product.name.toLowerCase()} from Chennai, MOQ ${product.moq.toLocaleString('en-IN')} units. ${product.description}`;
  const schemas = [
    buildOrganizationSchema(),
    ...breadcrumbSchemas(path),
    buildProductSchema(product),
    ...(detail ? [buildFaqPageSchema(detail.faqs), buildSpeakableWebPageSchema(canonicalUrl, product.name)] : []),
  ];
  return { title, description: fitDescription(description), canonicalUrl, ogImage: product.image, noindex: false, schemas, lastmod: SITE_CONTENT_UPDATED };
}

export const BLOG_ROUTE_PATHS: string[] = BLOG_POSTS.map((p) => `/blog/${p.slug}`);

function computeBlogHeadData(slug: string): HeadData | null {
  const post = getBlogPostBySlug(slug);
  if (!post) return null;

  const path = `/blog/${slug}`;
  const canonicalUrl = `${SITE_URL}${path}`;
  const schemas = [
    buildOrganizationSchema(),
    ...breadcrumbSchemas(path),
    buildArticleSchema(post, canonicalUrl),
  ];
  return {
    title: post.seoTitle || post.title,
    description: fitDescription(post.seoDescription || post.description),
    canonicalUrl,
    ogImage: OG_IMAGE_URL,
    noindex: false,
    schemas,
    lastmod: post.updatedDate || post.publishDate,
  };
}

/** Every indexable path: used by the prerender (HTML + sitemap), llms-full.txt
 * and the IndexNow script. */
export const ALL_ROUTE_PATHS: string[] = [...ROUTES.map((r) => r.path), ...PRODUCT_ROUTE_PATHS, ...BLOG_ROUTE_PATHS];

/** FAQPage (+ speakable WebPage, unless the route already declares one) for
 * the <PageAnswers /> block rendered on this path. */
function pageAnswerSchemas(path: string, canonicalUrl: string, title: string): object[] {
  const answers = getPageAnswers(path);
  if (!answers) return [];
  const route = ROUTES.find((r) => r.path === path);
  const hasSpeakable = route?.buildJsonLd?.(canonicalUrl).some((s) => (s as { '@type'?: string })['@type'] === 'WebPage');
  return [buildFaqPageSchema(answers.items), ...(hasSpeakable ? [] : [buildSpeakableWebPageSchema(canonicalUrl, title.split(' | ')[0])])];
}

export const NOT_FOUND_HEAD: HeadData = {
  title: 'Page Not Found | Visalatchi Manufactures',
  description: '',
  canonicalUrl: '',
  ogImage: OG_IMAGE_URL,
  noindex: true,
  schemas: [],
  lastmod: SITE_CONTENT_UPDATED,
};

/** Single source of truth for per-route <head> content, consumed by both the
 * client-side Seo component and the build-time prerender script. */
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
  if (!route) return NOT_FOUND_HEAD;

  const canonicalUrl = `${SITE_URL}${route.path === '/' ? '' : route.path}`;
  const member = route.path.startsWith('/team/') ? getTeamMember(route.path.slice('/team/'.length)) : undefined;
  const schemas = [
    buildOrganizationSchema(),
    ...breadcrumbSchemas(route.path),
    ...(member ? [buildProfilePageSchema(member, canonicalUrl)] : []),
    ...(route.buildJsonLd ? route.buildJsonLd(canonicalUrl) : []),
    ...pageAnswerSchemas(route.path, canonicalUrl, route.title),
  ];
  return {
    title: route.title,
    description: fitDescription(route.description),
    canonicalUrl,
    ogImage: OG_IMAGE_URL,
    noindex: false,
    schemas,
    lastmod: SITE_CONTENT_UPDATED,
  };
}
