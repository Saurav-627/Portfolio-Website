import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CommandPalette from './components/ui/CommandPalette';
import ScrollToTop from './components/features/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen transition-colors duration-500 bg-[var(--bg-main)] text-[var(--text-main)] relative">
          {/* Premium analog noise texture filter */}
          <div className="noise-bg" />

          {/* Floating Command Center Activator */}
          <CommandPalette />

          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;