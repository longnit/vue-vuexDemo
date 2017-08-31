<template>
  <div>
    获取state：{{ $store.state.count }} {{ getState }}
    <br>
    获取getter:{{ $store.getters.done }} {{ getGetter }}
    <br>
    提交mutations increment：
    <button @click="longIncrement">+1</button>
    <br>
    提交mutations add:
    <button @click="longAdd(5)">+5</button>
  </div>
</template>

<script>
  export default {
    //actions 响应在view上的用户输入导致的状态变化
    methods: {
      //这里边的方法名自己定义的，如longIncrement，与this.$store.commit('increment')括号中的名字无关，括号中的名字为store.js中mutation中的名字
      longIncrement () {
        // 逻辑为 state.count++，通过提交mutations的方式请求改变state，括号中的increment为store.js中mutations中的名字
        this.$store.commit('increment')
      },
      longAdd (num) {
        // 逻辑为 state.count += n
        this.$store.commit('add', num)
      }
    },
    computed: {
      // 代码获取state
      getState () {
        return this.$store.state.count
      },
      getGetter () {
        return this.$store.getters.done
      }
    }
  }
</script>
