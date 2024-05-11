<template>
  <ul
    class="list-inside list-disc text-lg"
    :class="{
      'space-y-8': $route.name === 'index',
      'space-y-4': $route.name === 'release-notes',
    }"
  >
    <slot />
  </ul>
</template>
