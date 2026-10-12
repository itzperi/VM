import React, { useEffect, useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/faqs';
import { slugify } from '../data/products';

/** Stable anchor id per question, for /faq#... deep links. */
const faqAnchor = (q: string) => slugify(q).slice(0, 80);

export const FAQView: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // Deep links: /faq#<question-anchor> opens and scrolls to that answer.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const i = FAQS.findIndex((f) => faqAnchor(f.q) === hash);
    if (i >= 0) {
      setOpenIdx(i);
      document.getElementById(hash)?.scrollIntoView();
    }
  }, []);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const faqs = FAQS;

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20 animate-in fade-in duration-300">
      <div className="border-b border-black/15 pb-8 mb-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B04724] mb-2 block">
          Knowledge Base
        </span>
        <h1 className="font-serif-display text-3xl md:text-5xl text-[#1b1c1a] font-medium mb-4">
          Frequently Asked Questions
        </h1>
        <p className="speakable font-body text-sm text-[#444748] max-w-xl mx-auto leading-relaxed">
          Visalatchi Manufactures is a bulk packaging manufacturer in Thiruvottiyur, Chennai. The minimum order is 5,000 units
          for large boxes such as TV, fan and appliance cartons and 10,000 units for small boxes. Below are answers on MOQs,
          samples, pricing and lead times.
        </p>

        {/* Search Input */}
        <div className="mt-6 max-w-md mx-auto relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#616565]" />
          <input
            type="text"
            placeholder="Search questions (e.g. MOQ, food delivery, export, pricing)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#F7F5F1] border border-black/20 pl-10 pr-4 py-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#B04724]"
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              id={faqAnchor(faq.q)}
              className="scroll-mt-28 bg-[#F7F5F1] border border-black/15 rounded-sm overflow-hidden transition-all hover:border-black/30"
            >
              {/* Heading wraps the button (a heading inside a button is invalid HTML). */}
              <h2 className="m-0">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-serif-display text-base md:text-lg text-[#1b1c1a] font-medium focus:outline-none cursor-pointer gap-4"
                  aria-expanded={isOpen}
                  aria-controls={`${faqAnchor(faq.q)}-answer`}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#B04724] shrink-0 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
              </h2>

              {/* Always rendered (hidden when collapsed) so every answer is in the
                  prerendered HTML that search and AI crawlers read. */}
              <div
                id={`${faqAnchor(faq.q)}-answer`}
                hidden={!isOpen}
                className="px-5 pb-5 font-body text-xs md:text-sm text-[#444748] leading-relaxed border-t border-black/5 pt-3 animate-in fade-in"
              >
                {faq.a}
              </div>
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 text-xs text-[#616565]">
            No questions matched your search query. Try searching for "MOQ", "sample", or "price".
          </div>
        )}
      </div>
    </div>
  );
};
