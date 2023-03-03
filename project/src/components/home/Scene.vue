<template>
  <section class="scene">
    <section>
      <img :src="src" alt="" />
    </section>
    <span>{{ title }}</span>
  </section>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.scene {
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
}
.scene section {
  width: 90%;
  height: 90%;
}
.scene section img {
  width: 100%;
}
.scene span {
  font-size: 0.85rem;
  white-space: nowrap;
}
</style>