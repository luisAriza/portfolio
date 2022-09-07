<template lang="pug">
section
	h2 My Recent Projects
	ProjectItem(v-for="item in dataProjects", :description="item.description", :repo="item.repo", :site="item.site", :image="item.image")
	p Show more...
</template>

<script setup lang="ts">
import ProjectItem from "./ProjectItem.vue";
import { dataProjects } from "../utils/DataProjects";
</script>

<style scoped lang="postcss">
section {
  @apply grid justify-center justify-items-center gap-10 max-w-sm mx-auto sm:grid-cols-2 sm:max-w-3xl lg:grid-cols-3 lg:max-w-5xl;
}
h2 {
  @apply w-max my-4 text-3xl text-center font-bold sm:col-span-2 lg:col-span-3;
}
p {
  @apply w-max text-center text-lg cursor-pointer underline hover:no-underline sm:col-span-2 lg:col-span-3;
}
</style>
