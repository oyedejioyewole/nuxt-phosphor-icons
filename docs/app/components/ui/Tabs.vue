<script lang="ts" setup>
defineProps<{ tabs: string[] }>()

const activeTab = ref(1)
</script>

<template>
  <div class="space-y-4">
    <nav class="gap-2 flex flex-wrap">
      <button
        v-for="(tab, index) of $props.tabs"
        :key="tab"
        type="button"
        @click="activeTab = index + 1"
      >
        <ProseCode
          :class="{ 'border font-bold': index === activeTab - 1 }"
        >
          {{ tab }}
        </ProseCode>
      </button>
    </nav>

    <div
      v-for="index in $props.tabs.length"
      :key="index"
      v-auto-animate
      class="space-y-4"
    >
      <slot
        v-if="index === activeTab"
        :name="`tab-${index}`"
      />
    </div>
  </div>
</template>
