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
    async reloadRouter() {
      router.getRoutes().filter((route) => route.meta.inMenu);
      this.menus = [];
    },
  },
});
