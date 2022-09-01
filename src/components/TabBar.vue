<template lang="pug">
.tab-bar
	figure
		a(href="#home")
			img(src="../assets/home.svg", alt="Home", width="32", height="32")
		a(href="#projects")
			img(src="../assets/star.svg", alt="Projects", width="32", height="32")
		img.night-mode(src="../assets/moon.svg", alt="Home", width="32", height="32")
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.tab-bar {
  @apply p-4 sticky bottom-0 sm:hidden;
  background-color: #242424;
  -webkit-tap-highlight-color: transparent;
}
figure {
  @apply flex justify-around;
}
.night-mode {
}
</style>
