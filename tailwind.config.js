/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        'title' : '"M Plus 1p", sans-serif',
        'sub' : '"Poppins", sans-serif'
      }
    },
  },
  plugins: [],
}