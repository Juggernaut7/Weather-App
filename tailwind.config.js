/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#1E3A8A',
          800: '#3B4A9B',
        },
        teal: {
          500: '#2DD4BF',
          600: '#14B8A6',
        },
        orange: {
          500: '#F97316',
        },
        purple: {
          500: '#8B5CF6',
        },
        gray: {
          100: '#F3F4F6',
          200: '#E5E7EB',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'pulse-weather': 'pulseWeather 2s infinite',
        'shake-weather': 'shakeWeather 0.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseWeather: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        shakeWeather: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' },
        },
      },
    },
  },
  plugins: [],
};