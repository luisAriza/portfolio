/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff652f",
        secondary: "#011628",
        variant: "#F2FFFF",
        "semi-transparent": "rgba(0, 0, 0, 0.9)",
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
        title: "2px 2px 2px rgba(0, 0, 0, 1)",
        img: "0 8px 8px rgba(0, 0, 0, .5)",
        card: "-4px 4px 6px rgba(0, 0, 0, .25)",
      },
    },
  },
  plugins: [],
};
