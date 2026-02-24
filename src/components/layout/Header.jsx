import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useScrollTo } from '../../hooks/useScrollTo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const { scrollToSection } = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navigation = [
    { name: 'Home', href: '/', section: 'home' },
    { name: 'About', href: '/', section: 'about' },
    { name: 'Projects', href: '/projects', section: null },
    { name: 'Blog', href: '/blog', section: null },
    { name: 'Contact', href: '/', section: 'contact' }
  ];

  const handleNavClick = (item) => {
    if (item.section && location.pathname === '/') {
      scrollToSection(item.section);
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-500 ${isScrolled
              ? 'glass px-5 md:px-6 py-2.5 md:py-3 rounded-full shadow-lg shadow-black/5'
              : 'px-2'
            }`}
        >
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-3 shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-violet rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-2 bg-white dark:bg-night-card rounded-xl border border-white/10">
                <Code className="h-5 w-5 md:h-6 md:w-6 text-primary-500" />
              </div>
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter">
              SAURAV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 p-1 glass rounded-full">
            {navigation.map((item) => {
              const isActive = (location.pathname === item.href && !item.section) ||
                (location.pathname === '/' && item.section === 'home');
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item)}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${isActive
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                      : 'text-gray-600 dark:text-gray-400 hover:text-primary-500'
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="w-[1px] h-4 bg-gray-200 dark:bg-white/10 mx-2"></div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile UI */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl glass text-primary-500"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl glass text-primary-500"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Mesh Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-md z-[-1]"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="mt-4 p-4 glass rounded-[2.5rem] md:hidden shadow-2xl overflow-hidden"
              >
                <div className="flex flex-col space-y-1">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => handleNavClick(item)}
                        className={`w-full px-6 py-5 rounded-2xl text-xl font-black uppercase tracking-tighter transition-all flex items-center justify-between group ${location.pathname === item.href ? 'text-primary-500' : 'opacity-60'
                          }`}
                      >
                        {item.name}
                        <div className="w-8 h-[2px] bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;