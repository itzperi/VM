import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Send, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, slugify, bestForById } from '../data/products';
import { ProductItem } from '../types';
import { NotFound } from './NotFound';

interface ProductDetailViewProps {
  openContact: (recipient?: 'palaniappan' | 'periyanan', noteOrProduct?: string | ProductItem) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ openContact }) => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => slugify(p.name) === slug);

  if (!product) {
    return <NotFound />;
  }

  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20 animate-in fade-in duration-300">
      <nav className="text-[11px] font-body text-[#747878] mb-8 uppercase tracking-wider">
        <Link to="/" className="hover:text-[#C8522C]">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-[#C8522C]">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-[#1b1c1a]">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="h-72 md:h-96 w-full overflow-hidden rounded-sm bg-[#EAE8E4] relative">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          {product.ecoFriendly && (
            <div className="absolute top-4 left-4 bg-[#C8522C] text-white text-[10px] font-semibold px-2 py-1 rounded-sm uppercase tracking-wider">
              Eco Option
            </div>
          )}
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C8522C] mb-2 block">
            {product.category === 'd2c' ? 'D2C & E-Commerce Packaging' : product.category === 'food' ? 'Food Safe & FMCG Packaging' : 'Export Packaging'}
          </span>
          <h1 className="font-serif-display text-3xl md:text-4xl text-[#1b1c1a] font-medium mb-4">
            {product.name}
          </h1>
          <p className="font-body text-sm text-[#444748] leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="bg-[#F7F5F1] border border-black/15 rounded-sm p-5 space-y-2.5 text-sm mb-6">
            <div className="flex justify-between border-b border-black/10 pb-2">
              <span className="text-[#747878]">Starting Price</span>
              <span className="font-mono font-bold text-[#C8522C]">{product.startingPrice}</span>
            </div>
            <div className="flex justify-between border-b border-black/10 pb-2">
              <span className="text-[#747878]">Minimum Order</span>
              <span className="font-semibold text-[#1b1c1a]">{product.moq.toLocaleString('en-IN')} units</span>
            </div>
            <div className="flex justify-between border-b border-black/10 pb-2">
              <span className="text-[#747878]">Material</span>
              <span className="font-semibold text-[#1b1c1a] text-right max-w-[220px]">{product.material}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#747878]">Lead Time</span>
              <span className="font-semibold text-[#1b1c1a]">{product.leadTime}</span>
            </div>
          </div>

          {bestForById(product.id) && (
            <p className="text-xs text-[#747878] mb-6">
              <span className="font-semibold text-[#1b1c1a]">Best for: </span>
              {bestForById(product.id)}
            </p>
          )}

          <button
            onClick={() => openContact('palaniappan', product)}
            className="w-full bg-[#C8522C] text-white py-3.5 px-4 text-xs font-semibold uppercase tracking-widest hover:bg-black transition-colors rounded-sm cursor-pointer flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Request a Sample and Quote</span>
          </button>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="font-serif-display text-2xl text-[#1b1c1a] font-medium mb-5">
          Product Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {product.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2.5 bg-[#F7F5F1] border border-black/10 p-3.5 rounded-sm">
              <CheckCircle2 className="w-4 h-4 text-[#C8522C] shrink-0 mt-0.5" />
              <span className="text-xs text-[#444748]">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div>
          <h2 className="font-serif-display text-2xl text-[#1b1c1a] font-medium mb-5">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/products/${slugify(p.name)}`}
                className="bg-[#F7F5F1] border border-black/15 rounded-sm overflow-hidden hover:border-[#C8522C] transition-colors block"
              >
                <div className="h-32 w-full overflow-hidden bg-[#EAE8E4]">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-serif-display text-sm text-[#1b1c1a] font-semibold mb-1">{p.name}</h3>
                  <span className="font-mono text-xs font-bold text-[#C8522C]">{p.startingPrice}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
