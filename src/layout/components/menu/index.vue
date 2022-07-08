<script></script>

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
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
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
