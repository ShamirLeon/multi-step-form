/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#000",
      transparent: "trasparent",
      marineBlue: "#142f56",
      purplishBlue: "#5850ec",
      pastelBlue: "#d6e0ff",
      lightBlue: "#cae5f8",
      strawberryRed: "#ef4b63",
      coolGray: "#9196a4",
      lightGray: "#e4e8ef",
      magnolia: "#f7f9fc",
      alabaster: "#fefeff",
      white: "#ffffff",
    },
    fontFamily: {
      Ubuntu: ["Ubuntu", "sans-serif"],
    },
  },
  plugins: [],
};
