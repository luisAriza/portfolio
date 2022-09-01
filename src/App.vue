<template lang="pug">
Header
main
	Projects
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
  @apply px-6;
}
</style>
