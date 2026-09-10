import React from 'react';
import {
  Briefcase,
  ShieldCheck,
  Search,
  KeyRound,
  FileCode,
  AlertTriangle,
  Lock,
  ArrowRight,
  Terminal,
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-[#2DD4BF]/20 text-xs font-mono text-[#2DD4BF] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRY TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Professional Experience & <span className="text-gradient-teal">Threat Research</span>
          </h2>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed">
            Applied offensive-security research, real-time threat hunting, and automated defense mechanism
            prototyping in an enterprise cybersecurity environment.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.company}
              id={`experience-card-${exp.company.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-9 relative overflow-hidden"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F264A] border border-[#2DD4BF]/30 flex items-center justify-center text-[#2DD4BF] shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider">
                      {exp.period} • {exp.location}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-0.5">{exp.role}</h3>
                    <p className="text-base text-slate-300 font-medium">{exp.company}</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/25 text-xs font-mono self-start sm:self-auto">
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>{exp.projectFocus}</span>
                </div>
              </div>

              {/* Core Project Deep Dive */}
              <div className="py-6">
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#2DD4BF]" />
                  <span>Keylogger & Password-Grabbing Detection Implementation</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {exp.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#071326]/60 border border-white/5 text-xs sm:text-sm text-slate-300 flex items-start gap-3 hover:border-[#2DD4BF]/30 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#2DD4BF] mt-1.5 shrink-0"></span>
                      <p className="leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>

                {/* Technical Architecture Flow */}
                <div className="p-5 rounded-2xl bg-[#071326]/80 border border-[#2DD4BF]/20">
                  <span className="text-[11px] font-mono text-[#2DD4BF] uppercase block mb-3">
                    Threat Detection Pipeline Architecture
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-[#0B1E3D] border border-white/5 text-slate-200">
                      <span className="font-mono text-[10px] text-slate-400 block">STAGE 1</span>
                      <span className="font-semibold text-white">Hook Monitoring</span>
                      <p className="text-[11px] text-slate-400 mt-1">Intercepting SetWindowsHookEx & GetAsyncKeyState</p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#0B1E3D] border border-white/5 text-slate-200">
                      <span className="font-mono text-[10px] text-slate-400 block">STAGE 2</span>
                      <span className="font-semibold text-white">Heuristic Scoring</span>
                      <p className="text-[11px] text-slate-400 mt-1">Comparing frequency against human typing baseline</p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#0B1E3D] border border-white/5 text-slate-200">
                      <span className="font-mono text-[10px] text-slate-400 block">STAGE 3</span>
                      <span className="font-semibold text-white">Memory Triage</span>
                      <p className="text-[11px] text-slate-400 mt-1">Identifying scraped credential strings in heap</p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#0B1E3D] border border-white/5 text-slate-200">
                      <span className="font-mono text-[10px] text-slate-400 block">STAGE 4</span>
                      <span className="font-semibold text-white">Quarantine & Alert</span>
                      <p className="text-[11px] text-slate-400 mt-1">Isolating PID and notifying system admin</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies Tag Bar */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-mono text-slate-400">Zero to Infinity HybSec</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
