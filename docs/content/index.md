# Documentation

:-P An easier way of using [@phosphor-icons/vue](https://phosphoricons.com) in your Nuxt project!

## Setup

Run the following command to install and add the module to your project:

```bash
$ pnpm dlx nuxi@latest module add nuxt-phosphor-icons
```

**Aside**: I know I'm being preferential in my choice of package managers

Congratulations 🎉, you can now browse [@phosphor-icons/vue](https://phosphoricons.com) for icons to use in your project!

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

```ts
export default defineNuxtConfig({
  phosphor: {
    showList: true,
  },
});
```
