<script lang='ts'>
export default {
  name: 'BaseHeader'
}
</script>
<template>
  <el-header class="header-wrap">
    <div class="logo-name">LOGONAME</div>
    <div class="user-menu">
      <div class="user-name">{{ userInfo?.username }}</div>
      <el-dropdown @command="menuClick">
        <div class="user-avatar">
          <img src="../../assets/logo.png" alt="avatar">
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="goHome">首页</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script lang='ts' setup>
import { ElHeader, ElDropdown, ElDropdownMenu } from 'element-plus'
import { useRouter } from 'vue-router'
import { appStore } from '../../store/app';

const router = useRouter()
const store = appStore()

const userInfo = computed(() => store.userInfo)

const menuClick = (command: string | number | object) => {
  if (command === 'goHome') {
    router.push('/home')
  } else if (command === 'logout') {
    store.logout()
    router.push('/login')
  }
}
</script>

<style lang="less" scoped>
.header-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  box-sizing: border-box;
  text-align: center;
  background-color: #0099CC;
  .logo-name {
    font-size: 22px;
  }
  .user-menu {
    display: flex;
    align-items: center;
    .user-avatar {
      width: 30px;
      height: 30px;
      margin-left: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>