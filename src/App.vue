<template lang="pug">
Header(id="home")
main
	Projects(id="projects")
Footer
TabBar
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
import TabBar from "./components/TabBar.vue";
</script>

<style scoped lang="postcss">
main {
  @apply px-6 pt-40 pb-12 sm:px-10 md:pt-10;
}
</style>
