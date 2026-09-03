import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogCard = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex flex-col h-full rounded-[2rem] border border-[rgba(99,102,241,0.12)] bg-[#0F172A] overflow-hidden hover:border-primary-500/30 transition-all duration-500 shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-main)] border-b border-[rgba(99,102,241,0.1)] select-none">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Floating Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3.5 py-1.5 backdrop-blur-md bg-black/60 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-wider text-white">
            {post.tags[0]}
          </span>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
        <div className="flex items-center gap-4 mb-4 text-[10px] font-black uppercase tracking-wider text-slate-500">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5 text-accent-blue" />
            {new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="opacity-30">•</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-primary-400" />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-black mb-3 tracking-tight text-white group-hover:text-primary-500 transition-colors leading-tight font-heading">
          {post.title}
        </h3>

        <p className="text-slate-400 text-sm font-medium mb-6 line-clamp-3 leading-relaxed flex-grow">
          {post.excerpt}
        </p>

        <div className="pt-5 border-t border-white/5 flex items-center justify-between">
          <button className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-primary-400 group-hover:text-white transition-colors cursor-pointer">
            Read Insight
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;