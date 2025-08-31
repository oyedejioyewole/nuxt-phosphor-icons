<script lang="ts" setup>
const { pastelDocs } = useAppConfig()

useSeoMeta({
  title: 'Home',
  description: pastelDocs.headline,
})
</script>

<template>
  <main>
    <AppHeader
      right-slot-classes="grid max-lg:grid-rows-2 min-lg:grid-cols-3 gap-2.5 min-lg:h-[75vh] min-lg:aspect-[9/16] gap-x-4"
    >
      <template #aside>
        <IconSlide />
      </template>
    </AppHeader>
  </main>
</template>
