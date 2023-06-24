import { defineNuxtModule, createResolver, addComponent } from "@nuxt/kit";
import { readdirSync } from "fs";
import { join } from "path";

// Module options TypeScript interface definition
export interface ModuleOptions {
  prefix?: string;
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
  defaults: {},
  async setup({ prefix }) {
    const { resolvePath } = createResolver(import.meta.url);

    const entrypoint = await resolvePath("@phosphor-icons/vue");
    const iconsPath = join(entrypoint, "../icons");

    const components = readdirSync(iconsPath)
      .filter((file) => file.endsWith(".vue.mjs"))
      .map((file) => {
        let name = file.split(".")[0];

        if (prefix) {
          if (prefix.includes("-"))
            name = name.replace(
              "Ph",
              prefix
                .split("-")
                .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                .join("")
            );
          else
            name = name.replace(
              "Ph",
              `${prefix.charAt(0).toUpperCase()}${prefix.slice(1)}`
            );
        } else {
          name = name.replace("Ph", "PhosphorIcon");
        }

        return {
          name,
          filePath: join(iconsPath, file),
          chunkName: `phosphor-icons/${file.split(".")[0].toLowerCase()}`,
        };
      });

    for (const { name, filePath, chunkName } of components) {
      addComponent({
        name: `${name}`,
        filePath: filePath,
        chunkName: chunkName,
      });
    }
  },
});
