import { InquiryRecord } from '../types';

// Server-side lead delivery. Before this, a quote request only reached the
// team if the visitor actually pressed Send in WhatsApp; otherwise it sat in
// the visitor's own browser (localStorage) where nobody at Visalatchi could
// see it. Web3Forms emails every submission to the address the access key was
// created with. The key is designed to be public (client-side), so it is safe
// in a VITE_ variable. Get one free at https://web3forms.com.
type Env = Record<string, string | undefined>;
const env: Env = ((import.meta as unknown as { env?: Env }).env) ?? {};
const WEB3FORMS_KEY = env.VITE_WEB3FORMS_KEY;

export function isLeadDeliveryConfigured(): boolean {
  return !!WEB3FORMS_KEY;
}

export async function deliverLead(lead: InquiryRecord, source: string): Promise<boolean> {
  if (!WEB3FORMS_KEY || typeof fetch === 'undefined') return false;
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Bulk enquiry: ${lead.estimatedUnits ?? '?'} units, ${lead.requirement} (${lead.companyName || lead.name})`,
        from_name: 'Visalatchi website',
        name: lead.name,
        phone: lead.phone,
        email: lead.email || undefined,
        company: lead.companyName,
        business_type: lead.userType,
        requirement: lead.requirement,
        quantity: lead.estimatedUnits,
        target_start_date: lead.targetStartDate,
        assigned_to: lead.recipient,
        notes: lead.notes,
        form: source,
        page: typeof window !== 'undefined' ? window.location.href : undefined,
      }),
    });
    return res.ok;
  } catch (e) {
    console.error('Lead delivery failed', e);
    return false;
  }
}
