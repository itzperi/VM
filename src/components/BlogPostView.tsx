import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Send } from 'lucide-react';
import { getBlogPostBySlug } from '../data/blogPosts';
import { PRODUCTS, slugify } from '../data/products';
import { ProductItem } from '../types';
import { NotFound } from './NotFound';
import { authorForCategory } from '../data/team';

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

interface BlogPostViewProps {
  openContact: (recipient?: 'palaniappan' | 'periyanan', noteOrProduct?: string | ProductItem) => void;
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({ openContact }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  const author = authorForCategory(post.category);
  const relatedProducts = PRODUCTS.filter((p) => post.relatedProductIds.includes(p.id));
  const recipient = post.category === 'd2c' ? 'palaniappan' : post.category === 'food' || post.category === 'export' ? 'periyanan' : 'general';

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-8 py-8 md:py-14 animate-in fade-in duration-300">
      <div className="border-b border-black/10 pb-8 mb-10">
        <h1 className="font-serif-display text-3xl md:text-4xl text-[#111111] font-medium mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-xs text-[#696969]">
          <span>
            By{' '}
            {author ? (
              <Link to={`/team/${author.slug}`} rel="author" className="text-[#0068c9] hover:underline">
                {author.name}, {author.jobTitle}
              </Link>
            ) : (
              'Visalatchi Manufactures'
            )}
          </span>
          <span>·</span>
          <span>
            Published <time dateTime={post.publishDate}>{fmtDate(post.publishDate)}</time>
          </span>
          {post.updatedDate && post.updatedDate !== post.publishDate && (
            <>
              <span>·</span>
              <span>
                Updated <time dateTime={post.updatedDate}>{fmtDate(post.updatedDate)}</time>
              </span>
            </>
          )}
        </div>
      </div>

      <div className="space-y-5 font-body text-sm text-[#111111] leading-relaxed">
        {post.content.map((block, idx) => {
          const isLead = idx === 0 && block.type === 'paragraph';
          if (block.type === 'heading') {
            return (
              <h2 key={idx} className="font-serif-display text-xl md:text-2xl text-[#111111] font-medium pt-3">
                {block.text}
              </h2>
            );
          }
          if (block.type === 'list') {
            return (
              <ul key={idx} className="list-disc pl-5 space-y-1.5 text-[#615d59]">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }
          if (block.type === 'table') {
            return (
              <div key={idx} className="overflow-x-auto border border-black/10 bg-white rounded-xl">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#f6f5f4] border-b border-black/10 font-semibold text-[#111111]">
                      {block.headers.map((h, i) => (
                        <th key={i} className="p-3">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/10 text-[#615d59]">
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
            <p key={idx} className={isLead ? 'speakable text-base text-[#111111]' : 'text-[#615d59]'}>
              {block.text}
            </p>
          );
        })}
      </div>

      {post.sources && post.sources.length > 0 && (
        <div className="mt-10 pt-6 border-t border-black/10 text-xs text-[#696969]">
          <h2 className="font-semibold text-[#111111] mb-2 text-[10px]">Sources</h2>
          <ul className="space-y-1">
            {post.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-[#0068c9] hover:underline">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {post.relatedPages.length > 0 && (
        <div className="mt-12 bg-white border border-black/10 rounded-xl p-6">
          <h2 className="font-serif-display text-lg text-[#111111] font-medium mb-3">Where to go next</h2>
          <ul className="space-y-2 text-sm">
            {post.relatedPages.map((rp) => (
              <li key={rp.path}>
                <Link to={rp.path} className="font-semibold text-[#0068c9] hover:underline">{rp.anchor} →</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="font-serif-display text-lg text-[#111111] font-medium mb-4">Related products</h2>
          <div className="flex flex-wrap gap-3">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                to={`/products/${slugify(p.name)}`}
                className="text-xs font-semibold text-[#0068c9] bg-[#e6f3fe] px-3 py-1.5 rounded-full hover:bg-[#d3e9fd] transition-colors"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 bg-[#02093a] text-white p-8 rounded-xl text-center space-y-4">
        <h3 className="font-serif-display text-xl font-medium">Have a question about your specific order?</h3>
        <button
          onClick={() => openContact(recipient === 'general' ? 'palaniappan' : recipient, `Question from blog post: ${post.title}`)}
          className="bg-[#0075de] text-white px-8 py-3 text-sm font-medium hover:bg-[#005bab] transition-colors rounded-lg cursor-pointer inline-flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Ask Our Team</span>
        </button>
      </div>
    </div>
  );
};
