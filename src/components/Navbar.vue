<template lang="pug">
nav
	figure
		img(src="../assets/icons/image.svg", alt="Logo", width="40")
	figure
		img(src="../assets/icons/moon.svg", alt="Night mode", width="32")
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
/* figure:first-child {
  @apply ;
} */
figure:last-child {
  @apply hidden sm:block cursor-pointer;
}
</style>
