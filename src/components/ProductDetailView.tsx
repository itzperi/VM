import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Send, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, slugify, bestForById } from '../data/products';
import { getProductDetail } from '../data/productDetails';
import { getBlogPostBySlug } from '../data/blogPosts';
import { getLandingPage } from '../data/landingPages';
import { ProductItem } from '../types';
import { NotFound } from './NotFound';

interface ProductDetailViewProps {
  openContact: (recipient?: 'palaniappan' | 'periyanan', noteOrProduct?: string | ProductItem) => void;
}

const CATEGORY_LABEL: Record<ProductItem['category'], string> = {
  d2c: 'D2C & E-Commerce Packaging',
  food: 'Food Safe & FMCG Packaging',
  appliance: 'Appliance & Electronics Packaging',
  export: 'Export Packaging',
  tapes: 'Packaging Accessories',
};

// Landing pages that aren't LANDING_PAGES entries (division pages).
const STATIC_LANDING_LABEL: Record<string, string> = {
  '/export-packaging': 'Export packaging and master cartons',
};

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ openContact }) => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => slugify(p.name) === slug);

  if (!product) {
    return <NotFound />;
  }

  const detail = getProductDetail(product.id);
  // The next three in the category, wrapping around, so every product gets
  // linked from its siblings (a fixed slice(0, 3) left later products orphaned).
  const siblings = PRODUCTS.filter((p) => p.category === product.category);
  const at = siblings.findIndex((p) => p.id === product.id);
  const related = [...siblings.slice(at + 1), ...siblings.slice(0, at)].slice(0, 3);
  const moq = product.moq.toLocaleString('en-IN');
  const recipient = product.category === 'food' || product.category === 'export' ? 'periyanan' : 'palaniappan';
  const landing = detail ? getLandingPage(detail.landingPath) : undefined;
  const landingLabel = detail ? (landing?.h1 ?? STATIC_LANDING_LABEL[detail.landingPath]) : undefined;
  const guides = detail ? detail.relatedPostSlugs.map((s) => getBlogPostBySlug(s)).filter((p): p is NonNullable<typeof p> => !!p) : [];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-14 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
        <div className="h-72 md:h-96 w-full overflow-hidden rounded-sm bg-[#EAE8E4] relative">
          <img
            src={product.image}
            alt={`${product.name}, ${product.material}`}
            width={800}
            height={600}
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          {product.ecoFriendly && (
            <div className="absolute top-4 left-4 bg-[#B04724] text-white text-[10px] font-semibold px-2 py-1 rounded-sm uppercase tracking-wider">
              Eco Option
            </div>
          )}
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B04724] mb-2 block">
            {CATEGORY_LABEL[product.category]}
          </span>
          <h1 className="font-serif-display text-3xl md:text-4xl text-[#1b1c1a] font-medium mb-4">
            {product.name}
          </h1>
          {detail && (
            <p className="speakable font-body text-base text-[#1b1c1a] leading-relaxed mb-4">{detail.answer}</p>
          )}
          <p className="font-body text-sm text-[#444748] leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="bg-[#F7F5F1] border border-black/15 rounded-sm p-5 space-y-2.5 text-sm mb-6">
            <div className="flex justify-between border-b border-black/10 pb-2">
              <span className="text-[#616565]">Minimum Order</span>
              <span className="font-semibold text-[#1b1c1a]">{moq} units</span>
            </div>
            <div className="flex justify-between border-b border-black/10 pb-2">
              <span className="text-[#616565]">Pricing</span>
              <span className="font-mono font-bold text-[#B04724]">{product.startingPrice}</span>
            </div>
            <div className="flex justify-between border-b border-black/10 pb-2">
              <span className="text-[#616565]">Material</span>
              <span className="font-semibold text-[#1b1c1a] text-right max-w-[220px]">{product.material}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#616565]">Lead Time</span>
              <span className="font-semibold text-[#1b1c1a]">{product.leadTime}</span>
            </div>
          </div>

          {bestForById(product.id) && (
            <p className="text-xs text-[#616565] mb-6">
              <span className="font-semibold text-[#1b1c1a]">Best for: </span>
              {bestForById(product.id)}
            </p>
          )}

          <button
            onClick={() => openContact(recipient, `Bulk quote request: ${product.name} (MOQ ${moq})`)}
            className="w-full bg-[#B04724] text-white py-3.5 px-4 text-xs font-semibold uppercase tracking-widest hover:bg-black transition-colors rounded-sm cursor-pointer flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Request a Bulk Quote ({moq}+ units)</span>
          </button>
        </div>
      </div>

      {detail && (
        <>
          <section className="mb-12">
            <h2 className="font-serif-display text-2xl text-[#1b1c1a] font-medium mb-4">Who uses this {product.name.toLowerCase()}?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {detail.useCases.map((u) => (
                <li key={u} className="flex items-start gap-2.5 bg-[#F7F5F1] border border-black/10 p-3.5 rounded-sm text-xs text-[#444748]">
                  <CheckCircle2 className="w-4 h-4 text-[#B04724] shrink-0 mt-0.5" />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif-display text-2xl text-[#1b1c1a] font-medium mb-4">Which specification should you choose?</h2>
            <div className="overflow-x-auto border border-black/15 bg-[#F7F5F1] rounded-sm">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#EAE8E4] border-b border-black/15 font-semibold uppercase tracking-wider text-[#1b1c1a]">
                    {detail.specTable.headers.map((h) => <th key={h} className="p-3">{h}</th>)}
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10 text-[#444748]">
                  {detail.specTable.rows.map((row) => (
                    <tr key={row.join('|')}>
                      {row.map((c, i) => <td key={i} className={`p-3 ${i === 0 ? 'font-semibold text-[#1b1c1a]' : ''}`}>{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}

      <section className="mb-12">
        <h2 className="font-serif-display text-2xl text-[#1b1c1a] font-medium mb-4">What features come as standard?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {product.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2.5 bg-[#F7F5F1] border border-black/10 p-3.5 rounded-sm">
              <CheckCircle2 className="w-4 h-4 text-[#B04724] shrink-0 mt-0.5" />
              <span className="text-xs text-[#444748]">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {detail && (
        <>
          <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-serif-display text-2xl text-[#1b1c1a] font-medium mb-4">What can be printed?</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#444748]">
                {detail.printOptions.map((o) => <li key={o}>{o}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="font-serif-display text-2xl text-[#1b1c1a] font-medium mb-4">How do you order?</h2>
              <ol className="list-decimal pl-5 space-y-1.5 text-sm text-[#444748]">
                {detail.orderSteps.map((s) => <li key={s}>{s}</li>)}
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-serif-display text-2xl text-[#1b1c1a] font-medium mb-3">How is it packed and dispatched?</h2>
            <p className="text-sm text-[#444748] leading-relaxed">{detail.packingDispatch}</p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif-display text-2xl text-[#1b1c1a] font-medium mb-4">Frequently asked questions</h2>
            <div className="space-y-3">
              {detail.faqs.map((f) => (
                <div key={f.q} className="bg-[#F7F5F1] border border-black/15 p-5 rounded-sm">
                  <h3 className="font-serif-display text-base text-[#1b1c1a] font-semibold mb-2">{f.q}</h3>
                  <p className="text-sm text-[#444748] leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 bg-[#EAE8E4] border border-black/10 rounded-sm p-6">
            <h2 className="font-serif-display text-xl text-[#1b1c1a] font-medium mb-3">Related pages and guides</h2>
            <ul className="space-y-2 text-sm">
              {landingLabel && (
                <li>
                  <Link to={detail.landingPath} className="font-semibold text-[#B04724] hover:underline">{landingLabel} →</Link>
                </li>
              )}
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link to={`/blog/${g.slug}`} className="text-[#1b1c1a] hover:text-[#B04724]">{g.title} →</Link>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      {related.length > 0 && (
        <section>
          <h2 className="font-serif-display text-2xl text-[#1b1c1a] font-medium mb-5">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/products/${slugify(p.name)}`}
                className="bg-[#F7F5F1] border border-black/15 rounded-sm overflow-hidden hover:border-[#B04724] transition-colors block"
              >
                <div className="h-32 w-full overflow-hidden bg-[#EAE8E4]">
                  <img src={p.image} alt={`${p.name}, ${p.material}`} width={800} height={600} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-serif-display text-sm text-[#1b1c1a] font-semibold mb-1">{p.name}</h3>
                  <span className="font-mono text-xs font-bold text-[#B04724]">MOQ {p.moq.toLocaleString('en-IN')}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
