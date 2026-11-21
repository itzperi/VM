import React from 'react';
import { Link } from 'react-router-dom';
import { GLOSSARY } from '../data/glossary';

interface GlossaryViewProps {
  openContact: (recipient?: 'aswin-nagappan' | 'periyanan', note?: string) => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ openContact }) => (
  <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20 animate-in fade-in duration-300">
    <div className="border-b border-black/10 pb-8 mb-10">
      <span className="text-sm font-medium text-[#0068c9] mb-3 block">Buyer reference</span>
      <h1 className="font-serif-display text-3xl md:text-5xl text-[#111111] font-medium mb-4">
        Corrugated Packaging Glossary
      </h1>
      <p className="speakable font-body text-base text-[#615d59] leading-relaxed">
        Plain-English definitions of the terms used in corrugated box quotes and specifications: ply, flute, GSM, BF,
        bursting strength, ECT, BCT, RSC, die-cut and master cartons. Use it to read a carton spec or to brief a
        supplier. Each definition starts with a one-sentence answer, then the detail that matters when you order in bulk.
      </p>
    </div>

    <nav aria-label="Glossary terms" className="mb-10 flex flex-wrap gap-2">
      {GLOSSARY.map((t) => (
        <a
          key={t.id}
          href={`#${t.id}`}
          className="text-xs font-body px-3 py-1.5 rounded-full border border-black/10 text-[#111111] hover:border-[#0068c9] hover:text-[#0068c9]"
        >
          {t.term.split(' (')[0]}
        </a>
      ))}
    </nav>

    <div className="space-y-8">
      {GLOSSARY.map((t) => (
        <div key={t.id} id={t.id} className="scroll-mt-24 border-b border-black/5 pb-8">
          <div>
            <h2 className="font-serif-display text-2xl text-[#111111] font-medium mb-2">{t.term}</h2>
          </div>
          <div className="font-body text-[#615d59] leading-relaxed space-y-2">
            <p className="text-[#111111]">{t.short}</p>
            <p className="text-sm">{t.detail}</p>
            {t.link && (
              <p className="text-sm">
                <Link to={t.link.to} className="text-[#0068c9] hover:underline">
                  {t.link.label}
                </Link>
              </p>
            )}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12 bg-[#02093a] text-white p-8 rounded-xl text-center space-y-4">
      <h2 className="font-serif-display text-2xl font-medium">Have a carton spec to quote?</h2>
      <p className="font-body text-sm text-white/80">
        Send your box size, ply and quantity. Large boxes from 5,000 units, small boxes from 10,000, with a physical
        sample before every bulk run.
      </p>
      <button
        type="button"
        onClick={() => openContact('aswin-nagappan', 'Bulk quote request from /packaging-glossary')}
        className="bg-white text-[#02093a] font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/90"
      >
        Get a bulk quote
      </button>
      <p className="font-body text-xs text-white/70">
        Or read the <Link to="/products" className="underline">product range</Link> and{' '}
        <Link to="/faq" className="underline">MOQ FAQs</Link>.
      </p>
    </div>
  </div>
);
