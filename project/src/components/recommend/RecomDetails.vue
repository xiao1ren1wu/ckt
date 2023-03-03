<template>
  <section class="recommend-details">
    <h3>{{ title }}</h3>
    <section class="recommend-details-content">
      <router-link
       :to="{ path: '/pages/details', query: { id: item.designTemplateId } }"
        v-for="item in list"
        :key="item.designTemplateId"
        :class="lineType"
         v-long-pop="{ img: item.designTemplateImageUrl }"
      >
        <img v-lazy="item.designTemplateImageUrl" alt="" />
      </router-link>
    </section>
    <van-button round type="info" color="#f9fafd" @click="getList(++pageCount)">
      查看更多
    </van-button>
  </section>
</template>

<script>
import { recommendDetailsApi } from "../../tools/api";
export default {
  data() {
    return {
      pageCount: 1,
      list: [],
      popShow: false,
      that: this,
      src: "",
    };
  },
  computed: {
    lineType() {
      return this.typeId === 1693 ? "line-two" : "line-three";
    },
  },
  props: {
    title: {
      type: String,
    },
    id: {
      type: Number,
    },
    typeId: {
      type: Number,
    },
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      recommendDetailsApi({ id: this.id, pageCount: this.pageCount }).then(
        (result) => {
          this.list = this.list.concat(result.body.data.templates);
        }
      );
    },
  },
};
</script>

<style scoped>
.recommend-details {
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.recommend-details h3 {
  text-align: center;
  font-weight: 400;
  font-size: 1.4rem;
  margin: 2rem 0;
}
.recommend-details-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.recommend-details-content .line-two {
  width: 48.5%;
  margin: 5px 0;
}
.recommend-details-content .line-three {
  width: 31%;
  margin: 5px 0;
}
.recommend-details-content .line-two img,
.recommend-details-content .line-three img {
  width: 100%;
}
.recommend-details .van-button {
  color: rgba(0, 0, 0, 0.6) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11rem;
  height: 3rem;
  font-size: 1rem;
  border: 0.02133rem solid rgba(0, 0, 0, 0.03);
}
</style>