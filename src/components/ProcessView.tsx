import React from 'react';
import { Package, CheckCircle2, Factory, Truck, Send } from 'lucide-react';

interface ProcessViewProps {
  openContact: (recipient?: 'palaniappan' | 'periyanan', note?: string) => void;
}

export const ProcessView: React.FC<ProcessViewProps> = ({ openContact }) => {
  const steps = [
    {
      step: '01',
      title: 'Choose',
      icon: Package,
      desc: 'Pick the format and size that matches your product from our comprehensive catalog.',
    },
    {
      step: '02',
      title: 'Sample',
      icon: CheckCircle2,
      desc: 'Approve a physical sample before any bulk production begins — no surprises at scale.',
    },
    {
      step: '03',
      title: 'Produce',
      icon: Factory,
      desc: 'Rigorous quality checks at raw material, production, and pre-dispatch stages.',
    },
    {
      step: '04',
      title: 'Ship',
      icon: Truck,
      desc: 'Packed and dispatched on schedule, sized for your specific courier or ocean freight partner.',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20 animate-in fade-in duration-300">
      <div className="border-b border-black/15 pb-8 mb-12 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C8522C] mb-2 block">
          Simple 4-Step Production Flow
        </span>
        <h1 className="font-serif-display text-3xl md:text-5xl text-[#1b1c1a] font-medium mb-4">
          From Sample to Your Next Shipment
        </h1>
        <p className="font-body text-base text-[#444748] max-w-xl mx-auto leading-relaxed">
          How Visalatchi takes your packaging order from first sample to final dispatch — transparently, quickly, and reliably.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {steps.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.step}
              className="bg-[#F7F5F1] border border-black/15 p-8 rounded-sm hover:border-[#C8522C] transition-colors relative"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif-display text-4xl text-[#C8522C] font-semibold">
                  {item.step}
                </span>
                <div className="p-3 bg-[#EAE8E4] rounded-full">
                  <IconComponent className="w-6 h-6 text-[#1b1c1a]" />
                </div>
              </div>

              <h2 className="font-serif-display text-2xl text-[#1b1c1a] font-medium mb-3">
                {item.title}
              </h2>

              <p className="font-body text-sm text-[#444748] leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="bg-[#1b1c1a] text-[#F7F5F1] p-8 md:p-12 rounded-sm text-center max-w-3xl mx-auto space-y-6">
        <h2 className="font-serif-display text-2xl md:text-3xl font-medium">
          Ready to start your first sample run?
        </h2>
        <p className="font-body text-sm text-white/80 max-w-md mx-auto">
          Share your product details, required dimensions, or monthly volume — we'll dispatch a sample box to your office.
        </p>
        <button
          onClick={() => openContact('general', 'Sample request from Process page')}
          className="bg-[#C8522C] text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm cursor-pointer inline-flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Request Physical Sample</span>
        </button>
      </div>
    </div>
  );
};
