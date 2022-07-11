import { defineStore } from "pinia";
import { router } from "../router";

interface IRouterMenu {
  menus: IMenu[];
}

export const useMenusStore = defineStore("menu", {
  state: (): IRouterMenu => {
    return {
      menus: [],
    };
  },
  actions: {
    async reloadMenus() {
      let menus = router
        .getRoutes()
        .filter((route) => route.meta.inMenu)
        .map((route) => {
          let menu = { ...route.meta.menu, route: route.name };
          return menu;
        });
      this.menus = menus;
    },
  },
});
