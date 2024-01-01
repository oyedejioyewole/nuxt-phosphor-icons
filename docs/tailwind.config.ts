import { tailwindcssPaletteGenerator } from "@bobthered/tailwindcss-palette-generator";
import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    extend: {
      colors: tailwindcssPaletteGenerator({
        colors: ["#b5ac83", "#00DC82", "#0a100d"],
        names: ["accent", "primary", "copy"],
      }),
      fontFamily: {
        mono: ["Courier Prime", "monospace"],
        sans: ["Open Sans", "sans-serif"],
        serif: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
