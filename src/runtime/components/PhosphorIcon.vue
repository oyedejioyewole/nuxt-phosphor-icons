<script lang="ts" setup>
import { computed, resolveComponent } from "#imports";
import type { PhosphorIconName } from "#phosphor-icons/types";
// @ts-expect-error Module resolution issues
import iconMap from "#phosphor-icons/map";

interface PhosphorIconProps {
  name: Record<PhosphorIconName, boolean> | PhosphorIconName;
  color?: string;
  size?: string | number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  mirrored?: boolean;
}

const { name, ...options } = defineProps<PhosphorIconProps>();
const normalizedName = computed(() => {
  switch (typeof name) {
    case "object": {
      return Object.keys(name)
        .filter((key) => name[key])
        .join("");
    }

    default:
      return name;
  }
});

const Icon = computed(() => resolveComponent(iconMap[normalizedName.value]));
</script>

<template>
  <component :is="Icon" v-bind="options">
    <slot />
  </component>
</template>
