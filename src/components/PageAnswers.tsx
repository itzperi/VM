import React from 'react';
import { useLocation } from 'react-router-dom';
import { getPageAnswers } from '../data/pageAnswers';

/** Answer-first Q&A block for pages without their own FAQ. The same items are
 * emitted as FAQPage JSON-LD in routes.ts. Renders nothing elsewhere. */
export const PageAnswers: React.FC = () => {
  const { pathname } = useLocation();
  const answers = getPageAnswers(pathname);
  if (!answers) return null;

  return (
    <section className="w-full max-w-4xl mx-auto px-4 md:px-8 pb-12 md:pb-16" aria-labelledby="page-answers-heading">
      <h2 id="page-answers-heading" className="font-serif-display text-2xl md:text-3xl text-[#111111] font-medium mb-6">
        {answers.heading}
      </h2>
      <div className="space-y-6">
        {answers.items.map((item, i) => (
          <div key={item.q} className="border-t border-black/10 pt-5">
            <h3 className="font-sans text-base font-semibold text-[#111111] mb-2">{item.q}</h3>
            <p className={`${i === 0 ? 'speakable ' : ''}font-body text-sm text-[#615d59] leading-relaxed`}>{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
