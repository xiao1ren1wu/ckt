<template>
  <div class="recommend-list">
    <h3>{{ title }}</h3>
    <p>{{ themeDescribe }}</p>
    <i class="cri" :style="{ 'background-color': color }"></i>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    themeDescribe: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.recommend-list {
  background-color: #fff;
  border-radius: 10px;
  display: inline-block;
  width: 10rem;
  box-sizing: border-box;
  padding: 20px;
  margin: 0 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  position: relative;
  overflow: hidden;
}

.recommend-list p {
  font-size: 0.8rem;
  font-weight: 400;
}
.cri {
  position: absolute;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: blue;
  right: -2.5em;
  bottom: -2.5rem;
}
</style>