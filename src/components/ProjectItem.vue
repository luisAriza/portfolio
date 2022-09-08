<template lang="pug">
div.project-item
	figure
		div.content
			p {{ description }}
			a.repo(:href="repo", target="_blank") Ver código
				CodeBracketSquareIcon.code.icon
			a.site(:href="site", target="_blank") Ver website
				ArrowRightCircleIcon.arrow.icon
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
  @apply w-full bg-gray-100 hover:scale-110 duration-200;
}
img {
  @apply w-full h-full;
}
.content {
  @apply flex flex-wrap place-content-center gap-y-4 gap-x-2 w-full h-full text-center text-white absolute opacity-0 bg-gradient-to-tr from-slate-600 to-secondary dark:to-black duration-500;
}
p {
  @apply w-full opacity-0 px-8 text-sm font-body;
}
a {
  @apply flex opacity-0 pt-1.5 pb-1 px-3 rounded-full border duration-200;
  -webkit-tap-highlight-color: transparent;
}
.repo {
  @apply border-white hover:bg-white hover:text-secondary;
}
.site {
  @apply border-primary bg-primary hover:border-orange-700 hover:bg-orange-700;
}
.icon {
  @apply inline w-5 h-5 ml-2 text-white mt-[1px];
}
.repo:hover .code {
  @apply text-secondary duration-200;
}
figure:hover .content,
figure:hover p,
figure:hover a {
  @apply duration-200 opacity-100;
}
</style>
