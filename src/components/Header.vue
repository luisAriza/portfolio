<template lang="pug">
header
	Navbar
	article
		h1 Luis Ariza
		p Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quasi sit, ullam unde, minima recusandae fuga laudantium eius quis.
	figure
		img(src="../assets/online_gallery.svg", alt="Image", width="240")
</template>

<script setup lang="ts">
import Navbar from "./Navbar.vue";
</script>

<style scoped lang="postcss">
header {
  @apply h-96 px-6 relative;
}
article {
  @apply flex flex-col gap-6 w-full py-10 text-center;
}
h1 {
  @apply text-5xl uppercase;
}
img {
  @apply mx-auto;
}
</style>
