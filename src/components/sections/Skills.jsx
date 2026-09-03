import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code, Cpu, Database, Cloud, Star } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const categories = [
    { id: 'languages', name: 'Languages & Frameworks', icon: Code, command: 'cat languages_frameworks.json' },
    { id: 'styling', name: 'Styling & UI', icon: Cpu, command: 'cat styling_ui_design.css' },
    { id: 'database', name: 'Databases', icon: Database, command: 'cat databases_storage.sql' },
    { id: 'tools', name: 'AI & Dev Tools', icon: Cloud, command: 'cat ai_dev_toolchain.sh' },
    { id: 'others', name: 'Architecture & Others', icon: Terminal, command: 'cat engineering_practices.yml' }
  ];

  const skillsData = {
    languages: [
      { name: 'React.js', proficiency: 95, level: 'Expert', desc: 'Component architecture, custom hooks, state machines, reconciliation and rendering optimization.' },
      { name: 'JavaScript (ES6+)', proficiency: 95, level: 'Expert', desc: 'Asynchronous event loops, closures, DOM manipulation, functional and modular paradigms.' },
      { name: 'Django / Python', proficiency: 90, level: 'Expert', desc: 'Model-View-Template (MVT), ORM indexing, views/templates, authentication and CRUD workflows.' },
      { name: 'Express.js', proficiency: 88, level: 'Advanced', desc: 'RESTful API routing layers, token authentications (JWT), middleware pipelines, scalable backend endpoints.' }
    ],
    styling: [
      { name: 'Tailwind CSS', proficiency: 95, level: 'Expert', desc: 'Utility-first styling, design system tokens, fluid bento grids, dark/light themes and animations.' },
      { name: 'CSS / SCSS', proficiency: 92, level: 'Expert', desc: 'BEM methodology, modular preprocessors, responsive variables, mobile-first media queries.' },
      { name: 'Responsive Design', proficiency: 96, level: 'Expert', desc: 'Fluid typography clamp scaling, adaptive layouts, cross-device touch optimization.' },
      { name: 'Chakra UI', proficiency: 88, level: 'Advanced', desc: 'Accessible component libraries, custom theme overrides, composition patterns.' },
      { name: 'Prime react', proficiency: 86, level: 'Advanced', desc: 'Enterprise data tables, rich inputs, modal dialogs and dynamic state bindings.' }
    ],
    database: [
      { name: 'PostgreSQL', proficiency: 90, level: 'Expert', desc: 'Relational schema modeling, foreign key constraints, query indexing, transactional safety, hot path performance tuning.' },
      { name: 'MongoDB', proficiency: 88, level: 'Advanced', desc: 'BSON document modeling, aggregation framework pipelines, CRUD optimizations.' },
      { name: 'MySQL', proficiency: 86, level: 'Advanced', desc: 'Relational table modeling, foreign keys, ACID transactions, data consistency.' }
    ],
    tools: [
      { name: 'OpenAI Codex & Google Antigravity', proficiency: 94, level: 'Expert', desc: 'Agentic coding pipelines, automated scaffolding, AI-assisted architecture and development workflows.' },
      { name: 'Git & GitHub', proficiency: 95, level: 'Expert', desc: 'Branch workflows, pull requests, merge conflict resolutions, versioning strategies.' },
      { name: 'n8n Workflow Automation', proficiency: 86, level: 'Advanced', desc: 'Workflow automation, API webhooks, automated data synchronization pipelines.' },
      { name: 'Vite & Chrome DevTools', proficiency: 92, level: 'Expert', desc: 'Lightning-fast HMR compilation, memory profiling, Lighthouse performance auditing.' },
      { name: 'Figma', proficiency: 88, level: 'Advanced', desc: 'UI wireframing, component tokens, responsive design prototypes and developer handoffs.' }
    ],
    others: [
      { name: 'RESTful APIs', proficiency: 95, level: 'Expert', desc: 'Resource modeling, status structures, token auth, rate limiting, request validation schemas.' },
      { name: 'CI/CD Pipelines', proficiency: 88, level: 'Advanced', desc: 'Automated deployment workflows, build verifications, GitHub Actions, cloud synchronizations.' },
      { name: 'AI-Assistant Debugging', proficiency: 94, level: 'Expert', desc: 'Accelerated bug isolation, trace analysis, intelligent regression resolution and clean refactoring.' }
    ]
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-transparent">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary-color/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-accent-color/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 px-4 sm:px-0">
        <div className="text-center mb-8 md:mb-10">
          <div className="mb-3 inline-flex items-center space-x-2 px-3.5 py-1.5 glass rounded-full border border-slate-200/80 dark:border-white/5">
            <Terminal className="h-3.5 w-3.5 text-primary-600 dark:text-accent-blue" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary-600 dark:text-accent-blue">
              Command Center
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter text-slate-900 dark:text-white">
            Technical <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium max-w-xl mx-auto mt-2">
            Interactive system specs mapping my languages, architectural patterns, and production engineering stack.
          </p>
        </div>

        {/* Terminal explorer */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white dark:bg-[var(--bg-card)] border border-slate-200/80 dark:border-[rgba(99,102,241,0.2)] shadow-xl overflow-hidden">
          {/* Header OS style tabs */}
          <div className="bg-slate-100 dark:bg-[var(--bg-main)] px-5 py-3 flex items-center justify-between border-b border-slate-200 dark:border-white/5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </div>
            <div className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1] animate-ping" />
              saurav@engine-host:~/skills
            </div>
            <div className="w-10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[360px]">
            {/* Sidebar directory list */}
            <div className="md:col-span-4 bg-slate-50/50 dark:bg-slate-950/70 p-4 sm:p-5 border-r border-slate-200 dark:border-white/5 flex flex-col gap-1.5">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">
                Index Categories
              </div>
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? 'bg-primary-500/10 border border-primary-500/30 text-primary-600 dark:text-white shadow-md shadow-primary-500/5'
                        : 'border border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`h-4 w-4 ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-slate-500 dark:text-slate-400'}`} />
                      <span className="truncate">{cat.name}</span>
                    </div>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-primary-500 dark:bg-accent-blue" />}
                  </button>
                );
              })}
            </div>

            {/* Terminal Panel Content */}
            <div className="md:col-span-8 p-4 sm:p-6 font-mono text-sm overflow-hidden flex flex-col justify-between">
              <div>
                {/* Command Line Input */}
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-4 border-b border-slate-200 dark:border-white/5 pb-3">
                  <span className="text-emerald-500 font-bold">$</span>
                  <span className="text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
                    {categories.find(c => c.id === activeCategory)?.command}
                  </span>
                  <span className="h-4 w-1.5 bg-[#38BDF8] animate-pulse" />
                </div>

                {/* Print Skills */}
                <div className="space-y-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      {skillsData[activeCategory].map((skill, index) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex justify-between items-center text-xs font-bold">
                            <span className="text-slate-900 dark:text-white flex items-center gap-1.5">
                              <Star className="h-3.5 w-3.5 text-primary-500 dark:text-accent-blue fill-primary-500/20 dark:fill-accent-blue/20" />
                              {skill.name}
                            </span>
                            <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                              {skill.level} ({skill.proficiency}%)
                            </span>
                          </div>

                          {/* Interactive loading bar */}
                          <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-300/60 dark:border-white/5">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 0.8, delay: index * 0.05, ease: 'easeOut' }}
                              className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-blue"
                            />
                          </div>

                          <p className="text-[11px] text-slate-600 dark:text-slate-400 italic pl-5 leading-normal">
                            {skill.desc}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Status Output */}
              <div className="text-[10px] text-slate-500 border-t border-slate-200 dark:border-white/5 pt-4 mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span>System status: ALL SYSTEMS OPERATIONAL</span>
                <span>Type: Compiled JSON Array</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
