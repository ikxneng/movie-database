/** @type {import('tailwindcss').Config} */
const plugin = require('tailwind-scrollbar')
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require ('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded'], // Enable scrollbar variants (e.g., rounded corners)
  },
};
