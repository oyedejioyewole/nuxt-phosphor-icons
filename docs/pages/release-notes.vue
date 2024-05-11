<script lang="ts" setup>
defineOgImageComponent("Page");
</script>

<template>
  <div class="mx-auto w-[90%] space-y-20 py-20 lg:w-1/2">
    <!-- Go back -->
    <NuxtLink
      class="backdop-blur-xl group flex w-fit items-center justify-center gap-x-2 rounded-full border border-primary-900 bg-primary-300/50 p-3 dark:border-primary-100 dark:bg-primary-700/50"
      to="/"
    >
      <PhosphorIconArrowLeft
        class="transition-transform group-hover:-translate-x-1"
        size="20"
      />
      Go back
    </NuxtLink>

    <!-- Release Notes -->
    <ContentDoc class="space-y-8" tag="section" />
  </div>
</template>
