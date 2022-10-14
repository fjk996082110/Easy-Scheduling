<script lang='ts'>
export default {
  name: 'Login'
}
</script>
<template>
  <div class="login-container">
    <div class="login-box">
      <el-form class="login-form">
        <el-col :span="17">
          <el-form-item label="用户名" label-width="100px">
            <el-input v-model="loginForm.username" />
          </el-form-item>
        </el-col>
        <el-col :span="17">
          <el-form-item label="密码" label-width="100px">
            <el-input v-model="loginForm.password" type="password" />
          </el-form-item>
        </el-col>
      </el-form>
      <div class="login-btn" @click="onLogin">Login</div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import MD5 from 'js-md5'
import { ElForm, ElFormItem, ElInput, ElCol } from 'element-plus'
import { Login } from '../../api/login'
import { appStore } from '../../store/app'

const store = appStore()

interface LoginForm {
  username: string,
  password: string
}
const loginForm = ref<LoginForm>({
  username: '',
  password: ''
})

const onLogin = () => {
  Login(loginForm.value.username, MD5(loginForm.value.password))
  .then((res) => {
    if (res.data.id) {
      store.setUserInfo(res.data)
    }
  })
  .catch((err) => {
    console.log(err);
  })
}
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: #21D4FD;
  background-image: linear-gradient(270deg, #21D4FD 0%, #B721FF 100%);

  :deep(.login-box) {
    width: 500px;
    .el-form-item__label {
      color: #fff;
    }
    .login-btn {
      margin: 0 auto;
      width: 150px;
      height: 40px;
      background-color: #B721FF;
      text-align: center;
      line-height: 40px;
      border-radius: 10px;
      font-size: 20px;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>