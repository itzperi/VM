// TODO(owner): real case studies only (anonymised is fine). The /case-studies
// route and its links are registered automatically once this array has at
// least one entry, so there is never an empty or placeholder page online.
export interface CaseStudy {
  slug: string;
  title: string; // e.g. 'Fan manufacturer, Coimbatore: 5-ply carton switch'
  industry: string;
  box: string; // e.g. '5-ply ceiling fan carton, 2-colour print'
  quantity: string; // e.g. '15,000 cartons per month'
  problem: string;
  solution: string;
  result: string; // factual outcome the customer has confirmed
  date: string; // ISO
}

export const CASE_STUDIES: CaseStudy[] = [];
