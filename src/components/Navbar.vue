<template lang="pug">
nav.navbar
	.logo
		img(src="/logo.png ", alt="Logo", width="48", height="48")
	.dark-mode
		DarkMode
</template>

<script setup lang="ts">
	import DarkMode from "./DarkMode.vue";
</script>

<style scoped lang="postcss">
	.navbar {
		@apply flex items-center justify-between w-full h-36 max-w-5xl py-4;
	}
	.logo {
		@apply w-12;
	}
	.dark-mode {
		@apply hidden sm:flex cursor-pointer;
	}
</style>
