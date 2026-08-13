import React from 'react';
import { Factory, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';

interface AboutViewProps {
  openContact?: (recipient?: 'palaniappan' | 'periyanan', note?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ openContact }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20 animate-in fade-in duration-300">
      <div className="border-b border-black/15 pb-8 mb-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C8522C] mb-2 block">
          About Visalatchi Manufactures
        </span>
        <h1 className="font-serif-display text-3xl md:text-5xl text-[#1b1c1a] font-medium mb-4">
          A New Kind of Packaging Supplier
        </h1>
        <p className="font-body text-base text-[#444748] max-w-xl mx-auto leading-relaxed">
          Visalatchi Manufactures is a Chennai-based manufacturer built for one simple reason: growing businesses shouldn't have to choose between good packaging and reasonable order sizes.
        </p>
      </div>

      <div className="space-y-10 font-body text-sm text-[#444748] leading-relaxed">
        <div className="bg-[#F7F5F1] border border-black/15 p-6 md:p-8 rounded-sm space-y-4">
          <p>
            Most packaging suppliers are built for buyers who already know exactly what they need and can commit to large volumes upfront. That leaves a real gap for D2C brands testing a new SKU, food businesses scaling into a new city, and exporters working against a shipping deadline — businesses that need to move fast, in smaller batches, with a supplier who'll actually show them a sample before asking for a bulk commitment.
          </p>
          <p>
            We're a new manufacturing business, and we're not going to pretend otherwise. What we can offer instead of a long track record is responsiveness: low MOQs so you're not locking up capital to test us, a sample-first process so you know exactly what you're getting, and transparent, itemised pricing with no hidden conversion or plate charges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#EAE8E4] border border-black/10 p-6 rounded-sm space-y-2">
            <Factory className="w-6 h-6 text-[#C8522C] mb-2" />
            <h3 className="font-serif-display text-lg text-[#1b1c1a] font-medium">
              Palaniappan, D2C & Domestic Lead
            </h3>
            <p className="text-xs text-[#444748]">
              Direct Line / WhatsApp: <strong className="text-[#1b1c1a]">98405 01323</strong> · English, Tamil
            </p>
            <p className="text-xs text-[#444748] pt-2 border-t border-black/10">
              Handles D2C mailer boxes, custom inside print, fast dispatch courier bags, and brand unboxing proofs.
              If you are testing a new SKU size or need a sample turned around fast for a launch date, Palaniappan
              is who you talk to directly, not a general inquiry queue.
            </p>
          </div>

          <div className="bg-[#EAE8E4] border border-black/10 p-6 rounded-sm space-y-2">
            <ShieldCheck className="w-6 h-6 text-[#C8522C] mb-2" />
            <h3 className="font-serif-display text-lg text-[#1b1c1a] font-medium">
              Periyanan, Food & Export Lead
            </h3>
            <p className="text-xs text-[#444748]">
              Direct Line / WhatsApp: <strong className="text-[#1b1c1a]">94444 20367</strong> · English, Tamil
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
              className="bg-[#C8522C] text-white px-8 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm cursor-pointer"
            >
              Contact Us Today
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
