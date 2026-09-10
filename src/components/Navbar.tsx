import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Terminal, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#0B1E3D]/80 backdrop-blur-xl border-b border-[#2DD4BF]/15 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          id="nav-logo"
          className="group flex items-center gap-2.5 text-white focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-[#0F264A] border border-[#2DD4BF]/30 flex items-center justify-center text-[#2DD4BF] group-hover:border-[#2DD4BF] transition-colors shadow-sm shadow-[#2DD4BF]/10">
            <Shield className="w-4 h-4 transition-transform group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight flex items-center gap-1 text-white">
              Hemi<span className="text-[#2DD4BF] animate-pulse">.</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase -mt-1">
              AI & CyberSec
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#2DD4BF]/15 text-[#2DD4BF] border border-[#2DD4BF]/30 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            id="nav-cta-contact"
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide uppercase text-[#0B1E3D] bg-[#2DD4BF] hover:bg-[#20b8a4] transition-all duration-200 teal-glow shadow-md hover:shadow-lg hover:shadow-[#2DD4BF]/25"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl glass-panel text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden mt-2 mx-4 p-4 rounded-2xl glass-panel border border-[#2DD4BF]/20 flex flex-col gap-2 shadow-2xl backdrop-blur-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-[#2DD4BF] hover:bg-[#2DD4BF]/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 mt-1">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide uppercase text-[#0B1E3D] bg-[#2DD4BF] hover:bg-[#20b8a4] text-center"
            >
              Let's Connect
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
