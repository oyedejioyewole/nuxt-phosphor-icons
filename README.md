# Nuxt Phosphor Icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Nuxt][nuxt-src]][nuxt-href]

Just a simple integration for [Phosphor Icons](https://phosphoricons.com) in [Nuxt](https://nuxt.com)

- [📜 &nbsp;Changelog](https://nuxt-phosphor-icons.vercel.app/changelog)
- [🏀 Online playground](https://codesandbox.io/p/github/OyewoleOyedeji/nuxt-phosphor-icons/main?embed=1&file=%2Fplayground%2Fapp.vue&showConsole=true)
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

1. **Documentation**: <https://nuxt-phosphor-icons.vercel.app>
2. **Phosphor Icons**: <https://phosphoricons.com>

## Contributing

You can contribute to this module with CodeSandbox:

[![Edit OyewoleOyedeji/nuxt-phosphor-icons/main][playground-src]][playground-href]

or locally for either

### Documentation

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Run development server with `pnpm docs:dev`

**Note:** Hosted on Vercel

[![Deploy with Vercel][vercel-src]][vercel-href]

### Playground

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Run development server with `pnpm playground:dev`

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-phosphor-icons/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-phosphor-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-phosphor-icons.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-phosphor-icons
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
[playground-src]: https://codesandbox.io/static/img/play-codesandbox.svg
[playground-href]: https://codesandbox.io/p/github/OyewoleOyedeji/nuxt-phosphor-icons/main?embed=1&file=%2Fplayground%2Fapp.vue&showConsole=true
[vercel-src]: https://vercel.com/button
[vercel-href]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FOyewoleOyedeji%2Fnuxt-phosphor-icons
