const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      // => @media (min-width: 640px) { ... }
      'sm':	'640px',
      'md':	'768px',
      'lg':	'1024px',
      'xl':	'1280px',
      '2xl':	'1536px',
      
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'beige': '#E5D9CD',
      'orange': {
        400: '#FB923C',
        600: '#EA580C',
      },
      'blue': '#234473',
      'grey': {
        100: '#F3F4F6',
        500: '#6B7280',
      },
    },
    extend: {
      fontFamily: {
        'BebasNeue' : ['Bebas Neue'],
        'Inter' : ['Inter'],
        'Roboto' : ['Roboto'],
      },
    },
  },
  plugins: [],
};