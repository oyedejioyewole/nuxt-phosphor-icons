<script lang="ts" setup>
import iconList from "#build/nuxt-phosphor-icons.mjs";

const icons = ref<string[]>([]);
const { copied, copy } = useClipboard({ legacy: true });

icons.value = generateIconNames();

useIntervalFn(async () => {
  const newIcons = generateIconNames();

  await prefetchComponents(newIcons);

  icons.value = newIcons;
}, 5000);

function generateIconNames() {
  const generatedIcons = [] as string[];

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
  <header
    class="mx-auto grid h-screen w-[90%] place-content-center gap-y-20 lg:w-3/4"
  >
    <h1 class="text-center font-serif text-5xl text-copy-900 lg:text-7xl">
      <span class="text-secondary-500">Phosphor Icons</span> meets
      <span class="text-primary-500">Nuxt</span>
    </h1>

    <!-- Icon grid -->
    <div
      class="will-change-content grid grid-cols-2 place-items-center gap-4 lg:grid-cols-4 lg:gap-x-4"
    >
      <div
        class="rounded-lg bg-accent-500 bg-opacity-20 p-10 lg:p-20"
        v-auto-animate
      >
        <component :is="icons[0]" size="50" />
      </div>
      <div
        class="rounded-lg bg-accent-500 bg-opacity-20 p-10 lg:p-20"
        v-auto-animate
      >
        <component :is="icons[1]" size="50" />
      </div>
      <div
        class="rounded-lg bg-accent-500 bg-opacity-20 p-10 lg:p-20"
        v-auto-animate
      >
        <component :is="icons[2]" size="50" />
      </div>
      <div
        class="rounded-lg bg-accent-500 bg-opacity-20 p-10 lg:p-20"
        v-auto-animate
      >
        <component :is="icons[3]" size="50" />
      </div>
    </div>

    <!-- Try now -->
    <div class="flex flex-col justify-between gap-y-4 lg:flex-row">
      <button
        class="flex w-full items-center justify-center gap-x-2 rounded-lg bg-primary-500 py-3 text-sm text-copy-900 lg:w-3/4 lg:gap-x-4"
        @click="copy(($event.target as HTMLElement).innerText)"
      >
        <LazyPhosphorIconCode size="25" v-if="!copied" />
        <LazyPhosphorIconCheck size="25" v-else />
        <code>pnpm add -D nuxt-phosphor-icons</code>
      </button>

      <NuxtLink
        class="flex w-full items-center justify-center gap-x-2 rounded-full border border-secondary-500 p-3 text-secondary-500 transition hover:bg-secondary-500 hover:text-copy-900 lg:w-[200px] lg:justify-around lg:gap-x-0"
        to="/release-notes"
        >Release Notes <LazyPhosphorIconArrowRight size="20"
      /></NuxtLink>
    </div>
  </header>
</template>
