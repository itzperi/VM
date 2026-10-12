import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import { BulkLandingView } from './components/BulkLandingView';
import { PUBLISHED_LANDING_PAGES } from './data/landingPages';
import { Breadcrumbs } from './components/Breadcrumbs';
import { TeamMemberView } from './components/TeamMemberView';
import { PageAnswers } from './components/PageAnswers';
import { CaseStudiesView } from './components/CaseStudiesView';
import { SpecReferenceView } from './components/SpecReferenceView';
import { MobileActionBar } from './components/MobileActionBar';
import { CASE_STUDIES } from './data/caseStudies';
import { SPEC_ROWS } from './data/specReference';

export default function App() {
  const isHome = useLocation().pathname === '/';
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
    <div className="bg-[#F7F5F1] text-[#1b1c1a] font-sans min-h-screen flex flex-col relative pb-14 md:pb-0 selection:bg-[#B04724] selection:text-white">
      {/* Per-route title / meta / canonical / JSON-LD */}
      <Seo />

      {/* Floating Header Navbar */}
      <Navbar openContact={openContact} />

      {/* Main View Router */}
      <main className="flex-grow">
        {!isHome && (
          <div className="pt-24">
            <Breadcrumbs />
          </div>
        )}
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
              <div>
                <D2CView openContact={openContact} />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/food-packaging"
            element={
              <div>
                <FoodView openContact={openContact} />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/export-packaging"
            element={
              <div>
                <ExportView openContact={openContact} />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/products"
            element={
              <div>
                <CatalogView openContact={openContact} />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/products/:slug"
            element={
              <div>
                <ProductDetailView openContact={openContact} />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/process"
            element={
              <div>
                <ProcessView openContact={openContact} />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/faq"
            element={
              <div>
                <FAQView />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/about"
            element={
              <div>
                <AboutView openContact={openContact} />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/contact"
            element={
              <div>
                <ContactView />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/blog"
            element={
              <div>
                <BlogIndexView />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/blog/:slug"
            element={
              <div>
                <BlogPostView openContact={openContact} />
                <ProcessMarquee />
              </div>
            }
          />

          <Route
            path="/team/:slug"
            element={
              <div>
                <TeamMemberView />
                <ProcessMarquee />
              </div>
            }
          />

          {/* Registered only once the owner has supplied real content. */}
          {CASE_STUDIES.length > 0 && (
            <Route path="/case-studies" element={<CaseStudiesView openContact={openContact} />} />
          )}
          {SPEC_ROWS.length > 0 && (
            <Route path="/carton-specification-reference" element={<SpecReferenceView openContact={openContact} />} />
          )}

          {PUBLISHED_LANDING_PAGES.map((page) => (
            <React.Fragment key={page.path}>
            <Route
              path={page.path}
              element={
                <div>
                  <BulkLandingView page={page} openContact={openContact} />
                  <ProcessMarquee />
                </div>
              }
            />
            </React.Fragment>
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
        <PageAnswers />
      </main>

      {/* One map per page, in the same place, right before the footer */}
      <LocationMap />

      {/* Global Footer */}
      <Footer openContact={openContact} />

      {/* Sticky Call / WhatsApp / Quote bar on mobile */}
      <MobileActionBar openContact={openContact} />

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
