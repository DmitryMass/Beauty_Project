/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {},
    lineHeight: {},
    extend: {
      spacing: {},
      fontSize: {
        carlo: '64px',
        h1: '36px',
        h2: '24px',
        md: '20',
        sm: '18',
      },
      fontFamily: {
        monteCarlo: ['MonteCarlo', 'cursive'],
      },
      lineHeight: {
        classic: '160%',
        xl: '44px',
        lg: '39px',
        md: '29px',
        sm: '24px',
        m: '22px',
        s: '20px',
      },
      backgroundColor: {
        darkGrey: '#222222',
        gold: '#F0DDA3',
        white: '#FFFFFF',
        black: '#0b0b0b',
      },
      borderColor: {},
      colors: {
        darkGrey: '#222222',
        gold: '#F0DDA3',
        white: '#FFFFFF',
        whiteOpacity: '#ffffffb8',
      },
    },
  },
  plugins: [],
};
