import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';

interface HeroSectionProps {
  openContact: (recipient?: 'palaniappan' | 'periyanan', note?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ openContact }) => {
  const messages = [
    "Shipping-ready in Chennai, dispatched Pan-India",
    "MOQ 5,000 for large boxes · 10,000 for small boxes",
    "Physical sample approval before every bulk run",
    "Itemised pricing with zero hidden plate fees",
    "Contact Palaniappan: 98405 01323 · Periyanan: 94444 20367"
  ];
  const [messageIndex, setMessageIndex] = useState(0);
  // Starts fully populated with the first message (rather than "") so
  // prerendered/non-JS-crawler HTML isn't missing this content on first paint.
  const [displayedText, setDisplayedText] = useState(messages[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation starts a few seconds after mount so its frequent
  // re-renders never compete with first paint and hydration.
  const [typingStarted, setTypingStarted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setTypingStarted(true), 3500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!typingStarted) return;
    let timer: NodeJS.Timeout;
    const currentMessage = messages[messageIndex];

    if (!isDeleting && displayedText.length < currentMessage.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentMessage.substring(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText.length === currentMessage.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentMessage.substring(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, messageIndex, typingStarted]);

  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    if (!window.matchMedia('(min-width: 1024px)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const start = () => setShowVideo(true);
    if (document.readyState === 'complete') {
      const t = setTimeout(start, 1500);
      return () => clearTimeout(t);
    }
    window.addEventListener('load', start, { once: true });
    return () => window.removeEventListener('load', start);
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background: a lightweight WebP poster is the LCP element everywhere.
          The (self-hosted, 460 KB) video only loads on desktop, after the page
          has finished loading, so it never competes with first paint. */}
      <img
        src="/media/hero-poster-720.webp"
        srcSet="/media/hero-poster-720.webp 720w, /media/hero-poster.webp 1280w"
        sizes="100vw"
        width={1280}
        height={720}
        alt=""
        aria-hidden="true"
        fetchPriority="low"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 mix-blend-multiply"
      />
      {showVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/media/hero-poster.webp"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 mix-blend-multiply"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-[#F7F5F1]/30 z-0"></div>

      <div className="relative z-10 text-center px-4 md:px-16 w-full max-w-5xl mx-auto flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center gap-3 fade-in-up">
          <BrandLogo variant="hero" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B04724] bg-[#F7F5F1]/90 backdrop-blur-xs px-4 py-1 rounded-full border border-black/10 shadow-xs">
            Bulk Packaging Manufacturer · MOQ from 5,000 Units
          </span>
        </div>

        <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-[76px] text-[#1b1c1a] font-semibold leading-[1.08] tracking-[-0.02em] mb-6 fade-in-up">
          Bulk Packaging Boxes, <br className="hidden sm:inline" /> Made in Chennai, Tamil Nadu. <br className="hidden sm:inline" /> From TV &amp; Fan Cartons to Mailers.
        </h1>

        <p className="speakable font-body text-base md:text-xl text-[#444748] max-w-2xl mx-auto leading-relaxed mb-8 fade-in-up">
          Visalatchi Manufactures makes TV, fan and appliance cartons, export master cartons, printed mailer boxes and food-safe packs at its plant in Thiruvottiyur, Chennai. Large boxes from 5,000 units, small boxes from 10,000, with a physical sample before every bulk run and pan-India dispatch.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 fade-in-up">
          <button
            onClick={() => openContact('palaniappan', 'Bulk quote request from homepage')}
            className="bg-[#B04724] text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-black transition-colors rounded-sm cursor-pointer shadow-sm"
          >
            Get a Bulk Quote
          </button>
          <Link
            to="/products"
            className="bg-[#F7F5F1] text-[#1b1c1a] border border-black/25 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:border-black transition-colors rounded-sm cursor-pointer shadow-xs inline-block"
          >
            See Products & MOQ
          </Link>
        </div>

        {/* Typing Component */}
        <Link
          to="/products"
          className="p-4 bg-[#F7F5F1]/90 backdrop-blur-sm border border-black/15 font-nokia text-xs md:text-sm text-[#1b1c1a] max-w-lg w-full mx-auto shadow-sm cursor-pointer hover:border-black/40 transition-all group block"
        >
          <div className="flex items-center justify-between text-[10px] text-[#616565] uppercase mb-1.5 font-sans tracking-widest border-b border-black/10 pb-1">
            <span>Live Dispatch Status</span>
            <span className="text-[#B04724] font-semibold group-hover:underline">Explore Products →</span>
          </div>
          <div className="min-h-[24px] flex items-center justify-center font-semibold">
            <span className="typing-cursor text-[#1b1c1a]">{displayedText}</span>
          </div>
        </Link>
      </div>
    </section>
  );
};
