<script lang="ts" setup>
const features = [
  'Nuxt 3 ready.',
  'Typescript support.',
  'An importable list of all icons in @phosphor-icons/vue.',
  'Inherits all properties/slots of components from @phosphor-icons/vue.',
]
</script>

<template>
  <header
    class="flex max-lg:h-[calc(100vh_-_64px)] min-lg:h-[calc(100vh_-_96px)] max-lg:flex-col-reverse max-lg:justify-center min-lg:flex-row min-lg:justify-around gap-y-8 max-lg:w-9/10 max-lg:mx-auto"
  >
    <div class="min-lg:place-self-center space-y-4">
      <!-- Tagline -->
      <h1 class="font-serif text-3xl min-lg:text-4xl font-bold">
        Phosphor Icons meets Nuxt
      </h1>

      <!-- Description -->
      <p>
        An easier way of using <span
          class="font-bold underline underline-offset-4 font-cursive"
        >@phosphor-icons/vue</span> in your Nuxt project!
      </p>

      <!-- Feature list -->
      <ul class="space-y-2">
        <li
          v-for="(feature, _index) of features"
          :key="_index"
          class="flex gap-x-2"
        >
          <PhosphorIcon
            name="check"
          />
          {{ feature }}
        </li>
      </ul>

      <div class="flex flex-wrap gap-4">
        <UiButton
          icon="book-open"
          to="#setup"
        >
          Get started
        </UiButton>

        <UiButton
          icon="github-logo"
          variant="accent"
          to="https://github.com/oyedejioyewole/nuxt-phosphor-icons"
        >
          View project
        </UiButton>
      </div>
    </div>

    <!-- Icon display -->
    <div
      class="flex flex-col min-lg:flex-row gap-2.5 basis-3/10 min-lg:aspect-[9/16]"
    >
      <AppIconSlide />
    </div>
  </header>
</template>
