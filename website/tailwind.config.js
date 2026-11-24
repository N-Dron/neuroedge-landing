/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        agro: {
          950: '#07120d',
          900: '#0c1f17',
          800: '#132e22',
          700: '#1b4332',
          600: '#2d6a4f',
          500: '#40916c',
          400: '#52b788',
          300: '#74c69d',
          200: '#95d5b2',
          100: '#d8f3dc',
          50: '#f2fbf5',
        },
        graphite: {
          950: '#0b0e11',
          900: '#12161b',
          850: '#181d24',
          800: '#1f262e',
          700: '#2c3540',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
