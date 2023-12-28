# Nuxt Phosphor Icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Nuxt][nuxt-src]][nuxt-href]

Just a simple integration for `phosphor-icons` in Nuxt

- [✨ &nbsp;Release Notes](https://nuxt-phosphor-icons.vercel.app/release-notes)
- [🏀 Online playground](https://stackblitz.com/edit/nuxt-phosphor-icons?file=playground%2Fapp.vue)
- [📖 &nbsp;Documentation](https://nuxt-phosphor-icons.vercel.app)

## Features

- A <`PhosphorIcon` /> component (the name can be changed) &mdash; this renders the icons

## Quick Setup

1. Add `nuxt-phosphor-icons` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-phosphor-icons

# Using yarn
yarn add --dev nuxt-phosphor-icons

# Using npm
npm install --save-dev nuxt-phosphor-icons
```

2. Add `nuxt-phosphor-icons` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["nuxt-phosphor-icons"],

  // Optionally change the default prefix - PhosphorIcon
  phosphor: {
    prefix: "your-prefix",
  },
});
```

That's it! You can now use `nuxt-phosphor-icons` in your Nuxt app ✨

## Usage

This module exposes a `<PhosphorIcon />` that you can use in your Nuxt app.

```vue
<template>
  <!-- This uses the defaults -->
  <PhosphorIconAirplane />

  <!-- This overrides the defaults -->
  <PhosphorIconAirplane size="40" color="green" />
</template>
```

### Note

1. To find out more about props for the component, refer to <https://github.com/phosphor-icons/vue>
2. To find the list of icons, refer to <https://phosphoricons.com>

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm dev:prepare

# Develop with the playground
pnpm dev

# Build the playground
pnpm dev:build

# Run ESLint
pnpm lint

# Release new version
pnpm release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-phosphor-icons/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-phosphor-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-phosphor-icons.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-phosphor-icons
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
