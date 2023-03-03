<template>
  <transition name="fade">
    <div class="go-top" @click="backTop" v-show="isShow">
      <van-icon name="arrow-up" size="2rem" />
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      timer: null,
      ele: this.$parent.$refs,
    };
  },

  methods: {
    backTop() {
      this.timer = setInterval(() => {
        this.ele.main.scrollTop -=
          (this.ele.main.scrollHeight - this.ele.main.scrollTop) / 25;
        if (this.ele.main.scrollTop == 0) {
          clearInterval(this.timer);
        }
      }, 16);
    },
    handleScroll() {
      if (this.ele.main) {
        if (this.ele.main.scrollTop > 600) {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    this.timer = null;
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.go-top {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  position: fixed;
  z-index: 5;
  background-color: #fff;
  right: 2rem;
  top: 31rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.go-top .van-icon {
  color: #0773fc;
}

.fade-enter {
  transform: scale(1);
}
.fade-enter-active {
  transform: scale(0.5);
  transition: all 0.3s;
}
.fade-enter-to {
  transform: scale(1);
}
</style>