<script lang="ts" setup>
defineOgImageComponent(
  "Page",
  {
    title: "Release Notes",
    description: "Don't miss out on improvements and new features",
  },
  { fonts: ["Lora:700", "Open Sans:400"] },
);
</script>

<template>
  <main class="mx-auto min-h-screen w-[90%] space-y-20 py-20 lg:w-1/2">
    <NuxtLink
      to="/"
      class="flex w-fit items-center gap-x-1 rounded-full border border-accent-500 p-3 text-accent-500 transition hover:bg-accent-500 hover:text-copy-900"
      ><LazyPhosphorIconArrowLeft size="20" /> Go back</NuxtLink
    >
    <ContentDoc class="space-y-8" id="release-notes" path="/release-notes" />
  </main>
</template>

<style lang="scss">
#release-notes {
  a {
    @apply text-accent-500 hover:underline;
  }

  code {
    @apply rounded-lg bg-accent-500 px-3 py-1 text-sm;
  }

  h1,
  h2,
  h3,
  h4 {
    a {
      @apply font-serif text-copy-900;
    }
  }
  h1 {
    @apply font-serif text-4xl text-copy-900 lg:text-6xl;
  }

  h2 {
    @apply text-3xl lg:text-4xl;
  }

  h3 {
    @apply text-2xl lg:text-3xl;
  }

  h4 {
    @apply text-xl font-bold lg:text-2xl;
  }

  p {
    @apply text-pretty  text-lg leading-loose tracking-wide text-accent-900;
  }

  ul {
    @apply list-inside list-disc space-y-4 text-lg;
  }
}
</style>
