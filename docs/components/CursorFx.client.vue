<script lang="ts" setup>
import { gsap } from "gsap";

const { x, y } = useMouse({ touch: false });

watch([x, y], ([x, y]) =>
  gsap.to("#cursor-fx", { display: "block", x: x - 32, y: y - 32 }),
);
</script>

<template>
  <div
    class="absolute -z-10 hidden aspect-square h-16 rounded-full border border-primary-900 dark:border-primary-100"
    id="cursor-fx"
  />
</template>
