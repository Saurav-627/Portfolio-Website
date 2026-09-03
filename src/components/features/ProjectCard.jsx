import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, BookOpen } from 'lucide-react';

const ProjectCard = ({ project, index, onOpenCaseStudy }) => {
  const displayIndex = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full rounded-2xl border border-slate-200/80 dark:border-[rgba(99,102,241,0.12)] bg-white dark:bg-[#0F172A] overflow-hidden hover:border-primary-500/40 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-xl hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)]"
    >
      {/* Visual Showcase Card Media */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-50/80 dark:bg-[var(--bg-main)] border-b border-slate-100 dark:border-[rgba(99,102,241,0.1)] select-none">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain p-3 sm:p-4 transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Dark Mode Gradient Overlay */}
        <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-[#0F172A]/90 dark:via-transparent dark:to-transparent opacity-0 dark:opacity-60 dark:group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

        {/* Floating Category Tag */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-3 py-1 backdrop-blur-md bg-white/90 text-slate-800 border border-slate-200/90 shadow-sm dark:bg-black/60 dark:border-white/10 dark:text-white rounded-full text-[9px] font-black uppercase tracking-wider">
            {project.techStack[0]}
          </span>
        </div>

        {/* Action Link Icons Floating Right */}
        <div className="absolute top-3 right-3 flex gap-2 z-20">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full backdrop-blur-md bg-white/90 text-slate-700 border border-slate-200/90 shadow-sm hover:text-primary-600 hover:border-primary-400 dark:bg-black/65 dark:border-white/15 dark:text-white dark:hover:text-accent-blue hover:scale-110 transition-all"
              title="GitHub Repository"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full backdrop-blur-md bg-white/90 text-slate-700 border border-slate-200/90 shadow-sm hover:text-primary-600 hover:border-primary-400 dark:bg-black/65 dark:border-white/15 dark:text-white dark:hover:text-primary-500 hover:scale-110 transition-all"
              title="Live Deployment"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Content details */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow relative z-10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary-600 dark:text-accent-blue opacity-80 group-hover:opacity-100 transition-opacity">
            PROJ // {displayIndex}
          </span>
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            {project.featured ? 'Featured' : 'System'}
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-black mb-2 tracking-tight text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight font-heading">
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium mb-4 line-clamp-2 md:line-clamp-3 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Badge Chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80 dark:bg-slate-900 dark:border-white/5 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-white group-hover:border-primary-500/30 transition-all"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-500">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Case Study Call to Action Button */}
        <button
          onClick={() => onOpenCaseStudy && onOpenCaseStudy(project)}
          className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-primary-50 dark:bg-slate-900 dark:hover:bg-primary-500/10 border border-slate-200 hover:border-primary-300 dark:border-white/5 dark:hover:border-primary-500/30 text-xs font-black uppercase tracking-[0.2em] text-slate-700 hover:text-primary-600 dark:text-slate-300 dark:hover:text-white flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
        >
          <BookOpen className="h-3.5 w-3.5 text-primary-500 dark:text-primary-400" />
          Analyze Case Study
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
