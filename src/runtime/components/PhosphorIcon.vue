<script lang="ts" setup>
import { computed, preloadComponents, resolveComponent } from '#imports'
import type { PhosphorIconName } from '#phosphor-icons/types'
import { getIconMap } from '../utils/icons'

const iconMap = getIconMap()

interface PhosphorIconProps {
  name: Record<PhosphorIconName, boolean> | PhosphorIconName
  color?: string
  size?: string | number
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
  mirrored?: boolean
}

const { name, ...options } = defineProps<PhosphorIconProps>()
const normalizedName = computed((): PhosphorIconName => {
  switch (typeof name) {
    case 'object': {
      const iconComponents = Object.keys(name).map(icon => iconMap[icon as PhosphorIconName])
      preloadComponents(iconComponents)

      return Object.keys(name)
        .find(key => name[key]) as PhosphorIconName
    }

    default:
      return name
  }
})

const Icon = computed(() => {
  if (!Object.keys(iconMap).includes(normalizedName.value)) {
    console.warn(`${normalizedName.value} icon doesn't exist, would use a blank <svg> element instead`)
    return 'svg'
  }

  return resolveComponent(iconMap[normalizedName.value])
})
</script>

<template>
  <component
    :is="Icon"
    v-bind="options"
  >
    <slot />
  </component>
</template>
