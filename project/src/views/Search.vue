<template>
  <div id="search">
    <nav>
      <SearchInput @searchsend="getChildList" :kw="kw"></SearchInput>
    </nav>
    <main>
      <section v-show="isShow">
        <p>热门搜索</p>
        <section>
          <Tag
            v-for="item in tagList"
            :key="item.keyword"
            :keyword="item.keyword"
            :type="'hot'"
            @click.native="getChildList(item.keyword)"
          ></Tag>
        </section>
      </section>
      <section v-show="searchTextArr.length && isShow">
        <p>历史搜索</p>
        <section>
          <Tag
            v-for="(item, index) in searchTextArr"
            :key="index"
            :keyword="item"
            :index="index"
            :type="'history'"
            @click.native="getChildList(item)"
          ></Tag>
        </section>
      </section>
      <section id="searchContext" v-show="!isShow">
        <section class="search-context-header">
          <van-tabs style="width: 90vw" color="#0773fc" @click="send">
            <van-tab
              v-for="item in typeList"
              :title="item.kindTitle"
              :name="item.kindId"
              :key="item.kindId"
            >
            </van-tab>
          </van-tabs>
        </section>
        <section class="search-context-nav">
          <span>{{ searchCounts }}个模板</span>
          <span class="search-context-nav-new">
            <span @click="changeType('最新')">最新</span>|
            <span @click="changeType('最热')">最热 </span>
          </span>
        </section>
        <section class="search-context-list">
          <router-link
            v-for="item in searchList"
            :key="item.designTemplateId"
            :to="{
              path: '/pages/details',
              query: { id: item.designTemplateId },
            }"
            v-long-pop="{ img: item.designTemplateThumbUrls[0] }"
          >
            <img v-lazy="item.designTemplateThumbUrls[0]" />
          </router-link>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
import SearchInput from "../components/search/SearchInput.vue";
import Tag from "../components/Tag.vue";
import { tagListApi, searchApi, searchTypeList } from "../tools/api";
import { mapState } from "vuex";
export default {
  data() {
    return {
      tagList: [],
      searchList: [],
      searchCounts: "",
      typeList: [{ kindTitle: "全部", kindId: 0 }],
      type: 0,
      kw: "",
      isShow: true,
    };
  },
  computed: mapState({
    searchTextArr: (state) => state.searchStore.searchTextArr,
  }),
  components: {
    SearchInput,
    Tag,
  },
  created() {
    tagListApi().then((result) => {
      this.tagList = result.body.data;
    });
    this.getTypeList();
  },
  methods: {
    changeType(val) {
      this.type = val === "最新" ? 0 : 1;
      this.getList(this.kw, this.type, 0);
    },
    send(name) {
      this.getList(this.kw, this.type, name);
    },
    getList(kw, type, id) {
      searchApi({ kw, type, id }).then((result) => {
        this.searchList = result.body.templates;
        this.searchCounts = result.body.totalCount;
        this.isShow = false;
      });
    },
    getChildList(val) {
      this.kw = val;
      this.getList(val, 0, 0);
    },
    getTypeList() {
      searchTypeList().then((result) => {
        this.typeList = this.typeList.concat(result.body.data.secondLabel);
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    if (from.name == "ImageDetails") {
      next((vm) => {
        vm.kw = to.params.kw;
        vm.getList(to.params.kw, 0, 0);
      });
    }
    next();
  },
};
</script>
<style scoped>
#search {
  width: 100vw;
}
.search-tag {
  width: 100%;
}
main {
  box-sizing: border-box;
  padding: 20px;
}
.search-context-nav {
  display: flex;
  justify-content: space-between;
}
.search-context-nav-new {
  font-size: 14px;
}
.search-context-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.search-context-list a {
  width: 48%;
}
.search-context-list img {
  width: 100%;
}
.search-context-header {
  margin: 10px 0;
}
</style>