<template>
  <div>
    <main ref="main">
      <router-view></router-view>
      <GoTop></GoTop>
    </main>
    <footer>
      <Nav></Nav>
    </footer>
  </div>
</template>

<script>
import Nav from "../components/home/Nav.vue";
import GoTop from "../components/goTop.vue";

export default {
  components: {
    Nav,
    GoTop,
  },
};
</script>

<style scoped>
main {
  height: 88vh;
  width: 100%;
  overflow-y: scroll;
}
footer {
  width: 100%;
  height: 12vh;
  position: fixed;
  bottom: 0;
}
</style>