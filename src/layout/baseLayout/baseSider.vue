<script lang='ts'>
export default {
  name: 'BaseSider'
}
</script>
<template>
  <el-aside class="aside-container" width="150px">
    <el-menu @select="selectMenu">
      <el-menu-item
        v-for="item in menus"
        :key="item.id"
        :index="item.value"
      >
      {{ item.label }}
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script lang='ts' setup>
import { ElAside, ElMenu, ElMenuItem } from 'element-plus';
import { menus } from '../../utils/menu/menu';

const router = useRouter()

const selectMenu = (menuKey: String) => {
  router.push('/' + menuKey)
}
</script>
<style lang="less" scoped>
.aside-container {
  height: 100%;
}
</style>