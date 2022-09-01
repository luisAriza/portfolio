<template lang="pug">
nav
	figure
		img(src="../assets/image.svg", alt="Logo", width="36")
	figure
		img(src="../assets/sun.svg", alt="Night mode", width="28")
</template>

<script lang="ts">
export default {
  name: "Navbar",
};
</script>

<style scoped lang="postcss">
nav {
  @apply flex items-center justify-between h-14;
}
figure:first-child {
  @apply bg-slate-200;
}
</style>
