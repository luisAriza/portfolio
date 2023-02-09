<template>
	<a class="btn-icon">
		<slot />
	</a>
</template>

<style lang="postcss" scoped>
	.btn-icon {
		@apply py-3 px-3 rounded-full border duration-200 text-base
		text-secondary-700 hover:text-white border-secondary-700 hover:bg-secondary-700
		dark:text-white hover:dark:text-secondary-900 dark:border-white hover:dark:bg-white;
	}
</style>
