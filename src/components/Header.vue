<template lang="pug">
header
	Navbar
	article
		h1 Luis Ariza
		p Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quasi sit, ullam unde, minima recusandae fuga laudantium eius quis.
	figure
		img(src="../assets/online_gallery.svg", alt="Image", width="260")
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
  @apply h-[27rem] px-6 relative;
}
article {
  @apply flex flex-col gap-6 w-full pt-6 pb-16 text-center;
}
h1 {
  @apply text-5xl uppercase;
}

img {
  @apply mx-auto;
}
</style>
