<template>
	<footer>
		<div class="footer-container">
			<figure class="logo">
				<img src="/logo.png" alt="Logo" width="56" height="56" />
			</figure>
			<h3 class="phrase">
				Abre tu mente, aprende, aplica y se mejor cada día.
			</h3>
			<div class="contact">
				<a href="https://github.com/luisAriza" target="_blank"
					><img
						src="/icons/github.svg"
						alt="GitHub icon"
						width="20"
						height="20" /></a
				><a href="https://linkedin.com/in/luisariza-dev/" target="_blank"
					><img
						src="/icons/linkedin.svg"
						alt="LinkedIn icon"
						width="20"
						height="20"
				/></a>
			</div>
			<div class="made">
				<span>Made with</span
				><a href="https://tailwindcss.com/" target="_blank"
					><img
						src="/icons/tailwind.svg"
						alt="Tailwindcss icon"
						width="140"
						height="20"
				/></a>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
	.footer-container {
		@apply grid gap-12 place-items-center px-6 pt-28 pb-14 text-center bg-secondary border-t border-slate-800;
	}
	.logo {
		@apply w-14;
	}
	.phrase {
		@apply w-80 text-2xl text-slate-600;
	}
	.contact {
		@apply flex gap-6 m-3;
	}
	.contact a {
		@apply p-3 border-2 border-slate-600 hover:border-white rounded-full duration-300;
	}
	.made span {
		@apply text-xs text-slate-600;
	}
	.made img {
		@apply mb-4 mx-auto;
	}
</style>
