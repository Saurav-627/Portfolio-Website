import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-black uppercase tracking-widest rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95 border-2';

  const variantClasses = {
    primary: 'bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600 hover:border-primary-600',
    secondary: 'bg-accent-violet border-accent-violet text-white shadow-lg shadow-accent-violet/25 hover:bg-accent-violet/80 hover:border-accent-violet/80',
    outline: 'border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
    ghost: 'border-transparent text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-3 text-xs',
    lg: 'px-10 py-5 text-sm'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;