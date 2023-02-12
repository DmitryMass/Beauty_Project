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
        xl: '36px',
        h1: '32px',
        h2: '24px',
        md: '20px',
        sm: '18px',
        classic: '16px',
        s: '14px',
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
        black: '#000000',
        hoverGold: '#f0d47c',
        coal: '#181818',
        goldBlur: 'rgba(240, 221, 163, 0.5)',
        green: '#1BC200',
        masterNameBg: 'rgba(240, 221, 163, 0.21)',
        masterCard: 'rgba(0, 0, 0, 0.37)',
        inputBg: 'rgba(0, 0, 0, 0.37)',
        contactFormBg: ' rgba(240, 221, 163, 0.1)',
      },
      borderColor: {},
      colors: {
        darkGrey: '#222222',
        gold: '#F0DDA3',
        white: '#FFFFFF',
        whiteOpacity: '#ffffffb8',
        coal: '#181818',
        goldOpacity: 'rgba(240, 221, 163, 0.5)',
        green: '#1BC200',
      },
    },
  },
  plugins: [],
};
