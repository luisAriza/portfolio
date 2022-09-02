<template lang="pug">
div.project-item
	figure
		div
			h3 batatabit: bitcoin tracker
			a(href="#")  Preview
			a(href="#") Open
		img(src="../assets/image.svg", alt="Project image", width="320", height="200")
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.project-item {
  @apply rounded-xl overflow-hidden sm:max-w-md shadow-md relative;
}
figure {
  @apply w-full bg-gray-300;
}
img {
  @apply w-full;
}
div {
  @apply flex flex-wrap place-content-center gap-4 w-full h-full text-center absolute;
}
h3 {
  @apply text-2xl capitalize text-white drop-shadow-h3;
}
a {
  @apply w-24 px-3 py-2 rounded-lg border border-black;
}
</style>
