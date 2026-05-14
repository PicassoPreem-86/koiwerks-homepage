/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070708',
          900: '#0B0B0D',
          850: '#101013',
          800: '#15151A',
          700: '#1C1C22',
          600: '#26262E',
          500: '#3A3A45',
        },
        koi: {
          DEFAULT: '#FF2D7A',
          50: '#FFE4EE',
          100: '#FFC2D9',
          400: '#FF4F8C',
          500: '#FF2D7A',
          600: '#E61D67',
          700: '#C01556',
        },
        electric: {
          400: '#3FA9FF',
          500: '#1E90FF',
          600: '#1577DB',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Anton"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        jp: ['"Noto Sans JP"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'koi-radial':
          'radial-gradient(60% 60% at 80% 50%, rgba(255,45,122,0.15) 0%, rgba(11,11,13,0) 60%)',
      },
    },
  },
  plugins: [],
};
