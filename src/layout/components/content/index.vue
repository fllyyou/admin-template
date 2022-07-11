<script lang="ts" setup></script>

<template>
  <div class="bg-white flex-grow overflow-hidden block">
    <router-view v-slot="{ Component, route }">
      <transition appear name="el-fade-in-linear">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>
