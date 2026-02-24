import React from 'react';
import { motion } from 'framer-motion';
import { Server, Globe, Cpu, Layout, Sparkles } from 'lucide-react';
import profile from '/src/images/portfolio.jpeg';

const About = () => {
  const skills = [
    {
      icon: Layout,
      title: 'Frontend Mastery',
      description: 'Expert in React.js, TypeScript, Django(MVT) and Framer Motion for building immersive interfaces.',
      color: 'text-primary-500',
      bg: 'bg-primary-500/10'
    },
    {
      icon: Server,
      title: 'Backend Systems',
      description: 'Developing scalable architectures with Node.js, Express, Django, and distributed databases.',
      color: 'text-accent-violet',
      bg: 'bg-accent-violet/10'
    },
    {
      icon: Cpu,
      title: 'Performance First',
      description: 'Optimizing web vitals and ensuring lightning-fast load times for all users.',
      color: 'text-amber-500',
      bg: 'bg-amber-500/10'
    },
    {
      icon: Globe,
      title: 'Fullstack Vision',
      description: 'Bridging the gap between design and data to create complete digital solutions.',
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10'
    }
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Django',
    'Tailwind CSS', 'SCSS', 'Git', 'Vite', 'Figma'
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute top-0 right-0 w-full h-full grid-bg opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          {/* Profile Image with modern frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:w-1/2"
          >
            <div className="relative group mx-auto max-w-md">
              <div className="absolute -inset-4 bg-primary-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src={profile}
                alt="Saurav Luitel"
                className="relative rounded-[2.5rem] shadow-2xl w-full aspect-square object-cover border-4 border-[var(--bg-card)]"
              />
              <div className="absolute -bottom-8 -right-8 glass p-8 rounded-[2rem] hidden md:block border-2 shadow-2xl">
                <p className="text-5xl font-black text-primary-500 leading-none mb-1">4+</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Years Learning</p>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 px-5 py-2 glass rounded-full">
                <Sparkles className="h-4 w-4 text-primary-500" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-primary-500">The Architect's Story</span>
              </div>
              <h3 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
                Crafting Digital Gems in <br />
                <span className="text-gradient">Kathmandu, Nepal</span>
              </h3>
            </div>

            <div className="space-y-8 text-xl font-medium opacity-70 leading-relaxed italic">
              <p>
                "I'm a visionary Fullstack Developer finishing my Bachelor's in
                Computer Application. My mission is to build digital products that aren't
                just functional, but truly memorable experiences."
              </p>
            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 glass rounded-2xl text-xs font-black uppercase tracking-widest hover:text-primary-500 transition-all border border-transparent hover:border-primary-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-12 md:mt-32">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-premium group"
            >
              <div className={`p-5 ${skill.bg} ${skill.color} rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform`}>
                <skill.icon className="h-8 w-8" />
              </div>
              <h4 className="text-2xl font-black mb-4 tracking-tight">
                {skill.title}
              </h4>
              <p className="font-medium opacity-60 leading-relaxed text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;