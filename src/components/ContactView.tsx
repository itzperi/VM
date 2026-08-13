import React, { useState } from 'react';
import { Send, Phone, Mail, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';
import { saveInquiry, buildWhatsAppLink } from '../lib/inquiryStore';
import { NORTH_CHENNAI_AREAS } from '../lib/siteConfig';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [userType, setUserType] = useState('D2C/E-commerce brand');
  const [productInterest, setProductInterest] = useState('Mailer Box');
  const [estimatedVolume, setEstimatedVolume] = useState('100');
  const [targetStartDate, setTargetStartDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipient = productInterest.toLowerCase().includes('food') || userType.includes('Food') || userType.includes('Exporter')
      ? 'periyanan'
      : 'palaniappan';

    // 1. Save lead to local storage
    saveInquiry({
      name,
      phone,
      companyName: company,
      userType,
      requirement: productInterest,
      recipient,
      estimatedUnits: estimatedVolume,
      targetStartDate,
      notes: message,
    });

    // 2. Build WhatsApp message URL
    const url = buildWhatsAppLink(recipient, {
      name,
      phone,
      companyName: company,
      requirement: productInterest,
      estimatedUnits: estimatedVolume,
      notes: message,
    });

    setWaUrl(url);
    setSubmitted(true);

    try {
      window.open(url, '_blank');
    } catch (err) {
      console.log('Popup blocked, WhatsApp button available', err);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20 animate-in fade-in duration-300">
      <div className="border-b border-black/15 pb-8 mb-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C8522C] mb-2 block">
          Direct Factory Quote
        </span>
        <h1 className="font-serif-display text-3xl md:text-5xl text-[#1b1c1a] font-medium mb-4">
          Let's Pack Your Next Shipment
        </h1>
        <p className="font-body text-base text-[#444748] max-w-xl mx-auto leading-relaxed">
          Share your box/mailer size, monthly order volume and target start date — we'll turn this into a firm quotation.
        </p>
      </div>

      {!submitted ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <form onSubmit={handleSubmit} className="md:col-span-8 bg-[#F7F5F1] border border-black/15 p-6 md:p-8 rounded-sm space-y-5 shadow-xs">
            {/* Name, Phone & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-[11px] font-semibold text-[#1b1c1a] uppercase tracking-wider block mb-1">
                  Your Name *
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

              <div>
                <label className="text-[11px] font-semibold text-[#1b1c1a] uppercase tracking-wider block mb-1">
                  Brand / Company
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

            {/* I'm a & Product Interest */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-semibold text-[#1b1c1a] uppercase tracking-wider block mb-1">
                  I'm a:
                </label>
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#C8522C]"
                >
                  <option value="D2C/E-commerce brand">D2C / E-commerce Brand</option>
                  <option value="Food or FMCG manufacturer">Food or FMCG Manufacturer</option>
                  <option value="Exporter">Exporter</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-[#1b1c1a] uppercase tracking-wider block mb-1">
                  Product Interest
                </label>
                <select
                  value={productInterest}
                  onChange={(e) => setProductInterest(e.target.value)}
                  className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#C8522C]"
                >
                  <option value="Mailer Box">Mailer Box (MOQ 50)</option>
                  <option value="Corrugated Shipping Box">Corrugated Shipping Box (MOQ 500)</option>
                  <option value="Food Delivery Box">Food Delivery Box (MOQ 200)</option>
                  <option value="Courier & Return Mailers">Courier & Return Mailers (MOQ 1000)</option>
                  <option value="Paper & Padded Mailers">Paper & Padded Mailers (MOQ 100)</option>
                  <option value="Frosted Zipper Garment Bag">Frosted Zipper Garment Bag (MOQ 100)</option>
                  <option value="Custom Printed Paper Carry Bag (Eco)">Custom Printed Paper Carry Bag (MOQ 50)</option>
                  <option value="Bagasse Food Container (Eco)">Bagasse Food Container (MOQ 100)</option>
                  <option value="Paper Bowls & Food Containers (Eco)">Paper Bowls & Food Containers (MOQ 300)</option>
                  <option value="Other Custom Format">Other Custom Format</option>
                </select>
              </div>
            </div>

            {/* Estimated Volume & Target Start Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-semibold text-[#1b1c1a] uppercase tracking-wider block mb-1">
                  Estimated Monthly Order Volume
                </label>
                <select
                  value={estimatedVolume}
                  onChange={(e) => setEstimatedVolume(e.target.value)}
                  className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#C8522C]"
                >
                  <option value="50">50 Units (Sample / Test Run)</option>
                  <option value="100">100 Units</option>
                  <option value="500">500 Units</option>
                  <option value="1000">1,000 Units</option>
                  <option value="5000">5,000+ Units (Mass Production)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-[#1b1c1a] uppercase tracking-wider block mb-1">
                  Target Start Date
                </label>
                <input
                  type="date"
                  value={targetStartDate}
                  onChange={(e) => setTargetStartDate(e.target.value)}
                  className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#C8522C]"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-[11px] font-semibold text-[#1b1c1a] uppercase tracking-wider block mb-1">
                Box Dimensions or Custom Instructions
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your box dimensions (Length × Width × Height), artwork requirements, or dispatch city..."
                className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#C8522C]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#C8522C] text-white py-3.5 px-4 text-xs font-semibold uppercase tracking-widest text-center hover:bg-black transition-colors rounded-sm cursor-pointer shadow-sm flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Firm Quote Request</span>
            </button>
          </form>

          {/* Direct Contact Numbers Box */}
          <div className="md:col-span-4 bg-[#EAE8E4] border border-black/15 p-6 rounded-sm space-y-6">
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-[#C8522C] block mb-1">
                Direct Contacts
              </span>
              <h3 className="font-serif-display text-xl text-[#1b1c1a] font-semibold">
                Speak to Our Team
              </h3>
            </div>

            <div className="space-y-4 text-xs">
              <div className="bg-[#F7F5F1] p-4 rounded-sm border border-black/10 space-y-1">
                <div className="font-serif-display font-semibold text-sm text-[#1b1c1a]">Palaniappan</div>
                <div className="text-[10px] text-[#747878] uppercase">D2C & Domestic Brand Specialist</div>
                <div className="font-mono font-bold text-[#C8522C] pt-1">
                  <a href="tel:9840501323" className="hover:underline">98405 01323</a>
                </div>
              </div>

              <div className="bg-[#F7F5F1] p-4 rounded-sm border border-black/10 space-y-1">
                <div className="font-serif-display font-semibold text-sm text-[#1b1c1a]">Periyanan</div>
                <div className="text-[10px] text-[#747878] uppercase">Export Logistics & Food Lead</div>
                <div className="font-mono font-bold text-[#C8522C] pt-1">
                  <a href="tel:9444420367" className="hover:underline">94444 20367</a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-black/10 text-[11px] text-[#444748] space-y-2">
              <div><strong>Plant Location:</strong> Chennai, Tamil Nadu</div>
              <div><strong>Dispatch:</strong> Pan-India & Port Container Freight</div>
              <div><strong>Response SLA:</strong> Physical sample / Quote in 2-4 working hours</div>
            </div>
          </div>
        </div>
      ) : null}

      {!submitted && (
        <div className="mt-16 border-t border-black/15 pt-10">
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="w-5 h-5 text-[#C8522C] shrink-0 mt-1" />
            <div>
              <h2 className="font-serif-display text-2xl text-[#1b1c1a] font-medium mb-2">
                North Chennai Coverage Area
              </h2>
              <p className="font-body text-sm text-[#444748] leading-relaxed max-w-3xl">
                Our plant is in Thiruvottiyur, North Chennai, so businesses based in North Chennai get the
                shortest possible dispatch and pickup times, with sample runs often deliverable same day.
                Everywhere else in Chennai, Tamil Nadu and the rest of India ships through our standard
                pan India courier network. North Chennai localities we regularly dispatch to and collect samples
                from include:
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 max-w-4xl mb-10">
            {NORTH_CHENNAI_AREAS.map((area) => (
              <span
                key={area}
                className="text-[11px] font-body text-[#444748] bg-[#EAE8E4] border border-black/10 px-3 py-1.5 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      )}

      {submitted && (
        <div className="bg-[#F7F5F1] border border-black/15 p-8 md:p-12 text-center rounded-sm space-y-6 max-w-lg mx-auto">
          <CheckCircle2 className="w-16 h-16 text-[#C8522C] mx-auto animate-bounce" />
          <h2 className="font-serif-display text-2xl text-[#1b1c1a] font-medium">
            Quotation Request Received!
          </h2>
          <p className="font-body text-xs text-[#444748] leading-relaxed">
            Thank you, <strong className="text-[#1b1c1a]">{name}</strong>. Your request for <strong className="text-[#C8522C]">{productInterest}</strong> has been saved directly to our system.
          </p>

          <div className="bg-[#EAE8E4] p-4 rounded-sm text-left text-xs space-y-1.5 border border-black/10">
            <div><span className="text-[#747878]">Phone:</span> <strong className="text-[#1b1c1a]">{phone}</strong></div>
            <div><span className="text-[#747878]">Company:</span> {company || 'N/A'}</div>
            <div><span className="text-[#747878]">Business Type:</span> {userType}</div>
            <div><span className="text-[#747878]">Monthly Volume:</span> {estimatedVolume} Units</div>
            {targetStartDate && <div><span className="text-[#747878]">Target Start:</span> {targetStartDate}</div>}
            {message && <div><span className="text-[#747878]">Notes:</span> {message}</div>}
          </div>

          <p className="text-xs text-[#747878]">
            We have opened WhatsApp to connect you directly with our factory team. Click below if it didn't open automatically:
          </p>

          {waUrl && (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#1ebd5a] transition-colors rounded-sm shadow-md inline-flex items-center justify-center gap-2 cursor-pointer w-full"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Send Message on WhatsApp</span>
            </a>
          )}

          <div>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#1b1c1a] text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#C8522C] transition-colors rounded-sm cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
