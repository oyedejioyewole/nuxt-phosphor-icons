import {
  addComponent,
  addTemplate,
  createResolver,
  defineNuxtModule,
  type AddComponentOptions,
} from "@nuxt/kit";
import { readdirSync } from "fs";
import { join } from "path";

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Enable to register components globally
   *
   * @default false
   */
  expose: boolean;

  /**
   * The prefix of the component names
   *
   * @default "phosphor-icon" or "PhosphorIcon"
   */
  prefix: string;

  /**
   * Enable to generate a virtual file with the list
   * of registered components at `#build/nuxt-phosphor-icons.json`
   *
   * @default false
   */
  showList: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-phosphor-icons",
    configKey: "phosphor",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    expose: false,
    prefix: "phosphor-icon",
    showList: false,
  },
  async setup(options) {
    const { resolvePath } = createResolver(import.meta.url);

    const source = join(await resolvePath("@phosphor-icons/vue"), "../icons");

    const compatibleComponents = readdirSync(source).filter((file) =>
      file.endsWith(".vue.mjs"),
    );

    // Convert prefix to PascalCase
    let _prefix: string;

    if (options.prefix) {
      if (options.prefix.includes("-"))
        _prefix = options.prefix
          .split("-")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join("");
      else
        _prefix = options.prefix.at(0)?.toUpperCase() + options.prefix.slice(1);
    }

    // Generate the component chunks
    const chunks = compatibleComponents.map((component) => {
      const componentName = component
        .replace(".vue.mjs", "")
        .replace("Ph", _prefix);

      return {
        name: componentName,
        filePath: join(source, component),
        global: options.expose,
      } satisfies AddComponentOptions;
    });

    // Register the components
    for (const chunk of chunks) {
      addComponent({
        ...chunk,
      });
    }

    // Register template .json file (advanced usage)
    if (options.showList) {
      addTemplate({
        filename: "nuxt-phosphor-icons.json",
        getContents: () => JSON.stringify(chunks.map((chunk) => chunk.name)),
        write: true,
      });
    }
  },
});
