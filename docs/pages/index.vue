<script lang="ts" setup>
import { pastelTheme, type NotivueTheme } from "notivue";

type ColorTheme = "dark" | "light";

defineOgImageComponent(
  "Page",
  {
    title: "Documentation",
    description: "A simple wrapper for @phosphor-icons/vue in Nuxt",
  },
  { fonts: ["Lora:700", "Open Sans:400"] },
);

const colorTheme = useColorMode();
const shades = getColorShades("primary");
const theme = ref<NotivueTheme>();

onMounted(() => useToggleNotivueTheme(colorTheme.value as ColorTheme));

watch(colorTheme, (_new) => useToggleNotivueTheme(_new.value as ColorTheme));

/**
 * This function toggles the theme of notifications
 * between 'dark' and 'light'
 */

function useToggleNotivueTheme(_theme: ColorTheme) {
  const defaults: { dark: NotivueTheme; light: NotivueTheme } = {
    dark: {
      ...pastelTheme,
      "--nv-success-accent": shades[900],
      "--nv-success-bg": shades[600],
      "--nv-success-fg": shades[900],
    },
    light: {
      ...pastelTheme,
      "--nv-success-accent": shades[900],
      "--nv-success-bg": shades[300],
      "--nv-success-fg": shades[900],
    },
  };

  if (_theme === "dark") theme.value = defaults.dark;
  else theme.value = defaults.light;
}
</script>

<template>
  <!-- Full-screen hero -->
  <Hero />

  <!-- Documentation -->
  <ContentDoc
    class="mx-auto space-y-8 py-20 lg:w-1/2"
    id="documentation"
    path="/"
    tag="section"
  />

  <Notivue v-slot="item">
    <Notifications :item="item" :theme="theme" />
  </Notivue>
</template>

<style lang="scss">
#documentation {
  a {
    @apply font-bold text-primary-500 hover:underline;
  }

  code {
    @apply rounded-lg bg-primary-500 px-3 py-1 text-sm text-primary-950;
  }

  h1,
  h2,
  h3,
  h4 {
    a {
      @apply font-serif text-primary-950 dark:text-primary-100;
    }
  }
  h1 {
    @apply font-serif text-4xl lg:text-6xl;
  }

  h2 {
    @apply text-3xl lg:text-4xl;
  }

  h3 {
    @apply text-2xl lg:text-3xl;
  }

  h4 {
    @apply text-xl font-bold lg:text-2xl;

    code {
      @apply rounded-lg bg-primary-500 p-3;
    }
  }

  ol {
    @apply list-inside list-decimal space-y-8 text-lg;

    li {
      @apply space-y-4;
    }
  }

  p {
    @apply text-pretty text-lg leading-loose tracking-wide;
  }

  pre {
    @apply overflow-x-scroll rounded-lg bg-primary-900 p-5 text-sm lg:p-7;

    code {
      @apply rounded-none bg-transparent dark:bg-transparent;
    }
  }

  ul {
    @apply list-inside list-disc space-y-8 text-lg;

    li {
      @apply space-y-4;
    }
  }
}
</style>
