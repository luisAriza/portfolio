<template>
	<div class="tab-bar">
		<figure class="sections">
			<a href="#home">
				<HomeIcon class="home icon" />
			</a>
			<a href="#portfolio">
				<BriefcaseIcon class="brief icon" />
			</a>
			<a href="#aboutMe">
				<UserIcon class="user icon" />
			</a>
			<ButtonDarkMode />
		</figure>
	</div>
</template>

<script setup lang="ts">
	import { HomeIcon, BriefcaseIcon, UserIcon } from "@heroicons/vue/24/solid";
	import ButtonDarkMode from "@buttons/ButtonDarkMode.vue";
</script>

<style scoped lang="postcss">
	.tab-bar {
		@apply mx-4 p-4 rounded-full shadow-t-light sticky bottom-5 bg-zinc-900 sm:hidden dark:bg-white dark:shadow-t-night duration-300;
		& .sections {
			@apply flex justify-around;
		}
		& .icon {
			@apply h-7 w-7 text-white dark:text-secondary-800 duration-100;
		}
	}
</style>
