import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, GitCommit, GitPullRequest, Code2 } from 'lucide-react';

const GithubStats = () => {
  // Generate random data for contribution heatmap
  const contributions = useMemo(() => {
    const grid = [];
    const levels = [0, 0, 1, 1, 2, 2, 3, 4]; // weights for colors
    for (let i = 0; i < 53 * 7; i++) {
      grid.push(levels[Math.floor(Math.random() * levels.length)]);
    }
    return grid;
  }, []);

  const stats = [
    { label: 'Commits Deployed', value: '1,240+', icon: GitCommit, color: 'text-emerald-400' },
    { label: 'Starred Repos', value: '38', icon: Star, color: 'text-amber-400' },
    { label: 'Pull Requests', value: '86+', icon: GitPullRequest, color: 'text-[#38BDF8]' },
    { label: 'Public Repos', value: '24+', icon: GitFork, color: 'text-primary-400' }
  ];

  const pinnedRepos = [
    {
      name: 'Custom-Date-Time-Picker',
      description: 'Advanced modular date-time selector supporting standard AD and Bikram Sambat (BS) calendar systems in React apps.',
      // stars: 3,
      forks: 1,
      language: 'JavaScript'
    },
    {
      name: 'E-Commerce-MERN-Stack',
      description: 'Fully responsive e-commerce web platform utilizing JWT authentication, Express routing, and MongoDB aggregates.',
      // stars: 3,
      forks: 3,
      language: 'JavaScript'
    },
    {
      name: 'Vehicle-Maintenance-Tracker-App',
      description: 'Cross-platform vehicle cost tracker & maintenance scheduling mobile app built using Flutter and Django REST API.',
      // stars: 4,
      forks: 1,
      language: 'Dart'
    }
  ];

  return (
    <section id="github" className="section-padding relative overflow-hidden bg-transparent">
      {/* Background Orbs */}
      <div className="absolute top-1/2 -right-10 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 px-4 sm:px-0">
        <div className="text-center mb-8 md:mb-10">
          <div className="mb-3 inline-flex items-center space-x-2 px-3.5 py-1.5 glass rounded-full border border-slate-200/80 dark:border-white/5">
            <Github className="h-3.5 w-3.5 text-primary-600 dark:text-white animate-bounce" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">
              Open Source Commitments
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter text-slate-900 dark:text-white">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium max-w-xl mx-auto mt-2">
            A live-inspired overview of my developer footprints, contribution patterns, and pinned open-source projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {/* Left Area: Heatmap & Stats Grid */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            {/* Heatmap Grid */}
            <div className="card-premium !p-4 sm:!p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-primary-600 dark:text-accent-blue" />
                  Contributions Heatmap
                </h3>
                <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase">365 Days Commit Log</span>
              </div>

              {/* Heatmap Grid rendering */}
              <div className="overflow-x-auto pb-2 scrollbar-thin">
                <div className="grid grid-flow-col grid-rows-7 gap-1 w-max">
                  {contributions.map((level, idx) => {
                    let colorClass = 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-white/5';
                    if (level === 1) colorClass = 'bg-indigo-200 dark:bg-indigo-900/40 border-indigo-300 dark:border-indigo-500/10';
                    if (level === 2) colorClass = 'bg-indigo-400 dark:bg-indigo-700/60 border-indigo-400 dark:border-indigo-500/20';
                    if (level === 3) colorClass = 'bg-indigo-500 dark:bg-indigo-500/80 border-indigo-500 dark:border-indigo-400/20';
                    if (level === 4) colorClass = 'bg-[#6366F1] shadow-[0_0_8px_rgba(99,102,241,0.4)] border-indigo-300/20';

                    return (
                      <motion.div
                        key={idx}
                        className={`w-[10px] h-[10px] rounded-sm border ${colorClass}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (idx % 7) * 0.01 }}
                        viewport={{ once: true }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Heatmap Legend */}
              <div className="flex items-center justify-end gap-1.5 mt-3 text-[9px] text-slate-500 font-bold uppercase">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5" />
                <span className="w-2.5 h-2.5 rounded bg-indigo-200 dark:bg-indigo-900/40" />
                <span className="w-2.5 h-2.5 rounded bg-indigo-400 dark:bg-indigo-700/60" />
                <span className="w-2.5 h-2.5 rounded bg-indigo-500 dark:bg-indigo-500/80" />
                <span className="w-2.5 h-2.5 rounded bg-[#6366F1]" />
                <span>More</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="card-premium !p-3.5 sm:!p-4 text-center flex flex-col items-center justify-center">
                    <Icon className={`h-5 w-5 ${stat.color} mb-2`} />
                    <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-heading mb-0.5">{stat.value}</span>
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-500">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Area: Pinned Repositories */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1 pl-1">
              Pinned Repositories
            </div>

            {pinnedRepos.map((repo, idx) => (
              <motion.a
                key={repo.name}
                href={`https://github.com/Saurav-627/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="block card-premium !p-3.5 sm:!p-4 hover:border-primary-500/30 group cursor-pointer"
              >
                <div className="flex justify-between items-start gap-2.5 mb-1.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate font-mono">
                    {repo.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-bold shrink-0">
                    <span className="flex items-center gap-0.5">
                      <Star className="h-3 w-3 fill-slate-500" />
                      {repo.stars}
                    </span>
                  </div>
                </div>

                <p className="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed font-semibold mb-3">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-slate-500 border-t border-slate-200/80 dark:border-white/5 pt-2.5">
                  <span className="flex items-center gap-1.5">
                    <span className={`h-2 w-2 rounded-full ${repo.language === 'TypeScript' ? 'bg-[#3178c6]' : 'bg-[#f1e05a]'}`} />
                    {repo.language}
                  </span>
                  <span>Public Repo</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
