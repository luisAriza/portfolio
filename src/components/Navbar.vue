<template lang="pug">
nav
	figure
		img(src="/logo.png ", alt="Logo", width="48", height="48")
	figure
		MoonIcon.moon-icon
</template>

<script lang="ts">
import { MoonIcon } from "@heroicons/vue/24/solid";

export default {
  name: "Navbar",
  components: { MoonIcon },
};
</script>

<style scoped lang="postcss">
nav {
  @apply flex items-center justify-between w-full max-w-5xl py-4;
  -webkit-tap-highlight-color: transparent;
}
figure:first-child {
  @apply w-12;
}
figure:last-child {
  @apply hidden sm:block cursor-pointer;
}
.moon-icon {
  @apply w-6 h-6 text-secondary;
}
</style>
