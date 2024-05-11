<script lang="ts" setup>
import { pastelTheme, type NotivueTheme } from "notivue";
import "notivue/animations.css";
import "notivue/notifications.css";

type ColorTheme = "dark" | "light";

defineOgImageComponent("Page");

const colorTheme = useColorMode();
const shades = getColorShades("primary");
const theme = ref<NotivueTheme>();

onMounted(async () => useToggleNotivueTheme(colorTheme.value as ColorTheme));

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
    class="mx-auto space-y-8 py-20 lg:w-3/4"
    id="documentation"
    tag="section"
  />

  <Notivue v-slot="item">
    <Notifications :item="item" :theme="theme" />
  </Notivue>
</template>

<style lang="scss">
#documentation {
  h4 {
    code {
      @apply rounded-lg p-3;
    }
  }
}
</style>
