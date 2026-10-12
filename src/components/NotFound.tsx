import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => (
  <div className="w-full max-w-2xl mx-auto px-4 py-24 md:py-32 text-center">
    <h1 className="font-serif-display text-4xl md:text-6xl text-[#111111] font-medium mb-4">
      Page Not Found
    </h1>
    <p className="font-body text-base text-[#615d59] mb-8">
      That page doesn't exist. Here are a couple of places to start instead.
    </p>
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Link
        to="/"
        className="bg-[#0075de] text-white px-6 py-3 text-sm font-medium hover:bg-[#005bab] transition-colors rounded-lg"
      >
        Back to Home
      </Link>
      <Link
        to="/products"
        className="bg-white text-[#111111] border border-black/10 px-6 py-3 text-sm font-medium hover:border-black/40 transition-colors rounded-lg"
      >
        See Products
      </Link>
    </div>
  </div>
);
