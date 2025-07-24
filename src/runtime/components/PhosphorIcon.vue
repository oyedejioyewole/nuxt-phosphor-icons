<script lang="ts" setup>
import { computed } from '#imports'
import { pascalCase } from 'change-case'
import type { PhosphorIconName } from '#phosphor-icons/types'

const phosphorIcons = await import('@phosphor-icons/vue')

const props = defineProps<{
  name: Record<PhosphorIconName, boolean> | PhosphorIconName
  color?: string
  size?: string | number
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
  mirrored?: boolean }>()

const icon = computed(() => phosphorIcons[pascalCase(`ph-${typeof props.name === 'object'
  ? Object.keys(props.name).filter(key => props.name[key]).join('')
  : props.name}`) as keyof typeof phosphorIcons])
</script>

<template>
  <component
    :is="icon"
    :color="color"
    :mirrored="mirrored"
    :size="size"
    :weight="weight"
  >
    <slot />
  </component>
</template>
