<script lang="ts" setup>
import { pastelTheme, type NotivueTheme } from "notivue";

defineOgImageComponent(
  "Page",
  {
    title: "Documentation",
    description: "A simple wrapper for @phosphor-icons/vue in Nuxt",
  },
  { fonts: ["Lora:700", "Open Sans:400"] },
);

const theme: NotivueTheme = {
  ...pastelTheme,
  "--nv-success-accent": "#2d271d",
  "--nv-success-bg": "#a5986a",
  "--nv-success-fg": "#2d271d",
};
</script>

<template>
  <main>
    <IntroBanner />
    <ContentDoc
      class="mx-auto min-h-screen w-[90%] space-y-8 py-20 lg:w-1/2"
      id="documentation"
      path="/"
    />
  </main>

  <Notivue v-slot="item">
    <Notifications :item="item" :theme="theme" />
  </Notivue>
</template>

<style lang="scss">
#documentation {
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

    code {
      @apply rounded-lg bg-accent-500 p-3;
    }
  }

  ol {
    @apply list-inside list-decimal space-y-8 text-lg;

    li {
      @apply space-y-4 text-copy-900;
    }
  }

  p {
    @apply text-pretty text-lg leading-loose tracking-wide text-copy-900;
  }

  pre {
    @apply overflow-x-scroll rounded-lg bg-accent-900 p-5 text-sm lg:p-7;

    code {
      @apply rounded-none bg-transparent;
    }
  }

  ul {
    @apply list-inside list-disc space-y-8 text-lg;

    li {
      @apply space-y-4 text-copy-900;
    }
  }
}
</style>
