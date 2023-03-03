<template>
  <div class="list-box">
    <p class="list">
      <span class="icon" :style="{ 'background-color': color }">
        <van-icon :name="icon" size="2rem" color="#fff" />
      </span>
      <span>{{ title }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["title", "icon", "color"],
};
</script>

<style scoped>
.list-box{
    background-color: #fff;
}
.list {
  display: flex;
  margin-left: 2rem;
  align-items: center;
  padding: 0.5rem 0;
}
.icon {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
}

</style>