import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jokes: [],
    
  },
  mutations: {
    setJokes(state, jokes) {
      state.jokes = jokes
    }
  },
  actions: {

  },
  modules: {

  }
})


// this.$store.commit('setJokes', [
//   {
//     id: 1,
//     joke: 'Chuck Norris can hear sign language.',
//     categories: ['nerdy']
//   },
// ])


