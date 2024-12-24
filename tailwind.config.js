/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".jsx"
  ],
  theme: {
    fontFamily:{
      'inter':["Inter", 'ui-sans-serif'],
      'darker-grotesque':["Darker Grotesque", 'ui-sans-serif']
    },
    extend: {},
  },
  plugins: [
  ],
}

