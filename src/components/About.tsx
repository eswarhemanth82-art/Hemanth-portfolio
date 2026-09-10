import React from 'react';
import {
  GraduationCap,
  ShieldCheck,
  BrainCircuit,
  Target,
  Cpu,
  Binary,
  CheckCircle2,
  Layers,
  Sparkles,
} from 'lucide-react';
import { EDUCATIONS, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const upskillingTopics = [
    'Python for AI/Data',
    'Pandas & NumPy',
    'SQL Analytics',
    'Classical ML (Scikit-Learn)',
    'Neural Networks & MLP',
    'Deep Learning Architectures',
    'Large Language Models (LLMs)',
    'Prompt Engineering & Agentic Workflows',
  ];

  const cyberCompetencies = [
    'System Auditing & Hardening',
    'Vulnerability Assessment & Penetration Testing (VAPT)',
    'Network Security & Packet Forensics',
    'Threat Intelligence & Attack Surface Mapping',
    'Malware Heuristics & Keylogger Detection',
    'OWASP Top 10 Security Posture',
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-[#2DD4BF]/20 text-xs font-mono text-[#2DD4BF] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>BACKGROUND & VISION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Engineering Security with <span className="text-gradient-teal">Artificial Intelligence</span>
          </h2>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed">
            Bridging foundational engineering discipline, offensive security tactics, and
            next-generation predictive intelligence.
          </p>
        </div>

        {/* Strategic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Card 1: Academic Pedigree */}
          <div
            id="about-education-card"
            className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0F264A] border border-[#2DD4BF]/30 flex items-center justify-center text-[#2DD4BF]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Education & Academics</h3>
                  <p className="text-xs font-mono text-slate-400">Formal Technical Foundation</p>
                </div>
              </div>

              <div className="space-y-6">
                {EDUCATIONS.map((edu, idx) => (
                  <div
                    key={edu.degree}
                    className="relative pl-6 border-l-2 border-[#2DD4BF]/30 hover:border-[#2DD4BF] transition-colors"
                  >
                    <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#0B1E3D] border-2 border-[#2DD4BF]"></div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="text-base font-semibold text-slate-100">{edu.degree}</h4>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/20">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-[#2DD4BF] font-medium mb-1.5">{edu.institution}</p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">{edu.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.focus.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Cybersecurity Credentials & Hands-on Depth */}
          <div
            id="about-cybersecurity-card"
            className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0F264A] border border-[#2DD4BF]/30 flex items-center justify-center text-[#2DD4BF]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Cybersecurity & Threat Defense</h3>
                  <p className="text-xs font-mono text-slate-400">Offensive & Defensive Mastery</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Hands-on rigor in penetration testing, network packet auditing, and proactive
                vulnerability triage. Experienced in dissecting malware trajectories and engineering
                defensive countermeasures.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cyberCompetencies.map((comp) => (
                  <div
                    key={comp}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-[#071326]/60 border border-white/5 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Standards: NIST & OWASP Frameworks</span>
              <span className="text-[#2DD4BF] font-mono">Security Verified</span>
            </div>
          </div>
        </div>

        {/* Card 3: AI/ML Upskilling & Convergence */}
        <div
          id="about-upskilling-card"
          className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0F264A] border border-[#2DD4BF]/30 flex items-center justify-center text-[#2DD4BF]">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AI/ML Upskilling Journey</h3>
                  <p className="text-xs font-mono text-slate-400">Continuous Technological Evolution</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Actively expanding depth in machine learning pipelines, deep neural architectures,
                and large language models to construct automated defensive scripts, threat intelligence
                extractors, and anomaly classifiers.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#2DD4BF]">
                <Sparkles className="w-4 h-4" />
                <span>Daily hands-on coding & modeling</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {upskillingTopics.map((topic) => (
                  <div
                    key={topic}
                    className="p-3 rounded-xl bg-[#071326]/70 border border-[#2DD4BF]/15 hover:border-[#2DD4BF]/40 transition-colors flex flex-col justify-center text-center"
                  >
                    <span className="text-xs font-medium text-slate-200">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Primary Goal Banner */}
        <div
          id="about-goal-banner"
          className="relative rounded-2xl overflow-hidden glass-panel p-6 sm:p-8 border border-[#2DD4BF]/40 teal-glow"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2DD4BF]/20 border border-[#2DD4BF]/40 flex items-center justify-center text-[#2DD4BF] shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#2DD4BF] tracking-wider uppercase">
                  Ultimate Engineering Objective
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  Apply AI-driven techniques to cybersecurity analytics and automation.
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="px-4 py-2 rounded-xl bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/30 text-xs font-mono">
                Predictive Defense
              </span>
              <span className="px-4 py-2 rounded-xl bg-white/5 text-slate-200 border border-white/10 text-xs font-mono">
                Zero-Trust AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
