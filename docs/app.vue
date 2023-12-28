<template>
  <main>
    <LazyIntroBanner />
    <LazyContentDoc
      class="mx-auto min-h-screen w-1/2 space-y-8 py-20"
      id="documentation"
    />
  </main>
</template>

<style lang="scss">
body {
  @apply bg-background-100;
}

#documentation {
  h1,
  h2,
  h3,
  h4 {
    a {
      @apply text-copy-900 font-serif;
    }
  }
  h1 {
    @apply text-copy-900 font-serif text-6xl;
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
      @apply bg-accent-500 rounded-lg p-3;
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
    @apply text-accent-900  text-balance text-lg leading-loose tracking-wide;
  }

  pre {
    @apply bg-accent-900 rounded-lg p-7 text-sm;

    code {
      @apply rounded-none bg-transparent;
    }
  }

  code {
    @apply bg-accent-500 rounded-lg px-3 py-1 text-sm;
  }

  a {
    @apply text-accent-500 hover:underline;
  }
}
</style>
