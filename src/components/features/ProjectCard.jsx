import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Globe } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  // Format index as 01, 02, etc.
  const displayIndex = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full w-full"
    >
      <div className="card-premium h-full flex flex-col p-3 md:p-4 overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(16,185,129,0.15)]">

        {/* Header Metadata */}
        <div className="flex justify-between items-center mb-4 md:mb-6 px-1 md:px-2">
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-30 group-hover:opacity-100 transition-opacity">
            Project {displayIndex}
          </span>
          <div className="flex gap-2 md:gap-3">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 hover:text-primary-500 transition-all p-1">
                <Github className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 hover:text-primary-500 transition-all p-1">
                <Globe className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Visual Showcase Area */}
        <div className="relative aspect-[16/10] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden group-hover:shadow-2xl transition-all duration-700 border border-[var(--border-color)]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Elite Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-40 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Hover Action Badge - Always visible centered on small mobile */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 md:group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 hidden sm:block">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 md:p-5 rounded-full shadow-2xl">
              <ArrowUpRight className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </div>
          </div>

          {/* Type Badge */}
          <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 flex gap-2 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
            <span className="px-3 py-1 md:px-4 md:py-1.5 backdrop-blur-md bg-black/50 border border-white/10 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white">
              {project.techStack[0]}
            </span>
          </div>
        </div>

        {/* Content Details Area */}
        <div className="pt-5 md:pt-8 pb-2 md:pb-4 px-1 md:px-2 flex flex-col flex-grow">
          <h3 className="text-xl md:text-3xl font-black mb-3 md:mb-4 tracking-tighter leading-tight group-hover:text-primary-500 transition-colors">
            {project.title}
          </h3>

          <p className="font-medium opacity-50 mb-6 md:mb-8 line-clamp-2 md:line-clamp-3 leading-relaxed text-xs md:text-sm flex-grow">
            {project.description}
          </p>

          {/* Tech Ribbon */}
          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-auto">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-primary-600 dark:text-primary-400 opacity-60 group-hover:opacity-100 transition-opacity"
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>

        {/* Full Click Area Overlay */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 cursor-pointer"
            aria-label={`View ${project.title}`}
          />
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;