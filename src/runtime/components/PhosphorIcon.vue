<script lang="ts" setup>
import { computed, preloadComponents, resolveComponent } from '#imports'
import { getIconMap } from '../utils/icons'

const iconMap = getIconMap()

type PhosphorIconName = keyof typeof iconMap
type PhosphorIconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'

interface PhosphorIconProps {
  name: PhosphorIconName | Partial<Record<PhosphorIconName, boolean>>
  color?: string
  size?: string | number
  weight?: PhosphorIconWeight
  mirrored?: boolean
}

const { name, ...options } = defineProps<PhosphorIconProps>()
const normalizedName = computed(() => {
  if (typeof name === 'string') return name

  const iconEntries = Object.entries(name)
  preloadComponents(iconEntries.map(([iconName]) => iconMap[iconName as PhosphorIconName]))

  // Pick only the first truthy entry
  const activeIcon = iconEntries.find(([, isTruthy]) => isTruthy)
  return activeIcon ? activeIcon[0] : null
})

const Icon = computed(() => {
  const iconMapEntry = Object.entries(iconMap).find(([nameFromMap]) => nameFromMap === normalizedName.value)

  if (!iconMapEntry) {
    console.warn(`${normalizedName.value} icon doesn't exist, would use a blank <svg> element instead`)
    return 'svg'
  }

  return resolveComponent(iconMapEntry[1])
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
