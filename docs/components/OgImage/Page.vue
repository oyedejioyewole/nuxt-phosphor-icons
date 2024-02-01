<script lang="ts" setup>
defineProps<{ title: string; description: string }>();

const shades = getColorShades("primary");
</script>

<template>
  <div class="w-full bg-primary-100">
    <div class="relative mx-auto h-screen w-[90%] py-20">
      <h1 class="text-5xl font-extrabold">{{ title }} · nuxt-phosphor-icons</h1>
      <p class="font-sans text-3xl">{{ description }}</p>

      <div
        class="absolute bottom-20 right-10 flex h-[200px] w-[200px] items-center justify-center rounded-full"
        :style="{
          background:
            'linear-gradient(45deg, ' + shades[500] + ', ' + shades[800] + ')',
        }"
      >
        <PhosphorIconPhosphorLogo size="100" />
      </div>
    </div>
  </div>
</template>
