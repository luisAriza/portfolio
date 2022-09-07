<template lang="pug">
div.project-item
	figure
		div
			h3 {{ title }}
			p description
			a(:href="url", target="_blank") Go to site
				ArrowRightCircleIcon.arrow-icon
		img(:src="image", alt="Project image", width="320", height="160", loading="lazy")
</template>

<script lang="ts">
import { ArrowRightCircleIcon } from "@heroicons/vue/20/solid";

export default {
  name: "ProjectItem",
  components: { ArrowRightCircleIcon },
  props: {
    title: String,
    url: String,
    image: String,
  },
};
</script>

<style scoped lang="postcss">
.project-item {
  @apply rounded-xl overflow-hidden drop-shadow-card relative sm:max-w-md;
}
figure {
  @apply w-full bg-gray-100 hover:scale-110 transition-all ease-in-out;
}
img {
  @apply w-full h-full;
}
div {
  @apply flex flex-wrap place-content-center gap-2 w-full h-full text-center text-white absolute hover:bg-semi-transparent;
}
h3 {
  @apply hidden w-full text-xl font-bold capitalize;
}
p {
  @apply hidden w-full px-5 font-body font-light;
}
a {
  @apply hidden w-36 my-2 p-1 rounded-full border border-white hover:border-primary hover:bg-primary hover:transition-all;
  -webkit-tap-highlight-color: transparent;
}
.arrow-icon {
  @apply inline w-5 h-5 ml-2;
}
div:hover h3,
div:hover p {
  @apply block;
}
div:hover a {
  @apply flex items-center justify-center;
}
</style>
