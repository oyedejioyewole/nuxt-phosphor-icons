<script lang="ts" setup>
const { data: latestRelease } = await useFetch<{ name: string, html_url: string }>('https://api.github.com/repos/oyedejioyewole/nuxt-phosphor-icons/releases/latest', { pick: ['name', 'html_url'] })
</script>

<template>
  <nav>
    <div class="flex items-center gap-x-4">
      <!-- Logo and project name -->
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-x-2 hover:opacity-70 transition-opacity font-bold font-cursive"
      >
        <svg
          class="w-8"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M281.44 397.667H438.32C443.326 397.667 448.118 395.908 452.453 393.427C456.789 390.946 461.258 387.831 463.76 383.533C466.262 379.236 468.002 374.36 468 369.399C467.998 364.437 466.266 359.563 463.76 355.268L357.76 172.947C355.258 168.65 352.201 165.534 347.867 163.053C343.532 160.573 337.325 158.813 332.32 158.813C327.315 158.813 322.521 160.573 318.187 163.053C313.852 165.534 310.795 168.65 308.293 172.947L281.44 219.587L227.733 129.13C225.229 124.834 222.176 120.307 217.84 117.827C213.504 115.346 208.713 115 203.707 115C198.701 115 193.909 115.346 189.573 117.827C185.238 120.307 180.771 124.834 178.267 129.13L46.8267 355.268C44.3208 359.563 44.0022 364.437 44 369.399C43.9978 374.36 44.3246 379.235 46.8267 383.533C49.3288 387.83 53.7979 390.946 58.1333 393.427C62.4688 395.908 67.2603 397.667 72.2667 397.667H171.2C210.401 397.667 238.934 380.082 258.827 346.787L306.88 263.4L332.32 219.587L410.053 352.44H306.88L281.44 397.667ZM169.787 352.44H100.533L203.707 174.36L256 263.4L221.361 323.784C208.151 345.387 193.089 352.44 169.787 352.44Z"
            style="fill: rgb(60, 64, 43);"
          />
        </svg>

        <span class="min-lg:inline-block max-lg:sr-only">nuxt-phosphor-icons</span>
      </NuxtLink>

      <!-- Latest release badge -->
      <NuxtLink
        v-if="latestRelease"
        :to="latestRelease.html_url"
        class="hover:opacity-70 transition-opacity"
        target="_blank"
      >
        <ProseCode>
          {{ latestRelease.name }}
        </ProseCode>
      </NuxtLink>
    </div>

    <!-- Navigation items -->
    <ul class="inline-flex items-center gap-x-8">
      <li>
        <button
          class="cursor-pointer hover:opacity-70 transition-opacity"
          @click="$colorMode.value === 'light' ? $colorMode.preference = 'dark' : $colorMode.preference = 'light'"
        >
          <ClientOnly>
            <PhosphorIcon
              :name="$colorMode.value === 'light' ? 'moon-stars' : 'sun'"
              :size="18"
            />

            <template #fallback>
              <PhosphorIcon
                name="circle-half"
                :size="18"
              />
            </template>
          </ClientOnly>

          <span class="sr-only">Toggle between light and dark mode</span>
        </button>
      </li>
    </ul>
  </nav>
</template>
