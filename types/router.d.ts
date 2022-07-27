import "vue-router";

interface IBreadcrumb {
  title: string;
  route?: string;
}

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
    auth?: boolean;
    login?: boolean;
    inMenu?: boolean; //是否需要显示为菜单栏 主菜单需要设置
    menu: IMenu;
    breadcrumb: IBreadcrumb; //面包屑显示内容
    hasNode?: boolean; // 是否含有子节点 不设置 或者 设置为 true时候是需要存在子节点的
    permissions?: string[];
  }
}
