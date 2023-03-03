<template>
  <div class="scene-box" ref="main">
    <section class="top">
      <van-tabs
        color="#0773fc"
        swipe-threshold="8"
        style="width: 85vw"
        @click="send"
      >
        <van-tab
          v-for="item in tagList"
          :key="item.tagId"
          :title="item.name"
          :name="item.tagId"
        >
        </van-tab>
      </van-tabs>
      <van-icon
        name="arrow-down"
        size="20px"
        @click="toggle"
        :class="{ active: coverShow }"
      />
    </section>
    <!-- 一级按钮 -->
    <section class="tag-list">
      <van-button
        round
        type="primary"
        color="#f3f4f9"
        v-for="item in tagsArr"
        :key="item.id"
        :class="{ 'btn-active': item.name === now, btns: true }"
        @click="tagChange(0, item)"
      >
        {{ item.name }}
      </van-button>
      <!-- 二级按钮 -->
      <section class="tag-list-pop" v-show="tagIsShow">
        <van-button
          round
          type="primary"
          color="#f3f4f9"
          v-for="item in tagsArr2"
          :key="item.id"
          :class="{ 'btn-active': item.name === now2, btns: true }"
          @click="tagChange(1, item)"
        >
          {{ item.name }}
        </van-button>
      </section>
    </section>
    <section class="img-box">
      <router-link
        v-for="(item, index) in loadingList"
        :key="index"
        :to="{ path: '/pages/details', query: { id: item.designTemplateId } }"
        v-long-pop="{ img: item.designTemplateImageUrl }"
      >
        <img v-lazy="item.designTemplateThumbUrls[0]" />
      </router-link>
    </section>
    <div
      class="over-cover"
      @click="coverShow = false"
      v-show="coverShow"
      @touchmove.prevent
      @mousewheel.prevent
    >
      <section class="over-cover-box">
        <van-button
          round
          type="primary"
          color="#f3f4f9"
          v-for="item in tagList"
          :key="item.tagId"
          :class="{ 'tab-tag-btns': true, 'btn-active': nowName === item.name }"
          @click="send(item.tagId, item.name)"
        >
          {{ item.name }}
        </van-button>
      </section>
    </div>
    <GoTop></GoTop>
  </div>
</template>

<script>
import { sceneImg } from "../../tools/api";
import GoTop from "../goTop.vue";
export default {
  props: ["tagList", "id"],
  data() {
    return {
      activeNames: ["no"],
      list: [],
      loadingList: [],
      tagsArr: [
        { oneId: 0, name: "最热" },
        { oneId: 1, name: "最新" },
        { oneId: 2, name: "使用最多" },
        { oneId: 3, name: "最多收藏" },
        { oneId: 4, name: "筛选" },
      ],
      now: "最热",
      now2: "全部",
      tagsArr2: [
        { id: 0, name: "全部" },
        { id: 2, name: "免费" },
        { id: 3, name: "付费" },
      ],
      tagIsShow: false,
      coverShow: false,
      nowName: "全部",

      type: {
        code: 0,
        one: 0,
        two: 0,
        n: 1,
      },
      num: 10,
    };
  },
  components: {
    GoTop,
  },
  methods: {
    send(name, title) {
      this.nowName = title;
      this.coverShow = false;
      this.type.code = name;
    },
    toggle() {
      this.coverShow = !this.coverShow;
    },
    tagChange(i, item) {
      // 一级按钮的点击
      if (i == 0) {
        if (item.name === "筛选") {
          item.name = "收起";
          this.tagIsShow = true;
        } else if (item.name === "收起") {
          item.name = "筛选";
          this.tagIsShow = false;
        } else {
          this.now = item.name;
          this.type.one = item.oneId;
        }
        // 二级按钮的点击
      } else if (i == 1) {
        this.now2 = item.name;
        this.type.two = item.id;
      }
    },
    getScroll() {
      window.onscroll = () => {
        var c = document.documentElement.clientHeight;
        var sh = document.documentElement.scrollHeight;
        var st = document.documentElement.scrollTop;
        if (st + c >= sh - 10) {
          this.num += 10;
          this.loadingList = this.list.slice(0, this.num);
          if (this.loadingList.length % 50 == 0) {
            this.type.n++;
          }
        }
      };
    },
  },
  watch: {
    type: {
      deep: true,
      immediate: true,
      handler(newValue) {
        sceneImg({ ...newValue, id: this.id }).then((res) => {
          this.list = this.list.concat(res.body.templates);
          this.loadingList = this.list.slice(0, 10);
          this.getScroll();
        });
      },
    },
  },
};
</script>

<style scoped>
.scene-box {
  height: 100vh;
  overflow-y: scroll;
}
.top {
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 3000;
}
.top .van-icon {
  width: 5vw;
  transition: all 0.5s;
  vertical-align: top;
}
.active {
  transform: rotate(-180deg);
}
.van-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
}
.panel {
  height: 40%;
  width: 40%;
  background-color: #fff;
}
.img-box {
  margin: 10px 0;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.img-box a {
  width: 48%;
}
.img-box img {
  width: 100%;
}

.tag-list {
  margin-top: 10px;
  position: relative;
}
.btn-active {
  background-color: #0773fc !important;
  border-color: #0773fc !important;
}
.btn-active .van-button__text {
  color: #fff !important;
}
.tag-list .van-button {
  margin: 0 5px;
  padding: 0 15px;
}
.tag-list .van-button__text {
  color: #000;
}
.tag-list-pop {
  padding: 10px 0;
  position: absolute;
  top: 100%;
  background-color: #fff;
  width: 100%;
  display: flex;
}

.over-cover {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 18%;
  backdrop-filter: blur(6px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.over-cover-box {
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
}

.tab-tag-btns {
  width: 23%;
  margin: 5px 0;
}
.tab-tag-btns .van-button__text {
  color: #000;
}
</style>