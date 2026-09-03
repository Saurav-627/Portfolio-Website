/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'Outfit', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      colors: {
        night: {
          bg: '#050816',
          card: '#0F172A',
          text: '#f8fafc',
          border: 'rgba(99, 102, 241, 0.15)',
        },
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // Deep Indigo
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          blue: '#38bdf8', // Electric Blue
          purple: '#8b5cf6', // Purple
          rose: '#f43f5e',
          amber: '#f59e0b',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s infinite alternate',
        'orbit-slow': 'orbit 20s linear infinite',
        'orbit-medium': 'orbit 12s linear infinite',
        'orbit-fast': 'orbit 6s linear infinite',
        'aurora': 'aurora 20s ease infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 10px rgba(99, 102, 241, 0.15), 0 0 20px rgba(99, 102, 241, 0.05)' },
          '100%': { boxShadow: '0 0 25px rgba(99, 102, 241, 0.4), 0 0 50px rgba(56, 189, 248, 0.2)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-gradient': 'radial-gradient(circle at top, #0f172a 0%, #050816 100%)',
        'aurora-mesh': 'linear-gradient(270deg, #050816, #0f172a, #312e81, #1e1b4b)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};