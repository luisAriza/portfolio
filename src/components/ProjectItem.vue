<template lang="pug">
div.project-item
	figure
		div.content
			p {{ description }}
			a.repo(:href="repo", target="_blank") Ver código
				CodeBracketSquareIcon.code.icon
			a.site(:href="site", target="_blank") Ver website
				ArrowRightCircleIcon.arrow.icon
		img(:src="image", alt="Project image", width="320", height="320", loading="lazy")
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
  @apply w-full bg-gray-100 hover:scale-110 duration-200;
}
img {
  @apply w-full h-full;
}
.content {
  @apply flex flex-wrap place-content-center gap-y-4 gap-x-2 w-full h-full text-center text-white absolute duration-500 opacity-0 bg-gradient-to-br from-secondary to-variant;
}
figure:hover .content {
  @apply duration-200 opacity-100;
}
p {
  @apply w-72 text-sm font-body;
}
a {
  @apply flex pt-1.5 pb-1 px-3 rounded-full border duration-300;
  -webkit-tap-highlight-color: transparent;
}
.repo {
  @apply border-white hover:bg-white hover:text-secondary;
}
.site {
  @apply border-primary bg-primary hover:border-orange-700 hover:bg-orange-700;
}
.icon {
  @apply inline w-5 h-5 ml-2 text-white mt-[1px] duration-300;
}
.repo:hover .code {
  @apply text-secondary duration-300;
}
</style>
