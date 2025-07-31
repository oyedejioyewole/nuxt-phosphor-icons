// @ts-expect-error Module resolution issues
import iconList from '#build/nuxt-phosphor-icons.json'
import type { PhosphorIconName } from '#phosphor-icons/types'

export const getIconList = (): PhosphorIconName[] => iconList
