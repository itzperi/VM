import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Send, Phone, Mail, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';
import { saveInquiry, buildWhatsAppLink } from '../lib/inquiryStore';
import { NORTH_CHENNAI_AREAS, PLANT_ADDRESS_FULL } from '../lib/siteConfig';
import { OWNER_FACTS } from '../data/ownerFacts';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [userType, setUserType] = useState('D2C/E-commerce brand');
  const [productInterest, setProductInterest] = useState('TV & Appliance Packaging Box');
  const [estimatedVolume, setEstimatedVolume] = useState('5,000-10,000');
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
    }, 'contact-page');

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
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B04724] mb-2 block">
          Direct Factory Quote
        </span>
        <h1 className="font-serif-display text-3xl md:text-5xl text-[#1b1c1a] font-medium mb-4">
          Get a Bulk Packaging Quote
        </h1>
        <p className="font-body text-base text-[#444748] max-w-xl mx-auto leading-relaxed">
          We manufacture in bulk only: from 5,000 units for large boxes (TV, fan, appliance, master cartons) and 10,000 units for small boxes, mailers and food packs. Share your box size, quantity and target start date for a firm volume quotation.
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
                  className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#B04724]"
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
                  className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#B04724]"
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
                  className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#B04724]"
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
                  className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#B04724]"
                >
                  <option value="D2C/E-commerce brand">D2C / E-commerce Brand</option>
                  <option value="Food or FMCG manufacturer">Food or FMCG Manufacturer</option>
                  <option value="Appliance or electronics manufacturer">Appliance / Electronics Manufacturer</option>
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
                  className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#B04724]"
                >
                  <option value="TV & Appliance Packaging Box">TV &amp; Appliance Packaging Box</option>
                  <option value="Ceiling Fan Packaging Box">Ceiling Fan Packaging Box</option>
                  <option value="Export Master Carton">Export Master Carton (5/7-Ply)</option>
                  <option value="Mailer Box">Mailer Box</option>
                  <option value="Corrugated Shipping Box">Corrugated Shipping Box</option>
                  <option value="Food Delivery Box">Food Delivery Box</option>
                  <option value="Courier & Return Mailers">Courier & Return Mailers</option>
                  <option value="Paper & Padded Mailers">Paper & Padded Mailers</option>
                  <option value="Frosted Zipper Garment Bag">Frosted Zipper Garment Bag</option>
                  <option value="Custom Printed Paper Carry Bag (Eco)">Custom Printed Paper Carry Bag</option>
                  <option value="Bagasse Food Container (Eco)">Bagasse Food Container</option>
                  <option value="Paper Bowls & Food Containers (Eco)">Paper Bowls & Food Containers</option>
                  <option value="Other Custom Format">Other Custom Format</option>
                </select>
              </div>
            </div>

            {/* Estimated Volume & Target Start Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-semibold text-[#1b1c1a] uppercase tracking-wider block mb-1">
                  Order Quantity (min 5,000 large / 10,000 small)
                </label>
                <select
                  value={estimatedVolume}
                  onChange={(e) => setEstimatedVolume(e.target.value)}
                  className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#B04724]"
                >
                  <option value="5,000-10,000">5,000 to 10,000 Units (large boxes)</option>
                  <option value="10,000-25,000">10,000 to 25,000 Units</option>
                  <option value="25,000-50,000">25,000 to 50,000 Units</option>
                  <option value="50,000+">50,000+ Units</option>
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
                  className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#B04724]"
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
                className="w-full bg-[#EAE8E4] border border-black/15 p-2.5 text-xs font-body text-[#1b1c1a] rounded-sm focus:outline-none focus:border-[#B04724]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#B04724] text-white py-3.5 px-4 text-xs font-semibold uppercase tracking-widest text-center hover:bg-black transition-colors rounded-sm cursor-pointer shadow-sm flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Firm Quote Request</span>
            </button>
          </form>

          {/* Direct Contact Numbers Box */}
          <div className="md:col-span-4 bg-[#EAE8E4] border border-black/15 p-6 rounded-sm space-y-6">
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-[#B04724] block mb-1">
                Direct Contacts
              </span>
              <h2 className="font-serif-display text-xl text-[#1b1c1a] font-semibold">
                Speak to Our Team
              </h2>
            </div>

            <div className="space-y-4 text-xs">
              <div className="bg-[#F7F5F1] p-4 rounded-sm border border-black/10 space-y-1">
                <div className="font-serif-display font-semibold text-sm text-[#1b1c1a]"><Link to="/team/palaniappan" className="hover:text-[#B04724] hover:underline">Palaniappan</Link></div>
                <div className="text-[10px] text-[#616565] uppercase">D2C & Domestic Brand Specialist</div>
                <div className="font-mono font-bold text-[#B04724] pt-1">
                  <a href="tel:+919840501323" className="hover:underline">98405 01323</a>
                </div>
              </div>

              <div className="bg-[#F7F5F1] p-4 rounded-sm border border-black/10 space-y-1">
                <div className="font-serif-display font-semibold text-sm text-[#1b1c1a]"><Link to="/team/periyanan" className="hover:text-[#B04724] hover:underline">Periyanan</Link></div>
                <div className="text-[10px] text-[#616565] uppercase">Export Logistics & Food Lead</div>
                <div className="font-mono font-bold text-[#B04724] pt-1">
                  <a href="tel:+919444420367" className="hover:underline">94444 20367</a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-black/10 text-[11px] text-[#444748] space-y-2">
              {OWNER_FACTS.email && (
                <div><strong>Email:</strong> <a href={`mailto:${OWNER_FACTS.email}`} className="text-[#B04724] hover:underline">{OWNER_FACTS.email}</a></div>
              )}
              <div><strong>Address:</strong> {PLANT_ADDRESS_FULL}</div>
              <div><strong>Plant Location:</strong> Chennai, Tamil Nadu</div>
              <div><strong>Dispatch:</strong> Pan-India & Port Container Freight</div>
              <div><strong>Response:</strong> Itemised quote and sample plan after you share your box size and quantity</div>
            </div>
          </div>
        </div>
      ) : null}

      {!submitted && (
        <div className="mt-16 border-t border-black/15 pt-10">
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="w-5 h-5 text-[#B04724] shrink-0 mt-1" />
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
          <CheckCircle2 className="w-16 h-16 text-[#B04724] mx-auto animate-bounce" />
          <h2 className="font-serif-display text-2xl text-[#1b1c1a] font-medium">
            Quotation Request Received!
          </h2>
          <p className="font-body text-xs text-[#444748] leading-relaxed">
            Thank you, <strong className="text-[#1b1c1a]">{name}</strong>. Your request for <strong className="text-[#B04724]">{productInterest}</strong> has been saved directly to our system.
          </p>

          <div className="bg-[#EAE8E4] p-4 rounded-sm text-left text-xs space-y-1.5 border border-black/10">
            <div><span className="text-[#616565]">Phone:</span> <strong className="text-[#1b1c1a]">{phone}</strong></div>
            <div><span className="text-[#616565]">Company:</span> {company || 'N/A'}</div>
            <div><span className="text-[#616565]">Business Type:</span> {userType}</div>
            <div><span className="text-[#616565]">Order Quantity:</span> {estimatedVolume} units</div>
            {targetStartDate && <div><span className="text-[#616565]">Target Start:</span> {targetStartDate}</div>}
            {message && <div><span className="text-[#616565]">Notes:</span> {message}</div>}
          </div>

          <p className="text-xs text-[#616565]">
            We have opened WhatsApp to connect you directly with our factory team. Click below if it didn't open automatically:
          </p>

          {waUrl && (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#15803D] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#166534] transition-colors rounded-sm shadow-md inline-flex items-center justify-center gap-2 cursor-pointer w-full"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Send Message on WhatsApp</span>
            </a>
          )}

          <div>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#1b1c1a] text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#B04724] transition-colors rounded-sm cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
