<template>
  <el-container id="container">
    <el-header style="width: 100%;height: 120px">
      <Header :items="navItems" v-on:selected="changeSelected"></Header>
    </el-header>

    <el-main>
      <Body :items="bodyItems" :topic="navItems[curTopicIndex].title"></Body>
    </el-main>

    <el-footer>
      <div id="footer">{{ desc }}</div>
    </el-footer>
  </el-container>
</template>

<script>
import header from "@/components/header.vue";
import body from "@/components/body.vue";
import fileManager from "@/utils/fileManager";

export default {
  components: {
    Body: body,
    Header: header,
  },
  data() {
    return {
      navItems: fileManager.getAllTopic().map((item, index) => {
        return {
          index: index,
          title: item,
        }
      }),
      desc: "vue学习笔记  @Paidx0",
      curTopicIndex: 0
    };
  },
  methods: {
    changeSelected(index) {
      this.curTopicIndex = index
    }
  },
  computed: {
    bodyItems() {
      return fileManager.getTopicFiles(this.curTopicIndex).map((item, index) => {
        return {
          index: index,
          title: item,
        }
      })
    }
  }
};
</script>

<style scoped>
#container {
  margin-left: 150px;
  margin-right: 150px;
  margin-top: 30px;
  height: 900px;
}

#footer {
  text-align: center;
  background-color: bisque;
  height: 40px;
  line-height: 40px;
  color: #717171;
}

</style>