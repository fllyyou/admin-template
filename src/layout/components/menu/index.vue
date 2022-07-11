<script lang="ts" setup>
import { useMenusStore } from "/@/store/menu";
import MenuItem from "./MenuItem.vue";
import { useRouter } from "vue-router";

let store = useMenusStore();

let currentIndex = useRouter().currentRoute.value.meta.menu.index;

let handleOpen = () => {};

let handleClose = () => {};
</script>

<template>
  <div class="admin-menu">
    <div class="w-full flex justify-center items-center">
      <div class="w-[65px] h-[65px] bg-red-400 rounded-full mt-4 mb-4"></div>
    </div>
    <div class="flex-grow block w-full overflow-y-hidden">
      <div class="w-full h-full overflow-y-auto">
        <el-menu
          active-text-color="#ffd04b"
          background-color="raba(0, 0, 255, 1)"
          text-color="#fff"
          :default-active="currentIndex"
          :collapse="false"
          @open="handleOpen"
          @close="handleClose"
        >
          <MenuItem
            v-for="item of store.menus"
            :menu="item"
            :index="item.index"
          />
        </el-menu>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-menu {
  @apply w-[250px] duration-500 h-screen bg-slate-800 md:block;
}

@media screen and(max-width: 766px) {
  .admin-menu {
    @apply fixed left-0 top-0;
  }
}

.el-menu {
  @apply bg-transparent border-r-0 text-white;
}

.el-menu-item.is-active {
}
</style>
