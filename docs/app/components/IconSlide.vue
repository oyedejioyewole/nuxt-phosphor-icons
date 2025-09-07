<script lang="ts" setup>
const pickIcons = (max: number) =>
  getIconList()
    .toSorted(() => Math.random() - 0.5)
    .slice(0, max)

const { data: icons, refresh } = await useAsyncData('icons', async () => {
  const parentArray = pickIcons(6)

  const iconMap = getIconMap()
  for (const icon of parentArray) {
    await prefetchComponents(iconMap[icon])
  }

  return parentArray
})

const { pause: pauseInterval, resume: resumeInterval } = useIntervalFn(refresh, 2000)

const { copied, copy, text: copiedText } = useClipboard()
</script>

<template>
  <button
    v-for="(icon, iconIndex) of icons"
    :key="iconIndex"
    v-auto-animate
    class="h-full cursor-pointer rounded-lg ring ring-transparent hover:ring-inherit transition hover:opacity-90 hover:ring-offset-2 bg-primary-200 dark:bg-primary-800 grid place-items-center"
    @click="copy(`<BootstrapIcon name='${icon}' />`)"
    @mouseenter="pauseInterval"
    @mouseleave="resumeInterval"
  >
    <UiIcon
      :name="{
        [icon]: !copiedText.includes(`'${icon}'`) || !copied,
        'clipboard-text': copiedText.includes(`'${icon}'`) && copied,
      }"
      :size="20"
    />
  </button>
</template>
