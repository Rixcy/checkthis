import Vuex from 'vuex'
import firebase, {auth, GoogleProvider, usersCollection} from '@/services/fireinit.js'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      darkMode: true,
      user: null,
      userProfile: null
    }),
    mutations: {
      setDarkMode(state, payload) {
        state.darkMode = payload;
      },
      setUser(state, payload) {
        state.user = payload
      },
      setUserProfile(state, payload) {
        console.log(payload)
        state.userProfile = payload
      }
    },
    actions: {
      signInWithEmail ({commit, dispatch}, payload) {
        return new Promise((resolve, reject) => {
          auth.signInWithEmailAndPassword(
            payload.email,
            payload.password
          ).then(data => {
            commit('setUser', data.user)
            dispatch('fetchUserProfile')
            resolve()
          }).catch((err) => {
            reject(err)
          })
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
          auth.sendPasswordResetEmail(payload)
          resolve()
        })
      },

      fetchUserProfile ({ commit, state }) {
        usersCollection.doc(state.user.uid).get().then(res => {
          let data = res.data()
          commit('setUserProfile', data)
        }).catch(err => {
          console.log(err)
        })
      },

      signOut ({commit}) {
        auth.signOut().then(() => {
          commit('setUser', null)
          commit('setUserProfile', null)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  })
}
export default createStore
