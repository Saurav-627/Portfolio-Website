import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Search, ArrowRight, CornerDownLeft, Sparkles, Copy, Download, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useScrollTo } from '../../hooks/useScrollTo';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { scrollToSection } = useScrollTo();
  const [copied, setCopied] = useState(false);

  // Keybindings listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle palette: Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      // Escape closes
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const commands = [
    {
      title: 'Scroll to Home Hero',
      category: 'Navigation',
      shortcut: 'H',
      action: () => {
        navigate('/');
        setTimeout(() => scrollToSection('home'), 100);
      }
    },
    {
      title: 'Scroll to About Story',
      category: 'Navigation',
      shortcut: 'A',
      action: () => {
        navigate('/');
        setTimeout(() => scrollToSection('about'), 100);
      }
    },
    {
      title: 'Scroll to Skills Explorer',
      category: 'Navigation',
      shortcut: 'S',
      action: () => {
        navigate('/');
        setTimeout(() => scrollToSection('skills'), 100);
      }
    },
    {
      title: 'Scroll to Experience Timeline',
      category: 'Navigation',
      shortcut: 'E',
      action: () => {
        navigate('/');
        setTimeout(() => scrollToSection('experience'), 100);
      }
    },
    {
      title: 'View Featured Creations',
      category: 'Navigation',
      shortcut: 'P',
      action: () => {
        navigate('/projects');
      }
    },
    {
      title: 'Scroll to Contact Hub',
      category: 'Navigation',
      shortcut: 'C',
      action: () => {
        navigate('/');
        setTimeout(() => scrollToSection('contact'), 100);
      }
    },
    {
      title: 'Toggle Theme Mode',
      category: 'Preferences',
      shortcut: 'T',
      action: () => {
        toggleTheme();
      }
    },
    // {
    //   title: 'Download Resume PDF',
    //   category: 'Assets',
    //   shortcut: 'R',
    //   action: () => {
    //     const link = document.createElement('a');
    //     link.href = '/Saurav_Luitel_Resume.pdf';
    //     link.download = 'Saurav_Luitel_Resume.pdf';
    //     link.click();
    //   }
    // },
    {
      title: 'Copy Email to Clipboard',
      category: 'Assets',
      shortcut: 'M',
      action: () => {
        navigator.clipboard.writeText('sauravluitel.work@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  ];

  // Listener for direct shortcuts when palette is closed
  useEffect(() => {
    const handleShortcuts = (e) => {
      // Don't trigger if inside input or textarea
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        return;
      }
      
      const key = e.key.toLowerCase();
      const command = commands.find(c => c.shortcut.toLowerCase() === key);
      if (command && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        command.action();
      }
    };
    window.addEventListener('keydown', handleShortcuts);
    return () => window.removeEventListener('keydown', handleShortcuts);
  }, [theme]); // rebind on theme changes to keep state fresh

  const filteredCommands = commands.filter(cmd =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Small subtle activator toast hint in corner on desktop */}
      <div className="fixed bottom-6 left-6 z-[90] hidden md:flex items-center gap-1.5 px-3.5 py-2 glass rounded-xl border-white/5 text-[9px] font-black uppercase tracking-widest text-slate-400 select-none opacity-40 hover:opacity-100 transition-opacity">
        <Terminal className="h-3 w-3 text-accent-blue" />
        <span>Press</span>
        <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-white/10 text-white font-mono">⌘K</kbd>
        <span>for palette</span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[2000] flex items-start justify-center p-4 pt-[15vh]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Palette Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-[var(--bg-card)] border border-[rgba(99,102,241,0.25)] w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              {/* Input Header */}
              <div className="p-4 border-b border-white/5 flex items-center gap-3 bg-[var(--bg-main)]">
                <Search className="h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Type a command or filter category..."
                  className="w-full bg-transparent text-[var(--text-main)] border-none outline-none placeholder:text-slate-500 font-medium text-sm"
                  autoFocus
                />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded bg-slate-950">
                  ESC
                </span>
              </div>

              {/* Items List */}
              <div className="max-h-[320px] overflow-y-auto p-2 space-y-1 scrollbar-thin">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        cmd.action();
                        setIsOpen(false);
                      }}
                      className="w-full p-3.5 rounded-xl hover:bg-primary-500/10 flex items-center justify-between group transition-colors text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-slate-700 group-hover:bg-primary-400 transition-colors" />
                        <div>
                          <span className="text-white text-xs font-semibold block">
                            {cmd.title}
                          </span>
                          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                            {cmd.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {cmd.shortcut === 'M' && copied && (
                          <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-widest">
                            Copied!
                          </span>
                        )}
                        <kbd className="px-2 py-1 rounded bg-slate-900 border border-white/5 text-[9px] text-slate-400 font-bold font-mono group-hover:text-white group-hover:border-primary-500/30 transition-all">
                          {cmd.shortcut}
                        </kbd>
                        <CornerDownLeft className="h-3 w-3 text-slate-500 opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="text-center py-8 text-slate-500 text-xs font-bold uppercase tracking-widest">
                    No matching commands
                  </div>
                )}
              </div>

              {/* Footer status bar */}
              <div className="p-3 bg-[var(--bg-main)] border-t border-white/5 text-[9px] font-black uppercase tracking-widest text-slate-500 flex justify-between items-center">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 text-accent-blue" />
                  Saurav Luitel Terminal
                </span>
                <span>Keyboard Navigation Active</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
