<script lang="ts" setup>
//@ts-ignore
import colors from "#build/tailwind.config/theme/accentColor";
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
  "--nv-success-accent": colors.primary[900],
  "--nv-success-bg": colors.primary[300],
  "--nv-success-fg": colors.primary[900],
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
    @apply text-primary-500 hover:underline;
  }

  code {
    @apply rounded-lg bg-primary-500 px-3 py-1 text-sm;
  }

  h1,
  h2,
  h3,
  h4 {
    a {
      @apply font-serif text-primary-900;
    }
  }
  h1 {
    @apply font-serif text-4xl text-primary-900 lg:text-6xl;
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
      @apply space-y-4 text-primary-900;
    }
  }

  p {
    @apply text-pretty text-lg leading-loose tracking-wide text-primary-900;
  }

  pre {
    @apply overflow-x-scroll rounded-lg bg-primary-900 p-5 text-sm lg:p-7;

    code {
      @apply rounded-none bg-transparent;
    }
  }

  ul {
    @apply list-inside list-disc space-y-8 text-lg;

    li {
      @apply space-y-4 text-primary-900;
    }
  }
}
</style>
