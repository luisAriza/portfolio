/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#FF7847",
				secondary: "#021D27",
				variant: "#4ED0C1",
			},
			backgroundColor: (theme) => ({
				...theme("colors"),
				primary: "#FF7847",
				secondary: "#021D27",
				variant: "#4ED0C1",
			}),
			fontFamily: {
				main: ["Josefin", "sans-serif"],
				body: ["Nunito", "sans-serif"],
			},
			dropShadow: {
				card: "0 0 4px rgba(0, 0, 0, .3)",
			},
		},
	},
	plugins: [],
};
