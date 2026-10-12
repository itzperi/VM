import { PRODUCTS, slugify } from '../data/products';
import { getBlogPostBySlug } from '../data/blogPosts';
import { getLandingPage } from '../data/landingPages';
import { getTeamMember } from '../data/team';

export interface Crumb {
  name: string;
  path: string;
}

// Short labels for the static routes. Used by both the visible <Breadcrumbs />
// and the BreadcrumbList JSON-LD, so the two can never disagree.
const STATIC_LABELS: Record<string, string> = {
  '/d2c-packaging': 'D2C Packaging',
  '/food-packaging': 'Food Packaging',
  '/export-packaging': 'Export Packaging',
  '/products': 'Products',
  '/process': 'Process',
  '/about': 'About',
  '/faq': 'FAQ',
  '/contact': 'Contact',
  '/blog': 'Blog',
  '/case-studies': 'Case Studies',
  '/carton-specification-reference': 'Carton Specification Reference',
};

const HOME: Crumb = { name: 'Home', path: '/' };

/** Full trail for a path, or null for unknown paths (404). Home alone for '/'. */
export function getBreadcrumbTrail(pathname: string): Crumb[] | null {
  if (pathname === '/') return [HOME];

  if (pathname.startsWith('/products/')) {
    const product = PRODUCTS.find((p) => `/products/${slugify(p.name)}` === pathname);
    return product ? [HOME, { name: 'Products', path: '/products' }, { name: product.name, path: pathname }] : null;
  }

  if (pathname.startsWith('/blog/')) {
    const post = getBlogPostBySlug(pathname.slice('/blog/'.length));
    return post ? [HOME, { name: 'Blog', path: '/blog' }, { name: post.title, path: pathname }] : null;
  }

  if (pathname.startsWith('/team/')) {
    const member = getTeamMember(pathname.slice('/team/'.length));
    return member ? [HOME, { name: 'About', path: '/about' }, { name: member.name, path: pathname }] : null;
  }

  const landing = getLandingPage(pathname);
  if (landing) return [HOME, { name: landing.breadcrumb || landing.h1, path: pathname }];

  const label = STATIC_LABELS[pathname];
  return label ? [HOME, { name: label, path: pathname }] : null;
}
