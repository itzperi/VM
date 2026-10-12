import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';
import { OWNER_FACTS } from '../data/ownerFacts';
import { PLANT_ADDRESS_FULL } from '../lib/siteConfig';

interface AboutViewProps {
  openContact?: (recipient?: 'palaniappan' | 'periyanan', note?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ openContact }) => {
  const facts: [string, string][] = [
    ['Plant', PLANT_ADDRESS_FULL],
    ['Minimum order', '5,000 units (large boxes) · 10,000 units (small boxes)'],
    ['Products', 'TV, fan and appliance cartons, export master cartons, corrugated boxes, mailers, food packaging'],
    ['Specialists', 'Palaniappan (D2C & domestic) · Periyanan (food & export)'],
    ...(OWNER_FACTS.foundingYear ? [['Founded', OWNER_FACTS.foundingYear] as [string, string]] : []),
    ...(OWNER_FACTS.capacity ? [['Production capacity', OWNER_FACTS.capacity] as [string, string]] : []),
    ...(OWNER_FACTS.boardRange ? [['Board range', OWNER_FACTS.boardRange] as [string, string]] : []),
    ...(OWNER_FACTS.machinery.length ? [['Machinery', OWNER_FACTS.machinery.join(', ')] as [string, string]] : []),
  ];
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20 animate-in fade-in duration-300">
      <div className="border-b border-black/15 pb-8 mb-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B04724] mb-2 block">
          About Visalatchi Manufactures
        </span>
        <h1 className="font-serif-display text-3xl md:text-5xl text-[#1b1c1a] font-medium mb-4">
          A New Kind of Packaging Supplier
        </h1>
        <p className="font-body text-base text-[#444748] max-w-xl mx-auto leading-relaxed">
          Visalatchi Manufactures is a Chennai-based manufacturer built for one simple reason: businesses that buy packaging by the thousands deserve consistent quality and honest, factory-direct volume pricing.
        </p>
      </div>

      <div className="space-y-10 font-body text-sm text-[#444748] leading-relaxed">
        <div className="bg-[#F7F5F1] border border-black/15 p-6 md:p-8 rounded-sm space-y-4">
          <p>
            Plenty of packaging suppliers will take a bulk order. Fewer will show you a physical sample first, itemise every rupee of the quote, and give you a named specialist who answers the phone. We built Visalatchi for D2C brands shipping at volume, food and FMCG manufacturers scaling across cities, and exporters working against a shipping deadline, ordering 5,000+ large boxes or 10,000+ small boxes at a time.
          </p>
          <p>
            We're a new manufacturing business, and we're not going to pretend otherwise. What we can offer instead of a long track record is focus: we run bulk orders only, from 5,000 units for large boxes and 10,000 for small boxes, so every job gets dedicated production time. A sample-first process means you know exactly what you're getting before the run starts, and pricing is itemised with no hidden conversion or plate charges.
          </p>
        </div>

        {/* Company facts: fixed facts always; owner-supplied facts appear once filled in data/ownerFacts.ts. */}
        <section className="bg-[#F7F5F1] border border-black/15 p-6 md:p-8 rounded-sm">
          <h2 className="font-serif-display text-2xl text-[#1b1c1a] font-medium mb-4">Company facts</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
            {facts.map(([k, v]) => (
              <div key={k} className="border-b border-black/10 pb-2">
                <dt className="text-[#616565] text-xs uppercase tracking-wider">{k}</dt>
                <dd className="text-[#1b1c1a] font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
          {OWNER_FACTS.certifications.length > 0 && (
            <ul className="mt-4 text-sm space-y-1">
              {OWNER_FACTS.certifications.map((c) => (
                <li key={c.name}>
                  {c.url ? <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-[#B04724] hover:underline">{c.name}</a> : c.name}
                  {c.issuer ? ` (${c.issuer})` : ''}
                </li>
              ))}
            </ul>
          )}
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#EAE8E4] border border-black/10 p-6 rounded-sm space-y-2">
            <Factory className="w-6 h-6 text-[#B04724] mb-2" />
            <h3 className="font-serif-display text-lg text-[#1b1c1a] font-medium">
              <Link to="/team/palaniappan" className="hover:text-[#B04724]">Palaniappan, D2C &amp; Domestic Lead</Link>
            </h3>
            <p className="text-xs text-[#444748]">
              Direct Line / WhatsApp: <a href="tel:+919840501323" className="font-semibold text-[#1b1c1a] hover:underline">98405 01323</a> · English, Tamil
            </p>
            <p className="text-xs text-[#444748] pt-2 border-t border-black/10">
              Handles D2C mailer boxes, custom printed cartons, courier mailers and brand unboxing proofs.
              If you are planning a bulk run for a new box size or need a pre-production sample turned around fast for a launch
              date, Palaniappan is who you talk to directly, not a general inquiry queue.
            </p>
          </div>

          <div className="bg-[#EAE8E4] border border-black/10 p-6 rounded-sm space-y-2">
            <ShieldCheck className="w-6 h-6 text-[#B04724] mb-2" />
            <h3 className="font-serif-display text-lg text-[#1b1c1a] font-medium">
              <Link to="/team/periyanan" className="hover:text-[#B04724]">Periyanan, Food &amp; Export Lead</Link>
            </h3>
            <p className="text-xs text-[#444748]">
              Direct Line / WhatsApp: <a href="tel:+919444420367" className="font-semibold text-[#1b1c1a] hover:underline">94444 20367</a> · English, Tamil
            </p>
            <p className="text-xs text-[#444748] pt-2 border-t border-black/10">
              Oversees heavy 7-ply master cartons, container pallet optimization, FSSAI compliance, and ocean freight
              logistics. For food-grade specification questions or export compliance documentation, share your
              buyer's or retailer's specific requirement with Periyanan directly before committing to a spec.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#1b1c1a] text-white p-8 rounded-sm text-center space-y-4">
          <h3 className="font-serif-display text-2xl font-medium">
            Get in touch and see if we're the right fit for your next order.
          </h3>
          <p className="text-xs text-white/70 max-w-md mx-auto">
            Share your box size, monthly volume and target start date — we'll turn it into a firm quotation and dispatch a sample.
          </p>
          {openContact && (
            <button
              onClick={() => openContact('general', 'Inquiry from About page')}
              className="bg-[#B04724] text-white px-8 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm cursor-pointer"
            >
              Contact Us Today
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
