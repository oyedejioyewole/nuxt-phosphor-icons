<script lang="ts" setup>
defineProps<{ description: string; title: string }>();

const shades = getColorShades("primary");
</script>

<template>
  <div class="w-full" :style="{ background: shades[200] }">
    <div class="relative mx-auto h-screen w-[90%] py-20">
      <h1 class="text-5xl font-extrabold">{{ title }} · nuxt-phosphor-icons</h1>
      <p class="text-4xl">{{ description }}</p>

      <div
        class="absolute bottom-20 right-10 h-[200px] w-[200px] rounded-full"
        :style="{
          background:
            'linear-gradient(45deg, ' + shades[500] + ', ' + shades[800] + ')',
        }"
      />
    </div>
  </div>
</template>
