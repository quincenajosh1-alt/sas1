import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#E8E3DA] border-t border-[#DADFD5] text-[#343A35] transition-colors">
      {/* Central Philosophical Anchor Band */}
      <div className="border-b border-[#DADFD5] py-12 px-4 sm:px-6 lg:px-8 text-center bg-[#FAF8F5]/50">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#356AE6]">
            Core Philosophy
          </span>
          <p className="font-editorial text-2xl sm:text-3xl italic text-[#343A35] leading-snug">
            "You are not defined by who you used to be or limited by who you are today. You are continuously becoming."
          </p>
          <p className="text-xs text-[#343A35]/65">
            Self and Society (SAS) Academic Reflection Journal
          </p>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-2xl font-serif-display font-bold tracking-tight text-[#343A35]">
              BEcoming: A Journey Within<span className="text-[#356AE6]">.</span>
            </div>
            <p className="font-editorial italic text-lg text-[#343A35]/90">
              "There is always more to discover within."
            </p>
            <p className="text-sm text-[#343A35]/75 leading-relaxed max-w-md">
              A Personal Journey of Identity, Growth, and Well-being. A digital journal and academic portfolio documenting psychological theories, lived experiences, peer interviews, and future manifestos.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#343A35]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#343A35]/80">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#356AE6] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#356AE6] transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('reflections')}
                  className="hover:text-[#356AE6] transition-colors"
                >
                  My Reflections (8 Topics)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('interviews')}
                  className="hover:text-[#356AE6] transition-colors"
                >
                  Through Their Eyes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('manifestos')}
                  className="hover:text-[#356AE6] transition-colors"
                >
                  My Manifestos
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Back to top */}
          <div className="flex md:justify-end items-start pt-2">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-[#FAF8F5] border border-[#DADFD5] text-[#343A35] hover:bg-[#DADFD5] active:bg-[#CCD4C7] transition-all shadow-sm"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4 text-[#356AE6]" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#DADFD5] flex flex-col sm:flex-row items-center justify-between text-xs text-[#343A35]/70 gap-4">
          <p>© {new Date().getFullYear()} BEcoming: A Journey Within. Academic Portfolio. All personal reflections preserved.</p>
        </div>
      </div>
    </footer>
  );
};
