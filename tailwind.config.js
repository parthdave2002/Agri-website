/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Open Sans"', "sans-serif"],
        heading: ['"Nunito"', "sans-serif"],
      },
    },
  },
  plugins: [],
}