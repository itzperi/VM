import React, { useState } from 'react';
import { ProductItem } from '../types';
import { buildPriceListRows } from '../data/products';
import { PackageCheck, ShieldAlert, Send, Sparkles, Truck, CheckCircle2 } from 'lucide-react';

interface D2CViewProps {
  openContact: (recipient?: 'palaniappan' | 'periyanan', noteOrProduct?: string | ProductItem) => void;
}

export const D2CView: React.FC<D2CViewProps> = ({ openContact }) => {
  const [boxLength, setBoxLength] = useState<number>(20);
  const [boxWidth, setBoxWidth] = useState<number>(15);
  const [boxHeight, setBoxHeight] = useState<number>(8);
  const [quantity, setQuantity] = useState<number>(100);

  // Approximate D2C price calculator formula based on surface area and quantity discount
  const surfaceAreaSqCm = 2 * (boxLength * boxWidth + boxLength * boxHeight + boxWidth * boxHeight);
  const baseRate = 0.018; // base rate factor
  const estUnitPrice = Math.max(14, Math.round((surfaceAreaSqCm * baseRate) * (quantity >= 500 ? 0.8 : quantity >= 200 ? 0.9 : 1)));
  const estTotal = estUnitPrice * quantity;

  const d2cPriceList = buildPriceListRows();

  const problemsSolved = [
    {
      title: 'Damage-in-transit driving bad reviews',
      desc: 'A torn mailer or crushed box shows up as a 1-star review with a photo — our crush-tested mailer boxes and tamper-evident courier mailers are built to reduce exactly this.',
    },
    {
      title: 'No unboxing experience without a huge MOQ',
      desc: 'Big custom-print suppliers demand 10,000+ unit commitments. Our custom printed formats start from 50 units, so you can build a branded unboxing experience without locking up cash.',
    },
    {
      title: 'Cost per order eating your margin',
      desc: 'At scale, even ₹3-5 extra per package matters. Our itemised pricing has no hidden conversion or plate charges — what you see is what you pay.',
    },
    {
      title: 'Running out of stock mid flash-sale',
      desc: 'Missing a box size during a sale event causes fulfillment delays and marketplace SLA penalties. We hold fast-dispatch formats specifically to cover demand spikes.',
    },
    {
      title: 'Sustainability pressure from customers or marketplaces',
      desc: 'Recyclable and compostable formats are available across our eco range for brands responding to Climate Pledge Friendly or customer sustainability asks.',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 py-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="border-b border-black/15 pb-8 mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C8522C] mb-2 block">
          D2C & E-Commerce Division
        </span>
        <h1 className="font-serif-display text-3xl md:text-5xl text-[#1b1c1a] font-medium mb-4">
          Built for How D2C Brands Actually Ship
        </h1>
        <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#C8522C] mb-4">
          Damage-resistant · Fast dispatch · Eco options
        </p>
        <p className="font-body text-base text-[#444748] max-w-3xl leading-relaxed">
          For a D2C brand, packaging failure shows up as a 1-star review with a photo of a torn mailer — and every extra rupee per package eats straight into an already-thin margin. Visalatchi's e-commerce range is priced and stocked for exactly this: low MOQs for brands still testing SKUs, fast dispatch for flash-sale spikes, and eco-friendly options where your customers or marketplace are asking for them. Manufactured in Chennai, Tamil Nadu, we dispatch pan-India with direct coverage across Chennai, Coimbatore, Madurai and the rest of Tamil Nadu.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            onClick={() => openContact('palaniappan', 'D2C Packaging Quote Request')}
            className="bg-[#C8522C] text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-black transition-colors rounded-sm cursor-pointer shadow-sm"
          >
            Get a D2C Quote
          </button>
          <span className="text-xs text-[#747878] italic">Direct Specialist: Palaniappan — 98405 01323</span>
        </div>
      </div>

      {/* Problems Solved Section */}
      <div className="mb-16">
        <h2 className="font-serif-display text-2xl md:text-3xl text-[#1b1c1a] font-medium mb-6">
          The problems this solves
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemsSolved.map((p, idx) => (
            <div key={idx} className="bg-[#F7F5F1] border border-black/15 p-6 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-[#C8522C] font-semibold text-xs uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4" />
                <span>Problem #{idx + 1}</span>
              </div>
              <h3 className="font-serif-display text-lg text-[#1b1c1a] font-medium">
                {p.title}
              </h3>
              <p className="font-body text-xs text-[#444748] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* D2C Price List Table */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h2 className="font-serif-display text-2xl md:text-3xl text-[#1b1c1a] font-medium">
            D2C E-commerce Price List
          </h2>
          <span className="text-xs text-[#747878]">Ex-GST, starting rates at MOQ</span>
        </div>

        <div className="overflow-x-auto border border-black/15 bg-[#F7F5F1] rounded-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#EAE8E4] border-b border-black/15 text-xs font-semibold uppercase tracking-wider text-[#1b1c1a]">
                <th className="p-4">Product</th>
                <th className="p-4">Best For</th>
                <th className="p-4">MOQ</th>
                <th className="p-4">Lead Time</th>
                <th className="p-4">Price / Unit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10 text-xs font-body text-[#1b1c1a]">
              {d2cPriceList.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#EAE8E4]/50 transition-colors">
                  <td className="p-4 font-semibold text-[#1b1c1a] font-serif-display text-sm">{row.name}</td>
                  <td className="p-4 text-[#444748] max-w-xs">{row.bestFor}</td>
                  <td className="p-4 font-mono font-medium text-[#C8522C]">{row.moq}</td>
                  <td className="p-4 text-[#444748]">{row.leadTime}</td>
                  <td className="p-4 font-mono font-bold text-base text-[#1b1c1a]">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-[#747878] mt-3 italic">
          *Starting unit prices for the smallest listed size/quantity at each product's reference MOQ, ex-GST, inclusive of Visalatchi's standard ₹2/unit margin. Final price depends on size, finish, print colours and order quantity — confirmed on formal quotation.
        </p>
      </div>

      {/* Format Details */}
      <div className="mb-16">
        <h2 className="font-serif-display text-2xl md:text-3xl text-[#1b1c1a] font-medium mb-6">
          Format details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#EAE8E4] p-6 rounded-sm border border-black/10">
            <h3 className="font-serif-display text-lg text-[#1b1c1a] font-semibold mb-2">
              Mailer & Shipping Boxes
            </h3>
            <p className="text-xs text-[#444748] leading-relaxed">
              Crush-tested for courier handling; brandable interior/exterior print keeps unboxing on-brand without a separate insert.
            </p>
          </div>
          <div className="bg-[#EAE8E4] p-6 rounded-sm border border-black/10">
            <h3 className="font-serif-display text-lg text-[#1b1c1a] font-semibold mb-2">
              Courier & Padded Mailers
            </h3>
            <p className="text-xs text-[#444748] leading-relaxed">
              Tamper-evident seals and padded options reduce transit damage on apparel, books and small electronics.
            </p>
          </div>
          <div className="bg-[#EAE8E4] p-6 rounded-sm border border-black/10">
            <h3 className="font-serif-display text-lg text-[#1b1c1a] font-semibold mb-2">
              Food Delivery & Bagasse Packs
            </h3>
            <p className="text-xs text-[#444748] leading-relaxed">
              Grease and moisture-resistant options built for hot food, curries and cloud-kitchen dispatch.
            </p>
          </div>
          <div className="bg-[#EAE8E4] p-6 rounded-sm border border-black/10">
            <h3 className="font-serif-display text-lg text-[#1b1c1a] font-semibold mb-2">
              Eco / Paper Formats
            </h3>
            <p className="text-xs text-[#444748] leading-relaxed">
              Recyclable and compostable options for brands responding to marketplace or customer sustainability asks.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Box Dimension Estimator */}
      <div className="bg-[#1b1c1a] text-[#F7F5F1] p-6 md:p-10 rounded-sm mb-12 shadow-xl">
        <div className="border-b border-white/10 pb-4 mb-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-widest text-[#C8522C] block">
              D2C Instant Pricing Calculator
            </span>
            <h3 className="font-serif-display text-2xl text-white font-medium">
              Estimate Custom Mailer Box Cost
            </h3>
          </div>
          <div className="text-right">
            <div className="text-xs text-white/60">Lead Specialist</div>
            <div className="text-sm font-semibold text-[#C8522C]">Palaniappan · D2C Direct</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-white/80 mb-1">Length (cm)</label>
              <input
                type="number"
                value={boxLength}
                onChange={(e) => setBoxLength(Number(e.target.value))}
                className="w-full bg-[#2a2b29] border border-white/20 p-2 text-white rounded-sm focus:outline-none focus:border-[#C8522C]"
              />
            </div>
            <div>
              <label className="block text-white/80 mb-1">Width (cm)</label>
              <input
                type="number"
                value={boxWidth}
                onChange={(e) => setBoxWidth(Number(e.target.value))}
                className="w-full bg-[#2a2b29] border border-white/20 p-2 text-white rounded-sm focus:outline-none focus:border-[#C8522C]"
              />
            </div>
            <div>
              <label className="block text-white/80 mb-1">Height (cm)</label>
              <input
                type="number"
                value={boxHeight}
                onChange={(e) => setBoxHeight(Number(e.target.value))}
                className="w-full bg-[#2a2b29] border border-white/20 p-2 text-white rounded-sm focus:outline-none focus:border-[#C8522C]"
              />
            </div>
            <div>
              <label className="block text-white/80 mb-1">Quantity (Units)</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full bg-[#2a2b29] border border-white/20 p-2 text-white rounded-sm focus:outline-none focus:border-[#C8522C]"
              />
            </div>
          </div>

          <div className="bg-[#2a2b29] p-6 rounded-sm border border-white/10 space-y-4 text-center">
            <div className="text-xs uppercase tracking-widest text-[#C8522C] font-semibold">
              Estimated Custom Unit Rate
            </div>
            <div className="font-serif-display text-4xl md:text-5xl text-white font-medium">
              ₹{estUnitPrice} <span className="text-xs font-sans text-white/60">/ unit</span>
            </div>
            <div className="text-xs text-white/70">
              Total estimated cost: <strong className="text-white">₹{estTotal.toLocaleString()}</strong> (ex-GST)
            </div>
            <p className="text-[10px] text-white/50 italic">
              Includes E-flute kraft board, standard die-cutting & sample vector proof.
            </p>
            <button
              onClick={() => openContact('palaniappan', `Quote Request for Mailer Box ${boxLength}x${boxWidth}x${boxHeight} cm, Qty: ${quantity}`)}
              className="w-full bg-[#C8522C] text-white py-3 px-4 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm cursor-pointer shadow-sm flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Confirm Quote with Palaniappan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
