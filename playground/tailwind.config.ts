import type { Config } from "tailwindcss";
import { tailwindcssPaletteGenerator } from "@bobthered/tailwindcss-palette-generator";

export default {
  content: [],
  theme: {
    extend: {
      colors: tailwindcssPaletteGenerator({
        colors: ["#3c402b"],
        names: ["primary"],
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
