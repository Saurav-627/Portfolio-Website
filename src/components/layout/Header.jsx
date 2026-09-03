import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Moon, Sun, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useScrollTo } from '../../hooks/useScrollTo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isClickScrolling = useRef(false);
  const clickScrollTimeout = useRef(null);

  const getInitialSection = () => {
    if (typeof window === 'undefined') return 'home';
    const sectionIds = ['contact', 'experience', 'skills', 'about', 'home'];
    const scrollPosition = window.scrollY + 160;
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && scrollPosition >= el.offsetTop) {
        return id;
      }
    }
    return 'home';
  };

  const [activeSection, setActiveSection] = useState(getInitialSection);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollToSection } = useScrollTo();

  // Scroll spy to detect active section on the homepage during organic user scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // If user clicked a navbar item, lock activeSection to the clicked target
      // and do not trigger intermediate step-wise active states
      if (isClickScrolling.current) return;

      if (location.pathname === '/') {
        // If scrolled near bottom of page, activate 'contact'
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120) {
          setActiveSection('contact');
          return;
        }

        const sectionIds = ['home', 'about', 'skills', 'experience', 'contact'];
        const scrollPosition = window.scrollY + 160;

        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i]);
          if (el) {
            const top = el.offsetTop;
            if (scrollPosition >= top) {
              setActiveSection(sectionIds[i]);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (clickScrollTimeout.current) {
        clearTimeout(clickScrollTimeout.current);
      }
    };
  }, [location.pathname]);

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
    { name: 'Skills', href: '/', section: 'skills' },
    { name: 'Experience', href: '/', section: 'experience' },
    { name: 'Projects', href: '/projects', section: null },
    { name: 'Contact', href: '/', section: 'contact' }
  ];

  const handleNavClick = (item, e) => {
    if (item.section) {
      e.preventDefault();
      // Directly lock active state to target item immediately
      isClickScrolling.current = true;
      setActiveSection(item.section);

      if (clickScrollTimeout.current) {
        clearTimeout(clickScrollTimeout.current);
      }
      clickScrollTimeout.current = setTimeout(() => {
        isClickScrolling.current = false;
      }, 1000);

      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToSection(item.section);
        }, 150);
      } else {
        scrollToSection(item.section);
      }
    }
    setIsMenuOpen(false);
  };

  const isItemActive = (item) => {
    if (location.pathname === '/projects') {
      return item.name === 'Projects';
    }
    if (location.pathname === '/') {
      return item.section === activeSection;
    }
    return location.pathname === item.href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-500 ${
            isScrolled
              ? 'glass px-5 md:px-8 py-3 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-white/5'
              : 'px-2'
          }`}
        >
          {/* Logo Area */}
          <Link to="/" className="group flex items-center space-x-3 shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6366F1] to-[#38BDF8] rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative p-2 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] flex items-center justify-center">
                <Terminal className="h-5 w-5 text-accent-blue" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tighter leading-none text-[var(--text-main)]">
                SAURAV
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">
                  Active
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 p-1 glass rounded-full border-white/5">
            {navigation.map((item) => {
              const isActive = isItemActive(item);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`relative px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
                    isActive ? 'nav-active !text-white' : 'text-slate-400 hover:text-[var(--text-main)]'
                  }`}
                  style={isActive ? { color: '#ffffff' } : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeDesktopNav"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-primary-500 shadow-lg shadow-primary-500/25"
                    />
                  )}
                  <span
                    className="relative z-10"
                    style={isActive ? { color: '#ffffff' } : undefined}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}

            <div className="w-[1px] h-4 bg-white/10 mx-2" />

            {/* Theme Toggle Button with Rotate Animation */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-400 hover:text-[var(--text-main)] hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
              whileTap={{ scale: 0.9 }}
              whileHover={{ rotate: 15 }}
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4 text-amber-400" />
              )}
            </motion.button>
          </div>

          {/* Mobile UI Buttons */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl glass text-primary-300 border-white/5"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5 text-amber-400" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl glass text-primary-300 border-white/5"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/85 backdrop-blur-md z-[90]"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed top-24 left-4 right-4 p-6 glass rounded-[2rem] md:hidden shadow-2xl z-[95] border-white/10"
              >
                <div className="flex flex-col space-y-1">
                  {navigation.map((item, index) => {
                    const isActive = isItemActive(item);
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04 }}
                      >
                        <Link
                          to={item.href}
                          onClick={(e) => handleNavClick(item, e)}
                          className={`w-full px-5 py-4 rounded-xl text-lg font-black uppercase tracking-tight transition-all flex items-center justify-between group ${
                            isActive
                              ? 'nav-active !text-white bg-primary-500 shadow-lg shadow-primary-500/25'
                              : 'text-slate-300 hover:text-[var(--text-main)]'
                          }`}
                          style={isActive ? { color: '#ffffff' } : undefined}
                        >
                          <span
                            className={isActive ? 'font-bold !text-white' : ''}
                            style={isActive ? { color: '#ffffff' } : undefined}
                          >
                            {item.name}
                          </span>
                          <div
                            className={`w-8 h-[2px] transition-transform origin-right ${
                              isActive ? 'bg-white scale-x-100' : 'bg-primary-500 scale-x-0 group-hover:scale-x-100'
                            }`}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
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