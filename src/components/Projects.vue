<template lang="pug">
section
	h2 Projects List
	ProjectItem
	ProjectItem
	ProjectItem
</template>

<script setup lang="ts">
import ProjectItem from "./ProjectItem.vue";
</script>

<style scoped lang="postcss">
section {
  @apply grid gap-6;
}
h2 {
  @apply my-4 text-3xl text-center;
}
</style>
