<template>
	<a class="btn-outline">
		<slot />
	</a>
</template>

<script setup></script>

<style lang="postcss" scoped>
	.btn-outline {
		@apply flex justify-center items-center py-3 px-4 gap-2 rounded-full border duration-200 font-main font-bold text-base
		text-secondary-700 hover:text-white border-secondary-700 hover:bg-secondary-700
		dark:text-white hover:dark:text-secondary-900 dark:border-white hover:dark:bg-white;
	}
</style>
