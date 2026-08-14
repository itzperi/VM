import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Send } from 'lucide-react';
import { getBlogPostBySlug } from '../data/blogPosts';
import { PRODUCTS, slugify } from '../data/products';
import { ProductItem } from '../types';
import { NotFound } from './NotFound';

const AUTHOR_BY_CATEGORY: Record<string, string> = {
  d2c: 'Palaniappan, D2C & Domestic Brand Specialist',
  food: 'Periyanan, Export Logistics & Food Lead',
  export: 'Periyanan, Export Logistics & Food Lead',
  general: 'Visalatchi Manufactures',
};

interface BlogPostViewProps {
  openContact: (recipient?: 'palaniappan' | 'periyanan', noteOrProduct?: string | ProductItem) => void;
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({ openContact }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  const relatedProducts = PRODUCTS.filter((p) => post.relatedProductIds.includes(p.id));
  const recipient = post.category === 'd2c' ? 'palaniappan' : post.category === 'food' || post.category === 'export' ? 'periyanan' : 'general';

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20 animate-in fade-in duration-300">
      <nav className="text-[11px] font-body text-[#747878] mb-8 uppercase tracking-wider">
        <Link to="/" className="hover:text-[#C8522C]">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/blog" className="hover:text-[#C8522C]">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-[#1b1c1a]">{post.title}</span>
      </nav>

      <div className="border-b border-black/15 pb-8 mb-10">
        <h1 className="font-serif-display text-3xl md:text-4xl text-[#1b1c1a] font-medium mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-xs text-[#747878]">
          <span>By {AUTHOR_BY_CATEGORY[post.category]}</span>
          <span>·</span>
          <span>
            {new Date(post.publishDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
        </div>
      </div>

      <div className="space-y-5 font-body text-sm text-[#1b1c1a] leading-relaxed">
        {post.content.map((block, idx) => {
          if (block.type === 'heading') {
            return (
              <h2 key={idx} className="font-serif-display text-xl md:text-2xl text-[#1b1c1a] font-medium pt-3">
                {block.text}
              </h2>
            );
          }
          if (block.type === 'list') {
            return (
              <ul key={idx} className="list-disc pl-5 space-y-1.5 text-[#444748]">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }
          if (block.type === 'table') {
            return (
              <div key={idx} className="overflow-x-auto border border-black/15 bg-[#F7F5F1] rounded-sm">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#EAE8E4] border-b border-black/15 font-semibold uppercase tracking-wider text-[#1b1c1a]">
                      {block.headers.map((h, i) => (
                        <th key={i} className="p-3">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/10 text-[#444748]">
                    {block.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c} className="p-3">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          return (
            <p key={idx} className="text-[#444748]">
              {block.text}
            </p>
          );
        })}
      </div>

      {post.sources && post.sources.length > 0 && (
        <div className="mt-10 pt-6 border-t border-black/10 text-xs text-[#747878]">
          <div className="font-semibold text-[#1b1c1a] mb-2 uppercase tracking-wider text-[10px]">Sources</div>
          <ul className="space-y-1">
            {post.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-[#C8522C] hover:underline">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h3 className="font-serif-display text-lg text-[#1b1c1a] font-medium mb-4">Related products</h3>
          <div className="flex flex-wrap gap-3">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                to={`/products/${slugify(p.name)}`}
                className="text-xs font-semibold text-[#C8522C] bg-[#C8522C]/10 px-3 py-1.5 rounded-full hover:bg-[#C8522C]/20 transition-colors"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 bg-[#1b1c1a] text-white p-8 rounded-sm text-center space-y-4">
        <h3 className="font-serif-display text-xl font-medium">Have a question about your specific order?</h3>
        <button
          onClick={() => openContact(recipient === 'general' ? 'palaniappan' : recipient, `Question from blog post: ${post.title}`)}
          className="bg-[#C8522C] text-white px-8 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm cursor-pointer inline-flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Ask Our Team</span>
        </button>
      </div>
    </div>
  );
};
