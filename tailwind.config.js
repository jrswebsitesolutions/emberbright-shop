/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2fb',
          100: '#cce5f7',
          200: '#99cbef',
          300: '#66b1e7',
          400: '#3397df',
          500: '#1270AF',
          600: '#0e5a8c',
          700: '#0b4469',
          800: '#072d46',
          900: '#041723',
        },
      },
    },
  },
  plugins: [],
};
