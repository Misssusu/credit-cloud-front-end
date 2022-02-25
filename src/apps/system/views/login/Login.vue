<template>
  <div class="login-wrapper">
    <div class="login-border">
      <div class="login-content">
        <div class="login-title">
          <span class="title"> 登录 </span>
          <span class="title_e"> User Login </span>
        </div>
        <el-form ref="formRef" :model="loginForm">
          <el-form-item>
            <el-input v-model="loginForm.username" placeholder="请输入手机号码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="loginForm.password"
              placeholder="请输入密码"
              :type="password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleLogin" size="large">登录</el-button>
          </el-form-item>
        </el-form>
        <div class="video-mc"></div>
        <video
          autoplay
          loop
          muted
          :id="videoItem.fileName"
          v-on:error="videoLoadError(videoItem)"
          src="/files/video2.mp4"
        ></video>
        <div class="video-mc-mode"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { getCaptcha, loginByUsername } from '@system/endpoint/api'

const router = useRouter()
const loginForm = reactive({
  //租户ID
  tenantId: '960604',
  //手机号码
  username: '',
  //密码
  password: '',
  //验证码的值
  code: '',
  //验证码的索引
  key: '',
  //预加载白色背景
  image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
})

const videoItem = reactive({
  status: true,
  fileName: 'v1',
  src: '/files/video2.mp4',
})
onMounted(() => {
  console.log('Component is mounted!')
})

const handleLogin = () => {
  console.log('submit!', loginForm)
  loginByUsername(loginForm).then(res => {
    console.log('res-----', res)
    router.push('/portal/index')
  })
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  width: 500px;
  height: 520px;
  box-shadow: 0px 2px 22px 0px rgba(0, 0, 0, 0.16);
  border-radius: 14px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-border {
    position: relative;
    align-items: center;
    display: flex;
    width: 500px;
    // height: 540px;
    height: 520px;
    background: #ffffff;
    box-shadow: 0px 2px 22px 0px rgba(0, 0, 0, 0.16);
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 14px;
  }
  .login-content {
    margin: 0px 50px;
    width: 100%;
    box-sizing: border-box;
    .login-title {
      width: 100%;
      height: 50px;
      margin-bottom: 32px;
      border-bottom: 1px solid #e9e9e9;
      .title {
        font-size: 24px;
        font-weight: bold;
        color: #333333;
      }
      .title_e {
        font-size: 13px;
        color: #bbbbbb;
      }
    }
    .login-code {
      .login-code-img {
        margin-top: 2px;
        width: 100px;
        height: 38px;
        background-color: #fdfdfd;
        border: 1px solid #f0f0f0;
        color: #333;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 5px;
        line-height: 38px;
        text-indent: 5px;
        text-align: center;
        cursor: pointer !important;
      }
    }
    :deep(.el-form-item__content) {
      width: 100%;
      button {
        width: 100%;
      }
    }
    .video-mc {
      position: fixed;
      right: 0px;
      bottom: 0px;
      min-width: 100%;
      min-height: 100%;
      height: auto;
      width: auto;
      background: rgba(255, 255, 255, 0.5);
      z-index: -10;
    }
    .video-mc-mode {
      position: fixed;
      right: 0px;
      bottom: 0px;
      min-width: 100%;
      min-height: 100%;
      height: auto;
      width: auto;
      background: #333;
      opacity: 0.2;
      z-index: -8;
    }
    video {
      position: fixed;
      right: 0px;
      bottom: 0px;
      min-width: 100%;
      min-height: 100%;
      height: auto;
      width: auto;
      z-index: -11;
    }
  }
}
</style>
