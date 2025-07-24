<script lang="ts" setup>
import iconList from '#phosphor-icons'
import type { PhosphorIconName } from '#phosphor-icons/types'

const pickIcons = (max: number) => (iconList.toSorted(() => Math.random() - 0.5).slice(0, max)) as PhosphorIconName[]

const { data: icons, refresh } = await useAsyncData('icons', async () => {
  const parentArray = pickIcons(12)

  // Partition elements into different arrays in group of 4s
  return parentArray.reduce((accumulator, _, index, array) => {
    if (index % 4 === 0) {
      accumulator.push(array.slice(index, index + 4))
    }
    return accumulator
  }, [] as string[][])
})

const { pause, resume } = useIntervalFn(refresh, 2000)
</script>

<template>
  <ClientOnly>
    <swiper-container
      v-for="(child, parentIndex) of icons"
      :key="parentIndex"
      :autoplay="{ pauseOnMouseEnter: true, reverseDirection: parentIndex === 1 }"
      :breakpoints="{ 1024: { direction: 'vertical' } }"
      :class="{ 'min-lg:py-12': parentIndex === 1, 'min-lg:py-4': parentIndex !== 1, 'hidden min-lg:flex': parentIndex === 2 }"
      :data-swiper-index="parentIndex"
      class="w-full h-full"
      loop="true"
      slides-per-view="3"
      space-between="10"
      @mouseenter="pause"
      @mouseleave="resume"
    >
      <swiper-slide
        v-for="(entry,
                childIndex) in child"
        :key="`${parentIndex}-${childIndex}`"
        class="bg-primary-200 dark:bg-primary-800 rounded-lg grid place-items-center"
      >
        <div
          v-auto-animate
        >
          <PhosphorIcon
            :name="entry"
            :size="24"
          />
        </div>
      </swiper-slide>
    </swiper-container>

    <template #fallback>
      <div
        v-for="parentIndex in icons?.length"
        :key="parentIndex"
        class="w-full h-full flex lg:flex-col justify-between gap-2.5"
        :class="{ 'min-lg:py-12': parentIndex === 2, 'min-lg:py-4': parentIndex !== 2, 'hidden min-lg:flex': parentIndex === 3 }"
      >
        <div
          v-for="childIndex in icons?.length"
          :key="`${parentIndex}-${childIndex}`"
          class="bg-primary-200 dark:bg-primary-800 w-full h-full rounded-lg"
        />
      </div>
    </template>
  </ClientOnly>
</template>
