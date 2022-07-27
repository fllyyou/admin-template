import vue from "@vitejs/plugin-vue";
import { loadEnv, PluginOption } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

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
  let icons = Icons({ autoInstall: true });
  let components = Components({
    dts: "types/components.d.ts",
    dirs: ["src/components"],
    directoryAsNamespace: true,
    resolvers: [
      IconsResolver({
        alias: {
          park: "icon-park",
        },
        customCollections: ["custom", "inline"],
      }),
    ],
  });

  return [vue(), html, icons, components];
}
