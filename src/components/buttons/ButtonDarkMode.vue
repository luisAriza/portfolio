<template>
	<button @click="toggleDark()">
		<SunIcon class="sun icon" v-if="isDark" />
		<MoonIcon class="moon icon" v-else />
	</button>
</template>

<script setup lang="ts">
	import { useDark, useToggle } from "@vueuse/core";
	import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";

	const isDark = useDark();
	const toggleDark = useToggle(isDark);
</script>

<style scoped lang="postcss">
	.icon {
		@apply w-7 h-7 duration-100 active:opacity-0;
	}
	.sun {
		@apply text-secondary-800 active:translate-y-8;
	}
	.moon {
		@apply text-white active:-translate-y-8;
	}
</style>
