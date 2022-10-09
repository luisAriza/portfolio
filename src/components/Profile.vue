<template lang="pug">
section.profile-container
	article.profile
		h2 Hola, soy Luis Ariza. Gusto en conocerte.
		p Soy desarrollador web autodidacta, me apasiona darle vida a páginas y aplicaciones web con el objetivo de asegurar el funcionamiento con el navegador, la accesibilidad del usuario y un buen performance. En mis trabajos se destaca una interfaz de usuario intuitiva y agradable a la vista, además de buenas prácticas y documentación del código.
		a.btn(href="https://drive.google.com/file/d/1j8kKN7XKfaQdXoDDa8TvezBigOlioYyt/view?usp=sharing", target="_blank")
			| Descargar Curriculum
			DocumentArrowDownIcon.icon
</template>

<script setup lang="ts">
	import { DocumentArrowDownIcon } from "@heroicons/vue/24/solid";
</script>

<style lang="postcss" scoped>
	.profile {
		@apply flex flex-col items-center justify-center gap-6 w-full m-0 px-6 pt-20 pb-40 lg:pt-36 text-center text-white bg-variant;
	}
	h2 {
		@apply text-3xl font-bold;
	}
	p {
		@apply max-w-2xl font-body text-xl leading-[1.9rem];
	}
	.btn {
		@apply mt-2 px-4 py-2 rounded-full duration-300 border border-white hover:text-variant hover:bg-white;
	}
	.icon {
		@apply inline w-5 h-5 ml-2 mb-1 hover:text-variant;
	}
	.btn:hover .icon {
		@apply animate-bounce;
	}
</style>
