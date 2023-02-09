<template>
	<section id="home">
		<article class="presentation">
			<h2 class="header">Portafolio</h2>
			<h1 class="name">Luis Ariza</h1>
			<div class="line" />
			<p class="job">desarrollador frontend /</p>
			<p class="job">diseñador web</p>
		</article>
		<figure class="illustration">
			<img
				src="/images/coding.svg"
				alt="illustration_1"
				width="400"
				height="400"
			/>
		</figure>
	</section>
</template>

<script lang="ts" setup>
	import { UserIcon } from "@heroicons/vue/24/solid";
</script>

<style scoped lang="postcss">
	#home {
		@apply grid w-full h-screen py-12 px-4 overflow-x-hidden;
	}
	.presentation {
		@apply font-bold;
		& .header {
			@apply absolute right-4 font-body font-bold text-4xl text-right text-primary-200 dark:text-secondary-800;
		}
		& .name {
			@apply mt-12 -mb-2 text-[4rem] dark:drop-shadow-textDark;
		}
		& .line {
			@apply w-3/4 h-1 mb-6 -ml-14 rounded-lg bg-zinc-900 dark:bg-white dark:drop-shadow-textDark;
		}
		& .job {
			@apply font-body font-medium text-xl;
		}
	}
	.illustration {
		@apply ml-6 w-[25rem];
		& img {
			@apply w-full h-full;
		}
	}
</style>
