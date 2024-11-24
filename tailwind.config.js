/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6347", // Tomato
        secondary: "#2c3e50", // Dark Blue
        background: "#f8f9fa", // Light Grey
        text: "#2c3e50",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        serif: ['"Merriweather"', "serif"],
      },
    },
  },
  plugins: [],
};
