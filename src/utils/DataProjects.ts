import google from "../assets/images/google_clone.webp"
import batatabit from "../assets/images/batatabit.webp"
import lego from "../assets/images/lego_superhero.webp"
import conf from "../assets/images/conf_hawaii.webp"
import travel from "../assets/images/travel_page.webp"
import products from "../assets/images/products_app.webp"
import quiz from "../assets/images/quiz.webp"
import weather from "../assets/images/weather.png"
import math from "../assets/images/math.png"
import rick from "../assets/images/rick_morty.png"
import yard from "../assets/images/yard_sale.png"
import todo from "../assets/images/todo.png"

interface Projects {
	description: string;
	repo: String;
	site: string;
	image: string;
}

export const dataProjects: Projects[] = [
	{
		description: "Aplicación to-do desarrollada con VueJs y Tailwindcss.",
		repo: "https://github.com/luisAriza/todo-vue/",
		site: "https://luis-ariza-todo.netlify.app/",
		image: todo
	},
	{
		description: "E-Commerce de productos desarrollada con ReactJs.",
		repo: "https://github.com/luisAriza/yard_sale-react/",
		site: "https://luisariza-yardsale.netlify.app/",
		image: yard
	},
	{
		description: "SPA de personajes de Rick and Morty desarrollada con JavaScript.",
		repo: "https://github.com/luisAriza/rick_and_morty/",
		site: "https://luisariza-rick-and-morty.netlify.app/",
		image: rick
	},
	{
		description: "Calculadora de perímetros, áreas, descuentos, media, promedio y la moda.",
		repo: "https://github.com/luisAriza/math_webSite/",
		site: "https://luisariza.github.io/math_webSite/",
		image: math
	},
	{
		description: "App del clima de diferentes lugares, desarrollada con la API Open Weather.",
		repo: "https://github.com/luisAriza/weather/",
		site: "https://luisariza.github.io/weather/",
		image: weather
	},
	{
		description: "Quiz desarrollado con JavaScript y el paradigma POO.",
		repo: "https://github.com/luisAriza/quiz/",
		site: "https://luisariza.github.io/quiz/",
		image: quiz
	},
	{
		description: "App para agregar productos desarrollada con JavaScript y POO.",
		repo: "https://github.com/luisAriza/products/",
		site: "https://luisariza.github.io/products/",
		image: products
	},
	{
		description: "Landing Page de viajes desarrollada con JavaScript y Tailwindcss.",
		repo: "https://github.com/luisAriza/travel_page/",
		site: "https://luisariza.github.io/travel_page/",
		image: travel
	},
	{
		description: "Mockup de Lego desarrollada con HTML, CSS y JavaScript puro.",
		repo: "https://github.com/luisAriza/lego_superhero/",
		site: "https://luisariza.github.io/lego_superhero/",
		image: lego
	},
	{
		description: "Página promocional de conf hawaii desarrollada con Bootstrap.",
		repo: "https://github.com/luisAriza/conf_hawaii/",
		site: "https://luisariza.github.io/conf_hawaii/",
		image: conf
	},
	{
		description: "Mockup de Batatabit desarrollada con HTML y CSS puro.",
		repo: "https://github.com/luisAriza/batatabit/",
		site: "https://luisariza.github.io/batatabit/",
		image: batatabit
	},
	{
		description: "Clon del buscador de Google desarrollado con HTML and CSS puro.",
		repo: "https://github.com/luisAriza/google_clone/",
		site: "https://luisariza.github.io/google_clone/",
		image: google
	},
];