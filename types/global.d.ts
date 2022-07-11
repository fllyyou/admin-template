/**
 * vite 环境
 */
interface ViteEnv {
  VITE_PROJECT_NAME: string;
  VITE_PORT: number;
}

/**
 * 菜单信息
 */
interface IMenu {
  title?: string;
  icon?: string;
  route?: string | symbol;
  path?: string;
  childrens?: IMenu[];
}
