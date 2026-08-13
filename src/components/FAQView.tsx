import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/faqs';

export const FAQView: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
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
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C8522C] mb-2 block">
          Knowledge Base & SEO Answers
        </span>
        <h1 className="font-serif-display text-3xl md:text-5xl text-[#1b1c1a] font-medium mb-4">
          Frequently Asked Questions
        </h1>
        <p className="font-body text-sm text-[#444748] max-w-lg mx-auto leading-relaxed">
          Answers to common questions about ordering packaging from Visalatchi — minimum order quantities, sample process, pricing, and delivery timelines.
        </p>

        {/* Search Input */}
        <div className="mt-6 max-w-md mx-auto relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#747878]" />
          <input
            type="text"
            placeholder="Search questions (e.g. MOQ, food delivery, export, pricing)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#F7F5F1] border border-black/20 pl-10 pr-4 py-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#C8522C]"
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-[#F7F5F1] border border-black/15 rounded-sm overflow-hidden transition-all hover:border-black/30"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between font-serif-display text-base md:text-lg text-[#1b1c1a] font-medium focus:outline-none cursor-pointer gap-4"
                aria-expanded={isOpen}
              >
                <h3 className="font-serif-display text-base md:text-lg text-[#1b1c1a] font-medium m-0">{faq.q}</h3>
                <ChevronDown className={`w-5 h-5 text-[#C8522C] shrink-0 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 font-body text-xs md:text-sm text-[#444748] leading-relaxed border-t border-black/5 pt-3 animate-in fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 text-xs text-[#747878]">
            No questions matched your search query. Try searching for "MOQ", "sample", or "price".
          </div>
        )}
      </div>
    </div>
  );
};
