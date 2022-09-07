/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ff652f",
        secondary: "#011628",
        variant: "#F2FFFF",
        "semi-transparent": "rgba(1, 22, 40, 0.95)",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#ff652f",
        secondary: "#011628",
        variant: "#F2FFFF",
      }),
      fontFamily: {
        main: ["Josefin", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      dropShadow: {
        img: "0 8px 4px rgba(0, 0, 0, .35)",
        card: "-4px 4px 6px rgba(0, 0, 0, .2)",
      },
    },
  },
  plugins: [],
};
