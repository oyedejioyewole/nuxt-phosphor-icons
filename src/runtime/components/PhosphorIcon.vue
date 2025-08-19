<script lang="ts" setup>
import { computed, resolveComponent } from "#imports";
import type { PhosphorIconName } from "#phosphor-icons/types";
import { getIconMap } from "../utils/icons";

interface PhosphorIconProps {
  name: Record<PhosphorIconName, boolean> | PhosphorIconName;
  color?: string;
  size?: string | number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  mirrored?: boolean;
}

const { name, ...options } = defineProps<PhosphorIconProps>();
const normalizedName = computed((): PhosphorIconName => {
  switch (typeof name) {
    case "object": {
      return Object.keys(name)
        .filter((key) => name[key])
        .join("") as PhosphorIconName;
    }

    default:
      return name;
  }
});

const Icon = computed(() => {
  const iconMap = getIconMap();
  return resolveComponent(iconMap[normalizedName.value]);
});
</script>

<template>
  <component :is="Icon" v-bind="options">
    <slot />
  </component>
</template>
