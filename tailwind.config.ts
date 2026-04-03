import { defineConfig } from 'tailwindcss';

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#A855F7',  // Custom purple color
          100: '#E3D8FF',
          200: '#D8B4FE',
          300: '#A855F7',
          400: '#9333EA',
          500: '#7E22CE',
          600: '#6B21A8',
          700: '#5B21A6',
          800: '#4F46E5',
          900: '#4C1D95'
        },
        cyan: {
          DEFAULT: '#06B6D4',  // Custom cyan color
          100: '#B2EBF2',
          200: '#80DEEA',
          300: '#4DD0E1',
          400: '#26C6DA',
          500: '#00BCD4',
          600: '#00ACC1',
          700: '#0097A7',
          800: '#00838F',
          900: '#006064'
        },
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0,255,255,0.8), 0 0 20px rgba(0,255,255,0.6), 0 0 30px rgba(0,255,255,0.4)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});