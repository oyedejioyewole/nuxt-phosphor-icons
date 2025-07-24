<script lang="ts" setup>
const route = useRoute()
const { data } = await useAsyncData('content', () => queryCollection('content').path(route.path).first(), { watch: [route] })

if (!data.value) throw createError({
  statusCode: 404,
  statusMessage: `Couldn't find page for ${route.path}`,
})

useHead({ title: data.value.title })
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
