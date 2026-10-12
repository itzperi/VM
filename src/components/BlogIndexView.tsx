import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogPosts';

const CATEGORY_LABEL: Record<string, string> = {
  d2c: 'D2C & E-Commerce',
  food: 'Food & FMCG',
  export: 'Export',
  general: 'General',
};

export const BlogIndexView: React.FC = () => {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20 animate-in fade-in duration-300">
      <div className="border-b border-black/10 pb-8 mb-10 text-center">
        <span className="text-sm font-medium text-[#0068c9] mb-3 block">
          Packaging Guides & Resources
        </span>
        <h1 className="font-serif-display text-3xl md:text-5xl text-[#111111] font-medium mb-4">
          From Our Chennai Factory Floor
        </h1>
        <p className="font-body text-base text-[#615d59] max-w-xl mx-auto leading-relaxed">
          Practical guides on MOQs, material specs, and compliance, written from what we actually
          see building packaging every day, not generic advice.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block bg-white border border-black/10 p-6 md:p-8 rounded-xl hover:border-[#0075de] transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold text-[#0068c9] bg-[#e6f3fe] px-2.5 py-1 rounded-full">
                {CATEGORY_LABEL[post.category]}
              </span>
              <span className="text-[11px] text-[#696969]">
                {new Date(post.publishDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
              </span>
            </div>
            <h2 className="font-serif-display text-xl md:text-2xl text-[#111111] font-medium mb-2">
              {post.title}
            </h2>
            <p className="font-body text-sm text-[#615d59] leading-relaxed">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
