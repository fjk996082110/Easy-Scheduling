<template>
  <RouterView></RouterView>
</template>
<script setup lang="ts">
import { appStore } from './store/app'
import Cookies from 'js-cookie'
import router from './routes/router'

const store = appStore()

onMounted(() => {
  if (!!store.userInfo || !Cookies.get('courseInfo')) {
    router.push('/login')
  }
  if (Cookies.get('courseInfo') && !!store.userInfo) {
    const userInfoInCookies = JSON.parse(Cookies.get('courseInfo'))
    store.setUserInfo(userInfoInCookies)
  }
})
</script>
<style>
html,
body,
#app {
  margin: 0;
  width: 100% !important;
  height: 100% !important;
}
</style>
