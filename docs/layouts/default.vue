<script lang="ts" setup>
const shades = getColorShades("primary");
</script>

<template>
  <NuxtLoadingIndicator :color="shades[500]" />

  <div class="relative overflow-hidden">
    <CursorFx />

    <main class="mx-auto w-[90%]">
      <slot />
    </main>

    <Footer />
  </div>
</template>
