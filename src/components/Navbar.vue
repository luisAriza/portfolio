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
  @apply flex space-between;
}
</style>
