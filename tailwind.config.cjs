/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF7847",
        secondary: "#011628",
        variant: "#F2F2E3",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#FF7847",
        secondary: "#011628",
        variant: "#F2F2E3",
      }),
      fontFamily: {
        main: ["Josefin", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      dropShadow: {
        img: "0 8px 4px rgba(0, 0, 0, .33)",
        card: "0 0 8px rgba(0, 0, 0, .33)",
      },
    },
  },
  plugins: [],
};
