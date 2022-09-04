<template lang="pug">
footer
	figure.logo
		img(src="../assets/icons/image.svg", alt="Logo", width="60", height="60")
	p Lorem ipsum dolor sit amet consectetur adipisicing elit.
	figure.social-media
		img(src="../assets/icons/linkedin.svg", alt="LinkedIn", width="32", height="32")
		img(src="../assets/icons/github.svg", alt="GitHub", width="32", height="32")
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
footer {
  @apply flex flex-col gap-8 items-center p-6 text-center sm:px-10 md:pb-12 bg-gradient-to-t from-secondary to-white;
}
p {
  @apply w-60;
}
.logo {
  @apply w-auto;
}
.social-media {
  @apply flex gap-5 m-3;
}
</style>
