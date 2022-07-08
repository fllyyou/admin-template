import { defineConfig } from "vite";
import { alias } from "./vite/alias";
import { loadPlugins } from "./vite/plugins";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    resolve: {
      alias: alias,
    },
    plugins: loadPlugins(command, mode),
  };
});
