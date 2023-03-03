<template>
  <section class="pop-cover">
    <van-popup
      v-model="popShow"
      transition="fade"
      class="pop-level"
      overlay-class="cover"
    >
      <img :src="src" alt="" />
      <router-link to="/"><van-icon name="like-o" size="1.8rem" /></router-link>
    </van-popup>
  </section>
</template>

<script>
export default {
  props:["popShow"]
};
</script>

<style scoped>
.fade-enter,
.fade-leave-to {
  transform: scale(0) translate(-20rem, -20rem);
}
.fade-enter-avtive,
.fade-leave-avtive {
  transform: scale(1) translate(-20rem, -20rem);
  transition: all 1;
}
.fade-enter-to,
.fade-leave {
  transform: scale(1) translate(-7.4rem, -13.2rem);
}
.pop-level {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pop-level a {
  display: flex;
  background-color: #fff;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}
.pop-level .van-icon {
  color: red;
}
.pop-cover >>> .cover {
  backdrop-filter: blur(6px);
}
</style>