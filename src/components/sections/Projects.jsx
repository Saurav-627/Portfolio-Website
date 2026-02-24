import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Box } from 'lucide-react';
import { projects } from '../../data/projects';
import ProjectCard from '../features/ProjectCard';

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-24 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl px-2 sm:px-0"
          >
            <div className="mb-4 md:mb-6 inline-flex items-center space-x-2 px-4 py-1.5 md:py-2 glass rounded-full">
              <Box className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary-500" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary-500">
                Showcase
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tighter">
              Selected <span className="text-gradient">Creations</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-2 sm:px-0"
          >
            <Link
              to="/projects"
              className="group flex items-center gap-3 md:gap-4 text-base md:text-xl font-black uppercase tracking-widest hover:text-primary-500 transition-colors"
            >
              View all works
              <div className="p-3 md:p-4 glass rounded-full group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110 transition-all">
                <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;