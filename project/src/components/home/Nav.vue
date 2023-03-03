<template>
  <nav>
    <router-link
      v-for="item in iconLinkList"
      :key="item.id"
      :to="item.path"
      @click.native="iconLinkClickShowList = item.id"
      :class="{ active: iconLinkClickShowList === item.id }"
    >
      <van-icon :name="item.iconLink" size="1.5rem"/>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      iconLinkList: [
        {
          id: 0,
          path: "/pages/home",
          name: "Home",
          iconLink: "wap-home",
          title: "首页",
        },
        {
          id: 1,
          path: "/pages/design",
          name: "Design",
          iconLink: "diamond",
          title: "我的设计",
        },
        {
          id: 2,
          path: "/pages/user",
          name: "User",
          iconLink: "manager",
          title: "个人中心",
        },
      ],
      iconLinkClickShowList: 0,
    };
  },
};
</script>

<style scoped>
nav {
  display: flex;
  box-sizing: border-box;
  padding: 15px;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
}

nav a .van-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #d1d3d7;
}
nav a:nth-of-type(2){
  margin-left: 20px;
}
nav a span {
  color: #d1d3d7;
}
.active .van-icon {
  color: #000 !important;
}
.active span {
  color: #000 !important;
}
</style>