<template>
  <div id="sceneDetals">
    <header>
      <SearchNav></SearchNav>
    </header>
    <nav>
      <Scene :tagList="tagList" :id="id"></Scene>
    </nav>
  </div>
</template>

<script>
import SearchNav from "../components/search/SearchNav.vue";
import Scene from "../components/scene/Scene.vue";
import { sceneTag } from "../tools/api";
export default {
  data() {
    return {
      tagList: [{ name: "全部", tagId: this.id, thirdKindId: 216 }],
    };
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
  },
  components: {
    SearchNav,
    Scene,
  },
  created() {
    sceneTag(this.id).then((result) => {
      if (this.id == 34 || this.id == 4) {
        this.tagList = this.tagList.concat(
          result.body.secondKindInfo.repoTag.style
        );
      } else {
        this.tagList = this.tagList.concat(
          result.body.secondKindInfo.repoTag.use
        );
      }
    });
  },
};
</script>

<style scoped>
header {
  height: 4rem;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
}
nav {
  width: 100vw;
  margin-top: 4rem;
}
</style>