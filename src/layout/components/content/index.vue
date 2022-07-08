<script lang="ts" setup></script>

<template>
  <el-main class="bg-white overflow-hidden block">
    <router-view v-slot="{ Component, route }">
      <transition appear name="el-fade-in-linear">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </el-main>
</template>
