/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "hsl(10deg, 100%, 60%)",
				primaryHover: "hsl(10deg, 100%, 50%)",
				secondary: "#021D27",
				variant: "hsl(190deg, 50%, 50%)",
			},
			backgroundColor: (theme) => ({WD
				...theme("colors"),
				primary: "hsl(10deg, 100%, 60%)",
				primaryHover: "hsl(10deg, 100%, 50%)",
				secondary: "#021D27",
				variant: "hsl(190deg, 50%, 50%)",
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
