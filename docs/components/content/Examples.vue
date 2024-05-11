<script setup lang="ts">
const { data: icons, refresh } = useAsyncData(async () => getIcons());

useIntervalFn(refresh, 5000);

const iconNames = computed(
  () =>
    icons.value?.map((icon) =>
      icon
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(""),
    ) ?? [],
);
</script>

<template>
  <div
    class="grid place-items-center gap-5 rounded-lg border border-primary-900 bg-primary-200 bg-opacity-50 p-5 backdrop-blur-sm transition-[border] hover:bg-opacity-100 dark:border-primary-100 dark:border-opacity-50 dark:bg-primary-800 dark:hover:border-opacity-100 md:grid-cols-4 lg:p-7"
  >
    <button
      v-for="(icon, index) of icons"
      :key="index"
      @click="useClipboardContent(`<PhosphorIcon${iconNames[index]} />`)"
    >
      <BootstrapIcon class="text-4xl" :name="icon" />
    </button>
  </div>
</template>
