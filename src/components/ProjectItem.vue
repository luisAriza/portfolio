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
  @apply w-full bg-gray-300 hover:scale-110 transition-all ease-in-out;
}
img {
  @apply w-full h-full;
}
div {
  @apply flex flex-wrap place-content-center gap-4 w-full h-full text-center absolute hover:bg-semi-transparent;
}
h3 {
  @apply hidden w-full text-2xl drop-shadow-h3 text-white font-black capitalize;
}
a,
button {
  @apply hidden w-20 p-1 rounded-full text-sm border border-white text-white hover:bg-primary hover:border-primary hover:transition-all;
  -webkit-tap-highlight-color: transparent;
}
div:hover h3,
div:hover a,
div:hover button {
  @apply block;
}
</style>
