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
  customIcon?: string;
  route?: string | symbol;
  path?: string;
  childrens?: IMenu[];
  index?: string; //索引值 唯一值
}
