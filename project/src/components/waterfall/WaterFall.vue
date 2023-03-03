<template>
  <div>
    <waterfall :col="col" :data="data">
      <!--  @loadmore="loadmore"
          @scroll="scroll" -->
      <template>
        <div class="cell-item" v-for="item in data" :key="item.designTemplateId">
          <img :src="item.designTemplateThumbUrls[0]" alt="加载错误" />
        </div>
      </template>
    </waterfall>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      col: 2,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.item-body {
  margin: 9px;
  .item-desc {
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
  .item-footer {
    display: flex;
    justify-content: space-between;
    .footer-left {
      display: flex;
      align-items: center;
      font-family: SF Pro Display;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: rgba(0, 0, 0, 0.6);
      img {
        border-radius: 50%;
        width: 100%;
        margin-right: 4px;
      }
    }
    .like {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: SF Pro Display;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: rgba(0, 0, 0, 0.4);
      img {
        margin-right: 4px;
      }
    }
  }
}
.cell-item {
  width: 100%;
  margin-bottom: 6px;
  background: #ffffff;
  border: 2px solid #f0f0f0;
  border-radius: 6px;
  overflow: hidden;
  box-sizing: border-box;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
}
</style>

