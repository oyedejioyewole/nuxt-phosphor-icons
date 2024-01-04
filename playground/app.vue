<script lang="ts" setup>
//@ts-ignore
import iconList from "#build/nuxt-phosphor-icons.json";
import colors from "#build/tailwind.config/theme/accentColor";
import { pastelTheme, type NotivueTheme } from "notivue";

const theme: NotivueTheme = {
  ...pastelTheme,
  "--nv-success-accent": colors.primary[900],
  "--nv-success-bg": colors.primary[300],
  "--nv-success-fg": colors.primary[900],
};

const icon = ref("");
const { copy } = useClipboard();

const displayedIcons = computedAsync(async () => {
  let iconWithoutPrefix: string;

  if (icon.value.includes("-")) {
    const words = icon.value.split("-");

    iconWithoutPrefix = words
      .map((word) => word.at(0)?.toUpperCase() + word.slice(1))
      .join("");
  } else {
    iconWithoutPrefix =
      icon.value.toLowerCase().at(0)?.toUpperCase() + icon.value.slice(1);
  }

  const icons = iconList
    .filter((icon) => icon.includes(iconWithoutPrefix))
    .slice(0, 4);

  if (icons.length === 0) return;

  await prefetchComponents(icons);

  return icons;
});

async function copyToClipboard(text: string) {
  await copy(`<${text} />`);
  push.success("Copied!");
}
</script>

<template>
  <div
    class="grid grid-rows-2 lg:grid-cols-2 content-center min-h-screen mx-auto w-[90%] gap-x-10"
  >
    <div class="space-y-10 flex flex-col justify-center">
      <h1 class="font-serif text-5xl text-primary-900">Playground</h1>
      <input
        class="border-primary-500 border-2 w-full p-3 rounded-lg"
        placeholder="e.g. address-book"
        type="text"
        v-model="icon"
      />

      <div class="space-y-2">
        <p class="text-lg">
          <strong>Note</strong>: for seperate words with a &mdash;
        </p>

        <p class="text-lg">
          View available icons
          <NuxtLink
            class="text-primary-500"
            target="_blank"
            to="https://phosphoricons.com"
            >here</NuxtLink
          >
        </p>
      </div>
    </div>

    <div
      class="grid grid-cols-2 md:grid-cols-4 place-items-center"
      v-auto-animate
    >
      <button
        class="p-10 bg-primary-500 rounded-lg w-fit flex items-center"
        v-for="(icon, index) of displayedIcons"
        v-if="typeof displayedIcons === 'object' && displayedIcons.length > 1"
        :key="index"
        @click="copyToClipboard(icon)"
      >
        <component size="50" :is="icon" />
      </button>

      <button
        class="p-10 bg-primary-500 rounded-lg mx-auto"
        v-else-if="
          typeof displayedIcons === 'object' && displayedIcons.length === 1
        "
        @click="copyToClipboard(displayedIcons[0])"
      >
        <component size="50" :is="displayedIcons[0]" />
      </button>
    </div>
  </div>

  <Notivue v-slot="item">
    <Notifications :item="item" :theme="theme" />
  </Notivue>
</template>
