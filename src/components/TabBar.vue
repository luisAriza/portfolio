<template lang="pug">
.tab-bar
	figure
		a(href="#home")
			img(src="../assets/icons/home.svg", alt="Home", width="28", height="28")
		a(href="#projects")
			img(src="../assets/icons/tabs.svg", alt="Projects", width="28", height="28")
		img.night-mode(src="../assets/icons/sun.svg", alt="Home", width="28", height="28")
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.tab-bar {
  @apply p-3 sticky bottom-0 sm:hidden bg-secondary border-t border-slate-800;
  -webkit-tap-highlight-color: transparent;
}
figure {
  @apply flex justify-around;
}
.night-mode {
}
</style>
