import React, { useState } from 'react';
import { ProductItem } from '../types';
import { Globe2, Ship, AlertOctagon, Send, Calculator, ShieldCheck } from 'lucide-react';

interface ExportViewProps {
  openContact: (recipient?: 'palaniappan' | 'periyanan', noteOrProduct?: string | ProductItem) => void;
}

export const ExportView: React.FC<ExportViewProps> = ({ openContact }) => {
  const [containerType, setContainerType] = useState<'20ft' | '40ft'>('20ft');
  const [cartonLength, setCartonLength] = useState<number>(60);
  const [cartonWidth, setCartonWidth] = useState<number>(40);
  const [cartonHeight, setCartonHeight] = useState<number>(40);

  // Freight calculation math
  const containerVolCbm = containerType === '20ft' ? 33.2 : 67.7;
  const cartonCbm = (cartonLength * cartonWidth * cartonHeight) / 1000000;
  const maxCartons = cartonCbm > 0 ? Math.floor((containerVolCbm * 0.85) / cartonCbm) : 0;

  const problemsSolved = [
    {
      title: 'Export-compliance packaging failures',
      desc: 'Moisture barrier failures during long transit or non-compliance with an importing country\'s labeling requirements can hold up a shipment at the port. Tell us your buyer\'s compliance requirement upfront and we\'ll build the spec to match — we don\'t assume a standard format will do.',
    },
    {
      title: 'Shipping slot penalties',
      desc: 'A missed container slot from late packaging can cost more than the product margin itself. Our production and dispatch timelines are built around your booking date, not a generic queue.',
    },
    {
      title: 'Currency-driven cost pressure',
      desc: 'Paid in USD or EUR but paying suppliers in INR means any packaging cost increase eats directly into your dollar margin. Our itemised pricing gives you a clear, fixed cost to plan against.',
    },
    {
      title: 'Buyer audit requirements',
      desc: 'International buyers increasingly want a documented, auditable supply chain — including packaging vendors. Share your buyer\'s audit requirement and we\'ll work with you on the documentation needed.',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 py-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-black/10 pb-8 mb-12">
        <span className="text-sm font-medium text-[#0068c9] mb-3 block">
          Export Logistics & Heavy Industrial Division
        </span>
        <h1 className="font-serif-display text-3xl md:text-5xl text-[#111111] font-medium mb-4">
          Packaging That Doesn't Miss Your Shipping Slot
        </h1>
        <p className="font-body text-base text-[#615d59] max-w-3xl leading-relaxed mb-6">
          For an exporter, a late or non-compliant packaging delivery doesn't just cost you the packaging — it costs you the shipping slot. Visalatchi builds packaging to your specification and timeline, so your container booking isn't the thing that fails. Our plant in Chennai, Tamil Nadu dispatches to ports and freight forwarders across South India for exporters shipping from Chennai and the rest of Tamil Nadu.
        </p>

        <div className="bg-white p-4 rounded-xl border-l-4 border-[#0075de] max-w-2xl text-xs text-[#111111] italic mb-6">
          *Note: we build packaging to your buyer's specific compliance requirement — share your destination market's requirements upfront and we'll confirm what we can meet before you commit.
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => openContact('periyanan', 'Export Packaging Inquiry')}
            className="bg-[#0075de] text-white px-6 py-3 text-sm font-medium hover:bg-[#005bab] transition-colors rounded-lg cursor-pointer"
          >
            Request Export Specification Quote
          </button>
          <span className="text-xs text-[#696969] italic">Lead Export Engineer: Periyanan — 94444 20367</span>
        </div>
      </div>

      {/* Problems Solved */}
      <div className="mb-16">
        <h2 className="font-serif-display text-2xl md:text-3xl text-[#111111] font-medium mb-6">
          The problems this solves
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problemsSolved.map((p, idx) => (
            <div key={idx} className="bg-white border border-black/10 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-[#0068c9] font-semibold text-xs">
                <AlertOctagon className="w-4 h-4" />
                <span>Export Challenge #{idx + 1}</span>
              </div>
              <h3 className="font-serif-display text-lg text-[#111111] font-medium">
                {p.title}
              </h3>
              <p className="font-body text-xs text-[#615d59] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Freight Container CBM Calculator */}
      <div className="bg-[#02093a] text-white p-6 md:p-10 rounded-xl mb-16 shadow-xl">
        <div className="border-b border-white/10 pb-4 mb-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <span className="text-xs font-semibold text-[#0068c9] block">
              Container Optimization Tool
            </span>
            <h2 className="font-serif-display text-2xl md:text-3xl text-white font-medium">
              Export Master Carton & CBM Estimator
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs tabular-nums bg-[#111a4d] px-3 py-1.5 rounded-xl border border-white/10">
            <Ship className="w-4 h-4 text-[#0068c9]" />
            <span>ISO Pallet Optimization</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-white/80 mb-1">Target Ocean Container Size</label>
              <select
                value={containerType}
                onChange={(e) => setContainerType(e.target.value as any)}
                className="w-full bg-[#111a4d] border border-white/20 p-2.5 text-white rounded-lg focus:outline-none focus:border-[#0075de]"
              >
                <option value="20ft">20ft Standard Dry Container (33.2 CBM)</option>
                <option value="40ft">40ft High-Cube Container (67.7 CBM)</option>
              </select>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-white/80 mb-1">Length (cm)</label>
                <input
                  type="number"
                  value={cartonLength}
                  onChange={(e) => setCartonLength(Number(e.target.value))}
                  className="w-full bg-[#111a4d] border border-white/20 p-2 text-white rounded-lg focus:outline-none focus:border-[#0075de]"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-1">Width (cm)</label>
                <input
                  type="number"
                  value={cartonWidth}
                  onChange={(e) => setCartonWidth(Number(e.target.value))}
                  className="w-full bg-[#111a4d] border border-white/20 p-2 text-white rounded-lg focus:outline-none focus:border-[#0075de]"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-1">Height (cm)</label>
                <input
                  type="number"
                  value={cartonHeight}
                  onChange={(e) => setCartonHeight(Number(e.target.value))}
                  className="w-full bg-[#111a4d] border border-white/20 p-2 text-white rounded-lg focus:outline-none focus:border-[#0075de]"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#111a4d] p-6 rounded-xl border border-white/10 space-y-4">
            <div className="text-sm text-[#0068c9] font-semibold text-center">
              Container Fill Optimization Result
            </div>

            <div className="bg-[#02093a] p-4 rounded-xl border border-black/10 space-y-3 text-xs">
              <div className="flex justify-between text-[#615d59]">
                <span className="text-white/70">Single Carton Volume:</span>
                <span className="tabular-nums font-semibold text-white">{cartonCbm.toFixed(3)} CBM</span>
              </div>
              <div className="flex justify-between text-[#615d59]">
                <span className="text-white/70">Est. Master Cartons per {containerType}:</span>
                <span className="tabular-nums font-bold text-lg text-[#0068c9]">{maxCartons} Cartons</span>
              </div>
              <div className="flex justify-between text-[#615d59]">
                <span className="text-white/70">Usable Container Fill:</span>
                <span className="tabular-nums text-white">~85% (ISO Stacking Space)</span>
              </div>
            </div>

            <button
              onClick={() => openContact('periyanan', `Export Container Inquiry (${containerType}, Carton Size: ${cartonLength}x${cartonWidth}x${cartonHeight}cm, Est. ${maxCartons} cartons)`)}
              className="w-full bg-[#0075de] text-white py-3 px-4 text-sm font-medium hover:bg-[#005bab] transition-colors rounded-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Spec to Periyanan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
