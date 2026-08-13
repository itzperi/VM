import React from 'react';
import { ProductItem } from '../types';
import { buildPriceListRows } from '../data/products';
import { ShieldCheck, UtensilsCrossed, AlertTriangle, Send } from 'lucide-react';

interface FoodViewProps {
  openContact: (recipient?: 'palaniappan' | 'periyanan', noteOrProduct?: string | ProductItem) => void;
}

export const FoodView: React.FC<FoodViewProps> = ({ openContact }) => {
  const foodFormats = buildPriceListRows(['prod-03', 'prod-08', 'prod-09', 'prod-07']);

  const problemsSolved = [
    {
      title: 'Shelf-life failure from poor sealing',
      desc: 'Moisture-permeable packaging shortens shelf life and drives retailer returns. Our food delivery boxes and bagasse containers use grease- and moisture-resistant materials suited to hot food, curries, and packaged snacks.',
    },
    {
      title: 'Seasonal volume mismatch',
      desc: 'Diwali, Pongal, and other festival periods can spike demand 3-5x. Fast-dispatch formats mean you\'re not stuck understocked or paying rush premiums when volume jumps.',
    },
    {
      title: 'Compliance documentation gaps',
      desc: 'As you move into modern trade (supermarkets, quoted retail chains), buyers expect proper documentation from your packaging supplier. We provide relevant specification and compliance documentation on request — ask us what your specific retail partner requires.',
    },
    {
      title: 'Cost creep from a long-standing supplier',
      desc: 'If you\'ve used the same packaging vendor for years without a recent competitive quote, there\'s a good chance you\'re overpaying. Our itemised pricing gives you a clean benchmark to compare against.',
    },
    {
      title: 'MOQs that lock up working capital',
      desc: 'Committing ₹10L in packaging inventory when your monthly need is ₹2L ties up cash you could use elsewhere. Several of our formats start from 100-300 units.',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 py-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-black/15 pb-8 mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C8522C] mb-2 block">
          Food & FMCG Division
        </span>
        <h1 className="font-serif-display text-3xl md:text-5xl text-[#1b1c1a] font-medium mb-4">
          Packaging That Protects Shelf Life, Not Just Your Margin
        </h1>
        <p className="font-body text-base text-[#444748] max-w-3xl leading-relaxed">
          For a food or FMCG manufacturer, a packaging failure isn't a bad review — it's a spoiled batch, a retailer return, or a compliance flag. Visalatchi builds food-safe, moisture and grease-resistant packaging for regional food brands that need reliability more than they need the cheapest quote. Manufactured in Chennai, Tamil Nadu and dispatched pan-India, we supply cloud kitchens and FMCG brands across Chennai, Coimbatore, Madurai and the rest of Tamil Nadu.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            onClick={() => openContact('periyanan', 'Food Packaging Inquiry')}
            className="bg-[#C8522C] text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-black transition-colors rounded-sm cursor-pointer shadow-sm"
          >
            Request Food Packaging Quote
          </button>
          <span className="text-xs text-[#747878] italic">Lead Specialist: Periyanan — 94444 20367</span>
        </div>
      </div>

      {/* Problems Solved */}
      <div className="mb-16">
        <h2 className="font-serif-display text-2xl md:text-3xl text-[#1b1c1a] font-medium mb-6">
          The problems this solves
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemsSolved.map((p, idx) => (
            <div key={idx} className="bg-[#F7F5F1] border border-black/15 p-6 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-[#C8522C] font-semibold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>Issue #{idx + 1}</span>
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

      {/* Relevant Formats Table */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h2 className="font-serif-display text-2xl md:text-3xl text-[#1b1c1a] font-medium">
            Relevant formats for food businesses
          </h2>
          <span className="text-xs text-[#747878]">Pricing: starting unit rates at MOQ, ex-GST</span>
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
              {foodFormats.map((row, idx) => (
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
          *Pricing note: starting unit prices at reference MOQ, ex-GST. Final price confirmed on formal quotation based on size, finish, and quantity.
        </p>
      </div>

      {/* Food Compliance Callout Box */}
      <div className="bg-[#EAE8E4] border border-black/15 p-8 rounded-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[#C8522C] font-semibold text-xs uppercase tracking-widest">
            <ShieldCheck className="w-5 h-5" />
            <span>FSSAI & Modern Trade Compliance Ready</span>
          </div>
          <h3 className="font-serif-display text-2xl text-[#1b1c1a] font-medium">
            Need migration certificates or specification datasheets?
          </h3>
          <p className="font-body text-xs text-[#444748] max-w-2xl leading-relaxed">
            All our food-grade board, bagasse containers, and food delivery packs use virgin contact surfaces and food-approved bio-coatings. Share your retail chain requirements with Periyanan.
          </p>
        </div>
        <button
          onClick={() => openContact('periyanan', 'Food compliance & certificate request')}
          className="bg-[#1b1c1a] text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#C8522C] transition-colors rounded-sm cursor-pointer shrink-0 flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Consult Periyanan</span>
        </button>
      </div>
    </div>
  );
};
