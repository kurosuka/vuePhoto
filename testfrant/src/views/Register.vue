<!--
 * @Author: your name
 * @Date: 2020-12-21 13:31:08
 * @LastEditTime: 2020-12-22 15:21:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testfront\src\views\Register.vue
-->
<template>
  <div class="register">
    <el-container>
      <el-form :model="registerForm">
        <el-form-item label="用户名">
          <el-input v-model="registerForm.userName" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="registerForm.pwd" placeholder="请输入" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="registerForm.confirmPwd" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="sign">注册</el-button>
        </el-form-item>
      </el-form>
    </el-container>
  </div>
</template>

<script>
import md5 from 'crypto-js/md5';

export default {
  name: 'Register',
  data() {
    return {
      registerForm: {
        userName: '',
        pwd: '',
        confirmPwd: '',
      },
    };
  },
  methods: {
    sign() {
      const opt = {
        userName: this.registerForm.userName,
        pwd: md5(this.registerForm.pwd).toString(),
      };
      this.$axios({
        method: 'post',
        url: 'http://localhost:8082/login/register',
        headers: { 'content-type': 'application/json; charset=utf-8' },
        data: JSON.stringify(opt),
      }).then((res) => {
        console.log(res);
        if (res.data.code === 200) {
          this.$message({
            type: 'success',
            message: res.data.msg,
          });
          setTimeout(() => {
            this.$router.push({
              name: 'Login',
            });
          }, 1000);
        } else {
          this.$message({
            type: 'error',
            message: res.data.msg,
          });
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    goLogin() {
      this.$router({
        name: 'Login',
      });
    },
  },
};
</script>

<style scoped>
  .register {
    width: 100%;
    height: 100%;
  }
  .el-container {
    width: 100%;
    height: 100%;
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
