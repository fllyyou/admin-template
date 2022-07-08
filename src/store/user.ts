import { defineStore } from "pinia";

interface IUserStore {
  token?: string;
}

export const useUserStore = defineStore("user", {
  state: (): IUserStore => {
    return {
      token: undefined,
    };
  },
  getters: {
    isLogin(): boolean {
      return this.token != undefined && this.token.length > 0;
    },
  },
  actions: {
    async login(userName: string, pwd: string) {
      this.token = "";
    },
  },
});
