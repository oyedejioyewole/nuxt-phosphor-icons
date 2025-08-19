import {
  addComponent,
  addComponentsDir,
  addImportsSources,
  addTemplate,
  addTypeTemplate,
  createResolver,
  defineNuxtModule,
  useLogger
} from '@nuxt/kit'
import { kebabCase, pascalCase } from 'change-case'
import { readdirSync } from 'node:fs'
import { dirname } from 'node:path'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * This key allows you to set the prefix for the component registered by the module.
   *
   * @default "phosphor-icon"
   * @link https://nuxt-phosphor-icons.vercel.app
   */
  componentName: string
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
    componentName: 'phosphor-icon',
  },
  async setup(options, nuxt) {
    const logger = useLogger('nuxt-phosphor-icons')

    const { resolve, resolvePath } = createResolver(import.meta.url)
    const source = resolve(
      dirname(await resolvePath('@phosphor-icons/vue')),
      'icons',
    )
    const phosphorIcons = readdirSync(source).filter(icon => icon.endsWith('vue.mjs')).map(icon => {
      const filename = icon.split('.').at(0) ?? ''
      return {
         componentName: pascalCase(`${filename}-vue`), importName: filename, listName: kebabCase(filename.substring(2)), path: resolve(source, icon),
      }
    })

    // Register the runtime component for accessing the icons.
    addComponent({
      filePath: resolve('./runtime/components/PhosphorIcon.vue'),
      name: kebabCase(options.componentName),
    })

    // Register the icons globally as asynchronous chunks
    // (an icon would be loaded when requested).
    addComponentsDir({
      path: source,
      isAsync: true,
      global: true,
      pattern: ['*.vue.mjs'],
    })

    // Register auto-imports for utility functions
    addImportsSources([
      { from: resolve('./runtime/utils/icons.ts'), imports: ['getIconList', 'getIconMap'] },
    ])

    // Register a map between an icon name and its registered component.
    const template = addTemplate({
      filename: 'nuxt-phosphor-icons.map.mjs',
      getContents: () => [
        '// Provided by nuxt-phosphor-icons',
        'export default {',
        phosphorIcons.map(icon => ` "${icon.listName}": "${icon.componentName}"`).join(',\n'),
        '}',
        ].join('\n'),
      write: true,
    })
    nuxt.options.alias['#phosphor-icons/map'] = template.dst

    logger.success(`${phosphorIcons.length} icons have been registered and mapped`)

    // Register module types.
    const typeTemplate = addTypeTemplate({
      filename: 'types/nuxt-phosphor-icons.d.ts',
      getContents: () => [
        '// Provided by nuxt-phosphor-icons',
        `export type PhosphorIconName = ${phosphorIcons.map(icon => `'${icon.listName}'`).join(' | ')}`,
      ].join('\n'),
      write: true,
    })
    nuxt.options.alias['#phosphor-icons/types'] = typeTemplate.dst
  },
})
