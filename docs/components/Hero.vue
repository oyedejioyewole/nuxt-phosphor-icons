<script lang="ts" setup>
const { data: icons } = useAsyncData(async () => getIcons());

useIntervalFn(async () => {
  const newIcons = getIcons();
  await prefetchComponents(newIcons);
  icons.value = newIcons;
}, 5000);
</script>

<template>
  <header class="grid h-screen place-content-center gap-y-20">
    <h1 class="text-center font-serif text-5xl lg:text-7xl">
      Phosphor Icons meets Nuxt
    </h1>

    <!-- Icon grid -->
    <div class="grid grid-cols-2 place-items-center gap-10 lg:grid-cols-4">
      <div
        class="rounded-lg border border-primary-900 bg-primary-200 bg-opacity-50 p-10 text-center backdrop-blur-sm transition-[border_opacity] hover:bg-opacity-100 dark:border-primary-100 dark:border-opacity-50 dark:bg-primary-800 dark:hover:border-opacity-100 lg:place-self-center lg:p-20"
        v-auto-animate
        v-for="(icon, index) of icons"
        :key="index"
      >
        <component size="50" :is="icon" />
      </div>
    </div>

    <div class="flex flex-col justify-between gap-y-4 lg:flex-row">
      <!-- Copy code -->
      <button
        class="hidden w-full items-center justify-center gap-x-4 rounded-lg border border-primary-900 bg-primary-200 bg-opacity-50 py-3 text-sm backdrop-blur-sm transition-[border_opacity] hover:bg-opacity-100 dark:border-primary-100 dark:border-opacity-50 dark:bg-primary-800 dark:hover:border-opacity-100 md:flex lg:w-3/4 lg:gap-x-4"
        @click="useClipboardContent(($event.target as HTMLElement).innerText)"
      >
        <PhosphorIconCopy size="20" />
        <code>pnpm add -D nuxt-phosphor-icons</code>
      </button>

      <!-- Go to release notes -->
      <NuxtLink
        class="group flex items-center justify-center gap-x-1 rounded-full border border-primary-900 bg-primary-200 bg-opacity-50 p-3 backdrop-blur-sm transition-[border_opacity] hover:bg-opacity-100 dark:border-primary-100 dark:border-opacity-50 dark:bg-primary-800 dark:hover:border-opacity-100 lg:w-[200px]"
        to="/release-notes"
      >
        Release Notes
        <PhosphorIconArrowRight
          class="transition group-hover:translate-x-2"
          size="20"
        />
      </NuxtLink>
    </div>
  </header>
</template>
