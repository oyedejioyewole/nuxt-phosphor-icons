<script setup lang="ts">
import anime from "animejs/lib/anime.es";

const { x, y } = useMouse({ touch: false });

watch([x, y], (_new) => {
  const [x, y] = _new;
  anime({
    autoplay: true,
    duration: 300,
    targets: "#cursor-fx",
    translateX: x - 50,
    translateY: y - 50,
  });
});
</script>

<template>
  <div
    class="absolute -z-10 hidden aspect-square h-36 rounded-full bg-gradient-to-br from-primary-100 via-primary-500 to-primary-900 bg-blend-lighten blur-lg dark:bg-blend-darken lg:block"
    id="cursor-fx"
  />
</template>
