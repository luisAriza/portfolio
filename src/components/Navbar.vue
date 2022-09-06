<template lang="pug">
nav
	figure
		img(src="/logo_3.png ", alt="Logo", width="48")
	figure
		img(src="../assets/icons/moon.svg", alt="Night mode", width="28")
</template>

<script lang="ts">
export default {
  name: "Navbar",
};
</script>

<style scoped lang="postcss">
nav {
  @apply flex items-center justify-between w-full max-w-5xl py-4;
  -webkit-tap-highlight-color: transparent;
}
figure:first-child {
  @apply w-10 lg:w-12;
}
figure:last-child {
  @apply hidden sm:block cursor-pointer;
}
</style>
