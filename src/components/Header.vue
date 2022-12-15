<template>
	<header id="home">
		<Navbar></Navbar>
		<section>
			<article class="presentation">
				<h1>Frontend Developer</h1>
				<h2>
					Diseño y desarrollo aplicaciones e interfaces web, y me encanta lo que
					hago.
				</h2>
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
	.presentation {
		@apply flex flex-col items-center pt-6 pb-20 text-center;
	}
	h1 {
		@apply mb-6 font-bold text-[2rem] md:text-[2.5rem];
	}
	h2 {
		@apply mb-6 font-body text-xl dark:text-slate-400;
	}
	.avatar {
		@apply w-48 my-6 drop-shadow-lg md:w-60;
	}
</style>
