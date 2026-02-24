import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Hash, Search, Sparkles } from 'lucide-react';
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
    <div className="pt-32 min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-b from-indigo-500/10 via-indigo-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="mb-6 inline-flex items-center space-x-2 px-6 py-2 glass rounded-full">
            <BookOpen className="h-4 w-4 text-indigo-500" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-500">
              Insight Journal
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
            Elite <span className="text-gradient">Perspectives</span>
          </h1>
          <p className="text-xl font-medium opacity-60 max-w-2xl mx-auto leading-relaxed">
            Exploring the edge of fullstack architecture, engineering patterns, and
            digital design philosophy.
          </p>
        </motion.div>

        {/* Search and Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16 md:mb-24"
        >
          <div className="glass p-8 rounded-[3rem] space-y-8 shadow-xl">
            <div className="relative">
              <Search className="absolute left-8 top-1/2 -translate-y-1/2 h-5 w-5 opacity-40" />
              <input
                type="text"
                placeholder="Find an article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-8 py-5 bg-black/5 dark:bg-white/5 border border-transparent focus:border-indigo-500 rounded-2xl outline-none transition-all font-bold"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mr-2">
                <Hash className="h-4 w-4" />
                <span>Reference Tags</span>
              </div>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all border-2 ${selectedTag === tag
                    ? 'bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-transparent border-black/5 dark:border-white/10 opacity-60 hover:opacity-100 hover:border-indigo-500'
                    }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {displayedPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visiblePosts < filteredPosts.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <button onClick={loadMore} className="btn-outline !px-16 !py-6 text-lg font-black uppercase tracking-[0.2em] !border-indigo-500 !text-indigo-500 hover:!bg-indigo-500 hover:!text-white">
              Access More Articles
            </button>
          </motion.div>
        )}

        {/* Empty State */}
        {displayedPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-32 glass rounded-[3rem] border border-dashed border-indigo-500/30"
          >
            <Sparkles className="h-16 w-16 text-indigo-500/40 mx-auto mb-8" />
            <p className="text-3xl font-black mb-8">
              No insights found.
            </p>
            <button
              onClick={() => { setSelectedTag('all'); setSearchTerm(''); }}
              className="btn-outline !px-12 !border-indigo-500 !text-indigo-500 hover:!bg-indigo-500 hover:!text-white"
            >
              Reset Search
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog;