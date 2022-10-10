<script lang='ts'>
export default {
  name: 'BaseMain'
}
</script>
<template>
  <el-main class="main-container">
    <slot />
  </el-main>
</template>
<script lang='ts' setup>
import { ElMain } from 'element-plus';
</script>
<style lang="less" scoped>

</style>