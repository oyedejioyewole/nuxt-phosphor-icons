<script lang="ts" setup>
import iconList from "#build/nuxt-phosphor-icons.json";

const { data: icons } = useAsyncData(async () => generateIcons());

useIntervalFn(async () => {
  const newIcons = generateIcons();
  await prefetchComponents(newIcons);
  icons.value = newIcons;
}, 5000);

const { copy } = useClipboard({ legacy: true });

async function copyToClipboard(text: string) {
  await copy(text);
  push.success("Copied!");
}

function generateIcons() {
  const generatedIcons: string[] = [];

  for (let index = 0; index < 4; index++) {
    const icon = `${iconList[Math.floor(Math.random() * iconList.length)]}`;

    // Prevent duplicate icons
    if (generatedIcons.includes(icon)) {
      index--;
      continue;
    }

    generatedIcons.push(icon);
  }

  return generatedIcons;
}
</script>

<template>
  <header class="grid h-screen place-content-center gap-y-20">
    <h1 class="text-center font-serif text-5xl lg:text-7xl">
      <span class="text-primary-500">Phosphor Icons</span>
      meets
      <span class="text-primary-500">Nuxt</span>
    </h1>

    <!-- Icon grid -->
    <div
      class="will-change-content grid grid-cols-2 place-items-center gap-y-10 md:grid-cols-4"
    >
      <div
        class="rounded-lg bg-primary-300 p-10 dark:bg-primary-700 lg:p-20"
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
        class="flex w-full items-center justify-center gap-x-2 rounded-lg bg-primary-400 py-3 text-sm dark:bg-primary-600 dark:text-primary-950 lg:w-3/4 lg:gap-x-4"
        @click="copyToClipboard(($event.target as HTMLElement).innerText)"
      >
        <PhosphorIconCopy size="20" />
        <code>pnpm add -D nuxt-phosphor-icons</code>
      </button>

      <!-- Go to release notes -->
      <NuxtLink
        class="group flex items-center justify-center gap-x-2 rounded-full border border-primary-500 p-3 text-primary-500 transition hover:bg-primary-400 hover:text-primary-950 dark:border-primary-600 dark:hover:bg-primary-600 lg:w-[200px]"
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
