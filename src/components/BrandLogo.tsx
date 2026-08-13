import React from 'react';

interface BrandLogoProps {
  variant?: 'nav' | 'footer' | 'hero' | 'small' | 'large' | 'icon';
  className?: string;
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  variant = 'nav', 
  className = '',
  showText = true 
}) => {
  // Visalatchi "V" stylized ribbon packaging mark
  const logoImageSrc = "https://lh3.googleusercontent.com/aida-public/AB6AXuC9R9jkHfIHpp-rHGWas-XTdRDmh736cpbPfz2aYBNi3y0OGwLt4nC7943ZKj_5jabLeXo_u72kooxrDZEDFzdlnFnsEAzpN-kRrzFtaKw-Y-dp_ouTJ1_xWqMLl_qlnT3i3b9lDIZK-m2nnK-cPKFfYF89wMqc6R5F8uA3gqa35SgL-OdtFSvSLWPHUI61FNgVB_MOSttS_ktB7jy1_nxPoHa2rNxHxvcZrWOsKRPiFxTAhXTxaLUY";

  if (variant === 'icon') {
    return (
      <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
        <img 
          src={logoImageSrc} 
          alt="Visalatchi Logo" 
          className="h-7 w-auto object-contain rounded-xs"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 shrink-0 ${className}`}>
      {/* Brand Icon */}
      <div className="relative flex items-center justify-center shrink-0">
        <img 
          src={logoImageSrc} 
          alt="Visalatchi Packaging Logo" 
          className={`object-contain transition-transform group-hover:scale-105 ${
            variant === 'large' || variant === 'hero' 
              ? 'h-10 md:h-12 w-auto' 
              : variant === 'footer' 
              ? 'h-8 md:h-9 w-auto' 
              : 'h-6 md:h-7 w-auto'
          }`}
        />
      </div>

      {/* Brand Text Logotype */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-serif-display font-bold leading-none tracking-tight text-[#1b1c1a] ${
            variant === 'large' || variant === 'hero'
              ? 'text-2xl md:text-3xl'
              : variant === 'footer'
              ? 'text-xl md:text-2xl'
              : 'text-base md:text-lg'
          }`}>
            Visalatchi
          </span>
          <span className={`font-sans uppercase font-semibold tracking-widest text-[#C8522C] leading-none mt-0.5 ${
            variant === 'large' || variant === 'hero'
              ? 'text-[10px] md:text-[11px]'
              : 'text-[8px] md:text-[9px]'
          }`}>
            Manufactures
          </span>
        </div>
      )}
    </div>
  );
};
