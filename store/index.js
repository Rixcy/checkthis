import Vuex from 'vuex'
import firebase, {auth, GoogleProvider} from '@/services/fireinit.js'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      darkMode: true,
      user: null
    }),
    getters: {
      activeUser: (state, getters) => {
        return state.user
      }
    },
    mutations: {
      setDarkMode(state, payload) {
        state.darkMode = payload;
      },
      setUser(state, payload) {
        state.user = payload
      }
    },
    actions: {
      autoSignIn ({commit}, payload) {
        commit('setUser', payload)
      },

      signInWithEmail ({commit}, payload) {
        return new Promise((resolve, reject) => {
          auth.signInWithEmailAndPassword(
            payload.email,
            payload.password
          )
        })
      },

      signInWithGoogle ({commit}) {
        return new Promise((resolve, reject) => {
          auth.signInWithRedirect(GoogleProvider)
          resolve()
        })
      },

      sendPasswordResetEmail ({commit}, payload) {
        return new Promise((resolve, reject) => {
          authsendPasswordResetEmail(payload.email)
        })
      },

      signOut ({commit}) {
        auth.signOut().then(() => {
          commit('setUser', null)
        }).catch(err => console.log(error))
      }
    }
  })
}
export default createStore
