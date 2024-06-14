import {
  addComponent,
  addTemplate,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";
import { readdir } from "fs/promises";
import { join } from "path";

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Enable to register components globally
   *
   * @default false
   * @link https://nuxt-phosphor-icons.vercel.app#expose
   */
  expose: boolean;

  /**
   * The prefix of the component names
   *
   * @default "phosphor-icon" or "PhosphorIcon"
   * @link https://nuxt-phosphor-icons.vercel.app#prefix
   */
  prefix: string;

  /**
   * Enable to generate a virtual file with the list
   * of registered components at `#build/nuxt-phosphor-icons.json`
   *
   * @default false
   * @link https://nuxt-phosphor-icons.vercel.app#showlist
   */
  showList: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-phosphor-icons",
    configKey: "phosphor",
    compatibility: {
      nuxt: ">=3.0.0",
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    expose: false,
    prefix: "phosphor-icon",
    showList: false,
  },
  async setup(options) {
    const { resolve, resolvePath } = createResolver(import.meta.url);

    const source = resolve(
      await resolvePath("@phosphor-icons/vue"),
      "../icons",
    );

    const icons = await readdir(source);

    const compatibleComponents = icons.filter((file) =>
      file.endsWith(".vue.mjs"),
    );

    const prefix = options.prefix.includes("-")
      ? options.prefix
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join("")
      : options.prefix.charAt(0).toUpperCase() + options.prefix.slice(1);

    const componentList: string[] = [];

    for (const component of compatibleComponents) {
      const name = component.replace(".vue.mjs", "").replace("Ph", prefix);

      addComponent({
        filePath: join(source, component),
        global: options.expose,
        name,
      });

      componentList.push(name);
    }

    if (options.showList) {
      addTemplate({
        filename: "nuxt-phosphor-icons.json",
        getContents: () => JSON.stringify(componentList),
        write: true,
      });
    }
  },
});
