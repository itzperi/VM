import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { computeHeadData } from '../routes';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: object[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/** Mounted once in App.tsx. Keeps document.title/meta/canonical/JSON-LD in
 * sync with the current route on client-side navigation. The build-time
 * prerender script (scripts/prerender.ts) is what actually gets this content
 * in front of non-JS crawlers — this component only matters for hydrated,
 * already-loaded pages and SPA navigations. */
export const Seo: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const head = computeHeadData(location.pathname);
    document.title = head.title;
    upsertMeta('name', 'robots', head.noindex ? 'noindex, nofollow' : 'index, follow');

    if (!head.canonicalUrl) {
      return;
    }

    upsertMeta('name', 'description', head.description);
    upsertLink('canonical', head.canonicalUrl);
    upsertMeta('property', 'og:site_name', 'Visalatchi Manufactures');
    upsertMeta('property', 'og:title', head.title);
    upsertMeta('property', 'og:description', head.description);
    upsertMeta('property', 'og:url', head.canonicalUrl);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:locale', 'en_IN');
    upsertMeta('property', 'og:image', head.ogImage);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', head.title);
    upsertMeta('name', 'twitter:description', head.description);
    upsertMeta('name', 'twitter:image', head.ogImage);
    upsertJsonLd('ld-json-schema', head.schemas);
  }, [location.pathname]);

  return null;
};
