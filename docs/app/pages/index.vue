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
      right-slot-classes="grid h-3/4 min-lg:h-[400px] gap-4 grid-cols-3"
    >
      <template #aside>
        <IconSlide />
      </template>
    </AppHeader>
  </main>
</template>
