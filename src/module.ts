import { name as packageName } from '../package.json'

import {
  addComponent,
  addComponentsDir,
  addImportsSources,
  addTemplate,
  addTypeTemplate,
  createResolver,
  defineNuxtModule,
  resolveFiles,
  useLogger,
} from '@nuxt/kit'
import { kebabCase, pascalCase } from 'change-case'
import { dirname, parse } from 'node:path'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * This key allows you to set the name of the registered component.
   *
   * @default "phosphor-icon"
   * @link https://nuxt-phosphor-icons.vercel.app
   */
  componentName: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: packageName,
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
    const { resolve, resolvePath } = createResolver(import.meta.url)
    const logger = useLogger(packageName)

    addComponent({
      filePath: resolve('./runtime/components/PhosphorIcon.vue'),
      name: kebabCase(options.componentName),
    })

    addImportsSources({
      from: resolve('./runtime/utils/icons.ts'),
      imports: ['getIconList', 'getIconMap'],
    })

    const source = resolve(
      dirname(await resolvePath('@phosphor-icons/vue')),
      'icons',
    )

    const phosphorIcons = (await resolveFiles(source, '*.vue.mjs')).map((filePath) => {
      let { name: filename } = parse(filePath)
      filename = filename.split('.').at(0) ?? ''

      return {
        componentName: pascalCase(`${filename}-vue`), importName: filename, listName: kebabCase(filename.substring(2)), path: filePath,
      }
    })

    // Create module types and register its alias.
    const typeTemplate = addTypeTemplate({
      filename: `types/${packageName}.d.ts`,
      getContents: () => [
        `// Provided by ${packageName}`,
        `export type PhosphorIconName = ${phosphorIcons.map(icon => `'${icon.listName}'`).join(' | ')}`,
      ].join('\n'),
      write: true,
    })
    nuxt.options.alias['#phosphor-icons/types'] = typeTemplate.dst

    // Register the icons globally as async chunks (through the nuxt:components plugin)
    addComponentsDir({
      path: source,
      isAsync: true,
      global: true,
      pattern: ['*.vue.mjs'],
    })

    // Register a key-value mapping of icon.listName -> icon.componentName.
    // Also register its alias.
    const template = addTemplate({
      filename: `${packageName}.map.mjs`,
      getContents: () => [
        `// Provided by ${packageName}`,
        'export default {',
        phosphorIcons.map(icon => ` "${icon.listName}": "${icon.componentName}"`).join(',\n'),
        '}',
      ].join('\n'),
      write: true,
    })
    nuxt.options.alias['#phosphor-icons/map'] = template.dst

    logger.success(`${phosphorIcons.length} icons have been registered.`)
  },
})
