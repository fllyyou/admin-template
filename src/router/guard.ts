import { useMenusStore } from "./../store/menu";
import { useUserStore } from "./../store/user";
import { Progress } from "/@/libs/progress/index";
import { RouteLocationNormalized, RouteLocationRaw, Router } from "vue-router";
import { autoReload } from ".";

class Guard {
  private userStore = useUserStore();

  constructor(private router: Router) {
    this.run();
  }

  private run() {
    this.router.beforeEach(async (to, form) => {
      return await this.beforeEach(to, form);
    });
    this.router.afterEach(async () => {
      Progress.done();
    });
  }

  private async beforeEach(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
  ): Promise<RouteLocationRaw | undefined> {
    Progress.start();
    try {
      if (to.meta.auth && !this.userStore.isLogin) {
        // 登录鉴权 并且动态添加路由
        return { name: "Login" };
      }

      if (to.meta.login && this.userStore.isLogin) {
        // 如果前往登录页 但是登录授权未失效的时候不做任何处理
        return from;
      }
      if (!this.userStore.initial && this.userStore.isLogin) {
        // 初始化页面
        await this.userStore.initialUser();
        // 构建菜单
        await useMenusStore().reloadMenus();
        // 构建目录导航
        await useMenusStore().reloadBreadcrumb();
      }
    } catch (error) {
      return { name: "Login" };
    }
  }
}

export default (router: Router) => {
  return new Guard(router);
};
