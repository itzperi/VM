import React from 'react';
import { PLANT_MAPS_SHARE_URL, PLANT_MAPS_EMBED_SRC } from '../lib/siteConfig';

/** Single map embed, rendered once in App.tsx between <main> and <Footer />
 * so every page gets exactly one map, in the same place, right before the
 * footer. Previously this was duplicated per page (homepage, /contact, and
 * inside Footer itself); consolidated here to one source of truth. */
export const LocationMap: React.FC = () => (
  <section className="w-full max-w-7xl mx-auto px-6 md:px-16 py-10">
    <iframe
      title="Visalatchi Manufactures plant location on Google Maps"
      src={PLANT_MAPS_EMBED_SRC}
      width="100%"
      height="280"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-sm border border-black/15 w-full"
    />
    <a
      href={PLANT_MAPS_SHARE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-3 text-[#C8522C] text-xs font-semibold hover:underline"
    >
      View our Chennai plant on Google Maps and get directions →
    </a>
  </section>
);
