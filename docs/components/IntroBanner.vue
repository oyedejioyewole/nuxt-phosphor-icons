<script lang="ts" setup>
import iconList from "#build/nuxt-phosphor-icons.mjs";

const icons = ref<string[]>([]);
const isCodeCopied = ref(false);

for (let index = 0; index < 4; index++) {
  const icon = `${iconList[Math.floor(Math.random() * iconList.length)]}`;
  icons.value.push(icon);
}

setInterval(() => {
  icons.value = Array.from(
    { length: 4 },
    () => `${iconList[Math.floor(Math.random() * iconList.length)]}`,
  );
}, 5000);

watch(isCodeCopied, (_new) => {
  if (_new) setTimeout(() => (isCodeCopied.value = false), 3000);
});

const copyToClipboard = async (event: Event) => {
  const codeElement = event.target as HTMLElement;
  await navigator.clipboard.writeText(codeElement.innerText);

  isCodeCopied.value = true;
};
</script>

<template>
  <header class="grid h-screen place-content-center gap-y-20">
    <h1 class="text-center font-serif text-7xl text-copy-900">
      <span class="text-secondary-500">Phosphor Icons</span> meets
      <span class="text-primary-500">Nuxt</span>
    </h1>

    <!-- Icon grid -->
    <div
      class="will-change-content grid grid-cols-4 place-items-center gap-x-4"
    >
      <div class="rounded-lg bg-accent-500 bg-opacity-20 p-20">
        <component :is="icons[0]" size="50" />
      </div>
      <div class="rounded-lg bg-accent-500 bg-opacity-20 p-20">
        <component :is="icons[1]" size="50" />
      </div>
      <div class="rounded-lg bg-accent-500 bg-opacity-20 p-20">
        <component :is="icons[2]" size="50" />
      </div>
      <div class="rounded-lg bg-accent-500 bg-opacity-20 p-20">
        <component :is="icons[3]" size="50" />
      </div>
    </div>

    <!-- Try now -->
    <div class="flex justify-between">
      <button
        class="flex w-3/4 items-center justify-center gap-x-4 rounded-lg bg-primary-500 py-3 text-copy-900"
        v-tooltip="isCodeCopied ? 'Copied' : 'Copy'"
        @click="copyToClipboard"
      >
        <LazyPhosphorIconCode size="25" />
        <code>pnpm add -D nuxt-phosphor-icons</code>
      </button>

      <NuxtLink
        to="/release-notes"
        class="flex w-[200px] items-center justify-around rounded-full border border-secondary-500 p-3 text-secondary-500 transition hover:bg-secondary-500 hover:text-copy-900"
        >Release Notes <LazyPhosphorIconArrowRight size="20"
      /></NuxtLink>
    </div>
  </header>
</template>
