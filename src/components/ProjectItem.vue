<template lang="pug">
div.project-item
	figure
		div
			p {{ description }}
			a.repo(:href="repo", target="_blank") Code
				CodeBracketSquareIcon.icon
			a.site(:href="site", target="_blank") Go to site
				ArrowRightCircleIcon.icon
		img(:src="image", alt="Project image", width="320", height="160", loading="lazy")
</template>

<script lang="ts">
import {
  ArrowRightCircleIcon,
  CodeBracketSquareIcon,
} from "@heroicons/vue/20/solid";

export default {
  name: "ProjectItem",
  components: { ArrowRightCircleIcon, CodeBracketSquareIcon },
  props: {
    description: String,
    repo: String,
    site: String,
    image: String,
  },
};
</script>

<style scoped lang="postcss">
.project-item {
  @apply rounded-xl overflow-hidden drop-shadow-card relative sm:max-w-md;
}
figure {
  @apply w-full bg-gray-100 hover:scale-110 ease-in-out duration-300;
}
img {
  @apply w-full h-full;
}
div {
  @apply flex flex-wrap place-content-center gap-5 w-full h-full text-center text-white absolute hover:bg-semi-transparent;
}
p {
  @apply hidden w-72 text-sm font-body;
}
a {
  @apply hidden pt-1.5 pb-0.5 px-4 rounded-full border border-white hover:border-primary hover:bg-primary ease-in-out duration-300;
  -webkit-tap-highlight-color: transparent;
}
.icon {
  @apply inline w-5 h-5 ml-2 text-white;
}
div:hover h3,
div:hover p {
  @apply block;
}
div:hover a {
  @apply flex;
}
</style>
