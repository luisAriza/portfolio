<template lang="pug">
header
	Navbar
	article
		h1 Frontend Developer
		h2 Diseño y desarrollo cosas agradables y sencillas, y me encanta lo que hago.
		img.avatar(src="../assets/images/avatar.svg", alt="Image", width="240" height="254")
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
  @apply flex flex-col items-center gap-12 w-full px-6 text-center sm:px-10 lg:px-6 lg:py-4;
}
article {
  @apply flex flex-col items-center gap-5 w-full;
}
h1 {
  @apply font-bold text-[2rem] md:text-[2.5rem];
}
h1 span {
  text-shadow: 0 0 8px rgba(255, 101, 47, 0.5);
}
h2 {
  @apply font-body text-xl md:text-2xl dark:text-slate-400;
}
.avatar {
  @apply w-48 my-8 drop-shadow-img md:w-60;
}
</style>
