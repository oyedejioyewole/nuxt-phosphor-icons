<script lang="ts" setup>
const route = useRoute()
const { data } = await useAsyncData('content', () => queryCollection('content').path(route.path).first(), { watch: [route] })

if (!data.value) throw createError({
  statusCode: 404,
  statusMessage: `Couldn't find page for ${route.path}`,
})

useSeoMeta({
  title: data.value.title,
  description: data.value.description,
})

defineOgImageScreenshot()
</script>

<template>
  <NuxtLayout>
    <AppHeader />

    <section
      v-if="data"
      class="min-h-screen w-9/10 mx-auto py-4"
    >
      <ContentRenderer
        :value="data"
        class="space-y-4"
      />
    </section>
  </NuxtLayout>
</template>
