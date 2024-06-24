/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors:{
      'primary': '#F0BB6F',
      'secondary': '#2B6145',
      'third': '#801D02',
      'text': '#F4FEFD',
      'grass': '#4A611D',
      'mustard': '#9E650A',
      'orange': '#b04b0c'
    },
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      fontFamily:{
        fjalla: ['fjalla one', 'sans serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

