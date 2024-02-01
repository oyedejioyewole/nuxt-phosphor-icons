//@ts-ignore
import colors from "#build/tailwind.config/theme/accentColor";

/**
 * This function gets the shades of the provided color
 * from the `#build/tailwind.config` virtual file
 */

export default (name: string) => colors[name] as { [shade: number]: string };
