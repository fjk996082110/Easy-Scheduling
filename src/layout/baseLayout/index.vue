<script lang="ts">
export default {
  name: 'Layout'
}
</script>
<template>
  <el-container style="overflow: hidden; height: 100%;" direction="vertical">
    <BaseHeader />
    <el-container class="aside-main-container">
      <base-sider></base-sider>
      <base-main>
        <slot />
      </base-main>
    </el-container>
  </el-container>
</template>
<script lang='ts' setup>
import { ElContainer } from 'element-plus';
import BaseHeader from './baseHeader.vue';
import BaseMain from './baseMain.vue';
import BaseSider from './baseSider.vue';
</script>
<style lang="less" scoped>
:deep(.aside-main-container) {
  padding: 0 20px;
  padding-left: 0;
  box-sizing: border-box;
  height: 100% !important;
  .el-menu {
    border-right: none;
  }
}
</style>