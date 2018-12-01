<template>
  <section class="container mx-auto">
    <div>
      <h1 class="title">checkthis</h1>
      <h2 class="subtitle">My kickass Nuxt.js project</h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['posts', 'comments', 'albums', 'photos', 'todos', 'users'])
  },
  async fetch ({ store, params }) {
    await axios.get('https://jsonplaceholder.typicode.com/posts').then(data => {
      store.commit('setPosts', data)
    })
    await axios.get('https://jsonplaceholder.typicode.com/comments').then(data => {
      store.commit('setComments', data)
    })
    await axios.get('https://jsonplaceholder.typicode.com/albums').then(data => {
      store.commit('setAlbums', data)
    })
    await axios.get('https://jsonplaceholder.typicode.com/photos').then(data => {
      store.commit('setPhotos', data)
    })
    await axios.get('https://jsonplaceholder.typicode.com/todos').then(data => {
      store.commit('setTodos', data)
    })
    await axios.get('https://jsonplaceholder.typicode.com/users').then(data => {
      store.commit('setUsers', data)
    })
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
