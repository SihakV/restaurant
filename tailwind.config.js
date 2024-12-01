/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff8e7", // Tomato
        secondary: "#e12c2c", // Dark Blue
        background: "#f8f9fa", // Light Grey
        text: "#2c3e50",
      },
      fontFamily: {
        sans: ["Parkinsans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
