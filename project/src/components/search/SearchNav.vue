<template>
  <router-link to="/pages/search" id="search">
    <van-icon name="search" size="20px" />
    <span>200000+免费模板任你搜索</span>
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
#search {
  width: 90%;
  height: 2.5rem;
  background-color: #f8f8fb;
  border-radius: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
#search span {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
  margin-left: 5px;
}
</style>