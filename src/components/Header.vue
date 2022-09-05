<template lang="pug">
header
	Navbar
	div
		article
			h1 Hi, I'm
				span  Luis Ariza
				|  and I'm Frontend Developer
			p I design and code beautifully simple things, and I love what I do.
		figure
			img(src="../assets/icons/tabs.svg", alt="Image", width="260")
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
  @apply flex flex-col items-center w-full px-6 text-secondary sm:px-10 md:py-5 bg-gradient-to-b from-secondary via-white to-white;
}
div {
  @apply w-full max-w-5xl md:py-10 md:flex md:flex-wrap;
}
article {
  @apply flex flex-col gap-8 w-full py-20 text-center md:w-1/2 md:p-0 md:justify-center md:text-left;
}
h1 {
  @apply text-4xl font-bold;
}
h1 span {
  text-shadow: 0 0 8px rgba(255, 101, 47, 0.7);
}
p {
  @apply max-w-xl mx-auto text-2xl font-body font-thin md:text-xl;
}
figure {
  @apply py-8 md:w-1/2 md:py-0 md:pr-0 md:flex md:justify-end;
}
img {
  @apply w-full max-w-xs mx-auto md:m-0 md:max-w-sm;
}
</style>
