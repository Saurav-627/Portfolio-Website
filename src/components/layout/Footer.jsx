import React from 'react';
import { Github, Linkedin, Mail, Heart, Code, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Saurav-627', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sauravluitel/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sauravluitel.work@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' }
  ];

  return (
    <footer className="pt-16 md:pt-32 pb-8 md:pb-16 relative overflow-hidden transition-colors duration-300">
      <div className="absolute bottom-0 left-0 w-full h-[300px] md:h-[400px] bg-gradient-to-t from-primary-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-16 md:mb-24">
          {/* Brand & Vision */}
          <div className="md:col-span-6 space-y-6 md:space-y-10">
            <Link to="/" className="flex items-center space-x-4 group w-fit">
              <div className="p-2.5 md:p-3 bg-primary-500 rounded-xl md:rounded-[1.25rem] group-hover:rotate-12 transition-transform shadow-lg shadow-primary-500/20">
                <Code className="h-6 w-6 md:h-7 md:w-7 text-white" />
              </div>
              <span className="text-2xl md:text-3xl font-black tracking-tighter">SAURAV</span>
            </Link>
            <p className="text-lg md:text-2xl font-medium opacity-60 max-w-md leading-relaxed">
              Designing and developing soulful digital experiences that merge elite architecture with human aesthetics.
            </p>
            <div className="flex space-x-4 md:space-x-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 md:p-4 glass rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-110 hover:text-primary-500 hover:shadow-xl hover:shadow-primary-500/10"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6 md:space-y-10">
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] opacity-40">Navigation</h4>
            <ul className="space-y-4 md:space-y-6">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-lg md:text-xl font-bold hover:text-primary-500 transition-colors flex items-center gap-3 group w-fit"
                  >
                    {link.name}
                    <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="md:col-span-3 space-y-6 md:space-y-10">
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] opacity-40">Collaboration</h4>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg font-medium opacity-60 leading-relaxed">
                Have a visionary project in mind? Let's build it together.
              </p>
              <a
                href="mailto:sauravluitel.work@gmail.com"
                className="inline-block group"
              >
                <span className="text-lg md:text-xl font-black text-primary-500 group-hover:underline underline-offset-[8px] md:underline-offset-[12px] transition-all decoration-2 break-all">
                  sauravluitel.work@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-16 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
          <p className="text-[10px] md:text-sm font-black uppercase tracking-widest opacity-40">
            © {new Date().getFullYear()} Saurav Luitel. Built from scratch in Nepal.
          </p>
          <div className="flex items-center gap-3 text-[10px] md:text-sm font-black uppercase tracking-widest opacity-60">
            <span>Engineering with</span>
            <Heart className="h-4 w-4 md:h-5 md:w-5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>& Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;