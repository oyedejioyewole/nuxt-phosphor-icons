import {
  addComponent,
  addTemplate,
  addTypeTemplate,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'
import { kebabCase } from 'change-case'
import { readdirSync } from 'node:fs'
import { dirname } from 'node:path'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * The prefix of the component names
   *
   * @default "phosphor-icon"
   */
  prefix: string

  /**
   * This key toggles whether a virtual file containing a list of all the icons name should be registered.
   * The virtual file can be imported from `#phosphor-icons`
   *
   * @default false
   */
  showList: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-phosphor-icons',
    configKey: 'phosphorIcons',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: 'phosphor-icon',
    showList: false,
  },
  async setup(options, nuxt) {
    const { resolve, resolvePath } = createResolver(import.meta.url)

    const source = resolve(
      dirname(await resolvePath('@phosphor-icons/vue')),
      'icons',
    )

    const phosphorIcons = readdirSync(source).filter(icon => icon.endsWith('.vue.mjs')).map(icon => kebabCase(icon.split('.').at(0)?.substring(2) ?? ''))

    addComponent({
      filePath: resolve('./runtime/components/PhosphorIcon.vue'),
      name: kebabCase(options.prefix),
    })

    if (options.showList) {
      const iconListTemplate = addTemplate({
        filename: 'nuxt-phosphor-icons.json',
        getContents: () => JSON.stringify(phosphorIcons),
        write: true,
      })

      // TODO: why are file extensions removed when alias has been registered?
      nuxt.options.alias['#phosphor-icons'] = iconListTemplate.dst
    }

    const typeTemplate = addTypeTemplate({
      filename: 'types/nuxt-phosphor-icons.d.ts',
      getContents: () => [
        '// Provided by nuxt-phosphor-icons',
        `export type PhosphorIconName = ${phosphorIcons.map(icon => `'${icon}'`).join(' | ')}`,
      ].join('\n'),
      write: true,
    })

    nuxt.options.alias['#phosphor-icons/types'] = typeTemplate.dst
  },
})
