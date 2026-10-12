import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import { PLANT_MAPS_SHARE_URL, PLANT_MAPS_EMBED_SRC, PLANT_ADDRESS_FULL } from '../lib/siteConfig';

/** Single map embed, rendered once in App.tsx between <main> and <Footer />
 * so every page gets exactly one map, in the same place, right before the
 * footer.
 *
 * The Google Maps iframe pulls ~450 KB of third-party JavaScript, and
 * Chrome's native iframe lazy-loading starts it far before it is visible, so
 * the iframe is only mounted once the section actually enters the viewport.
 * Until then (and for crawlers) a static card shows the full address. */
export const LocationMap: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px 150px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto px-6 md:px-16 py-10" aria-label="Plant location">
      <div className="relative h-[280px] rounded-sm border border-black/15 overflow-hidden bg-[#EAE8E4]">
        {visible ? (
          <iframe
            title="Visalatchi Manufactures plant location on Google Maps"
            src={PLANT_MAPS_EMBED_SRC}
            width="100%"
            height="280"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 gap-2">
            <MapPin className="w-7 h-7 text-[#B04724]" />
            <p className="font-serif-display text-lg text-[#1b1c1a]">Visalatchi Manufactures plant</p>
            <p className="text-xs text-[#444748] max-w-md">{PLANT_ADDRESS_FULL}</p>
          </div>
        )}
      </div>
      <a
        href={PLANT_MAPS_SHARE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-[#B04724] text-xs font-semibold hover:underline"
      >
        View our Chennai plant on Google Maps and get directions →
      </a>
    </section>
  );
};
