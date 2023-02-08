<template>
	<div class="project-item">
		<article class="content">
			<div class="description">
				<p v-html="description"></p>
				<a class="btn-repo btn" :href="repo" target="_blank"
					>Ver código<CodeBracketSquareIcon
						class="code-icon icon"
					></CodeBracketSquareIcon></a
				><a class="btn-site btn" :href="site" target="_blank"
					>Ver website<ArrowRightCircleIcon
						class="arrow-icon icon"
					></ArrowRightCircleIcon
				></a>
			</div>
			<img
				class="bg-img"
				:src="image"
				alt="Project image"
				width="360"
				height="360"
				loading="lazy"
			/>
		</article>
	</div>
</template>

<script lang="ts">
	import {
		ArrowRightCircleIcon,
		CodeBracketSquareIcon,
	} from "@heroicons/vue/20/solid";

	export default {
		name: "ProjectItem",
		components: { ArrowRightCircleIcon, CodeBracketSquareIcon },
		props: {
			description: {
				type: String,
				required: true,
			},
			repo: {
				type: String,
				required: true,
			},
			site: {
				type: String,
				required: true,
			},
			image: {
				type: String,
				required: true,
			},
		},
	};
</script>

<style scoped lang="postcss">
	.project-item {
		@apply w-full max-w-[500px] rounded-xl overflow-hidden drop-shadow-text relative;
	}
	.content {
		@apply text-center text-white bg-stone-800 dark:bg-stone-700;
	}
	.description {
		@apply flex flex-wrap place-content-center gap-4 w-full h-full p-4 opacity-0 duration-300 absolute;
	}
	.content:hover .description {
		@apply opacity-100 duration-300 z-10;
	}
	p {
		@apply max-w-md mb-4 text-xl font-body font-light;
	}
	.btn {
		@apply flex pt-1.5 pb-1 px-3 rounded-full border duration-300;
	}
	.btn-repo {
		@apply border-white hover:bg-white hover:text-stone-800;
	}
	.btn-site {
		@apply border-primary bg-primary hover:border-primary-500 hover:bg-primary-500;
	}
	.icon {
		@apply inline w-5 h-5 ml-2 text-white mt-[1px] duration-300;
	}
	.btn-repo:hover .code-icon {
		@apply text-stone-800 duration-300;
	}
	.bg-img {
		@apply w-full h-full duration-500;
	}
	.content:hover .bg-img {
		@apply scale-110 opacity-0 duration-500;
	}
</style>
