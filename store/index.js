import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      darkMode: true
    }),
    mutations: {
      setDarkMode(state, payload) {
        state.darkMode = payload;
      }
    }
  })
}
export default createStore
