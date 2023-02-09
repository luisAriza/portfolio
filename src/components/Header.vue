<template>
	<header id="home">
		<section>
			<article class="presentation">
				<h1>Luis Ariza</h1>
				<h2>desarrollador frontend / diseñador web</h2>
			</article>
			<figure class="mx-auto">
				<img
					src="/images/ui-code.svg"
					alt="illustration_1"
					width="768"
					height="248"
				/>
			</figure>
		</section>
	</header>
</template>

<script lang="ts" setup>
	import { UserIcon } from "@heroicons/vue/24/solid";
	import ButtonOutline from "./buttons/ButtonOutline.vue";
	import IconGithub from "./icons/IconGithub.vue";
</script>

<style scoped lang="postcss">
	header {
		@apply flex flex-col items-center w-full px-6;
	}
	.navbar {
		@apply hidden md:flex;
	}
	.presentation {
		@apply flex flex-col items-center pt-6 pb-20 text-center;
	}
	h1 {
		@apply mb-6 font-bold text-6xl md:text-7xl;
	}
	h2 {
		@apply mb-6 font-body text-xl dark:text-white;
	}
	.avatar {
		@apply w-40 h-full;
	}
</style>
