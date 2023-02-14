<template>
  <el-container style="height: 100%">
    <el-aside width="200px" style="background-color: #f1f1f1">
      <div></div>
      <el-menu
          mode="vertical"
          background-color="#f1f1f1"
          text-color="#777777"
          active-text-color="#000000"
          :default-active="0"
          @select="selectItem"
      >
        <el-menu-item
            v-for="item in items"
            :index="item.index"
            :key="item.index"
        >
          <div id="text">{{ item.title }}</div>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-main>
      <markdown :content="content" class="mark"></markdown>
    </el-main>
  </el-container>
</template>

<script>
import fileManager from "@/utils/fileManager";
import markdown from "@/components/markdown.vue";

export default {
  props: ["items", "topic"],
  components: {
    markdown: markdown
  },
  mounted() {
    fileManager.getPostContent(this.topic, this.items[this.curIndex].title).then((resp) => {
      this.content = resp.data
    })
  },
  data() {
    return {
      curIndex: 0,
      content: "",
    }
  },
  methods: {
    selectItem(index) {
      this.curIndex = index
    }
  },
  watch: {
    curIndex: function (val) {
      fileManager.getPostContent(this.topic, this.items[val].title).then((resp) => {
        this.content = resp.data
      })
    },
    topic: function (val) {
      fileManager.getPostContent(val, this.items[this.curIndex].title).then((resp) => {
        this.content = resp.data
      })
    }
  },
};
</script>

<style scoped>
.el-menu-item.is-active {
  background-color: #ffffff !important;
}

.mark {
  transform: scale(0.85, 1);
}
</style>