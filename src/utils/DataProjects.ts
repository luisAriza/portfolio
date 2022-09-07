import google from "../assets/images/google_clone.webp"
import batatabit from "../assets/images/batatabit.webp"
import lego from "../assets/images/lego_superhero.webp"
import conf from "../assets/images/conf_hawaii.webp"
import travel from "../assets/images/travel_page.webp"
import weather from "../assets/images/weather.webp"
import products from "../assets/images/products_app.webp"
import quiz from "../assets/images/quiz.webp"
import math from "../assets/images/math.webp"
import rick from "../assets/images/rick_morty.webp"
import yard from "../assets/images/yard_sale.webp"
import todo from "../assets/images/todo.webp"

interface Projects {
	title: string;
	url: string;
	image: string;
}

export const dataProjects: Projects[] = [
	{
		title: "to do",
		url: "https://luis-ariza-todo.netlify.app/",
		image: todo
	},
	{
		title: "yard sale",
		url: "https://luisariza-yardsale.netlify.app/",
		image: yard
	},
	{
		title: "rick and morty",
		url: "https://luisariza-rick-and-morty.netlify.app/",
		image: rick
	},
	{
		title: "math website",
		url: "https://luisariza.github.io/math_webSite/",
		image: math
	},
	{
		title: "weather app",
		url: "https://luisariza.github.io/weather/",
		image: weather
	},
	{
		title: "quiz app",
		url: "https://luisariza.github.io/quiz/",
		image: quiz
	},
	{
		title: "products app",
		url: "https://luisariza.github.io/products/",
		image: products
	},
	{
		title: "travel page",
		url: "https://luisariza.github.io/travel_page/",
		image: travel
	},
	{
		title: "Lego superhero",
		url: "https://luisariza.github.io/lego_superhero/",
		image: lego
	},
	{
		title: "conf en hawaii",
		url: "https://luisariza.github.io/conf_hawaii/",
		image: conf
	},
	{
		title: "batatabit",
		url: "https://luisariza.github.io/batatabit/",
		image: batatabit
	},
	{
		title: "google clone",
		url: "https://luisariza.github.io/google_clone/",
		image: google
	},
];