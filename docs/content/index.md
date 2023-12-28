# Documentation

If you are reading this, I want to take a moment to thank you for trying out this module 😅

## Setup

Follow the following steps to start using this module:

1. Add the `nuxt-phosphor-icons` module to your project as a `devDependency`

   ```bash
   $ pnpm add -D nuxt-phosphor-icons
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

Browse the available of icons [here](https://phosphoricons.com/)

Before hurrying on now, lets go through some possible configuration you might want to do!

## Configuration

You can configure the module using the `phosphor` key in the `nuxt.config.ts`

### Options

<br>

#### `prefix`

1. **Default:** `PhosphorIcon`
2. **Description:** What should be prefixed to the icon components
3. **Type:** `String` or `Boolean`

**Note:** When using type `Boolean`, if set to `true` the prefix would be the default value, otherwise if set to `false` there won't be a prefix.

Also note, if you have a multi word prefix, you should include a dash (-) between the words

<br>

#### `options`

1. **Default:** `{}`
2. **Description:** Options to pass to the `@phosphor-icons/vue` module
3. **Children:**

   - `options.components`

<br>

#### `options.components`

1. **Default:** `{}`
2. **Description:** Configure how the components are registered
3. **Type:** `Object`
4. **Children:**

   - `options.components.expose`
   - `options.components.showList`

<br>

#### `options.components.expose`

1. **Default:** `false`
2. **Description:** Whether to expose the components globally
3. **Type:** `Boolean`

**Note:** When set to `true` the components will be exposed globally (in turn leading to a larger bundle size), otherwise they will be exposed in the `components` key of the `nuxtContext`

<br>

#### `options.components.showList`

1. **Default:** `true`
2. **Description:** Whether to create a virtual file containing a list of all the available icons
3. **Type:** `Boolean`

**Note:** If enabled, the virtual file will be available for import at `#build/nuxt-phosphor-icons.mjs`
