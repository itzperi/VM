import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  openContact: (recipient?: 'palaniappan' | 'periyanan') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ openContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems: { label: string; to: string }[] = [
    { label: 'D2C PACKAGING', to: '/d2c-packaging' },
    { label: 'FOOD BUSINESS', to: '/food-packaging' },
    { label: 'EXPORT', to: '/export-packaging' },
    { label: 'PRODUCTS & PRICING', to: '/products' },
    { label: 'PROCESS', to: '/process' },
    { label: 'ABOUT', to: '/about' },
    { label: 'FAQ', to: '/faq' },
    { label: 'BLOG', to: '/blog' },
  ];

  const closeAndScrollTop = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors cursor-pointer ${
      isActive
        ? 'text-[#C8522C] font-bold border-b-2 border-[#C8522C] pb-0.5'
        : 'text-[#444748] hover:text-black'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full mt-3 mx-auto px-4">
      <div className="bg-[#F7F5F1]/90 backdrop-blur-md rounded-full mx-auto max-w-fit px-5 md:px-7 py-2.5 border border-black/15 flex items-center gap-4 md:gap-7 shadow-sm transition-all duration-300">
        <NavLink
          to="/"
          onClick={closeAndScrollTop}
          className="hover:opacity-80 transition-opacity flex items-center focus:outline-none cursor-pointer shrink-0 group"
          title="Visalatchi Manufactures Home"
        >
          <BrandLogo variant="nav" />
        </NavLink>

        <div className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={closeAndScrollTop} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => {
            navigate('/contact');
            closeAndScrollTop();
          }}
          className="hidden sm:block bg-[#C8522C] text-[#F7F5F1] px-5 py-1.5 text-[11px] font-semibold uppercase tracking-widest hover:bg-black transition-colors duration-300 rounded-sm cursor-pointer shrink-0"
        >
          Get Quote
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-black p-1 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-[#F7F5F1] border border-black/15 rounded-2xl p-6 shadow-xl flex flex-col gap-3 lg:hidden z-50">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeAndScrollTop}
              className="text-left text-xs font-semibold tracking-widest uppercase py-2 border-b border-black/5 text-[#1b1c1a] hover:text-[#C8522C]"
            >
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              navigate('/contact');
              closeAndScrollTop();
            }}
            className="w-full bg-[#C8522C] text-white py-3 font-semibold text-xs uppercase tracking-widest rounded-sm text-center mt-2"
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};
