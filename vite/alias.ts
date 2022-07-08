import path from "path";
import { AliasOptions } from "vite";

export const alias: AliasOptions = {
  "/@": path.join(__dirname, "..", "src"),
  "/#": path.join(__dirname, "..", "types"),
};
