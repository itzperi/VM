import React from 'react';
import { Phone, MessageSquare, Send } from 'lucide-react';
import { ProductItem } from '../types';

interface Props {
  openContact: (recipient?: 'palaniappan' | 'periyanan', noteOrProduct?: string | ProductItem) => void;
}

/** Sticky Call / WhatsApp / Quote bar on small screens. Phone and WhatsApp
 * clicks are counted by the delegated listener in lib/analytics.ts. */
export const MobileActionBar: React.FC<Props> = ({ openContact }) => (
  <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 bg-[#1b1c1a] text-white text-[11px] font-semibold uppercase tracking-wider shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
    <a href="tel:+919840501323" className="flex flex-col items-center justify-center gap-1 py-2.5 hover:bg-black">
      <Phone className="w-4 h-4" /> Call
    </a>
    <a
      href="https://wa.me/919840501323?text=Hi%2C%20I%27d%20like%20a%20bulk%20packaging%20quote."
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center gap-1 py-2.5 bg-[#15803D] hover:bg-[#166534]"
    >
      <MessageSquare className="w-4 h-4" /> WhatsApp
    </a>
    <button
      onClick={() => openContact('general', 'Bulk quote request from mobile bar')}
      className="flex flex-col items-center justify-center gap-1 py-2.5 bg-[#B04724] hover:bg-[#a8431f]"
    >
      <Send className="w-4 h-4" /> Get Quote
    </button>
  </div>
);
