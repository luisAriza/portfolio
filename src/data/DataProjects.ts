import google from "@images/google_clone.png"
import batatabit from "@images/batatabit.png"
import conf from "@images/conf_hawaii.png"
import lego from "@images/lego_superhero.png"
import travel from "@images/travel_page.png"
import products from "@images/products_app.png"
import quiz from "@images/quiz.png"
import weather from "@images/weather.png"
import crypto from "@images/crypto_viewer.png"
import math from "@images/math.png"
import rick from "@images/rick_morty.png"
import yard from "@images/yard_sale.png"
import cashflow from "@images/cashflow.png"
import todo from "@images/todo.png"

interface Projects {
	description: string;
	repo: string;
	site: string;
	image: string;
}

export const DataProjects: Projects[] = [
	{
		description: "Aplicación to-do desarrollada con VueJs y Tailwindcss.",
		repo: "https://github.com/luisAriza/todo-vue/",
		site: "https://lmap-todo.netlify.app/",
		image: todo
	},
	{
		description: "Aplicación de registros de ingresos y gastos desarrollada con VueJs (<em>composition API</em>).",
		repo: "https://github.com/luisAriza/cashflow/",
		site: "https://lmap-cashflow.netlify.app/",
		image: cashflow
	},
	{
		description: "E-Commerce de productos desarrollada con ReactJs.",
		repo: "https://github.com/luisAriza/yard_sale-react/",
		site: "https://lmap-yardsale.netlify.app/",
		image: yard
	},
	{
		description: "SPA de personajes de Rick and Morty desarrollada con JavaScript.",
		repo: "https://github.com/luisAriza/rick-and-morty/",
		site: "https://lmap-rick-and-morty.netlify.app/",
		image: rick
	},
	{
		description: "Calculadora de perímetros, áreas, descuentos, media, promedio y la moda.",
		repo: "https://github.com/luisAriza/math-webSite/",
		site: "https://luisariza.github.io/math-webSite/",
		image: math
	},
	{
		description: "Sitio web con seguimiento al estado de 100 crypto monedas diferentes.",
		repo: "https://github.com/luisAriza/crypto-viewer/",
		site: "https://luisariza.github.io/crypto-viewer/",
		image: crypto
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
		repo: "https://github.com/luisAriza/travel-page/",
		site: "https://luisariza.github.io/travel-page/",
		image: travel
	},
	{
		description: "Mockup de Lego desarrollada con HTML, CSS y JavaScript puro.",
		repo: "https://github.com/luisAriza/lego-superhero/",
		site: "https://luisariza.github.io/lego-superhero/",
		image: lego
	},
	{
		description: "Página promocional de conf hawaii desarrollada con Bootstrap.",
		repo: "https://github.com/luisAriza/conf-hawaii/",
		site: "https://luisariza.github.io/conf-hawaii/",
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
		repo: "https://github.com/luisAriza/google-clone/",
		site: "https://luisariza.github.io/google-clone/",
		image: google
	},
];