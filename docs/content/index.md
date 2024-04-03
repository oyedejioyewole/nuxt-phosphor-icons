---
title: Documentation · nuxt-phosphor-icons
description: A simple wrapper for @phosphor-icons/vue in Nuxt
---

# Documentation

If you are reading this, I want to take a moment to thank you for trying out this module 😅

## Setup

Follow the following steps to start using this module:

1. Add the `nuxt-phosphor-icons` module to your project as a `devDependency`

   ```bash
   $ npx nuxi@latest module add nuxt-phosphor-icons
   ```

2. Add the module to the `modules` section of the `nuxt.config.ts`

   ```ts
   export default defineNuxtConfig({
     devtools: { enabled: true },
     modules: ["nuxt-phosphor-icons"],
     phosphor: {}, // Override module options,
   });
   ```

Congratulations 🎉, you can now use any icon from `@phosphor-icon/vue` in your Nuxt project!

Browse the available of icons [here.](https://phosphoricons.com/)

Before hurrying on now, lets go through some possible configuration you might want to do!

## Configuration

You can configure the module using the `phosphor` key in the `nuxt.config.ts`

### Options

<br>

#### `expose`

1. **Default**: `false`
2. **Description**: Enable to register components globally.
3. **Type**: `Boolean`

```ts
export default defineNuxtConfig({
  phosphor: {
    expose: true,
  },
});
```

<br>

#### `prefix`

1. **Default:** `phosphor-icon` or `PhosphorIcon`
2. **Description:** The prefix of the component names.
3. **Type:** `String`

```ts
export default defineNuxtConfig({
  phosphor: {
    prefix: "your-prefix", // or YourPrefix
  },
});
```

**Note**: if you have a multi word prefix, you should include a &mdash; between the words.

<br>

#### `showList`

1. **Default:** `true`
2. **Description:** Enable to generate a virtual file with the list of registered components at

   `#build/nuxt-phosphor-icons.json`

3. **Type:** `Boolean`
