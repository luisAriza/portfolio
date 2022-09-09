<template lang="pug">
header
	Navbar
	section
		h1 Frontend Developer
		h2 Diseño y desarrollo interfaces web gráficas, y me encanta lo que hago.
		img.avatar(src="../assets/images/avatar.svg", alt="Avatar", width="240" height="254")
	figure
		img(src="../assets/images/ui-design.svg", alt="background", width="768", height="248")
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
  @apply flex flex-col items-center w-full px-6 text-center sm:px-10 lg:px-6 lg:pt-4;
}
section {
  @apply flex flex-col items-center gap-5 w-full py-10;
}
h1 {
  @apply font-bold text-[2rem] md:text-[2.5rem];
}
h2 {
  @apply font-body text-xl dark:text-slate-400;
}
.avatar {
  @apply w-48 my-10 drop-shadow-lg md:w-60;
}
</style>
