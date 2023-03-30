const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
    extend: {
      colors: {
        light: '#fcfcfc',
        primary: '#c89450',
        secondary: '#95cfd0',
        dark: '#0A0A0A',
        darkest: '#160a0e',
        danger: '#79252b',
        muted: '#ffffff1f',
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        display: ['Conthrax SemiBold', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '2560px',
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(5px, -5px) scale(1.02)',
          },
          '66%': {
            transform: 'translate(-5px, 5px) scale(0.98)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
