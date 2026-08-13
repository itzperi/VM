import React, { useState } from 'react';
import { Phone, ChevronUp, X, Send } from 'lucide-react';
import { buildWhatsAppLink } from '../lib/inquiryStore';

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const FloatingWhatsAppButton: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);

  const urlPalaniappan = buildWhatsAppLink('palaniappan', {
    name: 'Website Visitor',
    phone: '',
    requirement: 'D2C Packaging & Custom Mailer Box Quotation / Sample Request',
    notes: 'Hi Palaniappan, I visited the Visalatchi website and want to inquire about custom mailer packaging & sample pricing.'
  });

  const urlPeriyanan = buildWhatsAppLink('periyanan', {
    name: 'Website Visitor',
    phone: '',
    requirement: 'Food Delivery Boxes / Export Container Packaging',
    notes: 'Hi Periyanan, I visited the Visalatchi website and want to discuss food containers / export packaging requirement.'
  });

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
      {/* Popover Options */}
      {showOptions && (
        <div className="bg-[#1b1c1a] text-white p-4 rounded-lg shadow-2xl border border-[#25D366]/40 text-xs w-64 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5 font-semibold text-[#25D366]">
              <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
              <span>WhatsApp Direct Factory</span>
            </div>
            <button
              onClick={() => setShowOptions(false)}
              className="text-white/60 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-white/80 leading-snug">
            Choose a manufacturing representative to chat with instantly:
          </p>

          <div className="space-y-2 pt-1">
            <a
              href={urlPalaniappan}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebd5a] text-white p-2.5 rounded-sm flex items-center justify-between font-semibold transition-colors group cursor-pointer"
            >
              <div>
                <div className="text-xs">Palaniappan</div>
                <div className="text-[10px] text-white/80 font-normal">D2C & Domestic Brand Specialist</div>
              </div>
              <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={urlPeriyanan}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebd5a] text-white p-2.5 rounded-sm flex items-center justify-between font-semibold transition-colors group cursor-pointer"
            >
              <div>
                <div className="text-xs">Periyanan</div>
                <div className="text-[10px] text-white/80 font-normal">Export Logistics & Food Lead</div>
              </div>
              <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      )}

      {/* Main WhatsApp Badge Button (Small Circle on Left Side) */}
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="bg-[#25D366] text-white w-12 h-12 rounded-full shadow-2xl hover:bg-[#1ebd5a] transition-all transform hover:scale-110 cursor-pointer flex items-center justify-center border-2 border-white/40 group relative"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 fill-white" />
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-white rounded-full flex items-center justify-center shadow-xs">
          <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
        </span>
      </button>
    </div>
  );
};
