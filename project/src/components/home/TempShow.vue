<template>
  <div id="tempShow">
    <section class="title">
      <h2>{{ title }}</h2>
      <router-link :to="{ path: '/pages/scenedetals', query: { id } }">
        进入场景
      </router-link>
    </section>
    <div class="show">
      <section
        v-for="(item, index) in showList"
        :key="index"
        :class="widthCount"
        v-long-pop="{ img: item.designTemplateImageUrl, callback }"
      >
        <router-link
          :to="{ path: '/pages/details', query: { id: item.designTemplateId } }"
        >
          <img v-lazy="item.designTemplateImageUrl" alt="" />
        </router-link>
        <section
          class="once-over"
          v-show="title === '手机海报' && index === 0 && coverShow"
        >
          <img src="../../assets/click.png" />
          <p>——长按预览——</p>
        </section>
      </section>
    </div>
    <div class="btns">
      <router-link :to="{ path: '/pages/scenedetals', query: { id } }">
        <van-button round type="info">更多</van-button>
      </router-link>
      <van-button round type="info" @click="getChange">换一批</van-button>
    </div>
  </div>
</template>

<script>
import { changeApi } from "../../tools/api";
export default {
  props: ["title", "id"],
  data() {
    return {
      that: this,
      timer: null,
      coverShow: true,
      count: 1,
      showList: [],
    };
  },
  computed: {
    widthCount() {
      if (this.title == "名片" || this.title == "横版海报") {
        return "two-line";
      } else {
        return "three-line";
      }
    },
  },
  methods: {
    getPop(src) {
      this.$pop(src);
    },
    getChange() {
      changeApi({ id: this.id, num: ++this.count }).then((result) => {
        this.showList = result.body.templates;
      });
    },
    callback() {
      this.coverShow = false;
    },
  },
  created() {
    this.getChange();
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}
.title h2 {
  font-size: 1.35rem;
}
.title a {
  color: #000;
  font-size: 0.8rem;
}
.show {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.two-line {
  position: relative;
  width: 47.5%;
}
.three-line {
  width: 32%;
  position: relative;
}
img {
  position: relative;
  width: 100%;
}
.btns {
  display: flex;
  margin: 10px 0;
  justify-content: space-between;
}
.btns .van-button {
  width: 10rem;
  background-color: #f3f4f9;
  border-color: #f3f4f9;
  color: #000;
  margin: 0 15px;
}

.once-over {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.once-over img {
  width: 2rem;
  animation: hand 1s infinite;
}
.once-over p {
  color: #fff;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}
.once-over p::before {
  content: "";
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  background-color: rgba(255, 255, 255, 0.65);
  z-index: 10;
  border-radius: 50%;
  top: 32%;
  left: 33%;
  animation: sca 1s infinite;
}
@keyframes sca {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes hand {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}
</style>