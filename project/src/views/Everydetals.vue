<template>
  <div ref="main" id="everyDeatils">
    <section>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" @load="onLoad">
          <RecomDetails
            v-for="item in list"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :typeId="id"
          ></RecomDetails>
        </van-list>
      </van-pull-refresh>
      <GoTop></GoTop>
    </section>
  </div>
</template>

<script>
import RecomDetails from "../components/recommend/RecomDetails.vue";
import GoTop from "../components/goTop.vue";
import { recommendApi } from "../tools/api";
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      id: 0,
    };
  },
  components: {
    RecomDetails,
    GoTop,
  },
  computed: {
    index() {
      return this.$route.params.index | 0;
    },
  },
  methods: {
    getList() {
      recommendApi().then((result) => {
        this.list = result.body.data.themes[this.index].themeExtends;
        this.id = result.body.data.themes[this.index].id;
        this.loading = false;
      });
    },
    onLoad() {
      if (this.refreshing) {
        this.showList = [];
        this.refreshing = false;
      }
      this.getList();
      if (this.index >= this.list.length) {
        this.finished = true;
      }
    },
    onRefresh() {
      this.finished = false;
      this.loading = true;
      this.onLoad();
    },
  },
};
</script>

<style scoped>
#everyDeatils {
  height: 100vh;
  overflow-y: scroll;
}
</style>