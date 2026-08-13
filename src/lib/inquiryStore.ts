import { InquiryRecord } from '../types';

const STORAGE_KEY = 'visalatchi_inquiries_v2';

const INITIAL_INQUIRIES: InquiryRecord[] = [
  {
    id: 'inq-101',
    name: 'Senthil Kumar',
    phone: '9840123456',
    email: 'senthil@chennaicoffee.in',
    companyName: 'Chennai Coffee Crafters',
    userType: 'Food or FMCG manufacturer',
    requirement: 'Paper Bowls & Food Containers (Eco)',
    recipient: 'periyanan',
    estimatedUnits: '1,000',
    targetStartDate: '2026-08-15',
    notes: 'Need grease-proof 500ml paper bowls for hot filter coffee & snacks packaging.',
    createdAt: new Date(Date.now() - 3600000 * 3).toISOString(),
    status: 'new',
  },
  {
    id: 'inq-102',
    name: 'Ananya Ramesh',
    phone: '9790987654',
    email: 'ananya@auraloom.com',
    companyName: 'Aura Loom Apparel',
    userType: 'D2C/E-commerce brand',
    requirement: 'Mailer Box (MOQ 50)',
    recipient: 'palaniappan',
    estimatedUnits: '500',
    targetStartDate: '2026-08-20',
    notes: 'Looking for 12x9x3 inch mailer boxes with white inside logo print for ethnic wear dispatch.',
    createdAt: new Date(Date.now() - 3600000 * 22).toISOString(),
    status: 'contacted',
  },
  {
    id: 'inq-103',
    name: 'Vikram Rajan',
    phone: '9444011223',
    email: 'v.rajan@spicewayexports.com',
    companyName: 'Spiceway Global Exports',
    userType: 'Exporter',
    requirement: 'Export 7-Ply Heavy Master Cartons',
    recipient: 'periyanan',
    estimatedUnits: '5,000+',
    targetStartDate: '2026-09-01',
    notes: 'Container load for Dubai shipment. Need moisture resistant treatment and pallet optimization.',
    createdAt: new Date(Date.now() - 3600000 * 45).toISOString(),
    status: 'sample_sent',
  }
];

export function getInquiries(): InquiryRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_INQUIRIES));
      return INITIAL_INQUIRIES;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading inquiries from localStorage', e);
    return INITIAL_INQUIRIES;
  }
}

export function saveInquiry(inquiryData: Omit<InquiryRecord, 'id' | 'createdAt' | 'status'>): InquiryRecord {
  const current = getInquiries();
  const newInquiry: InquiryRecord = {
    ...inquiryData,
    id: `inq-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    status: 'new',
  };
  const updated = [newInquiry, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving inquiry to localStorage', e);
  }
  return newInquiry;
}

export function updateInquiryStatus(id: string, status: InquiryRecord['status']): InquiryRecord[] {
  const current = getInquiries();
  const updated = current.map(item => item.id === id ? { ...item, status } : item);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error updating inquiry status', e);
  }
  return updated;
}

export function deleteInquiry(id: string): InquiryRecord[] {
  const current = getInquiries();
  const updated = current.filter(item => item.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error deleting inquiry', e);
  }
  return updated;
}

export function clearAllInquiries(): InquiryRecord[] {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  } catch (e) {
    console.error('Error clearing inquiries', e);
  }
  return [];
}

export function buildWhatsAppLink(
  recipientPhone: 'palaniappan' | 'periyanan' | 'general' | string,
  data: {
    name: string;
    phone: string;
    companyName?: string;
    requirement: string;
    estimatedUnits?: string;
    notes?: string;
  }
): string {
  // Determine target WhatsApp phone number
  let targetNumber = '919840501323'; // Palaniappan: 98405 01323
  if (recipientPhone === 'periyanan') {
    targetNumber = '919444420367'; // Periyanan: 94444 20367
  } else if (recipientPhone.startsWith('91') || recipientPhone.length >= 10) {
    const digitsOnly = recipientPhone.replace(/\D/g, '');
    if (digitsOnly.length === 10) {
      targetNumber = `91${digitsOnly}`;
    } else if (digitsOnly.length > 10) {
      targetNumber = digitsOnly;
    }
  }

  const messageLines = [
    `*NEW INQUIRY - VISALATCHI MANUFACTURES*`,
    `----------------------------------------`,
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
    data.companyName ? `*Company:* ${data.companyName}` : '',
    `*Requirement:* ${data.requirement}`,
    data.estimatedUnits ? `*Quantity:* ${data.estimatedUnits} units` : '',
    data.notes ? `*Notes/Details:* ${data.notes}` : '',
    `----------------------------------------`,
    `_Sent via Visalatchi Packaging Portal_`
  ].filter(Boolean).join('\n');

  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(messageLines)}`;
}

export function buildDirectReplyWhatsAppLink(leadPhone: string, leadName: string, requirement: string): string {
  let cleanDigits = leadPhone.replace(/\D/g, '');
  if (cleanDigits.length === 10) {
    cleanDigits = `91${cleanDigits}`;
  }
  const text = `Hello ${leadName},\nThank you for reaching out to Visalatchi Manufactures regarding *${requirement}*.\nWe are preparing your quotation and sample details. When can we connect?`;
  return `https://wa.me/${cleanDigits}?text=${encodeURIComponent(text)}`;
}
