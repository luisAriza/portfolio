<template lang="pug">
Header(id="home")
main
	Profile
	Projects(id="projects")
Footer
TabBar
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Profile from "./components/Profile.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
import TabBar from "./components/TabBar.vue";
</script>

<style scoped lang="postcss"></style>
