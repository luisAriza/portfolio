<template lang="pug">
.tab-bar
	figure
		a(href="#home")
			HomeIcon.home.icon
		a(href="#portfolio")
			BriefcaseIcon.star.icon
		DarkMode
</template>

<script setup lang="ts">
	import { HomeIcon, BriefcaseIcon } from "@heroicons/vue/24/solid";
	import DarkMode from "./DarkMode.vue";
</script>

<style scoped lang="postcss">
	.tab-bar {
		@apply p-3 sticky bottom-0 bg-white border-t border-gray-200 sm:hidden dark:bg-stone-800 dark:border-stone-700 duration-200;
	}
	figure {
		@apply flex justify-around;
	}
	.icon {
		@apply h-6 w-6 text-slate-800 dark:text-white duration-200;
	}
</style>
