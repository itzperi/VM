import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PathSelector } from './components/PathSelector';
import { WhyVisalatchi } from './components/WhyVisalatchi';
import { ProcessMarquee } from './components/ProcessMarquee';
import { Footer } from './components/Footer';
import { LocationMap } from './components/LocationMap';
import { CatalogView } from './components/CatalogView';
import { ProductDetailView } from './components/ProductDetailView';
import { D2CView } from './components/D2CView';
import { FoodView } from './components/FoodView';
import { ExportView } from './components/ExportView';
import { ProcessView } from './components/ProcessView';
import { FAQView } from './components/FAQView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { BlogIndexView } from './components/BlogIndexView';
import { BlogPostView } from './components/BlogPostView';
import { ContactModal } from './components/ContactModal';
import { NotFound } from './components/NotFound';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { Seo } from './components/Seo';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [contactRecipient, setContactRecipient] = useState<'palaniappan' | 'periyanan' | 'general'>('general');
  const [contactNote, setContactNote] = useState<string>('');
  const [contactProduct, setContactProduct] = useState<ProductItem | null>(null);

  const openContact = (
    recipient: 'palaniappan' | 'periyanan' | 'general' = 'general',
    noteOrProduct?: string | ProductItem
  ) => {
    setContactRecipient(recipient);
    if (typeof noteOrProduct === 'string') {
      setContactNote(noteOrProduct);
      setContactProduct(null);
    } else if (noteOrProduct && typeof noteOrProduct === 'object') {
      setContactProduct(noteOrProduct);
      setContactNote(`Inquiry regarding ${noteOrProduct.name}`);
    } else {
      setContactNote('');
      setContactProduct(null);
    }
    setContactModalOpen(true);
  };

  return (
    <div className="bg-[#F7F5F1] text-[#1b1c1a] font-sans min-h-screen flex flex-col relative selection:bg-[#C8522C] selection:text-white">
      {/* Per-route title / meta / canonical / JSON-LD */}
      <Seo />

      {/* Floating Header Navbar */}
      <Navbar openContact={openContact} />

      {/* Main View Router */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection openContact={() => openContact('general')} />
                <PathSelector />
                <WhyVisalatchi />
                <ProcessMarquee />
              </>
            }
          />

          <Route
            path="/d2c-packaging"
            element={
              <div className="pt-24">
                <D2CView openContact={openContact} />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/food-packaging"
            element={
              <div className="pt-24">
                <FoodView openContact={openContact} />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/export-packaging"
            element={
              <div className="pt-24">
                <ExportView openContact={openContact} />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/products"
            element={
              <div className="pt-24">
                <CatalogView openContact={openContact} />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/products/:slug"
            element={
              <div className="pt-24">
                <ProductDetailView openContact={openContact} />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/process"
            element={
              <div className="pt-24">
                <ProcessView openContact={openContact} />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/faq"
            element={
              <div className="pt-24">
                <FAQView />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/about"
            element={
              <div className="pt-24">
                <AboutView openContact={openContact} />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/contact"
            element={
              <div className="pt-24">
                <ContactView />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/blog"
            element={
              <div className="pt-24">
                <BlogIndexView />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/blog/:slug"
            element={
              <div className="pt-24">
                <BlogPostView openContact={openContact} />
                <ProcessMarquee />
              </div>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* One map per page, in the same place, right before the footer */}
      <LocationMap />

      {/* Global Footer */}
      <Footer openContact={openContact} />

      {/* Global Contact & Sample Request Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialRecipient={contactRecipient}
        initialNote={contactNote}
        initialProduct={contactProduct}
      />

      {/* Floating Quick WhatsApp Action Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}
