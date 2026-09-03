import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, ShieldCheck, Flame } from 'lucide-react';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="bg-[var(--bg-card)] border border-[rgba(99,102,241,0.25)] rounded-[2rem] shadow-2xl max-w-5xl w-full max-h-[85vh] md:max-h-[90vh] overflow-y-auto z-10 relative flex flex-col scrollbar-thin"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white hover:text-primary-500 hover:rotate-90 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 z-20"
              aria-label="Close Case Study"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header Project Banner */}
            <div className="relative aspect-[21/9] w-full bg-slate-50 dark:bg-[var(--bg-main)] flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-[rgba(99,102,241,0.15)] select-none">
              {/* Subtle background glow */}
              <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-[#0F172A] dark:via-transparent dark:to-transparent z-10 pointer-events-none" />
              <div className="absolute -top-10 w-96 h-96 bg-primary-500/10 rounded-full blur-[80px] pointer-events-none" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain max-h-[90%] p-4 z-10 transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Content Container */}
            <div className="p-5 sm:p-7 md:p-8 space-y-6">
              {/* Title & Actions */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-1 font-heading">
                    {project.title}
                  </h2>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-600 dark:text-accent-blue">
                    Case Study Analysis
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 w-full md:w-auto">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline !py-2.5 !px-5 text-xs sm:text-sm flex items-center justify-center gap-2 group cursor-pointer w-full md:w-auto"
                    >
                      <Github className="h-4 w-4" />
                      Repository
                      <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !py-2.5 !px-5 text-xs sm:text-sm flex items-center justify-center gap-2 group cursor-pointer w-full md:w-auto"
                    >
                      <ShieldCheck className="h-4 w-4" />
                      Live Application
                      <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>

              {/* Tech Stack Badge Ribbon */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-primary-50 text-primary-700 border border-primary-200 dark:bg-primary-500/10 dark:border-primary-500/30 dark:text-primary-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Grid System for Sections */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                {/* Left Area (Overview, Highlights) */}
                <div className="md:col-span-7 space-y-6">
                  {/* Overview */}
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white border-l-4 border-primary-500 pl-3">
                      Architectural Overview
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-xs sm:text-sm">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white border-l-4 border-accent-blue pl-3">
                      Core Functional Architecture
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="h-4 w-4 text-primary-600 dark:text-accent-blue shrink-0 mt-0.5" />
                          <span className="font-medium text-xs sm:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contributions */}
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white border-l-4 border-secondary-color pl-3">
                      Personal Execution Role
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-xs sm:text-sm">
                      {project.myContribution}
                    </p>
                  </div>
                </div>

                {/* Right Area (Problem Solved, Challenges & Solutions, Results) */}
                <div className="md:col-span-5 space-y-4">
                  {/* Problem Solved */}
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-rose-500 dark:text-rose-400 font-bold uppercase tracking-wide text-xs">
                      <Flame className="h-4 w-4" />
                      The Problem Statement
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                      {project.problemSolved}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-[var(--bg-card)]/55 border border-slate-200 dark:border-primary-500/20 space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-amber-500 dark:text-amber-400 font-bold uppercase tracking-wide text-xs">
                        <AlertTriangle className="h-4 w-4" />
                        Engineering Challenge
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                        {project.challenges}
                      </p>
                    </div>
                    <div className="w-full h-[1px] bg-slate-200 dark:bg-white/5" />
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wide text-xs">
                        <CheckCircle2 className="h-4 w-4" />
                        Implemented Solution
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                        {project.solutions}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="p-4 sm:p-5 rounded-xl bg-emerald-50 dark:bg-emerald-500/5 border border-emerald-200 dark:border-emerald-500/20 space-y-1.5">
                    <h4 className="text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">
                      Measurable Business Outcome
                    </h4>
                    <p className="text-emerald-950 dark:text-slate-200 text-xs sm:text-sm font-semibold leading-relaxed">
                      {project.results}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-slate-50 dark:bg-[var(--bg-main)] border-t border-slate-200 dark:border-[rgba(99,102,241,0.15)] flex justify-between items-center text-xs text-slate-500 font-bold tracking-widest uppercase">
              <span>Project ID: {project.id}</span>
              <button
                onClick={onClose}
                className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
