<template lang="pug">
section.profile-container
	article.profile
		h2 Hola, soy Luis Ariza. Gusto en conocerte.
		p Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et consectetur itaque nulla, tempore minus atque, veritatis perspiciatis sunt officia sed magnam impedit? Labore facilis dolorem repellendus minima veritatis voluptatibus.
section.skills-container
	.skills
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped>
.profile {
  @apply flex flex-col items-center justify-center gap-6 w-full m-0 px-6 pt-20 pb-40 lg:pt-36 text-center text-white bg-variant;
}
h2 {
  @apply text-3xl font-bold;
}
p {
  @apply max-w-2xl font-body text-xl;
}
.skills-container {
  @apply flex justify-center w-full -mt-24 px-6;
}
.skills {
  @apply w-full max-w-5xl h-60 rounded-xl shadow-md bg-white dark:bg-secondary duration-200;
}
</style>
