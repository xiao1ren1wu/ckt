<template>
  <nav>
    <van-search
      v-model="search"
      placeholder="200000+免费模板任你搜索"
      @search="onSearch"
      shape="round"
    />
    <router-link to="/">取消</router-link>
  </nav>
</template>

<script>
import { searchApi } from "../../tools/api";
import { mapMutations } from "vuex";
export default {
  props:["kw"],
  data() {
    return {
      searchList: [],
      searchCounts: "",
    };
  },
  computed: {
    search: {
      get() {
        return this.$store.state.searchStore.searchText;
      },
      set(val) {
        this.getSearchText(val);
      },
    },
  },
  created() {
    this.search = this.kw;
  },
  methods: {
    ...mapMutations(["changeHistorySearchList", "getSearchText"]),
    onSearch(val) {
      this.changeHistorySearchList(val);
      this.search = "";
      this.$emit("searchsend", val);
      this.getList(val);
    },
    getList(keywords) {
      +searchApi(keywords).then((result) => {
        this.searchList = result.body.templates;
        this.searchCounts = result.body.totalCount;
      });
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
}
nav .van-search {
  width: 90%;
  border-radius: 5rem;
}
nav a {
  color: #000;
}
</style>