import { defineConfig, loadEnv } from "vite";
import { alias } from "./vite/alias";
import { loadPlugins } from "./vite/plugins";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  let env = loadEnv(mode, process.cwd()) as any as ViteEnv;
  return {
    resolve: {
      alias: alias,
    },
    server: {
      port: env.VITE_PORT,
    },
    plugins: loadPlugins(command, mode),
  };
});
