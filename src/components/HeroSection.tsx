import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';

interface HeroSectionProps {
  openContact: (recipient?: 'palaniappan' | 'periyanan', note?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ openContact }) => {
  const messages = [
    "Shipping-ready in Chennai, dispatched Pan-India",
    "Low MOQs starting from 50 units",
    "Physical sample-approval before bulk production",
    "Itemised pricing with zero hidden plate fees",
    "Contact Palaniappan: 98405 01323 · Periyanan: 94444 20367"
  ];
  const [messageIndex, setMessageIndex] = useState(0);
  // Starts fully populated with the first message (rather than "") so
  // prerendered/non-JS-crawler HTML isn't missing this content on first paint.
  const [displayedText, setDisplayedText] = useState(messages[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
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
  }, [displayedText, isDeleting, messageIndex]);

  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 mix-blend-multiply"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_054418_a6d194f0-ac86-4df9-abe5-ded73e596d7c.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-[#F7F5F1]/30 z-0"></div>

      <div className="relative z-10 text-center px-4 md:px-16 w-full max-w-5xl mx-auto flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center gap-3 fade-in-up">
          <BrandLogo variant="hero" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8522C] bg-[#F7F5F1]/90 backdrop-blur-xs px-4 py-1 rounded-full border border-black/10 shadow-xs">
            Chennai-Based Manufacturer · Pan-India Dispatch
          </span>
        </div>

        <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-[76px] text-[#1b1c1a] font-semibold leading-[1.08] tracking-[-0.02em] mb-6 fade-in-up">
          Shipping-Ready Packaging, <br className="hidden sm:inline" /> Made in Chennai, Tamil Nadu. <br className="hidden sm:inline" /> Shipped Pan-India.
        </h1>

        <p className="font-body text-base md:text-xl text-[#444748] max-w-2xl mx-auto leading-relaxed mb-8 fade-in-up">
          Mailer boxes, cartons, courier bags and food-safe packs — priced and stocked for how you actually ship, not how a catalog assumes you ship.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 fade-in-up">
          <button
            onClick={() => openContact('palaniappan', 'Sample Request from Homepage')}
            className="bg-[#C8522C] text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-black transition-colors rounded-sm cursor-pointer shadow-sm"
          >
            Get a Sample
          </button>
          <Link
            to="/products"
            className="bg-[#F7F5F1] text-[#1b1c1a] border border-black/25 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:border-black transition-colors rounded-sm cursor-pointer shadow-xs inline-block"
          >
            See Pricing & Products
          </Link>
        </div>

        {/* Typing Component */}
        <Link
          to="/products"
          className="p-4 bg-[#F7F5F1]/90 backdrop-blur-sm border border-black/15 font-nokia text-xs md:text-sm text-[#1b1c1a] max-w-lg w-full mx-auto shadow-sm cursor-pointer hover:border-black/40 transition-all group block"
        >
          <div className="flex items-center justify-between text-[10px] text-[#747878] uppercase mb-1.5 font-sans tracking-widest border-b border-black/10 pb-1">
            <span>Live Dispatch Status</span>
            <span className="text-[#C8522C] font-semibold group-hover:underline">Explore Products →</span>
          </div>
          <div className="min-h-[24px] flex items-center justify-center font-semibold">
            <span className="typing-cursor text-[#1b1c1a]">{displayedText}</span>
          </div>
        </Link>
      </div>
    </section>
  );
};
