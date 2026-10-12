import React from 'react';
import { Send } from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudies';
import { ProductItem } from '../types';

interface Props {
  openContact: (recipient?: 'palaniappan' | 'periyanan', noteOrProduct?: string | ProductItem) => void;
}

/** Rendered (and routed) only when data/caseStudies.ts has real entries. */
export const CaseStudiesView: React.FC<Props> = ({ openContact }) => (
  <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-10 md:py-16">
    <h1 className="font-serif-display text-3xl md:text-5xl text-[#111111] font-medium mb-4">Bulk Packaging Case Studies</h1>
    <p className="speakable font-body text-base text-[#615d59] leading-relaxed mb-10">
      Real bulk orders produced at the Visalatchi Manufactures plant in Thiruvottiyur, Chennai: the problem, the carton
      specification, the quantity and the result.
    </p>
    <div className="space-y-8">
      {CASE_STUDIES.map((c) => (
        <article key={c.slug} id={c.slug} className="bg-white border border-black/10 rounded-xl p-6">
          <h2 className="font-serif-display text-2xl text-[#111111] font-medium mb-3">{c.title}</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-4">
            <div><dt className="text-[#696969]">Industry</dt><dd className="font-semibold">{c.industry}</dd></div>
            <div><dt className="text-[#696969]">Box</dt><dd className="font-semibold">{c.box}</dd></div>
            <div><dt className="text-[#696969]">Quantity</dt><dd className="font-semibold">{c.quantity}</dd></div>
          </dl>
          <h3 className="text-sm font-semibold mb-1">What was the problem?</h3>
          <p className="text-sm text-[#615d59] mb-3">{c.problem}</p>
          <h3 className="text-sm font-semibold mb-1">What did we make?</h3>
          <p className="text-sm text-[#615d59] mb-3">{c.solution}</p>
          <h3 className="text-sm font-semibold mb-1">What was the result?</h3>
          <p className="text-sm text-[#615d59]">{c.result}</p>
        </article>
      ))}
    </div>
    <button
      onClick={() => openContact('palaniappan', 'Bulk quote request from /case-studies')}
      className="mt-10 bg-[#0075de] text-white px-8 py-2.5 text-sm font-medium hover:bg-[#005bab] transition-colors rounded-lg inline-flex items-center gap-2"
    >
      <Send className="w-4 h-4" /> Get a Bulk Quote
    </button>
  </div>
);
