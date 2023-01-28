<template>
	<header id="home">
		<Navbar></Navbar>
		<section>
			<article class="presentation">
				<h1>Luis Ariza</h1>
				<h2>desarrollador frontend / diseñador web</h2>
				<img
					class="avatar"
					src="/images/avatar.svg"
					alt="Avatar"
					width="240"
					height="254"
				/>
			</article>
			<figure class="mx-auto">
				<img
					src="/images/ui-design.svg"
					alt="background"
					width="768"
					height="248"
				/>
			</figure>
		</section>
	</header>
</template>

<script lang="ts" setup>
	import Navbar from "./Navbar.vue";
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
		@apply w-48 my-6 drop-shadow-lg md:w-60;
	}
</style>
