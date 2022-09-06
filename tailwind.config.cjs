/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff652f",
        secondary: "#0c1a25",
        variant: "#F2FFFF",
        "semi-transparent": "rgba(0, 0, 0, 0.85)",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#ff652f",
        secondary: "#0c1a25",
        variant: "#F2FFFF",
      }),
      fontFamily: {
        main: ["Josefin", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      dropShadow: {
        h3: "2px 2px 2px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
