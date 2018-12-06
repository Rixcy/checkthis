<template>
  <div class="flex flex-col w-full fixed pin-l pin-y">
    <Nav/>
    <div class="px-4 pt-4 flex-1 overflow-y-scroll">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  components: {
    Nav
  }
}
</script>
