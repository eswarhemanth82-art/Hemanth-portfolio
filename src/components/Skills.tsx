import React, { useState } from 'react';
import {
  Code2,
  FileCode2,
  Globe,
  Database,
  Layers,
  ShieldAlert,
  Lock,
  Cpu,
  BrainCircuit,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Languages & Core', 'Security & Pentesting', 'AI & Machine Learning', 'Data & Web'];

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'Python':
        return <Code2 className="w-6 h-6 text-[#2DD4BF]" />;
      case 'Java':
        return <FileCode2 className="w-6 h-6 text-[#2DD4BF]" />;
      case 'HTML':
        return <Globe className="w-6 h-6 text-[#2DD4BF]" />;
      case 'MongoDB':
        return <Database className="w-6 h-6 text-[#2DD4BF]" />;
      case 'SQL':
        return <Layers className="w-6 h-6 text-[#2DD4BF]" />;
      case 'Penetration Testing':
        return <ShieldAlert className="w-6 h-6 text-[#2DD4BF]" />;
      case 'Network Security':
        return <Lock className="w-6 h-6 text-[#2DD4BF]" />;
      case 'Machine Learning':
        return <Cpu className="w-6 h-6 text-[#2DD4BF]" />;
      case 'Deep Learning':
        return <BrainCircuit className="w-6 h-6 text-[#2DD4BF]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#2DD4BF]" />;
    }
  };

  const filteredSkills =
    activeCategory === 'All' ? SKILLS : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-[#2DD4BF]/20 text-xs font-mono text-[#2DD4BF] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Core Skills & <span className="text-gradient-teal">Domain Expertise</span>
          </h2>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed">
            A specialized toolkit spanning defensive network security, penetration testing, and
            rigorous machine learning engineering.
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                id={`skills-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#2DD4BF] text-[#0B1E3D] font-semibold teal-glow shadow-md shadow-[#2DD4BF]/20'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-[#2DD4BF]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 9 Glass Cards Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0F264A] border border-[#2DD4BF]/30 flex items-center justify-center group-hover:border-[#2DD4BF] group-hover:shadow-md group-hover:shadow-[#2DD4BF]/20 transition-all">
                    {getSkillIcon(skill.name)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/20">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#2DD4BF] transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{skill.description}</p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px]">{skill.category}</span>
                <span className="inline-flex items-center gap-1 text-[#2DD4BF] font-mono text-[11px]">
                  <CheckCircle className="w-3 h-3" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
