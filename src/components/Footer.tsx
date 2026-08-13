import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { CHENNAI_LOCALITIES, TAMIL_NADU_CITIES, PLANT_ADDRESS_FULL } from '../lib/siteConfig';

interface FooterProps {
  openContact: (recipient?: 'palaniappan' | 'periyanan') => void;
}

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PLANT_ADDRESS_FULL)}`;
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(PLANT_ADDRESS_FULL)}&output=embed`;

export const Footer: React.FC<FooterProps> = ({ openContact }) => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#F7F5F1] w-full py-16 md:py-20 px-6 md:px-16 border-t border-black/15 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5 flex flex-col justify-between gap-6">
          <div>
            <Link
              to="/"
              onClick={scrollTop}
              className="hover:opacity-80 transition-opacity focus:outline-none cursor-pointer inline-flex items-center gap-2"
            >
              <BrandLogo variant="footer" />
            </Link>
            <p className="font-body text-xs md:text-sm text-[#444748] max-w-sm mt-3 leading-relaxed">
              Shipping-ready packaging made in Chennai, Tamil Nadu and shipped pan-India. Low MOQs from 50 units, physical pre-production sample approval, and transparent itemised pricing.
            </p>
          </div>

          <div className="bg-[#EAE8E4] p-4 rounded-sm border border-black/10 text-xs space-y-2">
            <div className="font-semibold text-[#1b1c1a]">Plant address:</div>
            <address className="not-italic text-[#747878] text-[11px] leading-relaxed">
              No 10/4B Village Street, Sadayan Kuppam Pattai,
              <br />
              Thiruvottiyur, Chennai 600019, Tamil Nadu, India
            </address>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#C8522C] text-[11px] font-semibold hover:underline"
            >
              Get directions →
            </a>
            <div className="pt-2 font-mono text-[#C8522C] font-semibold space-y-0.5">
              <div>Palaniappan, 98405 01323</div>
              <div>Periyanan, 94444 20367</div>
            </div>
          </div>

          <p className="font-body text-[11px] text-[#747878]">
            © Visalatchi Manufactures. All rights reserved. Made in Chennai, Tamil Nadu, shipped Pan-India.
          </p>

          <div className="text-[11px] text-[#747878] leading-relaxed space-y-1.5">
            <p>
              <span className="font-semibold text-[#1b1c1a]">Serving Chennai: </span>
              {CHENNAI_LOCALITIES.join(', ')}, and pan-Chennai dispatch.
            </p>
            <p>
              <span className="font-semibold text-[#1b1c1a]">Serving Tamil Nadu: </span>
              {TAMIL_NADU_CITIES.join(', ')}, and pan-India courier dispatch.
            </p>
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-7 flex flex-col gap-2.5">
          <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#1b1c1a] mb-2">
            Navigation
          </h4>
          <Link
            to="/d2c-packaging"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#444748] hover:text-[#C8522C] transition-colors py-1"
          >
            D2C & E-Commerce Packaging
          </Link>
          <Link
            to="/food-packaging"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#444748] hover:text-[#C8522C] transition-colors py-1"
          >
            Food & FMCG Packaging
          </Link>
          <Link
            to="/export-packaging"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#444748] hover:text-[#C8522C] transition-colors py-1"
          >
            Export Container Packaging
          </Link>
          <Link
            to="/products"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#444748] hover:text-[#C8522C] transition-colors py-1"
          >
            Products & Full Price List
          </Link>
          <Link
            to="/process"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#444748] hover:text-[#C8522C] transition-colors py-1"
          >
            How It Works (Process)
          </Link>
        </div>

        <div className="md:col-span-3 flex flex-col gap-2.5">
          <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#1b1c1a] mb-2">
            Company & Help
          </h4>
          <Link
            to="/about"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#444748] hover:text-[#C8522C] transition-colors py-1"
          >
            About Us
          </Link>
          <Link
            to="/faq"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#444748] hover:text-[#C8522C] transition-colors py-1"
          >
            Frequently Asked Questions
          </Link>
          <Link
            to="/contact"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#444748] hover:text-[#C8522C] transition-colors py-1"
          >
            Contact & Quote Request
          </Link>

          <div className="pt-4 mt-2 border-t border-black/10">
            <button
              onClick={() => openContact('palaniappan')}
              className="bg-[#C8522C] text-white text-[11px] font-semibold uppercase tracking-widest px-4 py-2 rounded-sm hover:bg-black transition-colors cursor-pointer w-full text-center block"
            >
              Request Sample Box
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-10 border-t border-black/10">
        <iframe
          title="Visalatchi Manufactures plant location on Google Maps"
          src={MAP_EMBED_SRC}
          width="100%"
          height="220"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-sm border border-black/15 w-full"
        />
      </div>
    </footer>
  );
};
