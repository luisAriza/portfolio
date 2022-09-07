<template lang="pug">
footer
	figure.logo
		img(src="/logo.png", alt="Logo", width="60", height="60")
	h3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
	figure.social-medias
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
  @apply flex flex-col gap-10 items-center px-6 py-10 text-center sm:px-10 md:pb-12 bg-secondary;
}
h3 {
  @apply w-72 text-xl font-body text-slate-600;
}
.logo {
  @apply w-auto;
}
.social-medias {
  @apply flex gap-6 m-3;
}
.social-medias a {
  @apply p-3 border-2 border-slate-600 rounded-full;
}
span {
  @apply text-sm text-slate-600;
}
</style>
