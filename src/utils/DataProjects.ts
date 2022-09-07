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
	description: string;
	repo: String;
	site: string;
	image: string;
}

export const dataProjects: Projects[] = [
	{
		description: "To do application developed with the VueJs and Tailwindcss framework, for data persistence I used LocalStorage.",
		repo: "https://github.com/luisAriza/todo-vue/",
		site: "https://luis-ariza-todo.netlify.app/",
		image: todo
	},
	{
		description: "E-Commerce of products and services developed with ReactJs.",
		repo: "https://github.com/luisAriza/yard_sale-react/",
		site: "https://luisariza-yardsale.netlify.app/",
		image: yard
	},
	{
		description: "Single Page Application developed with JavaScript using the Rick and Morty API. This API has the information of each character.",
		repo: "https://github.com/luisAriza/rick_and_morty/",
		site: "https://luisariza-rick-and-morty.netlify.app/",
		image: rick
	},
	{
		description: "Math app to calculate perimeters, areas, price, discounts, as well as mean, average, and mode from a data list.",
		repo: "https://github.com/luisAriza/math_webSite/",
		site: "https://luisariza.github.io/math_webSite/",
		image: math
	},
	{
		description: "Weather app for different locations, developed with the Open Weather API. I used LocalStorage for data persistence.",
		repo: "https://github.com/luisAriza/weather/",
		site: "https://luisariza.github.io/weather/",
		image: weather
	},
	{
		description: "Quiz app for developers developed whit OOP Paradigm and JavaScript.",
		repo: "https://github.com/luisAriza/quiz/",
		site: "https://luisariza.github.io/quiz/",
		image: quiz
	},
	{
		description: "App to add products developed whit OOP Paradigm and JavaScript.",
		repo: "https://github.com/luisAriza/products/",
		site: "https://luisariza.github.io/products/",
		image: products
	},
	{
		description: "This is a travel landing page mockup designed and developed with Tailwindcss, Postcss, Pug and JavaScript.",
		repo: "https://github.com/luisAriza/travel_page/",
		site: "https://luisariza.github.io/travel_page/",
		image: travel
	},
	{
		description: "Lego superhero page made with pure HTML, CSS and JavaScript, its appeal is in the eye-catching animations.",
		repo: "https://github.com/luisAriza/lego_superhero/",
		site: "https://luisariza.github.io/lego_superhero/",
		image: lego
	},
	{
		description: "Promotional page for a conference in Hawaii about news from the tech world, developed with Bootstrap.",
		repo: "https://github.com/luisAriza/conf_hawaii/",
		site: "https://luisariza.github.io/conf_hawaii/",
		image: conf
	},
	{
		description: "Mockup of the Batatabit page made with pure HTML and CSS, applying breakpoints to be able to see it on mobile, tablet and desktop.",
		repo: "https://github.com/luisAriza/batatabit/",
		site: "https://luisariza.github.io/batatabit/",
		image: batatabit
	},
	{
		description: "In this project the Google search engine was cloned with pure HTML and CSS.",
		repo: "https://github.com/luisAriza/google_clone/",
		site: "https://luisariza.github.io/google_clone/",
		image: google
	},
];