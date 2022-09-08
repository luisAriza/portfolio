<template lang="pug">
.tab-bar
	figure
		a(href="#home")
			HomeIcon.home.icon
		a(href="#projects")
			BriefcaseIcon.star.icon
		DarkMode
</template>

<script lang="ts">
import { HomeIcon, BriefcaseIcon } from "@heroicons/vue/24/solid";
import DarkMode from "./DarkMode.vue";

export default {
  components: { HomeIcon, BriefcaseIcon, DarkMode },
};
</script>

<style scoped lang="postcss">
.tab-bar {
  @apply p-3 sticky bottom-0 sm:hidden bg-white border-t border-gray-200 dark:bg-inherit dark:border-slate-800;
  -webkit-tap-highlight-color: transparent;
}
figure {
  @apply flex justify-around;
}
.icon {
  @apply h-6 w-6 text-secondary dark:text-white duration-200;
}
</style>
