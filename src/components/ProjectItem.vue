<template lang="pug">
div.project-item
	figure
		div
			h3 {{ title }}
			button Preview
			a(:href="url", target="_blank") Open
		img(:src="image", alt="Project image", width="320", height="160")
</template>

<script lang="ts">
export default {
  name: "ProjectItem",
  props: {
    title: String,
    url: String,
    image: String,
  },
};
</script>

<style scoped lang="postcss">
.project-item {
  @apply rounded-xl overflow-hidden sm:max-w-md shadow-md relative;
}
figure {
  @apply w-full bg-gray-300;
}
img {
  @apply w-full h-full;
}
div {
  @apply flex flex-wrap place-content-center gap-4 w-full h-full text-center absolute bg-semi-transparent;
}
h3 {
  @apply w-full text-2xl capitalize text-variant drop-shadow-h3;
}
a,
button {
  @apply w-24 px-3 py-2 rounded-lg text-sm bg-secondary text-primary;
}
</style>
