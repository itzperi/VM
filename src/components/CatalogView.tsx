import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, buildPriceListRows, slugify } from '../data/products';
import { ProductItem } from '../types';
import { Search, Send, Filter, CheckCircle2 } from 'lucide-react';

interface CatalogViewProps {
  openContact: (recipient?: 'palaniappan' | 'periyanan', noteOrProduct?: string | ProductItem) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({ openContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.material.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const fullPriceList = buildPriceListRows();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 py-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-black/15 pb-8 mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C8522C] mb-2 block">
          Transparent Factory Direct Pricing
        </span>
        <h1 className="font-serif-display text-3xl md:text-5xl text-[#1b1c1a] font-medium mb-3">
          Packaging Products & Pricing
        </h1>
        <p className="font-body text-base text-[#444748] max-w-2xl leading-relaxed">
          From D2C mailers to food-safe takeaway packs to export-ready cartons — one catalog, transparent pricing, no hidden charges.
        </p>
      </div>

      {/* Full Master Price Table */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h2 className="font-serif-display text-2xl text-[#1b1c1a] font-medium">
            Full Price List
          </h2>
          <span className="text-xs text-[#747878]">Ex-GST rates at MOQ, pan-India dispatch</span>
        </div>

        <div className="overflow-x-auto border border-black/15 bg-[#F7F5F1] rounded-sm shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#EAE8E4] border-b border-black/15 text-xs font-semibold uppercase tracking-wider text-[#1b1c1a]">
                <th className="p-4">Product</th>
                <th className="p-4">Best For</th>
                <th className="p-4">MOQ</th>
                <th className="p-4">Lead Time</th>
                <th className="p-4">Price / Unit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10 text-xs font-body text-[#1b1c1a]">
              {fullPriceList.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#EAE8E4]/50 transition-colors">
                  <td className="p-4 font-semibold text-[#1b1c1a] font-serif-display text-sm">{row.name}</td>
                  <td className="p-4 text-[#444748] max-w-xs">{row.bestFor}</td>
                  <td className="p-4 font-mono font-semibold text-[#C8522C]">{row.moq}</td>
                  <td className="p-4 text-[#444748]">{row.leadTime}</td>
                  <td className="p-4 font-mono font-bold text-base text-[#1b1c1a]">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-[#747878] mt-3 italic">
          *Starting unit prices for the smallest listed size/quantity at each product's reference MOQ, ex-GST, inclusive of Visalatchi's standard ₹2/unit margin. Final price depends on size, finish, print colours and order quantity — confirmed on formal quotation.
        </p>
      </div>

      {/* Format Category Breakdowns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-[#EAE8E4] p-6 rounded-sm border border-black/10">
          <h3 className="font-serif-display text-lg text-[#1b1c1a] font-semibold mb-2">
            Shipping & Mailer Boxes
          </h3>
          <p className="text-xs text-[#444748] leading-relaxed">
            Mailer boxes and corrugated shipping cartons are crush-tested for courier handling, with brandable interior or exterior print so your unboxing stays on-brand without needing a separate insert. Mailer boxes start from 50 units, making them practical for brands still testing a new SKU size. Corrugated shipping boxes suit higher-volume, general e-commerce or B2B warehouse dispatch at 500-unit MOQ.
          </p>
        </div>

        <div className="bg-[#EAE8E4] p-6 rounded-sm border border-black/10">
          <h3 className="font-serif-display text-lg text-[#1b1c1a] font-semibold mb-2">
            Courier & Padded Mailers
          </h3>
          <p className="text-xs text-[#444748] leading-relaxed">
            Courier and return mailers, along with paper and padded mailers, are built with tamper-evident seals and padded options where needed — reducing transit damage on apparel, books, jewellery and small electronics. Courier mailers are priced for high-volume dispatch at ₹10/unit from 1,000 units; padded formats suit lower-volume, higher-value items from 100 units.
          </p>
        </div>

        <div className="bg-[#EAE8E4] p-6 rounded-sm border border-black/10">
          <h3 className="font-serif-display text-lg text-[#1b1c1a] font-semibold mb-2">
            Food Delivery & Eco Packaging
          </h3>
          <p className="text-xs text-[#444748] leading-relaxed">
            Food delivery boxes and bagasse containers use grease- and moisture-resistant materials suited to hot food, curries, and cloud-kitchen dispatch. Paper bowls and food containers extend this to a fully compostable option for curries, biryani, rice, noodles, salads and desserts. Custom printed paper carry bags round out the eco range for bakeries, cafes, retail, and gifting use.
          </p>
        </div>
      </div>

      {/* Product Search & Filter Cards */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'd2c', label: 'D2C & E-Commerce' },
              { id: 'food', label: 'Food Safe & FMCG' },
              { id: 'export', label: 'Export Masters' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm cursor-pointer whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#1b1c1a] text-white'
                    : 'bg-[#EAE8E4] text-[#1b1c1a] hover:bg-black/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#747878]" />
            <input
              type="text"
              placeholder="Search catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#EAE8E4] border border-black/15 pl-9 pr-3 py-2 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#C8522C]"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#F7F5F1] border border-black/15 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#C8522C] transition-colors"
            >
              <Link to={`/products/${slugify(product.name)}`} className="block">
                <div className="h-48 w-full overflow-hidden relative bg-[#EAE8E4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#1b1c1a] text-white text-[10px] font-mono px-2 py-1 rounded-sm uppercase tracking-wider">
                    MOQ: {product.moq}
                  </div>
                  {product.ecoFriendly && (
                    <div className="absolute top-3 left-3 bg-[#C8522C] text-white text-[10px] font-semibold px-2 py-1 rounded-sm uppercase tracking-wider">
                      Eco Option
                    </div>
                  )}
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif-display text-lg text-[#1b1c1a] font-semibold leading-snug hover:text-[#C8522C] transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <p className="font-body text-xs text-[#444748] line-clamp-2">
                    {product.description}
                  </p>

                  <div className="pt-2 border-t border-black/10 space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#747878]">Material Spec:</span>
                      <span className="font-semibold text-[#1b1c1a] text-right max-w-[180px] truncate">{product.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#747878]">Lead Time:</span>
                      <span className="font-semibold text-[#1b1c1a]">{product.leadTime}</span>
                    </div>
                    <div className="flex justify-between text-[#C8522C]">
                      <span>Starting Price:</span>
                      <span className="font-mono font-bold text-sm">{product.startingPrice}</span>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="p-5 pt-0">
                <button
                  onClick={() => openContact('palaniappan', product)}
                  className="w-full bg-[#1b1c1a] text-white py-2.5 px-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#C8522C] transition-colors rounded-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Product Quote</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Catalog CTA */}
      <div className="bg-[#EAE8E4] border border-black/15 p-8 rounded-sm text-center max-w-3xl mx-auto space-y-4">
        <h3 className="font-serif-display text-2xl text-[#1b1c1a] font-medium">
          Not sure which format fits your product?
        </h3>
        <p className="font-body text-xs text-[#444748] max-w-md mx-auto">
          Share your item size, monthly volume and target start date — we'll recommend the right pack and turn it into a firm quote.
        </p>
        <button
          onClick={() => openContact('general', 'Custom format recommendation request')}
          className="bg-[#C8522C] text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-black transition-colors rounded-sm cursor-pointer inline-flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Ask Our Engineers</span>
        </button>
      </div>
    </div>
  );
};
