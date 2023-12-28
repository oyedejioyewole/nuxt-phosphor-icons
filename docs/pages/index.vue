<template>
  <main>
    <LazyIntroBanner />
    <LazyContentDoc
      class="mx-auto min-h-screen w-1/2 space-y-8 py-20"
      id="documentation"
      path="/"
    />
  </main>
</template>

<style lang="scss">
#documentation {
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

  h4 {
    @apply text-2xl font-bold;

    code {
      @apply rounded-lg bg-accent-500 p-3;
    }
  }

  ol {
    @apply list-inside list-decimal space-y-8 text-lg;

    li {
      @apply space-y-4;
    }
  }

  ul {
    @apply list-inside list-disc space-y-8 text-lg;

    li {
      @apply space-y-4;
    }
  }

  p {
    @apply text-balance  text-lg leading-loose tracking-wide text-accent-900;
  }

  pre {
    @apply rounded-lg bg-accent-900 p-7 text-sm;

    code {
      @apply rounded-none bg-transparent;
    }
  }

  code {
    @apply rounded-lg bg-accent-500 px-3 py-1 text-sm;
  }

  a {
    @apply text-accent-500 hover:underline;
  }
}
</style>
