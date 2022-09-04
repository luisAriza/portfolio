<template lang="pug">
.tab-bar
	figure
		a(href="#home")
			img(src="../assets/icons/home.svg", alt="Home", width="32", height="32")
		a(href="#projects")
			img(src="../assets/icons/star.svg", alt="Projects", width="32", height="32")
		img.night-mode(src="../assets/icons/moon.svg", alt="Home", width="32", height="32")
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.tab-bar {
  @apply p-4 sticky bottom-0 sm:hidden bg-secondary;
  -webkit-tap-highlight-color: transparent;
}
figure {
  @apply flex justify-around;
}
.night-mode {
}
</style>
