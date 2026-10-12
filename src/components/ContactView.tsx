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
      <div className="border-b border-black/10 pb-8 mb-10 text-center">
        <span className="text-sm font-medium text-[#0068c9] mb-3 block">
          Direct Factory Quote
        </span>
        <h1 className="font-serif-display text-3xl md:text-5xl text-[#111111] font-medium mb-4">
          Get a Bulk Packaging Quote
        </h1>
        <p className="font-body text-base text-[#615d59] max-w-xl mx-auto leading-relaxed">
          We manufacture in bulk only: from 5,000 units for large boxes (TV, fan, appliance, master cartons) and 10,000 units for small boxes, mailers and food packs. Share your box size, quantity and target start date for a firm volume quotation.
        </p>
      </div>

      {!submitted ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <form onSubmit={handleSubmit} className="md:col-span-8 bg-white border border-black/10 p-6 md:p-8 rounded-xl space-y-5">
            {/* Name, Phone & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-[11px] font-semibold text-[#111111] block mb-1">
                  Your Name *
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-[#f6f5f4] border border-black/10 p-2.5 text-xs font-body text-[#111111] rounded-lg focus:outline-none focus:border-[#0075de]"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-[#111111] block mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#f6f5f4] border border-black/10 p-2.5 text-xs font-body text-[#111111] rounded-lg focus:outline-none focus:border-[#0075de]"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-[#111111] block mb-1">
                  Brand / Company
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Artisan Roasters"
                  className="w-full bg-[#f6f5f4] border border-black/10 p-2.5 text-xs font-body text-[#111111] rounded-lg focus:outline-none focus:border-[#0075de]"
                />
              </div>
            </div>

            {/* I'm a & Product Interest */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-semibold text-[#111111] block mb-1">
                  I'm a:
                </label>
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="w-full bg-[#f6f5f4] border border-black/10 p-2.5 text-xs font-body text-[#111111] rounded-lg focus:outline-none focus:border-[#0075de]"
                >
                  <option value="D2C/E-commerce brand">D2C / E-commerce Brand</option>
                  <option value="Food or FMCG manufacturer">Food or FMCG Manufacturer</option>
                  <option value="Appliance or electronics manufacturer">Appliance / Electronics Manufacturer</option>
                  <option value="Exporter">Exporter</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-[#111111] block mb-1">
                  Product Interest
                </label>
                <select
                  value={productInterest}
                  onChange={(e) => setProductInterest(e.target.value)}
                  className="w-full bg-[#f6f5f4] border border-black/10 p-2.5 text-xs font-body text-[#111111] rounded-lg focus:outline-none focus:border-[#0075de]"
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
                <label className="text-[11px] font-semibold text-[#111111] block mb-1">
                  Order Quantity (min 5,000 large / 10,000 small)
                </label>
                <select
                  value={estimatedVolume}
                  onChange={(e) => setEstimatedVolume(e.target.value)}
                  className="w-full bg-[#f6f5f4] border border-black/10 p-2.5 text-xs font-body text-[#111111] rounded-lg focus:outline-none focus:border-[#0075de]"
                >
                  <option value="5,000-10,000">5,000 to 10,000 Units (large boxes)</option>
                  <option value="10,000-25,000">10,000 to 25,000 Units</option>
                  <option value="25,000-50,000">25,000 to 50,000 Units</option>
                  <option value="50,000+">50,000+ Units</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-[#111111] block mb-1">
                  Target Start Date
                </label>
                <input
                  type="date"
                  value={targetStartDate}
                  onChange={(e) => setTargetStartDate(e.target.value)}
                  className="w-full bg-[#f6f5f4] border border-black/10 p-2.5 text-xs font-body text-[#111111] rounded-lg focus:outline-none focus:border-[#0075de]"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-[11px] font-semibold text-[#111111] block mb-1">
                Box Dimensions or Custom Instructions
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your box dimensions (Length × Width × Height), artwork requirements, or dispatch city..."
                className="w-full bg-[#f6f5f4] border border-black/10 p-2.5 text-xs font-body text-[#111111] rounded-lg focus:outline-none focus:border-[#0075de]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0075de] text-white py-2.5 px-4 text-sm font-medium text-center hover:bg-[#005bab] transition-colors rounded-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Firm Quote Request</span>
            </button>
          </form>

          {/* Direct Contact Numbers Box */}
          <div className="md:col-span-4 bg-white border border-black/10 p-6 rounded-xl space-y-6">
            <div>
              <span className="text-xs font-semibold text-[#0068c9] block mb-1">
                Direct Contacts
              </span>
              <h2 className="font-serif-display text-xl text-[#111111] font-semibold">
                Speak to Our Team
              </h2>
            </div>

            <div className="space-y-4 text-xs">
              <div className="bg-white p-4 rounded-xl border border-black/10 space-y-1">
                <div className="font-serif-display font-semibold text-sm text-[#111111]"><Link to="/team/palaniappan" className="hover:text-[#0068c9] hover:underline">Palaniappan</Link></div>
                <div className="text-xs text-[#696969]">D2C & Domestic Brand Specialist</div>
                <div className="tabular-nums font-bold text-[#0068c9] pt-1">
                  <a href="tel:+919840501323" className="hover:underline">98405 01323</a>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-black/10 space-y-1">
                <div className="font-serif-display font-semibold text-sm text-[#111111]"><Link to="/team/periyanan" className="hover:text-[#0068c9] hover:underline">Periyanan</Link></div>
                <div className="text-xs text-[#696969]">Export Logistics & Food Lead</div>
                <div className="tabular-nums font-bold text-[#0068c9] pt-1">
                  <a href="tel:+919444420367" className="hover:underline">94444 20367</a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-black/10 text-[11px] text-[#615d59] space-y-2">
              {OWNER_FACTS.email && (
                <div><strong>Email:</strong> <a href={`mailto:${OWNER_FACTS.email}`} className="text-[#0068c9] hover:underline">{OWNER_FACTS.email}</a></div>
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
        <div className="mt-16 border-t border-black/10 pt-10">
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="w-5 h-5 text-[#0068c9] shrink-0 mt-1" />
            <div>
              <h2 className="font-serif-display text-2xl text-[#111111] font-medium mb-2">
                North Chennai Coverage Area
              </h2>
              <p className="font-body text-sm text-[#615d59] leading-relaxed max-w-3xl">
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
                className="text-[11px] font-body text-[#615d59] bg-[#f6f5f4] border border-black/10 px-3 py-1.5 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      )}

      {submitted && (
        <div className="bg-white border border-black/10 p-8 md:p-12 text-center rounded-xl space-y-6 max-w-lg mx-auto">
          <CheckCircle2 className="w-16 h-16 text-[#0068c9] mx-auto animate-bounce" />
          <h2 className="font-serif-display text-2xl text-[#111111] font-medium">
            Quotation Request Received!
          </h2>
          <p className="font-body text-xs text-[#615d59] leading-relaxed">
            Thank you, <strong className="text-[#111111]">{name}</strong>. Your request for <strong className="text-[#0068c9]">{productInterest}</strong> has been saved directly to our system.
          </p>

          <div className="bg-white p-4 rounded-xl text-left text-xs space-y-1.5 border border-black/10">
            <div><span className="text-[#696969]">Phone:</span> <strong className="text-[#111111]">{phone}</strong></div>
            <div><span className="text-[#696969]">Company:</span> {company || 'N/A'}</div>
            <div><span className="text-[#696969]">Business Type:</span> {userType}</div>
            <div><span className="text-[#696969]">Order Quantity:</span> {estimatedVolume} units</div>
            {targetStartDate && <div><span className="text-[#696969]">Target Start:</span> {targetStartDate}</div>}
            {message && <div><span className="text-[#696969]">Notes:</span> {message}</div>}
          </div>

          <p className="text-xs text-[#696969]">
            We have opened WhatsApp to connect you directly with our factory team. Click below if it didn't open automatically:
          </p>

          {waUrl && (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#15803D] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#166534] transition-colors rounded-lg shadow-md inline-flex items-center justify-center gap-2 cursor-pointer w-full"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Send Message on WhatsApp</span>
            </a>
          )}

          <div>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#e6f3fe] text-[#005bab] px-6 py-2.5 text-sm font-medium hover:bg-[#d3e9fd] transition-colors rounded-lg cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
