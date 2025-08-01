---
title: Documentation
description: An easier way of using @phosphor-icons/vue in your Nuxt project!
---

## Setup

Run the following command to add the module to your project:

```bash [>_]
$ pnpm dlx nuxi@latest module add nuxt-phosphor-icons
```

You have successfully add the module to your project and can now browse [phosphor-icons](https://phosphoricons.com){.font-cursive.underline.font-bold} for icons to use, congratulations 🎉.

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
```vue
<PhosphorIcon name="moon-stars" />
```

Choose what icon to render from [`@phosphor-icons/vue`](https://github.com/phosphor-icons/vue)

**Required:** `true`

**Type:** `String`

#tab-2
```vue
<PhosphorIcon color="#eee" />
```

Choose icon stroke/fill color. It can be any CSS color string, including hex, rgb, rgba, hsl, hsla, named colors, or the special currentColor variable.

**Type:** `String`

#tab-3
```vue
<PhosphorIcon size="24px" />
```

Choose icon height & width. This can be a number, or a string with units in px, %, em, rem, pt, cm, mm, in.

**Type:** `String | Number`

#tab-4
```vue
<PhosphorIcon weight="duotone" />
```

Choose icon weight/style.

**Type:** `"thin" | "light" | "regular" | "bold" | "fill" | "duotone"`

#tab-5
```vue
<PhosphorIcon :mirrored="true" />
```

Flip the icon horizontally. This can be useful in RTL languages where normal icon orientation is not appropriate.

**Type:** `Boolean`
::

#tab-2

This modules exposes the following types during runtime

```ts
import type { PhosphorIconName } from '#phosphor-icons/types'
```

#tab-3

This module exposes the following utility function:

```ts
getIconsList()
```

This function returns an array of icons available in the [phosphor-icons](https://phosphoricons.com){.underline.underline-offset-4} library to be used dynamically. This utility can only be used when the `showList` config key is set to `true` in `nuxt.config`

Below is a snippet using this utility:

```vue [YourComponent]
<script lang="ts" setup>
const icons = getIconsList()

console.log(icons) // [ ... ]
</script>
```
::


## Configuration

You can configure the module using the `phosphorIcons` key in the `nuxt.config`

Select a key from the options below to see details specific to such key

::UiTabs{:tabs='["prefix", "showList"]'}

#tab-1
```ts [nuxt.config]
export default defineNuxtConfig({
  phosphorIcons: {
    prefix: "phi",
  },
});
```

**Default:** `phosphor-icon`

This key allows you to set the prefix for the component registered by the module.

The snippet below shows how to use the prefixed component:

```vue
<Phi />
```


#tab-2
```ts [nuxt.config]
export default defineNuxtConfig({
  phosphorIcons: {
    showList: true,
  },
});
```

**Default:** `false`

This key toggles whether a virtual file containing a list of all the icons would be registered.

The snippet below shows how to use the virtual file:

```vue
<script lang="ts" setup>
const icons = getIconsList()
</script>
```
::
