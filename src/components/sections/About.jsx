import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Award, Code2, Globe, Heart, Shield } from 'lucide-react';
import profile from '/src/images/portfolio.jpeg';

const About = () => {
  const manifesto = [
    {
      icon: Shield,
      title: 'Reliable Architecture',
      desc: 'Form validation, token auth flows, and adapter systems designed for absolute reliability.'
    },
    {
      icon: Code2,
      title: 'Clean Abstractions',
      desc: 'Sticking to component reusability, strict typings, and decoupling logic from rendering views.'
    },
    {
      icon: Heart,
      title: 'Fluid Human UX',
      desc: 'Micro-animations, responsive layout transitions, and touch target adjustments.'
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-transparent">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 px-4 sm:px-0">
        <div className="text-center mb-8 md:mb-10">
          <div className="mb-3 inline-flex items-center space-x-2 px-3.5 py-1.5 glass rounded-full border border-slate-200/80 dark:border-white/5">
            <Compass className="h-3.5 w-3.5 text-primary-600 dark:text-accent-blue" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">
              Biography
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter text-slate-900 dark:text-white">
            The Engineer's <span className="text-gradient">Manifesto</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium max-w-xl mx-auto mt-2">
            A look at my engineering principles, storytelling journey, and stats.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Biography Journey (Col-span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-7 card-premium flex flex-col justify-between"
          >
            <div className="space-y-3.5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary-600 dark:text-accent-blue">
                <Sparkles className="h-4 w-4" />
                The Profile
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-heading leading-tight">
                Engineering scalable web applications & impactful user experiences.
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                Detail-oriented and adaptable developer with experience building scalable web applications. Skilled in React.js, SCSS, Tailwind CSS, Django, and RESTful APIs. Proven ability to enhance legacy systems, work in agile teams, and deliver responsive, accessible interfaces focused on clean code, performance optimization, and measurable product results.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-4 border-t border-slate-200/80 dark:border-white/5 pt-3.5">
              {['Kathmandu, Nepal', 'BCA @ Bhaktapur Multiple Campus', 'React.js & Django', 'Full-Stack Engineering'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80 dark:bg-slate-900 dark:border-white/5 text-[9px] font-black uppercase tracking-widest dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Profile Picture & Stats (Col-span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-5 card-premium flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Visual background image with zoom */}
            <div className="absolute inset-0 z-0 opacity-10 group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none">
              <img src={profile} alt="Saurav" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary-500 dark:text-primary-400">
                <Award className="h-4 w-4" />
                Performance Metrics
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-0.5">
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-heading leading-none">4+</h4>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Years Learning</p>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-heading leading-none">15+</h4>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Deployments</p>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-heading leading-none">98%</h4>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Avg Lighthouses</p>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-heading leading-none">0.0</h4>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Layout Shift (CLS)</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-white/5 pt-3.5 mt-4">
              <Globe className="h-4 w-4 text-primary-600 dark:text-accent-blue" />
              <span>Production Systems Delivered</span>
            </div>
          </motion.div>

          {/* Card 3: Education & Active Focus (Col-span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="md:col-span-5 card-premium flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary-600 dark:text-accent-blue">
                Academic & Professional Standing
              </span>
              <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-heading leading-tight">
                Bachelor of Computer Application
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                Bhaktapur Multiple Campus, Nepal (June 2022 - Present). Combining rigorous academic foundations in computer applications with real-world fullstack production deployments and frontend architectures.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-white/5 pt-3.5 mt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Bhaktapur Multiple Campus • June 2022 - Present</span>
            </div>
          </motion.div>

          {/* Card 4: Manifesto/Core Principles (Col-span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-7 card-premium space-y-4"
          >
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary-500 dark:text-primary-400">
              <Code2 className="h-4 w-4" />
              Engineering Manifesto
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              {manifesto.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="p-2 bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-white/5 rounded-lg text-primary-500 dark:text-primary-400 w-fit">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <h5 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-tight font-heading">
                      {item.title}
                    </h5>
                    <p className="text-slate-500 text-[10px] sm:text-[11px] font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;