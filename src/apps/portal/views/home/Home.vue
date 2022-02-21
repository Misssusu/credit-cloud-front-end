<template>
  <div>
    这是 Portal 模块的 Home 页面
    button: <button @click="show">show</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    show() {
      this.$router.push('/login')
    }
  }
}
</script>
