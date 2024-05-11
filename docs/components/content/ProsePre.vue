<template>
  <pre
    class="flex justify-between overflow-x-auto rounded-lg border border-primary-900 bg-primary-200 bg-opacity-50 p-5 text-sm backdrop-blur-sm transition-[border_opacity] hover:bg-opacity-100 dark:border-primary-100 dark:border-opacity-50 dark:bg-primary-800 dark:hover:border-opacity-100 lg:p-7"
    :class="$props.class"
  ><slot />

  <button class="group hidden lg:flex gap-x-2" @click="useClipboardContent($props.code as string)">
    <PhosphorIconCopy size="20" weight="light"   />
    <span class="group-hover:block hidden">Copy</span>
  </button>
  </pre>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});
</script>

<style lang="scss">
pre {
  code {
    .line {
      @apply block;
    }
  }
}
</style>
