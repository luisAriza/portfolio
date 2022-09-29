<template lang="pug">
section.projects-container(id="portfolio")
	.projects
		h2 Proyectos Recientes
		ProjectItem(v-for="project in DataProjects", :description="project.description", :repo="project.repo", :site="project.site", :image="project.image")
		//- p Mostrar más...
</template>

<script setup lang="ts">
	import ProjectItem from "./ProjectItem.vue";
	import { DataProjects } from "@data/DataProjects";
</script>

<style scoped lang="postcss">
	.projects {
		@apply grid justify-center justify-items-center gap-8 w-full mx-auto pt-20 pb-40 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl xl:px-0;
	}
	h2 {
		@apply w-max my-6 text-3xl text-center font-bold sm:col-span-2 lg:col-span-3;
	}
	p {
		@apply w-max text-center text-lg cursor-pointer underline hover:no-underline sm:col-span-2 lg:col-span-3;
	}
</style>
