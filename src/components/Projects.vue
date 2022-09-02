<template lang="pug">
section
	h2 Projects List
	ProjectItem
	ProjectItem
	ProjectItem
	ProjectItem
	ProjectItem
	ProjectItem
	p Mostrar más...
</template>

<script setup lang="ts">
import ProjectItem from "./ProjectItem.vue";
</script>

<style scoped lang="postcss">
section {
  @apply grid justify-center gap-10 max-w-sm mx-auto sm:grid-cols-2 sm:max-w-3xl lg:grid-cols-3 lg:max-w-5xl;
}
h2 {
  @apply my-4 text-3xl text-center sm:col-span-2 lg:col-span-3;
}
p {
  @apply text-center sm:col-span-2 lg:col-span-3;
}
</style>
