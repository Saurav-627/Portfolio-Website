import React from 'react';
import { motion } from 'framer-motion';
import { Award, Package, Flame, Code, BookOpen } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Prem Durbar Production Platform',
      category: 'PocketSoft / Production',
      description: 'Fully built from scratch on behalf of PocketSoft: engineered and launched premdurbar.com for client Prem Durbar Hotel & Nagarkot Zipline with Django, HTMX, Alpine.js, and real-time booking engines.',
      icon: Flame,
      tags: ['PocketSoft', 'Django', 'HTMX', 'Tailwind CSS'],
      metric: 'Live in Production'
    },
    {
      title: 'Bachelor of Computer Application',
      category: 'Education',
      description: 'Bhaktapur Multiple Campus, Nepal (June 2022 - Present). Rigorous academic focus on software engineering, database design, algorithms, and application development.',
      icon: BookOpen,
      tags: ['BCA', 'Bhaktapur Campus', 'Computer Science'],
      metric: 'June 2022 - Present'
    },
    {
      title: 'Frontend Component Architecture',
      category: 'POCKETPANDIT',
      description: 'Led full-scale application frontend development from scratch and refactored 20+ legacy components, boosting maintainability and slashing page load times.',
      icon: Code,
      tags: ['React.js', 'SCSS', 'Modular Architecture'],
      metric: '20+ Components Refactored'
    },
    {
      title: 'Custom DateTime Picker Package',
      category: 'Open Source',
      description: 'Authored and published a custom date-time adapter package handling calendar offsets and robust picker states for web applications.',
      icon: Package,
      tags: ['TypeScript', 'NPM', 'React'],
      metric: 'Stable Release'
    }
  ];

  return (
    <section id="achievements" className="section-padding relative overflow-hidden bg-transparent">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary-color/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 px-4 sm:px-0">
        <div className="text-center mb-8 md:mb-10">
          <div className="mb-3 inline-flex items-center space-x-2 px-3.5 py-1.5 glass rounded-full border border-slate-200/80 dark:border-white/5">
            <Award className="h-3.5 w-3.5 text-primary-600 dark:text-accent-blue" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">
              Credentials & Accolades
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter text-slate-900 dark:text-white">
            Engineering <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium max-w-xl mx-auto mt-2">
            Highlights of my open-source releases, academic milestones, and metrics-driven business accomplishments.
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {achievements.map((ach, idx) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="card-premium group hover:border-primary-500/35 transition-all duration-300"
              >
                {/* Header visual */}
                <div className="flex justify-between items-start gap-3 mb-3.5">
                  <div className="p-2.5 bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-white/5 rounded-xl text-primary-600 dark:text-primary-400 group-hover:scale-110 group-hover:text-white group-hover:bg-primary-500 transition-all">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 dark:bg-slate-900 border border-slate-200/80 dark:border-white/5 text-[9px] font-black uppercase tracking-widest dark:text-slate-500 group-hover:text-primary-600 dark:group-hover:text-accent-blue transition-colors">
                    {ach.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight font-heading mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {ach.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium leading-relaxed mb-4">
                  {ach.description}
                </p>

                {/* Footer specs */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200/80 dark:border-white/5 text-[10px] font-black uppercase tracking-widest">
                  <div className="flex gap-2">
                    {ach.tags.map((tag) => (
                      <span key={tag} className="text-slate-500">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-primary-600 dark:text-primary-300 text-[9px] bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 px-2 py-0.5 rounded">
                    {ach.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
