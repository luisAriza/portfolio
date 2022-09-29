<template lang="pug">
section.skills-container
	.skills
		.icon
			CommandLineIcon
		h3.title Skills
		p Disfruto diseñar y desarrollar desde cero interfaces, sitios y aplicaciones web  en el navegador con las mejores prácticas.
		h4.subtitle Lenguajes
		p HTML, CSS, JavaScript, TypeScript, Bootstrap, Tailwindcss, Git, Pug, Sass, Postcss, VueJs, ReactJs.
		h4.subtitle Herramientas
		ul(v-for="tool in tools")
			li {{ tool }}
</template>

<script setup lang="ts">
	import { CommandLineIcon } from "@heroicons/vue/24/solid";

	const tools: String[] = [
		"Visual Studio Code",
		"Heroicons",
		"Font Awesome",
		"Coolors",
		"Figma",
		"Replit",
		"Github",
		"Terminal",
		"Netlify",
		"Webpack",
		"Vite",
	];
</script>

<style scoped lang="postcss">
	.skills-container {
		@apply flex justify-center w-full -mt-24 px-6 drop-shadow-md;
	}
	.skills {
		@apply w-full max-w-2xl px-8 py-16 text-center rounded-xl duration-200 bg-white dark:bg-secondary dark:border dark:border-slate-800;
	}
	.icon {
		@apply w-20 h-20 mx-auto mb-8 p-4 rounded-full bg-primary text-white;
	}
	.title {
		@apply mb-6 text-2xl font-bold;
	}
	.subtitle {
		@apply mb-2 text-xl text-variant;
	}
	p {
		@apply max-w-sm mx-auto mb-10 font-body text-lg;
	}
	li {
		@apply mb-1 font-body text-lg;
	}
</style>
