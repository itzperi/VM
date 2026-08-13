import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const PathSelector: React.FC = () => {
  const paths: { id: string; num: string; title: string; desc: string; buttonText: string; to: string }[] = [
    {
      id: 'd2c',
      num: '01',
      title: 'I ship D2C orders',
      desc: 'Damage-resistant mailers and cartons, low MOQs from 50 units, fast dispatch for sale-day spikes.',
      buttonText: 'See D2C Packaging',
      to: '/d2c-packaging',
    },
    {
      id: 'food',
      num: '02',
      title: 'I manufacture food or FMCG products',
      desc: 'Food-safe, moisture-resistant packaging built for shelf life and FSSAI compliance needs.',
      buttonText: 'See Food Packaging',
      to: '/food-packaging',
    },
    {
      id: 'export',
      num: '03',
      title: 'I export internationally',
      desc: 'Packaging specced to your buyer\'s compliance requirements and shipping timelines.',
      buttonText: 'See Export Packaging',
      to: '/export-packaging',
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-24">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C8522C] mb-2 block">
          Tailored Manufacturing Routes
        </span>
        <h2 className="font-serif-display text-3xl md:text-5xl text-[#1b1c1a] font-medium">
          What kind of business are you running?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-black/15">
        {paths.map((path) => (
          <Link
            key={path.id}
            to={path.to}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group relative p-8 md:p-10 border-b border-r border-black/15 bg-transparent hover:bg-[#EAE8E4]/70 transition-colors duration-500 min-h-[380px] flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="font-serif-display text-4xl md:text-5xl text-black/20 group-hover:text-[#C8522C] transition-colors duration-300 mb-6">
                {path.num}
              </div>

              <h3 className="font-serif-display text-2xl text-[#1b1c1a] font-medium mb-3 leading-snug">
                {path.title}
              </h3>

              <p className="font-body text-sm text-[#444748] mb-8 leading-relaxed">
                {path.desc}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#1b1c1a] border-b border-black/30 pb-1 group-hover:border-[#C8522C] group-hover:text-[#C8522C] transition-all">
              <span>{path.buttonText}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
