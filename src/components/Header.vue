<template lang="pug">
header
	Navbar
	article
		h1 Hi, I'm
			span  Luis Ariza
			|  and I'm Frontend Developer
		h2 I design and code beautifully simple things, and I love what I do.
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
  @apply flex flex-col items-center gap-14 w-full px-6 text-center text-secondary sm:px-10 md:py-5;
}
article {
  @apply flex flex-col items-center gap-5 w-full;
}
h1 {
  @apply font-bold text-3xl md:text-4xl lg:text-[2.5rem];
}
h1 span {
  text-shadow: 0 0 8px rgba(255, 101, 47, 0.7);
}
h2 {
  @apply font-body font-light text-lg md:text-xl;
}
.avatar {
  @apply my-6 drop-shadow-img;
}
</style>
