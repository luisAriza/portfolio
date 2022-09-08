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
figure div {
  @apply flex flex-wrap place-content-center gap-5 w-full h-full text-center text-white absolute opacity-0 bg-gradient-to-tr from-slate-600 to-secondary dark:to-black;
}
p {
  @apply w-full opacity-0 px-8 text-sm font-body;
}
a {
  @apply flex opacity-0 pt-1.5 pb-0.5 px-4 rounded-full border border-white hover:border-primary hover:bg-primary ease-in-out duration-300;
  -webkit-tap-highlight-color: transparent;
}
.icon {
  @apply inline w-5 h-5 ml-2 text-white;
}
figure:hover div,
figure:hover p,
figure:hover a {
  @apply ease-in-out duration-300 opacity-100;
}
</style>
