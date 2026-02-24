import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Search, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/features/ProjectCard';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const categories = useMemo(() => {
    const cats = ['all', 'featured'];
    projects.forEach(p => {
      p.techStack.forEach(tech => {
        if (['React.js', 'Node.js', 'Tailwind CSS', 'TypeScript'].includes(tech) && !cats.includes(tech)) {
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
    <div className="pt-24 md:pt-32 min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-primary-500/10 via-primary-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 md:py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-24"
        >
          <div className="mb-8 inline-flex items-center space-x-3 px-6 py-2 glass rounded-full">
            <LayoutGrid className="h-4 w-4 text-primary-500" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-500">
              Personal Catalog
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter">
            Digital <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl font-medium opacity-60 max-w-2xl mx-auto leading-relaxed">
            A deep dive into my architectural approach.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex flex-col lg:flex-row gap-6 md:gap-8 items-center justify-between mb-12 md:mb-16 p-6 md:p-8 glass rounded-[2.5rem] md:rounded-[3rem] shadow-xl"
        >
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 h-5 w-5 opacity-40" />
            <input
              type="text"
              placeholder="Filter by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 md:pl-16 pr-6 md:pr-8 py-4 md:py-6 bg-black/5 dark:bg-white/5 border-2 border-transparent focus:border-primary-500 rounded-[1.25rem] md:rounded-[1.5rem] outline-none transition-all font-bold placeholder:opacity-40"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProjects(6);
                }}
                className={`px-8 py-4 rounded-[1.25rem] text-xs font-black uppercase tracking-widest transition-all border-2 ${selectedCategory === category
                  ? 'bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/20'
                  : 'bg-transparent border-black/5 dark:border-white/10 opacity-60 hover:opacity-100 hover:border-primary-500'
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-20"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {displayedProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-32 glass rounded-[3rem] border-2 border-dashed border-primary-500/30"
          >
            <Sparkles className="h-16 w-16 text-primary-500/40 mx-auto mb-8" />
            <p className="text-3xl font-black mb-8">
              No results found.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="btn-outline !px-12"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <button onClick={loadMore} className="btn-outline !px-16 !py-6 text-lg font-black uppercase tracking-[0.2em]">
              Access More Work
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;