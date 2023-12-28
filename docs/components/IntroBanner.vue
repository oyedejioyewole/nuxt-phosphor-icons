<script lang="ts" setup>
import iconList from "#build/nuxt-phosphor-icons.mjs";

const icons = ref<string[]>([]);

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
</script>

<template>
  <header class="grid h-screen place-content-center gap-y-20">
    <h1 class="text-copy-900 text-center font-serif text-7xl">
      <span class="text-secondary-500">Phosphor Icons</span> meets
      <span class="text-primary-500">Nuxt</span>
    </h1>

    <!-- Icon grid -->
    <div
      class="will-change-content grid grid-cols-4 place-items-center gap-x-4"
    >
      <div class="bg-accent-500 rounded-lg bg-opacity-20 p-20">
        <component :is="icons[0]" size="50" />
      </div>
      <div class="bg-accent-500 rounded-lg bg-opacity-20 p-20">
        <component :is="icons[1]" size="50" />
      </div>
      <div class="bg-accent-500 rounded-lg bg-opacity-20 p-20">
        <component :is="icons[2]" size="50" />
      </div>
      <div class="bg-accent-500 rounded-lg bg-opacity-20 p-20">
        <component :is="icons[3]" size="50" />
      </div>
    </div>

    <!-- Try now -->
    <button
      class="bg-primary-500 text-copy-900 mx-auto w-[400px] rounded-lg py-3"
      v-tooltip="'Copy'"
    >
      <code>pnpm add -D nuxt-phosphor-icons</code>
    </button>
  </header>
</template>
