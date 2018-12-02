<template>
  <div id="page-wrapper">
    <Header />
    <Banner />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Contact />
    <Footer/>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Banner,
    Section1,
    Section2,
    Section3,
    Section4,
    Contact,
    Footer,
  },
  computed: {
    ...mapState(["posts", "comments", "albums", "photos", "todos", "users"])
  },
  async fetch({ store, params }) {
    await axios.get("https://jsonplaceholder.typicode.com/posts").then(data => {
      store.commit("setPosts", data);
    });
    await axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(data => {
        store.commit("setComments", data);
      });
    await axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then(data => {
        store.commit("setAlbums", data);
      });
    await axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(data => {
        store.commit("setPhotos", data);
      });
    await axios.get("https://jsonplaceholder.typicode.com/todos").then(data => {
      store.commit("setTodos", data);
    });
    await axios.get("https://jsonplaceholder.typicode.com/users").then(data => {
      store.commit("setUsers", data);
    });
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
</style>
