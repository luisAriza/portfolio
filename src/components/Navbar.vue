<template lang="pug">
nav
	figure
		img(src="/logo.png ", alt="Logo", width="48", height="48")
	div
		DarkMode
</template>

<script lang="ts">
import DarkMode from "./DarkMode.vue";

export default {
  name: "Navbar",
  components: { DarkMode },
};
</script>

<style scoped lang="postcss">
nav {
  @apply flex items-center justify-between w-full max-w-5xl py-6;
  -webkit-tap-highlight-color: transparent;
}
figure {
  @apply w-12;
}
div {
  @apply hidden sm:block cursor-pointer;
}
</style>
