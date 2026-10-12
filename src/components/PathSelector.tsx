import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const PathSelector: React.FC = () => {
  // Each route card is a single-hue accent panel (warm-paper system: colour
  // lives in card backgrounds, not in buttons). Text colour is set per card
  // for WCAG AA contrast on that hue.
  const tones = [
    { bg: 'bg-[#ffb110]', text: 'text-[#111111]', soft: 'text-black/75', line: 'border-black/40' },
    { bg: 'bg-[#f64932]', text: 'text-[#111111]', soft: 'text-black/80', line: 'border-black/40' },
    { bg: 'bg-[#62aef0]', text: 'text-[#111111]', soft: 'text-black/75', line: 'border-black/40' },
    { bg: 'bg-[#02093a]', text: 'text-white', soft: 'text-white/80', line: 'border-white/50' },
  ];
  const paths: { id: string; num: string; title: string; desc: string; buttonText: string; to: string }[] = [
    {
      id: 'd2c',
      num: '01',
      title: 'I ship D2C orders',
      desc: 'Damage-resistant mailers and cartons in bulk runs from 10,000 units, scheduled for sale-day and festival spikes.',
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
      id: 'appliance',
      num: '03',
      title: 'I make appliances or electronics',
      desc: 'Heavy-duty 5-ply and 7-ply cartons for TVs, fans, coolers and appliances, built to your product weight. From 5,000 units.',
      buttonText: 'See Appliance Boxes',
      to: '/appliance-packaging-boxes',
    },
    {
      id: 'export',
      num: '04',
      title: 'I export internationally',
      desc: 'Packaging specced to your buyer\'s compliance requirements and shipping timelines.',
      buttonText: 'See Export Packaging',
      to: '/export-packaging',
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-24">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-[#0068c9] mb-3 block">
          Tailored Manufacturing Routes
        </span>
        <h2 className="font-serif-display text-3xl md:text-5xl text-[#111111] font-medium">
          What kind of business are you running?
        </h2>
        <p className="font-body text-sm text-[#615d59] mt-4">
          Large boxes from 5,000 units, small boxes from 10,000.{' '}
          <Link to="/bulk-packaging-boxes" className="text-[#0068c9] font-semibold hover:underline">
            How bulk ordering works →
          </Link>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {paths.map((path, i) => {
          const tone = tones[i % tones.length];
          return (
            <Link
              key={path.id}
              to={path.to}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`group relative p-6 md:p-8 rounded-xl ${tone.bg} min-h-[340px] flex flex-col justify-between cursor-pointer transition-transform duration-200 hover:-translate-y-1`}
            >
              <div>
                <div aria-hidden="true" className={`font-serif-display text-4xl md:text-5xl ${tone.soft} mb-6`}>
                  {path.num}
                </div>
                <h3 className={`font-serif-display text-2xl ${tone.text} mb-3 leading-snug`}>
                  {path.title}
                </h3>
                <p className={`font-body text-sm ${tone.soft} mb-8 leading-relaxed`}>
                  {path.desc}
                </p>
              </div>
              <div className={`inline-flex items-center gap-2 text-sm font-medium ${tone.text} border-b ${tone.line} pb-1 self-start`}>
                <span>{path.buttonText}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
