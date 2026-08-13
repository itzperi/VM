import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ProcessMarquee: React.FC = () => {
  const steps = ['CHOOSE', 'SAMPLE', 'PRODUCE', 'SHIP'];

  return (
    <section className="w-full py-12 md:py-20 border-b border-black/15 bg-[#F7F5F1] overflow-hidden flex items-center select-none">
      <div className="kinetic-scroll-container w-full font-serif-display text-4xl md:text-7xl text-[#1b1c1a] opacity-25 font-semibold">
        <div className="kinetic-scroll-content flex gap-8 md:gap-16 items-center px-4">
          {steps.map((step, idx) => (
            <React.Fragment key={`a-${idx}`}>
              <span>{step}</span>
              <ArrowRight className="w-8 h-8 md:w-16 md:h-16 stroke-[1.5]" />
            </React.Fragment>
          ))}
          {/* Duplicate loop for continuous ticker */}
          {steps.map((step, idx) => (
            <React.Fragment key={`b-${idx}`}>
              <span>{step}</span>
              <ArrowRight className="w-8 h-8 md:w-16 md:h-16 stroke-[1.5]" />
            </React.Fragment>
          ))}
          {steps.map((step, idx) => (
            <React.Fragment key={`c-${idx}`}>
              <span>{step}</span>
              <ArrowRight className="w-8 h-8 md:w-16 md:h-16 stroke-[1.5]" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
