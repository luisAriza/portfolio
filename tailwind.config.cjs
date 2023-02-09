/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"primary-100": "#FAD8D1",
				"primary-200": "#F5B1A3",
				"primary-300": "#F08A75",
				primary: "#EB6347",
				"primary-500": "#E53B1A",
				"primary-600": "#B83014",
				"primary-700": "#8A240F",
				"primary-800": "#5C180A",
				"primary-900": "#2B0E08",
				"secondary-100": "#DEEBED",
				"secondary-200": "#BDD6DB",
				"secondary-300": "#9CC2C9",
				"secondary-400": "#7AADB8",
				"secondary-500": "#5999A6",
				secondary: "#477A85",
				"secondary-700": "#365C63",
				"secondary-800": "#243D42",
				"secondary-900": "#121F21",
			},
			backgroundColor: (theme) => ({
				...theme("colors"),
				"primary-100": "#FAD8D1",
				"primary-200": "#F5B1A3",
				"primary-300": "#F08A75",
				primary: "#EB6347",
				"primary-500": "#E53B1A",
				"primary-600": "#B83014",
				"primary-700": "#8A240F",
				"primary-800": "#5C180A",
				"primary-900": "#2B0E08",
				"secondary-100": "#DEEBED",
				"secondary-200": "#BDD6DB",
				"secondary-300": "#9CC2C9",
				"secondary-400": "#7AADB8",
				"secondary-500": "#5999A6",
				secondary: "#477A85",
				"secondary-700": "#365C63",
				"secondary-800": "#243D42",
				"secondary-900": "#121F21",
			}),
			fontFamily: {
				main: ["Maven Pro", "sans-serif"],
				body: ["Josefin Slab", "sans-serif"],
			},
			boxShadow: {
				"t-light": [
					"0 4px 4px rgba(0, 0, 0, .25)",
					"inset 0 2px 4px rgba(115, 115, 115, 1)",
					"inset 0 -4px 4px rgba(12, 12, 12, 1)",
				],
				"t-night": [
					"0 4px 4px rgba(0, 0, 0, .25)",
					"inset 0 2px 4px rgba(230, 230, 230, 1)",
					"inset 0 -4px 4px rgba(191, 191, 191, 1)",
				],
			},
			dropShadow: {
				text: "0 0 8px rgba(38, 38, 38, 1)",
			},
		},
	},
	plugins: [],
};
