/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: '#FFFFFF',
        dry: '#A96B18',
        subMain: '#2F2F2F',
        text: '#484444',
        star: '#FFB000',
        border: '#484444',
        dryGray: '#E0D5D8',
      },
      fontSize: {
        h1: '2.6rem',
      },
      height: {
        header: '560px',
        rate: '400px'
      },
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px'
      },
    },
  },
  plugins: [
    require('@headlessui/react'),
    require('tailwind-scrollbar-hide')
  ],
}

