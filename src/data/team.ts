import { BlogPost } from '../types';

// The two named specialists already published across the site (contact page,
// schema contactPoint, blog bylines). Only facts already stated on the site
// are used here; experience/background stays empty until the owner supplies it.
export interface TeamMember {
  slug: string;
  name: string;
  jobTitle: string;
  phone: string; // display format
  phoneE164: string;
  languages: string[];
  /** What this person handles, as already described on the About page. */
  focus: string;
  /** Blog categories this person writes for. */
  authorCategories: BlogPost['category'][];
  /** TODO(owner): years of experience / background, shown only when filled. */
  background: string;
  /** TODO(owner): personal LinkedIn URL, used for Person.sameAs when filled. */
  linkedIn: string;
}

export const TEAM: TeamMember[] = [
  {
    slug: 'palaniappan',
    name: 'Palaniappan',
    jobTitle: 'D2C & Domestic Brand Specialist',
    phone: '98405 01323',
    phoneE164: '+919840501323',
    languages: ['English', 'Tamil'],
    focus:
      'Handles D2C mailer boxes, custom printed cartons, courier mailers and domestic brand orders, from first specification and pre-production sample through to bulk production and dispatch.',
    authorCategories: ['d2c'],
    background: '',
    linkedIn: '',
  },
  {
    slug: 'periyanan',
    name: 'Periyanan',
    jobTitle: 'Export Logistics & Food Lead',
    phone: '94444 20367',
    phoneE164: '+919444420367',
    languages: ['English', 'Tamil'],
    focus:
      'Oversees export master cartons, container loading and pallet optimisation, food-grade packaging specifications and compliance documentation requests for food, FMCG and export buyers.',
    authorCategories: ['food', 'export'],
    background: '',
    linkedIn: '',
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return TEAM.find((m) => m.slug === slug);
}

/** The person credited for a blog category, or undefined for org-authored posts. */
export function authorForCategory(category: BlogPost['category']): TeamMember | undefined {
  return TEAM.find((m) => m.authorCategories.includes(category));
}
