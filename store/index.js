import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      comments: [],
      albums: [],
      photos: [],
      todos: [],
      users: [],
    },
    mutations: {
      setPosts (state, val) {
        state.posts = val
      },
      setComments (state, val) {
        state.comments = val
      },
      setAlbums (state, val) {
        state.albums = val
      },
      setPhotos (state, val) {
        state.photos = val
      },
      setTodos (state, val) {
        state.todos = val
      },
      setUsers (state, val) {
        state.users = val
      },
    }
  })
}

export default createStore
