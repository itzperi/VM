import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { getTeamMember } from '../data/team';
import { BLOG_POSTS } from '../data/blogPosts';
import { NotFound } from './NotFound';

/** Author / specialist profile page. Facts shown are only those already
 * published on the site; background appears once the owner supplies it. */
export const TeamMemberView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = slug ? getTeamMember(slug) : undefined;
  if (!member) return <NotFound />;

  const posts = BLOG_POSTS.filter((p) => member.authorCategories.includes(p.category));

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-8 py-10 md:py-16">
      <span className="text-xs font-semibold uppercase tracking-widest text-[#B04724] mb-2 block">
        Visalatchi Manufactures · Chennai
      </span>
      <h1 className="font-serif-display text-3xl md:text-5xl text-[#1b1c1a] font-medium mb-2">{member.name}</h1>
      <p className="text-sm font-semibold uppercase tracking-wider text-[#444748] mb-6">{member.jobTitle}</p>

      <p className="font-body text-base text-[#1b1c1a] leading-relaxed mb-4">
        {member.name} is the {member.jobTitle} at Visalatchi Manufactures, a bulk corrugated packaging manufacturer in
        Thiruvottiyur, Chennai. {member.focus}
      </p>
      {member.background && (
        <p className="font-body text-sm text-[#444748] leading-relaxed mb-4">{member.background}</p>
      )}

      <div className="bg-[#F7F5F1] border border-black/15 rounded-sm p-5 text-sm space-y-2 mb-10">
        <div className="flex justify-between gap-4">
          <span className="text-[#616565]">Direct line / WhatsApp</span>
          <a href={`tel:${member.phoneE164}`} className="font-mono font-semibold text-[#B04724] hover:underline inline-flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" /> {member.phone}
          </a>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-[#616565]">Languages</span>
          <span className="font-semibold text-[#1b1c1a]">{member.languages.join(', ')}</span>
        </div>
        {member.linkedIn && (
          <div className="flex justify-between gap-4">
            <span className="text-[#616565]">LinkedIn</span>
            <a href={member.linkedIn} rel="noopener noreferrer" target="_blank" className="font-semibold text-[#B04724] hover:underline">Profile</a>
          </div>
        )}
      </div>

      {posts.length > 0 && (
        <section>
          <h2 className="font-serif-display text-2xl text-[#1b1c1a] font-medium mb-4">Guides by {member.name}</h2>
          <ul className="space-y-2">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link to={`/blog/${p.slug}`} className="text-sm font-semibold text-[#1b1c1a] hover:text-[#B04724]">
                  {p.title} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};
