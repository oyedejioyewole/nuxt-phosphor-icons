// @ts-expect-error Module resolution issues
import iconMap from '#phosphor-icons/map'
import type { PhosphorIconName } from '#phosphor-icons/types'

export const getIconList = () => Object.keys(iconMap) as PhosphorIconName[]
