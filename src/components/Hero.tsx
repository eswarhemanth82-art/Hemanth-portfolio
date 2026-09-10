import React, { useState } from 'react';
import { ArrowDown, Mail, FolderGit2, MapPin, ShieldCheck, Sparkles, Terminal, Maximize2, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// User's custom profile photo of Hemi in navy suit with futuristic portfolio HUD
import hemiPortrait from '../assets/images/hemi_profile_photo_1789025085228.jpg';

export const Hero: React.FC = () => {
  const [showFullPhoto, setShowFullPhoto] = useState(false);
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Information & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Trust / Identity Badge */}
            <div
              id="hero-trust-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-[#2DD4BF]/25 mb-6 text-xs text-[#2DD4BF] font-mono tracking-wide"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DD4BF]"></span>
              </span>
              <MapPin className="w-3 h-3 text-[#2DD4BF]" />
              <span>{PERSONAL_INFO.location}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Open for Roles & Projects</span>
            </div>

            {/* Name & Nickname */}
            <h1
              id="hero-name"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3"
            >
              <span className="block text-slate-100">{PERSONAL_INFO.name}</span>
              <span className="text-2xl sm:text-3xl font-semibold text-[#2DD4BF] opacity-90 font-mono">
                ("{PERSONAL_INFO.nickname}")
              </span>
            </h1>

            {/* Tagline */}
            <div className="mb-6">
              <span
                id="hero-tagline"
                className="inline-block text-lg sm:text-xl font-medium text-slate-200 bg-[#0F264A]/60 px-3.5 py-1 rounded-lg border border-[#2DD4BF]/20 text-gradient-teal"
              >
                {PERSONAL_INFO.title}
              </span>
            </div>

            {/* Short Intro */}
            <p
              id="hero-intro"
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8"
            >
              {PERSONAL_INFO.shortIntro}
            </p>

            {/* Quick Core Pillars Pills */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg glass-panel text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2DD4BF]" />
                Cybersecurity Specialist
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg glass-panel text-xs text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-[#2DD4BF]" />
                AI-Driven Anomaly Detection
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg glass-panel text-xs text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-[#2DD4BF]" />
                Python & ETL Pipelines
              </span>
            </div>

            {/* CTA Buttons */}
            <div id="hero-actions" className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                id="hero-cta-projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-[#0B1E3D] bg-[#2DD4BF] hover:bg-[#20b8a4] transition-all duration-200 teal-glow shadow-lg shadow-[#2DD4BF]/20 active:scale-[0.98]"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
              </a>

              <a
                href="#contact"
                id="hero-cta-contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-slate-200 glass-panel glass-panel-hover border-[#2DD4BF]/20 active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-[#2DD4BF]" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Soft Teal Ambient Aura Glow behind the portrait */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#2DD4BF]/25 via-teal-500/10 to-[#0B1E3D] rounded-3xl blur-2xl opacity-70"></div>

              {/* Glassmorphic Frame */}
              <div
                id="hero-portrait-card"
                className="relative rounded-2xl glass-panel p-3 sm:p-4 border border-[#2DD4BF]/30 shadow-2xl overflow-hidden group"
              >
                {/* Photo container */}
                <div
                  className="relative rounded-xl overflow-hidden aspect-[9/16] max-h-[580px] bg-[#071326] border border-white/5 cursor-pointer"
                  onClick={() => setShowFullPhoto(true)}
                  title="Click to view full photo"
                >
                  <img
                    src={hemiPortrait}
                    alt="T.S. Hemanth in navy suit with futuristic portfolio HUD"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D] via-transparent to-transparent opacity-60"></div>

                  {/* Expand button top right */}
                  <div className="absolute top-3 right-3 p-2 rounded-lg bg-[#0B1E3D]/80 backdrop-blur-md border border-[#2DD4BF]/30 text-[#2DD4BF] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Floating Status Tag inside image bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0B1E3D]/85 backdrop-blur-md border border-[#2DD4BF]/25 shadow-lg">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse"></span>
                        <span className="font-medium text-slate-200">CyberSec + AI Engineer</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#2DD4BF] bg-[#2DD4BF]/10 px-2 py-0.5 rounded border border-[#2DD4BF]/20">
                        SRM Valliammai '24
                      </span>
                    </div>
                  </div>
                </div>

                {/* Corner decorative accent */}
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#2DD4BF]/50 rounded-tr pointer-events-none"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#2DD4BF]/50 rounded-bl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Image Modal */}
        {showFullPhoto && (
          <div
            id="hero-photo-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
            onClick={() => setShowFullPhoto(false)}
          >
            <div
              className="relative max-w-lg max-h-[90vh] glass-panel rounded-2xl p-2 border border-[#2DD4BF]/30 shadow-2xl overflow-hidden flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                id="hero-photo-modal-close"
                onClick={() => setShowFullPhoto(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-[#0B1E3D]/90 text-slate-300 hover:text-white border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={hemiPortrait}
                alt="T.S. Hemanth Full Portrait"
                className="max-h-[85vh] w-auto rounded-xl object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        )}

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            id="scroll-to-about-indicator"
            className="flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-[#2DD4BF] transition-colors font-mono"
            aria-label="Scroll to About Section"
          >
            <span>DISCOVER</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#2DD4BF]" />
          </a>
        </div>
      </div>
    </section>
  );
};
