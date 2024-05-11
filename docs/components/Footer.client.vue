<script lang="ts" setup>
defineEmits<{ (name: "toggle-cursor-fx"): void }>();

const theme = useColorMode();

const toggleTheme = () => {
  theme.value === "dark"
    ? (theme.preference = "light")
    : (theme.preference = "dark");
};
</script>

<template>
  <footer
    class="mx-auto flex flex-col items-center justify-center gap-y-4 py-10 md:flex-row lg:w-1/2"
  >
    <h1 class="basis-1/2 text-lg tracking-wide">
      Made with 🧋 · Hosted on Vercel
    </h1>

    <ul class="flex basis-1/2 items-center justify-end gap-x-4">
      <li class="contents">
        <ul class="contents">
          <!-- Repository -->
          <li>
            <NuxtLink
              target="_blank"
              to="https://github.com/oyedejioyewole/nuxt-phosphor-icons"
            >
              <PhosphorIconGithubLogo size="25" />
            </NuxtLink>
          </li>

          <!-- Nuxt -->
          <li>
            <NuxtLink target="_blank" to="https://nuxt.com">
              <svg
                class="fill-primary-900 transition dark:fill-primary-100"
                height="25"
                width="25"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M281.44 397.667H438.32C443.326 397.667 448.118 395.908 452.453 393.427C456.789 390.946 461.258 387.831 463.76 383.533C466.262 379.236 468.002 374.36 468 369.399C467.998 364.437 466.266 359.563 463.76 355.268L357.76 172.947C355.258 168.65 352.201 165.534 347.867 163.053C343.532 160.573 337.325 158.813 332.32 158.813C327.315 158.813 322.521 160.573 318.187 163.053C313.852 165.534 310.795 168.65 308.293 172.947L281.44 219.587L227.733 129.13C225.229 124.834 222.176 120.307 217.84 117.827C213.504 115.346 208.713 115 203.707 115C198.701 115 193.909 115.346 189.573 117.827C185.238 120.307 180.771 124.834 178.267 129.13L46.8267 355.268C44.3208 359.563 44.0022 364.437 44 369.399C43.9978 374.36 44.3246 379.235 46.8267 383.533C49.3288 387.83 53.7979 390.946 58.1333 393.427C62.4688 395.908 67.2603 397.667 72.2667 397.667H171.2C210.401 397.667 238.934 380.082 258.827 346.787L306.88 263.4L332.32 219.587L410.053 352.44H306.88L281.44 397.667ZM169.787 352.44H100.533L203.707 174.36L256 263.4L221.361 323.784C208.151 345.387 193.089 352.44 169.787 352.44Z"
                />
              </svg>
            </NuxtLink>
          </li>

          <!-- Phosphor Icons -->
          <li>
            <NuxtLink target="_blank" to="https://phosphoricons.com">
              <PhosphorIconPhosphorLogo size="25" />
            </NuxtLink>
          </li>
        </ul>
      </li>

      <li>
        <hr class="w-8 border border-primary-900 dark:border-primary-100" />
      </li>

      <li class="contents">
        <ul class="contents">
          <!-- Toggle cursor effects -->
          <li>
            <button
              class="hidden lg:block"
              type="button"
              @click="$emit('toggle-cursor-fx')"
            >
              <PhosphorIconSparkle name="stars" size="25" />
            </button>
          </li>

          <!-- Theme switcher -->
          <li>
            <button type="button" @click="toggleTheme">
              <component
                size="25"
                :is="
                  $colorMode.value === 'light'
                    ? 'PhosphorIconMoon'
                    : 'PhosphorIconSun'
                "
              />
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </footer>
</template>
