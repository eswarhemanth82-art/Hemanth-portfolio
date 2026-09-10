import React, { useState } from 'react';
import {
  Database,
  TrendingUp,
  Activity,
  Github,
  ExternalLink,
  Layers,
  Sparkles,
  ChevronRight,
  Code,
  X,
  Copy,
  Check,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'database':
        return <Database className="w-6 h-6 text-[#2DD4BF]" />;
      case 'trending-up':
        return <TrendingUp className="w-6 h-6 text-[#2DD4BF]" />;
      case 'activity':
        return <Activity className="w-6 h-6 text-[#2DD4BF]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#2DD4BF]" />;
    }
  };

  const handleCopyCommand = (project: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    const command = `git clone ${project.githubUrl}.git`;
    navigator.clipboard.writeText(command);
    setCopiedId(project.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-[#2DD4BF]/20 text-xs font-mono text-[#2DD4BF] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Data Engineering & <span className="text-gradient-teal">Analytics Projects</span>
          </h2>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed">
            Production-grade data pipelines, quantitative ingestion engines, and biometric predictive
            modeling built with Python, SQL, and Machine Learning.
          </p>
        </div>

        {/* 3 Glass Cards with Teal Gradient Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top teal glow highlight */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#2DD4BF]/10 rounded-full blur-2xl group-hover:bg-[#2DD4BF]/20 transition-all"></div>

              <div>
                {/* Teal Gradient Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2DD4BF]/25 via-[#0F264A] to-[#0B1E3D] border border-[#2DD4BF]/40 flex items-center justify-center mb-6 shadow-md shadow-[#2DD4BF]/10 group-hover:scale-105 group-hover:border-[#2DD4BF] transition-all">
                  {getProjectIcon(project.iconName)}
                </div>

                {/* Subtitle / Category */}
                <span className="text-[11px] font-mono tracking-wider uppercase text-[#2DD4BF] font-semibold block mb-1">
                  {project.subtitle}
                </span>

                {/* Exact Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2DD4BF] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Exact Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics / Key highlights badge */}
                {project.metrics && (
                  <div className="mb-6 p-2.5 rounded-xl bg-[#071326]/60 border border-white/5 text-xs font-mono text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]"></span>
                    <span>{project.metrics}</span>
                  </div>
                )}

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10 group-hover:border-[#2DD4BF]/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                {/* View on GitHub link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`project-github-${project.id}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-[#2DD4BF] transition-colors group/link"
                >
                  <Github className="w-4 h-4 text-[#2DD4BF]" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>

                {/* Inspect Details Button */}
                <button
                  type="button"
                  id={`project-details-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="px-3 py-1.5 rounded-lg glass-panel hover:bg-[#2DD4BF]/15 text-xs text-[#2DD4BF] border border-[#2DD4BF]/30 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Technical Modal */}
        {selectedProject && (
          <div
            id="project-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              id="project-modal-content"
              className="relative w-full max-w-2xl glass-panel rounded-2xl p-6 sm:p-8 border border-[#2DD4BF]/30 shadow-2xl bg-[#0B1E3D]/95 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                id="project-modal-close"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl glass-panel text-slate-400 hover:text-white focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F264A] border border-[#2DD4BF]/30 flex items-center justify-center text-[#2DD4BF]">
                  {getProjectIcon(selectedProject.iconName)}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#2DD4BF] uppercase">
                    {selectedProject.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Technical Architecture & Highlights
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#071326]/60 border border-white/5 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] mt-1.5 shrink-0"></span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-lg bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/20 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal footer links */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  id={`project-modal-copy-${selectedProject.id}`}
                  onClick={(e) => handleCopyCommand(selectedProject, e)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-xs text-slate-300 hover:text-white transition-colors"
                >
                  {copiedId === selectedProject.id ? (
                    <>
                      <Check className="w-4 h-4 text-[#2DD4BF]" />
                      <span className="text-[#2DD4BF]">Git Clone Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#2DD4BF]" />
                      <span>Copy Clone URL</span>
                    </>
                  )}
                </button>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs text-[#0B1E3D] bg-[#2DD4BF] hover:bg-[#20b8a4] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Open GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
