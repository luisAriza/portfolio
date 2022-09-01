<template lang="pug">
div.project-item
	figure
		img(src="../assets/image.svg", alt="Project image", width="320", height="200")
	article
		h3 Project title
		p Project description
		div.tags
			small HTML
			small CSS
			small JS
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.project-item {
  @apply rounded-xl overflow-hidden sm:max-w-md shadow-md;
}
figure {
  @apply bg-slate-200;
}
img {
  @apply w-full;
}
article {
  @apply flex flex-col gap-3 p-4 bg-slate-700;
}
h3 {
  @apply text-2xl capitalize;
}
.tags {
  @apply flex gap-4;
}
small {
  @apply py-0 px-2 rounded-md bg-black;
}
</style>
