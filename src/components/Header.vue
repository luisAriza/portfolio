<template lang="pug">
header
	Navbar
	section
		article.presentation
			h1 Frontend Developer
			h2 Diseño y desarrollo interfaces web gráficas, y me encanta lo que hago.
			img.avatar(src="../assets/images/avatar.svg", alt="Avatar", width="240" height="254")
		figure.design
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
  @apply flex flex-col items-center w-full px-6 md:px-8;
}
.presentation {
  @apply flex flex-col items-center pt-6 pb-20 text-center;
}
h1 {
  @apply mb-6 font-bold text-[2rem] md:text-[2.5rem];
}
h2 {
  @apply mb-6 font-body text-xl dark:text-slate-400;
}
.avatar {
  @apply w-48 my-6 drop-shadow-lg md:w-60;
}
.design img {
  @apply mx-auto;
}
</style>
