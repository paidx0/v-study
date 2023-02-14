# 属性基础

在Vue组件中定义的属性数据，我们可以直接使用组件来调用，这 是因为Vue在组织数据时，任何定义的属性都会暴露在组件中。实际 上，这些属性数据是存储在组件的$data对象中的

~~~vue
<script>
export default {
  data(){
    return {
      count :0,
    }
  },
  methods:{
    demo(){
      console.log(this.count)
      console.log(this.$data.count)
      
    }
  }
}
</script>
~~~

# 计算属性

使用函数与使用计算属性的结果完全一致。事实上，计算属性是基于其所依赖的存储属性的值的变化而重新计算的，

计算完成后，其结果会被缓存，下次访问计算属性时，只要其所依赖的属性没有变化，其内的逻辑代码就不会重复执行。

而函数则不同，每次访问其都会重新执行函数内的逻辑代码得到的结果

~~~vue
<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    demo() {
      console.log(this.test)
      console.log(this.count)
      this.test = '大'
      console.log(this.test)
      console.log(this.count)
    }
  },
  computed: {
    type() {
      return this.count > 10 ? "大" : "小"
    },
    // 计算属性的赋值
    test: {
      get() {
        return this.count > 10 ? "大" : "小"
      },
      set(newValue) {
        this.count = newValue
      }
    }
  }
}
</script>
~~~

# 函数限流

设置每两秒最多响应一次的点击

~~~vue
<script>
let flag = false;
function f(callback, timeout) {
  if (!flag) {
    callback()
  } else {
    return
  }
  flag = true
  setTimeout(() => {
    flag = false
  }, timeout)
}

export default {
  methods: {
    click() {
      f(() => {
        console.log("HelloWorld")
      }, 2000)
    }
  },
}
</script>
~~~

