---
title: Get started
description: This page would guide you through using this module.
displayToc: true
---

## Setup

Run the following command to add the module to your project:

```bash [>_]
$ pnpm dlx nuxi@latest module add nuxt-phosphor-icons
```

Congratulations 🎉. You have successfully add the module to your project and can now browse the [icon library](https://phosphoricons.com)

**Note:** This module would add a little bit of an overhead in the development and production environments.

**Why?** Well, this module loads :IconCount icons globally as async chunks with no prefetching/preloading &mdash; I might add. No further explanation, that's all.

## Usage

I want to read about the

::UiTabs{:tabs='["component", "types", "utilities"]'}

#tab-1
```vue [YourComponent]
<PhosphorIcon name="sun" />
```

You can use the props below to customize how the icon being rendered

::UiTabs{:tabs='["name", "color", "size", "weight", "mirrored"]'}

#tab-1
Choose what icon to render. You can find them in the [icon library](https://phosphor-icons.com)

```vue [YourComponent]
<PhosphorIcon name="moon-stars" />
```

You could also dynamically render an icon based on conditions, i.e;

```vue [YourComponent]
<PhosphorIcon :name="{ 'moon-stars': isLightModeToggled, 'sun': !isLightModeToggled }" />
```

You could also extend the components utilizing the `<slot />` in this component allowing for custom attributes.

#tab-2
Choose icon stroke/fill color. It can be any CSS color string, including **_hex, rgb, rgba, hsl, hsla, named colors,_**{.font-cursive} or the special **_currentColor_**{.font-cursive} variable.

```vue
<PhosphorIcon color="#eee" />
```

#tab-3
Choose icon height & width. This can be a number, or a string with units in **_px, %, em, rem, pt, cm, mm, in_**{.font-cursive}.

```vue
<PhosphorIcon size="24px" />
```

#tab-4
Choose icon weight/style.

**Options:** `"thin"` | `"light"` | `"regular"` | `"bold"` | `"fill"` | `"duotone"`

```vue
<PhosphorIcon weight="duotone" />
```

#tab-5
Flip the icon horizontally. This can be useful in RTL languages where normal icon orientation is not appropriate.

```vue
<PhosphorIcon :mirrored="true" />
```

::

#tab-2

This modules exposes the following types during runtime

```ts
import type { PhosphorIconName } from '#phosphor-icons/types'
```

#tab-3

This module exposes the following utility functions:

::UiTabs{:tabs='[".getIconList()", ".getIconMap()"]'}

#tab-1
This function returns an array of icons available in the [icon library](https://phosphoricons.com)

```vue [YourComponent]
<script lang="ts" setup>
const icons = getIconList()

console.log(icons) // [ ... ]
</script>
```

#tab-2
This function returns the icon map of registered icons to their runtime components

```vue [YourComponent]
<script lang="ts" setup>
const iconMap = getIconMap() // { ... }

// Usage
const Icon = resolveComponent(iconMap['icon-name'])
</script>
```

This is also the preferable method if you want to `preload` icons before displaying them.

You do this using the [preloadComponents](https://nuxt.com/docs/4.x/api/utils/preload-components) utility provided by the `Nuxt` team.

```vue [YourComponent]
<script lang="ts" setup>
await preloadComponents(iconMap['icon-name'])
</script>
```

**Tip:** Maybe pair this logic with [@formkit/auto-animate](https://auto-animate.formkit.com) for smooth transitions whenever the DOM changes

::

::


## Configuration

You can configure the module using the `phosphorIcons` key in the `nuxt.config`

::UiTabs{:tabs='["componentName"]'}

#tab-1

This key allows you to set the name of the component registered by the module.

**Default:** `phosphor-icon`

```ts [nuxt.config]
export default defineNuxtConfig({
  phosphorIcons: {
    componentName: "phi",
  },
});
```

::
