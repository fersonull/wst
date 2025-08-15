/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'Inter'],
        outfit: ['Outfit', 'Inter'],
        google: ['Google Sans Code', 'Inter'],
        inter: ['Inter']
      }
    },
  },
  plugins: [],
}
