import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sparkles, ExternalLink } from 'lucide-react';
import { useScrollTo } from '../../hooks/useScrollTo';

const Hero = () => {
  const { scrollToSection } = useScrollTo();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Saurav-627', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sauravluitel/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sauravluitel.work@gmail.com', label: 'Email' }
  ];

  return (
    <section id="home" className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Orbs - Reduced size on mobile */}
      <div className="absolute top-1/4 -left-10 md:-left-20 w-48 md:w-96 h-48 md:h-96 bg-primary-500/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-10 md:-right-20 w-48 md:w-96 h-48 md:h-96 bg-accent-violet/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow animate-delay-200"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 md:py-20 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8 hidden md:inline-flex items-center space-x-2 md:space-x-3 px-4 md:px-6 py-1.5 md:py-2 glass rounded-full"
          >
            <Sparkles className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary-500" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
              Available for new projects
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 md:mb-8 leading-[1.1] md:leading-[1] tracking-tighter">
              <span className="block">Design. Code.</span>
              <span className="text-gradient block mt-1 md:mt-2">
                Excellence.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 md:mb-12 max-w-2xl font-medium leading-relaxed px-4 md:px-0"
          >
            I'm <span className="text-gray-900 dark:text-white font-bold underline decoration-primary-500 decoration-2 underline-offset-4 md:underline-offset-8">Saurav Luitel</span>,
            a Fullstack Developer focused on creating high-performance
            digital experiences with elite architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 md:mb-16 w-full sm:w-auto px-6 sm:px-0"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary group !px-8 md:!px-10 !py-4 md:!py-5 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-3">
                Explore Work <ExternalLink className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="btn-outline !px-8 md:!px-10 !py-4 md:!py-5 w-full sm:w-auto"
            >
              Learn More
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-4 md:space-x-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3.5 md:p-4 glass rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary-500/10"
                aria-label={label}
              >
                <Icon className="h-5 w-5 md:h-6 md:w-6 relative z-10 transition-colors group-hover:text-primary-500" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on small mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-primary-500 via-primary-500/20 to-transparent rounded-full relative">
          <motion.div
            animate={{ y: [0, 32, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-[-2px] w-[5px] h-[5px] bg-primary-500 rounded-full blur-[1px]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;