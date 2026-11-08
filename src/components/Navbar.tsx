import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export type PageId = 'home' | 'about' | 'reflections' | 'interviews' | 'manifestos';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'reflections', label: 'My Reflections' },
    { id: 'interviews', label: 'Through Their Eyes' },
    { id: 'manifestos', label: 'My Manifestos' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#DADFD5] transition-all duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleLinkClick('home')}
          className="group text-left text-lg sm:text-xl lg:text-2xl font-serif-display font-bold tracking-tight text-[#343A35] whitespace-nowrap shrink-0 hover:text-[#356AE6] transition-colors focus:outline-none"
        >
          <span>BEcoming: A Journey Within</span>
          <span className="text-[#356AE6]">.</span>
        </button>

        {/* Zone 2: Desktop Navigation Links (single line, unboxed, active indicators) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#343A35]/80 whitespace-nowrap">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-1 text-sm font-medium transition-colors whitespace-nowrap hover:text-[#356AE6] ${
                  isActive ? 'text-[#356AE6] font-semibold' : 'text-[#343A35]/75'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#356AE6] rounded-full animate-in fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleLinkClick('manifestos')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#356AE6] rounded-lg hover:bg-[#2855be] active:bg-[#1f4399] transition-colors shadow-sm whitespace-nowrap"
          >
            <span>My Manifestos</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#343A35] hover:bg-[#E8E3DA] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#356AE6]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#DADFD5] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-[#EAF0FF] text-[#356AE6] font-semibold'
                    : 'text-[#343A35] hover:bg-[#E8E3DA]/70'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#356AE6]" />}
              </button>
            );
          })}

          <div className="pt-3 border-t border-[#DADFD5]/60 mt-3">
            <button
              onClick={() => handleLinkClick('manifestos')}
              className="w-full py-3 px-4 text-center text-sm font-semibold text-white bg-[#356AE6] hover:bg-[#2855be] rounded-lg transition-colors shadow-sm"
            >
              Read My Manifestos
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
