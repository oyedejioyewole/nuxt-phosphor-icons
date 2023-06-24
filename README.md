# Nuxt Phosphor Icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Nuxt][nuxt-src]][nuxt-href]

Just a simple integration for [`@phosphor-icons`](https://github.com/phosphor-icons/vue) in Nuxt

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-phosphor-icons?file=playground%2Fapp.vue)
- [📖 &nbsp;Documentation](https://phosphoricons.com)

## Features

- There is auto imports for components
- There is also lazy loading for components
- You can customize the prefix using for the component

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

THis is an example of how to use the module

```vue
<template>
  <PhosphorIconAirplane size="40" color="green" />
</template>
```

1. To find out more about props for the component, refer to <https://github.com/phosphor-icons/vue>
2. To find the list of icons, refer to <https://phosphoricons.com>

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-phosphor-icons/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-phosphor-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-phosphor-icons.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-phosphor-icons
[license-src]: https://img.shields.io/npm/l/nuxt-phosphor-icons.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-phosphor-icons
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
