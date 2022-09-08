<template lang="pug">
footer
	.logo
		img(src="/logo.png", alt="Logo", width="60", height="60")
	h3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
	.social-medias
		a(href="https://github.com/luisAriza", target="_blank")
			img(src="../assets/icons/github.svg", alt="GitHub icon", width="20", height="20")
		a(href="https://linkedin.com/in/luisariza-dev/", target="_blank")
			img(src="../assets/icons/linkedin.svg", alt="LinkedIn icon", width="20", height="20")
	div
		span Made with
		a(href="https://tailwindcss.com/", target="_blank")
			img(src="../assets/icons/tailwind.svg" alt="Tailwindcss icon", width="140", height="20")

</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
footer {
  @apply grid gap-10 place-items-center px-6 py-14 text-center bg-secondary border-t border-slate-800 sm:px-10 md:py-20 md:grid-cols-2 md:gap-5;
}
h3 {
  @apply w-72 text-xl font-body text-slate-600 md:row-start-2;
}
.social-medias {
  @apply flex gap-6 m-3 md:col-start-2;
  -webkit-tap-highlight-color: transparent;
}
.social-medias a {
  @apply p-3 border-2 border-slate-600 hover:border-white rounded-full duration-300;
}
span {
  @apply text-sm text-slate-600;
}
</style>
