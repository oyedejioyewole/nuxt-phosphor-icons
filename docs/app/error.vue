<script lang="ts" setup>
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})
useHead({ title: props.error?.statusCode })

const handleError = async () => await clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <section
      class="max-xs:h-[calc(100vh_-_64px)] min-md:h-[calc(100vh_-_96px)] grid place-items-center"
    >
      <div class="text-center space-y-4">
        <h1 class="font-serif font-bold text-2xl xl:text-4xl">
          Uh oh, a {{ error?.statusCode }}!
        </h1>
        <p class="max-sm:text-sm">
          {{ error?.message }}
        </p>
        <UiButton
          icon="arrow-left"
          @click="handleError"
        >
          Go home
        </UiButton>
      </div>
    </section>
  </NuxtLayout>
</template>
