<template lang="pug">
div.project-item
	figure
		div
			h3 {{ title }}
			button Preview
			a(:href="url", target="_blank") Open
		img(:src="image", alt="Project image", width="320", height="160", loading="lazy")
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
  @apply flex flex-wrap place-content-center gap-4 w-full h-full text-center absolute hover:bg-semi-transparent hover:scale-110 transition-all ease-in-out;
}
h3 {
  @apply hidden w-full text-2xl capitalize text-variant drop-shadow-h3 font-black tracking-wider;
}
a,
button {
  @apply hidden w-24 p-1.5 rounded-full text-sm border border-variant text-variant hover:bg-primary hover:border-primary transition-all ease-in-out;
  -webkit-tap-highlight-color: transparent;
}
div:hover h3,
div:hover a,
div:hover button {
  @apply block;
}
</style>
