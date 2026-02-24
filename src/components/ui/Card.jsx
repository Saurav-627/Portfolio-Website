import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = false }) => {
  return (
    <motion.div
      className={`card-premium ${hover ? 'hover:scale-[1.02]' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Card;