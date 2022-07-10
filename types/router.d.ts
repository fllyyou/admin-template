import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
    auth?: boolean;
    inMenu?: boolean;
    menu: IMenu;
    permissions?: string[];
  }
}
