import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';

interface HeroSectionProps {
  openContact: (recipient?: 'palaniappan' | 'periyanan', note?: string) => void;
}

const FACTS = [
  'Made in Thiruvottiyur, Chennai',
  'MOQ 5,000 large · 10,000 small',
  'Physical sample before every bulk run',
  'Itemised ex-GST pricing',
  'Pan-India dispatch',
];

// Illustrative order board (how a bulk order moves), drawn like a product UI
// mockup. Generic examples only: no customer names, dates or volumes claimed.
const BOARD: { stage: string; pill: string; cards: { title: string; meta: string }[] }[] = [
  { stage: 'Spec & quote', pill: 'bg-[#f6d5b8] text-[#111111]', cards: [
    { title: 'TV carton, 5-ply', meta: 'Size, weight and print shared' },
    { title: 'Mailer box, E-flute', meta: 'Itemised ex-GST quote sent' },
  ] },
  { stage: 'Sample approval', pill: 'bg-[#ffb110] text-[#111111]', cards: [
    { title: 'Ceiling fan carton', meta: 'Physical sample with buyer' },
  ] },
  { stage: 'Bulk production', pill: 'bg-[#62aef0] text-[#111111]', cards: [
    { title: 'Export master carton, 7-ply', meta: 'QC at board, run and dispatch' },
  ] },
  { stage: 'Dispatched', pill: 'bg-[#02093a] text-white', cards: [
    { title: 'Food delivery boxes', meta: 'Packed for road transport' },
  ] },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ openContact }) => (
  <section className="relative w-full overflow-hidden pt-28 md:pt-36 pb-16 md:pb-20">
    <div className="relative z-10 text-center px-4 md:px-8 w-full max-w-6xl mx-auto flex flex-col items-center">
      <div className="mb-8 flex flex-col items-center gap-4 fade-in-up">
        <BrandLogo variant="hero" />
        <span className="text-xs sm:text-sm font-medium text-[#0068c9] bg-[#e6f3fe] px-4 py-1 rounded-full">
          Bulk packaging manufacturer · MOQ from 5,000 units
        </span>
      </div>

      <h1 className="font-serif-display text-[34px] sm:text-5xl md:text-[56px] lg:text-[64px] text-[#111111] leading-[1.06] mb-6 fade-in-up">
        Bulk Packaging Boxes, <br className="hidden sm:inline" /> <span className="highlight-pill">Made in Chennai</span>, Tamil Nadu. <br className="hidden sm:inline" /> From TV &amp; Fan Cartons to Mailers.
      </h1>

      <p className="speakable font-editorial text-lg md:text-xl text-[#615d59] max-w-2xl mx-auto leading-[1.56] mb-8 fade-in-up">
        Visalatchi Manufactures makes TV, fan and appliance cartons, export master cartons, printed mailer boxes and food-safe packs at its plant in Thiruvottiyur, Chennai. Large boxes from 5,000 units, small boxes from 10,000, with a physical sample before every bulk run and pan-India dispatch.
      </p>

      {/* One filled primary action; the alternative is a ghost tint. */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8 fade-in-up">
        <button
          onClick={() => openContact('palaniappan', 'Bulk quote request from homepage')}
          className="bg-[#0075de] text-white px-6 py-2.5 text-[15px] font-medium hover:bg-[#005bab] transition-colors duration-200 rounded-lg cursor-pointer"
        >
          Get a Bulk Quote
        </button>
        <Link
          to="/products"
          className="bg-[#e6f3fe] text-[#005bab] px-6 py-2.5 text-[15px] font-medium hover:bg-[#d3e9fd] transition-colors duration-200 rounded-lg cursor-pointer inline-block"
        >
          See Products &amp; MOQ
        </Link>
      </div>

      <ul className="flex flex-wrap justify-center gap-2 mb-14" aria-label="Key facts">
        {FACTS.map((f) => (
          <li key={f} className="text-[13px] text-[#615d59] bg-white border border-black/[0.08] px-3 py-1 rounded-full">{f}</li>
        ))}
      </ul>

      {/* Product-window mockup: the order board. */}
      <figure className="w-full max-w-5xl rounded-xl overflow-hidden border border-black/10 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-left">
        <div className="flex items-center gap-1.5 px-4 h-9 border-b border-black/[0.08]" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-[#f64932]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffb110]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#62aef0]" />
          <span className="ml-3 text-xs text-[#696969]">Bulk order board</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-4 bg-[#f6f5f4]">
          {BOARD.map((col) => (
            <div key={col.stage} className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-[#615d59]">
                <span className={`px-2 py-0.5 rounded-full font-medium ${col.pill}`}>{col.stage}</span>
                <span aria-hidden="true">{col.cards.length}</span>
              </div>
              {col.cards.map((c) => (
                <div key={c.title} className="bg-white border border-black/[0.08] rounded-lg px-3 py-2">
                  <div className="text-sm font-medium text-[#111111]">{c.title}</div>
                  <div className="text-xs text-[#696969] mt-0.5">{c.meta}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <figcaption className="px-4 py-3 border-t border-black/[0.08] text-sm text-[#615d59] flex flex-wrap items-center justify-between gap-2">
          <span>How every bulk order moves: specify, sample, produce, dispatch.</span>
          <Link to="/process" className="text-[#0068c9] font-medium hover:underline">See the process →</Link>
        </figcaption>
      </figure>
    </div>
  </section>
);
