<template>
  <p v-html="data"></p>
</template>

<script>
import {marked} from "marked";

// 语法高亮
// let rendererMD = new marked.Renderer();
// const hljs = require('highlight.js')
// marked.setOptions({
//   renderer: rendererMD,
//   gfm: true,
//   tables: true,
//   breaks: false,
//   pedantic: false,
//   sanitize: false,
//   smartLists: true,
//   smartypants: false
// });
// marked.setOptions({
//   highlight: function (code) {
//     return hljs.hljs.highlightAuto(code).value;
//   }
// });

export default {
  props: ["content"],
  computed: {
    data() {
      return marked(this.content)
    }
  },
}
</script>

<style scoped>

</style>