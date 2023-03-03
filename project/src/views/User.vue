<template>
  <div id="user">
    <header>
      <section class="header-nav">
        <i class="user">
          <img src="../assets/user.png" alt="" />
        </i>
        <section class="context">
          <h2>登录/注册</h2>
          <span>登录后获取更多精美模板</span>
        </section>
        <i class="setting">
          <van-icon name="setting" color="#fff" size="2rem" />
        </i>
      </section>
      <section class="user-vip">
        <span class="user-vip-logo"><van-icon name="gem" color="#fff" /></span>
        <section class="user-vip-context">
          <h3>我的会员</h3>
          <p>会员畅享百万模板素材免费商用</p>
        </section>
        <van-button type="default" color="#cd9555">立即开通</van-button>
      </section>
    </header>

    <main>
      <section>
        <List
          :title="item.title"
          :icon="item.icon"
          :color="item.color"
          v-for="item in titleList"
          :key="item.id"
        ></List>
      </section>
    </main>
  </div>
</template>

<script>
import List from "../components/user/List.vue";
export default {
  data() {
    return {
      titleList: [
        { id: 0, title: "我的订单", icon: "balance-list", color: "#2c83ff" },
        { id: 1, title: "我的收藏", icon: "like", color: "#ff537a" },
        { id: 2, title: "联系客服", icon: "service", color: "#ffc11b" },
        { id: 3, title: "问题反馈", icon: "chat", color: "#00cb47" },
        { id: 4, title: "关于我们", icon: "friends", color: "#ff406c" },
      ],
    };
  },
  components: {
    List,
  },
};
</script>

<style scoped>
#user {
  background-color: #f3f4f9;
}
header {
  height: 30vh;
  box-sizing: border-box;
  padding: 10px;
  background-color: #282c3b;
  position: relative;
}
main {
  margin-top: 5vh;
}
.header-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3rem;
}
.header-nav .user {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}
.user img {
  width: 100%;
}
.context {
  display: flex;
  flex-direction: column;
  color: #fff;
}
.user-vip {
  position: absolute;
  width: 80vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f0d3a6;
  padding: 20px;
  border-radius: 10px;
  left: 50%;
  transform: translateX(-50%);
  bottom: -10%;
}
.user-vip-logo {
  background-color: #cd9555;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-vip-context h3 {
  font-size: 20px;
}
.user-vip-context p {
  font-size: 14px;
}
</style>