import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Search, Sparkles, Filter, Code2 } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/features/ProjectCard';
import ProjectDetailModal from '../components/features/ProjectDetailModal';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeCaseStudyProject, setActiveCaseStudyProject] = useState(null);

  // Generate category tabs dynamically
  const categories = useMemo(() => {
    const cats = ['all', 'featured'];
    projects.forEach(p => {
      p.techStack.forEach(tech => {
        if (['React.js', 'Django', 'Flutter', 'Tailwind CSS', 'HTMX', 'TypeScript', 'Node.js'].includes(tech) && !cats.includes(tech)) {
          cats.push(tech);
        }
      });
    });
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'all'
        ? true
        : selectedCategory === 'featured'
          ? project.featured
          : project.techStack.includes(selectedCategory);

      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen relative overflow-hidden bg-[var(--bg-main)]">
      {/* Background decorations */}
      <div className="aurora-container">
        <div className="aurora-blob aurora-1 opacity-10" />
        <div className="aurora-blob aurora-2 opacity-10" />
        <div className="aurora-blob aurora-3 opacity-10" />
      </div>
      <div className="grid-overlay opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="mb-4 inline-flex items-center space-x-2.5 px-4 py-1.5 glass rounded-full">
            <LayoutGrid className="h-3.5 w-3.5 text-primary-500 animate-pulse" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-primary-600 dark:text-primary-400">
              Architectural Archives
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tighter leading-tight text-slate-900 dark:text-white">
            Production <span className="text-gradient">Deployments</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium max-w-2xl mx-auto leading-relaxed">
            A comprehensive catalog of enterprise applications, open-source architectures, and professional client solutions.
          </p>
        </motion.div>

        {/* Search and Filters Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8 p-4 sm:p-5 glass rounded-2xl shadow-lg border border-slate-200/80 dark:border-white/10"
        >
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Query stack, feature or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 focus:border-primary-500/50 rounded-xl outline-none text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 font-bold transition-all text-xs sm:text-sm"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="flex items-center gap-1 text-xs text-slate-500 font-black uppercase tracking-widest mr-1 hidden sm:flex">
              <Filter className="h-3 w-3" />
              <span>Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProjects(6);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all border cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-primary-500 border-primary-500 text-white shadow-md shadow-primary-500/20'
                    : 'bg-transparent border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-white hover:border-primary-500/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 mb-10"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenCaseStudy={(proj) => setActiveCaseStudyProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {displayedProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 glass rounded-2xl border border-dashed border-primary-500/20"
          >
            <Code2 className="h-10 w-10 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-black mb-2 text-slate-900 dark:text-white">No matches found</h3>
            <p className="text-slate-500 text-xs sm:text-sm max-w-sm mx-auto mb-6 font-medium">
              We couldn't locate any records matching your search queries. Try resetting filters.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="btn-outline !px-5 !py-2 text-xs cursor-pointer mx-auto"
            >
              Reset Search Parameters
            </button>
          </motion.div>
        )}

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <button
              onClick={loadMore}
              className="btn-outline !px-6 !py-2.5 text-xs font-black uppercase tracking-[0.2em] mx-auto cursor-pointer"
            >
              Access More Archives
            </button>
          </motion.div>
        )}
      </div>

      {/* Case Study Details Modal Overlay */}
      <ProjectDetailModal
        project={activeCaseStudyProject}
        isOpen={activeCaseStudyProject !== null}
        onClose={() => setActiveCaseStudyProject(null)}
      />
    </div>
  );
};

export default Projects;