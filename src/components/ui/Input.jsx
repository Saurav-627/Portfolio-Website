import React, { forwardRef } from 'react';

const Input = forwardRef(({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  name,
  className = '',
  ...props
}, ref) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {label && (
        <label className="block text-[10px] font-black uppercase tracking-[0.2em] opacity-40 ml-2">
          {label}
          {required && <span className="text-primary-500 ml-1">*</span>}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-8 py-5 bg-black/5 dark:bg-white/5 border-2 rounded-[1.5rem] outline-none transition-all font-bold placeholder:opacity-40 hover:bg-black/[0.08] dark:hover:bg-white/[0.08] ${error
            ? 'border-rose-500/50'
            : 'border-slate-100 dark:border-white/5 focus:border-primary-500'
          }`}
        {...props}
      />
      {error && <p className="text-rose-500 text-[10px] font-black uppercase tracking-widest ml-4">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;