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
    { label: 'D2C packaging', to: '/d2c-packaging' },
    { label: 'Food business', to: '/food-packaging' },
    { label: 'Export', to: '/export-packaging' },
    { label: 'Products', to: '/products' },
    { label: 'Appliance boxes', to: '/appliance-packaging-boxes' },
    { label: 'Process', to: '/process' },
    { label: 'About', to: '/about' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Blog', to: '/blog' },
  ];

  const closeAndScrollTop = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 cursor-pointer ${
      isActive ? 'text-[#0068c9] bg-[#e6f3fe]' : 'text-black/60 hover:text-black hover:bg-black/[0.04]'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-[0_0.7px_1.5px_rgba(0,0,0,0.015),0_3px_9px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto h-16 px-4 md:px-8 flex items-center justify-between gap-4">
        <NavLink
          to="/"
          onClick={closeAndScrollTop}
          className="hover:opacity-80 transition-opacity flex items-center focus:outline-none cursor-pointer shrink-0 group"
          title="Visalatchi Manufactures Home"
        >
          <BrandLogo variant="nav" />
        </NavLink>

        <div className="hidden lg:flex items-center gap-0.5">
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
          className="hidden sm:block bg-[#0075de] text-white px-4 py-1.5 text-sm font-medium hover:bg-[#005bab] transition-colors rounded-lg cursor-pointer shrink-0"
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
        <div className="absolute top-16 left-4 right-4 bg-white border border-black/10 rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col gap-3 lg:hidden z-50">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeAndScrollTop}
              className="text-left text-sm font-semibold py-2 border-b border-black/5 text-[#111111] hover:text-[#0068c9]"
            >
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              navigate('/contact');
              closeAndScrollTop();
            }}
            className="w-full bg-[#0075de] text-white py-3 font-medium text-sm rounded-lg text-center mt-2"
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};
