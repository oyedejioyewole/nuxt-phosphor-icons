import {
  addComponent,
  addTemplate,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";
import { readdirSync } from "fs";
import { join } from "path";

// Module options TypeScript interface definition
export interface ModuleOptions {
  prefix: string | boolean;
  options: Partial<{
    components: Partial<{
      expose: boolean;
      showList: boolean;
    }>;
  }>;
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
    prefix: "PhosphorIcon",
    options: {
      components: {
        showList: true,
      },
    },
  },
  async setup({ prefix, options }) {
    const { resolvePath } = createResolver(import.meta.url);

    const entrypoint = await resolvePath("@phosphor-icons/vue");
    const iconsPath = join(entrypoint, "../icons");

    const components = readdirSync(iconsPath).filter((file) =>
      file.endsWith(".vue.mjs"),
    );

    const componentChunks = [] as Array<{
      name: string;
      filePath: string;
      chunkName: string;
    }>;

    // Generate the component chunks
    for (const component of components) {
      let name = component.split(".").at(0);

      if (!name) continue;

      /**
       * If prefix is true, use default prefix
       * If prefix is string, use prefix, replacing dashes with PascalCase
       * If prefix is false, remove prefix
       */
      if (prefix === true) {
        name.replace("Ph", "PhosphorIcon");
      } else if (typeof prefix === "string") {
        if (prefix.includes("-")) {
          name = name.replace(
            "Ph",
            prefix
              .split("-")
              .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
              .join(""),
          );
        } else {
          name = name.replace(
            "Ph",
            `${prefix.charAt(0).toUpperCase()}${prefix.slice(1)}`,
          );
        }
      } else {
        name = name.replace("Ph", "");
      }

      componentChunks.push({
        name,
        filePath: join(iconsPath, component),
        chunkName: `phosphor-icons/${component.split(".")[0].toLowerCase()}`,
      });
    }

    // Register the components
    for (const { name, filePath, chunkName } of componentChunks) {
      addComponent({
        chunkName,
        filePath,
        global: options.components?.expose ?? false,
        name,
      });
    }

    // Show registered components as a virtual file (advanced usage)
    if (options.components?.showList)
      addTemplate({
        write: true,
        filename: "nuxt-phosphor-icons.mjs",
        getContents: () =>
          `export default ${JSON.stringify(
            componentChunks.map(({ name }) => name),
          )}`,
      });
  },
});
