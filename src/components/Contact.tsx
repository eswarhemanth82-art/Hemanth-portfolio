import React, { useState } from 'react';
import {
  Mail,
  Send,
  Linkedin,
  Github,
  Check,
  Copy,
  MapPin,
  Clock,
  Sparkles,
  MessageSquare,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate swift client-side submission with feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-[#2DD4BF]/20 text-xs font-mono text-[#2DD4BF] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMUNICATION CHANNEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Let's Collaborate & <span className="text-gradient-teal">Build Together</span>
          </h2>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed">
            Interested in AI-driven cybersecurity pipelines, machine learning analytics, or full-time
            opportunities? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Info in Glass Panels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Glass Panel */}
            <div
              id="contact-email-card"
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 relative overflow-hidden"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F264A] border border-[#2DD4BF]/30 flex items-center justify-center text-[#2DD4BF]">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  type="button"
                  id="copy-email-button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg glass-panel hover:bg-[#2DD4BF]/15 text-xs text-[#2DD4BF] border border-[#2DD4BF]/30 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {emailCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2DD4BF]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-[#2DD4BF] transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-slate-300 mt-2">
                Fast response guaranteed within 24 hours for engineering inquiries.
              </p>
            </div>

            {/* Social & Professional Links */}
            <div className="grid grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin-link"
                className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col items-start justify-between group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0F264A] border border-[#2DD4BF]/30 flex items-center justify-center text-[#2DD4BF] mb-3 group-hover:border-[#2DD4BF] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white group-hover:text-[#2DD4BF] transition-colors block">
                    LinkedIn
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Connect professionally</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github-link"
                className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col items-start justify-between group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0F264A] border border-[#2DD4BF]/30 flex items-center justify-center text-[#2DD4BF] mb-3 group-hover:border-[#2DD4BF] transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white group-hover:text-[#2DD4BF] transition-colors block">
                    GitHub
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Repositories & code</span>
                </div>
              </a>
            </div>

            {/* Timezone & Location Glass Card */}
            <div
              id="contact-location-card"
              className="glass-panel rounded-2xl p-5 flex items-center justify-between text-xs text-slate-300"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#2DD4BF]" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-[#2DD4BF]" />
                <span>IST (UTC +5:30)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Simple Glass Form */}
          <div className="lg:col-span-7">
            <div
              id="contact-form-panel"
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#2DD4BF]/25 shadow-2xl relative"
            >
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-[#2DD4BF]" />
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
              </div>

              {submitted && (
                <div
                  id="contact-form-success"
                  className="mb-6 p-4 rounded-xl bg-[#2DD4BF]/15 border border-[#2DD4BF]/40 text-[#2DD4BF] text-sm flex items-center gap-3 animate-in fade-in"
                >
                  <Check className="w-5 h-5 shrink-0" />
                  <span>
                    Thank you! Your message has been received. Hemi will get back to you shortly at {formData.email || 'your email'}.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Maya Chen"
                    className="w-full px-4 py-3 rounded-xl bg-[#071326]/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] transition-all text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. maya.chen@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#071326]/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] transition-all text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your inquiry, project requirements, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-[#071326]/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="contact-form-submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-[#0B1E3D] bg-[#2DD4BF] hover:bg-[#20b8a4] transition-all duration-200 teal-glow shadow-lg shadow-[#2DD4BF]/20 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#0B1E3D] border-t-transparent rounded-full animate-spin"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
