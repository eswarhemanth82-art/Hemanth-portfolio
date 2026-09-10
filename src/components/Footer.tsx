import React from 'react';
import { ArrowUp, Shield, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative z-10 border-t border-white/10 bg-[#071326]/90 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#0F264A] border border-[#2DD4BF]/30 flex items-center justify-center text-[#2DD4BF]">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-base text-white">
                {PERSONAL_INFO.name}{' '}
                <span className="text-[#2DD4BF] font-mono font-normal">("{PERSONAL_INFO.nickname}")</span>
              </span>
              <p className="text-xs text-slate-400 font-mono">{PERSONAL_INFO.title}</p>
            </div>
          </div>

          {/* Center Info */}
          <div className="text-xs text-slate-400 text-center md:text-left font-mono">
            <span>© {new Date().getFullYear()} T.S. Hemanth. All rights reserved.</span>
            <span className="hidden sm:inline mx-2">•</span>
            <span className="block sm:inline mt-1 sm:mt-0 text-[#2DD4BF]/80">Chennai, India</span>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass-panel hover:bg-[#2DD4BF]/15 text-slate-300 hover:text-[#2DD4BF] border border-[#2DD4BF]/30 transition-all flex items-center gap-2 text-xs font-mono cursor-pointer"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
