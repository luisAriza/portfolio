<template lang="pug">
nav
	figure
		img(src="../assets/image.svg", alt="Logo", width="40")
	figure
		img(src="../assets/sun.svg", alt="Night mode", width="32")
</template>

<script lang="ts">
export default {
  name: "Navbar",
};
</script>

<style scoped lang="postcss">
nav {
  @apply flex items-center justify-between py-4;
  -webkit-tap-highlight-color: transparent;
}
figure:first-child {
  @apply bg-slate-200;
}
figure:last-child {
  @apply hidden sm:block cursor-pointer;
}
</style>
