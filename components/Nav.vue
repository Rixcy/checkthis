<template>
  <nav
    :class="[
      'flex',
      'flex-wrap',
      'items-center',
      'justify-between',
      'p-4',
      'shadow',
      'rounded-t-lg',
      'text-white',
      { 'bg-primary': !darkMode },
      { 'bg-blue-darker': darkMode }
  ]">
    <div class="sm:w-full md:w-1/4">
      <div class="flex items-center">
        <span
          class="flex items-center"
          style="cursor: pointer; user-select: none"
          @click="toggleDarkMode">
          <svg
            class="fill-current text-white h-full w-8 mr-2"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
              d="M402.4,195c0,0.2,0,0.5,0,0.8c0,0.3,0,0.6,0,0.9c0,0.4,0,0.7,0,1
    c0,0.3,0,0.6,0,0.9c0,0.2,0,0.4,0,0.6c0,0.4,0,0.8,0,1.3c-0.1,0.3-0.1,0.6,0,0.8c-0.1,0.2-0.1,0.5,0,0.7c-0.1,0.3-0.1,0.6-0.1,0.8
    c-1,20.5-5.8,39.5-14.4,56.9c-2,4-4.2,7.9-6.5,11.7c-1.4,2.1-2.8,4.1-4.1,6.2L272.4,439.5c-0.2,0.4-0.4,0.7-0.5,0.9
    c-0.6,0.8-1.2,1.7-1.9,2.5c-0.2,0.2-0.5,0.4-0.6,0.5l0.1,0.1l-12.7,19.7l-0.5-0.5l-14.6-22.4v-0.2L135.2,278.3
    c-1.6-2.2-3-4.4-4.4-6.6c-14.2-22.6-21.3-48.2-21.3-76.6c0-0.8,0-1.5,0-2.2c0.1-6.2,1.2-15.2,3.4-27l0.4-1.5
    c0.8-4.4,1.9-8.8,3.2-13.1c6.7-22.1,18.9-42,36.5-59.7c28.6-28.5,63-42.7,103.3-42.7v0.6l0.5-0.3v-0.4c8.4,0,16.6,0.6,24.5,1.9
    c-2.9,6.7-4.4,14-4.4,22c0,15.2,5.3,28.1,16,38.7c10.7,10.8,23.6,16.1,38.7,16.1c15.2,0,28.2-5.4,38.8-16.1c1.1-1.1,2.3-2.4,3.4-3.6
    c10.2,13.3,17.6,27.8,22.4,43.5c1.7,5.6,3.1,11.4,4.1,17.2c1.4,7.9,2.1,16.1,2.2,24.4C402.4,193.5,402.4,194.2,402.4,195z
    M222.3,155c-7.3,7.4-12.1,15.9-14.4,25.3c-4.4-2-9.2-3-14.4-3c-9.9,0-18.3,3.5-25.2,10.5c-6.9,7-10.3,15.3-10.3,25.1
    c0,9.9,3.4,18.3,10.3,25.2c7,7,15.4,10.5,25.2,10.5c0.4,0,0.7,0,0.9,0l135.6,0.1v-0.1c7.4,0,13.7-2.6,18.9-7.8
    c5.2-5.2,7.8-11.6,7.8-19c0-7.4-2.6-13.7-7.8-18.9c-5.1-5.2-11.4-7.8-18.9-7.8c-5.3,0-10,1.4-14.2,4.1c0.1-1.8,0.2-3.6,0.2-5.4
    c0-15.1-5.4-28.1-16.1-38.8c-10.6-10.6-23.6-15.9-38.7-15.9C245.9,139.1,233,144.4,222.3,155z"/>
          </svg>
        </span>
        <span class="font-semibold text-xl tracking-tight">checkthis.space</span>
      </div>
    </div>
    <div class="flex sm:w-full md:w-1/2 items-center justify-center">
      <nuxt-link
        :exact-active-class="darkMode ? 'bg-blue-dark' : 'bg-primary-light'"
        :class="[
          'mx-2',
          'p-6',
          'hover:shadow',
          { 'hover:bg-blue-dark': darkMode },
          { 'hover:bg-primary-light': !darkMode },
          'rounded-lg'
        ]"
        to="/"
        href="#"
        title="Home"><i class="fas fa-home text-white"/></nuxt-link>
      <a
        :class="[
          'mx-2',
          'p-6',
          'rounded-lg',
          'hover:shadow',
          { 'hover:bg-blue-dark': darkMode },
          { 'hover:bg-primary-light': !darkMode }
        ]"
        href="#"
        title="Users"><i class="fas fa-users text-grey-lighter"/></a>
      <nuxt-link
        :exact-active-class="darkMode ? 'bg-blue-dark' : 'bg-primary-light'"
        :class="[
          'mx-2',
          'p-6',
          'rounded-lg',
          'hover:shadow',
          { 'hover:bg-blue-dark': darkMode },
          { 'hover:bg-primary-light': !darkMode }
        ]"
        to="/elements"
        title="Elements"><i class="fas fa-th text-grey-lighter"/></nuxt-link>
      <a
        :class="[
          'mx-2',
          'p-6',
          'rounded-lg',
          'hover:shadow',
          { 'hover:bg-blue-dark': darkMode },
          { 'hover:bg-primary-light': !darkMode }
        ]"
        href="#"
        title="Settings"><i class="fas fa-cog text-grey-lighter"/></a>
    </div>
    <div class="flex sm:w-full md:w-1/4 items-center justify-end">
      <template v-if="userProfile">
        <span
          class="mr-4 text-sm font-semibold"
          @click="$store.dispatch('signOut')">{{ userProfile.name }}</span>
        <img
          :src="userProfile.avatar"
          class="mr-4 h-10 w-10 rounded-full">
        <!-- <i class="fas fa-user-circle text-5xl text-white mr-4"/> -->
        <a href="#"><i class="fas fa-angle-down text-grey"/></a>
      </template>
      <template v-else>
        <nuxt-link
          class="mr-4 text-sm font-semibold text-white hover:text-grey no-underline"
          to="login">
          Login
        </nuxt-link>
      </template>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Nav',
  data() {
    return {
      darkMode: this.$store.state.darkMode
    }
  },
  computed: mapState([
    'userProfile'
  ]),
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      this.$store.commit('setDarkMode', this.darkMode)
    }
  }
}
</script>
