<template lang="pug">
nav.navbar
	figure.logo
		img(src="/logo.png ", alt="Logo", width="40", height="58")
	.dark-mode
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
.navbar {
  @apply flex items-center justify-between w-full h-36 max-w-5xl py-4;
  -webkit-tap-highlight-color: transparent;
}
.logo {
  @apply w-10;
}
.dark-mode {
  @apply hidden sm:flex cursor-pointer;
}
</style>
