<template>
  <section class="hot-keyword" v-hover="that" @click="selectTag">
    <i
      class="close"
      v-show="type === 'history' && isCloseShow"
      @click.stop="delTag"
    >
      <van-icon name="cross" />
    </i>
    <span>{{ keyword }}</span>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      that: this,
      timer: null,
      isCloseShow: false,
    };
  },
  props: {
    keyword: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    index: {
      type: Number,
    },
  },
  directives: {
    hover(e, obj) {
      e.ontouchstart = (event) => {
        event.stopPropagation();
        obj.value.that.timer = setTimeout(() => {
          obj.value.that.isCloseShow = true;
        }, 1200);
      };
      e.ontouchmove = () => {
        clearTimeout(obj.value.that.timer);
      };
      e.ontouchend = () => {
        clearTimeout(obj.value.that.timer);
      };
    },
  },
  methods: {
    ...mapMutations(["getSearchText", "deleteHistorySearchList"]),
    selectTag() {
      this.getSearchText(this.keyword);
    },
    delTag() {
      this.isCloseShow = false;
      this.deleteHistorySearchList(this.index);
    },
  },
};
</script>

<style scoped>
.hot-keyword {
  background-color: #f3f4f9;
  font-size: 14px;
  display: inline-block;
  padding: 8px 20px;
  margin: 6px;
  border-radius: 1rem;
  position: relative;
}

.hot-keyword .close {
  position: absolute;
  right: -0.225rem;
  top: -0.225rem;
  width: 0.9rem;
  height: 0.9rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}
.hot-keyword .close .van-icon {
  color: rgb(192, 192, 192);
}
.hot-keyword span {
  color: rgba(0, 0, 0, 0.6);
}
</style>