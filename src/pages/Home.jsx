import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import GithubStats from '../components/sections/GithubStats';
import Achievements from '../components/sections/Achievements';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">
      {/* 1. Landing Hero Area */}
      <Hero />

      {/* 2. Bento Grid Biography Story */}
      <About />

      {/* 3. Terminal Skills Explorer */}
      <Skills />

      {/* 4. Placements Timeline */}
      <Experience />

      {/* 5. Creations Bento Showcase */}
      <Projects />

      {/* 6. GitHub Activity Graph */}
      <GithubStats />

      {/* 7. Credentials & Accolades */}
      <Achievements />

      {/* 8. Contact Form Panel */}
      <Contact />
    </div>
  );
};

export default Home;