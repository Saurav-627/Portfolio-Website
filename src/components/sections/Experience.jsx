import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, Terminal, Trophy, Award, MapPin } from 'lucide-react';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'PocketSoft',
      location: 'Kathmandu, Nepal',
      period: '2024 - Present',
      summary: 'Delivered full-stack engineering on behalf of PocketSoft, solely architecting and deploying the production commercial platform for Prem Durbar Hotel & Nagarkot Zipline (premdurbar.com) from scratch, along with responsive corporate web systems.',
      highlights: [
        'Solely designed, engineered, and deployed the complete production web platform for Prem Durbar Hotel & Nagarkot Zipline (premdurbar.com) on behalf of PocketSoft.',
        'Built full-stack hospitality booking engine with Django MVT, HTMX server-driven partials, Alpine.js micro-interactions, and Air Datepicker real-time quote calculations.',
        'Developed adventure tourism portal showcasing Nagarkot Zipline packages (solo, tandem, superman) with instant booking flows and multi-currency support (NPR).',
        'Implemented luxury Newari architectural aesthetic with multi-theme switching (Light, Dark, Luxury Gold, Festival) and mountain mobile network caching optimizations.',
        'Constructed fluid interactive pages with modular component hierarchies using React.js and Tailwind CSS, reducing bundle load times by 35% with lazy loading.'
      ],
      stack: ['Django', 'Python', 'HTMX', 'Alpine.js', 'React.js', 'Tailwind CSS', 'PostgreSQL', 'JavaScript', 'Vite']
    },
    {
      role: 'Frontend Developer',
      company: 'POCKETPANDIT',
      location: 'Kathmandu, Nepal',
      period: 'Oct 2024 - January 2026',
      summary: 'Led frontend development of a full-scale application from scratch using a modular, component-based architecture with modern SCSS styling and seamless REST API integrations.',
      highlights: [
        'Led frontend development of a full-scale application from scratch using a modular, component-based architecture.',
        'Refactored over 20 legacy components, improving maintainability and reducing page load time.',
        'Integrated third-party libraries (e.g., Formik, Swiper) for improved UI and accessibility.',
        'Collaborated with the backend team to implement REST APIs, ensuring seamless data handling and UI updates.',
        'Implemented modern styling techniques using SCSS, ensuring full responsiveness across devices with mobile-first design principles.'
      ],
      stack: ['React.js', 'SCSS', 'JavaScript', 'Formik', 'Swiper', 'REST APIs', 'Vite']
    },
    {
      role: 'Full Stack Developer',
      company: 'trikonED',
      location: 'Kathmandu, Nepal',
      period: 'Project-Based',
      summary: 'Built full-stack international education platform features using Django, Python, JavaScript, HTML, Tailwind CSS, and database-backed workflows.',
      highlights: [
        'Built full-stack education platform features using Django, Python, JavaScript, HTML, Tailwind CSS, and database-backed workflows.',
        'Developed backend logic, Django views/templates, authentication flows, and CRUD modules for application features.',
        'Created responsive user interfaces and connected frontend screens with Django-powered server-side functionality.',
        'Managed Git-based development, debugging, and deployment-ready code improvements for the trikonED platform.'
      ],
      stack: ['Django', 'Python', 'JavaScript', 'HTML5', 'Tailwind CSS', 'PostgreSQL', 'Git']
    }
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-transparent">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 px-4 sm:px-0">
        <div className="text-center mb-8 md:mb-10">
          <div className="mb-3 inline-flex items-center space-x-2 px-3.5 py-1.5 glass rounded-full border border-slate-200/80 dark:border-white/5">
            <Briefcase className="h-3.5 w-3.5 text-primary-600 dark:text-accent-blue" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary-600 dark:text-accent-blue">
              Milestones
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter text-slate-900 dark:text-white">
            Professional <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium max-w-xl mx-auto mt-2">
            A review of my corporate software engineering placements, responsibilities, and product outcomes.
          </p>
        </div>

        {/* Timeline content layout */}
        <div className="max-w-4xl mx-auto relative pl-5 sm:pl-8 border-l border-slate-200 dark:border-white/10 space-y-6 sm:space-y-8">
          {/* Vertical line indicator pulsing element */}
          <div className="absolute left-0 top-2 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-primary-500 via-secondary-color to-transparent" />

          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Dotted Node Point */}
                <div
                  className={`absolute -left-[30px] sm:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isExpanded
                      ? 'bg-primary-500 border-primary-500 shadow-[0_0_12px_var(--primary-glow)] scale-110'
                      : 'bg-[var(--bg-main)] border-slate-400 dark:border-slate-600'
                  }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${isExpanded ? 'bg-white' : 'bg-slate-400 dark:bg-slate-600'}`} />
                </div>

                {/* Experience Box */}
                <div
                  onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                  className={`card-premium cursor-pointer !p-4 sm:!p-5 md:!p-6 transition-all duration-300 ${
                    isExpanded
                      ? 'border-primary-500/40 bg-slate-50 dark:bg-slate-900/60 shadow-[0_16px_30px_rgba(0,0,0,0.15)]'
                      : 'hover:border-slate-300 dark:hover:border-white/10 bg-white dark:bg-[#0F172A]'
                  }`}
                >
                  {/* Summary Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white leading-tight font-heading group-hover:text-primary-600 dark:group-hover:text-primary-400">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2.5 mt-1.5 text-xs font-semibold text-slate-400">
                        <span className="text-primary-600 dark:text-primary-300 font-bold uppercase tracking-wider">{exp.company}</span>
                        <span className="opacity-30">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 shrink-0">
                      <Calendar className="h-3 w-3 text-primary-600 dark:text-accent-blue" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary Snippet */}
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium mt-3 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Expansion indicator */}
                  <div className="flex items-center gap-1.5 text-xs text-primary-600 dark:text-primary-400 hover:text-primary-500 mt-3 font-bold">
                    <span>{isExpanded ? 'Compress Details' : 'Analyze Contribution Outcomes'}</span>
                    <motion.div animate={{ rotate: isExpanded ? 90 : 0 }}>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </motion.div>
                  </div>

                  {/* Expanded achievements & skills */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-4 pt-4 border-t border-slate-200/80 dark:border-white/5 space-y-4"
                      >
                        {/* Highlights */}
                        <div className="space-y-2.5">
                          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary-600 dark:text-accent-blue flex items-center gap-2">
                            <Trophy className="h-3.5 w-3.5" />
                            Key Outcomes & Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.highlights.map((hl, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                                <Award className="h-4 w-4 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" />
                                <span className="font-medium text-xs sm:text-sm leading-relaxed">{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Stack badges */}
                        <div className="space-y-1.5">
                          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 flex items-center gap-2">
                            <Terminal className="h-3.5 w-3.5" />
                            Utilized Technologies
                          </h4>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {exp.stack.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80 dark:bg-slate-900 dark:border-white/5 text-[10px] font-bold dark:text-slate-400"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
