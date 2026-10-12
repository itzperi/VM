import React from 'react';
import { Send } from 'lucide-react';
import { SPEC_ROWS } from '../data/specReference';
import { ProductItem } from '../types';

interface Props {
  openContact: (recipient?: 'palaniappan' | 'periyanan', noteOrProduct?: string | ProductItem) => void;
}

/** Original-data reference table. Routed only once data/specReference.ts
 * holds real production rows. */
export const SpecReferenceView: React.FC<Props> = ({ openContact }) => (
  <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-10 md:py-16">
    <h1 className="font-serif-display text-3xl md:text-5xl text-[#1b1c1a] font-medium mb-4">Corrugated Carton Specification Reference</h1>
    <p className="speakable font-body text-base text-[#444748] leading-relaxed mb-8">
      This reference lists carton sizes with the ply and board grades Visalatchi Manufactures has used in real production at
      its Chennai plant. Use it as a starting point; every order is confirmed on a physical sample.
    </p>
    <div className="overflow-x-auto border border-black/15 rounded-sm">
      <table className="w-full text-left border-collapse text-xs">
        <thead>
          <tr className="bg-[#EAE8E4] uppercase tracking-wider">
            <th className="p-3">Product</th><th className="p-3">Carton size (inner, mm)</th><th className="p-3">Ply</th><th className="p-3">Board</th><th className="p-3">Notes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black/10">
          {SPEC_ROWS.map((r) => (
            <tr key={`${r.product}-${r.cartonSize}`}>
              <td className="p-3 font-semibold">{r.product}</td><td className="p-3">{r.cartonSize}</td><td className="p-3">{r.ply}</td><td className="p-3">{r.board}</td><td className="p-3">{r.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <button
      onClick={() => openContact('palaniappan', 'Bulk quote request from /carton-specification-reference')}
      className="mt-10 bg-[#B04724] text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-black transition-colors rounded-sm inline-flex items-center gap-2"
    >
      <Send className="w-4 h-4" /> Quote a Carton
    </button>
  </div>
);
