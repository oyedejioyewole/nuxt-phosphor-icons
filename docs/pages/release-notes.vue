<template>
  <main class="space-y-20 py-20">
    <div class="mx-auto w-3/4">
      <NuxtLink
        to="/"
        class="flex w-fit items-center gap-x-1 rounded-full border border-secondary-500 p-3 text-secondary-500 transition hover:bg-secondary-500 hover:text-copy-900"
        ><LazyPhosphorIconArrowLeft size="20" /> Go back</NuxtLink
      >
    </div>
    <LazyContentDoc
      class="mx-auto min-h-screen w-1/2 space-y-8"
      id="changelog"
    />
  </main>
</template>

<style lang="scss">
#changelog {
  a {
    @apply text-accent-500 hover:underline;
  }

  h1,
  h2,
  h3,
  h4 {
    a {
      @apply font-serif text-copy-900;
    }
  }
  h1 {
    @apply font-serif text-6xl text-copy-900;
  }

  h2 {
    @apply text-4xl;
  }

  h3 {
    @apply text-3xl;
  }

  p {
    @apply text-balance  text-lg leading-loose tracking-wide text-accent-900;
  }

  ul {
    @apply list-inside list-disc space-y-4 text-lg;
  }
}
</style>
