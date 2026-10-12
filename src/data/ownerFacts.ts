// Facts only the owner can supply. Every field is empty until confirmed, and
// components/schema only render a field once it has a real value, so nothing
// here can leak a placeholder onto the site. Fill these in to unlock the
// remaining E-E-A-T / GEO signals (see docs/seo-plan/PROMPT-10-OUT-OF-10.md).
export interface Certification {
  name: string; // e.g. 'ISO 9001:2015'
  issuer?: string;
  /** Link to a copy or verification page. */
  url?: string;
}

export const OWNER_FACTS = {
  /** TODO(owner): business email for enquiries, e.g. sales@visalatchimanufacturing.com */
  email: '',
  /** TODO(owner): founding year, e.g. '2025' */
  foundingYear: '',
  /** TODO(owner): production capacity, e.g. '20,000 boxes per day' */
  capacity: '',
  /** TODO(owner): main machinery, e.g. ['Automatic corrugator', '4-colour flexo printer-slotter'] */
  machinery: [] as string[],
  /** TODO(owner): ply / board range actually produced, e.g. '3, 5 and 7-ply; 16-35 BF' */
  boardRange: '',
  /** TODO(owner): certifications actually held (attach copies) */
  certifications: [] as Certification[],
  /** TODO(owner): lead time from sample approval, e.g. '12-15 working days' */
  leadTimeLarge: '',
  leadTimeSmall: '',
  /** TODO(owner): number of employees (optional) */
  numberOfEmployees: '',
  /** TODO(owner): Google Search Console HTML-tag verification token (content="..." value) */
  googleSiteVerification: '',
};
