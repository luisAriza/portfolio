<template lang="pug">
header
	Navbar
	div
		article
			h1 Luis Ariza
			p Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quasi sit, ullam unde, minima recusandae fuga laudantium eius quis.
		figure
			img(src="../assets/tabs.svg", alt="Image", width="260")
</template>

<script lang="ts">
import Navbar from "./Navbar.vue";

export default {
  name: "Header",
  components: {
    Navbar,
  },
};
</script>

<style scoped lang="postcss">
header {
  @apply flex flex-col items-center w-full h-[26rem] px-6 sm:px-10 md:h-auto md:py-5 bg-gradient-to-b from-secondary;
}
div {
  @apply w-full max-w-5xl md:flex md:flex-wrap;
}
article {
  @apply flex flex-col gap-6 w-full pt-6 pb-12 text-center md:w-1/2 md:p-0 md:justify-center md:text-left;
}
h1 {
  @apply text-5xl uppercase;
}
p {
  @apply max-w-xl mx-auto;
}
figure {
  @apply px-8 md:w-1/2 md:pl-10 md:pr-0 md:flex md:justify-end;
}
img {
  @apply w-full max-w-xs mx-auto md:m-0 md:max-w-sm;
}
</style>
