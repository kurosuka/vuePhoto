<!--
 * @Author: your name
 * @Date: 2020-12-21 10:00:20
 * @LastEditTime: 2020-12-22 16:18:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testfront\src\views\Login.vue
-->
<template>
  <div class="login">
    <el-container>
      <el-main>
        <el-form :model="loginForm" border>
          <el-form-item label="用户名" prop="">
            <el-input v-model="loginForm.userName" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="loginForm.pwd" placeholder="请输入" type="password"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-button type="danger" @click="register">注册</el-button>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import md5 from 'crypto-js/md5';

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        userName: '',
        pwd: '',
      },
    };
  },
  methods: {
    login() {
      const opt = {
        userName: this.loginForm.userName,
        pwd: md5(this.loginForm.pwd).toString(),
      };
      this.$axios({
        method: 'post',
        url: '/login',
        headers: { 'content-type': 'application/json; charset=utf-8' },
        data: JSON.stringify(opt),
      }).then((res) => {
        if (res.data.code === 200) {
          this.$router.push({ name: 'Home' });
        } else {
          console.log(res);
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    register() {
      this.$router.push({ name: 'Register' });
    },
  },
};
</script>

<style scoped>
  .login {
    width: 100%;
    height: 100%;
  }
  .el-container {
    width: 100%;
    height: 100%;
  }
  .el-main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-form {
    width: 400px;
    padding: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
</style>
