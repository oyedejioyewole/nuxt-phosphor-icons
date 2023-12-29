# Nuxt Phosphor Icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Nuxt][nuxt-src]][nuxt-href]

Just a simple integration for `phosphor-icons` in Nuxt

- [✨ &nbsp;Changelog](https://nuxt-phosphor-icons.vercel.app/changelog)
- [🏀 Online playground](https://stackblitz.com/edit/nuxt-phosphor-icons?file=playground%2Fapp.vue)
- [📖 &nbsp;Documentation](https://nuxt-phosphor-icons.vercel.app)

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
});
```

That's it! You can now use `nuxt-phosphor-icons` in your Nuxt app ✨

## Resources

**Documentation**: <https://nuxt-phosphor-icons.vercel.app>

**Icons**:

1. <https://phosphoricons.com>
2. <https://github.com/phosphor-icons/vue>

## Development (Module)

```bash
# Install dependencies (on all workspaces)
$ pnpm install

# === (docs) commands ===

# Start development server (docs/)
pnpm docs:dev

# Build docs/
pnpm docs:build

# === (playground) commands ===

# Start development server (playground/)
$ pnpm playground:dev

# Build playground/
$ pnpm playground:build

# Run ESLint
$ pnpm lint

# Release new version (major)
$ pnpm release:major

# Release new version (minor)
$ pnpm release:minor

# Release new version (patch)
$ pnpm release:patch
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-phosphor-icons/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-phosphor-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-phosphor-icons.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-phosphor-icons
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
