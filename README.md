# Nuxt Phosphor Icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Nuxt][nuxt-src]][nuxt-href]

Just a simple integration for [Phosphor Icons](https://phosphoricons.com) in [Nuxt](https://nuxt.com)

- [✨ &nbsp;Release Notes](https://nuxt-phosphor-icons.vercel.app/release-notes)
- [🏀 Online playground][playground-href]
- [📖 &nbsp;Documentation](https://nuxt-phosphor-icons.vercel.app)

## Quick Setup

1. Add `nuxt-phosphor-icons` dependency to your project

   ```bash
   npx nuxi@latest module add nuxt-phosphor-icons

2. Add `nuxt-phosphor-icons` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["nuxt-phosphor-icons"],
});
```

3. Icon usage in your code
```html
<PhosphorIcon{ icon-name }/>
```

Example :-
```html
<!-- Phone icon -->
<PhosphorIconPhone :size="32" color="#fafafa" weight="fill" />

<!-- Envelope Simple icon -->
<PhosphorIconEnvelopeSimple :size="32" color="#fafafa" weight="fill" />
```

That's it! You can now use `nuxt-phosphor-icons` in your Nuxt app ✨

## Resources

1. **Documentation**: <https://nuxt-phosphor-icons.vercel.app>
2. **Phosphor Icons**: <https://phosphoricons.com>

## Contributing

You can contribute to this module with StackBlitz:

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
[playground-src]: https://developer.stackblitz.com/img/open_in_stackblitz.svg
[playground-href]: https://stackblitz.com/~/github.com/OyewoleOyedeji/nuxt-phosphor-icons
[vercel-src]: https://vercel.com/button
[vercel-href]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FOyewoleOyedeji%2Fnuxt-phosphor-icons
