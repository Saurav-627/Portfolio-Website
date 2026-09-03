import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download, Sparkles } from 'lucide-react';
import { useScrollTo } from '../../hooks/useScrollTo';

const Hero = () => {
  const { scrollToSection } = useScrollTo();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse coordinates for spotlight cursor glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Saurav-627', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sauravluitel/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sauravluitel.work@gmail.com', label: 'Email' }
  ];

  // Technical floating logos
  const techLogos = [
    { name: 'React', color: 'text-sky-400', style: { top: '20%', left: '15%' } },
    { name: 'Django', color: 'text-emerald-500', style: { top: '35%', right: '12%' } },
    { name: 'JavaScript', color: 'text-yellow-400', style: { bottom: '25%', left: '10%' } },
    { name: 'Tailwind CSS', color: 'text-cyan-400', style: { bottom: '30%', right: '15%' } },
    { name: 'PostgreSQL', color: 'text-blue-500', style: { top: '15%', right: '25%' } }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-24 md:pt-0"
    >
      {/* Spotlight Shadow follows cursor */}
      <div className="spotlight-overlay" />

      {/* Aurora Backdrop Layers */}
      <div className="aurora-container">
        <div className="aurora-blob aurora-1 animate-pulse-slow" />
        <div className="aurora-blob aurora-2 animate-pulse-slow animate-delay-300" />
        <div className="aurora-blob aurora-3 animate-pulse-slow animate-delay-500" />
      </div>

      {/* Grid Pattern overlay */}
      <div className="grid-overlay opacity-30" />

      {/* Floating Technology Badges */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        {techLogos.map((tech, idx) => (
          <motion.div
            key={idx}
            style={tech.style}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 5 + idx,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className={`absolute px-4 py-2 rounded-xl glass border-white/5 text-xs font-black uppercase tracking-widest ${tech.color} shadow-2xl flex items-center gap-1.5`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {tech.name}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 md:py-14 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Availability Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-5 inline-flex items-center space-x-2 px-3.5 py-1.5 glass rounded-full border border-slate-200/80 dark:border-white/5"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent-blue animate-pulse" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-slate-700 dark:text-white">
              Open for Senior Placements & Contracts
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </motion.div>

          {/* Heading with responsive scaling clamps */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="font-black mb-5 leading-[1.1] tracking-tighter text-slate-900 dark:text-white font-heading"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 3.5rem)' }}
            >
              Building software that <br />
              <span className="text-gradient">people actually love</span> using.
            </h1>
          </motion.div>

          {/* Subtitle biography summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-semibold max-w-2xl leading-relaxed mb-8"
          >
            Hi, I'm <span className="text-slate-900 dark:text-white underline decoration-[#6366F1] decoration-2 underline-offset-8">Saurav Luitel</span>,
            a Full Stack Developer skilled in React.js, SCSS, Tailwind CSS, Django, and RESTful APIs, crafting scalable web applications and impactful user experiences.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 w-full sm:w-auto px-4 sm:px-0"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary !px-5 !py-2.5 w-full sm:w-auto cursor-pointer text-xs sm:text-sm"
            >
              Analyze My Work
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="btn-outline !px-5 !py-2.5 w-full sm:w-auto cursor-pointer text-xs sm:text-sm"
            >
              Get in Touch
            </button>

            {/* <a
              href="/Saurav_Luitel_Resume.pdf"
              download
              className="btn-outline !px-5 !py-2.5 w-full sm:w-auto cursor-pointer text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-white"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a> */}
          </motion.div>

          {/* Social Links Ribbon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl hover:border-primary-500/35 hover:scale-110 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300"
                aria-label={label}
              >
                <Icon className="h-4.5 w-4.5 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-white transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Downward scrolling indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-primary-500 to-transparent relative">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-[-2px] w-[5px] h-[5px] bg-[#38BDF8] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
