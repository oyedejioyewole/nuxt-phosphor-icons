---
title: Documentation
---

## Setup

Run the following command to add the module to your project:

```bash [>_]
$ pnpm dlx nuxi@latest module add nuxt-phosphor-icons
```

Congratulations 🎉. You have successfully add the module to your project and can now browse [phosphoricons.com](https://phosphoricons.com){.font-cursive.underline.font-bold} for icons to use.

## Usage

```vue [YourComponent]
<PhosphorIcon name="sun" />
```

**Note:** You can choose between `PascalCase` and `kebab-case` when using the component.

This component also inherits all the props from the source components used in `@phosphor-icons/vue` meaning you can check them out [here](https://github.com/phosphor-icons/vue/tree/main#props){.font-cursive.font-bold.underline}

If you're also interested in using the types provided by the module

```ts
import type { PhosphorIconName } from '#phosphor-icons/types'
```

## Configuration

You can configure the module using the `phosphorIcons` key in the `nuxt.config`

Select a key from the options below to see details specific to such key

::UiTabs{:tabs='["prefix", "showList"]'}

#tab-1
```ts [nuxt.config]
export default defineNuxtConfig({
  phosphor: {
    prefix: "phi",
  },
});
```

**Default:** `phosphor-icon`

This key allows you to set the prefix for the component registered by the module.

#tab-2
```ts [nuxt.config]
export default defineNuxtConfig({
  phosphor: {
    showList: true,
  },
});
```

**Default:** `false`

This key toggles whether a virtual file containing a list of all the icons would be registered.

The snippet below shows how to use the virtual file:

```vue
<script lang="ts" setup>
import iconList from '#phosphor-icons'
</script>
```
::
