import React from 'react';
import { ArrowRight } from 'lucide-react';

// The four order steps as accent pills on the canvas, looping like a ticker.
const STEPS = [
  { label: 'Choose', cls: 'bg-[#ffb110] text-[#111111]' },
  { label: 'Sample', cls: 'bg-[#f64932] text-[#111111]' },
  { label: 'Produce', cls: 'bg-[#62aef0] text-[#111111]' },
  { label: 'Ship', cls: 'bg-[#02093a] text-white' },
];

export const ProcessMarquee: React.FC = () => (
  <section className="w-full py-10 md:py-16 overflow-hidden flex items-center select-none" aria-label="Order steps: choose, sample, produce, ship">
    <div className="kinetic-scroll-container w-full font-serif-display text-2xl md:text-4xl" aria-hidden="true">
      <div className="kinetic-scroll-content flex gap-4 md:gap-6 items-center px-4">
        {[0, 1, 2].flatMap((loop) =>
          STEPS.map((s) => (
            <React.Fragment key={`${loop}-${s.label}`}>
              <span className={`${s.cls} px-6 md:px-8 py-2 md:py-3 rounded-full`}>{s.label}</span>
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-black/30 shrink-0" />
            </React.Fragment>
          )),
        )}
      </div>
    </div>
  </section>
);
