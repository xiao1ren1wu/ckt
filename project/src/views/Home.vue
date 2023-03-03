<template>
  <div id="home">
    <header>
      <!-- 顶部搜索框 -->
      <SearchNav></SearchNav>
    </header>
    <main>
      <!-- 轮播图 -->
      <section id="swiper">
        <Swiper></Swiper>
      </section>
      <!-- 热门专题 -->
      <section id="scene">
        <router-link
          :to="{
            path: '/pages/scenedetals',
            query: { id: item.designKindId },
          }"
          v-for="item in sceneList"
          :key="item.designKindId"
        >
          <Scene :title="item.name" :src="item.thumbUrl"></Scene>
        </router-link>
      </section>
      <!-- 推荐专题 -->
      <section id="recommend">
        <h2>推荐专题</h2>
        <section id="recommendList">
          <router-link
            v-for="(item, index) in recommendList"
            :key="item.id"
            :to="{ name: 'Everydetals', params: { index } }"
          >
            <Recommend
              :title="item.title"
              :themeDescribe="item.themeDescribe"
              :color="colorList[index]"
            >
            </Recommend>
          </router-link>
        </section>
      </section>
      <!-- 专题展示列表 -->
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" @load="onLoad">
          <section
            class="poster"
            v-for="(item, index) in showList"
            :key="index"
          >
            <TempShow
              :key="index"
              :title="item.name"
              :id="item.kindId"
            ></TempShow>
          </section>
        </van-list>
      </van-pull-refresh>
    </main>
  </div>
</template>

<script>
import SearchNav from "../components/search/SearchNav.vue";
import Swiper from "../components/home/Swiper.vue";
import { sceneIconListApi, recommendApi, showListApi } from "../tools/api";
import Scene from "../components/home/Scene.vue";
import Recommend from "../components/recommend/Recommend.vue";
import TempShow from "../components/home/TempShow.vue";
export default {
  data() {
    return {
      sceneList: [],
      recommendList: [],
      colorList: [
        "#ff406c",
        "#ffc11b",
        "#00cb47",
        "#c86efd",
        "#3ba9ff",
        "#ff406c",
      ],
      showList: [],

      num: 0,
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  components: {
    SearchNav,
    Swiper,
    Scene,
    Recommend,
    TempShow,
  },
  methods: {
    async getList(n) {
      let list = await showListApi({ page_no: n });
      this.showList = this.showList.concat(list.body.data.sceneDetail);
      console.log(this.showList);
      this.loading = false;
    },
    onLoad() {
      if (this.refreshing) {
        this.showList = [];
        this.refreshing = false;
      }
      this.getList(++this.num);
      if (this.num >= 4) {
        this.finished = true;
      }
    },
    onRefresh() {
      this.finished = false;
      this.loading = true;
      this.onLoad();
    },
  },
  mounted() {
    sceneIconListApi().then((result) => {
      this.sceneList = result.body.data.scene.splice(0, 8);
    });
    recommendApi().then((result) => {
      this.recommendList = result.body.data.themes;
    });
  },
};
</script>
<style scoped>
header {
  height: 4rem;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
}
#home {
  height: 100%;
  width: 100%;
}

main {
  margin-top: 4rem;
}

#swiper {
  margin: 10px 0;
  width: 100%;
}
#scene {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px 0;
}
#scene a {
  display: inline-flex;
  flex-direction: column;
  width: 18%;
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: #000;
}
#recommend {
  font-size: 14px;
  color: #000;
  font-weight: 600;
  box-sizing: border-box;
  padding: 20px;
}
#recommendList {
  padding: 10px 0;
  overflow-x: scroll;
  width: 100%;
  scrollbar-width: none;
  white-space: nowrap;
}
#recommendList a {
  color: #000;
}
#recommendList::-webkit-scrollbar {
  display: none;
}
.poster {
  box-sizing: border-box;
  padding: 0 20px;
}
</style>