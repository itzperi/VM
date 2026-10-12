import React from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2, Phone } from 'lucide-react';
import { LandingPage } from '../data/landingPages';
import { ProductItem } from '../types';
import { getBlogPostBySlug } from '../data/blogPosts';

const BUYER_GUIDES = [
  'corrugated-box-price-factors-bulk',
  'how-to-choose-bulk-packaging-supplier-india',
  'how-to-choose-packaging-moq',
]
  .map((slug) => getBlogPostBySlug(slug))
  .filter((p): p is NonNullable<typeof p> => !!p);

interface BulkLandingViewProps {
  page: LandingPage;
  openContact: (recipient?: 'palaniappan' | 'periyanan', noteOrProduct?: string | ProductItem) => void;
}

export const BulkLandingView: React.FC<BulkLandingViewProps> = ({ page, openContact }) => {
  const quoteNote = `Bulk quote request: ${page.quoteRequirement} (${page.ctaNote})`;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-12 py-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-black/15 pb-10 mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B04724] mb-2 block">
          {page.eyebrow}
        </span>
        <h1 className="font-serif-display text-3xl md:text-5xl text-[#1b1c1a] font-medium mb-5">
          {page.h1}
        </h1>
        <p className="speakable font-body text-base md:text-lg text-[#1b1c1a] max-w-3xl leading-relaxed mb-4">
          {page.answer}
        </p>
        <p className="font-body text-sm text-[#444748] max-w-3xl leading-relaxed">
          {page.intro}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={() => openContact('palaniappan', quoteNote)}
            className="bg-[#B04724] text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-black transition-colors rounded-sm cursor-pointer shadow-sm inline-flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Get a Bulk Quote</span>
          </button>
          <a
            href="tel:+919840501323"
            className="bg-[#F7F5F1] text-[#1b1c1a] border border-black/25 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest hover:border-black transition-colors rounded-sm inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call 98405 01323</span>
          </a>
          <span className="text-xs text-[#616565] italic">{page.ctaNote}</span>
        </div>
      </div>

      {/* Who it's for */}
      <section className="mb-16">
        <h2 className="font-serif-display text-2xl md:text-3xl text-[#1b1c1a] font-medium mb-6">
          Who orders from us in bulk?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {page.buyers.map((b) => (
            <div key={b.title} className="bg-[#F7F5F1] border border-black/15 p-6 rounded-sm">
              <h3 className="font-serif-display text-lg text-[#1b1c1a] font-medium mb-2">{b.title}</h3>
              <p className="font-body text-xs text-[#444748] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product / MOQ table */}
      <section className="mb-16">
        <h2 className="font-serif-display text-2xl md:text-3xl text-[#1b1c1a] font-medium mb-4">
          What can you order, and what is the minimum?
        </h2>
        <div className="overflow-x-auto border border-black/15 bg-[#F7F5F1] rounded-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#EAE8E4] border-b border-black/15 text-xs font-semibold uppercase tracking-wider text-[#1b1c1a]">
                {page.table.headers.map((h) => (
                  <th key={h} className="p-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10 text-xs font-body text-[#1b1c1a]">
              {page.table.rows.map((row) => (
                <tr key={row[0]} className="hover:bg-[#EAE8E4]/50 transition-colors">
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={
                        i === 0
                          ? 'p-4 font-semibold font-serif-display text-sm'
                          : i === row.length - 1
                            ? 'p-4 font-mono font-semibold text-[#B04724] whitespace-nowrap'
                            : 'p-4 text-[#444748]'
                      }
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-[#616565] mt-3 italic">{page.tableCaption}</p>
      </section>

      {/* Process */}
      <section className="mb-16">
        <h2 className="font-serif-display text-2xl md:text-3xl text-[#1b1c1a] font-medium mb-6">
          How does a bulk order work?
        </h2>
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {page.steps.map((s, i) => (
            <li key={s.title} className="border-t border-black/15 pt-5">
              <div className="font-serif-display text-3xl text-black/50 mb-2">0{i + 1}</div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#1b1c1a] mb-2">{s.title}</h3>
              <p className="font-body text-xs text-[#444748] leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQs (also emitted as FAQPage JSON-LD via routes.ts) */}
      <section className="mb-16">
        <h2 className="font-serif-display text-2xl md:text-3xl text-[#1b1c1a] font-medium mb-6">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {page.faqs.map((f) => (
            <div key={f.q} className="bg-[#F7F5F1] border border-black/15 p-5 rounded-sm">
              <h3 className="font-serif-display text-base text-[#1b1c1a] font-semibold mb-2 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B04724] shrink-0 mt-1" />
                <span>{f.q}</span>
              </h3>
              <p className="font-body text-sm text-[#444748] leading-relaxed pl-6">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Buyer guides: internal links into the supporting content cluster */}
      <section className="mb-16">
        <h2 className="font-serif-display text-2xl md:text-3xl text-[#1b1c1a] font-medium mb-6">
          Guides for bulk packaging buyers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BUYER_GUIDES.map((g) => (
            <Link
              key={g.slug}
              to={`/blog/${g.slug}`}
              className="bg-[#EAE8E4] border border-black/10 p-5 rounded-sm hover:border-[#B04724] transition-colors font-serif-display text-base text-[#1b1c1a] font-medium"
            >
              {g.title} →
            </Link>
          ))}
        </div>
      </section>

      {/* Tamil summary: rendered only after review by a Tamil speaker. */}
      {page.tamilSummary?.reviewed && (
        <section lang="ta" className="mb-16 bg-[#F7F5F1] border border-black/15 p-6 rounded-sm">
          <h2 className="font-serif-display text-xl text-[#1b1c1a] font-medium mb-3">தமிழில் சுருக்கம்</h2>
          <p className="font-body text-sm text-[#444748] leading-relaxed">{page.tamilSummary.text}</p>
        </section>
      )}

      {/* CTA */}
      <div className="bg-[#1b1c1a] text-[#F7F5F1] p-8 md:p-10 rounded-sm text-center space-y-4 mb-8">
        <h2 className="font-serif-display text-2xl md:text-3xl text-white font-medium">
          Ready to place a bulk order?
        </h2>
        <p className="font-body text-sm text-white/70 max-w-xl mx-auto">
          Large boxes from 5,000 units, small boxes from 10,000. Send your dimensions, quantity and delivery date for an itemised volume quote and a sample plan.
        </p>
        <button
          onClick={() => openContact('palaniappan', quoteNote)}
          className="bg-[#B04724] text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm cursor-pointer inline-flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Request a Bulk Quote</span>
        </button>
        <div className="text-xs text-white/60">
          Palaniappan 98405 01323 · Periyanan 94444 20367 ·{' '}
          <Link to="/products" className="underline hover:text-white">See all products</Link>
        </div>
      </div>
    </div>
  );
};
