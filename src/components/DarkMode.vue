<template lang="pug">
button(@click="toggleDark()")
	SunIcon.sun.icon(v-if="isDark")
	MoonIcon.moon.icon(v-else)
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped lang="postcss">
.icon {
  @apply w-6 h-6 active:translate-y-4 duration-100 active:opacity-0;
}
.sun {
  @apply text-yellow-400;
}
.moon {
  @apply text-slate-600;
}
</style>
