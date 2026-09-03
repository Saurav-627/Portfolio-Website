import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp, Sparkles, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollTo } from '../../hooks/useScrollTo';

const Footer = () => {
  const { scrollToSection } = useScrollTo();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Saurav-627', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sauravluitel/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sauravluitel.work@gmail.com', label: 'Email' }
  ];

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 relative overflow-hidden bg-[var(--bg-main)] border-t border-[rgba(99,102,241,0.15)]">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-primary-500/5 via-transparent to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Left Column: Brand Statement */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-primary-500 rounded-xl shadow-lg shadow-primary-500/25">
                <Terminal className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter text-white">SAURAV LUITEL</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              Designing and developing digital solutions that merge robust software engineering architecture with human-centered aesthetics.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 border border-white/5 rounded-xl text-slate-400 hover:text-primary-400 hover:border-primary-500/35 hover:scale-110 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column: Pages */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-accent-blue">Navigation</h4>
            <div className="flex flex-col space-y-2.5">
              <Link to="/" className="text-slate-400 hover:text-white font-semibold text-sm transition-colors w-fit">
                Home Portfolio
              </Link>
              <Link to="/projects" className="text-slate-400 hover:text-white font-semibold text-sm transition-colors w-fit">
                All Projects Archive
              </Link>
            </div>
          </div>

          {/* Right Column: Meta & Actions */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-accent-blue">System Specifications</h4>
            <div className="space-y-2 text-xs font-semibold text-slate-500">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Release Version</span>
                <span className="text-slate-300 font-mono">v2.4.2-stable</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Last Deployed</span>
                <span className="text-slate-300">June 2026</span>
              </div>
              <div className="flex justify-between">
                <span>Environment</span>
                <span className="text-slate-300 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Production (Vite)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Saurav Luitel. Engineered with pride in Kathmandu, Nepal.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
              <span>Precision Crafting</span>
              <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500 animate-pulse" />
              <span>Fullstack</span>
            </div>

            <button
              onClick={handleBackToTop}
              className="p-3 bg-slate-900 border border-white/5 hover:border-primary-500/40 rounded-xl text-slate-400 hover:text-white transition-all cursor-pointer shadow-lg"
              title="Return to top"
            >
              <ArrowUp className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;