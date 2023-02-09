<template>
	<a class="btn-filled">
		<slot />
	</a>
</template>

<script setup></script>

<style lang="postcss" scoped>
	.btn-filled {
		@apply flex justify-center items-center py-3 px-4 gap-2 rounded-full duration-200 font-main font-bold text-base
		text-white bg-gradient-to-bl from-secondary to-primary hover:to-secondary
		dark:from-primary dark:to-secondary-700 hover:dark:to-primary;
	}
</style>
