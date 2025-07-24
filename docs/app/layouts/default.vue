<template>
  <Html lang="en">
    <Body class="bg-primary-50 dark:bg-primary-950 text-primary-900 dark:text-primary-100">
      <main>
        <div class="max-lg:sticky bg-primary-50 dark:bg-primary-950 max-lg:border-b border-primary-500 z-10 top-0">
          <AppNavigation class="flex justify-between items-center py-4 min-lg:py-8 w-9/10 mx-auto" />
        </div>

        <slot />
      </main>
    </Body>
  </Html>
</template>
