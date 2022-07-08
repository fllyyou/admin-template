import vue from "@vitejs/plugin-vue";
import { loadEnv, PluginOption } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export function loadPlugins(
  commond: "build" | "serve",
  mode: string
): PluginOption[] {
  let env = loadEnv(mode, process.cwd()) as any as ViteEnv;
  let isBuild = commond == "build";
  let html = createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: env.VITE_PROJECT_NAME,
      },
    },
  });
  return [vue(), html];
}
