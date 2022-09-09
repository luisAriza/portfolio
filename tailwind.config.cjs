/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF7847",
        secondary: "#021927",
        variant: "#229FBF",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#FF7847",
        secondary: "#021927",
        variant: "#229FBF",
      }),
      fontFamily: {
        main: ["Josefin", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      dropShadow: {
        card: "0 0 8px rgba(0, 0, 0, .33)",
      },
    },
  },
  plugins: [],
};
