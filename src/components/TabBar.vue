<template lang="pug">
.tab-bar
	figure
		a(href="#home")
			HomeIcon.home.icon
		a(href="#projects")
			BriefcaseIcon.star.icon
		MoonIcon.sun.icon
</template>

<script lang="ts">
import { HomeIcon, BriefcaseIcon, MoonIcon } from "@heroicons/vue/24/solid";
export default {
  components: { HomeIcon, BriefcaseIcon, MoonIcon },
};
</script>

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
.icon {
  @apply h-6 w-6 text-white;
}
</style>
