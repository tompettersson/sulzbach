/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        gsblack: {
          100: '#35352F'
        },
        gsred: {
          100: '#ED4A3B',
          200: '#dd2111'
        },
        gsblue: {
          100: '#38BFEA',
          100: '#38BFEA'
        },
        gsyellow: {
          100: '#FFE900'
        },
        gsgreen: {
          100: '#98CC42'
        },
        gsbeige: {
          100: '#F9F8EC'
        },
        gsorange: {
          100: '#d88744'
        },
        gsgray: {
          100: '#F9F8F7',
          200: '#EAEAE8',
          300: '#DAD9D4',
          400: '#CFCFCA',
          500: '#B9B8B0',
          600: '#A0A098',
          700: '#74736C',
          800: '#53524C',
          900: '#3C3B34'
        }
      }
    },
  },
  plugins: []
};