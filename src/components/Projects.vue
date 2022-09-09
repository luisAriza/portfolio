<template lang="pug">
section.projects-container
	.projects
		h2 Proyectos Recientes
		ProjectItem(v-for="item in dataProjects", :description="item.description", :repo="item.repo", :site="item.site", :image="item.image")
		//- p Mostrar más...
</template>

<script setup lang="ts">
import ProjectItem from "./ProjectItem.vue";
import { dataProjects } from "../utils/DataProjects";
</script>

<style scoped lang="postcss">
.projects {
  @apply grid justify-center justify-items-center gap-8 w-full mx-auto pt-20 pb-40 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl xl:px-0;
}
h2 {
  @apply w-max my-4 text-3xl text-center font-bold sm:col-span-2 lg:col-span-3;
}
p {
  @apply w-max text-center text-lg cursor-pointer underline hover:no-underline sm:col-span-2 lg:col-span-3;
}
</style>
