import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { CHENNAI_LOCALITIES, TAMIL_NADU_CITIES, PLANT_MAPS_SHARE_URL } from '../lib/siteConfig';
import { OWNER_FACTS } from '../data/ownerFacts';

interface FooterProps {
  openContact: (recipient?: 'palaniappan' | 'periyanan') => void;
}

export const Footer: React.FC<FooterProps> = ({ openContact }) => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#f6f5f4] w-full py-16 md:py-20 px-6 md:px-16 border-t border-black/10 mt-auto">
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
            <p className="font-body text-xs md:text-sm text-[#615d59] max-w-sm mt-3 leading-relaxed">
              Bulk packaging manufacturer in Chennai, Tamil Nadu, shipping pan-India. Minimum order 5,000 units for large boxes and 10,000 for small boxes, physical pre-production sample approval, and itemised factory-direct volume pricing.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-black/10 text-xs space-y-2">
            <div className="font-semibold text-[#111111]">Plant address:</div>
            <address className="not-italic text-[#696969] text-[11px] leading-relaxed">
              No 10/4B Village Street, Sadayan Kuppam Pattai,
              <br />
              Thiruvottiyur, Chennai 600019, Tamil Nadu, India
            </address>
            <a
              href={PLANT_MAPS_SHARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#0068c9] text-[11px] font-semibold hover:underline"
            >
              Get directions →
            </a>
            <div className="pt-2 tabular-nums text-[#0068c9] font-semibold space-y-0.5">
              <div>Palaniappan, <a href="tel:+919840501323" className="hover:underline">98405 01323</a></div>
              <div>Periyanan, <a href="tel:+919444420367" className="hover:underline">94444 20367</a></div>
              {OWNER_FACTS.email && (
                <div><a href={`mailto:${OWNER_FACTS.email}`} className="hover:underline">{OWNER_FACTS.email}</a></div>
              )}
            </div>
          </div>

          <p className="font-body text-[11px] text-[#696969]">
            © Visalatchi Manufactures. All rights reserved. Made in Chennai, Tamil Nadu, shipped Pan-India.
          </p>

          <div className="text-[11px] text-[#696969] leading-relaxed space-y-1.5">
            <p>
              <span className="font-semibold text-[#111111]">Serving Chennai: </span>
              {CHENNAI_LOCALITIES.join(', ')}, and pan-Chennai dispatch.
            </p>
            <p>
              <span className="font-semibold text-[#111111]">Serving Tamil Nadu: </span>
              {TAMIL_NADU_CITIES.join(', ')}, and pan-India courier dispatch.
            </p>
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-7 flex flex-col gap-2.5">
          <h2 className="font-sans text-sm font-semibold text-[#111111] mb-2">
            Navigation
          </h2>
          <Link
            to="/d2c-packaging"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#615d59] hover:text-[#0068c9] transition-colors py-1"
          >
            D2C & E-Commerce Packaging
          </Link>
          <Link
            to="/food-packaging"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#615d59] hover:text-[#0068c9] transition-colors py-1"
          >
            Food & FMCG Packaging
          </Link>
          <Link
            to="/export-packaging"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#615d59] hover:text-[#0068c9] transition-colors py-1"
          >
            Export Container Packaging
          </Link>
          <Link
            to="/products"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#615d59] hover:text-[#0068c9] transition-colors py-1"
          >
            Products & MOQ
          </Link>
          <Link
            to="/bulk-packaging-boxes"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#615d59] hover:text-[#0068c9] transition-colors py-1"
          >
            Bulk Packaging Boxes
          </Link>
          <Link
            to="/appliance-packaging-boxes"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#615d59] hover:text-[#0068c9] transition-colors py-1"
          >
            TV, Fan &amp; Appliance Boxes
          </Link>
          <Link
            to="/corrugated-box-manufacturer-chennai"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#615d59] hover:text-[#0068c9] transition-colors py-1"
          >
            Corrugated Box Manufacturer, Chennai
          </Link>
          <Link
            to="/5-ply-7-ply-corrugated-boxes"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#615d59] hover:text-[#0068c9] transition-colors py-1"
          >
            5-Ply &amp; 7-Ply Corrugated Boxes
          </Link>
          <Link
            to="/pump-motor-packaging-boxes"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#615d59] hover:text-[#0068c9] transition-colors py-1"
          >
            Pump &amp; Motor Packaging Boxes
          </Link>
          <Link
            to="/mixer-grinder-packaging-boxes"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#615d59] hover:text-[#0068c9] transition-colors py-1"
          >
            Mixer Grinder Packaging Boxes
          </Link>
          <Link
            to="/process"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#615d59] hover:text-[#0068c9] transition-colors py-1"
          >
            How It Works (Process)
          </Link>
        </div>

        <div className="md:col-span-3 flex flex-col gap-2.5">
          <h2 className="font-sans text-sm font-semibold text-[#111111] mb-2">
            Company & Help
          </h2>
          <Link
            to="/about"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#615d59] hover:text-[#0068c9] transition-colors py-1"
          >
            About Us
          </Link>
          <Link
            to="/faq"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#615d59] hover:text-[#0068c9] transition-colors py-1"
          >
            Frequently Asked Questions
          </Link>
          <Link
            to="/blog"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#615d59] hover:text-[#0068c9] transition-colors py-1"
          >
            Packaging Guides & Blog
          </Link>
          <Link
            to="/contact"
            onClick={scrollTop}
            className="text-left font-body text-xs text-[#615d59] hover:text-[#0068c9] transition-colors py-1"
          >
            Contact & Quote Request
          </Link>

          <div className="pt-4 mt-2 border-t border-black/10">
            <button
              onClick={() => openContact('palaniappan', 'Bulk quote request from footer')}
              className="bg-[#0075de] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#005bab] transition-colors cursor-pointer w-full text-center block"
            >
              Get a Bulk Quote
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
