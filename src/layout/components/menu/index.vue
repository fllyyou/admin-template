<script lang="ts" setup>
import { useMenusStore } from "/@/store/menu";

let store = useMenusStore();

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
          default-active="2"
          :collapse="false"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu v-for="item of store.menus" index="1">
            <template #title>
              <el-icon v-if="item.icon"><component :is="item.icon" /></el-icon>
              <span>{{ item.title }}</span>
            </template>
          </el-sub-menu>
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
