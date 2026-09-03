import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Hash, Search, Sparkles, BookMarked } from 'lucide-react';
import { blogPosts } from '../data/blog';
import BlogCard from '../components/features/BlogCard';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [visiblePosts, setVisiblePosts] = useState(4);

  const allTags = useMemo(() => ['all', ...new Set(blogPosts.flatMap(post => post.tags))], []);

  const filteredPosts = useMemo(() => blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  }), [searchTerm, selectedTag]);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);

  const loadMore = () => {
    setVisiblePosts(prev => prev + 4);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden bg-[var(--bg-main)]">
      {/* Background decorations */}
      <div className="aurora-container">
        <div className="aurora-blob aurora-1 opacity-10" />
        <div className="aurora-blob aurora-2 opacity-10" />
        <div className="aurora-blob aurora-3 opacity-10" />
      </div>
      <div className="grid-overlay opacity-30" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="mb-6 inline-flex items-center space-x-2.5 px-5 py-2 glass rounded-full border-white/5">
            <BookOpen className="h-4 w-4 text-primary-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary-400">
              Insight Journal
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
            Architectural <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Exploring the edge of fullstack development workflows, React rendering optimizations, and local calendar synchronizations.
          </p>
        </motion.div>

        {/* Search and Filters Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12 p-6 glass rounded-3xl shadow-2xl"
        >
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search published articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-slate-900/60 border border-white/5 focus:border-primary-500/50 rounded-2xl outline-none text-slate-100 placeholder:text-slate-500 font-bold transition-all text-sm"
            />
          </div>

          {/* Reference Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTag(tag);
                  setVisiblePosts(4);
                }}
                className={`px-4.5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all border cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/20'
                    : 'bg-transparent border-white/5 text-slate-400 hover:text-white hover:border-primary-500/30'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {displayedPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {displayedPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24 glass rounded-[2.5rem] border border-dashed border-primary-500/20"
          >
            <BookMarked className="h-14 w-14 text-slate-600 mx-auto mb-6" />
            <h3 className="text-2xl font-black mb-3 text-white">No articles found</h3>
            <p className="text-slate-500 text-sm max-w-sm mx-auto mb-8 font-medium">
              We couldn't locate any records matching your search queries. Try resetting filters.
            </p>
            <button
              onClick={() => { setSelectedTag('all'); setSearchTerm(''); }}
              className="btn-outline !px-8 cursor-pointer mx-auto"
            >
              Reset Search Parameters
            </button>
          </motion.div>
        )}

        {/* Load More Button */}
        {visiblePosts < filteredPosts.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <button
              onClick={loadMore}
              className="btn-outline !px-12 !py-4 text-xs font-black uppercase tracking-[0.25em] mx-auto cursor-pointer"
            >
              Access More Articles
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog;