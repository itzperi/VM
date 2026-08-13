import React from 'react';
import { Package, CheckCircle2, Truck, Recycle, ReceiptText, MapPin } from 'lucide-react';

export const WhyVisalatchi: React.FC = () => {
  const reasons = [
    {
      icon: Package,
      title: 'Low minimum order quantities',
      desc: 'Start from 50 units on several formats, so you\'re not locking up working capital before you\'ve tested a size.',
    },
    {
      icon: CheckCircle2,
      title: 'Sample-first, always',
      desc: 'Approve a physical sample before any bulk production begins — no surprises at scale.',
    },
    {
      icon: Truck,
      title: 'Fast-dispatch formats',
      desc: 'Stocked and engineered to cover festival and flash-sale demand spikes without delays.',
    },
    {
      icon: Recycle,
      title: 'Eco and recyclable options',
      desc: 'Compostable bagasse and curbside recyclable paper formats for marketplace or customer asks.',
    },
    {
      icon: ReceiptText,
      title: 'Simple, itemised pricing',
      desc: 'Transparent costs with zero surprise conversion or plate charges. What you see is what you pay.',
    },
  ];

  return (
    <section className="w-full bg-[#EAE8E4]/60 border-y border-black/15 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
          <div className="md:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C8522C] mb-2 block">
              The Visalatchi Difference
            </span>
            <h2 className="font-serif-display text-3xl md:text-5xl text-[#1b1c1a] font-medium leading-tight mb-6">
              Why businesses choose Visalatchi
            </h2>
            <p className="font-body text-base text-[#444748] max-w-md leading-relaxed">
              We eliminate traditional factory barriers so growing businesses get reliable, high-grade packaging built for how they actually ship.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {reasons.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="border-t border-black/15 pt-5">
                    <IconComponent className="w-6 h-6 text-[#C8522C] mb-3" />
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#1b1c1a] mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-[#444748] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Made in Chennai, Pan-India Section */}
        <div className="bg-[#F7F5F1] border border-black/15 p-8 md:p-10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#C8522C]/10 rounded-full shrink-0">
              <MapPin className="w-6 h-6 text-[#C8522C]" />
            </div>
            <div>
              <h3 className="font-serif-display text-2xl text-[#1b1c1a] font-medium mb-2">
                Made in Chennai, built for the whole country
              </h3>
              <p className="font-body text-sm text-[#444748] max-w-2xl leading-relaxed">
                Visalatchi manufactures out of Chennai and ships pan-India. Wherever your warehouse, fulfillment center, or production unit is — from Delhi NCR to Bangalore to Kolkata — we dispatch to match your courier and delivery timelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
