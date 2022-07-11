import { fa } from "element-plus/es/locale";
import { defineStore } from "pinia";

interface IUserStore {
  token?: string;
  initial: boolean;
}

export const useUserStore = defineStore("user", {
  state: (): IUserStore => {
    return {
      token: undefined,
      initial: false,
    };
  },
  getters: {
    isLogin(): boolean {
      return this.token != undefined && this.token.length > 0;
    },
  },
  actions: {
    async login(userName: string, pwd: string) {
      this.token = "aaa";
    },
    async initialUser() {
      this.initial = true;
    },
  },
});
