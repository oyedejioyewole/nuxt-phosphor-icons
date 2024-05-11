<script setup lang="ts">
const error = useError();

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "404",
  titleTemplate: "%s · nuxt-bootstrap-icons",
});
</script>

<template>
  <NuxtLayout>
    <section
      class="flex h-screen flex-col items-center justify-center gap-y-10"
    >
      <h1 class="font-serif text-9xl">
        {{ error?.statusCode }}
      </h1>
      <p class="text-lg">{{ error?.message }}</p>
    </section>
  </NuxtLayout>
</template>
