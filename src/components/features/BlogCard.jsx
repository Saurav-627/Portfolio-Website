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
      className="group flex flex-col h-full"
    >
      <div className="card-premium h-full flex flex-col !p-0 overflow-hidden hover:border-primary-500/50">
        <div className="aspect-[16/10] overflow-hidden relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-6 left-6 flex flex-wrap gap-2 text-white">
            {post.tags.slice(0, 1).map((tag) => (
              <span key={tag} className="px-4 py-1.5 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-10 flex flex-col flex-grow">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest opacity-40">
              <Calendar className="h-3.5 w-3.5" />
              <span>{new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="w-[1px] h-3 bg-slate-200 dark:bg-white/10"></div>
            <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest opacity-40">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h3 className="text-2xl font-black mb-4 line-clamp-2 leading-tight group-hover:text-primary-500 transition-colors">
            {post.title}
          </h3>

          <p className="font-medium opacity-60 mb-8 line-clamp-3 leading-relaxed text-sm">
            {post.excerpt}
          </p>

          <div className="mt-auto pt-8 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
            <button className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-primary-500 group/btn">
              Read Insight
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;