<template>
  <div>
    <van-swipe :autoplay="2000">
      <van-swipe-item v-for="(item, index) in swiperList" :key="index">
        <img  :src="item.designTemplateImageUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { swiperApi } from "../../tools/api";
export default {
  data() {
    return {
      swiperList: [],
    };
  },
  created() {
    swiperApi().then((result) => {
      this.swiperList = result.body.templates.splice(0, 4);
    });
  },
  methods: {
    onChange(index) {
      console.log(index);
    },
  },
};
</script>

<style scoped>
.van-swipe {
  width: 100%;
}
.van-swipe-item {
  width: 25%;
}
.van-swipe-item img {
  width: 100%;
}
</style>