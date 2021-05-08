<template>
  <div class="login-container">
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
      class="card-box login-form">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="email">
        <span class="svg-container">
          <icon-svg icon-class="jiedianyoujian"></icon-svg>
        </span>
        <el-input name="email" type="text" v-model="loginForm.email" autoComplete="on" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <icon-svg icon-class="mima" ></icon-svg>
        </span>
        <el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
          placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { validateByEmail } from '@/utils/validate';

@Component
export default class Login extends Vue {
  loading = false;
  loginForm = {
    email: 'admin@gsafety.com',
    password: '123456'
  };
  loginRules = {
    email: [{ required: true, trigger: 'blur', validator: this.validateEmail }],
    password: [{ required: true, trigger: 'blur', validator: this.validatePass }]
  };

  public handleLogin() {
    const lForm: any = this.$refs.loginForm;
    lForm.validate((valid: any) => {
      if (valid) {
        this.loading = true;
        this.$store
          .dispatch('Login', this.loginForm)
          .then(() => {
            this.loading = false;
            this.$router.push({ path: '/' });
          })
          .catch(() => {
            this.loading = false;
          });
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
  public validateEmail(rule: any, value: any, callback: any) {
    if (!validateByEmail(value)) {
      callback(new Error('请输入正确的合法邮箱'));
    } else {
      callback();
    }
  }
  public validatePass(rule: any, value: any, callback: any) {
    if (value.length < 6) {
      callback(new Error('密码不能小于6位'));
    } else {
      callback();
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './login.scss';
</style>
