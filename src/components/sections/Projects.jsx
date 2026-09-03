import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, ArrowUpRight, BookOpen, ShieldCheck, Globe } from 'lucide-react';
import { projects } from '../../data/projects';
import ProjectCard from '../features/ProjectCard';
import ProjectDetailModal from '../features/ProjectDetailModal';

const Projects = () => {
  const [activeCaseStudyProject, setActiveCaseStudyProject] = useState(null);
  const flagshipProject = projects.find(p => p.id === '1') || projects[0];
  const otherFeaturedProjects = projects.filter(p => p.id !== flagshipProject?.id && p.featured).slice(0, 3);

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-transparent">
      {/* Background overlay */}
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-accent-color/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6">
          <div>
            <div className="mb-3 inline-flex items-center space-x-2 px-3.5 py-1.5 glass rounded-full border border-slate-200/80 dark:border-white/5">
              <Box className="h-3.5 w-3.5 text-primary-600 dark:text-accent-blue" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">
                Production Showcase
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter text-slate-900 dark:text-white">
              Selected <span className="text-gradient">Creations</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium max-w-xl mt-2">
              Explore my latest production deployments, client architectures, and full-stack software systems.
            </p>
          </div>

          <Link
            to="/projects"
            className="group flex items-center gap-2.5 text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-white transition-colors cursor-pointer w-fit"
          >
            Explore all archives
            <div className="p-2.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-full group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110 group-hover:border-primary-500 transition-all">
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>

        {/* Prem Durbar Hotel & Nagarkot Zipline - Spotlight Hero Card */}
        {flagshipProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-10 rounded-2xl border border-primary-500/30 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-[#0F172A] dark:via-[#131F37] dark:to-[#0B132B] p-4 sm:p-6 md:p-7 shadow-xl relative overflow-hidden group"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary-500/15 transition-all duration-700" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
              {/* Left Column: Visual Screenshot Showcase */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#06101E] shadow-xl group/image">
                  {/* Mock browser title bar */}
                  <div className="bg-slate-200/80 dark:bg-slate-950/80 px-3.5 py-2 border-b border-slate-300/80 dark:border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                      <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                      <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900/80 px-2.5 py-0.5 rounded-md border border-slate-200 dark:border-white/5">
                      <Globe className="h-3 w-3 text-emerald-500 dark:text-emerald-400" />
                      <span>https://www.premdurbar.com</span>
                    </div>
                    <div className="w-6" />
                  </div>

                  {/* Image Display */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={flagshipProject.image}
                      alt={flagshipProject.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/image:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </div>

              {/* Right Column: Project Description & Highlights */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-wider">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                      New Production Release
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-300 text-[10px] font-black uppercase tracking-wider">
                      Flagship Platform
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-[10px] font-black uppercase tracking-wider">
                      On behalf of PocketSoft
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight font-heading leading-tight mb-2">
                    {flagshipProject.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed mb-4">
                    {flagshipProject.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-1.5 mb-4">
                    {flagshipProject.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <ShieldCheck className="h-3.5 w-3.5 text-primary-600 dark:text-accent-blue shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {flagshipProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-900/90 dark:border-white/10 text-[9px] font-bold uppercase tracking-wider dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-slate-200/80 dark:border-white/5">
                  {flagshipProject.liveUrl && (
                    <a
                      href={flagshipProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !py-2.5 !px-4 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer group/btn flex-1"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      Visit Live Platform
                      <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  )}

                  <button
                    onClick={() => setActiveCaseStudyProject(flagshipProject)}
                    className="btn-outline !py-2.5 !px-4 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer text-slate-800 dark:text-white hover:border-primary-500/40 flex-1"
                  >
                    <BookOpen className="h-3.5 w-3.5 text-primary-600 dark:text-primary-400" />
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Section Sub-heading for Other Creations */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-5 rounded-full bg-primary-500" />
            <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white tracking-tight font-heading">
              More Featured Deployments
            </h3>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            {otherFeaturedProjects.length} Systems
          </span>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 mb-10">
          {otherFeaturedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenCaseStudy={(proj) => setActiveCaseStudyProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Details Modal Overlay */}
      <ProjectDetailModal
        project={activeCaseStudyProject}
        isOpen={activeCaseStudyProject !== null}
        onClose={() => setActiveCaseStudyProject(null)}
      />
    </section>
  );
};

export default Projects;
