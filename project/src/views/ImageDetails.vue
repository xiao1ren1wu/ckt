<template>
  <div id="details" ref="main">
    <section class="details-image">
      <img :src="data.designTemplateImageUrl" alt="" />
    </section>
    <section class="details-context">
      <h2>{{ data.templateTitle }}</h2>
      <p class="details-context-title">{{ data.kindTitle }}</p>
      <p>
        图片编号为
        {{ data.designTemplateId }}
        ，该
        {{ data.kindTitle }}
        尺寸是
        {{ data.width }}
        * {{ data.height }} 。点击“立即使用”， 《{{ data.templateTitle }}》
        一键生成，在线编辑图片，简单托拉拽，秒出精美 {{ data.kindTitle }}。
      </p>
      <section class="btns-box">
        <router-link
          :to="{ name: 'Search', params: { kw: item } }"
          v-for="(item, index) in keywords"
          :key="index"
        >
          <van-button round type="info" color="#f3f4f9">
            {{ item }}
          </van-button>
        </router-link>
      </section>
      <h2>为你推荐</h2>
    </section>
    <section class="recommend-box">
      <router-link
        :to="{ path: '/pages/details', query: { id: item.designTemplateId } }"
        v-for="item in commendList"
        :key="item.designTemplateId"
      >
        <img :src="item.designTemplateImageUrl" alt="" />
      </router-link>
    </section>
    <GoTop></GoTop>
  </div>
</template>

<script>
import GoTop from "../components/goTop.vue";
import { detailApi } from "../tools/api";
export default {
  data() {
    return {
      data: {},
      keywords: "",
      commendList: [],
    };
  },
  watch: {
    "$route.query.id"(newValue) {
      this.getData(newValue);
    },
  },

  methods: {
    getData(id) {
      detailApi(id).then((result) => {
        this.data = result.body.currentTemplate;
        this.keywords = result.body.currentTemplate.keywords.split(" ");
        this.commendList = result.body.recommendedTemplates;
      });
    },
  },
  created() {
    this.getData(this.$route.query.id);
  },
  components: {
    GoTop,
  },
};
</script>

<style scoped>
#details {
  overflow-y: scroll;
  height: 100vh;
}
.details-image {
  width: 90%;
  margin: auto;
  background-color: #e3e6e9;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  padding: 30px 0;
}
.details-image img {
  width: 70%;
}
.details-context {
  box-sizing: border-box;
  padding: 0 15px;
}
.van-button {
  width: 6rem;
  margin: 5px;
}
.van-button__text {
  color: #000;
}
.details-context-title {
  font-size: 14px;
}
.recommend-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.recommend-box a {
  width: 47.5%;
}
.recommend-box section {
  width: 100;
}
.recommend-box img {
  width: 100%;
}
</style>