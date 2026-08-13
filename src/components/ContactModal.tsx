import React, { useState } from 'react';
import { Mail, Phone, UserCheck, Send, CheckCircle2, X, MessageSquare } from 'lucide-react';
import { ProductItem } from '../types';
import { saveInquiry, buildWhatsAppLink } from '../lib/inquiryStore';
import { BrandLogo } from './BrandLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRecipient?: 'palaniappan' | 'periyanan' | 'general';
  initialNote?: string;
  initialProduct?: ProductItem | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialRecipient = 'general',
  initialNote = '',
  initialProduct = null,
}) => {
  const [recipient, setRecipient] = useState<'palaniappan' | 'periyanan' | 'general'>(initialRecipient);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState<'d2c' | 'food' | 'export' | 'general'>('d2c');
  const [estimatedUnits, setEstimatedUnits] = useState<string>('100');
  const [notes, setNotes] = useState(initialNote || (initialProduct ? `Inquiry regarding ${initialProduct.name}` : ''));
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const categoryNames = {
      d2c: 'D2C Mailer Boxes & Courier Bags',
      food: 'Food-Safe Cartons & Pouches',
      export: 'Export 5-Ply / 7-Ply Master Cartons',
      general: 'Custom Tapes & Accessories',
    };

    const requirementText = initialProduct 
      ? initialProduct.name 
      : (categoryNames[category] || 'Custom Packaging Inquiry');

    // 1. Save to local inquiry store
    saveInquiry({
      name,
      phone,
      email,
      companyName: company,
      requirement: requirementText,
      recipient,
      estimatedUnits,
      notes,
    });

    // 2. Build WhatsApp redirect URL
    const url = buildWhatsAppLink(recipient, {
      name,
      phone,
      companyName: company,
      requirement: requirementText,
      estimatedUnits,
      notes,
    });

    setWaUrl(url);
    setSubmitted(true);

    // 3. Attempt automatic WhatsApp dispatch
    try {
      window.open(url, '_blank');
    } catch (err) {
      console.log('Popup blocked, button available on next step', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#F7F5F1] max-w-2xl w-full border border-black/20 shadow-2xl p-6 md:p-8 rounded-sm animate-in zoom-in-95 duration-200 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#747878] hover:text-black font-semibold text-xl"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <div>
            <div className="border-b border-black/10 pb-4 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <BrandLogo variant="small" />
              </div>
              <h2 className="font-serif-display text-2xl md:text-3xl text-[#1b1c1a] font-medium">
                Contact Visalatchi Manufactures
              </h2>
              <p className="font-body text-xs text-[#444748] mt-1">
                Get custom quotes, dielines, or order sample boxes delivered to your office.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Recipient Selection */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-[#1b1c1a] block mb-2">
                  Select Contact Representative
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    onClick={() => setRecipient('palaniappan')}
                    className={`p-3 border rounded-sm cursor-pointer transition-colors ${
                      recipient === 'palaniappan'
                        ? 'bg-[#1b1c1a] text-white border-[#1b1c1a]'
                        : 'bg-[#EAE8E4] text-[#1b1c1a] border-black/10 hover:border-black/30'
                    }`}
                  >
                    <div className="font-serif-display text-sm font-semibold">Palaniappan</div>
                    <div className="text-[10px] opacity-80">D2C & Domestic Brand Specialist</div>
                  </div>

                  <div
                    onClick={() => setRecipient('periyanan')}
                    className={`p-3 border rounded-sm cursor-pointer transition-colors ${
                      recipient === 'periyanan'
                        ? 'bg-[#1b1c1a] text-white border-[#1b1c1a]'
                        : 'bg-[#EAE8E4] text-[#1b1c1a] border-black/10 hover:border-black/30'
                    }`}
                  >
                    <div className="font-serif-display text-sm font-semibold">Periyanan</div>
                    <div className="text-[10px] opacity-80">Export Logistics & Food Compliance Lead</div>
                  </div>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-semibold text-[#1b1c1a] uppercase tracking-wider block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#C8522C]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#1b1c1a] uppercase tracking-wider block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#C8522C]"
                  />
                </div>
              </div>

              {/* Email & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-semibold text-[#1b1c1a] uppercase tracking-wider block mb-1">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@brand.com"
                    className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#C8522C]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#1b1c1a] uppercase tracking-wider block mb-1">
                    Brand / Company Name
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Artisan Roasters"
                    className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#C8522C]"
                  />
                </div>
              </div>

              {/* Category & Units */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-semibold text-[#1b1c1a] uppercase tracking-wider block mb-1">
                    Packaging Requirement
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#C8522C]"
                  >
                    <option value="d2c">D2C Mailer Boxes & Courier Bags</option>
                    <option value="food">Food-Safe Cartons & Pouches</option>
                    <option value="export">Export 5-Ply / 7-Ply Master Cartons</option>
                    <option value="general">Custom Tapes & Accessories</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#1b1c1a] uppercase tracking-wider block mb-1">
                    Estimated Order Quantity
                  </label>
                  <select
                    value={estimatedUnits}
                    onChange={(e) => setEstimatedUnits(e.target.value)}
                    className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#C8522C]"
                  >
                    <option value="50">50 Units (Sample / Test Launch)</option>
                    <option value="100">100 Units</option>
                    <option value="500">500 Units</option>
                    <option value="1000">1,000 Units</option>
                    <option value="5000">5,000+ Units (Mass Production)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-[11px] font-semibold text-[#1b1c1a] uppercase tracking-wider block mb-1">
                  Dimensions, Special Instructions or Questions
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Provide box dimensions (L×W×H), artwork requirements, or delivery location..."
                  className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#C8522C]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C8522C] text-white py-3.5 px-4 text-xs font-semibold uppercase tracking-widest text-center hover:bg-black transition-colors rounded-sm cursor-pointer shadow-sm flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry to {recipient === 'palaniappan' ? 'Palaniappan' : recipient === 'periyanan' ? 'Periyanan' : 'Visalatchi Team'}</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#C8522C] mx-auto animate-bounce" />
            <h3 className="font-serif-display text-2xl text-[#1b1c1a] font-medium">
              Inquiry Submitted Successfully!
            </h3>
            <p className="font-body text-sm text-[#444748] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#1b1c1a]">{name}</strong>. Your request has been assigned directly to <strong className="text-[#C8522C]">{recipient === 'periyanan' ? 'Periyanan' : 'Palaniappan'}</strong>.
            </p>

            <div className="bg-[#EAE8E4] p-4 rounded-sm max-w-md mx-auto text-left text-xs space-y-1.5 border border-black/10">
              <div><span className="text-[#747878]">Phone:</span> <span className="font-semibold">{phone}</span></div>
              <div><span className="text-[#747878]">Email:</span> <span className="font-semibold">{email}</span></div>
              <div><span className="text-[#747878]">Quantity:</span> <span className="font-semibold">{estimatedUnits} Units</span></div>
              {notes && <div><span className="text-[#747878]">Note:</span> <span className="italic">{notes}</span></div>}
            </div>

            <p className="text-xs text-[#747878]">
              We have saved your details and opened WhatsApp to connect you directly with {recipient === 'periyanan' ? 'Periyanan (94444 20367)' : 'Palaniappan (98405 01323)'}.
            </p>

            {waUrl && (
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#1ebd5a] transition-colors rounded-sm shadow-md inline-flex items-center justify-center gap-2 cursor-pointer w-full max-w-xs mx-auto"
              >
                <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Send Message on WhatsApp</span>
              </a>
            )}

            <div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-2 bg-[#1b1c1a] text-white px-6 py-2 text-xs font-semibold uppercase tracking-widest hover:bg-[#C8522C] transition-colors rounded-sm cursor-pointer"
              >
                Back to App
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
