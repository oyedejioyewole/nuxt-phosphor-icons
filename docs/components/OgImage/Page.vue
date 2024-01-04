<script lang="ts" setup>
defineProps<{ title: string; description: string }>();
</script>

<template>
  <div class="w-full bg-primary-100">
    <div class="relative mx-auto h-screen w-[90%] py-20">
      <h1 class="text-5xl font-extrabold">{{ title }} · nuxt-phosphor-icons</h1>
      <p class="font-sans text-3xl">{{ description }}</p>

      <div
        class="absolute bottom-20 right-10 flex h-[200px] w-[200px] items-center justify-center rounded-full"
        style="
          background: linear-gradient(
            315deg,
            rgba(105, 112, 64, 1),
            rgba(135, 142, 84, 0.6)
          );
        "
      >
        <PhosphorIconPhosphorLogo size="100" />
      </div>
    </div>
  </div>
</template>
