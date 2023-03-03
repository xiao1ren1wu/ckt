<template>
  <div id="TarUser">
    <section class="top-context">
      <van-field v-model="useranme" placeholder="请输入用户名" />
      <van-field v-model="password" placeholder="请输入密码" />
      <van-button round type="info">登录</van-button>
      <div>
        <p class="agree">登录即表示同意《账号服务协议》和《隐私协议》</p>
      </div>
      <p>
        <router-link to="/">立即注册</router-link> |
        <router-link to="/">返回首页</router-link>
      </p>
    </section>
    <section class="bottom-context">
      <img src="../assets/qq.png" alt="" />
      <p>QQ登录</p>
      <p>微信用户PC端绑定手机号后即可使用手机号登录</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useranme: "",
      password: "",
    };
  },
};
</script>

<style scoped>
#TarUser {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
}
.top-context {
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.top-context .van-field {
  margin: 2px 0;
}
.top-context .van-button {
  margin: 10px 0;
  width: 100%;
}
.top-context .agree {
  font-size: 14px;
}
.top-context p {
  margin: 10px 0;
}
.bottom-context {
  margin-top: 22vh;
  text-align: center;
}
.bottom-context img {
  width: 4rem;
  height: 4rem;
  margin-bottom: 10px;
}
.bottom-context p {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}
</style>