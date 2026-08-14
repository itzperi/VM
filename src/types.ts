export type BlogContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishDate: string; // ISO date, e.g. '2026-08-20'
  category: 'd2c' | 'food' | 'export' | 'general';
  relatedProductIds: string[];
  content: BlogContentBlock[];
  /** Sources cited for factual/regulatory claims. Omit for posts with none. */
  sources?: { title: string; url: string }[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'd2c' | 'food' | 'export' | 'tapes';
  description: string;
  moq: number;
  startingPrice: string;
  material: string;
  ecoFriendly: boolean;
  leadTime: string;
  image: string;
  features: string[];
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  userType?: 'D2C/E-commerce brand' | 'Food or FMCG manufacturer' | 'Exporter' | 'Other';
  recipient: 'palaniappan' | 'periyanan' | 'general';
  category: 'd2c' | 'food' | 'export' | 'products' | 'general';
  estimatedUnits: string;
  targetStartDate?: string;
  notes: string;
}

export interface InquiryRecord {
  id: string;
  name: string;
  phone: string;
  email?: string;
  companyName?: string;
  userType?: string;
  requirement: string;
  recipient: 'palaniappan' | 'periyanan' | 'general';
  estimatedUnits?: string;
  targetStartDate?: string;
  notes?: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'sample_sent' | 'closed';
}
