import google from "../assets/previews/google_clone.webp"
import batatabit from "../assets/previews/batatabit.webp"
import lego from "../assets/previews/lego_superhero.webp"
import conf from "../assets/previews/conf_hawaii.webp"
import travel from "../assets/previews/travel_page.webp"
import weather from "../assets/previews/weather.webp"

interface Projects {
	title: string;
	url: string;
	image: string;
}

export const dataProjects: Projects[] = [
	{
		title: "google clone",
		url: "https://luisariza.github.io/google_clone/",
		image: google
	},
	{
		title: "batatabit",
		url: "https://luisariza.github.io/batatabit/",
		image: batatabit
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
		title: "travel page",
		url: "https://luisariza.github.io/travel_page/",
		image: travel
	},
	{
		title: "weather app",
		url: "https://luisariza.github.io/weather/",
		image: weather
	},
];