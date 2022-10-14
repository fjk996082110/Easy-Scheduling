import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import router from '../routes/router'

export const appStore = defineStore({
  id: 'App',
  state: () => {
    return {
      userInfo: {}
    }
  },
  actions: {
    setUserInfo(payload: any) {
      Cookies.set('courseInfo', JSON.stringify(payload), { expires: 7 })
      this.userInfo = payload
      router.push('/home')
    },
    logout() {
      this.userInfo = {}
      Cookies.remove('courseInfo')
      router.push('/login')
    }
  }
})