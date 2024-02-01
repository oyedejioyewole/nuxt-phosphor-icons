<script lang="ts" setup>
const shades = getColorShades("primary");
</script>

<template>
  <NuxtLoadingIndicator :color="shades[500]" />
  <div class="mx-auto w-[90%]">
    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>
