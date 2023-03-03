<template>
  <transition name="fade">
    <div
      class="cover"
      v-show="isShow"
      @click="isShow = false"
      @touchmove.prevent
      @mousewheel.prevent
    >
      <img :src="src" alt="" @click.stop class="poster" />
      <a href="#/pages/taruser" @click.stop="isShow = false">
        <img src="../../assets/heart.png" />
      </a>
    </div>
  </transition>
</template>

<script>
export default {
  name: "LongPop",
  data() {
    return {
      isShow: false,
      src: "",
    };
  },
};
</script>

<style scoped>
.cover {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  backdrop-filter: blur(6px);
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cover .poster {
  width: 50%;
}
.cover a {
  margin-top: 1rem;
  width: 5rem;
}
.cover a img {
  width: 100%;
}

.fade-enter,
.fade-leave-to {
  transform: scale(0);
}
.fade-enter-avtive,
.fade-leave-avtive {
  transform: scale(0.8);
  transition: all 1;
}
.fade-enter-to,
.fade-leave {
  transform: scale(1);
}
</style>