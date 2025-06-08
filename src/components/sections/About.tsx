import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';
import Card from '../ui/Card';

const About: React.FC = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Expert in React.js, JavaScript, TypeScript, and modern web technologies.'
    },
    {
      icon: Palette,
      title: 'UI/UX Implementation',
      description: 'Creating responsive, beautiful interfaces with SCSS, Tailwind CSS, and modern design principles.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Building fast, efficient applications optimized for all devices and browsers.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working effectively in agile teams with strong communication and problem-solving skills.'
    }
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React.js', 'HTML5', 'CSS3', 'SCSS',
    'Tailwind CSS', 'Node.js', 'MySQL', 'Git', 'GitHub', 'Vite', 'Webpack',
    'Docker', 'Figma', 'Visual Studio Code'
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate frontend developer from Kathmandu, Nepal, currently pursuing my 
            Bachelor's in Computer Application. I specialize in creating modern, responsive 
            web applications with clean code and exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Saurav Luitel - Frontend Developer"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My journey in web development began with curiosity about how websites work. 
              That curiosity evolved into a passion for creating meaningful digital 
              experiences that solve real problems and delight users.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              At Pocket Pandit, I've honed my skills in React.js development, working on 
              both greenfield projects and legacy code optimization. I believe in writing 
              clean, maintainable code and staying updated with the latest industry trends.
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="p-6 text-center h-full">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-fit mx-auto mb-4">
                  <skill.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;