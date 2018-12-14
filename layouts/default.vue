<template>
  <div
    :class="[
      'flex',
      'flex-col',
      'w-full',
      'fixed',
      'pin-l',
      'pin-y',
      { 'text-black' : !darkMode },
      { 'text-white' : darkMode }
  ]">
    <Nav/>
    <div class="px-4 pt-4 flex-1 overflow-y-scroll">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import { mapState } from 'vuex'

export default {
  components: {
    Nav
  },
  computed: mapState([
    'darkMode'
  ]),
  head () {
    return {
      bodyAttrs: {
        class: this.darkMode ? 'dark-mode bg-grey-darkest' : ''
      }
    }
  }
}
</script>

<style lang="scss">
/* Fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
