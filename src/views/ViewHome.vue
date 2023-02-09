<template>
	<Header />
	<main>
		<Profile />
		<Skills />
		<Projects />
	</main>
	<TabBar />
</template>

<script lang="ts" setup>
	import Header from "@components/Header.vue";
	import Profile from "@components/Profile.vue";
	import Skills from "@components/Skills.vue";
	import Projects from "@components/Projects.vue";
	import TabBar from "@components/TabBar.vue";
</script>

<style lang="postcss" scoped></style>
