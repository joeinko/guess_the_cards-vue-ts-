/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#F5F5F5',
      'green': '#CFF68F',
      'red': '#FD9B49',

      // 'white': {
      //   default: '#F5F5F5',
      //   accent: '#E5E5E5',
      // },
      // 'green': {
      //   default: '#CFF68F',
      //   accent: '#A0E57E',
      // },
      // 'red': {
      //   default: '#FD9B49',
      //   accent: '#F26C4F',
      // },
    },
    extend: {},
  },
  plugins: [],
}

