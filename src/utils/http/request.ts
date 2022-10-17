import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import router from '../../routes/router'
import { appStore } from '../../store/app'
import { setAuth, getAuth } from '../../utils/auth/auth'

const store = appStore()

const request = axios.create({
  baseURL: '/api',
})

request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config.headers) config.headers = {}
    const token = getAuth()
    if (token) {
      config.headers.Authorization = token
    } else {
      store.logout()
      router.push('/login')
    }
    return config
  },
  (error) => {
    console.error('request_err:' + error) // for debug
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status } = response.data
    if (response.headers.authorization) {
      setAuth(response.headers.authorization)
    }
    if (status === 201) {
      return ElMessage({
        message: '账号或密码错误',
        type: 'error',
      })
    } else if (status === 401) {
      ElMessage({
        message: '发生错误,请重试',
        type: 'error',
      })
    }
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default request
