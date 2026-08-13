import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => (
  <div className="w-full max-w-2xl mx-auto px-4 py-24 md:py-32 text-center">
    <h1 className="font-serif-display text-4xl md:text-6xl text-[#1b1c1a] font-medium mb-4">
      Page Not Found
    </h1>
    <p className="font-body text-base text-[#444748] mb-8">
      That page doesn't exist. Here are a couple of places to start instead.
    </p>
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Link
        to="/"
        className="bg-[#C8522C] text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-black transition-colors rounded-sm"
      >
        Back to Home
      </Link>
      <Link
        to="/products"
        className="bg-[#F7F5F1] text-[#1b1c1a] border border-black/25 px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:border-black transition-colors rounded-sm"
      >
        See Products
      </Link>
    </div>
  </div>
);
