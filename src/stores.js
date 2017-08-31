export default {
  // 存储状态值
  state: {
    count: 0
  },
  // 状态值的改变方法,操作状态值
  // 提交mutations是更改Vuex状态的唯一方法
  mutations: {
    // 修改state，第一个参数就是state
    increment(state) {
      state.count++
    },
    // 提交载荷 Payload，第一个参数就是state，第二个参数是载荷。
    add(state, n) {
      state.count += n
    }
  },
  // actions用于处理异步事件，最后还是需要提交mutations来改变state
  actions: {
    // 这里使用context来提交mutations
    //increment (context)中的increment与context.commit('increment')中的increment是两个名字，两者无关，前者为自己定义的名字，也可以定义为别的，但后者则与mutations中的一致
    increment (context) {
      context.commit('increment')
    },
    //context.commit('increment')括号中的increment为上边mutations中的increment，意思为提交给mutations中的increment方法
    incrementAsync (context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    },
    incrementAsyncWithValue (context, value) {
      setTimeout(() => {
        context.commit('add', value)
      }, 1000)
    }
  },
  // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个参数
  getters: {
    done(state) {
      return state.count + 5;
    },
  }

}
